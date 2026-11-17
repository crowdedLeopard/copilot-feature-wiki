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
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Learn states the generative pages maker experience needs no additional AI or message credits. Users running a model-driven app need a licence providing Power Apps premium use rights. Licensing specific to custom API calls from generative pages is not yet published."
audiences: ["maker","power-platform-admin","service-owner"]
tags: ["power-apps","generative-pages","dataverse","custom-api","model-driven-apps","plug-ins","gcc","gcc-high"]
sources:
  - title: "Generate a page using natural language"
    url: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/generative-pages"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 576284"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576284"
    kind: "roadmap"
  - title: "Copilot in Power Apps overview"
    url: "https://learn.microsoft.com/power-apps/maker/canvas-apps/ai-overview#enable-or-disable-copilot-features"
    kind: "learn"
  - title: "Export data to Application Insights"
    url: "https://learn.microsoft.com/power-platform/admin/set-up-export-application-insights#create-an-export-package"
    kind: "learn"
  - title: "Power Apps licensing FAQs"
    url: "https://learn.microsoft.com/power-platform/admin/powerapps-licensing-faq#licensing-compliance-for-power-apps"
    kind: "learn"
  - title: "Requests limits and allocations"
    url: "https://learn.microsoft.com/power-platform/admin/api-request-limits-allocations"
    kind: "learn"
  - title: "Tenant settings"
    url: "https://learn.microsoft.com/power-platform/admin/tenant-settings"
    kind: "learn"
  - title: "Impersonate a user"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/impersonate-a-user"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Copilot preview features in Power Apps"
    scope: "tenant"
    ui:
      surface: "Power Platform admin center"
      path: "Settings > Tenant settings > Copilot in Power Apps (preview)"
      docs: "https://learn.microsoft.com/power-apps/maker/canvas-apps/ai-overview#enable-or-disable-copilot-features"
    api: null
    note: "General maker Copilot preview control; Microsoft has not confirmed that it disables custom API use in generative pages or calls from published pages. Tenant settings is also reached via Manage > Tenant settings."
  - governs: "Application Insights telemetry for the pages"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Data export > App Insights > New data export"
      docs: "https://learn.microsoft.com/power-platform/admin/set-up-export-application-insights#create-an-export-package"
    api: null
    note: "Preview for generative pages. Managed Environments only. Needs Power Platform or Dynamics 365 administrator (tenant), environment or system administrator, and Contributor or Owner on the Application Insights resource."
  - governs: "Switch specific to custom APIs in generative pages"
    scope: "environment"
    ui: null
    api: null
    note: "Custom APIs run in the context of the signed-in user and are subject to Dataverse security."
confidence: "high"
created: "2026-11-15"
updated: "2026-11-17"
roadmapModified: "2026-10-21T23:02:10"
changes:
  - date: "2026-11-15"
    note: "New briefing: Dataverse custom APIs in generative pages, in development."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
  - date: "2026-11-17"
    note: "Correction: default state is now user opt-in, licensing model is not yet published, control notes added, and the claim that a page cannot exceed the user's permissions was removed."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 54 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Correction: Application Insights row now notes the Contributor or Owner access requirement, and the first sentence of Why it matters no longer says pages previously only displayed data."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 52 statements not yet confirmed"
version: 4
verification:
  status: "verified-with-gaps"
  date: "2026-11-17"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 52
  confirmed: 52
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "528091da31a66e4f7e6db34a37fd4632"
---

## What's changing

Makers can add a Dataverse custom API to a generative page. In the page designer they choose **Add** then **Custom API**, select a prepared API from the environment, and describe in the prompt when the page should call it, which values to pass and how to use the response. For example, an Approve button that calls an `ApproveOrder` API.

Global and table-bound actions and functions are supported. When a page is embedded on a form, the agent can use the current record as input for a table-bound API. Custom APIs using the EntityCollection binding type or Entity parameters are not supported.

The roadmap gives a preview from October 2026 and general availability in December 2026 (generative page version 307), in model-driven apps in Worldwide, GCC and GCC High.

## Why it matters

This adds an explicit way for generative pages to invoke named server-side business operations. Service owners should treat it as a path by which AI-generated front-end code reaches existing server-side logic, so the quality of the custom API and its security role checks matter more.

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

Learn states that the generative pages maker experience does not need additional AI or message credits. Separately, users running a model-driven app need a licence that provides Power Apps premium use rights, per the [Power Apps licensing FAQ](https://learn.microsoft.com/power-platform/admin/powerapps-licensing-faq#licensing-compliance-for-power-apps). Neither statement establishes licensing for custom API calls from generative pages, which is not yet published.

Microsoft's [requests limits and allocations](https://learn.microsoft.com/power-platform/admin/api-request-limits-allocations) page counts all Power Apps API requests to Dataverse as Power Platform requests. Plug-in development and testing are implementation effort.

## Scope

Model-driven apps only. Worldwide, GCC and GCC High per the roadmap. In-browser authoring is limited to environments in the United States, Great Britain, Australia or Singapore; AI code generation tools are available more widely on public clouds.

## Governance guidance

### Before rollout
- Inventory custom APIs and confirm each enforces its own authorisation checks.
- Decide whether generative pages that call custom APIs need a code review step.

### At rollout
- Test pages in a development environment with representative security roles.
- Review generated code before publishing.

### After rollout
- Monitor custom API usage and failures.
- Review pages that call state-changing APIs when the API changes.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Copilot preview features in Power Apps</strong><br><small>Tenant</small><br><small class="controls__note">General maker Copilot preview control; Microsoft has not confirmed that it disables custom API use in generative pages or calls from published pages. Tenant settings is also reached via Manage &gt; Tenant settings.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Settings › Tenant settings › Copilot in Power Apps (preview) <a href="https://learn.microsoft.com/power-apps/maker/canvas-apps/ai-overview#enable-or-disable-copilot-features" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Application Insights telemetry for the pages</strong><br><small>Environment</small><br><small class="controls__note">Preview for generative pages. Managed Environments only. Needs Power Platform or Dynamics 365 administrator (tenant), environment or system administrator, and Contributor or Owner on the Application Insights resource.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Data export › App Insights › New data export <a href="https://learn.microsoft.com/power-platform/admin/set-up-export-application-insights#create-an-export-package" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Switch specific to custom APIs in generative pages</strong><br><small>Environment</small><br><small class="controls__note">Custom APIs run in the context of the signed-in user and are subject to Dataverse security.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Custom APIs run in the context of the signed-in user and are subject to Dataverse security, per the [prerequisites](https://learn.microsoft.com/power-apps/maker/model-driven-apps/generative-pages#prerequisites) on the feature page. Administrators should still review each custom API plug-in's execution identity and authorisation checks, because Learn documents that plug-in code can run as another user ([impersonate a user](https://learn.microsoft.com/power-apps/developer/data-platform/impersonate-a-user)). Generative pages are solution-aware, so the usual ALM review applies before promotion.

## Open questions

- Will an admin setting be added to disable custom API use in generative pages?
- Which limitations (EntityCollection and Entity parameters) will be lifted at general availability?
- How will custom API calls appear in auditing?

<!-- rationale
risk: Medium. A generated page can invoke server-side logic that changes data, although custom APIs run as the signed-in user and are subject to Dataverse security.
cost: Low. Learn says the generative pages maker experience needs no extra AI or message credits; custom API plug-in development is the main effort. Licensing specific to custom API calls from generative pages is not yet published.
impact: Low. It affects makers and developers building model-driven apps; end users see only the resulting page.
-->

<!-- verifier-findings (2026-11-17, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: targetDate; What's changing / record: The roadmap gives general availability in December 2026. | Found: "targetDate": "December CY2026"; "status": "In development" | Fix: Replace the rollout sentence with: 'The roadmap targets preview for October CY2026 and general availability for December CY2026 (generative page version 307), in model-driven apps in Worldwide, GCC and GCC High.'
-->
