---
title: "Sales agent: semantic model for Dynamics 365 and Salesforce CRM data"
slug: "m365-copilot-enable-semantic-model-in-sales-agent"
roadmapId: 573294
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans a semantic model that gives Sales agent the structure and meaning of CRM data. Admins tune it in Power Apps and Power Platform admin center. Learn documents it as preview; no separate price is published."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mobile","Teams and Surface Devices","Web"]
targetDate: "December CY2026"
previewDate: "October CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Sales agent is available to users with a Microsoft 365 Copilot licence. Microsoft has not published a licence or meter for the semantic model itself."
audiences: ["power-platform-admin","m365-admin","service-owner","maker"]
tags: ["sales-agent","semantic-model","dynamics-365","dataverse","work-iq","glossary","power-apps","m365-copilot","power-platform-admin-center","m365-admin-center","knowledge-grounding"]
sources:
  - title: "Microsoft 365 Roadmap 573294"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=573294"
    kind: "roadmap"
  - title: "Set up Sales agent in Microsoft 365 Copilot"
    url: "https://learn.microsoft.com/microsoft-sales-copilot/set-up-sales-chat"
    kind: "learn"
  - title: "Overview of Dataverse semantic model (preview)"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/semantic-model-overview"
    kind: "learn"
  - title: "Fine-tune semantic model signals (preview)"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/fine-tune-semantic-model-signals"
    kind: "learn"
  - title: "Manage semantic model glossary entries (preview)"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/manage-semantic-model-glossary"
    kind: "learn"
  - title: "Set up glossary terms for Salesforce"
    url: "https://learn.microsoft.com/microsoft-sales-copilot/sf-glossary-support"
    kind: "learn"
  - title: "Business Applications in Work IQ default settings (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings"
    kind: "learn"
  - title: "Quickstart: Set up Business Applications in Work IQ for a pilot (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/quickstart"
    kind: "learn"
  - title: "Business Applications in Work IQ administration (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/"
    kind: "learn"
videos: []
related: ["microsoft-dataverse-enable-semantic-data-understanding-for-agentic-use","m365-copilot-discover-and-act-on-recommended-lead-and-opportunity-actions-in-sales-agent"]
controls:
  - governs: "Whether Work IQ features, including semantic models, are on in an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > environment > Settings > Product > Features > Work IQ"
      docs: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/quickstart"
    api: null
    note: "Preview. The quickstart names the Power Platform Administrator role; the default-settings page says an environment administrator account."
  - governs: "Whether Business Applications data in Work IQ is available to Copilot, for all users, groups or no one"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > View all > Business Applications data in Work IQ available to Copilot"
      docs: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings"
    api: null
    note: "Preview. Tenant administrator. Learn says this must be on for environments to use Work IQ capabilities."
  - governs: "Which tables, signal types, views and relationships feed the Sales agent semantic model"
    scope: "environment"
    ui:
      surface: "Power Apps (maker)"
      path: "More > Discover all > Semantic model > model > Configuration > table > Include in semantic model"
      docs: "https://learn.microsoft.com/power-apps/maker/data-platform/fine-tune-semantic-model-signals"
    api: null
    note: "Preview. Needs System Administrator, or Semantic Model and Environment Maker. The Sales agent model is named SalesSpecificQnA and is shared with Copilot in Dynamics 365 Sales."
  - governs: "Business terms and definitions that correct how the model reads CRM data"
    scope: "environment"
    ui:
      surface: "Power Apps (maker)"
      path: "Semantic model > model > Glossary > Add item"
      docs: "https://learn.microsoft.com/power-apps/maker/data-platform/manage-semantic-model-glossary"
    api: null
    note: "Preview. Changes are picked up at the next regeneration unless an admin regenerates manually."
  - governs: "Which CRM tables or objects Sales agent can query"
    scope: "environment"
    ui:
      surface: "Sales agent administrator settings"
      path: "Features > Sales Chat > Add"
      docs: "https://learn.microsoft.com/microsoft-sales-copilot/set-up-sales-chat"
    api: null
    note: "Existing control today, not a semantic model setting. Learn does not say it limits the model's data scope. At least one entity must remain."
  - governs: "Scripted switch for Work IQ or the Sales agent semantic model"
    scope: "environment"
    ui: null
    api: null
    note: "No PowerShell cmdlet or API for this was found on Microsoft Learn at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-11-11T00:51:09"
changes:
  - date: "2026-11-16"
    note: "First briefing for this roadmap item, written from the roadmap record and the preview Learn pages for Sales agent, the semantic model and Work IQ."
version: 1
verification:
  status: "held"
  date: "2026-11-16"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 78
  confirmed: 73
  unconfirmed: 1
  contradicted: 4
  attempts: 1
---

## What's changing

Sales agent in Microsoft 365 Copilot is getting a semantic model: a connected description of the CRM's structure and meaning that the agent can retrieve when it answers questions. The roadmap item says it covers tables or objects, fields, descriptions, data types, relationships, views, pick-list values and glossary terms, and that it should help with questions spanning related CRM records.

For Dynamics 365, the roadmap says admins turn the model on in the Power Apps maker portal and choose the data coverage and signals. For Salesforce, it says the model starts from the existing Sales agent table and glossary configuration, and Salesforce admins can add signals such as relationships and views in the maker portal. Microsoft Learn describes the setup differently: the Sales agent setup page ("Step 2: Configure the semantic model (preview)") tells admins to turn on Work IQ in the environment, then fine-tune the generated model on the Power Apps Semantic model page. On Dynamics 365 the model is generated after the setting is enabled; on Salesforce it is generated on the next metadata cache refresh.

The model draws on metadata that already exists: table relationships, views, forms, column description summaries and, optionally, sample data rows. Sample data rows are off by default. The model regenerates every 12 hours, and an administrator can trigger a regeneration.

The roadmap record lists the item as In development, with a preview in October CY2026 and general availability targeted for December CY2026 for Worldwide (Standard Multi-Tenant). Those dates are Microsoft's targets. The Learn pages for the semantic model, Work IQ and the Sales agent step are all marked preview at the time of writing (November 2026).

## Why it matters

The model changes what Sales agent can reason over, not who can see the CRM data. Answers about custom fields, pick-lists and related records depend on which tables, views and glossary terms feed it, so a poorly scoped model gives sellers confident but wrong answers, and the helpdesk takes the calls.

The larger decision is upstream. Learn states that Microsoft turns Work IQ on by default for new environments from 30 September 2026 and for existing environments from November 2026, except those on its exception list, and that Work IQ is the setting that turns on semantic modelling. Plan for the setting to be on in qualifying CRM environments unless you decide otherwise, and decide the data scope before it is.

## Risk assessment

**Data exposure**
- The model reads metadata (relationships, views, form display names, description summaries). Turning on the Sample table rows signal, which is off by default, lets the system read sample data rows, so keep it off for tables holding personal or regulated data.
- Sales agent already has access to all columns in each table or object added in its admin settings. The model adds context about those tables, and the per-table setting Include in semantic model is the lever for sensitive ones.
- Work IQ respects existing access permissions, so the model does not by itself widen who can read CRM rows.

**Security & identity**
- Managing the model needs System Administrator, or the Semantic Model and Environment Maker roles. Salesforce admins must also assign a security role in the msdyn_viva environment in Power Platform admin center.
- Learn does not say whether the msdyn_viva environment is covered by the Work IQ default described below.

**Autonomy & actions**
- The pages read describe the model as signals and glossary terms used to interpret data. They describe no write capability for it.

**Change & support**
- Sales agent and Copilot in Dynamics 365 Sales share the SalesSpecificQnA model, so a change for one applies to both.
- Computed signals are read-only; the way to correct a misreading is a glossary entry. Changes can take until the next 12-hourly regeneration unless an admin regenerates manually.
- The model does not support environment copy or move. After either, turn Dataverse Intelligence off and on again in Power Platform admin center.
- The model is documented as preview, which Learn says may be modified or discontinued.

## Cost and licensing

Sales agent is available to users who have a Microsoft 365 Copilot licence (Set up Sales agent in Microsoft 365 Copilot). That page names no separate licence for the semantic model, and Microsoft has not published a price or meter for it.

The preview banner on the semantic model pages says that for consumption-based services, usage of underlying application services may continue to incur licence fees during the preview period. It does not say which services that covers for Sales agent.

The documented indirect cost is storage. The Sales agent page says enabling Dataverse search can increase storage usage because indexes are created for searchable tables, and the Work IQ default-settings page says semantic modelling uses extra storage for search indexes. Removing tables from Sales agent reduces index storage, but those tables can then no longer be queried in Sales agent.

## Scope

- **Users:** sellers with Sales agent installed in Outlook and Teams and a Microsoft 365 Copilot licence. Sales Chat must be turned on in Access settings.
- **CRM:** Dynamics 365 Sales and Salesforce. For Salesforce, Learn directs admins to the msdyn_viva environment for the Work IQ setting.
- **Roles:** System Administrator, or Semantic Model and Environment Maker, to manage the model; Power Platform Administrator for the Work IQ environment setting; a tenant administrator account for the Microsoft 365 admin center setting.
- **Prerequisite:** to fine-tune the model, Dataverse version with Dynamics 365 apps enabled must be 9.2.26054.00125 or later.
- **Clouds and platforms:** the roadmap lists Worldwide (Standard Multi-Tenant) and Desktop, Mobile, Teams and Surface Devices, and Web. Learn says Business Applications in Work IQ is not currently available in DoD, GCC or GCC High.
- **Environments:** the Work IQ default excludes, among others, nonproduction environments such as trial, sandbox and developer.

## Governance guidance

### Before rollout
- Decide which CRM tables or objects Sales agent should read, and remove the rest in the Sales agent admin settings (Sales Chat). Keep in mind that Sales agent can access every column of the tables you leave in.
- Check whether Work IQ is already on in each CRM environment and whether the tenant-level Business Applications in Work IQ setting is All users, Specific groups or No users.
- Assign System Administrator, or Semantic Model plus Environment Maker, to the people who will tune the model, and confirm the Dataverse version meets the minimum.
- Collect the company's own terms (acronyms, custom fields, what counts as an overdue task) as glossary entries to add once the model is generated.

### At rollout
- Turn on Work IQ in a pilot environment only, then wait for the initial generation, which can take up to two hours.
- Open the Semantic model page, select the Sales agent model and exclude tables holding sensitive data with Include in semantic model.
- Switch off views or relationships that are outdated or misleading, and leave Sample table rows off unless the pilot needs it.
- Test a fixed set of seller questions before and after, and add glossary entries for the misreadings.

### After rollout
- Review the model after schema changes: it regenerates every 12 hours, or an admin can regenerate manually.
- Turn Dataverse Intelligence off and on again after any environment copy or move.
- Re-read the Learn pages when the status moves from preview, because limits and prerequisites may change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Work IQ features, including semantic models, are on in an environment</strong><br><small>Environment</small><br><small class="controls__note">Preview. The quickstart names the Power Platform Administrator role; the default-settings page says an environment administrator account.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › environment › Settings › Product › Features › Work IQ <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/quickstart" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Business Applications data in Work IQ is available to Copilot, for all users, groups or no one</strong><br><small>Tenant</small><br><small class="controls__note">Preview. Tenant administrator. Learn says this must be on for environments to use Work IQ capabilities.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › Business Applications data in Work IQ available to Copilot <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which tables, signal types, views and relationships feed the Sales agent semantic model</strong><br><small>Environment</small><br><small class="controls__note">Preview. Needs System Administrator, or Semantic Model and Environment Maker. The Sales agent model is named SalesSpecificQnA and is shared with Copilot in Dynamics 365 Sales.</small></td><td data-label="Admin UI"><strong>Power Apps (maker)</strong><br>More › Discover all › Semantic model › model › Configuration › table › Include in semantic model <a href="https://learn.microsoft.com/power-apps/maker/data-platform/fine-tune-semantic-model-signals" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Business terms and definitions that correct how the model reads CRM data</strong><br><small>Environment</small><br><small class="controls__note">Preview. Changes are picked up at the next regeneration unless an admin regenerates manually.</small></td><td data-label="Admin UI"><strong>Power Apps (maker)</strong><br>Semantic model › model › Glossary › Add item <a href="https://learn.microsoft.com/power-apps/maker/data-platform/manage-semantic-model-glossary" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which CRM tables or objects Sales agent can query</strong><br><small>Environment</small><br><small class="controls__note">Existing control today, not a semantic model setting. Learn does not say it limits the model's data scope. At least one entity must remain.</small></td><td data-label="Admin UI"><strong>Sales agent administrator settings</strong><br>Features › Sales Chat › Add <a href="https://learn.microsoft.com/microsoft-sales-copilot/set-up-sales-chat" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Scripted switch for Work IQ or the Sales agent semantic model</strong><br><small>Environment</small><br><small class="controls__note">No PowerShell cmdlet or API for this was found on Microsoft Learn at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Learn describes four control levels for a semantic model: environment, signal type, table and item (view or relationship). The environment level is the Work IQ setting, and the tenant-level Microsoft 365 admin center setting must also be on for environments to use Work IQ capabilities. Learn refers to that tenant setting by more than one name.

Changes to a semantic model apply to every app or agent that shares it, so tuning the model for Sales agent also changes Copilot in Dynamics 365 Sales. The Sales agent CRM entity list and the semantic model's table settings are separate screens, and Learn does not say that one limits the other.

Glossary terms for Dynamics 365 are, per the Sales agent page, added in Copilot Studio; for Salesforce they are rows in the CopilotGlossaryTerms table in the msdyn_viva environment. The Semantic model page has its own Glossary, and the pages read do not say how the three relate. No scripted control for any of this is documented at the time of writing (November 2026).

## Open questions

- Will the semantic model be switched on for Sales agent automatically when Work IQ is on by default, or only after an admin enables it? Watch the Sales agent setup page and the roadmap item.
- Is the Salesforce msdyn_viva environment covered by the Work IQ default for existing environments from November 2026?
- Which licence or meter, if any, applies to semantic model use, and is it part of the Microsoft 365 Copilot licence for Sales agent?
- Which glossary does Sales agent read on Dynamics 365: the Copilot Studio glossary, the Semantic model page's Glossary, or both?
- Will a PowerShell cmdlet or API for the Work IQ environment setting or the semantic model be published before general availability?

<!-- rationale
risk: Medium. The model reads CRM metadata and, if switched on, sample data rows, and the Work IQ setting behind it is documented as on by default for qualifying environments from November 2026, so it needs review.
cost: Low. The only costs Learn shows are admin time and extra Dataverse storage for search indexes. Sales agent needs a Microsoft 365 Copilot licence; any charge specific to the semantic model is not yet published.
impact: Medium. Sellers using Sales agent will notice changed answers; the admins and makers who manage the CRM environment do the configuring. Nobody else is affected.
-->

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [contradicted, blocker] What's changing: rollout paragraph; sources / date: The briefing presents only the December roadmap target as the announced general availability timing. | Found: This feature will reach general availability on November 17, 2026. | Fix: Retain December CY2026 explicitly as the roadmap target, but add that Microsoft's notice MC1540293 announces general availability on November 17, 2026, and says no action is required. Cite https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1540293 and report the discrepancy rather than silently choosing the roadmap.
- [supported, minor] front matter: licensing.notes; Cost and licensing; Scope; rationale: cost / licensing: Sales agent is available to Microsoft 365 Copilot licensees, and the briefing describes that licence as required. | Found: The Sales agent is available to users who have access to a Microsoft 365 Copilot license. | Fix: Retain the cited setup-page statement, but qualify the blanket requirement: https://learn.microsoft.com/microsoft-sales-copilot/use-sales-chat also says Dynamics 365 Sales Enterprise or Premium users without Microsoft 365 Copilot can use Sales agent with CRM data only. Name that discrepancy and add the source. | Source: https://learn.microsoft.com/microsoft-sales-copilot/set-up-sales-chat
- [contradicted, blocker] Risk assessment: Security & identity; Open questions / absence: Microsoft has not said whether the Salesforce msdyn_viva environment falls under the Work IQ default. | Found: The msdyn_viva environment is of type Trial. If you need to convert the environment to Production, follow the steps in the Convert the sales environment from Trial to Production article. | Fix: Replace the unresolved question with the documented qualification: msdyn_viva is provisioned as Trial, and trial environments are excluded from Work IQ automatic enablement by https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings. If it has been converted to Production, check the other eligibility exceptions. Add the data-handling source. | Source: https://learn.microsoft.com/microsoft-sales-copilot/data-handling#sales-agent,-dataverse,-and-your-crm
- [unsupported, blocker] Cost and licensing: final paragraph / cost: Removing tables from the Sales agent entity list reduces index storage. | Found: Searched: "Sales agent" "remove tables" "storage" "index". Opened Sales setup and read Free up storage space search passages. The documented storage action is removing tables from Dataverse search, not merely from the Sales agent entity list. | Fix: Replace with: 'For Dynamics 365, removing tables from Dataverse search can reduce index-related storage costs, but those tables can no longer be queried in Sales agent.' Cite https://learn.microsoft.com/microsoft-sales-copilot/set-up-sales-chat#step-1-configure-crm-entities-dynamics-365-tables-or-salesforce-objects. Do not equate the Sales agent entity list with the Dataverse search index configuration.
- [contradicted, blocker] Governance controls: final sentence / absence: No scripted control for any of the glossary management just described is documented. | Found: Entity set path: [organization URI]/api/data/v9.2/copilotglossaryterms ... Operations supported: POSTGETPATCHDELETE | Fix: Remove 'No scripted control for any of this is documented'. Microsoft documents Dataverse CRUD for CopilotGlossaryTerm, including term, description and skill properties, at the cited reference. Restrict any remaining absence statement to the Work IQ switch and the specific Semantic model UI controls whose API mapping is not documented; do not imply Salesforce glossary rows have no automation surface. | Source: https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/copilotglossaryterm
- [contradicted, minor] Governance guidance: At rollout; After rollout; Governance controls / consistency: The governance checklist asks administrators to use controls that lack their own corresponding table rows. | Found: Switch off views or relationships ... leave Sample table rows off ... an admin can regenerate manually ... Turn Dataverse Intelligence off and on again | Fix: Add distinct rows for signal-type/sample-row configuration, individual view/relationship switches and manual regeneration. The existing controls[2] path only shows table inclusion. Also map the Dataverse Intelligence restart instruction explicitly to the environment control row, noting Microsoft's terminology, rather than leaving its relationship to Work IQ implicit.
-->
