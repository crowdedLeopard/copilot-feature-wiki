---
title: "Customer Insights - Journeys: Journey Creation Agent builds journeys from a plain-language description"
slug: "dynamics-365-customer-insights-journeys-create-journeys-in-minutes-with-journey-creation-a"
roadmapId: 577418
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","Dynamics 365 Customer Insights - Journeys"]
summary: "Journey Creation Agent in Dynamics 365 Customer Insights - Journeys drafts journeys from typed descriptions, uses Anthropic models and Copilot credits, and has to be enabled by an administrator first."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "April CY2027"
previewDate: "June CY2026"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Microsoft Learn says the agent uses Copilot credits, with prepaid Copilot Studio capacity or pay-as-you-go billing. The credits it uses per journey are not yet published, and the Learn page lists no separate licence."
audiences: ["power-platform-admin","finops","security","service-owner"]
tags: ["customer-insights","dynamics-365","agents","ai","copilot-credits","usage-based-billing","power-platform-admin-center","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap 577418"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577418"
    kind: "roadmap"
  - title: "Journey Creation Agent in Customer Insights - Journeys (preview)"
    url: "https://learn.microsoft.com/dynamics365/customer-insights/journeys/journey-creation-agent"
    kind: "learn"
  - title: "Introduction to AI Hub in Customer Insights – Journeys (preview)"
    url: "https://learn.microsoft.com/dynamics365/customer-insights/journeys/ai-hub"
    kind: "learn"
  - title: "Manage prerequisites in AI Hub (preview)"
    url: "https://learn.microsoft.com/dynamics365/customer-insights/journeys/ai-hub-prerequisites"
    kind: "learn"
  - title: "Claude models from Anthropic in Microsoft Online Services"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connect-to-ai-subprocessor"
    kind: "learn"
  - title: "Allow external language models for generative responses"
    url: "https://learn.microsoft.com/power-platform/admin/allow-llm-generative-responses"
    kind: "learn"
  - title: "Tutorial: Manage Copilot Credits allocations programmatically"
    url: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    kind: "learn"
videos: []
related: ["copilot-credits","dynamics-365-customer-insights-data-agents-and-copilot-increase-ai-accuracy-by-grounding-a","microsoft-copilot-studio-introducing-an-app-and-intent-first-agent-creation-experience"]
controls:
  - governs: "Whether AI agents are on for Customer Insights - Journeys in an environment or environment group"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Copilot > Settings > Dynamics 365 Customer Insights – Journeys > AI agents > Use AI agents"
      docs: "https://learn.microsoft.com/dynamics365/customer-insights/journeys/ai-hub"
    api: null
    note: "Tenant administrator. Switching it off disables all active agents immediately."
  - governs: "Whether Journey Creation Agent is enabled in an environment"
    scope: "environment"
    ui:
      surface: "Customer Insights - Journeys"
      path: "Settings > AI Hub > Add and manage agents > Add an agent > Journey Creation Agent > Enable"
      docs: "https://learn.microsoft.com/dynamics365/customer-insights/journeys/ai-hub"
    api: null
    note: "Admin role by default; custom roles need agent settings permissions on the msdynmkt_agentsettings entity. Disable from the same area."
  - governs: "Copilot credits allocated to the environment and whether it can draw on tenant capacity"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Products > Copilot Studio > Manage Copilot Credits"
      docs: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    api:
      kind: "power-platform-api"
      call: "PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01 with entitlementId MCSMessages and a TenantPool enforcement rule"
      docs: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    note: "Power Platform Administrator or Global Administrator. General Copilot Studio credits control; Learn does not confirm it caps this agent beyond the link from the agent page."
  - governs: "Whether Anthropic models are available to the tenant and to which users"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > View all > AI providers operating as Microsoft subprocessors > Available subprocessors for your organization > Anthropic"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connect-to-ai-subprocessor"
    api: null
    note: "AI Administrator or Global Administrator. The same page lets you choose users or groups who can access Anthropic models."
  - governs: "Whether Anthropic models are allowed in a Power Platform environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features"
      docs: "https://learn.microsoft.com/power-platform/admin/allow-llm-generative-responses"
    api: null
    note: "Needs the provider enabled in Microsoft 365 first. Environment groups use the Power Platform Anthropic rule."
  - governs: "Whether data may move across regions for AI agents"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Generative AI features > Edit > Move data across regions"
      docs: "https://learn.microsoft.com/dynamics365/customer-insights/journeys/ai-hub-prerequisites"
    api: null
    note: "AI Hub prerequisite; if it is no longer accepted, enabled agents are automatically disabled."
  - governs: "Whether AI prompts are available in the environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Environments > environment > Settings > Product > Features > AI Builder > AI prompts"
      docs: "https://learn.microsoft.com/dynamics365/customer-insights/journeys/ai-hub-prerequisites"
    api: null
    note: "AI Hub prerequisite; an environment group rule can also govern it."
confidence: "high"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-10-22T22:58:40"
changes:
  - date: "2026-11-17"
    note: "New briefing: Journey Creation Agent for Customer Insights - Journeys, its AI Hub enablement steps, Anthropic and data-movement prerequisites, and Copilot credit use."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 6 of 85 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-17"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 85
  confirmed: 78
  unconfirmed: 1
  contradicted: 6
  attempts: 1
  hash: "c5f5532dd9ca4752a783999f1727920f"
---

## What's changing

Journey Creation Agent is an AI assistant in Dynamics 365 Customer Insights - Journeys. A marketer describes a campaign goal in plain language, and the agent proposes a journey structure with steps, timing and branching logic. Microsoft Learn documents it as a preview feature that replaces the previously released Journey Copilot for journey creation.

The agent assembles journeys from segments and content that already exist in the environment; Learn says it does not create segments or write content in this release. Before anything is published, it shows a visual preview, and the marketer can open the journey on the standard journey designer through **Review and refine**. Learn says nothing goes live until the marketer approves it. The page also says the agent is available only in English during the preview.

The roadmap item (577418) is In development, lists Preview and General Availability as release phases, a preview date of June CY2026 and a target date of April CY2027, for Worldwide (Standard Multi-Tenant) on the web. Learn already documents the preview and says customers in North America and Oceania get it with the June 2026 update. Treat April CY2027 as Microsoft's target for general availability, not a commitment. Learn describes the preview only, so its limits may change.

## Why it matters

This is an opt-in AI capability that touches three things an administrator owns: which AI provider processes marketing prompts, where that processing happens, and a new draw on Copilot credits. The agent uses Anthropic's models, so the tenant has to allow Anthropic in the Microsoft 365 admin center and the Power Platform admin center before it works. Learn lists data movement across regions as a further AI Hub prerequisite.

Because an administrator has to enable the agent in AI Hub and switch AI agents on at tenant level, the practical decision is whether and where to enable it. The roadmap's general availability target is April CY2027, and Microsoft has not stated what changes for tenants at that point, so settle the Anthropic, data-movement and credit-capacity questions during the preview rather than at general availability.

## Risk assessment

**Data exposure**
- Learn says Journey Creation Agent uses Anthropic's models, and the Anthropic page says Anthropic models in Microsoft Copilot and Power Platform are currently excluded from the EU Data Boundary. Check this before enabling the agent for an EU tenant.
- The AI Hub prerequisites page says agent data might be processed and stored outside the user's primary region and requires the **Move data across regions** prerequisite. See the Move data across regions row in the controls table.
- Learn says prompts that contain personally identifiable information or sensitive data may be blocked, and that the agent only uses segments and content assets the user's account can access.

**Security & identity**
- Learn lists a Marketing Manager or Marketing Professional role, or equivalent permissions, as required to create and publish journeys. AI Hub is available to users with the **Admin** role by default; custom roles need agent settings permissions on the msdynmkt_agentsettings entity.
- The Anthropic page says access to an AI provider can be limited to assigned users or Microsoft Entra ID security groups in the Microsoft 365 admin center, and that when it is, only the assigned users can use agents that rely on that provider. Confirm with Microsoft how this interacts with Journey Creation Agent.

**Autonomy & actions**
- The agent proposes a journey and the person decides: Learn says nothing goes live until you approve it, and the journey is published as usual. The risk is therefore a mistaken proposal that gets approved. Learn's troubleshooting section says the agent may match a similarly named segment or trigger and may omit channels that are not set up, so reviewers should check the entry segment and each step before publishing.
- Journeys can start from Dynamics 365 Sales or Customer Service events when those applications are part of the deployment and an administrator has configured the connections.

**Change & support**
- It is a preview feature that Learn says is not meant for production use. Refreshing the page during the creation experience discards the proposal unless it was already moved to the journey builder with **Review and refine**.
- If a mandatory AI Hub prerequisite is no longer accepted, all enabled agents are automatically disabled until it is accepted again.

## Cost and licensing

Microsoft Learn says Journey Creation Agent uses Copilot credits, and its AI Hub page says agents are available out of the box and consume Copilot credits. The prerequisites page describes two billing models for AI capabilities in Customer Insights - Journeys: prepaid capacity (Copilot Studio message pack subscriptions) and pay-as-you-go, which charges for the messages agents consume in the month. The meter is therefore Copilot credits; see /concepts/copilot-credits/.

The Journey Creation Agent page lists a Marketing Manager or Marketing Professional role, or equivalent permissions, and AI Hub enablement as prerequisites, and names no licence. The number of credits one journey draws, and any price, are not yet published at the time of writing (November 2026).

Capacity is allocated per environment in the Power Platform admin center, and AI Hub says to configure message consumption limits to control agent usage. The Copilot Credits allocation tutorial documents a **Draw from the available capacity in my tenant** option that either lets an environment keep drawing from unallocated tenant capacity or caps it at its allocation. That tutorial is about Copilot Studio credits generally, and Learn does not say it governs this agent beyond the link from the Journey Creation Agent page, so confirm in a test environment. Moving data across regions and allowing Anthropic models are separate prerequisites with no cost stated on these pages.

## Scope

The roadmap item lists Worldwide (Standard Multi-Tenant) and the web platform. Learn says the agent is available only in English and that it requires the 1.1.65002.153 update (**Settings** > **Versions**); NAM and OCE customers get it with the June 2026 update. Regional and language availability is in Microsoft's availability reports, which the pages link to.

Prerequisites on Learn: AI Hub enablement, tenant-level **Use AI agents** set to On, three accepted AI Hub prerequisites (Microsoft Copilot Studio capacity, Move data across regions, AI prompts), Anthropic allowed in both admin centres, and a Marketing Manager or Marketing Professional role (or equivalent) for users. Linking journeys to Dynamics 365 Sales or Customer Service requires those applications in the deployment and connections configured by an administrator. The roadmap lists no US Government cloud; the Anthropic page separately says Claude models are not available for GCC High, DoD or federal GCC customers.

## Governance guidance

### Before rollout
- Decide whether to allow Anthropic: review the Anthropic subprocessor page and, if your tenant requires it, set it in the Microsoft 365 admin center (AI Administrator or Global Administrator role), then allow it in the Power Platform environment.
- Check the EU Data Boundary position for your tenant against the Anthropic exclusion and the **Move data across regions** prerequisite before accepting it.
- Allocate Copilot credits to the Customer Insights - Journeys environment and decide whether it may draw from tenant capacity, so a cap exists before first use.
- Name the people who will hold the Marketing Manager or Marketing Professional role, or equivalent permissions, and agree who reviews agent-built journeys.

### At rollout
- Set **Use AI agents** to On for the chosen environment or environment group in the Power Platform admin center rather than tenant-wide.
- Accept the three AI Hub prerequisites, then enable Journey Creation Agent in **AI Hub** and set a message consumption limit.
- Give custom roles permission on the msdynmkt_agentsettings entity if administrators use roles other than Admin.
- Brief marketers that the agent is a preview that works in English, and that proposals must be reviewed on the journey designer before publishing.

### After rollout
- Watch credit consumption against the allocation in the Power Platform admin center and adjust the limit.
- Sample published journeys that started from the agent, checking the entry segment, channels and content.
- Watch Message center and the Journey Creation Agent Learn page for the move from preview to general availability.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether AI agents are on for Customer Insights - Journeys in an environment or environment group</strong><br><small>Environment</small><br><small class="controls__note">Tenant administrator. Switching it off disables all active agents immediately.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Copilot › Settings › Dynamics 365 Customer Insights – Journeys › AI agents › Use AI agents <a href="https://learn.microsoft.com/dynamics365/customer-insights/journeys/ai-hub" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Journey Creation Agent is enabled in an environment</strong><br><small>Environment</small><br><small class="controls__note">Admin role by default; custom roles need agent settings permissions on the msdynmkt_agentsettings entity. Disable from the same area.</small></td><td data-label="Admin UI"><strong>Customer Insights - Journeys</strong><br>Settings › AI Hub › Add and manage agents › Add an agent › Journey Creation Agent › Enable <a href="https://learn.microsoft.com/dynamics365/customer-insights/journeys/ai-hub" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Copilot credits allocated to the environment and whether it can draw on tenant capacity</strong><br><small>Environment</small><br><small class="controls__note">Power Platform Administrator or Global Administrator. General Copilot Studio credits control; Learn does not confirm it caps this agent beyond the link from the agent page.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Products › Copilot Studio › Manage Copilot Credits <a href="https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01 with entitlementId MCSMessages and a TenantPool enforcement rule</code> <a href="https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Anthropic models are available to the tenant and to which users</strong><br><small>Tenant</small><br><small class="controls__note">AI Administrator or Global Administrator. The same page lets you choose users or groups who can access Anthropic models.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › AI providers operating as Microsoft subprocessors › Available subprocessors for your organization › Anthropic <a href="https://learn.microsoft.com/microsoft-365/copilot/connect-to-ai-subprocessor" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Anthropic models are allowed in a Power Platform environment</strong><br><small>Environment</small><br><small class="controls__note">Needs the provider enabled in Microsoft 365 first. Environment groups use the Power Platform Anthropic rule.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features <a href="https://learn.microsoft.com/power-platform/admin/allow-llm-generative-responses" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether data may move across regions for AI agents</strong><br><small>Environment</small><br><small class="controls__note">AI Hub prerequisite; if it is no longer accepted, enabled agents are automatically disabled.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Generative AI features › Edit › Move data across regions <a href="https://learn.microsoft.com/dynamics365/customer-insights/journeys/ai-hub-prerequisites" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether AI prompts are available in the environment</strong><br><small>Environment</small><br><small class="controls__note">AI Hub prerequisite; an environment group rule can also govern it.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Environments › environment › Settings › Product › Features › AI Builder › AI prompts <a href="https://learn.microsoft.com/dynamics365/customer-insights/journeys/ai-hub-prerequisites" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Disabling AI agents at tenant level in the Power Platform admin center immediately disables all active agents and stops new ones being created; unaccepting a mandatory prerequisite also disables enabled agents until it is accepted again. An individual agent can be set to **Disabled** in AI Hub.

The Anthropic controls sit in two places: the Microsoft 365 admin center (AI Administrator or Global Administrator) and the Power Platform environment or environment group rule, which a Power Platform system admin sets. Learn says enabling a provider in Microsoft 365 does not automatically allow its models in Power Platform. Microsoft Learn documents no API for these AI Hub, Anthropic, data-movement or AI prompts settings at the time of writing (November 2026); the capacity row is the only one with a documented API.

## Open questions

- What do general availability tenants get by default in April CY2027, and will the AI Hub and Power Platform admin center enablement steps change? Watch the Journey Creation Agent Learn page and Message center.
- How many Copilot credits does one journey creation conversation use, and does the Copilot Credits allocation and **Draw from the available capacity in my tenant** control cap this agent's spend? Watch the Copilot Studio licensing page.
- Does a Microsoft 365 admin center restriction on Anthropic to specific users or groups limit who can use Journey Creation Agent, and what do those users see? Watch the Anthropic page.
- Will an Anthropic-free option or other model be offered for tenants that cannot use Anthropic, such as those inside the EU Data Boundary?

<!-- rationale
risk: Medium. The agent uses Anthropic's models and the AI Hub prerequisites include moving data across regions, but nothing is published until a person approves the journey and an administrator has to enable the agent first.
cost: Variable. Microsoft Learn says Journey Creation Agent uses Copilot credits, billed as prepaid Copilot Studio capacity or pay-as-you-go. A rate for this agent is not yet published.
impact: Low. Administrators configure it and users with the Marketing Manager or Marketing Professional role (or equivalent permissions) build journeys with it; nothing reaches other users.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].ui / admin-path: The enablement path is Settings > AI Hub > Add and manage agents > Add an agent > Journey Creation Agent > Enable. | Found: Select **Add an agent** and choose **Journey Creation Agent**. ... In the **Overview tab**, review how the agent works. ... To activate the agent, select **Enable**. | Fix: Replace controls[1].ui.path with 'Settings > AI Hub > Add and manage agents > Add an agent > Journey Creation Agent > Overview tab > Enable', retaining https://learn.microsoft.com/dynamics365/customer-insights/journeys/ai-hub. | Source: https://learn.microsoft.com/dynamics365/customer-insights/journeys/ai-hub
- [contradicted, blocker] controls[2].api / command: The printed PUT URL with entitlementId MCSMessages and a TenantPool enforcement rule is an executable allocation call. | Found: scope = @{ environmentId = $environmentId } ... entitlementId = "MCSMessages" ... allocation = @{ quantity = 5000 } ... @{ ruleType = "TenantPool"; enabled = $false } | Fix: The method, URL and 2024-10-01 version are documented, but replace the prose suffix with the actual required JSON body: 'PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01; Content-Type: application/json; Authorization: Bearer <token>; body: {"scope":{"environmentId":"<environment-id>"},"allocatedEntitlements":[{"entitlementId":"MCSMessages","allocation":{"quantity":<credits>},"enforcementRules":[{"ruleType":"TenantPool","enabled":false}]}]}'. Retain the current tutorial URL. | Source: https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations
- [contradicted, blocker] Open questions: final bullet / availability: Tenants inside the EU Data Boundary cannot use Anthropic. | Found: If your organization is in a region that has Anthropic as a subprocessor set to **Off** by default, you can choose to opt in so Claude models are available for your organization. | Fix: Replace the final question with: 'Will an Anthropic-free option or other model be offered for tenants whose policies prohibit processing outside the EU Data Boundary?' Being within the boundary does not itself prohibit opting in. | Source: https://learn.microsoft.com/microsoft-365/copilot/connect-to-ai-subprocessor
- [contradicted, blocker] Governance guidance: Before rollout; Cost and licensing / consistency: Allocating credits and deciding on tenant-capacity draw establishes a cap before first use, although the page elsewhere says its applicability is unconfirmed. | Found: 'so a cap exists before first use' conflicts with 'Learn does not say it governs this agent beyond the link from the Journey Creation Agent page, so confirm in a test environment'. | Fix: Replace the Before rollout bullet with: 'Allocate Copilot credits to the Customer Insights - Journeys environment and confirm the applicable consumption limits before first use.' This removes the promised cap without asserting an unverified enforcement outcome.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing; controls[2] / cost: The allocation tutorial says disabling tenant-capacity draw caps an environment at its allocation. | Found: when it's enabled, the environment continues to draw from unallocated tenant capacity after its own allocation is exhausted; when it's disabled, the environment is capped at its allocation. | Fix: Qualify the cap sentence with: 'The Manage capacity page also documents a separate Bill to my pay-as-you-go billing plan overage option; only when no overage source is enabled can the environment consume only its allocated prepaid credits.' Cite https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-messages-capacity#overage-management. | Source: https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations
- [supported, minor] controls[2].ui / admin-path: Credit allocation and tenant-pool draw are managed through Licensing > Products > Copilot Studio > Manage Copilot Credits. | Found: Under **Products**, select **Copilot Studio**, and then select **Manage Copilot Credits**. ... Select the environment that you want to manage. | Fix: Append ' > environment' to controls[2].ui.path to include the documented selection of the environment whose allocation is being managed. | Source: https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations
- [supported, minor] controls[5].ui / admin-path: Move data across regions is reached through Manage > Environments > environment > Generative AI features > Edit > Move data across regions. | Found: select **Manage**. ... Select **Environments**. ... select the target environment. ... locate the **Generative AI features** card and select **Edit**. ... Select the **Move data across regions** checkbox. | Fix: Add to this row's note: 'The platform data-movement page says this checkbox is not displayed for environments in U.S. or government cloud regions.' Cite https://learn.microsoft.com/power-platform/admin/geographical-availability-copilot. The cited AI Hub prerequisites page gives the path without this qualification. | Source: https://learn.microsoft.com/dynamics365/customer-insights/journeys/ai-hub-prerequisites
- [unsupported, minor] rationale: impact / behaviour: Nothing reaches users other than administrators and journey-building marketers. | Found: Searched: "Journey Creation Agent" "other users". Read Journey Creation Agent and Responsible AI FAQ excerpts: they restrict visibility before publication, not all downstream effects after publication. | Fix: Remove '; nothing reaches other users' from the impact rationale. Retain the preceding description of the roles that configure and use the agent.
- [contradicted, minor] Governance guidance: marketing roles and custom-role permissions / consistency: The checklist asks readers to assign marketing roles and agent-settings permissions without a corresponding role-management control row. | Found: Name the people who will hold the Marketing Manager or Marketing Professional role ... Give custom roles permission on the msdynmkt_agentsettings entity | Fix: Remove the two checklist bullets beginning 'Name the people who will hold' and 'Give custom roles permission'. The verified role requirements already remain in Risk assessment and the existing enablement-row note; do not add a control row.
- [contradicted, minor] Governance guidance: At rollout / consistency: The checklist tells readers to set a message consumption limit, but the table gives environment allocation rather than the separate agent-limit control. | Found: enable Journey Creation Agent in **AI Hub** and set a message consumption limit. ... Copilot credits allocated to the environment and whether it can draw on tenant capacity | Fix: Remove 'and set a message consumption limit' from the At rollout checklist bullet. Keep the existing sourced discussion of consumption limits in Cost and licensing; do not add a control row.
-->
