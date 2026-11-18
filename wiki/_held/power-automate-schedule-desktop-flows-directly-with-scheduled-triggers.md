---
title: "Power Automate: schedule desktop flows directly with scheduled triggers"
slug: "power-automate-schedule-desktop-flows-directly-with-scheduled-triggers"
roadmapId: 573278
topic: "power-platform"
products: ["Power Automate"]
summary: "Makers can run desktop flows on a recurring schedule from the Power Automate automation center, without a scheduled cloud flow in between. Licensing and admin controls for it are not yet published; review fit and cost."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: "September CY2026"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn describes desktop flow licensing generally: a licence for attended runs, an unattended add-on or Process licence for unattended runs, or pay-as-you-go. Nothing specific to scheduled triggers is yet published."
audiences: ["power-platform-admin","maker","finops"]
tags: ["power-automate","desktop-flows","triggers","automation","pay-as-you-go","data-policies","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 573278"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=573278"
    kind: "roadmap"
  - title: "Trigger desktop flows from cloud flows"
    url: "https://learn.microsoft.com/power-automate/desktop-flows/trigger-desktop-flows"
    kind: "learn"
  - title: "Manage machines"
    url: "https://learn.microsoft.com/power-automate/desktop-flows/manage-machines"
    kind: "learn"
  - title: "Explore Power Automate's automation center"
    url: "https://learn.microsoft.com/power-automate/automation-center-overview"
    kind: "learn"
  - title: "Types of Power Automate licenses"
    url: "https://learn.microsoft.com/power-platform/admin/power-automate-licensing/types"
    kind: "learn"
  - title: "Pay-as-you-go meters"
    url: "https://learn.microsoft.com/power-platform/admin/pay-as-you-go-meters"
    kind: "learn"
  - title: "Run unattended desktop flows"
    url: "https://learn.microsoft.com/power-automate/desktop-flows/run-unattended-desktop-flows"
    kind: "learn"
  - title: "Run desktop flows sequentially"
    url: "https://learn.microsoft.com/power-automate/desktop-flows/run-desktop-flows-sequentially"
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
videos: []
related: ["power-automate-direct-triggers-for-desktop-flows","power-automate-bring-your-own-connection-in-attended-unattended-cloud-triggered-runs","data-policies"]
controls:
  - governs: "Whether scheduled triggers can be used, or switched off"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no setting for scheduled triggers at the time of writing (November 2026)."
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
    note: "General control: data policies govern desktop flow modules. How scheduled triggers themselves are governed is not documented."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-10-06T22:56:31"
changes:
  - date: "2026-11-18"
    note: "New briefing: roadmap item 573278, scheduled triggers for desktop flows, status Launched; Learn does not yet describe the feature, so controls and licensing specific to it are not yet published."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 6 of 68 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 68
  confirmed: 62
  unconfirmed: 0
  contradicted: 6
  attempts: 1
  hash: "5a903d98d9579757177946d97078d061"
---

## What's changing

Makers can schedule a desktop flow directly, instead of building a scheduled cloud flow that calls it. The roadmap item says scheduled triggers let makers run desktop flows on a recurring schedule from the Power Automate automation center, with daily, weekly, monthly, hourly or custom recurrence, a choice of execution machine or machine group, and a central view of upcoming scheduled runs. It says the feature covers attended and unattended desktop flows.

Microsoft Learn does not describe scheduled triggers yet, so what follows about behaviour is the roadmap's description. Learn does document the route available today: its machines page says Power Automate lets you trigger desktop flows from cloud flows using events, schedules and buttons, and its trigger page lists a registered machine or machine group, a work or school account and a desktop flow connection as prerequisites. Learn also describes the automation center as a monitoring hub, with a Runs page for cloud and desktop flow execution data and a Machines page for machine and machine group status.

The roadmap item has status Launched, with a preview date of September CY2026 and a target date of October CY2026. It lists General Availability and Preview as release phases, the Web platform, and Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD as clouds.

## Why it matters

Today, a recurring desktop flow run needs a scheduled cloud flow, and that cloud flow's owner, connection and data policy checks are part of how the run is governed. If makers can schedule desktop flows from the automation center instead, the service owner needs to know which of those checks still apply. Microsoft Learn does not say.

Microsoft has not stated what happens on arrival, so no source says existing flows or schedules change. Treat it as an optional capability that each maker chooses, and review it now because every recurring run adds to run counts, machine queues and, in pay-as-you-go environments, spend.

## Risk assessment

**Data exposure**
- The roadmap does not say which identity or connection a scheduled run uses, or what data a scheduled run can reach beyond the desktop flow itself. Confirm both before makers schedule flows that touch sensitive applications.
- Data policies classify desktop flow modules as Business, Non-business or Blocked (see the controls table), and Learn says noncompliant desktop flows are suspended. Whether a scheduled run is evaluated differently from a cloud-triggered run is not documented.

**Security & identity**
- For the cloud route, Learn says the creator of the desktop flow connection is the user who needs the licence. Confirm whether that rule applies to scheduled triggers before assuming who is accountable for a run.
- Learn's unattended-run page says unattended desktop flows require an available machine with all users signed out, and that locked Windows user sessions prevent them from running. A schedule that fires onto a locked machine is therefore a failure to monitor, not a silent success.

**Autonomy & actions**
- A recurring schedule starts desktop flows with no person present, and for unattended mode no one is at the machine. Whoever owns the schedule is responsible for what the flow does each time it fires.
- Learn's queue page says a time-out occurs when desktop flows don't run within 12 hours after being requested, and that its orchestration rules apply to runs scheduled by any user on the same device. Confirm that scheduled-trigger runs queue the same way before stacking many schedules on one machine.

**Change & support**
- The roadmap says the feature removes the need for an intermediary scheduled cloud flow. Support teams that trace a recurring run through its scheduled cloud flow will need another place to look, which Learn does not yet describe.
- Microsoft Learn documents no tenant or environment setting for scheduled triggers at the time of writing (November 2026), so there is no documented switch to turn the capability off.

## Cost and licensing

Licensing for scheduled triggers is not yet published, and the roadmap item names no licence or meter. What Learn publishes is for desktop flows generally.

For desktop flows triggered from a cloud flow, the Learn trigger page lists the appropriate licence for attended runs, or an unattended add-on for unattended runs, held by the creator of the connection. The Learn licence overview says that, to run desktop flows unattended, you subscribe to Power Automate Process licenses or enable pay-as-you-go, and that a Process licence allocated to a machine becomes an unattended bot that can run one desktop flow at a time.

In a pay-as-you-go environment, the Learn meters page (the Power Automate meters are marked preview) says unattended runs are charged at $3.00 per run, and that attended runs follow the entitlements of the user running the flow: a user whose licence includes attended RPA isn't charged, and one whose licence doesn't is charged $0.60 per run. A recurring schedule raises the run count, so the monthly figure depends on the recurrence a maker picks.

No rate or exception specific to scheduled triggers is published. Indirect cost is admin and maker time to review schedules.

## Scope

The roadmap describes makers scheduling desktop flows from the Power Automate automation center, on the Web platform, for attended and unattended desktop flows. It lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD as clouds; that is the record's cloud list.

The licences, roles, prerequisites and rollout mechanics for scheduled triggers are not yet published. For today's cloud-flow route, Learn lists a registered machine or machine group, a work or school account and a desktop flow connection as prerequisites.

## Governance guidance

### Before rollout
- Inventory the scheduled cloud flows that call desktop flows today, and the machines and machine groups they target, so you can see what direct schedules would add to the same machines.
- Decide which environments have data policies covering desktop flow modules and the desktop flow connector (see the data policy row in the controls table).
- Confirm which licence or pay-as-you-go environment covers the unattended desktop flows your makers plan to schedule, using the Learn licensing and meters pages.

### At rollout
- Brief makers that scheduled triggers exist, and ask them to record each schedule's owner, machine or machine group and recurrence.
- Ask makers to hold production schedules on unattended machines until you have confirmed which identity the scheduled runs use.

### After rollout
- Review the automation center Runs and Machines pages for failed, queued or timed-out scheduled runs.
- Watch pay-as-you-go run counts in environments where makers schedule unattended flows, and compare them with the $3.00 per unattended run rate.
- Watch Message center and Learn for the scheduled triggers documentation.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether scheduled triggers can be used, or switched off</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no setting for scheduled triggers at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which desktop flow modules and connectors can be used in an environment (data policy)</strong><br><small>Environment</small><br><small class="controls__note">General control: data policies govern desktop flow modules. How scheduled triggers themselves are governed is not documented.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Settings › Data and privacy › Data policy <a href="https://learn.microsoft.com/power-platform/admin/prevent-data-loss" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpPolicy -NewPolicy $NewPolicy</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No setting for scheduled triggers is documented at the time of writing (November 2026), which is why the first row has no path or call.

Data policies are a general control. Learn says a data policy can classify desktop flow modules and cloud flow connectors, and that the desktop flow connector can be governed like any other connector. Microsoft has not documented whether a schedule set in the automation center is evaluated through the desktop flow connector, so the row governs the desktop flows, not the schedule.

Learn says tenant-level policies need the Power Platform Administrator role, and environment-level policies need Environment Admin permissions, or System Administrator for environments with a Dataverse database.

## Open questions

- Where does a maker create a scheduled trigger, and is there an environment or tenant setting to turn the capability off? Watch Learn for a scheduled triggers page.
- Which licence do scheduled runs need, and does the rule for cloud-triggered runs (the connection creator's licence) apply? Watch the Power Automate licensing pages.
- Which identity and connection does a scheduled run use for attended and unattended desktop flows?
- Do data policies on the desktop flow connector apply to schedules set in the automation center?
- Is the capability on for every maker on arrival, or does an administrator enable it? Watch Message center.

<!-- rationale
risk: Medium. The roadmap describes recurring runs of attended and unattended desktop flows that makers set up themselves, and Microsoft Learn documents no setting that governs scheduled triggers specifically.
cost: Variable. Desktop flow runs in pay-as-you-go environments are metered per run ($0.60 attended where the user's licence lacks attended RPA, $3.00 unattended); licensing specific to scheduled triggers is not yet published.
impact: Medium. Makers and operators who run desktop flows on machines notice it; the roadmap names no change for other users.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Why it matters: first sentence / behaviour: Today, a recurring desktop flow run needs a scheduled cloud flow. | Found: You can use URLs to trigger desktop flows through many different sources, such as browsers, the Windows Run application, the command prompt, and the Windows Task Scheduler. | Fix: Replace 'Today, a recurring desktop flow run needs a scheduled cloud flow' with 'One documented route is a scheduled cloud flow that calls a desktop flow'. Do not imply this is the only route: Learn documents Windows Task Scheduler, and the launched roadmap item describes direct scheduled triggers. | Source: https://learn.microsoft.com/power-automate/desktop-flows/run-desktop-flows-url-shortcuts
- [contradicted, blocker] Why it matters: second paragraph / cost: Every recurring run adds spend in a pay-as-you-go environment. | Found: Attended runs follow the entitlements of the user running the flow. A user whose license includes attended RPA isn't charged; a user whose license doesn't include it is charged $0.60 per run. | Fix: Replace 'every recurring run adds to run counts, machine queues and, in pay-as-you-go environments, spend' with 'recurring runs increase run counts and machine demand, and can increase pay-as-you-go charges depending on run mode and licence entitlements'. Keep the existing detailed rates and exemptions in Cost and licensing. | Source: https://learn.microsoft.com/power-platform/admin/pay-as-you-go-meters
- [contradicted, blocker] Risk assessment: Autonomy & actions / behaviour: A recurring schedule starts desktop flows with no person present. | Found: Attended run mode refers to a desktop flow execution with human supervision | Fix: Replace the sentence with 'A recurring schedule starts desktop flows automatically; unattended mode runs without human supervision.' Do not imply that scheduling removes the human-supervision requirement for attended runs; the roadmap explicitly includes attended mode. | Source: https://learn.microsoft.com/power-platform/admin/power-automate-licensing/types
- [contradicted, blocker] summary; Cost and licensing: first sentence; Scope; changes / absence: Licensing for scheduled triggers is not yet published. | Found: The unattended RPA entitlement is needed to trigger desktop flows in unattended mode through an unattended bot. | Fix: Narrow the absence throughout to 'No separate licensing requirement specific to scheduled triggers is published.' Retain licensing.model as mixed and the published general desktop-flow requirements. The product licensing page states attended and unattended RPA entitlements; a new scheduling entry point does not make all licensing unpublished. | Source: https://learn.microsoft.com/power-platform/admin/power-automate-licensing/types
- [contradicted, blocker] controls[1].ui; Governance controls: data policy row / admin-path: Security > Settings > Data and privacy > Data policy reaches the control deciding which desktop modules and connectors can be used. | Found: From the list of data policies, select a policy, and then select Edit Policy. | Fix: Extend the path to 'Security > Settings > Data and privacy > Data policy > policy > Edit Policy > Prebuilt connectors > connector > Move to Business'. The current path reaches the policy list, not classification. Qualify the note: 'To show desktop flow action groups in the UI, first enable Show desktop flow actions in DLP policies; modules must be explicitly classified.' That prerequisite is documented at https://learn.microsoft.com/power-automate/prevent-data-loss. | Source: https://learn.microsoft.com/power-platform/admin/prevent-data-loss
- [contradicted, blocker] controls[1].api; Governance controls: data policy row / command: New-DlpPolicy -NewPolicy $NewPolicy is the operation that configures which desktop modules and connectors may be used. | Found: The New-DlpPolicy cmdlet creates a new DLP policy for the logged in admin's tenant. | Fix: Replace the call with 'Add-ConnectorsToPolicy -PolicyName <policy-guid> -Connectors <connector-objects> -Classification <classification>' and set its docs URL to https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy. State in the note: 'Classification accepts General, Confidential or Blocked for Non-business, Business or Blocked; connector objects contain id, type and name.' That reference explicitly includes desktop-flow modules. The current reference documents policy creation, not the classification operation the row promises. | Source: https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy
-->
