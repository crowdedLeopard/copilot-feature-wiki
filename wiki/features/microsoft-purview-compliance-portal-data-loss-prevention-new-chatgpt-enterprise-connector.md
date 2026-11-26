---
title: "Microsoft Purview: connector that brings ChatGPT Enterprise prompts and responses into Purview"
slug: "microsoft-purview-compliance-portal-data-loss-prevention-new-chatgpt-enterprise-connector"
roadmapId: 401125
topic: "governance"
products: ["Microsoft Purview"]
summary: "A preview Data Map connector copies ChatGPT Enterprise prompts and responses into Purview for audit, retention, eDiscovery and risk tools. Nothing is collected until an admin sets it up, and it bills pay-as-you-go."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2025"
previewDate: "December CY2024"
risk: "low"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Microsoft Learn says managing ChatGPT Enterprise interactions in Purview requires pay-as-you-go billing, charged to a linked Azure subscription. A ChatGPT Enterprise plan is also a prerequisite. Learn gives no rate specific to this connector."
audiences: ["compliance","security","finops"]
tags: ["purview","collection-policies","dspm","third-party-apps","pay-as-you-go","ediscovery","data-lifecycle-management","communication-compliance","insider-risk-management","auditing"]
sources:
  - title: "Microsoft 365 Roadmap 401125"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=401125"
    kind: "roadmap"
  - title: "Connect to and manage ChatGPT Enterprise AI interactions in Microsoft Purview (preview)"
    url: "https://learn.microsoft.com/purview/archive-chatgpt-interactions"
    kind: "learn"
  - title: "Use Microsoft Purview to manage data security & compliance for ChatGPT Enterprise"
    url: "https://learn.microsoft.com/purview/ai-chatgpt-enterprise"
    kind: "learn"
  - title: "Learn about Microsoft Purview billing models"
    url: "https://learn.microsoft.com/purview/purview-billing-models"
    kind: "learn"
  - title: "Collection policy reference"
    url: "https://learn.microsoft.com/purview/collection-policies-policy-reference"
    kind: "learn"
  - title: "Create and deploy collection policies"
    url: "https://learn.microsoft.com/purview/collection-policies-create-deploy-policy"
    kind: "learn"
  - title: "Enable Microsoft Purview pay-as-you-go features for new customers"
    url: "https://learn.microsoft.com/purview/purview-payg-subscription-based-enablement"
    kind: "learn"
  - title: "Consent to use use pay-as-you-go capabilities"
    url: "https://learn.microsoft.com/purview/purview-payg-consent-based-enablement"
    kind: "learn"
  - title: "Assign permissions in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-permissions"
    kind: "learn"
  - title: "Permissions for Data Security Posture Management for AI - (classic)"
    url: "https://learn.microsoft.com/purview/ai-microsoft-purview-permissions"
    kind: "learn"
  - title: "Manage data sources in Microsoft Purview"
    url: "https://learn.microsoft.com/purview/data-map-data-sources-register-manage"
    kind: "learn"
  - title: "Data Sources - Create Or Replace"
    url: "https://learn.microsoft.com/rest/api/purview/scanningdataplane/data-sources/create-or-replace"
    kind: "docs"
  - title: "New-FeatureConfiguration"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-featureconfiguration"
    kind: "docs"
videos: []
related: ["auditing","ediscovery","insider-risk-management","microsoft-purview-data-loss-prevention-data-security-for-non-microsoft-connected-apps","microsoft-purview-data-loss-prevention-expanded-inline-protection-for-unmanaged-apps-in-ed"]
controls:
  - governs: "Whether a ChatGPT Enterprise workspace is connected to Purview as a data source"
    scope: "app"
    ui:
      surface: "Microsoft Purview governance portal"
      path: "Data Map > Data source > Register data source > ChatGPT Enterprise"
      docs: "https://learn.microsoft.com/purview/archive-chatgpt-interactions"
    api: null
    note: "Preview. Needs Data Source Administrator and Data Reader classic permissions. Scans are then created from Sources > workspace > New scan. The general Data Map guide labels the classic route Data Map > Sources > Register."
  - governs: "Which users' enterprise AI prompts and responses are collected, and whether full text is captured"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Classifiers > Collection policies > + Create policy"
      docs: "https://learn.microsoft.com/purview/collection-policies-create-deploy-policy"
    api:
      kind: "powershell"
      call: "New-FeatureConfiguration -Name \"<policy name>\" -FeatureScenario KnowYourData -Mode Enable -ScenarioConfig '<JSON>'"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-featureconfiguration"
    note: "Choose the Enterprise AI data source in the wizard. Cmdlet is in Public Preview; IsIngestionEnabled in -ScenarioConfig governs content capture. Enterprise AI is a pay-as-you-go data source."
  - governs: "Whether pay-as-you-go billing, required by the connector, is linked to an Azure subscription"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Account details"
      docs: "https://learn.microsoft.com/purview/purview-payg-subscription-based-enablement"
    api: null
    note: "Route for new customers; starts linking the tenant to an Azure subscription and resource group. Existing classic Azure Purview customers use Settings > Account overview > Review Consent. Global Administrator only."
confidence: "high"
created: "2026-11-25"
updated: "2026-11-26"
roadmapModified: "2025-01-29T00:15:46"
changes:
  - date: "2026-11-25"
    note: "New briefing: preview Purview Data Map connector for ChatGPT Enterprise prompts and responses, its pay-as-you-go meters and the collection policy it needs."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 78 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected eDiscovery search access and DSPM for AI viewer roles, qualified the billing path for new versus classic customers, narrowed the Data Map API note and checklist."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 86 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 86
  confirmed: 86
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "3fe1f8a80a2ed98e90dc1614d6ffcd87"
---

## What's changing

Microsoft Purview can connect to a ChatGPT Enterprise workspace and pull users' text prompts and responses into Purview, so that audit, data classification, retention, eDiscovery, Communication Compliance and Insider Risk Management can work on them. Microsoft Learn documents this as a preview connector in the Microsoft Purview Data Map: an administrator registers the workspace as a data source, stores an OpenAI API key in Azure Key Vault, and runs a scan that can start from today or from a chosen date in the past.

Ingestion lags behind use: Learn states that, because of OpenAI's API limitations, conversations are ingested 24 hours after they occur. The connector covers the enterprise version of ChatGPT only; Learn points to network data security and Edge for Business DLP for the consumer version.

The roadmap title files this under Data Loss Prevention, but Learn's capability table for ChatGPT Enterprise interactions marks **Data loss prevention** and **Sensitivity labels** as not supported. Collection policies, which the connector needs, are created in the Data loss prevention solution. Expect visibility, retention and investigation, not blocking.

The roadmap record still shows the item as In development, with a preview target of December CY2024 and a general availability target of December CY2025. Learn already documents the connector, marked preview. Its page also carries Microsoft's notice that classic Purview data governance capabilities are being retired and that new data governance accounts can no longer be created, while stating that Purview data security and compliance capabilities are not affected.

## Why it matters

For organisations that allow ChatGPT Enterprise, this is the documented route to put those conversations under the same retention, eDiscovery and conduct controls as Microsoft 365 Copilot. Learn says prompts and responses for AI apps are stored in a user's mailbox, so once collected they become discoverable content held inside your tenant, and their volume drives several pay-as-you-go meters.

If nobody acts, nothing is collected: Learn states the connector scan must run before Purview can manage these interactions. The decisions are whether you need this record at all, who may read the captured text, and what you are prepared to spend on it.

## Risk assessment

**Data exposure**
- Captured prompts and responses land in users' mailboxes and become searchable in eDiscovery. Searching captured ChatGPT conversations requires the appropriate eDiscovery search permissions; holding an eDiscovery role alone does not guarantee search access ([Assign permissions in eDiscovery](https://learn.microsoft.com/purview/edisc-permissions)).
- Viewing prompt and response text in DSPM for AI (classic) requires Content Explorer Content Viewer or Microsoft Purview Data Security AI Content Viewer permissions ([Permissions for Data Security Posture Management for AI](https://learn.microsoft.com/purview/ai-microsoft-purview-permissions)). Check those memberships before content capture is switched on.
- Without content capture in the collection policy, Learn says only sensitive information detected in prompts and responses is kept, not the full text.

**Security & identity**
- The connector uses an OpenAI API key held as an Azure Key Vault secret. Learn says Purview needs at least the **read** scope, and the scope is granted by OpenAI support on request (read, delete, or both). A key with delete scope carries more than a scan needs.
- Microsoft's privacy notice for Enterprise AI data sources says an enabled third-party integration can access and store some policy configuration, including user identifiers.

**Autonomy & actions**
- No change: Learn documents the connector as reading and copying conversations. DLP and sensitivity labels are marked as not supported for these interactions, so nothing is blocked or labelled.

**Change & support**
- The connector depends on the classic Microsoft Purview governance portal and an Enterprise Purview account, which sit in the data governance area Microsoft is retiring. New data governance accounts can no longer be created, so a tenant without one may not be able to meet the prerequisite.
- Learn recommends incremental scans and warns that creating a new scan ingests data again as duplicates.

## Cost and licensing

**Licence.** Learn lists a ChatGPT Enterprise plan, an Azure subscription and an active Enterprise Microsoft Purview account as prerequisites ([Connect to and manage ChatGPT Enterprise AI interactions](https://learn.microsoft.com/purview/archive-chatgpt-interactions)).

**Meters.** Learn says managing these interactions requires pay-as-you-go billing, and that any scans run are subject to the Purview billing model. The [billing models page](https://learn.microsoft.com/purview/purview-billing-models) lists these pay-as-you-go meters for non-Microsoft AI apps:
- Audit: number of audit records processed.
- Communication Compliance: number of text records scanned (1 text record = 1,000 characters), at standard or premium rates.
- Data Lifecycle Management: number of non-Microsoft 365 Copilot or AI app interactions (prompts and responses) under a retention policy.
- eDiscovery: gigabytes stored per day of non-Microsoft 365 AI data.
- Data Security for Gen AI Applications: number of requests or messages for non-Microsoft 365 AI interactions.
- Insider Risk Management: data security processing units for non-Microsoft 365 locations.

Charges appear on a monthly Azure bill, and the Usage center in the Purview portal shows pay-as-you-go usage. Rates are on Microsoft's Purview pricing page, which the billing page links to. The billing models page publishes no spending limit for these meters.

**Indirect costs.** An Azure Key Vault for the API key, and admin time to obtain the key scope from OpenAI support.

## Scope

- **Users:** ChatGPT Enterprise users in the registered workspace; collection policies can be scoped to all, specific, or all-except users and groups.
- **Roles:** Data Source Administrator and Data Reader (classic data governance permissions) to register and manage the source; collection policies use the DLP Compliance Management role or role groups such as Compliance Administrator and Organization Management.
- **Clouds:** the roadmap record lists Worldwide (Standard Multi-Tenant).
- **Platforms:** Web, per the roadmap record.
- **Prerequisites:** pay-as-you-go billing, an Enterprise Purview account, Azure Key Vault, an OpenAI API key with read scope, and a collection policy for enterprise AI apps.
- **Out of scope:** the consumer version of ChatGPT; DLP and sensitivity labels on these interactions.

## Governance guidance

### Before rollout
- Confirm the tenant has an active Enterprise Microsoft Purview account, given that new data governance accounts can no longer be created.
- Enable pay-as-you-go billing with a Global Administrator account: new customers use Settings > Account details, while existing classic Azure Purview customers use Settings > Account overview > Review Consent. Agree a budget owner for the Azure charges.
- Request only the read scope for the OpenAI API key from OpenAI support.
- Decide whether the collection policy captures full prompt and response text or only sensitive information matches.

### At rollout
- Create the collection policy for Enterprise AI apps, scoped to the users and groups you intend, before running the first scan.
- Register the ChatGPT Enterprise workspace in the Data Map and run one scan, choosing the start date deliberately because it sets how much history is ingested.
- Use incremental scans afterwards rather than new scans, to avoid duplicate ingestion.

### After rollout
- Allow at least a day for ingestion before assessing the pilot.
- Review the first monthly Azure bill with the agreed budget owner.
- Re-check the connector page for changes as the classic data governance retirement proceeds.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a ChatGPT Enterprise workspace is connected to Purview as a data source</strong><br><small>App</small><br><small class="controls__note">Preview. Needs Data Source Administrator and Data Reader classic permissions. Scans are then created from Sources &gt; workspace &gt; New scan. The general Data Map guide labels the classic route Data Map &gt; Sources &gt; Register.</small></td><td data-label="Admin UI"><strong>Microsoft Purview governance portal</strong><br>Data Map › Data source › Register data source › ChatGPT Enterprise <a href="https://learn.microsoft.com/purview/archive-chatgpt-interactions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users' enterprise AI prompts and responses are collected, and whether full text is captured</strong><br><small>Tenant</small><br><small class="controls__note">Choose the Enterprise AI data source in the wizard. Cmdlet is in Public Preview; IsIngestionEnabled in -ScenarioConfig governs content capture. Enterprise AI is a pay-as-you-go data source.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Classifiers › Collection policies › + Create policy <a href="https://learn.microsoft.com/purview/collection-policies-create-deploy-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-FeatureConfiguration -Name &quot;&lt;policy name&gt;&quot; -FeatureScenario KnowYourData -Mode Enable -ScenarioConfig '&lt;JSON&gt;'</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-featureconfiguration" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether pay-as-you-go billing, required by the connector, is linked to an Azure subscription</strong><br><small>Tenant</small><br><small class="controls__note">Route for new customers; starts linking the tenant to an Azure subscription and resource group. Existing classic Azure Purview customers use Settings &gt; Account overview &gt; Review Consent. Global Administrator only.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Account details <a href="https://learn.microsoft.com/purview/purview-payg-subscription-based-enablement" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The collection policy decides what is kept, and the connector decides whether anything arrives: both are needed. In the policy, Learn says content capture needs the **Content contains classifiers** condition set to All; without it only sensitive information is kept. DSPM for AI offers a one-click alternative: Solutions > DSPM for AI (classic) > Recommendations > **Secure interactions from enterprise apps** creates a policy that captures prompts and responses from enterprise AI apps.

Once data is in Purview, the existing retention (location **Enterprise AI apps**), eDiscovery, Communication Compliance and Insider Risk Management policies govern it, each on its own meter. Viewing prompt and response text in DSPM for AI (classic) requires Content Explorer Content Viewer or Microsoft Purview Data Security AI Content Viewer permissions.

The [Data Sources - Create Or Replace](https://learn.microsoft.com/rest/api/purview/scanningdataplane/data-sources/create-or-replace) reference for API version 2023-09-01 does not list ChatGPT Enterprise among its data source types at the time of writing (November 2026), so the connector row has no API side.

## Open questions

- Will the ChatGPT Enterprise connector move out of the classic data governance portal before its maintenance period ends on November 12, 2027, and what will a tenant without an Enterprise Purview account need? Watch the connector's Learn page.
- When will the roadmap item's status change from In development, given that Learn already documents a preview?
- Will DLP or sensitivity labels ever apply to ChatGPT Enterprise interactions, as the roadmap's Data Loss Prevention title suggests?
- Is there a per-interaction or per-scan rate specific to this connector, beyond the general Purview AI-interaction meters?

<!-- rationale
risk: Low. Nothing is collected until an administrator registers the workspace, runs a scan and has a collection policy in place; once set up, it copies users' ChatGPT Enterprise conversations into Purview, so plan who can read them.
cost: Variable. Microsoft requires pay-as-you-go billing on an Azure subscription, and the Purview meters for non-Microsoft AI interactions (audit records, retention, eDiscovery storage, communication compliance text records) bill on use.
impact: Low. Compliance and security administrators set it up and work with the data.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance controls table / admin-path: The collection-policy wizard is reached through Microsoft Purview portal > Data loss prevention > Classifiers > Collection policies > + Create policy. | Found: Open the Data loss prevention solution and navigate to Classifiers > Collection policies. Select + Create policy. | Fix: Keep the documented route into the wizard. Append to controls[1].note: 'Configure user/group scope and content capture in the wizard; content capture requires Content contains classifiers set to All.' The current route stops before those settings. | Source: https://learn.microsoft.com/purview/collection-policies-create-deploy-policy
- [supported, minor] controls[1].note / availability: New-FeatureConfiguration is in Public Preview. | Found: This cmdlet is currently available in Public Preview, isn't available in all organizations, and is subject to change. | Fix: Replace 'Cmdlet is in Public Preview' in controls[1].note with 'Cmdlet is available only in Security & Compliance PowerShell, is in Public Preview, and is not available in all organizations.' | Source: https://learn.microsoft.com/powershell/module/exchangepowershell/new-featureconfiguration
-->
