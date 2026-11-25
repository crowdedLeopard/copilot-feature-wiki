---
title: "Power Apps: modern responsive template for canvas apps created from SharePoint lists"
slug: "power-apps-start-sharepoint-connected-canvas-apps-with-a-modern-responsive-template-previe"
roadmapId: 580458
topic: "power-platform"
products: ["Power Apps"]
summary: "Power Apps is updating the template it generates when a maker starts a canvas app from a SharePoint or Microsoft Lists list. It is a maker-side change; Microsoft documents no admin switch for it at the time of writing."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "February CY2027"
previewDate: "November CY2026"
risk: "low"
cost: "variable"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Microsoft has not published template-specific licensing terms. General Power Apps rules apply: building canvas apps does not require a licence, while running apps requires appropriate entitlements."
audiences: ["power-platform-admin","maker","service-owner"]
tags: ["power-apps","canvas-apps","sharepoint","modern-controls","connectors","data-policies"]
sources:
  - title: "Microsoft 365 Roadmap 580458"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=580458"
    kind: "roadmap"
  - title: "Create a canvas app with data from a list"
    url: "https://learn.microsoft.com/power-apps/maker/canvas-apps/app-from-sharepoint"
    kind: "learn"
  - title: "Manage data policies"
    url: "https://learn.microsoft.com/power-platform/admin/prevent-data-loss"
    kind: "learn"
  - title: "New-DlpPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy"
    kind: "learn"
  - title: "Get-DlpPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/get-dlppolicy"
    kind: "learn"
  - title: "Power Apps licensing FAQs"
    url: "https://learn.microsoft.com/power-platform/admin/powerapps-licensing-faq"
    kind: "learn"
  - title: "Licensing overview for Microsoft Power Platform"
    url: "https://learn.microsoft.com/power-platform/admin/pricing-billing-skus"
    kind: "learn"
  - title: "Pay-as-you-go meters"
    url: "https://learn.microsoft.com/power-platform/admin/pay-as-you-go-meters"
    kind: "learn"
  - title: "Share a canvas app with your organization"
    url: "https://learn.microsoft.com/power-apps/maker/canvas-apps/share-app"
    kind: "learn"
videos: []
related: ["data-policies"]
controls:
  - governs: "Which connectors, including SharePoint, apps in an environment may combine"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Settings > Data and privacy > Data policy"
      docs: "https://learn.microsoft.com/power-platform/admin/prevent-data-loss"
    api:
      kind: "powershell"
      call: "New-DlpPolicy -NewPolicy $NewPolicy"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy"
    note: "General control: Microsoft has not confirmed how it applies to this template specifically. Covers connector use, not template availability."
  - governs: "Availability of the updated SharePoint list app template"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no admin switch for the template at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-11-17T19:37:19"
changes:
  - date: "2026-11-18"
    note: "New briefing: the updated SharePoint list canvas app template, with the data policy control that applies and the gaps Microsoft has not yet filled."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 62 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected licensing and cost: general Power Apps licence rules and the per-app pay-as-you-go meter now replace the unpublished-licensing statements; the first pre-rollout step no longer asks for an early-release inventory."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 76 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected the licensing model to mixed and the cost rating to variable, naming the general Power Apps per-app pay-as-you-go meter."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 77 statements confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 70 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 70
  confirmed: 70
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "2132ab1cf81dea90e7a6a666877d1d15"
---

## What's changing

Power Apps is updating the app that is generated when a maker starts a canvas app from a SharePoint or Microsoft Lists list. The roadmap item describes responsive record browsing with grid and list views, plus separate screens for creating and editing records. The result is a standalone canvas app, not a SharePoint customised form embedded in the list.

The Learn page for creating an app from a list describes the same template. It says the updated template uses responsive containers, a modern Data Grid and modern forms, and that the layout a maker gets depends on the template available in their environment. It also describes a responsive single-screen template that combines browsing and record editing on one screen. Microsoft has not stated which template a given environment gets by default or when.

On the records screen a view switch chooses between a grid (columns, with an edit action when exactly one row is selected) and a list (a compact list that opens an item's details). The new-record form uses one column below an app width of 768 and two columns at 768 or greater. The page does not mark itself as preview.

The roadmap record gives the status as In development, a preview date of November CY2026 and a target of February CY2027, for the Worldwide (Standard Multi-Tenant) cloud on the web. It lists both Preview and General Availability as release phases and describes the public preview as being in early-release environments. These dates are Microsoft's targets.

## Why it matters

This is a maker-experience change, so the main effect for a service owner is on the apps makers create next, not on an existing tenant setting. Apps generated from a list through the updated template are standalone canvas apps that connect to the list, so they sit under the same connector and data policy controls as any other canvas app. Microsoft has not stated what happens on arrival, so no source says existing apps change.

The practical decision is whether to tell makers what the template does and does not do. The Learn page says generated counts and collection-backed results don't guarantee that every record in a large list is loaded, and the roadmap says delegation limits still apply. Makers who treat the grid as a complete view of a large list can ship apps that show partial data.

## Risk assessment

**Data exposure**

- The generated app is connected to the list the maker selects, and the Learn page says changes in the app also update the list in SharePoint or Lists. Who can read and write is therefore set by the list and the connection, not by the template.
- Grid view filters a generated collection, while list view filters the connected data source. The two views can show different records for the same filter on a large list, and the page says to check the same filter in both views.

**Security & identity**

- No new identity or permission model is described for the template. Sharing the generated app follows the normal Power Apps sharing steps the Learn page points to.
- Data policies classify the SharePoint connector, and the Learn walkthrough says a Business group assignment stops apps combining it with connectors in the Non-business or Blocked groups. Microsoft has not said the template is treated differently from other canvas apps.

**Autonomy & actions**

- No autonomous or agent behaviour is described. Records are created or edited when a person uses the form screens; the page says the save action calls SubmitForm and that OnFailure shows an error notification.

**Change & support**

- Makers who customise the generated screens can break the app. The page says to preserve the generated DataSource, Item, navigation formulas and form success and failure actions unless they are intentionally replaced.
- The page says generated control and screen names can vary, so older tutorials may not match what a maker sees. Expect help-desk questions from makers following older guidance.
- The template is not a customised list form hosted inside SharePoint. Teams that expect the app to replace an embedded form need the separate SharePoint forms integration guidance the page links to.

## Cost and licensing

Microsoft has not published template-specific licensing terms. General Power Apps rules apply: building canvas apps does not require a licence, while running apps requires appropriate entitlements. Some Microsoft 365 licences include use rights for Microsoft 365 data and standard connectors; premium features and Managed Environments can require additional entitlements. The Learn page for creating an app from a list gives its prerequisite as using SharePoint and Power Apps with a subscription to Microsoft 365 and Microsoft Power Platform, and names no specific plan.

Microsoft documents no template-specific meter. Where Power Apps pay-as-you-go is enabled for the environment, the general Power Apps per-app meter can bill generated canvas apps through the linked Azure subscription at $10 per active user/app/month. Users with Power Apps per-user licences, and users with qualifying Microsoft 365 Power Apps rights running standard-connector apps, are not counted in that meter. The roadmap record states no licensing. Indirect costs are maker time to test generated apps and admin time to brief makers; the Learn page lists the checks to run before sharing an app.

## Scope

The roadmap lists Power Apps as the product, Worldwide (Standard Multi-Tenant) as the cloud and Web as the platform. It lists no other clouds; that is a record fact, not a statement that the template is unavailable elsewhere.

The feature applies to makers who start an app from a SharePoint or Microsoft Lists list, either from Power Apps (Start with data > SharePoint) or from the list (Integrate > Power Apps > Create an app). The roadmap says the public preview is in early-release environments, and the Learn page says the layout depends on the template available in the environment. Microsoft has not stated how or when other environments receive it.

## Governance guidance

### Before rollout

- Identify makers who create apps from SharePoint lists, so the right makers are briefed.
- Check which data policy covers the SharePoint connector in those environments, using the data policy row in the controls table.
- Tell makers that grid and list views can filter differently and that delegation limits still apply to large lists.

### At rollout

- Ask makers to run the Learn page's pre-sharing checks: preview both views at narrow and wide widths, apply a filter in both, and create and edit a test record.
- Remind makers to preserve the generated DataSource, Item, navigation formulas and form success and failure actions when customising.

### After rollout

- Watch the roadmap item and the Learn page for the template's general availability date and for any admin control Microsoft documents.
- Review apps built from the template that read large lists, and check that they do not rely on the grid as a complete record count.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which connectors, including SharePoint, apps in an environment may combine</strong><br><small>Environment</small><br><small class="controls__note">General control: Microsoft has not confirmed how it applies to this template specifically. Covers connector use, not template availability.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Settings › Data and privacy › Data policy <a href="https://learn.microsoft.com/power-platform/admin/prevent-data-loss" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpPolicy -NewPolicy $NewPolicy</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Availability of the updated SharePoint list app template</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no admin switch for the template at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no tenant or environment setting that turns the updated template on or off at the time of writing (November 2026), so the controls that apply are the general Power Platform ones. Data policies are a general control: the Learn walkthrough shows them classifying the SharePoint connector for apps in the environments they cover, and Microsoft has not said they treat this template differently.

The PowerShell cmdlet in the table creates a policy from a policy object; Get-DlpPolicy retrieves existing ones. The Power Platform admin centre path is read from the Manage data policies page.

## Open questions

- Which environments get the updated template by default, and does an administrator have a way to choose between it and the single-screen template? Watch the roadmap item and the Learn page.
- When does the template move from public preview in early-release environments to general availability, given the February CY2027 target?
- Does the template change anything for apps already generated from a list, or only for new ones?

<!-- rationale
risk: Low. The template generates a standalone canvas app over a list the maker can already reach, and the roadmap says connector and formula delegation limits still apply; no admin switch or new data access is described.
cost: Variable. The general Power Apps per-app pay-as-you-go meter can apply where enabled at $10 per active user/app/month; qualifying licensed users are excluded. Microsoft documents no separate template-specific meter.
impact: Low. Makers who start an app from a SharePoint or Lists list will notice the new screens; other users see a change only when a maker publishes an app built from the template.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].note; Governance controls / applicability: Data policies are general connector controls, but the row says Microsoft has not confirmed their application to this template specifically. | Found: After this policy is saved, any Power Apps or Power Automate maker, who is part of the data policy's environment, can create an app or a flow that shares data between SharePoint or Salesforce. | Fix: Replace the row note in front matter and the rendered table with: 'Applies to Power Apps apps in the environments covered by the policy. Governs connector combinations, not template availability.' The cited page states that scope without excluding generated canvas apps. | Source: https://learn.microsoft.com/power-platform/admin/prevent-data-loss
- [supported, minor] controls[0].ui; Governance controls / admin-path: Power Platform admin center > Security > Settings > Data and privacy > Data policy reaches the data policy list. | Found: Select Security in the navigation pane. ... under Settings, select Data and privacy. ... select the Data policy section. Select + New Policy. | Fix: The path reaches the correct list but stops before classification. Extend controls[0].ui.path and the rendered path to 'Security > Settings > Data and privacy > Data policy > + New Policy > Pre-built connectors > SharePoint > Move to Business' for the cited walkthrough. | Source: https://learn.microsoft.com/power-platform/admin/prevent-data-loss
-->
