---
title: "Power Automate: direct triggers for desktop flows"
slug: "power-automate-direct-triggers-for-desktop-flows"
roadmapId: 579975
topic: "power-platform"
products: ["Power Automate"]
summary: "Microsoft plans to let desktop flows start on supported events without a cloud flow in between. Preview is targeted for January 2027. Licensing, default and admin controls are not yet published; nothing to configure yet."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop"]
targetDate: "March CY2027"
previewDate: "January CY2027"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for direct triggers. For desktop flows started from a cloud flow, the cloud-triggering page says attended runs need the appropriate licence and unattended runs an unattended add-on. The licensing overview instead says to subscribe to Power Automate Process licenses or enable pay-as-you-go for unattended desktop flows."
audiences: ["power-platform-admin","maker","finops"]
tags: ["power-automate","desktop-flows","triggers","automation","data-policies"]
sources:
  - title: "Microsoft 365 Roadmap 579975"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=579975"
    kind: "roadmap"
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
related: ["data-policies","power-automate-cloud-flows-share-process-license-capacity-across-workflows"]
controls:
  - governs: "Whether direct triggers can be used, or switched off"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no setting for direct triggers at the time of writing (November 2026)."
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
    note: "General control: data policies govern desktop flow modules. Microsoft has not documented how direct triggers themselves are governed or whether desktop flow connector policies govern the new triggering route."
confidence: "low"
created: "2026-11-18"
updated: "2026-11-18"
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
version: 3
verification:
  status: "verified"
  date: "2026-11-18"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 65
  confirmed: 65
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "50e86df68417c2840e3797ce01a509de"
---

## What's changing

Microsoft plans to add direct triggers to desktop flows, so that a desktop flow can start in response to a supported event without an intermediary cloud flow. The roadmap item says this "simplifies automation design and reduces the effort required to connect desktop flows to business processes".

Microsoft Learn does not describe direct triggers yet, so what follows about behaviour is the roadmap's description. The roadmap does not say which events will be supported, where the trigger is configured, which machine or account runs the flow, or whether it covers attended runs, unattended runs or both.

For comparison, Learn documents a current route: a cloud flow uses the action **Run a flow built with Power Automate for desktop** to start a desktop flow on a registered machine or machine group, through a desktop flow connection.

The roadmap item is In development. Microsoft's targets are a preview in January CY2027 and general availability in March CY2027, for Worldwide (Standard Multi-Tenant) on the Desktop platform. These are targets, not commitments.

## Why it matters

Today, Learn documents cloud flows as one way to trigger desktop flows, and several controls and licence checks are described around that route: the desktop flow connection, the machine, and the licence of the connection's creator. If desktop flows can start from events directly, the service owner needs to know which of those checks still apply. Microsoft has not said.

Microsoft has not stated what happens on arrival, so no source says existing flows will change. Treat this as an optional capability to review once Learn documents it, and decide then who may use it and where.

## Risk assessment

**Data exposure**
- The roadmap does not say what data an event carries into a desktop flow or whether the flow can pass data back out. Check which inputs a trigger supplies once Microsoft documents them.
- Data policies govern desktop flow modules (see the controls table). Microsoft has not documented how direct triggers themselves are governed or whether desktop flow connector policies govern the new triggering route.

**Security & identity**
- Microsoft has not said which identity or machine session a directly triggered flow runs under. For cloud-triggered runs, Learn names the creator of the desktop flow connection as the user who needs the licence; confirm whether that rule carries over.
- Learn warns that before using a machine to run desktop flows from the cloud, the machine should be secured and its admins trusted. Confirm whether the same applies to direct triggers.

**Autonomy & actions**
- The roadmap describes automations that "start in response to supported events". An event could therefore start a flow without a person or a cloud flow initiating it. Microsoft has not documented an approval step or a limit on trigger frequency.

**Change & support**
- Cloud-triggered runs are documented with a limit of 70 desktop flow runs per minute for every connection. Microsoft has not said whether a limit applies to direct triggers.
- No admin switch for direct triggers is documented at the time of writing (November 2026), so there is nothing to disable before the preview.

## Cost and licensing

Licensing for direct triggers is not yet published, and the roadmap item names no licence or meter.

For desktop flows started from a cloud flow, the Learn page "Trigger desktop flows from cloud flows" lists a prerequisite of the appropriate licence for attended runs, or an unattended add-on for unattended runs, held by the creator of the connection. The licensing overview instead says to subscribe to Power Automate Process licenses or enable pay-as-you-go for unattended desktop flows. The overview states this rule for unattended desktop flows generally, not just cloud-triggered runs; direct-trigger-specific licensing changes have not been published.

Microsoft documents the Power Automate flow-run meter in preview for desktop flows in pay-as-you-go environments; attended charges depend on licence entitlements and unattended runs are charged per run (Learn page "Pay-as-you-go meters"). No direct-trigger-specific rate or exception is published. Indirect cost is admin and maker time to review the feature once it is documented.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant) as the cloud and Desktop as the platform, with release phases of Preview and General Availability. Other clouds are not listed on the roadmap item; that is a record fact, not a statement that the feature is unavailable elsewhere.

The users, licences, roles, prerequisites, supported events and rollout mechanics are not yet published. Learn describes a cloud-flow route today, which needs a registered machine or machine group, a work or school account and a desktop flow connection.

## Governance guidance

### Before rollout
- Inventory the desktop flows and machines that cloud flows trigger today, so you know what a second way of starting them would affect.
- Check which data policy in your tenant covers desktop flow modules and the desktop flow connector (see the data policy row in the controls table), so you know where the existing rules sit.
- Brief makers and RPA developers that a roadmap item plans direct triggers, and ask them to hold production use until Microsoft documents the controls.

### At rollout
- Read the Learn page for direct triggers once it exists, and confirm which licence, role and machine prerequisites apply before anyone enables it.
- Check whether the data policy row covers direct triggers once Microsoft documents how they are governed.

### After rollout
- Review which desktop flows have a direct trigger and who owns them, using whatever view Microsoft documents for them.
- Watch Message center and the roadmap item for the preview and general availability dates.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether direct triggers can be used, or switched off</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no setting for direct triggers at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which desktop flow modules and connectors can be used in an environment (data policy)</strong><br><small>Environment</small><br><small class="controls__note">General control: data policies govern desktop flow modules. Microsoft has not documented how direct triggers themselves are governed or whether desktop flow connector policies govern the new triggering route.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Settings › Data and privacy › Data policy <a href="https://learn.microsoft.com/power-platform/admin/prevent-data-loss" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpPolicy -NewPolicy $NewPolicy</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No tenant or environment setting for direct triggers is documented at the time of writing (November 2026), which is why the first row has no path or call.

Data policies are a general control. Learn says a data policy can manage desktop flow modules and cloud flow connectors, and that the desktop flow connector can be governed like any other connector. Microsoft has not documented how direct triggers themselves are governed or whether desktop flow connector policies govern the new triggering route. Learn also warns that when desktop flow modules are added to a data policy, noncompliant desktop flows are evaluated against it and suspended.

Learn says tenant-level data policies need the Power Platform Administrator role, and environment-level policies need Environment Admin, or System Administrator where the environment has a Dataverse database.

## Open questions

- Which events will direct triggers support, and where does a maker configure one? Watch the roadmap item and Learn for a feature page.
- Which licence do directly triggered runs need, and does the unattended add-on rule for cloud-triggered runs apply, given that the licensing overview points to Process licenses or pay-as-you-go? Watch the Power Automate licensing pages.
- Is direct triggering on by default for existing desktop flows, or does each maker add it? Watch Message center.
- Will an admin setting, data policy or API control direct triggers, and do existing data policies on the desktop flow connector apply?
- Which account and machine session does a directly triggered flow run under?

<!-- rationale
risk: Medium. The roadmap describes events starting desktop flows with no cloud flow in between, and Microsoft Learn documents no control for it yet, so how existing controls apply to it is unconfirmed.
cost: Variable. The preview Power Automate flow-run meter charges desktop flows in pay-as-you-go environments; attended charges depend on licence entitlements and unattended runs are charged per run. No direct-trigger-specific rate or exception is published.
impact: Medium. Makers and RPA developers who build desktop flows are the people affected; the roadmap names no change for other users.
-->
