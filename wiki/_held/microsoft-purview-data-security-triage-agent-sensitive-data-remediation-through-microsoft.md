---
title: "Microsoft Purview: Data Security Triage Agent remediation reminders in Teams"
slug: "microsoft-purview-data-security-triage-agent-sensitive-data-remediation-through-microsoft"
roadmapId: 564615
topic: "governance"
products: ["Microsoft Purview"]
summary: "The DLP Triage Agent can message the last editor of SharePoint or OneDrive files flagged Needs attention through Teams, asking them to remove sensitive data. Learn documents it as preview; admins opt in and pay in SCUs."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2027"
previewDate: "June CY2026"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn says the agent requires both the standard per seat licensing model and the pay-as-you-go billing model, and that the organisation must be licensed for Microsoft Data Loss Prevention (DLP). The agent consumes SCUs, which Security Copilot bills as provisioned and overage capacity."
audiences: ["security","compliance","m365-admin","finops"]
tags: ["purview","dlp","security-copilot","teams","sharepoint","onedrive","dspm","agents","agent-identity","usage-based-billing"]
sources:
  - title: "Microsoft 365 Roadmap 564615"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=564615"
    kind: "roadmap"
  - title: "Get started with the Microsoft Purview Triage Agent in Data Loss Prevention"
    url: "https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started"
    kind: "learn"
  - title: "Configure Microsoft Teams for the Data Security Triage Agent remediation messages"
    url: "https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-teams-config"
    kind: "learn"
  - title: "Microsoft Security Copilot Security Compute Units and capacity"
    url: "https://learn.microsoft.com/copilot/security/security-compute-units-capacity"
    kind: "learn"
videos: []
related: ["agent-identity","microsoft-purview-data-loss-prevention-new-guided-experience-to-diagnose-and-resolve-dlp-i","microsoft-purview-dspm-copilot-readiness-and-data-explorer"]
controls:
  - governs: "Whether the agent sends remediation reminders in Teams, and the reminder duration"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Agents > Explore agents > Go to agent > Edit agent > Agent configuration"
      docs: "https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started"
    api: null
    note: "Preview. Agent configuration holds the remediation reminders and reminder duration settings. Settings can only be edited from the Microsoft Purview portal."
  - governs: "Which DLP policies are enabled for remediation messages"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Agents > Explore agents > Go to agent > Edit agent > Agent configuration > Set agent scope > Edit > Select policies > Remediation"
      docs: "https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-teams-config"
    api: null
    note: "Preview. Policies enabled for remediation are always a subset of policies enabled for triage."
  - governs: "Which users and groups the Data Security Triage Agent Teams app is available to"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Data Security Triage Agent > Users and groups > Edit availability"
      docs: "https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-teams-config"
    api: null
    note: "Requires Teams admin permissions. Blocking is a hard block; set availability to No one to stop all remediation messages immediately."
  - governs: "Whether Microsoft-published apps can be used in the organisation (needed for remediation messages)"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Actions > Org-wide app settings > Microsoft apps"
      docs: "https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-teams-config"
    api: null
    note: "Requires Teams admin permissions. The toggle must be On for the agent to function."
  - governs: "Whether the agent keeps triaging alerts"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Agents > Explore agents > Go to agent > ellipses (three dots) > Deactivate agent"
      docs: "https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started"
    api: null
    note: "Deactivation can only be done from the Microsoft Purview portal, even if the agent was deployed from Defender XDR. It does not remove the agent."
  - governs: "Monitoring of the agent's SCU consumption"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Agents > Explore agents > View agent > Edit agent > Usage monitoring"
      docs: "https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started"
    api: null
    note: "Reports consumption through the Security Copilot usage monitoring tool; it is a view, not a spending limit."
confidence: "high"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-11-20T01:24:53"
changes:
  - date: "2026-11-20"
    note: "First briefing for this item: documents the Teams remediation reminders, their Teams prerequisites, SCU costs and the controls Learn gives."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 73 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-20"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 73
  confirmed: 71
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "53aee3f4e74022bace5ca50c669dd35e"
---

## What's changing

The Data Security Triage Agent in Microsoft Purview Data Loss Prevention (DLP) gains a remediation function. For SharePoint and OneDrive alerts that the agent triages as Needs attention, it sends a Microsoft Teams chat to the user who last modified the file, asking them to remove the sensitive information found in it.

Microsoft Learn documents this as **Remediation reminders in Microsoft Teams** (Preview). Reminders are sent once daily to the last modifier of the file, combining up to 10 files if several need remediation. Each message includes the file name and a description of what sensitive information requires attention. Once the user remediates a file, it drops out of the next day's reminder; if no files remain, no reminder is sent. Enabling the setting also enables the bot in Microsoft Teams for the tenant.

Progress is shown in two places in the DLP solution: on the Triage Agent alert queue (fully remediated, In progress, or Error when the Teams message could not be sent) and in each alert's Related assets section, which shows each file's remediation status. The roadmap item also says admins get visibility through the Data Security Posture Management dashboard; the Learn page read does not describe that view.

The roadmap record gives status In development, a preview date of June CY2026 and a target of December CY2027, with release phases General Availability and Preview, for Worldwide (Standard Multi-Tenant) on the web. Those dates are Microsoft's targets. Learn already documents the remediation reminders as a preview feature (at the time of writing, November 2026), and Learn's documented behaviour is the preview's, not necessarily the final design.

## Why it matters

This moves part of DLP clean-up from Purview admins to the people who last touched the files. That can shorten the backlog of Needs attention alerts, but it also means end users start receiving messages from a Microsoft-published Teams app about sensitive content in their files, so the security team should brief them before reminders are switched on.

The feature is opt-in: in the one-click setup the remediation reminder is turned off, and a Teams admin must also allow the app before any message can be delivered. If nobody acts, no reminders are sent. The cost question is the SCU consumption of the triage agent itself, which is metered whether or not remediation is enabled.

## Risk assessment

**Data exposure**
- Each Teams message includes the file name and a description of what sensitive information requires attention (Learn). Recipients are the last modifiers of the files, who may not be the data owners; scope remediation to policies whose alerts you are content to surface to those users.
- Policies enabled for remediation are always a subset of the policies enabled for triage, so the policy scope list is the main way to limit which files generate reminders.

**Security & identity**
- Learn says the agent is assigned an Agent Identity, which allows it to access data and take actions, or can be set up with the identity of the user who sets it up. Review which identity you chose when deploying (see [Agent identity](/concepts/agent-identity/)).
- Microsoft Purview automatically installs the Teams app for a specific user at the moment a remediation message is sent. The app only needs to be available, not blocked, in your organisation.

**Autonomy & actions**
- The agent decides which alerts are Needs attention and then contacts users on its own schedule, once daily. The user, not the agent, removes the sensitive data; the page describes the agent as asking users to do so.
- The agent triages only alerts from DLP policies in active mode, not simulation mode, so remediation reminders arise only from policies already enforcing.

**Change & support**
- Two Teams admin centre settings must both be correct for delivery. Learn calls out a common misconfiguration: org-wide Microsoft apps on but the Data Security Triage Agent app individually blocked. Expect help-desk questions from users who receive an unexpected message.
- A Purview admin who configures the agent may not have Teams admin permissions, so plan for two teams to coordinate.

## Cost and licensing

Learn's setup page says the agent requires both the standard per seat licensing model and the pay-as-you-go billing model, and that your organisation must be licensed for Microsoft Data Loss Prevention (DLP) to use the DLP triage agent.

The meter is the security compute unit (SCU). The agent consumes SCUs as it performs its tasks, you must have SCUs provisioned for it to work, and the number consumed depends on the number and type of alerts processed. Learn states that the remediation capability does not cost anything extra and that the only costs are the SCUs needed to triage the DLP alert first. The Security Copilot capacity page says provisioned capacity is billed by the hour and overage capacity is billed on usage, and that overage units can be set as unlimited or a maximum amount. Track consumption under Usage monitoring in the agent's settings (controls table).

Indirect costs are Purview admin time to configure the agent and scope, Teams admin time for the two Teams settings, and user communication. Security Copilot's pricing pages carry the SCU rates.

## Scope

Remediation reminders apply to SharePoint and OneDrive alerts triaged as Needs attention; the triage agent as a whole covers alerts from Exchange, Devices, SharePoint, OneDrive and Teams. The recipient is the user who last modified the file. The roadmap lists Worldwide (Standard Multi-Tenant) and the web platform only; the record does not list US Government clouds.

Prerequisites on the Learn pages: the tenant must be onboarded to Microsoft Security Copilot, Microsoft 365 data sharing must be enabled in Security Copilot, the Microsoft Purview plug-in must be enabled in Security Copilot, and the Teams Admin Center must be configured to allow the Data Security Triage Agent app to send messages. Learn says there can be only one instance of each agent in a tenant. The agent can be deployed from either the Microsoft Purview or Defender XDR portal but is managed, edited and deactivated only from the Microsoft Purview portal.

## Governance guidance

### Before rollout
- Confirm Security Copilot onboarding, Microsoft 365 data sharing and the Microsoft Purview plug-in are in place, and that SCUs are provisioned for the agent (Purview admin).
- Decide which DLP policies should drive remediation and list them; only active-mode policies are triaged.
- Ask a Teams admin to review the two Teams settings, org-wide Microsoft apps and the app's availability, and decide whether specific users or groups, such as executives, should be excluded.
- Brief the users who will receive reminders so a Teams message about sensitive data is not a surprise.

### At rollout
- Enable Remediation reminders in Microsoft Teams in the agent's configuration and set the reminder duration.
- Turn on the Remediation toggle only for the chosen policies in the policy scope panel.
- Allow the Data Security Triage Agent app in the Teams admin centre, and restrict availability to specific users or groups if needed.

### After rollout
- Watch the remediation status on the Triage Agent alert queue and in each alert's Related assets for In progress and Error states.
- Check SCU consumption in Usage monitoring and compare it with your provisioned and overage capacity.
- Deactivate the agent from the Microsoft Purview portal if you need to stop triage; set the app's availability to No one in the Teams admin centre to stop all remediation messages immediately.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the agent sends remediation reminders in Teams, and the reminder duration</strong><br><small>Tenant</small><br><small class="controls__note">Preview. Agent configuration holds the remediation reminders and reminder duration settings. Settings can only be edited from the Microsoft Purview portal.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Agents › Explore agents › Go to agent › Edit agent › Agent configuration <a href="https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which DLP policies are enabled for remediation messages</strong><br><small>Tenant</small><br><small class="controls__note">Preview. Policies enabled for remediation are always a subset of policies enabled for triage.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Agents › Explore agents › Go to agent › Edit agent › Agent configuration › Set agent scope › Edit › Select policies › Remediation <a href="https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-teams-config" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users and groups the Data Security Triage Agent Teams app is available to</strong><br><small>User</small><br><small class="controls__note">Requires Teams admin permissions. Blocking is a hard block; set availability to No one to stop all remediation messages immediately.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Data Security Triage Agent › Users and groups › Edit availability <a href="https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-teams-config" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Microsoft-published apps can be used in the organisation (needed for remediation messages)</strong><br><small>Tenant</small><br><small class="controls__note">Requires Teams admin permissions. The toggle must be On for the agent to function.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Actions › Org-wide app settings › Microsoft apps <a href="https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-teams-config" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the agent keeps triaging alerts</strong><br><small>Tenant</small><br><small class="controls__note">Deactivation can only be done from the Microsoft Purview portal, even if the agent was deployed from Defender XDR. It does not remove the agent.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Agents › Explore agents › Go to agent › ellipses (three dots) › Deactivate agent <a href="https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Monitoring of the agent's SCU consumption</strong><br><small>Tenant</small><br><small class="controls__note">Reports consumption through the Security Copilot usage monitoring tool; it is a view, not a spending limit.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Agents › Explore agents › View agent › Edit agent › Usage monitoring <a href="https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no PowerShell, Microsoft Graph or REST operation for the agent's settings or for the two Teams settings at the time of writing (November 2026), so every row shows the API side as not yet documented.

The policy scope is the routine control over which files trigger reminders. Blocking the app in the Teams admin centre is a hard block: the page says a generated message is not sent to users for whom the app is blocked. Learn describes Teams blocking as a further safeguard and policy scoping as the routine control. Configuring Teams needs Teams admin permissions, which a Purview admin may not hold.

## Open questions

- When will remediation reminders leave preview, and will the December CY2027 target on the roadmap item change what Learn documents? Watch the roadmap item and the Learn page.
- Will the Data Security Posture Management dashboard show remediation progress, as the roadmap item describes? Watch the Learn page and Message center.
- Will remediation have its own licence or SCU rate at general availability, or stay within the SCUs for triage?
- Will alerts from policies other than SharePoint and OneDrive ones gain reminders? Watch the Learn page.

<!-- rationale
risk: Medium. Once enabled, the agent sends Teams messages that name files and describe the sensitive information found to the user who last modified each file; reminders are off in the one-click default setup.
cost: Variable. The agent consumes Security Copilot security compute units (SCUs) billed pay-as-you-go; Learn says the remediation capability costs nothing extra beyond the SCUs needed to triage the alert.
impact: Medium. Purview and Teams admins configure it, and end users who last modified files in policy scope receive the Teams reminders; it is not aimed at all users.
-->

<!-- verifier-findings (2026-11-20, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[2].api; Governance controls: automation absence / absence: Microsoft has not documented automation for the Teams app's user and group availability. | Found: This cmdlet allows administrators to modify app state, availability and installation status by adding or removing users and groups or changing assignment type or installation status. | Fix: Set controls[2].api to kind 'powershell', call 'Update-M365TeamsApp -Id <app-id> -AppAssignmentType Everyone', docs 'https://learn.microsoft.com/powershell/module/teams/update-m365teamsapp?view=teams-ps', and update the rendered API cell. In the note, identify <app-id> as the Data Security Triage Agent's Teams application ID and explain that Everyone makes the app available to everyone. Replace the broad automation-absence paragraph with: 'No automation operation was found for remediation reminders, remediation policy scope, agent deactivation, SCU usage monitoring or the org-wide Microsoft apps toggle at the time of writing (November 2026). Teams app availability can be changed with Update-M365TeamsApp.' | Source: https://learn.microsoft.com/powershell/module/teams/update-m365teamsapp?view=teams-ps
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model, licensing.notes; Cost and licensing; rationale: cost / licensing: The setup page specifies both per-seat licensing and pay-as-you-go billing, supporting the mixed licensing model. | Found: This agent requires both the standard per seat licensing model and the pay-as-you-go billing model. | Fix: Retain the setup page's attribution and mixed model, but append to licensing notes and Cost and licensing: 'The Security Copilot capacity page also documents automatically created inclusion capacity when Security Copilot inclusion is enabled through Microsoft 365 E5 and E7.' Cite https://learn.microsoft.com/copilot/security/security-compute-units-capacity. This reports the differing capacity treatment rather than presenting purchased capacity as the sole model. | Source: https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started
- [supported, minor] controls[2].note; Governance guidance: After rollout / behaviour: The feature's Teams configuration page says setting availability to No one immediately stops all remediation messages. | Found: if you need to immediately stop all remediation messages, set availability to No one. | Fix: Keep the feature-specific guidance but append: 'General Teams app-centric management guidance says UI or PowerShell availability changes can take up to 24 hours to apply to all users.' Cite https://learn.microsoft.com/microsoftteams/app-centric-management#migrate-to-app-centric-management, which states 'UI or PowerShell changes take up to 24 hours to apply to all users'. Report the documentation discrepancy rather than promising an unqualified immediate stop. | Source: https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-teams-config
- [supported, minor] controls[0].ui; Governance controls: first row / admin-path: The Purview route to reminder configuration is Agents > Explore agents > Go to agent > Edit agent > Agent configuration. | Found: Select Go to agent for agent you want to edit. ... Select Edit agent. ... Select Agent configuration for editing and configuring settings like Trigger, alert timeframe, remediation reminders, reminder duration, and policy scope. | Fix: The path reaches the correct configuration page but stops before the switch. Set controls[0].ui.path and its rendered counterpart to 'Agents > Explore agents > Go to agent > Edit agent > Agent configuration > Remediation reminders in Microsoft Teams'; retain the note about Reminder duration. | Source: https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started
- [contradicted, minor] Governance guidance: Before rollout, first bullet; Governance controls / consistency: The checklist asks readers to verify infrastructure configuration controls that have no corresponding controls-table rows. | Found: Confirm Security Copilot onboarding, Microsoft 365 data sharing and the Microsoft Purview plug-in are in place, and that SCUs are provisioned for the agent ... Monitoring of the agent's SCU consumption | Fix: Remove the first Before rollout checklist bullet; the infrastructure prerequisites remain documented in Scope. Do not add controls rows as part of this correction.
-->
