---
kind: "concept"
title: "Data policies (DLP) for Copilot Studio agents"
slug: "data-policies"
summary: "How Power Platform data policies govern what Copilot Studio agents can connect to and where they can be published, the connector names that map to agent capabilities, and why MCP tools and channels are governed the same way."
created: "2026-11-13"
updated: "2026-11-17"
version: 2
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
  - title: "Review agent readiness and issue status in Microsoft Copilot Studio"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/authoring-agent-status"
    kind: "learn"
  - title: "Use Microsoft Purview to manage data security & compliance for Microsoft Copilot Studio"
    url: "https://learn.microsoft.com/purview/ai-copilot-studio"
    kind: "learn"
  - title: "Control how agents are shared"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-sharing-controls-limits"
    kind: "learn"
related: ["managed-environments","mcp","agent-identity","purview-dlp-block-sensitive-data-in-copilot-web-search"]
controls:
  - governs: "Which connectors and channels agents, apps and flows can use (Business, Non-Business or Blocked)"
    scope: "tenant"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Data and privacy > Data policy > New Policy > Next > Add an environment > Next > Assign connectors"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    api:
      kind: "powershell"
      call: "New-DlpPolicy (create); Get-DlpPolicy (list); Set-DlpPolicy (update policy details such as the display name)"
      docs: "https://learn.microsoft.com/power-platform/admin/powerapps-powershell"
    note: "Tenant admin or Environment Admin role. On Assign connectors, select the three dots next to a connector, then Block. Tenant scope applies to all environments."
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
      path: "Copilot > Settings > Copilot Studio > Maker guidance > Edit setting"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/authoring-agent-status"
    api: null
    note: "Preview. Set per environment or environment group; the environment group message overrides the environment message. Plain text, up to 400 characters."
confidence: "medium"
dependents: 6
changes:
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
  - date: "2026-11-17"
    note: "Corrected: enforcement exemption ended March 2025; endpoint filtering (preview, static endpoints) separated from custom connector classification; removed MCP-pinning and portal dependency-insights claims; Purview DLP scope narrowed; added controls table and Maker guidance (preview)."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 84 statements contradicted, 2 unconfirmed; taken offline until corrected"
verification:
  status: "held"
  date: "2026-11-17"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 84
  confirmed: 78
  unconfirmed: 2
  contradicted: 4
  attempts: 2
  hash: "4d895aeb4e89dfa74a5eecbff9352f50"
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

Blocking a Power Platform connector also blocks access to tools in connected MCP servers that rely on it; see [MCP](/concepts/mcp/).

### How restrictions appear

A blocked connector or channel appears disabled in the maker experience, with a hover explanation. A draft agent that violates a policy cannot be published, and users of a published agent that violates one see a `DataLossPreventionViolation` error. The publish error's raw JSON shows `DlpViolationError` and a `violationType` such as `BlockedConnector`. In standard-harness agents, **Agent status** on the **Overview** page lists blocking issues and warnings under **Review** (preview).

## Why it matters

A data policy is the control that decides which connectors, channels and agent features makers can use, and it applies to agents in every environment its scope covers. A tenant-scoped policy applies to all agents in all environments across the tenant.

The risk is in the groupings nobody reviewed. Learn says connectors introduced after 2019, such as the unauthenticated chat and Direct Line connectors, are likely to sit in the default Non-business group, and that in many organisations that group is blocked. It warns that policies blocking new connectors by default could cause production outages, for example by blocking Direct Line or unauthenticated website agents.

## Cost and licensing

No licence or charge specific to data policies is stated on the Microsoft pages on data policies at the time of writing (November 2026), so a separate requirement is Not yet published. Connectors can carry their own licensing: the **Class** column on the **Assign connectors** page shows whether using a connector needs a Premium licence, and Learn says a connector your licence does not include is not visible to you. Creating a policy needs the tenant admin or Environment Admin role.

## Risks and limits

- **Default group.** New connectors land in the policy's default group, which starts as Non-Business. A policy that blocks that group blocks newly introduced connectors, and published agents that depend on them show errors until the policy changes.
- **Enforcement takes time.** Learn gives up to 24 hours for full enforcement in the most extreme cases, and within an hour in most. Resources found in violation are suspended or quarantined.
- **No channel left.** If every channel is blocked, or the only allowed channel is not configured, agents cannot be published. Direct Line channels are allowed by default, which matters to organisations that assumed agents could only reach Teams.
- **Some connectors cannot be blocked.** Learn lists connectors that drive core Power Platform functionality that data policies cannot block, and its list includes the Microsoft Copilot Studio connector. The agent data policy page names that same connector as the one to block for event triggers. Check the **Blockable** column in your tenant before relying on it.
- **Endpoint filtering is preview and design-time only.** It evaluates static endpoints in the designers, not environment variables, custom inputs or endpoints bound at runtime, so a dynamic endpoint can bypass a rule.
- **Purview DLP is a different layer.** For SharePoint knowledge sources, a Purview DLP policy at the Microsoft 365 Copilot location can restrict Copilot Studio agents for Teams, SharePoint and Microsoft 365 Copilot from processing content with a given sensitivity label. It does not decide which connectors agents call.
- **Virtual connectors are changing.** Microsoft says Copilot Studio virtual connectors are evolving into their own governance rules, separate from data policies and advanced connector policies, so plan to revisit these controls.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which connectors and channels agents, apps and flows can use (Business, Non-Business or Blocked)</strong><br><small>Tenant</small><br><small class="controls__note">Tenant admin or Environment Admin role. On Assign connectors, select the three dots next to a connector, then Block. Tenant scope applies to all environments.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Data policy › New Policy › Next › Add an environment › Next › Assign connectors <a href="https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpPolicy (create); Get-DlpPolicy (list); Set-DlpPolicy (update policy details such as the display name)</code> <a href="https://learn.microsoft.com/power-platform/admin/powerapps-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which endpoints makers can connect to for HTTP and the other supported connectors</strong><br><small>Tenant</small><br><small class="controls__note">Preview. Evaluates static design-time endpoints only; not environment variables, custom inputs or runtime-bound endpoints.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Data policy › New Policy › Next › Add an environment › Next › Assign connectors › connector › Configure connector › Connector endpoints <a href="https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-PowerAppDlpPolicyConnectorConfigurations -TenantId &lt;tenant ID&gt; -PolicyName &lt;policy GUID&gt; -NewDlpPolicyConnectorConfigurations $ConnectorConfigurations</code> <a href="https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Custom guidance message shown to makers when a capability is blocked or disabled</strong><br><small>Environment</small><br><small class="controls__note">Preview. Set per environment or environment group; the environment group message overrides the environment message. Plain text, up to 400 characters.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Copilot › Settings › Copilot Studio › Maker guidance › Edit setting <a href="https://learn.microsoft.com/microsoft-copilot-studio/authoring-agent-status" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Tenant-wide data policies need tenant-level administrator permissions; environment-specific policies can be configured by users with a less permissive role in the environment. Policies are created and changed in the Power Platform admin center.

Two controls are easy to confuse. **Endpoint filtering** (preview) narrows specific connectors, including HTTP, to allowed or denied endpoints within a data policy. **Custom connector classification** is separate: tenant-level policies classify custom connectors by Host URL pattern, and environment admins classify them on the **Connectors** page. Blocking a connector, not endpoint filtering, is what blocks MCP tools that rely on it.

The tenant-wide error message with a contact email and a "Learn more" link is set with `Set-PowerAppDlpErrorSettings` and applies to all Power Platform apps in the tenant; **Maker guidance** is a separate, preview, per-environment message. Sharing limits in [Managed Environments](/concepts/managed-environments/) control how makers share agents, and whose identity a permitted connector uses is covered in [Agent identity](/concepts/agent-identity/).

## What to check

- Review the group each Copilot Studio connector is in, and the default group, under the data policy's **Assign connectors** step.
- Compare tenant-scoped and environment-scoped policies for each production environment, so you know which one blocks a given agent.
- Confirm at least one channel stays allowed and configured, and that Direct Line is blocked only on purpose.
- Download the violation workbook from the **Channels** page for published production agents before tightening a policy.
- Check the **Blockable** column for the Microsoft Copilot Studio connector before depending on a block for event triggers.
- Review endpoint rules for HTTP and other listed connectors, and test them with static endpoints.
- Set a **Maker guidance** message (preview) so blocked makers see your request process.

## Open questions

- Can the Microsoft Copilot Studio connector be blocked to stop event triggers, given that Learn also lists it among connectors that cannot be blocked?
- When Copilot Studio virtual connectors move to their own governance rules, will existing data policy settings carry over? Microsoft does not say.
- Is there an API for **Maker guidance**? Not yet documented.
- Is any licence or charge specific to data policies planned? Not yet published.

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Cost and licensing; controls[0].note / role: Creating a policy requires the tenant admin or Environment Admin role, without a Dataverse qualification. | Found: To follow the steps for environment-level policies, you need to have Power Apps Environment Admin permissions. For environments with a Dataverse database, you need to be assigned the System Administrator role instead. | Fix: Replace the role sentence in Cost and licensing and the role wording in controls[0].note and its rendered row with: 'Tenant-level policies require Power Platform Administrator permissions. For environment-level policies, you need Environment Admin permissions, or the System Administrator role for environments with a Dataverse database.' Cite https://learn.microsoft.com/power-platform/admin/prevent-data-loss. | Source: https://learn.microsoft.com/power-platform/admin/prevent-data-loss
- [contradicted, blocker] Risks and limits: Default group / default: New connectors enter the policy's default group and are blocked when that default is blocked, without exception. | Found: If Microsoft adds any new connectors that can't be blocked and you set the default group for the data policy as Blocked, these connectors are automatically marked as Non-Business instead of Blocked. | Fix: Replace the first sentence with: 'New connectors normally enter the policy's default group, initially Non-Business; new nonblockable connectors enter Non-Business even if the default is Blocked.' In the following sentence, replace 'A policy that blocks that group blocks newly introduced connectors' with 'A Blocked default group blocks newly introduced blockable connectors'. Cite https://learn.microsoft.com/power-platform/admin/dlp-connector-classification. | Source: https://learn.microsoft.com/power-platform/admin/dlp-connector-classification
- [contradicted, blocker] Risks and limits: Default group / behaviour: Published agents depending on newly blocked connectors show errors until the policy changes. | Found: The admin can check the data policy violations and update the policies or the agent configuration as needed. | Fix: Replace 'published agents that depend on them show errors until the policy changes' with 'published agents that violate a policy show errors until the policy or agent configuration is corrected'. The source explicitly permits correcting the agent, not just changing policy. | Source: https://learn.microsoft.com/microsoft-copilot-studio/admin-dlp-troubleshooting
- [unsupported, blocker] Risks and limits: Purview DLP / applicability: Purview DLP does not decide which connectors agents call. | Found: Searched: "Copilot Studio" "Purview" "connectors" "DLP"; Power Platform data policies versus Microsoft Purview DLP connectors classification. Opened ai-copilot-studio and wp-data-loss-prevention; neither states this categorical exclusion. | Fix: Remove 'It does not decide which connectors agents call.' Keep the preceding, supported sentence describing label-based restrictions for SharePoint knowledge; it states the documented scope without asserting an unverified prohibition.
- [unsupported, blocker] Governance controls: Endpoint filtering versus connector classification / applicability: Endpoint filtering is not what blocks MCP tools that rely on Power Platform connectors. | Found: Searched: "Copilot Studio" "MCP" "endpoint filtering"; "MCP" "endpoint filtering" "data policies". Opened admin-data-loss-prevention and connector-endpoint-filtering. They document connector blocking, not this categorical exclusion of endpoint filtering effects. | Fix: Remove ', not endpoint filtering,' from 'Blocking a connector, not endpoint filtering, is what blocks MCP tools that rely on it.' Replace the sentence with: 'Blocking a Power Platform connector also blocks access to tools in connected MCP servers that rely on it.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What it is: connector table, Azure Bot Service skills / applicability: Blocking Skills with Copilot Studio prevents publishing agents that use Azure Bot Service skills. | Found: To prevent agent makers from publishing agents that use Azure Bot Service skills, configure a data policy that blocks the Skills with Copilot Studio connector. | Fix: After the connector table, add: 'Microsoft also documents a Skills in Copilot Studio rule at environment and environment-group level that replaces the legacy skills virtual connectors; see https://learn.microsoft.com/power-platform/admin/skills-copilot-studio-rule.' That page says: 'This rule replaces the legacy Copilot Studio virtual connectors used in classic data policies to govern skills.' Report both sources rather than presenting the legacy control without this qualification. | Source: https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention
- [supported, minor] Why it matters; controls[0].note / applicability: A tenant-scoped policy applies to all agents in all environments across the tenant. | Found: Policies with a tenant scope apply to all agents in all environments across the tenant. | Fix: Qualify the sentence and controls[0].note: 'A policy configured with Add all environments applies across the tenant. Tenant-level policies can also include or exclude selected environments.' The cited agent page supports the original wording, but https://learn.microsoft.com/power-platform/admin/prevent-data-loss explicitly says tenant-level policies can include or exclude specific environments. | Source: https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention
- [supported, minor] controls[2].ui; Governance controls table / admin-path: Maker guidance is configured at Power Platform admin center > Copilot > Settings > Copilot Studio > Maker guidance > Edit setting. | Found: In the panel, select the environments or environment groups you want to configure a custom guidance message for. Select Edit setting at the bottom of the panel to confirm your choice. | Fix: Include the omitted target selection in controls[2].ui.path and its rendered row: 'Copilot > Settings > Copilot Studio > Maker guidance > environment or environment group > Edit setting'. The cited page explicitly requires selecting the environments or environment groups before Edit setting. | Source: https://learn.microsoft.com/microsoft-copilot-studio/authoring-agent-status
- [contradicted, minor] What to check: Download the violation workbook; Governance controls table / consistency: The checklist instructs readers to download a violation workbook, but the controls table has no reporting or violation-inspection row. | Found: Checklist: 'Download the violation workbook from the Channels page'. The table's three rows cover connector groups, connector endpoints and Maker guidance, not violation reports. | Fix: The 'Download the violation workbook' checklist step has no corresponding controls-table row. Remove that instruction from What to check; no new control row is requested.
-->
