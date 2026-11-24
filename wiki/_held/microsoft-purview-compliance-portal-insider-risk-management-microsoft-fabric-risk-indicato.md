---
title: "Microsoft Purview Insider Risk Management: Microsoft Fabric and Power BI risk indicators"
slug: "microsoft-purview-compliance-portal-insider-risk-management-microsoft-fabric-risk-indicato"
roadmapId: 475859
topic: "governance"
products: ["Microsoft Purview"]
summary: "Insider Risk Management gains ready-made indicators for Power BI and other Fabric activity for data theft and data leaks policies. Nothing is on until an administrator selects them, and they need pay-as-you-go billing."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: null
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Insider Risk Management is listed as included in Microsoft 365 E5/A5/G5 and related Purview suites (Microsoft Purview service description). The Fabric indicators also need pay-as-you-go billing through an Azure subscription (Microsoft Purview billing models)."
audiences: ["compliance","security","finops"]
tags: ["insider-risk-management","microsoft-fabric","power-bi","purview","pay-as-you-go","usage-based-billing","monitoring","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 475859"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=475859"
    kind: "roadmap"
  - title: "Configure policy indicators in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators"
    kind: "learn"
  - title: "Learn about Microsoft Purview billing models"
    url: "https://learn.microsoft.com/purview/purview-billing-models"
    kind: "learn"
  - title: "Enable Microsoft Purview pay-as-you-go features for new customers"
    url: "https://learn.microsoft.com/purview/purview-payg-subscription-based-enablement"
    kind: "learn"
  - title: "Assign permissions in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    kind: "learn"
  - title: "Use reports in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-reports"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Microsoft 365 pay-as-you-go terms of service"
    url: "https://learn.microsoft.com/sharepoint/microsoft-365-pay-as-you-go-terms-of-service"
    kind: "learn"
  - title: "Add-RoleGroupMember"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
videos: []
related: ["insider-risk-management","microsoft-purview-compliance-portal-data-loss-prevention-restrict-access-action-support-fo","microsoft-purview-insider-risk-management-insider-risk-management-for-agents"]
controls:
  - governs: "Whether the Microsoft Fabric policy indicators are available to Insider Risk Management policies"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Insider Risk Management > Settings > Policy indicators > Built-in Indicators"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators"
    api: null
    note: "The Fabric indicators are listed among the built-in indicators and need pay-as-you-go billing. Learn documents no API for this setting at the time of writing (November 2026)."
  - governs: "Enabling pay-as-you-go billing that the Fabric indicators need"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Account details"
      docs: "https://learn.microsoft.com/purview/purview-payg-subscription-based-enablement"
    api: null
    note: "Global Administrator role only. The enablement page is marked preview. Learn documents no API for enablement at the time of writing (November 2026)."
  - governs: "Pay-as-you-go usage of Insider Risk Management indicators"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Insider Risk Management > Reports > Pay-as-you-go"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-reports"
    api: null
    note: "A report that shows usage; it does not cap or stop it. Learn documents no API for this report at the time of writing (November 2026)."
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
    note: "Covers IRM in general, not these indicators alone. The Insider Risk Management Admins role group also configures policies and settings."
confidence: "high"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-06-16T23:00:10"
changes:
  - date: "2026-11-24"
    note: "First briefing for this item: Fabric and Power BI indicators in Insider Risk Management, their pay-as-you-go requirement, and where to control them."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 58 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 58
  confirmed: 55
  unconfirmed: 2
  contradicted: 1
  attempts: 1
  hash: "396b69184461e860631734ed1ea699e5"
---

## What's changing

Insider Risk Management (IRM) in Microsoft Purview is getting built-in risk indicators for Microsoft Fabric products, starting with Power BI. The roadmap item says they are ready-to-use indicators based on activities that may lead to a data security incident in Power BI, and that organisations can use them in data theft and data leaks policies.

Microsoft Learn already documents a Microsoft Fabric indicators group on the "Configure policy indicators in Insider Risk Management" page. It covers Fabric workloads such as Power BI and Lakehouse and groups the detections into four techniques: working out the environment (for example, viewing Power BI reports and dashboards), gathering data of interest (for example, downloading Power BI reports), obfuscating the data or changing its protection (for example, downgrading or removing sensitivity labels of Power BI or Lakehouse assets), and exfiltrating data (for example, sharing Lakehouse data with people outside the organisation).

Learn states that all global indicators are disabled by default and that you must select one or more indicators to configure an IRM policy. The Fabric indicators also carry an "Important" note: enable pay-as-you-go billing in your organisation to use them.

The roadmap record shows status In development with a target of October CY2026, release phase General Availability, platform Web, and clouds GCC, GCC High and DoD. That target month has passed at the time of writing (November 2026) without a status change on the record, while Learn already describes the indicators. Treat the roadmap dates as targets until the status is Launched.

## Why it matters

This extends insider-risk detection from Microsoft 365 workloads to the analytics layer where large amounts of curated data sit. For a service owner, the decisions are whether Power BI and Lakehouse activity should feed IRM at all, who will be monitored, and who pays: the indicators are billed through pay-as-you-go, not covered by the per-user IRM licence alone.

The default in Learn is that nothing is selected, so if nobody acts there is no new monitoring and no new charge. The risk is in switching it on without agreeing the privacy position, the billing subscription and the analyst workload first.

## Risk assessment

**Data exposure**

- Enabled indicators process Power BI and Lakehouse user activities such as viewing and downloading reports, label downgrades and external sharing of Lakehouse data. Control: select only the indicators you need under Settings > Policy indicators (controls table, row 1).
- Learn describes pseudonymisation of users by default in IRM, with role-based access controls and audit logs. Analyst access to the resulting alerts is governed by the IRM role groups (row 4).

**Security & identity**

- The indicators detect label downgrades and removal on Power BI or Lakehouse assets, which gives the security team a signal about protection being changed. They do not by themselves stop the change; Learn describes them as detections.
- Configuration rights sit with the Insider Risk Management and Insider Risk Management Admins role groups, and with Global Administrator, Compliance Administrator and the two Purview equivalents.

**Autonomy & actions**

- Learn describes the indicators as feeding policies that collect signals and trigger alerts for people to review, so the output of this change is alerts.

**Change & support**

- Enabling pay-as-you-go billing needs a Global Administrator and an Azure subscription and resource group; the enablement page is marked preview. Plan who approves recurring Azure charges before an IRM administrator selects the indicators.
- More signals mean more alerts. Expect to tune thresholds and review the IRM pay-as-you-go usage report (row 3) after the first weeks.

## Cost and licensing

**Licence.** The Microsoft Purview service description lists Insider Risk Management as included for Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW, Microsoft Defender + Purview Suite FLW and Microsoft 365 E5/A5/F5/G5 Insider Risk Management.

**Meter.** The Microsoft Fabric indicators need pay-as-you-go billing. The billing models page says IRM indicators that detect activity in cloud storage apps, cloud services and Microsoft Fabric (Power BI) are billed on data security processing units, and that for IRM a processing unit is the compute required to process 10,000 user activities. The charge appears on an Azure bill generated at the end of the month, because the tenant must be associated with an active Azure subscription.

**Not stated on those pages.** A price per processing unit for these indicators is not on the billing models page, which links to Microsoft's Azure pricing page for rates. Use the cost estimators it links, and watch actual use in the IRM pay-as-you-go usage report.

## Scope

**Who and what.** The indicators apply to IRM policies created from the data theft and data leaks templates, according to the roadmap item and the billing models page. They cover Fabric workloads such as Power BI and Lakehouse, per Learn.

**Clouds, platform and phase.** The roadmap lists GCC, GCC High and DoD, platform Web and release phase General Availability, with status In development and a target of October CY2026.

**Roles.** Configuring policies and settings is allowed for the Insider Risk Management and Insider Risk Management Admins role groups (Learn permissions page). Only a Global Administrator can enable pay-as-you-go billing.

**Prerequisites.** Pay-as-you-go billing enabled; for enablement, an Azure subscription and resource group in the same tenant as Microsoft Purview, and either the MIP_S_Exchange or EXCHANGE_S_FOUNDATION service plan.

## Governance guidance

### Before rollout

- Agree with HR, legal and privacy leads whether Power BI and Lakehouse activity may be monitored through IRM, and record the policy scope.
- Confirm with finance who owns the Azure subscription and resource group that pay-as-you-go billing will use, and decide who has the Global Administrator role needed to enable it.
- Confirm in your cloud (GCC, GCC High or DoD) that pay-as-you-go billing can be enabled before planning a rollout; see Open questions.

### At rollout

- Select only the Microsoft Fabric indicators you need under Insider Risk Management > Settings > Policy indicators, so you do not process and pay for activity nobody will review.
- Add the indicators to a data theft or data leaks policy and tell the analysts who work its alerts what the new alerts mean.
- Limit membership of the Insider Risk Management and Insider Risk Management Admins role groups to named people.

### After rollout

- Review the Pay-as-you-go report under Insider Risk Management > Reports each month against the Azure bill and the estimate.
- Compare alert volume from the Fabric indicators with analyst capacity and adjust the indicators or thresholds.
- Re-check the roadmap item and the Learn page for the status change from In development.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Microsoft Fabric policy indicators are available to Insider Risk Management policies</strong><br><small>Tenant</small><br><small class="controls__note">The Fabric indicators are listed among the built-in indicators and need pay-as-you-go billing. Learn documents no API for this setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Insider Risk Management › Settings › Policy indicators › Built-in Indicators <a href="https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Enabling pay-as-you-go billing that the Fabric indicators need</strong><br><small>Tenant</small><br><small class="controls__note">Global Administrator role only. The enablement page is marked preview. Learn documents no API for enablement at the time of writing (November 2026).</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Account details <a href="https://learn.microsoft.com/purview/purview-payg-subscription-based-enablement" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Pay-as-you-go usage of Insider Risk Management indicators</strong><br><small>Tenant</small><br><small class="controls__note">A report that shows usage; it does not cap or stop it. Learn documents no API for this report at the time of writing (November 2026).</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Insider Risk Management › Reports › Pay-as-you-go <a href="https://learn.microsoft.com/purview/insider-risk-management-reports" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can configure Insider Risk Management policies and settings</strong><br><small>Tenant</small><br><small class="controls__note">Covers IRM in general, not these indicators alone. The Insider Risk Management Admins role group also configures policies and settings.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and groups › Roles groups › Insider Risk Management › Edit › Choose users <a href="https://learn.microsoft.com/purview/insider-risk-management-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;Insider Risk Management&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The indicator setting is global: Learn says the indicators you select on the Policy indicators settings page are the ones available to IRM policies. The Fabric indicators also depend on pay-as-you-go billing being enabled.

Billing enablement needs the Global Administrator role, and the enablement page is marked preview. IRM configuration needs a role group or role listed on the permissions page, and four of those roles can also assign users to IRM role groups. The role-group row governs who can configure IRM generally, not these indicators alone.

## Open questions

- Do GCC, GCC High and DoD tenants get the indicators and can they enable the pay-as-you-go billing they require? The roadmap lists all three clouds; the billing models page states no cloud availability, and Microsoft's separate Microsoft 365 pay-as-you-go terms say that service is not available for Office 365 government plans. Watch Message center and the billing models page.
- Why does the roadmap show In development with an October CY2026 target when Learn already documents the Fabric indicators? Watch the roadmap item for a status change.
- Which individual Fabric activities does each indicator detect, and do they all appear in both the data theft and data leaks templates? Watch the policy indicators page.
- What is the price per data security processing unit for these indicators? Check the Azure pricing page for Microsoft Purview.

<!-- rationale
risk: Medium. Selecting the indicators puts users' Power BI and Lakehouse activity under insider-risk monitoring and starts metered billing; Learn says all global indicators are disabled by default.
cost: Variable. Learn says the Microsoft Fabric indicators need pay-as-you-go billing, billed on data security processing units (one per 10,000 user activities), on top of the Insider Risk Management licence.
impact: Low. Insider risk administrators and analysts see the change, and no indicator is selected until an administrator acts; monitored users' Fabric activity is the only thing that reaches wider.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] Why it matters / cost: If nobody acts there is no new charge. | Found: Searched: Microsoft Fabric Insider Risk Management indicators disabled not selected no cost incurred; Fabric indicators charges disabled; read policy-indicators, billing-models and PAYG enablement. Explicit no-cost text concerns deselected generative AI apps, not Fabric indicators. | Fix: Remove 'and no new charge' from the sentence. Keep the documented statement that the indicators are disabled by default.
- [unsupported, major] Risk assessment: Security & identity / behaviour: The Fabric indicators do not by themselves stop a sensitivity-label change. | Found: Searched: Microsoft Fabric indicators detect block; read policy-indicators and IRM workflow excerpts. They describe detecting label changes and producing alerts, but do not explicitly state that these indicators cannot stop label changes. | Fix: Replace 'They do not by themselves stop the change; Learn describes them as detections' with 'Learn describes these indicators as detections of changes to protection.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Security & identity / role: Two Microsoft Purview role groups also have IRM configuration permissions, described as the two Purview equivalents. | Found: Microsoft Purview Organization Management; Microsoft Purview Compliance Administrator | Fix: Replace 'the two Purview equivalents' with 'the Microsoft Purview Organization Management and Compliance Administrator role groups', as named at https://learn.microsoft.com/purview/insider-risk-management-permissions. | Source: https://learn.microsoft.com/purview/insider-risk-management-permissions
- [supported, minor] controls[1].note; Risk assessment; Scope; Governance controls / role: Only a Global Administrator can perform the cited pay-as-you-go enablement procedure. | Found: Applies to: Organizations that aren't current Azure Purview customers using the classic data governance pricing model customers. ... Only an account in the Global Administrator role can enable the pay-as-you-go model | Fix: Add to controls[1].note: 'This procedure applies to organisations that are not current Azure Purview customers using the classic data governance pricing model.' Qualify the prose descriptions of this procedure the same way. | Source: https://learn.microsoft.com/purview/purview-payg-subscription-based-enablement
- [supported, minor] controls[0].ui; Governance controls table; governance and risk paths / admin-path: Microsoft Purview portal > Insider Risk Management > Settings > Policy indicators > Built-in Indicators reaches the page containing Fabric indicator selection. | Found: In the Microsoft Purview portal, go to Insider Risk Management > Settings > Policy indicators. ... select Policy indicators and then select the Built-in Indicators tab. | Fix: Extend controls[0].ui.path to 'Insider Risk Management > Settings > Policy indicators > Built-in Indicators > Microsoft Fabric indicators'. The cited page identifies that indicator group and instructs administrators to choose the indicators to activate. | Source: https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators
- [supported, minor] controls[1].ui; Governance controls table / admin-path: Microsoft Purview portal > Settings > Account details reaches the documented pay-as-you-go enablement flow. | Found: Select Get Started in the ribbon menu to start the process. This can also be done from Settings > Account details. ... Select your active Azure subscription from the list. ... Select the resource group. | Fix: Extend controls[1].ui.path to 'Settings > Account details > subscription > resource group', retaining placeholders for the administrator's choices, as described at https://learn.microsoft.com/purview/purview-payg-subscription-based-enablement. | Source: https://learn.microsoft.com/purview/purview-payg-subscription-based-enablement
- [contradicted, minor] Governance guidance: At rollout and After rollout / consistency: The checklist names policy-level indicator selection and threshold tuning that have no corresponding controls-table row. | Found: Add the indicators to a data theft or data leaks policy ... adjust the indicators or thresholds. The table covers global indicator availability, billing enablement, usage reports and role-group membership, not policy-level selection or thresholds. | Fix: The checklist steps 'Add the indicators to a data theft or data leaks policy' and 'adjust the indicators or thresholds' name controls absent from the table. Remove those control-setting instructions; do not add rows as part of this correction.
-->
