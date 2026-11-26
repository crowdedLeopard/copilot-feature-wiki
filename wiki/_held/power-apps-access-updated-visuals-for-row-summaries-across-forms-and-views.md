---
title: "Power Apps: refreshed row summary layout and Microsoft-provided summaries on view pages"
slug: "power-apps-access-updated-visuals-for-row-summaries-across-forms-and-views"
roadmapId: 576178
topic: "power-platform"
products: ["Power Apps"]
summary: "Row summaries in model-driven apps get a refreshed layout, and Microsoft-provided Dynamics 365 summaries are planned for view pages. The roadmap lists it as always enabled for users; no admin action is required, but users need telling."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: null
risk: "low"
cost: "variable"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "mixed"
  notes: "Learn: users need a Power Apps premium licence (Power Apps model-driven apps) or a Dynamics 365 enterprise or premium licence (Dynamics 365 apps), or the feature is hidden. Summaries rely on AI Builder, whose credits or Copilot Credits are consumed. No rate specific to row summaries is published."
audiences: ["power-platform-admin","maker","end-user","change-adoption"]
tags: ["power-apps","model-driven-apps","row-summary","copilot","ai","dynamics-365","customer-service","power-platform-admin-center","gcc","gcc-high"]
sources:
  - title: "Microsoft 365 Roadmap item 576178"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576178"
    kind: "roadmap"
  - title: "Use row summaries in model-driven apps"
    url: "https://learn.microsoft.com/power-apps/user/record-summaries"
    kind: "learn"
  - title: "Configure a row summary for a model-driven app"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/configure-form-row-summary"
    kind: "learn"
  - title: "FAQ about row summaries in model-driven apps"
    url: "https://learn.microsoft.com/power-apps/maker/common/faq-record-summaries"
    kind: "learn"
  - title: "Manage feature settings"
    url: "https://learn.microsoft.com/power-platform/admin/settings-features"
    kind: "learn"
  - title: "Track, manage, and scale Copilot adoption in the Power Platform"
    url: "https://learn.microsoft.com/power-platform/admin/copilot/copilot-hub"
    kind: "learn"
  - title: "Overview of licensing (AI Builder)"
    url: "https://learn.microsoft.com/ai-builder/administer-licensing"
    kind: "learn"
  - title: "Enhance row summaries in model-driven apps"
    url: "https://learn.microsoft.com/power-platform/release-plan/2026wave1/power-apps/enhance-row-summaries-model-driven-apps"
    kind: "learn"
  - title: "Whether row summaries show on forms and view pages in an environment (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-apps/user/record-summaries#admin-control"
    kind: "learn"
videos: []
related: ["power-apps-model-driven-apps-use-row-summaries-in-us-government-clouds","power-apps-new-view-layout-in-model-driven-apps","managed-environments","copilot-credits"]
controls:
  - governs: "Whether row summaries show on forms and view pages in an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Copilot > Settings > Power Apps > Summary > Row summaries > environment > Edit setting"
      docs: "https://learn.microsoft.com/power-apps/user/record-summaries#admin-control"
    api: null
    note: "Learn says this setting controls row summaries on both model-driven app main forms and view pages."
  - governs: "Legacy AI insight cards setting for row summaries in an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features > AI insight cards"
      docs: "https://learn.microsoft.com/power-platform/admin/settings-features"
    api: null
    note: "Same capability as Row summaries, to be removed in a future release. Needs the System Administrator security role or equivalent."
  - governs: "Whether a table shows its custom row summary"
    scope: "maker"
    ui:
      surface: "Power Apps (maker)"
      path: "Tables > table > Customizations > Row summary > Show row summary"
      docs: "https://learn.microsoft.com/power-apps/maker/data-platform/configure-form-row-summary"
    api: null
    note: "Maker-side. Hides only custom summaries from this experience, not summaries provided by Microsoft."
  - governs: "Separate switch for the refreshed row summary layout"
    scope: "environment"
    ui: null
    api: null
    note: "The roadmap lists the feature scope as Users (always enabled)."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-10-16T22:00:35"
changes:
  - date: "2026-11-18"
    note: "New briefing: refreshed row summary layout and first-party summaries on view pages, with the Row summaries environment control and licensing from Learn."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 71 statements not yet confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 74 statements not yet confirmed"
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 82 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 82
  confirmed: 79
  unconfirmed: 1
  contradicted: 2
  attempts: 1
  hash: "8ab6893cf7c6f61c004ec148ad45cb7d"
---

## What's changing

The roadmap item describes a refreshed layout for row summaries, the AI-generated overviews of a record that appear in model-driven apps. It names clearer spacing, background and border treatments, status indicators and generation labels, so that a summary stands apart from the form sections around it. The roadmap adds that the treatment takes inspiration from AI-powered experiences in Microsoft 365 apps and lays a foundation for bringing insights from multiple sources into one summary experience over time.

The item also says Microsoft-provided summaries from Dynamics 365 applications, including Customer Service and Sales, become available from model-driven app view pages, so users can read insights while browsing a grid without opening each record. Today, Learn says these out-of-the-box summaries are only accessible from main forms, not views. Custom row summaries already appear in the Insights bar on main forms and through an inline **Summary** action on view pages, which opens the summary in a modal popup.

The roadmap record gives status In development, target October CY2026, release phase General Availability, platform Web, and clouds Worldwide (Standard Multi-Tenant), GCC and GCC High. Its availability table lists release channel Weekly, version 2610.2, applies to Model-driven apps, and feature scope Users (always enabled). The October CY2026 target month has passed while the status is still In development.

Microsoft Learn's row summary pages do not describe the refreshed layout at the time of writing (November 2026), so what this briefing says about the visuals is the roadmap's description. The Learn release plan page linked from the roadmap item is marked archived as of October 2026. For GCC and GCC High availability of row summaries, see [Power Apps: row summaries in model-driven apps reach GCC and GCC High](/features/power-apps-model-driven-apps-use-row-summaries-in-us-government-clouds/).

## Why it matters

This is mostly a visual change, but it reaches users without an administrator doing anything: the roadmap lists the feature scope as Users (always enabled), and Learn documents no separate setting for the refreshed layout. Where Row summaries is on and a table has a summary configured, expect users to notice the new look, so plan a short communication and update any internal screenshots or training.

The view-page change matters more for governance. Learn documents the **Row summaries** environment setting as controlling summaries on both main forms and view pages, and its FAQ says the equivalent **AI insight cards** setting is on by default, so check what is switched on today. If nobody acts, users in environments with summaries configured see the refreshed layout; the roadmap's view-page access for Microsoft-provided summaries is a plan, and Learn does not yet state how it is governed.

## Risk assessment

**Data exposure**
- No new data source is described: the roadmap item changes how summaries look and where first-party summaries appear. Makers choose the columns a custom summary uses in the **Prompt** box, so review those prompts for tables holding sensitive columns before more users meet summaries in a grid.
- Opening a summary from a grid row is quicker than opening each record. Treat view-page access as a wider place where AI-generated record content appears, and test it with a pilot group.

**Security & identity**
- The roadmap describes no change to identity or roles. Learn says the feature is hidden for users without the required licence, and the Copilot settings page describes a preview allow or exclude-list control for model-driven app AI features that lists Row summary.

**Autonomy & actions**
- Learn describes summaries as read-only text that users can copy, rate with thumbs up or down and, on forms, refresh. The roadmap describes no new action for the refreshed layout.

**Change & support**
- Users will see a different layout, including generation labels and status indicators. Brief the service desk. Learn's FAQ still lists limits (no calculations, no relative dates, no links to related records) and advises treating a summary as a starting point, so clear labels do not make the content more reliable.

## Cost and licensing

Learn's row summaries page says the feature requires a licence that depends on the product: a Power Apps premium licence for Power Apps model-driven apps, or a Dynamics 365 enterprise or premium licence for Dynamics 365 model-driven apps. If the user lacks the licence the feature is hidden, and Microsoft says this enforcement rolls out gradually following general availability. It also says usage might be subject to service limits or throttling.

Learn's FAQ says row summaries rely on AI Builder to execute summary prompts. Microsoft's AI Builder licensing page says AI Builder features in Power Apps consume either AI Builder credits or Copilot Credits, and that running prompts in apps consumes these credits. See [Copilot Credits](/concepts/copilot-credits/). The row summary pages publish no credit rate for summaries, and no separate licence or charge for the refreshed layout is published.

Indirect cost is admin and maker time: reviewing prompts, briefing users and updating training material.

## Scope

- **Users:** model-driven app users who hold the licence Learn names for their app, in environments where Row summaries is enabled and the table has a configured summary. Learn says the setting controls forms and view pages.
- **Roles:** a Power Platform administrator enables the environment setting; makers configure the summary per table in Power Apps. The older **AI insight cards** location needs the System Administrator security role or equivalent, per Learn.
- **Clouds and platform:** the roadmap lists Worldwide (Standard Multi-Tenant), GCC and GCC High, platform Web, weekly release channel, version 2610.2.
- **Out of scope for custom summaries:** Learn says the row summary feature isn't available for the Case, Lead and Opportunity tables, which have their own summaries through Customer Service and Sales.

## Governance guidance

### Before rollout
- Check which environments have **Row summaries** on in the Power Platform admin center, and whether the legacy **AI insight cards** setting is also on (the FAQ says it is on by default).
- Ask makers which tables have a configured summary, and review each prompt's columns for sensitive data.
- Confirm that users hold a Power Apps premium or Dynamics 365 enterprise or premium licence, as the feature is hidden without one.
- Brief users and the service desk on the new layout and its generation labels.

### At rollout
- Pilot in one environment once the update arrives, checking both the Insights bar on forms and the **Summary** action on view pages.
- Use the **Show row summary** toggle to hide a table's custom summary where the pilot finds sensitive content.
- If you use Managed Environments, review the preview allow or exclude-list control for model-driven app AI features.

### After rollout
- Collect user feedback on summary accuracy and repeat prompt reviews when columns change.
- Re-read the Learn row summaries pages for a description of the refreshed layout and for how Microsoft-provided summaries on view pages are governed.
- Update runbooks to use the Copilot settings location, since Learn says the **AI insight cards** location will be removed in a future release.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether row summaries show on forms and view pages in an environment</strong><br><small>Environment</small><br><small class="controls__note">Learn says this setting controls row summaries on both model-driven app main forms and view pages.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Copilot › Settings › Power Apps › Summary › Row summaries › environment › Edit setting <a href="https://learn.microsoft.com/power-apps/user/record-summaries#admin-control" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Legacy AI insight cards setting for row summaries in an environment</strong><br><small>Environment</small><br><small class="controls__note">Same capability as Row summaries, to be removed in a future release. Needs the System Administrator security role or equivalent.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › AI insight cards <a href="https://learn.microsoft.com/power-platform/admin/settings-features" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a table shows its custom row summary</strong><br><small>Maker</small><br><small class="controls__note">Maker-side. Hides only custom summaries from this experience, not summaries provided by Microsoft.</small></td><td data-label="Admin UI"><strong>Power Apps (maker)</strong><br>Tables › table › Customizations › Row summary › Show row summary <a href="https://learn.microsoft.com/power-apps/maker/data-platform/configure-form-row-summary" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Separate switch for the refreshed row summary layout</strong><br><small>Environment</small><br><small class="controls__note">The roadmap lists the feature scope as Users (always enabled).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The **Row summaries** setting is the primary environment-level control, and Learn says it covers both main forms and view pages. The **AI insight cards** setting is the same capability in an older location and Learn says it will be removed in a future release. No separate switch for the refreshed layout is documented at the time of writing (November 2026).

The maker toggle hides only custom row summaries configured in the row summary experience. Learn says it does not hide summaries provided by Microsoft, such as Customer Service summaries for case, lead and opportunity; use the Customer Service and Sales pages for those.

The Copilot settings page also describes a preview control that lets admins allow specific users, or all users except an exclusion list, to use AI features in model-driven apps. It applies only to environments activated for [Managed Environments](/concepts/managed-environments/) and lists Row summary among the features that adhere to it. Read the path on that page before relying on it.

## Open questions

- Will Microsoft document the refreshed layout, and any way to turn it off, on the row summaries pages in Learn? The roadmap lists it as Users (always enabled). Watch the row summaries page and the roadmap item.
- Does the **Row summaries** environment setting also govern Microsoft-provided Customer Service and Sales summaries on view pages? Learn states it for row summaries on view pages but does not address those first-party summaries.
- Which credit rate applies when a summary is generated, and does opening Microsoft-provided summaries from a grid consume credits? Watch the AI Builder licensing page.
- When will version 2610.2 reach tenants, given the October CY2026 target has passed with the item still In development? Watch the roadmap item and Message center.

<!-- rationale
risk: Low. The roadmap describes a presentation change and summaries on view pages, with no new data source; the existing Row summaries environment setting is documented as controlling forms and view pages.
cost: Variable. Row summaries rely on AI Builder, which consumes AI Builder credits or Copilot Credits, on top of Power Apps premium or Dynamics 365 licences; no separate charge for the refresh is published.
impact: Medium. Users of model-driven apps that already show row summaries will see a different layout, and the roadmap lists the feature scope as Users (always enabled).
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: Learn describes summaries as read-only text. | Found: Searched: "row summaries" "read-only". Read record-summaries, configure-form-row-summary and faq-record-summaries; they describe generated content and interaction buttons, but do not state that summaries are read-only. | Fix: Remove 'read-only' so the sentence reads: 'Learn describes summaries as text that users can copy, rate with thumbs up or down and, on forms, refresh.'
- [contradicted, blocker] Governance controls: maker toggle paragraph / behaviour: Learn identifies Customer Service as providing the summaries for case, lead and opportunity. | Found: Case: Customer Service summary. Lead and opportunity: Sales summary features. | Fix: Replace 'such as Customer Service summaries for case, lead and opportunity' with 'such as Customer Service summaries for case and Sales summaries for lead and opportunity', following https://learn.microsoft.com/power-apps/maker/data-platform/configure-form-row-summary#show-or-hide-a-row-summary. | Source: https://learn.microsoft.com/power-apps/maker/data-platform/configure-form-row-summary
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance controls table / admin-path: The legacy route is Power Platform admin center > Manage > Environments > environment > Settings > Product > Features > AI insight cards. | Found: In the navigation pane, select Manage. In the Manage pane, select Environments. On the Environments page, select an environment. In the command bar, select Settings. Expand Product, and then select Features. | Fix: The path reaches the correct section but stops before its setting. Use 'Manage > Environments > environment > Settings > Product > Features > AI insight cards > Display AI-generated row summaries on records in model-driven apps.' in controls[1].ui.path and the rendered table, as documented at https://learn.microsoft.com/power-platform/admin/settings-features#ai-insight-cards. | Source: https://learn.microsoft.com/power-platform/admin/settings-features
- [supported, minor] Risk assessment: Change & support / behaviour: The FAQ lists links to related records as unsupported. | Found: Row summaries can't include links to related records. | Fix: After the limitations sentence add: 'The maker guide qualifies related-record links differently: "Hyperlinks to related records might not render as expected in the summary."' The differing source is already cited: https://learn.microsoft.com/power-apps/maker/data-platform/configure-form-row-summary#known-limitations. | Source: https://learn.microsoft.com/power-apps/maker/common/faq-record-summaries
- [contradicted, minor] Governance guidance: At rollout; Governance controls table / consistency: The governance checklist's preview AI allow/exclude-list control is represented in the controls table. | Found: Checklist: 'If you use Managed Environments, review the preview allow or exclude-list control for model-driven app AI features.' Table: Row summaries, AI insight cards, Show row summary and a separate layout switch; no allow/exclude-list row. | Fix: Remove the At rollout bullet 'If you use Managed Environments, review the preview allow or exclude-list control for model-driven app AI features.' Keep the sourced descriptive paragraph in Governance controls; do not add a row.
-->
