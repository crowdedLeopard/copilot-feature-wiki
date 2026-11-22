---
title: "Microsoft 365 admin center: dedicated License Requests page for Microsoft 365 Copilot"
slug: "m365-admin-center-new-dedicated-license-requests-page-in-m365-admin-center"
roadmapId: 561206
topic: "governance"
products: ["Microsoft 365 admin center"]
summary: "Microsoft 365 admin center gains a License Requests page where admins review and approve or deny users' Microsoft 365 Copilot licence requests. It is an admin page, so reviewers need to know where it is; nothing is configured."
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
action: "review"
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
    note: "Path from the Copilot release notes. The page's roles and any tenant switch are not yet documented."
  - governs: "Today's licence request process for blocked self-service products (not confirmed as the new page)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Licenses > Requests"
      docs: "https://learn.microsoft.com/microsoft-365/commerce/licenses/manage-license-requests"
    api: null
    note: "Learn scopes it to self-service purchased products. Needs at least User Administrator or License Administrator. Not stated to be the new page."
  - governs: "Whether users can buy or start trials of a product themselves, per product"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org settings > Services > Self-service trials and purchases"
      docs: "https://learn.microsoft.com/microsoft-365/commerce/subscriptions/manage-self-service-purchases-admins"
    api:
      kind: "powershell"
      call: "Update-MSCommerceProductPolicy -PolicyId AllowSelfServicePurchase -ProductId <ProductID> -Value \"Disabled\""
      docs: "https://learn.microsoft.com/microsoft-365/commerce/subscriptions/allowselfservicepurchase-powershell"
    note: "Portal needs Global Administrator; the MSCommerce module needs Global or Billing Administrator. Per product; the page lists Microsoft Copilot."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-07-28T22:43:45"
changes:
  - date: "2026-11-22"
    note: "New briefing: the dedicated License Requests page for Microsoft 365 Copilot in the Microsoft 365 admin center, documented in the Copilot release notes."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 7 of 52 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 52
  confirmed: 44
  unconfirmed: 1
  contradicted: 7
  attempts: 1
  hash: "4d34fe22fc0c9c87cb7685127f189e1a"
---

## What's changing

The Microsoft 365 admin center has a new dedicated License Requests page, where admins can discover, review and manage Microsoft 365 Copilot licence requests that users submit. The roadmap item describes it as a page to help admins "more easily discover, review, and manage" those requests.

The Microsoft 365 Copilot release notes (the September 23, 2026 section, which covers updates released between August 26, 2026, and September 22, 2026) say the page "centralizes all Copilot license requests" and that admins previously had to locate requests through multiple menus or notifications. They also say it supports sorting, filtering and bulk actions, and that admins can approve or deny requests from it. The release note's steps are to select License Requests from the navigation menu and filter pending requests by user or date.

The roadmap record lists the item as Launched, with a target of May CY2026, release phases General Availability and Targeted Release, the Worldwide (Standard Multi-Tenant) cloud and the Web platform. The record's target month and the release-notes section date differ; both are given as published.

Microsoft Learn has no dedicated article for the page at the time of writing (November 2026), so what follows about its behaviour is the release note's description. An older, separate Learn article documents a Requests tab under Billing > Licenses for self-service licence requests; Microsoft has not said how the new page relates to it.

## Why it matters

Licence requests decide who gets Microsoft 365 Copilot, so the queue is where licensing, cost and access decisions meet. Microsoft's November 2026 partner announcement says users who hit Copilot Chat limits can request a Microsoft 365 Copilot licence from their admin, who can approve or deny requests in the Microsoft 365 admin center. Requests that nobody reviews leave users waiting.

Microsoft has not stated whether the page is on by default or whether it needs any admin action, so no source says existing behaviour changes. The practical step is to learn where the page is, who in your organisation can open it and who owns the queue.

## Risk assessment

**Data exposure**
- Microsoft has not described what the page shows beyond requests, filters by user and date and bulk actions. Treat the request list as user names and requested products, and confirm who can open it.

**Security & identity**
- Approving a request is a licensing decision. The existing Requests tab documents that its tasks need at least the User Administrator or License Administrator role; the roles for the new page are not documented, so check who can reach it.

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

The page is for admins of the Microsoft 365 admin center. The release note covers requests for Microsoft 365 Copilot licences. Which admin roles can open the page, and whether a tenant switch exists, is not yet documented.

## Governance guidance

### Before rollout
- Ask licensing owners who currently reviews Microsoft 365 Copilot requests and where they look, using the Requests tab described in the row for today's request process.
- Check whether your organisation uses its own request process, which the Requests tab page documents as a message shown to users in place of requests.
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
<tr><td data-label="Control"><strong>Where admins review and approve or deny Microsoft 365 Copilot licence requests</strong><br><small>Tenant</small><br><small class="controls__note">Path from the Copilot release notes. The page's roles and any tenant switch are not yet documented.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>License Requests <a href="https://learn.microsoft.com/microsoft-365/copilot/release-notes" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Today's licence request process for blocked self-service products (not confirmed as the new page)</strong><br><small>Tenant</small><br><small class="controls__note">Learn scopes it to self-service purchased products. Needs at least User Administrator or License Administrator. Not stated to be the new page.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Licenses › Requests <a href="https://learn.microsoft.com/microsoft-365/commerce/licenses/manage-license-requests" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether users can buy or start trials of a product themselves, per product</strong><br><small>Tenant</small><br><small class="controls__note">Portal needs Global Administrator; the MSCommerce module needs Global or Billing Administrator. Per product; the page lists Microsoft Copilot.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › Services › Self-service trials and purchases <a href="https://learn.microsoft.com/microsoft-365/commerce/subscriptions/manage-self-service-purchases-admins" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-MSCommerceProductPolicy -PolicyId AllowSelfServicePurchase -ProductId &lt;ProductID&gt; -Value &quot;Disabled&quot;</code> <a href="https://learn.microsoft.com/microsoft-365/commerce/subscriptions/allowselfservicepurchase-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The roadmap item and release note document the page and its actions but no setting that turns it on or off, and no role for it. The first row therefore carries the path only. The second row is today's request process under Billing > Licenses, which the Learn page scopes to self-service purchased products and which Microsoft has not linked to the new page. Do not treat it as a control over the new page.

The third row is the self-service purchase setting. Microsoft's announcement says admins can turn off direct purchases for each product; the Learn page says that when a product is blocked, users can submit a licence request to the admin. It is a setting per product, not a switch for the new page.

## Open questions

- Does the License Requests page replace the Requests tab under Billing > Licenses, or do both stay? Watch the Learn page on self-service licence requests and Message center.
- Which admin roles can open and act on the new page? Watch the Microsoft 365 admin center roles documentation.
- Is the page on for every tenant, and is there an admin switch? Watch the Copilot release notes and Message center.
- Is there an API or audit record for approving and denying requests from the page? Watch the Microsoft Graph and Purview audit documentation.

<!-- rationale
risk: Low. The release note describes an admin-facing page for reviewing and approving or denying requests; it names no new data access for users and no agent behaviour. Microsoft has not stated a default for it.
cost: Low. The only cost the sources show is admin time. The release note names no charge for the page, and Microsoft Copilot licences themselves are bought separately; any approval's licence cost is not published for this page.
impact: Low. Admins who handle licensing notice it; users only meet it through the outcome of a request. Microsoft has not said whether it changes anything users see.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].note; Risk assessment: Security & identity / role: The existing Requests tab tasks require at least User Administrator or License Administrator, without a partner qualification. | Found: If you're a partner who's an Admin On Behalf Of (AOBO) a customer, you must have a role that's set to Global Administrator to complete the tasks in this article. | Fix: Add to both statements: 'Partners acting as Admin On Behalf Of (AOBO) a customer require Global Administrator.' Keep the User Administrator or License Administrator requirement for other administrators. | Source: https://learn.microsoft.com/microsoft-365/commerce/licenses/manage-license-requests
- [contradicted, blocker] controls[0].note; Risk assessment; Scope; Governance controls; Open questions / absence: Microsoft has not documented roles for managing the Copilot requests shown by the new page. | Found: Global admins, license admins, and user admins can manage these requests seamlessly in the Microsoft 365 Admin Center. | Fix: Replace the broad role gap with: 'Microsoft documents Global admins, license admins, and user admins as able to manage Microsoft 365 Copilot licence requests in the Microsoft 365 admin center; the release note does not give page-specific permissions.' Cite https://learn.microsoft.com/partner-center/insights/growth-opportunities-data/copilot. Narrow the open question to page-specific permissions. | Source: https://learn.microsoft.com/partner-center/insights/growth-opportunities-data/copilot
- [contradicted, blocker] controls[2].note / role: Changing MSCommerce product policies requires Global or Billing Administrator without a partner qualification. | Found: Partners who are Admins On Behalf Of (AOBO) a customer must have a role that's set to Global Administrator in order to manage and disable self-service purchases in the Microsoft 365 admin center and via PowerShell. | Fix: Add to controls[2].note: 'Partners acting as Admin On Behalf Of (AOBO) a customer require Global Administrator for PowerShell as well as the portal.' | Source: https://learn.microsoft.com/microsoft-365/commerce/subscriptions/allowselfservicepurchase-powershell
- [contradicted, blocker] summary; Why it matters / consistency: The summary assures readers that nothing is configured, while the body says Microsoft has not stated whether admin action is needed. | Found: summary: 'nothing is configured.' Why it matters: 'Microsoft has not stated whether the page is on by default or whether it needs any admin action' | Fix: Remove '; nothing is configured' from the summary. Keep the narrower statement that Microsoft has not stated the page's enablement requirements.
- [contradicted, blocker] rationale: cost; Cost and licensing / licensing: Microsoft Copilot licences themselves are bought separately. | Found: Microsoft Copilot is available with Microsoft 365 E7 or as an add-on for eligible commercial, US Government, and education subscription plans. | Fix: Replace 'Microsoft Copilot licences themselves are bought separately' in the cost rationale with 'Microsoft Copilot is available with Microsoft 365 E7 or as an add-on for eligible plans', matching the body and cited licence-options article. | Source: https://learn.microsoft.com/copilot/plan/copilot-license-options
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; What's changing; Risk assessment; Governance controls / admin-path: Today's self-service request review and approval process is reached through Billing > Licenses > Requests. | Found: On the Licenses page, select the Requests tab. Select the row that contains the request you want to review. | Fix: Keep the documented route, but add to controls[1].note: 'To act on a request, select its row, then use Approve the selected license requests and Approve, Approve x - Reject y, or Reject.' The path currently stops on the correct request-list page. | Source: https://learn.microsoft.com/microsoft-365/commerce/licenses/manage-license-requests
- [supported, minor] Why it matters / behaviour: Users who hit Copilot Chat limits can request a Microsoft 365 Copilot licence from an admin who can approve or deny it. | Found: In most organizations, the limit notification includes an option to upgrade. Users can select it to request a Microsoft 365 Copilot license from their admin, who can approve or deny requests in the Microsoft 365 admin center. | Fix: Replace the sentence with: 'Microsoft's November 2026 partner announcement says that, in most organisations, Copilot Chat limit notifications include an upgrade option through which users can request a Microsoft 365 Copilot licence; admins can approve or deny it in the Microsoft 365 admin center.' | Source: https://learn.microsoft.com/partner-center/announcements/2026-november
- [supported, minor] controls[2].ui / admin-path: The self-service purchase control is reached through Settings > Org settings > Services > Self-service trials and purchases. | Found: On the Services tab of the Org settings page, select Self-service trials and purchases. To manage the settings for a specific product, select the product name. | Fix: Extend controls[2].ui.path to 'Settings > Org settings > Services > Self-service trials and purchases > product > Do not allow' for blocking purchases and trials. The current route stops early on the correct page; the cited article supplies these remaining steps. | Source: https://learn.microsoft.com/microsoft-365/commerce/subscriptions/manage-self-service-purchases-admins
- [unsupported, minor] rationale: impact / behaviour: Users only encounter this page through the outcome of a request. | Found: Searched: "License Requests" "Copilot" audit data shows users product; "License Requests" "Copilot" "assigned" "approve". Read release notes and November announcements; they describe an admin page and user requests but do not state this exclusive user interaction. | Fix: Remove 'users only meet it through the outcome of a request' from the impact rationale. Retain 'Admins who handle licensing notice it.'
- [contradicted, minor] front matter: action / consistency: The action rating review treats an admin-page redesign as optional, although the described page change is already launched. | Found: action: 'review'; What's changing: 'The Microsoft 365 admin center has a new dedicated License Requests page'; SCHEMA: 'If the change arrives anyway, it is prepare: that includes a redesign or replacement of something users already have'. | Fix: Set action to 'prepare': this is an arriving admin-page change needing reviewer communication, not a capability whose existence depends on an admin opting in. Keep the low risk, cost and impact ratings.
- [contradicted, minor] Governance guidance: Before rollout; controls / consistency: The checklist asks admins to check their custom request-process setting, but the controls table has no row for that setting. | Found: Checklist: 'Check whether your organisation uses its own request process'; controls rows cover request review, today's request process list and self-service purchases, not the custom request-process setting. | Fix: Remove the checklist bullet 'Check whether your organisation uses its own request process, which the Requests tab page documents as a message shown to users in place of requests.' No additional control row is required for this correction.
-->
