---
title: "Power Apps: Dataverse custom APIs in generative pages"
slug: "power-apps-use-dataverse-custom-apis-in-generative-pages"
roadmapId: 576284
topic: "power-platform"
products: ["Power Apps"]
summary: "Makers can point a model-driven generative page at a Dataverse custom API so the page runs server-side business logic such as approving an order or validating a transaction."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: "October CY2026"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Learn states no additional AI or message credits are needed for the generative pages maker experience. Standard Power Apps and Dataverse licensing applies."
audiences: ["maker","power-platform-admin","service-owner"]
tags: ["power-apps","generative-pages","dataverse","custom-api","model-driven-apps","plug-ins","gcc","gcc-high"]
sources:
  - title: "Generate a page using natural language"
    url: "https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/generative-pages"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 576284"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576284"
    kind: "roadmap"
  - title: "Copilot preview features in Power Apps (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-apps/maker/canvas-apps/ai-overview#enable-or-disable-copilot-features"
    kind: "learn"
  - title: "Application Insights telemetry for the pages (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/set-up-export-application-insights#create-an-export-package"
    kind: "learn"
videos: []
related: ["power-apps-use-power-platform-connectors-in-generative-pages","power-apps-expand-model-access-and-maker-studio-availability-for-generative-pages-via-gith"]
controls:
  - governs: "Copilot preview features in Power Apps"
    scope: "tenant"
    ui:
      surface: "Power Platform admin center"
      path: "Settings > Tenant settings > Copilot in Power Apps (preview)"
      docs: "https://learn.microsoft.com/power-apps/maker/canvas-apps/ai-overview#enable-or-disable-copilot-features"
    api: null
  - governs: "Application Insights telemetry for the pages"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Data export > App Insights > New data export"
      docs: "https://learn.microsoft.com/power-platform/admin/set-up-export-application-insights#create-an-export-package"
    api: null
  - governs: "Switch specific to custom APIs in generative pages"
    scope: "environment"
    ui: null
    api: null
    note: "Custom APIs run as the signed-in user and are governed by Dataverse security roles."
confidence: "high"
created: "2026-11-15"
updated: "2026-11-16"
roadmapModified: "2026-10-21T23:02:10"
changes:
  - date: "2026-11-15"
    note: "New briefing: Dataverse custom APIs in generative pages, in development."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
version: 2
verification:
  status: "held"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 43
  confirmed: 37
  unconfirmed: 3
  contradicted: 3
  attempts: 1
---

## What's changing

Makers can add a Dataverse custom API to a generative page. In the page designer they choose **Add** then **Custom API**, select a prepared API from the environment, and describe in the prompt when the page should call it, which values to pass and how to use the response. For example, an Approve button that calls an `ApproveOrder` API.

Global and table-bound actions and functions are supported. When a page is embedded on a form, the agent can use the current record as input for a table-bound API. Custom APIs using the EntityCollection binding type or Entity parameters are not supported.

The roadmap gives a preview from October 2026 and general availability in December 2026 (generative page version 307), in model-driven apps in Worldwide, GCC and GCC High.

## Why it matters

This moves generative pages from displaying data to triggering business operations. Service owners should treat it as a path by which AI-generated front-end code reaches existing server-side logic, so the quality of the custom API and its security role checks matter more.

It also encourages teams to expose approval or pricing logic as custom APIs, which increases the number of callable operations in an environment.

## Risk assessment

**Data exposure**
- Custom APIs run in the context of the signed-in user and are subject to Dataverse security, so existing roles continue to apply.

**Security & identity**
- The generated React code decides when to call the API; Learn says the maker remains responsible for validating generated code.

**Autonomy & actions**
- Pages can call operations that update records or approve items, so a mistaken prompt could wire an action to the wrong trigger.

**Change & support**
- Preview feature, not meant for production use. Generated code and plug-ins both need ALM and testing.

## Cost and licensing

Learn states that the generative pages maker experience does not need additional AI or message credits. Plug-in development, testing and any Dataverse API request consumption follow existing licensing. Anything specific to custom API calls from generative pages is not yet published.

## Scope

Model-driven apps only. Worldwide, GCC and GCC High per the roadmap. In-browser authoring is limited to environments in the United States, Great Britain, Australia or Singapore; AI code generation tools are available more widely on public clouds.

## Governance guidance

### Before rollout
- [ ] Inventory custom APIs and confirm each enforces its own authorisation checks.
- [ ] Restrict who may create custom APIs and plug-ins in production.
- [ ] Decide whether generative pages that call custom APIs need a code review step.

### At rollout
- [ ] Test pages in a development environment with representative security roles.
- [ ] Review generated code before publishing.

### After rollout
- [ ] Monitor custom API usage and failures.
- [ ] Review pages that call state-changing APIs when the API changes.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Copilot preview features in Power Apps</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Settings › Tenant settings › Copilot in Power Apps (preview) <a href="https://learn.microsoft.com/power-apps/maker/canvas-apps/ai-overview#enable-or-disable-copilot-features" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Application Insights telemetry for the pages</strong><br><small>Environment</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Data export › App Insights › New data export <a href="https://learn.microsoft.com/power-platform/admin/set-up-export-application-insights#create-an-export-package" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Switch specific to custom APIs in generative pages</strong><br><small>Environment</small><br><small class="controls__note">Custom APIs run as the signed-in user and are governed by Dataverse security roles.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Governance sits in Dataverse security: who may create plug-ins and custom APIs, and which roles can execute them. The [prerequisites](https://learn.microsoft.com/power-apps/maker/model-driven-apps/generative-pages#prerequisites) note that custom APIs are subject to Dataverse security and run in the user's context, so a page cannot escalate beyond what the user already holds. Generative pages are solution-aware, so the usual ALM review applies before promotion.

## Open questions

- Will an admin setting be added to disable custom API use in generative pages?
- Which limitations (EntityCollection and Entity parameters) will be lifted at general availability?
- How will custom API calls appear in auditing?

<!-- rationale
risk: Medium. A generated page can invoke server-side logic that changes data, although custom APIs run as the signed-in user and are subject to Dataverse security.
cost: Low. Learn says the generative pages maker experience needs no extra AI or message credits; custom API plug-in development is the main effort.
impact: Low. It affects makers and developers building model-driven apps; end users see only the resulting page.
-->

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] front matter: licensing.notes; Cost and licensing / licensing: Existing Power Apps and Dataverse licensing requirements apply to the model-driven app. | Found: Model-driven apps use Dataverse and are premium apps by default. Every user who runs a model-driven app needs a license that provides Power Apps premium use rights. | Fix: Cite this licensing FAQ and replace the vague reference to standard licensing with: 'Users running the model-driven app need a licence providing Power Apps premium use rights.' Keep this separate from the maker-experience credit statement. | Source: https://learn.microsoft.com/power-platform/admin/powerapps-licensing-faq#licensing-compliance-for-power-apps
- [unsupported, blocker] front matter: licensing.model / licensing: The custom API capability's licensing model is included. | Found: Searched: generative pages custom API licensing Power Apps Dataverse API requests AI message credits; "generative pages" "licensing" "custom APIs". Opened generative-pages and read Power Apps licensing FAQ excerpts; no feature-specific inclusion statement. | Fix: Set licensing.model to 'unknown'. Retain the documented no-additional-AI-or-message-credits statement specifically for the maker experience and the separate baseline model-driven app licence requirement; neither establishes custom API runtime licensing.
- [supported, minor] Cost and licensing / licensing: Dataverse API request consumption remains subject to existing request entitlements. | Found: **Power Apps**: All API requests to connectors and Microsoft Dataverse. | Fix: Add https://learn.microsoft.com/power-platform/admin/api-request-limits-allocations to sources and cite it for request entitlements. Describe plug-in development and testing separately as implementation effort, not as a distinct published licensing rule. | Source: https://learn.microsoft.com/power-platform/admin/api-request-limits-allocations
- [unsupported, blocker] front matter: defaultState / default: Nobody can use this capability until an administrator enables or configures it. | Found: Searched: "generative pages" "disable" "custom API"; "generative pages" "Copilot" "disable" admin. Opened generative-pages, ai-overview and list-tenantsettings; no feature-specific administrator opt-in prerequisite is stated. | Fix: Replace defaultState 'admin-opt-in' with 'user-opt-in': the feature documentation describes makers choosing Add > Custom API, and targeted searches found no separate administrator enablement switch. Do not treat preparing the API as an administrator availability gate.
- [supported, minor] controls[0].ui; Governance controls: first table row / admin-path: The cited Copilot overview gives Power Platform admin center > Settings > Tenant settings > Copilot in Power Apps (preview). | Found: In the navigation pane, select **Settings** to open the **Tenant settings** page.
3. Select **Copilot in Power Apps (preview)**, and then set the toggle to **Off**. | Fix: Acknowledge the navigation difference in https://learn.microsoft.com/power-platform/admin/tenant-settings, which gives Manage > Tenant settings, or Settings gear > Power Platform settings. Cite both and provide the newer documented route to the same setting. | Source: https://learn.microsoft.com/power-apps/maker/canvas-apps/ai-overview#enable-or-disable-copilot-features
- [unsupported, blocker] controls[0]; Governance controls: first table row / applicability: The Copilot preview-features tenant switch is a confirmed governance control for custom API use in generative pages. | Found: Searched: generative pages custom API enable disable admin setting Copilot preview PowerShell tenant settings; "generative pages" "Copilot" "disable" admin. Opened generative-pages and ai-overview; neither explicitly maps this switch to custom API support. | Fix: Add controls[0].note and the matching table note: 'General maker Copilot preview control; Microsoft has not confirmed that it disables custom API use in generative pages or calls from published pages.' Do not present it as a feature-specific execution control.
- [contradicted, blocker] controls[1]; Governance controls: second table row / applicability: Application Insights telemetry is presented as an environment control without a Managed Environments prerequisite. | Found: This feature is turned on and supported for managed environments only. | Fix: Add a row note stating that generative-page telemetry is preview and requires a Managed Environment meeting Application Insights export prerequisites. Mention the Azure Application Insights resource and the required tenant-level and environment-level administrator permissions from the cited prerequisites. | Source: https://learn.microsoft.com/power-platform/admin/set-up-export-application-insights#create-an-export-package
- [contradicted, blocker] Governance controls: closing paragraph / role: Calling custom APIs as the signed-in user guarantees that a page cannot cause operations beyond the permissions the user already holds. | Found: You can also provide the [SystemUser.SystemUserId](reference/entities/systemuser#BKMK_SystemUserId) from any valid user account. This will work as long as that user has the permissions to perform the operations in the plug-in. | Fix: Remove 'so a page cannot escalate beyond what the user already holds'. Retain the feature page's exact statement about signed-in context and Dataverse security, and add that administrators must review the custom API plug-in's execution identity and authorisation checks because plug-in code can impersonate another user. | Source: https://learn.microsoft.com/power-apps/developer/data-platform/impersonate-a-user
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The checklist calls for restricting API and plug-in creation and checking authorisation, but the controls table contains no corresponding access-control row. | Found: Restrict who may create custom APIs and plug-ins in production. | Table rows: Copilot preview features in Power Apps; Application Insights telemetry for the pages; Switch specific to custom APIs in generative pages. | Fix: Add a Dataverse custom API authorisation and creation-permissions row. Cite https://learn.microsoft.com/power-apps/developer/data-platform/custom-api for ExecutePrivilegeName and identify creation permissions only after verifying their role documentation; do not substitute the missing feature switch for these controls.
-->
