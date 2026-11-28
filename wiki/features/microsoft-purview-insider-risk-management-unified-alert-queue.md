---
title: "Microsoft Purview Insider Risk Management: unified alert queue with Triage Agent categorisations"
slug: "microsoft-purview-insider-risk-management-unified-alert-queue"
roadmapId: 564621
topic: "governance"
products: ["Microsoft Purview"]
summary: "Insider Risk Management is merging its classic alert queue and Triage Agent dashboard into one Alerts list with agent categorisations. Analysts get a new view and Alert Spotlight goes; no admin switch is documented."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: "July CY2026"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "mixed"
  notes: "Insider Risk Management needs a supported Microsoft 365 subscription with licences assigned. Learn says the Triage Agent requires both per-seat licensing and pay-as-you-go billing, and consumes SCUs. Eligible Microsoft 365 E5 and E7 customers get included monthly SCU capacity. A charge specific to the unified queue is not yet published."
audiences: ["compliance","security","change-adoption"]
tags: ["insider-risk-management","purview","security-copilot","agents","ai","pay-as-you-go","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 564621"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=564621"
    kind: "roadmap"
  - title: "MC1430536: (Updated) Microsoft Purview: Insider Risk Management - Unified alert queue"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1430536"
    kind: "message-center"
  - title: "Investigate Microsoft Purview Insider Risk Management activities"
    url: "https://learn.microsoft.com/purview/insider-risk-management-activities"
    kind: "learn"
  - title: "Get started with the Microsoft Purview Triage Agent in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/copilot-in-purview-triage-irm-agent-get-started"
    kind: "learn"
  - title: "Manage username privacy in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-settings-privacy"
    kind: "learn"
  - title: "Assign permissions in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    kind: "learn"
  - title: "Get started with Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-configure"
    kind: "learn"
  - title: "Plan for Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-plan"
    kind: "learn"
  - title: "Add-RoleGroupMember"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
  - title: "Manage security compute unit usage in Security Copilot"
    url: "https://learn.microsoft.com/copilot/security/manage-usage"
    kind: "learn"
  - title: "Learn about Security Copilot for Microsoft 365 E5 and E7 customers"
    url: "https://learn.microsoft.com/copilot/security/security-copilot-inclusion"
    kind: "learn"
videos: []
related: ["microsoft-purview-insider-risk-management-ds-triage-agent-for-irm-available-in-defender","microsoft-purview-introducing-irm-alert-classification","microsoft-purview-data-loss-prevention-data-security-triage-agent-summaries-and-categoriza","microsoft-purview-insider-risk-management-policy-recommendation-panel-in-irm"]
controls:
  - governs: "Whether the unified alert queue is turned on or off"
    scope: "tenant"
    ui: null
    api: null
    note: "MC1430536 says no separate enablement control is described."
  - governs: "Whether the Triage Agent runs and categorises alerts"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Agents > Explore agents > View agent > ellipsis menu next to Edit agent > Deactivate agent"
      docs: "https://learn.microsoft.com/purview/copilot-in-purview-triage-irm-agent-get-started"
    api: null
    note: "Deactivate agent is in the ellipsis menu next to Edit agent. It stops triaging and does not remove the agent. Needs the Purview agent permissions Learn lists."
  - governs: "Whether usernames are shown as pseudonyms to analysts"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Insider Risk Management > Privacy > Show anonymized versions of usernames"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-settings-privacy"
    api: null
    note: "Learn says names in prioritized alerts are not anonymized on the Triage Agent dashboard when this is on; the unified queue is not described."
  - governs: "Who can access and investigate alerts"
    scope: "group"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and groups > Roles groups > Insider Risk Management > Edit > Choose users"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"Insider Risk Management Analysts\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Role group names are from the Learn permissions page; the cmdlet reference lists Security & Compliance for -Identity and -Member."
  - governs: "Security compute unit (SCU) use by the Triage Agent"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Agents > Explore agents > View agent > Edit agent > Usage monitoring"
      docs: "https://learn.microsoft.com/purview/copilot-in-purview-triage-irm-agent-get-started"
    api: null
    note: "Usage monitoring links to the Security Copilot usage monitoring tool, which shows use."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-21"
roadmapModified: "2026-05-27T23:15:50"
changes:
  - date: "2026-11-20"
    note: "First briefing: documents the unified Insider Risk Management alert queue, the retiring Spotlight and toggle, the conflicting retirement dates and the privacy and SCU controls."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 85 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected after verification: removed the unsupported no-charge and every-analyst statements, the SCU 'no limit' claim and one open question; added the E5/E7 included SCU capacity and the viewing roles as Learn states them."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 81 statements confirmed"
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 91 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 91
  confirmed: 91
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "2ac36f00b6a4ef09e67157a48822bcb2"
---

## What's changing

Microsoft is merging two Insider Risk Management alert views into one. The roadmap item describes a unified alert triage experience that shows Data Security Triage Agent categorisations beside the usual alert filters and columns in the standard Alerts queue. Learn documents it as the **Alerts (preview)** tab in the left navigation of the Insider Risk Management solution, and says it "combines the Triage Agent and classic alert dashboards into a single alerts list page".

From the alerts list, analysts can preview agent summaries, alert details and user details without opening each alert, filter on classic and agent attributes (including a new Agent Categorization column and a filter for agent-triaged alerts that need attention), and manage the Triage Agent. Two things go: Alert Spotlight is not available in the unified experience (Learn points analysts to the **Needs Attention** filter instead), and the toggle between the Triage Agent and classic dashboards is removed. Microsoft's notice MC1430536 says existing policies, privacy controls, pseudonymization settings, role-based permissions and audit capabilities remain unchanged, and that no separate enablement control is described.

The roadmap record shows the item as In development, with a preview target of July CY2026 and a General Availability target of October CY2026, for Worldwide, GCC, GCC High and DoD on the web. MC1430536 (published 17 July 2026, updated 10 September 2026) gives a public preview rollout from late June to mid-July 2026 and a global rollout from early to mid October 2026, and says the "Alerts (classic)" tab is deprecated on 1 October for commercial clouds and 31 October for Government clouds. The same notice, and Learn, also give 31 August 2026 as the date after which only the unified experience is supported. The dates disagree, and the October target in the record has passed while the record still says In development.

## Why it matters

This replaces the screen Insider Risk Management analysts triage from, so it reaches them whether or not an administrator chooses it. Microsoft's notice says no immediate action is required, but it lists runbooks, training and helpdesk material that mention Alert Spotlight, separate Triage Agent dashboards or the dashboard toggle as needing an update.

The wiki's view is that the real decision is about privacy and agent use, not navigation. The queue brings agent-triaged alerts into the standard alerts workflow, and Learn documents a privacy gap on the old agent dashboard. Settle how usernames appear and who owns the Triage Agent before analysts rely on the new view.

## Risk assessment

**Data exposure**
- Learn says that when **Show anonymized versions of usernames** is enabled, user names in prioritized alerts are not anonymized on the Triage Agent dashboard. The unified queue replaces that dashboard, and Learn does not say how names appear in its agent categorisation views, while MC1430536 says pseudonymization settings remain unchanged. Test with the setting on before analysts use the queue (see the Privacy row).
- Learn says the expanded user profile details are not visible when pseudo-anonymization is enabled.

**Security & identity**
- Learn says agents run in the security context of the last user who saved the agent configuration, that this authentication is good for 90 days, and that the agent then stops running until the configuration is saved again. The categorisations the queue shows depend on someone keeping that configuration current.
- For viewing triaged alert activity, Learn requires Insider Risk Management Analysis or Investigation, Purview Agent Analysis, and either Security Copilot Contributor or Purview Copilot Workspace Contributor. The listed Insider Risk Management role groups already include Purview Agent Analysis and Purview Copilot Workspace Contributor. Check analyst accounts against them.

**Autonomy & actions**
- The agent categorises alerts as Needs attention or Less urgent, and analysts can act on alerts from the list. Analysts who filter only on Needs Attention may not open alerts the agent put elsewhere, so keep the status and severity filters in the triage procedure.

**Change & support**
- Alert Spotlight and the dashboard toggle are removed, and the classic tab is being retired on dates that differ between sources. Expect helpdesk questions from analysts who cannot find the old views.

## Cost and licensing

Insider Risk Management itself needs a supported Microsoft 365 subscription with licences assigned (Learn, Get started with Insider Risk Management); Learn's planning page says Microsoft offers it as part of a wide selection of Microsoft 365 licensing subscriptions. A charge specific to the unified queue is not yet published at the time of writing (November 2026).

The agent whose output the queue shows is metered. Learn says the Triage Agent in Insider Risk Management requires both the standard per-seat licensing model and the pay-as-you-go billing model, and that Microsoft Purview triage agents consume security compute units (SCUs) as they perform tasks, with the number depending on the number and type of alerts processed. SCUs must be provisioned for the agent to work, and use is tracked in the Security Copilot usage monitoring tool (see the SCU row). Security Copilot inclusion documentation also says eligible Microsoft 365 E5 and E7 customers receive included monthly SCU capacity shared across all users and experiences; this capacity is not billed hourly. Indirect cost is analyst training and runbook updates.

## Scope

Microsoft's notice names Insider Risk Management administrators, analysts and investigators, and the compliance and security teams that triage insider risk alerts. The roadmap record lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, and the web platform.

Per Learn, Alerts (preview) sits in the left navigation of the Insider Risk Management solution in the Microsoft Purview portal. Insider Risk Management, Insider Risk Management Analysts and Insider Risk Management Investigators can access and investigate alerts, and Learn's permissions table marks the Insider Risk Management Admins role group No for that action. Agent categorisations depend on the Triage Agent: Learn says the tenant must be onboarded to Microsoft Security Copilot and Microsoft 365 data sharing must be enabled in Security Copilot. Rollout is by Microsoft, and the notice says no immediate action is required.

## Governance guidance

### Before rollout
- Confirm which role groups hold your analysts and investigators (Insider Risk Management, Analysts or Investigators) and whether they meet the roles Learn lists for viewing triaged alert activity.
- Decide who deploys, owns and re-saves the Triage Agent, and who watches SCU consumption.
- Check the **Privacy** setting and open Alerts (preview) with a test alert to see how usernames display while anonymisation is on.
- Update runbooks and training that mention Alert Spotlight, separate Triage Agent dashboards or the dashboard toggle.

### At rollout
- Brief analysts on the Agent Categorization column, agent summaries and the Needs Attention filter.
- Keep the classic tab for side-by-side comparison while it is still available, and confirm its retirement date for your cloud.
- Confirm analysts see the Alerts (preview) tab after the rollout window MC1430536 gives.

### After rollout
- Review SCU use for the agent in usage monitoring and compare it with provisioned SCUs.
- Re-check Message center and the Learn page for the final classic-tab retirement date.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the unified alert queue is turned on or off</strong><br><small>Tenant</small><br><small class="controls__note">MC1430536 says no separate enablement control is described.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the Triage Agent runs and categorises alerts</strong><br><small>Tenant</small><br><small class="controls__note">Deactivate agent is in the ellipsis menu next to Edit agent. It stops triaging and does not remove the agent. Needs the Purview agent permissions Learn lists.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Agents › Explore agents › View agent › ellipsis menu next to Edit agent › Deactivate agent <a href="https://learn.microsoft.com/purview/copilot-in-purview-triage-irm-agent-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether usernames are shown as pseudonyms to analysts</strong><br><small>Tenant</small><br><small class="controls__note">Learn says names in prioritized alerts are not anonymized on the Triage Agent dashboard when this is on; the unified queue is not described.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Insider Risk Management › Privacy › Show anonymized versions of usernames <a href="https://learn.microsoft.com/purview/insider-risk-management-settings-privacy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can access and investigate alerts</strong><br><small>Group</small><br><small class="controls__note">Role group names are from the Learn permissions page; the cmdlet reference lists Security &amp; Compliance for -Identity and -Member.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and groups › Roles groups › Insider Risk Management › Edit › Choose users <a href="https://learn.microsoft.com/purview/insider-risk-management-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;Insider Risk Management Analysts&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Security compute unit (SCU) use by the Triage Agent</strong><br><small>Tenant</small><br><small class="controls__note">Usage monitoring links to the Security Copilot usage monitoring tool, which shows use.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Agents › Explore agents › View agent › Edit agent › Usage monitoring <a href="https://learn.microsoft.com/purview/copilot-in-purview-triage-irm-agent-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No setting for the unified queue itself is documented, so the controls act on what it displays and who can see it. Deactivating the agent stops triaging but does not remove it. The Privacy setting applies to all policies. Members of Microsoft Entra Global Administrator or Compliance Administrator, or the Purview Organization Management or Compliance Administrator role groups, can assign users to Insider Risk Management role groups.

## Open questions

- Does the unified queue show real usernames in agent categorisation views when **Show anonymized versions of usernames** is on, as the Triage Agent dashboard did? Watch the username privacy page on Microsoft Learn.
- Which date retires the classic experience: 31 August 2026 (Learn and the notice's transition text) or 1 and 31 October 2026 (the notice's tab deprecation)? Watch MC1430536 and the Insider Risk Management activities page.
- When will the roadmap item move from In development, given the October CY2026 target has passed?

<!-- rationale
risk: Medium. Learn says usernames in prioritised alerts are not anonymised on the Triage Agent dashboard when anonymisation is on, and it does not say how the unified queue behaves.
cost: Variable. No separate charge for the queue is published, but the Triage Agent output it shows consumes security compute units (SCUs) and needs per-seat licensing plus pay-as-you-go billing.
impact: Medium. Insider Risk Management analysts and investigators get a new alerts page and lose Alert Spotlight and the dashboard toggle; admins decide who sees agent output.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Security & identity / behaviour: The agent runs in the security context of the last user who saved its configuration. | Found: Agents run in the security context of the last user that saved the agent configuration. | Fix: Keep the statement and add: 'The separate preview overview instead describes the identity as the administrator who turned on the agent.' Cite https://learn.microsoft.com/purview/copilot-in-purview-agents, whose Identity row says 'Runs as the administrator who turned on the agent.' | Source: https://learn.microsoft.com/purview/copilot-in-purview-triage-irm-agent-get-started
-->
