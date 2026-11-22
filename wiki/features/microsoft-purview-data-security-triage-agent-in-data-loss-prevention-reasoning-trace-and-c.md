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
      path: "Agents > Explore agents > Go to agent > ellipsis next to Edit agent > Deactivate agent"
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
    note: "Settings can be edited only from the Microsoft Purview portal. Custom instructions (preview) are on a separate Agent Custom Instruction tab."
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
    note: "Run in Exchange Online PowerShell; needs Audit Logs or View-Only Audit Logs role. Covers agent and agent-trigger configuration changes when audit logging is enabled in Security Copilot and auditing is active in Purview."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-08-19T22:58:06"
changes:
  - date: "2026-11-22"
    note: "First briefing for this roadmap item; Microsoft Learn does not yet describe the confidence score or reasoning trace, so the page covers the agent it extends."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 79 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Correction after verification: the agent identity statement, device-alert prerequisite, 10-file boundary, feedback and audit qualifications, and two checklist items were fixed."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 88 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 88
  confirmed: 88
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "bf30205a27ff45dacdd8e8d7ce8a7056"
---

## What's changing

The roadmap item plans to add a **reasoning trace** and a **confidence score** to alerts triaged by the Data Security Triage Agent in Microsoft Purview Data Loss Prevention (DLP). The record says the trace will appear alongside each agent decision, and that the score is meant to show analysts how reliable the agent's output is. The roadmap's stated aim is auditable output that analysts can validate rather than accept without checking.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. Learn does document the agent it extends: it runs on Microsoft Security Copilot, sorts triaged alerts into **Needs attention**, **Less urgent** and **Not categorized**, shows an **Agent summary** on each triaged alert, and, per the Purview agents overview, offers an explanation of the logic behind the categorisation. The Alerts dashboard documentation still describes the Alert Triage Agent view as preview. How the new trace and score differ from that, and where they appear, is not stated.

The roadmap record lists status In development, a preview target of September CY2026 and a general availability target of October CY2026, for the Worldwide (Standard Multi-Tenant) cloud on the Web platform, with release phases Preview and General Availability. These are Microsoft's targets, not commitments, and the record still shows In development. The record has no more info link and no Message Center post was supplied.

## Why it matters

For a service owner, the question is how far analysts rely on the agent's categories. The roadmap itself says analysts fall back to manual review when they cannot see why the agent decided as it did. A trace and score could let a team check a decision before acting on it, and could give a basis for deciding which alerts to leave to the agent. Treat the score as a prompt to look, not as a measure of accuracy: Microsoft has not said how it is calculated.

Microsoft has not stated what happens on arrival or whether an administrator has to do anything, so base planning on no source saying existing behaviour changes. The agent's spend and settings are the parts an administrator already controls today, and they do not depend on this feature.

## Risk assessment

**Data exposure**
- No new data access is described. The Learn page says the agent analyses alert content: it scans all files when an alert has fewer than 10, and uses the potentially top 10 files when it has 10 or more. A reasoning trace may quote or describe that content, which is the wiki's inference; confirm who can see the trace, because viewing results needs roles from the Learn page's role groups (for example Information Protection Analyst or Purview Agent Analysis).

**Security & identity**
- The agent can use its own Agent Identity or the identity of the user configuring it; when agent identity is used, Microsoft assigns roles including Information Protection Analyst and Data classification content viewer. Nothing in the roadmap changes that identity or those roles.

**Autonomy & actions**
- The roadmap describes explanation, not new actions. The risk is over-reliance: analysts who skip review of alerts with a high score. Microsoft has not said how the score is derived, so use the feedback mechanism, which lets analysts revise a Needs attention or Less urgent categorisation, to check the agent against your own judgement. The current alert does not change immediately; an admin must manually run a triage pass on it to apply the feedback.

**Change & support**
- Analysts will see new fields on triaged alerts, so brief them before rollout. The Triage Agent can be managed only from the Microsoft Purview portal, though results can be viewed in Microsoft Defender XDR too; whether the trace and score appear in both is not stated.

## Cost and licensing

Microsoft Learn states that the DLP triage agent requires both the standard per-seat licensing model and the pay-as-you-go billing model, and that your organisation must be licensed for Microsoft Data Loss Prevention (DLP). The agent consumes security compute units (SCUs), you must have SCUs provisioned for it to work, and the number consumed depends on the number and type of alerts processed. Usage can be tracked from the agent's **Usage monitoring** page.

Whether showing a reasoning trace and confidence score changes SCU consumption, or carries a licence of its own, is not yet published. The roadmap record states no licence. Indirect costs are analyst time to learn the new fields and admin time to confirm roles.

## Scope

The roadmap lists the Worldwide (Standard Multi-Tenant) cloud and the Web platform; no US Government cloud is listed on the record, which is a record fact and not a statement that it is unavailable there. The audience is analysts who view the **Triage Agent** view of the DLP **Alerts** page, and administrators who deploy the agent.

Per Learn, the agent triages alerts from policies scoped to Exchange, Teams, OneDrive, SharePoint and devices (Endpoint). To triage device alerts, evidence collection for file activities on devices must be enabled. The agent covers only policies in active mode, and one instance exists per tenant. It runs on Microsoft Security Copilot, so the tenant must be onboarded, Microsoft 365 data sharing enabled and the Microsoft Purview plug-in enabled. Whether the new fields reach tenants already running the agent, and when, is not stated.

## Governance guidance

### Before rollout
- Review the viewing and administration role requirements in the Triage Agent permissions section of the Learn page.
- Check the agent's current deployment: whether it runs automatically, its alert timeframe and policy scope, so you know what the new fields will describe.
- Review SCU usage on the agent's Usage monitoring page to set a baseline before any change in consumption.

### At rollout
- Brief analysts that the confidence score and reasoning trace are explanation aids, and agree when a Needs attention or Less urgent decision must still be checked by a person.
- Watch Message center and the Learn page for the trace's location and visibility, which Microsoft has not yet described.

### After rollout
- Compare agent categories against analyst decisions and record disagreements.
- Recheck SCU consumption against the baseline, and search the audit log for agent configuration events if settings change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Triage Agent in DLP is active</strong><br><small>Tenant</small><br><small class="controls__note">The Deactivate agent option is in the ellipsis menu next to Edit agent. Deactivating stops triage; it does not remove the agent. Does not switch off the new fields separately.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Agents › Explore agents › Go to agent › ellipsis next to Edit agent › Deactivate agent <a href="https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>The agent's trigger, alert timeframe, policy scope and custom instructions</strong><br><small>Tenant</small><br><small class="controls__note">Settings can be edited only from the Microsoft Purview portal. Custom instructions (preview) are on a separate Agent Custom Instruction tab.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Agents › Explore agents › Go to agent › Edit agent › Agent configuration <a href="https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Security compute unit consumption by the agent</strong><br><small>Tenant</small><br><small class="controls__note">Links to the Security Copilot usage monitoring tool. Shows consumption; the page does not describe a cap here.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Agents › Explore agents › View agent › Edit agent › Usage monitoring <a href="https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Searching audit records of Security Copilot agent configuration changes</strong><br><small>Tenant</small><br><small class="controls__note">Run in Exchange Online PowerShell; needs Audit Logs or View-Only Audit Logs role. Covers agent and agent-trigger configuration changes when audit logging is enabled in Security Copilot and auditing is active in Purview.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog</code> <a href="https://learn.microsoft.com/powershell/module/exchange/search-unifiedauditlog" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No setting is documented that turns the reasoning trace or confidence score on or off, so the table lists the controls that exist for the agent as a whole. They do not govern the new fields specifically.

Per Learn, the agent can be managed, edited and deactivated only from the Microsoft Purview portal, even when deployed from Defender XDR. Editing needs the admin roles in the Learn page's permissions section. The audit row covers Security Copilot agent configuration changes; whether trace or score views are audited is not stated. If the Audit solution card is not displayed in the Microsoft Purview portal, select View all solutions, then Audit in the Core section.

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

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model and notes; Cost and licensing; rationale: cost / licensing: The cited DLP agent page requires both standard per-seat licensing and pay-as-you-go billing, supporting the mixed model. | Found: This agent requires both the standard per seat licensing model and the pay-as-you-go billing model. | Fix: Keep the attribution to the DLP agent page and the mixed model, but add to the licensing notes and Cost and licensing: 'Microsoft's Security Copilot inclusion page separately states that eligible Microsoft 365 E5 and E7 customers receive included SCU capacity covering core agentic scenarios in Microsoft Purview; usage of that included capacity is not an hourly charge.' Cite https://learn.microsoft.com/copilot/security/security-copilot-inclusion. Qualify the cost rationale's 'under pay-as-you-go billing' as 'with pay-as-you-go billing documented on the agent page and included capacity separately documented for eligible Microsoft 365 E5 and E7 customers'. | Source: https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started
-->
