---
title: "Microsoft Purview: run a Power Automate flow when a retention label's retention period ends (GCC, GCC High, DoD)"
slug: "microsoft-purview-data-lifecycle-management-power-automate-integration-with-records-manage"
roadmapId: 558859
topic: "governance"
products: ["Microsoft Purview"]
summary: "Planned for January 2027 in US Government clouds: a retention label can run a Power Automate flow at the end of retention. Off by default; there is no user impact unless administrators configure and apply flows."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: null
risk: "medium"
cost: "medium"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Retention label creation is licensed through the Microsoft 365 and Purview licences in the Purview service description; Learn separately requires a Power Automate plan with premium connectors. A price for that plan in US Government clouds is not covered here."
audiences: ["compliance","m365-admin","maker"]
tags: ["purview","data-lifecycle-management","retention","power-automate","automation","records-management","powershell","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 558859"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=558859"
    kind: "roadmap"
  - title: "Customize what happens at the end of the retention period"
    url: "https://learn.microsoft.com/purview/retention-label-flow"
    kind: "learn"
  - title: "Use file plan to create and manage retention labels"
    url: "https://learn.microsoft.com/purview/file-plan-manager"
    kind: "learn"
  - title: "New-ComplianceTag"
    url: "https://learn.microsoft.com/powershell/module/exchange/new-compliancetag"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Plan for Microsoft Purview compliance and risk management solutions - GCC deployments"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/plan-for-microsoft-purview-gcc-deployments"
    kind: "learn"
  - title: "Plan for Microsoft Purview compliance and risk management solutions - GCC High deployments"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/plan-for-microsoft-purview-gcc-high-deployments"
    kind: "learn"
  - title: "Plan for Microsoft Purview compliance and risk management solutions - DoD deployments"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/plan-for-microsoft-purview-dod-deployments"
    kind: "learn"
  - title: "MC1385583: (Updated) Microsoft Purview | Data Lifecycle Management - Power Automate integration with records management"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1385583"
    kind: "message-center"
videos: []
related: ["microsoft-purview-data-lifecycle-management-hard-delete-capability-for-onedrive-and-sharep","microsoft-purview-data-lifecycle-management-archive-sharepoint-files-under-retention","connectors"]
controls:
  - governs: "Which Power Automate flow a retention label runs at the end of its retention period"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Records Management > File plan > + Create a label > Retention label > Define label settings > Retain items indefinitely or for a specific period > Choose what happens after the retention period > Run a Power Automate flow"
      docs: "https://learn.microsoft.com/purview/retention-label-flow"
    api:
      kind: "powershell"
      call: "New-ComplianceTag -Name <label name> -FlowId <flow GUID>"
      docs: "https://learn.microsoft.com/powershell/module/exchange/new-compliancetag"
    note: "Then select Select a flow. Creates a new label; an existing label can't be edited for this. FlowId is preview and required outside the Default environment type."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-07-14T22:41:38"
changes:
  - date: "2026-11-20"
    note: "First briefing: covers the January 2027 target, the admin-opt-in default, the Learn configuration steps and the older Purview planning-table status for US Government clouds."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 67 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected after the independent check: summary now states the Message Center condition (no user impact unless administrators configure and apply flows); moved-or-renamed-file risk reworded to Learn's timing; two sharing-review checklist bullets removed."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 69 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-20"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 69
  confirmed: 69
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "d39e1b21a0f90523ec94fa2853055a2a"
---

## What's changing

Microsoft Purview Records Management will let a retention label hand the end of its retention period to a Power Automate flow. Microsoft's notice MC1385583 says administrators can select a pre-existing flow to run when a retention label expires, using actions in the Microsoft 365 Compliance connector: apply a retention label on the item, relabel an item at the end of retention, delete an item at the end of retention, and trigger a new instance of the flow if an item can't be located.

The notice says the feature is not enabled by default, that flows must be explicitly selected during retention label configuration, and that existing retention labels and retention settings are not changed. The roadmap item describes examples such as a complex disposition approval process or moving the file to an archive. Microsoft Learn's page "Customize what happens at the end of the retention period" describes the configuration: you create an automated cloud flow from blank with the trigger "When an item reaches the end of its retention period", then create a new retention label that runs that flow. The page lists custom actions such as sending an email notification to a records manager or moving a document to a SharePoint location where you centrally store records.

The roadmap record lists GCC, GCC High and DoD, General Availability, Web, status In development and a target of January CY2027. The notice gives the same cloud list, says rollout begins in January 2027 (previously mid-July 2026) and is expected to complete by end of January 2027 (previously late September 2026), and sets no act-by date. Microsoft's own cloud planning tables for Purview list "Power Automate integration" under records management as "On engineering backlog" for GCC, GCC High and DoD, which differs from the roadmap's January CY2027 target. Treat the Learn page as the best description of the behaviour and confirm it applies unchanged once rollout reaches your cloud.

## Why it matters

This gives records teams a way to replace the built-in end-of-retention actions with their own process, such as an approval before deletion or a move to an archive, without manual follow-up. The cost of that flexibility is that disposition logic now lives in a Power Automate flow, so records managers depend on whoever builds and owns that flow, and on a Power Automate plan with premium connectors that Learn says is separate from the Microsoft 365 compliance plan.

Microsoft says the feature is not enabled by default, so if nobody acts nothing changes for users or labels. The decision to take is whether your records process needs custom end-of-retention steps, and if so who may build flows that can delete or relabel retained content.

## Risk assessment

**Data exposure**

- The flow runs in Power Automate, and Learn says the actions "allow integration with other apps and services", so a flow can pass information about a retained item to whatever services its steps connect to. Confirm what item information the trigger passes before connecting a flow to anything outside Microsoft 365.

**Security & identity**

- Learn says that by default the account that creates the flow must be the same account that creates the retention label, and that people a flow is shared with can also select it when they create a label. The flow's owner and its sharing list therefore decide who can attach it to a label.
- Learn says the flow must be created under **My flows** in Power Automate; creating a flow under **Solutions** isn't currently supported.

**Autonomy & actions**

- A flow that uses the delete or relabel actions changes retained items when retention ends. Learn says to allow up to seven days after expiry for the flow to trigger, up to seven days for delete and relabel to complete, and up to 14 days for delete in Exchange. Actions are queued and retried after network or service delays.
- Learn says the principles of retention still apply, so an item is retained for the longest period where retention policies conflict, but the flow is always triggered at the end of the label's own retention period. Test a label against content that is also under a longer retention policy.
- Learn says that if a file is moved or renamed after the flow is triggered but before its compliance actions complete, the flow fails to find it unless it uses the "Trigger a new instance of the flow if an item can't be located" action.

**Change & support**

- Learn says you must create a new retention label to run a flow, and you can't edit an existing label for this configuration. Each label runs one flow, though one flow can serve several labels.
- If the flow's environment is not the Default type, Learn says you must create the label with PowerShell and the FlowId parameter, which the cmdlet reference marks as preview.
- If a flow relabels, the replacement label can't be configured to mark the item as a regulatory record.

## Cost and licensing

Learn's page on this feature says you must have a Power Automate plan that includes premium connectors, separate from your Microsoft 365 compliance plan. Neither the roadmap record nor Microsoft's notice names a plan, price or meter for this feature.

The Microsoft Purview service description lists the licences that provide user rights for retention label creation, including Microsoft 365 E5/A5/G5/E3/A3/G3/F3/F1/Business Premium. It lists event-based retention start, disposition review, marking items as records and automatic relabelling as settings that need more specific licences, and does not name running a Power Automate flow in that list; confirm with your licensing contact whether it falls under a stricter licence.

Indirect costs are the time to design, test and own the flows and to create new labels, since existing labels can't be switched over.

## Scope

The roadmap record lists GCC, GCC High and DoD, General Availability, platform Web. Microsoft's notice says rollout begins in January 2027 and is expected to complete by end of January 2027, and names Microsoft Purview, Power Automate, SharePoint Online, OneDrive for Business and Exchange Online as the platforms and services involved. It names Records Management and Compliance administrators as the people affected.

Per Learn, prerequisites are a Power Automate plan with premium connectors and an automated cloud flow created from blank with the trigger "When an item reaches the end of its retention period", created under **My flows**. Learn also gives the "Apply a retention label on the item" flow action as independent of this scenario: it is the equivalent of manually applying a label and takes effect immediately.

Microsoft's Purview planning tables for GCC, GCC High and DoD each list "Power Automate integration" under records management as "On engineering backlog", where the roadmap and notice now give a January 2027 target.

## Governance guidance

### Before rollout

- Decide with the records owner whether any label needs steps beyond the built-in end-of-retention actions, and list the actions each needs (relabel, delete, notify, move).
- Confirm which Power Automate plan with premium connectors will cover the flow owners, and which Power Automate environment type the flows will use.
- Watch Message center post MC1385583 and the Learn page for the date rollout reaches your cloud.

### At rollout

- Create a test flow under **My flows** with the "When an item reaches the end of its retention period" trigger, and add the "Trigger a new instance of the flow if an item can't be located" action before any relabel or delete action.
- Create a new test retention label in file plan that runs the flow, using the controls table row; use PowerShell with FlowId if the flow is in a non-Default environment.

### After rollout

- Check on test content that the flow and its relabel or delete actions completed within the windows Learn gives (up to seven days, up to 14 days for Exchange deletes).

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which Power Automate flow a retention label runs at the end of its retention period</strong><br><small class="controls__note">Then select Select a flow. Creates a new label; an existing label can't be edited for this. FlowId is preview and required outside the Default environment type.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Records Management › File plan › + Create a label › Retention label › Define label settings › Retain items indefinitely or for a specific period › Choose what happens after the retention period › Run a Power Automate flow <a href="https://learn.microsoft.com/purview/retention-label-flow" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-ComplianceTag -Name &lt;label name&gt; -FlowId &lt;flow GUID&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchange/new-compliancetag" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Learn documents attaching a flow to a label as part of retention label creation: either in the portal, where the **Select a flow** flyout lists automated cloud flows you created or that someone shared with you, or in PowerShell with the FlowId parameter. The cmdlet reference marks FlowId as preview and not available in all organisations, so check it before scripting.

A label can be set to one flow only. Which flows appear in the flyout depends on who created them and who they were shared with in Power Automate, so sharing in Power Automate is the practical gate on what a label can run.

## Open questions

- Will the Purview planning tables for GCC, GCC High and DoD, which list "Power Automate integration" as "On engineering backlog", be updated to match the January 2027 rollout in Message center post MC1385583?
- Which Power Automate plans and environment types in GCC, GCC High and DoD satisfy the requirement for a plan that includes premium connectors?
- Does running a Power Automate flow fall under the stricter licences the Purview service description lists for other label settings, or under the general retention label licences?
- Will the FlowId parameter of New-ComplianceTag keep its preview note when this feature reaches US Government clouds?

<!-- rationale
risk: Medium. Nothing runs until an admin picks a flow, but a flow can delete or relabel items when retention ends, so a badly built flow acts on retained content without a person approving each item.
cost: Medium. Microsoft Learn says running the flow needs a Power Automate plan that includes premium connectors, separate from the Microsoft 365 compliance plan; the notice names no licence or price.
impact: Low. Microsoft's notice MC1385583 says there is no user impact unless administrators configure and apply flows; records management and compliance administrators are the affected group.
-->
