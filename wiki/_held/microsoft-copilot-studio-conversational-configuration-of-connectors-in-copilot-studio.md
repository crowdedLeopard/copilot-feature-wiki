---
title: "Copilot Studio: conversational configuration of connectors with in-chat sign-in"
slug: "microsoft-copilot-studio-conversational-configuration-of-connectors-in-copilot-studio"
roadmapId: 569930
topic: "copilot-studio"
products: ["Microsoft Copilot Studio"]
summary: "Copilot Studio is rolling out in-chat sign-in for the connectors an agent needs. Microsoft Learn does not describe this item yet; review data policies and credit controls, as no admin action is stated."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mac","Web"]
targetDate: "September CY2026"
previewDate: null
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn describes Copilot Credits billing for Microsoft Copilot harness agents and, for standard-harness agents, a per-user and a tenant Copilot Studio licence. Which applies to this feature is not stated, and no rate specific to it is published."
audiences: ["power-platform-admin","maker","security"]
tags: ["copilot-studio","connectors","end-user-authentication","copilot-harness","data-policies","copilot-credits"]
sources:
  - title: "Microsoft 365 Roadmap 569930"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569930"
    kind: "roadmap"
  - title: "Set up your connections when an agent asks"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/end-user-connections"
    kind: "learn"
  - title: "Add a tool to an agent (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-tools-custom-agent"
    kind: "learn"
  - title: "Quickstart: Create an automated solution with natural language in the Microsoft Copilot harness (preview)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/create-automation-natural-language"
    kind: "learn"
  - title: "Configure data policies for agents"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    kind: "learn"
  - title: "Control maker-provided credentials for authentication"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication"
    kind: "learn"
  - title: "Bypass connector consent cards for an agent"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-connector-consent-bypass"
    kind: "learn"
  - title: "Manage costs for agents powered by the Microsoft Copilot harness"
    url: "https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness"
    kind: "learn"
  - title: "Overview of usage-based billing"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview"
    kind: "learn"
  - title: "About agents powered by the Microsoft Copilot harness"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/overview"
    kind: "learn"
  - title: "Assign licenses and manage access to Copilot Studio"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/requirements-licensing"
    kind: "learn"
  - title: "Tutorial: Manage Copilot Credits allocations programmatically"
    url: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    kind: "learn"
  - title: "Add-ConnectorsToPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy"
    kind: "learn"
  - title: "pac copilot-studio"
    url: "https://learn.microsoft.com/power-platform/developer/cli/reference/copilot-studio"
    kind: "learn"
videos: []
related: ["data-policies","copilot-studio-block-maker-provided-credentials","copilot-credits","copilot-studio-safe-sharing-credential-oversharing"]
controls:
  - governs: "Credits allocated to an environment and whether it draws from tenant capacity"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Products > Copilot Studio > Manage Copilot Credits > environment > Capacity overages > Draw from the available capacity in my tenant"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness"
    api:
      kind: "power-platform-api"
      call: "PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01"
      docs: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    note: "Needs Power Platform Administrator or Global Administrator. The request body sets the TenantPool enforcement rule. Applies across Copilot Studio, not only this feature."
  - governs: "Which connectors makers can use as agent tools"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Data and privacy > Data policy > policy > Edit Policy > Assign connectors > connector > Block"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    api:
      kind: "powershell"
      call: "Add-ConnectorsToPolicy -PolicyName <policy GUID> -Classification Blocked -Connectors $connectors"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy"
    note: "Applies to Copilot Studio agents in the environments in the policy's scope. Tenant admin or Environment Admin."
  - governs: "Whether connector consent cards are bypassed for one agent"
    scope: "agent"
    ui: null
    api:
      kind: "powershell"
      call: "Set-AdminCopilotStudioBotConnectorConsentBypass -EnvironmentId <environment ID> -BotId <agent ID> -BypassConsent $false"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/admin-connector-consent-bypass"
    note: "Uses a script and Entra app described on the page. $true bypasses consent cards. Also in pac CLI (preview): pac copilot-studio set-connector-consent-bypass."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-10-09T22:04:35"
changes:
  - date: "2026-11-18"
    note: "First briefing for this item; Microsoft Learn does not name the feature, so behaviour is taken from the related Learn page on in-chat connection requests."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 48 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected the data policy path to include the connector's three-dots menu before Block, and stated that -Classification Blocked puts connectors in the Blocked group."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 48 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Correction: licensing set to mixed with the Copilot Studio access routes from the licensing page; data policy path gained the environment steps; added sources for the tools list and admin role."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 60 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Correction: the open question on data policies now asks only whether they are evaluated again at the in-chat connection step; the maker-credentials wording was removed."
  - date: "2026-11-18"
    note: "First briefing for this item: Learn does not name it yet, so it links the closest documented in-chat connection behaviour to the controls that govern it."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 70 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 5
verification:
  status: "held"
  date: "2026-11-18"
  version: 5
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 70
  confirmed: 66
  unconfirmed: 1
  contradicted: 3
  attempts: 5
  hash: "24635a20d7c495cc69ee04a89257f6a6"
---

## What's changing

The roadmap item says Copilot Studio will let you configure the connectors your agent needs "with a simple in-chat sign-in instead of a full settings experience". The record has no more-info link and no further description. Microsoft Learn has no page that names this item, so the behaviour below comes from neighbouring Learn pages about agents powered by the Microsoft Copilot harness. Treat them as background, not as a description of this feature.

Learn documents two in-chat connection prompts. When an agent needs a connection a user has not set up, it pauses and shows a **Connection Required** card that names the services the action needs. **Set up connection** opens the **Manage your connections** page, **Retry** tells the agent to try again, and **Deny** cancels the action. Separately, the natural-language quickstart says Copilot Studio might prompt you to configure a connection if your solution needs a data source or system that is not yet connected. Microsoft does not say which of these, if either, is this roadmap item.

The **Manage your connections** page lists the tools, flows and AI models that use the user's own account, with the description "Each end user signs in with their own account." Learn says connections are saved for each agent and each channel, so a user who chats with the same agent in more than one channel sets up connections in each.

The roadmap record lists the status as Rolling out, the target as September CY2026, the release phase as General Availability, and the platforms as Desktop, Mac and Web. The cloud listed is Worldwide (Standard Multi-Tenant). The natural-language quickstart on Learn is marked as a production-ready preview, so the roadmap and Learn differ on maturity.

## Why it matters

This puts a sign-in step inside the conversation. For a service owner the questions are which connectors an agent can ask people to sign in to, whose account is used, and what the agent spends while it does so. Learn says data policies decide which connectors makers can use as tools, and that Copilot Credits are charged for Microsoft Copilot harness agents from the moment someone starts building.

Microsoft has not stated what happens on arrival or whether an administrator must act, and no source says existing behaviour changes. The wiki's view is to confirm your data policies and credit controls now, so the prompts people meet in chat only offer connectors you have already decided to allow.

## Risk assessment

**Data exposure**
- Each connector sign-in lets the agent act with that user's own account. The **Manage your connections** page says each end user signs in with their own account, so the agent reaches what that account can reach. Data policies that block a connector remove it from the maker's **Add a tool** list, and Learn says a blocked tool "can't be used, even by an agent".
- Blocking Power Platform connectors in a data policy also blocks access to tools in connected MCP servers, which rely on Power Platform connectors for connectivity.

**Security & identity**
- Maker credentials are a separate route. The **Control maker credential options** setting decides whether makers can use their own credentials, end-user credentials or both for tools. Learn says both are enabled by default, and turning one off immediately changes all tools for all agents in the affected environments.
- Learn documents a per-agent setting that bypasses connector consent cards, and says it applies to Microsoft Copilot harness agents. Microsoft does not say whether the **Connection Required** card is one of those consent cards, so confirm before relying on it.

**Autonomy & actions**
- The agent pauses at the **Connection Required** card until the user connects, retries or denies. **Deny** cancels the action and the agent does not retry it. Microsoft does not say how the prompt behaves for agents that run without a user present.

**Change & support**
- Connections are saved for each agent and each channel, and a status of **Expired** or **Stale** sends users back to the page. Expect support questions from people who connect in one channel and are asked again in another.

## Cost and licensing

**Licence.** Learn says you do not need an individually assigned Copilot Studio user licence to access the Microsoft Copilot harness experience. For standard-harness agents, the Copilot Studio licensing page lists a per-user licence and a tenant licence. Microsoft does not say which harness this feature is delivered on.

**Meter.** Agents powered by the Microsoft Copilot harness use consumption-based billing in Copilot Credits, and Learn says this usage is not included with a Microsoft 365 Copilot licence. The harness charges credits from the moment someone starts building, and the credits are charged to the environment where the agent runs. Microsoft publishes no credit rate specific to connector set-up at the time of writing (November 2026).

**Spend controls.** Allocate credits to an environment and clear **Draw from the available capacity in my tenant** (first row of the controls table below). If the environment is linked to a pay-as-you-go billing plan, usage can continue through the linked Azure subscription. For one agent, Learn describes a monthly limit with **Stop usage** at Power Platform admin center > Licensing > Copilot Studio > Manage Agents > select the agent > **Set limit**.

**Indirect cost.** Admin time to review data policies, and support time for sign-in questions.

## Scope

The roadmap record lists the Worldwide (Standard Multi-Tenant) cloud and the platforms Desktop, Mac and Web. It lists status Rolling out, target September CY2026 and General Availability. No other cloud appears in the record.

The related Learn pages describe agents powered by the Microsoft Copilot harness, and say Dataverse for Teams environments do not support them.

Roles named on the pages: Power Platform Administrator or Global Administrator (or an equivalent role) for capacity; tenant admin or Environment Admin for data policies; for the consent-bypass commands, Power Platform Administrator is the least-privilege of the three supported roles, plus an app with the `CopilotStudio.AdminActions.Invoke` delegated Power Platform API permission.

## Governance guidance

### Before rollout
- Check which connectors your data policies block for the environments that host Copilot Studio agents, using the data policy row below. Blocked tools cannot be selected by makers.
- Read the connector consent-bypass setting for your agents with `Get-AdminCopilotStudioBotConnectorConsentBypass` so you know where consent cards are shown or skipped.
- Tell makers and users what the **Connection Required** card, **Deny** and **Retry** do.

### At rollout
- Test a **Connection Required** prompt in a development environment and note which connectors and accounts users are asked to sign in with.
- Confirm that data policy errors reach makers and users as expected. Learn says both see error messages for any data policy violation.
- Set the environment credit allocation and tenant-capacity draw for environments where makers will test agents (first row of the table).

### After rollout
- Review credit use per environment and agent at Power Platform admin center > Licensing > Copilot Studio.
- Ask users with **Expired** or **Stale** connections to renew or review them on the **Manage your connections** page.
- Watch Message center and the Learn pages for the answers listed under open questions.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Credits allocated to an environment and whether it draws from tenant capacity</strong><br><small>Environment</small><br><small class="controls__note">Needs Power Platform Administrator or Global Administrator. The request body sets the TenantPool enforcement rule. Applies across Copilot Studio, not only this feature.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Products › Copilot Studio › Manage Copilot Credits › environment › Capacity overages › Draw from the available capacity in my tenant <a href="https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01</code> <a href="https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which connectors makers can use as agent tools</strong><br><small>Environment</small><br><small class="controls__note">Applies to Copilot Studio agents in the environments in the policy's scope. Tenant admin or Environment Admin.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Data policy › policy › Edit Policy › Assign connectors › connector › Block <a href="https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-ConnectorsToPolicy -PolicyName &lt;policy GUID&gt; -Classification Blocked -Connectors $connectors</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether connector consent cards are bypassed for one agent</strong><br><small>Agent</small><br><small class="controls__note">Uses a script and Entra app described on the page. $true bypasses consent cards. Also in pac CLI (preview): pac copilot-studio set-connector-consent-bypass.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AdminCopilotStudioBotConnectorConsentBypass -EnvironmentId &lt;environment ID&gt; -BotId &lt;agent ID&gt; -BypassConsent $false</code> <a href="https://learn.microsoft.com/microsoft-copilot-studio/admin-connector-consent-bypass" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The credit allocation row is not specific to this feature. Microsoft says the capacity and consumption controls apply across Copilot Studio, so changes can affect other agents, workflows and features in the same environment. Clearing the tenant-capacity draw does not stop pay-as-you-go usage.

The data policy applies to Copilot Studio agents in the environments in the policy's scope. Learn names a tenant admin or the Environment Admin role as the requirement.

The consent-bypass setting is per agent. Learn documents it only as PowerShell commands against the Power Platform API; the commands come from a script the page provides and need the app registration described there. The Power Platform CLI reference also lists a preview command, `pac copilot-studio set-connector-consent-bypass`.

The **Control maker credential options** setting is described at https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication. It is not a row here because this briefing has not confirmed an automation route for it.

## Open questions

- Is the roadmap's conversational configuration the **Connection Required** card on the **Manage your connections** page, the connection prompt in natural-language agent creation, or something else? Watch the Learn pages for Copilot Studio agents and Message center.
- Is the **Connection Required** card one of the consent cards that the per-agent consent-bypass setting controls?
- Is the feature on by default, and does any admin setting switch it on or off? The roadmap does not say.
- Which licence or credit rate applies to connection set-up through chat? Watch the Copilot Studio billing pages.

<!-- rationale
risk: Medium. In-chat prompts ask people to sign connectors in with their own accounts. Data policies and per-agent consent settings cover this, but makers and users need guidance on the prompts.
cost: Variable. Learn says agents on the Microsoft Copilot harness are billed in Copilot Credits for building, testing and running. No credit rate specific to this feature is published.
impact: Medium. Makers who build agents and the people who chat with them are the ones who see the sign-in prompts. The roadmap lists Desktop, Mac and Web.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Data exposure / behaviour: Blocking a connector removes it from the maker's Add a tool list. | Found: When a data policy blocks a tool, the tool appears unavailable in the Add a tool panel and you can't select it. | Fix: Replace 'Data policies that block a connector remove it from the maker's Add a tool list' with 'A tool blocked by a data policy appears unavailable in the maker's Add a tool panel and cannot be selected'. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-tools-custom-agent
- [unsupported, major] Risk assessment: Security & identity / behaviour: Turning either credential option off immediately changes all tools for all agents in the affected environments. | Found: Searched: Control maker credential options disable End-user all tools. Read configure-no-maker-authentication and its search excerpts. The immediate all-tools warning describes disabling maker credentials, not either option. | Fix: Replace 'turning one off immediately changes all tools for all agents in the affected environments' with 'preventing maker-provided credentials changes all tools for all agents in the affected environments to require end-user credentials at runtime'. This is the warning at https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication.
- [contradicted, blocker] Cost and licensing: Spend controls; controls[0].note; Governance guidance: At rollout / behaviour: Administrators can clear tenant-capacity draw for an environment or set it through the allocation API, without a stated environment-group exception. | Found: If a published environment group rule governs Draw from the available capacity in my tenant, you can't override the setting for an individual environment. | Fix: Qualify the environment-level instructions and controls[0].note with: 'If a published environment-group rule governs this option, the environment setting cannot be overridden and API updates return TenantPoolLockedByPolicy. Change and republish the group rule, or remove the environment from the group to manage the setting independently.' The restriction is documented at https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations. | Source: https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing: final sentence / availability: The roadmap and the related natural-language Learn quickstart carry different maturity labels. | Found: This is a production-ready preview feature. | Fix: Replace 'so the roadmap and Learn differ on maturity' with 'this preview label describes that related experience, not a confirmed maturity conflict for this roadmap item'. The roadmap describes this item as General Availability, while this cited page describes a different, unconfirmed related experience. | Source: https://learn.microsoft.com/microsoft-copilot-studio/create-automation-natural-language
- [supported, minor] controls[0].api; controls[0].note; Governance controls table / command: PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01 writes environment credit allocations and the TenantPool enforcement rule. | Found: $apiBaseUrl = "https://api.powerplatform.com"; $apiVersion = "2024-10-01"; Invoke-RestMethod -Method Put -Uri "$apiBaseUrl/licensing/allocationsV2?api-version=$apiVersion"; @{ ruleType = "TenantPool"; enabled = $false } | Fix: Keep the call unchanged; the deterministic missing-endpoint lead is a false positive caused by variables in the example. Replace 'The request body sets the TenantPool enforcement rule' with 'The request body sets allocatedEntitlements[].allocation.quantity and allocatedEntitlements[].enforcementRules, using ruleType TenantPool and enabled to control tenant-capacity draw'. | Source: https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations
- [supported, minor] controls[1].ui; Governance controls table / admin-path: The connector-blocking path is Power Platform admin center > Security > Data and privacy > Data policy > policy > Edit Policy > Assign connectors > connector > Block. | Found: Select Next. The Add an environment page appears. ... Select Next. The Assign connectors page appears. ... Select the three dots next to the connector ... select Block. | Fix: Expand the path to 'Security > Data and privacy > Data policy > policy > Edit Policy > Add an environment > Assign connectors > connector > three dots > Block' in front matter and the rendered table. These omissions are an environment-selection step and an unlabelled menu button, not blockers under the verifier's path rule. | Source: https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention
- [contradicted, minor] rationale: risk / consistency: The risk rationale says per-agent consent settings cover these in-chat connection prompts, despite the body saying that applicability is unconfirmed. | Found: Rationale: 'Data policies and per-agent consent settings cover this'. Body: 'Microsoft does not say whether the Connection Required card is one of those consent cards, so confirm before relying on it.' | Fix: Replace 'Data policies and per-agent consent settings cover this, but makers and users need guidance on the prompts' with 'Data policies govern connector tools; whether consent bypass affects the Connection Required card is not confirmed, and makers and users need guidance on the documented prompts'.
-->
