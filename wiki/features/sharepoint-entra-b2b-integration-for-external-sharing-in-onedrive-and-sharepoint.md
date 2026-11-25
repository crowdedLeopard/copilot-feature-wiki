---
title: "OneDrive and SharePoint: external sharing moves to Microsoft Entra B2B guest accounts"
slug: "sharepoint-entra-b2b-integration-for-external-sharing-in-onedrive-and-sharepoint"
roadmapId: 557682
topic: "modern-work"
products: ["OneDrive","SharePoint"]
summary: "External sharing in OneDrive and SharePoint uses Microsoft Entra B2B guest accounts instead of SharePoint one-time passcodes. Guests without a matching account lose access to old Specific people links, so administrators should act."
status: "in-development"
releasePhase: ["General Availability","Preview","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "April CY2026"
previewDate: "May CY2026"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "consumption"
  notes: "Microsoft Entra External ID bills guest users by monthly active users (MAU) and links billing to an Azure subscription. The SharePoint integration page names no licence or meter of its own. No rate is quoted here; see Microsoft's External ID pricing page."
audiences: ["m365-admin","security","service-owner","change-adoption"]
tags: ["sharepoint","onedrive","sharing","guest-access","entra-id","authentication","identity","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap: SharePoint: Entra B2B integration for external sharing in OneDrive & SharePoint"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=557682"
    kind: "roadmap"
  - title: "SharePoint and OneDrive integration with Microsoft Entra B2B"
    url: "https://learn.microsoft.com/sharepoint/sharepoint-azureb2b-integration"
    kind: "learn"
  - title: "Frequently Asked Questions: Improvements to external sharing in OneDrive & SharePoint - Retiring SPO OTP & Transition to Microsoft Entra B2B"
    url: "https://learn.microsoft.com/sharepoint/faqs-odspintegrationwithentrab2b"
    kind: "learn"
  - title: "Secure external sharing recipient experience"
    url: "https://learn.microsoft.com/sharepoint/what-s-new-in-sharing-in-targeted-release"
    kind: "learn"
  - title: "Configure external collaboration settings for B2B in Microsoft Entra External ID"
    url: "https://learn.microsoft.com/entra/external-id/external-collaboration-settings-configure"
    kind: "learn"
  - title: "Add and manage B2B collaboration users in the Microsoft Entra admin center"
    url: "https://learn.microsoft.com/entra/external-id/add-users-administrator"
    kind: "learn"
  - title: "Microsoft Entra External ID pricing and billing overview"
    url: "https://learn.microsoft.com/entra/external-id/external-identities-pricing"
    kind: "learn"
  - title: "Report on file and folder sharing in a SharePoint site"
    url: "https://learn.microsoft.com/sharepoint/sharing-reports"
    kind: "learn"
  - title: "Update authorizationPolicy"
    url: "https://learn.microsoft.com/graph/api/authorizationpolicy-update"
    kind: "learn"
  - title: "Create invitation"
    url: "https://learn.microsoft.com/graph/api/invitation-post"
    kind: "learn"
  - title: "Set-SPOTenant"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant"
    kind: "learn"
videos: []
related: ["guest-access","conditional-access","m365-the-next-generation-of-file-and-folder-sharing","m365-expiration-for-access-on-sharing-main-links","microsoft-purview-data-loss-prevention-block-external-domain-user-action-in-dlp-for-sharep"]
controls:
  - governs: "Who in the organisation can invite external guests (applies to SharePoint and OneDrive sharing)"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > External Identities > External collaboration settings > Guest invite settings"
      docs: "https://learn.microsoft.com/entra/external-id/external-collaboration-settings-configure"
    api:
      kind: "graph"
      call: "PATCH /v1.0/policies/authorizationPolicy"
      docs: "https://learn.microsoft.com/graph/api/authorizationpolicy-update"
    note: "Request body sets allowInvitesFrom. The Entra setting prevails over SharePoint when it is more restrictive."
  - governs: "Creating a matching guest account in advance for an external user"
    scope: "user"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Microsoft Entra ID > Users > New user > Invite external user"
      docs: "https://learn.microsoft.com/entra/external-id/add-users-administrator"
    api:
      kind: "graph"
      call: "POST /v1.0/invitations"
      docs: "https://learn.microsoft.com/graph/api/invitation-post"
    note: "At least User Administrator in the portal. The portal sends an invitation email to the user."
  - governs: "SharePoint and OneDrive integration with Microsoft Entra B2B (legacy switch)"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-SPOTenant -EnableAzureADB2BIntegration $true"
      docs: "https://learn.microsoft.com/sharepoint/sharepoint-azureb2b-integration"
    note: "For commercial tenants Microsoft says the setting no longer controls sharing behaviour and the integration can't be disabled. Applies only where it still controls the integration."
confidence: "high"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2026-03-25T23:15:06"
changes:
  - date: "2026-11-25"
    note: "First briefing. Learn says Entra B2B was enabled for commercial tenants in May to July 2026 and SPO OTP retires from October 2026, while the roadmap still shows In development."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 60 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 60
  confirmed: 59
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "4ccbe95f6c97743ba633c77d290b2aca"
---

## What's changing

The roadmap item states that OneDrive and SharePoint will use Microsoft Entra B2B as the invitation and authentication method for external users, replacing the legacy SharePoint one-time passcode (SPO OTP) experience, and that external sharing will automatically create B2B guest accounts in your directory. The record lists the status In development, a target of April CY2026 and a preview of May CY2026, for Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, on the web.

Microsoft Learn describes the change as further along than the record. Its integration page says that between May and July 2026 Microsoft enabled the integration for new external sharing in commercial tenants, that the `EnableAzureADB2BIntegration` setting no longer controls sharing behaviour for those tenants, and that the integration can't be disabled. It also says that starting in October 2026 Microsoft will retire SharePoint Online OTP authentication for commercial tenants, while Microsoft Entra B2B email one-time passcode stays supported. The roadmap record and Learn differ on status; this briefing reports both.

The effect on existing shares is the part to plan for. When retirement reaches a tenant, external users need a matching Microsoft Entra B2B guest account to open previously shared **Specific people** links, and users without one get access denied. An administrator can create the guest account from the email address on the original link, or a user with sharing permissions can share or reshare at least one file, folder or site, which creates it. Microsoft's FAQ says retirement rolls out to commercial tenants during October 2026, tenants are selected automatically, and you can't choose the date. It says Anyone/Anonymous links are not affected.

## Why it matters

External collaborators become directory objects in your tenant. Microsoft's integration page says each invited person gets an account in the directory and is subject to Microsoft Entra ID access policies such as multifactor authentication, and that SharePoint and OneDrive sharing is subject to the Microsoft Entra organizational relationship settings. The page also says enabling the integration doesn't change your SharePoint sharing settings: a site with external sharing turned off stays off.

If nobody acts, the FAQ says commercial tenants can't opt out, so the retirement reaches the tenant regardless. Today is November 2026, after the October 2026 window Microsoft gives, so it may already have reached yours; Learn gives no indicator of when it does. The practical exposure is broken access for partners and the support calls that follow, plus the new Entra policies that now apply to external recipients.

## Risk assessment

**Data exposure**

- Previously shared **Specific people** links stop working for external users who lack a matching guest account, according to Microsoft's FAQ. The consequence is lost access, not wider access. Create the accounts first (controls table, row 2).
- Sharing settings are unchanged by the integration, so a site with external sharing turned off remains off. Anyone/Anonymous links are not affected by OTP retirement, per the FAQ.

**Security & identity**

- Each external recipient gets a guest account and is subject to Microsoft Entra ID access policies such as multifactor authentication. Microsoft's recipient-experience page lists Conditional Access control as "Yes" for guest accounts and "No" for ad hoc external recipients, so policies that did not reach OTP recipients can now reach them. Review them (see [Conditional Access](/concepts/conditional-access/) and [Guest access](/concepts/guest-access/)).
- Microsoft Entra organizational relationship settings such as **Members can invite** and **Guests can invite** apply to SharePoint and OneDrive sharing, and the Entra setting prevails when it is more restrictive. Sharing that worked before can therefore be blocked by an Entra guest invite setting (row 1).
- Custom SharePoint and OneDrive domain sharing restrictions are a separate setting; Microsoft's note says to decide whether to move them to the Microsoft Entra B2B Allow/Deny list, which also affects Teams and Microsoft 365 Groups.

**Autonomy & actions**

- The roadmap says guest accounts are created automatically when content is shared. That means any user with sharing permission can add a guest to the directory. Entra guest invite settings (row 1) are the documented limit on who can invite.

**Change & support**

- Expect access-denied reports from external users on old links. Microsoft's FAQ gives the fix (create the guest or reshare once) and says a duplicate guest is not created if one exists.
- The change applies at tenant level and can't be scoped to individual sites; Microsoft's FAQ says exceptions can't be made.

## Cost and licensing

The SharePoint integration page names no licence or meter for the integration. Guests it creates are Microsoft Entra B2B guests, and Microsoft's External ID pricing page says the monthly active users (MAU) billing model applies to all guest users, including external B2B collaboration guests in workforce tenants. MAU is the count of unique external users who authenticate within a calendar month. The page describes a free tier and points to the External ID pricing page for rates; this briefing quotes none.

The pricing page also says workforce tenants must be linked to an Azure subscription for proper billing and access to features (Microsoft Entra admin center > Entra ID > External Identities > Overview > Subscriptions > Linked subscriptions). Whether guests created by SharePoint sharing are counted any differently from other B2B guests is not stated on the SharePoint pages. Indirect cost is administrator time: running reports, creating guest accounts, reviewing Entra policies and answering partner support calls.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, on the web, with release phases General Availability, Preview and Targeted Release. Microsoft Learn's dates (enablement between May and July 2026, OTP retirement from October 2026) are stated for commercial tenants; the pages say nothing further about GCC, GCC High or DoD.

Who is affected: external users who use SharePoint OTP and lack a matching Entra B2B guest account in your directory, and anyone who shares with them. Anyone/Anonymous links are not affected. Roles: the integration page names SharePoint Administrator (or higher) for the PowerShell setting, and Entra's external collaboration settings need a role such as Global Administrator or External Identity Provider Administrator. The change applies at tenant level, not per site.

## Governance guidance

### Before rollout

- Ask site admins to run the external sharing report on key sites (Settings > Site usage > Shared with external users > Run report) and read the User E-mail column to list guests invited through SPO OTP who have no Entra B2B guest account yet.
- Check the Entra guest invite settings (controls table, row 1) against your SharePoint and OneDrive external sharing policy; the more restrictive one prevails.
- Decide whether custom SharePoint domain sharing restrictions should move to the Microsoft Entra B2B Allow/Deny list, remembering that list also affects Teams and Microsoft 365 Groups.

### At rollout

- Create guest accounts for the external users that matter, using the email address on the original sharing link (row 2); Microsoft's Entra page says an invitation email is sent automatically, so warn the partners first.
- Tell owners of externally shared sites that external users without a matching guest account get access denied on old **Specific people** links, and that resharing one item restores access.
- Skip `Set-SPOTenant -EnableAzureADB2BIntegration` on commercial tenants (row 3); Microsoft says it no longer controls sharing behaviour there.

### After rollout

- Use sharing audit records to assess impact, as the integration page suggests, and follow up on denied users.
- Review guest sign-in logs in your tenant; Microsoft's Entra page says a sign-in log is generated in the resource tenant for each B2B sign-in.
- Ask your Entra administrator to confirm the tenant is linked to an Azure subscription, so guest MAU billing is attributed correctly.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who in the organisation can invite external guests (applies to SharePoint and OneDrive sharing)</strong><br><small>Tenant</small><br><small class="controls__note">Request body sets allowInvitesFrom. The Entra setting prevails over SharePoint when it is more restrictive.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › External Identities › External collaboration settings › Guest invite settings <a href="https://learn.microsoft.com/entra/external-id/external-collaboration-settings-configure" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /v1.0/policies/authorizationPolicy</code> <a href="https://learn.microsoft.com/graph/api/authorizationpolicy-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Creating a matching guest account in advance for an external user</strong><br><small>User</small><br><small class="controls__note">At least User Administrator in the portal. The portal sends an invitation email to the user.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Microsoft Entra ID › Users › New user › Invite external user <a href="https://learn.microsoft.com/entra/external-id/add-users-administrator" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/invitations</code> <a href="https://learn.microsoft.com/graph/api/invitation-post" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>SharePoint and OneDrive integration with Microsoft Entra B2B (legacy switch)</strong><br><small>Tenant</small><br><small class="controls__note">For commercial tenants Microsoft says the setting no longer controls sharing behaviour and the integration can't be disabled. Applies only where it still controls the integration.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -EnableAzureADB2BIntegration $true</code> <a href="https://learn.microsoft.com/sharepoint/sharepoint-azureb2b-integration" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The Entra guest invite setting and the SharePoint and OneDrive sharing settings both apply, and the page says the Entra setting prevails when it is more restrictive. Row 1 changes who can invite for the whole directory, not just SharePoint, and Teams and Microsoft 365 Groups share it. In the portal it needs a role such as Global Administrator or External Identity Provider Administrator; for the Graph call Microsoft lists Privileged Role Administrator as the least privileged role. Row 2 needs at least User Administrator in the portal.

Row 3 is a legacy switch. Microsoft Learn documents no SharePoint admin center setting for the integration at the time of writing (November 2026), and for commercial tenants the parameter no longer controls the behaviour. Domain allow and block lists are under Entra ID > External Identities > External collaboration settings > Collaboration restrictions, which affects invitations to those domains tenant-wide. No control that lets a commercial tenant opt out of OTP retirement is documented; the FAQ says it can't be done.

## Open questions

- How do GCC, GCC High and DoD tenants, which the roadmap record lists, move to Entra B2B for external sharing? Learn's dates refer to commercial tenants. Watch the integration page and the roadmap item.
- When will the roadmap item's status move from In development, given that Learn says the integration is enabled in commercial tenants? Watch the roadmap record.
- How can an administrator tell that OTP retirement has reached their tenant? Learn says tenants are selected automatically but names no indicator; watch the FAQ page.
- Are guests created by SharePoint sharing counted as monthly active users in External ID billing in the same way as other B2B guests? The SharePoint pages name no licence or meter; watch the External ID pricing page.

<!-- rationale
risk: Medium. Once SharePoint OTP retirement reaches a commercial tenant, external users without a matching Microsoft Entra B2B guest account get access denied on previously shared Specific people links; administrators can create the accounts.
cost: Variable. Microsoft Entra External ID bills B2B guests by monthly active users (MAU); the SharePoint page names no licence of its own, and rates sit on Microsoft's External ID pricing page.
impact: Medium. External collaborators and the staff who share with them notice first; Microsoft's FAQ says commercial tenants cannot opt out, scope the change to sites or get exceptions.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing; Open questions: guest MAU counting / absence: The SharePoint pages do not separately state whether sharing-created guests are counted differently from other B2B guests. | Found: Searched: SharePoint OneDrive Entra B2B integration licensing meter guest MAU billing. Read the integration page and FAQ: neither discusses MAU. The External ID billing overview expressly covers all B2B collaboration guests in workforce tenants. | Fix: Remove the final Open questions bullet beginning 'Are guests created by SharePoint sharing counted as monthly active users'. The cited https://learn.microsoft.com/entra/external-id/external-identities-pricing already says the MAU model applies to all guest users, including B2B guests in workforce tenants; retain that established rule in Cost and licensing.
- [contradicted, minor] Governance guidance versus Governance controls table / consistency: Every control the governance checklist asks readers to review or use is represented in the controls table. | Found: Ask site admins to run the external sharing report ... Use sharing audit records ... Review guest sign-in logs ... confirm the tenant is linked to an Azure subscription. The table covers guest invite settings, guest creation and the legacy integration switch. | Fix: The checklist's external sharing report, domain restriction review, sharing audit records, guest sign-in logs and linked Azure subscription check have no corresponding controls-table rows. This is a checklist/table coverage gap, not an incorrect path or command.
-->
