---
kind: "concept"
title: "Teams Premium: who needs the add-on licence, and what does it unlock?"
slug: "teams-premium"
summary: "Teams Premium is a per-user add-on licence that unlocks advanced Teams meeting, calling and admin features. Administrators use it to decide which organisers, users and admins get those features, and what that costs."
created: "2026-11-26"
updated: "2026-11-26"
version: 1
tags: ["teams-premium","teams","licensing","meeting-controls","meeting-templates","teams-events","queues-app","cost-management","license-requests","m365-admin-center"]
covers: []
sources:
  - title: "Microsoft Teams Premium licensing"
    url: "https://learn.microsoft.com/microsoftteams/teams-add-on-licensing/licensing-enhance-teams"
    kind: "learn"
  - title: "Manage Teams Premium for your organization"
    url: "https://learn.microsoft.com/microsoftteams/teams-premium-dashboard"
    kind: "learn"
  - title: "Teams Premium feature usage report"
    url: "https://learn.microsoft.com/microsoftteams/teams-analytics-and-reports/teams-premium-usage-report"
    kind: "learn"
  - title: "Assign or unassign licenses for users in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "user: assignLicense"
    url: "https://learn.microsoft.com/graph/api/user-assignlicense?view=graph-rest-1.0"
    kind: "learn"
  - title: "group: assignLicense"
    url: "https://learn.microsoft.com/graph/api/group-assignlicense?view=graph-rest-1.0"
    kind: "learn"
  - title: "Manage self-service purchases and trials (for admins)"
    url: "https://learn.microsoft.com/microsoft-365/commerce/subscriptions/manage-self-service-purchases-admins"
    kind: "learn"
  - title: "Use AllowSelfServicePurchase for the MSCommerce PowerShell module"
    url: "https://learn.microsoft.com/microsoft-365/commerce/subscriptions/allowselfservicepurchase-powershell"
    kind: "learn"
  - title: "Microsoft Teams Premium"
    url: "https://www.microsoft.com/en-us/microsoft-teams/premium"
    kind: "docs"
related: ["meeting-policy","intelligent-recap","microsoft-teams-default-meeting-templates","microsoft-teams-advanced-collaboration-analytics-for-gcc","microsoft-teams-intelligent-call-recaps-in-queues-app","microsoft-teams-upload-custom-backgrounds-for-teams-events"]
controls:
  - governs: "Which users hold a Teams Premium licence"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "graph"
      call: "POST /v1.0/users/{id | userPrincipalName}/assignLicense"
      docs: "https://learn.microsoft.com/graph/api/user-assignlicense?view=graph-rest-1.0"
    note: "At least License Administrator or User Administrator. The request body sets addLicenses with the Teams Premium skuId. Assignment can take up to 24 hours."
  - governs: "Teams Premium licences assigned to users or groups by product"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Licenses > product > Assign licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "graph"
      call: "POST /v1.0/groups/{id}/assignLicense"
      docs: "https://learn.microsoft.com/graph/api/group-assignlicense?view=graph-rest-1.0"
    note: "Licences assigned to a group are assigned to all users in the group."
  - governs: "Whether users can start self-service trials or purchases of Teams Premium"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org settings > Services > Self-service trials and purchases > product"
      docs: "https://learn.microsoft.com/microsoft-365/commerce/subscriptions/manage-self-service-purchases-admins"
    api:
      kind: "powershell"
      call: "Update-MSCommerceProductPolicy -PolicyId AllowSelfServicePurchase -ProductId <ProductID> -Value \"Disabled\""
      docs: "https://learn.microsoft.com/microsoft-365/commerce/subscriptions/allowselfservicepurchase-powershell"
    note: "UI needs Global Administrator; PowerShell needs Global or Billing Administrator. Existing trials and purchases are not affected. Up to 72 hours to apply."
  - governs: "Approval of users' Teams Premium licence requests"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Teams Premium > Licenses > License requests"
      docs: "https://learn.microsoft.com/microsoftteams/teams-premium-dashboard"
    api: null
    note: "Approve or reject each request on this tab."
confidence: "high"
dependents: 8
changes:
  - date: "2026-11-26"
    note: "New concept page: how Teams Premium licensing works per feature and role, what it costs, and where licence assignment and self-service trials are controlled."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 9 of 91 statements contradicted, 0 unconfirmed; taken offline until corrected"
verification:
  status: "held"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 91
  confirmed: 82
  unconfirmed: 0
  contradicted: 9
  attempts: 1
  hash: "e99fedcf41a6e351b56b2c66ced175af"
---

## What it is

Teams Premium is an add-on licence for Microsoft Teams: a per-user subscription that unlocks a set of advanced meeting, calling and admin features on top of a user's existing Teams licence. It does not replace that licence. Microsoft states that users must hold both a Teams licence and a Teams Premium licence for the features to work.

### How the licence is checked

Teams checks each user's licence and meeting role feature by feature, so who needs the licence depends on the feature:

| Feature type | Who needs Teams Premium | Who benefits |
|---|---|---|
| Organiser-based (for example meeting templates, meeting themes, watermarking, who can record and transcribe, end-to-end encryption) | The meeting organiser | Attendees too, during the meeting |
| Attendee- or user-based (for example AI-generated notes and tasks, custom organisation backgrounds, the Queues app) | Each user | Only the licensed user |
| Admin-based (for example advanced collaboration analytics) | The Teams admin | Admins |

A delegate who creates meetings for a licensed organiser does not need a licence of their own for organiser-based features to work.

### Licence and configuration are separate steps

Assigning the licence makes a user eligible. Microsoft states that many Teams Premium features need an admin to configure them in the Teams admin center before users can use them, including end-to-end encryption, watermarks, sensitivity labels, organisation backgrounds and themes, and custom meeting templates. The **Teams Premium** dashboard in the Teams admin center brings licences, licence requests, usage reports and a feature advisor together; the feature advisor lists the features you must configure and, for each, the admin policy that controls it (see [Teams meeting policy](/concepts/meeting-policy/)).

Since 1 April 2026 some features that were previously only in Teams Premium are included with Teams Enterprise. Licences bought before that date keep everything they included until they expire.

## Why it matters

Teams Premium is how an organisation decides who gets the protected, branded and AI-assisted meeting features, and what it pays for them. Because organiser-based features reach every attendee during the meeting, licensing the people who run sensitive or large meetings (executives, event organisers, HR) covers those meetings without licensing the audience. Attendee-based features work the other way: each user who wants them needs a licence, and licensing attendees does nothing for organiser-based features in meetings an unlicensed colleague organises.

For many features the licence alone changes nothing a user sees until an admin configures the governing policy, so a tenant can pay for features nobody can use; the feature advisor marks these "Not enabled". The 1 April 2026 move of some features to Teams Enterprise also means older guidance may name Teams Premium for a feature that no longer needs it. Check the current comparison on the licensing page before buying for one feature.

## Cost and licensing

- **Licence:** Teams Premium is licensed per user as a subscription. Each user also needs an Office 365 or Microsoft 365 subscription and a Teams licence; for new customers the Teams licence is bought separately, but both are still required.
- **Price:** Microsoft's US product page lists Teams Premium at $10.00 user/month, paid yearly. Prices for other markets and agreements are not on that page.
- **Where it is sold:** through all Microsoft purchasing channels (EA, EAS, CSP, Web Direct and both MCA routes), to commercial, worldwide public sector, EDU, GCC, GCC High, DoD and non-profit tenants.
- **Further prerequisites:** the Queues app also requires a Teams Phone licence. Sensitivity labels for meetings are available only to Teams Premium users with Microsoft 365 E5, E5 Compliance, F5 Compliance or F5 Security + Compliance.
- **Tenant-wide requirement:** advanced collaboration analytics requires Teams Premium licences assigned to each user in the tenant, not just to the admins who read the reports.
- **Trials:** admins can start a 30-day discovery trial with 25 licences from the Teams Premium dashboard. Users can start a 60-day self-service trial from Teams; self-service trials are not available to Government or EDU customers.
- **Not Teams Rooms Pro:** Teams Rooms Pro licences are for Teams Rooms devices; Microsoft states the two licences don't overlap features.

## Risks and limits

- **Trial expiry has no grace period.** When trial licences expire, licensed users lose all Teams Premium functionality at once; uploaded templates and meeting backgrounds stay in the tenant but are greyed out and unusable until paid licences are reassigned.
- **Users can buy or trial it themselves.** Self-service purchase is allowed for new products by default. Admins can't assign or unassign licences on a subscription a user bought until they take it over, so licences can sit outside central assignment.
- **Blocking is not retroactive.** Changing the self-service setting does not affect existing trials or purchases, and the change can take up to 72 hours.
- **Assignment is not instant.** A Teams Premium licence assignment can take up to 24 hours to take effect.
- **Letting every licence lapse removes admin management.** Admins can manage Teams Premium features only while the tenant has at least one user with an active Teams Premium licence.
- **Analytics licensing scales with the tenant.** Buying for advanced collaboration analytics means licensing every user, which is a different budget from licensing organisers.
- **Usage reporting is limited.** The Teams Premium feature usage report is not available in GCC, GCC High or DoD, and its data can lag by up to four days.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold a Teams Premium licence</strong><br><small>User</small><br><small class="controls__note">At least License Administrator or User Administrator. The request body sets addLicenses with the Teams Premium skuId. Assignment can take up to 24 hours.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/users/{id | userPrincipalName}/assignLicense</code> <a href="https://learn.microsoft.com/graph/api/user-assignlicense?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Teams Premium licences assigned to users or groups by product</strong><br><small>Group</small><br><small class="controls__note">Licences assigned to a group are assigned to all users in the group.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Licenses › product › Assign licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/groups/{id}/assignLicense</code> <a href="https://learn.microsoft.com/graph/api/group-assignlicense?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users can start self-service trials or purchases of Teams Premium</strong><br><small>Tenant</small><br><small class="controls__note">UI needs Global Administrator; PowerShell needs Global or Billing Administrator. Existing trials and purchases are not affected. Up to 72 hours to apply.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › Services › Self-service trials and purchases › product <a href="https://learn.microsoft.com/microsoft-365/commerce/subscriptions/manage-self-service-purchases-admins" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-MSCommerceProductPolicy -PolicyId AllowSelfServicePurchase -ProductId &lt;ProductID&gt; -Value &quot;Disabled&quot;</code> <a href="https://learn.microsoft.com/microsoft-365/commerce/subscriptions/allowselfservicepurchase-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Approval of users' Teams Premium licence requests</strong><br><small>User</small><br><small class="controls__note">Approve or reject each request on this tab.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams Premium › Licenses › License requests <a href="https://learn.microsoft.com/microsoftteams/teams-premium-dashboard" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

- Assigning licences in the Microsoft 365 admin center needs at least the License Administrator or User Administrator role. Changing the self-service setting in the admin centre needs Global Administrator; through the MSCommerce module it needs the Global or Billing Administrator role.
- The MSCommerce product list names Teams Premium as "Teams Premium Introductory Pricing" (ProductId CFQ7TTC0RM8K), with trials without a payment method enabled.
- Licence assignment decides eligibility only. Each feature is switched on through its own admin policy; the **Feature advisor** tab on the Teams Premium dashboard names that policy and shows whether a feature is enabled for no, some or all Teams Premium users.
- The **Teams Premium feature usage** report (Teams admin center > Analytics & reports > Usage reports) counts users reached and meetings that used a Teams Premium feature. Viewing it needs global admin, global reader or Teams service admin.

## What to check

- Open the Teams Premium dashboard in the Teams admin center and compare licensed users with the Feature advisor status of each feature.
- Review the self-service trials and purchases setting for Teams Premium and choose Allow, Allow for trials only or Do not allow.
- Check the Licenses page in the Microsoft 365 admin center for Teams Premium trials and purchases users made themselves, and their end dates.
- Confirm that organisers of town halls, templated meetings and sensitive meetings hold the licence, since organiser-based features follow the organiser.
- Review pending Teams Premium licence requests on the dashboard's License requests tab.
- Count every user in the tenant before buying Teams Premium for advanced collaboration analytics.

## Open questions

- Which features moved from Teams Premium to Teams Enterprise on 1 April 2026, and does a tenant with pre-April Teams Premium licences see them listed under either licence in the admin centre?
- Does the MSCommerce product "Teams Premium Introductory Pricing" also govern the 60-day self-service trial users start from Teams?
- What happens to a Premium-only policy setting, such as watermarking, assigned to a user whose Teams Premium licence lapses?
- Is there a Microsoft Graph or PowerShell route for approving the licence requests shown on the Teams Premium dashboard?

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What it is: attendee-based table row; Why it matters / licensing: Each user wanting attendee-based features, including AI-generated notes and tasks, needs their own Teams Premium licence. | Found: You must assign a Teams Premium license or Microsoft Copilot license to your users. | Fix: Qualify the attendee-based table's 'Each user' cell with 'AI-generated notes and tasks also accept a Microsoft Copilot licence'. Replace 'each user who wants them needs a licence' with 'each user needs an appropriate licence for the feature; intelligent recap accepts Teams Premium or Microsoft Copilot'. Cite https://learn.microsoft.com/microsoftteams/intelligent-recap-calls-meetings . | Source: https://learn.microsoft.com/microsoftteams/intelligent-recap-calls-meetings
- [contradicted, blocker] Cost and licensing: Trials / licensing: Admins can start a 30-day discovery trial from the Teams Premium dashboard, without a stated prior-trial or paid-subscription restriction. | Found: The Teams Premium discovery trial isn’t available if you have a paid Teams Premium subscription or already used the trial. | Fix: Add to the discovery-trial sentence: 'The discovery trial is unavailable if the organisation has a paid Teams Premium subscription or has already used the trial.' | Source: https://learn.microsoft.com/microsoftteams/teams-premium-dashboard
- [contradicted, blocker] controls[2].note; Governance controls / role: Global or Billing Administrator suffices to change MSCommerce product policies, without a partner qualification. | Found: Partners who are Admins On Behalf Of (AOBO) a customer must have a role that's set to Global Administrator in order to manage and disable self-service purchases in the Microsoft 365 admin center and via PowerShell. | Fix: Add to controls[2].note, its rendered note and the role paragraph: 'Partners acting as Admin On Behalf Of a customer require Global Administrator for PowerShell as well.' | Source: https://learn.microsoft.com/microsoft-365/commerce/subscriptions/allowselfservicepurchase-powershell
- [contradicted, blocker] Governance controls: Licence assignment decides eligibility only / applicability: Each Teams Premium feature is switched on through its own admin policy. | Found: | Advanced collaboration analytics | No, contact support for assistance. | | Fix: Replace 'Each feature is switched on through its own admin policy' with 'Many Teams Premium features require admin configuration before users can access them'. Keep the following Feature advisor description limited to the features it lists. The overview documents features without an admin on/off control. | Source: https://learn.microsoft.com/microsoftteams/enhanced-teams-experience#protection-and-advanced-management
- [contradicted, blocker] What to check: Licenses page for self-service subscriptions and end dates / admin-path: The Microsoft 365 admin center Licenses page is the place to inspect users' self-service purchases and trials and their end dates. | Found: go to the Billing > Your products page. 2. Select the Self-service trials tab. 3. To view more details about a subscription, select one from the list. | Fix: Narrow the checklist bullet to 'Check the Licenses page in the Microsoft 365 admin center for Teams Premium self-service trial licences.' The licensing page supports that narrower check; the commerce page places subscription details, including expiration dates and purchases, under Billing > Your products. | Source: https://learn.microsoft.com/microsoft-365/commerce/subscriptions/manage-self-service-purchases-admins
- [contradicted, blocker] What to check: organisers of town halls / licensing: Town hall organisers should hold Teams Premium because the relevant event features follow their Premium licence. | Found: Teams Premium licenses purchased after April 2026 don't directly provide access to these capabilities. To access the full set of Teams events features, users must have a license from the Advanced event features category. | Fix: Remove 'town halls,' from the checklist bullet, leaving 'Confirm that organisers of templated meetings and sensitive meetings hold the licence, since organiser-based features follow the organiser.' Do not imply that a current Premium licence supplies town hall event entitlements. | Source: https://learn.microsoft.com/microsoftteams/events-licensing
- [contradicted, blocker] Open questions: which features moved on 1 April 2026 / absence: Which features moved from Teams Premium to Teams Enterprise on 1 April 2026 remains an open documentation question. | Found: we are bringing all town hall and webinar features that were previously only available with a Teams Premium license to Teams Enterprise | Fix: Remove the answered first half of the question. Retain only 'Does a tenant with pre-April Teams Premium licences see the transferred features listed under either licence in the admin centre?' Microsoft lists the transferred event features in its licensing-update blog and current event licensing tables. | Source: https://techcommunity.microsoft.com/blog/microsoftteamsblog/licensing-updates-extend-access-to-advanced-capabilities-in-microsoft-teams-and-/4488312
- [contradicted, blocker] Open questions: MSCommerce and the 60-day Teams trial / absence: Whether the Teams Premium MSCommerce product policy governs the self-service trial started in Teams is undocumented. | Found: When you use the AllowSelfServicePurchase policy, it controls both purchases and trials. For self-serve trials in Microsoft Teams, we recommended that you close and restart the app to ensure the change is reflected. | Fix: Remove this question. The Premium licensing page directs admins to this self-service policy for its Teams-started trial, the commerce page explicitly includes Teams self-service trials, and the MSCommerce product list identifies Teams Premium. | Source: https://learn.microsoft.com/microsoft-365/commerce/subscriptions/manage-self-service-purchases-admins
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What it is: feature table, attendee- or user-based row / behaviour: AI-generated notes and tasks are accessed by individual users rather than shared through an organiser's Premium licence. | Found: After the meeting or event ends, your users can access the following AI powered features for their meetings through the Recap tab in the Teams calendar and chat: - AI meeting notes - AI recommended tasks | Fix: Add the additional Microsoft pages relied on in this check to sources: https://learn.microsoft.com/microsoftteams/intelligent-recap-calls-meetings ; https://learn.microsoft.com/microsoftteams/events-licensing ; https://learn.microsoft.com/microsoftteams/plan-events ; https://learn.microsoft.com/microsoftteams/enhanced-teams-experience ; https://techcommunity.microsoft.com/blog/microsoftteamsblog/licensing-updates-extend-access-to-advanced-capabilities-in-microsoft-teams-and-/4488312 . | Source: https://learn.microsoft.com/microsoftteams/intelligent-recap-calls-meetings
- [supported, minor] What it is: Licence and configuration are separate steps / applicability: Sensitivity labels are among the features Microsoft lists as requiring Teams admin center configuration. | Found: Adding sensitivity labels. | Fix: Remove 'sensitivity labels' from the list described as configured in the Teams admin center. The more specific overview at https://learn.microsoft.com/microsoftteams/enhanced-teams-experience#protection-and-advanced-management says 'Use the Microsoft Purview portal to turn labels on or off', unlike the licensing page's general list. | Source: https://learn.microsoft.com/microsoftteams/teams-add-on-licensing/licensing-enhance-teams
- [supported, minor] controls[1].api / command: POST /v1.0/groups/{id}/assignLicense assigns licences to a group. | Found: POST https://graph.microsoft.com/v1.0/groups/1132b215-826f-42a9-8cfe-1643d19d17fd/assignLicense | Fix: Keep the call and add to controls[1].note, including the rendered table note: 'The request body sets addLicenses with the Teams Premium skuId.' The reference documents addLicenses and skuId in its assignment example. | Source: https://learn.microsoft.com/graph/api/group-assignlicense?view=graph-rest-1.0
- [supported, minor] controls[2].ui / admin-path: The product's self-service setting is reached through Settings > Org settings > Services > Self-service trials and purchases > product in Microsoft 365 admin center. | Found: To manage the settings for a specific product, select the product name. A panel opens and shows the current setting for the product you selected. | Fix: Extend controls[2].ui.path and its rendered path to 'Settings > Org settings > Services > Self-service trials and purchases > product > Allow / Allow for trials only / Do not allow'. The printed route reaches the right panel but stops before the setting. | Source: https://learn.microsoft.com/microsoft-365/commerce/subscriptions/manage-self-service-purchases-admins
- [supported, minor] Governance controls: Teams Premium feature usage report path / admin-path: The Teams Premium feature usage report is under Teams admin center > Analytics & reports > Usage reports. | Found: select Analytics & reports > Usage reports. On the View reports tab, under Report, select Teams Premium feature usage. | Fix: Extend the prose path to 'Teams admin center > Analytics & reports > Usage reports > View reports > Report > Teams Premium feature usage'. The current path stops on the correct report-selection page. | Source: https://learn.microsoft.com/microsoftteams/teams-analytics-and-reports/teams-premium-usage-report
- [contradicted, minor] What to check: Feature advisor versus Governance controls table / consistency: The checklist asks readers to review Feature advisor status, but the controls table has no corresponding dashboard or feature-configuration row. | Found: compare licensed users with the Feature advisor status of each feature; controls table rows: user licensing, product/group licensing, self-service purchases/trials, licence-request approval | Fix: Remove 'and compare licensed users with the Feature advisor status of each feature' from the first checklist bullet and replace it with 'and review licensed users'. This keeps the checklist within the existing licence-assignment controls; do not add a row.
-->
