---
title: "Copilot Studio: enforce safe sharing by detecting credential oversharing"
slug: "copilot-studio-safe-sharing-credential-oversharing"
roadmapId: 566873
topic: "copilot-studio"
products: ["Microsoft Copilot (Microsoft 365)","Microsoft Copilot Studio"]
summary: "Copilot Studio evaluates an agent's connections at share and publish time and can block agents that rely on embedded maker credentials from reaching end users."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: "July CY2026"
risk: "medium"
cost: "none"
impact: "medium"
defaultState: "off"
action: "prepare"
licensing:
  model: "included"
  notes: "Environment setting in the Power Platform admin center. Two modes: All sharing allowed (detect and inform) and Safe sharing enforced (block). Environment-group configuration uses Managed Environments."
audiences: ["power-platform-admin","security","service-owner","maker"]
tags: ["copilot-studio","maker-credentials","sharing","oversharing","publish-controls","power-platform-admin-center","threat-detection"]
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
  - title: "Which credential types makers may choose (Power Platform admin center)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication"
    kind: "learn"
  - title: "Agent sharing limits in Managed Environments (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits#agent-sharing-rules"
    kind: "learn"
  - title: "Agent sharing limits in Managed Environments (Power Platform CLI)"
    url: "https://learn.microsoft.com/power-platform/developer/cli/reference/admin#pac-admin-set-governance-config"
    kind: "learn"
videos: []
related: ["copilot-studio-block-maker-provided-credentials","copilot-studio-share-autonomous-agents-run-only","power-platform-maker-guidelines-copilot-studio","managed-environments"]
controls:
  - governs: "Sharing of agents with embedded maker credentials, per environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features > Sharing agents with embedded maker credentials"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/configure-sharing-agents-embedded-maker-credentials"
    api: null
    note: "Values: All sharing allowed, Safe sharing enforced."
  - governs: "The same setting across environment groups"
    scope: "environment-group"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Threat detection > Sharing agent with embedded maker credentials > Environment groups or Environments > Set up"
      docs: "https://learn.microsoft.com/power-platform/admin/security/control-sharing-agents-with-embedded-maker-credentials"
    api: null
  - governs: "Which credential types makers may choose"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features > Copilot Studio agents > Control maker credential options"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication"
    api: null
  - governs: "Agent sharing limits in Managed Environments"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Edit Managed Environments > Limit sharing"
      docs: "https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits#agent-sharing-rules"
    api:
      kind: "pac-cli"
      call: "pac admin set-governance-config --environment <environment-id> --protection-level Standard --limit-sharing-mode <mode>"
      docs: "https://learn.microsoft.com/power-platform/developer/cli/reference/admin#pac-admin-set-governance-config"
confidence: "high"
created: "2026-11-13"
updated: "2026-11-16"
roadmapModified: "2026-07-01T23:03:18"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
verification:
  status: "needs-correction"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 55
  confirmed: 45
  unconfirmed: 4
  contradicted: 6
  attempts: 1
---

## What's changing

A new environment-level setting, **Sharing agents with embedded maker credentials**, lets Copilot Studio evaluate the connections an agent uses before it is shared or published. An agent is treated as unsafe when it uses at least one connection that does not allow credential sharing *and* that connection was authenticated with credentials supplied at design time (the maker's) rather than asking each user to sign in.

The setting has two modes. **All sharing allowed** detects unsafe agents and tells makers about the risk in the agent status pane and on the affected tools, but does not block anything. **Safe sharing enforced** blocks new sharing with viewers or end users, blocks sharing with everyone in the organisation, and disables **Publish** when publishing would expose an already-shared agent that still carries unsafe maker credentials. For channels where publishing is the distribution step (there is no separate Share action), enforcement happens at publish.

Copilot Studio can also follow dependencies: an agent that calls a flow or another agent using a non-shareable connection can be marked unsafe as dependency-based enforcement expands. Enforcement does not retroactively unshare or disable agents, and it does not stop an agent while it is running.

The control is documented for individual environments and, through the **Security** > **Threat detection** area of the Power Platform admin center, for environment groups. Public preview is listed for July 2026 with General Availability targeted for September 2026.

## Why it matters

The companion control ([block maker-provided credentials](/features/copilot-studio-block-maker-provided-credentials/)) stops makers choosing their own credentials in the first place, but it changes behaviour instantly for every agent in the environment. This feature is the gentler, preventive version: it catches the unsafe agents at the moment they would start leaking privilege (sharing) and gives you a detect-only mode to measure the problem first.

For a service owner this is the difference between "we have told makers not to do this" and "the platform will not let an overshared agent out of the door". It also produces a list of the agents and flows that need re-authoring, which is the input for the stricter control.

## Risk assessment

**Data exposure**
- Unsafe agents let every recipient act with the maker's access in the connected system. Enforcement closes the sharing path; detection mode only reports it.
- Existing shares stay in place when enforcement is enabled, so the backlog of already-shared unsafe agents remains until makers fix them.

**Security & identity**
- Agents using an approved system identity (service principal, API key, managed identity) can still be published when the connection supports it, so the control pushes makers toward proper service identities rather than blocking integration outright.
- Review which admins can change the mode: it is an environment setting, so Environment Admins can relax it unless the environment is in a managed group with the rule published.

**Autonomy & actions**
- Autonomous agents that call "workflow as a tool" only accept end-user credentials in the run-only sharing model; this control reinforces that boundary.

**Change & support**
- In enforced mode makers will hit blocked Publish buttons with a "sharing policy violation" message. Without maker guidance pointing to the fix, this becomes a help desk queue.
- Dependency-based enforcement expanding over time means an agent that published last month can be blocked on its next publish.

## Cost and licensing

- No licence for the setting. Environment-group rules need **Managed Environments**.
- Indirect: maker time to move actions to end-user authentication or to approved service identities; admin time to review the detection findings.
- No Copilot Credit impact.

## Scope

- Copilot Studio agents and the flows and agents they depend on, per environment or environment group.
- Applies to connections that use maker-provided credentials; connections already configured for end-user credentials are not affected.
- Worldwide (standard multi-tenant). Government cloud dates not published.
- Roles: permission to manage environment settings (Environment Admin) for a single environment; tenant admin with group access for environment groups.

## Governance guidance

**Before rollout**
- Turn on **All sharing allowed** in development and validation environments to collect findings without blocking anyone.
- Build the list of agents and flows that rely on maker-owned connections, service principals, API keys or managed identities, and classify which are legitimate service identities and which are personal credentials.
- Write maker guidance that explains the two acceptable patterns (end-user authentication; approved system identity) and where to request the latter.

**At rollout**
- Switch production environments to **Safe sharing enforced** once high-priority agents are clean.
- Publish the setting as an environment-group rule so new environments inherit it.
- Test both explicit sharing and publish-based channels (Teams, Microsoft 365, SharePoint, web) with a representative agent before announcing.

**After rollout**
- Monitor blocked share and publish attempts; recurring connectors in the findings indicate where an approved service identity pattern is missing.
- Combine with the credential-choice control to prevent new unsafe agents being created at all.
- Re-run the review when Microsoft expands dependency-based enforcement.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Sharing of agents with embedded maker credentials, per environment</strong><br><small>Environment</small><br><small class="controls__note">Values: All sharing allowed, Safe sharing enforced.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Sharing agents with embedded maker credentials <a href="https://learn.microsoft.com/microsoft-copilot-studio/configure-sharing-agents-embedded-maker-credentials" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>The same setting across environment groups</strong><br><small>Environment group</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Threat detection › Sharing agent with embedded maker credentials › Environment groups or Environments › Set up <a href="https://learn.microsoft.com/power-platform/admin/security/control-sharing-agents-with-embedded-maker-credentials" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which credential types makers may choose</strong><br><small>Environment</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Copilot Studio agents › Control maker credential options <a href="https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Agent sharing limits in Managed Environments</strong><br><small>Environment</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Edit Managed Environments › Limit sharing <a href="https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits#agent-sharing-rules" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform CLI</strong><br><code>pac admin set-governance-config --environment &lt;environment-id&gt; --protection-level Standard --limit-sharing-mode &lt;mode&gt;</code> <a href="https://learn.microsoft.com/power-platform/developer/cli/reference/admin#pac-admin-set-governance-config" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The safe-sharing setting itself has no documented API, so tenants that automate governance will reach it only through the environment group route in the portal. Sharing limits do have a CLI and a PowerShell cmdlet, `Set-AdminPowerAppEnvironmentGovernanceConfiguration`, described on the [Managed Environments enablement page](https://learn.microsoft.com/power-platform/admin/managed-environment-enable). Makers see violations in the agent's status pane; tools are marked Blocked rather than silently failing. The [feature settings reference](https://learn.microsoft.com/power-platform/admin/settings-features#sharing-agents-with-embedded-maker-credentials-preview) lists the preview status.

## Open questions

- The exact list of connectors whose connections "don't allow credential sharing" is defined by the connector, not published as a single list.
- How enforcement treats agents published to the Microsoft 365 Copilot channel through the organisational catalogue approval flow.
- Whether findings will be exportable or surfaced in Agent 365 inventory views for tenant-wide reporting.

<!-- rationale
risk: Medium. The feature reduces risk; the residual risk is in the default (detect-only) mode and the backlog of already shared agents it does not touch.
cost: None. Environment setting; Managed Environments for group scale.
impact: Medium. Makers see blocked publish and share actions; end users are unaffected.
-->

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [contradicted, blocker] Scope: Roles; Risk assessment: Security & identity / role: Environment Admin is the role needed to change the safe-sharing mode for a single environment, without qualification. | Found: If the environment has a Dataverse database, a user must be assigned the System Administrator role instead of the Environment Admin role to have full admin privileges. | Fix: Remove the unqualified '(Environment Admin)' and the assertion that Environment Admins can relax this setting. Retain the feature page's requirement for permission to manage environment settings; if naming roles, explain the Dataverse distinction at https://learn.microsoft.com/power-platform/admin/database-security#predefined-security-roles and the feature-settings reference's System Administrator or equivalent requirement. | Source: https://learn.microsoft.com/power-platform/admin/database-security#predefined-security-roles
- [supported, minor] Scope: Roles / role: Environment-group administration requires a tenant administrator with appropriate group access. | Found: Any subsequent changes can only be made by a tenant administrator with appropriate edit rights at the environment group level. | Fix: Cite https://learn.microsoft.com/power-platform/admin/environment-groups for the tenant-administrator and group-edit-rights requirement. | Source: https://learn.microsoft.com/power-platform/admin/environment-groups
- [unsupported, blocker] Risk assessment: Security & identity; Governance guidance: At rollout; Governance controls / applicability: Safe sharing can be published as an environment-group rule that locks local settings and is inherited by new member environments. | Found: Searched: Power Platform embedded maker credentials sharing environment group PowerShell REST API automation. Opened environment-groups, environment-groups-rules and the feature's security page; group configuration is documented, but publishing this setting as a rule is not. | Fix: Replace 'Publish the setting as an environment-group rule so new environments inherit it' with 'Configure the setting for the required environment group through Security > Threat detection.' Remove the claim that a published safe-sharing rule locks individual environments; the feature-specific page documents group configuration but not that rule lifecycle.
- [supported, minor] Risk assessment: Autonomy & actions / behaviour: In the shared autonomous-agent model, a workflow used as a tool accepts only end-user credentials. | Found: If your agent calls a workflow as a tool, that workflow can only accept end user credentials for authentication. Workflows that use any maker-only credentials aren't supported for autonomous agents. | Fix: Cite https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/authoring-share-agent#share-an-autonomous-agent-for-users-to-run-preview and explicitly qualify this as the shared autonomous-agent preview, not a general limitation on all autonomous agents. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/authoring-share-agent#share-an-autonomous-agent-for-users-to-run-preview
- [unsupported, blocker] front matter: licensing.model; Cost and licensing / licensing: The safe-sharing setting is included and requires no licence. | Found: Searched: Copilot Studio embedded maker credentials sharing safe sharing enforced licensing license billing credits default. Opened both feature pages and managed-environment-licensing; read billing-licensing search excerpt. No passage states that this setting needs no licence. | Fix: Set licensing.model to 'unknown'. Replace 'No licence for the setting' with 'The feature page lists permission to manage environment settings as a prerequisite but does not state a feature-specific licensing requirement.' Keep Managed Environments requirements separate and cite their licensing page.
- [supported, minor] front matter: licensing.notes; Cost and licensing; rationale: cost / licensing: Environment-group configuration requires Managed Environments. | Found: Environment groups can only contain managed environments. | Fix: Cite https://learn.microsoft.com/power-platform/admin/environment-groups and https://learn.microsoft.com/power-platform/admin/managed-environment-licensing. State that Managed Environments require qualifying standalone licences or pay-as-you-go coverage for active usage; do not imply that grouping is universally licence-free. | Source: https://learn.microsoft.com/power-platform/admin/environment-groups
- [unsupported, blocker] Cost and licensing / cost: The change has no Copilot Credit impact. | Found: Searched: "Sharing agents with embedded maker credentials" PowerShell API default licensing Copilot Credits; Copilot Studio embedded maker credentials sharing safe sharing enforced licensing license billing credits default. Feature pages and billing excerpts give no credit exemption for this control | Fix: Replace 'No Copilot Credit impact' with 'Microsoft has not published a feature-specific Copilot Credit charge or exemption for this setting as of November 2026.' Do not extend that absence to the billing of agents or remediation testing.
- [contradicted, blocker] front matter: cost; rationale: cost; Cost and licensing / consistency: The cost rating 'none' is justified by the setting being included. | Found: Page: 'cost: "none"' and 'None. Environment setting; Managed Environments for group scale.' Standard: 'none: included in licences already held, and the record or a Microsoft page says so.' The cited feature prerequisites establish permissions, not licence inclusion. | Fix: Set cost to 'low' for the known indirect work and replace the rationale with 'Low. Admin review and maker remediation take time; feature-specific licensing is not yet published, and environment groups require qualifying Managed Environments coverage.' Do not describe the change as licence-free.
- [contradicted, blocker] front matter: defaultState; rationale: risk / default: The control is off by default and its default mode is detect-only. | Found: | Setting | Description | Default value |
| Don't let makers share agents with their own credentials embedded (recommended) | When **On**, makers can't share agents that include their own credentials. | On | | Fix: Set defaultState to 'on' according to the cited feature-settings reference. Replace the detect-only-default rationale with a statement that the reference lists blocking enabled by default, while the separate configuration article describes detection and enforcement modes without stating their default. Preserve the existing-agent enforcement gap. | Source: https://learn.microsoft.com/power-platform/admin/settings-features#sharing-agents-with-embedded-maker-credentials-preview
- [contradicted, blocker] controls[0].ui; Governance controls: first table row / admin-path: The cited feature article gives the path Manage > Environments > environment > Settings > Product > Features > Sharing agents with embedded maker credentials. | Found: Go to **Manage** > **Environments**, and then select the environment that you want to configure.
Select **Settings**, and then select **Features**.
Find **Sharing agents with embedded maker credentials**. | Fix: For the current controls[0].ui.docs link, use 'Manage > Environments > environment > Settings > Features > Sharing agents with embedded maker credentials'. Alternatively retain Product and point the row to https://learn.microsoft.com/power-platform/admin/settings-features#sharing-agents-with-embedded-maker-credentials-preview, which explicitly includes Product. Note that the two cited Microsoft procedures differ. | Source: https://learn.microsoft.com/microsoft-copilot-studio/configure-sharing-agents-embedded-maker-credentials
- [contradicted, blocker] controls[2].ui; Governance controls: third table row / admin-path: Credential-choice options can be changed through Manage > Environments > environment > Settings > Product > Features > Copilot Studio agents > Control maker credential options, without a group-membership qualification. | Found: You can't configure this feature on the individual details page for environments that are in a group, you must use the group's details page. | Fix: Keep the path for ungrouped environments and add a row note: 'For an environment in a group, use Manage > Environment groups > group > Settings > Product > Features > Copilot Studio agents > Control maker credential options; the individual environment options are unavailable. Requires a tenant admin with group access.' The existing cited article gives this qualification. | Source: https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication
- [contradicted, blocker] controls[3].ui; Governance controls: fourth table row / admin-path: The cited current procedure ends at Edit Managed Environments > Limit sharing. | Found: In the command bar, **Edit Managed Environments**.
The sharing rules are located in the **Manage sharing** section. | Fix: Replace the final 'Limit sharing' step with 'Manage sharing' in controls[3].ui.path and the rendered row, matching the article's current numbered procedure. The screenshot's older 'Limit sharing' wording does not match that procedure. | Source: https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits#agent-sharing-rules
- [unsupported, blocker] controls[3].api; Governance controls: fourth table row and following prose / command: pac admin set-governance-config --environment <environment-id> --protection-level Standard --limit-sharing-mode <mode> configures agent sharing limits. | Found: Searched: pac admin set-governance-config limit-sharing-mode agents bot-limitSharingMode. Read the full set-governance-config parameters and Limit sharing's agent scripts; the CLI lists a generic sharing mode but no agent mapping, while agent scripts use bot-prefixed settings. | Fix: Replace the purported agent CLI equivalent with the documented PowerShell approach at https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits#use-powershell-to-set-sharing-limits. Use Set-AdminPowerAppEnvironmentGovernanceConfiguration -EnvironmentName <environment-id> -UpdatedGovernanceConfiguration <governance-configuration>, and specify that the object must preserve existing settings and update bot-limitSharingMode, bot-maxLimitUserSharing or bot-authoringSharingDisabled as appropriate. Do not equate the generic CLI flag with agent sharing settings.
-->
