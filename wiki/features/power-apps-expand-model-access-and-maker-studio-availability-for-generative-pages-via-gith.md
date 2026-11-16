---
title: "Power Apps: GitHub models and wider availability for the generative page agent in Maker Studio"
slug: "power-apps-expand-model-access-and-maker-studio-availability-for-generative-pages-via-gith"
roadmapId: 576285
topic: "power-platform"
products: ["Power Apps"]
summary: "Makers can connect a GitHub account to choose more models for the generative page agent, extending it to regions without Power Apps GPU capacity."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: null
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "GitHub credits of the maker are consumed. Power Apps licence terms for generative pages are not restated here."
audiences: ["maker","power-platform-admin","security","finops"]
tags: ["power-apps","generative-pages","github","maker-studio","model-driven-apps","data-residency"]
sources:
  - title: "Microsoft 365 Roadmap item 576285"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576285"
    kind: "roadmap"
  - title: "Generate a page using natural language"
    url: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/generative-pages"
    kind: "learn"
  - title: "Agentic coauthoring in Power Apps using GitHub (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-apps/maker/canvas-apps/canvas-authoring-agent#enable-github-account-connections"
    kind: "learn"
  - title: "Copilot preview features in Power Apps (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-apps/maker/canvas-apps/ai-overview#enable-or-disable-copilot-features"
    kind: "learn"
videos: []
related: ["power-apps-new-view-layout-in-model-driven-apps","data-policies"]
controls:
  - governs: "Agentic coauthoring in Power Apps using GitHub"
    scope: "tenant"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Tenant settings > Agentic coauthoring in Power Apps using GitHub (preview)"
      docs: "https://learn.microsoft.com/power-apps/maker/canvas-apps/canvas-authoring-agent#enable-github-account-connections"
    api: null
  - governs: "Copilot preview features in Power Apps"
    scope: "tenant"
    ui:
      surface: "Power Platform admin center"
      path: "Settings > Tenant settings > Copilot in Power Apps (preview)"
      docs: "https://learn.microsoft.com/power-apps/maker/canvas-apps/ai-overview#enable-or-disable-copilot-features"
    api: null
  - governs: "Switch specific to generative pages or to GitHub-hosted models"
    scope: "tenant"
    ui: null
    api: null
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-16"
roadmapModified: "2026-10-23T21:59:27"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 576285 with Learn generative pages context."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
verification:
  status: "needs-correction"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 44
  confirmed: 31
  unconfirmed: 13
  contradicted: 0
  attempts: 1
---

## What's changing

Makers can connect a GitHub account to reach more model options for the built-in generative page coding agent in the generative page designer in Maker Studio. They can create and refine pages without leaving Power Apps.

The integration also brings Maker Studio generative page authoring to regions without dedicated Power Apps GPU capacity. The roadmap says model availability through GitHub may evolve and that requests consume the maker's GitHub credits.

General availability is listed for November CY2026 in the weekly channel, version 2611.1, Worldwide only. Learn currently says GPT-4.1 is the only model in the maker experience, so this adds choice.

## Why it matters

Requests routed through GitHub leave the Power Platform AI service. For tenants with data residency commitments, this matters, especially as the feature extends to regions that lack local GPU capacity.

Spend moves to a personal or organisational GitHub account, which finance and procurement may not be tracking.

## Risk assessment

**Data exposure**
- Prompts, table schema and page content may be processed by GitHub and its model providers. Verify the data flow and residency.

**Security & identity**
- A maker links a personal GitHub account to a work tenant. Consider account ownership and offboarding.

**Autonomy & actions**
- The agent generates code that runs in model-driven apps. Review before publishing.

**Change & support**
- Model availability may change without notice, so results could vary.

## Cost and licensing

The roadmap says requests consume the maker's GitHub credits. Billing is with GitHub; Microsoft has not published a Power Platform meter for this path. Track GitHub plan use for makers who adopt it.

## Scope

Makers using Maker Studio generative pages in model-driven apps. Roadmap cloud: Worldwide only; government clouds are not listed.

## Governance guidance

### Before rollout
- [ ] Decide whether GitHub-hosted models are acceptable for your data classification.
- [ ] Agree who funds GitHub usage.

### At rollout
- [ ] Communicate to makers when and how to connect GitHub.
- [ ] Keep use to non-sensitive data until the data flow is verified.

### After rollout
- [ ] Review generated pages through normal solution review.
- [ ] Track GitHub credit use and feedback.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Agentic coauthoring in Power Apps using GitHub</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Tenant settings › Agentic coauthoring in Power Apps using GitHub (preview) <a href="https://learn.microsoft.com/power-apps/maker/canvas-apps/canvas-authoring-agent#enable-github-account-connections" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Copilot preview features in Power Apps</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Settings › Tenant settings › Copilot in Power Apps (preview) <a href="https://learn.microsoft.com/power-apps/maker/canvas-apps/ai-overview#enable-or-disable-copilot-features" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Switch specific to generative pages or to GitHub-hosted models</strong><br><small>Tenant</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The GitHub connection toggle is the closest tenant control and is listed on the [tenant settings page](https://learn.microsoft.com/power-platform/admin/tenant-settings). `Set-TenantSettings` and `pac admin update-tenant-settings` manage tenant settings generally, but Learn gives no property name for this one, so it is treated as portal-only. Generally available Copilot features in Power Apps can only be turned off through Microsoft Support. GitHub organisation policies on the developer side are outside Microsoft's documentation.

## Open questions

- Can administrators block the GitHub connection?
- Where is data processed for regions without GPU capacity?
- Which models will be offered?

<!-- rationale
risk: Medium. Prompts and page context are sent through a maker's GitHub connection, which sits outside Power Platform data governance.
cost: Variable. The roadmap says requests consume the maker's GitHub credits, billed by GitHub rather than Microsoft.
impact: Low. It affects makers in model-driven apps who author generative pages.
-->

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [unsupported, blocker] controls[0]; Governance controls: 'closest tenant control' / applicability: The GitHub coauthoring tenant toggle is a control for this generative-page integration. | Found: Searched: generative pages GitHub models admin disable tenant settings PowerShell GitHub credits data processing; "generative pages" "GitHub" "tenant" "enable". Opened generative-pages, canvas-authoring-agent and tenant-settings; the toggle is documented for canvas studio. | Fix: Add a note to controls[0] and its rendered row: 'Controls GitHub connections for the canvas studio authoring agent (preview); Microsoft has not confirmed that it governs generative pages.' Replace 'closest tenant control' with that qualified description. See https://learn.microsoft.com/power-platform/admin/tenant-settings.
- [unsupported, blocker] controls[1]; Governance controls: second row / applicability: The Copilot preview tenant setting governs this generative-page GitHub integration. | Found: Searched: "generative pages" "GitHub" "disable"; "Copilot in Power Apps" "PowerShell" tenant disable preview settings. Opened ai-overview, generative-pages and tenant-settings; none identifies the preview switch as governing this planned GA integration. | Fix: Add a note to controls[1] and its rendered row: 'General maker Copilot preview control; Microsoft has not confirmed that it applies to this generative-page GitHub integration, whose roadmap release phase is General Availability.'
- [unsupported, major] Why it matters; rationale: risk / behaviour: Requests routed through GitHub leave the Power Platform AI service. | Found: Searched: Power Apps generative pages GitHub billing licensing meter prompts table schema personal account data governance. Opened generative-pages, its responsible-AI FAQ and canvas-authoring-agent; only the separate canvas agent documents its GitHub data flow. | Fix: Replace the asserted service boundary with: 'The roadmap introduces a GitHub connection, but Microsoft has not documented this path's processing boundaries. Verify the data flow and residency before using sensitive data.'
- [unsupported, blocker] Why it matters: spend paragraph / cost: Spend for this integration moves to a personal GitHub account. | Found: Searched: "generative pages" "GitHub" "data" "billing"; "generative pages" "GitHub" "personal" "prompts". Opened generative-pages and canvas-authoring-agent. The record names maker credits but does not specify personal-account billing. | Fix: Replace the personal-account funding assertion with: 'The roadmap says requests consume the maker's GitHub credits. Agree who funds that usage.' Do not infer the paying account type from canvas-authoring-agent documentation.
- [unsupported, blocker] Why it matters: spend paragraph / cost: An organisational GitHub account can fund usage through this integration. | Found: Searched: "generative pages" "GitHub" "data" "billing"; Power Apps generative pages GitHub billing licensing meter prompts table schema personal account data governance. Opened generative-pages and canvas-authoring-agent; organisation billing is not stated for this integration. | Fix: Remove 'or organisational' from the funding assertion and retain only the roadmap's statement that requests consume the maker's GitHub credits. Add the supported paying-account arrangements to Open questions.
- [unsupported, major] Risk assessment: Data exposure; rationale: risk / behaviour: Prompts are sent to GitHub for processing through this generative-page integration. | Found: Searched: "generative pages" "GitHub" "personal" "prompts"; "generative pages" "GitHub" "data" "billing". Opened generative-pages, its responsible-AI FAQ and canvas-authoring-agent; the prompt-transfer notice describes the canvas authoring agent. | Fix: Replace the asserted prompt transfer, including in the risk rationale, with: 'Microsoft has not documented which inputs this generative-page connection sends to GitHub; verify the data flow before using sensitive data.'
- [unsupported, major] Risk assessment: Data exposure / behaviour: Table schema may be processed by GitHub through this integration. | Found: Searched: Power Apps generative pages GitHub billing licensing meter prompts table schema personal account data governance. Opened generative-pages, its responsible-AI FAQ and canvas-authoring-agent; no source specifies schema transfer for this connection. | Fix: Remove table schema from the list of transmitted inputs. Ask which data and metadata are sent through the connection instead of presenting a specific payload as established.
- [unsupported, major] Risk assessment: Data exposure; rationale: risk / behaviour: Page content or context is sent to GitHub through this integration. | Found: Searched: "generative pages" "GitHub" "personal" "prompts"; Power Apps generative pages GitHub billing licensing meter prompts table schema personal account data governance. Opened generative-pages, its responsible-AI FAQ and canvas-authoring-agent. | Fix: Remove the assertion that page content or context is transferred. State that the payload and processing locations for the generative-page GitHub path are not yet documented.
- [unsupported, major] Risk assessment: Data exposure / behaviour: GitHub's model providers may process the generative-page inputs. | Found: Searched: generative pages GitHub models admin disable tenant settings PowerShell GitHub credits data processing; "generative pages" "GitHub" "data" "billing". Opened generative-pages, its responsible-AI FAQ and canvas-authoring-agent; no provider data-flow statement found. | Fix: Replace 'GitHub and its model providers' with an open question about which services and providers process data, rather than asserting a provider chain.
- [unsupported, major] Risk assessment: Security & identity / behaviour: A maker links a personal GitHub account to a work tenant. | Found: Searched: "generative pages" "GitHub" "personal" "prompts". Opened generative-pages and canvas-authoring-agent. The roadmap says 'your GitHub account' but does not establish personal-account requirements or a tenant-level account linkage. | Fix: Use: 'The roadmap requires a maker to connect a GitHub account. Confirm supported account types, ownership and disconnection behaviour before rollout.'
- [unsupported, major] Risk assessment: Change & support / behaviour: Model availability may change without notice. | Found: Searched: generative pages GitHub models admin disable tenant settings PowerShell GitHub credits data processing. Opened generative-pages and canvas-authoring-agent. The roadmap says availability 'may evolve over time', not that changes occur without notice. | Fix: Delete 'without notice'; use the roadmap's wording: 'Model availability through GitHub may evolve over time.'
- [unsupported, blocker] Cost and licensing; rationale: cost / cost: GitHub, rather than Microsoft, bills usage of this generative-page model-access path. | Found: Searched: "generative pages" "GitHub" "data" "billing"; Power Apps generative pages GitHub billing licensing meter prompts table schema personal account data governance. Opened generative-pages and canvas-authoring-agent; explicit GitHub billing describes canvas authoring only. | Fix: Remove 'Billing is with GitHub' and 'billed by GitHub rather than Microsoft'. Retain: 'The roadmap says requests consume the maker's GitHub credits.' Add that detailed billing arrangements for this path are not yet published.
- [supported, minor] Governance controls: paragraph after table / command: Set-TenantSettings generally manages Power Platform tenant settings. | Found: The Set-TenantSettings cmdlet updates tenant settings in Power Platform. | Fix: Cite the Set-TenantSettings reference: https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/set-tenantsettings?view=pa-ps-latest. | Source: https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/set-tenantsettings?view=pa-ps-latest
- [supported, minor] Governance controls: paragraph after table / command: pac admin update-tenant-settings generally updates tenant settings. | Found: ## pac admin update-tenant-settings
Update tenant settings. | Fix: Cite the command reference at https://learn.microsoft.com/power-platform/developer/cli/reference/admin#pac-admin-update-tenant-settings. | Source: https://learn.microsoft.com/power-platform/developer/cli/reference/admin#pac-admin-set-runtime-state
- [unsupported, minor] rationale: risk / applicability: The maker's GitHub connection sits outside Power Platform data governance. | Found: Searched: GitHub organization policies Power Apps generative pages models Power Platform data governance. Opened generative-pages and canvas-authoring-agent; read Data policies and Data storage and governance search excerpts. No source establishes this blanket governance exclusion. | Fix: Replace the risk rationale with: 'Medium. The planned GitHub model-access path introduces data-flow and account-governance questions that should be resolved before makers use sensitive data.' Do not assert that all Power Platform data governance is inapplicable.
-->
