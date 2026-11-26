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
targetDate: "March CY2027"
previewDate: "October CY2026"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "prepare"
licensing:
  model: "mixed"
  notes: "MC1449180 says to have the required Enterprise tier Purview licensing and notes billing through the Purview At Rest Protection pay-as-you-go meter. Learn's feature pages point to licensing guidance without naming a plan."
audiences: ["security","compliance","finops","m365-admin"]
tags: ["purview","dlp","information-protection","sensitivity-labels","auto-labeling","pay-as-you-go","integration","defender-for-cloud-apps","data-governance"]
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
  - title: "Microsoft Purview consumption pricing"
    url: "https://azure.microsoft.com/pricing/details/purview/"
    kind: "docs"
  - title: "Get started with Microsoft Defender for Cloud Apps"
    url: "https://learn.microsoft.com/defender-cloud-apps/get-started"
    kind: "learn"
  - title: "Defender for Cloud Apps REST API"
    url: "https://learn.microsoft.com/defender-cloud-apps/api-introduction"
    kind: "learn"
  - title: "New-DlpCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy?view=exchange-ps"
    kind: "learn"
  - title: "New-AutoSensitivityLabelPolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-autosensitivitylabelpolicy?view=exchange-ps"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-loss-prevention-unmanaged-cloud-app-discovery-and-protection-with-m"]
controls:
  - governs: "DLP policy for non-Microsoft connected apps"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Data Loss Prevention > Policies > + Create policy > What info do you want to protect? > Enterprise applications & devices > Custom > Custom policy > Assign admin units > Full directory > Choose where to apply the policy"
      docs: "https://learn.microsoft.com/purview/dlp-non-microsoft-connected-applications"
    api: null
    note: "Preview page. Custom template and advanced rules only; no simulation mode. Role groups listed under Scope."
  - governs: "Auto-labeling policy for non-Microsoft connected apps"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information protection > Policies > Auto-labeling policies > + Create auto-labeling policy > Automatically apply labels only > Custom > Custom policy > Choose a label to auto-apply > Choose a label"
      docs: "https://learn.microsoft.com/purview/information-protection-non-microsoft-connected-apps"
    api: null
    note: "Path continues: Choose a sensitivity label > Add > Assign admin units > Full directory > Choose locations where you want to apply the label. Preview page. Box and Google Workspace only. Labels must be published first."
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
    note: "Where the migration page opens the file policy list. Retiring 6 January 2027. MC1449180 says to turn off or delete overlapping file policies first; the migration page says to disable them only after validating Purview policies."
  - governs: "Instances DLP location for non-Microsoft cloud apps (retiring)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > + Create policy > Custom > Custom policy > Admin units > Locations > Instances > Edit > Specific instances > + Include instances"
      docs: "https://learn.microsoft.com/purview/dlp-use-policies-non-microsoft-cloud-apps"
    api:
      kind: "powershell"
      call: "New-DlpCompliancePolicy -Name <policy name> -ThirdPartyAppDlpLocation All"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy?view=exchange-ps"
    note: "Today's alternative, not a control over the new dedicated locations. Learn says this location retires on 6 January 2027. Cmdlet needs Compliance Administrator or Compliance Data Administrator."
confidence: "high"
created: "2026-11-17"
updated: "2026-11-26"
roadmapModified: "2026-11-19T00:53:06"
changes:
  - date: "2026-11-17"
    note: "First briefing for this item: covers the dedicated DLP and auto-labeling locations, the pay-as-you-go meter and the 6 January 2027 Defender for Cloud Apps file policy retirement."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 84 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Correction: removed the claim that people get no in-app warning; replaced the no-budget-control statement with Azure Cost Management budgets and alerts; completed the DLP, auto-labeling and Instances paths; noted the sequencing conflict on file policies; dropped the Activity explorer checklist step."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 88 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Correction: replaced the auto-labeling path with the full wizard path from the Learn page, and added the alternative connector route to the connectors row note."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 99 statements not yet confirmed"
  - date: "2026-11-18"
    note: "Rollout updated to MC1449180's 18 November 2026 timeline (General Availability from mid-March 2027, previously late December 2026); narrowed the Azure subscription checklist bullet."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 93 statements confirmed"
  - date: "2026-11-19"
    note: "General Availability target moved to March CY2027 on the roadmap, matching MC1449180's mid-March 2027 start; open question on the gap before the 6 January 2027 file policy retirement updated."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 88 statements not yet confirmed"
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 99 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Correction: removed the statement that the At Rest Protection price is not yet published and pointed readers to the Microsoft Purview pricing page; added the What info do you want to protect? step to the DLP wizard path; dropped the label-publishing clause from the At rollout checklist."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 99 statements not yet confirmed"
version: 6
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 6
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 99
  confirmed: 99
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "a62fc601c58904076a02b0c33855a375"
---

## What's changing

Microsoft Purview is adding dedicated policy locations for non-Microsoft apps, so administrators can create Data Loss Prevention (DLP) and auto-labeling policies for them in Purview. The roadmap item says the supported conditions and actions vary by application. Microsoft's notice MC1449180 says the capabilities use Microsoft Defender for Cloud Apps connectors to reach the apps.

Per MC1449180 and Learn, DLP supports Google Workspace, Box, Dropbox, Salesforce, ServiceNow, AWS and Cisco Webex. Auto-labeling supports Google Workspace and Box. The DLP policies detect, monitor and protect sensitive data at rest in these apps. Learn's pages for both capabilities are marked preview and say the apps roll out in phases, so not every app is available in every tenant at the same time.

The roadmap item is In development, with a preview date of October CY2026 and a General Availability target of March CY2027. MC1449180 was updated on 18 November 2026 and gives General Availability for Worldwide beginning in mid-March 2027 (previously late December 2026) and expected to complete by late March 2027. It lists no act-by date and says no action is required before rollout. The roadmap lists Worldwide (Standard Multi-Tenant) only, and the platform as Web.

Separately, Learn says file policies in Defender for Cloud Apps retire on 6 January 2027, and that the **Instances** DLP location is retired on the same date. Policies in Purview and in Defender for Cloud Apps cannot coexist, per Learn, so teams that use file policies today have a migration to plan.

## Why it matters

This extends the same Purview policy framework to data that sits outside Microsoft 365, so one team can govern sensitive files in Box or Google Workspace the way it governs SharePoint. It also adds a consumption meter: MC1449180 says usage is billed through the Microsoft Purview At Rest Protection pay-as-you-go meter, so a policy scoped to a large repository carries a cost.

Nothing in the sources says existing behaviour changes for tenants that create no policy. The pressure comes from the retirement of Defender for Cloud Apps file policies on 6 January 2027, ahead of the March 2027 General Availability that MC1449180 gives: tenants that rely on file policies need equivalent Purview policies, and MC1449180 says to turn off or delete the overlapping file policy before creating the Purview one.

## Risk assessment

**Data exposure**

- Purview will scan, evaluate and apply policy actions to data stored in the connected services, per the compliance table in MC1449180. Scope each policy to the instances you intend: by default a policy applies to all instances of the selected app, and Learn gives **Exclude instances** and **Specific instances** to narrow it.
- Coverage has gaps. Learn lists encrypted files and PDF files as not currently supported for classification, and says Content explorer is not supported for these apps, so you cannot browse affected content there.

**Security & identity**

- The apps are reached through Defender for Cloud Apps connectors, so whoever manages a connector affects what Purview can see. Learn lists the role groups that create these policies (Compliance administrator, Compliance data administrator, Information Protection, Information Protection Admin, Security administrator) and recommends roles with the fewest permissions.

**Autonomy & actions**

- MC1449180 says available actions vary by app and may include notifications, quarantine actions and access controls. Learn says simulation mode is not supported for these policies: the policy mode choices are to turn the policy on immediately or leave it turned off, so test with a narrow instance scope first.
- Learn says policy tips and user overrides are not supported.

**Change & support**

- Running a Purview policy and a Defender for Cloud Apps file policy on the same app can cause unexpected enforcement, per MC1449180, and Learn says equivalent policies in both products create enforcement conflicts. Sequence the cut-over deliberately.
- Auto-labeling for Box and Google Workspace has a documented limit: a label applied by one auto-labeling policy cannot be replaced by a higher-priority label from another auto-labeling policy.

## Cost and licensing

**Licence.** MC1449180 says to ensure the organisation has the required Enterprise tier Microsoft Purview licensing. Learn's DLP and auto-labeling pages for these apps list permissions as prerequisites and point to the Microsoft 365 Enterprise Plans and security and compliance licensing guidance for licensing, without naming a plan. Learn's migration page lists a Microsoft 365 E5 or Microsoft 365 E5 Compliance licence, or an equivalent standalone Microsoft Purview DLP licence, as a prerequisite for moving file policies to Purview.

**Meter.** MC1449180 says usage is billed through the Microsoft Purview At Rest Protection pay-as-you-go meter, and that at-rest files in non-Microsoft applications are counted at 1,000 files = 1 data asset. It asks administrators to review the pricing and billing implications before enabling these capabilities. Learn's billing models page says pay-as-you-go billing is Azure based, so the Microsoft 365 tenant must be associated with an active Azure subscription, and that an Azure bill is generated at the end of the month.

**Pricing to confirm.** Confirm the applicable At Rest Protection rate on the [Microsoft Purview pricing page](https://azure.microsoft.com/pricing/details/purview/) before enabling policies. A feature-specific spending cap is not documented on the billing models page at the time of writing (November 2026), which also does not name the At Rest Protection meter, so confirm the meter on your Azure bill and on the Microsoft Purview pricing page.

**Indirect costs.** Admin time to connect apps, rebuild Defender for Cloud Apps file policies in Purview, and monitor alerts.

## Scope

- **Clouds and platform:** the roadmap lists Worldwide (Standard Multi-Tenant) and the Web platform. Government clouds are not listed on the roadmap item.
- **Apps:** DLP supports Google Workspace, Box, Dropbox, Salesforce, ServiceNow, AWS and Cisco Webex. Auto-labeling supports Google Workspace and Box. The Created date attribute is not available for Dropbox DLP rules, and Created date and Collaborators are not available for auto-labeling rules, per Learn.
- **Prerequisites:** each app must first be connected through a Defender for Cloud Apps app connector. For auto-labeling, the sensitivity labels must already be published.
- **Policy rules:** only the Custom policy template is supported, only advanced DLP rules are supported, administrative units are not supported (scope is Full directory), and non-Microsoft app locations cannot be combined with SharePoint, OneDrive, Exchange, Fabric or Devices in the same DLP policy, per Learn.
- **Roles:** Compliance administrator, Compliance data administrator, Information Protection, Information Protection Admin or Security administrator role group membership, per Learn.
- **Rollout:** a preview on Learn now; MC1449180 gives General Availability beginning in mid-March 2027. The roadmap's target is March CY2027 and is a plan, not a shipped date.

## Governance guidance

### Before rollout

- Inventory which of the supported apps you use and whether any are connected under **Settings > Cloud Apps > Connected Apps > App Connectors** in the Microsoft Defender portal (row: Defender for Cloud Apps app connectors).
- List existing Defender for Cloud Apps file policies on the same apps and plan the cut-over to the Purview equivalent (row: Defender for Cloud Apps file policies).
- Ask finance to review Purview pay-as-you-go pricing, then agree who owns the At Rest Protection charge.
- Decide which role group will own these policies and confirm each member holds one of the role groups Learn lists.

### At rollout

- Connect each supported app through a Defender for Cloud Apps connector before creating a policy (row: Defender for Cloud Apps app connectors).
- Create DLP policies with the **Custom** template and advanced rules, scoped to specific instances first (row: DLP policy for non-Microsoft connected apps).
- Create auto-labeling policies for Box or Google Workspace (row: Auto-labeling policy for non-Microsoft connected apps).
- Leave the policy turned off or scope it narrowly at first, because simulation mode is not supported.

### After rollout

- Check the Azure bill for the pay-as-you-go charge and compare it to the number of files in scope.
- Recreate any DLP policy that uses the **Instances** location before 6 January 2027 (row: Instances location, retiring).

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>DLP policy for non-Microsoft connected apps</strong><br><small>Tenant</small><br><small class="controls__note">Preview page. Custom template and advanced rules only; no simulation mode. Role groups listed under Scope.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Data Loss Prevention › Policies › + Create policy › What info do you want to protect? › Enterprise applications &amp; devices › Custom › Custom policy › Assign admin units › Full directory › Choose where to apply the policy <a href="https://learn.microsoft.com/purview/dlp-non-microsoft-connected-applications" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Auto-labeling policy for non-Microsoft connected apps</strong><br><small>Tenant</small><br><small class="controls__note">Path continues: Choose a sensitivity label &gt; Add &gt; Assign admin units &gt; Full directory &gt; Choose locations where you want to apply the label. Preview page. Box and Google Workspace only. Labels must be published first.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information protection › Policies › Auto-labeling policies › + Create auto-labeling policy › Automatically apply labels only › Custom › Custom policy › Choose a label to auto-apply › Choose a label <a href="https://learn.microsoft.com/purview/information-protection-non-microsoft-connected-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Defender for Cloud Apps app connectors that Purview relies on</strong><br><small>Tenant</small><br><small class="controls__note">Prerequisite for any policy on these apps. Each app has its own connector guide.</small></td><td data-label="Admin UI"><strong>Microsoft Defender portal</strong><br>Settings › Cloud Apps › Connected Apps › App Connectors › + Connect an app <a href="https://learn.microsoft.com/defender-cloud-apps/get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Defender for Cloud Apps file policies that overlap the Purview policies</strong><br><small>Tenant</small><br><small class="controls__note">Where the migration page opens the file policy list. Retiring 6 January 2027. MC1449180 says to turn off or delete overlapping file policies first; the migration page says to disable them only after validating Purview policies.</small></td><td data-label="Admin UI"><strong>Microsoft Defender portal</strong><br>Cloud apps › Policies › Policy management › All policies <a href="https://learn.microsoft.com/defender-cloud-apps/migrate-file-policies-to-purview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Instances DLP location for non-Microsoft cloud apps (retiring)</strong><br><small>Tenant</small><br><small class="controls__note">Today's alternative, not a control over the new dedicated locations. Learn says this location retires on 6 January 2027. Cmdlet needs Compliance Administrator or Compliance Data Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › + Create policy › Custom › Custom policy › Admin units › Locations › Instances › Edit › Specific instances › + Include instances <a href="https://learn.microsoft.com/purview/dlp-use-policies-non-microsoft-cloud-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpCompliancePolicy -Name &lt;policy name&gt; -ThirdPartyAppDlpLocation All</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The Purview portal steps for the dedicated locations are documented on Learn. At the time of writing (November 2026), those pages give no cmdlet, parameter or API for the dedicated DLP or auto-labeling locations. The New-DlpCompliancePolicy reference documents a ThirdPartyAppDlpLocation parameter for non-Microsoft cloud apps; it does not say whether that parameter addresses the dedicated app locations, so it is shown only against the retiring Instances row. The New-AutoSensitivityLabelPolicy reference names no parameter for these apps.

The Defender for Cloud Apps REST API page lists activities, alerts, data enrichment, entities and files as its supported resources, and no resource for app connectors or file policies (November 2026).

The Purview roles that can create these policies are listed under Scope. Creating a Purview policy does not remove a Defender for Cloud Apps file policy. Microsoft's sources disagree on sequencing: MC1449180 says to turn off or delete overlapping file policies before creating the Purview policy, while Learn's migration page says to disable them only after validating and turning on Purview policies. Resolve this conflict with Microsoft before cut-over. Activity explorer and DLP alerts are the documented monitoring surfaces; Content explorer is not supported for these apps.

## Open questions

- Which At Rest Protection rate applies to files in these apps, and is there a feature-specific spending cap for it? Watch the Microsoft Purview pricing page and the billing models page.
- Which Enterprise tier Purview licence is required? Learn's feature pages point to licensing guidance without naming a plan.
- Which cmdlet or API will manage the dedicated app locations? Watch the New-DlpCompliancePolicy and New-AutoSensitivityLabelPolicy references.
- Will auto-labeling extend beyond Box and Google Workspace, and will further DLP attributes arrive for each app? Watch MC1449180 and the Learn preview pages.
- General Availability is now given as beginning in mid-March 2027, after the 6 January 2027 Defender for Cloud Apps file policy retirement that Learn gives. How should tenants that rely on file policies cover the period between? Watch Message center and the migration page.

<!-- rationale
risk: Medium. Policies can act on data in third-party services (the notice lists quarantine and access controls), simulation mode is not supported, and a policy that overlaps a Defender for Cloud Apps file policy can cause unexpected enforcement.
cost: Variable. Microsoft's notice MC1449180 says usage is billed through the Microsoft Purview At Rest Protection pay-as-you-go meter, at 1,000 files = 1 data asset, on top of Enterprise tier Purview licensing.
impact: Low. Administrators who create and run the policies notice it first; the roadmap and notice name no end-user experience, and Learn says policy tips and user overrides are not supported for these apps.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The printed Purview DLP wizard path reaches Choose where to apply the policy through the documented policy-type, template and admin-unit steps. | Found: Go to Solutions > Data Loss Prevention > Policies > + Create policy. ... On What info do you want to protect?, choose the Enterprise applications & devices option. ... On Choose where to apply the policy, select one or more of the supported non-Microsoft apps | Fix: Keep the existing path and append ' > app > Edit > Specific instances > + Include instance' to reach the instance-scoping control recommended by the checklist. This continuation is documented at https://learn.microsoft.com/purview/dlp-non-microsoft-connected-applications. | Source: https://learn.microsoft.com/purview/dlp-non-microsoft-connected-applications
- [supported, minor] controls[1].ui; controls[1].note; Governance controls table / admin-path: The printed auto-labeling route and its note follow documented wizard choices, but omit the policy-type page heading. | Found: On What type of auto-labeling policy do you want to create?, choose Automatically apply labels only. ... On Choose a label to auto-apply, choose Choose a label. On Choose a sensitivity label, select all labels to include in the policy | Fix: Use 'Solutions > Information protection > Policies > Auto-labeling policies > + Create auto-labeling policy > What type of auto-labeling policy do you want to create? > Automatically apply labels only > Custom > Custom policy > Choose a label to auto-apply > Choose a label > Choose a sensitivity label > Add > Assign admin units > Full directory > Choose locations where you want to apply the label', retaining the existing note's qualifications. Source: https://learn.microsoft.com/purview/information-protection-non-microsoft-connected-apps. | Source: https://learn.microsoft.com/purview/information-protection-non-microsoft-connected-apps
-->
