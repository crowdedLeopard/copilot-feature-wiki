---
title: "Microsoft 365 admin center: dedicated License Requests page for Microsoft 365 Copilot"
slug: "m365-admin-center-new-dedicated-license-requests-page-in-m365-admin-center"
roadmapId: 561206
topic: "governance"
products: ["Microsoft 365 admin center"]
summary: "Microsoft 365 admin center gains a License Requests page where admins review and approve or deny users' Microsoft 365 Copilot licence requests. It is an admin page, so reviewers need to know where it is."
status: "launched"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "May CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "unknown"
  notes: "The release note names no licence for the page itself. Microsoft Copilot is available with Microsoft 365 E7 or as an add-on for eligible plans, per the Learn licence options page; no price or meter for this page is published."
audiences: ["m365-admin","finops"]
tags: ["m365-admin-center","admin-center","m365-copilot","licensing","license-requests"]
sources:
  - title: "Microsoft 365 Roadmap 561206"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=561206"
    kind: "roadmap"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "November 2026 announcements"
    url: "https://learn.microsoft.com/partner-center/announcements/2026-november"
    kind: "learn"
  - title: "Manage self-service license requests in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/commerce/licenses/manage-license-requests"
    kind: "learn"
  - title: "License options for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/copilot-license-options"
    kind: "learn"
  - title: "Manage self-service purchases and trials (for admins)"
    url: "https://learn.microsoft.com/microsoft-365/commerce/subscriptions/manage-self-service-purchases-admins"
    kind: "learn"
  - title: "Use AllowSelfServicePurchase for the MSCommerce PowerShell module"
    url: "https://learn.microsoft.com/microsoft-365/commerce/subscriptions/allowselfservicepurchase-powershell"
    kind: "learn"
  - title: "Copilot growth opportunities data in AI Business Solutions & Security Insights"
    url: "https://learn.microsoft.com/partner-center/insights/growth-opportunities-data/copilot"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Where admins review and approve or deny Microsoft 365 Copilot licence requests"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "License Requests"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    api: null
    note: "Path from the Copilot release notes. Learn names Global, license and user admins as able to manage Copilot licence requests; page-specific permissions and any tenant switch are not yet documented."
  - governs: "Today's licence request process for blocked self-service products (not confirmed as the new page)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Licenses > Requests"
      docs: "https://learn.microsoft.com/microsoft-365/commerce/licenses/manage-license-requests"
    api: null
    note: "Learn scopes it to self-service purchased products. Needs at least User Administrator or License Administrator; partners acting as Admin On Behalf Of (AOBO) a customer need Global Administrator. Not stated to be the new page."
  - governs: "Whether users can buy or start trials of a product themselves, per product"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org settings > Services > Self-service trials and purchases > product > Do not allow"
      docs: "https://learn.microsoft.com/microsoft-365/commerce/subscriptions/manage-self-service-purchases-admins"
    api:
      kind: "powershell"
      call: "Update-MSCommerceProductPolicy -PolicyId AllowSelfServicePurchase -ProductId <ProductID> -Value \"Disabled\""
      docs: "https://learn.microsoft.com/microsoft-365/commerce/subscriptions/allowselfservicepurchase-powershell"
    note: "Portal needs Global Administrator; the MSCommerce module needs Global or Billing Administrator. AOBO partners need Global Administrator for both. Per product; the page lists Microsoft Copilot."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-07-28T22:43:45"
changes:
  - date: "2026-11-22"
    note: "New briefing: the dedicated License Requests page for Microsoft 365 Copilot in the Microsoft 365 admin center, documented in the Copilot release notes."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 7 of 52 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Correction: added the roles Microsoft documents for Copilot licence requests and the partner (AOBO) Global Administrator requirement, fixed the cost rationale, removed claims the check could not support, and set action to prepare."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 55 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Correction: removed the clause saying no source says existing behaviour changes, since the release note describes changed request discovery."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 61 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 61
  confirmed: 61
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "c0e05b221e6723fb1ce6476418cac6a6"
---

## What's changing

The Microsoft 365 admin center has a new dedicated License Requests page, where admins can discover, review and manage Microsoft 365 Copilot licence requests that users submit. The roadmap item describes it as a page to help admins "more easily discover, review, and manage" those requests.

The Microsoft 365 Copilot release notes (the September 23, 2026 section, which covers updates released between August 26, 2026, and September 22, 2026) say the page "centralizes all Copilot license requests" and that admins previously had to locate requests through multiple menus or notifications. They also say it supports sorting, filtering and bulk actions, and that admins can approve or deny requests from it. The release note's steps are to select License Requests from the navigation menu and filter pending requests by user or date.

The roadmap record lists the item as Launched, with a target of May CY2026, release phases General Availability and Targeted Release, the Worldwide (Standard Multi-Tenant) cloud and the Web platform. The record's target month and the release-notes section date differ; both are given as published.

Microsoft Learn has no dedicated article for the page at the time of writing (November 2026), so what follows about its behaviour is the release note's description. An older, separate Learn article documents a Requests tab under Billing > Licenses for self-service licence requests; Microsoft has not said how the new page relates to it.

## Why it matters

Licence requests decide who gets Microsoft 365 Copilot, so the queue is where licensing, cost and access decisions meet. Microsoft's November 2026 partner announcement says that, in most organisations, Copilot Chat limit notifications include an upgrade option through which users can request a Microsoft 365 Copilot licence; admins can approve or deny it in the Microsoft 365 admin center. Requests that nobody reviews leave users waiting.

Microsoft has not stated whether the page is on by default or whether it needs any admin action. The practical step is to learn where the page is, who in your organisation can open it and who owns the queue.

## Risk assessment

**Data exposure**
- Microsoft has not described what the page shows beyond requests, filters by user and date and bulk actions. Treat the request list as user names and requested products, and confirm who can open it.

**Security & identity**
- Approving a request is a licensing decision. Microsoft documents Global admins, license admins and user admins as able to manage Microsoft 365 Copilot licence requests in the Microsoft 365 admin center; the release note does not give page-specific permissions. The existing Requests tab documents that its tasks need at least the User Administrator or License Administrator role, and that partners acting as Admin On Behalf Of (AOBO) a customer require Global Administrator.

**Autonomy & actions**
- No change: the release note describes admins approving or denying requests and describes no agent or automated action. The release note says bulk actions are supported, so decide who may use them before volume builds up.

**Change & support**
- Admins used to the Requests tab under Billing > Licenses may look in the wrong place, because Microsoft has not said whether that tab is retained. Tell the people who handle licensing where the new page is.

## Cost and licensing

No licence or meter is published for the License Requests page itself: the release note names none, and the Learn page for requests lists no price. Treat admin time as the only known cost of the page.

The licences being requested are Microsoft Copilot licences. The Learn licence options page says Microsoft Copilot is available with Microsoft 365 E7 or as an add-on for eligible commercial, US Government and education subscription plans, and tells admins to confirm eligibility in the Microsoft Product Terms before they purchase or assign licences. The release note speaks of Microsoft 365 Copilot and the Learn page of Microsoft Copilot; the page does not say whether they differ for this feature.

What an approval costs, and how an approved request becomes an assigned licence, is not yet published for this page.

## Scope

The roadmap record lists the Worldwide (Standard Multi-Tenant) cloud and the Web platform, with release phases General Availability and Targeted Release. GCC, GCC High and DoD are not listed on the record; that is a record fact, not a statement that they are excluded.

The page is for admins of the Microsoft 365 admin center. The release note covers requests for Microsoft 365 Copilot licences. Microsoft documents Global admins, license admins and user admins as able to manage these requests in the Microsoft 365 admin center; page-specific permissions, and whether a tenant switch exists, are not yet documented.

## Governance guidance

### Before rollout
- Ask licensing owners who currently reviews Microsoft 365 Copilot requests and where they look, using the Requests tab described in the row for today's request process.
- Check the self-service purchase setting for Microsoft Copilot, which Microsoft's announcement ties to the upgrade option users see.

### At rollout
- Open License Requests from the navigation menu in the Microsoft 365 admin center and confirm it appears for each admin who handles licences.
- Filter pending requests by user or date, as the release note describes, and agree who approves or denies them.
- Decide before use whether bulk actions are allowed, since the release note says the page supports them.

### After rollout
- Review the queue regularly so approved and denied decisions match your Copilot licence budget.
- Record which page your team uses, so the older Requests tab and the new page are not both treated as the queue.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Where admins review and approve or deny Microsoft 365 Copilot licence requests</strong><br><small>Tenant</small><br><small class="controls__note">Path from the Copilot release notes. Learn names Global, license and user admins as able to manage Copilot licence requests; page-specific permissions and any tenant switch are not yet documented.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>License Requests <a href="https://learn.microsoft.com/microsoft-365/copilot/release-notes" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Today's licence request process for blocked self-service products (not confirmed as the new page)</strong><br><small>Tenant</small><br><small class="controls__note">Learn scopes it to self-service purchased products. Needs at least User Administrator or License Administrator; partners acting as Admin On Behalf Of (AOBO) a customer need Global Administrator. Not stated to be the new page.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Licenses › Requests <a href="https://learn.microsoft.com/microsoft-365/commerce/licenses/manage-license-requests" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether users can buy or start trials of a product themselves, per product</strong><br><small>Tenant</small><br><small class="controls__note">Portal needs Global Administrator; the MSCommerce module needs Global or Billing Administrator. AOBO partners need Global Administrator for both. Per product; the page lists Microsoft Copilot.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › Services › Self-service trials and purchases › product › Do not allow <a href="https://learn.microsoft.com/microsoft-365/commerce/subscriptions/manage-self-service-purchases-admins" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-MSCommerceProductPolicy -PolicyId AllowSelfServicePurchase -ProductId &lt;ProductID&gt; -Value &quot;Disabled&quot;</code> <a href="https://learn.microsoft.com/microsoft-365/commerce/subscriptions/allowselfservicepurchase-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The roadmap item and release note document the page and its actions but no setting that turns it on or off, and no page-specific permissions. Microsoft documents Global admins, license admins and user admins as able to manage Microsoft 365 Copilot licence requests in the Microsoft 365 admin center. The first row therefore carries the path only. The second row is today's request process under Billing > Licenses, which the Learn page scopes to self-service purchased products and which Microsoft has not linked to the new page. Do not treat it as a control over the new page.

The third row is the self-service purchase setting. Microsoft's announcement says admins can turn off direct purchases for each product; the Learn page says that when a product is blocked, users can submit a licence request to the admin. It is a setting per product, not a switch for the new page.

## Open questions

- Does the License Requests page replace the Requests tab under Billing > Licenses, or do both stay? Watch the Learn page on self-service licence requests and Message center.
- Which page-specific permissions apply to opening and acting on the new page? Watch the Microsoft 365 admin center roles documentation.
- Is the page on for every tenant, and is there an admin switch? Watch the Copilot release notes and Message center.
- Is there an API or audit record for approving and denying requests from the page? Watch the Microsoft Graph and Purview audit documentation.

<!-- rationale
risk: Low. The release note describes an admin-facing page for reviewing and approving or denying requests; it names no new data access for users and no agent behaviour. Microsoft has not stated a default for it.
cost: Low. The only cost the sources show is admin time. The release note names no charge for the page, and Microsoft Copilot is available with Microsoft 365 E7 or as an add-on for eligible plans; any approval's licence cost is not published for this page.
impact: Low. Admins who handle licensing notice it. Microsoft has not said whether it changes anything users see.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; rendered table; What's changing; Governance guidance; Governance controls / admin-path: Billing > Licenses > Requests in the Microsoft 365 admin center reaches the existing self-service request process. | Found: select Billing > Licenses. On the Licenses page, select the Requests tab. Select the row that contains the request you want to review. Assign licenses to each user through the default Approve the selected license requests option. | Fix: For the all-users approval route, extend controls[1].ui.path to 'Billing > Licenses > Requests > request > Approve the selected license requests > Approve'. Add to its note: 'Select all user checkboxes before choosing Approve.' Keep the existing qualification that this process is not confirmed as the new page. Source: https://learn.microsoft.com/microsoft-365/commerce/licenses/manage-license-requests. | Source: https://learn.microsoft.com/microsoft-365/commerce/licenses/manage-license-requests
-->
