---
kind: "concept"
title: "Managed Environments: the Power Platform governance tier, its licensing condition and its controls"
slug: "managed-environments"
summary: "Managed Environments is the premium Power Platform governance tier that unlocks sharing limits, usage insights, maker guidance and environment-group rules. Active usage in the environment then needs a qualifying licence or meter."
created: "2026-11-13"
updated: "2026-11-17"
version: 2
tags: ["managed-environments","environment-groups","sharing-limits","power-platform","copilot-studio","governance","licensing","maker-guidelines","power-platform-admin-center"]
covers: ["environment-groups","sharing-limits"]
sources:
  - title: "Managed environments overview"
    url: "https://learn.microsoft.com/power-platform/admin/managed-environment-overview"
    kind: "learn"
  - title: "Licensing requirements for managed environments"
    url: "https://learn.microsoft.com/power-platform/admin/managed-environment-licensing"
    kind: "learn"
  - title: "Enable managed environments"
    url: "https://learn.microsoft.com/power-platform/admin/managed-environment-enable"
    kind: "learn"
  - title: "Environment groups"
    url: "https://learn.microsoft.com/power-platform/admin/environment-groups"
    kind: "learn"
  - title: "Rules for environment groups"
    url: "https://learn.microsoft.com/power-platform/admin/environment-groups-rules"
    kind: "learn"
  - title: "Limit sharing"
    url: "https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits"
    kind: "learn"
  - title: "Control how agents are shared"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-sharing-controls-limits"
    kind: "learn"
  - title: "Usage insights"
    url: "https://learn.microsoft.com/power-platform/admin/managed-environment-usage-insights"
    kind: "learn"
  - title: "Data policies for managed environments"
    url: "https://learn.microsoft.com/power-platform/admin/managed-environment-data-policies"
    kind: "learn"
  - title: "Configure maker guidelines for Copilot Studio (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/maker-guidelines"
    kind: "learn"
  - title: "Control sharing agents with embedded maker credentials (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/security/control-sharing-agents-with-embedded-maker-credentials"
    kind: "learn"
  - title: "pac environment-management"
    url: "https://learn.microsoft.com/power-platform/developer/cli/reference/environment-management"
    kind: "learn"
related: ["power-platform-maker-guidelines-copilot-studio","data-policies","copilot-credits","agent-identity"]
controls:
  - governs: "Whether an environment is a Managed Environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > ellipsis next to an environment > Enable Managed Environments (or Edit Managed Environments) > Enable or Save"
      docs: "https://learn.microsoft.com/power-platform/admin/managed-environment-enable"
    api:
      kind: "powershell"
      call: "Set-AdminPowerAppEnvironmentGovernanceConfiguration -EnvironmentName <EnvironmentID> -UpdatedGovernanceConfiguration <configuration with protectionLevel = \"Standard\">"
      docs: "https://learn.microsoft.com/power-platform/admin/managed-environment-enable"
    note: "Power Platform Administrator or Dynamics 365 Administrator role. protectionLevel \"Basic\" removes the property."
  - governs: "Sharing limits for canvas apps, solution-aware cloud flows and agents"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > managed environment > Edit Managed Environments > Manage sharing"
      docs: "https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits"
    api:
      kind: "powershell"
      call: "Set 'bot-limitSharingMode' to \"ExcludeSharingToSecurityGroups\" in extendedSettings, then Set-AdminPowerAppEnvironmentGovernanceConfiguration -EnvironmentName <EnvironmentId> -UpdatedGovernanceConfiguration <config>"
      docs: "https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits"
    note: "Applies to agents that require authentication. Can also be set as group rules."
  - governs: "Rules published to every environment in an environment group"
    scope: "environment-group"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environment groups > select the group > Rules tab > select a rule > Save > Publish rules"
      docs: "https://learn.microsoft.com/power-platform/admin/environment-groups"
    api:
      kind: "pac-cli"
      call: "pac environment-management add-environment-to-group --group-id <group-id> --environment <environment-id>"
      docs: "https://learn.microsoft.com/power-platform/developer/cli/reference/environment-management"
    note: "Tenant administrator. The pac environment-management commands are in preview. Only published rules are enforced."
  - governs: "Sharing agents with embedded maker credentials"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Threat detection > Sharing agent with embedded maker credentials > Environments or Environment groups tab > Set up > Save"
      docs: "https://learn.microsoft.com/power-platform/admin/security/control-sharing-agents-with-embedded-maker-credentials"
    api: null
    note: "Preview. Affects connections that use maker-provided credentials."
  - governs: "Maker guidelines message, link and contact in the Copilot Studio Review pane"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Copilot > Settings > Maker guidelines > Environments tab > select the environment > Edit setting"
      docs: "https://learn.microsoft.com/power-platform/admin/maker-guidelines"
    api: null
    note: "Preview; managed environments only. Also an environment group rule."
  - governs: "Weekly usage insights digest for the environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > managed environment > Edit Managed Environments > Usage insights > Include insights for this environment in the weekly email digest"
      docs: "https://learn.microsoft.com/power-platform/admin/managed-environment-usage-insights"
    api:
      kind: "powershell"
      call: "$tenantSettings.powerPlatform.governance.disableAdminDigest = $True; Set-TenantSettings -RequestBody $tenantSettings"
      docs: "https://learn.microsoft.com/power-platform/admin/managed-environment-usage-insights"
    note: "Needs tenant-level analytics. The PowerShell example unsubscribes the whole organisation."
confidence: "medium"
dependents: 4
changes:
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
  - date: "2026-11-17"
    note: "Corrected after the independent check: licensing is now stated as a condition on active usage, sharing limits as prospective and for authenticated agents only, usage-insight recipients as documented, and a controls table added."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 6 of 83 statements contradicted, 1 unconfirmed; taken offline until corrected"
verification:
  status: "held"
  date: "2026-11-17"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 83
  confirmed: 76
  unconfirmed: 1
  contradicted: 6
  attempts: 2
  hash: "5489de15e131281a7f8bdadd9faaa8e6"
---

## What it is

A Managed Environment is a Power Platform environment with Microsoft's premium governance capabilities switched on. Microsoft describes managed environments as a suite of premium capabilities that let admins manage Power Platform at scale, and says they can be used with any type of environment. Admins enable, disable and edit them in the Power Platform admin center.

Once an environment is managed, Microsoft lists features that include, but are not limited to, environment groups, limit sharing, weekly usage insights, data policies (a filtered view of the policies applied to the environment), maker welcome content, solution checker and IP Firewall. Maker guidelines (preview) is available only for managed environments.

### Environment groups

An environment group is a folder for managed environments: it can contain only managed environments, each environment belongs to one group, and groups cannot overlap or be nested. A tenant administrator publishes rules to the group, and each published rule is enforced in every member environment, where the matching setting becomes read-only. Per-environment exceptions are not currently supported. Default environment routing can create a personal developer environment for each maker and optionally place it in a group of your choice, already managed and carrying the group's rules.

### Sharing limits

Sharing limits restrict how broadly users can share canvas apps, solution-aware cloud flows and agents. For agents, they govern whether owners and editors can grant Editor or Viewer permissions, share with security groups, and how many viewers an agent can have. They are enforced when someone tries to share; they do not remove access that existed before the rules.

## Why it matters

Managed Environments lets an administrator decide who can share what, see weekly what is being built and used, and give makers guidance inside the tools they build in. Environment groups turn those decisions into one rule set that applies to many environments instead of one configuration per environment. Rules you leave untouched in a group remain managed at the environment level, so a group governs only the rules you configure and publish.

Sharing limits restrict prospective Editor and Viewer sharing for authenticated agents. Other controls, such as the preview setting for sharing agents with embedded maker credentials, also constrain sharing or access, so no single control describes how far an agent can spread. Environment groups support sharing controls, maker guidelines (preview), credential controls and other governance settings; review the available rules when planning governance changes.

## Cost and licensing

Managed environments are an entitlement included in Power Apps Premium, Power Automate Premium, Microsoft Copilot Studio, Copilot Studio for Microsoft 365 Copilot (only for features related to Copilot Studio), Power Pages, Dynamics 365 Premium, Enterprise and Team Members, and Dynamics 365 Customer Insights. Pay-as-you-go meters for Power Apps per app, Power Pages and Copilot Studio also qualify.

The condition is about use, not about who made the environment. When you activate managed environments, all active usage requires one of these standalone licences or meters. Every user who runs an app in a managed environment is in scope, including users who run standard apps. Before enabling management, verify qualifying coverage for all active usage, including app runners and applicable flow usage, not just makers. The Power Apps per app meter covers Power Apps usage only; cloud flow usage needs Power Automate licences or per flow plans.

The Developer Plan is not an entitlement for users running their assets in a managed environment. Trial licences can license users, with their own restrictions (for example 30 days). From February 2027, users without an appropriate licence are blocked from opening apps in the managed environment. Review the default environment's licensing before managing it. Credit meters are explained in [Copilot Credits](/concepts/copilot-credits/); workload coverage is on Microsoft's licensing page.

## Risks and limits

- **Sharing rules are prospective.** They do not affect users who already had access. A non-compliant app, flow or agent can only be unshared until it complies, and rules can take up to an hour to be enforced.
- **Agent sharing limits apply only to agents that require authentication.** An agent that does not require authentication is outside them.
- **Dataverse for Teams is a partial case.** Sharing rules there do not affect publishing to the team bound to the environment, but sharing with other teams is enforced.
- **Group rules lock environment settings.** Local admins cannot override a published rule, and no per-environment exception exists. A removed environment keeps the last applied configuration but becomes unlocked.
- **Joining a group can overwrite local settings.** Published sharing limits, maker welcome content, solution checker, usage insights, backup retention or generative AI settings replace what the environment had set.
- **Licence gaps become blocked users.** Users without a qualifying licence are blocked from opening apps from February 2027; apps stay in the environment and access resumes once a licence is detected.
- **Unmanaged developer environments are deprecated.** To keep an existing one, enable Managed Environments on it before December 15, 2026.
- **Disabling needs a check first.** Make sure none of the capabilities are in use. Source and destination must match before copy and restore.
- **Usage insights are unavailable in sovereign clouds** (GCC, GCC High, DoD, China) and need tenant-level analytics turned on.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether an environment is a Managed Environment</strong><br><small>Environment</small><br><small class="controls__note">Power Platform Administrator or Dynamics 365 Administrator role. protectionLevel &quot;Basic&quot; removes the property.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › ellipsis next to an environment › Enable Managed Environments (or Edit Managed Environments) › Enable or Save <a href="https://learn.microsoft.com/power-platform/admin/managed-environment-enable" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AdminPowerAppEnvironmentGovernanceConfiguration -EnvironmentName &lt;EnvironmentID&gt; -UpdatedGovernanceConfiguration &lt;configuration with protectionLevel = &quot;Standard&quot;&gt;</code> <a href="https://learn.microsoft.com/power-platform/admin/managed-environment-enable" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Sharing limits for canvas apps, solution-aware cloud flows and agents</strong><br><small>Environment</small><br><small class="controls__note">Applies to agents that require authentication. Can also be set as group rules.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › managed environment › Edit Managed Environments › Manage sharing <a href="https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set 'bot-limitSharingMode' to &quot;ExcludeSharingToSecurityGroups&quot; in extendedSettings, then Set-AdminPowerAppEnvironmentGovernanceConfiguration -EnvironmentName &lt;EnvironmentId&gt; -UpdatedGovernanceConfiguration &lt;config&gt;</code> <a href="https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Rules published to every environment in an environment group</strong><br><small>Environment group</small><br><small class="controls__note">Tenant administrator. The pac environment-management commands are in preview. Only published rules are enforced.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environment groups › select the group › Rules tab › select a rule › Save › Publish rules <a href="https://learn.microsoft.com/power-platform/admin/environment-groups" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform CLI</strong><br><code>pac environment-management add-environment-to-group --group-id &lt;group-id&gt; --environment &lt;environment-id&gt;</code> <a href="https://learn.microsoft.com/power-platform/developer/cli/reference/environment-management" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Sharing agents with embedded maker credentials</strong><br><small>Environment</small><br><small class="controls__note">Preview. Affects connections that use maker-provided credentials.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Threat detection › Sharing agent with embedded maker credentials › Environments or Environment groups tab › Set up › Save <a href="https://learn.microsoft.com/power-platform/admin/security/control-sharing-agents-with-embedded-maker-credentials" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Maker guidelines message, link and contact in the Copilot Studio Review pane</strong><br><small>Environment</small><br><small class="controls__note">Preview; managed environments only. Also an environment group rule.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Copilot › Settings › Maker guidelines › Environments tab › select the environment › Edit setting <a href="https://learn.microsoft.com/power-platform/admin/maker-guidelines" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Weekly usage insights digest for the environment</strong><br><small>Environment</small><br><small class="controls__note">Needs tenant-level analytics. The PowerShell example unsubscribes the whole organisation.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › managed environment › Edit Managed Environments › Usage insights › Include insights for this environment in the weekly email digest <a href="https://learn.microsoft.com/power-platform/admin/managed-environment-usage-insights" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>$tenantSettings.powerPlatform.governance.disableAdminDigest = $True; Set-TenantSettings -RequestBody $tenantSettings</code> <a href="https://learn.microsoft.com/power-platform/admin/managed-environment-usage-insights" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

To enable or edit managed environments you need the Power Platform Administrator or Dynamics 365 Administrator role in Microsoft Entra ID. Users with the Delegated Admin role or the Environment Admin security role cannot change the managed environments property. Creating groups and configuring rules is done by a Power Platform tenant administrator.

The weekly digest goes to Power Platform administrators and Dynamics 365 service administrators; add anyone else, such as environment admins, as additional recipients. Environments excluded from reporting are left out, and if all are excluded no digest is sent.

Two more surfaces have no row above. To see an environment's data policies, edit the managed environment and select **See active data policies for this environment** under **Data policies**; the policies themselves are explained in [Data policies](/concepts/data-policies/). To see users who need a licence, download **Users requiring licenses in Managed Environments** from **Licensing > Power Apps > Summary > Download report**. Environment routing is set from **Manage > Environment groups > Environment Routing**. Maker guidelines and embedded maker credentials show no PowerShell or API in Microsoft's documentation for them.

## What to check

- Verify licence coverage for every user who runs an app in each environment you plan to manage, and for flow usage, before you enable it.
- Review whether unmanaged developer environments need Managed Environments enabled before December 15, 2026.
- Run the Users requiring licenses in Managed Environments report before February 2027.
- Open each managed environment's Manage sharing settings and confirm what is set for apps, flows and agents.
- Confirm that agents you rely on sharing limits for require authentication.
- Check the Sharing agents with embedded maker credentials setting (preview) per environment or group.
- List your environment groups, review each published rule, and republish any rule marked as changed.
- Check who receives the weekly digest and that tenant-level analytics is on.
- Review maker guidelines (preview) for makers; see [the Copilot Studio briefing](/features/power-platform-maker-guidelines-copilot-studio/).

## Open questions

- Does Microsoft document a PowerShell, Graph or Power Platform API call for maker guidelines or for sharing agents with embedded maker credentials? Not yet documented.
- Which environment-group rules are enabled by default in a new group? Not yet documented.
- Will per-environment exceptions to published group rules be supported? Microsoft says they are not currently supported.
- Does the February 2027 block extend beyond opening apps to flows and agents? The licensing page describes apps.

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Cost and licensing / licensing: Cloud flow usage needs Power Automate licences or per flow plans, without an in-context qualification. | Found: Power Automate cloud flows that are triggered within apps or in context of apps or agents are covered by the respective Power Apps or Microsoft Copilot Studio standalone licenses. | Fix: Keep 'The Power Apps per app meter covers Power Apps usage only' and replace the remainder of that sentence with: 'Cloud flows triggered within apps or in context of apps or agents are covered by the respective Power Apps or Microsoft Copilot Studio standalone licences.' The same licensing page also says a Power Apps Premium or Power Automate Premium licence can satisfy the premium requirement for a user running both an app and a cloud flow; do not imply that every flow needs a separate Power Automate licence. | Source: https://learn.microsoft.com/power-platform/admin/managed-environment-licensing
- [unsupported, blocker] controls[1].api / command: The printed 'Set bot-limitSharingMode ... then Set-AdminPowerAppEnvironmentGovernanceConfiguration' entry is a runnable PowerShell call after replacing placeholders. | Found: Searched: Set-AdminPowerAppEnvironmentGovernanceConfiguration bot-limitSharingMode Get-AdminPowerAppEnvironment. Opened managed-environment-sharing-limits: it documents Add-Member and saving a configuration, not the printed natural-language 'Set ... then' expression. | Fix: Replace the natural-language call with: '$environment = Get-AdminPowerAppEnvironment -EnvironmentName <EnvironmentId>; $governanceConfiguration = $environment.Internal.properties.governanceConfiguration; $governanceConfiguration.settings.extendedSettings | Add-Member -MemberType NoteProperty -Name "bot-limitSharingMode" -Value "ExcludeSharingToSecurityGroups" -Force; Set-AdminPowerAppEnvironmentGovernanceConfiguration -EnvironmentName <EnvironmentId> -UpdatedGovernanceConfiguration $governanceConfiguration'. Keep the existing documentation URL. State in the note that this example prevents agent sharing with security groups rather than configuring every app, flow and agent rule.
- [contradicted, blocker] controls[2].api / command: The add-environment-to-group CLI call is the automation counterpart of configuring and publishing environment-group rules. | Found: pac environment-management add-environment-to-group (Preview) Add the environment to the environment group. | Fix: Retain the valid command and its --group-id and --environment arguments, but change this row's governs text to 'Environment-group rules and membership' and add to its note: 'The UI configures and publishes rules; the CLI example only adds an environment to the group and does not configure or publish rules.' Change the table lead's 'the script, API or command that does the same' to 'the documented automation, with any difference in operation or scope stated in the note'. Apply these changes in both front matter and the rendered table. | Source: https://learn.microsoft.com/power-platform/developer/cli/reference/environment-management
- [contradicted, blocker] controls[5].api / command: Setting disableAdminDigest to True and saving tenant settings is the automation counterpart of the environment-specific digest checkbox. | Found: Here's an example PowerShell script that unsubscribes your entire organization from the weekly digest. | Fix: Replace this row's API with kind 'pac-cli', call 'pac admin set-governance-config --environment <environment-id> --protection-level Standard --exclude-analysis', and docs 'https://learn.microsoft.com/power-platform/developer/cli/reference/admin#pac-admin-set-governance-config'. Replace the tenant-unsubscribe note with: 'The CLI example excludes this environment from the weekly digest.' That reference explicitly documents --exclude-analysis as excluding usage insights for the environment. The existing note correctly identifies the current script's tenant scope, but does not make it an equivalent environment control. | Source: https://learn.microsoft.com/power-platform/admin/managed-environment-usage-insights
- [contradicted, blocker] Open questions: default group rules / absence: Microsoft has not documented which rules are enabled by default in a new environment group. | Found: At this point, the group is empty (contains no environments) and none of its rules are configured. | Fix: Replace this question and 'Not yet documented' answer with: 'A new environment group is empty and none of its rules are configured.' The existing cited environment-groups page states this in Create an environment group. | Source: https://learn.microsoft.com/power-platform/admin/environment-groups
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[2].ui / admin-path: Group rules are configured through Manage > Environment groups > group > Rules > rule > Save > Publish rules. | Found: Select a rule to open its configuration panel. Adjust it as needed, then Save the rule. Repeat this step for all the rules you want to configure in this group. 7. Select the Publish rules button in the command bar. | Fix: Keep the cited path, but add: 'Microsoft also documents the rules-gallery experience using + Add rules and Apply rather than Publish rules.' Cite https://learn.microsoft.com/power-platform/admin/environment-group-rules-gallery, whose Rule lifecycle section describes that different experience. | Source: https://learn.microsoft.com/power-platform/admin/environment-groups
- [supported, minor] controls[3].ui / admin-path: The credential-sharing control is under Security > Threat detection > Sharing agent with embedded maker credentials > Environments or Environment groups > Set up > Save. | Found: Environment groups: In the Environment groups tab, select the environment group for which you want to configure the setting. - Environments: In the Environments tab, select the environment for which you want to configure the setting. 5. Select Set up. | Fix: Insert 'select the environment or environment group' after the tab choice. The pre-check's missing phrase is not a nonexistent tab: both tabs are documented separately. Also note that https://learn.microsoft.com/microsoft-copilot-studio/configure-sharing-agents-embedded-maker-credentials documents the alternative path 'Manage > Environments > environment > Settings > Features > Sharing agents with embedded maker credentials', with All sharing allowed and Safe sharing enforced modes, rather than the cited preview page's allow/block options. | Source: https://learn.microsoft.com/power-platform/admin/security/control-sharing-agents-with-embedded-maker-credentials
- [contradicted, minor] What to check: licensing report / consistency: The checklist's instruction to run the licensing report is represented in the controls table. | Found: Checklist: 'Run the Users requiring licenses in Managed Environments report before February 2027.' Governance notes: 'Two more surfaces have no row above.' The table has no licensing-report row. | Fix: The licensing-report checklist step has no corresponding controls-table row. Remove this checklist bullet; retain the documented report guidance in Governance controls. No additional row is required by this correction.
- [contradicted, minor] What to check: tenant-level analytics / consistency: The checklist's instruction to check the tenant-level analytics control is represented in the controls table. | Found: Checklist: 'Check who receives the weekly digest and that tenant-level analytics is on.' The digest row says 'Needs tenant-level analytics' but provides only the environment digest checkbox and tenant digest opt-out, not the analytics control. | Fix: Remove 'and that tenant-level analytics is on' from this checklist bullet; retain the verified analytics prerequisite in Risks and limits and the digest row's note. No additional row is required by this correction.
-->
