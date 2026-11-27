---
title: "Microsoft Purview: Insider Risk Management triage agent summaries in Microsoft Defender"
slug: "microsoft-purview-insider-risk-management-ds-triage-agent-for-irm-available-in-defender"
roadmapId: 567472
topic: "governance"
products: ["Microsoft Purview"]
summary: "Insider Risk Management alerts in the Microsoft Defender alert queue will show triage agent summaries where the agent is active and alerts are shared. Microsoft says it is enabled automatically for qualifying organisations."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: "August CY2026"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "mixed"
  notes: "Learn says the Insider Risk Management triage agent requires both the standard per-seat licensing model and the pay-as-you-go billing model, and consumes SCUs. A rate or meter specific to this feature is not yet published."
audiences: ["security","compliance","finops"]
tags: ["insider-risk-management","defender-xdr","security-copilot","agents","ai","pay-as-you-go","purview"]
sources:
  - title: "Microsoft 365 Roadmap item 567472"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=567472"
    kind: "roadmap"
  - title: "MC1438568: Microsoft Purview | Insider Risk Management triage agent summaries available in Microsoft Defender"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1438568"
    kind: "message-center"
  - title: "Get started with the Microsoft Purview Triage Agent in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/copilot-in-purview-triage-irm-agent-get-started"
    kind: "learn"
  - title: "Security Copilot agents in Microsoft Purview overview"
    url: "https://learn.microsoft.com/purview/copilot-in-purview-agents-overview"
    kind: "learn"
  - title: "Share Insider Risk Management data with other solutions"
    url: "https://learn.microsoft.com/purview/insider-risk-management-settings-share-data"
    kind: "learn"
  - title: "Investigate insider risk threats in the Microsoft Defender portal"
    url: "https://learn.microsoft.com/defender-xdr/irm-investigate-alerts-defender"
    kind: "learn"
  - title: "Investigate Microsoft Purview Insider Risk Management activities"
    url: "https://learn.microsoft.com/purview/insider-risk-management-activities"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-loss-prevention-data-security-triage-agent-summaries-and-categoriza","microsoft-purview-introducing-irm-alert-classification","microsoft-purview-insider-risk-management-policy-recommendation-panel-in-irm","agent-identity"]
controls:
  - governs: "Whether IRM alerts and user risk details are shared with Microsoft Defender and other security solutions"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Insider Risk Management > Data sharing > Sharing data with other Microsoft security solutions"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-settings-share-data"
    api: null
    note: "Learn's Defender page says this sharing must be on; it names the toggle \"Share user risk details with other security solutions\". Also feeds Communication Compliance and DLP."
  - governs: "Whether the IRM triage agent runs and triages alerts"
    scope: "agent"
    ui:
      surface: "Microsoft Purview portal"
      path: "Agents > Explore agents > agent > View agent > ellipsis menu next to Edit agent > Deactivate agent"
      docs: "https://learn.microsoft.com/purview/copilot-in-purview-triage-irm-agent-get-started"
    api: null
    note: "Needs the Purview agent permissions on the get-started page. Deactivating does not remove the agent; Remove agent does and resets the alert timeframe reference point."
  - governs: "Security compute unit (SCU) consumption by the IRM triage agent"
    scope: "agent"
    ui:
      surface: "Microsoft Purview portal"
      path: "Agents > Explore agents > View agent > Edit agent > Usage monitoring"
      docs: "https://learn.microsoft.com/purview/copilot-in-purview-triage-irm-agent-get-started"
    api: null
    note: "Links to the Security Copilot usage monitoring tool, where consumption is tracked. Monitors usage; it does not cap it."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-27"
roadmapModified: "2026-07-09T23:00:39"
changes:
  - date: "2026-11-20"
    note: "New briefing: IRM triage agent summaries reach the Defender alert queue, with rollout per MC1438568, agent licensing and SCU consumption, and the controls Learn documents."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 2 of 80 statements not yet confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 86 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-27"
    note: "Corrected after the independent check: Defender summaries no longer described as naming users, MC1438568 cited as Microsoft's readiness guidance, the agent security context attributed to the get-started article, and the comparison and role checklist steps narrowed or removed."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 86 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 86
  confirmed: 86
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "247d00947e67c3e87998fb5c4dbc9642"
---

## What's changing

Microsoft plans to show Insider Risk Management (IRM) triage agent summaries on IRM alerts in the Microsoft Defender alert queue. Where the IRM triage agent is active and IRM alerts are shared with Defender, supported alerts will carry AI-generated summaries: alert categorisation, investigation findings, observed risk patterns and relevant user context. Investigators can still open the full investigation experience in the Microsoft Purview portal.

Microsoft's notice MC1438568 (published 2026-07-24) gives the rollout: public preview from mid-August 2026, expected to finish in early September 2026, and general availability (Worldwide) from early December 2026, expected to finish in late December 2026. It states the feature will be enabled automatically for organisations that meet the prerequisites, that existing alert-sharing configurations are preserved, and that there is no impact on existing configurations or workflows. The notice sets no act-by date.

The roadmap record still shows the status as In development, with a preview date of August CY2026 and a target date of December CY2026, for Worldwide (Standard Multi-Tenant) on the web. Release phases are listed as General Availability and Preview. The notice and the record are consistent on timing; the record's status has not moved to match the preview start the notice describes.

At the time of writing (November 2026), the Learn page on investigating insider risk alerts in the Defender portal does not mention agent summaries, so what follows about how the summaries look in Defender rests on the roadmap and the notice. Learn does document the **Agent summary** in the Purview portal, where the agent sorts alerts into **Needs attention** or **Less urgent**.

## Why it matters

This puts AI-written context about a user's risky activity in front of the security operations team in Defender, a portal where analysts may not normally work with insider risk data. Microsoft's notice says the summaries come from IRM alert data and that the change involves AI capabilities that interact with customer data. Qualifying organisations get it without an administrator choosing to, so the decision for a service owner is whether the people who see Defender alerts should also see these summaries.

If nobody acts, the notice says the feature is enabled automatically for organisations that meet the prerequisites: IRM alerts shared with Defender and an active IRM triage agent. Organisations that have not deployed the agent or turned on data sharing are not described as affected. The agent also consumes SCUs, so the cost question sits with the team that owns Security Copilot capacity.

## Risk assessment

**Data exposure**
- Summaries derived from IRM alert data, including user details, appear in the Defender alert queue as well as in Purview. Turning on the IRM **Data sharing** setting also shares alert severity levels with Microsoft Purview Communication Compliance and Data Loss Prevention, per the Learn page on sharing IRM data.
- The roadmap says users in IRM are pseudonymised by default. Confirm in a preview tenant whether the summaries in Defender show names or pseudonyms before widening Defender access.

**Security & identity**
- The get-started article for the IRM triage agent says agents run in the security context of the last user who saved the agent configuration, and that authentication is good for 90 days, after which the agent stops running until the configuration is saved again. Put the renewal on a calendar owned by an accountable role, and confirm how Defender shows alerts the agent has stopped triaging.
- Learn names Security Operator or Security Reader, plus membership of an IRM role group (Insider Risk Management, Analysts or Investigators), for viewing IRM alerts in Defender. Learn does not say whether the same roles govern the summaries.

**Autonomy & actions**
- The agent categorises and summarises alerts; the Learn pages read describe no action it takes on users or content. It does not triage every alert: Learn says it triages alerts in the timeframe and policies you select, and that during preview it analyses only SharePoint file content, so an alert with only email or device activities is not analysed. Tell analysts that a missing summary is not a low-risk signal.

**Change & support**
- Notice MC1438568 asks administrators to confirm that alerts are shared with Defender and the IRM triage agent is deployed and active, to inform security operations and investigation teams, and to update internal documentation on IRM alert investigations. Learn's Defender page has no agent-summary content yet; MC1438568 provides Microsoft's rollout and readiness guidance.

## Cost and licensing

Learn says the Triage Agent in Insider Risk Management requires both the standard per-seat licensing model and the pay-as-you-go billing model, and that the organisation must be licensed for Microsoft Purview Insider Risk Management to use it (Get started with the Microsoft Purview Triage Agent in Insider Risk Management).

The meter is the security compute unit (SCU). Learn says the triage agents consume SCUs as they perform their tasks, that SCUs must be provisioned for the agents to work, and that the number consumed depends on the number and type of alerts processed. SCU use can be tracked in the Security Copilot usage monitoring tool, and from the agent's **Usage monitoring** page in the Purview portal (see the controls table).

The Learn page on investigating insider risk alerts in Defender lists two prerequisites: a Microsoft 365 subscription that supports insider risk management access, and access to Microsoft Defender XDR. An SCU figure specific to the IRM triage agent, and whether showing summaries in Defender adds consumption beyond the triage itself, are not yet published.

## Scope

**Who:** organisations that share IRM alerts with Microsoft Defender and have the IRM triage agent enabled and active, and the security analysts and investigators who review IRM alerts in Defender (MC1438568).

**Clouds and platforms:** the roadmap record lists Worldwide (Standard Multi-Tenant) and the web.

**Rollout:** preview from mid-August 2026 to early September 2026; general availability from early December 2026 to late December 2026, per MC1438568.

**Prerequisites from Learn:** the tenant must be onboarded to Microsoft Security Copilot, Microsoft 365 data sharing must be enabled in Security Copilot, and the Microsoft Purview plug-in must be enabled in Security Copilot. IRM data sharing with other security solutions must be turned on. In Defender, Learn names Security Operator or Security Reader plus an IRM role group for IRM alerts. There can be only one instance of each agent in a tenant.

## Governance guidance

### Before rollout
- Confirm that **Data sharing** is turned on in Insider Risk Management settings and that IRM alerts appear in the Defender alert queue under the **Service source** filter (see the data sharing row in the controls table).
- Check that SCUs are provisioned and agree who pays for them, using the **Usage monitoring** page for the agent.
- Identify which account last saved the agent configuration and set a reminder before its 90-day authentication lapses.

### At rollout
- Brief security operations and IRM investigators on the new summaries, as the notice asks, and say that a missing summary does not mean a low-risk alert.
- Compare a sample of alerts in Defender and in the Purview alert investigation experience to see what the summaries show for your policies.
- Update internal runbooks that describe IRM alert investigation, as the notice recommends.

### After rollout
- Review SCU consumption after the first full month of automatic triage.
- Deactivate the agent if the summaries are not wanted in Defender, after confirming what that does to the summaries (see the open questions).
- Check Learn and Message center for the Defender documentation of agent summaries and update this page when it appears.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether IRM alerts and user risk details are shared with Microsoft Defender and other security solutions</strong><br><small>Tenant</small><br><small class="controls__note">Learn's Defender page says this sharing must be on; it names the toggle &quot;Share user risk details with other security solutions&quot;. Also feeds Communication Compliance and DLP.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Insider Risk Management › Data sharing › Sharing data with other Microsoft security solutions <a href="https://learn.microsoft.com/purview/insider-risk-management-settings-share-data" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the IRM triage agent runs and triages alerts</strong><br><small>Agent</small><br><small class="controls__note">Needs the Purview agent permissions on the get-started page. Deactivating does not remove the agent; Remove agent does and resets the alert timeframe reference point.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Agents › Explore agents › agent › View agent › ellipsis menu next to Edit agent › Deactivate agent <a href="https://learn.microsoft.com/purview/copilot-in-purview-triage-irm-agent-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Security compute unit (SCU) consumption by the IRM triage agent</strong><br><small>Agent</small><br><small class="controls__note">Links to the Security Copilot usage monitoring tool, where consumption is tracked. Monitors usage; it does not cap it.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Agents › Explore agents › View agent › Edit agent › Usage monitoring <a href="https://learn.microsoft.com/purview/copilot-in-purview-triage-irm-agent-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The data sharing setting is the control Learn names as required for IRM alerts to appear in the Defender alert queue, and the agent being active is the notice's other condition. Learn does not describe a switch that hides the agent summary in Defender while leaving the alerts there, so what each control does to the summaries is an open question.

Turning off **Data sharing** also stops alert severity levels reaching Communication Compliance and DLP, per the sharing page. Deactivating the agent stops it triaging alerts and does not remove it; removing the agent deletes it and resets the alert timeframe reference point. Agent deployment and configuration need roles from the groups listed on the get-started page, and viewing triaged alerts needs further roles.

## Open questions

- Does turning off IRM **Data sharing**, or deactivating the agent, remove summaries from Defender, and is there a Defender-side setting? Watch the Learn page on investigating insider risk threats in the Defender portal.
- Do Security Operator or Security Reader plus an IRM role group let a Defender user see the summaries, or are the Purview agent roles also needed?
- Are users pseudonymised in the summaries shown in Defender, as they are by default in IRM?
- Does showing summaries in Defender consume SCUs beyond the triage run, and what rate applies? Watch the get-started page and Security Copilot usage monitoring.
- When will the roadmap status move from In development, given that the notice describes a preview starting in mid-August 2026?

<!-- rationale
risk: Medium. AI-generated summaries of Insider Risk Management alert data, including user details, start appearing in a second portal for qualifying organisations without admin action, and Learn does not yet describe them.
cost: Variable. The agent consumes Security Compute Units (SCUs) and Learn says it needs both per-seat licensing and pay-as-you-go billing; a rate specific to this feature is not yet published.
impact: Medium. Security analysts and insider risk investigators who work Insider Risk Management alerts in Defender will notice; other users do not.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Security & identity; Governance guidance: Before rollout / behaviour: The get-started article says agents run in the security context of the last user who saved their configuration. | Found: Agents run in the security context of the last user that saved the agent configuration. | Fix: After the attributed security-context sentence add: 'The cited Security Copilot agents in Microsoft Purview overview also documents Create and use agent identity (recommended) and Assign and use my identity; confirm which identity your deployed agent uses.' Keep the get-started attribution. The differing options are at https://learn.microsoft.com/purview/copilot-in-purview-agents-overview#agent-identity. | Source: https://learn.microsoft.com/purview/copilot-in-purview-triage-irm-agent-get-started
- [supported, minor] front matter: licensing; Cost and licensing; rationale: cost / licensing: The licensing model is mixed, as the IRM get-started article says it requires standard per-seat licensing and pay-as-you-go billing. | Found: The Triage Agent in Insider Risk Management requires both the standard per-seat licensing model and the pay-as-you-go billing model. | Fix: Keep the attributed requirement and mixed model, but add: 'Security Copilot's inclusion article separately says eligible Microsoft 365 E5 and E7 customers receive included SCU capacity covering agentic scenarios in Purview and Defender.' Cite https://learn.microsoft.com/copilot/security/security-copilot-inclusion. This acknowledges the differing billing guidance without implying every tenant needs separately purchased capacity. | Source: https://learn.microsoft.com/purview/copilot-in-purview-triage-irm-agent-get-started
- [supported, minor] controls[0].ui; Governance controls table; Governance guidance: Before rollout / admin-path: The tenant sharing control is reached in Microsoft Purview via Settings > Insider Risk Management > Data sharing > Sharing data with other Microsoft security solutions. | Found: In Insider Risk Management settings, select the **Data sharing** setting. 2. Under the **Sharing data with other Microsoft security solutions** section, turn on the setting. | Fix: Finish controls[0].ui.path and its table path at the named toggle: 'Settings > Insider Risk Management > Data sharing > Sharing data with other Microsoft security solutions > Share user risk details with other security solutions'. The existing path reaches the correct section; the toggle's label is confirmed by the already cited https://learn.microsoft.com/defender-xdr/irm-investigate-alerts-defender. | Source: https://learn.microsoft.com/purview/insider-risk-management-settings-share-data
-->
