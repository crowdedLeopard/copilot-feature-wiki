---
title: "Microsoft Purview: DLP and auto-labeling policies for non-Microsoft connected apps"
slug: "microsoft-purview-data-loss-prevention-data-security-for-non-microsoft-connected-apps"
roadmapId: 568075
topic: "governance"
products: ["Microsoft Purview"]
summary: "Purview adds dedicated DLP and auto-labeling locations for apps such as Box, Google Workspace and Salesforce, reached through Defender for Cloud Apps connectors. Usage is metered pay-as-you-go. Admins opt in by creating policies."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: "October CY2026"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "prepare"
licensing:
  model: "mixed"
  notes: "MC1449180 says to have the required Enterprise tier Purview licensing and notes billing through the Purview At Rest Protection pay-as-you-go meter. Learn's feature pages point to licensing guidance without naming a plan. The per-unit price is not yet published on the pages read."
audiences: ["security","compliance","finops","m365-admin"]
tags: ["purview","dlp","information-protection","sensitivity-labels","pay-as-you-go","integration","defender-for-cloud-apps","data-governance"]
sources:
  - title: "Microsoft 365 Roadmap 568075"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=568075"
    kind: "roadmap"
  - title: "MC1449180: (Updated) Microsoft Purview: Data Loss Prevention and auto-labeling support for non-Microsoft applications"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1449180"
    kind: "message-center"
  - title: "Use Microsoft Purview data loss prevention policies for non-Microsoft connected apps (preview)"
    url: "https://learn.microsoft.com/purview/dlp-non-microsoft-connected-applications"
    kind: "learn"
  - title: "Use Microsoft Purview sensitivity label policies for non-Microsoft connected apps (preview)"
    url: "https://learn.microsoft.com/purview/information-protection-non-microsoft-connected-apps"
    kind: "learn"
  - title: "Migrate file policies to Microsoft Purview"
    url: "https://learn.microsoft.com/defender-cloud-apps/migrate-file-policies-to-purview"
    kind: "learn"
  - title: "Use data loss prevention policies for non-Microsoft cloud apps"
    url: "https://learn.microsoft.com/purview/dlp-use-policies-non-microsoft-cloud-apps"
    kind: "learn"
  - title: "Learn about Microsoft Purview billing models"
    url: "https://learn.microsoft.com/purview/purview-billing-models"
    kind: "learn"
  - title: "Get started with Microsoft Defender for Cloud Apps"
    url: "https://learn.microsoft.com/defender-cloud-apps/get-started"
    kind: "learn"
  - title: "Instances DLP location for non-Microsoft cloud apps (retiring) (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy?view=exchange-ps"
    kind: "learn"
videos: []
related: ["purview-dlp-block-sensitive-data-in-copilot-web-search"]
controls:
  - governs: "DLP policy for non-Microsoft connected apps"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Data Loss Prevention > Policies > + Create policy > Enterprise applications & devices > Custom > Custom policy > Choose where to apply the policy"
      docs: "https://learn.microsoft.com/purview/dlp-non-microsoft-connected-applications"
    api: null
    note: "Preview page. Custom template and advanced rules only; no simulation mode. Role groups listed under Scope."
  - governs: "Auto-labeling policy for non-Microsoft connected apps"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information protection > Policies > Auto-labeling policies > + Create auto-labeling policy > Automatically apply labels only > Custom > Custom policy > Choose locations where you want to apply the label"
      docs: "https://learn.microsoft.com/purview/information-protection-non-microsoft-connected-apps"
    api: null
    note: "Preview page. Box and Google Workspace only. Labels must be published first."
  - governs: "Defender for Cloud Apps app connectors that Purview relies on"
    scope: "tenant"
    ui:
      surface: "Microsoft Defender portal"
      path: "Settings > Cloud Apps > Connected Apps > App Connectors > + Connect an app"
      docs: "https://learn.microsoft.com/defender-cloud-apps/get-started"
    api: null
    note: "Prerequisite for any policy on these apps. Each app has its own connector guide."
  - governs: "Defender for Cloud Apps file policies that overlap the Purview policies"
    scope: "tenant"
    ui:
      surface: "Microsoft Defender portal"
      path: "Cloud apps > Policies > Policy management > All policies"
      docs: "https://learn.microsoft.com/defender-cloud-apps/migrate-file-policies-to-purview"
    api: null
    note: "Where the migration page opens the file policy list. Retiring 6 January 2027. MC1449180 says to turn off or delete overlapping file policies first."
  - governs: "Instances DLP location for non-Microsoft cloud apps (retiring)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > + Create policy > Custom > Custom policy > Locations > Instances > Edit > Specific instances > + Include instances"
      docs: "https://learn.microsoft.com/purview/dlp-use-policies-non-microsoft-cloud-apps"
    api:
      kind: "powershell"
      call: "New-DlpCompliancePolicy -Name <policy name> -ThirdPartyAppDlpLocation All"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy?view=exchange-ps"
    note: "Today's alternative, not a control over the new dedicated locations. Learn says this location retires on 6 January 2027. Cmdlet needs Compliance Administrator or Compliance Data Administrator."
confidence: "high"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-11-03T00:14:11"
changes:
  - date: "2026-11-17"
    note: "First briefing for this item: covers the dedicated DLP and auto-labeling locations, the pay-as-you-go meter and the 6 January 2027 Defender for Cloud Apps file policy retirement."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 84 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-17"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 84
  confirmed: 80
  unconfirmed: 1
  contradicted: 3
  attempts: 1
  hash: "4839d467c45ff6c0b23833cee35ba27f"
---

## What's changing

Microsoft Purview is adding dedicated policy locations for non-Microsoft apps, so administrators can create Data Loss Prevention (DLP) and auto-labeling policies for them in Purview. The roadmap item says the supported conditions and actions vary by application. Microsoft's notice MC1449180 says the capabilities use Microsoft Defender for Cloud Apps connectors to reach the apps.

Per MC1449180 and Learn, DLP supports Google Workspace, Box, Dropbox, Salesforce, ServiceNow, AWS and Cisco Webex. Auto-labeling supports Google Workspace and Box. The DLP policies detect, monitor and protect sensitive data at rest in these apps. Learn's pages for both capabilities are marked preview and say the apps roll out in phases, so not every app is available in every tenant at the same time.

The roadmap item is In development, with a preview date of October CY2026 and a General Availability target of December CY2026. MC1449180 was updated on 30 October 2026 and gives General Availability for Worldwide beginning in late December 2026 (previously late October). It lists no act-by date and says no action is required before rollout. The roadmap lists Worldwide (Standard Multi-Tenant) only, and the platform as Web.

Separately, Learn says file policies in Defender for Cloud Apps retire on 6 January 2027, and that the **Instances** DLP location is retired on the same date. Policies in Purview and in Defender for Cloud Apps cannot coexist, per Learn, so teams that use file policies today have a migration to plan.

## Why it matters

This extends the same Purview policy framework to data that sits outside Microsoft 365, so one team can govern sensitive files in Box or Google Workspace the way it governs SharePoint. It also adds a consumption meter: MC1449180 says usage is billed through the Purview At Rest Protection pay-as-you-go meter, so a policy scoped to a large repository carries a cost.

Nothing in the sources says existing behaviour changes for tenants that create no policy. The pressure comes from the retirement of Defender for Cloud Apps file policies on 6 January 2027: tenants that rely on them need equivalent Purview policies, and Microsoft says to turn off or delete the overlapping file policy before creating the Purview one.

## Risk assessment

**Data exposure**

- Purview will scan, evaluate and apply policy actions to data stored in the connected services, per the compliance table in MC1449180. Scope each policy to the instances you intend: by default a policy applies to all instances of the selected app, and Learn gives **Exclude instances** and **Specific instances** to narrow it.
- Coverage has gaps. Learn lists encrypted files and PDF files as not currently supported for classification, and says Content explorer is not supported for these apps, so you cannot browse affected content there.

**Security & identity**

- The apps are reached through Defender for Cloud Apps connectors, so whoever manages a connector affects what Purview can see. Learn lists the Purview roles that create these policies (Compliance administrator, Compliance data administrator, Information Protection, Information Protection Admin, Security administrator) and recommends the fewest permissions; Microsoft has not described which account the connector uses beyond the per-app connector guides.

**Autonomy & actions**

- MC1449180 says available actions vary by app and may include notifications, quarantine actions and access controls. Learn says simulation mode is not supported for these policies: the policy mode choices are to turn the policy on immediately or leave it turned off, so test with a narrow instance scope first.
- Learn says policy tips and user overrides are not supported, so people get no in-app warning from these policies.

**Change & support**

- Running a Purview policy and a Defender for Cloud Apps file policy on the same app can cause unexpected enforcement, per MC1449180 and Learn. Sequence the cut-over deliberately.
- Auto-labeling for Box and Google Workspace has a documented limit: a label applied by one auto-labeling policy cannot be replaced by a higher-priority label from another auto-labeling policy.

## Cost and licensing

**Licence.** MC1449180 says to ensure the organisation has the required Enterprise tier Microsoft Purview licensing. Learn's DLP and auto-labeling pages for these apps list permissions as prerequisites and point to the Microsoft 365 Enterprise Plans and security and compliance licensing guidance for licensing, without naming a plan. Learn's migration page lists a Microsoft 365 E5 or Microsoft 365 E5 Compliance licence, or an equivalent standalone Microsoft Purview DLP licence, as a prerequisite for moving file policies to Purview.

**Meter.** MC1449180 says usage is billed through the Microsoft Purview At Rest Protection pay-as-you-go meter, and that at-rest files in non-Microsoft applications are counted at 1,000 files = 1 data asset. It asks administrators to review the pricing and billing implications before enabling these capabilities. Learn's billing models page says pay-as-you-go billing is Azure based, so the Microsoft 365 tenant must be associated with an active Azure subscription, and that an Azure bill is generated at the end of the month.

**Not yet published.** The price per data asset, and any cap or budget control for this meter, are not yet published on the pages read. Learn's billing page does not mention the At Rest Protection meter by name, so confirm the meter on your Azure bill and in the Microsoft Purview pricing page.

**Indirect costs.** Admin time to connect apps, rebuild Defender for Cloud Apps file policies in Purview, and monitor alerts.

## Scope

- **Clouds and platform:** the roadmap lists Worldwide (Standard Multi-Tenant) and the Web platform. Government clouds are not listed on the roadmap item.
- **Apps:** DLP supports Google Workspace, Box, Dropbox, Salesforce, ServiceNow, AWS and Cisco Webex. Auto-labeling supports Google Workspace and Box. The Created date attribute is not available for Dropbox DLP rules, and Created date and Collaborators are not available for auto-labeling rules, per Learn.
- **Prerequisites:** each app must first be connected through a Defender for Cloud Apps app connector. For auto-labeling, the sensitivity labels must already be published.
- **Policy rules:** only the Custom policy template is supported, only advanced DLP rules are supported, administrative units are not supported (scope is Full directory), and non-Microsoft app locations cannot be combined with SharePoint, OneDrive, Exchange, Fabric or Devices in the same DLP policy, per Learn.
- **Roles:** Compliance administrator, Compliance data administrator, Information Protection, Information Protection Admin or Security administrator role group membership, per Learn.
- **Rollout:** a preview on Learn now; MC1449180 gives General Availability beginning in late December 2026. The roadmap's target is December CY2026 and is a plan, not a shipped date.

## Governance guidance

### Before rollout

- Inventory which of the supported apps you use and whether any are connected under **Settings > Cloud Apps > Connected Apps > App Connectors** in the Microsoft Defender portal (row: Defender for Cloud Apps app connectors).
- List existing Defender for Cloud Apps file policies on the same apps and plan to turn off or delete each one before you create the Purview equivalent (row: Defender for Cloud Apps file policies).
- Ask finance to review Purview pay-as-you-go pricing and confirm the tenant is linked to an Azure subscription, then agree who owns the At Rest Protection charge.
- Decide which role group will own these policies and confirm each member holds one of the role groups Learn lists.

### At rollout

- Connect each supported app through a Defender for Cloud Apps connector before creating a policy (row: Defender for Cloud Apps app connectors).
- Create DLP policies with the **Custom** template and advanced rules, scoped to specific instances first (row: DLP policy for non-Microsoft connected apps). Once Microsoft documents it for these locations, add the automation route.
- Create auto-labeling policies for Box or Google Workspace after publishing the labels they use (row: Auto-labeling policy for non-Microsoft connected apps).
- Leave the policy turned off or scope it narrowly at first, because simulation mode is not supported.

### After rollout

- Review activity in Activity explorer and the DLP alerts dashboard, which Learn says support non-Microsoft connected app policies.
- Check the Azure bill for the pay-as-you-go charge and compare it to the number of files in scope.
- Recreate any DLP policy that uses the **Instances** location before 6 January 2027 (row: Instances location, retiring).

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>DLP policy for non-Microsoft connected apps</strong><br><small>Tenant</small><br><small class="controls__note">Preview page. Custom template and advanced rules only; no simulation mode. Role groups listed under Scope.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Data Loss Prevention › Policies › + Create policy › Enterprise applications &amp; devices › Custom › Custom policy › Choose where to apply the policy <a href="https://learn.microsoft.com/purview/dlp-non-microsoft-connected-applications" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Auto-labeling policy for non-Microsoft connected apps</strong><br><small>Tenant</small><br><small class="controls__note">Preview page. Box and Google Workspace only. Labels must be published first.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information protection › Policies › Auto-labeling policies › + Create auto-labeling policy › Automatically apply labels only › Custom › Custom policy › Choose locations where you want to apply the label <a href="https://learn.microsoft.com/purview/information-protection-non-microsoft-connected-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Defender for Cloud Apps app connectors that Purview relies on</strong><br><small>Tenant</small><br><small class="controls__note">Prerequisite for any policy on these apps. Each app has its own connector guide.</small></td><td data-label="Admin UI"><strong>Microsoft Defender portal</strong><br>Settings › Cloud Apps › Connected Apps › App Connectors › + Connect an app <a href="https://learn.microsoft.com/defender-cloud-apps/get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Defender for Cloud Apps file policies that overlap the Purview policies</strong><br><small>Tenant</small><br><small class="controls__note">Where the migration page opens the file policy list. Retiring 6 January 2027. MC1449180 says to turn off or delete overlapping file policies first.</small></td><td data-label="Admin UI"><strong>Microsoft Defender portal</strong><br>Cloud apps › Policies › Policy management › All policies <a href="https://learn.microsoft.com/defender-cloud-apps/migrate-file-policies-to-purview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Instances DLP location for non-Microsoft cloud apps (retiring)</strong><br><small>Tenant</small><br><small class="controls__note">Today's alternative, not a control over the new dedicated locations. Learn says this location retires on 6 January 2027. Cmdlet needs Compliance Administrator or Compliance Data Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › + Create policy › Custom › Custom policy › Locations › Instances › Edit › Specific instances › + Include instances <a href="https://learn.microsoft.com/purview/dlp-use-policies-non-microsoft-cloud-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpCompliancePolicy -Name &lt;policy name&gt; -ThirdPartyAppDlpLocation All</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The Purview portal steps for the dedicated locations are documented on Learn. At the time of writing (November 2026), those pages give no cmdlet, parameter or API for the dedicated DLP or auto-labeling locations. The New-DlpCompliancePolicy reference documents a ThirdPartyAppDlpLocation parameter for non-Microsoft cloud apps and links to the Instances page; it does not say whether that parameter addresses the dedicated app locations, so it is shown only against the retiring Instances row. The New-AutoSensitivityLabelPolicy reference lists no location parameter for these apps.

Microsoft Learn documents no API for managing app connectors or Defender for Cloud Apps file policies on the pages read (November 2026). Microsoft's Graph page for Defender for Cloud Apps covers discovered apps.

The Purview roles that can create these policies are listed under Scope. Creating a Purview policy does not remove a Defender for Cloud Apps file policy; Microsoft says to turn off or delete the file policy first. Activity explorer and DLP alerts are the documented monitoring surfaces; Content explorer is not supported for these apps.

## Open questions

- What is the price per data asset for the At Rest Protection meter, and is there a cap or budget control for it? Watch the Microsoft Purview pricing page and the billing models page.
- Which Enterprise tier Purview licence is required? Learn's feature pages point to licensing guidance without naming a plan.
- Which cmdlet or API will manage the dedicated app locations? Watch the New-DlpCompliancePolicy and New-AutoSensitivityLabelPolicy references.
- Will auto-labeling extend beyond Box and Google Workspace, and will further DLP attributes arrive for each app? Watch MC1449180 and the Learn preview pages.
- Does General Availability in late December 2026 leave enough time before the 6 January 2027 Defender for Cloud Apps file policy retirement? Watch Message center and the migration page.

<!-- rationale
risk: Medium. Policies can act on data in third-party services (the notice lists quarantine and access controls), simulation mode is not supported, and a policy can overlap a Defender for Cloud Apps file policy, which Microsoft says causes unexpected enforcement.
cost: Variable. Microsoft's notice MC1449180 says usage is billed through the Microsoft Purview At Rest Protection pay-as-you-go meter, at 1,000 files = 1 data asset, on top of Enterprise tier Purview licensing.
impact: Low. Administrators who create and run the policies notice it first; the roadmap and notice name no end-user experience, and Learn says policy tips and user overrides are not supported for these apps.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: People receive no in-app warning from these policies. | Found: Searched: Purview non-Microsoft connected apps DLP in-app warning notifications policy tips users. Opened the DLP feature page: it rules out policy tips and user overrides but does not state that every form of in-app warning is absent. | Fix: Remove 'so people get no in-app warning from these policies'; keep the documented statement that policy tips and user overrides are not supported.
- [contradicted, blocker] Cost and licensing: Not yet published; Open questions / absence: No cap or budget control is documented for this Azure-billed meter. | Found: You can configure alerts based on your actual cost or forecasted cost to ensure that your spending is within your organizational spending limit. Notifications are triggered when the budget thresholds are exceeded. Resources aren't affected, and your consumption isn't stopped. | Fix: Replace the budget-control absence with: 'A feature-specific hard cap is not documented. Azure Cost Management supports budgets and alerts for the associated Azure subscription or resource group; these monitor spending but do not stop consumption.' Cite https://learn.microsoft.com/azure/cost-management-billing/costs/tutorial-acm-create-budgets and https://learn.microsoft.com/purview/purview-payg-subscription-based-enablement. Narrow the corresponding Open questions item to the feature-specific hard cap. | Source: https://learn.microsoft.com/azure/cost-management-billing/costs/tutorial-acm-create-budgets
- [contradicted, blocker] controls[1].ui; Governance controls table / admin-path: After Custom policy, the auto-labeling path proceeds directly to Choose locations where you want to apply the label. | Found: On Choose a label to auto-apply, choose Choose a label. On Choose a sensitivity label, select all labels to include in the policy, and then select Add > Next. | Fix: Replace controls[1].ui.path and the rendered path with 'Solutions > Information protection > Policies > Auto-labeling policies > + Create auto-labeling policy > Automatically apply labels only > Custom > Custom policy > Choose a label to auto-apply > Choose a label > Choose a sensitivity label > label > Add > Assign admin units > Full directory > Choose locations where you want to apply the label'. Enter the policy name and description after Custom policy, as the cited procedure instructs. | Source: https://learn.microsoft.com/purview/information-protection-non-microsoft-connected-apps
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Scope; Open questions / record: MC1449180 gives Worldwide General Availability beginning in late December 2026, previously late October. | Found: General Availability (Worldwide): Beginning in late December 2026 (previously late October) and expected to complete in late December 2026 (previously late October) | Fix: Complete the rollout sentence in What's changing: 'MC1449180 was updated on 30 October 2026 and gives General Availability for Worldwide beginning in late December 2026 and expected to complete in late December 2026 (both previously late October).'
- [supported, minor] Why it matters; Governance guidance; controls[3].note; Governance controls / record: Microsoft instructs administrators to turn off or delete overlapping file policies before creating the Purview policy. | Found: Before you create Microsoft Purview policy for any of these non-Microsoft applications, turn off or delete any Microsoft Defender for Cloud Apps file policies for the same non-Microsoft locations. | Fix: Keep the notice's instruction but add: 'Microsoft's sources disagree on sequencing: MC1449180 says to turn off or delete overlapping file policies before creating the Purview policy, while Learn's migration page says to disable them only after validating and turning on Purview policies. Resolve this conflict with Microsoft before cut-over.' Cite https://learn.microsoft.com/defender-cloud-apps/migrate-file-policies-to-purview, which says 'Disable Defender for Cloud Apps policies only after you validate and turn on the Purview policies.'
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The DLP creation path runs from Solutions through Enterprise applications & devices and Custom policy to Choose where to apply the policy. | Found: Go to Solutions > Data Loss Prevention > Policies > + Create policy. | Fix: Include the intervening scope page: 'Solutions > Data Loss Prevention > Policies > + Create policy > Enterprise applications & devices > Custom > Custom policy > Assign admin units > Full directory > Choose where to apply the policy'. Enter the policy name and description after Custom policy, as the cited procedure instructs. | Source: https://learn.microsoft.com/purview/dlp-non-microsoft-connected-applications
- [supported, minor] controls[4].ui; Governance controls table / admin-path: The retiring Instances path runs through Data loss prevention > Policies > + Create policy > Custom > Custom policy > Locations > Instances > Edit > Specific instances > + Include instances. | Found: To select a specific app or instance, select Edit > Specific instances > + Include instances and then the instances (cloud apps) you want to include. | Fix: Include the omitted scope step: 'Data loss prevention > Policies > + Create policy > Custom > Custom policy > Admin units > Locations > Instances > Edit > Specific instances > + Include instances'. Name the policy and add a description after Custom policy, as the cited procedure instructs. | Source: https://learn.microsoft.com/purview/dlp-use-policies-non-microsoft-cloud-apps
- [supported, minor] Governance controls / behaviour: The Defender for Cloud Apps Microsoft Graph documentation covers discovered applications. | Found: Microsoft Defender for Cloud Apps supports a Microsoft Graph API that you can use to work with discovered cloud apps, to customize and automate the Discovered apps page functionality in the Microsoft Defender portal. | Fix: Add https://learn.microsoft.com/defender-cloud-apps/discovered-apps-api-graph to sources for the Graph documentation statement. | Source: https://learn.microsoft.com/defender-cloud-apps/discovered-apps-api-graph
- [contradicted, minor] Governance guidance: After rollout; Governance controls table / consistency: The checklist's instruction to review Activity explorer and the DLP alerts dashboard has corresponding controls-table rows. | Found: Review activity in Activity explorer and the DLP alerts dashboard ... Table rows: DLP policy; Auto-labeling policy; app connectors; overlapping file policies; retiring Instances location. | Fix: The 'Review activity in Activity explorer and the DLP alerts dashboard' checklist step has no corresponding row in the controls table. Remove that checklist bullet; the documented monitoring capabilities can remain in Governance controls prose.
- [supported, minor] controls[2].note; Governance controls table / behaviour: Each app has its own connector guide. | Found: To enable an app connector for the first time, configure an API connection for the specific cloud app you want to connect. For detailed instructions, see the app connector guides for each app. | Fix: Add https://learn.microsoft.com/defender-cloud-apps/enable-instant-visibility-protection-and-governance-actions-for-your-apps to sources for the app-specific connector-guide statement. | Source: https://learn.microsoft.com/defender-cloud-apps/enable-instant-visibility-protection-and-governance-actions-for-your-apps
-->
