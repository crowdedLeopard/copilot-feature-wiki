---
title: "Copilot Studio: Dataverse tables as a native knowledge source for agents"
slug: "microsoft-copilot-studio-dataverse-integration-on-copilot-studio"
roadmapId: 568929
topic: "copilot-studio"
products: ["Microsoft Copilot Studio"]
summary: "Makers can ground Copilot Studio agents in Dataverse tables. It needs Dataverse search in the environment and draws Copilot Credits. Nothing happens until a maker adds the source, so admins should check search and cost controls."
status: "in-development"
releasePhase: ["General Availability","Preview","Targeted Release"]
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
  model: "mixed"
  notes: "Copilot Studio usage is metered in Copilot Credits; the billing page lists no Dataverse-specific rate. Learn also notes extra Dataverse capacity cost for the search index. Microsoft 365 Copilot licensed users may incur no charge in some employee-facing cases."
audiences: ["power-platform-admin","maker","finops","security"]
tags: ["copilot-studio","dataverse","knowledge-grounding","copilot-credits","power-platform-admin-center","agents"]
sources:
  - title: "Microsoft 365 Roadmap 568929"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=568929"
    kind: "roadmap"
  - title: "Add Dataverse tables as a knowledge source"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/knowledge-add-dataverse"
    kind: "learn"
  - title: "Add Dataverse tables to your agent as a knowledge source (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/knowledge-add-dataverse-tables"
    kind: "learn"
  - title: "Configure Dataverse search for your environment"
    url: "https://learn.microsoft.com/power-platform/admin/configure-relevance-search-organization"
    kind: "learn"
  - title: "Search for Dataverse records"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/search/overview"
    kind: "learn"
  - title: "Billing rates and management"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management"
    kind: "learn"
  - title: "Manage Copilot Credits and capacity for Copilot Studio"
    url: "https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity"
    kind: "learn"
  - title: "Configure knowledge sources for agents in the Power Platform admin center (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/knowledge-sources-for-agents-rule"
    kind: "learn"
  - title: "Security FAQs for Copilot Studio"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/security-faq"
    kind: "learn"
  - title: "Govern Copilot Credit consumption for agents powered by the Microsoft Copilot harness"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/guidance/govern-credit-consumption"
    kind: "learn"
videos: []
related: ["data-policies","copilot-credits","microsoft-dataverse-enable-semantic-data-understanding-for-agentic-use","work-iq","copilot-studio-cost-management-m365-admin-center"]
controls:
  - governs: "Whether Dataverse search (required for Dataverse knowledge) is on in an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features > Dataverse search"
      docs: "https://learn.microsoft.com/power-platform/admin/configure-relevance-search-organization"
    api:
      kind: "rest"
      call: "GET [Organization URI]/api/data/v9.2/organizations?$select=isexternalsearchindexenabled"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/search/overview"
    note: "Learn gives the steps for a system administrator. The API call reads the flag; the page documents it as a check, not as a way to change it."
  - governs: "Monthly Copilot Credit limit and hard stop for an individual agent"
    scope: "agent"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Products > Copilot Studio > Summary > Manage Agents"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity"
    api: null
    note: "General control: Microsoft has not confirmed anything specific to Dataverse knowledge. Limits are not applied instantly."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-08-10T22:43:02"
changes:
  - date: "2026-11-18"
    note: "First briefing: Learn already documents Dataverse knowledge for Copilot Studio agents while the roadmap still shows In development; covers the Dataverse search dependency, Copilot Credit cost and per-agent limits."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 6 of 65 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 65
  confirmed: 59
  unconfirmed: 0
  contradicted: 6
  attempts: 1
  hash: "a6f3dcefc5bd1fa1a7178717b3d5e005"
---

## What's changing

Microsoft plans to make Microsoft Dataverse a native knowledge source in Copilot Studio, so that agents are grounded in structured business data such as records, customer data, operational data and business application content. That is the roadmap item's description.

Microsoft Learn already documents the capability. Its pages say that integrating Dataverse tables as a knowledge source grounds an agent in the data contained in the tables, and a maker adds one by selecting **Add knowledge** and then **Dataverse**, with up to 15 tables per knowledge source. Learn gives two versions of the page: one for agents on the standard harness and one for agents on the Microsoft Copilot harness. The roadmap still shows the item as In development, so treat the Learn text as the current description of the behaviour and the roadmap as the plan.

Learn lists these conditions: the agent must use Dataverse search; the agent's authentication must be **Authenticate with Microsoft** (**No authentication** and **Authenticate manually** are not supported); and the maker needs permissions on the underlying data. A preview section extends retrieval to **Multiline Text** and **File** columns and is prerelease documentation, subject to change.

The roadmap record gives a target of September CY2026 and a preview date of August CY2026, release phases General Availability, Preview and Targeted Release, Worldwide (Standard Multi-Tenant) and Web. The record was last modified on 10 August 2026, and the target month has passed as of 18 November 2026 with the status still In development.

## Why it matters

This puts business records within reach of any agent a maker builds, so the decision that matters is which environments let it happen. Learn says Dataverse search is enabled by default for production environments but is an opt-out feature, so a production environment can already meet the prerequisite without anyone choosing it. Microsoft has not stated whether the roadmap change itself arrives for makers automatically.

Expect two practical effects. Makers will ask for Dataverse search to be turned on where it is off, and Copilot Credit consumption will rise as agents answer from table data. If nobody acts, no source says existing agents change: a maker has to select Dataverse and the tables, so the exposure depends on who can build agents in each environment.

## Risk assessment

**Data exposure**
- A maker can add up to 15 Dataverse tables per knowledge source, and the agent then grounds its answers in them. Learn says makers need appropriate permissions on the underlying data to see and select tables, and that Dataverse search respects Dataverse security roles and permissions. Microsoft Learn does not say whose permissions apply when an end user asks the agent a question; confirm this before exposing sensitive tables.
- Learn says Dataverse search deprovisions and removes its index within 12 hours of being turned off, and a fresh index needs a full sync when it is turned back on.

**Security & identity**
- Dataverse knowledge needs the agent's authentication set to **Authenticate with Microsoft**. Agents set to **No authentication** or **Authenticate manually** cannot use it, according to Learn.
- The **Knowledge sources for agents** admin setting (preview) lists SharePoint + OneDrive, Public websites and Documents. Dataverse is not among the listed types, and Learn does not confirm that data policies cover Dataverse knowledge.

**Autonomy & actions**
- Learn describes the source as grounding for the agent's answers and describes no write action for it. Dataverse tools are a separate feature that the Dataverse search page lists alongside it.

**Change & support**
- If the Dataverse search setting of an environment is in a mode that does not support agent knowledge, Learn says makers see an admin-action banner and cannot add new Dataverse, Dynamics 365 or Uploaded files sources. Existing sources stay configured but the agent might not be able to retrieve from them.
- The multiline text and file column search is preview, and Learn says availability can vary by tenant or rollout group.

## Cost and licensing

**Licence.** The Learn pages for Dataverse knowledge list prerequisites (Dataverse search, Authenticate with Microsoft, data permissions) and name no licence. Copilot Studio usage is metered in Copilot Credits; see [Copilot Credits](/concepts/copilot-credits/).

**Meter.** Microsoft's billing page lists a generative answer at 2 Copilot Credits and an example in which an agent grounded in a tenant graph uses 12 credits (10 for tenant graph grounding and 2 for generative answers). It lists no separate rate for Dataverse knowledge, and does not say whether answers grounded in Dataverse tables bill as generative answers. The same page says employee-facing usage is included in the Microsoft Copilot user subscription licence when the user is licensed with Microsoft Copilot and the agent operates using that user's authenticated identity.

**Caps.** Admins can set a monthly consumption limit per Copilot Studio agent in the Power Platform admin center, with notifications and a hard stop that turns the agent off. Learn notes that limits are not applied instantly. See the second row of the controls table.

**Indirect cost.** Learn says creating a Dataverse search index incurs extra Dataverse capacity costs; that warning sits in the preview section on multiline text and file columns. Admins can see which tables are indexed and how much capacity each consumes, per the Dataverse search page. Any price specific to this feature is not yet published.

## Scope

**Who.** Makers add the source; users of the agent consume it. Learn requires makers to hold permissions on the underlying data, and the agent must use **Authenticate with Microsoft**.

**Where.** The environment must have Dataverse search turned on. The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform and does not list a US Government cloud. That is a record fact, not a statement that the feature is unavailable there.

**Limits and rollout.** Up to 15 tables per knowledge source. Only virtual tables that use the Finance and Operations data provider can be selected. The record lists General Availability, Preview and Targeted Release phases; Microsoft has not published a rollout window.

## Governance guidance

### Before rollout
- Check which production and non-production environments have Dataverse search turned on, and decide where Dataverse tables may ground agents.
- Identify the Dataverse security roles that cover the tables makers are likely to add, and confirm with Microsoft's documentation whose permissions an agent uses at answer time.
- Decide the monthly Copilot Credit limits for agents that will use Dataverse knowledge, and who approves increases.

### At rollout
- Turn Dataverse search on only in environments where the data owners accept the index and its Dataverse capacity use.
- Tell makers that the agent must use **Authenticate with Microsoft** and that the table list shows only tables they can access.
- Set per-agent monthly limits on the first agents that use Dataverse knowledge.

### After rollout
- Review Copilot Studio consumption reports for the **Knowledge sources / Tool used** column to see which agents drive credits.
- Re-check Dataverse search capacity per table after makers add large tables.
- Watch Message center and the Learn pages for the roadmap item's launch status and for any control specific to Dataverse knowledge.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Dataverse search (required for Dataverse knowledge) is on in an environment</strong><br><small>Environment</small><br><small class="controls__note">Learn gives the steps for a system administrator. The API call reads the flag; the page documents it as a check, not as a way to change it.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Dataverse search <a href="https://learn.microsoft.com/power-platform/admin/configure-relevance-search-organization" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>GET [Organization URI]/api/data/v9.2/organizations?$select=isexternalsearchindexenabled</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/search/overview" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Monthly Copilot Credit limit and hard stop for an individual agent</strong><br><small>Agent</small><br><small class="controls__note">General control: Microsoft has not confirmed anything specific to Dataverse knowledge. Limits are not applied instantly.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Products › Copilot Studio › Summary › Manage Agents <a href="https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Dataverse search is the control Learn names for availability: if it is off, makers cannot add Dataverse tables as a source. Turning it off removes the index and also affects global search and other AI experiences in the environment that share the index, according to the Dataverse search page. The page names a **System administrator** sign-in for the steps, and the developer page documents reading the `isexternalsearchindexenabled` flag through the Web API; it shows no call to change it.

The **Knowledge sources for agents** setting (Power Platform admin center > Security > Data and privacy) is a preview control at environment and environment group level. It lists SharePoint + OneDrive, Public websites and Documents; Dataverse is not among them. Microsoft has not confirmed that it or data policies govern Dataverse knowledge, so do not treat them as a control over this feature.

Per-agent limits apply to the agent, not the table. Microsoft Learn documents no API for setting the limit at the time of writing (November 2026); the Power Platform API reference lists consumption read operations (entitlement insight).

## Open questions

- When does the roadmap change reach makers in Worldwide, and is it on for all makers or opt-in? Watch the roadmap item and Message center; the roadmap still shows In development after its September CY2026 target.
- Whose permissions apply when an end user asks an agent grounded in Dataverse tables: the user's security roles, the maker's, or another identity? Watch the Dataverse knowledge page on Learn.
- Do answers grounded in Dataverse tables bill as generative answers at 2 Copilot Credits, or at another rate? Watch Billing rates and management.
- Do the Knowledge sources for agents setting or data policies get a Dataverse option? Watch the admin centre pages for that setting.
- Is the extra Dataverse capacity cost for the search index limited to the preview multiline text and file columns, or does it apply to every Dataverse knowledge source?

<!-- rationale
risk: Medium. Agents can answer from business records held in Dataverse tables once a maker adds them, and Learn ties the source to Dataverse search and Dataverse security permissions rather than a feature switch of its own.
cost: Variable. Copilot Studio bills agent answers in Copilot Credits (generative answers are listed at 2), and Learn says creating a Dataverse search index incurs extra Dataverse capacity costs. A Dataverse-specific rate is not yet published.
impact: Medium. Makers who build agents over Dataverse data and the users who ask those agents notice it; admins who own Dataverse environments need to know the search setting it depends on.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Data exposure; Governance guidance; Open questions / absence: Learn does not say whose permissions apply when an end user asks an agent about Dataverse knowledge. | Found: Agent user authentication for knowledge sources means that when a specific user asks a question of the agent, the agent only surfaces content that the specific user can access. | Fix: Replace the uncertainty with: 'For Dataverse knowledge, Learn lists the agent user's Microsoft Entra ID authentication and says the agent only surfaces content that the asking user can access.' Cite https://learn.microsoft.com/microsoft-copilot-studio/knowledge-copilot-studio#supported-knowledge-sources. Remove the corresponding open question; change the checklist's permission-confirmation clause to 'verify the intended users can access the selected records'. | Source: https://learn.microsoft.com/microsoft-copilot-studio/knowledge-copilot-studio
- [contradicted, blocker] Risk assessment: Security & identity; Governance controls; Open questions / absence: Microsoft has not confirmed that data policies govern this feature, so they should not be treated as a control over it. | Found: These data policies apply to Copilot Studio agents in the environments included in the policy's scope. | Fix: Replace the broad data-policy caveat with: 'Data policies apply to Copilot Studio agents in the environments within their scope; the cited knowledge-source settings do not document a Dataverse-specific source-type option.' Cite https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention. Remove 'or data policies' from the instruction not to treat the Knowledge sources setting as a control, and from the open question about a Dataverse option. | Source: https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention
- [contradicted, blocker] Cost and licensing: Meter; Open questions / absence: Whether answers grounded in Dataverse tables bill as generative answers remains undocumented. | Found: All knowledge sources that you add at the agent level are added to the generative answers node in the Conversational boosting system topic. | Fix: Replace the billing uncertainty and its open question with: 'For standard-harness agents, Dataverse is a supported generative-answers knowledge source. The published generative-answer feature rate is 2 Copilot Credits; other applicable feature or reasoning-model charges can also apply. Microsoft Copilot harness agents use a different usage-based billing structure.' Cite https://learn.microsoft.com/microsoft-copilot-studio/knowledge-copilot-studio, https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management and https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview. | Source: https://learn.microsoft.com/microsoft-copilot-studio/knowledge-copilot-studio
- [contradicted, blocker] Cost and licensing: Meter; licensing.notes / licensing: Employee-facing usage is included when the user has Microsoft Copilot and the agent uses that authenticated identity, without distinguishing harnesses. | Found: Usage by agents powered by the Microsoft Copilot harness isn't included with a user's Microsoft 365 Copilot license. | Fix: Qualify the body and licensing notes: 'For standard-harness agents, eligible employee-facing usage is included in the Microsoft Copilot user subscription licence when the agent uses that licensed user's authenticated identity, subject to fair usage limits. Usage by agents powered by the Microsoft Copilot harness is not included with a user's Microsoft 365 Copilot licence.' Cite the existing Billing rates and management and Govern Copilot Credit consumption sources. | Source: https://learn.microsoft.com/microsoft-copilot-studio/guidance/govern-credit-consumption
- [contradicted, blocker] Open questions: search-index capacity / absence: It remains unresolved whether Dataverse search index capacity consumption is limited to preview multiline-text and file retrieval. | Found: Dataverse search is part of database storage consumption in the Summary and Dataverse tabs. Dataverse search counts towards the different storage entitlements you have in the tenant. | Fix: Remove the final open question and replace the preview-only implication in Cost and licensing with: 'Dataverse search counts towards tenant storage entitlements and is part of database storage consumption; this platform rule is not limited to the multiline-text and file preview.' Cite the existing Configure Dataverse search source. Retain the feature guide's warning about extra capacity costs. | Source: https://learn.microsoft.com/power-platform/admin/configure-relevance-search-organization
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance; Governance controls table / consistency: Every control the governance checklist asks readers to review is represented in the controls table. | Found: Identify the Dataverse security roles; Tell makers that the agent must use Authenticate with Microsoft; Review Copilot Studio consumption reports; Re-check Dataverse search capacity per table. The table contains only Dataverse search availability and per-agent monthly limits. | Fix: The security-role review, agent authentication setting, consumption reporting and per-table storage checks have no corresponding controls-table rows. Do not add rows as part of this correction; remove those checklist bullets or their control-setting/review clauses to keep the checklist aligned with the two recorded controls.
-->
