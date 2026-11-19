---
title: "Microsoft Purview: Data Security Triage Agent summaries for DLP alerts in Microsoft Defender XDR"
slug: "microsoft-purview-data-loss-prevention-data-security-triage-agent-summaries-and-categoriza"
roadmapId: 558860
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans to show Data Security Triage Agent summaries and categories on DLP alerts in Defender XDR. Nothing appears until the agent is deployed, and it consumes Security Copilot compute units."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "August CY2027"
previewDate: "April CY2026"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "off"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn says the agent requires both per-seat licensing (Microsoft DLP) and pay-as-you-go billing, and it consumes Security Copilot SCUs. Microsoft 365 E5 and E7 tenants get 400 SCUs a month per 1,000 licences, up to 10,000, at no additional cost. A per-alert SCU rate is not yet published."
audiences: ["security","compliance","finops","m365-admin"]
tags: ["purview","dlp","defender-xdr","security-copilot","agents","agent-identity","ai"]
sources:
  - title: "Microsoft 365 Roadmap 558860"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=558860"
    kind: "roadmap"
  - title: "MC1255406: (Updated) Microsoft Purview | Data Security Triage Agent Summaries for DLP Alerts in Microsoft Defender XDR"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1255406"
    kind: "message-center"
  - title: "Get started with the Microsoft Purview Triage Agent in Data Loss Prevention"
    url: "https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started"
    kind: "learn"
  - title: "Security Copilot agents in Microsoft Purview overview"
    url: "https://learn.microsoft.com/purview/copilot-in-purview-agents-overview"
    kind: "learn"
  - title: "Learn about Microsoft Purview billing models"
    url: "https://learn.microsoft.com/purview/purview-billing-models"
    kind: "learn"
  - title: "Learn about Security Copilot for Microsoft 365 E5 and E7 included customers"
    url: "https://learn.microsoft.com/copilot/security/security-copilot-inclusion"
    kind: "learn"
  - title: "Manage security compute unit usage in Security Copilot"
    url: "https://learn.microsoft.com/copilot/security/manage-usage"
    kind: "learn"
  - title: "Permissions in the Microsoft Purview portal"
    url: "https://learn.microsoft.com/purview/purview-permissions"
    kind: "learn"
  - title: "Who can deploy, configure and view results of the agent, through role group membership (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
videos: []
related: ["agent-identity","microsoft-purview-data-loss-prevention-new-guided-experience-to-diagnose-and-resolve-dlp-i","microsoft-purview-endpoint-data-loss-prevention-policy-sync-and-device-health-ai-powered-i"]
controls:
  - governs: "Whether the Triage Agent in DLP is set up, and its triggers, alert timeframe, policy scope and remediation reminders"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Agents > Explore agents > Go to agent > Edit agent > Agent configuration"
      docs: "https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started"
    api: null
    note: "First deployment is Agents > Explore agents > View Details > Setup, or from a DLP alert in Defender XDR. Editing is Purview only."
  - governs: "Whether the Triage Agent in DLP keeps triaging alerts"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Agents > Explore agents > Go to agent > ellipses > Deactivate agent"
      docs: "https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started"
    api: null
    note: "The ellipses (three dots) sit next to Edit agent. Learn says deactivating stops triage but does not remove the agent."
  - governs: "Who can deploy, configure and view results of the agent, through role group membership"
    scope: "user"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Roles are listed on the Triage Agent get-started page. The cmdlet is in the Exchange PowerShell reference; the eDiscovery permissions page runs it in Security & Compliance PowerShell for a Purview role group."
  - governs: "Security compute unit consumption by the agent"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Agents > Explore agents > View agent > Edit agent > Usage monitoring"
      docs: "https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started"
    api: null
    note: "Shows consumption only. It links to the Security Copilot usage monitoring tool; capacity itself is changed in Security Copilot or Azure."
confidence: "high"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-08-17T22:52:47"
changes:
  - date: "2026-11-19"
    note: "First briefing: Defender XDR will show Triage Agent summaries on DLP alerts; the agent is off until deployed, licensed per seat plus SCU consumption."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 90 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-19"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 90
  confirmed: 85
  unconfirmed: 0
  contradicted: 5
  attempts: 1
  hash: "ab445e3a79d25106a5da7b43f9cd3fab"
---

## What's changing

Microsoft plans to show the summaries and categorisations produced by the Microsoft Purview Data Security Triage Agent on Data Loss Prevention (DLP) alerts in the Microsoft Defender XDR portal, so analysts can triage DLP alerts without leaving Defender. Microsoft's notice MC1255406 says DLP alerts in Defender XDR will display AI-generated summaries and categorisations when the agent is deployed, that an eligible analyst can deploy the agent from the DLP alert page if it is not yet deployed, and that existing DLP policies and enforcement are not changed.

Management stays in Microsoft Purview. MC1255406 says custom instructions, pausing or deactivating the agent and usage monitoring remain in the Microsoft Purview portal, and the Learn page says the agent can be deployed from either portal but can only be managed, edited and disabled from Purview. There can be only one instance of the agent in a tenant, whichever portal it was deployed from.

The roadmap item is In development, with a preview date of April CY2026 and a target of August CY2027. MC1255406 (last updated 17 August 2026) says the public preview began rolling out in early April 2026 and was expected to complete by mid-April 2026, and that general availability for Worldwide begins rolling out in August 2027, previously August 2026. The notice sets no act-by date. Microsoft Learn already describes deploying the agent from a DLP alert in Defender XDR and viewing its output in the Defender XDR alert queue, so the documentation is ahead of the roadmap status; treat the roadmap dates as targets.

## Why it matters

If nobody acts, no agent is deployed and Defender XDR shows no summaries: MC1255406 ties the summaries to the agent being deployed, and Microsoft's Security Copilot licensing FAQ says agents are not automatically enabled and an organisation must set them up and deploy them. The decision this puts in front of a service owner is whether, when and by whom the agent is deployed.

That decision matters because deployment is the point where spend starts (SCUs are consumed as alerts are triaged) and where an AI agent gets access to alert content. Learn says any admin or analyst in a tenant with no agent deployed sees a banner on the alerts page to set it up with default settings, so the decision can be taken in the Defender XDR queue rather than by the compliance team. Plan for who holds the deployment roles before the banner is clicked.

## Risk assessment

**Data exposure**

- When the agent triages an alert it reads the files behind it: with fewer than 10 files it scans all of them, otherwise it uses the top 10, and it triages files up to 2 MB. The summary is then shown in both Purview and Defender XDR to accounts holding the viewing roles, so check who holds them (see the controls table).
- Security Copilot must have Microsoft 365 data sharing enabled for the agent to work, and Microsoft's licensing FAQ says Security Copilot may copy, process and store relevant Customer Data to provide responses.

**Security & identity**

- The recommended setup creates a separate Microsoft Entra agent identity, and the one-click default is "Create and use agent identity". Learn lists the roles it is given, including Data classification content downloader for the endpoint scenario. The alternative is the identity of whoever sets the agent up, so every agent action is then attributed to that person.
- Learn says agents are not administrative unit aware: an agent running for an administrative-unit-restricted admin sees only alerts from policies scoped to that unit.

**Autonomy & actions**

- The agent runs on a Microsoft-set schedule once deployed, and its categories (Needs attention, Less urgent, Not categorized) steer analyst attention. Learn tells analysts to do manual analysis on alerts the agent does not evaluate, so a Less urgent label is a prioritisation aid and not a closure.
- Remediation reminders (preview) make the agent send a Microsoft Teams chat daily to the last modifier of a file behind a Needs attention alert, and enabling the setting also enables the bot in Teams for the tenant. The one-click default has it off.
- MC1255406 says existing DLP policies and enforcement are not changed.

**Change & support**

- Analysts can deploy the agent in Defender XDR but cannot edit or disable it there; changes need Purview access, so support runbooks need both portals.
- The agent triages only alerts from policies in active mode (not simulation mode) in Exchange, Teams, OneDrive, SharePoint and devices locations; other alerts remain a manual job.

## Cost and licensing

Learn says the agent "requires both the standard per seat licensing model and the pay-as-you-go billing model", and that the organisation must be licensed for Microsoft Data Loss Prevention (DLP) to use it. The agent consumes security compute units (SCUs), you must have SCUs provisioned for it to work, and the number consumed depends on the number and type of alerts processed. Source: the Triage Agent get-started page.

The Purview billing page describes SCUs as a pay-as-you-go meter for all Security Copilot functions, made up of provisioned SCUs and overage SCUs, with overage limits that can be unlimited or a maximum amount you set. For Microsoft 365 E5 and E7, Microsoft's inclusion page gives 400 SCUs a month for every 1,000 paid user licences, up to 10,000 SCUs a month, at no additional cost, covering agentic scenarios in Microsoft Purview; it also says usage beyond the allocation will be throttled at a future date.

The remediation reminders (preview) cost nothing extra beyond the SCUs needed to triage the alert first, per Learn. Track consumption under the agent's Usage monitoring in Purview. A per-alert SCU rate for this agent is not yet published, so budget from a pilot on a limited policy scope.

## Scope

- **Clouds and platform:** the roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform.
- **Who is affected:** security analysts and admins triaging DLP alerts in Defender XDR, and organisations using the Purview Data Security Triage Agent (MC1255406).
- **Licensing and prerequisites:** Microsoft DLP licensing and provisioned SCUs; the tenant must be onboarded to Security Copilot, Microsoft 365 data sharing must be enabled in Security Copilot, and the Microsoft Purview plug-in must be enabled in Security Copilot.
- **Roles:** admins who set the agent up need one role from each of two groups, for example Role Management, DLP Compliance Management, Information Protection Admin or Data security AI admin, plus Security Copilot Contributor or Purview Copilot Workspace Contributor. Analysts who view results need, for example, Information Protection Analyst, Manage Alerts or View-Only Manage alerts, plus Purview Agent Analysis and the Security Copilot roles.
- **Alerts covered:** policies in active mode scoped to Exchange, Teams, OneDrive, SharePoint and devices; device alerts need evidence collection for file activities on devices. After setup the agent starts within 30 to 60 minutes and by default processes alerts from all DLP policies generated in the past 30 days.
- **Remediation reminders:** the Teams admin centre must allow the Data Security Triage Agent app to send messages; see the Learn page on [configuring Teams for the remediation messages](https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-teams-config).

## Governance guidance

### Before rollout

- Check that the tenant is onboarded to Security Copilot, has Microsoft 365 data sharing enabled and has SCUs provisioned or the E5/E7 inclusion capacity, because the agent will not run without SCUs.
- Assign the admin and analyst roles listed in Scope through the Purview role groups, and remove viewing access from anyone who should not see file-content summaries.
- Decide which identity the agent uses; Learn recommends the agent identity over the identity of the person setting it up.
- Identify which DLP policies should be in the agent's policy scope, and confirm they are in active mode and, for devices, that evidence collection is enabled.
- Update security operations runbooks for the new triage queue, and for where the agent is deployed (Defender XDR or Purview) and where it is managed (Purview), as MC1255406 advises.

### At rollout

- Deploy the agent in the Purview portal so you choose the alert timeframe, policy scope and identity, instead of leaving it to the Defender XDR banner's "Get started", which starts the agent with default settings.
- Brief analysts who hold deployment roles on what the Defender XDR banner does, and who is expected to click it.
- Leave remediation reminders off until the Teams app permissions have been reviewed.
- Allow time for roles to take effect: Learn says to wait 30 minutes after setting up the agent identity before a manual run, and up to 2 hours for in-scope alerts to be triaged.

### After rollout

- Monitor SCU use under Usage monitoring in Purview and compare it with the SCUs available.
- Compare a sample of Less urgent alerts with manual analysis, and use agent feedback where the category is wrong.
- Review role group membership for the deployment and viewing roles each quarter.
- Deactivate the agent in Purview if SCU use or analyst reliance needs pausing; Learn says deactivation stops triaging.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Triage Agent in DLP is set up, and its triggers, alert timeframe, policy scope and remediation reminders</strong><br><small>Tenant</small><br><small class="controls__note">First deployment is Agents &gt; Explore agents &gt; View Details &gt; Setup, or from a DLP alert in Defender XDR. Editing is Purview only.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Agents › Explore agents › Go to agent › Edit agent › Agent configuration <a href="https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the Triage Agent in DLP keeps triaging alerts</strong><br><small>Tenant</small><br><small class="controls__note">The ellipses (three dots) sit next to Edit agent. Learn says deactivating stops triage but does not remove the agent.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Agents › Explore agents › Go to agent › ellipses › Deactivate agent <a href="https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can deploy, configure and view results of the agent, through role group membership</strong><br><small>User</small><br><small class="controls__note">Roles are listed on the Triage Agent get-started page. The cmdlet is in the Exchange PowerShell reference; the eDiscovery permissions page runs it in Security &amp; Compliance PowerShell for a Purview role group.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Security compute unit consumption by the agent</strong><br><small>Tenant</small><br><small class="controls__note">Shows consumption only. It links to the Security Copilot usage monitoring tool; capacity itself is changed in Security Copilot or Azure.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Agents › Explore agents › View agent › Edit agent › Usage monitoring <a href="https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Deployment, editing, deactivation and removal are Purview-portal actions even where the agent was deployed from Defender XDR, so an analyst working only in Defender XDR cannot change or stop it. Microsoft Learn documents no PowerShell, Graph or other API for deploying, configuring or deactivating the agent, or for reading its usage, at the time of writing (November 2026).

The role groups row governs who can deploy, configure and view results; the roles are listed in Scope. The Teams app setting for remediation reminders is covered on its own Learn page, linked in Scope. Existing DLP policy actions are unchanged by the agent, per MC1255406, so nothing here replaces them. Capacity and overage SCUs are changed in the Security Copilot and Azure portals, as the Security Copilot usage page describes.

## Open questions

- Is the Defender XDR experience in preview or generally available today? The roadmap lists it as In development with an August CY2027 target while Learn already describes it. Watch MC1255406 and the roadmap item.
- How many SCUs does triaging one DLP alert consume, and what happens to triage when SCUs run out? Watch the Triage Agent get-started page and the Security Copilot SCU pages.
- Will licensing or SCU inclusion change when general availability arrives or when throttling of E5/E7 inclusion usage begins? Watch Message center and the Security Copilot inclusion page.
- Which Defender XDR permissions, if any, apply on top of the Purview roles for viewing the agent's output? Watch the Learn page's permissions tables.

<!-- rationale
risk: Medium. Once deployed, an AI agent reads the content of files behind DLP alerts and runs under an agent identity, and an analyst can deploy it from a Defender XDR alert page; existing role and DLP controls mostly cover this.
cost: Variable. The agent consumes Security Copilot security compute units (SCUs) as it triages alerts, on top of the Microsoft DLP licence; a per-alert SCU rate is not yet published.
impact: Low. Security analysts and admins who triage DLP alerts notice it; Microsoft's notice MC1255406 says there is no impact to users.
-->

<!-- verifier-findings (2026-11-19, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Why it matters / cost: Deployment is the point where spend starts. | Found: With the inclusion model, which provides 400 SCUs per 1,000 user licenses, there's no hourly provisioned capacity. Instead, the same two scenarios would deduct 3.5 SCUs from the monthly SCU allocation. | Fix: Replace 'deployment is the point where spend starts (SCUs are consumed as alerts are triaged)' with 'the agent consumes SCUs as it triages alerts'. Consumption can use included capacity, and the cited Purview billing page separately says provisioned SCUs are billed in hourly blocks; deployment is not a universal billing start. | Source: https://learn.microsoft.com/copilot/security/security-copilot-inclusion
- [contradicted, blocker] Risk assessment: Autonomy & actions / behaviour: Once deployed, the agent runs on a Microsoft-set schedule. | Found: Choose to Run automatically based on a set schedule. If you don't choose this option, you must run the agent manually one at a time. Microsoft sets the schedule and it isn't configurable by organizations. | Fix: Replace 'The agent runs on a Microsoft-set schedule once deployed' with 'When configured to run automatically, the agent uses a Microsoft-set schedule; it can instead be run manually on one alert at a time'. The get-started page documents both modes. | Source: https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started
- [contradicted, blocker] Risk assessment: Autonomy & actions / applicability: Remediation reminders send a Teams chat for a file behind a Needs attention alert, without limiting this statement to SharePoint and OneDrive alerts. | Found: For Sharepoint/OneDrive alerts triaged as Needs Attention, the agent sends a Microsoft Teams chat to the last modified user of the file | Fix: Replace 'of a file behind a Needs attention alert' with 'of a file behind a SharePoint or OneDrive alert categorized as Needs attention and included in the agent's remediation policy scope'. The same page requires remediation policies to be a subset of policies defined for triage. | Source: https://learn.microsoft.com/purview/copilot-in-purview-triage-dlp-agent-get-started
- [contradicted, blocker] Governance controls: first prose paragraph / consistency: Deployment is a Purview-portal action even where the agent was deployed from Defender XDR. | Found: What's changing: 'the agent can be deployed from either portal'; Governance controls: 'Deployment, editing, deactivation and removal are Purview-portal actions even where the agent was deployed from Defender XDR'. | Fix: Remove 'Deployment, ' and capitalize 'Editing' so the sentence begins 'Editing, deactivation and removal are Purview-portal actions even where the agent was deployed from Defender XDR'. This agrees with the get-started page and the briefing's deployment guidance.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[2].ui; Governance controls / admin-path: Purview role-group membership is managed through Settings > Roles and scopes > Role groups. | Found: Go to Settings > Roles and scopes to view and manage compliance and governance roles in your organization. 2. Select Role groups. | Fix: The path stops on the correct list page. Extend controls[2].ui.path and the rendered table to 'Settings > Roles and scopes > Role groups > role group > Edit > Choose users' for adding individual users, as documented at https://learn.microsoft.com/purview/purview-permissions. | Source: https://learn.microsoft.com/purview/purview-permissions
- [supported, minor] controls[2].note; Governance controls / command: The eDiscovery permissions page documents use of Add-RoleGroupMember in Security & Compliance PowerShell for a Purview role group. | Found: You can add a mail-enabled security group as a member of the eDiscovery Managers subgroup in the eDiscovery Manager role group by using the Add-RoleGroupMember cmdlet in Security & Compliance PowerShell. | Fix: Add https://learn.microsoft.com/purview/edisc-permissions to sources; the row explicitly relies on that page for the Security & Compliance PowerShell context but does not cite it. | Source: https://learn.microsoft.com/purview/edisc-permissions
- [contradicted, minor] Governance guidance: Before rollout and At rollout; Governance controls / consistency: Every control the governance checklist asks readers to check or decide has a corresponding controls-table row. | Found: Checklist: 'has Microsoft 365 data sharing enabled', 'Decide which identity the agent uses', 'evidence collection is enabled', 'Teams app permissions have been reviewed'. Table: agent configuration, deactivation, role membership, and usage monitoring. | Fix: The checklist's Microsoft 365 data-sharing check, identity choice, device evidence-collection check and Teams app-permission review have no dedicated table rows. Retain the existing links and prerequisite advice; do not add control rows as part of this correction.
-->
