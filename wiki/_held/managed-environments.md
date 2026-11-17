---
kind: "concept"
title: "Managed Environments: the Power Platform governance tier, its licensing condition and its controls"
slug: "managed-environments"
summary: "Managed Environments is the premium Power Platform governance tier that unlocks sharing limits, usage insights, maker guidance and environment-group rules. Active usage in the environment then needs a qualifying licence or meter."
created: "2026-11-13"
updated: "2026-11-17"
version: 3
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
  - title: "pac admin"
    url: "https://learn.microsoft.com/power-platform/developer/cli/reference/admin#pac-admin-set-governance-config"
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
      call: "Set-AdminPowerAppEnvironmentGovernanceConfiguration -EnvironmentName <EnvironmentId> -UpdatedGovernanceConfiguration $governanceConfiguration"
      docs: "https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits"
    note: "Applies to agents that require authentication. The page's agent example sets 'bot-limitSharingMode' to \"ExcludeSharingToSecurityGroups\" in $governanceConfiguration first, and covers only that rule. Can also be group rules."
  - governs: "Environment-group rules and membership"
    scope: "environment-group"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environment groups > group > Rules > rule > Save > Publish rules"
      docs: "https://learn.microsoft.com/power-platform/admin/environment-groups"
    api:
      kind: "pac-cli"
      call: "pac environment-management add-environment-to-group --group-id <group-id> --environment <environment-id>"
      docs: "https://learn.microsoft.com/power-platform/developer/cli/reference/environment-management"
    note: "Tenant administrator. The pac commands are in preview. Only published rules are enforced. The UI configures and publishes rules; the CLI example only adds an environment to the group and does not configure or publish rules."
  - governs: "Sharing agents with embedded maker credentials"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Threat detection > Sharing agent with embedded maker credentials > Environments or Environment groups > Set up > Save"
      docs: "https://learn.microsoft.com/power-platform/admin/security/control-sharing-agents-with-embedded-maker-credentials"
    api: null
    note: "Preview. Affects connections that use maker-provided credentials."
  - governs: "Maker guidelines message, link and contact in the Copilot Studio Review pane"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Copilot > Settings > Maker guidelines > Environments > environment > Edit setting"
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
      kind: "pac-cli"
      call: "pac admin set-governance-config --environment <environment-id> --protection-level Standard --exclude-analysis"
      docs: "https://learn.microsoft.com/power-platform/developer/cli/reference/admin#pac-admin-set-governance-config"
    note: "Needs tenant-level analytics. The CLI example excludes this environment from the weekly digest."
confidence: "medium"
dependents: 4
changes:
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
  - date: "2026-11-17"
    note: "Corrected after the independent check: licensing is now stated as a condition on active usage, sharing limits as prospective and for authenticated agents only, usage-insight recipients as documented, and a controls table added."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 6 of 83 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected after the independent check: cloud flow licensing qualified, sharing-limits and environment-group rows state what their automation does and does not cover, the digest row now uses the CLI option that excludes one environment, and the new-group default is stated as documented."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 92 statements contradicted, 0 unconfirmed; taken offline until corrected"
verification:
  status: "held"
  date: "2026-11-17"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 92
  confirmed: 90
  unconfirmed: 0
  contradicted: 2
  attempts: 3
  hash: "b006e9821f3c020e059fa94d8fd6a730"
---

## What it is

A Managed Environment is a Power Platform environment with Microsoft's premium governance capabilities switched on. Microsoft describes managed environments as a suite of premium capabilities that let admins manage Power Platform at scale, and says they can be used with any type of environment. Admins enable, disable and edit them in the Power Platform admin center.

Once an environment is managed, Microsoft lists features that include, but are not limited to, environment groups, limit sharing, weekly usage insights, data policies (a filtered view of the policies applied to the environment), maker welcome content, solution checker and IP Firewall. Maker guidelines (preview) is available only for managed environments.

### Environment groups

An environment group is a folder for managed environments: it can contain only managed environments, each environment belongs to one group, and groups cannot overlap or be nested. A new group is empty and none of its rules are configured. A tenant administrator publishes rules to the group, and each published rule is enforced in every member environment, where the matching setting becomes read-only. Per-environment exceptions are not currently supported. Default environment routing can create a personal developer environment for each maker and optionally place it in a group of your choice, already managed and carrying the group's rules.

### Sharing limits

Sharing limits restrict how broadly users can share canvas apps, solution-aware cloud flows and agents. For agents, they govern whether owners and editors can grant Editor or Viewer permissions, share with security groups, and how many viewers an agent can have. They are enforced when someone tries to share; they do not remove access that existed before the rules.

## Why it matters

Managed Environments lets an administrator decide who can share what, see weekly what is being built and used, and give makers guidance inside the tools they build in. Environment groups turn those decisions into one rule set that applies to many environments instead of one configuration per environment. Rules you leave untouched in a group remain managed at the environment level, so a group governs only the rules you configure and publish.

Sharing limits restrict prospective Editor and Viewer sharing for authenticated agents. Other controls, such as the preview setting for sharing agents with embedded maker credentials, also constrain sharing or access, so no single control describes how far an agent can spread. Environment groups support sharing controls, maker guidelines (preview), credential controls and other governance settings; review the available rules when planning governance changes.

## Cost and licensing

Managed environments are an entitlement included in Power Apps Premium, Power Automate Premium, Microsoft Copilot Studio, Copilot Studio for Microsoft 365 Copilot (only for features related to Copilot Studio), Power Pages, Dynamics 365 Premium, Enterprise and Team Members, and Dynamics 365 Customer Insights. Pay-as-you-go meters for Power Apps per app, Power Pages and Copilot Studio also qualify.

The condition is about use, not about who made the environment. When you activate managed environments, all active usage requires one of these standalone licences or meters. Every user who runs an app in a managed environment is in scope, including users who run standard apps. Before enabling management, verify qualifying coverage for all active usage, including app runners and applicable flow usage, not just makers. The Power Apps per app meter covers Power Apps usage only. Cloud flows triggered within apps or in context of apps or agents are covered by the respective Power Apps or Microsoft Copilot Studio standalone licences.

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
<tr><td data-label="Control"><strong>Sharing limits for canvas apps, solution-aware cloud flows and agents</strong><br><small>Environment</small><br><small class="controls__note">Applies to agents that require authentication. The page's agent example sets 'bot-limitSharingMode' to &quot;ExcludeSharingToSecurityGroups&quot; in $governanceConfiguration first, and covers only that rule. Can also be group rules.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › managed environment › Edit Managed Environments › Manage sharing <a href="https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AdminPowerAppEnvironmentGovernanceConfiguration -EnvironmentName &lt;EnvironmentId&gt; -UpdatedGovernanceConfiguration $governanceConfiguration</code> <a href="https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Environment-group rules and membership</strong><br><small>Environment group</small><br><small class="controls__note">Tenant administrator. The pac commands are in preview. Only published rules are enforced. The UI configures and publishes rules; the CLI example only adds an environment to the group and does not configure or publish rules.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environment groups › group › Rules › rule › Save › Publish rules <a href="https://learn.microsoft.com/power-platform/admin/environment-groups" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform CLI</strong><br><code>pac environment-management add-environment-to-group --group-id &lt;group-id&gt; --environment &lt;environment-id&gt;</code> <a href="https://learn.microsoft.com/power-platform/developer/cli/reference/environment-management" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Sharing agents with embedded maker credentials</strong><br><small>Environment</small><br><small class="controls__note">Preview. Affects connections that use maker-provided credentials.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Threat detection › Sharing agent with embedded maker credentials › Environments or Environment groups › Set up › Save <a href="https://learn.microsoft.com/power-platform/admin/security/control-sharing-agents-with-embedded-maker-credentials" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Maker guidelines message, link and contact in the Copilot Studio Review pane</strong><br><small>Environment</small><br><small class="controls__note">Preview; managed environments only. Also an environment group rule.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Copilot › Settings › Maker guidelines › Environments › environment › Edit setting <a href="https://learn.microsoft.com/power-platform/admin/maker-guidelines" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Weekly usage insights digest for the environment</strong><br><small>Environment</small><br><small class="controls__note">Needs tenant-level analytics. The CLI example excludes this environment from the weekly digest.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › managed environment › Edit Managed Environments › Usage insights › Include insights for this environment in the weekly email digest <a href="https://learn.microsoft.com/power-platform/admin/managed-environment-usage-insights" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform CLI</strong><br><code>pac admin set-governance-config --environment &lt;environment-id&gt; --protection-level Standard --exclude-analysis</code> <a href="https://learn.microsoft.com/power-platform/developer/cli/reference/admin#pac-admin-set-governance-config" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

To enable or edit managed environments you need the Power Platform Administrator or Dynamics 365 Administrator role in Microsoft Entra ID. Users with the Delegated Admin role or the Environment Admin security role cannot change the managed environments property. Creating groups and configuring rules is done by a Power Platform tenant administrator.

The weekly digest goes to Power Platform administrators and Dynamics 365 service administrators; add anyone else, such as environment admins, as additional recipients. Environments excluded from reporting are left out, and if all are excluded no digest is sent.

Two more surfaces have no row above. To see an environment's data policies, edit the managed environment and select **See active data policies for this environment** under **Data policies**; the policies themselves are explained in [Data policies](/concepts/data-policies/). To see users who need a licence, download **Users requiring licenses in Managed Environments** from **Licensing > Power Apps > Summary > Download report**. Environment routing is set from **Manage > Environment groups > Environment Routing**. Maker guidelines and embedded maker credentials show no PowerShell or API in Microsoft's documentation for them.

## What to check

- Verify licence coverage for every user who runs an app in each environment you plan to manage, and for flow usage, before you enable it.
- Review whether unmanaged developer environments need Managed Environments enabled before December 15, 2026.
- Open each managed environment's Manage sharing settings and confirm what is set for apps, flows and agents.
- Confirm that agents you rely on sharing limits for require authentication.
- Check the Sharing agents with embedded maker credentials setting (preview) per environment or group.
- List your environment groups, review each published rule, and republish any rule marked as changed.
- Check who receives the weekly digest.
- Review maker guidelines (preview) for makers; see [the Copilot Studio briefing](/features/power-platform-maker-guidelines-copilot-studio/).

## Open questions

- Does Microsoft document a PowerShell, Graph or Power Platform API call for maker guidelines or for sharing agents with embedded maker credentials? Not yet documented.
- Will per-environment exceptions to published group rules be supported? Microsoft says they are not currently supported.
- Does the February 2027 block extend beyond opening apps to flows and agents? The licensing page describes apps.

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].note; Governance controls table / command: The cited page's agent example covers only the rule excluding sharing with security groups. | Found: Here's a PowerShell script that prevents agents from being shared with security groups and limits the number of viewers that can access an agent to 20. | Fix: Remove ', and covers only that rule' from controls[1].note and the rendered table note. The cited example also sets bot-maxLimitUserSharing to "20". | Source: https://learn.microsoft.com/power-platform/admin/managed-environment-sharing-limits
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[3].ui; Governance controls table / admin-path: The credential-sharing control is at Security > Threat detection > Sharing agent with embedded maker credentials > Environments or Environment groups > Set up > Save. | Found: Environments: In the Environments tab, select the environment for which you want to configure the setting. 5. Select Set up. | Fix: Include the target selection in controls[3].ui.path and the rendered path: 'Security > Threat detection > Sharing agent with embedded maker credentials > Environments or Environment groups > environment or environment group > Set up > Save'. | Source: https://learn.microsoft.com/power-platform/admin/security/control-sharing-agents-with-embedded-maker-credentials
- [contradicted, minor] What to check: weekly digest recipients; controls[5] / consistency: The checklist asks the reader to check digest recipients, but the table has no recipient-setting control row. | Found: What to check: "Check who receives the weekly digest." Table row: "Weekly usage insights digest for the environment"; its UI includes the environment and its command excludes the environment, rather than setting recipients. | Fix: The 'Check who receives the weekly digest' checklist step has no matching recipient-control row; remove that checklist bullet.
-->
