---
title: "Microsoft Purview: reasoning trace and confidence score for DLP triage agent alerts"
slug: "microsoft-purview-data-security-triage-agent-in-data-loss-prevention-reasoning-trace-and-c"
roadmapId: 560597
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans to show a reasoning trace and confidence score on alerts triaged by the Data Security Triage Agent in DLP. Analysts notice it; no admin action is documented yet, and the default is not stated."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: "September CY2026"
risk: "low"
cost: "variable"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Microsoft Learn says the triage agent needs both the standard per-seat licensing model and pay-as-you-go billing, with a Microsoft Data Loss Prevention (DLP) licence. Nothing specific to this feature is published."
audiences: ["security","compliance","finops"]
tags: ["purview","dlp","security-copilot","agents","defender-xdr","pay-as-you-go"]
sources:
  - title: "Microsoft 365 Roadmap 560597"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=560597"
    kind: "roadmap"
  - title: "Get started with the Microsoft Purview Triage Agent in Data Loss Prevention"
    url: "https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started"
    kind: "learn"
  - title: "Security Copilot agents in Microsoft Purview overview"
    url: "https://learn.microsoft.com/purview/copilot-in-purview-agents-overview"
    kind: "learn"
  - title: "Get started with the Data Loss Prevention Alerts dashboard"
    url: "https://learn.microsoft.com/purview/dlp-alerts-dashboard-get-started"
    kind: "learn"
  - title: "Search the audit log"
    url: "https://learn.microsoft.com/purview/audit-search"
    kind: "learn"
  - title: "Access the Security Copilot audit log"
    url: "https://learn.microsoft.com/copilot/security/audit-log"
    kind: "learn"
  - title: "Searching audit records of Security Copilot agent configuration changes (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchange/search-unifiedauditlog"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-loss-prevention-data-security-triage-agent-summaries-and-categoriza","microsoft-purview-data-security-triage-agent-sensitive-data-remediation-through-microsoft","microsoft-purview-data-loss-prevention-rule-based-tagging-and-auto-resolution-of-alerts-ba","agent-identity","auditing"]
controls:
  - governs: "Whether the Triage Agent in DLP is active"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Agents > Explore agents > Go to agent > Deactivate agent"
      docs: "https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started"
    api: null
    note: "The Deactivate agent option is in the ellipsis menu next to Edit agent. Deactivating stops triage; it does not remove the agent. Does not switch off the new fields separately."
  - governs: "The agent's trigger, alert timeframe, policy scope and custom instructions"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Agents > Explore agents > Go to agent > Edit agent > Agent configuration"
      docs: "https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started"
    api: null
    note: "Settings can be edited only from the Microsoft Purview portal. Custom instructions are on a separate Agent Custom Instruction tab."
  - governs: "Security compute unit consumption by the agent"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Agents > Explore agents > View agent > Edit agent > Usage monitoring"
      docs: "https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started"
    api: null
    note: "Links to the Security Copilot usage monitoring tool. Shows consumption; the page does not describe a cap here."
  - governs: "Searching audit records of Security Copilot agent configuration changes"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog"
      docs: "https://learn.microsoft.com/powershell/module/exchange/search-unifiedauditlog"
    note: "Run in Exchange Online PowerShell. Needs the Audit Logs or View-Only Audit Logs role. Covers admin events such as agent and agent trigger configuration, not documented for the new fields."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-08-19T22:58:06"
changes:
  - date: "2026-11-22"
    note: "First briefing for this roadmap item; Microsoft Learn does not yet describe the confidence score or reasoning trace, so the page covers the agent it extends."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 79 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 79
  confirmed: 75
  unconfirmed: 0
  contradicted: 4
  attempts: 1
  hash: "7c2d954b7fdd3d86421af7844e06392d"
---

## What's changing

The roadmap item plans to add a **reasoning trace** and a **confidence score** to alerts triaged by the Data Security Triage Agent in Microsoft Purview Data Loss Prevention (DLP). The record says the trace will appear alongside each agent decision, and that the score is meant to show analysts how reliable the agent's output is. The roadmap's stated aim is auditable output that analysts can validate rather than accept without checking.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. Learn does document the agent it extends: it runs on Microsoft Security Copilot, sorts triaged alerts into **Needs attention**, **Less urgent** and **Not categorized**, shows an **Agent summary** on each triaged alert, and, per the Purview agents overview, offers an explanation of the logic behind the categorisation. How the new trace and score differ from that, and where they appear, is not stated.

The roadmap record lists status In development, a preview target of September CY2026 and a general availability target of October CY2026, for the Worldwide (Standard Multi-Tenant) cloud on the Web platform, with release phases Preview and General Availability. These are Microsoft's targets, not commitments, and the record still shows In development. The record has no more info link and no Message Center post was supplied.

## Why it matters

For a service owner, the question is how far analysts rely on the agent's categories. The roadmap itself says analysts fall back to manual review when they cannot see why the agent decided as it did. A trace and score could let a team check a decision before acting on it, and could give a basis for deciding which alerts to leave to the agent. Treat the score as a prompt to look, not as a measure of accuracy: Microsoft has not said how it is calculated.

Microsoft has not stated what happens on arrival or whether an administrator has to do anything, so base planning on no source saying existing behaviour changes. The agent's spend and settings are the parts an administrator already controls today, and they do not depend on this feature.

## Risk assessment

**Data exposure**
- No new data access is described. The Learn page says the agent analyses alert content: it scans all files when an alert has fewer than 10, and the top 10 files when it has more. A reasoning trace may quote or describe that content, which is the wiki's inference; confirm who can see the trace, because viewing results needs roles from the Learn page's role groups (for example Information Protection Analyst or Purview Agent Analysis).

**Security & identity**
- The agent runs under its own Agent Identity, with roles such as Information Protection Analyst and Data classification content viewer assigned to it, according to the Learn page. Nothing in the roadmap changes that identity or those roles.

**Autonomy & actions**
- The roadmap describes explanation, not new actions. The risk is over-reliance: analysts who skip review of alerts with a high score. Microsoft has not said how the score is derived, so use the feedback mechanism, which lets analysts revise a Needs attention or Less urgent categorisation, to check the agent against your own judgement.

**Change & support**
- Analysts will see new fields on triaged alerts, so brief them before rollout. The Triage Agent can be managed only from the Microsoft Purview portal, though results can be viewed in Microsoft Defender XDR too; whether the trace and score appear in both is not stated.

## Cost and licensing

Microsoft Learn states that the DLP triage agent requires both the standard per-seat licensing model and the pay-as-you-go billing model, and that your organisation must be licensed for Microsoft Data Loss Prevention (DLP). The agent consumes security compute units (SCUs), you must have SCUs provisioned for it to work, and the number consumed depends on the number and type of alerts processed. Usage can be tracked from the agent's **Usage monitoring** page.

Whether showing a reasoning trace and confidence score changes SCU consumption, or carries a licence of its own, is not yet published. The roadmap record states no licence. Indirect costs are analyst time to learn the new fields and admin time to confirm roles.

## Scope

The roadmap lists the Worldwide (Standard Multi-Tenant) cloud and the Web platform; no US Government cloud is listed on the record, which is a record fact and not a statement that it is unavailable there. The audience is analysts who view the **Triage Agent** view of the DLP **Alerts** page, and administrators who deploy the agent.

Per Learn, the agent triages alerts from policies scoped to Exchange, Teams, OneDrive, SharePoint and devices (Endpoint), only for policies in active mode; one instance exists per tenant. It runs on Microsoft Security Copilot, so the tenant must be onboarded, Microsoft 365 data sharing enabled and the Microsoft Purview plug-in enabled. Whether the new fields reach tenants already running the agent, and when, is not stated.

## Governance guidance

### Before rollout
- Confirm which analysts hold the roles Learn lists for viewing agent results, and which account administers the agent, using the Purview permissions page.
- Check the agent's current deployment: whether it runs automatically, its alert timeframe and policy scope, so you know what the new fields will describe.
- Review SCU usage on the agent's Usage monitoring page to set a baseline before any change in consumption.

### At rollout
- Brief analysts that the confidence score and reasoning trace are explanation aids, and agree when a Needs attention or Less urgent decision must still be checked by a person.
- Watch Message center and the Learn page for the trace's location and visibility, which Microsoft has not yet described.

### After rollout
- Compare agent categories against analyst decisions, using the Agent feedback option to record disagreements.
- Recheck SCU consumption against the baseline, and search the audit log for agent configuration events if settings change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Triage Agent in DLP is active</strong><br><small>Tenant</small><br><small class="controls__note">The Deactivate agent option is in the ellipsis menu next to Edit agent. Deactivating stops triage; it does not remove the agent. Does not switch off the new fields separately.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Agents › Explore agents › Go to agent › Deactivate agent <a href="https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>The agent's trigger, alert timeframe, policy scope and custom instructions</strong><br><small>Tenant</small><br><small class="controls__note">Settings can be edited only from the Microsoft Purview portal. Custom instructions are on a separate Agent Custom Instruction tab.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Agents › Explore agents › Go to agent › Edit agent › Agent configuration <a href="https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Security compute unit consumption by the agent</strong><br><small>Tenant</small><br><small class="controls__note">Links to the Security Copilot usage monitoring tool. Shows consumption; the page does not describe a cap here.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Agents › Explore agents › View agent › Edit agent › Usage monitoring <a href="https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Searching audit records of Security Copilot agent configuration changes</strong><br><small>Tenant</small><br><small class="controls__note">Run in Exchange Online PowerShell. Needs the Audit Logs or View-Only Audit Logs role. Covers admin events such as agent and agent trigger configuration, not documented for the new fields.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog</code> <a href="https://learn.microsoft.com/powershell/module/exchange/search-unifiedauditlog" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No setting is documented that turns the reasoning trace or confidence score on or off, so the table lists the controls that exist for the agent as a whole. They do not govern the new fields specifically.

Per Learn, the agent can be managed, edited and deactivated only from the Microsoft Purview portal, even when deployed from Defender XDR. Editing needs the admin roles in the Learn page's permissions section. The audit row covers Security Copilot agent configuration changes; whether trace or score views are audited is not stated.

## Open questions

- Will the confidence score and reasoning trace be on by default for tenants that already run the Triage Agent, or does an administrator turn them on? Watch the Learn page for the Triage Agent in DLP.
- How is the confidence score defined and what scale does it use? Microsoft has not said.
- Will the trace or score change SCU consumption? Check the Learn page's SCU section and Message center.
- Who can see the reasoning trace, which roles apply, and is viewing it recorded in the audit log?
- Will the trace and score appear in Microsoft Defender XDR as well as the Microsoft Purview portal?

<!-- rationale
risk: Low. The roadmap describes extra explanation on decisions an existing agent already makes; no new data access or action is described, and the default is not stated, so this rates today's behaviour continuing.
cost: Variable. The triage agent consumes security compute units (SCUs) under pay-as-you-go billing; whether the new fields change SCU use is not yet published.
impact: Medium. Alert analysts and SOC teams who use the Triage Agent view are the people who would see and rely on the new fields; other users are not affected.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Security & identity / behaviour: The agent runs under its own Agent Identity. | Found: An agent now has its own agent identity ... or can be set up by assigning the user's identity who is setting the agent. | Fix: Replace the first sentence with 'The agent can use its own Agent Identity or the identity of the user configuring it; when agent identity is used, Microsoft assigns roles including Information Protection Analyst and Data classification content viewer.' Cite the existing get-started page. | Source: https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started
- [contradicted, blocker] Scope / applicability: The agent triages alerts from policies scoped to Exchange, Teams, OneDrive, SharePoint and devices (Endpoint). | Found: The Microsoft Purview Triage Agent in DLP triages alerts from policies that are scoped to Exchange, Teams, OneDrive, SharePoint, and devices (Endpoint) locations, only. If you want to triage alerts from devices, Evidence collection for file activities on devices must be enabled. | Fix: Add immediately after the supported-location list: 'To triage device alerts, evidence collection for file activities on devices must be enabled.' The cited get-started page states this prerequisite; do not imply endpoint triage works without it. | Source: https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: Deactivate agent is reached in Purview through Agents > Explore agents > Go to agent > Deactivate agent. | Found: select Agents. Select Explore agents. Select Go to agent for the agent you want to deactivate. On the far right upper right hand corner of the agent overview page, select the ellipses (three dots) that are located next to the Edit agent button. Select Deactivate agent. | Fix: Include the menu step in controls[0].ui.path and the rendered path: 'Agents > Explore agents > Go to agent > ellipsis next to Edit agent > Deactivate agent'. The existing note correctly identifies that menu. | Source: https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started
- [supported, minor] controls[1].governs and note; Governance controls table / admin-path: Custom instructions are edited on a separate Agent Custom Instruction tab. | Found: Go to Agent Custom Instruction for editing and configuring the customized instruction on how the agent should work in your tenant. ... Custom instructions (Preview) | Fix: Change the note sentence to 'Custom instructions (preview) are on a separate Agent Custom Instruction tab.' Microsoft marks this capability as preview. | Source: https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started
- [supported, minor] controls[3].ui; Governance controls table / admin-path: Audit searches are reached in the Microsoft Purview portal through Audit > Search. | Found: Select the Audit solution card. If the Audit solution card isn't displayed, select View all solutions and then select Audit from the Core section. On the Search page, configure the following search criteria as applicable: | Fix: Keep 'Audit > Search'; add to the audit row note: 'If Audit is not displayed, select View all solutions > Audit (under Core) > Search.' This is the documented alternative when the solution card is hidden. | Source: https://learn.microsoft.com/purview/audit-search
- [supported, minor] controls[3].governs and note; Governance controls; Governance guidance / applicability: The unified audit log covers Security Copilot agent and agent-trigger configuration changes. | Found: Admin events - Privileged actions such as changes to tenant-level settings or administrative changes (for example, data sharing, agent, agent trigger, plugin and promptbook configurations). | Fix: Qualify the audit row note: 'Covers agent and agent-trigger configuration changes when Logging audit data in Microsoft Purview is enabled in Security Copilot and auditing is active in Microsoft Purview.' These prerequisites are on the cited Security Copilot audit-log page. | Source: https://learn.microsoft.com/copilot/security/audit-log
- [supported, minor] What's changing; Scope / behaviour: Analysts can select a triaged alert in the DLP Alerts agent view to see its Agent summary. | Found: In preview, Microsoft Security Copilot in Purview supports Security Copilot Agents (preview). ... Select the triaged alert to view the Agent summary, an Overview, and Events associated with the alert. | Fix: Add after the existing-agent description: 'The Alerts dashboard documentation still describes the Alert Triage Agent view as preview.' This preserves the cited dashboard's qualification without changing the separate roadmap status. | Source: https://learn.microsoft.com/purview/dlp-alerts-dashboard-get-started
- [supported, minor] Risk assessment: Data exposure / behaviour: For alerts with more than 10 files, the agent uses the top 10 files. | Found: When an alert includes 10 or more files, the agent uses the potentially top 10 files to generate the file risk summary. | Fix: Change 'and the top 10 files when it has more' to 'and uses the potentially top 10 files when it has 10 or more'. The existing statement is true for more than 10, but omits the boundary case and the source's qualification. | Source: https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started
- [supported, minor] Risk assessment: Autonomy & actions; Governance guidance: After rollout / behaviour: Agent feedback lets analysts revise a Needs attention or Less urgent categorisation. | Found: If you disagree with the agent's initial categorization of an alert, you can use the feedback mechanism to revise the categorization. ... The current alert doesn't change immediately. Admin has to manually run a triage pass on the alert | Fix: Add to the feedback sentence: 'The current alert does not change immediately; an admin must manually run a triage pass on it to apply the feedback.' The existing sentence does not promise an immediate change, but this qualification makes the procedure clear. | Source: https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The checklist tells readers to check analyst and administrator role assignments, but the table has no permissions row. | Found: Confirm which analysts hold the roles Learn lists for viewing agent results, and which account administers the agent, using the Purview permissions page. ... Table controls: agent active state; configuration; SCU usage; audit search. | Fix: Remove 'using the Purview permissions page' and reword the checklist bullet as 'Review the viewing and administration role requirements in the cited Triage Agent permissions section.' This keeps it a documentation review rather than an unrepresented role-assignment control; do not add a row.
- [contradicted, minor] Governance guidance: After rollout; Governance controls / consistency: The checklist tells analysts to use Agent feedback, but the table has no feedback control row. | Found: Compare agent categories against analyst decisions, using the Agent feedback option to record disagreements. ... Table controls: agent active state; configuration; SCU usage; audit search. | Fix: Narrow this checklist bullet to 'Compare agent categories against analyst decisions and record disagreements.' Remove its instruction to use the unrepresented Agent feedback control; do not add a row.
-->
