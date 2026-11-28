---
title: "Microsoft Purview: Data Security Triage Agent for DLP alerts reaches general availability"
slug: "microsoft-purview-data-security-triage-agent-in-dlp-is-generally-available-worldwide"
roadmapId: 542187
topic: "governance"
products: ["Microsoft Purview"]
summary: "A Security Copilot agent that sorts Purview DLP alerts into Needs attention and Less urgent, with a summary for each, is generally available. Nothing runs until someone deploys it, and it consumes security compute units."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2025"
previewDate: null
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Microsoft Learn states the agent requires both the per-seat model (the organisation must be licensed for Microsoft Data Loss Prevention) and the pay-as-you-go model, with Security Copilot SCUs consumed as it works."
audiences: ["security","compliance","finops"]
tags: ["purview","dlp","security-copilot","security-compute-units","entra-agent-id","endpoint-dlp","sensitive-information-types","defender-xdr","role-groups"]
sources:
  - title: "Get started with the Microsoft Purview Triage Agent in Data Loss Prevention"
    url: "https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started"
    kind: "learn"
  - title: "Security Copilot agents in Microsoft Purview overview"
    url: "https://learn.microsoft.com/purview/copilot-in-purview-agents-overview"
    kind: "learn"
  - title: "Microsoft Security Copilot agents in Purview (preview)"
    url: "https://learn.microsoft.com/purview/copilot-in-purview-agents"
    kind: "learn"
  - title: "Learn about Security Copilot for Microsoft 365 E5 and E7 included customers"
    url: "https://learn.microsoft.com/copilot/security/security-copilot-inclusion"
    kind: "learn"
  - title: "Microsoft Security Copilot Security Compute Units and capacity"
    url: "https://learn.microsoft.com/copilot/security/security-compute-units-capacity"
    kind: "learn"
  - title: "Manage security compute unit usage in Security Copilot"
    url: "https://learn.microsoft.com/copilot/security/manage-usage"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 542187"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=542187"
    kind: "roadmap"
  - title: "Who holds the Purview roles needed to set up or use the agent (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/purview-permissions"
    kind: "learn"
  - title: "Who holds the Purview roles needed to set up or use the agent (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-loss-prevention-data-security-triage-agent-summaries-and-categoriza","microsoft-purview-data-security-triage-agent-in-data-loss-prevention-reasoning-trace-and-c","microsoft-purview-data-security-triage-agent-sensitive-data-remediation-through-microsoft","agent-identity","endpoint-dlp"]
controls:
  - governs: "Whether the DLP triage agent is deployed in the tenant"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Agents > Explore agents > Triage agent in Data Loss Prevention > View Details > Setup"
      docs: "https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started"
    api: null
    note: "Also deployable from Defender XDR, but managed only in Purview. One instance per tenant."
  - governs: "Schedule, alert timeframe, policy scope and Teams reminders the agent uses"
    scope: "agent"
    ui:
      surface: "Microsoft Purview portal"
      path: "Agents > Explore agents > Go to agent > Edit agent > Agent configuration"
      docs: "https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started"
    api: null
    note: "Remediation reminders and reminder duration are preview."
  - governs: "Whether the agent keeps triaging alerts"
    scope: "agent"
    ui:
      surface: "Microsoft Purview portal"
      path: "Agents > Explore agents > Go to agent > ellipses (three dots) > Deactivate agent"
      docs: "https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started"
    api: null
    note: "Deactivation stops triage without removing the agent."
  - governs: "Security compute unit consumption by the agent"
    scope: "agent"
    ui:
      surface: "Microsoft Purview portal"
      path: "Agents > Explore agents > View agent > Edit agent > Usage monitoring"
      docs: "https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started"
    api: null
    note: "Monitoring only; it does not limit consumption."
  - governs: "Who holds the Purview roles needed to set up or use the agent"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > role group > Edit > Edit members of the role group > Choose users"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Covers the Purview roles only; Security Copilot Contributor is managed in Security Copilot. Needs the Role management role."
confidence: "high"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-05-14T23:15:59"
changes:
  - date: "2026-11-28"
    note: "New briefing on the general availability of the Data Security Triage Agent for DLP alerts, with SCU costs and Purview portal controls."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 109 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 109
  confirmed: 104
  unconfirmed: 0
  contradicted: 5
  attempts: 1
  hash: "fe38ebd37f993f0d4678b470800d3586"
---

## What's changing

The Data Security Triage Agent, a Microsoft Security Copilot agent inside Microsoft Purview Data Loss Prevention (DLP), reads DLP alerts and sorts them into **Needs attention**, **Less urgent** and **Not categorized**, with a summary explaining each decision. The roadmap item describes this as the general availability release, adding coverage of Endpoint DLP alerts and of alerts that use custom sensitive information types (SITs), plus support for Microsoft Entra Agent ID.

According to Microsoft Learn, the agent triages alerts from policies scoped to Exchange, Teams, OneDrive, SharePoint and devices, and only from policies in active mode, not simulation mode. Device alerts are triaged only when evidence collection for file activities on devices is enabled. It triages files up to 2 MB, and for alerts with 10 or more files it summarises the top 10. Results appear in the Purview **Alerts** page under a **Triage Agent** view, and agent summaries also appear on DLP alerts in the Microsoft Defender XDR alert queue.

The agent can be deployed from the Purview portal or the Defender XDR portal, but is managed, edited and disabled only in the Purview portal, and a tenant has one instance. After setup it starts within 30–60 minutes and, by default, processes alerts from all DLP policies generated in the past 30 days. It can run under a dedicated Microsoft Entra agent identity (recommended) or under the identity of the person who set it up.

The roadmap record lists the item as Launched, General Availability, targeted for December CY2025, Worldwide (Standard Multi-Tenant) cloud, web platform. Two points differ between sources: the Microsoft Learn page *Microsoft Security Copilot agents in Purview (preview)* still labels the DLP agent preview, and the get-started page describes content risk as based on Microsoft-provided SITs, while the roadmap item says custom SITs are now covered.

## Why it matters

This is a new autonomous reader of the most sensitive content in the tenant. When it runs under an agent identity, Microsoft assigns it roles including Data classification content viewer and Data classification content downloader, so it reads the files and messages behind DLP alerts. Whoever deploys it also decides the look-back window, the policies in scope and whether it messages users in Teams, and the one-click banner deploys it with default settings.

Nothing happens until someone with the setup roles deploys it. The cost question is SCUs: in E5 and E7 tenants the agent draws on the Default Security Copilot Capacity, which Microsoft describes as shared across all users and experiences in the tenant, so triage competes with analysts' own Security Copilot use. Expect a large backlog of DLP alerts to consume SCUs quickly in the first run, because the default look-back is 30 days.

## Risk assessment

**Data exposure**
- The agent reads alert content and, for device alerts, downloads evidence files; its roles are listed on the get-started page. Limit who can deploy it through Purview role groups (controls table).
- Microsoft Learn states agents aren't administrative unit aware, so an agent set up with an unrestricted identity sees alerts beyond any one administrative unit.

**Security & identity**
- Agent identity is a Microsoft Entra agent identity created for the agent; the alternative runs it as the admin who set it up. Microsoft recommends migrating user-identity agents to agent identity, which the deployment configuration for the agent allows at any time.

**Autonomy & actions**
- On a schedule Microsoft sets, the agent categorises alerts without review. Analysts can give feedback and custom instructions (preview) that raise or lower priority, which changes future triage for the policy or all policies.
- With **Remediation reminders in Microsoft Teams** (preview) on, the agent messages the last modifier of SharePoint and OneDrive files in Needs attention alerts, and enabling the setting also enables the bot in Teams for the tenant. One-click setup leaves it off.

**Change & support**
- Alerts the agent cannot handle land in **Not categorized**, and alerts from simulation-mode policies are not triaged at all; analysts still work those by hand.

## Cost and licensing

**Licence.** The get-started page says the agent requires both the standard per-seat licensing model and the pay-as-you-go billing model, and that the organisation must be licensed for Microsoft Data Loss Prevention.

**Meter.** The agent consumes Security Copilot security compute units (SCUs); SCUs must be provisioned for it to work, and consumption depends on the number and type of alerts processed. Microsoft has not published a per-alert SCU figure for this agent. The Security Copilot usage page lists both generally available and public preview capabilities as charged.

**Microsoft 365 E5 and E7.** Microsoft Learn states these customers have 400 SCUs each month for every 1,000 paid user licences, up to 10,000 SCUs a month at no additional cost, and that the allowance resets monthly. Usage beyond it will be throttled at a future date, with an option then to buy more at $6 USD per SCU pay-as-you-go.

**Other tenants.** Provisioned SCUs are billed per hour; when they run out, Security Copilot requests stop unless another capacity type is available. Overage capacity can be set to a maximum or unlimited in the Security Copilot portal settings (**Number of overage units**), which decides whether triage carries on into overage billing.

**Remediation reminders** cost nothing extra beyond the SCUs used to triage the alert, according to the get-started page.

## Scope

- **Who uses it:** DLP admins deploy and configure it; analysts view results, give feedback and run it on single alerts. Each needs one role from each group the get-started page lists, including **Security Copilot Contributor** (managed in Security Copilot) or **Purview Copilot Workspace Contributor**.
- **Prerequisites:** the tenant onboarded to Microsoft Security Copilot, Microsoft 365 data sharing enabled in Security Copilot, and the Microsoft Purview plug-in enabled in Security Copilot.
- **Alerts in scope:** DLP policies in active mode covering Exchange, Teams, OneDrive, SharePoint or devices. Policies with unsupported conditions show **Limited** eligibility.
- **Portals:** deploy from Purview or Defender XDR; manage only in Purview.
- **Cloud:** the roadmap record lists Worldwide (Standard Multi-Tenant).
- **Related:** the Insider Risk Management triage agent is a separate agent; see /concepts/insider-risk-management/.

## Governance guidance

### Before rollout
- Decide who may deploy the agent, and keep the setup roles in Purview role groups to that group (Settings > Roles and scopes > Role groups).
- Check SCU headroom in the agent's usage monitoring before choosing a 30-day look-back; consider **Only triage new alerts** for the first run.
- Choose agent identity rather than a user identity, so triage activity is not tied to one admin's account; see /concepts/agent-identity/.

### At rollout
- Deploy from Purview (Agents > Explore agents > View Details > Setup) and set the alert timeframe, schedule and policy scope deliberately rather than through the one-click banner.
- Leave **Remediation reminders in Microsoft Teams** off until the Teams app permissions and user communication are agreed.

### After rollout
- Review SCU consumption by the agent weekly for the first month in **Usage monitoring**.
- Review the **Not categorized** and **Limited** eligibility lists, and route those alerts to manual triage.
- Narrow the policy scope in **Agent configuration**, or deactivate the agent, if spend or accuracy is not acceptable.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the DLP triage agent is deployed in the tenant</strong><br><small>Tenant</small><br><small class="controls__note">Also deployable from Defender XDR, but managed only in Purview. One instance per tenant.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Agents › Explore agents › Triage agent in Data Loss Prevention › View Details › Setup <a href="https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Schedule, alert timeframe, policy scope and Teams reminders the agent uses</strong><br><small>Agent</small><br><small class="controls__note">Remediation reminders and reminder duration are preview.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Agents › Explore agents › Go to agent › Edit agent › Agent configuration <a href="https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the agent keeps triaging alerts</strong><br><small>Agent</small><br><small class="controls__note">Deactivation stops triage without removing the agent.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Agents › Explore agents › Go to agent › ellipses (three dots) › Deactivate agent <a href="https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Security compute unit consumption by the agent</strong><br><small>Agent</small><br><small class="controls__note">Monitoring only; it does not limit consumption.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Agents › Explore agents › View agent › Edit agent › Usage monitoring <a href="https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who holds the Purview roles needed to set up or use the agent</strong><br><small>Tenant</small><br><small class="controls__note">Covers the Purview roles only; Security Copilot Contributor is managed in Security Copilot. Needs the Role management role.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › Role groups for Microsoft Purview solutions › role group › Edit › Edit members of the role group › Choose users <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Deactivating the agent stops triage but keeps it and its alert timeframe reference point; **Remove agent** on the same menu deletes it. The agent's identity can be changed later in its deployment configuration. Microsoft Learn documents no PowerShell, Graph or other API for deploying, configuring or deactivating this agent at the time of writing (November 2026). The setup roles span two systems: Purview role groups (scriptable with Add-RoleGroupMember) and **Security Copilot Contributor**, which is managed in Security Copilot. Overage SCU limits are set in Security Copilot, not in Purview, and need the Azure capacity owner or contributor role.

## Open questions

- Does the agent now score content against custom SITs, as the roadmap states, while the Learn page still describes Microsoft-provided SITs? Watch the get-started page.
- Why does the *Microsoft Security Copilot agents in Purview (preview)* page still label the DLP agent preview after the roadmap's general availability? Watch that page.
- How many SCUs does a typical alert, or an Endpoint DLP alert with evidence files, consume? Watch the get-started page and the Security Copilot usage page.
- When will E5 and E7 usage beyond the included SCUs be throttled, and what happens to scheduled triage then? Watch Message center for the 30-day notice Microsoft promises.

<!-- rationale
risk: Medium. Once deployed, the agent runs under its own Microsoft Entra agent identity with roles that let it read and download the content behind DLP alerts, and any admin or analyst with the setup roles can deploy it from a banner.
cost: Variable. The agent consumes Security Copilot security compute units (SCUs), and the number depends on how many alerts it processes and of which type; Microsoft 365 E5 and E7 include a monthly SCU allowance.
impact: Low. DLP analysts and administrators see a new Triage Agent view of the alert queue; end users are reached only if the preview Teams remediation reminders are switched on.
-->

<!-- verifier-findings (2026-11-28, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].governs; Governance guidance: At rollout / applicability: Administrators can set the agent's schedule in Agent configuration. | Found: Choose to **Run automatically based on a set schedule**. If you don't choose this option, you must run the agent manually one at a time. Microsoft sets the schedule and it isn't configurable by organizations. | Fix: Replace 'Schedule' in controls[1].governs and its rendered row with 'Automatic versus manual execution'. Replace 'set the alert timeframe, schedule and policy scope deliberately' with 'set the alert timeframe, automatic versus manual execution and policy scope deliberately'. | Source: https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started
- [contradicted, blocker] Risk assessment: Autonomy & actions / behaviour: Turning on remediation reminders sends Teams messages to the last modifier of SharePoint or OneDrive files in Needs attention alerts. | Found: To use the Remediation Capability of the Triage Agent in Data Loss Prevention, you must configure the Microsoft Teams Admin Center to allow the Data Security Triage Agent app to send messages to users. | Fix: Add to that sentence: 'provided the Microsoft Teams admin center allows the Data Security Triage Agent app to send messages to users; reminders are not sent when the tenant blocks deployment of new Teams apps.' The cited get-started page states this prerequisite. | Source: https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started
- [contradicted, blocker] Governance controls: final sentence / role: Changing overage limits in Security Copilot requires the Azure capacity owner or contributor role. | Found: **Azure portal required role:** Azure capacity owner or contributor. **Security Copilot portal required role:** Azure capacity owner or contributor who are also Security Copilot owners. | Fix: Replace the final sentence with: 'Overage SCU limits are set in Security Copilot, not in Purview, and require an Azure capacity owner or contributor who is also a Security Copilot owner.' | Source: https://learn.microsoft.com/copilot/security/manage-usage
- [contradicted, blocker] rationale: risk; What's changing / consistency: The risk rationale says every deployed agent runs under its own Entra agent identity, while the body also permits a user identity. | Found: Once deployed, the agent runs under its own Microsoft Entra agent identity It can run under a dedicated Microsoft Entra agent identity (recommended) or under the identity of the person who set it up. | Fix: Replace 'Once deployed, the agent runs under its own Microsoft Entra agent identity with roles that let it read and download the content behind DLP alerts' with 'When deployed using its own Microsoft Entra agent identity, the agent receives roles that let it read and download the content behind DLP alerts'.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Autonomy & actions / behaviour: Preview custom instructions can raise or lower alert priority. | Found: ### Custom instructions (Preview) Raising or lowering the alert’s priority if the content matches your custom instruction. | Fix: After the custom-instructions sentence add: 'The agents overview page describes custom instructions as raising priority only, while the DLP get-started page describes raising or lowering it.' Both pages are already cited. | Source: https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started
- [supported, minor] Cost and licensing; Governance controls / admin-path: Overage units are set in Security Copilot Settings under Number of overage units. | Found: Sign in to Security Copilot (https://securitycopilot.microsoft.com) and go to **Settings**. Through the owner settings page: Under **Security compute units** or **Number of overage units**, select **Change**. | Fix: Replace the parenthetical '(Number of overage units)' with '(Settings > Owner settings > Number of overage units > Change)' to finish the route at the control documented on the cited usage page. | Source: https://learn.microsoft.com/copilot/security/manage-usage
- [supported, minor] Governance guidance: At rollout / admin-path: Purview deployment can be reached through Agents > Explore agents > View Details > Setup. | Found: On the card for the Triage agent in Data Loss Prevention, select **View Details** to open a page that shows the details about the agent. 5. Select **Setup** | Fix: Replace this prose path with 'Agents > Explore agents > Triage agent in Data Loss Prevention > View Details > Setup', matching controls[0].ui. | Source: https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The checklist tells readers to choose agent identity, but the controls table has no identity-selection control. | Found: Choose agent identity rather than a user identity Whether the DLP triage agent is deployed in the tenant Schedule, alert timeframe, policy scope and Teams reminders the agent uses | Fix: Remove the 'Choose agent identity rather than a user identity' checklist bullet; retain the documented identity choices and recommendation already explained in What's changing and Risk assessment.
-->
