---
title: "Copilot Studio: share autonomous agents with end users (run-only)"
slug: "copilot-studio-share-autonomous-agents-run-only"
roadmapId: 567894
topic: "copilot-studio"
products: ["Microsoft Copilot Studio"]
summary: "Makers can share a published autonomous agent so recipients run it under their own credentials. Usage bills Copilot Credits to the hosting environment, and no dedicated admin switch for this sharing is documented."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "August CY2026"
risk: "high"
cost: "variable"
impact: "medium"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Credits are billed through the hosting environment per end user. Users you share with need a Microsoft Copilot Studio per-user licence; unlicensed users can sign up for a trial. Credit rates for this feature are not stated on the pages read."
audiences: ["power-platform-admin","security","finops","maker"]
tags: ["copilot-studio","autonomous-agents","triggers","sharing","run-only","copilot-credits","end-user-authentication","sharing-limits","spending-policies","maker-credentials","copilot-harness"]
sources:
  - title: "Microsoft 365 Roadmap 567894"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=567894"
    kind: "roadmap"
  - title: "Share agents with other users and makers (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/authoring-share-agent"
    kind: "learn"
  - title: "Set up a shared autonomous agent (Microsoft Copilot) (preview)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/end-user-manage-shared-agent"
    kind: "learn"
  - title: "Add triggers to an agent (Microsoft Copilot) (preview)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/authoring-add-event-trigger"
    kind: "learn"
  - title: "Overview of usage-based billing"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview"
    kind: "learn"
  - title: "Limit sharing"
    url: "https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits"
    kind: "learn"
  - title: "Control how agents are shared"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-sharing-controls-limits"
    kind: "learn"
  - title: "Configure data policies for agents"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    kind: "learn"
  - title: "Add-ConnectorsToPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy?view=pa-ps-latest"
    kind: "learn"
  - title: "Control maker-provided credentials for authentication"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication"
    kind: "learn"
  - title: "Configure sharing agents with embedded maker credentials"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/configure-sharing-agents-embedded-maker-credentials"
    kind: "learn"
  - title: "Manage Copilot Studio costs in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs"
    kind: "learn"
  - title: "Roles and responsibilities"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/apps/roles-responsibilities"
    kind: "learn"
videos: []
related: ["copilot-credits"]
controls:
  - governs: "Whether autonomous agents may be shared with Can use (admin switch)"
    scope: "tenant"
    ui: null
    api: null
    note: "No admin setting for run-only sharing is documented at the time of writing (November 2026). The maker chooses via Share."
  - governs: "Who may share agents and with how many people (Managed Environments)"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Edit Managed Environments > Manage sharing"
      docs: "https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits"
    api:
      kind: "powershell"
      call: "Set-AdminPowerAppEnvironmentGovernanceConfiguration -EnvironmentName <EnvironmentId> -UpdatedGovernanceConfiguration $governanceConfiguration"
      docs: "https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits"
    note: "General control for agent Editor and Viewer permissions; not confirmed for Can use. Managed environments only. First set extendedSettings bot-limitSharingMode and bot-maxLimitUserSharing on the retrieved governanceConfiguration."
  - governs: "Whether event triggers can be added (Microsoft Copilot Studio connector)"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Data and privacy > Data policy > New Policy > Add an environment > Available > environment > Add to policy > Assign connectors > Microsoft Copilot Studio > Block"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    api:
      kind: "powershell"
      call: "Add-ConnectorsToPolicy -PolicyName <PolicyGuid> -Classification Blocked -Connectors <ConnectorObjects>"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy?view=pa-ps-latest"
    note: "UI steps need tenant admin or Environment Admin. ConnectorObjects identifies the Microsoft Copilot Studio connector; each object has id, type and name, as the reference requires."
  - governs: "Which credential types makers may use for agent tools"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features > Copilot Studio agents > Control maker credential options"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication"
    api: null
    note: "Path is for environments not in a group; grouped environments use the group's page (see notes). Blocking maker credentials makes autonomously triggered agents fail for lack of credentials. Validate first."
  - governs: "Sharing agents with embedded maker credentials"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Features > Sharing agents with embedded maker credentials"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/configure-sharing-agents-embedded-maker-credentials"
    api: null
    note: "Connections configured to use end-user credentials are not subject to this connection-sharing restriction; run-only sharing requires triggers and tools configured for user authentication."
  - governs: "Spending limits for agents and environments (resource-based spending policy)"
    scope: "environment"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > Add spending policy > Resources > Specific environments > environment"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs"
    api: null
    note: "Replaces Power Platform capacity allocations and billing plans for covered resources; excludes AI Builder credits. Select Resources as scope and choose the environments; set the monthly and optional per-agent limit in the policy."
  - governs: "Which users can run a shared autonomous agent"
    scope: "agent"
    ui:
      surface: "Copilot Studio (maker)"
      path: "Agents > agent > Share > Can use"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/authoring-share-agent"
    api: null
    note: "Maker-side, preview. Recipients need a Copilot Studio per-user licence and the set-up link."
confidence: "high"
created: "2026-11-13"
updated: "2026-11-19"
roadmapModified: "2026-07-20T22:37:15"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Corrected after verification: default is now maker-opt-in and action is review; the Managed Environments path and sharing-limits PowerShell, licence prerequisite and Teams + Microsoft 365 qualification are fixed; unsupported claims removed; added credential controls."
  - date: "2026-11-17"
    note: "Corrected after verification: PowerShell calls now match their Learn pages, data policy path adds the environment step, group path noted for maker credentials, risk rationale no longer rules out sharing limits for Can use, and the per-recipient wording is fixed."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 75 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected after verification: the embedded maker credentials uncertainty is replaced with Learn's statement on end-user credentials, the data policy path adds the Available tab, and the consumption-check step is removed from the After rollout checklist."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 83 statements not yet confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 84 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected after verification: the data policy path now ends at Microsoft Copilot Studio > Block and its PowerShell call is removed, the spending policy path adds Resources and Specific environments, and the spending policy roles are stated."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 86 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected after verification: the share-link step now reads Copy sharing link > Copy link to set up, and the data policy row gains the Add-ConnectorsToPolicy PowerShell call."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 86 statements not yet confirmed"
version: 7
verification:
  status: "verified-with-gaps"
  date: "2026-11-19"
  version: 7
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 86
  confirmed: 86
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "059290d4c282add44240c526833b1c7c"
---

## What's changing

Copilot Studio is adding run-only sharing for autonomous agents: a maker can share a published agent that has triggers with individual users or security groups, who run it under their own credentials. The roadmap description says autonomous agents could previously only be used and managed by makers; run-only sharing lets makers reach end users who have no edit permission or ownership.

Microsoft Learn already documents the behaviour, with the articles marked as prerelease. The maker selects **Share**, gives recipients **Can use**, then selects **Copy sharing link** > **Copy link to set up** and sends the link to the recipients, because recipients get no notification. Recipients open the agent management page, connect every trigger, tool and workflow that needs their credentials, and can change only the trigger options the maker turned on with **Editable by user**. They cannot change the agent's instructions, tools or other authoring settings, and they cannot specify or modify tool parameters: tool calls are invoked and executed fully with AI, based on the maker's specifications. A workflow used as a tool can accept only end-user credentials.

The roadmap item is In development, with preview targeted for August CY2026 and General Availability targeted for January CY2027, for Worldwide (Standard Multi-Tenant) on the web. Both dates are targets; Learn describes the preview behaviour, and limits may change at General Availability.

## Why it matters

This moves an autonomous agent from something a maker runs for themselves to something many people run on their own accounts. Each recipient activates the shared agent and connects the services it requires using their own credentials. That is a better fit for least privilege than one maker credential, but it spreads activity and credit spend across people the maker may not oversee.

An administrator's questions are who may share, which environments host these agents, how many credits they may use, and which data policies apply. The sharing-specific answers are thin: Microsoft Learn documents controls for neighbouring settings (Editor and Viewer sharing limits, data policies, spending policies) but no switch for Can use sharing itself. If nobody acts, makers in any environment with the feature can share agents, and spend follows the hosting environment's existing capacity or policy.

## Risk assessment

**Data exposure**
- Each recipient's instance acts on connections that person created, so it can read and send whatever those connections reach. The maker's instructions and tool selection decide what it does with that data; review them before sharing.
- Data policies apply to connectors, but Learn does not say how they treat a shared run-only instance that is already running (see Open questions).

**Security & identity**
- Recipients authenticate with their own credentials, so no maker credential is needed for triggers or tools. Learn's maker-credential article adds that when an action runs under end-user credentials and the user lacks permission, the agent cannot do it on their behalf.
- When a maker updates the agent, recipients are asked to connect or confirm the change on the agent management page. A changed instruction set can alter what the agent does with their data.

**Autonomy & actions**
- Runs start from triggers rather than a chat prompt, so the agent can act without anyone opening it. Tool parameters are fixed by the maker and AI, so a flawed instruction affects every recipient alike.
- Microsoft Learn documents no approval setting for run-only shared agents at the time of writing, so human oversight of consequential actions is a design decision for the maker.

**Change & support**
- Recipients receive no notification and must be sent the set-up link, then bookmark the agent management URL to check health, fix connections and consent to updates. Expect support questions about where the agent is.
- The agent management article documents the end-user experience and does not state what an administrator can see of individual instances.

## Cost and licensing

Usage bills in Copilot Credits. The share article states that each end user's autonomous agent usage is totalled and billed through the underlying environment where the agent is hosted. For the Microsoft Copilot harness, credits are charged for large language model tokens, tools and the harness itself. Credits are managed in the Power Platform admin center, where administrators allocate them to environments. See [Copilot Credits](/concepts/copilot-credits/).

Licence: the sharing prerequisites state that users you share with have a Microsoft Copilot Studio per-user licence, and that users without one can sign up for a trial. The same article lists publication to **Teams + Microsoft 365** with **Make agent available in Microsoft Copilot** turned on, and user authentication set to **Authenticate with Microsoft**.

Cap: a Microsoft 365 admin center resource-based spending policy can cover specific agents or environments, with a monthly limit and an optional per-agent limit. Creating one moves Copilot Credit management for the covered resources into the Microsoft 365 admin center, replacing their Power Platform admin center capacity allocations and linked billing plans, and it does not apply to AI Builder credits. Credit rates specific to autonomous run-only usage, and how per-user totals appear in reports, are not stated on the pages read.

## Scope

- Agents built in the Microsoft Copilot harness experience, published with triggers, with triggers and tools configured for user authentication.
- Recipients: individual users or security groups given **Can use**. Editing rights are separate and come from environment security roles.
- Cloud and platform per the roadmap record: Worldwide (Standard Multi-Tenant), web. No government cloud is listed on the record.
- Limitations documented for the preview: workflow-as-a-tool accepts end-user credentials only; recipients cannot modify tool parameters.
- Rollout: preview targeted for August CY2026 and General Availability for January CY2027. No Message Center post was supplied with the record.

## Governance guidance

### Before rollout
- Decide which environments may host shareable autonomous agents, and make them managed environments so the sharing rules in the controls table can be set.
- Create a Microsoft 365 admin center resource-based spending policy with a monthly and per-agent limit for those environments, after checking they use no AI Builder prompts.
- Test whether the **Control maker credential options** setting suits your environments: Learn warns that blocking maker-provided credentials makes agents triggered by scheduled or autonomous events fail for lack of credentials, while the run-only article requires user-authenticated connections.
- Require makers to document trigger scope, the tools used, write actions and expected run frequency before they share.

### At rollout
- Confirm in the Power Platform admin center that a data policy covers each hosting environment, and decide whether the **Microsoft Copilot Studio** connector should be blocked to prevent event triggers.
- Tell makers to publish to Teams + Microsoft 365 with Make agent available in Microsoft Copilot on, and to select **Copy sharing link** > **Copy link to set up** and send the link to recipients.
- Brief the help desk on the agent management page: connections, the **Enabled** toggle for triggers, update consent and the **Activity** tab.

### After rollout
- Review which agents have Can use recipients when a maker leaves, since the page does not say what happens to instances.
- Watch the preview articles for changes to the tool-parameter and workflow-credential limits before General Availability.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether autonomous agents may be shared with Can use (admin switch)</strong><br><small>Tenant</small><br><small class="controls__note">No admin setting for run-only sharing is documented at the time of writing (November 2026). The maker chooses via Share.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who may share agents and with how many people (Managed Environments)</strong><br><small>Environment</small><br><small class="controls__note">General control for agent Editor and Viewer permissions; not confirmed for Can use. Managed environments only. First set extendedSettings bot-limitSharingMode and bot-maxLimitUserSharing on the retrieved governanceConfiguration.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Edit Managed Environments › Manage sharing <a href="https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AdminPowerAppEnvironmentGovernanceConfiguration -EnvironmentName &lt;EnvironmentId&gt; -UpdatedGovernanceConfiguration $governanceConfiguration</code> <a href="https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether event triggers can be added (Microsoft Copilot Studio connector)</strong><br><small>Environment</small><br><small class="controls__note">UI steps need tenant admin or Environment Admin. ConnectorObjects identifies the Microsoft Copilot Studio connector; each object has id, type and name, as the reference requires.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Data policy › New Policy › Add an environment › Available › environment › Add to policy › Assign connectors › Microsoft Copilot Studio › Block <a href="https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-ConnectorsToPolicy -PolicyName &lt;PolicyGuid&gt; -Classification Blocked -Connectors &lt;ConnectorObjects&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy?view=pa-ps-latest" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which credential types makers may use for agent tools</strong><br><small>Environment</small><br><small class="controls__note">Path is for environments not in a group; grouped environments use the group's page (see notes). Blocking maker credentials makes autonomously triggered agents fail for lack of credentials. Validate first.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Copilot Studio agents › Control maker credential options <a href="https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Sharing agents with embedded maker credentials</strong><br><small>Environment</small><br><small class="controls__note">Connections configured to use end-user credentials are not subject to this connection-sharing restriction; run-only sharing requires triggers and tools configured for user authentication.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Features › Sharing agents with embedded maker credentials <a href="https://learn.microsoft.com/microsoft-copilot-studio/configure-sharing-agents-embedded-maker-credentials" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Spending limits for agents and environments (resource-based spending policy)</strong><br><small>Environment</small><br><small class="controls__note">Replaces Power Platform capacity allocations and billing plans for covered resources; excludes AI Builder credits. Select Resources as scope and choose the environments; set the monthly and optional per-agent limit in the policy.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › Add spending policy › Resources › Specific environments › environment <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users can run a shared autonomous agent</strong><br><small>Agent</small><br><small class="controls__note">Maker-side, preview. Recipients need a Copilot Studio per-user licence and the set-up link.</small></td><td data-label="Admin UI"><strong>Copilot Studio (maker)</strong><br>Agents › agent › Share › Can use <a href="https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/authoring-share-agent" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No tenant or environment switch for Can use sharing is documented at the time of writing (November 2026), so the first row records that gap. The rows after it are general controls. Microsoft has not confirmed that the Managed Environments sharing rules, which Learn describes in terms of Editor and Viewer permissions, evaluate Can use sharing. For the embedded maker credentials control, Learn states that connections configured to use end-user credentials are not subject to this connection-sharing restriction; run-only sharing requires triggers and tools configured for user authentication.

The sharing-limits PowerShell example on Learn retrieves the environment's governanceConfiguration with Get-AdminPowerAppEnvironment, sets the extendedSettings values bot-limitSharingMode and bot-maxLimitUserSharing, then calls Set-AdminPowerAppEnvironmentGovernanceConfiguration. Its agent example covers sharing with security groups and the number of viewers.

The data policy row needs the Environment Admin role or tenant admin. Learn says a policy that blocks the **Microsoft Copilot Studio** connector stops makers adding event triggers and shows an error in the Triggers section; it does not say what happens to a trigger already running. Add-ConnectorsToPolicy assigns the selected connector objects to the Blocked group. The maker credential setting is immediate for all agents in the environment. For an environment that is in a group, Learn says you cannot configure it on the environment's own details page and must use the group's details page (Manage > Environment groups > group > Settings > Product > Features > Copilot Studio agents > Control maker credential options), as a tenant admin with access to the group. Spending policies take precedence over Power Platform admin center spending controls for the resources they cover.

The cost-management article recommends the AI Administrator role for managing spending policies. Microsoft's roles page lists Global administrator or Billing administrator for creating spending policies, and says the AI administrator and License administrator roles can edit existing spending policies but can't create them.

## Open questions

- Will Microsoft add an admin setting that turns Can use sharing of autonomous agents off per environment or tenant? Watch the Learn sharing article and Message Center.
- Do Managed Environments sharing limits apply to Can use sharing? The Learn page describes Editor and Viewer sharing.
- How do blocked event triggers or a data policy change affect shared instances that are already running?
- Can administrators list or remove individual recipients' instances, and what happens to them when the maker's account is disabled?
- How will per-user credit totals appear in Microsoft 365 admin center or Power Platform admin center reports, and what credit rates apply to autonomous runs?

<!-- rationale
risk: High. Shared agents run from triggers on each recipient's connections, and Microsoft Learn documents no admin switch for this sharing; Learn describes existing sharing limits in terms of Editor and Viewer permissions and does not explicitly confirm their applicability to Can use.
cost: Variable. Copilot Credits are the meter: each end user's autonomous agent usage is totalled and billed through the environment that hosts the agent. Recipients also need a Copilot Studio per-user licence.
impact: Medium. Makers and the users they share with notice it; nothing reaches anyone until a maker shares an agent and the recipient activates it.
-->

<!-- verifier-findings (2026-11-19, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[2].ui; Governance controls table / admin-path: The printed data-policy path reaches Microsoft Copilot Studio > Block in Assign connectors. | Found: The Assign connectors page appears. Use the search box to find the connector you want. Select the three dots (⋮) next to the connector, and then: To prevent agent makers from using the features associated with the connector, select Block. | Fix: Include the omitted unlabelled menu: Power Platform admin center > Security > Data and privacy > Data policy > New Policy > Add an environment > Available > environment > Add to policy > Assign connectors > Microsoft Copilot Studio > three dots > Block. | Source: https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention
- [supported, minor] controls[4].ui; Governance controls table / admin-path: The cited page places Sharing agents with embedded maker credentials at Manage > Environments > environment > Settings > Features. | Found: Go to Manage > Environments, and then select the environment that you want to configure. Select Settings, and then select Features. Find Sharing agents with embedded maker credentials. | Fix: Keep the cited path, but add: 'Microsoft also documents this control as preview under Security > Threat detection > Sharing agent with embedded maker credentials > Environments > environment > Set up, with options to let or not let makers share embedded credentials.' Cite https://learn.microsoft.com/power-platform/admin/security/control-sharing-agents-with-embedded-maker-credentials. | Source: https://learn.microsoft.com/microsoft-copilot-studio/configure-sharing-agents-embedded-maker-credentials
-->
