---
title: "Copilot Studio: Azure SQL tables and views as an agent knowledge source"
slug: "microsoft-copilot-studio-sql-server-support-in-microsoft-copilot-studio"
roadmapId: 568930
topic: "copilot-studio"
products: ["Microsoft Copilot Studio"]
summary: "Copilot Studio makers can ground agents on Azure SQL tables and views. No source says it arrives automatically, but admins should check data policies, database permissions and Copilot Credit limits first."
status: "in-development"
releasePhase: ["Current Channel","General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: "August CY2026"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Microsoft's pages state that Microsoft Copilot harness agents bill in Copilot Credits and that this usage isn't included with a Microsoft 365 Copilot licence. The Azure SQL page lists no licence among its prerequisites. No Azure SQL-specific rate is published."
audiences: ["power-platform-admin","security","finops","maker"]
tags: ["copilot-studio","knowledge-grounding","sql","connectors","data-policies","copilot-credits","usage-based-billing","power-platform"]
sources:
  - title: "Microsoft 365 Roadmap 568930"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=568930"
    kind: "roadmap"
  - title: "Add Azure SQL tables and views as a knowledge source (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/knowledge-add-azure-sql-tables"
    kind: "learn"
  - title: "Available knowledge sources for agents (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/knowledge-sources-overview"
    kind: "learn"
  - title: "Overview of usage-based billing"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview"
    kind: "learn"
  - title: "Manage costs for agents powered by the Microsoft Copilot harness"
    url: "https://learn.microsoft.com/power-platform/admin/manage-usage-github-copilot-harness"
    kind: "learn"
  - title: "Copilot connectors versus Power Platform connectors as knowledge sources"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/knowledge-graph-vs-power-platform-connectors"
    kind: "learn"
  - title: "Data policies"
    url: "https://learn.microsoft.com/power-platform/admin/wp-data-loss-prevention"
    kind: "learn"
  - title: "Tutorial: Manage Copilot Credits allocations programmatically"
    url: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    kind: "learn"
  - title: "Whether makers can use the SQL connector behind Azure SQL knowledge (Power Platform admin center)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    kind: "learn"
  - title: "Whether makers can use the SQL connector behind Azure SQL knowledge (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy"
    kind: "learn"
videos: []
related: ["data-policies","copilot-credits","microsoft-copilot-studio-cost-visibility-in-monitor-tab","managed-environments"]
controls:
  - governs: "Whether makers can use the SQL connector behind Azure SQL knowledge"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Data and privacy > Data policy > New Policy > Next > Next > ⋮ > Block"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    api:
      kind: "powershell"
      call: "Add-ConnectorsToPolicy -PolicyName <policy GUID> -Connectors $connectors -Classification <classification>"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy"
    note: "General control: Microsoft has not confirmed which connector classification governs Azure SQL knowledge. The UI steps start with New Policy or Edit Policy."
  - governs: "Copilot Credits allocated to an environment and whether it can draw from tenant capacity"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Products > Copilot Studio > Manage Copilot Credits > environment > Allocate capacity > Capacity overages > Draw from the available capacity in my tenant > Save"
      docs: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    api:
      kind: "power-platform-api"
      call: "PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01 (body: scope.environmentId, allocatedEntitlements with entitlementId MCSMessages, allocation.quantity, enforcementRules ruleType TenantPool enabled false)"
      docs: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    note: "Needs Power Platform Administrator or Global Administrator, or equivalent. A published environment group rule on tenant-capacity draw overrides this: UI and API updates fail with TenantPoolLockedByPolicy."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-08-07T21:45:15"
changes:
  - date: "2026-11-18"
    note: "First briefing for this roadmap item, based on the roadmap record and the Learn page that documents Azure SQL knowledge."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 61 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected after the independent check: Copilot Credits admin path, wording on setup permissions, and data policy applicability now cites Microsoft's data policies page."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 67 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected after the independent check: the Copilot Credits tenant-capacity setting now notes that a published environment group rule overrides it (TenantPoolLockedByPolicy), and checklist items without a table row are worded as considerations."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 75 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-18"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 75
  confirmed: 74
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "1083b80aaf864930a080a0d081c03b76"
---

## What's changing

The roadmap item describes an Azure SQL knowledge source for Copilot Studio, so makers can bring business data held in Azure SQL into agents through the same knowledge approach used for other sources. The roadmap title says "SQL server Support"; the description speaks of "Azure SQL knowledge".

Microsoft Learn already documents the capability for the Microsoft Copilot agent experience. A maker opens the agent, selects **Build** > **Knowledge**, chooses **Azure SQL** (or **SQL Server**, depending on the label shown in the environment) in the **Add knowledge** dialog, creates or selects a connection, picks tables and views, and selects **Add to agent**. The page says the agent "can answer questions by reading structured data" from the database using the configured connection and database permissions. The agent must be published before the source is available in the published experience.

The roadmap record gives status In development, a preview target of August CY2026 and a general availability target of September CY2026, for Worldwide (Standard Multi-Tenant), on the Web platform, with release phases Current Channel, General Availability and Preview. Those are Microsoft's targets, and both months have passed as of November 2026 while the record still says In development. The Learn page gives no date or status, so confirm in your tenant whether the option is visible.

## Why it matters

This puts structured, often sensitive, line-of-business data one connection away from any maker who can edit an agent. The Learn page documents the connection as one a maker creates or selects, so the database-side permissions of that identity decide what the agent can return, and the data policy and credit controls in the Power Platform admin center are where an administrator can set limits.

Microsoft has not stated a default or an admin switch for this source on the pages read. No source says existing behaviour changes, so the practical risk is a maker enabling it before data policies, SQL permissions and credit limits have been reviewed. Plan for that rather than for an automatic rollout.

## Risk assessment

**Data exposure**

- The agent reads rows from the selected tables and views. The Learn page says users receive answers based on data the maker can access through the maker's configured connection and database permissions, so a maker with broad database rights can expose that data to every user of the agent. Limit this at the database: point the connection at an identity that can list and read only the tables or views you intend to expose.
- Views appear in the same selection list as tables, which lets a database owner publish a narrowed view instead of the base table.

**Security & identity**

- The same page says both that the connection identity must be able to list and read the selected objects and that, at runtime, the agent relies on the agent user's Microsoft authentication and the access granted through that connection path. Microsoft does not spell out which identity reaches the database for each question, so confirm this in a test tenant before approving production use.
- SQL Server authentication is one documented option, in which case permissions apply to the SQL user the maker specifies. Check which authentication types your data policy and database team accept.

**Autonomy & actions**

- The Learn page describes the source as reading structured data to answer questions and documents no write action for it. The agent chooses when to use the source based on its name and description, so an inaccurate description can send questions to the wrong data.

**Change & support**

- Missing or insufficient permissions can hide database objects during setup: tables or views may not appear if the identity cannot list and read them, and the Azure SQL server must be reachable from Power Platform (firewall rules that allow Azure services, or private connectivity). Expect support requests from makers about empty lists.
- The page requires a primary key on each table and recommends clear column names, so existing schemas may need changes before answers are usable.
- Testing and building on the Microsoft Copilot harness can consume Copilot Credits, so maker experimentation shows up as spend.

## Cost and licensing

**Licence.** The Learn page for this source lists its prerequisites as an Azure SQL Database or Azure SQL Managed Instance, credentials that can read the objects, access to Copilot Studio with permission to edit the agent, and network access. It names no licence.

**Meter.** Microsoft's billing overview says that for experiences powered by the Microsoft Copilot harness, Copilot Credits are charged for LLM tokens, tools (including knowledge and MCPs) and the harness itself, and that charging starts from the moment you start building. The knowledge sources overview for that experience carries the same usage-based billing note. Microsoft's cost-management page says this usage isn't included with a user's Microsoft 365 Copilot licence, and that credits are charged to the environment where the agent runs, from prepaid capacity or a linked pay-as-you-go billing plan. See [Copilot Credits](/concepts/copilot-credits/).

**Controls and gaps.** Environment allocation and the tenant-capacity setting are in the controls table. The same page documents a per-agent monthly limit in the Power Platform admin center, and says Azure budgets and alerts notify but don't stop consumption. A credit rate specific to Azure SQL knowledge is Not yet published. A separate Learn page about Power Platform connectors as knowledge sources, written for the standard harness, says availability might depend on standard versus premium connectors and the Copilot Studio plan; Microsoft has not said whether that applies to this source.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform; no other cloud is listed on the record. The record's release phases are Current Channel, General Availability and Preview.

The documented audience is the maker: someone with access to Copilot Studio and permission to edit the agent, who also has a database identity that can list and read the tables and views. Learn documents the setup in the Microsoft Copilot agent experience. Whether the source also appears for agents on other harnesses is Not stated on the page read.

Prerequisites on the page: an Azure SQL Database or Azure SQL Managed Instance reachable from Power Platform, credentials that can read the chosen objects, and network access (for example firewall rules that allow Azure services, or private connectivity). The page's preparation section also says Copilot Studio agents support Azure SQL databases or SQL Server, while its prerequisites name only the Azure services, so treat on-premises SQL Server support as unconfirmed.

## Governance guidance

### Before rollout

- Identify which environments host Microsoft Copilot harness agents and which makers can edit agents there, because the harness has no maker-access setting of its own and authoring follows existing Copilot Studio and environment permissions. This is not a row in the controls table.
- Review the data policies that cover those environments, and decide how the SQL Server connector should be classified. Power Platform data policies govern connector access; this source uses a Power Platform SQL connection.
- Consider asking database owners about a dedicated identity, views that expose only intended columns, and the firewall or private connectivity route from Power Platform. These are set in Azure SQL and are not rows in the controls table.
- Set environment credit allocations and decide whether the environment may draw from tenant capacity. Check first whether a published environment group rule governs that setting, because the environment setting cannot then be overridden.

### At rollout

- Test the source with a small diagnostic view, as the Learn page suggests, and check which identity the agent uses when different users ask questions.
- Check that makers write a specific knowledge name and description, so the agent selects the source correctly.
- Watch credit consumption in the Power Platform admin center during maker testing.

### After rollout

- Review agents that use Azure SQL knowledge and the tables and views they select; remove objects that are no longer needed.
- Re-read the Learn page and the roadmap item for status changes, and recheck the data policy classification if Microsoft changes connector behaviour.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether makers can use the SQL connector behind Azure SQL knowledge</strong><br><small>Environment</small><br><small class="controls__note">General control: Microsoft has not confirmed which connector classification governs Azure SQL knowledge. The UI steps start with New Policy or Edit Policy.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Data policy › New Policy › Next › Next › ⋮ › Block <a href="https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-ConnectorsToPolicy -PolicyName &lt;policy GUID&gt; -Connectors $connectors -Classification &lt;classification&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Copilot Credits allocated to an environment and whether it can draw from tenant capacity</strong><br><small>Environment</small><br><small class="controls__note">Needs Power Platform Administrator or Global Administrator, or equivalent. A published environment group rule on tenant-capacity draw overrides this: UI and API updates fail with TenantPoolLockedByPolicy.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Products › Copilot Studio › Manage Copilot Credits › environment › Allocate capacity › Capacity overages › Draw from the available capacity in my tenant › Save <a href="https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01 (body: scope.environmentId, allocatedEntitlements with entitlementId MCSMessages, allocation.quantity, enforcementRules ruleType TenantPool enabled false)</code> <a href="https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Changing data policies needs a tenant admin or the Environment Admin role, per the Learn page. Managing Copilot Studio capacity needs the Power Platform Administrator or Global Administrator role, or an equivalent role that can manage licensing and capacity. The credit row applies to all Copilot Studio workloads in the environment, not only this source.

If a published environment group rule governs **Draw from the available capacity in my tenant**, the environment setting cannot be overridden: updates through the admin center or the API are rejected with the TenantPoolLockedByPolicy error. Change and republish the group rule, or remove the environment from the group before managing it independently.

Power Platform data policies govern connector access, and Learn says the Azure SQL knowledge source uses the Power Platform SQL connection; a related page, written for the standard harness, says to govern Power Platform connectors used as knowledge with Power Platform data policies. Microsoft has not confirmed which connector classification governs this source in the Microsoft Copilot agent experience.

The credit row governs spend, not access: Microsoft says an allocation isn't a boundary if the environment can still draw from tenant capacity or a pay-as-you-go plan. Database permissions and network rules are set in Azure SQL, outside both admin centres.

## Open questions

- Which identity does the agent use to query Azure SQL when an end user asks a question: the maker's connection, the user's Microsoft authentication, or both? Watch the Learn page for this source.
- Which connector must be classified in a Power Platform data policy to govern this knowledge source? Watch the data policies page and Message center.
- Is non-Azure SQL Server supported, as the roadmap title suggests, or only Azure SQL Database and Azure SQL Managed Instance?
- What Copilot Credit rate applies to Azure SQL knowledge, and is it the same for agents on the standard harness? Watch the billing overview.
- When will the roadmap item move from In development, given that its August and September CY2026 targets have passed?

<!-- rationale
risk: Medium. The agent reads live business rows through a SQL connection a maker sets up, so what users see depends on that connection's database permissions; data policies and SQL permissions mostly cover it but need checking.
cost: Variable. For agents on the Microsoft Copilot harness, Microsoft's billing page says Copilot Credits are charged for tools, including knowledge; a rate specific to Azure SQL knowledge is not yet published.
impact: Medium. Makers decide whether to add the source, and users of those agents then get answers drawn from SQL data; admins notice through credit consumption and data policy behaviour.
-->

<!-- verifier-findings (2026-11-18, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls: first table row / admin-path: The general connector-blocking UI path is Security > Data and privacy > Data policy > New Policy > Next > Next > three dots > Block. | Found: Select **Next**. The **Add an environment** page appears. ... select the environment in the **Available** tab, and then select **Add to policy**. ... Select **Next**. The **Assign connectors** page appears. ... Select the three dots (**⋮**) next to the connector | Fix: Clarify the omitted scope selections in controls[0].ui and its rendered row: 'Security > Data and privacy > Data policy > New Policy > Next > Available > environment > Add to policy > Next > connector > ⋮ > Block'. The cited page also instructs the reader to enter the policy name after New Policy. | Source: https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention
- [contradicted, minor] Governance guidance versus controls / consistency: Every control the governance checklist asks readers to inspect has a corresponding controls-table row. | Found: Identify ... which makers can edit agents ... Check that makers write a specific knowledge name and description ... Watch credit consumption ... Review agents ... tables and views ... The table contains only connector data policies and environment credit allocation. | Fix: The author-permission inventory, knowledge-name/description check, consumption-monitoring step and selected-table/view review have no controls-table rows. Remove these checklist steps if retaining the current two-row table; no additional control row is requested by this correction.
-->
