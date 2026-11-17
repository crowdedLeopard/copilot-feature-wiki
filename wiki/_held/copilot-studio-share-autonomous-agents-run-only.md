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
  - title: "Configure data policies for agents"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    kind: "learn"
  - title: "New-DlpPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest"
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
      path: "Security > Data and privacy > Data policy > New Policy > Add an environment > environment > Add to policy > Assign connectors"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    api:
      kind: "powershell"
      call: "New-DlpPolicy -NewPolicy $NewPolicy"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest"
    note: "The UI steps block the Microsoft Copilot Studio connector (tenant admin or Environment Admin). New-DlpPolicy only creates a policy; its page describes no connector classification."
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
    note: "Governs sharing and publishing, not running; not retroactive. Microsoft has not confirmed it evaluates Can use sharing."
  - governs: "Spending limits for agents and environments (resource-based spending policy)"
    scope: "environment"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > Add spending policy"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs"
    api: null
    note: "Replaces Power Platform capacity allocations and billing plans for covered resources; excludes AI Builder credits. Learn recommends the AI Administrator role."
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
updated: "2026-11-17"
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
version: 4
verification:
  status: "held"
  date: "2026-11-17"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 75
  confirmed: 73
  unconfirmed: 0
  contradicted: 2
  attempts: 3
  hash: "cf3f344c3c8603854db739a30da7774f"
---

## What's changing

Copilot Studio is adding run-only sharing for autonomous agents: a maker can share a published agent that has triggers with individual users or security groups, who run it under their own credentials. The roadmap description says autonomous agents could previously only be used and managed by makers; run-only sharing lets makers reach end users who have no edit permission or ownership.

Microsoft Learn already documents the behaviour, with the articles marked as prerelease. The maker selects **Share**, gives recipients **Can use**, then copies the **Copy link to set up** link and sends it, because recipients get no notification. Recipients open the agent management page, connect every trigger, tool and workflow that needs their credentials, and can change only the trigger options the maker turned on with **Editable by user**. They cannot change the agent's instructions, tools or other authoring settings, and they cannot specify or modify tool parameters: tool calls are invoked and executed fully with AI, based on the maker's specifications. A workflow used as a tool can accept only end-user credentials.

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
- Tell makers to publish to Teams + Microsoft 365 with Make agent available in Microsoft Copilot on, and to send recipients the **Copy link to set up** link.
- Brief the help desk on the agent management page: connections, the **Enabled** toggle for triggers, update consent and the **Activity** tab.

### After rollout
- Check Copilot Credit consumption by environment and agent against the maker's estimate.
- Review which agents have Can use recipients when a maker leaves, since the page does not say what happens to instances.
- Watch the preview articles for changes to the tool-parameter and workflow-credential limits before General Availability.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether autonomous agents may be shared with Can use (admin switch)</strong><br><small>Tenant</small><br><small class="controls__note">No admin setting for run-only sharing is documented at the time of writing (November 2026). The maker chooses via Share.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who may share agents and with how many people (Managed Environments)</strong><br><small>Environment</small><br><small class="controls__note">General control for agent Editor and Viewer permissions; not confirmed for Can use. Managed environments only. First set extendedSettings bot-limitSharingMode and bot-maxLimitUserSharing on the retrieved governanceConfiguration.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Edit Managed Environments › Manage sharing <a href="https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AdminPowerAppEnvironmentGovernanceConfiguration -EnvironmentName &lt;EnvironmentId&gt; -UpdatedGovernanceConfiguration $governanceConfiguration</code> <a href="https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether event triggers can be added (Microsoft Copilot Studio connector)</strong><br><small>Environment</small><br><small class="controls__note">The UI steps block the Microsoft Copilot Studio connector (tenant admin or Environment Admin). New-DlpPolicy only creates a policy; its page describes no connector classification.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Data policy › New Policy › Add an environment › environment › Add to policy › Assign connectors <a href="https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpPolicy -NewPolicy $NewPolicy</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which credential types makers may use for agent tools</strong><br><small>Environment</small><br><small class="controls__note">Path is for environments not in a group; grouped environments use the group's page (see notes). Blocking maker credentials makes autonomously triggered agents fail for lack of credentials. Validate first.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Copilot Studio agents › Control maker credential options <a href="https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Sharing agents with embedded maker credentials</strong><br><small>Environment</small><br><small class="controls__note">Governs sharing and publishing, not running; not retroactive. Microsoft has not confirmed it evaluates Can use sharing.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Features › Sharing agents with embedded maker credentials <a href="https://learn.microsoft.com/microsoft-copilot-studio/configure-sharing-agents-embedded-maker-credentials" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Spending limits for agents and environments (resource-based spending policy)</strong><br><small>Environment</small><br><small class="controls__note">Replaces Power Platform capacity allocations and billing plans for covered resources; excludes AI Builder credits. Learn recommends the AI Administrator role.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › Add spending policy <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users can run a shared autonomous agent</strong><br><small>Agent</small><br><small class="controls__note">Maker-side, preview. Recipients need a Copilot Studio per-user licence and the set-up link.</small></td><td data-label="Admin UI"><strong>Copilot Studio (maker)</strong><br>Agents › agent › Share › Can use <a href="https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/authoring-share-agent" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No tenant or environment switch for Can use sharing is documented at the time of writing (November 2026), so the first row records that gap. The rows after it are general controls: Microsoft has not confirmed that the Managed Environments sharing rules, which Learn describes in terms of Editor and Viewer permissions, or the embedded maker credentials control, which Learn describes for explicit sharing of agents that use maker credentials, evaluate Can use sharing.

The sharing-limits PowerShell example on Learn retrieves the environment's governanceConfiguration with Get-AdminPowerAppEnvironment, sets the extendedSettings values bot-limitSharingMode and bot-maxLimitUserSharing, then calls Set-AdminPowerAppEnvironmentGovernanceConfiguration. Its agent example covers sharing with security groups and the number of viewers.

The data policy row needs the Environment Admin role or tenant admin. Learn says a policy that blocks the **Microsoft Copilot Studio** connector stops makers adding event triggers and shows an error in the Triggers section; it does not say what happens to a trigger already running. New-DlpPolicy only creates a policy: its page describes no connector classification, so the connector is blocked through the UI steps in the table. The maker credential setting is immediate for all agents in the environment. For an environment that is in a group, Learn says you cannot configure it on the environment's own details page and must use the group's details page (Manage > Environment groups > group > Settings > Product > Features > Copilot Studio agents > Control maker credential options), as a tenant admin with access to the group. Spending policies take precedence over Power Platform admin center spending controls for the resources they cover.

## Open questions

- Will Microsoft add an admin setting that turns Can use sharing of autonomous agents off per environment or tenant? Watch the Learn sharing article and Message Center.
- Do Managed Environments sharing limits, or the embedded maker credentials control, apply to Can use sharing? The Learn pages describe Editor and Viewer sharing and explicit sharing respectively.
- How do blocked event triggers or a data policy change affect shared instances that are already running?
- Can administrators list or remove individual recipients' instances, and what happens to them when the maker's account is disabled?
- How will per-user credit totals appear in Microsoft 365 admin center or Power Platform admin center reports, and what credit rates apply to autonomous runs?

<!-- rationale
risk: High. Shared agents run from triggers on each recipient's connections, and Microsoft Learn documents no admin switch for this sharing; Learn describes existing sharing limits in terms of Editor and Viewer permissions and does not explicitly confirm their applicability to Can use.
cost: Variable. Copilot Credits are the meter: each end user's autonomous agent usage is totalled and billed through the environment that hosts the agent. Recipients also need a Copilot Studio per-user licence.
impact: Medium. Makers and the users they share with notice it; nothing reaches anyone until a maker shares an agent and the recipient activates it.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[4].note; Governance controls; Open questions / applicability: Microsoft has not confirmed how the embedded-maker-credentials sharing control applies to Can use sharing. | Found: Connections configured to use end-user credentials aren't subject to this connection-sharing restriction because each user authenticates by using their own connection at runtime. | Fix: Replace the embedded-control uncertainty in the row note and Governance controls with: 'Connections configured to use end-user credentials are not subject to this connection-sharing restriction; run-only sharing requires triggers and tools configured for user authentication.' Cite https://learn.microsoft.com/microsoft-copilot-studio/admin-sharing-controls-limits and the existing sharing article. Remove the embedded-maker-credentials clause from the corresponding Open questions item, leaving the Managed Environments sharing-limits question unchanged. | Source: https://learn.microsoft.com/microsoft-copilot-studio/admin-sharing-controls-limits
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[2].ui; Governance controls table / admin-path: The data-policy creation path runs through Security > Data and privacy > Data policy > New Policy > Add an environment > environment > Add to policy > Assign connectors. | Found: To add an environment to your data policy, select the environment in the Available tab, and then select Add to policy. | Fix: Insert the selection tab: Power Platform admin center > Security > Data and privacy > Data policy > New Policy > Add an environment > Available > environment > Add to policy > Assign connectors. | Source: https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention
- [supported, minor] controls[2].api; controls[2].note; Governance controls / command: New-DlpPolicy -NewPolicy $NewPolicy creates a policy but its reference does not describe classifying the Microsoft Copilot Studio connector. | Found: New-DlpPolicy -NewPolicy $NewPolicy Creates a new policy with the $NewPolicy object. -DefaultConnectorClassification Default connector classification. | Fix: Replace 'its page describes no connector classification' in the row note and prose with 'its reference does not describe assigning the Microsoft Copilot Studio connector to Blocked'. The reference does document DefaultConnectorClassification. | Source: https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest
- [supported, minor] controls[4].ui; Governance controls table / admin-path: The embedded-maker-credentials control is at Manage > Environments > environment > Settings > Features > Sharing agents with embedded maker credentials. | Found: Go to Manage > Environments ... select the environment ... Select Settings, and then select Features. ... Find Sharing agents with embedded maker credentials. | Fix: Retain the cited path, but add this qualification to the row note: 'The Power Platform preview article documents another route: Security > Threat detection > Sharing agent with embedded maker credentials > Environments > environment > Set up.' Cite https://learn.microsoft.com/power-platform/admin/security/control-sharing-agents-with-embedded-maker-credentials. | Source: https://learn.microsoft.com/microsoft-copilot-studio/configure-sharing-agents-embedded-maker-credentials
- [contradicted, minor] Governance guidance: After rollout; Governance controls / consistency: The checklist tells administrators to check consumption by environment and agent, but the controls table has no reporting row. | Found: Check Copilot Credit consumption by environment and agent against the maker's estimate. The table covers sharing, triggers, credentials, spending limits and recipient access, but not consumption reporting. | Fix: Remove 'Check Copilot Credit consumption by environment and agent against the maker's estimate' from the After rollout checklist; that reporting control has no corresponding table row.
-->
