---
title: "Power Automate: configure Flow checker rules and notifications for desktop flows in the admin portal"
slug: "power-automate-desktop-flows-configure-notifications-for-desktop-flow-checker-in-admin-por"
roadmapId: 576794
topic: "power-platform"
products: ["Power Automate"]
summary: "The roadmap lists configurable Flow checker notifications for desktop flows in an environment as launched. Learn documents rule settings, not notifications. Admins in Managed Environments can review them; no action is forced."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "July CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for this feature. The Flow checker page lists availability only in Managed Environments under known limitations and names no licence or meter."
audiences: ["power-platform-admin","service-owner","maker"]
tags: ["power-automate","desktop-flows","managed-environments","quality-assurance","governance","monitoring","power-platform-admin-center"]
sources:
  - title: "Flow checker"
    url: "https://learn.microsoft.com/power-automate/desktop-flows/static-analysis"
    kind: "learn"
  - title: "Solution checker enforcement in managed environments"
    url: "https://learn.microsoft.com/power-platform/admin/managed-environment-solution-checker"
    kind: "learn"
  - title: "Analysis Override (msdyn_analysisoverride) table/entity reference (Microsoft Dataverse)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/msdyn_analysisoverride"
    kind: "docs"
  - title: "Microsoft 365 Roadmap item 576794"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576794"
    kind: "roadmap"
videos: []
related: ["managed-environments","power-automate-ai-assisted-ui-automation-repair"]
controls:
  - governs: "Flow checker rule enablement, severity and parameter values in an environment"
    scope: "environment"
    ui:
      surface: "Power Automate portal"
      path: "Desktop flows > Flow checker > Flow checker configuration > Save"
      docs: "https://learn.microsoft.com/power-automate/desktop-flows/static-analysis"
    api:
      kind: "rest"
      call: "GET /msdyn_analysisoverrides (Dataverse Web API RetrieveMultiple on the Analysis Override table)"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/msdyn_analysisoverride"
    note: "Rule settings, not notifications. Learn names Analysis Override privileges for this feature; it does not state that the portal stores its settings in this table."
  - governs: "Solution checker enforcement and rule exclusions that take precedence over Flow checker settings"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Edit Managed Environments > Solution checker enforcement"
      docs: "https://learn.microsoft.com/power-platform/admin/managed-environment-solution-checker"
    api:
      kind: "powershell"
      call: "SetManagedEnvironmentSolutionCheckerEnforcementLevel -EnvironmentId <environment-id> -Level warn -RuleExclusions \"<rule-names>\""
      docs: "https://learn.microsoft.com/power-platform/admin/managed-environment-solution-checker"
    note: "Managed Environments only. The function comes from the PowerApps-Samples repo. Learn says these settings override the portal configuration."
  - governs: "Flow checker notification types, thresholds, recurrence and scope"
    scope: "environment"
    ui: null
    api: null
    note: "The roadmap describes these settings. Microsoft Learn documents no notification control at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-10-16T19:09:10"
changes:
  - date: "2026-11-17"
    note: "New briefing: the roadmap lists Flow checker notifications as launched, while Learn documents rule configuration and no notification settings."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 58 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-17"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 58
  confirmed: 54
  unconfirmed: 1
  contradicted: 3
  attempts: 1
  hash: "29142b517e62e0b3267f1e44d40da1e6"
---

## What's changing

The roadmap item describes configurable notifications in the Power Automate portal for rule violations that the desktop flow checker finds across all desktop flows in an environment. It says administrators can select a notification type (error, warning or informational), adjust severity levels, and set parameters such as thresholds, recurrence and scope. The roadmap item states that the checker uses the same rule engine that runs during the initialisation and analysis of flows, loading default and custom rules.

Microsoft Learn documents the Flow checker, but not notifications. Its page describes rule management: administrators and users with the appropriate permissions can enable or disable rules, set a severity level (error, warning, info) and set custom values for rules that support parameters, such as thresholds and limits. In the Power Automate portal this is done from the **Flow checker configuration** pane on the **Desktop flows** page. Learn describes no notification types, recurrence, scope or delivery channel at the time of writing (November 2026), so those parts of the roadmap description are not confirmed by documentation.

The Learn page says Flow checker configuration applies at the environment level and affects all desktop flows in the selected environment. For flows already open in the designer, the maker must reopen the flow for configuration changes to take effect. Solution checker enforcement settings in the Power Platform admin center take precedence over the portal configuration, and rules restricted there cannot be changed in the portal. If the environment is part of an environment group with a defined configuration, the rule settings are inherited and cannot be edited individually.

The roadmap record gives the status as Launched, the release phase as General Availability, the cloud as Worldwide (Standard Multi-Tenant), the platform as Web and the target date as July CY2026. The record's "Enabled for" text reads "Enabled for admins/makers/marketers automatically". The record does not say whether any notification is sent before an administrator configures one.

## Why it matters

The roadmap's stated purpose is to let administrators find quality problems in desktop flows before they cause run failures or support escalations. What Learn confirms is the environment-wide rule configuration that such alerts would depend on: one change to a rule's severity or parameter value applies to every desktop flow in the environment, and every maker sees the result in the designer.

If nobody acts, Microsoft has not stated what happens: the sources do not say whether notifications are sent by default or whether the existing rule defaults change. Treat the rule configuration as the decision to take now, and treat notifications as something to confirm against the Flow checker page as it is updated.

## Risk assessment

**Data exposure**
- Learn describes the Flow checker as rule-based analysis of desktop flows; it documents no new data source or external destination. Where notifications would be delivered, and what they would contain, is not documented.

**Security & identity**
- Access is governed by Dataverse privileges. The Learn page tells Power Platform administrators to assign Analysis Override privileges to roles that need the feature: Read to view the configuration, Write to modify severity, parameter values and rule enablement, and Create to create new rule overrides. A role with Write can change what every maker in the environment is told about their flows.
- One of the rules shipped on the page, "Unsafe password security", is a security rule with Warning as its listed severity. Disabling it or lowering its severity in an environment removes that signal for every desktop flow there.

**Autonomy & actions**
- No change documented: Learn describes the analysis as reporting violations, and it documents no step where the checker edits or stops a flow. The Learn page does not say whether a violation can block a flow from running.

**Change & support**
- Configuration applies to the whole environment, so a threshold changed for one team changes the results for all others. Makers with the designer already open must reopen the flow before a change takes effect, which is a likely source of "I still see the old warning" support calls.
- Known issues on the page: deleting copied actions after viewing a rule violation can trigger unhandled errors, and a nonsensitive password variable in the Display input dialog, Display select folder dialog or Display custom form actions causes static analysis to fail during rule evaluation.
- Solution checker enforcement in Managed Environments takes precedence, so an admin who edits the portal configuration may find rules locked by the admin centre setting.

## Cost and licensing

Microsoft Learn names no licence and no meter for the Flow checker configuration, and none for notifications. Under known limitations the Flow checker page states: "Available only in Managed Environments." The wiki's page on [Managed Environments](/concepts/managed-environments/) covers that tier and its licensing condition; the Flow checker page does not restate it.

The cost this briefing can support is admin time: deciding which rules to enable, which severity each gets and which parameter values to use, then telling makers. Pricing or a separate licence for notifications is not yet published.

## Scope

**Environments and flows.** The Learn page states that Flow checker configuration applies at the environment level and affects all desktop flows within the selected environment. Solution checker enforcement in the Power Platform admin center can also exclude rules; the page lists applying rules to specific environments or environment groups as a Power Platform admin center capability for Managed Environments only.

**Roles.** Roles that need the feature must hold the Analysis Override privileges described above.

**Cloud and platform.** The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform. It lists no US Government cloud.

**Prerequisite.** The Flow checker page lists availability only in Managed Environments as a known limitation. The same page also says that rule customisation is limited to enabling or disabling rules and configuring severity, while its Rule management section describes custom values for rules that support parameters in the Power Automate portal. Learn therefore gives two descriptions of what can be customised; the roadmap's thresholds, recurrence and scope are described only on the roadmap.

## Governance guidance

### Before rollout
- Confirm that the environments you care about are Managed Environments, as the Flow checker page lists that as a limitation.
- Decide which roles may read, change or create Analysis Override records, and assign the matching privileges (read, write, create) to those roles only.
- Record the current rule settings in the **Flow checker configuration** pane, including severity and parameter values, so you can compare after any change.
- Check whether Solution checker enforcement is set for the environment in the Power Platform admin center, because it takes precedence and locks rules in the portal.

### At rollout
- Set the severity and enablement of each rule from **Desktop flows** > **Flow checker** > **Flow checker configuration** and select **Save**.
- Tell makers that changes apply to every desktop flow in the environment and that open designer sessions need the flow reopened.
- Look in the Flow checker configuration for any notification option and record what it offers; Learn documents none at the time of writing.

### After rollout
- Review the violations makers report, using the **Object name** column in solution checker results to identify the desktop flow.
- Revisit the Flow checker page for notification documentation, and update the rules and communication once Microsoft documents notification types and delivery.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Flow checker rule enablement, severity and parameter values in an environment</strong><br><small>Environment</small><br><small class="controls__note">Rule settings, not notifications. Learn names Analysis Override privileges for this feature; it does not state that the portal stores its settings in this table.</small></td><td data-label="Admin UI"><strong>Power Automate portal</strong><br>Desktop flows › Flow checker › Flow checker configuration › Save <a href="https://learn.microsoft.com/power-automate/desktop-flows/static-analysis" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>GET /msdyn_analysisoverrides (Dataverse Web API RetrieveMultiple on the Analysis Override table)</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/msdyn_analysisoverride" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Solution checker enforcement and rule exclusions that take precedence over Flow checker settings</strong><br><small>Environment</small><br><small class="controls__note">Managed Environments only. The function comes from the PowerApps-Samples repo. Learn says these settings override the portal configuration.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Edit Managed Environments › Solution checker enforcement <a href="https://learn.microsoft.com/power-platform/admin/managed-environment-solution-checker" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>SetManagedEnvironmentSolutionCheckerEnforcementLevel -EnvironmentId &lt;environment-id&gt; -Level warn -RuleExclusions &quot;&lt;rule-names&gt;&quot;</code> <a href="https://learn.microsoft.com/power-platform/admin/managed-environment-solution-checker" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Flow checker notification types, thresholds, recurrence and scope</strong><br><small>Environment</small><br><small class="controls__note">The roadmap describes these settings. Microsoft Learn documents no notification control at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The portal configuration is the control that matches this roadmap item most closely, but it is documented as rule enablement, severity and parameter values, not as notifications. Solution checker enforcement in the Power Platform admin center takes precedence, and the Flow checker page notes that settings inherited from an environment group cannot be edited individually.

The Dataverse row is included because the Flow checker page names Analysis Override privileges for this configuration. Learn does not say that the portal stores its settings in that table, so treat the row as the table those privileges relate to and not as a confirmed API for notifications. The PowerShell function is defined in the PowerApps-Samples repository and must be imported before use, according to the Solution checker enforcement page.

## Open questions

- Which notification types, recipients, recurrence and scope settings exist, and where does a notification appear or get sent? Watch the Flow checker page on Microsoft Learn.
- Is any notification enabled by default when the feature arrives, or does an administrator have to configure one? The roadmap says "Enabled for admins/makers/marketers automatically", but Learn does not describe the default.
- Does a Managed Environments licence or any other licence apply to Flow checker notifications? Watch the Flow checker page and the Managed Environments documentation.
- Does a Dataverse API exist for configuring notifications, and is the Analysis Override table the store for these settings?
- Which description of rule customisation applies: the page's Rule management section (custom values for parameters) or its known limitation (only enabling and severity)?

<!-- rationale
risk: Low. The Flow checker analyses desktop flows against rules and reports violations; Learn describes no step that changes a flow or its data, and the configuration is an admin choice per environment.
cost: Low. The only cost the sources show is admin time to set rules; Learn lists Managed Environments as a limitation and names no meter, and licensing for this feature is not yet published.
impact: Low. Admins and makers who use desktop flows notice it: makers see violations in the designer, and admins set rules for an environment.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Security & identity / behaviour: Lowering the severity of Unsafe password security removes its signal for every desktop flow in the environment. | Found: Searched: "desktop" "Flow checker" "Unsafe password security" "severity" "disable"; opened Flow checker. It distinguishes enabling/disabling a rule from changing its severity and does not say that lowering severity removes its diagnostic. | Fix: Remove 'or lowering its severity' from 'Disabling it or lowering its severity in an environment removes that signal for every desktop flow there.'
- [contradicted, blocker] Cost and licensing: first sentence; front matter: licensing.notes; rationale: cost / licensing: Microsoft Learn names no licence for Flow checker rule configuration, leaving admin time as the only known cost. | Found: When you activate managed environments in an environment, all active usage requires one of these standalone licenses or pay-as-you-go meters. | Fix: Replace the broad no-licence assertion with: 'The documented rule configuration requires Managed Environments. Microsoft publishes licensing requirements for that tier: all active usage requires a qualifying standalone licence or meter. Notification-specific licensing or charges are not yet published.' Cite https://learn.microsoft.com/power-platform/admin/managed-environment-licensing. In licensing.notes retain unknown only for notification-specific licensing and state that the published Managed Environments requirements apply to the documented controls. Narrow the cost rationale to: 'Low. Admin time is the known incremental cost for environments already entitled to Managed Environments; notification-specific charges are not yet published.' | Source: https://learn.microsoft.com/power-platform/admin/managed-environment-licensing
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] front matter: impact; rationale: impact / consistency: Impact is low although the rationale identifies desktop-flow makers as an affected role rather than an admin-only or small opt-in audience. | Found: impact: "low" Low. Admins and makers who use desktop flows notice it: makers see violations in the designer, and admins set rules for an environment. | Fix: Set impact to medium and change the impact rationale to: 'Medium. Desktop-flow makers see violations in the designer, and admins set rules for an environment.' The scale assigns medium to specific roles such as makers.
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The checklist directs administrators to assign Analysis Override privileges, but no controls row governs role privilege assignment. | Found: assign the matching privileges (read, write, create) to those roles only. Flow checker rule enablement Solution checker enforcement and rule exclusions Flow checker notification types, thresholds, recurrence and scope | Fix: The 'Before rollout' privilege-assignment step has no corresponding controls row. Remove that checklist bullet; retain the verified privilege requirements in Security & identity and Scope.
-->
