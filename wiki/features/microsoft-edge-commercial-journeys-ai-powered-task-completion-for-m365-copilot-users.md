---
title: "Microsoft Edge: Commercial Journeys (Get things done) task cards on the Copilot new tab page"
slug: "microsoft-edge-commercial-journeys-ai-powered-task-completion-for-m365-copilot-users"
roadmapId: 561040
topic: "m365-copilot"
products: ["Microsoft Edge","Microsoft Copilot (Microsoft 365)"]
summary: "Edge plans AI task cards on the Copilot new tab page for Microsoft 365 Copilot (Premium) users. Learn says it is off until an admin enables a policy, and it needs Work IQ usage-based billing."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "November CY2026"
risk: "low"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn lists a Microsoft 365 Copilot premium licence or a higher tier as a prerequisite, plus Work IQ API access, which Learn says requires usage-based billing. The Work IQ overview says Work IQ API usage consumes Copilot Credits. A rate for this feature is not yet published."
audiences: ["m365-admin","service-owner","finops","change-adoption"]
tags: ["microsoft-edge","edge-for-business","m365-copilot","copilot-chat","work-iq","usage-based-billing","copilot-credits"]
sources:
  - title: "Microsoft 365 Roadmap 561040"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=561040"
    kind: "roadmap"
  - title: "Commercial Journeys (Get things done) in Microsoft Edge"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-management-commercial-journeys"
    kind: "learn"
  - title: "Configure the Copilot new tab page"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-management-configure-the-copilot-new-tab-page"
    kind: "learn"
  - title: "Get started with configuration policies"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-management-service"
    kind: "learn"
  - title: "CopilotNewTabPageEnabled"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/copilotnewtabpageenabled"
    kind: "learn"
  - title: "Work IQ overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/"
    kind: "learn"
  - title: "Work IQ API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/api-overview"
    kind: "learn"
  - title: "Enable your tenant for Work IQ"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq"
    kind: "learn"
  - title: "Understand usage-based billing and cost management for Copilot Credits"
    url: "https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits"
    kind: "learn"
  - title: "Update spendingPolicy"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    kind: "learn"
  - title: "Assign or unassign licenses for users in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Assign Microsoft 365 licenses to user accounts with PowerShell"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
videos: []
related: ["microsoft-edge-upgraded-copilot-new-tab-page","work-iq","copilot-credits","spending-policies"]
controls:
  - governs: "Whether Commercial Journeys (Get things done) is available to users"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Microsoft Edge > Copilot"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-management-commercial-journeys"
    api: null
    note: "Hidden policy CommercialJourneysGetThingsDoneEnabled, reached at https://admin.cloud.microsoft/#/Edge/Copilot; Learn gives no setting label. Feature is in Canary, subject to change before Stable."
  - governs: "Whether the Copilot new tab page, which hosts the task cards, is on for a user or group"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Microsoft Edge > Copilot > Copilot new tab page"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-management-configure-the-copilot-new-tab-page"
    api: null
    note: "Prerequisite on the Commercial Journeys page. Global admin or Edge admin sign-in. Entra ID profiles only. Windows registry: SOFTWARE\\Policies\\Microsoft\\Edge, CopilotNewTabPageEnabled, REG_DWORD 0x00000001; no command printed."
  - governs: "Spending on Work IQ API usage, a prerequisite of this feature"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost management"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits"
    api:
      kind: "graph"
      call: "PATCH /beta/copilot/costManagement/spendingPolicies/{id}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    note: "Beta API. The request body can update periodLimit, perUserLimit and billingMethods. The pages name Work IQ API, not Commercial Journeys."
  - governs: "Which users hold the Microsoft 365 Copilot (Premium) licence the feature requires"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Licenses > product > Assign licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "At least License Administrator or User Administrator."
confidence: "high"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-10-02T22:01:21"
changes:
  - date: "2026-11-21"
    note: "First briefing: Learn says Get things done is off by default, needs a Premium licence, the Copilot new tab page and Work IQ usage-based billing; the roadmap targets January CY2027."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 61 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected the Edge management service path to Settings > Microsoft Edge in the Microsoft 365 admin center, removed two unsupported policy 'commands', and dropped the Work IQ setup step from the pre-rollout checklist."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 80 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-21"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 80
  confirmed: 79
  unconfirmed: 1
  contradicted: 0
  attempts: 0
  hash: "1f8e06002a1f333f2d956fcab003eb2a"
---

## What's changing

Commercial Journeys, shown to users as **Get things done**, is a planned Microsoft Edge feature that proactively surfaces new, unfinished and recurring work as task cards on the Copilot new tab page. The roadmap item says each card explains why the task matters now, and that one click opens a guided flow that produces ready-to-use outputs such as emails, documents and presentations.

Microsoft's [Learn page for the feature](https://learn.microsoft.com/deployedge/microsoft-edge-management-commercial-journeys) says the cards are generated from Microsoft 365 work data available to the user through Work IQ, which applies the user's existing Microsoft 365 permissions and organisational controls. Opening a card starts a guided experience in Microsoft 365 Copilot Chat, and Learn says users remain in control of reviewing and refining the result. Generated Journey and task card data is stored locally in Microsoft Edge for up to 14 days.

Learn says the feature is off by default: an administrator must explicitly enable the `CommercialJourneysGetThingsDoneEnabled` policy before eligible users can access it. Once the policy is enabled and its dependencies are available, Learn says the feature reaches eligible users without an additional user consent step, and users can turn **Get things done** off in Microsoft Edge settings.

The roadmap record gives the status as In development, with a target of January CY2027 and a preview date of November CY2026, for Worldwide (Standard Multi-Tenant) on the Web platform, release phase General Availability. The Learn page says the feature is coming soon to Microsoft Edge for Business, is available in the Edge Canary channel, and is subject to change before Stable release, so treat its details as a pre-release description.

## Why it matters

This puts AI-generated work suggestions on the page users see most often, built from mailbox, file and meeting data through Work IQ, and it ties the feature to a metered service. For a service owner the decision is less about the Edge policy and more about whether the organisation wants Work IQ API usage-based billing in place for it.

Because Learn says the feature is off until the policy is enabled, nothing reaches users if nobody acts. Learn also says that enabling the policy does not enable the Copilot new tab page, configure Work IQ or grant Work IQ access, so a rollout needs three separate steps agreed between the Edge, Copilot and finance owners.

## Risk assessment

**Data exposure**
- Task cards are generated from Microsoft 365 data through Work IQ. Learn says the cards do not change the user's permissions or provide access to content the user could not otherwise access. Expect them to reflect whatever the user can already reach, so existing oversharing in SharePoint or mailboxes carries into the cards.
- Generated Journey and task card data is stored locally in Edge for up to 14 days. Learn says turning the feature off prevents cards being shown to that user and deletes the data. Confirm with Microsoft how that local copy is protected on shared or unmanaged devices.

**Security & identity**
- Work IQ needs a one-time tenant setup by a user with the Global Administrator role. Learn describes that setup as creating the Work IQ service principal in the organisation so applications can request tokens for it, so it is a tenant step and not a setting for this feature alone.
- Work IQ applies the user's existing Microsoft 365 permissions and organisational controls, so existing sensitivity labels and access settings stay the main safeguard.

**Autonomy & actions**
- Opening a card starts a guided flow in Microsoft 365 Copilot Chat that produces outputs such as emails, documents or presentations. Learn says the user reviews and refines the result, so review of outputs is a user habit to reinforce, not a setting.

**Change & support**
- The feature depends on a Premium licence, the Copilot new tab page and Work IQ access. If one is missing, expect users to ask why no cards appear; Learn says the policy only works "when the policy is enabled and its dependencies are available".
- Learn calls the policy hidden and the page is marked as subject to change before Stable, so check it again before rollout.

## Cost and licensing

**Licence.** Learn lists a Microsoft 365 Copilot premium licence or a higher tier as the first prerequisite, and the roadmap item says the feature is available to users with a Microsoft 365 Copilot Premium licence in Edge.

**Meter.** Learn lists Work IQ API access as a prerequisite and says Work IQ requires usage-based billing and one-time tenant setup by an administrator. The [Work IQ overview](https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/) says Work IQ API usage consumes Copilot Credits shared with other eligible services, that its cost is variable based on usage, and that it can be managed in the Microsoft 365 admin center. Setting up Work IQ needs a usage-based billing plan in Copilot Studio with an Azure subscription and resource group assigned ([Enable your tenant for Work IQ](https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq)). The same overview says Work IQ is available to Microsoft 365 Copilot licensed users in all Microsoft 365 Copilot experiences, subject to usage-based billing for custom and third-party agents. Learn does not say which of these applies to a Commercial Journeys task card.

**Where charges are managed.** The [usage-based billing overview](https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits) lists Work IQ API among the services whose Copilot Credit consumption and spending admins can manage under Copilot > Cost management in the Microsoft 365 admin center. A credit rate for Commercial Journeys, and whether the guided flow in Copilot Chat consumes credits, are not yet published.

**Indirect cost.** Admin time for the Global Administrator setup, licence assignment and a pilot.

## Scope

**Users and licences.** Learn lists a Microsoft 365 Copilot premium licence or a higher tier, the Copilot new tab page enabled for the user, and Work IQ API access available to the user.

**Roles.** The Copilot new tab page article describes signing in to the Edge management service with a Global admin or Edge admin account. Work IQ setup needs the Global Administrator role. Assigning licences needs at least the License Administrator or User Administrator role.

**Clouds and platforms.** The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform.

**Rollout.** The roadmap item targets January CY2027 with a preview in November CY2026. Learn says the feature is in the Edge Canary channel and is coming soon to Microsoft Edge for Business. The `CopilotNewTabPageEnabled` policy page says it applies only to Microsoft Entra ID profiles and not to Microsoft account profiles.

## Governance guidance

### Before rollout
- Check which users hold a Microsoft 365 Copilot (Premium) licence or higher, and assign licences to a pilot group in Microsoft 365 admin center > Billing > Licenses (License or User Administrator).
- Agree with finance whether Work IQ API usage-based billing is acceptable.
- Confirm the Copilot new tab page is enabled for the pilot group through the Edge management service, because enabling the Commercial Journeys policy does not enable it.
- Tell pilot users they can turn off Get things done in Microsoft Edge settings.

### At rollout
- Enable the `CommercialJourneysGetThingsDoneEnabled` policy for the pilot group in the Edge management service Copilot tab, not for the whole tenant.
- Check with pilot users that cards appear and that Copilot Chat opens the guided flow; if not, check the three prerequisites in turn.

### After rollout
- Review Copilot Credit consumption for Work IQ API in Microsoft 365 admin center > Copilot > Cost management and compare it with what the pilot expected.
- Re-read the Learn page when the feature reaches Stable, since Microsoft says its requirements and functionality may change before then.
- Disable the policy for any group where the cost or the cards are not wanted; Learn says disabling it turns the feature off.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Commercial Journeys (Get things done) is available to users</strong><br><small>Group</small><br><small class="controls__note">Hidden policy CommercialJourneysGetThingsDoneEnabled, reached at https://admin.cloud.microsoft/#/Edge/Copilot; Learn gives no setting label. Feature is in Canary, subject to change before Stable.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft Edge › Copilot <a href="https://learn.microsoft.com/deployedge/microsoft-edge-management-commercial-journeys" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the Copilot new tab page, which hosts the task cards, is on for a user or group</strong><br><small>Group</small><br><small class="controls__note">Prerequisite on the Commercial Journeys page. Global admin or Edge admin sign-in. Entra ID profiles only. Windows registry: SOFTWARE\Policies\Microsoft\Edge, CopilotNewTabPageEnabled, REG_DWORD 0x00000001; no command printed.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft Edge › Copilot › Copilot new tab page <a href="https://learn.microsoft.com/deployedge/microsoft-edge-management-configure-the-copilot-new-tab-page" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Spending on Work IQ API usage, a prerequisite of this feature</strong><br><small>Tenant</small><br><small class="controls__note">Beta API. The request body can update periodLimit, perUserLimit and billingMethods. The pages name Work IQ API, not Commercial Journeys.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost management <a href="https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/costManagement/spendingPolicies/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot (Premium) licence the feature requires</strong><br><small>User</small><br><small class="controls__note">At least License Administrator or User Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Licenses › product › Assign licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Three separate things must be in place before a user sees task cards: the Commercial Journeys policy, the Copilot new tab page and Work IQ access. Learn says enabling the Commercial Journeys policy does not enable the other two.

The Edge management service rows need a Global admin or Edge admin account. Learn describes the Commercial Journeys policy as hidden and gives the Copilot tab address in the Edge management service, not a setting label. Microsoft Learn's Edge policy reference has no page for `CommercialJourneysGetThingsDoneEnabled` at the time of writing (November 2026), so the policy name is given as Learn prints it.

The Cost management row governs Work IQ API usage, which Learn lists as a prerequisite. Learn does not say that Commercial Journeys usage appears under a spending policy, so confirm that before relying on a spending limit. Users can also turn Get things done off for themselves in Microsoft Edge settings, which Learn says deletes their card data.

## Open questions

- Does Commercial Journeys consume Copilot Credits when it generates task cards or runs the guided flow, and at what rate? Watch the Work IQ overview and the Cost management documentation.
- Will a spending policy in Copilot > Cost management apply to this feature's Work IQ usage? Watch the usage-based billing overview.
- Will the policy get a visible setting label, a policy reference page and an automation call before the feature reaches Stable? Watch the Commercial Journeys Learn page.
- Does the January CY2027 roadmap target hold, given that Learn describes the feature as in Canary only? Watch the roadmap item and Message center.

<!-- rationale
risk: Low. Learn says the feature is off until an administrator enables the CommercialJourneysGetThingsDoneEnabled policy, and it reads Microsoft 365 data through Work IQ under the user's existing permissions.
cost: Variable. Users need a Microsoft 365 Copilot (Premium) licence or higher, and Learn lists Work IQ API access, which needs usage-based billing in Copilot Credits, as a prerequisite. A credit rate for this feature is not yet published.
impact: Low. Learn says the feature is off by default, and it reaches only users with a Premium licence or higher whose tenant also has the Copilot new tab page and Work IQ access in place.
-->

<!-- verifier-findings (2026-11-21, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters / behaviour: The Copilot new tab page is the page users see most often. | Found: Searched: Commercial Journeys most often review administrator approval. Opened Commercial Journeys and Configure the Copilot new tab page. They identify the new tab surface but provide no comparison establishing that users see it more often than any other page. | Fix: Replace 'on the page users see most often' with 'on the Copilot new tab page' in the first sentence of Why it matters.
-->
