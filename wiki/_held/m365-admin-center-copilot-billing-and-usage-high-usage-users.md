---
title: "Microsoft 365 admin center: high-usage Copilot users list in Billing & usage"
slug: "m365-admin-center-copilot-billing-and-usage-high-usage-users"
roadmapId: 557176
topic: "governance"
products: ["Microsoft 365 admin center","Microsoft Copilot (Microsoft 365)"]
summary: "The roadmap plans a Billing & usage list of users above 2000 pay-as-you-go Copilot credits, with licence purchase and assignment on the page. Admin-only; Microsoft has not published a Learn page, default or licence rule for it yet."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "March CY2026"
previewDate: null
risk: "low"
cost: "variable"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "consumption"
  notes: "The usage it reports is pay-as-you-go: Learn says the service is billed through the Azure subscription named when pay-as-you-go billing was set up. A licence or price specific to this page is not yet published."
audiences: ["m365-admin","finops"]
tags: ["m365-admin-center","copilot-credits","pay-as-you-go","usage-reports","cost-management","licensing","copilot-chat","finops"]
sources:
  - title: "Microsoft 365 Roadmap item 557176"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=557176"
    kind: "roadmap"
  - title: "Microsoft Copilot Credits report"
    url: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-credits"
    kind: "learn"
  - title: "Microsoft 365 admin center usage reports overview"
    url: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports"
    kind: "learn"
  - title: "Microsoft Copilot pay-as-you-go service overview"
    url: "https://learn.microsoft.com/copilot/plan/pay-as-you-go-overview"
    kind: "learn"
  - title: "Set up and manage pay-as-you-go billing in the Copilot node of the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-copilot"
    kind: "learn"
  - title: "Assign or unassign licenses for users in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Licensing for agents powered by the standard harness"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing"
    kind: "learn"
  - title: "Which users hold a Copilot licence (existing route for assigning licences) (PowerShell)"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
  - title: "Whether usage reports conceal user, group and site names (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/adminreportsettings-update?view=graph-rest-1.0"
    kind: "learn"
videos: []
related: ["copilot-credits","usage-reports","m365-admin-center-copilot-credits-usage-report","spending-policies","m365-admin-center-agent-level-pay-as-you-go-controls"]
controls:
  - governs: "Which users hold a Copilot licence (existing route for assigning licences)"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Licenses > product > Assign licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "Today's route, not the new page's purchase action. Needs at least License or User Administrator."
  - governs: "Whether usage reports conceal user, group and site names"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org settings > Services > Reports > Conceal user, group, and site names in all reports"
      docs: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports"
    api:
      kind: "graph"
      call: "PATCH /v1.0/admin/reportSettings"
      docs: "https://learn.microsoft.com/graph/api/adminreportsettings-update?view=graph-rest-1.0"
    note: "Documented for usage reports, including the Credits report; the request body sets displayConcealedNames. Global administrators can change it. Whether the new page follows it is not documented."
  - governs: "Tenant switch for the high-usage users page"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting or API for the page is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-02-13T23:15:55"
changes:
  - date: "2026-11-22"
    note: "First briefing for this roadmap item; Learn has no page for it yet, so it relies on the roadmap text and the documented Credits report alerts."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 48 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected after verification: noted documented billing for Microsoft 365 Copilot licence holders, narrowed the purchase-action gap, and removed unsupported statements on listed fields, user impact and a billing-policy checklist step."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 54 statements contradicted, 3 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 54
  confirmed: 50
  unconfirmed: 3
  contradicted: 1
  attempts: 2
  hash: "ee916390ff16a226dd3eee24c2d6ddf1"
---

## What's changing

The roadmap item describes a High-usage users view in the Microsoft 365 admin center, under Copilot > Billing & usage. It lists users with high Copilot pay-as-you-go usage, which the roadmap defines as greater than 2000 credits, and lets an administrator buy and assign Copilot licences to those users directly on the page.

Microsoft Learn does not yet describe this page, so what follows about its behaviour is the roadmap's description. The closest documented behaviour is in the Microsoft Copilot Credits report (Microsoft 365 admin center > Reports > Usage > Reports > Microsoft Copilot > Credits), whose documentation includes preview qualifications: its Alerts card appears when one or more users consume more than 3,000 credits in the past 30 days, a similar alert appears for 2,000 to 3,000 credits, and **View Copilot credits details** shows a user list that can be exported to CSV. That report covers credits used by users who don't have a Microsoft Copilot licence and use metered agents in Copilot Chat. Whether the new page uses the same data or thresholds is not documented.

The roadmap record gives status In development with a target of March CY2026, release phase General Availability, Worldwide (Standard Multi-Tenant) and Web. That target month has passed as of this briefing (November 2026) and the record still shows In development, so treat the date as a plan, not as availability.

## Why it matters

Pay-as-you-go consumption is billed to an Azure subscription, so a few heavy users can drive spend without anyone choosing it. A list of those users, with a licence action beside it, would let a service owner compare continued metered usage with buying licences for the same people. Microsoft documents that Microsoft 365 Copilot licence holders are not charged for classic answers, generative answers or Microsoft Graph tenant grounding by agents in Copilot Chat, Teams or SharePoint when the agent runs with their authenticated identity. Whether the new page's purchase action eliminates all of a listed user's charges is not yet documented.

Microsoft has not stated whether the page appears automatically or needs an admin action, so no source says existing behaviour changes. Plan to look at the page when it appears rather than depend on it. Names in usage reports are hidden by default, so the list may show anonymised users until a Global administrator changes the report setting.

## Risk assessment

**Data exposure**
- The roadmap describes a list of users above 2000 Copilot pay-as-you-go credits; it does not specify the user-identification fields or consumption values displayed. Learn says usage reports hide usernames, display names, groups and sites by default, and that showing them is a logged event in the Microsoft Purview portal audit log. Whether the new page follows that setting is not documented.

**Security & identity**
- The page is described as a place to buy and assign licences, which is a spend-and-entitlement action. Learn says at least the License Administrator or User Administrator role is needed to assign licences in the admin centre; which roles can use the new page's purchase action is not documented.

**Autonomy & actions**
- No change: the roadmap describes a list and an admin-initiated licence action, not an agent acting on its own.

**Change & support**
- Expect questions from budget owners who see a user above 2000 credits. The Credits report page already carries 2,000 and 3,000 credit alerts, so two admin views may show similar information; confirm which one your finance team should use once this page is live.

## Cost and licensing

The usage the page lists is pay-as-you-go. The Microsoft Copilot pay-as-you-go overview says the service is billed through the Azure subscription specified when pay-as-you-go billing was set up, using the Azure meter set up for the service, and that pay-as-you-go billing is disabled by default for new features.

The roadmap says licences can be bought and assigned from the page. Which Copilot licence, its price and whether the page's purchase action eliminates all of a listed user's charges are not yet published. Assigning an existing licence uses the Licenses page described in the controls table, and needs a License or User Administrator at minimum.

Indirect costs are admin time to review the list and any Azure billing-policy work; no separate charge for the page itself is documented at the time of writing (November 2026).

## Scope

Audience: administrators who manage Copilot billing in the Microsoft 365 admin center. The roadmap record lists the Microsoft 365 admin center and Microsoft Copilot (Microsoft 365) as products, Worldwide (Standard Multi-Tenant) as the cloud and Web as the platform. No US Government cloud is listed on the record; that is a record fact, not a statement that the feature is unavailable there.

Roles for viewing the new page are not documented. Rollout mechanics and prerequisites for the page itself are not stated; the underlying usage needs a pay-as-you-go billing policy and an Azure subscription in the same tenant as Microsoft 365.

## Governance guidance

### Before rollout
- Decide who may see named usage, and check the report privacy setting in the controls table (row 2); it is a Global administrator setting.
- Confirm which admins already hold the License Administrator or User Administrator role, since licence assignment needs one of them.

### At rollout
- Open the page when it appears and compare its user list with the Credits report's Alerts card and exported user list.
- Confirm with Microsoft Learn or your Microsoft account team whether the page's purchase action eliminates all of a listed user's charges before buying.

### After rollout
- Review the list on a regular cadence and assign licences using the Licenses page or PowerShell route in the controls table (row 1) where a licence is the better choice.
- Reconcile the credits you see with the Azure bill, since the Azure subscription is where charges appear.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold a Copilot licence (existing route for assigning licences)</strong><br><small>User</small><br><small class="controls__note">Today's route, not the new page's purchase action. Needs at least License or User Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Licenses › product › Assign licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether usage reports conceal user, group and site names</strong><br><small>Tenant</small><br><small class="controls__note">Documented for usage reports, including the Credits report; the request body sets displayConcealedNames. Global administrators can change it. Whether the new page follows it is not documented.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › Services › Reports › Conceal user, group, and site names in all reports <a href="https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /v1.0/admin/reportSettings</code> <a href="https://learn.microsoft.com/graph/api/adminreportsettings-update?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant switch for the high-usage users page</strong><br><small>Tenant</small><br><small class="controls__note">No setting or API for the page is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Learn documents no setting that turns the high-usage users page on or off, and the table's third row records that. The licence-assignment row is the existing route an administrator uses today; it does not govern the new page, and the page's own purchase action is not documented. The report privacy setting is documented for usage reports and applies to the Credits report; whether the new page follows it is not documented. Showing identifiable user information is a logged event in the Microsoft Purview portal audit log.

## Open questions

- Does the page use the same data and the 2000-credit threshold as the Credits report alerts, and over what period? Watch the Credits report page and Message center.
- Which roles can open the page and buy licences from it? Watch the pay-as-you-go setup page.
- Does the page's purchase action eliminate all of a listed user's pay-as-you-go charges? Watch Learn for a page on the feature.
- Does the page follow the Conceal user, group, and site names in all reports setting?
- Is the page on by default, and is the March CY2026 target still current? Watch the roadmap item and Message center.

<!-- rationale
risk: Low. The roadmap describes an admin-side list and a licence action; it adds no user-facing behaviour, and Learn shows usage reports hiding names by default.
cost: Variable. The usage it lists is pay-as-you-go consumption billed to an Azure subscription; the roadmap item says licences can be bought from the page, and no price for this page is published.
impact: Low. Only administrators who manage Copilot billing see the list.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] front matter: licensing.model / licensing: Consumption is the licensing model by which an administrator is entitled to the high-usage users page. | Found: Searched: "high-usage users" Copilot license report licensing access entitlement. Read Credits report, PAYG overview, Copilot-node setup and billing-licensing. These document underlying usage billing, not consumption-based entitlement to this admin page. | Fix: Set licensing.model to "unknown". Keep the documented Azure billing explanation in licensing.notes, but precede it with "Microsoft has not published the entitlement for this page; the usage it reports is pay-as-you-go."
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [unsupported, minor] rationale: risk / behaviour: The new feature adds no user-facing behaviour. | Found: Searched: "high-usage users" Copilot user-facing behaviour. Read roadmap and Credits report; the roadmap describes an admin-side list and licence action, but does not state that the feature adds no user-facing behaviour. | Fix: Remove "it adds no user-facing behaviour" from the risk rationale. Retain the sourced description of an admin-side list and a licence action.
- [unsupported, minor] rationale: impact / role: Only administrators who manage Copilot billing can see the new list. | Found: Searched: "Copilot" "high-usage users" "Billing" licenses default roles. Read roadmap, PAYG overview and Copilot-node setup; none specifies the exclusive viewing audience for this list. The briefing itself says viewing roles are undocumented. | Fix: Replace the impact rationale with "Low. The roadmap places the list in the Microsoft 365 admin center; viewing roles for the new page are not yet documented."
- [contradicted, minor] Governance guidance: At rollout / consistency: The checklist's Credits report monitoring step has a corresponding controls-table row. | Found: Checklist: "compare its user list with the Credits report's Alerts card and exported user list." Table: licence assignment, report concealment, and tenant switch; no Credits report monitoring row. | Fix: Remove "and compare its user list with the Credits report's Alerts card and exported user list" from the At rollout bullet; retain "Open the page when it appears."
-->
