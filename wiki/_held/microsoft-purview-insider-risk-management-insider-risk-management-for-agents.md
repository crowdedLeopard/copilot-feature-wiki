---
title: "Microsoft Purview Insider Risk Management: monitor agents (GCC, GCC High and DoD)"
slug: "microsoft-purview-insider-risk-management-insider-risk-management-for-agents"
roadmapId: 545063
topic: "governance"
products: ["Microsoft Purview"]
summary: "Insider Risk Management extends to AI agents, with agent-specific indicators and a risk score. This is the GCC, GCC High and DoD roadmap item. Security and compliance teams should review who sees the alerts; no action is stated as required."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn says Insider Risk Management needs a supported subscription, and that the feature uses pay-as-you-go billing or per-user licensing for Microsoft Purview capabilities or both. A rate or licence specific to agent monitoring is not yet published."
audiences: ["security","compliance","m365-admin"]
tags: ["purview","insider-risk-management","agents","agent-governance","copilot-studio","microsoft-foundry","auditing","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 545063"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=545063"
    kind: "roadmap"
  - title: "Monitoring agents in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-monitoring-agents"
    kind: "learn"
  - title: "Learn about Insider Risk Management policy templates"
    url: "https://learn.microsoft.com/purview/insider-risk-management-policy-templates"
    kind: "learn"
  - title: "Create and manage Insider Risk Management policies"
    url: "https://learn.microsoft.com/purview/insider-risk-management-policies"
    kind: "learn"
  - title: "Get started with Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-configure"
    kind: "learn"
  - title: "Turn auditing on or off"
    url: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    kind: "learn"
  - title: "Manage agent registry in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview"
    kind: "learn"
videos: []
related: ["auditing","microsoft-purview-insider-risk-management-ds-triage-agent-for-irm-available-in-defender","microsoft-purview-insider-risk-management-policy-recommendation-panel-in-irm","microsoft-purview-introducing-irm-alert-classification"]
controls:
  - governs: "Agent policies, including the default Risky Agents policy and any custom agent policy"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Insider Risk Management > Policies > Agent policy"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-policies"
    api: null
    note: "Policy dashboard separates User policy and Agent policy; Agent policy covers Copilot Studio and Microsoft Foundry agents."
  - governs: "Whether the unified audit log records activity that Insider Risk Management policies read"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Start recording user and admin activity"
      docs: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    api:
      kind: "powershell"
      call: "Set-AdminAuditLogConfig -UnifiedAuditLogIngestionEnabled $true"
      docs: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    note: "Prerequisite, not agent-specific. Needs the Audit Logs role in Exchange Online; run in Exchange Online PowerShell."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-11-04T00:02:09"
changes:
  - date: "2026-11-20"
    note: "New briefing for the GCC, GCC High and DoD roadmap item on Insider Risk Management for agents."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 59 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-20"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 59
  confirmed: 55
  unconfirmed: 0
  contradicted: 4
  attempts: 1
  hash: "465c1f6cf88de39346cfec036118133c"
---

## What's changing

Microsoft Purview Insider Risk Management is being extended from users to AI agents. The roadmap item describes agent-specific indicators and an insider risk score built on agentic activity, and says agents can access and manipulate enterprise data and act in ways that resemble human insiders. Microsoft lists the feature under two roadmap items; this page covers 545063, which lists GCC, GCC High and DoD. The other item, 516032, lists Worldwide (Standard Multi-Tenant).

Microsoft Learn documents the capability in "Monitoring agents in Insider Risk Management". It describes a Risky Agents policy that detects risky prompts, agents generating sensitive responses, agents accessing sensitive data and accessing risky websites. The policy templates page adds agents sharing SharePoint files with people outside the organisation and activity above the agent's baseline for the day. Supported agents are Copilot Studio agents, Microsoft Foundry agents and agents built using the P4AI SDK. Alerts go through the standard Insider Risk Management alert workflow, and agent risk calculated in Insider Risk Management is shared with Data Security Posture Management for AI and the Microsoft 365 admin center.

The record gives status Launched, release phase General Availability, platform Web and target date October CY2026. Learn still labels the Risky Agents policy "preview" at the time of writing (November 2026). The roadmap and Learn therefore differ on maturity, and this page does not pick a side. The Learn pages do not describe the agent risk score itself or name a cloud.

## Why it matters

Agents that read SharePoint content, answer prompts and browse the web now produce signals that your insider risk analysts can be asked to triage. Learn says the Risky Agents policy is available by default to all organisations with supported licences and is automatically present and ready to generate alerts. It does not state how this behaves in GCC, GCC High or DoD, so treat the arrival default as not stated for these clouds and check your own tenant's Policies page.

The practical decision is who will see and act on agent alerts, and whether the default policy fits your agents. Alert visibility has gaps: Learn says administrative units are not supported for agent alerts, so a scoped analyst cannot see them. Plan the analyst roles before agent alerts start to arrive.

## Risk assessment

**Data exposure**
- The Risky Agents policy looks at agent prompts and responses and at agents accessing sensitive or priority SharePoint files. Analysts with Insider Risk Management alert access can review that activity, so keep that access to named role groups.
- For guest users interacting with agents, Learn says the full prompt and response content is not available for investigation; only indicators of sensitive information detected are shown.

**Security & identity**
- Agent risk calculated in Insider Risk Management is shared with Data Security Posture Management for AI and the Microsoft 365 admin center, so more teams see the result than the Insider Risk Management role groups alone.
- In the agent registry, Learn says a Global Administrator alone is insufficient to open Insider Risk Management alerts from the risk details; the IRM Analyst or IRM Investigator role is needed.

**Autonomy & actions**
- The policy detects and alerts, and Learn's agent monitoring page describes investigation of alerts rather than any block or remediation of the agent. Plan the containment step with the owner of the Copilot Studio or Microsoft Foundry agent.

**Change & support**
- Admin units are not supported for agent alerts, so scoped analysts cannot see them; unrestricted administrators can.
- New alert volume lands on analysts. Learn offers a custom policy if the default does not meet your requirements, which is where tuning happens.

## Cost and licensing

Learn's Insider Risk Management setup page says administrators need to verify their organisation has a supported subscription and assign the appropriate licences to users; it points to a subscription requirements page and suggests Microsoft 365 Enterprise E5 for organisations that want to try the solution. The agent monitoring page points to that same section for licensing and says the policy is available by default to organisations with supported licences.

The setup page also says some Insider Risk Management indicators are only available with pay-as-you-go billing, and that the feature uses pay-as-you-go billing or per-user licensing for Microsoft Purview capabilities or both, with the Usage center in the Microsoft Purview portal showing usage. A pay-as-you-go meter or licence specific to agent monitoring is not yet published, so budget analyst time and confirm in the Usage center whether any meter accrues. Roadmap record: no licence information.

## Scope

- **Clouds:** the roadmap item lists GCC, GCC High and DoD. Learn's Risky Agents page names no cloud, so cloud availability beyond the record is not stated there.
- **Platform and phase:** Web; General Availability; status Launched; target date October CY2026.
- **Agents:** Copilot Studio agents, Microsoft Foundry agents and agents built using the P4AI SDK.
- **Prerequisites:** complete the steps in Get started with Insider Risk Management, including a supported subscription. Insider Risk Management uses the Microsoft 365 audit log, which Learn says is on by default for Microsoft 365 organisations.
- **Roles:** to access and configure recommended actions, users must be in the Insider Risk Management or Insider Risk Management Admins role groups.

## Governance guidance

### Before rollout
- Confirm which licence your organisation holds for Insider Risk Management, using the subscription requirements page that Learn links, and which of its indicators need pay-as-you-go billing.
- Check that auditing is on, because Insider Risk Management policies read the audit log (see the audit row in the controls table).
- Decide which role groups will investigate agent alerts, and keep scoped analysts away from this work because admin units do not support agent alerts.

### At rollout
- Open Insider Risk Management > Policies and switch to Agent policy to see whether the Risky Agents policy is present in your tenant.
- Review the policy's detections against your Copilot Studio and Microsoft Foundry agents, and create a custom policy if the default does not fit.

### After rollout
- Triage agent alerts through the standard alert workflow and record which agent owners you contact.
- Check the Usage center in the Microsoft Purview portal for any pay-as-you-go usage after agent alerts begin.
- Watch the Learn page for the Risky Agents policy for the preview label to change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Agent policies, including the default Risky Agents policy and any custom agent policy</strong><br><small>Tenant</small><br><small class="controls__note">Policy dashboard separates User policy and Agent policy; Agent policy covers Copilot Studio and Microsoft Foundry agents.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Insider Risk Management › Policies › Agent policy <a href="https://learn.microsoft.com/purview/insider-risk-management-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the unified audit log records activity that Insider Risk Management policies read</strong><br><small>Tenant</small><br><small class="controls__note">Prerequisite, not agent-specific. Needs the Audit Logs role in Exchange Online; run in Exchange Online PowerShell.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Start recording user and admin activity <a href="https://learn.microsoft.com/purview/audit-log-enable-disable" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AdminAuditLogConfig -UnifiedAuditLogIngestionEnabled $true</code> <a href="https://learn.microsoft.com/purview/audit-log-enable-disable" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The Risky Agents policy and custom agent policies sit on the same Policies dashboard as user policies, in a separate Agent policy view. Learn documents no setting or API for turning the default policy off or scoping it at the time of writing (November 2026), and documents no API for managing Insider Risk Management policies.

The Insider Risk Management role groups decide who can configure policies and who can investigate alerts; they are managed on the Role groups page in the Microsoft Purview portal. Auditing is a prerequisite: if the unified audit log is off, Insider Risk Management has nothing to read. Turning auditing on or off needs the Audit Logs role in Exchange Online.

## Open questions

- Does the Risky Agents policy arrive switched on in GCC, GCC High and DoD, and when does Learn drop the preview label for it? Watch the Monitoring agents in Insider Risk Management page.
- How is the insider risk score for an agent calculated and shown, given the roadmap says it is built for agents? Learn's agent pages do not describe it at the time of writing.
- Does monitoring agents add a pay-as-you-go meter or licence beyond the Insider Risk Management subscription? Watch the Purview billing and licensing pages.
- Can the default Risky Agents policy be turned off or scoped to specific agents, and is there an API for it?

<!-- rationale
risk: Medium. Agent prompts, responses and file access become inputs to Insider Risk Management alerts, and Learn says the Risky Agents policy is present by default; role groups decide who can investigate them.
cost: Low. The only cost Microsoft's pages show is admin and analyst time plus the Insider Risk Management subscription; no meter specific to agent monitoring is documented, though some Insider Risk Management indicators need pay-as-you-go billing.
impact: Low. Insider risk analysts, compliance administrators and the owners of monitored agents notice it; ordinary users and agent users see no change that the sources describe.
-->

<!-- verifier-findings (2026-11-20, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: defaultState; Why it matters; Open questions / default: The arrival default is unknown for GCC, GCC High and DoD because Learn does not name these clouds. | Found: The Risky Agents (preview) policy is available by default to all organizations with supported licenses. When the service is set up, this policy is automatically present and ready to generate alerts based on observed agent activity. | Fix: Set defaultState to 'on'. Replace the cloud-specific default caveat with: 'Learn says the Risky Agents preview policy is automatically present and ready to generate alerts when Insider Risk Management is set up in an organisation with supported licences; it gives no separate cloud-specific rollout details.' Replace the first open question with: 'When does Learn drop the preview label for the Risky Agents policy?' Keep the existing roadmap-versus-Learn maturity distinction. | Source: https://learn.microsoft.com/purview/insider-risk-management-monitoring-agents
- [contradicted, blocker] Risk assessment: Change & support / role: Unrestricted administrators can see agent alerts. | Found: Access & investigate alerts: Insider Risk Management Yes; Insider Risk Management Admins No; Insider Risk Management Analysts Yes; Insider Risk Management Investigators Yes; Insider Risk Management Auditors No; Insider Risk Management Approvers No. | Fix: Replace 'unrestricted administrators can' with 'unscoped users with alert-investigation permissions can'. The sentence should read: 'Admin units are not supported for agent alerts, so scoped analysts cannot see them; unscoped users with alert-investigation permissions can.' Cite https://learn.microsoft.com/purview/insider-risk-management-permissions. | Source: https://learn.microsoft.com/purview/insider-risk-management-permissions
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing / record: Microsoft also lists the capability as roadmap item 516032 for Worldwide (Standard Multi-Tenant). | Found: "id": 516032; "title": "Microsoft Purview: Insider Risk Management-Insider risk management for agents"; "clouds": ["Worldwide (Standard Multi-Tenant)"] | Fix: Cite https://www.microsoft.com/microsoft-365/roadmap?id=516032 for the sentence about the other roadmap item.
- [supported, minor] Scope: Prerequisites / default: Auditing is on by default for Microsoft 365 organisations. | Found: Auditing is enabled for Microsoft 365 organizations by default. | Fix: The cited audit page qualifies the setup page's general statement. Add: 'The auditing reference notes exceptions for Microsoft 365 Business Basic, Business Standard and Business Premium and unmanaged tenants using free enterprise trials.' This qualification is stated at https://learn.microsoft.com/purview/audit-log-enable-disable. | Source: https://learn.microsoft.com/purview/insider-risk-management-configure
- [supported, minor] Governance controls; rationale: risk / role: Insider Risk Management role groups determine access to configuration and alert investigation. | Found: Configure policies and settings: Insider Risk Management Yes; Insider Risk Management Admins Yes. Access & investigate alerts: Insider Risk Management Yes; Insider Risk Management Analysts Yes; Insider Risk Management Investigators Yes. | Fix: Add https://learn.microsoft.com/purview/insider-risk-management-permissions to sources for the division of policy configuration and alert-investigation permissions. | Source: https://learn.microsoft.com/purview/insider-risk-management-permissions
- [contradicted, minor] Governance guidance; Governance controls / consistency: Every control the governance checklist asks readers to check or decide appears in the controls table. | Found: Checklist: 'Decide which role groups will investigate agent alerts'; 'Check the Usage center ... for any pay-as-you-go usage'. Table rows cover only agent policies and unified audit logging. The prose also reports default-policy disabling and scoping gaps without a corresponding absence row. | Fix: The Before rollout role-group decision and After rollout Usage center check have no matching controls-table row. The disabling/scoping absence in Governance controls also has no matching absence row. This finding identifies the uncovered steps; it does not request additional rows.
- [contradicted, minor] front matter: action; summary / consistency: The review action rating treats the change as an optional capability or control that changes nothing until chosen. | Found: The Risky Agents (preview) policy is available by default to all organizations with supported licenses. When the service is set up, this policy is automatically present and ready to generate alerts based on observed agent activity. | Fix: Set action to 'act-now': the record says Launched, the briefing rates risk medium, and Microsoft describes automatic policy availability after service setup. The existing decision about who investigates alerts is therefore a current decision, not merely review of an optional capability. | Source: https://learn.microsoft.com/purview/insider-risk-management-monitoring-agents
-->
