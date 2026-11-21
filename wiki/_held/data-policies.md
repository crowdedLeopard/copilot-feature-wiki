---
kind: "concept"
title: "Data policies (DLP) for Copilot Studio agents"
slug: "data-policies"
summary: "How Power Platform data policies govern what Copilot Studio agents can connect to and where they can be published, the connector names that map to agent capabilities, and why MCP tools and channels are governed the same way."
created: "2026-11-13"
updated: "2026-11-21"
version: 5
tags: ["data-policies","dlp","power-platform","copilot-studio","connectors","channels","mcp","endpoint-filtering"]
covers: ["dlp","endpoint-filtering"]
sources:
  - title: "Configure data policies for agents"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    kind: "learn"
  - title: "Troubleshoot data policy enforcement for Copilot Studio"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-dlp-troubleshooting"
    kind: "learn"
  - title: "Connector endpoint filtering (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering"
    kind: "learn"
  - title: "Connector classification"
    url: "https://learn.microsoft.com/power-platform/admin/dlp-connector-classification"
    kind: "learn"
  - title: "Data policies"
    url: "https://learn.microsoft.com/power-platform/admin/wp-data-loss-prevention"
    kind: "learn"
  - title: "Manage data policies"
    url: "https://learn.microsoft.com/power-platform/admin/prevent-data-loss"
    kind: "learn"
  - title: "PowerShell support for Power Apps and Power Automate"
    url: "https://learn.microsoft.com/power-platform/admin/powerapps-powershell"
    kind: "learn"
  - title: "Set-DlpPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/set-dlppolicy"
    kind: "learn"
  - title: "Microsoft Power Platform data policy SDK"
    url: "https://learn.microsoft.com/power-platform/admin/data-loss-prevention-sdk"
    kind: "learn"
  - title: "Data loss prevention (DLP) policy creation"
    url: "https://learn.microsoft.com/power-automate/prevent-data-loss"
    kind: "learn"
  - title: "Review agent readiness and issue status in Microsoft Copilot Studio"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/authoring-agent-status"
    kind: "learn"
  - title: "Use Microsoft Purview to manage data security & compliance for Microsoft Copilot Studio"
    url: "https://learn.microsoft.com/purview/ai-copilot-studio"
    kind: "learn"
  - title: "Configure skills in the Power Platform admin center"
    url: "https://learn.microsoft.com/power-platform/admin/skills-copilot-studio-rule"
    kind: "learn"
  - title: "Configure maker guidelines for Copilot Studio (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/maker-guidelines"
    kind: "learn"
  - title: "Control how agents are shared"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-sharing-controls-limits"
    kind: "learn"
related: ["managed-environments","mcp","agent-identity"]
controls:
  - governs: "Which connectors and channels agents, apps and flows can use (Business, Non-Business or Blocked)"
    scope: "tenant"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Data and privacy > Data policy > New Policy > Next > Add an environment > Next > Assign connectors > connector > Block"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    api:
      kind: "powershell"
      call: "Set-DlpPolicy -PolicyName <policy name> -UpdatedPolicy $UpdatedPolicy"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/set-dlppolicy"
    note: "Tenant-level: Power Platform Administrator. Environment-level: Environment Admin, or System Administrator if the environment has a Dataverse database. Updates the policy using the policy update object."
  - governs: "Which endpoints makers can connect to for HTTP and the other supported connectors"
    scope: "tenant"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Data and privacy > Data policy > New Policy > Next > Add an environment > Next > Assign connectors > connector > Configure connector > Connector endpoints"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    api:
      kind: "powershell"
      call: "New-PowerAppDlpPolicyConnectorConfigurations -TenantId <tenant ID> -PolicyName <policy GUID> -NewDlpPolicyConnectorConfigurations $ConnectorConfigurations"
      docs: "https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering"
    note: "Preview. Evaluates static design-time endpoints only; not environment variables, custom inputs or runtime-bound endpoints."
  - governs: "Custom guidance message shown to makers when a capability is blocked or disabled"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Copilot > Settings > Copilot Studio > Maker guidance > environment or environment group > Edit setting > Agent status > Display guidance messaging in popovers for blocked items"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/authoring-agent-status"
    api: null
    note: "Preview. Set per environment or environment group; the environment group message overrides the environment message. Plain text, up to 400 characters."
confidence: "medium"
dependents: 58
changes:
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
  - date: "2026-11-17"
    note: "Corrected: enforcement exemption ended March 2025; endpoint filtering (preview, static endpoints) separated from custom connector classification; removed MCP-pinning and portal dependency-insights claims; Purview DLP scope narrowed; added controls table and Maker guidance (preview)."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 84 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected the admin roles, default-group behaviour, Purview DLP scope, MCP blocking wording and Maker guidance path; qualified tenant scope; noted the Skills in Copilot Studio rule; removed the violation-workbook step."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 84 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected the policy automation call to the listed Get-DlpPolicy cmdlet; noted the differing path sequence and Maker guidelines documentation; qualified sharing limits as applying to agents that require authentication."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 88 statements confirmed"
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 92 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected the policy automation to Set-DlpPolicy, which updates a policy, in place of Get-DlpPolicy, which only retrieves; extended the blocking and Maker guidance admin paths to the setting itself."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 93 statements contradicted, 0 unconfirmed; taken offline until corrected"
verification:
  status: "held"
  date: "2026-11-21"
  version: 5
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 93
  confirmed: 92
  unconfirmed: 0
  contradicted: 1
  attempts: 2
  hash: "6eee3c674595d38d7f7d6cc8095b2787"
---

## What it is

A **data policy** is a Power Platform rule that sorts connectors into data groups and decides which connectors an app, flow or agent can use together. Learn also calls it a data loss prevention (DLP) policy.

Each policy places connectors in the **Business**, **Non-Business** or **Blocked** group, for the environments in its scope. Connectors in different groups can't share data: with SharePoint in Business and Gmail in Non-Business, makers can't build an app or flow that uses both. A Blocked connector can't be used at all. Since early 2025 data policy enforcement is in effect for all tenants, and since March 2025 agents cannot be exempted from it.

Copilot Studio exposes its own capabilities as virtual connectors (connectors not based on a REST API), so one policy mechanism covers tools, channels and triggers.

### Connector names that govern agent capabilities

| To prevent makers from... | Block this connector |
| --- | --- |
| Publishing agents without authentication | Chat without Microsoft Entra ID authentication in Copilot Studio |
| Publishing agents that make HTTP requests | HTTP |
| Publishing to Direct Line channels (demo website, custom websites, mobile app) | Direct Line channels in Copilot Studio |
| Publishing to the Microsoft 365 and Microsoft Teams channel | Microsoft Teams + Microsoft 365 Channel in Copilot Studio |
| Publishing to SharePoint, WhatsApp, Facebook or Dynamics 365 Customer Service | The matching channel connector, such as Omnichannel in Copilot Studio |
| Using event triggers or authenticated automated evaluations | Microsoft Copilot Studio |
| Using Azure Bot Service skills | Skills with Copilot Studio |
| Connecting agents to Application Insights | Application Insights in Copilot Studio |
| Using Power Platform connectors as tools | The specific prebuilt or custom connectors |

Microsoft also documents a **Skills in Copilot Studio** rule at environment and environment-group level that replaces the legacy skills virtual connectors; see [Configure skills in the Power Platform admin center](https://learn.microsoft.com/power-platform/admin/skills-copilot-studio-rule).

Blocking a Power Platform connector also blocks access to tools in connected MCP servers that rely on it; see [MCP](/concepts/mcp/).

### How restrictions appear

A blocked connector or channel appears disabled in the maker experience, with a hover explanation. A draft agent that violates a policy cannot be published, and users of a published agent that violates one see a `DataLossPreventionViolation` error. The publish error's raw JSON shows `DlpViolationError` and a `violationType` such as `BlockedConnector`. In standard-harness agents, **Agent status** on the **Overview** page lists blocking issues and warnings under **Review** (preview).

## Why it matters

A data policy is the control that decides which connectors, channels and agent features makers can use, and it applies to agents in every environment its scope covers. A policy configured with **Add all environments** applies across the tenant, and tenant-level policies can also include or exclude selected environments.

The risk is in the groupings nobody reviewed. Learn says connectors introduced after 2019, such as the unauthenticated chat and Direct Line connectors, are likely to sit in the default Non-business group, and that in many organisations that group is blocked. It warns that policies blocking new connectors by default could cause production outages, for example by blocking Direct Line or unauthenticated website agents.

## Cost and licensing

No licence or charge specific to data policies is stated on the Microsoft pages on data policies at the time of writing (November 2026), so a separate requirement is Not yet published. Connectors can carry their own licensing: the **Class** column on the **Assign connectors** page shows whether using a connector needs a Premium licence, and Learn says a connector your licence does not include is not visible to you. Tenant-level policies require Power Platform Administrator permissions. For environment-level policies, you need Environment Admin permissions, or the System Administrator role for environments with a Dataverse database.

## Risks and limits

- **Default group.** New connectors normally enter the policy's default group, initially Non-Business; new nonblockable connectors enter Non-Business even if the default is Blocked. A Blocked default group blocks newly introduced blockable connectors, and published agents that violate a policy show errors until the policy or agent configuration is corrected.
- **Enforcement takes time.** Learn gives up to 24 hours for full enforcement in the most extreme cases, and within an hour in most. Resources found in violation are suspended or quarantined.
- **No channel left.** If every channel is blocked, or the only allowed channel is not configured, agents cannot be published. Direct Line channels are allowed by default, which matters to organisations that assumed agents could only reach Teams.
- **Some connectors cannot be blocked.** Learn lists connectors that drive core Power Platform functionality that data policies cannot block, and its list includes the Microsoft Copilot Studio connector. The agent data policy page names that same connector as the one to block for event triggers. Check the **Blockable** column in your tenant before relying on it.
- **Endpoint filtering is preview and design-time only.** It evaluates static endpoints in the designers, not environment variables, custom inputs or endpoints bound at runtime, so a dynamic endpoint can bypass a rule.
- **Purview DLP is a different layer.** For SharePoint knowledge sources, a Purview DLP policy at the Microsoft 365 Copilot location can restrict Copilot Studio agents for Teams, SharePoint and Microsoft 365 Copilot from processing content with a given sensitivity label.
- **Virtual connectors are changing.** Microsoft says Copilot Studio virtual connectors are evolving into their own governance rules, separate from data policies and advanced connector policies, so plan to revisit these controls.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which connectors and channels agents, apps and flows can use (Business, Non-Business or Blocked)</strong><br><small>Tenant</small><br><small class="controls__note">Tenant-level: Power Platform Administrator. Environment-level: Environment Admin, or System Administrator if the environment has a Dataverse database. Updates the policy using the policy update object.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Data policy › New Policy › Next › Add an environment › Next › Assign connectors › connector › Block <a href="https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-DlpPolicy -PolicyName &lt;policy name&gt; -UpdatedPolicy $UpdatedPolicy</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/set-dlppolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which endpoints makers can connect to for HTTP and the other supported connectors</strong><br><small>Tenant</small><br><small class="controls__note">Preview. Evaluates static design-time endpoints only; not environment variables, custom inputs or runtime-bound endpoints.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Data policy › New Policy › Next › Add an environment › Next › Assign connectors › connector › Configure connector › Connector endpoints <a href="https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-PowerAppDlpPolicyConnectorConfigurations -TenantId &lt;tenant ID&gt; -PolicyName &lt;policy GUID&gt; -NewDlpPolicyConnectorConfigurations $ConnectorConfigurations</code> <a href="https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Custom guidance message shown to makers when a capability is blocked or disabled</strong><br><small>Environment</small><br><small class="controls__note">Preview. Set per environment or environment group; the environment group message overrides the environment message. Plain text, up to 400 characters.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Copilot › Settings › Copilot Studio › Maker guidance › environment or environment group › Edit setting › Agent status › Display guidance messaging in popovers for blocked items <a href="https://learn.microsoft.com/microsoft-copilot-studio/authoring-agent-status" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Tenant-wide data policies need tenant-level administrator permissions; environment-specific policies can be configured by users with a less permissive role in the environment. Policies are created and changed in the Power Platform admin center.

The Copilot Studio guide places **Add an environment** before **Assign connectors**. Follow the sequence shown in your admin centre.

Two controls are easy to confuse. **Endpoint filtering** (preview) narrows specific connectors, including HTTP, to allowed or denied endpoints within a data policy. **Custom connector classification** is separate: tenant-level policies classify custom connectors by Host URL pattern, and environment admins classify them on the **Connectors** page. Blocking a Power Platform connector also blocks access to tools in connected MCP servers that rely on it.

The tenant-wide error message with a contact email and a "Learn more" link is set with `Set-PowerAppDlpErrorSettings` and applies to all Power Platform apps in the tenant; **Maker guidance** is a separate, preview, per-environment message. The separate preview admin guide calls the Review-pane control **Maker guidelines**, says it is available only for managed environments and uses **Edit rule** for environment groups; see [Configure maker guidelines for Copilot Studio (preview)](https://learn.microsoft.com/power-platform/admin/maker-guidelines). Sharing limits in [Managed Environments](/concepts/managed-environments/) control how makers share agents that require authentication, and whose identity a permitted connector uses is covered in [Agent identity](/concepts/agent-identity/).

## What to check

- Review the group each Copilot Studio connector is in, and the default group, under the data policy's **Assign connectors** step.
- Compare tenant-scoped and environment-scoped policies for each production environment, so you know which one blocks a given agent.
- Confirm at least one channel stays allowed and configured, and that Direct Line is blocked only on purpose.
- Check the **Blockable** column for the Microsoft Copilot Studio connector before depending on a block for event triggers.
- Review endpoint rules for HTTP and other listed connectors, and test them with static endpoints.
- Set a **Maker guidance** message (preview) so blocked makers see your request process.

## Open questions

- Can the Microsoft Copilot Studio connector be blocked to stop event triggers, given that Learn also lists it among connectors that cannot be blocked?
- When Copilot Studio virtual connectors move to their own governance rules, will existing data policy settings carry over? Microsoft does not say.
- Is there an API for **Maker guidance**? Not yet documented.
- Is any licence or charge specific to data policies planned? Not yet published.

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Open questions: virtual connector settings carrying over / absence: Microsoft does not say how existing data-policy settings carry over when Copilot Studio virtual connectors move to dedicated governance rules. | Found: Configure the dedicated agent settings for the same scope so that they match your current Copilot Studio virtual connector settings: Agent access channels for publishing channels. Authentication for agents for agent authentication. Skills in Copilot Studio for skills. | Fix: Replace this open-question bullet with: 'Microsoft's ACP migration guidance tells administrators to configure dedicated agent settings for channels, authentication and skills to match their current Copilot Studio virtual connector settings.' Cite https://learn.microsoft.com/power-platform/admin/advanced-connector-policies#migrate-from-data-policies-to-acp. Do not assert automatic migration: the documented instruction is to configure matching settings. | Source: https://learn.microsoft.com/power-platform/admin/advanced-connector-policies
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What it is; Why it matters; summary / applicability: Data policies govern Copilot Studio agents in every environment covered by the policy's scope. | Found: These data policies apply to Copilot Studio agents in the environments included in the policy's scope. | Fix: Add this qualification to the scope explanation and cite https://learn.microsoft.com/power-platform/admin/advanced-connector-policies: 'In ACP-only mode, classic data policies are ignored for the affected scope, even if they remain configured; do not rely on them there for connector, endpoint or virtual-connector restrictions.' The cited agent guide gives the general scope, while the ACP guide documents this exception. | Source: https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention
- [supported, minor] controls[0].ui / admin-path: The connector-blocking route is Security > Data and privacy > Data policy > New Policy > Next > Add an environment > Next > Assign connectors > connector > Block in the Power Platform admin center. | Found: Select Next. The Add an environment page appears. Select Next. The Assign connectors page appears. To prevent agent makers from using the features associated with the connector, select Block. | Fix: Include the omitted more-options button: 'Security > Data and privacy > Data policy > New Policy > Next > Add an environment > Next > Assign connectors > connector > three dots > Block'. All printed steps and their order are documented; omitting this icon is not a blocker. | Source: https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention
- [supported, minor] controls[1].ui / admin-path: The endpoint route is Security > Data and privacy > Data policy > New Policy > Next > Add an environment > Next > Assign connectors > connector > Configure connector > Connector endpoints. | Found: Select Next. The Assign connectors page appears. To allow or deny specific endpoints for SharePoint or public websites configured as knowledge sources, or for HTTP request: Select Configure connector > Connector endpoints. | Fix: Include the omitted more-options button: 'Security > Data and privacy > Data policy > New Policy > Next > Add an environment > Next > Assign connectors > connector > three dots > Configure connector > Connector endpoints'. All printed steps and their order are documented; omitting this icon is not a blocker. | Source: https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention
-->
