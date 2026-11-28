---
title: "Microsoft Purview Insider Risk Management: several DLP policies as triggering events in one Data leaks policy"
slug: "microsoft-purview-compliance-portal-insider-risk-management-multi-selectable-dlp-policies"
roadmapId: 493757
topic: "governance"
products: ["Microsoft Purview"]
summary: "Insider Risk Management policies built from the Data leaks template can use more than one DLP policy as the triggering event. Nothing changes until an Insider Risk Management admin selects the DLP policies in a policy."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "December CY2025"
previewDate: "August CY2025"
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Insider Risk Management is listed as Included in Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW, Microsoft Defender + Purview Suite FLW and Microsoft 365 E5/A5/F5/G5 Insider Risk Management. Nothing specific to this option is published."
audiences: ["security","compliance"]
tags: ["insider-risk-management","dlp","purview","triggers","role-groups","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap item 493757"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=493757"
    kind: "roadmap"
  - title: "Learn about Insider Risk Management policy templates"
    url: "https://learn.microsoft.com/purview/insider-risk-management-policy-templates"
    kind: "learn"
  - title: "Get started with Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-configure"
    kind: "learn"
  - title: "Configure policy indicators in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators"
    kind: "learn"
  - title: "Create and manage Insider Risk Management policies"
    url: "https://learn.microsoft.com/purview/insider-risk-management-policies"
    kind: "learn"
  - title: "Data Loss Prevention policy reference"
    url: "https://learn.microsoft.com/purview/dlp-policy-reference"
    kind: "learn"
  - title: "Help prevent sharing credit card numbers through email"
    url: "https://learn.microsoft.com/purview/dlp-create-policy-cc-email"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Whether a DLP rule's alerts reach Insider Risk Management (High report severity) (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-create-policy-detect-pii-data-exposure"
    kind: "learn"
  - title: "Whether a DLP rule's alerts reach Insider Risk Management (High report severity) (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule"
    kind: "learn"
  - title: "Who can configure Insider Risk Management policies and settings (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    kind: "learn"
  - title: "Who can configure Insider Risk Management policies and settings (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
videos: []
related: ["insider-risk-management","microsoft-purview-insider-risk-management-microsoft-fabric-cloud-storage-cloud-service-act","role-groups","microsoft-purview-compliance-portal-insider-risk-management-recommended-thresholds"]
controls:
  - governs: "Which DLP policies act as the triggering event for a Data leaks insider risk policy"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Insider Risk Management > Policies > Create policy > Policy template > category > Data leaks > Triggers for this policy > User matches a data loss prevention (DLP) policy triggering event"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-configure"
    api: null
    note: "Up to 20 DLP policies per Data leaks policy (policy templates page). Requires Insider Risk Management or Insider Risk Management Admins role group."
  - governs: "Whether a DLP rule's alerts reach Insider Risk Management (High report severity)"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > policy > Edit policy > Customize advanced DLP rules > rule > Incident reports > Use this severity level in admin alerts and reports"
      docs: "https://learn.microsoft.com/purview/endpoint-dlp-create-policy-detect-pii-data-exposure"
    api:
      kind: "powershell"
      call: "Set-DlpComplianceRule -Identity \"<rule name>\" -ReportSeverityLevel High"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule"
    note: "Insider Risk Management alerts aren't generated from rules set at Low or Medium. Low is the default. Security & Compliance PowerShell."
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
    note: "Insider Risk Management Admins role group also has Configure policies and settings. Permissions can take up to 30 minutes to apply."
confidence: "medium"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-05-01T21:45:13"
changes:
  - date: "2026-11-28"
    note: "New briefing: Data leaks insider risk policies can take up to 20 DLP policies as triggering events; covers the High severity requirement and supported DLP workloads."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 53 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 53
  confirmed: 49
  unconfirmed: 2
  contradicted: 2
  attempts: 1
  hash: "1b49ea562fb398265196e84d571e9e97"
---

## What's changing

An Insider Risk Management policy can now take more than one Microsoft Purview Data Loss Prevention (DLP) policy as its triggering event. The roadmap item states that admins could previously select only one DLP policy as a triggering event. A triggering event is what brings a user into a policy's scope so that the policy starts assigning risk scores to their activity.

Microsoft Learn's policy templates page states that each Insider Risk Management policy created from the **Data leaks** template can have up to 20 DLP policies assigned when using this triggering event option. The step-by-step guide in *Get started with Insider Risk Management* still describes the choice in the singular: on the **Triggers for this policy** page, selecting **User matches a data loss prevention (DLP) policy triggering event** means you "must select a DLP policy from the DLP policy dropdown list". The two pages describe the same screen differently; the limit of 20 is the more specific statement.

The DLP policy is an optional trigger for the **Data leaks** and **Data leaks by priority users** templates; the alternative is **User performs an exfiltration activity**, which uses selected indicators. A DLP policy feeds Insider Risk Management only through rules whose **Incident reports** severity is *High*, and only for alerts from Exchange Online, SharePoint Online and OneDrive for Business.

The roadmap item lists the feature as Launched, with General Availability and Preview phases, a preview date of August CY2025 and a target of December CY2025, on the web, for GCC, GCC High and DoD. No Message Center post was supplied for this item.

## Why it matters

Organisations that keep separate DLP policies per workload or data type no longer need to merge them into one dedicated policy to drive a Data leaks policy. That makes the trigger easier to keep aligned with the DLP estate, but it also means each added DLP policy brings its own user scope and its own high-severity rules into play: Microsoft's guidance is that a Data leaks policy processes high-severity DLP alerts only for users included in both the DLP rule and the insider risk policy.

No source says existing policies change on arrival: the DLP triggering event is an optional choice an admin makes in the policy workflow, on creation or through **Edit policy**. The practical risk is noise: every DLP rule set to *High* in a selected policy becomes a trigger, so adding several broad DLP policies can bring many more users into scoring and raise the policy health warning about triggering events for over 15% of users.

## Risk assessment

**Data exposure**
- No change: the option selects which existing DLP alerts start scoring; it does not give Insider Risk Management new content sources.

**Security & identity**
- Among the Insider Risk Management role groups, *Insider Risk Management* and *Insider Risk Management Admins* have **Configure policies and settings**; members of Global Administrator, Compliance Administrator and Organization Management have the same solution permissions as *Insider Risk Management Admins*. Whoever holds these can change which DLP policies bring users into scoring.

**Autonomy & actions**
- More DLP policies as triggers means more users brought into risk scoring automatically when a high-severity DLP alert fires for them.
- Alerts from DLP policies that apply exclusively to Endpoint DLP, Teams, Microsoft 365 Copilot, on-premises repositories or Power BI do not trigger the indicator, so selecting such a policy adds no coverage.

**Change & support**
- DLP rules default to *Low* report severity, and Insider Risk Management alerts aren't generated from rules set at *Low* or *Medium*. A selected DLP policy with no *High* rules triggers nothing, and the policy health card shows **DLP policy doesn't meet requirements**.
- Turning off or deleting a selected DLP policy raises policy health notifications; DLP and insider risk owners need to coordinate changes.

## Cost and licensing

**Licence.** The Microsoft Purview service description lists Insider Risk Management as *Included* in Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW, Microsoft Defender + Purview Suite FLW and Microsoft 365 E5/A5/F5/G5 Insider Risk Management. Choosing several DLP policies as triggers is an option inside Insider Risk Management policies, and Microsoft publishes no licence, price or meter specific to it.

**Meter.** *Get started with Insider Risk Management* states that some indicators are only available with pay-as-you-go billing; the DLP triggering event is not among the indicators that page names as pay-as-you-go.

**Indirect costs.** Admin time to raise the right DLP rules to *High* severity, and analyst time if broader triggers produce more alerts.

## Scope

- **Templates:** the DLP triggering event appears on the **Triggers for this policy** page for the **Data leaks** and **Data leaks by priority users** templates. The limit of up to 20 DLP policies is stated for the **Data leaks** template.
- **DLP workloads:** alerts from Exchange Online, SharePoint Online and OneDrive for Business are processed.
- **Roles:** members of the *Insider Risk Management* or *Insider Risk Management Admins* role groups can configure policies; admin-unit-scoped admins configure policies within their scope and cannot create priority-user-specific policies.
- **Clouds:** the roadmap item lists GCC, GCC High and DoD. Worldwide is not listed on this record.
- **Platform:** web (Microsoft Purview portal).
- **Prerequisite:** at least one DLP policy with rules whose **Incident reports** severity is *High*.

## Governance guidance

### Before rollout
- List the DLP policies with rules set to *High* report severity and decide, with the DLP owner, which should trigger each Data leaks policy.
- Check that the users in each candidate DLP rule overlap with the users in the insider risk policy, since only users in both are processed.
- Drop candidates that apply exclusively to Endpoint DLP, Teams, Microsoft 365 Copilot, on-premises repositories or Power BI.
- Confirm who holds the *Insider Risk Management* and *Insider Risk Management Admins* role groups in the Microsoft Purview portal.

### At rollout
- Select the chosen DLP policies on the **Triggers for this policy** page of each Data leaks policy, up to 20 per policy.
- Raise **Incident reports** severity to *High* only on the DLP rules that represent exfiltration, following Microsoft's guidance to be selective.

### After rollout
- Watch each policy's health card for **DLP policy doesn't meet requirements**, **DLP policy used in this policy is turned off** and the over-15%-of-users triggering warning.
- Agree a change process so that disabling or deleting a DLP policy is checked against the insider risk policies that use it.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which DLP policies act as the triggering event for a Data leaks insider risk policy</strong><br><small class="controls__note">Up to 20 DLP policies per Data leaks policy (policy templates page). Requires Insider Risk Management or Insider Risk Management Admins role group.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Insider Risk Management › Policies › Create policy › Policy template › category › Data leaks › Triggers for this policy › User matches a data loss prevention (DLP) policy triggering event <a href="https://learn.microsoft.com/purview/insider-risk-management-configure" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a DLP rule's alerts reach Insider Risk Management (High report severity)</strong><br><small class="controls__note">Insider Risk Management alerts aren't generated from rules set at Low or Medium. Low is the default. Security &amp; Compliance PowerShell.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › policy › Edit policy › Customize advanced DLP rules › rule › Incident reports › Use this severity level in admin alerts and reports <a href="https://learn.microsoft.com/purview/endpoint-dlp-create-policy-detect-pii-data-exposure" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-DlpComplianceRule -Identity &quot;&lt;rule name&gt;&quot; -ReportSeverityLevel High</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can configure Insider Risk Management policies and settings</strong><br><small>Tenant</small><br><small class="controls__note">Insider Risk Management Admins role group also has Configure policies and settings. Permissions can take up to 30 minutes to apply.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and groups › Roles groups › Insider Risk Management › Edit › Choose users <a href="https://learn.microsoft.com/purview/insider-risk-management-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;Insider Risk Management&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents no Security & Compliance PowerShell cmdlet or Microsoft Graph operation for creating or editing Insider Risk Management policies at the time of writing (November 2026); Microsoft directs admins to the policy workflow in the Microsoft Purview portal. The DLP side can be scripted: the rule severity that decides whether a DLP alert reaches Insider Risk Management is set with Set-DlpComplianceRule. Raising a rule to *High* also changes the severity of that rule's DLP admin alerts and reports, so DLP and insider risk owners share this setting. Admin-unit-scoped admins configure policies within their scope only.

## Open questions

- Does the limit of up to 20 DLP policies also apply to the **Data leaks by priority users** template? Watch the policy templates page.
- When will the *Get started* guide's step 12 be updated from "select a DLP policy" to describe multiple selection?
- Will Microsoft publish a PowerShell or API surface for setting an insider risk policy's DLP triggering events?
- The roadmap item lists only GCC, GCC High and DoD: is the worldwide equivalent tracked under a separate roadmap item?

<!-- rationale
risk: Low. The DLP triggering event is an optional choice an admin makes in the policy workflow, and it widens which high-severity DLP alerts bring users into risk scoring rather than exposing data.
cost: Low. Insider Risk Management is listed as included in Microsoft 365 E5/A5/G5 and the Purview suites; Microsoft publishes no separate licence or meter for this option. The cost is admin time tuning DLP rule severity.
impact: Low. Insider Risk Management admins and analysts notice it; users see nothing new, though more of them may be scored once more DLP policies feed a policy.
-->

<!-- verifier-findings (2026-11-28, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Data exposure; rationale: risk / behaviour: The option does not give Insider Risk Management new content sources or expose data. | Found: Searched: '"Insider Risk Management" "multiple DLP policies" "data sources"'; read policy templates, policy indicators and roadmap description. They describe trigger selection and supported alerts, not an explicit guarantee of unchanged content access. | Fix: Replace the Data exposure bullet with 'The option selects which existing DLP alerts start scoring.' Remove 'rather than exposing data' from the risk rationale.
- [contradicted, blocker] controls[1].ui; Governance controls table / admin-path: The linked endpoint DLP tutorial documents the path through Incident reports to Use this severity level in admin alerts and reports. | Found: Scroll down to the **Incident reports** section and toggle **Send an alert to admins when a rule match occurs** to **On**. | Fix: Change controls[1].ui.docs and the corresponding table link to 'https://learn.microsoft.com/purview/dlp-create-policy-cc-email'. That already-cited page states: 'Under Incident reports, set Use this severity level in admin alerts and reports to High.' The existing endpoint tutorial supports the editing route but does not document the severity control itself; retain the path. | Source: https://learn.microsoft.com/purview/endpoint-dlp-create-policy-detect-pii-data-exposure
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The Purview policy-creation path reaches the Data leaks DLP triggering-event option. | Found: If you select the **User matches a data loss prevention (DLP) policy triggering event** option, you must select a DLP policy from the DLP policy dropdown list to enable triggering indicators for the DLP Policy for this Insider Risk Management policy. | Fix: Extend the path to 'Insider Risk Management > Policies > Create policy > Policy template > category > Data leaks > Triggers for this policy > User matches a data loss prevention (DLP) policy triggering event > DLP policy dropdown list'. The guide documents the trigger label; the pre-check's missing-word result is not a wrong label. | Source: https://learn.microsoft.com/purview/insider-risk-management-configure
- [unsupported, minor] rationale: impact / behaviour: Users see nothing new as a result of this change. | Found: Searched: '"Insider Risk Management" "multiple DLP policies" "users" "experience"'. Read roadmap description, policy templates and policy workflow. They describe administrator selection and scoring, not an explicit assurance of unchanged end-user experience. | Fix: Remove 'users see nothing new, though' and write the impact rationale as 'Low. Insider Risk Management admins and analysts notice it; more users may be scored once more DLP policies feed a policy.'
- [contradicted, minor] Governance guidance: After rollout; Governance controls table / consistency: The policy-health monitoring instruction has a corresponding controls-table row. | Found: Watch each policy's health card for **DLP policy doesn't meet requirements**, **DLP policy used in this policy is turned off** and the over-15%-of-users triggering warning. The table contains only trigger selection, rule severity and role membership. | Fix: The first After rollout bullet asks readers to monitor policy health, which has no controls-table row. Remove that bullet; retain the already-supported health facts in Risk assessment and Why it matters. Do not add a new control row.
-->
