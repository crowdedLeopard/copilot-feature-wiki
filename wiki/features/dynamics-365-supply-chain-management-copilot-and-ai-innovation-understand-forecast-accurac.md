---
title: "Dynamics 365 Supply Chain Management: SMAPE accuracy and AI explanations for Demand planning forecasts"
slug: "dynamics-365-supply-chain-management-copilot-and-ai-innovation-understand-forecast-accurac"
roadmapId: 576754
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","Dynamics 365 Supply Chain Management"]
summary: "Demand planning adds a calculation accuracy page with SMAPE per planning object, history beside each forecast and an AI-written explanation of its drivers. The roadmap says it reaches users automatically; Learn documents no switch for it."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: "July CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "The Demand planning licence requirements page says each relevant user must have a licence for Demand planning in a production environment. Nothing specific to the forecast explanations is published."
audiences: ["service-owner","power-platform-admin","change-adoption"]
tags: ["supply-chain-management","demand-planning","dynamics-365","copilot","ai","security-roles","licensing"]
sources:
  - title: "What's new or changed in Demand planning"
    url: "https://learn.microsoft.com/dynamics365/supply-chain/demand-planning/whats-new-demand-planning"
    kind: "learn"
  - title: "Demand planning license requirements"
    url: "https://learn.microsoft.com/dynamics365/supply-chain/demand-planning/demand-planning-licensing"
    kind: "learn"
  - title: "Security roles and row-level security in Demand planning"
    url: "https://learn.microsoft.com/dynamics365/supply-chain/demand-planning/users-access"
    kind: "learn"
  - title: "Install, enable, and set up Demand planning"
    url: "https://learn.microsoft.com/dynamics365/supply-chain/demand-planning/install-demand-planning"
    kind: "learn"
  - title: "Analyze demand plans with Copilot"
    url: "https://learn.microsoft.com/dynamics365/supply-chain/demand-planning/demand-planning-copilot"
    kind: "learn"
  - title: "Enable Copilot capabilities in finance and operations apps"
    url: "https://learn.microsoft.com/dynamics365/fin-ops-core/dev-itpro/copilot/enable-copilot"
    kind: "learn"
  - title: "Manage Dynamics 365 apps"
    url: "https://learn.microsoft.com/power-platform/admin/manage-apps"
    kind: "learn"
  - title: "Dynamics 365 Supply Chain Management: Copilot and AI innovation - Understand forecast accuracy with AI explanations"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576754"
    kind: "roadmap"
  - title: "Which users hold the Demand planning security roles that open the app (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/assign-security-roles"
    kind: "learn"
  - title: "Which users hold the Demand planning security roles that open the app (REST API)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/aad-group-team"
    kind: "learn"
  - title: "Which users hold a Demand planning licence (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Which users hold a Demand planning licence (PowerShell)"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
videos: []
related: ["dynamics-365-supply-chain-management-copilot-and-ai-innovation-analyze-demand-using-genera","security-roles"]
controls:
  - governs: "Whether AI forecast explanations are available in a Demand planning environment"
    scope: "environment"
    ui: null
    api: null
    note: "Microsoft Learn documents no switch for this feature at the time of writing (November 2026). The Copilot for demand planning setting is documented for Analyze demand plans with Copilot only."
  - governs: "Which users hold the Demand planning security roles that open the app"
    scope: "user"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Users + permissions > Users > user > Manage security roles"
      docs: "https://learn.microsoft.com/power-platform/admin/assign-security-roles"
    api:
      kind: "rest"
      call: "POST [Organization URI]/api/data/v9.0/systemusers(azureactivedirectoryobjectid=<user object ID>)/systemuserroles_association/$ref"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/aad-group-team"
    note: "Governs access to Demand planning as a whole; Learn names no role for this page. The request body names the role as @odata.id. Needs Read and Assign on the Security Role table."
  - governs: "Which users hold a Demand planning licence"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Licenses > product > Assign licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "Required per user in production environments. Needs at least License Administrator or User Administrator."
confidence: "medium"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-10-16T19:08:38"
changes:
  - date: "2026-11-27"
    note: "New briefing: calculation accuracy page with SMAPE and AI forecast explanations in Demand planning version 1.4."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 59 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-27"
    note: "Corrected the row-level access statements to apply to Contributors without the Manager or System Administrator role, removed the row-level open question, and narrowed the version 1.4 gap to its rollout schedule."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 69 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 69
  confirmed: 69
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "81a41c5139246aa754e355d0d15bfd08"
---

## What's changing

Demand planning in Dynamics 365 Supply Chain Management gets a page that shows how accurate each forecast is and explains, in natural language, what drove it. Microsoft's what's-new list for Demand planning version 1.4 describes a new **calculation accuracy page** for forecast time series. For each planning object in the forecast, it shows which demand forecasting algorithm was used and the resulting symmetric mean absolute percentage error (SMAPE, a measure of how far forecasts were from actual demand). It adds a model distribution chart and an average SMAPE indicator that responds to filters, and Learn says it improves on the explainability display previously in the forecast profile job run history.

From that page a planner can drill into one planning object, such as a product and store, to see historical data alongside the calculated forecast and get a natural-language explanation of the factors driving it. The same version adds *Best fit model - version 4*, which uses SMAPE to choose between forecast models, and a view that splits each forecast into baseline, signals impact and manual adjustments.

The roadmap item states that the feature is enabled for end users automatically. Its status is In development, with preview targeted for July CY2026 and general availability for October CY2026, for Worldwide (Standard Multi-Tenant) on the web. Microsoft Learn already lists the capability under Demand planning version 1.4, so the roadmap status and Learn differ on whether it has shipped.

## Why it matters

This puts generated text in front of planners at the point where they decide whether to trust or override a forecast. Expect planners to repeat the explanation when they adjust numbers or brief sales and supply colleagues, so they need to know it is AI-generated and can be wrong. Because the roadmap says the feature reaches users automatically, an organisation that does nothing will find it in Demand planning once its environments run version 1.4.

For the service owner the decision is less about switching it off, for which Microsoft Learn documents no setting at the time of writing (November 2026), than about who can open Demand planning and which data they see there. Microsoft Learn does not describe how the explanation is generated or what forecast data is sent to an AI model to produce it.

## Risk assessment

**Data exposure**
- The explanation view shows historical demand next to each forecast for a planning object. Users with Demand Planning Contributor, but not Demand Planning Manager or System Administrator, can view and edit only data granted by row-level access rules and see no data by default.
- Microsoft Learn does not describe what forecast data the explanation sends to an AI model or where it is processed.

**Security & identity**
- Microsoft Learn names no role specific to the page. Access to Demand planning comes from its security roles in the Power Platform environment (Demand Planning Contributor, Demand Planning Manager, System Administrator) and the Demand planning licence, both rows in the controls table.

**Autonomy & actions**
- No change described: the roadmap and Learn describe the page as showing accuracy values and explanations, not as changing forecasts.

**Change & support**
- Planners may treat the explanation as authoritative when overriding a forecast. Brief them that it is generated text.
- Learn warns that new installations and updates to version 1.4 might require significantly more processing time than previous versions, because of engineering work for Dataverse storage alignment.

## Cost and licensing

**Licence.** The Demand planning licence requirements page says that to use Demand planning in a production environment, each relevant user must have a licence for it, and points to the Supply Chain Management pricing page and the Dynamics 365 Licensing Guide for plans and prices. The calculation accuracy page and its explanations are part of Demand planning, so that requirement covers them; nothing specific to this feature is published.

**Meter.** Microsoft publishes no separate charge, meter or credit rate for the forecast explanations at the time of writing (November 2026).

**Indirect costs.** Admin time to review role and licence assignments, and time to brief planners on what SMAPE means and how to read an AI explanation. Learn notes that updates to version 1.4 might take significantly more processing time than earlier versions.

## Scope

- **Who:** demand planners using Demand planning in Dynamics 365 Supply Chain Management. Users need a Power Platform user account with the security roles for the features they need, and a Demand planning licence in production.
- **Roles that manage access:** assigning security roles needs at least Read and Assign privileges on the Security Role table, which the System Administrator role has by default; assigning licences needs at least the License or User Administrator role.
- **Clouds:** Worldwide (Standard Multi-Tenant), as the roadmap item lists.
- **Platforms:** Web.
- **Version:** Learn lists the feature under Demand planning version 1.4. A rollout schedule specific to Demand planning version 1.4 is not yet published.
- **Prerequisites:** Demand planning installed from the Power Platform admin center on the same tenant as Supply Chain Management, not in the tenant's default environment, with Supply Chain Management version 10.0.36 build 10.0.1695.83 or later, or another build the install page lists.

## Governance guidance

### Before rollout
- Review which users hold the Demand Planning Contributor and Demand Planning Manager roles in each Demand planning environment, in the Power Platform admin center.
- Check that each planner who should use the page holds a Demand planning licence, in the Microsoft 365 admin center.
- Brief demand planners that the explanation on the calculation accuracy page is AI-generated, and that SMAPE is the measure Best fit model - version 4 uses to choose between models.

### At rollout
- Confirm which Demand planning version each environment runs; Learn lists this feature under version 1.4.
- Raise a support request asking whether any setting turns the explanations off, if your policy requires an off switch for generative AI in business apps.

### After rollout
- Open the calculation accuracy page with a Demand Planning Contributor test account and confirm it shows only the data that account is meant to see.
- Collect cases where an explanation contradicts the forecast's baseline, signals impact and manual adjustments breakdown, and raise them with Microsoft support.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether AI forecast explanations are available in a Demand planning environment</strong><br><small>Environment</small><br><small class="controls__note">Microsoft Learn documents no switch for this feature at the time of writing (November 2026). The Copilot for demand planning setting is documented for Analyze demand plans with Copilot only.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users hold the Demand planning security roles that open the app</strong><br><small>User</small><br><small class="controls__note">Governs access to Demand planning as a whole; Learn names no role for this page. The request body names the role as @odata.id. Needs Read and Assign on the Security Role table.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Users + permissions › Users › user › Manage security roles <a href="https://learn.microsoft.com/power-platform/admin/assign-security-roles" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST [Organization URI]/api/data/v9.0/systemusers(azureactivedirectoryobjectid=&lt;user object ID&gt;)/systemuserroles_association/$ref</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/aad-group-team" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users hold a Demand planning licence</strong><br><small>User</small><br><small class="controls__note">Required per user in production environments. Needs at least License Administrator or User Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Licenses › product › Assign licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The table has no row that turns the forecast explanations off: Microsoft Learn documents no setting for this feature at the time of writing (November 2026). Two broader settings exist, and Learn does not say whether either covers it:

- The **Copilot for demand planning** environment setting (Power Apps maker portal, Solutions > Default Solution > Settings > Copilot for demand planning), which Learn documents as turning *Analyze demand plans with Copilot* on or off, on by default, changed by a system administrator of the environment.
- The tenant-level **Publish bots with AI features** setting (Power Platform admin center, Settings), enabled by default. Learn says that if it is disabled you can't use Copilot features in finance and operations apps, so it reaches well beyond this feature.

The security role and licence rows decide who reaches Demand planning at all, not this page alone. Inside Demand planning, a system admin account manages row-level access rules under **Configuration > Row level access**. Users with Demand Planning Contributor, but not Demand Planning Manager or System Administrator, can view and edit only data granted by row-level access rules and see no data by default.

## Open questions

- Does the **Copilot for demand planning** setting, or any other setting, turn off the AI explanations on the calculation accuracy page? Watch the Analyze demand plans with Copilot page and the Demand planning what's-new page.
- What forecast data does the explanation send to an AI model, and in which region is it processed? Watch for a Responsible AI FAQ for this feature.
- When will version 1.4 be offered to each existing Demand planning environment, given that the roadmap still shows In development? Watch the what's-new page and Message center.

<!-- rationale
risk: Medium. The explanations reach planners automatically and Microsoft Learn documents no switch for them, so access rests on the Demand planning roles and licence that already gate the app.
cost: Low. The page sits inside Demand planning, which needs a Demand planning licence per user in production; Microsoft publishes no separate charge or meter for it, so the known cost is admin and briefing time.
impact: Medium. Demand planners and planning managers see a new calculation accuracy page and AI explanations in the tool they forecast with.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing: SMAPE parenthesis / behaviour: SMAPE measures forecast accuracy through errors relative to observed demand. | Found: **SMAPE** metric. Returns the symmetric mean absolute percentage error metric, an accuracy measure based on percentage errors. | Fix: Add https://learn.microsoft.com/office/vba/api/excel.worksheetfunction.forecast_ets_stat#remarks to sources for the plain-language SMAPE definition, or remove the parenthetical definition. | Source: https://learn.microsoft.com/office/vba/api/excel.worksheetfunction.forecast_ets_stat#remarks
- [supported, minor] Governance controls: Copilot for demand planning path / admin-path: The Power Apps maker portal route is Solutions > Default Solution > Settings > Copilot for demand planning. | Found: In the Objects list, select Settings. In the Copilot for demand planning row, select the link in the Display name column. In the Edit Copilot for demand planning dialog box, in the Setting environment value section, select Add existing value. | Fix: Complete the background setting path as 'Solutions > Default Solution > Objects > Settings > Copilot for demand planning > Setting environment value > Add existing value > Yes/No', selecting the target environment first. Keep its applicability limited to Analyze demand plans with Copilot. | Source: https://learn.microsoft.com/dynamics365/supply-chain/demand-planning/demand-planning-copilot
-->
