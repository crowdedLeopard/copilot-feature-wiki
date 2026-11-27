---
title: "OneDrive and SharePoint: respond to access requests in the Share dialog"
slug: "onedrive-respond-to-access-requests-directly-in-the-share-dialog"
roadmapId: 578856
topic: "modern-work"
products: ["OneDrive","SharePoint"]
summary: "Microsoft plans to show pending access requests in the web Share dialog so anyone who can share an item can approve or decline requests singly or in bulk, and message the requester before deciding. Target January CY2027. Check site sharing settings."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "The OneDrive service description lists sharing and collaboration features as available in all plan families and says OneDrive is included in Microsoft 365 and Office 365 plans and SharePoint plans. Nothing specific to this feature is published."
audiences: ["m365-admin","service-owner","end-user","change-adoption"]
tags: ["onedrive","sharepoint","sharing","oversharing","auditing","admin-controls","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 578856"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=578856"
    kind: "roadmap"
  - title: "Limit sharing in Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365/solutions/microsoft-365-limit-sharing"
    kind: "learn"
  - title: "Errors when you process a pending request"
    url: "https://learn.microsoft.com/troubleshoot/sharepoint/sharing-and-permissions/request-approval-failed"
    kind: "learn"
  - title: "Users without permissions to a SharePoint Online resource can't request access"
    url: "https://learn.microsoft.com/troubleshoot/sharepoint/sharing-and-permissions/request-access-to-resource"
    kind: "learn"
  - title: "OneDrive service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/onedrive-for-business-service-description"
    kind: "learn"
  - title: "Audit log activities"
    url: "https://learn.microsoft.com/purview/audit-log-activities"
    kind: "learn"
  - title: "Search the audit log"
    url: "https://learn.microsoft.com/purview/audit-search"
    kind: "learn"
  - title: "Searching audit records of access requests created, accepted and denied (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchange/search-unifiedauditlog"
    kind: "learn"
videos: []
related: ["m365-the-next-generation-of-file-and-folder-sharing","m365-expiration-for-access-on-sharing-main-links","sharepoint-entra-b2b-integration-for-external-sharing-in-onedrive-and-sharepoint","auditing","guest-access"]
controls:
  - governs: "Whether site members can share files and folders, or only site owners"
    scope: "site"
    ui:
      surface: "SharePoint site settings"
      path: "gear icon > Site permissions > Sharing settings > Change how members can share > Only site owners can share files, folders, and the site"
      docs: "https://learn.microsoft.com/microsoft-365/solutions/microsoft-365-limit-sharing"
    api: null
    note: "Not confirmed to govern the new dialog."
  - governs: "Whether people without access can request access to a site"
    scope: "site"
    ui:
      surface: "SharePoint site settings"
      path: "gear icon > Site permissions > Sharing settings > Change how members can share > Allow access requests"
      docs: "https://learn.microsoft.com/microsoft-365/solutions/microsoft-365-limit-sharing"
    api: null
    note: "Turning it off prevents non-members from requesting access. Microsoft's troubleshooting page says a site collection administrator must turn it on."
  - governs: "Tenant-wide switch for showing access requests in the Share dialog"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no setting for this feature at the time of writing (November 2026)."
  - governs: "Searching audit records of access requests created, accepted and denied"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog -StartDate <ExDateTime> -EndDate <ExDateTime> -Operations AccessRequestCreated,AccessRequestAccepted,AccessRequestDenied"
      docs: "https://learn.microsoft.com/powershell/module/exchange/search-unifiedauditlog"
    note: "Requires the Audit Logs or View-Only Audit Logs role. Run the cmdlet in Exchange Online PowerShell."
confidence: "medium"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-11-03T00:14:11"
changes:
  - date: "2026-11-27"
    note: "New briefing: access requests answered in the Share dialog, with the site sharing and access request settings and audit events that apply today."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 54 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-27"
    note: "Corrected: removed the Set-SPOSite call offered as the owners-only file and folder sharing equivalent, added AccessRequestCreated to the audit search command, and narrowed the guest request gap."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 51 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 51
  confirmed: 49
  unconfirmed: 0
  contradicted: 2
  attempts: 2
  hash: "f233d583653b0ca7c4744df4c1a2eaae"
---

## What's changing

Microsoft plans to let people review and answer access requests inside the Share dialog for a file, folder or library in OneDrive and SharePoint on the web. Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description.

According to the roadmap item, when someone requests access to an item, anyone who can share that item will see the pending requests in its Share dialog. From there they can choose the level of access to grant, approve or decline requests one at a time or in bulk, and message the requester before deciding. Requests for more access, such as edit rights for someone who can already view, appear alongside new requests.

The roadmap item is **In development**, with a General Availability target of **January CY2027**, on the Web platform, for Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. Microsoft has not stated whether the change arrives on by default or behind a setting.

## Why it matters

Today, Microsoft's troubleshooting guidance says that only site admins and members of a site's Owners group can process requests in a site's **Access Requests** list. The roadmap's wording, "anyone who can share it", suggests the people who see and act on requests could become everyone with sharing rights on the item, with a bulk-approve option. Where members can share, that moves grant decisions closer to the content and away from owners. Whether that is a gain or a risk depends on how each site's sharing settings are set.

Microsoft has not stated what happens on arrival. No source says existing access request settings change, so sites that have **Allow access requests** turned off should be expected to stay that way; plan on the dialog being the new place users answer requests, and tell owners and members before January 2027.

## Risk assessment

**Data exposure**
- Bulk approval in the dialog makes it quick to grant several requesters at once; the roadmap says the approver chooses the access level, so a hurried approval at edit level widens access to the item. Restricting sharing to site owners (controls table, first row) narrows who can share on a SharePoint site.
- Requests for more access (view to edit) are shown alongside new ones, so upgrades to edit can be granted from the same list.

**Security & identity**
- Microsoft has not said whether requests from guests appear in the dialog. Confirm before rollout in tenants that allow guest sharing.

**Autonomy & actions**
- No change: every grant is a person's decision in the dialog, as the roadmap describes it.

**Change & support**
- Owners used to the **Access Requests** list or emailed requests will find requests in a new place, and members who could share but never saw requests may start receiving them. Expect questions about who approved what; the audit log records accepted and denied requests (controls table, last row).

## Cost and licensing

The OneDrive service description lists **Sharing and collaboration features** as available in stand-alone, small business, enterprise, education, government and nonprofit plans, and says OneDrive is included in Microsoft 365 and Office 365 plans and in SharePoint plans. A feature inside the existing Share dialog falls under that entitlement; Microsoft has published no licence, add-on or meter specific to this feature.

Indirect costs are admin time to review site sharing settings and communication to site owners and members.

## Scope

- **Who**: per the roadmap, anyone who can share the file, folder or library that was requested.
- **Items**: files, folders and libraries in OneDrive and SharePoint.
- **Platforms**: Web, per the roadmap record.
- **Clouds**: Worldwide (Standard Multi-Tenant), GCC, GCC High, DoD.
- **Release**: General Availability, targeted for January CY2027; status In development.
- **Prerequisite**: access requests must be allowed on the site for people without access to be offered a way to request it, according to Microsoft's troubleshooting guidance.

## Governance guidance

### Before rollout
- Identify SharePoint sites where members can share files and folders, and decide which should be set to **Only site owners can share files, folders, and the site** so that requests stay with owners.
- Decide, per site, whether **Allow access requests** should stay on; turning it off stops non-members from requesting access.
- Brief site owners and members that requests will appear in the Share dialog, and that each approval sets the access level the requester gets.
- Agree with owners of sensitive sites when bulk approval is acceptable and when requests should be checked one at a time.

### At rollout
- Confirm in a test site that the dialog shows requests to the people you expect, given that site's sharing setting.
- Watch Message center for a notice on this item that states the default and any admin setting.

### After rollout
- Search the audit log for **AccessRequestAccepted** and **AccessRequestDenied** events on sensitive sites to see who is approving requests.
- Search for **WebRequestAccessModified** and **WebMembersCanShareModified** to catch changes to the site settings this briefing relies on.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether site members can share files and folders, or only site owners</strong><br><small>Site</small><br><small class="controls__note">Not confirmed to govern the new dialog.</small></td><td data-label="Admin UI"><strong>SharePoint site settings</strong><br>gear icon › Site permissions › Sharing settings › Change how members can share › Only site owners can share files, folders, and the site <a href="https://learn.microsoft.com/microsoft-365/solutions/microsoft-365-limit-sharing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether people without access can request access to a site</strong><br><small>Site</small><br><small class="controls__note">Turning it off prevents non-members from requesting access. Microsoft's troubleshooting page says a site collection administrator must turn it on.</small></td><td data-label="Admin UI"><strong>SharePoint site settings</strong><br>gear icon › Site permissions › Sharing settings › Change how members can share › Allow access requests <a href="https://learn.microsoft.com/microsoft-365/solutions/microsoft-365-limit-sharing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch for showing access requests in the Share dialog</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no setting for this feature at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Searching audit records of access requests created, accepted and denied</strong><br><small>Tenant</small><br><small class="controls__note">Requires the Audit Logs or View-Only Audit Logs role. Run the cmdlet in Exchange Online PowerShell.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog -StartDate &lt;ExDateTime&gt; -EndDate &lt;ExDateTime&gt; -Operations AccessRequestCreated,AccessRequestAccepted,AccessRequestDenied</code> <a href="https://learn.microsoft.com/powershell/module/exchange/search-unifiedauditlog" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The site sharing settings are set inside each site, not in the SharePoint admin center. Microsoft's troubleshooting page says a site collection administrator must turn access requests on.

With owners-only sharing on, the Limit sharing page says direct access and Specific people link sharing by site members goes to the site owner for approval. How the new dialog presents those approvals is not described.

Searching the audit log requires the Audit Logs or View-Only Audit Logs role.

## Open questions

- Will the Share dialog show requests by default, and will there be a tenant or site setting to turn the new experience off? Watch Message center for this roadmap item.
- Does "anyone who can share it" include site members and people with edit permission, or only those who can process the Access Requests list today?
- Are requests from guests shown in the dialog, and do external sharing settings and domain restrictions limit what can be approved there?
- Does the OneDrive owner get a setting equivalent to a site's **Allow access requests**, and where is it?
- Will messages sent to requesters from the dialog, and bulk approvals, be recorded as distinct audit events?

<!-- rationale
risk: Medium. The roadmap says anyone who can share an item will see its requests and can approve them in bulk, which may put grant decisions with more people than the site owners who process requests today; existing site sharing settings narrow who can share.
cost: Low. OneDrive sharing and collaboration features are listed for every plan in the OneDrive service description; the known cost is admin time and user communication. No licence specific to this feature is published.
impact: Medium. People who own or can share files, folders and libraries and receive access requests notice the new place to respond; requesters see faster answers. Others are unaffected.
-->

<!-- verifier-findings (2026-11-27, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].api; rendered controls table / absence: Microsoft has not documented automation for owners-only file, folder and site sharing. | Found: Only site owners can share files, folders, and the site. | MemberShareNone ... Set-Label -Identity 8faca7b8-8d20-48a3-8ea2-0f96310a848e -AdvancedSettings @{MembersCanShare="MemberShareNone"} | Fix: Replace controls[0].api with kind powershell, call 'Set-Label -Identity <label> -AdvancedSettings @{MembersCanShare="MemberShareNone"}', and docs https://learn.microsoft.com/purview/sensitivity-labels-teams-groups-sites. Qualify the row note: 'This automation configures a sensitivity label; site settings take effect when that label is applied to a container that supports sensitivity labels.' Cite that page and make the rendered automation cell match. Do not restore Set-SPOSite -DisableSharingForNonOwners as a file-and-folder equivalent. | Source: https://learn.microsoft.com/purview/sensitivity-labels-teams-groups-sites
- [contradicted, blocker] Why it matters; rationale: risk / role: Only site admins and members of a site's Owners group can process requests in the existing Access Requests list. | Found: For users who are members of the Owners group for the site, an another requirement is that the Owners group must have Full Control permissions to access the Access Requests list. | Fix: Replace the first sentence of Why it matters with 'Today, Microsoft's troubleshooting guidance says that only site admins and members of a site's Owners group can process requests in its Access Requests list; the Owners group must also have Full Control permissions to that list.' Preserve this qualification wherever current approver permissions are described. | Source: https://learn.microsoft.com/troubleshoot/sharepoint/sharing-and-permissions/request-approval-failed
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].note; rendered controls table / applicability: The owners-only sharing control is not confirmed to govern the new dialog. | Found: Site permissions can be restricted so that only site owners can share files and folders. In this case, direct access and Specific people link sharing by site members goes to site owner for approval. | Fix: Replace 'Not confirmed to govern the new dialog.' with 'Site permissions can be restricted so that only site owners can share files and folders; direct access and Specific people link sharing by site members goes to the site owner for approval.' Keep the separate open question about how the new dialog presents approvals. | Source: https://learn.microsoft.com/microsoft-365/solutions/microsoft-365-limit-sharing
- [supported, minor] Governance controls / admin-path: The sharing controls are configured inside each site, not in the SharePoint admin center. | Found: In the site, select the gear icon, and then select Site permissions. Under Sharing settings, select Change how members can share. | Fix: Narrow the sentence to 'The paths in the controls table configure the sharing settings inside each site.' Cite https://learn.microsoft.com/purview/sensitivity-labels-teams-groups-sites, which also describes equivalent sharing configuration using SharePoint admin center > Site permissions > Site Sharing > Change how members can share > Sharing permissions. | Source: https://learn.microsoft.com/microsoft-365/solutions/microsoft-365-limit-sharing
-->
