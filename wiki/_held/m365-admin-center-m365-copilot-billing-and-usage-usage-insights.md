---
title: "Microsoft 365 admin center: usage insights for Copilot Chat pay-as-you-go billing"
slug: "m365-admin-center-m365-copilot-billing-and-usage-usage-insights"
roadmapId: 492616
topic: "governance"
products: ["Microsoft 365 Admin Center","Microsoft Copilot (Microsoft 365)"]
summary: "The roadmap plans cost and message-count insights, in total and per agent, for Copilot Chat pay-as-you-go billing. Admins who enable it can view them; no action is needed until Microsoft says more."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "May CY2025"
previewDate: "October CY2025"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "consumption"
  notes: "Copilot Chat pay-as-you-go agent usage is billed to an Azure subscription through an Azure meter (Microsoft Copilot pay-as-you-go overview). No licence or price specific to the usage insights view is published."
audiences: ["m365-admin","finops"]
tags: ["m365-admin-center","copilot-chat","pay-as-you-go","usage-based-billing","cost-management","copilot-credits","usage-reports","agents","finops"]
sources:
  - title: "Microsoft 365 Roadmap item 492616"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=492616"
    kind: "roadmap"
  - title: "Microsoft Copilot pay-as-you-go service overview"
    url: "https://learn.microsoft.com/copilot/plan/pay-as-you-go-overview"
    kind: "learn"
  - title: "Meters for Microsoft Copilot pay-as-you-go services"
    url: "https://learn.microsoft.com/copilot/plan/pay-as-you-go-meters"
    kind: "learn"
  - title: "Set up Microsoft Copilot pay-as-you-go services"
    url: "https://learn.microsoft.com/copilot/implement/setup-pay-as-you-go"
    kind: "learn"
  - title: "Set up and manage pay-as-you-go billing in the Copilot node of the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-copilot"
    kind: "learn"
  - title: "Microsoft Copilot Credits report"
    url: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-credits"
    kind: "learn"
  - title: "View costs and billing for Microsoft Copilot pay-as-you-go"
    url: "https://learn.microsoft.com/copilot/manage/view-cost"
    kind: "learn"
  - title: "Monitor Copilot Credit spending"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-monitor-spending"
    kind: "learn"
  - title: "Microsoft 365 Copilot usage reports overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/usage-reports-overview"
    kind: "learn"
videos: []
related: ["m365-admin-center-copilot-credits-usage-report","m365-admin-center-agent-level-pay-as-you-go-controls","copilot-credits","usage-reports","spending-policies"]
controls:
  - governs: "Whether Microsoft Copilot Chat agent usage is billed to a pay-as-you-go billing policy"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Billing & usage > Pay-as-you-go services > Microsoft Copilot Chat"
      docs: "https://learn.microsoft.com/copilot/implement/setup-pay-as-you-go"
    api: null
    note: "Roles: Billing Administrator, AI Administrator or Global Administrator. Disconnecting removes users' access to metered agents. Another Learn page reaches the tab via Copilot > Cost management > Classic Billing & usage."
  - governs: "Credits used per agent and per billing policy (read-only report)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Reports > Usage > Microsoft Copilot > Credits"
      docs: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-credits"
    api: null
    note: "Page describes preview: at most 30 days of history. Usernames and billing policy IDs hidden by default. Not confirmed to be the roadmap's usage insights."
  - governs: "Budget and spending view for a billing policy"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost management > Classic Billing & usage > Billing policies > billing policy > Budget"
      docs: "https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-copilot"
    api: null
    note: "Spending shows the current month and a six-month chart. A budget sends alerts only and does not stop usage."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-03-16T23:00:10"
changes:
  - date: "2026-11-22"
    note: "First briefing for this roadmap item; Microsoft Learn does not yet describe the feature, so it points to the documented Credits report and billing-policy controls."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 67 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 67
  confirmed: 64
  unconfirmed: 1
  contradicted: 2
  attempts: 1
  hash: "1167c8bf04dd88fc88bd7e08f0095621"
---

## What's changing

The roadmap item plans usage insights in the Microsoft 365 admin center under Billing and usage for Microsoft 365 Copilot Chat. In its description, once an organisation enables Copilot Chat pay-as-you-go billing, AI administrators can view the cost and number of messages in total and per agent, filtered by billing policy and date range. The stated purpose is to inform agent management decisions.

Microsoft Learn does not describe this feature by name at the time of writing (November 2026), so what follows about its behaviour is the roadmap's description. Learn does document neighbouring surfaces for the same billing. The Microsoft Copilot Credits report (Reports > Usage > Microsoft Copilot > Credits) lists credits used per user, per agent, per billing policy and per agent-user pair, and can be viewed over the last 7 or 30 days. The Cost Management dashboard under Copilot in the admin center has Overview and Consumption tabs, and the Consumption tab's Agents and services view shows usage for supported services. This briefing does not assume that either one is the feature on the roadmap.

The roadmap record gives a target date of May CY2025 and a preview date of October CY2025, with status In development, release phase General Availability, Worldwide (Standard Multi-Tenant) and Web. Both targets are earlier than today (22 November 2026) while the record still reads In development, and it was last modified on 2026-03-16. Treat the status as the authority and the dates as targets.

## Why it matters

Pay-as-you-go billing for Copilot Chat is charged per use to an Azure subscription, so the first question after enabling it is which agents and which billing policies are driving the bill. Microsoft's pay-as-you-go overview names establishing usage patterns as a use case, and a per-agent cost and message view is aimed at that question.

Microsoft has not stated what happens on arrival or whether an administrator must switch the view on, so the safe reading is that no source says existing behaviour changes. Until the feature is documented, the Credits report and Cost Management pages below are the documented ways to watch this spend. Compare whatever the new view shows against them before using it in a budget request.

## Risk assessment

**Data exposure**
- The roadmap describes totals and per-agent cost and message counts, filtered by billing policy and date range. The Credits report page says user-specific information such as usernames, display names, groups and sites is hidden in usage reports by default, so check how the new view treats names before sharing screenshots.

**Security & identity**
- The pay-as-you-go overview lists Global administrator, Billing administrator, AI administrator and Global reader (read-only access) as roles that can view and manage pay-as-you-go services. Which roles can open the new insights is not yet documented, so assume the same roles until a page says otherwise and confirm it.

**Autonomy & actions**
- No change: the item is a reporting view and the roadmap describes no action an agent takes because of it.

**Change & support**
- Several documented surfaces already report this spend under different names (Billing & usage, Cost management, Classic Billing & usage, the Credits report), and the Credits report counts in credits while the roadmap speaks of messages. Expect help-desk and finance questions about which figure is authoritative.
- The Credits report page says that when a user is covered by more than one billing policy, usage is attributed to the oldest configured billing policy. Filtering by billing policy can therefore show a different split from the one you intended.

## Cost and licensing

The roadmap item names no licence for the insights view, and the pages read give no separate price for it. The view sits on top of Copilot Chat pay-as-you-go billing, which the pay-as-you-go overview describes as billed through the Azure subscription you specify when you set up billing, using the Azure meter for the service.

The Meters for Microsoft Copilot pay-as-you-go services page lists one meter: the Copilot Studio meter, where any agent or custom Copilot usage is billed through the Copilot Studio message meter at $0.01 per message. The Credits report page counts usage in credits instead. The pages read do not state how the two relate for this feature.

A budget on a billing policy sends email alerts only. Microsoft's setup page states that the system does not enforce the budget or prevent the organisation from exceeding it, and that usage can continue uninterrupted after the budget is passed. Disconnecting the billing policy from the service is what stops access: the overview says users linked to the policy then lose access to the metered agents. Indirect cost is admin and finance time to reconcile the new view with the Azure bill.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant) as the only cloud and Web as the platform; it does not list the US Government clouds. The audience in the description is AI administrators in tenants that have enabled Copilot Chat pay-as-you-go billing.

Learn's setup page lists Billing Administrator, AI Administrator or Global Administrator for setting up pay-as-you-go, an Azure subscription and resource group in the same tenant, and Owner or Contributor rights on them. A tenant can create up to 50 billing policies, per the same page. The view-costs page names Global administrator and Billing administrator for the Cost Management page, a shorter list than the overview gives for viewing pay-as-you-go services. The roles for the new insights view are not yet documented.

## Governance guidance

### Before rollout
- Confirm which billing policies exist and which users or groups each covers, at Copilot > Billing & usage > Pay-as-you-go services, so the billing policy filter will mean something.
- Check who holds the Global administrator, Billing administrator, AI administrator and Global reader roles, since those are the roles Microsoft lists for pay-as-you-go services.
- Note that usernames and display names are hidden in usage reports by default, and decide who in finance or the service desk needs to see them.

### At rollout
- Open Reports > Usage > Microsoft Copilot > Credits and record the per-agent and per-billing-policy figures as a baseline to compare with the new view.
- Review the Budget tab of each billing policy and treat its alerts as notifications, since they do not stop usage.
- Ask finance to compare the new cost figure with the Azure subscription bill, because the Credits report describes itself in credits and the meters page prices per message.

### After rollout
- Review per-agent consumption over the 7 and 30 day windows the Credits report offers, and decide which agents to keep available.
- Disconnect the billing policy from Microsoft Copilot Chat if an agent's cost is unacceptable, remembering that this removes access to the metered agents for the users it covers.
- Check the Microsoft 365 roadmap item and Message center for the feature's documentation and update this briefing's controls when it appears.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Microsoft Copilot Chat agent usage is billed to a pay-as-you-go billing policy</strong><br><small>Tenant</small><br><small class="controls__note">Roles: Billing Administrator, AI Administrator or Global Administrator. Disconnecting removes users' access to metered agents. Another Learn page reaches the tab via Copilot &gt; Cost management &gt; Classic Billing &amp; usage.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Billing &amp; usage › Pay-as-you-go services › Microsoft Copilot Chat <a href="https://learn.microsoft.com/copilot/implement/setup-pay-as-you-go" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Credits used per agent and per billing policy (read-only report)</strong><br><small>Tenant</small><br><small class="controls__note">Page describes preview: at most 30 days of history. Usernames and billing policy IDs hidden by default. Not confirmed to be the roadmap's usage insights.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Reports › Usage › Microsoft Copilot › Credits <a href="https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Budget and spending view for a billing policy</strong><br><small>Tenant</small><br><small class="controls__note">Spending shows the current month and a six-month chart. A budget sends alerts only and does not stop usage.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost management › Classic Billing &amp; usage › Billing policies › billing policy › Budget <a href="https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-copilot" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The rows cover the controls Learn documents for the pay-as-you-go billing that this feature reports on. None of them is a switch for the usage insights view itself, and no page read says the view can be turned on or off.

The connection toggle is the only documented control that ends metered use. Budgets alert but do not block. Roles differ between pages: the overview lists four, the view-costs page two. The Cost Management API (beta) documents usage reports for credits by user, security group, governed service and funding class, which is not a per-agent view.

## Open questions

- Is the planned usage insights view the Copilot Credits report, a tab in Cost Management, or a new page, and where will it sit in the navigation? Watch the Learn pay-as-you-go pages and the roadmap item.
- Will the view show messages and cost as the roadmap describes, or credits as the Credits report does, and how will they relate to the $0.01 per message meter?
- Which administrator roles can open the insights, and will usernames stay hidden by default as they are in the Credits report?
- Does the view appear automatically once pay-as-you-go billing is connected, or does an administrator turn it on? Microsoft has not stated the default.

<!-- rationale
risk: Low. The item adds a view of cost and usage for administrators; the roadmap describes no new data access, agent action or setting that changes what users can do.
cost: Low. Microsoft has published no separate charge for the insights view; the spend it reports on is metered, through the Copilot Studio message meter at $0.01 per message on the meters page.
impact: Low. The roadmap item names AI administrators as the audience, so users do not notice it; admins gain a view of cost and messages by agent.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Governance controls / applicability: The billing-policy connection toggle is the only documented control that ends metered use. | Found: You can enable, disable, assign, block, or remove agents for your organization ... Members of your organization can only access the agents that you have allowed. | Fix: Replace 'The connection toggle is the only documented control that ends metered use' with 'Disconnecting a billing policy removes access to the metered agents in that service for users linked to the policy.' The narrower statement is supported by the already cited https://learn.microsoft.com/copilot/plan/pay-as-you-go-overview. Do not imply that agent blocking or other access controls are unavailable. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/manage-copilot-agents-integrated-apps
- [unsupported, blocker] What's changing; Why it matters / applicability: The newer Copilot Cost Management dashboard's Overview and Consumption surfaces monitor the same Copilot Chat pay-as-you-go spend. | Found: Searched: Copilot Chat usage insights 492616 cost messages per agent billing policy date range default roles license price. Read monitor-spending and usage-based-billing overview excerpts; no passage establishes Copilot Chat coverage in the newer dashboard. | Fix: Remove the Overview/Consumption dashboard sentences from What's changing, rather than presenting them as surrounding surfaces for the same billing. Replace 'Until the feature is documented, the Credits report and Cost Management pages below are the documented ways to watch this spend' with 'Until the feature is documented, the Credits report and the service-level page at Billing > Cost Management are documented ways to watch Copilot Chat pay-as-you-go spend.' The latter is supported by the already cited https://learn.microsoft.com/copilot/manage/view-cost.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model and notes; Cost and licensing; Why it matters / licensing: The underlying Copilot Chat pay-as-you-go agent usage has a consumption licensing model and is billed to the configured Azure subscription through an Azure meter. | Found: the service gets billed through the Azure subscription that you specified when you set up pay-as-you-go billing. The Azure subscription uses the Azure meter set up for the service. | Fix: Retain the underlying consumption model, but add to the licensing notes: 'The Copilot-node setup page also requires the tenant to have at least one SharePoint licence, or a licence that includes SharePoint.' Cite https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-copilot. This requirement appears on that cited setup page but not on the other setup page summarised in Scope. | Source: https://learn.microsoft.com/copilot/plan/pay-as-you-go-overview
- [supported, minor] controls[0].ui; Governance controls table / admin-path: Copilot > Billing & usage > Pay-as-you-go services > Microsoft Copilot Chat reaches the billing-policy connection surface in the Microsoft 365 admin center. | Found: go to Copilot > Billing & usage. On the Billing & usage page, select the Pay-as-you-go services tab. Select Microsoft Copilot Chat or SharePoint agents and select the billing policy you created. | Fix: The path stops on the correct service page. To give the disconnect control named in the note, use 'Copilot > Cost management > Classic Billing & usage > Pay-as-you-go services > Microsoft Copilot Chat > Connected', set docs to https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-copilot, and say that the Connected toggle is turned off in Manage billing policy connections. That page is already cited. | Source: https://learn.microsoft.com/copilot/implement/setup-pay-as-you-go
- [supported, minor] controls[1].ui; What's changing; Governance guidance; Governance controls table / admin-path: Reports > Usage > Microsoft Copilot > Credits reaches the Copilot Credits report in the Microsoft 365 admin center. | Found: In the navigation menu, select Reports. If you don't see Reports, select Show all, and then select Reports. Select Usage. On the Usage page, under Reports, select Microsoft Copilot, and then select Credits. | Fix: Use 'Reports > Usage > Reports > Microsoft Copilot > Credits' to retain the page's Reports heading, and add the qualifier 'If Reports is hidden in navigation, select Show all first.' The printed selectable steps are otherwise correct. | Source: https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-credits
- [supported, minor] controls[2].ui; Governance controls table; Governance guidance: At rollout / admin-path: Copilot > Cost management > Classic Billing & usage > Billing policies > billing policy > Budget reaches the billing-policy budget and spending view. | Found: go to Copilot > Cost management . In the banner at the top of the dashboard, select Classic Billing & usage. On the Billing policies tab, select a billing policy. In the side panel, select the Budget tab. The Spending option displays data for the current month | Fix: For the spending view described by this row, append ' > Spending' to controls[2].ui.path. The current path stops on the correct page. Keep the budget's alert-only qualification. | Source: https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-copilot
- [contradicted, minor] Governance guidance: Before rollout / consistency: Every control the governance checklist tells administrators to take stock of is represented in the controls table. | Found: Checklist: 'Check who holds the Global administrator, Billing administrator, AI administrator and Global reader roles'. Table rows: billing-policy connection; Credits report; billing-policy Budget view. No role-assignment control row is present. | Fix: Remove the checklist bullet beginning 'Check who holds the Global administrator, Billing administrator, AI administrator and Global reader roles'. Retain the sourced role information in Security & identity; do not add an unverified role-assignment control row.
-->
