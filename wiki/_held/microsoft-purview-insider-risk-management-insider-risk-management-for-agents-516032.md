---
title: "Microsoft Purview Insider Risk Management: monitor agents (Worldwide)"
slug: "microsoft-purview-insider-risk-management-insider-risk-management-for-agents-516032"
roadmapId: 516032
topic: "governance"
products: ["Microsoft Purview"]
summary: "Insider Risk Management extends to AI agents with a default Risky Agents policy. This is the Worldwide roadmap item. Security and compliance teams should check the policy and decide who investigates agent alerts."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: "December CY2025"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "on"
action: "act-now"
licensing:
  model: "mixed"
  notes: "Learn says Insider Risk Management needs a supported subscription with licences assigned to users, and that it uses pay-as-you-go billing or per-user licensing for Microsoft Purview capabilities or both. A licence or rate specific to agent monitoring is not yet published."
audiences: ["security","compliance","m365-admin"]
tags: ["purview","insider-risk-management","agents","agent-governance","copilot-studio","microsoft-foundry","auditing","role-groups","agent-registry"]
sources:
  - title: "Microsoft 365 Roadmap 516032"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=516032"
    kind: "roadmap"
  - title: "Monitoring agents in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-monitoring-agents"
    kind: "learn"
  - title: "Learn about Insider Risk Management policy templates"
    url: "https://learn.microsoft.com/purview/insider-risk-management-policy-templates"
    kind: "learn"
  - title: "Get started with Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-configure"
    kind: "learn"
  - title: "Learn about Microsoft Purview billing models"
    url: "https://learn.microsoft.com/purview/purview-billing-models"
    kind: "learn"
  - title: "Manage pay-as-you-go and per-user licensing usage"
    url: "https://learn.microsoft.com/purview/purview-billing-usage"
    kind: "learn"
  - title: "Manage agent registry in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview"
    kind: "learn"
  - title: "Agent policies, including the default Risky Agents policy and any custom agent policy (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/insider-risk-management-policies"
    kind: "learn"
  - title: "Who can configure Insider Risk Management policies and investigate agent alerts (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    kind: "learn"
  - title: "Who can configure Insider Risk Management policies and investigate agent alerts (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
  - title: "Whether the unified audit log records activity that Insider Risk Management policies read (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    kind: "learn"
videos: []
related: ["microsoft-purview-insider-risk-management-insider-risk-management-for-agents","insider-risk-management","role-groups","auditing","agent-registry"]
controls:
  - governs: "Agent policies, including the default Risky Agents policy and any custom agent policy"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Insider Risk Management > Policies > Agent policy"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-policies"
    api: null
    note: "Agent policy covers Copilot Studio and Microsoft Foundry agents. This route ends at the agent-policy dashboard; select a policy to see its details."
  - governs: "Who can configure Insider Risk Management policies and investigate agent alerts"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and groups > Roles groups > Insider Risk Management > Edit > Choose users"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"Insider Risk Management\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "The Analysts and Investigators role groups can investigate alerts but not configure policies. Admin-unit-scoped members cannot see agent alerts."
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
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-07-13T23:07:14"
changes:
  - date: "2026-11-26"
    note: "New briefing for the Worldwide roadmap item on Insider Risk Management for agents."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 67 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 67
  confirmed: 64
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "82270534cb5ae62514b897f3b8e22dca"
---

## What's changing

Microsoft Purview Insider Risk Management now covers AI agents as well as users. The roadmap item describes agent-specific indicators and an insider risk score built on agentic activity, and notes that users are pseudonymised by default. Microsoft lists the feature under two roadmap items with different clouds: this page covers 516032, which lists Worldwide (Standard Multi-Tenant). The other item, 545063, lists GCC, GCC High and DoD and has [its own briefing](/features/microsoft-purview-insider-risk-management-insider-risk-management-for-agents/).

Microsoft Learn documents the capability in "Monitoring agents in Insider Risk Management". A **Risky Agents (preview)** policy detects risky prompts, agents generating sensitive responses, agents accessing sensitive data and accessing risky websites. The policy templates page adds agents accessing sensitive or priority SharePoint files, agents sharing SharePoint files with people outside the organisation, and activity above the agent's baseline. Supported agents are Copilot Studio agents, Microsoft Foundry agents and agents built using the P4AI SDK. Alerts go through the standard Insider Risk Management alert workflow, and agent risk calculated in Insider Risk Management is shared with Data Security Posture Management for AI and the Microsoft 365 admin center.

Learn says the policy is available by default to all organisations with supported licences and, when the service is set up, is automatically present and ready to generate alerts. The policy templates page says the template is applied by default for all organisations.

The roadmap record gives status Launched, release phase General Availability and Preview, platform Web, preview date December CY2025 and target date June CY2026. Its description still carries a 30 January update that mentioned a planned release of April 2026. Learn labels the Risky Agents policy "preview" at the time of writing (November 2026), so the record and Learn differ on maturity. Learn's agent pages do not describe how the agent risk score is calculated.

## Why it matters

Agents that answer prompts, read SharePoint files and browse the web now produce alerts in Insider Risk Management without anyone creating a policy, once the service is set up in a licensed tenant. That puts agent prompts and responses in front of insider risk analysts, and puts a new alert stream on their queue. The decision for the service owner is who sees and acts on those alerts, and whether the default policy fits the organisation's agents or needs a custom policy alongside it.

Visibility has a gap that catches scoped teams: Learn says administrative units are not supported for agent alerts, so an analyst scoped by an admin unit cannot see them. Agent risk also travels beyond Purview, to Data Security Posture Management for AI and the agent registry in the Microsoft 365 admin center, so more administrators see that an agent is at risk than the Insider Risk Management role groups alone.

## Risk assessment

**Data exposure**
- The Risky Agents policy looks at agent prompts and responses and at agents accessing sensitive or priority SharePoint files, so analysts with alert access can review that activity. Keep alert access to named Insider Risk Management role groups (role group row in the table).
- For guest users interacting with agents, Learn says the full prompt and response content isn't available for investigation; indicators of sensitive information detected in them are shown instead.

**Security & identity**
- Agent risk is shared with Data Security Posture Management for AI and the Microsoft 365 admin center. In the agent registry, the Learn page says opening Insider Risk Management alerts from the risk details needs IRM Analyst or IRM Investigator, and that Global Administrator alone is insufficient.

**Autonomy & actions**
- The policy detects and raises alerts. Learn's agent monitoring page describes investigating alerts and does not describe blocking or changing an agent, so containment rests with the owner of the Copilot Studio or Microsoft Foundry agent.

**Change & support**
- Admin units are not supported for agent alerts, so scoped analysts cannot see them.
- Alert volume lands on analysts from day one. Learn offers a custom Insider Risk Management policy where the default does not meet requirements.

## Cost and licensing

**Licence.** Learn's "Get started with Insider Risk Management" page says administrators need to verify their organisation has a supported subscription and assign the appropriate licences to users, and points to the subscription requirements for Insider Risk Management. It suggests a Microsoft 365 Enterprise E5 trial for organisations that want to try the solution. The agent monitoring page points to the same section and says the Risky Agents policy is available by default to organisations with supported licences.

**Meter.** The same setup page says some Insider Risk Management indicators are only available with the pay-as-you-go billing model, and that the feature uses pay-as-you-go billing or per-user licensing for Microsoft Purview capabilities or both. The billing models page lists the Insider Risk Management meter for detecting risky behaviour for non-Microsoft 365 locations when using Cloud and generative AI policy indicators, measured in Data Security processing units on a daily basis and billed through Azure. Whether agent detections draw on that meter is not yet published.

**Caps.** The preview Usage center shows pay-as-you-go and per-user licensing usage; its table lists Insider Risk Management as not pausable.

**Indirect cost.** Analyst time to triage agent alerts and time to agree containment steps with agent owners.

## Scope

- **Clouds:** the roadmap item lists Worldwide (Standard Multi-Tenant). Learn says Insider Risk Management is available in tenants hosted in regions and countries supported by Azure service dependencies.
- **Platform and phase:** Web; General Availability and Preview; status Launched; target date June CY2026.
- **Agents:** Copilot Studio agents, Microsoft Foundry agents and agents built using the P4AI SDK.
- **Prerequisites:** the steps in Get started with Insider Risk Management, including a supported subscription and the Microsoft 365 audit log, which Learn says is enabled by default for Microsoft 365 organisations.
- **Roles:** configuring policies and settings needs the Insider Risk Management or Insider Risk Management Admins role group; investigating alerts needs Insider Risk Management, Insider Risk Management Analysts or Insider Risk Management Investigators.

## Governance guidance

### Before rollout
- Confirm which subscription covers Insider Risk Management in your tenant, using the subscription requirements page Learn links from the setup page.
- Check that the Microsoft 365 audit log is recording, because Insider Risk Management policies read it (audit row in the table).
- Assign alert investigators to the Insider Risk Management Analysts or Investigators role groups without admin-unit scoping, because scoped analysts cannot see agent alerts.

### At rollout
- Open Insider Risk Management > Policies, switch to Agent policy and confirm the Risky Agents policy is present and healthy.
- Compare the policy's detections with your Copilot Studio and Microsoft Foundry agents, and create a custom policy where the default does not fit.

### After rollout
- Triage agent alerts through the standard alert workflow, and record which agent owner is contacted for each confirmed alert.
- Watch the Monitoring agents in Insider Risk Management page for the preview label to change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Agent policies, including the default Risky Agents policy and any custom agent policy</strong><br><small>Tenant</small><br><small class="controls__note">Agent policy covers Copilot Studio and Microsoft Foundry agents. This route ends at the agent-policy dashboard; select a policy to see its details.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Insider Risk Management › Policies › Agent policy <a href="https://learn.microsoft.com/purview/insider-risk-management-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can configure Insider Risk Management policies and investigate agent alerts</strong><br><small>Tenant</small><br><small class="controls__note">The Analysts and Investigators role groups can investigate alerts but not configure policies. Admin-unit-scoped members cannot see agent alerts.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and groups › Roles groups › Insider Risk Management › Edit › Choose users <a href="https://learn.microsoft.com/purview/insider-risk-management-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;Insider Risk Management&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the unified audit log records activity that Insider Risk Management policies read</strong><br><small>Tenant</small><br><small class="controls__note">Prerequisite, not agent-specific. Needs the Audit Logs role in Exchange Online; run in Exchange Online PowerShell.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Start recording user and admin activity <a href="https://learn.microsoft.com/purview/audit-log-enable-disable" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AdminAuditLogConfig -UnifiedAuditLogIngestionEnabled $true</code> <a href="https://learn.microsoft.com/purview/audit-log-enable-disable" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Agent policies sit on the same Policies dashboard as user policies, in a separate Agent policy view; select a policy to see its details. Microsoft Learn documents no PowerShell cmdlet or API for managing Insider Risk Management policies at the time of writing (November 2026), and the agent page does not say whether the default Risky Agents policy can be edited or removed.

Role groups decide who configures the policy and who sees agent alerts. Members of Global Administrator, Compliance Administrator (Entra ID and Purview) and Organization Management can assign users to Insider Risk Management role groups. Admin-unit scoping hides agent alerts from scoped analysts. Turning the audit log on or off needs the Audit Logs role in Exchange Online.

## Open questions

- How is the agent insider risk score calculated and where is it shown? Watch the Monitoring agents in Insider Risk Management page.
- Do agent detections use the Insider Risk Management pay-as-you-go meter, and at what volume? Watch the Purview billing models page and the Usage center.
- Can the default Risky Agents policy be turned off, edited or scoped to particular agents, and will there be an API for it?
- Do any agent detections depend on policy indicators an administrator must select in Insider Risk Management settings?
- When will admin units support agent alerts?

<!-- rationale
risk: Medium. Learn says the Risky Agents policy is automatically present and ready to generate alerts, so agent prompts, responses and file access become alert material that Insider Risk Management role groups can review.
cost: Low. The cost Microsoft's pages show is the Insider Risk Management subscription and analyst time; some Insider Risk Management indicators bill pay-as-you-go, and a meter or rate specific to agent monitoring is not yet published.
impact: Low. Insider risk analysts, compliance administrators and the owners of monitored agents notice it; the sources describe no change for people who use the agents.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Why it matters: second paragraph / availability: Sharing risk with the agent registry means more administrators see an agent's risk, without a stated additional licence prerequisite. | Found: Prerequisites for viewing risk signals: Your tenant must have an E7 or A365 license. | Fix: Add to the sentence about wider visibility: 'Viewing risk signals in the Microsoft 365 admin center requires the tenant to have an E7 or A365 licence.' The prerequisite is at https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview#prerequisites-for-viewing-risk-signals. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview
- [contradicted, blocker] Risk assessment: Autonomy & actions / applicability: Containment therefore rests with the owner of the Copilot Studio or Microsoft Foundry agent. | Found: The Microsoft 365 admin center provides governance and lifecycle management capabilities for agents ... Start and stop | Start or stop the underlying Azure infrastructure to govern Foundry agents. | Fix: Replace 'so containment rests with the owner of the Copilot Studio or Microsoft Foundry agent' with the advice 'agree containment responsibilities with the agent owner and administrators'. The absence of a block action on the IRM monitoring page does not establish exclusive owner responsibility. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions
- [contradicted, blocker] Scope: Roles / role: Configuring policies and settings needs the Insider Risk Management or Insider Risk Management Admins role group. | Found: Members of the following roles can assign users to Insider Risk Management role groups and have the same solution permissions included with the Insider Risk Management Admins role group: ... Global Administrator ... Compliance Administrator ... Organization Management | Fix: Replace 'configuring policies and settings needs the Insider Risk Management or Insider Risk Management Admins role group' with 'members of the Insider Risk Management or Insider Risk Management Admins role group can configure policies and settings'. This removes the exclusive requirement; the permissions page also grants Admins-equivalent solution permissions to the administrative roles already named under Governance controls. | Source: https://learn.microsoft.com/purview/insider-risk-management-permissions
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Scope: Prerequisites / default: Learn says auditing is enabled by default for Microsoft 365 organisations. | Found: Auditing is enabled for Microsoft 365 organizations by default. | Fix: Qualify the sentence: 'Auditing is enabled by default for Microsoft 365 organisations, except SMB licences (Business Basic, Business Standard and Business Premium) and unmanaged tenants using free trials of enterprise licences, according to https://learn.microsoft.com/purview/audit-log-enable-disable.' The setup page supports the current sentence, but the cited audit page gives these exceptions. | Source: https://learn.microsoft.com/purview/insider-risk-management-configure
- [supported, minor] controls[0].ui; Governance guidance: At rollout; Governance controls / admin-path: Microsoft Purview portal > Insider Risk Management > Policies > Agent policy reaches the agent-policy dashboard. | Found: Go to the Insider Risk Management solution. Select Policies in the left navigation. ... Your policies are separated into two categories: User policy and Agent policy. Switch between the two to locate relevant policy details. | Fix: Extend controls[0].ui.path to 'Insider Risk Management > Policies > Agent policy > policy' and retain the note that selecting a policy shows its details. The existing path stops early on the correct dashboard; the page documents selecting the policy to see health status details. | Source: https://learn.microsoft.com/purview/insider-risk-management-policies
-->
