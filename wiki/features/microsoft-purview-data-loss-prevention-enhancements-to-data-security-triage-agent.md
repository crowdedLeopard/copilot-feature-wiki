---
title: "Microsoft Purview DLP: Triage Agent gains metadata instructions, combined settings and its own Entra identity"
slug: "microsoft-purview-data-loss-prevention-enhancements-to-data-security-triage-agent"
roadmapId: 557552
topic: "governance"
products: ["Microsoft Purview"]
summary: "The Purview DLP Triage Agent accepts metadata-based custom instructions, gathers its settings in one view and can run under its own Microsoft Entra agent identity. Nothing runs until someone deploys the agent; it consumes Security Compute Units."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "April CY2026"
previewDate: "February CY2026"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Microsoft Learn says the agent requires both the per-seat licensing model (Microsoft Data Loss Prevention) and the pay-as-you-go billing model, and consumes Security Compute Units. Microsoft 365 E5 and E7 tenants receive a monthly SCU allocation."
audiences: ["compliance","security","finops"]
tags: ["purview","dlp","security-copilot","security-compute-units","agent-identity","entra-agent-id","agents","role-groups","auditing","defender-xdr"]
sources:
  - title: "Microsoft 365 Roadmap 557552"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=557552"
    kind: "roadmap"
  - title: "Get started with the Microsoft Purview Triage Agent in Data Loss Prevention"
    url: "https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started"
    kind: "learn"
  - title: "Security Copilot agents in Microsoft Purview overview"
    url: "https://learn.microsoft.com/purview/copilot-in-purview-agents-overview"
    kind: "learn"
  - title: "Microsoft Security Copilot agents in Purview (preview)"
    url: "https://learn.microsoft.com/purview/copilot-in-purview-agents"
    kind: "learn"
  - title: "Microsoft Security Copilot agents overview"
    url: "https://learn.microsoft.com/copilot/security/agents-overview"
    kind: "learn"
  - title: "Microsoft Security Copilot Security Compute Units and capacity"
    url: "https://learn.microsoft.com/copilot/security/security-compute-units-capacity"
    kind: "learn"
  - title: "Learn about Security Copilot for Microsoft 365 E5 and E7 included customers"
    url: "https://learn.microsoft.com/copilot/security/security-copilot-inclusion"
    kind: "learn"
  - title: "Manage security compute unit usage in Security Copilot"
    url: "https://learn.microsoft.com/copilot/security/manage-usage"
    kind: "learn"
  - title: "Audit log activities"
    url: "https://learn.microsoft.com/purview/audit-log-activities"
    kind: "learn"
  - title: "Who can set up, configure and use the agent (Purview role-group membership) (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/purview-permissions"
    kind: "learn"
  - title: "Who can set up, configure and use the agent (Purview role-group membership) (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
  - title: "Searching audit records of Security Copilot agent changes (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/audit-search"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-security-triage-agent-in-data-loss-prevention-reasoning-trace-and-c","microsoft-purview-data-loss-prevention-data-security-triage-agent-summaries-and-categoriza","agent-identity","microsoft-purview-data-security-triage-agent-sensitive-data-remediation-through-microsoft","role-groups"]
controls:
  - governs: "Agent trigger, alert timeframe, remediation reminders and policy scope"
    scope: "agent"
    ui:
      surface: "Microsoft Purview portal"
      path: "Agents > Explore agents > Go to agent > Edit agent > Agent configuration"
      docs: "https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started"
    api: null
    note: "Editable only in the Microsoft Purview portal, even if the agent was deployed from Defender XDR."
  - governs: "Whether the agent runs as its own agent identity or a user's identity"
    scope: "agent"
    ui:
      surface: "Microsoft Purview portal"
      path: "Agents > Explore agents > agent > deployment configurations"
      docs: "https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started"
    api: null
    note: "Microsoft recommends migrating user-identity agents to the agent identity. Allow 30 minutes for role access before a manual run."
  - governs: "Custom instructions that raise or lower alert priority, including metadata conditions"
    scope: "agent"
    ui:
      surface: "Microsoft Purview portal"
      path: "Agents > Explore agents > Go to agent > Edit agent > Agent Custom Instruction"
      docs: "https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started"
    api: null
    note: "Custom instructions are marked Preview on Learn and apply only to the Triage agent in DLP."
  - governs: "Whether the agent keeps triaging alerts (deactivation)"
    scope: "agent"
    ui:
      surface: "Microsoft Purview portal"
      path: "Agents > Explore agents > Go to agent > ellipses (three dots) > Deactivate agent"
      docs: "https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started"
    api: null
    note: "Deactivating stops triage without removing the agent; Remove agent in the same menu deletes it."
  - governs: "Who can set up, configure and use the agent (Purview role-group membership)"
    scope: "user"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > role group > Edit > Edit members of the role group > Choose users"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Requires the Role management role. Security Copilot Contributor is managed in Security Copilot, not in Purview role groups."
  - governs: "Security compute unit consumption by the agent"
    scope: "agent"
    ui:
      surface: "Microsoft Purview portal"
      path: "Agents > Explore agents > View agent > Edit agent > Usage monitoring"
      docs: "https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started"
    api: null
    note: "Monitoring only; it does not limit spend. Capacity and overage are set on the Security Copilot capacity."
  - governs: "Searching audit records of Security Copilot agent changes"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog"
      docs: "https://learn.microsoft.com/purview/audit-search"
    note: "Operations include CreateCopilotAgent, UpdateCopilotAgent and UpdateCopilotforSecurityAgentTrigger. Needs Audit Logs or View-Only Audit Logs."
confidence: "medium"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-05-14T23:15:59"
changes:
  - date: "2026-11-28"
    note: "New briefing: metadata custom instructions, combined settings, non-content alert triage and agent identity for the Purview DLP Triage Agent, with SCU costs and controls."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 3 of 93 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 93
  confirmed: 89
  unconfirmed: 3
  contradicted: 1
  attempts: 0
  hash: "dfb13ae3065cd01e52369f1efe8b3577"
---

## What's changing

The Data Security Triage Agent in Microsoft Purview Data Loss Prevention (DLP), a Security Copilot agent that sorts DLP alerts into **Needs attention**, **Less urgent** and **Not categorized**, gets four enhancements. The roadmap item lists them as: custom instructions that can refer to metadata as well as content (DLP only); deployment configuration and triggers merged into a single settings view; triage of alerts raised by conditions that do not inspect content, such as a recipient domain match (DLP only); and deployment under the agent's own identity in Microsoft Entra rather than the identity of the person who set it up.

Microsoft Learn documents two of these. The [get-started page](https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started) says the agent now supports both content and metadata-based instructions (for example, alerts from the last seven days, or naming a user), in a section marked Preview. It also says an agent now has its own agent identity or can be set up with the identity of the user setting it up, that the setting can be changed at any time, and that Microsoft recommends migrating agents set up with a user's identity. The 'One-Click' setup uses **Create and use agent identity** by default. Under **Edit agent**, **Agent configuration** holds the trigger, alert timeframe, remediation reminders, reminder duration and policy scope.

The sources disagree on two points. The [Security Copilot agents in Microsoft Purview overview](https://learn.microsoft.com/purview/copilot-in-purview-agents-overview) still says that in DLP the agent doesn't triage alerts by non-SITs or non-trainable classifier policy conditions only, such as Email subject match, which is the case the roadmap says is now supported. The [Microsoft Security Copilot agents in Purview (preview)](https://learn.microsoft.com/purview/copilot-in-purview-agents) page still describes the DLP agent as running as the administrator who turned it on, with authentication that expires after 90 days.

The roadmap item is **Launched**, with a preview date of February CY2026 and a target of April CY2026, release phases General Availability and Preview, on the web, for Worldwide (Standard Multi-Tenant).

## Why it matters

The identity change is the one to act on. An agent running as a person carries that person's access and stops working when the account changes; the agent identity instead receives a fixed set of Purview roles, including Data classification content viewer and Data classification content downloader. Tenants that set the agent up with a user's identity should plan the migration Microsoft recommends, and decide who owns the new identity in Microsoft Entra.

The other changes affect cost and workload. Metadata instructions let analysts steer triage by user and time window, so they shape which alerts reach **Needs attention**. If alerts from recipient-domain and similar conditions become triageable, the agent may process more alerts per run, and each one consumes Security Compute Units. Nothing happens in a tenant until someone with the required roles deploys the agent; for tenants already running it, Microsoft has not stated whether these newly supported alerts are triaged without a change to the policy scope.

## Risk assessment

**Data exposure**
- The agent reads file content and metadata involved in DLP alerts; with agent identity it holds Data classification content viewer and, for the endpoint scenario, content downloader. Limit which policies it triages under **Policy scope**.
- Metadata instructions can name individual users (the Learn example names Mary@contoso.com), so instruction text itself identifies people; restrict who can edit it through Purview role groups.

**Security & identity**
- An agent set up with a user's identity inherits that user's access; Microsoft recommends migrating to the agent identity. The older preview page still describes 90-day authentication expiry for the user-identity model.
- Microsoft Learn says to wait 30 minutes after setting the agent identity for role-based access to take effect before running the agent manually on an alert.

**Autonomy & actions**
- With **Run automatically based on a set schedule**, the agent triages alerts without a person starting it; Microsoft sets the schedule and it isn't configurable. It changes alert categories, not policies.
- Custom instructions raise or lower an alert's priority, so a badly worded instruction can push real incidents into **Less urgent**. The review step shows agent-inferred and unsupported instructions before saving.

**Change & support**
- Agent settings can be edited, deactivated and removed from the Microsoft Purview portal, even when deployed from Defender XDR.
- Learn pages disagree on non-content conditions and on identity, so expect questions from analysts about which alerts are triaged.

## Cost and licensing

**Licence.** The [get-started page](https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started) says the agent requires both the standard per-seat licensing model and the pay-as-you-go billing model, and that the organisation must be licensed for Microsoft Data Loss Prevention. The tenant must be onboarded to Microsoft Security Copilot.

**Meter.** The agent consumes Security Compute Units (SCUs) as it works; the number depends on the number and type of alerts processed. Under the [capacity model](https://learn.microsoft.com/copilot/security/security-compute-units-capacity), provisioned SCUs are billed by the hour and overage SCUs on usage, and overage can be set as unlimited or a maximum amount. If provisioned SCUs run out, Security Copilot requests stop unless another capacity type is available. Rates are on the Microsoft Security Copilot pricing page. Microsoft 365 E5 and E7 customers get 400 SCUs each month for every 1,000 paid user licences, up to 10,000 SCUs a month, under the [inclusion model](https://learn.microsoft.com/copilot/security/security-copilot-inclusion); allocations reset monthly.

**Related cost.** The Remediation Capability (Teams reminders) doesn't cost anything extra beyond the SCUs used to triage the alert, according to the get-started page.

**Not yet published.** An SCU figure per triaged alert, and whether the newly supported non-content alerts change consumption.

## Scope

- **Workloads:** alerts from DLP policies scoped to Exchange, Teams, OneDrive, SharePoint and devices (Endpoint). Device alerts need evidence collection for file activities on devices. Policies in simulation mode are not triaged.
- **Cloud:** Worldwide (Standard Multi-Tenant) on the roadmap record; platform Web.
- **Prerequisites:** Security Copilot onboarding, Microsoft 365 data sharing in Security Copilot, and the Microsoft Purview plug-in enabled.
- **Who configures:** admins need one role from each of two groups (for example DLP Compliance Management plus Purview Copilot Workspace Contributor or Security Copilot Contributor); analysts who view results, give feedback or write custom instructions need one role from each of three groups.
- **Instances:** there can be only one instance of each agent in a tenant. It can be deployed from Purview or Defender XDR, but only managed from the Microsoft Purview portal.
- **Limits:** files up to 2 MB; alerts generated more than 30 days before enablement are out of scope.

## Governance guidance

### Before rollout
- Check whether the agent already runs under a user's identity, and plan the migration to the agent identity that Microsoft recommends.
- Assign the admin and analyst roles from the get-started page through Purview role groups, keeping custom-instruction editing to named analysts.
- Confirm with the Security Copilot capacity owner how many SCUs, including overage, are available before widening the policy scope.
- Review the **Specify Policy Scope** list for policies shown as **Limited** and decide which to include.

### At rollout
- Switch the agent to its agent identity, then wait 30 minutes before running it manually on an alert.
- Set the trigger, alert timeframe and policy scope in **Agent configuration** in one pass.
- Write metadata instructions with the provided templates and check the **Agent-inferred instructions** and **Unsupported instructions** before saving.

### After rollout
- Watch SCU consumption in **Usage monitoring** for the first weeks after any scope change.
- Search the audit log for Security Copilot agent management operations, such as UpdateCopilotAgent, to see who changed the agent.
- Sample **Less urgent** alerts from recipient-domain and similar rules to check how the agent categorises them.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Agent trigger, alert timeframe, remediation reminders and policy scope</strong><br><small>Agent</small><br><small class="controls__note">Editable only in the Microsoft Purview portal, even if the agent was deployed from Defender XDR.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Agents › Explore agents › Go to agent › Edit agent › Agent configuration <a href="https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the agent runs as its own agent identity or a user's identity</strong><br><small>Agent</small><br><small class="controls__note">Microsoft recommends migrating user-identity agents to the agent identity. Allow 30 minutes for role access before a manual run.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Agents › Explore agents › agent › deployment configurations <a href="https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Custom instructions that raise or lower alert priority, including metadata conditions</strong><br><small>Agent</small><br><small class="controls__note">Custom instructions are marked Preview on Learn and apply only to the Triage agent in DLP.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Agents › Explore agents › Go to agent › Edit agent › Agent Custom Instruction <a href="https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the agent keeps triaging alerts (deactivation)</strong><br><small>Agent</small><br><small class="controls__note">Deactivating stops triage without removing the agent; Remove agent in the same menu deletes it.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Agents › Explore agents › Go to agent › ellipses (three dots) › Deactivate agent <a href="https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can set up, configure and use the agent (Purview role-group membership)</strong><br><small>User</small><br><small class="controls__note">Requires the Role management role. Security Copilot Contributor is managed in Security Copilot, not in Purview role groups.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › Role groups for Microsoft Purview solutions › role group › Edit › Edit members of the role group › Choose users <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Security compute unit consumption by the agent</strong><br><small>Agent</small><br><small class="controls__note">Monitoring only; it does not limit spend. Capacity and overage are set on the Security Copilot capacity.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Agents › Explore agents › View agent › Edit agent › Usage monitoring <a href="https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Searching audit records of Security Copilot agent changes</strong><br><small>Tenant</small><br><small class="controls__note">Operations include CreateCopilotAgent, UpdateCopilotAgent and UpdateCopilotforSecurityAgentTrigger. Needs Audit Logs or View-Only Audit Logs.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog</code> <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Roles come from two places: Purview role groups (Microsoft Purview portal) and the Security Copilot Contributor role, which the get-started page says is managed in Security Copilot. The agent's own settings (deployment, configuration, custom instructions, deactivation) are documented only as Microsoft Purview portal procedures; Microsoft Learn documents no PowerShell or API for them at the time of writing (November 2026). Deactivating the agent stops triage but keeps the agent; removing it deletes it. Spend is governed outside Purview, by the Security Copilot capacity's provisioned and overage SCUs ([Manage usage](https://learn.microsoft.com/copilot/security/manage-usage)). The get-started page refers to a **deployment configurations** tab for the identity setting, while the roadmap says deployment settings and triggers are now merged into one view, so the label may differ in the portal.

## Open questions

- Are alerts from non-content conditions, such as RecipientDomainIs, now triaged, given that the Purview agents overview still says they aren't? Watch the [overview page](https://learn.microsoft.com/purview/copilot-in-purview-agents-overview).
- For tenants already running the agent, are the newly supported alerts triaged automatically, or only after the policy scope is reviewed?
- How many SCUs does a typical triaged alert consume, and does triaging non-content alerts cost less because there is no file content to read?
- Does migrating from a user identity to the agent identity keep existing feedback and custom instructions?
- When will the metadata-based custom instructions leave preview?

<!-- rationale
risk: Medium. Once deployed, the agent reads file content and metadata in DLP alerts under an agent identity that holds content viewer and downloader roles; Purview role groups and the agent's policy scope govern it.
cost: Variable. The agent consumes Security Compute Units (SCUs) for every alert it triages, on top of a Microsoft Purview Data Loss Prevention licence; no per-alert rate is published.
impact: Low. DLP administrators and analysts in tenants that deploy the agent notice the changes; end users are not affected by these enhancements.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters / behaviour: An agent running as a person stops working when the account changes. | Found: Searched: 'Purview triage agent identity expires account change' and 'Security Copilot agent user identity account changes stops working policies modify DLP triage'; read Purview agents preview, DLP get-started and Security Copilot agents overview. No passage says any account change stops it. | Fix: Remove 'and stops working when the account changes'. The separately stated 90-day authentication-expiry description can remain attributed to the older preview page.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: The agent does not change policies. | Found: Searched: 'Data Security Triage Agent modify policies' and 'Purview triage agent policies changes identity'; read DLP get-started, Purview agents preview and Security Copilot agents overview. They describe triage but do not explicitly state that the agent cannot change policies. | Fix: Replace 'It changes alert categories, not policies' with 'It categorises DLP alerts.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; summary; controls[2].note / behaviour: The get-started page documents content and metadata-based custom instructions. | Found: For custom instructions, the agent now supports both content, and metadata-based instruction, such as: | Fix: Add to the source-disagreement paragraph: 'The Purview agents overview also says custom instructions analyze only document content, not metadata or behavioral attributes, unlike the get-started page.' Cite https://learn.microsoft.com/purview/copilot-in-purview-agents-overview. | Source: https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started
- [supported, minor] front matter: licensing.model; licensing.notes; Cost and licensing / licensing: The get-started page requires both per-seat licensing and pay-as-you-go, supporting a mixed licensing model. | Found: This agent requires both the standard per seat licensing model and the pay-as-you-go billing model. | Fix: Keep the attribution, and add: 'The Security Copilot inclusion page, however, says eligible Microsoft 365 E5 and E7 customers do not need to manually provision SCUs and their included capacity is not billed hourly.' Cite https://learn.microsoft.com/copilot/security/security-copilot-inclusion. | Source: https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started
- [unsupported, minor] rationale: impact / behaviour: End users are not affected by these enhancements. | Found: Searched: 'Purview triage agent policies changes identity'; read the roadmap, DLP get-started and Purview agents overview. The record describes admin and analyst enhancements, but no passage establishes that end users cannot be affected. | Fix: Remove '; end users are not affected by these enhancements' from the impact rationale. Keep the low rating and the statement about administrators and analysts in deploying tenants.
- [contradicted, minor] Governance guidance: Before rollout / consistency: Every control the governance checklist asks readers to take stock of has a controls-table row. | Found: Confirm with the Security Copilot capacity owner how many SCUs, including overage, are available before widening the policy scope. ... controls[5]: Monitoring only; it does not limit spend. | Fix: The before-rollout step asking the capacity owner to check provisioned and overage SCUs has no capacity-management row; the existing Usage monitoring row is monitoring only. Do not add a row as part of this correction.
-->
