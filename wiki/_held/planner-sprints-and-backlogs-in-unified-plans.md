---
title: "Planner: sprints and backlogs in unified plans"
slug: "planner-sprints-and-backlogs-in-unified-plans"
roadmapId: 581629
topic: "modern-work"
products: ["Planner"]
summary: "Microsoft plans to add product backlogs and time-boxed sprints to Planner unified plans, targeted for January 2027. Planner Plan 1 and Plan 3 licensing and self-service trials are the controls to check before it lands."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "January CY2027"
previewDate: null
risk: "low"
cost: "medium"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "per-user"
  notes: "The Planner service description lists Sprints and Backlogs with Planner Plan 1 and Planner and Project Plan 3, currently only in premium plans. Whether sprints in unified plans keep the same entitlement is not yet published."
audiences: ["m365-admin","service-owner","finops","change-adoption"]
tags: ["planner","licensing","license-requests","m365-admin-center"]
sources:
  - title: "Planner: Sprints and backlogs in unified plans"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=581629"
    kind: "roadmap"
  - title: "Microsoft Planner service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-planner-service-description"
    kind: "learn"
  - title: "Microsoft Planner for admins"
    url: "https://learn.microsoft.com/planner/planner-for-admins"
    kind: "learn"
  - title: "Understand Planner trials and license assignments"
    url: "https://learn.microsoft.com/planner/understand-planner-trial-and-license-assignments"
    kind: "learn"
  - title: "Security, privacy, and compliance in Microsoft Planner"
    url: "https://learn.microsoft.com/planner/planner-security-privacy-compliance"
    kind: "learn"
  - title: "Microsoft Planner support in Microsoft Purview"
    url: "https://learn.microsoft.com/planner/planner-in-purview"
    kind: "learn"
  - title: "Disable the conversion of basic plans by users into premium plans"
    url: "https://learn.microsoft.com/planner/allow-data-flow-to-dataverse"
    kind: "learn"
  - title: "Manage self-service purchases and organizational trials for Microsoft Project"
    url: "https://learn.microsoft.com/project-for-the-web/manage-self-service-purchases-org-trials-for-msproject"
    kind: "learn"
  - title: "plan resource type"
    url: "https://learn.microsoft.com/graph/api/resources/plan?view=graph-rest-beta"
    kind: "learn"
  - title: "Which users hold Planner Plan 1 or Planner and Project Plan 3, the licences that include Sprints and Backlogs (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Which users hold Planner Plan 1 or Planner and Project Plan 3, the licences that include Sprints and Backlogs (PowerShell)"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
  - title: "Whether users can start self-service trials or purchases of Planner Plan 1 or Project Plan 3 (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/commerce/subscriptions/manage-self-service-purchases-admins"
    kind: "learn"
  - title: "Whether users can start self-service trials or purchases of Planner Plan 1 or Project Plan 3 (PowerShell)"
    url: "https://learn.microsoft.com/microsoft-365/commerce/subscriptions/allowselfservicepurchase-powershell"
    kind: "learn"
videos: []
related: ["planner-local-custom-fields-columns","planner-capacity-view","planner-add-times-to-task-start-finish-and-due-dates"]
controls:
  - governs: "Which users hold Planner Plan 1 or Planner and Project Plan 3, the licences that include Sprints and Backlogs"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "Entitlement per the Planner service description, which says the feature is currently available only in premium plans."
  - governs: "Whether users can start self-service trials or purchases of Planner Plan 1 or Project Plan 3"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org settings > Services > Self-service trials and purchases > product > Do not allow"
      docs: "https://learn.microsoft.com/microsoft-365/commerce/subscriptions/manage-self-service-purchases-admins"
    api:
      kind: "powershell"
      call: "Update-MSCommerceProductPolicy -PolicyId AllowSelfServicePurchase -ProductId CFQ7TTC0HDB1 -Value \"Disabled\""
      docs: "https://learn.microsoft.com/microsoft-365/commerce/subscriptions/allowselfservicepurchase-powershell"
    note: "Admin centre: Global Administrator. MSCommerce: Global or Billing Administrator. Set per product; Project Plan 3 is CFQ7TTC0HDB0. Up to 72 hours to take effect."
  - governs: "Switch for sprints and backlogs separate from the user's licence"
    scope: "tenant"
    ui: null
    api: null
    note: "Not documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-11-18T18:32:08"
changes:
  - date: "2026-11-26"
    note: "New briefing: sprints and backlogs planned for Planner unified plans, with the Planner Plan 1 and Plan 3 licensing and self-service trial controls."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 59 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 59
  confirmed: 56
  unconfirmed: 1
  contradicted: 2
  attempts: 1
  hash: "a6136aee1fd04aaefe5b4d0581edeeac"
---

## What's changing

Microsoft plans to bring sprints and backlogs to unified plans in Planner. The roadmap item states that users will be able to organise and prioritise work in a product backlog, plan time-boxed sprints and focus on the current sprint, and that sprint planning stays separate from buckets, so teams can continue using buckets to organise work.

Microsoft Learn does not describe sprints in unified plans yet, so what follows about the feature's behaviour is the roadmap's description. Today the [Microsoft Planner service description](https://learn.microsoft.com/office365/servicedescriptions/microsoft-planner-service-description) lists Sprints and Backlogs with a footnote that says "Currently available only in premium plans". Premium plans are the plans formerly known as projects in Project for the web, backed by Dataverse. Microsoft's [Planner for admins](https://learn.microsoft.com/planner/planner-for-admins) page says basic plans are now unified plans, that premium capabilities are increasingly available in unified plans based on the licences assigned to individual users, and that a unified plan does not require every member to have the same licence.

Microsoft has not stated whether sprints appear for licensed users automatically on arrival or need an action first. The roadmap item gives the status as In development, with General Availability targeted for January CY2027, for the Worldwide (Standard Multi-Tenant) cloud on Desktop and Web.

## Why it matters

The decision this change brings is about licences rather than settings. According to the service description, Sprints and Backlogs come with Planner Plan 1 and Planner and Project Plan 3, not with Microsoft 365 or Microsoft 365 Copilot. Once sprints sit in the unified plans that most teams already use, expect teams that run agile work to ask for those licences, or to start the 30-day Planner and Project Plan 3 trial from inside Planner, which Microsoft says includes sprints. Licence requests are likely to rise in project-heavy business units from January 2027.

Microsoft has not stated what happens on arrival, and no source says existing plans or buckets change; the roadmap says buckets stay available. Plan for questions from mixed-licence teams, because Microsoft says the capabilities available to each member of a unified plan depend on that member's licence.

## Risk assessment

**Data exposure**
- No new audience is described. Microsoft's [security page for Planner](https://learn.microsoft.com/planner/planner-security-privacy-compliance) says access to a plan is defined by its container, such as a group, meeting or channel, and the roadmap describes sprints as a way to organise work inside a plan.
- Where sprint and backlog data is stored for unified plans is not yet documented. Microsoft documents that basic plan data is stored in Azure and premium plan data in Dataverse, and the [Planner Purview page](https://learn.microsoft.com/planner/planner-in-purview) lists premium plans as unsupported for eDiscovery. Compliance teams should confirm coverage before relying on it.

**Security & identity**
- No change: Microsoft states there are no special administrative roles for Planner, and the roadmap describes no new sign-in or identity.

**Autonomy & actions**
- No change: the roadmap describes planning that users do themselves and no automated actions.

**Change & support**
- Members of one unified plan can hold different licences. What a member with only a Microsoft 365 licence can do with sprints in a unified plan is not yet published.
- Users can start a Planner trial from inside Planner. The Self-service trials and purchases setting for Planner Plan 1 and Project Plan 3 (row 2) decides whether they can, and a change does not affect trials already started.

## Cost and licensing

**Licence.** The [Microsoft Planner service description](https://learn.microsoft.com/office365/servicedescriptions/microsoft-planner-service-description) marks Sprints and Backlogs "Yes" for Planner Plan 1 and Planner and Project Plan 3, and "No" for Microsoft Planner included in Microsoft 365 and for Microsoft 365 Copilot. Its footnote says the feature is currently available only in premium plans. Whether sprints in unified plans keep the same entitlement is not yet published; the [Planner for admins](https://learn.microsoft.com/planner/planner-for-admins) page says additional capabilities in unified plans depend on whether the user has Microsoft Copilot, Planner Plan 1 or Planner and Project Plan 3.

**Trials.** Microsoft's [Planner trials page](https://learn.microsoft.com/planner/understand-planner-trial-and-license-assignments) says users who follow the prompts in Planner get a 30-day trial of Planner and Project Plan 3, which includes sprints, and can request a licence from their administrator when it ends. Trial licences are also available for Planner Plan 1, and the [MSCommerce reference](https://learn.microsoft.com/microsoft-365/commerce/subscriptions/allowselfservicepurchase-powershell) lists Planner Plan 1 as having a trial without a payment method.

**Indirect costs.** Admin time to process licence requests and self-service trial subscriptions, and to brief project teams and the service desk.

## Scope

- **Users:** per the service description, users with Planner Plan 1 or Planner and Project Plan 3; see Cost and licensing for the open point on unified plans.
- **Roles:** Microsoft states there are no special administrative roles for Planner. Changing the self-service setting in the Microsoft 365 admin center needs the Global Administrator role; changing it with the MSCommerce module needs the Global or Billing Administrator role.
- **Clouds:** Worldwide (Standard Multi-Tenant) on the roadmap item. US Government clouds are not listed.
- **Platforms:** Desktop and Web.
- **Status:** In development, with General Availability targeted for January CY2027.

## Governance guidance

### Before rollout
- List which users hold Planner Plan 1 or Planner and Project Plan 3 licences (row 1) and which teams run sprints in premium plans today.
- Decide whether users may start Planner Plan 1 or Project Plan 3 trials themselves, and set Self-service trials and purchases for each product to match (row 2).
- Agree a licence request route for project teams, so requests that follow a Planner trial reach whoever approves Planner licences.

### At rollout
- Watch Message center for a post on roadmap item 581629 that states the default and the rollout window.
- Test in a pilot unified plan with one member who holds Planner Plan 1 or Plan 3 and one with only a Microsoft 365 licence, and record what each can do with sprints and backlogs.
- Brief the service desk that sprints sit alongside buckets, which the roadmap says teams can keep using.

### After rollout
- Review self-service trial subscriptions in the Microsoft 365 admin center under Billing > Your products > Self-service trials, and take over any that conflict with central licensing.
- Assign licences centrally (row 1) to users who still need sprints when a trial ends.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold Planner Plan 1 or Planner and Project Plan 3, the licences that include Sprints and Backlogs</strong><br><small>User</small><br><small class="controls__note">Entitlement per the Planner service description, which says the feature is currently available only in premium plans.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users can start self-service trials or purchases of Planner Plan 1 or Project Plan 3</strong><br><small>Tenant</small><br><small class="controls__note">Admin centre: Global Administrator. MSCommerce: Global or Billing Administrator. Set per product; Project Plan 3 is CFQ7TTC0HDB0. Up to 72 hours to take effect.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › Services › Self-service trials and purchases › product › Do not allow <a href="https://learn.microsoft.com/microsoft-365/commerce/subscriptions/manage-self-service-purchases-admins" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-MSCommerceProductPolicy -PolicyId AllowSelfServicePurchase -ProductId CFQ7TTC0HDB1 -Value &quot;Disabled&quot;</code> <a href="https://learn.microsoft.com/microsoft-365/commerce/subscriptions/allowselfservicepurchase-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Switch for sprints and backlogs separate from the user's licence</strong><br><small>Tenant</small><br><small class="controls__note">Not documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no setting that turns sprints and backlogs on or off separately from the licence at the time of writing (November 2026); the service description ties the feature to the user's licence (row 1). The self-service policy is managed per product: Planner Plan 1 is ProductId CFQ7TTC0HDB1 and Project Plan 3 is CFQ7TTC0HDB0, and each is set on its own. Microsoft says a change can take up to 72 hours and does not affect existing trials or purchases. The value OnlyTrialsWithoutPaymentMethod allows free trials but not purchases. Microsoft's Project for the web page says that when trials are disabled, users are offered a licence request instead.

## Open questions

- Will sprints and backlogs in unified plans keep the Planner Plan 1 and Planner and Project Plan 3 entitlement, and what can plan members with only a Microsoft 365 licence see or edit? Watch the Planner service description.
- Will sprints appear for licensed users automatically in January 2027, or does a plan owner or administrator have to turn them on? Watch Message center.
- Where is sprint and backlog data stored for unified plans, and is it covered by Microsoft Purview eDiscovery for Planner? Watch the Planner Purview page.
- Can teams move existing sprints from premium plans into unified plans?
- Will the Planner unified plans Graph API (beta) expose sprints and backlogs for reporting and automation?

<!-- rationale
risk: Low. Sprints and backlogs organise tasks inside plans whose access is already defined by the plan's container, and the roadmap describes no new data access or automation.
cost: Medium. Microsoft's Planner service description lists Sprints and Backlogs for Planner Plan 1 and Planner and Project Plan 3, not for Microsoft 365 or Microsoft 365 Copilot, so teams that want sprints need one of those per-user subscriptions.
impact: Medium. Project and delivery teams with Planner Plan 1 or Planner and Project Plan 3 licences notice it; the roadmap says teams can keep using buckets as they do today.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters / behaviour: Most teams already use unified plans. | Found: Searched: Planner unified plans most teams adoption usage. Read Planner for admins and service description, and search excerpts from Planner tasks and plans API overview and Manage the Planner app; none quantifies teams using unified plans. | Fix: Remove 'that most teams already use' from 'Once sprints sit in the unified plans that most teams already use'.
- [contradicted, blocker] rationale: cost / licensing: Teams that want sprints need Planner Plan 1 or Planner and Project Plan 3 per-user subscriptions. | Found: In premium plans, Microsoft 365 users can use the capabilities included with their license and have view-only access to all other premium capabilities. | Fix: Replace the cost rationale with: 'Medium. The service description lists Sprints and Backlogs for Planner Plan 1 and Planner and Project Plan 3, currently only in premium plans; Microsoft 365 users have view-only access to other premium capabilities. Unified-plan sprint entitlements are not yet published.' This retains the source's viewing qualification without asserting a final licence requirement for the planned extension. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-planner-service-description
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model / licensing: Planner Plan 1 and Planner and Project Plan 3 use per-user subscriptions. | Found: Planner and Project Plan 3: $30.00 user/month, paid yearly. Planner Plan 1: $10.00 user/month, paid yearly. | Fix: Add https://www.microsoft.com/microsoft-365/planner/microsoft-planner-business-plans-and-pricing to sources to support the per-user subscription model; no price need be added. | Source: https://www.microsoft.com/microsoft-365/planner/microsoft-planner-business-plans-and-pricing
- [contradicted, minor] Governance guidance: After rollout; Governance controls table / consistency: The checklist tells readers to review and take over self-service subscriptions, but the controls table contains no corresponding row. | Found: Review self-service trial subscriptions ... and take over any that conflict with central licensing. Table rows cover user licence assignment, allowing self-service trials/purchases, and the absent sprint switch, not subscription review or takeover. | Fix: Remove the After rollout bullet 'Review self-service trial subscriptions in the Microsoft 365 admin center under Billing > Your products > Self-service trials, and take over any that conflict with central licensing.' No new control row is requested.
-->
