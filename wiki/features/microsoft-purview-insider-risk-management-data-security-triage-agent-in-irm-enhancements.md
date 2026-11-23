---
title: "Microsoft Purview Insider Risk Management: Triage Agent user risk and activity pattern summaries"
slug: "microsoft-purview-insider-risk-management-data-security-triage-agent-in-irm-enhancements"
roadmapId: 557683
topic: "governance"
products: ["Microsoft Purview"]
summary: "The Insider Risk Management Triage Agent gets improved user risk and Activity explorer pattern summaries. It runs only after an admin deploys it and consumes Security Copilot SCUs; Microsoft has not stated how the update reaches existing deployments."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: "March CY2026"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Microsoft Learn says the agent needs the per-seat model (an Insider Risk Management licence) and pay-as-you-go billing, with SCUs provisioned in Security Copilot. No separate licence for the new summaries is published."
audiences: ["security","compliance","finops"]
tags: ["insider-risk-management","purview","security-copilot","agents","usage-based-billing","role-groups"]
sources:
  - title: "Microsoft 365 Roadmap 557683"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=557683"
    kind: "roadmap"
  - title: "Get started with the Microsoft Purview Triage Agent in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/copilot-in-purview-triage-irm-agent-get-started"
    kind: "learn"
  - title: "Security Copilot agents in Microsoft Purview overview"
    url: "https://learn.microsoft.com/purview/copilot-in-purview-agents-overview"
    kind: "learn"
  - title: "Microsoft Security Copilot agents in Purview (preview)"
    url: "https://learn.microsoft.com/purview/copilot-in-purview-agents"
    kind: "learn"
  - title: "Investigate Microsoft Purview Insider Risk Management activities"
    url: "https://learn.microsoft.com/purview/insider-risk-management-activities"
    kind: "learn"
  - title: "Manage username privacy in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-settings-privacy"
    kind: "learn"
  - title: "Learn about Microsoft Purview billing models"
    url: "https://learn.microsoft.com/purview/purview-billing-models"
    kind: "learn"
  - title: "Microsoft Security Copilot Security Compute Units and capacity"
    url: "https://learn.microsoft.com/copilot/security/security-compute-units-capacity"
    kind: "learn"
  - title: "Learn about Security Copilot for Microsoft 365 E5 and E7 included customers"
    url: "https://learn.microsoft.com/copilot/security/security-copilot-inclusion"
    kind: "learn"
videos: []
related: ["insider-risk-management","microsoft-purview-insider-risk-management-enhanced-user-profile-in-irm-alerts","microsoft-purview-insider-risk-management-unified-alert-queue","microsoft-purview-insider-risk-management-ds-triage-agent-for-irm-available-in-defender","agent-identity"]
controls:
  - governs: "Whether the Insider Risk Management Triage Agent is running"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Agents > Explore agents > View agent > ellipsis menu next to Edit agent > Deactivate agent"
      docs: "https://learn.microsoft.com/purview/copilot-in-purview-triage-irm-agent-get-started"
    api: null
    note: "Deactivating stops triage but does not remove the agent. Remove agent deletes it and resets the alert timeframe reference point. Needs the required Purview agent permissions."
  - governs: "When the agent runs, the alert timeframe and which policies it triages"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Agents > Explore agents > View agent > Edit agent > Triggers"
      docs: "https://learn.microsoft.com/purview/copilot-in-purview-triage-irm-agent-get-started"
    api: null
    note: "Run mode: Triggers. Timeframe and policies: Agents > Explore agents > View agent > Edit agent > Triggers > Edit. Analysts can shorten the timeframe but not lengthen it."
  - governs: "Security compute unit consumption by the agent"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Agents > Explore agents > View agent > Edit agent > Usage monitoring"
      docs: "https://learn.microsoft.com/purview/copilot-in-purview-triage-irm-agent-get-started"
    api: null
    note: "Usage monitoring links to the Security Copilot usage monitoring tool, where consumption is tracked. It reports consumption; it is not a spending cap."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-07-28T22:43:45"
changes:
  - date: "2026-11-23"
    note: "New briefing: Triage Agent user risk and activity pattern summaries, with SCU costs, roles and portal controls from Microsoft Learn."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 79 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected: E5/E7 inclusion allocation and its coverage of this agent, the documented username-anonymisation exception, and checklist items without a matching control."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 87 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-23"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 87
  confirmed: 86
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "c9e04b665938992365a01cf0a64ac7f9"
---

## What's changing

The Data Security Triage Agent in Microsoft Purview Insider Risk Management is getting improved user risk and Activity explorer pattern summaries. The roadmap item says the aim is better investigation accuracy, context and decision quality for analysts working through insider risk alerts.

On Microsoft Learn, the Triage Agent dashboard shows an **Agent summary** for each alert. It lists the agent's categorisation (**Needs attention** or **Less urgent**), a **User info** tile with the user's alert history, title, organisation and last working date, and **Risk patterns**, a narrative summary of each risk linked to the alert. Each narrative covers the risky activity, the sensitive data involved and the affected files, and **Filter activity** opens the matching events in Activity explorer. Learn marks the risk pattern narratives and the extra user details as preview.

Learn also says the agent analyses the most recent 30,000 activity events for the user in the alert, and evaluates all recorded user activities rather than only those defined in the policy that raised the alert. Where the activity log lacks a detail, the agent marks it "Not found by agent". The agent overview page adds that during preview it analyses only SharePoint file content, so an alert containing only email or device activities is not analysed.

The roadmap record gives status Launched, a preview date of March CY2026, a target of June CY2026 and release phases General Availability and Preview, for Worldwide (Standard Multi-Tenant) on the web. The record was last modified on 28 July 2026. It does not say whether the enhancements arrive switched on for tenants that already run the agent.

## Why it matters

Analysts will lean on these summaries to decide which alerts become cases, so their accuracy and the data they show matter to the people accountable for insider risk. The summaries draw on user attributes and file-level detail, and the agent runs on Security Copilot capacity, so a busier alert queue means more SCU spend.

Microsoft has not stated what happens to existing Triage Agent deployments when the enhancements arrive, so plan for the output possibly changing for tenants that already use the agent. Learn describes the agent as something an admin deploys and sets up, so a tenant that has not deployed it has no triaged alerts to show these summaries on.

## Risk assessment

**Data exposure**
- The User info tile shows alert history, title, organisation and last working date, and each risk pattern narrative describes sensitive data and affected files. Learn lists the roles that can view triaged alerts (Insider Risk Management Analysis or Investigation, plus Purview Agent Analysis and Security Copilot access), so review who holds them.
- The roadmap says users are pseudonymised by default in Insider Risk Management. Microsoft documents that user names in prioritised alerts in the Triage Agent dashboard are not anonymised even when **Show anonymized versions of usernames** is enabled ([Manage username privacy in Insider Risk Management](https://learn.microsoft.com/purview/insider-risk-management-settings-privacy)).

**Security & identity**
- Learn says agents run in the security context of the last user who saved the agent configuration, and that authentication lasts 90 days, after which the agent stops until the configuration is saved again. A departing admin who last saved it is a continuity risk.
- Setup offers a Microsoft Entra agent identity (recommended) or your own identity for the agent.

**Autonomy & actions**
- The agent categorises and summarises alerts. Learn describes analysts confirming and creating a case, or dismissing, so a person still decides. Learn describes an **Is this incorrect?** (preview) option for disputing a categorisation.
- Learn gives a 30,000-event analysis window and, during preview, SharePoint file content only, so an alert may be only partly analysed; treat a **Less urgent** label as a prompt for review, not a verdict.

**Change & support**
- Summary wording and categorisation can change for existing deployments with no setting to hold the change back that Microsoft describes. Brief analysts and compare a sample of alerts before and after.
- SCU consumption rises with the number and type of alerts processed; watch it in the usage monitoring page.

## Cost and licensing

Learn's get-started page says the Triage Agent in Insider Risk Management "requires both the standard per-seat licensing model and the pay-as-you-go billing model". The organisation must be licensed for Microsoft Purview Insider Risk Management, and SCUs must be provisioned for the agent to work.

The meter is the security compute unit. Learn says consumption depends on the number and type of alerts processed, and you track it in the Security Copilot usage monitoring tool. Security Copilot capacity is provisioned (billed per hour) plus optional overage capacity; the Purview billing models page says overage units are billed on demand and can be set to unlimited or to a maximum. A per-alert SCU figure for the Insider Risk Management agent, or for the new summaries, is not yet published.

Microsoft 365 E5 and E7 inclusion provides 400 SCUs each month per 1,000 paid user licences, up to 10,000 SCUs each month at no additional cost; the allocation resets monthly ([Security Copilot inclusion](https://learn.microsoft.com/copilot/security/security-copilot-inclusion)). The get-started page links to that page. The inclusion covers all agentic scenarios in Microsoft Purview, including this Triage Agent; its SCU use shares the tenant-wide inclusion capacity. Indirect costs are analyst and admin time for configuration and review.

## Scope

- **Audience:** Insider Risk Management admins set up and edit the agent; analysts and investigators view triaged alerts. The separate preview agent catalogue ([Microsoft Security Copilot agents in Purview](https://learn.microsoft.com/purview/copilot-in-purview-agents#available-agents)) lists Insider Risk Management Analysts, Investigators or the Insider Risk Management role group for viewing activity, without the additional groups listed in get-started.
- **Roles to set up:** Learn says admins need one role from each of two groups: Role Management or Insider Risk Management Admin, plus Security Copilot Contributor or Purview Copilot Workspace Contributor. Analysts' deployment roles are listed on the same page. The separate preview agent catalogue instead lists the viewing roles plus Purview Content Analyst in the Purview Agent Management role group for management.
- **Prerequisites:** the tenant is onboarded to Microsoft Security Copilot, Microsoft 365 data sharing is enabled in Security Copilot, and the Microsoft Purview plug-in is enabled.
- **Tenant:** Learn says there can be only one instance of each agent in a tenant.
- **Clouds and platforms:** the roadmap record lists Worldwide (Standard Multi-Tenant) and Web.
- **Rollout:** the roadmap record says the enhancements are deploying and gives a Launched status. The Learn pages read give no rollout schedule for existing deployments.

## Governance guidance

### Before rollout
- Check that SCU capacity is provisioned (or the Microsoft 365 E5/E7 inclusion is active).
- Record which account last saved the agent configuration, because the agent stops after 90 days unless the configuration is saved again.

### At rollout
- Open the agent's Edit agent page and review the triggers: schedule, alert timeframe and the policies whose alerts are triaged.
- Compare a sample of Agent summary and Risk patterns output against the underlying alert activities. Learn still describes separate dashboards, but its Alerts (preview) section says the unified experience removes the toggle between the Triage Agent and classic alert dashboards and that only the unified experience is supported after August 31 ([Investigate Insider Risk Management activities](https://learn.microsoft.com/purview/insider-risk-management-activities#alerts-preview)).
- Tell analysts that risk pattern narratives and the extra user details are marked preview on Learn, and how to use **Is this incorrect?**.

### After rollout
- Review SCU consumption on the agent's Usage monitoring page each month and review the policies in scope.
- Check that the agent is still running before the 90-day authentication expires.
- Sample alerts categorised **Less urgent** to test the agent's categorisation against analyst judgement.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Insider Risk Management Triage Agent is running</strong><br><small>Tenant</small><br><small class="controls__note">Deactivating stops triage but does not remove the agent. Remove agent deletes it and resets the alert timeframe reference point. Needs the required Purview agent permissions.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Agents › Explore agents › View agent › ellipsis menu next to Edit agent › Deactivate agent <a href="https://learn.microsoft.com/purview/copilot-in-purview-triage-irm-agent-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>When the agent runs, the alert timeframe and which policies it triages</strong><br><small>Tenant</small><br><small class="controls__note">Run mode: Triggers. Timeframe and policies: Agents &gt; Explore agents &gt; View agent &gt; Edit agent &gt; Triggers &gt; Edit. Analysts can shorten the timeframe but not lengthen it.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Agents › Explore agents › View agent › Edit agent › Triggers <a href="https://learn.microsoft.com/purview/copilot-in-purview-triage-irm-agent-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Security compute unit consumption by the agent</strong><br><small>Tenant</small><br><small class="controls__note">Usage monitoring links to the Security Copilot usage monitoring tool, where consumption is tracked. It reports consumption; it is not a spending cap.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Agents › Explore agents › View agent › Edit agent › Usage monitoring <a href="https://learn.microsoft.com/purview/copilot-in-purview-triage-irm-agent-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Learn documents deployment, deactivation, triggers and usage monitoring as steps in the Microsoft Purview portal, and the roles named in Scope apply. The table lists no switch for the risk pattern narratives or the User info tile alone; the controls shown govern the agent as a whole, so deactivating it also stops triage of every alert.

The agent runs as the identity chosen at setup (a Microsoft Entra agent identity or the configuring user). Analysts can shorten the alert timeframe when they edit the agent but not lengthen it, and the schedule is set by Microsoft and is not configurable by organisations.

## Open questions

- Do the improved summaries reach tenants that already run the Triage Agent automatically, or does an admin have to change a setting? Watch the get-started page and Message center.
- Will the preview labels on risk pattern narratives and user details be removed, and will the SharePoint-only content limit from the agent overview page still apply after general availability?
- How many SCUs does an Insider Risk Management alert consume? Watch the Security Copilot SCU page.

<!-- rationale
risk: Medium. The summaries put user details (title, organisation, last working date) and narratives about sensitive files in front of analysts, and Microsoft's pages describe no switch for them apart from deactivating the whole agent.
cost: Variable. The agent consumes Security Copilot security compute units (SCUs). For customers using purchased capacity, these are billed through provisioned and overage capacity, on top of the Insider Risk Management licence; a per-alert SCU figure is not yet published.
impact: Low. Only Insider Risk Management admins and analysts who use the Triage Agent notice the change; other users see nothing.
-->

<!-- verifier-findings (2026-11-23, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Security & identity; Governance guidance; Governance controls / behaviour: Learn says agents run in the security context of the last user who saved the configuration. | Found: Agents run in the security context of the last user that saved the agent configuration. | Fix: Replace the first Security & identity sentence and the final identity sentence with: 'The get-started page says agents run in the security context of the last user who saved their configuration, while the agent overview documents a choice between a Microsoft Entra agent identity and the configuring user's identity. These descriptions differ; confirm the identity used by your deployment.' Cite https://learn.microsoft.com/purview/copilot-in-purview-triage-irm-agent-get-started and https://learn.microsoft.com/purview/copilot-in-purview-agents-overview. Keep the separately documented 90-day authentication statement. | Source: https://learn.microsoft.com/purview/copilot-in-purview-triage-irm-agent-get-started
- [supported, minor] controls[1].ui; Governance controls table; Governance guidance / admin-path: Run mode, alert timeframe and policy settings are reached at Microsoft Purview portal > Agents > Explore agents > View agent > Edit agent > Triggers. | Found: Select **Triggers**. 7. Here you can change when the agent runs, either **Agent will run manually on one alert at a time** or **Agent will run automatically based on a set schedule**. | Fix: The path correctly reaches the settings page but stops before the run-mode control. Replace 'Run mode: Triggers.' in controls[1].note with 'Under Triggers, choose Agent will run manually on one alert at a time or Agent will run automatically based on a set schedule.' Keep the existing full timeframe/policy route ending in Triggers > Edit. | Source: https://learn.microsoft.com/purview/copilot-in-purview-triage-irm-agent-get-started
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: The checklist asks readers to check provisioned capacity or active E5/E7 inclusion, but no control row covers capacity or inclusion. | Found: Check that SCU capacity is provisioned (or the Microsoft 365 E5/E7 inclusion is active). The table instead covers agent deactivation, triggers and SCU consumption monitoring. | Fix: Remove the Before rollout bullet 'Check that SCU capacity is provisioned (or the Microsoft 365 E5/E7 inclusion is active).' It has no matching control row; retain the capacity prerequisite and inclusion explanation in Cost and licensing.
-->
