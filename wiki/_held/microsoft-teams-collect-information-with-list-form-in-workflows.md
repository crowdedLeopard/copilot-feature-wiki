---
title: "Microsoft Teams: Workflows trigger \"A form is submitted\" collects answers in a SharePoint list"
slug: "microsoft-teams-collect-information-with-list-form-in-workflows"
roadmapId: 568932
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams Workflows gains a trigger that starts a workflow when someone submits a form backed by a SharePoint list. It is on automatically and Microsoft says no admin action is required; existing SharePoint and DLP controls still apply."
status: "launched"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "September CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published for this trigger. The Learn page for creating flows in Teams lists an account with access to Microsoft Teams as its prerequisite and names no licence, and MC1466757 names none."
audiences: ["m365-admin","service-owner","power-platform-admin","change-adoption"]
tags: ["teams","teams-workflows","sharepoint","sharepoint-lists","power-automate","data-policies","automation"]
sources:
  - title: "Microsoft 365 Roadmap 568932"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=568932"
    kind: "roadmap"
  - title: "MC1466757: Microsoft Teams: Collect information with List Form in Workflows"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1466757"
    kind: "message-center"
  - title: "Create flows in Microsoft Teams"
    url: "https://learn.microsoft.com/power-automate/teams/teams-app-create"
    kind: "learn"
  - title: "Overview of agent and app management and governance in Teams admin center"
    url: "https://learn.microsoft.com/microsoftteams/manage-apps"
    kind: "learn"
  - title: "Update-M365TeamsApp"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    kind: "learn"
  - title: "Connector action control"
    url: "https://learn.microsoft.com/power-platform/admin/connector-action-control"
    kind: "learn"
  - title: "Manage data policies"
    url: "https://learn.microsoft.com/power-platform/admin/prevent-data-loss"
    kind: "learn"
  - title: "Deep dive on specific licenses"
    url: "https://learn.microsoft.com/power-platform/admin/power-automate-licensing/deep-dive-on-specific-license"
    kind: "learn"
videos: []
related: ["microsoft-teams-workflow-to-automatically-add-tag-members-to-relevant-channels","data-policies","connectors"]
controls:
  - governs: "Whether the Workflows app is allowed or blocked for the organisation"
    scope: "app"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > app > Allow or Block"
      docs: "https://learn.microsoft.com/microsoftteams/manage-apps"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app-id> -IsBlocked <Boolean>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "Select the Workflows app. The Learn page says the Workflows app must be enabled in the Teams admin center for it to work. Needs the Teams Administrator role."
  - governs: "Which connector actions and triggers Power Automate flows may use (data policy connector action control)"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Data and privacy > Data policy > policy > Edit policy > Prebuilt connectors > connector > More actions > Configure connectors > Connector actions"
      docs: "https://learn.microsoft.com/power-platform/admin/connector-action-control"
    api:
      kind: "powershell"
      call: "New-PowerAppDlpPolicyConnectorConfigurations -TenantId $TenantId -PolicyName $PolicyName -NewDlpPolicyConnectorConfigurations $ConnectorConfigurations"
      docs: "https://learn.microsoft.com/power-platform/admin/connector-action-control"
    note: "Existing control, not specific to this trigger. Set-PowerAppDlpPolicyConnectorConfigurations updates existing rules. Applies to blockable connectors; the page says triggers can be allowed or blocked only through PowerShell."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-10-27T23:05:02"
changes:
  - date: "2026-11-22"
    note: "First briefing for this Launched item, based on Message Center post MC1466757 and Learn pages on the Workflows app, Teams app management and data policies."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 69 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 69
  confirmed: 63
  unconfirmed: 1
  contradicted: 5
  attempts: 1
  hash: "6651e53bed928348465ca9268e1bc873"
---

## What's changing

Teams Workflows gets a new trigger, **A form is submitted**, that runs a workflow each time someone submits a form built on a SharePoint list. The roadmap description says it "starts a workflow with a form to collect the information you need to run the rest of your workflow".

Microsoft's notice MC1466757 says individual answers become workflow variables. A creator can post one response value as a parent Teams channel message and publish the rest as threaded replies. Each submitted response is stored as a SharePoint list item, and the backing list can be pinned as a tab in a Teams channel for tracking and export. Users see the trigger when they create a workflow from scratch in the Workflows app. The notice says existing workflows that use the equivalent trigger in Power Automate are not affected.

The roadmap record lists the item as Launched, with a target of September CY2026, for Worldwide (Standard Multi-Tenant) on Android, Desktop, iOS, Mac and Web, in the General Availability and Targeted Release phases. MC1466757 (published 3 September 2026) gave a Targeted Release rollout from early to late September 2026 and a General Availability rollout from late September to late October 2026. It sets no act-by date. At the time of writing (November 2026) the Learn pages on creating flows in Teams do not describe this trigger, so its behaviour here is as the notice and roadmap describe it.

## Why it matters

This is a new way for any user who can create workflows to start storing form responses in SharePoint. Microsoft's notice says the feature "is enabled automatically" and that no admin action is required, so it arrives whether or not you plan for it.

What the responses contain, and who can read them, is decided by the SharePoint site and list the form is built on. The practical task is therefore communication: tell makers where to create forms and backing lists so that responses land in sites you already govern, as the notice recommends.

## Risk assessment

**Data exposure**

- Each response is a SharePoint list item, so access follows the site and list permissions of wherever the creator places the list (MC1466757). A form created in a loosely permissioned site exposes its answers to that site's audience.
- The notice says responses fall under existing SharePoint retention, compliance and information governance policies.
- A workflow can post a response value to a Teams channel and the rest as threaded replies, so answers can be copied into channel conversations.

**Security & identity**

- The notice says workflow executions use the connections and permissions of the workflow creator. If a creator leaves or loses access, the workflow depends on that identity.
- Flows created in the Workflows app are created in the organisation's default environment, so Power Automate data policies for that environment apply.

**Autonomy & actions**

- The trigger starts a workflow on each submission without a person approving each run. What the workflow does next is whatever its creator built.

**Change & support**

- Users get a new trigger in the Workflows app and may create new forms, lists or sites. The notice says controls that restrict SharePoint site or list creation, limit access to the Workflows app, or block the trigger through Power Automate data loss prevention (DLP) policies continue to apply.

## Cost and licensing

No licence or meter specific to this trigger is published at the time of writing (November 2026). The Learn page on creating flows in Teams lists an account with access to Microsoft Teams as the prerequisite for the Workflows app and names no licence, and MC1466757 names none.

Power Automate's licensing pages say that Microsoft 365 licences carry seeded rights to create and run cloud flows with standard connectors. This briefing does not establish which connector class the trigger falls in, so budget only for admin time (communication, documentation updates and permission reviews) until Microsoft publishes more.

The forms are backed by SharePoint lists, so responses are stored in SharePoint. The sources read give no storage figure for them.

## Scope

MC1466757 says users who can create workflows in Teams are affected, across Microsoft Teams, Teams Workflows and SharePoint Lists. Per the record, the item covers Worldwide (Standard Multi-Tenant) on Android, Desktop, iOS, Mac and Web, with Targeted Release first and General Availability after.

Users can build and run these workflows only if they already have permission to create workflows and to reach the underlying SharePoint resources (MC1466757). The Workflows app must be enabled in the Teams admin center for workflows to work, and flows created from it are located in the organisation's default environment. Administering the Teams admin center needs the Teams Administrator role.

## Governance guidance

### Before rollout

- Decide which SharePoint sites should hold form-backed lists, and tell makers to create forms there, as MC1466757 recommends.
- Check that the Workflows app is allowed in the Teams admin center (see the first controls row) if you want users to reach the trigger.
- Review the data policies that apply to the default environment, because flows from the Workflows app are created there.

### At rollout

- Notify users who build workflows about the new **A form is submitted** trigger and where to place forms.
- Update internal Teams Workflows documentation and any form-based process guidance, as the notice suggests.

### After rollout

- Review SharePoint permissions on sites that hold form-backed lists, since access to responses follows them.
- Check data policies and connector action rules against the trigger, using the second controls row.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Workflows app is allowed or blocked for the organisation</strong><br><small>App</small><br><small class="controls__note">Select the Workflows app. The Learn page says the Workflows app must be enabled in the Teams admin center for it to work. Needs the Teams Administrator role.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › app › Allow or Block <a href="https://learn.microsoft.com/microsoftteams/manage-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app-id&gt; -IsBlocked &lt;Boolean&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which connector actions and triggers Power Automate flows may use (data policy connector action control)</strong><br><small>Environment</small><br><small class="controls__note">Existing control, not specific to this trigger. Set-PowerAppDlpPolicyConnectorConfigurations updates existing rules. Applies to blockable connectors; the page says triggers can be allowed or blocked only through PowerShell.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Data policy › policy › Edit policy › Prebuilt connectors › connector › More actions › Configure connectors › Connector actions <a href="https://learn.microsoft.com/power-platform/admin/connector-action-control" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-PowerAppDlpPolicyConnectorConfigurations -TenantId $TenantId -PolicyName $PolicyName -NewDlpPolicyConnectorConfigurations $ConnectorConfigurations</code> <a href="https://learn.microsoft.com/power-platform/admin/connector-action-control" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft's notice says no new administrative controls are introduced and that existing SharePoint governance, Teams Workflows permissions and Power Automate DLP policies continue to apply. The rows above are those existing controls, not controls specific to this trigger.

The notice also names SharePoint site and list permissions, retention policies and restrictions on site or list creation. Those are not in the table because the notice names them without a path.

The connector action page says connector actions can be configured for blockable connectors, not unblockable ones, and the data policy walkthrough gives SharePoint as an example of a connector that is not blockable. The page does not say which connector the Workflows trigger belongs to; see the open questions. The Teams admin center needs the Teams Administrator role. For data policies, the Learn data policy page names Environment Admin or Power Platform admin permissions, while the connector action page signs in as a System Administrator.

## Open questions

- Which connector and data policy classification does the **A form is submitted** trigger use, and can a data policy or connector action rule block it when SharePoint is described as an unblockable connector? Watch the Power Platform data policy pages and Message center.
- Does this trigger need a licence beyond those that include Teams, and is it a standard or premium connector trigger? No Microsoft page read states it.
- Are the forms and backing lists created in a site chosen by the creator or in a default location, and can administrators restrict where they are created? The notice says only that existing site and list creation restrictions apply.
- Is there an audit event or report for form submissions that start workflows? Nothing read describes one.

<!-- rationale
risk: Low. Microsoft's notice MC1466757 says responses are stored as SharePoint list items under existing permissions, retention and compliance policies, and that no new administrative controls are introduced.
cost: Low. The only cost the sources show is admin time to communicate and review; a licence or meter specific to this trigger is not yet published.
impact: Medium. Users who can create workflows in Teams see a new trigger and can start collecting form responses in SharePoint lists, which may create new lists and sites.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Governance controls: data-policy permissions / role: Environment Admin or Power Platform admin permissions are the roles needed for data policies, without a Dataverse qualification. | Found: To follow the steps for environment-level policies, you need to have Power Apps Environment Admin permissions. For environments with a Dataverse database, you need to be assigned the System Administrator role instead. | Fix: Replace the data-policy role sentence with: 'For tenant-level data policies, sign in as a Power Platform Administrator. For environment-level policies, use Power Apps Environment Admin permissions, or the System Administrator role instead when the environment has a Dataverse database.' Cite https://learn.microsoft.com/power-platform/admin/prevent-data-loss. | Source: https://learn.microsoft.com/power-platform/admin/prevent-data-loss
- [contradicted, blocker] front matter: licensing.model; licensing notes; Cost and licensing; Open questions / licensing: The licensing entitlement is unknown because Microsoft has not established the trigger's connector class. | Found: | Power Automate | Standard | All Power Automate regions | ... When a form is submitted (preview) ... This operation triggers a flow when a list, document generation, or file upload form is submitted. | Fix: Set licensing.model to 'included'. Replace the entitlement uncertainty with: 'The SharePoint connector is Standard in Power Automate and documents the equivalent When a form is submitted (preview) trigger for list forms. Microsoft 365 seeded licences entitle users to create and run cloud flows with standard connectors; additional actions must be assessed against their own connector requirements.' Cite https://learn.microsoft.com/connectors/sharepointonline/ and the already cited https://learn.microsoft.com/power-platform/admin/power-automate-licensing/deep-dive-on-specific-license. Remove the open question asserting that no page states the connector class. | Source: https://learn.microsoft.com/connectors/sharepointonline/
- [contradicted, blocker] Cost and licensing; Governance controls; Open questions / absence: Microsoft documentation does not establish which connector or connector class the equivalent list-form trigger belongs to. | Found: # SharePoint ... | Power Automate | Standard | All Power Automate regions | ... When a form is submitted (preview) ... Operation ID: GetOnNewItemsFromForm | Fix: Replace the connector-identity and class uncertainty with: 'The SharePoint connector reference documents the equivalent When a form is submitted (preview) trigger, operation GetOnNewItemsFromForm, and classifies the connector as Standard for Power Automate. SharePoint is not blockable, and connector action control does not support unblockable connectors. MC1466757 nevertheless says existing DLP policies that block the trigger continue to apply; the notice and connector-control documentation do not explain that difference.' Cite https://learn.microsoft.com/connectors/sharepointonline/ alongside the existing connector-action-control and prevent-data-loss sources. Remove the open question asking which connector or Standard/Premium class it uses. | Source: https://learn.microsoft.com/connectors/sharepointonline/
- [contradicted, blocker] Open questions: report for submission-started workflows / absence: Nothing in Microsoft documentation describes a report for workflows started by form submissions. | Found: Run history lists all executions of a cloud flow. It includes a run's status, start time, duration, inputs, and outputs. ... At the top of the page, select Download CSV. | Fix: Replace the combined audit/report question with: 'An audit event specific to this Teams list-form trigger was not found. General cloud-flow run history lists executions, including status, start time, duration, inputs and outputs, and can be downloaded as CSV.' Cite https://learn.microsoft.com/power-automate/privacy-dsr-export. | Source: https://learn.microsoft.com/power-automate/privacy-dsr-export
- [unsupported, major] Why it matters / behaviour: What the responses contain is decided by the SharePoint site and list the form is built on. | Found: Searched: SharePoint list forms responses questions form fields site list columns; list forms columns questions. Read MC1466757, SharePoint connector form trigger and Get form metadata text, and list-form-configuration excerpts; none says the site decides response content. | Fix: Remove 'What the responses contain, and' and replace the sentence with: 'Access to form responses follows existing SharePoint site and list permissions.' MC1466757 states that narrower fact.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance controls table / admin-path: Security > Data and privacy > Data policy > policy > Edit policy > Prebuilt connectors > connector > More actions > Configure connectors > Connector actions reaches connector action control. | Found: Select Configure connectors and then Connector actions. ... Use the side panel to allow or deny specific actions. | Fix: End the path with '> Allow or Deny' and use 'blockable connector' for the connector placeholder: 'Security > Data and privacy > Data policy > policy > Edit policy > Prebuilt connectors > blockable connector > More actions > Configure connectors > Connector actions > Allow or Deny'. Keep the existing note that triggers are PowerShell-only. | Source: https://learn.microsoft.com/power-platform/admin/connector-action-control
- [contradicted, minor] Governance guidance: After rollout; Governance controls / consistency: The checklist asks readers to review SharePoint permissions, but the controls table has no corresponding row. | Found: Review SharePoint permissions on sites that hold form-backed lists ... Those are not in the table because the notice names them without a path. | Fix: Remove the 'Review SharePoint permissions on sites that hold form-backed lists' checklist bullet. Keep the notice's permission facts in the prose; do not add a control row as part of this correction.
- [supported, minor] What's changing: documentation background; Cost and licensing; Governance controls / behaviour: The briefing describes the notice's launched Teams experience without identifying the equivalent connector reference's preview label. | Found: When a form is submitted (preview) ... This operation triggers a flow when a list, document generation, or file upload form is submitted. | Fix: Add: 'The Teams roadmap item is Launched; the equivalent SharePoint connector operation is still labelled When a form is submitted (preview) in its reference.' Cite https://learn.microsoft.com/connectors/sharepointonline/. Do not change the roadmap status or infer that all list forms are in AI in SharePoint preview. | Source: https://learn.microsoft.com/connectors/sharepointonline/
- [supported, minor] Risk assessment: Security & identity / behaviour: A creator leaving or losing access creates a dependency risk through that identity's connections. | Found: An orphaned flow is a flow that no longer has a valid owner. These flows can fail if they use connections tied to that user account. | Fix: Cite https://learn.microsoft.com/troubleshoot/power-platform/power-automate/flow-management/manage-orphan-flow-when-owner-leaves-org for the creator-departure dependency sentence. | Source: https://learn.microsoft.com/troubleshoot/power-platform/power-automate/flow-management/manage-orphan-flow-when-owner-leaves-org
-->
