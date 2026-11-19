---
title: "Sales agent: semantic model for Dynamics 365 and Salesforce CRM data"
slug: "m365-copilot-enable-semantic-model-in-sales-agent"
roadmapId: 573294
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans a semantic model that gives Sales agent the structure and meaning of CRM data. Admins tune it in Power Apps and Power Platform admin center. Learn marks the Sales agent setup step as preview; no separate price is published."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mobile","Teams and Surface Devices","Web"]
targetDate: "December CY2026"
previewDate: "October CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "Sales agent needs an appropriate Microsoft 365 Copilot licence plus Dynamics 365 Sales or Salesforce access for CRM and Graph grounding, or Dynamics 365 Sales Enterprise or Premium access for CRM data only. No separate semantic model price or meter is published."
audiences: ["power-platform-admin","m365-admin","service-owner","maker"]
tags: ["sales-agent","semantic-model","dynamics-365","dataverse","work-iq","glossary","power-apps","m365-copilot","power-platform-admin-center","m365-admin-center","knowledge-grounding"]
sources:
  - title: "Microsoft 365 Roadmap 573294"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=573294"
    kind: "roadmap"
  - title: "MC1540293: Sales agent in Microsoft 365 Copilot - Semantic model in Sales Agent"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1540293"
    kind: "message-center"
  - title: "Set up Sales agent in Microsoft 365 Copilot"
    url: "https://learn.microsoft.com/microsoft-sales-copilot/set-up-sales-chat"
    kind: "learn"
  - title: "Use Sales agent in Microsoft 365 Copilot"
    url: "https://learn.microsoft.com/microsoft-sales-copilot/use-sales-chat"
    kind: "learn"
  - title: "Data handling in Sales agent"
    url: "https://learn.microsoft.com/microsoft-sales-copilot/data-handling"
    kind: "learn"
  - title: "Overview of Dataverse semantic model"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/semantic-model-overview"
    kind: "learn"
  - title: "Business Applications in Work IQ"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/business-applications-work-iq"
    kind: "learn"
  - title: "Create and configure Dataverse semantic models"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/fine-tune-semantic-model-signals"
    kind: "learn"
  - title: "Manage semantic model glossary entries"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/manage-semantic-model-glossary"
    kind: "learn"
  - title: "Manage Dataverse semantic models"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/ask/manage-semantic-models"
    kind: "learn"
  - title: "Set up glossary terms for Salesforce"
    url: "https://learn.microsoft.com/microsoft-sales-copilot/sf-glossary-support"
    kind: "learn"
  - title: "copilotglossaryterm EntityType"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/copilotglossaryterm"
    kind: "learn"
  - title: "Business Applications in Work IQ default settings"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings"
    kind: "learn"
  - title: "Quickstart: Set up Business Applications in Work IQ for a pilot"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/quickstart"
    kind: "learn"
  - title: "Business Applications in Work IQ administration"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/"
    kind: "learn"
videos: []
related: []
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
      path: "environment > More > Discover all > AI > Semantic models > model > Configure > Configure table sources > Included in model > table > Remove table"
      docs: "https://learn.microsoft.com/power-apps/maker/data-platform/fine-tune-semantic-model-signals"
    api: null
    note: "New semantic model experience, where available. Needs System Administrator, or Dataverse Search, Semantic Model and Environment Maker. The Sales agent model is SalesSpecificQnA, shared with Copilot in Dynamics 365 Sales."
  - governs: "Business terms and definitions that correct how the model reads CRM data"
    scope: "environment"
    ui:
      surface: "Power Apps (maker)"
      path: "environment > More > Discover all > AI > Semantic models > model > Glossary > Add term"
      docs: "https://learn.microsoft.com/power-apps/maker/data-platform/manage-semantic-model-glossary"
    api:
      kind: "rest"
      call: "POST /api/data/v9.2/copilotglossaryterms"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/copilotglossaryterm"
    note: "Preview. Changes are picked up at the next regeneration. API creates CopilotGlossaryTerm rows using term and description; skill associates a DVTableSearch model. Reference does not explain sync with the Power Apps Glossary screen."
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
    note: "Microsoft Learn documents no API for changing the Work IQ environment setting or editing the preprovisioned Sales agent model's signal settings at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-19"
roadmapModified: "2026-11-11T00:51:09"
changes:
  - date: "2026-11-16"
    note: "First briefing for this roadmap item, written from the roadmap record and the preview Learn pages for Sales agent, the semantic model and Work IQ."
  - date: "2026-11-16"
    note: "Corrected after verification: added MC1540293's 17 November 2026 general availability date beside the roadmap target, the msdyn_viva Trial qualification, the Dataverse search storage wording, the CopilotGlossaryTerm Web API reference and the Dynamics 365 Sales licence qualification."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 82 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected after verification: default state is now on (Learn says the semantic model is automatically provisioned for Sales agent over Dataverse data), action is act-now, and two checklist items no longer imply controls outside the table."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 91 statements not yet confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 8 of 87 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected after verification: Work IQ default now limited to new public production environments (November 2026 plan for existing environments deferred), table and glossary admin paths, roles, minimum versions, licensing model, API wording, preview wording."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 95 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected after verification: form summaries wording, CopilotGlossaryTerm Web API call on the glossary row, Work IQ name in the environment copy or move step, and fuller semantic model and glossary paths."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 93 statements not yet confirmed"
version: 5
verification:
  status: "verified-with-gaps"
  date: "2026-11-19"
  version: 5
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 93
  confirmed: 93
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "e0aed7fa3a2237b2d39b8fabc12cbc8d"
---

## What's changing

Sales agent in Microsoft 365 Copilot is getting a semantic model: a connected description of the CRM's structure and meaning that the agent can retrieve when it answers questions. The roadmap item says it covers tables or objects, fields, descriptions, data types, relationships, views, pick-list values and glossary terms, and that it should help with questions spanning related CRM records.

For Dynamics 365, the roadmap says admins turn the model on in the Power Apps maker portal and choose the data coverage and signals. For Salesforce, it says the model starts from the existing Sales agent table and glossary configuration, and Salesforce admins can add signals such as relationships and views in the maker portal. Microsoft Learn describes the setup differently: the Sales agent setup page ("Step 2: Configure the semantic model (preview)") tells admins to turn on Work IQ in the environment, then fine-tune the generated model on the Power Apps Semantic models page. On Dynamics 365 the model is generated after the setting is enabled; on Salesforce it is generated on the next metadata cache refresh.

The model draws on metadata that already exists: table relationships, views, forms, column description summaries and, optionally, sample data rows. Sample data rows are off by default. The model regenerates every 12 hours, and an administrator can trigger a regeneration.

The roadmap record lists the item as In development, with a preview in October CY2026 and general availability targeted for December CY2026 for Worldwide (Standard Multi-Tenant). Those dates are Microsoft's targets. Microsoft's notice MC1540293 (published 2026-11-05) gives a different date: it says this feature will reach general availability on November 17, 2026, and that the message is for awareness and no action is required. The roadmap target and the notice disagree; the notice is the later and more specific statement about rollout. The Sales agent semantic-model setup section is still marked preview at the time of writing (November 2026).

## Why it matters

The model changes what Sales agent can reason over, not who can see the CRM data. Answers about custom fields, pick-lists and related records depend on which tables, views and glossary terms feed it, so a poorly scoped model gives sellers confident but wrong answers, and the helpdesk takes the calls.

The larger decision is upstream. Learn states that Business Applications in Work IQ is on by default for new public production environments, except those on its exception list, and that the Work IQ setting is what turns on semantic modelling. Microsoft has deferred the previously documented November 2026 default-enablement plan for existing environments. Check the current Work IQ setting in each existing CRM environment, and decide the data scope before it is on.

## Risk assessment

**Data exposure**
- The model reads metadata (relationships, views, form summaries, description summaries). Turning on the Sample table rows signal, which is off by default, lets the system read sample data rows, so keep it off for tables holding personal or regulated data.
- Sales agent already has access to all columns in each table or object added in its admin settings. The model adds context about those tables, and removing a table under Configure > Configure table sources > Included in model is the lever for sensitive ones (new semantic model experience, where available).
- Work IQ respects existing access permissions, so the model does not by itself widen who can read CRM rows.

**Security & identity**
- Managing the model needs System Administrator, or Dataverse Search, Semantic Model and Environment Maker. Salesforce admins must also assign a security role in the msdyn_viva environment in Power Platform admin center.
- Learn documents the msdyn_viva environment as type Trial, and the Work IQ default-settings page lists trial environments among the nonproduction exceptions to the default. If msdyn_viva has been converted to Production, check the other exceptions on that page.

**Autonomy & actions**
- The pages read describe the model as signals and glossary terms used to interpret data. They describe no write capability for it.

**Change & support**
- Sales agent and Copilot in Dynamics 365 Sales share the SalesSpecificQnA model, so a change for one applies to both.
- Computed signals are read-only; the way to correct a misreading is a glossary entry. Changes can take until the next 12-hourly regeneration unless an admin regenerates manually.
- The model does not support environment copy or move. After either, turn Work IQ (formerly Dataverse intelligence) off and on again in Power Platform admin center.
- The Sales agent semantic-model setup step is documented as preview, which Learn says might have restricted functionality.

## Cost and licensing

To use Sales agent, the Sales agent setup page says you must meet one of two licensing options (Set up Sales agent in Microsoft 365 Copilot): an appropriate licence to access Microsoft 365 Copilot and access to Dynamics 365 Sales or Salesforce, which gives CRM data and Microsoft 365 Graph grounding; or Dynamics 365 Sales Enterprise or Premium access without a Microsoft 365 Copilot licence, which gives CRM data only. Graph-grounded data needs a Microsoft 365 Copilot licence. Neither the setup page nor the Use Sales agent page names a separate licence for the semantic model, and Microsoft has not published a separate price or meter for it.

The preview banner on the semantic model pages says that for consumption-based services, usage of underlying application services may continue to incur licence fees during the preview period. It does not say which services that covers for Sales agent.

The documented indirect cost is storage. The Sales agent page says enabling Dataverse search can increase storage usage because indexes are created for searchable tables, and the Work IQ default-settings page says semantic modelling uses extra storage for search indexes. For Dynamics 365, removing tables from Dataverse search can reduce index-related storage costs, but those tables can no longer be queried in Sales agent.

## Scope

- **Users:** sellers with Sales agent installed in Outlook and Teams and a Microsoft 365 Copilot licence (a Dynamics 365 Sales Enterprise or Premium user without it can use Sales agent with CRM data only). Sales Chat must be turned on in Access settings.
- **CRM:** Dynamics 365 Sales and Salesforce. For Salesforce, Learn directs admins to the msdyn_viva environment for the Work IQ setting.
- **Roles:** System Administrator, or Dataverse Search, Semantic Model and Environment Maker, to manage the model; Power Platform Administrator for the Work IQ environment setting; a tenant administrator account for the Microsoft 365 admin center setting.
- **Prerequisite:** to use the documented configuration experience, Dataverse with Dynamics 365 apps enabled must be version 9.2.26103.00144 or later, and AIPlatformExtensions Solution must be version 1.0.0.373 or later.
- **Clouds and platforms:** the roadmap lists Worldwide (Standard Multi-Tenant) and Desktop, Mobile, Teams and Surface Devices, and Web. Learn says Business Applications in Work IQ is not currently available in DoD, GCC or GCC High.
- **Environments:** the Work IQ default excludes, among others, nonproduction environments such as trial, sandbox and developer.

## Governance guidance

### Before rollout
- Decide which CRM tables or objects Sales agent should read, and remove the rest in the Sales agent admin settings (Sales Chat). Keep in mind that Sales agent can access every column of the tables you leave in.
- Check whether Work IQ is already on in each CRM environment and whether the tenant-level Business Applications in Work IQ setting is All users, Specific groups or No users.
- Confirm that the people tuning the model have the documented roles and that Dataverse meets the minimum version.
- Collect the company's own terms (acronyms, custom fields, what counts as an overdue task) as glossary entries to add once the model is generated.

### At rollout
- Turn on Work IQ in a pilot environment only, then wait for the initial generation, which can take up to two hours.
- Open the Semantic models page, select the Sales agent model and use Remove table under Configure > Configure table sources > Included in model for tables holding sensitive data.
- Switch off views or relationships that are outdated or misleading, and leave Sample table rows off unless the pilot needs it.
- Test a fixed set of seller questions before and after, and add glossary entries for the misreadings.

### After rollout
- Review the model after schema changes; automatic regeneration runs every 12 hours.
- Turn Work IQ (formerly Dataverse intelligence) off and on again after any environment copy or move.
- Re-read the Learn pages when the status moves from preview, because limits and prerequisites may change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Work IQ features, including semantic models, are on in an environment</strong><br><small>Environment</small><br><small class="controls__note">Preview. The quickstart names the Power Platform Administrator role; the default-settings page says an environment administrator account.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › environment › Settings › Product › Features › Work IQ <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/quickstart" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Business Applications data in Work IQ is available to Copilot, for all users, groups or no one</strong><br><small>Tenant</small><br><small class="controls__note">Preview. Tenant administrator. Learn says this must be on for environments to use Work IQ capabilities.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › Business Applications data in Work IQ available to Copilot <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which tables, signal types, views and relationships feed the Sales agent semantic model</strong><br><small>Environment</small><br><small class="controls__note">New semantic model experience, where available. Needs System Administrator, or Dataverse Search, Semantic Model and Environment Maker. The Sales agent model is SalesSpecificQnA, shared with Copilot in Dynamics 365 Sales.</small></td><td data-label="Admin UI"><strong>Power Apps (maker)</strong><br>environment › More › Discover all › AI › Semantic models › model › Configure › Configure table sources › Included in model › table › Remove table <a href="https://learn.microsoft.com/power-apps/maker/data-platform/fine-tune-semantic-model-signals" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Business terms and definitions that correct how the model reads CRM data</strong><br><small>Environment</small><br><small class="controls__note">Preview. Changes are picked up at the next regeneration. API creates CopilotGlossaryTerm rows using term and description; skill associates a DVTableSearch model. Reference does not explain sync with the Power Apps Glossary screen.</small></td><td data-label="Admin UI"><strong>Power Apps (maker)</strong><br>environment › More › Discover all › AI › Semantic models › model › Glossary › Add term <a href="https://learn.microsoft.com/power-apps/maker/data-platform/manage-semantic-model-glossary" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST /api/data/v9.2/copilotglossaryterms</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/copilotglossaryterm" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which CRM tables or objects Sales agent can query</strong><br><small>Environment</small><br><small class="controls__note">Existing control today, not a semantic model setting. Learn does not say it limits the model's data scope. At least one entity must remain.</small></td><td data-label="Admin UI"><strong>Sales agent administrator settings</strong><br>Features › Sales Chat › Add <a href="https://learn.microsoft.com/microsoft-sales-copilot/set-up-sales-chat" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Scripted switch for Work IQ or the Sales agent semantic model</strong><br><small>Environment</small><br><small class="controls__note">Microsoft Learn documents no API for changing the Work IQ environment setting or editing the preprovisioned Sales agent model's signal settings at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Work IQ enables semantic modelling at environment level. Within a model, Learn lists signal-type, table and item controls. The tenant-level Microsoft 365 admin center setting must also be on for environments to use Work IQ capabilities. Learn refers to that tenant setting by more than one name.

Changes to a semantic model apply to every app or agent that shares it, so tuning the model for Sales agent also changes Copilot in Dynamics 365 Sales. The Sales agent CRM entity list and the semantic model's table settings are separate screens, and Learn does not say that one limits the other.

Glossary terms for Dynamics 365 are, per the Sales agent page, added in Copilot Studio; for Salesforce they are rows in the CopilotGlossaryTerms table in the msdyn_viva environment. The Semantic models page has its own Glossary, and the pages read do not say how the three relate. Microsoft documents Dataverse Web API operations (POST, GET, PATCH and DELETE) for the CopilotGlossaryTerm table, with term, description and skill properties, in the Dataverse Web API reference. Microsoft Learn documents no API for changing the Work IQ environment setting or editing the preprovisioned Sales agent model's signal settings at the time of writing (November 2026).

## Open questions

- Microsoft has deferred the previously documented November 2026 default-enablement plan for existing environments. When will it set a new date? Watch the Business Applications in Work IQ default settings page.
- Will Microsoft publish a separate price or meter for semantic model use?
- Which glossary does Sales agent read on Dynamics 365: the Copilot Studio glossary, the Semantic models page's Glossary, or both?
- Will Microsoft publish an API for changing the Work IQ environment setting or editing SalesSpecificQnA signal settings?
- The roadmap targets general availability in December CY2026, while MC1540293 says November 17, 2026. Will the roadmap item be updated to match, and will the preview label come off the Sales agent setup step?

<!-- rationale
risk: Medium. The model reads CRM metadata and, if switched on, sample data rows, and Learn documents the Work IQ setting behind it as on by default for new public production environments, so it needs review.
cost: Low. The only costs Learn shows are admin time and extra Dataverse storage for search indexes. Sales agent needs a Microsoft 365 Copilot licence, or a Dynamics 365 Sales Enterprise or Premium licence for CRM data only; any charge specific to the semantic model is not yet published.
impact: Medium. Sellers using Sales agent will notice changed answers; the admins and makers who manage the CRM environment do the configuring.
-->

<!-- verifier-findings (2026-11-19, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters; rationale: risk / default: Business Applications in Work IQ is on by default for new public production environments subject to exceptions. | Found: Business Applications in Work IQ is on by default for new public production environments created for new or existing tenants. The following environments are exceptions: | Fix: After the scoped default statement, add: 'The older Manage feature settings reference still lists Turn on Dataverse intelligence (Work IQ) for agents and AI experiences as Off by default; the Work IQ default-settings page gives the newer, environment-qualified default.' Cite https://learn.microsoft.com/power-platform/admin/settings-features#dataverse-intelligence-preview. | Source: https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings
- [supported, minor] Risk assessment: Change & support / behaviour: The semantic model does not support environment copy or move. | Found: No ALM support. The semantic model currently doesn't support environment copy or move operations. | Fix: Replace the sentence with: 'The overview says environment copy or move is unsupported; the configuration guide separately says semantic models are solution-aware and can move configuration through solutions.' Both pages are already cited: https://learn.microsoft.com/power-apps/maker/data-platform/semantic-model-overview and https://learn.microsoft.com/power-apps/maker/data-platform/fine-tune-semantic-model-signals#add-semantic-model-to-a-solution. | Source: https://learn.microsoft.com/power-apps/maker/data-platform/semantic-model-overview
-->
