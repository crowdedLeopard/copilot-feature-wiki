---
title: "Power Automate: direct triggers for desktop flows"
slug: "power-automate-direct-triggers-for-desktop-flows"
roadmapId: 579975
topic: "power-platform"
products: ["Power Automate"]
summary: "Microsoft plans direct triggers for desktop flows (preview target January 2027). Learn documents a Scheduled triggers preview that starts desktop flows without a cloud flow; makers opt in per trigger. Direct-trigger licensing is not yet published."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop"]
targetDate: "March CY2027"
previewDate: "January CY2027"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Scheduled triggers (preview) require the licensing and capacity for the selected attended or unattended run mode. Power Automate Premium includes attended desktop automation; the licensing overview directs unattended desktop flows to Process licenses or pay-as-you-go. No direct-trigger-specific licensing change is published."
audiences: ["power-platform-admin","maker","finops"]
tags: ["power-automate","desktop-flows","triggers","automation","data-policies"]
sources:
  - title: "Microsoft 365 Roadmap 579975"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=579975"
    kind: "roadmap"
  - title: "Schedule desktop flows with Scheduled triggers (preview)"
    url: "https://learn.microsoft.com/power-automate/schedule-desktop-flows"
    kind: "learn"
  - title: "Types of Power Automate licenses"
    url: "https://learn.microsoft.com/power-platform/admin/power-automate-licensing/types"
    kind: "learn"
  - title: "Pay-as-you-go meters"
    url: "https://learn.microsoft.com/power-platform/admin/pay-as-you-go-meters"
    kind: "learn"
  - title: "Trigger desktop flows from cloud flows"
    url: "https://learn.microsoft.com/power-automate/desktop-flows/trigger-desktop-flows"
    kind: "learn"
  - title: "Manage desktop flow connections"
    url: "https://learn.microsoft.com/power-automate/desktop-flows/desktop-flow-connections"
    kind: "learn"
  - title: "Data loss prevention (DLP) policy creation"
    url: "https://learn.microsoft.com/power-automate/prevent-data-loss"
    kind: "learn"
  - title: "Manage data policies"
    url: "https://learn.microsoft.com/power-platform/admin/prevent-data-loss"
    kind: "learn"
  - title: "New-DlpPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy"
    kind: "learn"
  - title: "Run desktop flows via URL or desktop shortcuts"
    url: "https://learn.microsoft.com/power-automate/desktop-flows/run-desktop-flows-url-shortcuts"
    kind: "learn"
videos: []
related: ["power-automate-schedule-desktop-flows-directly-with-scheduled-triggers","data-policies","power-automate-cloud-flows-share-process-license-capacity-across-workflows"]
controls:
  - governs: "Whether direct triggers can be used, or switched off"
    scope: "tenant"
    ui: null
    api: null
    note: "No tenant-wide availability switch for direct triggers is documented at the time of writing (November 2026)."
  - governs: "Which desktop flow modules and connectors can be used in an environment (data policy)"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Settings > Data and privacy > Data policy"
      docs: "https://learn.microsoft.com/power-platform/admin/prevent-data-loss"
    api:
      kind: "powershell"
      call: "New-DlpPolicy -NewPolicy $NewPolicy"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy"
    note: "General control: data policies govern desktop flow modules. Microsoft has not documented whether desktop flow connector policies govern the new triggering route."
confidence: "low"
created: "2026-11-18"
updated: "2026-11-24"
roadmapModified: "2026-11-12T01:35:00"
changes:
  - date: "2026-11-18"
    note: "New briefing: roadmap item 579975, direct triggers for desktop flows, In development with a January CY2027 preview target."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 54 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Correction: data policy admin path now includes Settings; data policy caveat narrowed; absence of a meter replaced with the documented pay-as-you-go desktop flow meter; cloud-flow route no longer described as the only one; licensing qualified."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 56 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Correction: cost rated variable with the pay-as-you-go flow-run meter named; the unattended licensing rule is stated as general, with direct-trigger licensing not yet published."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 65 statements confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 10 of 60 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Correction: now cites the Scheduled triggers (preview) page for the documented default, per-trigger disable, roles, prerequisites, identity and rollout; licensing model set to mixed and default to user-opt-in; tenant-wide switch gap narrowed."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 83 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 4
verification:
  status: "held"
  date: "2026-11-24"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 83
  confirmed: 80
  unconfirmed: 2
  contradicted: 1
  attempts: 2
  hash: "bb05664f887fc68f4cc2dd51377a9440"
---

## What's changing

Microsoft plans to add direct triggers to desktop flows, so that a desktop flow can start in response to a supported event without an intermediary cloud flow. The roadmap item says this "simplifies automation design and reduces the effort required to connect desktop flows to business processes".

Learn now documents Scheduled triggers (preview), which run desktop flows on a recurring schedule without a cloud flow ([Schedule desktop flows with Scheduled triggers (preview)](https://learn.microsoft.com/power-automate/schedule-desktop-flows)). The roadmap description does not say which events will be supported or whether Scheduled triggers is the capability it describes, and Learn does not establish that every supported event contemplated by the roadmap is available.

For comparison, Learn documents a current route: a cloud flow uses the action **Run a flow built with Power Automate for desktop** to start a desktop flow on a registered machine or machine group, through a desktop flow connection.

The roadmap item is In development. Microsoft's targets are a preview in January CY2027 and general availability in March CY2027, for Worldwide (Standard Multi-Tenant) on the Desktop platform. These are targets, not commitments. Learn describes Scheduled triggers as a preview feature gradually rolling out across regions, which might not yet be available in your region.

## Why it matters

Today, Learn documents cloud flows as one way to trigger desktop flows, and several controls and licence checks are described around that route: the desktop flow connection, the machine, and the licence of the connection's creator. If desktop flows can start from events directly, the service owner needs to know which of those checks still apply. Microsoft has not said.

For Scheduled triggers (preview), users create a scheduled trigger and choose Enable to activate it; leaving Enable off saves it disabled. Microsoft has not stated arrival behaviour for any broader event-trigger capability beyond this documented scheduling preview, so no source says existing flows will change. Treat this as an optional capability to review: read the Scheduled triggers preview documentation, and decide who may use it and where.

## Risk assessment

**Data exposure**
- The roadmap does not say what data an event carries into a desktop flow or whether the flow can pass data back out. Check which inputs a trigger supplies once Microsoft documents them.
- Data policies govern desktop flow modules (see the controls table). Microsoft has not documented whether desktop flow connector policies govern the new triggering route.

**Security & identity**
- Scheduled triggers (preview) select an execution connection reference for a machine or machine group; connection creation selects authentication and supplies credentials or a Windows credential. Identity details for broader event-trigger cases remain unpublished. For cloud-triggered runs, Learn names the creator of the desktop flow connection as the user who needs the licence; confirm whether that rule carries over.
- For Scheduled triggers (preview), the schedule owner and users assigned the Power Automate Operator role can manage schedules. Operator permissions for Flow trigger and Flow trigger instance apply across the environment and do not grant permission to edit the desktop flow definition.
- Learn warns that before using a machine to run desktop flows from the cloud, the machine should be secured and its admins trusted. Confirm whether the same applies to direct triggers.

**Autonomy & actions**
- The roadmap describes automations that "start in response to supported events". An event could therefore start a flow without a person or a cloud flow initiating it. Scheduled triggers (preview) start a desktop flow on a recurrence the trigger's owner sets. Microsoft has not documented an approval step or a limit on trigger frequency.

**Change & support**
- Cloud-triggered runs are documented with a limit of 70 desktop flow runs per minute for every connection. Microsoft has not said whether a limit applies to direct triggers.
- No tenant-wide availability switch is documented at the time of writing (November 2026). For Scheduled triggers (preview), the Power Automate route is Automation center > Manage > Scheduled triggers (Preview) > Overview > scheduled trigger > More commands > Disable; disabling stops future scheduled runs.

## Cost and licensing

Scheduled triggers (preview) require the licensing and capacity for the selected attended or unattended run mode (Learn page "Schedule desktop flows with Scheduled triggers (preview)"). Power Automate Premium includes attended desktop automation; the licensing overview directs unattended desktop flows to Process licenses or pay-as-you-go (Learn page "Types of Power Automate licenses"). No direct-trigger-specific licensing change is published, and the roadmap item names no licence or meter.

For desktop flows started from a cloud flow, the Learn page "Trigger desktop flows from cloud flows" lists a prerequisite of the appropriate licence for attended runs, or an unattended add-on for unattended runs, held by the creator of the connection. The licensing overview instead says to subscribe to Power Automate Process licenses or enable pay-as-you-go for unattended desktop flows. The overview states this rule for unattended desktop flows generally, not just cloud-triggered runs; direct-trigger-specific licensing changes have not been published.

Microsoft documents the Power Automate flow-run meter in preview for desktop flows in pay-as-you-go environments; attended charges depend on licence entitlements and unattended runs are charged per run (Learn page "Pay-as-you-go meters"). No direct-trigger-specific rate or exception is published. Indirect cost is admin and maker time to review the feature once it is documented.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant) as the cloud and Desktop as the platform, with release phases of Preview and General Availability. Other clouds are not listed on the roadmap item; that is a record fact, not a statement that the feature is unavailable elsewhere.

Scheduled triggers (preview) require a work or school account with access to the target environment, a published desktop flow the user owns or co-owns, a machine or machine group registered in the same environment, a connection reference, and the licensing and capacity for the selected run mode. The schedule owner and Power Automate Operator can manage Scheduled triggers (preview); Operator permissions for Flow trigger and Flow trigger instance apply throughout the environment, without granting permission to edit the underlying desktop flow. Learn describes Scheduled triggers as gradually rolling out across regions. User scope, roles, prerequisites and rollout mechanics for broader event-trigger cases are not yet published.

Learn also describes a cloud-flow route today, which needs a registered machine or machine group, a work or school account and a desktop flow connection.

## Governance guidance

### Before rollout
- Inventory the desktop flows and machines that cloud flows trigger today, so you know what a second way of starting them would affect.
- Check which data policy in your tenant covers desktop flow modules and the desktop flow connector (see the data policy row in the controls table), so you know where the existing rules sit.
- Brief makers and RPA developers that a roadmap item plans direct triggers, and that Learn describes Scheduled triggers as a preview feature not meant for production use; ask them to hold production use.

### At rollout
- Read the Scheduled triggers (preview) documentation, and the Learn page for direct triggers if one is published, and confirm which licence, role and machine prerequisites apply before anyone enables a trigger.
- Check whether the data policy row covers direct triggers once Microsoft documents how they are governed.

### After rollout
- Review which desktop flows have a scheduled trigger and who owns them, using the Overview tab under Scheduled triggers (Preview) in Automation center.
- Watch Message center and the roadmap item for the preview and general availability dates.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether direct triggers can be used, or switched off</strong><br><small>Tenant</small><br><small class="controls__note">No tenant-wide availability switch for direct triggers is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which desktop flow modules and connectors can be used in an environment (data policy)</strong><br><small>Environment</small><br><small class="controls__note">General control: data policies govern desktop flow modules. Microsoft has not documented whether desktop flow connector policies govern the new triggering route.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Settings › Data and privacy › Data policy <a href="https://learn.microsoft.com/power-platform/admin/prevent-data-loss" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpPolicy -NewPolicy $NewPolicy</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No tenant-wide availability switch for direct triggers is documented at the time of writing (November 2026), which is why the first row has no path or call. For Scheduled triggers (preview), Learn documents a per-trigger disable: Automation center > Manage > Scheduled triggers (Preview) > Overview > scheduled trigger > More commands > Disable. Disabling stops future scheduled runs without deleting the configuration.

For Scheduled triggers (preview), the schedule owner and users assigned the Power Automate Operator role can manage schedules. Operator permissions for Flow trigger and Flow trigger instance apply across the environment and do not grant permission to edit the desktop flow definition.

Data policies are a general control. Learn says a data policy can manage desktop flow modules and cloud flow connectors, and that the desktop flow connector can be governed like any other connector. Microsoft has not documented whether desktop flow connector policies govern the new triggering route. Learn also warns that when desktop flow modules are added to a data policy, noncompliant desktop flows are evaluated against it and suspended.

Learn says tenant-level data policies need the Power Platform Administrator role, and environment-level policies need Environment Admin, or System Administrator where the environment has a Dataverse database.

## Open questions

- Which events beyond a recurring schedule will direct triggers support, and is Scheduled triggers (preview) the capability the roadmap item describes? Watch the roadmap item and the Scheduled triggers Learn page.
- Does any direct-trigger-specific licence or meter apply beyond the licensing and capacity for the selected run mode that Learn lists for Scheduled triggers, given that the licensing overview points to Process licenses or pay-as-you-go? Watch the Power Automate licensing pages.
- What happens on arrival for event triggers beyond the Scheduled triggers preview, where each user creates a trigger and chooses Enable? Watch Message center.
- Will a tenant-wide setting, data policy or API control direct triggers, and do existing data policies on the desktop flow connector apply?
- Which account and machine session does a directly triggered flow run under for event-trigger cases beyond Scheduled triggers?

<!-- rationale
risk: Medium. The roadmap describes events starting desktop flows with no cloud flow in between. Learn documents per-trigger disable for Scheduled triggers (preview) but no tenant-wide switch, and whether data policies cover the new route is unconfirmed.
cost: Variable. The preview Power Automate flow-run meter charges desktop flows in pay-as-you-go environments; attended charges depend on licence entitlements and unattended runs are charged per run. No direct-trigger-specific rate or exception is published.
impact: Medium. Makers and RPA developers who build desktop flows are the people affected; the roadmap names no change for other users.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] front matter: defaultState / default: The roadmap's direct-trigger capability has a user-opt-in default. | Found: Searched: direct triggers desktop flows enabled default existing flows automatic admin switch. Read roadmap record and schedule-desktop-flows. Only Scheduled triggers has documented maker activation; no source identifies it as the entire roadmap capability. | Fix: Set defaultState to unknown. Keep the documented Enable behaviour explicitly scoped to Scheduled triggers (preview), and retain the sentence that Microsoft has not stated arrival behaviour for the broader event-trigger capability.
- [unsupported, blocker] Governance guidance: After rollout / admin-path: Readers can identify the current owner of scheduled triggers using the Overview tab. | Found: Searched: Power Automate Scheduled triggers Overview owner Created by schedule owner columns. Opened schedule-desktop-flows; Overview documents Created by, not Owner. Read Flow Trigger reference excerpts distinguishing writable ownerid from record creation. | Fix: Remove 'and who owns them' from the Overview-based checklist instruction. The scheduling page documents a Created by column, not a current-owner column; do not describe the creator as necessarily the current owner.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].note; Risk assessment: Data exposure; Governance controls / applicability: Data policies govern desktop flow modules. | Found: Power Automate allows you to create and enforce DLP policies that classify desktop flow modules and individual module actions as Business, Non-business, or Blocked. | Fix: Narrow the risk rationale's 'whether data policies cover the new route is unconfirmed' to 'whether desktop flow connector policies govern the new triggering route is unconfirmed', matching the body and row note rather than casting doubt on the documented module policies. | Source: https://learn.microsoft.com/power-automate/prevent-data-loss
- [supported, minor] Risk assessment: Change & support; Governance controls / admin-path: Scheduled triggers can be disabled through Automation center > Manage > Scheduled triggers (Preview) > Overview > scheduled trigger > More commands > Disable. | Found: select the environment where you want to manage scheduled triggers. In the left navigation pane, select Automation center. Under Manage, select Scheduled triggers (Preview). On the Overview tab, open the More commands menu | Fix: Include environment selection: Power Automate > environment > Automation center > Manage > Scheduled triggers (Preview) > Overview > scheduled trigger > More commands > Disable, as documented at https://learn.microsoft.com/power-automate/schedule-desktop-flows. | Source: https://learn.microsoft.com/power-automate/schedule-desktop-flows
- [supported, minor] summary; front matter: licensing.notes; Cost and licensing; Open questions / absence: No direct-trigger-specific licensing change is published. | Found: Searched: direct triggers desktop price meter licensing; direct triggers desktop flows pay-as-you-go rate exemption exception licensing change. Opened schedule-desktop-flows and licensing/types; run-mode requirements are stated, not a distinct direct-trigger entitlement. | Fix: Replace the summary's 'Direct-trigger licensing is not yet published.' with 'No direct-trigger-specific licensing change is published.' This preserves the distinction from the documented run-mode licensing in the body.
- [supported, minor] controls[1].ui / admin-path: Power Platform admin center > Security > Settings > Data and privacy > Data policy reaches the data-policy list. | Found: Select Security in the navigation pane. In the Security pane, under Settings, select Data and privacy. In the Data protection and privacy screen, select the Data policy section. Select + New Policy. | Fix: For configuring an existing policy, extend the path to 'Security > Settings > Data and privacy > Data policy > policy > Edit Policy > Prebuilt connectors > Assign connectors'; the cited page documents selection and connector classification beyond the list. | Source: https://learn.microsoft.com/power-platform/admin/prevent-data-loss
- [contradicted, minor] Governance guidance: After rollout; controls / consistency: The checklist's Scheduled triggers review control is represented in the controls table. | Found: Checklist: 'Review which desktop flows have a scheduled trigger and who owns them, using the Overview tab'. Table rows: tenant-wide availability switch; desktop flow modules and connectors data policy. | Fix: The After rollout step directing readers to review schedules in Overview has no corresponding control row. Remove that navigation-specific checklist step; a correction need not add a row.
-->
