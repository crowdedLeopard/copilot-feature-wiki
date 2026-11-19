---
title: "Power Automate: time and cost savings rules for desktop flows"
slug: "power-automate-desktop-flows-measure-time-and-cost-savings-for-desktop-flows"
roadmapId: 576785
topic: "power-platform"
products: ["Power Automate"]
summary: "Makers can add time-saving and money-saving rules to a desktop flow, and savings are calculated per successful run. Per the roadmap, nothing is on until a maker configures it. Administrators should decide how money savings are handled."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "July CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Power Automate Premium includes the full set of cloud and desktop automation capabilities (Types of Power Automate licenses). A savings-specific licence requirement, price or meter is not yet published."
audiences: ["power-platform-admin","maker","finops"]
tags: ["power-automate","desktop-flows","automation","analytics","finops","power-platform-admin-center"]
sources:
  - title: "Microsoft 365 Roadmap 576785"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576785"
    kind: "roadmap"
  - title: "Types of Power Automate licenses"
    url: "https://learn.microsoft.com/power-platform/admin/power-automate-licensing/types"
    kind: "learn"
  - title: "Savings in Power Automate"
    url: "https://learn.microsoft.com/power-automate/savings"
    kind: "learn"
  - title: "Manage feature settings"
    url: "https://learn.microsoft.com/power-platform/admin/settings-features"
    kind: "learn"
  - title: "Explore Power Automate's automation center"
    url: "https://learn.microsoft.com/power-automate/automation-center-overview"
    kind: "learn"
  - title: "Monitor time and cost savings for agents"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/analytics-cost-savings"
    kind: "learn"
  - title: "Savings on agent flows"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agent-flow-savings"
    kind: "learn"
  - title: "organization EntityType (Microsoft.Dynamics.CRM)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/organization"
    kind: "learn"
videos: []
related: ["power-automate-desktop-flows-export-work-queue-items-to-csv"]
controls:
  - governs: "Whether makers can create money-saving rules in an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features > Savings > Disable money-saving rules"
      docs: "https://learn.microsoft.com/power-platform/admin/settings-features"
    api:
      kind: "rest"
      call: "PATCH <organization-uri>/api/data/v9.2/organizations(<organization-id>)"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/organization"
    note: "Off by default. Page names cloud flows, agent flows and agents; Microsoft has not confirmed it applies to desktop flows. The request body sets ismoneysavingsallowed to false to disable permission to create money-saving rules."
  - governs: "How long savings records are retained"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features > Savings > Time to live (in days) of savings events in Flow Aggregation entity"
      docs: "https://learn.microsoft.com/power-platform/admin/settings-features"
    api:
      kind: "rest"
      call: "PATCH <organization-uri>/api/data/v9.2/organizations(<organization-id>)"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/organization"
    note: "Default 365 days. The request body sets savingeventsttlinminutes, in minutes, for new savings-event records. Not confirmed for desktop flows."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-19"
roadmapModified: "2026-10-16T19:09:03"
changes:
  - date: "2026-11-17"
    note: "New briefing: savings rules for desktop flows, launched per the roadmap; Learn does not yet describe them, so controls are those documented for cloud flows."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 49 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Correction: added the Dataverse Organization properties for the money-saving switch and savings retention as API sides, removed a checklist step that had no control row, and cited the agent flow savings page."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 57 statements not yet confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 60 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Correction: licensing now states Power Automate Premium includes cloud and desktop automation, with no savings-specific licence yet published; control paths and calls tightened."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 56 statements confirmed"
version: 3
verification:
  status: "verified"
  date: "2026-11-19"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 56
  confirmed: 56
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "e85b24ad7d2df8300a553a5304509908"
---

## What's changing

Power Automate adds built-in savings rules for desktop flows. A maker states how long the task took by hand, and the platform works out time saved from flow run data. Cost savings can be an hourly rate applied to that time, or a fixed money baseline, and the roadmap item says both scale with run volume.

The roadmap item says the feature is not enabled automatically: a maker configures time-saving and money-saving rules for each desktop flow with a manual run duration and cost baselines, savings are calculated per successful run and aggregated, and turning the rules off stops the tracking. The same record also carries the line "Enabled for admins/makers/marketers automatically"; read next to the description, that is availability, not a rule that switches itself on.

The roadmap record gives the status as Launched, the target date as July CY2026, the release phase as General Availability, the cloud as Worldwide (Standard Multi-Tenant) and the platform as Web. At the time of writing (November 2026) Microsoft Learn has no page describing savings rules for desktop flows, so the behaviour above is the roadmap's description. Learn documents the same savings concept for [cloud flows](https://learn.microsoft.com/power-automate/savings) and [agent flows](https://learn.microsoft.com/microsoft-copilot-studio/agent-flow-savings), and that is background only.

## Why it matters

This is a reporting feature, so the main effect is on the numbers your organisation will quote. Savings are computed from baselines that makers type in, so the totals are estimates built on each maker's assumptions. A Centre of Excellence that adds them up for a business case needs agreed hourly rates and a review step first.

Microsoft has not stated a tenant-wide default beyond the roadmap's "not enabled automatically", so expect nothing to be recorded for a desktop flow until a maker sets a rule. Plan for makers to start doing so, and decide now whether money savings are something you want them to publish.

## Risk assessment

**Data exposure**
- Money-saving rules hold maker-entered hourly rates or cost baselines, which can reveal internal labour costs. Microsoft Learn describes who can view and edit rules for cloud flows (see Governance controls); it does not say whether that applies to desktop flows.
- Savings records are kept in Dataverse's Flow Aggregation table for cloud flows, with a retention setting (see the controls table). Whether desktop flow savings are stored there is not stated.

**Security & identity**
- No change identified: the roadmap describes calculation from existing run data and names no new connection, identity or permission.

**Autonomy & actions**
- No change identified: the roadmap describes rules that calculate figures from successful runs and do not alter what a flow does.

**Change & support**
- Unreviewed baselines can inflate reported savings. Agree rate guidance with makers before the figures reach finance or leadership.
- Learn's cloud flow page says a run can take up to one hour to appear in a flow's savings, so expect questions about figures that lag. Microsoft has not said the same applies to desktop flows.

## Cost and licensing

Power Automate Premium includes the full set of cloud and desktop automation capabilities, per [Types of Power Automate licenses](https://learn.microsoft.com/power-platform/admin/power-automate-licensing/types). A savings-specific licence requirement, price or meter is not yet published. The roadmap record names none.

For comparison only, Learn's savings pages for cloud flows and [agent flows](https://learn.microsoft.com/microsoft-copilot-studio/agent-flow-savings) list a security role with privileges on the Saving Rule and Flow Aggregation tables as what is needed to view and edit rules, and name no licence or meter. Those pages do not cover desktop flows, so this is not a statement about them.

The cost the sources do show is indirect: maker time to measure manual durations and set rates, and administrator or Centre of Excellence time to review the results.

## Scope

The roadmap record lists Power Automate, the Worldwide (Standard Multi-Tenant) cloud, the Web platform and General Availability. No other cloud is listed on the record; that is not a statement that the feature is unavailable elsewhere.

Per the roadmap, makers set rules on individual desktop flows, and savings come from successful runs only. Microsoft has not described desktop flow prerequisites, such as solution-based flows or the roles needed. Learn's cloud flow page says only solution-based cloud flows can bear saving rules; do not assume the same for desktop flows.

Savings are shown in Power Automate's automation center, whose Savings page tracks cost savings and time saved. Learn does not say whether desktop flow savings appear there.

## Governance guidance

### Before rollout
- Agree who in the Centre of Excellence owns the savings figures, and set standard hourly rates for makers to use.
- Decide whether money savings are wanted in each environment. Check the **Disable money-saving rules** setting; Learn's wording names cloud flows, agent flows and agents, so confirm for desktop flows once Microsoft says.

### At rollout
- Tell desktop flow makers that savings rules are optional and per flow, and how to choose a manual duration and baseline.
- Ask makers to record how each baseline was derived so reviewers can check it.

### After rollout
- Compare reported time savings with measured manual durations for a sample of flows before quoting totals.
- Review the retention setting for savings records and set it to match your reporting period.
- Recheck Microsoft Learn for a desktop flow savings page and update the controls once it appears.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether makers can create money-saving rules in an environment</strong><br><small>Environment</small><br><small class="controls__note">Off by default. Page names cloud flows, agent flows and agents; Microsoft has not confirmed it applies to desktop flows. The request body sets ismoneysavingsallowed to false to disable permission to create money-saving rules.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Savings › Disable money-saving rules <a href="https://learn.microsoft.com/power-platform/admin/settings-features" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>PATCH &lt;organization-uri&gt;/api/data/v9.2/organizations(&lt;organization-id&gt;)</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/organization" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>How long savings records are retained</strong><br><small>Environment</small><br><small class="controls__note">Default 365 days. The request body sets savingeventsttlinminutes, in minutes, for new savings-event records. Not confirmed for desktop flows.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Savings › Time to live (in days) of savings events in Flow Aggregation entity <a href="https://learn.microsoft.com/power-platform/admin/settings-features" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>PATCH &lt;organization-uri&gt;/api/data/v9.2/organizations(&lt;organization-id&gt;)</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/organization" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Both controls below sit in the Power Platform admin center environment settings and are documented on the Manage feature settings page. The Savings section lists two settings: the money-saving switch and the retention period. Dataverse documents the Organization property ismoneysavingsallowed for money-saving permission, and savingeventsttlinminutes on Organization for the default lifetime of new savings-event records.

The money-saving switch is described for cloud flows, agent flows and agents. Microsoft has not confirmed it applies to desktop flows, so verify in a test environment before relying on it. For agents, Learn says makers can still calculate time savings with cost savings turned off; a separate switch for time savings is not listed.

The retention setting is described for the Flow Aggregation entity and is stated not to affect agents' savings. Whether desktop flow savings use that entity is not stated.

Learn's cloud flow page says that to view and edit a saving-rule, a user needs a security role with privileges to the Saving Rule and Flow Aggregation tables.

## Open questions

- Does the **Disable money-saving rules** environment setting stop money-saving rules on desktop flows, and is there a setting for time-saving rules? Watch the Manage feature settings page.
- Does desktop flow savings need a licence beyond Power Automate Premium, or have a price or meter, and does it have prerequisites such as solution-based flows? Watch Microsoft Learn and Message center.
- Where are desktop flow savings records stored, and does the retention setting apply to them?
- Do desktop flow savings appear on the automation center Savings page, and how soon after a run?

<!-- rationale
risk: Low. The roadmap says the feature is not enabled automatically and works only once a maker enters baselines; it reports savings and does not change what flows do. The figures are maker-entered estimates.
cost: Low. Power Automate Premium includes the full set of cloud and desktop automation capabilities; a savings-specific licence, price or meter is not yet published. The cost the sources show is maker and admin time to set baselines and review figures.
impact: Low. Makers and automation owners who opt in notice it, along with the Centre of Excellence staff who report on the results. Other users see no change.
-->
