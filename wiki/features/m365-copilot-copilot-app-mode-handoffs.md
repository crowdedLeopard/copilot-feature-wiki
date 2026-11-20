---
title: "Microsoft Copilot app: Chat suggests a better-fit mode such as Cowork"
slug: "m365-copilot-copilot-app-mode-handoffs"
roadmapId: 577841
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Chat in the Copilot app will show a card suggesting a better-fit mode, such as Cowork, and carry the chat into it. Only users with access to that mode see it. No admin action is required, but Cowork use is metered."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "variable"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "mixed"
  notes: "Microsoft's usage-based billing page lists Cowork as requiring a Copilot licence, and Cowork usage counts towards consumption. No licence or meter specific to the suggestion card is published."
audiences: ["m365-admin","finops","change-adoption"]
tags: ["copilot","copilot-chat","cowork","spending-policies","usage-based-billing","user-experience"]
sources:
  - title: "Microsoft 365 Roadmap 577841"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577841"
    kind: "roadmap"
  - title: "MC1536065: (Updated) Microsoft 365 Copilot: Suggestions to continue in another Copilot experience"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1536065"
    kind: "message-center"
  - title: "Manage Copilot Cowork for your organization"
    url: "https://learn.microsoft.com/copilot/cowork/cowork-admin-governance"
    kind: "learn"
  - title: "Determine access controls for Copilot Cowork"
    url: "https://learn.microsoft.com/copilot/cowork/cowork-access"
    kind: "learn"
  - title: "Understand usage-based billing and cost management for Copilot Credits"
    url: "https://learn.microsoft.com/copilot/plan/usage-based-billing-overview-copilot-credits"
    kind: "learn"
  - title: "Application card: Microsoft Copilot Cowork"
    url: "https://learn.microsoft.com/copilot/cowork/responsible-ai/copilot-cowork-application-card"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
  - title: "Managing AI experiences enabled by usage-based billing"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    kind: "learn"
  - title: "Which users and groups can use Cowork, and so be offered it (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicyservicesetting-update"
    kind: "learn"
  - title: "Monthly credit limits on a spending policy that selects Cowork (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    kind: "learn"
  - title: "Credit consumption by service, including Cowork (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-monitor-spending"
    kind: "learn"
  - title: "Credit consumption by service, including Cowork (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/costmanagementuserusageservicedetail-list"
    kind: "learn"
videos: []
related: ["spending-policies","copilot-credits","m365-copilot-chat-usage-based-billing-models-model-selector"]
controls:
  - governs: "Switch that turns the Chat mode suggestion off"
    scope: "tenant"
    ui: null
    api: null
    note: "No tenant, group or user setting for the suggestion card is documented at the time of writing (November 2026). Spending policy scope below controls who can be offered Cowork."
  - governs: "Which users and groups can use Cowork, and so be offered it"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > + Add spending policy > Identity > Scope user and group > Specific groups > group > Select agents and services > Cowork"
      docs: "https://learn.microsoft.com/copilot/cowork/cowork-admin-governance"
    api:
      kind: "graph"
      call: "PATCH /beta/copilot/costManagement/spendingPolicies/{id}/serviceSettings/{serviceId}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicyservicesetting-update"
    note: "The request body sets state; Learn's example uses serviceId cowork with state disabled. Scope of users comes from the policy's groups. Beta API."
  - governs: "Monthly credit limits on a spending policy that selects Cowork"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > policy > Spending limits"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    api:
      kind: "graph"
      call: "PATCH /beta/copilot/costManagement/spendingPolicies/{id}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    note: "The request body can set periodLimit and perUserLimit. A low limit does not block access to Cowork; remove users from the policy scope to do that."
  - governs: "Credit consumption by service, including Cowork"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Consumption"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-monitor-spending"
    api:
      kind: "graph"
      call: "GET /beta/copilot/costManagement/usageReports/userUsageDetails/{userId}/services"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/costmanagementuserusageservicedetail-list"
    note: "This operation splits one user's consumption by governed service for a time window. Learn lists further usage reports by group, service and funding class."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-11-17T18:36:41"
changes:
  - date: "2026-11-20"
    note: "First briefing for this roadmap item, covering the Chat mode suggestion, the Cowork access and billing controls behind it, and the November and December 2026 rollout windows."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 62 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected the admin path for the Cowork spending policy to include the Identity policy type and group scope steps, and removed the billing method from the pre-rollout checklist."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 59 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-20"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 59
  confirmed: 59
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "387bab85849670ef95419bdc058a7077"
---

## What's changing

The Chat experience in the Copilot app will suggest a better-fit mode after a user sends a prompt, where one applies. The roadmap item gives Cowork as the example and says other supported modes will be suggested as they become available. The user sees a suggestion card that explains why the mode fits and offers a switch, and the chat conversation is attached to the prompt in the new mode to keep context.

Microsoft's notice MC1536065 adds detail. The suggestion appears as a banner, with an option to switch or to stay in Chat. If the user switches, they go directly to the suggested experience with the prompt already sent and the Chat context attached. Users see suggestions only for experiences they can access, so a user without access to Cowork does not see a Cowork suggestion. The notice does not say how Copilot decides that a mode fits better.

The roadmap item is listed as Rolling out, with a target of November CY2026, for Worldwide (Standard Multi-Tenant), on the Web platform, at General Availability. MC1536065 (updated 13 November 2026) gives the Standard (Worldwide) schedule as beginning in mid-November 2026 and expected to complete by late November 2026, and the Deferred (Worldwide) schedule as beginning in mid-December 2026 and expected to complete by late December 2026. Microsoft Learn does not describe the suggestion card itself at the time of writing (November 2026), so its behaviour here is as the roadmap item and the notice describe it.

## Why it matters

The card is a prompt towards an experience that costs money. Microsoft's Cowork page says users in the scope of a spending policy that selects Cowork can use Cowork, and that Cowork activity counts towards the organisation's consumption. Expect users who already hold that access to move work from Chat into Cowork more often, and so to use more Copilot Credits than before.

Microsoft's notice says no admin action is required and gives no act-by date. The wiki's view is that the useful preparation is a review of who sits inside Cowork-granting spending policies, and a short note to the help desk, because the card makes that group's access visible to them. Microsoft Learn documents no setting that turns the suggestion off at the time of writing (November 2026), so the spending policy is the lever you have.

## Risk assessment

**Data exposure**
- The conversation context from Chat is attached to the prompt in the new mode. The notice does not say how much of the conversation is attached beyond "the context from their Chat conversation". Microsoft's Cowork application card says Cowork operates within the user's existing permissions and security boundaries, so the exposure is the user's own content, moved between two Copilot modes.

**Security & identity**
- No new access is granted by the card: the notice says suggestions appear only for experiences the user can access. Who can see a Cowork suggestion therefore follows who is in scope of a spending policy that selects Cowork.

**Autonomy & actions**
- Switching is the user's choice, but it moves a prompt from Chat into Cowork, which Microsoft describes as carrying out multi-step tasks such as sending emails and scheduling meetings, with sensitive actions needing the user's explicit approval. Brief users that accepting the card starts that kind of work.

**Change & support**
- Users will see a new card in Chat. The notice suggests informing users and the help desk that Copilot may suggest another mode. A dedicated tenant switch for the card is not documented, so questions about it are answered through access rather than a setting.

## Cost and licensing

Cowork is listed on Microsoft's usage-based billing page as requiring a Copilot licence, and Microsoft's Cowork page says model responses, tool and skill calls, image generation and browser tasks count towards the organisation's consumption. The meter is Copilot Credits under usage-based billing, and use is monitored in the Microsoft 365 admin center under Copilot > Cost Management.

Cowork access is granted by a spending policy that selects Cowork. Microsoft states that a low credit limit does not block access, and that removing a user from every spending policy that includes Cowork is how to remove access. The page for spending policies adds that the **Auto-apply new services** toggle is selected by default, so newly supported services are added to such a policy automatically unless the toggle is turned off.

Microsoft Learn publishes no separate charge or meter for the suggestion card itself at the time of writing (November 2026). Microsoft's notice asks administrators to consider reviewing which users are in a spending policy that grants Cowork access and to confirm the intended usage-based billing configuration. The indirect cost is admin time and user communication.

## Scope

The roadmap item lists Worldwide (Standard Multi-Tenant) only, for the Web platform, at General Availability. The notice names users who have access to supported Copilot modes, such as Cowork, as affected, and says only users who have the mode enabled see the experience.

Cowork access requires membership of a spending policy that selects Cowork, and Microsoft's usage-based billing page lists a Copilot licence as required. Microsoft's Cowork page says the old agent entry under Agents > All Agents no longer controls access. The Standard schedule runs from mid-November 2026 and the Deferred schedule from mid-December 2026, as MC1536065 gives them.

## Governance guidance

### Before rollout
- Review every spending policy that selects Cowork in Copilot > Cost Management > Configuration, and confirm that the users and groups in scope are the people you want to be offered Cowork.
- Check any monthly or per-user limits on those policies, remembering that a limit does not remove access.
- Tell the help desk and Copilot champions that Chat may suggest another mode after a prompt, and that accepting it carries the conversation across.

### At rollout
- Confirm which schedule your tenant is on (Standard from mid-November 2026, or Deferred from mid-December 2026) before telling users the card is live.
- Ask a pilot user with Cowork access to send a prompt in Chat and report what the card says and what arrives in Cowork.
- Remove users from every Cowork-selecting spending policy where the card should not be offered.

### After rollout
- Watch Copilot Credit use for Cowork in Copilot > Cost Management > Consumption, and compare it with the period before the card arrived.
- Raise any request for a tenant switch for the card through Microsoft support, and watch Message center for a post that adds one.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Switch that turns the Chat mode suggestion off</strong><br><small>Tenant</small><br><small class="controls__note">No tenant, group or user setting for the suggestion card is documented at the time of writing (November 2026). Spending policy scope below controls who can be offered Cowork.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users and groups can use Cowork, and so be offered it</strong><br><small>Group</small><br><small class="controls__note">The request body sets state; Learn's example uses serviceId cowork with state disabled. Scope of users comes from the policy's groups. Beta API.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › + Add spending policy › Identity › Scope user and group › Specific groups › group › Select agents and services › Cowork <a href="https://learn.microsoft.com/copilot/cowork/cowork-admin-governance" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/costManagement/spendingPolicies/{id}/serviceSettings/{serviceId}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicyservicesetting-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Monthly credit limits on a spending policy that selects Cowork</strong><br><small>Group</small><br><small class="controls__note">The request body can set periodLimit and perUserLimit. A low limit does not block access to Cowork; remove users from the policy scope to do that.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › policy › Spending limits <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/costManagement/spendingPolicies/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Credit consumption by service, including Cowork</strong><br><small>Tenant</small><br><small class="controls__note">This operation splits one user's consumption by governed service for a time window. Learn lists further usage reports by group, service and funding class.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Consumption <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-monitor-spending" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>GET /beta/copilot/costManagement/usageReports/userUsageDetails/{userId}/services</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/costmanagementuserusageservicedetail-list" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No setting that turns the Chat suggestion off is documented, so the table has a row for that gap. Access to Cowork, and therefore who can be offered it, is decided by spending policy scope, not by the Cowork entry under Agents > All Agents.

The spending policy rows govern Cowork, the destination, not the card. Microsoft states that precedence between overlapping policies decides which limits apply and not whether access is granted, and that a more restrictive policy does not override a more permissive one. The Microsoft Graph cost management operations are beta APIs that Microsoft says are subject to change.

## Open questions

- Will Microsoft add an admin setting to turn the mode suggestion off for a tenant or a group? Watch the Microsoft 365 admin center Copilot settings page and Message center.
- Which parts of the Chat conversation are attached when a user switches to Cowork, and does that depend on sensitivity labels on the content? Watch Microsoft Learn's Cowork pages.
- Which modes besides Cowork will be suggested, and will each be gated by its own access control? Watch MC1536065 and the roadmap item.
- Does the suggestion text or the prompt sent to Cowork appear in audit records or the Copilot Credits reports? Watch the Cowork usage and Cost Management reporting pages.

<!-- rationale
risk: Low. Microsoft's notice says users see suggestions only for modes they can already access, and the user chooses whether to switch, so the card grants no new access.
cost: Variable. Switching leads into Cowork, which needs a Copilot licence and whose usage counts as Copilot Credit consumption under usage-based billing. No separate charge for the card itself is documented.
impact: Medium. Users who already have Cowork (or another supported mode) will see the card in Chat; users without access should not, so the audience is a subset of users, not everyone.
-->

<!-- verifier-findings (2026-11-20, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[3].ui; Cost and licensing; Governance guidance: After rollout / admin-path: Copilot > Cost Management > Consumption in the Microsoft 365 admin center is the reporting surface for Cowork service consumption. | Found: Select the Consumption tab. ... The Policies view is the default view ... In the Agents and services view, review usage for supported services. For example, Cowork and Work IQ API. | Fix: Complete controls[3].ui.path and the corresponding monitoring instruction as 'Copilot > Cost Management > Consumption > Agents and services'; the printed path stops on the right page, whose default view is Policies. Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-monitor-spending. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-monitor-spending
- [supported, minor] controls[3].note / behaviour: Learn lists further API usage reports by group, service and funding class. | Found: usage reports that break down consumption by user, security group, governed service, and funding class. | Fix: Add https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview to sources for the sentence about further reports by group, service and funding class. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview
-->
