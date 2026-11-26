---
kind: "concept"
title: "Teams Premium: who needs the add-on licence, and what does it unlock?"
slug: "teams-premium"
summary: "Teams Premium is a per-user add-on licence that unlocks advanced Teams meeting, calling and admin features. Administrators use it to decide which organisers, users and admins get those features, and what that costs."
created: "2026-11-26"
updated: "2026-11-26"
version: 2
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
  - title: "Intelligent recap for Teams calls, meetings, and events"
    url: "https://learn.microsoft.com/microsoftteams/intelligent-recap-calls-meetings"
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
    note: "Licences assigned to a group are assigned to all users in the group. The request body sets addLicenses with the Teams Premium skuId."
  - governs: "Whether users can start self-service trials or purchases of Teams Premium"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org settings > Services > Self-service trials and purchases > product > Allow / Allow for trials only / Do not allow"
      docs: "https://learn.microsoft.com/microsoft-365/commerce/subscriptions/manage-self-service-purchases-admins"
    api:
      kind: "powershell"
      call: "Update-MSCommerceProductPolicy -PolicyId AllowSelfServicePurchase -ProductId <ProductID> -Value \"Disabled\""
      docs: "https://learn.microsoft.com/microsoft-365/commerce/subscriptions/allowselfservicepurchase-powershell"
    note: "UI needs Global Administrator; PowerShell needs Global or Billing Administrator (AOBO partners: Global Administrator for both). Existing trials and purchases are not affected. Up to 72 hours to apply."
  - governs: "Approval of users' Teams Premium licence requests"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Teams Premium > Licenses > License requests"
      docs: "https://learn.microsoft.com/microsoftteams/teams-premium-dashboard"
    api: null
    note: "Approve or reject each request on this tab."
confidence: "high"
dependents: 9
changes:
  - date: "2026-11-26"
    note: "New concept page: how Teams Premium licensing works per feature and role, what it costs, and where licence assignment and self-service trials are controlled."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 9 of 91 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected: intelligent recap also accepts a Microsoft Copilot licence; discovery trial limits; AOBO partner role; feature configuration wording; self-service trial check; removed town hall licensing implication and two answered open questions."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 105 statements confirmed"
verification:
  status: "verified"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 105
  confirmed: 105
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "229c54be25b4be35ba6a8e048d27e814"
---

## What it is

Teams Premium is an add-on licence for Microsoft Teams: a per-user subscription that unlocks a set of advanced meeting, calling and admin features on top of a user's existing Teams licence. It does not replace that licence. Microsoft states that users must hold both a Teams licence and a Teams Premium licence for the features to work.

### How the licence is checked

Teams checks each user's licence and meeting role feature by feature, so who needs the licence depends on the feature:

| Feature type | Who needs Teams Premium | Who benefits |
|---|---|---|
| Organiser-based (for example meeting templates, meeting themes, watermarking, who can record and transcribe, end-to-end encryption) | The meeting organiser | Attendees too, during the meeting |
| Attendee- or user-based (for example AI-generated notes and tasks, custom organisation backgrounds, the Queues app) | Each user (AI-generated notes and tasks also accept a Microsoft Copilot licence) | Only the licensed user |
| Admin-based (for example advanced collaboration analytics) | The Teams admin | Admins |

A delegate who creates meetings for a licensed organiser does not need a licence of their own for organiser-based features to work.

### Licence and configuration are separate steps

Assigning the licence makes a user eligible. Microsoft states that many Teams Premium features need an admin to configure them in the Teams admin center before users can use them, including end-to-end encryption, watermarks, organisation backgrounds and themes, and custom meeting templates. The **Teams Premium** dashboard in the Teams admin center brings licences, licence requests, usage reports and a feature advisor together; the feature advisor lists the features you must configure and, for each, the admin policy that controls it (see [Teams meeting policy](/concepts/meeting-policy/)).

Since 1 April 2026 some features that were previously only in Teams Premium are included with Teams Enterprise. Licences bought before that date keep everything they included until they expire.

## Why it matters

Teams Premium is how an organisation decides who gets the protected, branded and AI-assisted meeting features, and what it pays for them. Because organiser-based features reach every attendee during the meeting, licensing the people who run sensitive or large meetings (executives, event organisers, HR) covers those meetings without licensing the audience. Attendee-based features work the other way: each user needs an appropriate licence for the feature; intelligent recap accepts Teams Premium or Microsoft Copilot. Licensing attendees does nothing for organiser-based features in meetings an unlicensed colleague organises.

For many features the licence alone changes nothing a user sees until an admin configures the governing policy, so a tenant can pay for features nobody can use; the feature advisor marks these "Not enabled". The 1 April 2026 move of some features to Teams Enterprise also means older guidance may name Teams Premium for a feature that no longer needs it. Check the current comparison on the licensing page before buying for one feature.

## Cost and licensing

- **Licence:** Teams Premium is licensed per user as a subscription. Each user also needs an Office 365 or Microsoft 365 subscription and a Teams licence; for new customers the Teams licence is bought separately, but both are still required.
- **Price:** Microsoft's US product page lists Teams Premium at $10.00 user/month, paid yearly. Prices for other markets and agreements are not on that page.
- **Where it is sold:** through all Microsoft purchasing channels (EA, EAS, CSP, Web Direct and both MCA routes), to commercial, worldwide public sector, EDU, GCC, GCC High, DoD and non-profit tenants.
- **Further prerequisites:** the Queues app also requires a Teams Phone licence. Sensitivity labels for meetings are available only to Teams Premium users with Microsoft 365 E5, E5 Compliance, F5 Compliance or F5 Security + Compliance.
- **Tenant-wide requirement:** advanced collaboration analytics requires Teams Premium licences assigned to each user in the tenant, not just to the admins who read the reports.
- **Trials:** admins can start a 30-day discovery trial with 25 licences from the Teams Premium dashboard. The discovery trial is unavailable if the organisation has a paid Teams Premium subscription or has already used the trial. Users can start a 60-day self-service trial from Teams; self-service trials are not available to Government or EDU customers.
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
<tr><td data-label="Control"><strong>Teams Premium licences assigned to users or groups by product</strong><br><small>Group</small><br><small class="controls__note">Licences assigned to a group are assigned to all users in the group. The request body sets addLicenses with the Teams Premium skuId.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Licenses › product › Assign licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/groups/{id}/assignLicense</code> <a href="https://learn.microsoft.com/graph/api/group-assignlicense?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users can start self-service trials or purchases of Teams Premium</strong><br><small>Tenant</small><br><small class="controls__note">UI needs Global Administrator; PowerShell needs Global or Billing Administrator (AOBO partners: Global Administrator for both). Existing trials and purchases are not affected. Up to 72 hours to apply.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › Services › Self-service trials and purchases › product › Allow / Allow for trials only / Do not allow <a href="https://learn.microsoft.com/microsoft-365/commerce/subscriptions/manage-self-service-purchases-admins" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-MSCommerceProductPolicy -PolicyId AllowSelfServicePurchase -ProductId &lt;ProductID&gt; -Value &quot;Disabled&quot;</code> <a href="https://learn.microsoft.com/microsoft-365/commerce/subscriptions/allowselfservicepurchase-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Approval of users' Teams Premium licence requests</strong><br><small>User</small><br><small class="controls__note">Approve or reject each request on this tab.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams Premium › Licenses › License requests <a href="https://learn.microsoft.com/microsoftteams/teams-premium-dashboard" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

- Assigning licences in the Microsoft 365 admin center needs at least the License Administrator or User Administrator role. Changing the self-service setting in the admin centre needs Global Administrator; through the MSCommerce module it needs the Global or Billing Administrator role. Partners acting as Admin On Behalf Of a customer require Global Administrator for PowerShell as well.
- The MSCommerce product list names Teams Premium as "Teams Premium Introductory Pricing" (ProductId CFQ7TTC0RM8K), with trials without a payment method enabled.
- Licence assignment decides eligibility only. Many Teams Premium features require admin configuration before users can access them; the **Feature advisor** tab on the Teams Premium dashboard lists the features you must configure, names the governing policy for each and shows whether it is enabled for no, some or all Teams Premium users.
- The **Teams Premium feature usage** report (Teams admin center > Analytics & reports > Usage reports > View reports > Report > Teams Premium feature usage) counts users reached and meetings that used a Teams Premium feature. Viewing it needs global admin, global reader or Teams service admin.

## What to check

- Open the Teams Premium dashboard in the Teams admin center and review licensed users.
- Review the self-service trials and purchases setting for Teams Premium and choose Allow, Allow for trials only or Do not allow.
- Check the Licenses page in the Microsoft 365 admin center for Teams Premium self-service trial licences.
- Confirm that organisers of templated meetings and sensitive meetings hold the licence, since organiser-based features follow the organiser.
- Review pending Teams Premium licence requests on the dashboard's License requests tab.
- Count every user in the tenant before buying Teams Premium for advanced collaboration analytics.

## Open questions

- Does a tenant with pre-April Teams Premium licences see the transferred features listed under either licence in the admin centre?
- What happens to a Premium-only policy setting, such as watermarking, assigned to a user whose Teams Premium licence lapses?
- Is there a Microsoft Graph or PowerShell route for approving the licence requests shown on the Teams Premium dashboard?
