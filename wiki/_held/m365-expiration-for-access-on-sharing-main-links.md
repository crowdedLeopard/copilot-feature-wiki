---
title: "OneDrive and SharePoint: expiration for access on main sharing links"
slug: "m365-expiration-for-access-on-sharing-main-links"
roadmapId: 571399
topic: "modern-work"
products: ["OneDrive","SharePoint","Microsoft 365"]
summary: "Microsoft plans expiry dates for Anyone and People in your organization access on main sharing links, with admin policies for a maximum duration. Targeted February CY2027; review the controls, no action is required yet."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Android","Desktop","iOS","Mac","Mobile","Web"]
targetDate: "February CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published. The roadmap item and the Learn sharing settings page name no licence or meter for expiry on main links."
audiences: ["m365-admin","security","compliance","change-adoption"]
tags: ["sharing","sharing-limits","onedrive","sharepoint","oversharing","data-governance","policy","powershell","gcc","gcc-high","dod"]
sources:
  - title: "Manage sharing settings for SharePoint and OneDrive in Microsoft 365"
    url: "https://learn.microsoft.com/sharepoint/turn-external-sharing-on-or-off"
    kind: "learn"
  - title: "How shareable links work in OneDrive and SharePoint in Microsoft 365"
    url: "https://learn.microsoft.com/sharepoint/shareable-links-anyone-specific-people-organization"
    kind: "learn"
  - title: "Set-SPOTenant"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant"
    kind: "learn"
  - title: "Microsoft 365 Roadmap: Expiration for access on sharing main links"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=571399"
    kind: "roadmap"
videos: []
related: ["sharepoint-admin-center-data-access-governance-permission-report-for-a-given-group","purview-retention-last-accessed-sharepoint-onedrive","outlook-keep-folder-sharing-within-your-organization-s-policies"]
controls:
  - governs: "Maximum lifetime of Anyone links, for SharePoint sites and OneDrive"
    scope: "tenant"
    ui:
      surface: "SharePoint admin center"
      path: "Policies > Sharing"
      docs: "https://learn.microsoft.com/sharepoint/turn-external-sharing-on-or-off"
    api:
      kind: "powershell"
      call: "Set-SPOTenant -CoreAnyoneSharingLinkMaxExpirationInDays <1-730> -OneDriveAnyoneSharingLinkMaxExpirationInDays <1-730>"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant"
    note: "General control: Learn does not confirm it governs main-link expiry. The admin centre page documents a Link expiration setting under advanced settings for Anyone links. SharePoint admin role."
  - governs: "Maximum lifetime of organisation sharing links, for SharePoint sites and OneDrive"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-SPOTenant -CoreOrganizationSharingLinkMaxExpirationInDays <7-720> -OneDriveOrganizationSharingLinkMaxExpirationInDays <7-720>"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant"
    note: "General control: Learn does not confirm it governs main-link expiry. SharePoint Online administrator role. Admin centre setting not yet documented."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-11-04T23:59:50"
changes:
  - date: "2026-11-17"
    note: "New briefing: the roadmap plans expiry on main sharing links, with admin policies targeted for February CY2027; Learn has no page for it yet."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 50 statements not yet confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 61 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 61
  confirmed: 58
  unconfirmed: 1
  contradicted: 2
  attempts: 1
  hash: "6253500797f0f23af9262ca70caf2c5a"
---

## What's changing

Microsoft plans to let people set an expiration date on "Anyone" and "People in your organization" access through the main link to a file or folder in OneDrive and SharePoint. The roadmap item also says administrators will be able to set policies that require expiration and enforce a maximum access duration, with separate settings for OneDrive and SharePoint. Microsoft Learn calls the main link the *hero link*: each item has one, and users change who it works for and what they can do with it without creating a new URL.

The roadmap item says that when access expires, the main link remains and permissions granted directly to individuals are preserved. Microsoft Learn does not describe this feature yet, so what follows about how it behaves is the roadmap's description. Learn already documents a related control: an admin centre setting that requires **Anyone** links to expire after a maximum number of days. At the time of writing (November 2026), the Set-SPOTenant reference also lists maximum-expiration parameters for Anyone links and for organisation links, split between SharePoint sites and OneDrive. Learn does not say that these are the policies the roadmap item refers to.

The roadmap lists the item as In development, with a target of February CY2027, no preview date and General Availability as the release phase. It lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, and Android, Desktop, iOS, Mac, Mobile and Web. The date is Microsoft's target, not a commitment.

## Why it matters

Expiry on the main link would give administrators a way to limit how long a link keeps granting access, which is the usual route by which files stay shared after the work that needed them has finished. Learn notes that a link of the **Anyone** type can be forwarded and that anonymous use cannot be audited to a named user, and that a **People in your organization** link can be forwarded to other members of the directory, so a time limit narrows that exposure.

Microsoft has not stated what happens on arrival if nobody acts, and no source says existing links will change. Plan on today's behaviour continuing until you set a policy, and use the lead time to decide a maximum duration for each link type and for OneDrive versus SharePoint, because the roadmap says the settings are separate.

## Risk assessment

**Data exposure**
- Expiry limits how long a forwarded link keeps working. Learn says a user's effective access is the highest permission from any source (direct access, a group, the parent folder or site, the hero link or another link), so expiry of the main link does not by itself remove access granted another way. The roadmap says directly granted permissions are preserved.
- Extra links under **Other links** are separate from the hero link, and Learn says changing the hero link does not change or remove them. Whether main-link expiry policies also cover extra links is not stated.

**Security & identity**
- No new identity or sign-in mechanism is described. A **People in your organization** link works for people who sign in as members of the Microsoft 365 directory and can be forwarded to other members; the roadmap's expiry on that scope is the control that bounds this.

**Autonomy & actions**
- The roadmap describes no agent or automated action beyond access ending at the expiry date. Whether owners are warned before expiry, or can renew, is not stated.

**Change & support**
- Expect help-desk questions from recipients whose access lapses. For the existing Anyone-link setting, Learn says existing links keep their expiration if a new maximum is longer and take the new setting if it is shorter; whether main-link policies behave the same way is not stated, so confirm before communicating a cut-off to users.

## Cost and licensing

No licence, price or meter is published for this feature. The roadmap item names none, and the Learn page on managing sharing settings for SharePoint and OneDrive ("Manage sharing settings for SharePoint and OneDrive in Microsoft 365") gives admin roles and settings without naming a licence for link expiration. Not yet published: whether any plan or add-on is required.

The cost the sources do show is admin time: choosing maximum durations, setting them in OneDrive and SharePoint separately, and telling users that links will lapse.

## Scope

The roadmap lists OneDrive, SharePoint and Microsoft 365 as the products, and the Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD clouds. Platforms are Android, Desktop, iOS, Mac, Mobile and Web.

The roadmap says the user-facing expiry applies to **Anyone** and **People in your organization** access on the main link, and that administrator policies have separate settings for OneDrive and SharePoint. Learn says the organisation-level sharing settings are changed by a SharePoint Administrator, and the Set-SPOTenant cmdlet requires the SharePoint Online administrator role. The **Anyone** link option is available only if the external sharing setting is set to **Anyone**. Rollout mechanics and prerequisites for this feature are not stated.

## Governance guidance

### Before rollout
- Inventory which of your tenant's sharing settings allow **Anyone** links and what link type your teams use by default, in the SharePoint admin center (first row of the controls table).
- Decide a maximum duration for each link type and for OneDrive and SharePoint separately, then compare it with the values the existing Set-SPOTenant parameters accept (second row of the controls table).
- Draft user communication that explains that main-link access can lapse, and who to ask to restore it.

### At rollout
- Watch Message center and the roadmap item for the final behaviour, the default and any admin setting names before you set a policy.
- Apply a maximum duration only once Microsoft confirms that the setting or parameter you use governs main-link expiry; until then treat the existing **Anyone** link setting as a general control.
- Pilot the policy on OneDrive before SharePoint, or the reverse, since the roadmap says the two have separate settings.

### After rollout
- Check with a sample of users whether expired links led to access requests, and adjust the maximum accordingly.
- Re-read the Learn sharing settings page to see whether the admin centre path and PowerShell parameters for main-link expiry have been documented.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Maximum lifetime of Anyone links, for SharePoint sites and OneDrive</strong><br><small>Tenant</small><br><small class="controls__note">General control: Learn does not confirm it governs main-link expiry. The admin centre page documents a Link expiration setting under advanced settings for Anyone links. SharePoint admin role.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Policies › Sharing <a href="https://learn.microsoft.com/sharepoint/turn-external-sharing-on-or-off" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -CoreAnyoneSharingLinkMaxExpirationInDays &lt;1-730&gt; -OneDriveAnyoneSharingLinkMaxExpirationInDays &lt;1-730&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Maximum lifetime of organisation sharing links, for SharePoint sites and OneDrive</strong><br><small>Tenant</small><br><small class="controls__note">General control: Learn does not confirm it governs main-link expiry. SharePoint Online administrator role. Admin centre setting not yet documented.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -CoreOrganizationSharingLinkMaxExpirationInDays &lt;7-720&gt; -OneDriveOrganizationSharingLinkMaxExpirationInDays &lt;7-720&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Both rows are general sharing controls. At the time of writing (November 2026) Microsoft Learn does not say that they govern expiry on the main link, so confirm that before relying on them for this feature.

The Set-SPOTenant reference states that the cmdlet requires the SharePoint Online administrator role. For each parameter it gives the value range and says that setting 0 removes the expiration requirement. The reference also lists matching recommended-expiration parameters, which are not covered by the table.

The admin centre page documents an expiry setting for **Anyone** links only. Microsoft Learn documents no admin centre setting for expiry of organisation links at the time of writing (November 2026).

## Open questions

- Do the existing Set-SPOTenant maximum-expiration parameters for Anyone and organisation links govern the main link, or will Microsoft add new settings? Watch the roadmap item and the Set-SPOTenant reference.
- What is the default on arrival: is expiry off until an administrator sets a policy, or is a duration applied automatically? Watch Message center for a post on this item.
- Will a policy change shorten the expiry of existing main links, as the current **Anyone** link setting does when a new maximum is shorter?
- Will owners be notified before access expires and be able to renew it, and what do recipients see when a link has expired but remains?
- Is a licence or plan required for the administrator policies? Not yet published.

<!-- rationale
risk: Low. This is a new control, and no source says existing links or sharing behaviour change until an administrator sets a policy; the default is not stated.
cost: Low. The only cost the sources show is admin time to set and communicate a policy; the roadmap item and the Learn sharing settings page name no licence or meter.
impact: Medium. People who share files in OneDrive and SharePoint would see an expiry option, and recipients lose access when an enforced maximum duration passes.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters: first paragraph / behaviour: A link continuing to grant access is the usual route by which files stay shared after the work requiring sharing has finished. | Found: Searched: SharePoint OneDrive sharing links usual primary cause files remain shared after work finished oversharing. Read the returned Plan sharing and collaboration options excerpt and hero-link guidance; neither establishes this as the usual route. | Fix: Remove ', which is the usual route by which files stay shared after the work that needed them has finished' from the first sentence of Why it matters.
- [contradicted, blocker] rationale: impact; Risk assessment: Data exposure / consistency: The impact rationale says recipients lose access when the enforced maximum passes, while the body says main-link expiry does not remove access granted another way. | Found: recipients lose access when an enforced maximum duration passes. / expiry of the main link does not by itself remove access granted another way. The roadmap says directly granted permissions are preserved. | Fix: Replace the impact rationale with: 'Medium. People who share files in OneDrive and SharePoint would see an expiry option, and access granted through the main link expires when an enforced maximum duration passes; directly granted permissions are preserved.' This preserves the roadmap's distinction between main-link access and other access.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls / admin-path: SharePoint admin center > Policies > Sharing leads to the page containing the Anyone-link maximum-expiration setting. | Found: In the SharePoint admin center, expand Policies, and then select Sharing. ... Advanced settings for "Anyone" links ... Link expiration - You can require all Anyone links to expire, and specify the maximum number of days allowed. | Fix: Extend controls[0].ui.path and its rendered table entry to 'Policies > Sharing > Advanced settings for "Anyone" links > Link expiration', as documented at https://learn.microsoft.com/sharepoint/turn-external-sharing-on-or-off. | Source: https://learn.microsoft.com/sharepoint/turn-external-sharing-on-or-off
- [supported, minor] front matter: licensing.model; Cost and licensing; Open questions / licensing: Licensing is unknown because no license specific to main-link expiration has been published. | Found: OneDrive for work and school accounts is online storage space in the cloud that's provided for individual licensed users in an organization. ... OneDrive is included in Microsoft 365 and Office 365 plans, in SharePoint plans | Fix: Set licensing.model to 'included'. Replace the notes and the licensing paragraph with: 'SharePoint users need an assigned license that includes SharePoint. OneDrive is included in Microsoft 365 and Office 365 plans and SharePoint plans, or purchased standalone. Licensing specific to main-link expiration is not yet published.' Cite https://learn.microsoft.com/office365/servicedescriptions/sharepoint-online-service-description/sharepoint-online-service-description and https://learn.microsoft.com/office365/servicedescriptions/onedrive-for-business-service-description; retain the open question about feature-specific requirements. | Source: https://learn.microsoft.com/office365/servicedescriptions/onedrive-for-business-service-description
- [contradicted, minor] Governance guidance: Before rollout, first bullet / consistency: The checklist points to the first controls-table row for inventorying Anyone-link availability and default link types, but that row governs expiration instead. | Found: Inventory which of your tenant's sharing settings allow Anyone links and what link type your teams use by default ... (first row of the controls table). / Maximum lifetime of Anyone links, for SharePoint sites and OneDrive | Fix: Remove the first Before rollout bullet: its external-sharing and default-link-type controls have no corresponding table rows, and the first row covers expiration. Do not add rows as part of this correction.
-->
