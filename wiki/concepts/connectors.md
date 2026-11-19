---
kind: "concept"
title: "Connectors: how Power Platform apps, flows and agents reach other services"
slug: "connectors"
summary: "A connector is a prebuilt link from Power Apps, Power Automate and Copilot Studio to a service such as SharePoint or SQL Server. Administrators use licence tiers and data policies to decide which connectors are usable and which can be combined."
created: "2026-11-19"
updated: "2026-11-19"
version: 2
tags: ["connectors","power-platform","data-policies","power-platform-admin-center","licensing","copilot-studio","power-apps","power-automate","governance"]
covers: []
sources:
  - title: "Overview of connectors for canvas apps"
    url: "https://learn.microsoft.com/power-apps/maker/canvas-apps/connections-list"
    kind: "learn"
  - title: "Custom connectors overview"
    url: "https://learn.microsoft.com/connectors/custom-connectors/"
    kind: "learn"
  - title: "Connector reference overview"
    url: "https://learn.microsoft.com/connectors/connector-reference/"
    kind: "learn"
  - title: "Power Platform licensing FAQs"
    url: "https://learn.microsoft.com/power-platform/admin/powerapps-flow-licensing-faq"
    kind: "learn"
  - title: "Power Apps licensing FAQs"
    url: "https://learn.microsoft.com/power-platform/admin/powerapps-licensing-faq"
    kind: "learn"
  - title: "How to check license designation for an app"
    url: "https://learn.microsoft.com/power-apps/maker/canvas-apps/license-designation"
    kind: "learn"
  - title: "Manage data policies"
    url: "https://learn.microsoft.com/power-platform/admin/create-dlp-policy"
    kind: "learn"
  - title: "Connector classification"
    url: "https://learn.microsoft.com/power-platform/admin/dlp-connector-classification"
    kind: "learn"
  - title: "Data policies for custom connectors"
    url: "https://learn.microsoft.com/power-platform/admin/dlp-custom-connector-parity"
    kind: "learn"
  - title: "Connector action control"
    url: "https://learn.microsoft.com/power-platform/admin/connector-action-control"
    kind: "learn"
  - title: "Advanced connector policies"
    url: "https://learn.microsoft.com/power-platform/admin/advanced-connector-policies"
    kind: "learn"
  - title: "Tutorial: Manage advanced connector policies programmatically"
    url: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-advanced-connector-policies"
    kind: "learn"
  - title: "Add-ConnectorsToPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy"
    kind: "learn"
  - title: "New-PowerAppPolicyUrlPatterns"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-powerapppolicyurlpatterns"
    kind: "learn"
  - title: "Get-AdminPowerAppConnection"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/get-adminpowerappconnection"
    kind: "learn"
  - title: "PowerShell support for Power Apps and Power Automate"
    url: "https://learn.microsoft.com/power-platform/admin/powerapps-powershell"
    kind: "learn"
  - title: "Copilot connectors overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/overview"
    kind: "learn"
  - title: "Use the Copilot connectors API"
    url: "https://learn.microsoft.com/graph/api/resources/connectors-api-overview"
    kind: "learn"
  - title: "Use connectors in Copilot Studio agents"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/advanced-connectors"
    kind: "learn"
  - title: "Conversational language understanding integration overview"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/advanced-clu-integration"
    kind: "learn"
related: ["data-policies","managed-environments","mcp","agent-identity","copilot-credits","microsoft-copilot-studio-sql-server-support-in-microsoft-copilot-studio","m365-copilot-copilot-extensibility-admins-can-govern-and-manage-federated-copilot-connecto"]
controls:
  - governs: "Which group (Business, Non-Business or Blocked) each prebuilt connector is in"
    scope: "tenant"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Settings > Data and privacy > Data policy > policy > Edit Policy > Prebuilt connectors > connector > Move to Business"
      docs: "https://learn.microsoft.com/power-platform/admin/create-dlp-policy"
    api:
      kind: "powershell"
      call: "Add-ConnectorsToPolicy -PolicyName <policy GUID> -Classification <General|Confidential|Blocked> -Connectors <connector objects>"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy"
    note: "Tenant policies need Power Platform admin; environment policies need Environment Admin. Move to Business is one of the group actions. General, Confidential and Blocked map to Non-business, Business and Blocked."
  - governs: "How custom connectors are classified, by host URL pattern"
    scope: "tenant"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Settings > Data and privacy > Data policy > policy > Edit Policy > Custom connectors > Add connector pattern"
      docs: "https://learn.microsoft.com/power-platform/admin/dlp-connector-classification"
    api:
      kind: "powershell"
      call: "New-PowerAppPolicyUrlPatterns -TenantId <tenant ID> -PolicyName <policy GUID> -NewUrlPatterns <URL patterns object>"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-powerapppolicyurlpatterns"
    note: "The cmdlet reference says it is only enabled for tenant-level policies. Environment-level policies classify custom connectors by name instead."
  - governs: "Which actions of a blockable connector are allowed"
    scope: "tenant"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Data and privacy > Data policy > policy > Edit policy > Prebuilt connectors > connector > More actions > Configure connectors > Connector actions"
      docs: "https://learn.microsoft.com/power-platform/admin/connector-action-control"
    api:
      kind: "powershell"
      call: "New-PowerAppDlpPolicyConnectorConfigurations -TenantId <tenant ID> -PolicyName <policy GUID> -NewDlpPolicyConnectorConfigurations <connector configurations>"
      docs: "https://learn.microsoft.com/power-platform/admin/connector-action-control"
    note: "Not available for unblockable or custom connectors. Triggers can be set only in PowerShell. The admin needs Power Apps maker access to list actions."
  - governs: "Allowlist of connectors and actions for an environment group or environment (advanced connector policy)"
    scope: "environment-group"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environment groups > environment group > Rules > Advanced connector policies"
      docs: "https://learn.microsoft.com/power-platform/admin/advanced-connector-policies"
    api:
      kind: "power-platform-api"
      call: "POST https://api.powerplatform.com/governance/ruleBasedPolicies?api-version=2024-10-01"
      docs: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-advanced-connector-policies"
    note: "Publish rules after saving. A single environment: Security > Data and privacy > Advanced connector policies. A second POST assigns the policy to a group; certified connectors only."
confidence: "medium"
dependents: 13
changes:
  - date: "2026-11-19"
    note: "New concept page: Power Platform connectors, their licence tiers, custom connectors and the controls that govern them."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 96 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected licensing: premium and custom connector licence scoped to Microsoft 365 use rights, Copilot Studio plans noted, Premium end-user clause removed; narrowed the Copilot connectors paragraph and removed three checklist items without table rows."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 107 statements not yet confirmed"
verification:
  status: "verified-with-gaps"
  date: "2026-11-19"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 107
  confirmed: 107
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "dd385ae4e64c25918ce25a753394c92c"
---

## What it is

A connector is a prebuilt wrapper around a service's API that lets Power Apps, Power Automate and Copilot Studio read from and write to that service, such as SharePoint, SQL Server or Salesforce. A **connection** is the saved sign-in to one connector, and an app, flow or agent calls the connector's actions and triggers through it.

A connector can provide tables of data, actions, or both. Microsoft's connector reference lists the connectors and marks each as Standard or Premium, as Preview or production, and as an MCP server connector where that applies ([MCP](/concepts/mcp/) is explained separately).

### Kinds of connector

| Kind | What it is | Licence signal |
| --- | --- | --- |
| Standard | Tagged Standard in the connector reference | Standard connectors do not need special licensing |
| Premium | Tagged Premium in the connector reference | Power Apps and Power Automate use rights included with Microsoft 365: standalone Power Apps or Power Automate plan |
| Custom | A wrapper around a REST API that a maker or developer defines | Power Apps and Power Automate use rights included with Microsoft 365: standalone Power Apps or Power Automate plan, as for premium |

Custom connectors created in Power Automate or Power Apps are available in Power Apps, Power Automate cloud flows and Copilot Studio agents and workflows.

### Connections and sign-in

Connections authenticate in different ways. The SQL Server connector, for example, offers Microsoft Entra Integrated, SQL Server Authentication and Windows Authentication. With a shared connection, the author's credentials are implicitly shared with end users; see [Agent identity](/concepts/agent-identity/) for whose permissions an agent uses.

### A different use of the word

Microsoft 365 Copilot connectors (formerly Microsoft Graph connectors) are a separate mechanism. Synced Copilot connectors crawl and index content from external sources into Microsoft Graph, and federated Copilot connectors fetch data in real time without indexing it into Microsoft 365. This page does not cover them; see [admins manage federated Copilot connectors](/features/m365-copilot-copilot-extensibility-admins-can-govern-and-manage-federated-copilot-connecto/).

## Why it matters

Connectors are where an app, flow or agent touches data in another service, so the connector list is the practical boundary of what a maker can build. Data policies classify connectors into Business, Non-Business and Blocked groups; connectors in different groups cannot be combined in one app or flow, and a Blocked connector cannot be used at all.

A policy only protects the environments in its scope: Microsoft's example notes that where no data policy applies, apps and flows can use any set of connectors together. A new policy starts with every connector in Non-Business, so nothing is separated until someone classifies it. Policy design is covered in [Data policies](/concepts/data-policies/); this page covers what the connector layer adds.

## Cost and licensing

A connector's tier sets the licence the user needs. For Power Apps and Power Automate use rights included with Microsoft 365, the Power Platform licensing FAQ specifies a standalone Power Apps or Power Automate plan for premium, on-premises and custom connectors. Copilot Studio premium connectors are available in select Copilot Studio plans. An app that uses at least one premium connector, a custom connector or an on-premises gateway is designated Premium.

Microsoft reclassified some connectors as Premium in 2019, including SQL Server, Azure SQL and Dynamics 365. Its Power Platform licensing FAQ says the extended use rights ended on October 1, 2024 and that in-product enforcement begins April 1, 2025; the Power Apps licensing FAQ refers to licensing enforcement beginning February 2027. Check which applies to your apps before relying on either date.

This page gives no prices: Microsoft points to the Power Apps pricing guide. A connector's meter for agent usage is not covered here; see [Copilot Credits](/concepts/copilot-credits/).

## Risks and limits

- **New connectors land in the default group.** A new policy puts all connectors in Non-Business. Microsoft advises keeping that as the default group for new connectors; if you set it to Blocked, new connectors that cannot be blocked go to Non-Business instead.
- **Some connectors cannot be blocked in classic data policies.** Core platform connectors such as Dataverse, Approvals and Notifications, and some Microsoft 365 connectors such as SharePoint, can be classified Business or Non-Business but not Blocked. Advanced connector policies can block them on managed environments; on non-managed environments they stay nonblockable.
- **HTTP classification affects child flows.** Because child flows share a dependency with the HTTP connector, the group you choose for it can stop child flows running in that environment or tenant.
- **Custom connectors are governed differently.** Tenant-level policies classify them by host URL pattern, and the wildcard pattern defaults to Ignore, which defers the decision to other policies. Data policy evaluation happens before Set Host URL, which can repoint a custom connector at another REST API, so review who builds them.
- **Older apps may not be enforced.** Custom connector enforcement does not apply to apps last published before October 2020, and some apps published before October 1, 2020 need republishing for connector action rules to apply.
- **Advanced connector policies block by default.** They take effect as soon as they are saved or published, and every connector not explicitly allowed is blocked. They cover certified connectors only, not custom or HTTP connectors. Design-time enforcement is rolling out per maker portal, and until it reaches a workload ACP is runtime-only there.
- **Shared connections.** After January 2024 newly created shared connections are secured; apps published earlier need republishing to be secured.
- **App size.** Microsoft advises at most 10 connectors and 20 connection references per canvas app; beyond that, load times can grow and saving can fail.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which group (Business, Non-Business or Blocked) each prebuilt connector is in</strong><br><small>Tenant</small><br><small class="controls__note">Tenant policies need Power Platform admin; environment policies need Environment Admin. Move to Business is one of the group actions. General, Confidential and Blocked map to Non-business, Business and Blocked.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Settings › Data and privacy › Data policy › policy › Edit Policy › Prebuilt connectors › connector › Move to Business <a href="https://learn.microsoft.com/power-platform/admin/create-dlp-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-ConnectorsToPolicy -PolicyName &lt;policy GUID&gt; -Classification &lt;General|Confidential|Blocked&gt; -Connectors &lt;connector objects&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>How custom connectors are classified, by host URL pattern</strong><br><small>Tenant</small><br><small class="controls__note">The cmdlet reference says it is only enabled for tenant-level policies. Environment-level policies classify custom connectors by name instead.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Settings › Data and privacy › Data policy › policy › Edit Policy › Custom connectors › Add connector pattern <a href="https://learn.microsoft.com/power-platform/admin/dlp-connector-classification" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-PowerAppPolicyUrlPatterns -TenantId &lt;tenant ID&gt; -PolicyName &lt;policy GUID&gt; -NewUrlPatterns &lt;URL patterns object&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-powerapppolicyurlpatterns" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which actions of a blockable connector are allowed</strong><br><small>Tenant</small><br><small class="controls__note">Not available for unblockable or custom connectors. Triggers can be set only in PowerShell. The admin needs Power Apps maker access to list actions.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Data policy › policy › Edit policy › Prebuilt connectors › connector › More actions › Configure connectors › Connector actions <a href="https://learn.microsoft.com/power-platform/admin/connector-action-control" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-PowerAppDlpPolicyConnectorConfigurations -TenantId &lt;tenant ID&gt; -PolicyName &lt;policy GUID&gt; -NewDlpPolicyConnectorConfigurations &lt;connector configurations&gt;</code> <a href="https://learn.microsoft.com/power-platform/admin/connector-action-control" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Allowlist of connectors and actions for an environment group or environment (advanced connector policy)</strong><br><small>Environment group</small><br><small class="controls__note">Publish rules after saving. A single environment: Security &gt; Data and privacy &gt; Advanced connector policies. A second POST assigns the policy to a group; certified connectors only.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environment groups › environment group › Rules › Advanced connector policies <a href="https://learn.microsoft.com/power-platform/admin/advanced-connector-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>POST https://api.powerplatform.com/governance/ruleBasedPolicies?api-version=2024-10-01</code> <a href="https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-advanced-connector-policies" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

To create, edit or delete a data policy you need Environment Admin or Power Platform admin permissions; for an environment with a Dataverse database, environment-level policies need the System Administrator role instead. Environment admins cannot edit or delete tenant-created policies, and environment-level policies cannot override tenant-wide ones.

Advanced connector policies (ACP) run in mixed mode by default: ACP runs alongside classic data policies and the most restrictive settings from both apply. ACP-only mode ignores classic data policies for the scope, without deleting them. Action control and endpoint filtering remain classic data policy features (see [Data policies](/concepts/data-policies/)).

To see what exists, `Get-AdminPowerAppConnection` returns connections from all environments where the caller is an environment admin, and `Get-AdminPowerAppConnector` lists custom connectors in the tenant but not those in a solution. Enforcing a data policy on connections disables existing connections that violate it.

## What to check

- Classify the connectors your makers use most as Business or Non-Business, instead of leaving them all in Non-Business.
- Check the HTTP connector's group before restricting it, to avoid breaking child flows.
- Add URL pattern rules for custom connectors in tenant-level policies, and decide what the wildcard pattern should be.
- Assess whether managed environments should use advanced connector policies, in mixed mode first.

## Open questions

- How do the April 1, 2025 and February 2027 licensing enforcement dates in Microsoft's FAQs relate to each other for apps that use reclassified connectors?
- When will advanced connector policies support custom and HTTP connectors? Microsoft says only that support is planned.
- When will individual triggers be configurable in the Power Platform admin center? Microsoft says support is planned; today it is PowerShell only.
- Which maker portals already enforce advanced connector policies at design time, and when does ACP reach general availability for each?

<!-- verifier-findings (2026-11-19, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[3].api / command: POST https://api.powerplatform.com/governance/ruleBasedPolicies?api-version=2024-10-01 creates an advanced connector policy with its allowlist and action settings. | Found: An advanced connector policy is a rule-based policy that contains a rule set with the ID ConnectorManagement. That rule set carries a version and its inputs hold an AllowedConnectorList | Fix: Keep the call unchanged. Add to controls[3].note and the rendered note: 'The request body sets ruleSets[].inputs.AllowedConnectorList in the ConnectorManagement rule set; entries use AllowedConnector, AllowedActionsMode and AllowedActions to select connectors and actions.' | Source: https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-advanced-connector-policies
-->
