---
title: "Copilot Studio: block sharing of agents that embed maker credentials"
slug: "copilot-studio-safe-sharing-credential-oversharing"
roadmapId: 566873
topic: "copilot-studio"
products: ["Microsoft Copilot (Microsoft 365)","Microsoft Copilot Studio"]
summary: "An environment setting in Copilot Studio detects agents that run connections under the maker's own credentials and can block them from being shared or published. Makers are affected; admins should choose a mode."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: "July CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Covered by Copilot Studio product access: a user license with a prepaid Copilot Credit pack subscription, the Copilot Studio authors role (pay-as-you-go), a Microsoft 365 Copilot license, or a trial license (cannot publish). No feature-specific licence, price or credit treatment is published. Environment groups need Managed Environments, which have their own licensing requirements."
audiences: ["power-platform-admin","security","service-owner","maker"]
tags: ["copilot-studio","maker-credentials","sharing","oversharing","publish-controls","power-platform-admin-center","threat-detection","environment-groups"]
sources:
  - title: "Microsoft 365 Roadmap 566873"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=566873"
    kind: "roadmap"
  - title: "Configure sharing agents with embedded maker credentials"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/configure-sharing-agents-embedded-maker-credentials"
    kind: "learn"
  - title: "Control sharing agents with embedded maker credentials (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/security/control-sharing-agents-with-embedded-maker-credentials"
    kind: "learn"
  - title: "Control how agents are shared"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-sharing-controls-limits"
    kind: "learn"
  - title: "Manage feature settings"
    url: "https://learn.microsoft.com/power-platform/admin/settings-features"
    kind: "learn"
  - title: "Limit sharing"
    url: "https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits"
    kind: "learn"
  - title: "Environment groups"
    url: "https://learn.microsoft.com/power-platform/admin/environment-groups"
    kind: "learn"
  - title: "Licensing requirements for managed environments"
    url: "https://learn.microsoft.com/power-platform/admin/managed-environment-licensing"
    kind: "learn"
  - title: "Licensing for agents powered by the standard harness"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing"
    kind: "learn"
videos: []
related: ["agent-identity","power-platform-maker-guidelines-copilot-studio"]
controls:
  - governs: "Sharing agents with embedded maker credentials, per environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Features > Sharing agents with embedded maker credentials"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/configure-sharing-agents-embedded-maker-credentials"
    api: null
    note: "Modes: All sharing allowed, Safe sharing enforced. The settings reference reaches Features via Settings > Product. Preview documentation."
  - governs: "The same setting for an environment group or an environment"
    scope: "environment-group"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Threat detection > Sharing agent with embedded maker credentials > Environment groups > environment group > Set up"
      docs: "https://learn.microsoft.com/power-platform/admin/security/control-sharing-agents-with-embedded-maker-credentials"
    api: null
    note: "Preview article. The Environments tab selects an environment instead. Offers Don't let makers share agents with their own credentials embedded (recommended) and Let makers share agents with their own credentials embedded."
  - governs: "Who an agent can be shared with (existing Managed Environments control, not credential-aware)"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Edit Managed Environments > Manage sharing"
      docs: "https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits"
    api:
      kind: "powershell"
      call: "Set-AdminPowerAppEnvironmentGovernanceConfiguration -EnvironmentName <EnvironmentId> -UpdatedGovernanceConfiguration $governanceConfiguration"
      docs: "https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits"
    note: "Limits editors, viewers and security groups; not credential-aware. Retrieve governanceConfiguration first, then update settings.extendedSettings (bot-limitSharingMode, bot-maxLimitUserSharing, bot-authoringSharingDisabled)."
confidence: "high"
created: "2026-11-13"
updated: "2026-11-19"
roadmapModified: "2026-07-01T23:03:18"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Corrected after verification: default state now follows the settings reference (On, preview), licensing is marked not yet published, paths and the sharing-limits PowerShell call were re-read, and unsupported role and environment-group claims were removed."
  - date: "2026-11-17"
    note: "Corrected after verification: publish behaviour now distinguishes unshared and already-shared agents, the sharing-limits PowerShell call is shown as documented, and the scope note no longer excludes already-shared agents."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 57 statements confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 61 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected after verification: licensing model is now included, citing the Copilot Studio licensing page, and the impact rationale no longer says end users are not asked to do anything."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 71 statements confirmed"
version: 5
verification:
  status: "verified"
  date: "2026-11-19"
  version: 5
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 71
  confirmed: 71
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "e5c319adc1f7c50c3492ba4fb0f6bd66"
---

## What's changing

Copilot Studio evaluates an agent's connections before the agent is shared or published, and can stop an agent that would let other people act with the maker's own credentials. The control is the **Sharing agents with embedded maker credentials** setting in the Power Platform admin center.

An agent counts as unsafe for sharing when it uses at least one connection that does not allow credential sharing and that connection uses credentials supplied at design time instead of asking each user to sign in. Copilot Studio can also follow dependencies: as dependency-based enforcement becomes available, a flow or agent that uses a non-shareable connection can make the calling agent unsafe too. Connections set to end-user credentials are not subject to the restriction.

The configuration article describes two modes. **All sharing allowed** detects unsafe credential use and informs makers without blocking. **Safe sharing enforced** blocks the applicable publish and share paths. Makers can still edit and save an unsafe agent, but cannot newly share it, and cannot share it with everyone in the organisation. For channels where publishing distributes the agent without a separate Share action, maker user credentials can disable publishing. For authenticated agents, an unshared agent can publish successfully; an already-shared violating agent is blocked. Agents that use an approved system identity (a service principal, API key or managed identity) can be published when the connection supports the scenario. The control does not unshare existing agents and does not block an agent while it is running.

The settings reference (a preview section, marked as prerelease documentation) lists the blocking option as On by default; the configuration article does not state which mode is the default. The roadmap item is In development, with a preview target of July CY2026 and a general availability target of September CY2026. Both dates have passed at the time of writing (November 2026) while the item is still listed as In development.

## Why it matters

A shared agent that carries a maker's connection lets every user of the agent perform operations with the maker's permissions. This setting is the platform-side check that stops that pattern at the moment it spreads, at share and publish time, rather than relying on makers having read guidance.

If nobody reviews it, the exposure is in the agents that are already shared: the control does not unshare them, and a later publish of such an agent can be blocked. Plan for a backlog of agents that need new connections, and for makers who first hit the block when they try to publish an update.

## Risk assessment

**Data exposure**
- An agent shared with a maker-credential connection lets other users reach the connected system with the maker's access. Safe sharing enforced closes the new-share and publish paths; All sharing allowed only reports it.
- Agents shared before enforcement stay shared. Review them separately, because the control only affects later sharing and publishing.

**Security & identity**
- Connections set to end-user credentials are not restricted, so the control pushes makers towards per-user sign-in or an approved system identity (service principal, API key, managed identity) instead of ending integrations.
- The environment setting needs permission to manage settings for the environment; the settings reference asks for the System Administrator security role or equivalent. Treat that role as the one that can relax the mode, and use the environment-group route in the controls table where you need a central setting.
- The two Learn pages use different option labels for the same setting (two modes on one, 'Don't let makers share agents with their own credentials embedded (recommended)' and 'Let makers share agents with their own credentials embedded' on the other). Confirm what your tenant shows before you document it for makers.

**Autonomy & actions**
- The control governs sharing and publishing only. It does not stop an agent while it is running, and it is not a runtime restriction on what an already-shared agent can do.

**Change & support**
- In enforced mode, makers see tools marked **Blocked** with a **Sharing policy violation** message (if a tool is also restricted by a data policy, Copilot Studio displays **Data policy violation** instead), the **Publish** option is unavailable, and sharing with a viewer, an end user or everyone in the organisation is refused. Expect help desk questions unless makers have guidance on end-user authentication.
- Dependency-based enforcement can expand over time, so an agent that published cleanly can be blocked on a later publish because of a flow or agent it calls.

## Cost and licensing

- **Licence:** To use Copilot Studio, you need one of: a Copilot Studio user license (free, but it needs a tenant prepaid Copilot Credit pack subscription), the Copilot Studio authors role for applicable pay-as-you-go scenarios, a Microsoft 365 Copilot license, or a trial license, which cannot publish agents (Licensing for agents powered by the standard harness page). The feature page lists permission to manage settings for the target environment as its prerequisite and names no licence. Microsoft has not published a feature-specific licence, price or Copilot Credit charge or exemption for this setting at the time of writing (November 2026).
- **Managed Environments:** Environment groups can only contain managed environments. Managed environments are included as an entitlement in licences such as Power Apps Premium, Power Automate Premium and Microsoft Copilot Studio, and when managed environments are activated, all active usage requires a qualifying standalone licence or pay-as-you-go meter (Managed Environments licensing page).
- **Indirect cost:** Admin time to review findings and maker time to move connections to end-user authentication or an approved system identity.

## Scope

- **Who and what:** Copilot Studio agents in an environment, with dependencies such as called flows and agents evaluated as dependency-based enforcement becomes available. The setting applies per environment, and agents that depend on components in other environments or tenants can need extra validation.
- **Roles:** Permission to manage settings for the target environment; the settings reference asks for the System Administrator security role or equivalent permissions.
- **Clouds and platforms:** The roadmap record lists Worldwide (Standard Multi-Tenant) and Web.
- **Rollout:** The roadmap record lists Preview and General Availability phases, with targets of July CY2026 and September CY2026 and the status In development. The Learn pages describe the feature as preview.
- **Not restricted:** connections using end-user credentials. Existing sharing and running agents are not retroactively disabled, but later publishing of an already-shared unsafe agent can be blocked.

## Governance guidance

### Before rollout
- Set the environment to **All sharing allowed** in a development or validation environment to collect findings without blocking makers (control row 1).
- List the agents and flows that use maker-owned connections, service principals, API keys or managed identities, and separate approved service identities from personal credentials.
- Write maker guidance covering the two ways out: end-user authentication, or an organisation-approved system identity.

### At rollout
- Switch environments to **Safe sharing enforced** once the high-priority agents are clean (control row 1), or configure the environment group through **Security** > **Threat detection** (control row 2).
- Test explicit sharing and a publish-only channel with a representative agent, including an agent that is already shared.
- Check the sharing limits under **Manage sharing** so that viewer and editor limits and credential safety are not confused (control row 3).

### After rollout
- Monitor blocked share and publish attempts and update maker guidance when the same connector recurs.
- Re-test called flows and agents when Microsoft expands dependency-based enforcement.
- Review agents that were shared before enforcement, because they stay shared.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Sharing agents with embedded maker credentials, per environment</strong><br><small>Environment</small><br><small class="controls__note">Modes: All sharing allowed, Safe sharing enforced. The settings reference reaches Features via Settings &gt; Product. Preview documentation.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Features › Sharing agents with embedded maker credentials <a href="https://learn.microsoft.com/microsoft-copilot-studio/configure-sharing-agents-embedded-maker-credentials" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>The same setting for an environment group or an environment</strong><br><small>Environment group</small><br><small class="controls__note">Preview article. The Environments tab selects an environment instead. Offers Don't let makers share agents with their own credentials embedded (recommended) and Let makers share agents with their own credentials embedded.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Threat detection › Sharing agent with embedded maker credentials › Environment groups › environment group › Set up <a href="https://learn.microsoft.com/power-platform/admin/security/control-sharing-agents-with-embedded-maker-credentials" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who an agent can be shared with (existing Managed Environments control, not credential-aware)</strong><br><small>Environment</small><br><small class="controls__note">Limits editors, viewers and security groups; not credential-aware. Retrieve governanceConfiguration first, then update settings.extendedSettings (bot-limitSharingMode, bot-maxLimitUserSharing, bot-authoringSharingDisabled).</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Edit Managed Environments › Manage sharing <a href="https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AdminPowerAppEnvironmentGovernanceConfiguration -EnvironmentName &lt;EnvironmentId&gt; -UpdatedGovernanceConfiguration $governanceConfiguration</code> <a href="https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The two admin centre routes to this setting are documented in different articles with different option labels, and the group route is a preview article. The Learn pages document no PowerShell, Graph or Power Platform API call for the safe-sharing setting at the time of writing (November 2026), so automation of this setting is not yet documented. The Managed Environments sharing limits in row 3 govern who an agent can be shared with (editors, viewers, security groups, viewer count); they do not evaluate credentials and are not a control over this feature. Role needed for the environment route: permission to manage settings for the environment, with the System Administrator security role or equivalent named in the settings reference.

## Open questions

- Which mode is the default when the setting first reaches an environment: the settings reference lists blocking as On, while the configuration article does not state it? Watch the Learn pages and the Message center.
- When will the preview-marked pages reach general availability, given that the roadmap targets of July CY2026 and September CY2026 have passed while the item is still In development?
- Is there a PowerShell, Graph or Power Platform API call for the setting, so that environment changes can be scripted and audited?
- Which connectors have connections that do not allow credential sharing? Microsoft has not published a list.
- Does Microsoft publish a feature-specific licence requirement or Copilot Credit treatment for the setting?

<!-- rationale
risk: Medium. The Learn settings reference lists blocking as On by default, but the control does not unshare agents that are already shared, and the Learn pages describe it as preview.
cost: Low. The only cost the sources show is admin and maker time; no feature-specific licence or Copilot Credit charge is published, and environment groups can only hold Managed Environments.
impact: Medium. Makers meet blocked Share and Publish actions and must rework connections.
-->
