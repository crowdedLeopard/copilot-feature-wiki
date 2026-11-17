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
  - title: "Tenant settings"
    url: "https://learn.microsoft.com/power-platform/admin/tenant-settings"
    kind: "learn"
  - title: "Set-TenantSettings"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/set-tenantsettings?view=pa-ps-latest"
    kind: "learn"
  - title: "pac admin"
    url: "https://learn.microsoft.com/power-platform/developer/cli/reference/admin#pac-admin-update-tenant-settings"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Agentic coauthoring in Power Apps using GitHub"
    scope: "tenant"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Tenant settings > Agentic coauthoring in Power Apps using GitHub (preview)"
      docs: "https://learn.microsoft.com/power-apps/maker/canvas-apps/canvas-authoring-agent#enable-github-account-connections"
    api: null
    note: "Controls GitHub connections for the canvas studio authoring agent (preview); Microsoft has not confirmed that it governs generative pages."
  - governs: "Copilot preview features in Power Apps"
    scope: "tenant"
    ui:
      surface: "Power Platform admin center"
      path: "Settings > Tenant settings > Copilot in Power Apps (preview)"
      docs: "https://learn.microsoft.com/power-apps/maker/canvas-apps/ai-overview#enable-or-disable-copilot-features"
    api: null
    note: "General maker Copilot preview control; Microsoft has not confirmed that it applies to this generative-page GitHub integration, whose roadmap release phase is General Availability."
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
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
  - date: "2026-11-16"
    note: "Corrected unsupported statements on data flow, billing and account type; added notes that the two tenant controls are not confirmed for generative pages."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 36 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 3
verification:
  status: "held"
  date: "2026-11-17"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 36
  confirmed: 35
  unconfirmed: 0
  contradicted: 1
  attempts: 2
  hash: "4a16fcfeb6f69ad3cc9aaca79b6d7ea1"
---

## What's changing

Makers can connect a GitHub account to reach more model options for the built-in generative page coding agent in the generative page designer in Maker Studio. They can create and refine pages without leaving Power Apps.

The integration also brings Maker Studio generative page authoring to regions without dedicated Power Apps GPU capacity. The roadmap says model availability through GitHub may evolve and that requests consume the maker's GitHub credits.

General availability is listed for November CY2026 in the weekly channel, version 2611.1, Worldwide only. Learn currently says GPT-4.1 is the only model in the maker experience, so this adds choice.

## Why it matters

The roadmap introduces a GitHub connection, but Microsoft has not documented this path's processing boundaries. Verify the data flow and residency before using sensitive data. For tenants with data residency commitments, this matters, especially as the feature extends to regions that lack local GPU capacity.

The roadmap says requests consume the maker's GitHub credits. Agree who funds that usage.

## Risk assessment

**Data exposure**
- Microsoft has not documented which inputs this generative-page connection sends to GitHub, or where they are processed; verify the data flow before using sensitive data.

**Security & identity**
- The roadmap requires a maker to connect a GitHub account. Confirm supported account types, ownership and disconnection behaviour before rollout.

**Autonomy & actions**
- The agent generates code that runs in model-driven apps. Review before publishing.

**Change & support**
- Model availability through GitHub may evolve over time, so results could vary.

## Cost and licensing

The roadmap says requests consume the maker's GitHub credits. Detailed billing arrangements for this path are not yet published, and Microsoft has not published a Power Platform meter for it. Track GitHub plan use for makers who adopt it.

## Scope

Makers using Maker Studio generative pages in model-driven apps. Roadmap cloud: Worldwide only; government clouds are not listed.

## Governance guidance

### Before rollout
- Decide whether GitHub-hosted models are acceptable for your data classification.
- Agree who funds GitHub usage.

### At rollout
- Communicate to makers when and how to connect GitHub.
- Keep use to non-sensitive data until the data flow is verified.

### After rollout
- Review generated pages through normal solution review.
- Track GitHub credit use and feedback.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Agentic coauthoring in Power Apps using GitHub</strong><br><small>Tenant</small><br><small class="controls__note">Controls GitHub connections for the canvas studio authoring agent (preview); Microsoft has not confirmed that it governs generative pages.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Tenant settings › Agentic coauthoring in Power Apps using GitHub (preview) <a href="https://learn.microsoft.com/power-apps/maker/canvas-apps/canvas-authoring-agent#enable-github-account-connections" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Copilot preview features in Power Apps</strong><br><small>Tenant</small><br><small class="controls__note">General maker Copilot preview control; Microsoft has not confirmed that it applies to this generative-page GitHub integration, whose roadmap release phase is General Availability.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Settings › Tenant settings › Copilot in Power Apps (preview) <a href="https://learn.microsoft.com/power-apps/maker/canvas-apps/ai-overview#enable-or-disable-copilot-features" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Switch specific to generative pages or to GitHub-hosted models</strong><br><small>Tenant</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The GitHub connection toggle is documented for the canvas studio authoring agent, and Microsoft has not confirmed that it governs generative pages. It is listed on the [tenant settings page](https://learn.microsoft.com/power-platform/admin/tenant-settings). `Set-TenantSettings` and `pac admin update-tenant-settings` manage tenant settings generally, but Learn gives no property name for this one, so it is treated as portal-only. Generally available Copilot features in Power Apps can only be turned off through Microsoft Support. GitHub organisation policies on the developer side are outside Microsoft's documentation.

## Open questions

- Can administrators block the GitHub connection?
- Where is data processed for regions without GPU capacity, and which services and providers process it?
- Which inputs and metadata does the generative-page connection send to GitHub?
- Which GitHub account arrangements can fund usage, and who is billed?
- Which models will be offered?

<!-- rationale
risk: Medium. The planned GitHub model-access path introduces data-flow and account-governance questions that should be resolved before makers use sensitive data.
cost: Variable. The roadmap says requests consume the maker's GitHub credits; detailed billing arrangements for this path are not yet published.
impact: Low. It affects makers in model-driven apps who author generative pages.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Governance controls: final sentence / absence: GitHub organisation policies on the developer side are outside Microsoft's documentation. | Found: If your GitHub organization has non-Microsoft application access restrictions enabled, an organization administrator must approve the OAuth app used by the Power Apps GitHub connector. | Fix: Remove 'GitHub organisation policies on the developer side are outside Microsoft's documentation.' Microsoft documents GitHub organisation access restrictions for a different Power Apps integration; this does not establish that those restrictions govern generative-page model access. | Source: https://learn.microsoft.com/power-platform/alm/git-integration/connecting-to-github#create-a-github-connection
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] summary; What's changing; Risk assessment: Security & identity / record: Makers can connect a GitHub account to access additional models for the built-in generative page coding agent in Maker Studio. | Found: Connect your GitHub account to access additional model options for the built-in gen page coding agent directly in the generative page designer in Maker Studio. | Fix: Attribute the planned capability explicitly: begin the summary and the opening What's changing paragraph with 'Microsoft plans to let makers connect a GitHub account to access additional models for the built-in generative page coding agent in Maker Studio.' The roadmap still says In development.
- [supported, minor] summary; What's changing; Why it matters / record: The integration extends Maker Studio generative page authoring to regions without dedicated Power Apps GPU capacity. | Found: This integration also brings Maker Studio generative page authoring to regions without dedicated Power Apps GPU capacity. | Fix: Present this extension as planned wherever repeated: 'The roadmap also plans to extend Maker Studio generative page authoring to regions without dedicated Power Apps GPU capacity.' In the summary use 'with a planned extension to regions without Power Apps GPU capacity'.
- [supported, minor] controls[1].ui; Governance controls table / admin-path: The Copilot preview tenant control is under Power Platform admin center > Settings > Tenant settings > Copilot in Power Apps (preview). | Found: In the navigation pane, select Settings to open the Tenant settings page. 3. Select Copilot in Power Apps (preview), and then set the toggle to Off. | Fix: Keep the cited path, but add: 'The tenant-settings reference gives a different route to the same page: Manage > Tenant settings (https://learn.microsoft.com/power-platform/admin/tenant-settings).' | Source: https://learn.microsoft.com/power-apps/maker/canvas-apps/ai-overview#enable-or-disable-copilot-features
-->
