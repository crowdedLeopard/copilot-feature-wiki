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
  model: "included"
  notes: "Microsoft 365 licences entitle users to create and run cloud flows with standard connectors, and the SharePoint connector is Standard in Power Automate. No licence or meter specific to this trigger is published; the Teams flows page and MC1466757 name none."
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
  - title: "SharePoint - Connectors"
    url: "https://learn.microsoft.com/connectors/sharepointonline/"
    kind: "learn"
  - title: "Data policy connector classification"
    url: "https://learn.microsoft.com/power-platform/admin/dlp-connector-classification"
    kind: "learn"
  - title: "Respond to personal data export requests (Microsoft Entra ID)"
    url: "https://learn.microsoft.com/power-automate/privacy-dsr-export"
    kind: "learn"
  - title: "Manage orphaned flows when the owner leaves the organization"
    url: "https://learn.microsoft.com/troubleshoot/power-platform/power-automate/flow-management/manage-orphan-flow-when-owner-leaves-org"
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
      path: "Security > Data and privacy > Data policy > policy > Edit policy > Prebuilt connectors > blockable connector > More actions > Configure connectors > Connector actions > Allow or Deny"
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
  - date: "2026-11-22"
    note: "Correction: licensing set to included on the SharePoint connector's Standard class, data policy roles and connector-action path fixed, response-content claim removed, run history noted."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 71 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 71
  confirmed: 71
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "44a6ef79ecb02dd4d83c1c6dc5f9b001"
---

## What's changing

Teams Workflows gets a new trigger, **A form is submitted**, that runs a workflow each time someone submits a form built on a SharePoint list. The roadmap description says it "starts a workflow with a form to collect the information you need to run the rest of your workflow".

Microsoft's notice MC1466757 says individual answers become workflow variables. A creator can post one response value as a parent Teams channel message and publish the rest as threaded replies. Each submitted response is stored as a SharePoint list item, and the backing list can be pinned as a tab in a Teams channel for tracking and export. Users see the trigger when they create a workflow from scratch in the Workflows app. The notice says existing workflows that use the equivalent trigger in Power Automate are not affected.

The roadmap record lists the item as Launched, with a target of September CY2026, for Worldwide (Standard Multi-Tenant) on Android, Desktop, iOS, Mac and Web, in the General Availability and Targeted Release phases. MC1466757 (published 3 September 2026) gave a Targeted Release rollout from early to late September 2026 and a General Availability rollout from late September to late October 2026. It sets no act-by date. At the time of writing (November 2026) the Learn pages on creating flows in Teams do not describe this trigger, so its behaviour here is as the notice and roadmap describe it. The Teams roadmap item is Launched; the equivalent SharePoint connector operation is still labelled When a form is submitted (preview) in its reference.

## Why it matters

This is a new way for any user who can create workflows to start storing form responses in SharePoint. Microsoft's notice says the feature "is enabled automatically" and that no admin action is required, so it arrives whether or not you plan for it.

Access to form responses follows existing SharePoint site and list permissions. The practical task is therefore communication: tell makers where to create forms and backing lists so that responses land in sites you already govern, as the notice recommends.

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

Power Automate's licensing pages say that Microsoft 365 licences carry seeded rights to create and run cloud flows with standard connectors. The SharePoint connector is Standard in Power Automate and documents the equivalent When a form is submitted (preview) trigger for list forms. Additional actions in a workflow must be assessed against their own connector requirements. Beyond that, the cost the sources show is admin time (communication, documentation updates and permission reviews).

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

- Check data policies and connector action rules against the trigger, using the second controls row.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Workflows app is allowed or blocked for the organisation</strong><br><small>App</small><br><small class="controls__note">Select the Workflows app. The Learn page says the Workflows app must be enabled in the Teams admin center for it to work. Needs the Teams Administrator role.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › app › Allow or Block <a href="https://learn.microsoft.com/microsoftteams/manage-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app-id&gt; -IsBlocked &lt;Boolean&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which connector actions and triggers Power Automate flows may use (data policy connector action control)</strong><br><small>Environment</small><br><small class="controls__note">Existing control, not specific to this trigger. Set-PowerAppDlpPolicyConnectorConfigurations updates existing rules. Applies to blockable connectors; the page says triggers can be allowed or blocked only through PowerShell.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Data policy › policy › Edit policy › Prebuilt connectors › blockable connector › More actions › Configure connectors › Connector actions › Allow or Deny <a href="https://learn.microsoft.com/power-platform/admin/connector-action-control" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-PowerAppDlpPolicyConnectorConfigurations -TenantId $TenantId -PolicyName $PolicyName -NewDlpPolicyConnectorConfigurations $ConnectorConfigurations</code> <a href="https://learn.microsoft.com/power-platform/admin/connector-action-control" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft's notice says no new administrative controls are introduced and that existing SharePoint governance, Teams Workflows permissions and Power Automate DLP policies continue to apply. The rows above are those existing controls, not controls specific to this trigger.

The notice also names SharePoint site and list permissions, retention policies and restrictions on site or list creation. Those are not in the table because the notice names them without a path.

The connector action page says connector actions can be configured for blockable connectors, not unblockable connectors or custom connectors, and the data policy connector classification page lists SharePoint among the connectors that cannot be blocked. The SharePoint connector reference documents the equivalent When a form is submitted (preview) trigger, operation GetOnNewItemsFromForm, and classifies the connector as Standard for Power Automate. MC1466757 nevertheless says existing DLP policies that block the trigger continue to apply; the notice and connector-control documentation do not explain that difference.

The Teams admin center needs the Teams Administrator role. For tenant-level data policies, sign in as a Power Platform Administrator. For environment-level policies, use Power Apps Environment Admin permissions, or the System Administrator role instead when the environment has a Dataverse database.

## Open questions

- How can a data policy block this trigger, given that MC1466757 says policies that block it continue to apply while the SharePoint connector is documented as unblockable? Watch the Power Platform data policy pages and Message center.
- Are the forms and backing lists created in a site chosen by the creator or in a default location, and can administrators restrict where they are created? The notice says only that existing site and list creation restrictions apply.
- Is there an audit event specific to this Teams list-form trigger? None was found at the time of writing (November 2026). General cloud-flow run history lists executions, including status, start time, duration, inputs and outputs, and can be downloaded as CSV.

<!-- rationale
risk: Low. Microsoft's notice MC1466757 says responses are stored as SharePoint list items under existing permissions, retention and compliance policies, and that no new administrative controls are introduced.
cost: Low. The only cost the sources show is admin time to communicate and review; a licence or meter specific to this trigger is not yet published.
impact: Medium. Users who can create workflows in Teams see a new trigger and can start collecting form responses in SharePoint lists, which may create new lists and sites.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance controls: second table row / admin-path: The printed Power Platform admin center path reaches the connector-action Allow or Deny control. | Found: On the Data protection and privacy page, select Data policy. In the Prebuilt connectors section, select a Blockable connector and then select More actions next to it. Select Configure connectors and then Connector actions. | Fix: Include the omitted page heading: 'Security > Data and privacy > Data protection and privacy > Data policy > policy > Edit policy > Prebuilt connectors > blockable connector > More actions > Configure connectors > Connector actions > Allow or Deny' in controls[1].ui.path and its rendered table cell. | Source: https://learn.microsoft.com/power-platform/admin/connector-action-control
- [supported, minor] Governance controls; Open questions / applicability: The connector classification page lists SharePoint among connectors that cannot be blocked using classic data policies. | Found: The following connectors can't be blocked by using data policies. SharePoint Use advanced connector policies (ACP) to limit or block these connectors. | Fix: Clarify the existing sentence to say 'The connector classification page lists SharePoint among connectors that cannot be blocked using classic data policies; it also notes that advanced connector policies (ACP) can limit or block those connectors.' In the first open question, replace 'while the SharePoint connector is documented as unblockable' with 'while classic data policies document SharePoint as unblockable'. The cited classification page supports both statements; this does not resolve which policy mechanism the notice means. | Source: https://learn.microsoft.com/power-platform/admin/dlp-connector-classification
- [supported, minor] Governance controls / role: Tenant-level data-policy administration uses the Power Platform Administrator role. | Found: To follow the steps described in this article for tenant-level policies, sign in as a user with the Power Platform Administrator role. | Fix: Keep this statement and add: 'The connector action control article separately instructs administrators to sign in as a System Administrator.' Cite https://learn.microsoft.com/power-platform/admin/connector-action-control, which says 'Sign in to the Power Platform admin center as a System Administrator.' This preserves the differing role instructions rather than silently selecting one. | Source: https://learn.microsoft.com/power-platform/admin/prevent-data-loss
-->
