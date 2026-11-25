---
kind: "concept"
title: "Dataverse semantic model: what do agents know about your business data, and who tunes it?"
slug: "semantic-model"
summary: "The Dataverse semantic model gives Copilot and agents business context for Dataverse tables. Administrators and makers use it to choose which tables, signals and glossary terms agents see; it does not change who can read the data."
created: "2026-11-25"
updated: "2026-11-25"
version: 2
tags: ["semantic-model","dataverse","work-iq","glossary","ai","agents","data-governance"]
covers: []
sources:
  - title: "Overview of Dataverse semantic model"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/semantic-model-overview"
    kind: "learn"
  - title: "Create and configure Dataverse semantic models"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/fine-tune-semantic-model-signals"
    kind: "learn"
  - title: "Dataverse semantic model frequently asked questions"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/semantic-model-faq"
    kind: "learn"
  - title: "Regenerate the semantic model"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/regenerate-semantic-model"
    kind: "learn"
  - title: "Manage semantic model glossary entries"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/manage-semantic-model-glossary"
    kind: "learn"
  - title: "Manage Dataverse semantic models"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/ask/manage-semantic-models"
    kind: "learn"
  - title: "copilotglossaryterm EntityType"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/copilotglossaryterm"
    kind: "learn"
  - title: "What is Dataverse intelligence? (preview)"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-intelligence"
    kind: "learn"
  - title: "Business Applications in Work IQ default settings"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings"
    kind: "learn"
  - title: "Manage participation in Business Applications in Work IQ"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-participation"
    kind: "learn"
  - title: "Understand costs for Business Applications in Work IQ"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/understand-costs"
    kind: "learn"
  - title: "Dataverse capacity-based storage details"
    url: "https://learn.microsoft.com/power-platform/admin/capacity-storage"
    kind: "learn"
  - title: "Power BI semantic models in Microsoft Fabric"
    url: "https://learn.microsoft.com/fabric/data-warehouse/semantic-models"
    kind: "learn"
  - title: "SaveSettingValue Action (Microsoft.Dynamics.CRM)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/savesettingvalue"
    kind: "learn"
  - title: "Use Business Applications in Work IQ"
    url: "https://learn.microsoft.com/power-apps/user/use-business-apps-work-iq"
    kind: "learn"
  - title: "Get or update setting value using client API"
    url: "https://learn.microsoft.com/power-apps/developer/model-driven-apps/clientapi/get-update-setting-value-using-code"
    kind: "learn"
  - title: "Use Web API actions"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/use-web-api-actions"
    kind: "learn"
  - title: "Add Microsoft Copilot for app users in model-driven apps"
    url: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/add-microsoft-365-copilot"
    kind: "learn"
related: ["work-iq","security-roles","copilot-credits","knowledge-grounding","m365-copilot-enable-semantic-model-in-sales-agent","microsoft-dataverse-enable-semantic-data-understanding-for-agentic-use"]
controls:
  - governs: "Which semantic models exist in an environment and which apps and agents use them"
    scope: "environment"
    ui:
      surface: "Power Apps"
      path: "environment > More > Discover all > AI > Semantic models"
      docs: "https://learn.microsoft.com/power-apps/maker/data-platform/fine-tune-semantic-model-signals"
    api:
      kind: "rest"
      call: "GET [Organization URI]/api/iq/v1.0/semanticmodel"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/ask/manage-semantic-models"
    note: "Add the include=botinfo query parameter to list the apps and agents that use each model."
  - governs: "Which Dataverse tables a model covers"
    scope: "environment"
    ui:
      surface: "Power Apps"
      path: "environment > More > Discover all > AI > Semantic models > model > Configure > Configure table sources > Included in model > table > Remove table"
      docs: "https://learn.microsoft.com/power-apps/maker/data-platform/fine-tune-semantic-model-signals"
    api:
      kind: "rest"
      call: "POST [Organization URI]/api/iq/v1.0/semanticmodel"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/ask/manage-semantic-models"
    note: "The API creates a custom model; name its tables in the tables property of the request body. Custom models are preview."
  - governs: "Which signal types, views and relationships feed a model"
    scope: "environment"
    ui:
      surface: "Power Apps"
      path: "environment > More > Discover all > AI > Semantic models > model > Configure > Manage signals"
      docs: "https://learn.microsoft.com/power-apps/maker/data-platform/fine-tune-semantic-model-signals"
    api: null
    note: "Per-table and per-view or relationship toggles are on the same Configure page. Sample table rows is off by default."
  - governs: "Glossary terms and definitions agents use"
    scope: "environment"
    ui:
      surface: "Power Apps"
      path: "environment > More > Discover all > AI > Semantic models > model > Glossary > Add term"
      docs: "https://learn.microsoft.com/power-apps/maker/data-platform/manage-semantic-model-glossary"
    api:
      kind: "rest"
      call: "POST [organization URI]/api/data/v9.2/copilotglossaryterms"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/copilotglossaryterm"
    note: "The entity type supports POST, GET, PATCH and DELETE. System-defined entries can be edited but not deleted. The request body uses term for the term and description for its explanation."
  - governs: "When a model is regenerated after a change"
    scope: "environment"
    ui:
      surface: "Power Apps"
      path: "environment > More > Discover all > AI > Semantic models > model > Regenerate"
      docs: "https://learn.microsoft.com/power-apps/maker/data-platform/regenerate-semantic-model"
    api: null
    note: "Save changes first. Regeneration runs across all semantic models in the environment."
  - governs: "Whether Work IQ features, including semantic modeling, are on in an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > environment > Settings > Product > Features > Work IQ"
      docs: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings"
    api: null
    note: "Environment administrator account required."
  - governs: "Which users in the tenant can use Business Applications data in Work IQ with Copilot"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > View all > Business Applications data in Work IQ available to Copilot"
      docs: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings"
    api: null
    note: "Options are No users, All users (the default) and Specific groups. Tenant administrator account required."
  - governs: "Whether a model-driven app takes part in Microsoft 365 Copilot Chat and semantic modeling"
    scope: "app"
    ui:
      surface: "Power Apps"
      path: "Apps > app > Edit > Settings > Features > Enable Microsoft 365 Copilot in model-driven apps"
      docs: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings"
    api:
      kind: "rest"
      call: "POST [Organization URI]/api/data/v9.2/SaveSettingValue"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/savesettingvalue"
    note: "Maker account required. Save and publish the app after changing it. API: SettingName m365copilotmodelappenabled, Value supplies the override, AppUniqueName targets the app."
confidence: "medium"
dependents: 7
changes:
  - date: "2026-11-25"
    note: "New page explaining the Dataverse semantic model, its signals, glossary and controls, and how it differs from Fabric semantic models."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 80 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected: the model-driven app Work IQ setting now lists its SaveSettingValue API; removed two checklist items without control rows; narrowed the environment copy or move limit and the view signal wording."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 96 statements not yet confirmed"
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 96
  confirmed: 96
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "03f8091109047fb2d2c591d8a5e649b8"
---

## What it is

The Dataverse semantic model gives AI agents and Copilot experiences a shared, business-aware understanding of your Dataverse data: instead of reasoning from raw table and column names, agents that use it understand what the data means. The platform provisions models automatically for supported Copilot experiences, and makers and administrators then tune them.

**Three building blocks**

| Part | What it holds |
| --- | --- |
| Data scope | The Dataverse tables the model covers, with semantic indexing over them |
| System-inferred signals | Table relationships, public views with join conditions and sub-grid views, form summaries, table summaries and, optionally, sample data rows |
| Glossary | Terms, acronyms and definitions that the signals cannot infer |

Once Dataverse intelligence is enabled, the model is provisioned automatically and regenerates every 12 hours; initial generation can take up to two hours. Dataverse intelligence is now part of Business Applications in Work IQ (see [Work IQ](/concepts/work-iq/)). Copilot in Power Apps, Microsoft Copilot with Dataverse, Sales Agent in Microsoft 365 and Copilot Studio agents over Dataverse data consume it. A model is named after the source that provisioned it, and a change to a model applies to every app or agent that shares it.

**Custom models (preview).** You can also create a model for a specific purpose. Custom models are currently usable through direct API and action calls; creating one does not connect it to an app or agent.

**The other meaning.** Briefings also use "semantic model" for Power BI semantic models in Microsoft Fabric, a logical description of an analytical domain with metrics and business-friendly terminology. That is a separate object, managed in Fabric and Power BI, and this page does not cover its controls. See [Power Automate process mining export to Fabric](/features/power-automate-process-mining-export-object-centric-process-mining-data-to-microsoft-fabri/) and [Purview DLP for Fabric semantic models](/features/microsoft-purview-compliance-portal-data-loss-prevention-restrict-access-action-support-fo/).

## Why it matters

The model decides what context an agent has about your data: which tables, which views and relationships, and which business vocabulary. Wrong or noisy context produces wrong answers, so tables, signals and glossary terms are worth reviewing before a Dataverse-grounded agent goes to users. Microsoft says table selection and signal settings do not override or replace Dataverse security roles or table, column and record access controls, so the model shapes what agents understand, not what users may read. See [Dataverse security roles](/concepts/security-roles/).

Business Applications in Work IQ is on by default for new public production environments, with exceptions for EU and EFTA, government-related and nonproduction environments, and semantic modeling is one of its capabilities. Models can therefore exist in environments where nobody on your team configured them. See [Sales agent semantic model](/features/m365-copilot-enable-semantic-model-in-sales-agent/) for one consumer.

## Cost and licensing

Not yet documented: a licence requirement or price specific to the semantic model. Two related charges are documented.

- **Storage.** Some Work IQ features use extra storage for search indexes, including semantic modeling. Microsoft says all Dataverse indexes are reported at the Dataverse database capacity rate; search storage appears as the DataverseSearch table in the Dataverse capacity report.
- **Consumption.** Billing for Business Applications in Work IQ follows the experience that uses the business context, and Microsoft says to configure the spending policy for that experience. See [Copilot Credits](/concepts/copilot-credits/) and [Spending policies](/concepts/spending-policies/).

## Risks and limits

- **Not an access control.** Removing a table from a model does not delete the Dataverse table, and model configuration does not replace Dataverse security roles. A table left out of a model is not thereby protected from other access.
- **Shared models change together.** Signal, table and glossary changes apply to every app or agent that uses the model, so a tweak for one experience alters others, for example Sales Agent and Copilot in Dynamics 365 Sales on `SalesSpecificQnA`.
- **Changes are not instant.** Save and regenerate are separate steps, unsaved edits are not included in a regeneration, and a started regeneration is not a finished one. Regeneration runs across all semantic models in the environment.
- **Generated content is read-only.** You can switch off signals, views and relationships, or add glossary terms, but you cannot edit generated summaries, views or relationships directly.
- **Sample data rows add row values.** The Sample table rows signal is off by default; when enabled it uses a selection of row values as context for agents. Review which tables it applies to.
- **Environment copy or move.** The overview documents no support for environment copy or move and advises restarting Dataverse Intelligence afterwards. The configuration article also says semantic models are solution-aware and that their configuration can move between environments in solutions. Models named with `Secondary_model` do not carry over when you copy or move the environment.
- **Cloud availability.** Business Applications in Work IQ is not currently available in sovereign or government cloud environments, including DoD, GCC and GCC High.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which semantic models exist in an environment and which apps and agents use them</strong><br><small>Environment</small><br><small class="controls__note">Add the include=botinfo query parameter to list the apps and agents that use each model.</small></td><td data-label="Admin UI"><strong>Power Apps</strong><br>environment › More › Discover all › AI › Semantic models <a href="https://learn.microsoft.com/power-apps/maker/data-platform/fine-tune-semantic-model-signals" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>GET [Organization URI]/api/iq/v1.0/semanticmodel</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/ask/manage-semantic-models" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which Dataverse tables a model covers</strong><br><small>Environment</small><br><small class="controls__note">The API creates a custom model; name its tables in the tables property of the request body. Custom models are preview.</small></td><td data-label="Admin UI"><strong>Power Apps</strong><br>environment › More › Discover all › AI › Semantic models › model › Configure › Configure table sources › Included in model › table › Remove table <a href="https://learn.microsoft.com/power-apps/maker/data-platform/fine-tune-semantic-model-signals" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST [Organization URI]/api/iq/v1.0/semanticmodel</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/ask/manage-semantic-models" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which signal types, views and relationships feed a model</strong><br><small>Environment</small><br><small class="controls__note">Per-table and per-view or relationship toggles are on the same Configure page. Sample table rows is off by default.</small></td><td data-label="Admin UI"><strong>Power Apps</strong><br>environment › More › Discover all › AI › Semantic models › model › Configure › Manage signals <a href="https://learn.microsoft.com/power-apps/maker/data-platform/fine-tune-semantic-model-signals" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Glossary terms and definitions agents use</strong><br><small>Environment</small><br><small class="controls__note">The entity type supports POST, GET, PATCH and DELETE. System-defined entries can be edited but not deleted. The request body uses term for the term and description for its explanation.</small></td><td data-label="Admin UI"><strong>Power Apps</strong><br>environment › More › Discover all › AI › Semantic models › model › Glossary › Add term <a href="https://learn.microsoft.com/power-apps/maker/data-platform/manage-semantic-model-glossary" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST [organization URI]/api/data/v9.2/copilotglossaryterms</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/copilotglossaryterm" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>When a model is regenerated after a change</strong><br><small>Environment</small><br><small class="controls__note">Save changes first. Regeneration runs across all semantic models in the environment.</small></td><td data-label="Admin UI"><strong>Power Apps</strong><br>environment › More › Discover all › AI › Semantic models › model › Regenerate <a href="https://learn.microsoft.com/power-apps/maker/data-platform/regenerate-semantic-model" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Work IQ features, including semantic modeling, are on in an environment</strong><br><small>Environment</small><br><small class="controls__note">Environment administrator account required.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › environment › Settings › Product › Features › Work IQ <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users in the tenant can use Business Applications data in Work IQ with Copilot</strong><br><small>Tenant</small><br><small class="controls__note">Options are No users, All users (the default) and Specific groups. Tenant administrator account required.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › Business Applications data in Work IQ available to Copilot <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a model-driven app takes part in Microsoft 365 Copilot Chat and semantic modeling</strong><br><small>App</small><br><small class="controls__note">Maker account required. Save and publish the app after changing it. API: SettingName m365copilotmodelappenabled, Value supplies the override, AppUniqueName targets the app.</small></td><td data-label="Admin UI"><strong>Power Apps</strong><br>Apps › app › Edit › Settings › Features › Enable Microsoft 365 Copilot in model-driven apps <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST [Organization URI]/api/data/v9.2/SaveSettingValue</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/savesettingvalue" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

**Roles.** Managing a model in Power Apps needs System Administrator, or Dataverse Search, Semantic Model and Environment Maker. The environment Work IQ setting is managed by Power Platform administrators; the Microsoft 365 admin center setting needs a tenant administrator account.

**How the controls interact.** Work IQ settings cascade: tenant, environment, then app. If the tenant setting is off, data is not shared between Microsoft 365 Copilot Chat and Dataverse even if an app is configured to share; if the environment setting is off, semantic modeling is unavailable there. Within a model, a model-wide signal setting takes precedence over per-table settings: turn a signal on at both levels before managing individual views or relationships.

**New experience.** The Configure-based routes require the new semantic model experience; its availability depends on the environment and the documented Dataverse and solution versions.

**What they do not enforce.** Participation settings do not prevent agentic access to environment data; Microsoft points to App Access controls for that (see [Work IQ](/concepts/work-iq/)). No Dataverse API or PowerShell cmdlet is documented for the signal or regeneration settings or for the environment and tenant Work IQ switches.

## What to check

- List the semantic models in each environment and check which apps and agents each one serves.
- Review each model's included tables and remove any that are irrelevant or sensitive to the scenario.
- Check whether Sample table rows is on for any model.
- Read the glossary, including system-defined entries, and correct terms that no longer match your business.
- Confirm the Work IQ setting for each environment and the tenant setting for Business Applications data in Work IQ.

## Open questions

- Is a licence or price specific to the semantic model published? Microsoft's semantic model articles do not state one.
- How much index storage does a model consume, and is the semantic index billed in the same way as other Dataverse search indexes?
- Which audit events record changes to a model's tables, signals or glossary? Microsoft's semantic model articles list none.
- Which environments get the new semantic model experience, beyond the version and solution requirements stated for it?

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[2].ui; Governance controls table / admin-path: The Power Apps model route through Configure > Manage signals reaches model-wide signal settings. | Found: Open the model and select Configure. Under Manage signals, turn the relevant signal On or Off. | Fix: Complete controls[2].ui.path and its rendered counterpart as 'environment > More > Discover all > AI > Semantic models > model > Configure > Manage signals > signal > On or Off'. Keep the existing note that per-table, view and relationship controls are on Configure. | Source: https://learn.microsoft.com/power-apps/maker/data-platform/fine-tune-semantic-model-signals
- [supported, minor] controls[7].ui; Governance controls table / admin-path: Power Apps > Apps > app > Edit > Settings > Features > Enable Microsoft 365 Copilot in model-driven apps controls app participation. | Found: select Apps. Find the app that you want to manage, and then select Edit. ... select Settings. Select Features. Set Enable Microsoft 365 Copilot in model-driven apps to On or Off. | Fix: Keep the cited route, but add to controls[7].note and the rendered note: 'The model-driven app setup article labels this option Microsoft Copilot in model-driven apps; the Work IQ default-settings article calls it Enable Microsoft 365 Copilot in model-driven apps.' Both pages are already cited: https://learn.microsoft.com/power-apps/maker/model-driven-apps/add-microsoft-365-copilot and https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings. | Source: https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings
-->
