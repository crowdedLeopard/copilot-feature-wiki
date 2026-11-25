---
title: "Microsoft Purview Insider Risk Management: bring your own detections as custom indicators"
slug: "microsoft-purview-compliance-portal-insider-risk-management-bring-your-own-detections"
roadmapId: 122278
topic: "governance"
products: ["Microsoft Purview"]
summary: "Insider Risk Management is planned to accept detections from SIEM and other non-Microsoft systems as custom indicators. Admins must build a connector first. Learn documents a preview; the default on arrival is not stated."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2025"
previewDate: "June CY2023"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "per-user"
  notes: "Insider Risk Management needs a supported Microsoft 365 subscription with licences assigned to users (Get started page). A licence or meter specific to custom indicators or the connector is not yet published; the pay-as-you-go indicators the billing page lists do not include custom indicators."
audiences: ["security","compliance","m365-admin"]
tags: ["insider-risk-management","purview","pay-as-you-go","role-groups","privacy"]
sources:
  - title: "Microsoft 365 Roadmap 122278"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=122278"
    kind: "roadmap"
  - title: "Set up a connector to import third-party insider risk detections (preview)"
    url: "https://learn.microsoft.com/purview/import-insider-risk-indicators"
    kind: "learn"
  - title: "Configure policy indicators in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators"
    kind: "learn"
  - title: "Get started with Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-configure"
    kind: "learn"
  - title: "Assign permissions in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    kind: "learn"
  - title: "Limits in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-limits"
    kind: "learn"
  - title: "Learn about Microsoft Purview billing models"
    url: "https://learn.microsoft.com/purview/purview-billing-models"
    kind: "learn"
  - title: "Add-RoleGroupMember"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
videos: []
related: ["insider-risk-management","microsoft-purview-insider-risk-management-pay-as-you-go-model-for-other-generative-ai-apps"]
controls:
  - governs: "Who can configure Insider Risk Management policies and settings"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and groups > Roles groups > Insider Risk Management > Edit > Choose users"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"Insider Risk Management\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Insider Risk Management Admins is a separate role group with the same configure right; Data Connector Admin, needed to create the connector, is assigned separately."
  - governs: "Whether third-party detections can be imported through the Insider Risk Indicators connector"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Data connectors > My connectors > Add connector > Insider Risk Indicators (preview)"
      docs: "https://learn.microsoft.com/purview/import-insider-risk-indicators"
    api: null
    note: "Preview. Needs the Data Connector Admin role."
  - governs: "Which imported detections exist as custom indicators"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Insider Risk Management > Settings > Policy indicators > Custom Indicators > Add custom indicator"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators"
    api: null
    note: "The connector must exist first."
  - governs: "Which policies use a custom indicator and at what threshold"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Insider Risk Management > Policies"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-configure"
    api: null
    note: "Create policy opens the workflow. On Policy template, choose a Data theft or Data leaks template; select the custom indicator on Policy indicators, then Specify custom thresholds. Custom triggers: Triggers page (Data leaks templates)."
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2025-08-19T23:15:40"
changes:
  - date: "2026-11-25"
    note: "First briefing for this item: documents the preview connector and custom indicators on Learn, the controls and limits, and what Microsoft has not yet stated."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 62 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected after the independent check: Why it matters no longer says Insider Risk Management cannot read those systems, role-group wording and the policy control row narrowed, and checklist steps without a control row removed."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 55 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-25"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 55
  confirmed: 54
  unconfirmed: 0
  contradicted: 1
  attempts: 2
  hash: "993a7c353937d2773d45de91677f9176"
---

## What's changing

The roadmap item states that Microsoft plans to let customers bring their own user activity indicators from homegrown, SIEM/UEBA platforms or other line-of-business applications, and use them in existing Insider Risk Management playbooks. The record shows status In development, a target of December CY2025 and a preview date of June CY2023, for Worldwide (Standard Multi-Tenant) on the web. It lists both General Availability and Preview as release phases. That December CY2025 target has passed as of November 2026 and the record still shows In development.

Microsoft Learn describes a preview capability under the same name. Learn says: "To bring your own detections to the insider risk management solution, import preprocessed, aggregated detections from security information and event management (SIEM) solutions such as Microsoft Sentinel or Splunk." An administrator creates an Insider Risk Indicators (preview) connector in the Microsoft Purview portal, uploads a CSV file with a sample script, creates a custom indicator, and then selects it in a policy. Learn says you can only use custom indicators with the Data theft and Data leaks templates, and that you cannot import raw detection signals, only preprocessed aggregations as a file.

When user activity crosses the threshold set in the policy, Learn says the user is brought into scope of the policy and scored for risk, and an alert is generated for analysts. Where the roadmap says playbooks, Learn describes policies. This briefing describes the preview as Learn documents it, not a final general availability design.

## Why it matters

This lets an organisation add custom signals, such as a leaver-prediction model or a Salesforce or Dropbox detection feed, to the scoring that analysts already work from. It also means named-user activity data from outside Microsoft 365 now flows into a tool whose alerts can lead to cases, so the owner of Insider Risk Management needs to know what is exported and who can see it.

Microsoft has not stated what happens on arrival or at general availability. No source says existing behaviour changes, and the documented process starts with an administrator creating a connector, so treat this as a capability to review rather than a change that reaches users by itself.

## Risk assessment

**Data exposure**
- Each CSV record carries a user principal name and an event time, and any optional fields you add. Learn says optional fields appear in the Activity explorer and in alerts and cases, so keep sensitive content out of them. The sample script uploads the file to the Microsoft cloud.
- Because raw signals cannot be imported, only aggregated detections leave your SIEM; the aggregation you choose decides how much detail analysts see.

**Security & identity**
- The connector authenticates through a Microsoft Entra app, and the script takes the application secret as a parameter. Treat that secret like any credential that can write data into Insider Risk Management.
- The sample script is not supported under any Microsoft standard support program, so your team owns reviewing and maintaining it. The domain webhook.ingestion.office.com must be allowed through the firewall for it to run.

**Autonomy & actions**
- A custom indicator used as a trigger can bring a user into policy scope and start risk scoring; Learn describes the outcome as a score and an alert for analysts. Learn says to set a custom threshold rather than the default. This does not apply to a custom trigger created with Use only as a triggering event without any thresholds; trigger thresholds cannot be set for that option.

**Change & support**
- Learn documents limits of 10 custom indicators and 20 fields per custom indicator, and 15,000 custom indicator triggers per UTC calendar day.
- Records with the same timestamp and user principal name in one file are dropped, and uploading within 24 hours of changing indicators and policies can leave some data unscored. The connector page is marked preview, so details can change.

## Cost and licensing

**Licence.** The Get started page says administrators need to verify that the organisation has a supported subscription and assign the appropriate licences to users. A licence specific to custom indicators or the Insider Risk Indicators connector is not yet published.

**Meter.** The Purview billing models page says Insider Risk Management indicators that detect activity in cloud storage apps (Box, Dropbox, Google Drive), cloud services (AWS, Azure) and Microsoft Fabric (Power BI) are billed on data security processing units under pay-as-you-go. It does not list custom indicators. Whether any charge applies to data imported through the connector is not yet published.

**Indirect costs.** Expect admin time to prepare the SIEM export, register the Microsoft Entra app, create the connector, and schedule the upload script. Learn suggests running the script daily, so the CSV file needs refreshing on the same schedule.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) and the web. It lists no other cloud. Learn says Insider Risk Management is available in tenants hosted in geographical regions and countries supported by Azure service dependencies.

Custom indicators work only in policies created from the Data theft and Data leaks templates. Creating the connector needs the Data Connector Admin role; the Insider Risk Management and Insider Risk Management Admins role groups can configure policies and settings. Learn says multiple role groups include the Data Connector Admin role by default.

## Governance guidance

### Before rollout
- Confirm that your organisation holds a supported subscription and licences for Insider Risk Management, using the Get started page.
- Decide which SIEM detections to export as preprocessed aggregations, and keep sensitive content out of optional CSV fields.
- Check who is in the Insider Risk Management role group.
- Plan where the Microsoft Entra application secret is stored and who runs the upload script.

### At rollout
- Create the Insider Risk Indicators connector and map the event time and user email fields.
- Create the custom indicator, choosing a Number field if you want a threshold.
- Add the custom indicator to a Data theft or Data leaks policy and set a custom threshold, except for an indicator set to Use only as a triggering event without any thresholds.
- Wait 24 hours after changing indicators and policies before uploading data.

### After rollout
- Track the limits on custom indicators and daily triggers as you add detections.
- Watch Message center and the roadmap item for a general availability date and any change to the preview design.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can configure Insider Risk Management policies and settings</strong><br><small>Tenant</small><br><small class="controls__note">Insider Risk Management Admins is a separate role group with the same configure right; Data Connector Admin, needed to create the connector, is assigned separately.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and groups › Roles groups › Insider Risk Management › Edit › Choose users <a href="https://learn.microsoft.com/purview/insider-risk-management-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;Insider Risk Management&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether third-party detections can be imported through the Insider Risk Indicators connector</strong><br><small>Tenant</small><br><small class="controls__note">Preview. Needs the Data Connector Admin role.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Data connectors › My connectors › Add connector › Insider Risk Indicators (preview) <a href="https://learn.microsoft.com/purview/import-insider-risk-indicators" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which imported detections exist as custom indicators</strong><br><small>Tenant</small><br><small class="controls__note">The connector must exist first.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Insider Risk Management › Settings › Policy indicators › Custom Indicators › Add custom indicator <a href="https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which policies use a custom indicator and at what threshold</strong><br><small>Tenant</small><br><small class="controls__note">Create policy opens the workflow. On Policy template, choose a Data theft or Data leaks template; select the custom indicator on Policy indicators, then Specify custom thresholds. Custom triggers: Triggers page (Data leaks templates).</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Insider Risk Management › Policies <a href="https://learn.microsoft.com/purview/insider-risk-management-configure" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Creating the connector needs the Data Connector Admin role, which is separate from the Insider Risk Management role groups that configure policies and settings. The row for role groups covers the Insider Risk Management role group only; where the Data Connector Admin role is assigned is covered on the Microsoft Purview permissions page.

The three configuration steps depend on one another: the custom indicator can only be created after the connector exists, and the policy can only select an indicator that exists. Microsoft Learn documents no automation for the connector, the indicator or the policy selection at the time of writing (November 2026); the upload script is a data upload, not a control over the feature.

## Open questions

- Will the general availability design keep the preview's file upload by sample script, or add a direct integration with SIEM platforms? Watch the connector page on Microsoft Learn and the roadmap item.
- What happens on arrival at general availability, and is anything turned on without an administrator? Microsoft has not stated a default.
- Does any pay-as-you-go meter or other charge apply to data imported through the connector? Watch the Purview billing models page.
- Will Microsoft document an API or PowerShell route for the connector, custom indicators and policy selection?
- The roadmap target of December CY2025 has passed with the status still In development. Is there a revised date? Watch Message center and the roadmap item.

<!-- rationale
risk: Medium. A script uploads third-party activity data about named users to Microsoft, and a custom indicator can bring users into policy scope; the documented process starts with an admin building the connector, indicator and policy.
cost: Low. The cost the sources show is admin time to build the export, connector and policy; a licence or meter specific to custom indicators is not yet published, and Insider Risk Management needs its own subscription.
impact: Low. Admins build the connector and policy, and analysts see custom indicator details in alerts, Activity explorer and the User timeline.
-->

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: defaultState; summary; Why it matters; Open questions / default: The default is unknown and Microsoft has not stated what happens on arrival. | Found: All global indicators are disabled by default; you must select one or more indicators to configure an Insider Risk Management policy. | Fix: Set defaultState to admin-opt-in for the documented preview. Replace the summary's default clause with 'The documented preview requires administrator configuration.' Replace the broad arrival statement in Why it matters with 'The preview requires an administrator to create the connector, custom indicator and policy; all global indicators are disabled by default.' Retain only the narrower open question about whether general availability will change this behaviour. The connector setup is documented at https://learn.microsoft.com/purview/import-insider-risk-indicators and the disabled default at https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators. | Source: https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters / behaviour: The receiving Insider Risk Management solution can lead from identified risks to investigation cases. | Found: After identifying the risks, you can take action to mitigate these risks, and if necessary open investigation cases and take appropriate legal action. | Fix: Add https://learn.microsoft.com/purview/insider-risk-management-solution-overview to sources for the statement about investigation cases. | Source: https://learn.microsoft.com/purview/insider-risk-management-solution-overview
- [supported, minor] controls[3].ui; Governance controls table / admin-path: Insider Risk Management > Policies in Microsoft Purview portal is the entry point for setting a policy's custom indicator and threshold. | Found: Go to the Insider Risk Management solution. ... Select Policies in the left navigation. ... Select Create policy to open the policy workflow. | Fix: For the policy-indicator route, extend controls[3].ui.path to 'Insider Risk Management > Policies > Create policy > Policy template > Data theft or Data leaks template > Policy indicators > Decide whether to use default or custom indicator thresholds > Specify custom thresholds'. This is the route documented by https://learn.microsoft.com/purview/insider-risk-management-configure; keep the existing custom-trigger qualification in the note. | Source: https://learn.microsoft.com/purview/insider-risk-management-configure
-->
