---
title: "Power Apps: GitHub-connected models and wider Maker Studio availability for generative pages"
slug: "power-apps-expand-model-access-and-maker-studio-availability-for-generative-pages-via-gith"
roadmapId: 576285
topic: "power-platform"
products: ["Power Apps"]
summary: "Microsoft plans to let makers connect a GitHub account to pick more models for the generative page agent, and to offer Maker Studio authoring in regions without Power Apps GPU capacity. Usage draws on the maker's GitHub credits."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "March CY2027"
previewDate: "December CY2026"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "consumption"
  notes: "The roadmap item states that requests made through the GitHub connection consume the maker's GitHub credits. A rate for this feature is not yet published, and Learn's generative pages page names no Power Apps licence among its prerequisites."
audiences: ["power-platform-admin","maker","security","finops"]
tags: ["power-apps","generative-pages","github","maker-studio","model-driven-apps","data-residency"]
sources:
  - title: "Microsoft 365 Roadmap item 576285"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576285"
    kind: "roadmap"
  - title: "Generate a page using natural language"
    url: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/generative-pages"
    kind: "learn"
  - title: "Build canvas apps with the authoring agent in Power Apps canvas studio (preview)"
    url: "https://learn.microsoft.com/power-apps/maker/canvas-apps/canvas-authoring-agent"
    kind: "learn"
  - title: "Tenant settings"
    url: "https://learn.microsoft.com/power-platform/admin/tenant-settings"
    kind: "learn"
  - title: "List tenant settings (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/list-tenantsettings"
    kind: "learn"
  - title: "Move data across regions for Copilots, AI agents, and generative AI features"
    url: "https://learn.microsoft.com/power-platform/admin/geographical-availability-copilot"
    kind: "learn"
videos: []
related: ["power-apps-use-power-platform-connectors-in-generative-pages","power-apps-use-dataverse-custom-apis-in-generative-pages","power-apps-monitor-generative-pages-with-out-of-the-box-application-insights-telemetry"]
controls:
  - governs: "Whether makers can connect GitHub accounts to the Power Apps authoring agent"
    scope: "tenant"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Tenant settings > Agentic coauthoring in Power Apps using GitHub (preview)"
      docs: "https://learn.microsoft.com/power-platform/admin/tenant-settings"
    api: null
    note: "Documented for the canvas studio authoring agent (preview). Learn does not state that it governs generative pages. Needs the Power Platform Administrator or Dynamics 365 Administrator role."
  - governs: "Switch specific to generative pages or to GitHub-hosted models"
    scope: "tenant"
    ui: null
    api: null
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-20"
roadmapModified: "2026-11-19T23:44:17"
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
  - date: "2026-11-17"
    note: "Corrected: removed the unsupported statement about GitHub organisation policies, attributed the GitHub connection and regional extension to the roadmap's plans, and added the Manage > Tenant settings route."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 38 statements confirmed"
  - date: "2026-11-20"
    note: "Roadmap dates moved to a December CY2026 preview and a March CY2027 target; default state is now Not stated; dropped the Copilot preview tenant-setting row; added Learn's current model and region limits for in-browser authoring."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 48 statements contradicted, 4 unconfirmed; taken offline until corrected"
version: 5
verification:
  status: "held"
  date: "2026-11-20"
  version: 5
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 48
  confirmed: 44
  unconfirmed: 4
  contradicted: 0
  attempts: 1
  hash: "80fbb9fd308ff2a67807a41d38931ad0"
---

## What's changing

Microsoft plans to let makers connect a GitHub account to reach additional model options for the built-in generative page coding agent in the generative page designer in Maker Studio. The roadmap item says makers can create and refine generative pages without leaving the Power Apps authoring experience.

The roadmap item also says the integration brings Maker Studio generative page authoring to regions without dedicated Power Apps GPU capacity. It states that model availability through GitHub may evolve and that requests made through the connection consume the maker's GitHub credits.

Microsoft Learn does not yet describe the GitHub connection for generative pages (November 2026). Its generative pages article describes in-browser authoring as available in the United States, Great Britain, Australia and Singapore, and says GPT-4.1 is currently the only model available in that experience. The same article recommends AI code generation tools such as GitHub Copilot CLI, which it describes as available worldwide on public clouds. What follows about the GitHub connection is therefore the roadmap's description.

The roadmap record gives status In development, a preview target of December CY2026 and a target of March CY2027, with release phases General Availability and Preview. Worldwide (Standard Multi-Tenant) is the only cloud listed. Microsoft has not stated what happens on arrival, including whether an administrator or each maker turns the connection on.

## Why it matters

This would be the first documented route in which a generative page prompt is handled under a maker's own GitHub account rather than only the built-in model. For canvas studio's separate authoring agent, Learn states that prompts and application context are sent to GitHub and processed and stored under the GitHub terms of the maker's account. Learn does not say the same of this feature, so treat that as the thing to confirm, not as established behaviour.

Spend moves out of the Power Platform estate. Learn says the current maker experience for generative pages needs no additional AI or message credits, but the roadmap says the GitHub path consumes GitHub credits. Because Microsoft has not stated the default, plan on the assumption that nothing changes for existing makers until the feature is announced as available, and decide beforehand who may connect an account and who pays.

## Risk assessment

**Data exposure**
- The roadmap says requests go through the maker's GitHub connection. Microsoft has not published which inputs (prompts, selected Dataverse table metadata, attached images) this sends, or where GitHub processes them. Until it does, keep prompts and attachments free of sensitive data.
- For a different feature, the canvas authoring agent, Learn says prompts and application context are processed and stored under the GitHub terms of the maker's account. Do not assume the same terms apply here until Learn says so.

**Security & identity**
- Each maker would sign in with a GitHub account. Whether that is a personal or organisational account, and who owns it when the maker leaves, is not stated for this feature. The canvas authoring agent page shows a Disconnect account option, which is not documented for generative pages.

**Autonomy & actions**
- The agent generates React code that runs inside model-driven apps. Learn says the maker is ultimately responsible for validating the generated code, whichever model produced it.

**Change & support**
- The roadmap says model availability through GitHub may evolve, so output quality and supported models can change without an administrator action. Support teams should expect makers to ask which model produced a page.
- The planned extension to regions without GPU capacity would change where makers can author. Learn currently limits in-browser authoring to four regions.

## Cost and licensing

**Meter.** The roadmap item states that requests made through the GitHub connection consume the maker's GitHub credits. That is GitHub's billing, so the charge would appear on the GitHub account the maker connects, not in the Power Platform admin center. A credit rate for this feature is not yet published.

**Existing experience.** Learn's generative pages FAQ says the maker experience for generative pages does not require any additional AI or message credits. The page lists no Power Apps licence among its prerequisites; its prerequisites are an environment in a supported region and, for preview extras, connections, custom APIs or Application Insights export. The two statements describe the current in-browser experience and the roadmap's planned GitHub path, so report both and do not combine them.

**Caps.** Microsoft Learn documents no spending limit on the GitHub connection for generative pages at the time of writing (November 2026). Any limit would sit on the GitHub account.

**Indirect cost.** Admin time to decide who may connect GitHub accounts, and finance time to track GitHub plan use by makers.

## Scope

**Who.** Makers building generative pages in model-driven apps. The roadmap lists the feature scope as admins or makers and says it applies to model-driven apps.

**Where.** The roadmap lists Worldwide (Standard Multi-Tenant) and the Web platform. Government clouds are not listed on the roadmap item. The record plans availability in regions without dedicated Power Apps GPU capacity; Learn currently lists United States, Great Britain, Australia and Singapore for in-browser authoring.

**When.** The record shows a preview target of December CY2026 and a target of March CY2027, both Microsoft's targets. The release channel is listed as not applicable.

**Prerequisites.** A GitHub account for each maker who uses the connection, per the roadmap. Other prerequisites are not yet documented for this feature.

## Governance guidance

### Before rollout
- Decide whether prompts for generative pages may leave the Power Platform boundary for GitHub, and tell makers what they must not type or attach until Microsoft documents the data flow.
- Agree who funds GitHub credit use and whether makers may connect personal GitHub accounts or only organisational ones.
- Check the Tenant settings page in the Power Platform admin center for **Agentic coauthoring in Power Apps using GitHub (preview)** and record its current state, noting that Learn describes it for the canvas studio authoring agent.

### At rollout
- Watch Message center and the roadmap item for the preview in December CY2026 and for any note on whether a tenant or environment setting applies to generative pages.
- Tell makers how to connect and disconnect GitHub once Microsoft documents the steps, and who to ask when a prompt fails.

### After rollout
- Review generated pages as part of normal solution review before **Save and Publish**, since Learn says the maker must validate the generated code.
- Track GitHub credit use by the makers who adopt the connection and report it to whoever funds it.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether makers can connect GitHub accounts to the Power Apps authoring agent</strong><br><small>Tenant</small><br><small class="controls__note">Documented for the canvas studio authoring agent (preview). Learn does not state that it governs generative pages. Needs the Power Platform Administrator or Dynamics 365 Administrator role.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Tenant settings › Agentic coauthoring in Power Apps using GitHub (preview) <a href="https://learn.microsoft.com/power-platform/admin/tenant-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Switch specific to generative pages or to GitHub-hosted models</strong><br><small>Tenant</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The only tenant switch Learn documents for a GitHub connection is **Agentic coauthoring in Power Apps using GitHub (preview)**, which the Tenant settings page describes as controlling whether makers can connect GitHub accounts to use the authoring agent in Power Apps canvas studio. Microsoft Learn does not state that it governs generative pages, so it is shown as the nearest existing control, not as a control over this feature. The Tenant settings page needs the Power Platform Administrator or Dynamics 365 Administrator role.

Microsoft Learn lists no property for that setting in the tenant settings API reference at the time of writing (November 2026), so the API side is shown as not yet documented. The row for a switch specific to generative pages or to GitHub-hosted models states that no such control is documented yet.

## Open questions

- Can an administrator block the GitHub connection for generative pages, and does the canvas studio setting **Agentic coauthoring in Power Apps using GitHub (preview)** apply? Watch the Tenant settings and generative pages Learn pages.
- Which inputs does the generative page agent send to GitHub, and where are they processed and stored? Watch the generative pages Learn page.
- For regions without Power Apps GPU capacity, which service processes the requests, and does the environment's **Move data across regions** setting apply?
- Which models will be offered through GitHub, and what is the GitHub credit rate for generative page requests?
- Which GitHub account types can fund usage, and what happens to a maker's connection when the account is removed?

<!-- rationale
risk: Medium. The roadmap describes requests running through a maker's GitHub account, and Microsoft has not published what data that path sends or where it is processed; no generative-page-specific admin switch is documented.
cost: Variable. The roadmap item states that requests consume the maker's GitHub credits, which is a GitHub meter, not a Power Platform one; a credit rate for this feature is not yet published.
impact: Low. Makers building generative pages in model-driven apps are the people who would notice; end users of published pages and most admins see no change.
-->

<!-- verifier-findings (2026-11-20, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters / behaviour: This would be the first documented route handling a generative-page prompt under a maker's own GitHub account rather than only the built-in model. | Found: Searched: "generative pages" "GitHub" "first". Read generative-pages and generative-page-external-tools. Neither establishes this historical first; both already describe external authoring using tools such as GitHub Copilot CLI. | Fix: Replace the first sentence of Why it matters with: 'The roadmap plans a GitHub-account connection inside the generative page designer.'
- [unsupported, major] Risk assessment: Change & support / behaviour: The supported models can change without administrator action. | Found: Searched: "generative pages" "GitHub" "connection"; "generative pages" "disable" "GitHub". Read roadmap, generative-pages and Tenant settings. Model availability may evolve, but the update or approval mechanism is not stated. | Fix: Replace 'so output quality and supported models can change without an administrator action' with 'so plan to reassess output quality when available models change'.
- [unsupported, blocker] Cost and licensing: Meter; Why it matters / cost: Charges will appear on the connected GitHub account rather than in the Power Platform admin center. | Found: Searched: Power Apps generative pages GitHub credits pricing rate spending cap billed account; "generative pages" "GitHub" "spending" "billing". Read roadmap, generative-pages and canvas-authoring-agent; billing-account text covers canvas, not this feature. | Fix: Remove 'That is GitHub's billing, so the charge would appear on the GitHub account the maker connects, not in the Power Platform admin center.' Replace 'Spend moves out of the Power Platform estate.' with 'The planned connection introduces GitHub credit consumption.' Retain the roadmap's statement that requests consume the maker's GitHub credits.
- [unsupported, blocker] Cost and licensing: Caps / cost: Any spending limit would sit on the GitHub account. | Found: Searched: "generative pages" "GitHub" "limit"; "generative pages" "GitHub" "spending" "billing". Read roadmap, generative-pages, Tenant settings and canvas-authoring-agent; none establishes where this feature's spending limits would be configured. | Fix: Remove the sentence 'Any limit would sit on the GitHub account.' Keep the preceding, narrower statement that Learn documents no spending limit for the connection.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Risk assessment: Change & support; Scope: Where / availability: The cited generative-pages article lists United States, Great Britain, Australia and Singapore for in-browser authoring. | Found: It's available in the United States, Great Britain, Australia, and Singapore. | Fix: After the four-region statement, add: 'Microsoft's separate responsible-AI FAQ still says generative pages are only available in US environments.' Cite https://learn.microsoft.com/power-apps/maker/common/faq-generative-pages-model-driven#what-are-the-limitations-of-generative-pages--how-can-users-minimize-the-impact-of-generative-page-limitations-when-using-the-system. | Source: https://learn.microsoft.com/power-apps/maker/model-driven-apps/generative-pages
-->
