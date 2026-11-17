---
title: "Power Apps: responsive, multi-column starting layout for SharePoint list forms (preview)"
slug: "power-apps-create-responsive-multi-column-forms-for-sharepoint-lists-preview"
roadmapId: 580457
topic: "power-platform"
products: ["Power Apps"]
summary: "New SharePoint list forms customised with Power Apps get a responsive, multi-column starting layout in eligible commercial tenants. Existing customised forms keep their layout. Makers are affected; admins need no switch."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "February CY2027"
previewDate: "November CY2026"
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published for the new template. Learn's page on SharePoint forms integration lists no licence, and the general integration page lists a subscription to Microsoft 365 and Microsoft Power Platform as the prerequisite."
audiences: ["maker","m365-admin","power-platform-admin"]
tags: ["power-apps","sharepoint","user-experience","power-platform-admin-center","powershell"]
sources:
  - title: "Microsoft 365 Roadmap 580457"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=580457"
    kind: "roadmap"
  - title: "Understand SharePoint forms integration"
    url: "https://learn.microsoft.com/power-apps/maker/canvas-apps/sharepoint-form-integration"
    kind: "learn"
  - title: "Integrate SharePoint Online into Power Apps overview"
    url: "https://learn.microsoft.com/power-apps/maker/canvas-apps/customize-list-form"
    kind: "learn"
  - title: "PowerShell support for Power Apps and Power Automate"
    url: "https://learn.microsoft.com/power-platform/admin/powerapps-powershell"
    kind: "learn"
  - title: "Set-AdminPowerAppSharepointFormEnvironment"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/set-adminpowerappsharepointformenvironment"
    kind: "learn"
  - title: "Manage and govern the default Power Platform environment"
    url: "https://learn.microsoft.com/power-platform/guidance/adoption/manage-default-environment"
    kind: "learn"
  - title: "Manage Power Apps"
    url: "https://learn.microsoft.com/power-platform/admin/admin-manage-apps"
    kind: "learn"
  - title: "Licensing overview for Microsoft Power Platform"
    url: "https://learn.microsoft.com/power-platform/admin/pricing-billing-skus"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Environment where new SharePoint custom forms are saved"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-AdminPowerAppSharepointFormEnvironment -EnvironmentName '<EnvironmentName>'"
      docs: "https://learn.microsoft.com/power-platform/admin/powerapps-powershell"
    note: "General control for SharePoint custom forms; Learn does not say it applies specifically to the new template. Tenant admin only; production environments only. Existing forms are not migrated."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-11-17T19:05:12"
changes:
  - date: "2026-11-17"
    note: "First briefing for this roadmap item: responsive, multi-column starting layout for new SharePoint list forms, in preview from November CY2026."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 52 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-17"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 52
  confirmed: 49
  unconfirmed: 1
  contradicted: 2
  attempts: 1
  hash: "27984f775ac596ed039cd2ff626f7f69"
---

## What's changing

SharePoint Customize forms gets a responsive, multi-column starting layout for new forms. The roadmap item describes this as a public preview in eligible commercial SharePoint tenants, where makers can customise the form while it stays connected to SharePoint list actions. Existing customised forms retain their current layouts.

Learn's page on SharePoint forms integration describes the template. The previous template used a mobile-sized canvas with a single-column form; the new one uses the **Flexible** canvas type and a layout that adapts to the available space. The page says it describes the responsive template "where it's enabled for new form creation" and that existing customised forms are not automatically converted. Makers reach it from a list through **Integrate** > **Power Apps** > **Customize forms**.

The page documents the generated form's column behaviour: one column when the app width is below 640, two from 640 to below 900, and three from 900 upwards. It warns that these breakpoints do not guarantee how many columns fit inside every SharePoint panel, so forms need testing in the host. The generated **SharePointIntegration** actions handle the list's New, View, Edit, Save and Cancel operations, and Learn says to preserve them.

The roadmap record gives status In development, a preview date of November CY2026 and a target of February CY2027 (release phases: General Availability and Preview), for Worldwide (Standard Multi-Tenant) on the web. These are Microsoft's targets. Microsoft has not stated how a tenant becomes eligible, so what follows about arrival is not confirmed.

## Why it matters

For service owners the change is mostly about makers and form users, not data. Anyone who creates a new custom form will start from a different template, so existing how-to notes, screenshots and support scripts that assume a single-column mobile canvas will no longer match. Because Microsoft has not stated what happens on arrival, treat the new template as something that may appear for new forms without a tenant-level choice, and plan communication to makers accordingly.

The lasting effect is on forms that makers edit after creation. Learn warns that replacing the generated formulas with fixed values can stop fields from reflowing, and that the connection to list actions depends on keeping the generated containers and actions. Forms that are poorly adjusted are a support and quality risk, not a security one.

## Risk assessment

**Data exposure**
- No new data source is described: the form's **DataSource** stays bound to the SharePoint list. Learn says any user with at least Read or Restricted View access to the linked list inherits access to the customised form, and users with permissions only to specific items do not have access to it.

**Security & identity**
- No change to identity is described by the roadmap or Learn. Form access follows list permissions, so review who holds Read or Restricted View on lists whose forms makers customise.

**Autonomy & actions**
- No autonomous behaviour is described. The form acts through the generated **SharePointIntegration** actions (**OnNew**, **OnView**, **OnEdit**, **OnSave**, **OnCancel**). Learn advises against imperative functions such as `Launch()` in these properties because they can run in the background when the form is not visible.

**Change & support**
- A maker who replaces the generated column formulas based on **Parent.NumberOfColumns** with fixed values can stop fields from reflowing, according to Learn.
- Column counts depend on app width, not on the SharePoint panel, so a form that looks right in Power Apps Studio may show a different number of columns in the host. Learn says to check the form in its actual host.
- Learn says there is currently no automated method in Power Apps to copy a form from one environment to another, which affects teams that promote forms between environments.

## Cost and licensing

No licence is named for the new layout. Learn's page on SharePoint forms integration lists no prerequisite licence, and no meter is documented for this feature at the time of writing (November 2026). Licensing for the preview and for the later General Availability release is not yet published.

The general page on integrating SharePoint Online into Power Apps lists, as its prerequisite, a subscription to Microsoft 365 and Microsoft Power Platform. Learn's licensing overview says some Microsoft 365 licences include limited Power Apps use rights for scenarios that use Microsoft 365 data and standard connectors, and that standalone licences are needed for premium capabilities. Whether any particular form needs more depends on what the maker adds to it, which this page does not cover.

The indirect cost is maker time: testing each customised form at each layout size, as Learn advises.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant) and the web. It describes the preview as available to eligible commercial SharePoint tenants and does not define eligibility. It does not list GCC, GCC High or DoD; that is a statement about the roadmap item, not a statement that the feature is unavailable there.

The layout applies to new forms. Learn says existing customised forms keep their current layout and are not automatically converted. Makers customise a form from the list with **Integrate** > **Power Apps** > **Customize forms**. Users who fill in the form need at least Read or Restricted View access to the linked list.

Learn's guidance on the default environment says a custom SharePoint form creates a canvas app in the default environment, and that a separate environment can be designated for these forms.

## Governance guidance

### Before rollout
- Ask makers who customise SharePoint list forms to read Learn's page on SharePoint forms integration and to test forms at each layout size.
- Decide whether new SharePoint forms should be saved to a designated production environment instead of the default environment, using the environment row in the controls table.
- Update internal maker guidance that assumes the previous single-column, mobile-sized template.

### At rollout
- Check one new customised form in SharePoint itself, not only in Power Apps Studio, because column counts depend on app width.
- Confirm that makers keep the generated **SharePointIntegration** actions and responsive container formulas when they edit forms.

### After rollout
- Review lists whose forms were customised for Read and Restricted View access, since users with those permissions inherit access to the form.
- Watch the roadmap item and Learn page for the General Availability date and for any licensing statement.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Environment where new SharePoint custom forms are saved</strong><br><small>Tenant</small><br><small class="controls__note">General control for SharePoint custom forms; Learn does not say it applies specifically to the new template. Tenant admin only; production environments only. Existing forms are not migrated.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AdminPowerAppSharepointFormEnvironment -EnvironmentName '&lt;EnvironmentName&gt;'</code> <a href="https://learn.microsoft.com/power-platform/admin/powerapps-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents no Power Platform admin centre path for choosing the SharePoint form environment at the time of writing (November 2026); the cmdlet is the documented route. Only tenant admins can call it. Learn says that changing the designated environment does not migrate existing custom forms, that only a production environment can be designated, and that deleting the designated environment deletes the custom forms in it.

Learn says a user creating a custom form in a designated environment needs the Environment Maker role. Learn also describes a SharePoint custom form maker security role, which needs Dataverse in the environment, so makers can be limited to creating and editing SharePoint custom forms. Neither page says the environment controls apply specifically to the new responsive template; they cover SharePoint custom forms in general. Microsoft has not documented a setting that turns the new starting layout on or off.

## Open questions

- How does a tenant become eligible for the responsive starting layout, and is it on for every new form in an eligible tenant? Watch the Learn page and Message center.
- Which licence do makers and form users need for the new template, if any beyond today's? Watch the Learn page for SharePoint forms integration.
- Is there an admin or maker setting to keep the previous single-column template for new forms?
- What changes at General Availability, targeted for February CY2027, compared with the preview?

<!-- rationale
risk: Low. The roadmap says existing customised forms keep their layout and only new forms get the starting layout; the form stays connected to SharePoint list actions and no new data access is described.
cost: Low. The only cost the sources show is maker time to test forms; Learn's page for this feature names no licence or meter, and licensing for the new template is not yet published.
impact: Medium. Makers who customise list forms see a different starting template, and the people filling in those forms see columns reflow with the available width.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] summary: admins need no switch / default: Administrators need no switch for the new template. | Found: Searched: SharePoint responsive custom forms template licensing default enabled eligibility environment admin switch; responsive SharePoint template disable. Opened sharepoint-form-integration, customize-list-form and powerapps-powershell; no enablement requirement is stated. | Fix: Replace 'Makers are affected; admins need no switch.' with 'Makers are affected; Microsoft has not stated what happens on arrival.' This also agrees with defaultState: unknown.
- [contradicted, blocker] Why it matters: Anyone who creates a new custom form / availability: Anyone who creates a new custom form will start from the different template. | Found: This article describes the responsive template where it's enabled for new form creation. | Fix: Replace 'Anyone who creates a new custom form will start from a different template' with 'Where the responsive template is enabled for new form creation, makers start from a different template'. | Source: https://learn.microsoft.com/power-apps/maker/canvas-apps/sharepoint-form-integration
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: previewDate; What's changing; changes[0].note / record: The preview date is November CY2026. | Found: "previewDate": "November CY2026", "status": "In development" | Fix: In changes[0].note, replace 'in preview from November CY2026' with 'with preview targeted for November CY2026'.
- [contradicted, minor] Governance guidance: After rollout / consistency: The checklist asks readers to review list access permissions, but that control has no controls-table row. | Found: Review lists whose forms were customised for Read and Restricted View access, since users with those permissions inherit access to the form. The only table row is 'Environment where new SharePoint custom forms are saved'. | Fix: Remove the After rollout checklist bullet beginning 'Review lists whose forms were customised for Read and Restricted View access'; it names a permissions control absent from the table. The existing risk section can retain its access explanation.
-->
