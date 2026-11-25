---
title: "Dynamics 365 Customer Service: Intraday Agent manages queues and schedule adherence"
slug: "dynamics-365-customer-service-manage-intraday-operations-with-ai-agent"
roadmapId: 577184
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","Dynamics 365 Customer Service"]
summary: "Microsoft plans an autonomous Intraday Agent for Customer Service that watches queue volume and shift adherence and can change schedules. Microsoft Learn has no page on it yet; agent-specific licensing and admin controls are not published."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "March CY2027"
previewDate: "September CY2026"
risk: "high"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Copilot Service workspace requires an active Microsoft Dynamics 365 Customer Service Enterprise subscription for each user. Intraday Agent-specific licensing and metering are not yet published."
audiences: ["service-owner","m365-admin","change-adoption","finops"]
tags: ["dynamics-365","customer-service","workforce-management","autonomous-agents","agents","write-actions","real-time"]
sources:
  - title: "Microsoft 365 Roadmap 577184"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577184"
    kind: "roadmap"
  - title: "Use workforce alerts for volume spikes (preview)"
    url: "https://learn.microsoft.com/dynamics365/contact-center/use/workforce-management-use-volume-spike-alerts"
    kind: "learn"
  - title: "Use workforce alerts for adherence notifications (preview)"
    url: "https://learn.microsoft.com/dynamics365/contact-center/use/workforce-management-use-adherence-alerts"
    kind: "learn"
  - title: "Workforce Engagement Management app (preview)"
    url: "https://learn.microsoft.com/dynamics365/contact-center/use/workforce-management-wem-app-overview"
    kind: "learn"
  - title: "Data residency for agent capabilities in Dynamics 365"
    url: "https://learn.microsoft.com/dynamics365/developer/agent-capabilities-data-residency"
    kind: "learn"
  - title: "System requirements for Copilot Service workspace"
    url: "https://learn.microsoft.com/dynamics365/customer-service/implement/customer-service-workspace-system-requirements"
    kind: "learn"
  - title: "Use the intraday performance report (preview)"
    url: "https://learn.microsoft.com/dynamics365/contact-center/use/workforce-management-use-performance-report"
    kind: "learn"
  - title: "Use the adherence history report"
    url: "https://learn.microsoft.com/dynamics365/contact-center/use/workforce-management-use-adherence-history-report"
    kind: "learn"
videos: []
related: ["dynamics-365-contact-center-unified-routing-orchestrate-conversation-distribution-with-nat","dynamics-365-field-service-optimize-resource-scheduling-optimize-schedules-with-scheduling","copilot-credits","agent-identity"]
controls:
  - governs: "Whether the Intraday Agent is available and which of its actions are allowed"
    scope: "other"
    ui: null
    api: null
    note: "No setting, role or API for the agent is documented at the time of writing (November 2026)."
  - governs: "Whether supervisors can use the existing workforce alerts (informational, not the agent)"
    scope: "other"
    ui:
      surface: "Copilot Service admin center"
      path: "Operations > Workforce management > Intraday management > Workforce alerts (preview) > Manage > Enable workforce alerts"
      docs: "https://learn.microsoft.com/dynamics365/contact-center/use/workforce-management-use-volume-spike-alerts"
    api: null
    note: "Preview. Off by default. General control: Microsoft has not confirmed it applies to the Intraday Agent."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-25"
roadmapModified: "2026-10-20T23:00:34"
changes:
  - date: "2026-11-18"
    note: "New briefing: roadmap-only description of the Intraday Agent, with the related existing workforce alerts and their enable setting."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 55 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 64 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected after the independent check: identity, data-processing and licensing statements now follow Microsoft's Dynamics 365 agent guidance and Customer Service licensing page; removed schedulers as recipients; updated report references."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 67 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 67
  confirmed: 65
  unconfirmed: 0
  contradicted: 2
  attempts: 0
  hash: "21c41021ef9d397a90104b674ff07183"
---

## What's changing

Microsoft plans an Intraday Agent for Dynamics 365 Customer Service: an autonomous AI agent that helps manage a contact centre's operations during the day. Microsoft Learn does not describe this agent yet, so what follows about its behaviour is the roadmap item's description.

The roadmap item describes two capabilities. **Intraday queue tracking** monitors queue volumes in real time, detects when actual volume deviates significantly from forecast, reforecasts, notifies supervisors with alerts and recommendations, and automates corrective actions such as adjusting schedules, rescheduling breaks or reallocating service representatives. **Intraday adherence tracking** monitors representatives against their scheduled shift activities, detects late logins, extended breaks or early logouts, and mitigates them through actions such as break rescheduling, shift extensions, overtime activation or flexible channel reassignment. Both capabilities support customisable instructions to align the mitigation actions with business needs.

The roadmap record lists the status as In development, with a preview target of September CY2026 and a general availability target of March CY2027, for the Worldwide (Standard Multi-Tenant) cloud on the web. These are Microsoft's targets, not commitments. The record lists the products as Microsoft Copilot (Microsoft 365) and Dynamics 365 Customer Service. The roadmap item does not say whether the agent is on by default or how an administrator turns it on.

Microsoft Learn already documents related, existing workforce management features in preview, such as workforce alerts for volume spikes and adherence. Those alerts are informational and are a separate feature from this agent.

## Why it matters

This is a change from alerting to acting. Microsoft Learn describes the existing workforce alerts as informational: they notify supervisors and do not reroute conversations, change staffing or modify the published schedule. The roadmap describes the Intraday Agent as going further and carrying out corrective actions itself.

The actions the roadmap names affect people's working hours and pay-related activity: breaks, shift extensions and overtime. Service owners should decide who may authorise such changes, and what the agent's instructions say, before the agent is switched on. Microsoft has not stated what happens on arrival, so base planning on no source saying that existing behaviour changes, and watch Message center and Microsoft Learn for the default, the licence and the controls.

## Risk assessment

**Data exposure**

- The roadmap says the agent reads real-time queue volumes, forecasts, and representatives' schedules and adherence (logins, breaks, logouts). Intraday-specific table and service dependencies are not yet documented. Microsoft's [general Customer Service agent guidance](https://learn.microsoft.com/dynamics365/developer/agent-capabilities-data-residency) identifies Entra ID, Dataverse, Dataverse MCP and Power Platform as services processing authentication and request data, and says transient processing can occur outside the geography selected for Dataverse; that geography alone does not identify every supporting service's location. Confirm the Intraday Agent's specific processing, cache and diagnostic boundaries before enabling it.

**Security & identity**

- Microsoft's general Dynamics 365 agent guidance covers Customer Service and Workforce Engagement Management and says agents read and update Dataverse using the signed-in user's permissions ([data residency for agent capabilities](https://learn.microsoft.com/dynamics365/developer/agent-capabilities-data-residency)). Intraday Agent-specific identity details are not yet documented, and Microsoft has not said which security roles configure the agent. Confirm this before enabling it. Learn documents dedicated preview roles for the existing Workforce Engagement Management app (WFM Administrator, WFM Scheduler, WFM Intraday Analyst and others), but no page says they govern the Intraday Agent.

**Autonomy & actions**

- The roadmap says the agent can reschedule breaks, extend shifts, activate overtime and reassign channels without a person doing each step. Microsoft has not published whether an approval step, an audit trail or an action limit exists. The roadmap names customisable instructions as one way to shape its actions; test them in a non-production environment first.
- Overtime activation and shift extensions have cost and employment-relations consequences. The existing alerts are informational only, so they are not a control over this agent.

**Change & support**

- Representatives may see their breaks and shifts change within the day. Plan communication with supervisors and representatives before preview use, and agree who reviews the agent's actions.

## Cost and licensing

Copilot Service workspace requires an active Microsoft Dynamics 365 Customer Service Enterprise subscription for each user, according to its [system requirements page](https://learn.microsoft.com/dynamics365/customer-service/implement/customer-service-workspace-system-requirements). That page does not mention the Intraday Agent, so it does not establish the agent's eventual licence or price. Intraday Agent-specific licensing and metering are not yet published: the roadmap item names no licence, add-on or meter, and Microsoft Learn has no page for the agent at the time of writing (November 2026).

No agent-specific cost can be stated, and none can be ruled out. Ask Microsoft whether the agent is metered, for example in Copilot Credits, and which licence it needs beyond the Customer Service subscription, before budgeting. Indirect costs are supervisor and administrator time to write the agent's instructions and review its actions, plus any overtime the agent activates.

## Scope

- **Product and surface:** Dynamics 365 Customer Service, on the web. The roadmap record also lists Microsoft Copilot (Microsoft 365) as a product.
- **Cloud:** the record lists Worldwide (Standard Multi-Tenant) only. That is a record fact; it does not say the agent is unavailable elsewhere.
- **Release phase:** the record lists General Availability and Preview, with a preview target of September CY2026 and a general availability target of March CY2027. Status is In development.
- **Prerequisites:** not yet published for the agent. For the existing workforce management features, Learn says an administrator must install the Workforce Management for Customer Service package in the Power Platform admin center. Confirm whether the same applies here.
- **Who is affected:** supervisors who receive its alerts and recommendations, and service representatives whose schedules it may change.

## Governance guidance

### Before rollout

- Ask your Microsoft account team, and watch Message center and Microsoft Learn, for the Intraday Agent's licence, default state, required roles and action limits before preview use.
- Decide who in operations may approve autonomous schedule changes, overtime and shift extensions, and agree this with HR and employee-relations contacts.
- Draft the customisable instructions that will limit the agent's mitigation actions, and list the actions you do not want it to take.
- Check whether workforce management is already installed and in use in your environments, because the existing forecast, shift plan and adherence data are the nearest documented basis for what the agent would act on.

### At rollout

- Trial the agent only in a preview or test environment with a small planning group before any production queue, and record each change it makes.
- Confirm in the agent's own documentation, once published, how an administrator turns it off. Until then, do not assume a switch exists.
- Tell supervisors and representatives in the pilot that breaks and shifts may be changed by an agent.

### After rollout

- Review the agent's actions against queue and adherence outcomes each week and adjust the instructions.
- Check the existing preview intraday performance report and adherence history report to review planned versus actual performance and schedule adherence before and after the agent's changes.
- Revisit this briefing when Microsoft publishes a Learn page for the agent.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Intraday Agent is available and which of its actions are allowed</strong><br><small class="controls__note">No setting, role or API for the agent is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether supervisors can use the existing workforce alerts (informational, not the agent)</strong><br><small class="controls__note">Preview. Off by default. General control: Microsoft has not confirmed it applies to the Intraday Agent.</small></td><td data-label="Admin UI"><strong>Copilot Service admin center</strong><br>Operations › Workforce management › Intraday management › Workforce alerts (preview) › Manage › Enable workforce alerts <a href="https://learn.microsoft.com/dynamics365/contact-center/use/workforce-management-use-volume-spike-alerts" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No documented admin switch, role or API for the Intraday Agent exists yet, so the table records that gap. The one documented control nearby is the **Enable workforce alerts** setting, which governs the existing informational volume spike and adherence alerts for supervisors. Microsoft has not said it governs the agent, so do not rely on it to restrain the agent. The page documents that setting as off by default and as an administrator action; it is a preview feature. Microsoft Learn documents no API for that setting at the time of writing (November 2026).

## Open questions

- What Intraday Agent-specific licence or meter does the agent need, and is it consumed in Copilot Credits or another unit? Watch the Dynamics 365 licensing guide and the roadmap item.
- Is the agent on or off when it arrives, and which administrator setting turns it on or off per environment, queue or planning group?
- Does the agent need approval from a supervisor before it changes schedules, activates overtime or extends shifts, and where are its actions logged?
- Which security roles configure the agent, does it use the existing workforce management roles, and what identity details apply beyond the general guidance that agents use the signed-in user's permissions?
- How do the customisable instructions work, who can edit them, and can they set hard limits on actions?

<!-- rationale
risk: High. The roadmap describes an agent that acts on its own, including rescheduling breaks, extending shifts and activating overtime, and no admin control for it is documented yet.
cost: Low. The only cost the sources show is admin and supervisor time to configure and review the agent's actions; an Intraday Agent-specific licence or meter is not yet published.
impact: Medium. Supervisors, schedulers and service representatives in contact centres would notice first, because their breaks, shifts and channel assignments are what the agent is described as changing.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: After rollout; Governance controls / consistency: The checklist tells readers to check the intraday performance and adherence history reports, but neither has a controls-table row. | Found: Check the existing preview intraday performance report and adherence history report ... Table rows: Whether the Intraday Agent is available and which of its actions are allowed; Whether supervisors can use the existing workforce alerts (informational, not the agent). | Fix: Remove the After rollout bullet beginning 'Check the existing preview intraday performance report and adherence history report': it asks readers to check two reporting controls that have no corresponding table rows.
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The checklist tells readers to take stock of workforce-management installation and use, but the controls table has no corresponding row. | Found: Check whether workforce management is already installed and in use in your environments ... Table rows cover Intraday Agent availability/actions and existing workforce alerts, not workforce-management installation or enablement. | Fix: Remove the Before rollout bullet beginning 'Check whether workforce management is already installed and in use in your environments': the installation/enablement control it asks readers to check has no table row.
-->
