---
title: "Microsoft 365 Copilot: Employee Self-Service agent for HR and IT questions and tasks"
slug: "m365-copilot-employee-self-service-agent-in-m365-copilot"
roadmapId: 487836
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "The Employee Self-Service agent answers HR and IT policy questions and acts in systems such as Workday and ServiceNow. An admin must approve and deploy it before staff can use it, and usage is billed by licence or credits."
status: "launched"
releasePhase: ["General Availability","Preview","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Mobile","Web"]
targetDate: "November CY2025"
previewDate: "August CY2025"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn: with a Microsoft 365 Copilot licence, usage is included when the agent uses the employee's identity, with fair usage limits; without one it consumes Copilot Credits. Makers need Copilot Studio access."
audiences: ["m365-admin","service-owner","finops","maker"]
tags: ["employee-self-service","m365-copilot","copilot-chat","copilot-studio","declarative-agents","custom-engine-agents","copilot-credits","pay-as-you-go","write-actions","mobile"]
sources:
  - title: "Microsoft 365 Roadmap item 487836"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=487836"
    kind: "roadmap"
  - title: "Introduction to Employee Self-Service Declarative Agents"
    url: "https://learn.microsoft.com/copilot/employee-self-service/declarative-agent-overview"
    kind: "learn"
  - title: "Publish the Employee Self-Service declarative agent to your organization"
    url: "https://learn.microsoft.com/copilot/employee-self-service/declarative-agent-publish"
    kind: "learn"
  - title: "Publish the Employee Self-Service agent to your organization"
    url: "https://learn.microsoft.com/copilot/employee-self-service/publish"
    kind: "learn"
  - title: "Prerequisites to deploy the Employee Self-Service agent"
    url: "https://learn.microsoft.com/copilot/employee-self-service/prerequisites"
    kind: "learn"
  - title: "Monitor your Employee Self-Service declarative agent"
    url: "https://learn.microsoft.com/copilot/employee-self-service/declarative-agent-monitor-telemetry-feedback"
    kind: "learn"
  - title: "Auditing and logging"
    url: "https://learn.microsoft.com/copilot/employee-self-service/auditing-logging"
    kind: "learn"
  - title: "Whether the Employee Self-Service agent is available to any user in the organisation (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "Whether the Employee Self-Service agent is available to any user in the organisation (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Which users or groups can install or receive the approved Employee Self-Service declarative agent (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-update"
    kind: "learn"
videos: []
related: ["copilot-credits","microsoft-teams-unified-agent-and-app-availability-management-across-m365-and-teams-admin"]
controls:
  - governs: "Whether the Employee Self-Service agent is available to any user in the organisation"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Blocks the agent for the whole organisation. Graph call is beta, delegated only, and needs a Microsoft Agent 365 licence."
  - governs: "Which users or groups can install or receive the approved Employee Self-Service declarative agent"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > Requests > agent > Publish to store"
      docs: "https://learn.microsoft.com/copilot/employee-self-service/declarative-agent-publish"
    api:
      kind: "graph"
      call: "PATCH https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-update"
    note: "UI step selects the users or groups that can install the agent. The request body sets allowedUsersAndGroups and availableTo. Beta; needs a Microsoft Agent 365 licence."
confidence: "high"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-09-01T23:00:02"
changes:
  - date: "2026-11-21"
    note: "New briefing: documents both Employee Self-Service agent forms, the licence-dependent billing route, the admin approval and block controls, and the roadmap/Learn rollout difference."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 81 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 90 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 90
  confirmed: 89
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "a7074eda7e5e042dafe4f5bc38fc17c4"
---

## What's changing

The Employee Self-Service agent brings HR and IT help into Microsoft 365 Copilot. The roadmap item says it answers common workplace policy questions and takes action on key HR and IT tasks, connecting employees to authorised knowledge bases and HR/IT systems of record.

Microsoft Learn documents two forms of it. The Employee Self-Service declarative agents are prebuilt Copilot Studio templates (HR, IT and a Hub that brings agents together) that run inside Microsoft 365 Copilot and can use SharePoint and ServiceNow knowledge, preconfigured Workday scenarios and ServiceNow HRSD and ITSM actions, "including getting, creating, and updating cases". The earlier Employee Self-Service custom engine agent is published to the Microsoft Copilot channel and approved in the admin centre. The roadmap item does not say which form it covers, so this briefing describes both. Employees can reach the agent on mobile through the Microsoft Copilot app on iOS and Android.

The roadmap record gives the status as Launched, with a preview date of August CY2025 and a target date of November CY2025. The declarative agent overview on Learn still carries a note that access "is rolling out in waves" and tells organisations to work with their Microsoft account team to determine availability, so check availability for your tenant before planning. English is the only language Learn says has been formally validated.

## Why it matters

This is an agent that can touch HR and IT systems of record on behalf of employees, so the service owner decides who gets it, which systems it connects to and who pays. Learn documents that publishing from Copilot Studio only requests catalogue availability and that admin approval and audience assignment determine who can discover and use it, so nothing reaches staff until an administrator acts.

The cost route depends on each employee's licence: included for users with a Microsoft 365 Copilot licence, Copilot Credits for users without one. If you roll out to a mixed population, plan the billing set-up before the audience is widened.

## Risk assessment

**Data exposure**

- The agent can answer from SharePoint HR and IT content and ServiceNow knowledge articles. Learn says answers and citation links should respect each employee's source permissions, and that catalogue approval "doesn't grant access to restricted data". Test with ordinary employee accounts, not maker or admin accounts.
- Learn says the agent connects to Workday and ServiceNow. Confirm what employee data each connection exposes with the external-system administrators before widening the audience.

**Security & identity**

- Learn says the custom engine agent uses Microsoft Entra authentication by default and lets you choose "Authenticate manually" for another identity provider; the Microsoft Copilot channel is not available with options other than "Authenticate with Microsoft".
- On first use, employees might be prompted to consent to SSO-enabled Power Platform connectors. Learn says disabling that prompt is not a self-service setting and is requested through a support request in the Microsoft 365 admin center.

**Autonomy & actions**

- The declarative agents can create and update ServiceNow cases and run supported Workday workflows. These are write actions in HR and IT systems, so validate each enabled action in Test before it reaches Prod.
- Learn says declarative agent lifecycle management has no built-in approval flows and that rollback is not currently supported, so a faulty release is fixed by correcting Dev and promoting again.

**Change & support**

- Learn says the custom engine agent might appear in the Microsoft Teams app after publishing but is not supported in the standalone Teams experience. Redirect users to Copilot or block the agent in Teams.
- Learn says the agent may take more than 48 hours to publish; it gives a manifest-upload workaround.

## Cost and licensing

Learn's overview for the declarative agents states that employee usage is billed on the employee's licence. With a Microsoft 365 Copilot licence, usage is included when the agent uses the authenticated employee's identity, and fair usage limits and exclusions apply. Without one, usage consumes Copilot Credits, and the page says to configure pay-as-you-go billing or make Copilot Credit capacity available to the environment before enabling employee access. A single interaction can consume credits for more than one capability. See [Copilot Credits](/concepts/copilot-credits/) for the meter.

Makers need Copilot Studio access: a Microsoft 365 Copilot licence includes it, or a Copilot Studio User License can be assigned.

The prerequisites page for the custom engine agent says it includes the Workday, SAP SuccessFactors and ServiceNow premium connectors at no additional cost, and that you still need the appropriate licences for those third-party systems. It also says the agent uses agent flows, so Copilot Studio capacity must be set up, and that users without a Copilot licence are billed pay-as-you-go. Learn's billing rates page holds the current credit rates; this briefing quotes none.

## Scope

Users and licences: employees in the audience an administrator assigns; billing follows the employee's Microsoft 365 Copilot licence as described above. Makers and environment administrators need Copilot Studio access and roles in the Power Platform environment. The prerequisites page lists the Global admin role for assigning roles in the Microsoft admin center, and Power Platform administrator and maker roles for installing and configuring the agent.

Clouds and platforms: the roadmap record lists Worldwide (Standard Multi-Tenant) and the platforms Android, Desktop, iOS, Mobile and Web. Release phases on the record are General Availability, Preview and Targeted Release.

Rollout: Learn says the declarative agents are deployed through Copilot Studio, starting in a sandbox, and that the HR and IT starters "must be deployed one at a time". Learn describes Dev, Test and Prod as quality gates in the same Power Platform environment.

## Governance guidance

### Before rollout

- Confirm with your Microsoft account team that the Employee Self-Service agent is available to your tenant, because Learn says access is rolling out in waves.
- Decide which employees hold a Microsoft 365 Copilot licence and which will draw on Copilot Credits, and make pay-as-you-go billing or Copilot Credit capacity available to the environment before enabling access for the second group.
- Assign makers Copilot Studio access and the Power Platform environment roles listed on the prerequisites page.
- Agree with HR and IT owners which knowledge sources and which Workday and ServiceNow actions to enable, and test them with representative employee accounts.

### At rollout

- Approve the submitted agent in the Microsoft 365 admin center under Agents > All agents > Requests and assign a small pilot audience, as the controls table sets out.
- Check in Copilot Chat that pilot employees can find the agent, get working citations and complete only the actions you enabled.
- Redirect or block the custom engine agent in Teams if it appears there, since Learn says standalone Teams is not a supported surface.

### After rollout

- Review usage and feedback on the Monitor tab in Copilot Studio; for declarative agents, an administrator must allow feedback sharing in the Microsoft 365 admin center before reactions and comments appear.
- Search the Microsoft Purview audit log for employee interactions with the agent, which Learn lists as the audit route for the Employee Self-Service agent.
- Widen the audience only after the pilot meets your release criteria, and use the block control if you need to stop access.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Employee Self-Service agent is available to any user in the organisation</strong><br><small>Agent</small><br><small class="controls__note">Blocks the agent for the whole organisation. Graph call is beta, delegated only, and needs a Microsoft Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users or groups can install or receive the approved Employee Self-Service declarative agent</strong><br><small>Agent</small><br><small class="controls__note">UI step selects the users or groups that can install the agent. The request body sets allowedUsersAndGroups and availableTo. Beta; needs a Microsoft Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › Requests › agent › Publish to store <a href="https://learn.microsoft.com/copilot/employee-self-service/declarative-agent-publish" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Availability is decided in the Microsoft 365 admin center: the request approval and audience assignment, then the block action. Learn says blocking an agent built with Copilot Studio affects its availability and functionality in Microsoft Copilot and in other host products such as Outlook and Teams. For the custom engine agent, Learn also says you can block the agent in the Teams admin center, and that this "doesn't affect availability in Microsoft Copilot"; the Teams page is [Agent and app governance](https://learn.microsoft.com/microsoftteams/manage-apps#agent-and-app-governance).

The Graph calls are in the Package Management API, which is beta and which Learn says requires a Microsoft Agent 365 licence and delegated permissions. Whether a given Employee Self-Service agent appears as a package in your tenant is worth checking before scripting.

The agent feedback sharing setting (Agents > Settings > Agent feedback sharing) is described on the [declarative agent monitoring page](https://learn.microsoft.com/copilot/employee-self-service/declarative-agent-monitor-telemetry-feedback); Learn says feedback sharing is off by default. Spend is governed through the environment's pay-as-you-go plan or Copilot Credit capacity, described under [Copilot Credits](/concepts/copilot-credits/).

## Open questions

- Which form of the agent does roadmap item 487836 cover: the custom engine agent, the declarative agents, or both? Watch the roadmap item and the Employee Self-Service overview on Learn.
- When does the declarative agent's rollout in waves finish for your tenant, given the roadmap status is Launched? Ask your Microsoft account team and watch Message center.
- What fair usage limits and exclusions apply to employees with a Microsoft 365 Copilot licence? Watch the billing rates and management page on Learn.
- Which languages beyond English will Microsoft validate for Employee Self-Service scenarios?

<!-- rationale
risk: Medium. The agent can create and update ServiceNow cases and run Workday workflows for employees, but Learn documents admin approval, audience assignment and a block control before anyone can use it.
cost: Variable. Learn says usage is included for users with a Microsoft 365 Copilot licence, and consumes Copilot Credits (pay-as-you-go or capacity) for users without one.
impact: Medium. Employees in the audience you choose notice it, in Copilot Chat and the Microsoft Copilot mobile app; HR, IT and Copilot Studio makers do the set-up work.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing / behaviour: The custom engine agent is the earlier Employee Self-Service experience. | Found: This documentation applies to the Employee Self-Service Custom Engine Agent. If you're deploying the latest Employee Self-Service experience, see Employee Self-Service Declarative Agents. | Fix: Add https://learn.microsoft.com/copilot/employee-self-service/overview to sources for the description of the custom engine agent as the earlier experience. | Source: https://learn.microsoft.com/copilot/employee-self-service/overview
- [supported, minor] Cost and licensing; Open questions / cost: Microsoft's Billing rates and management page publishes current Copilot Credit rates and licensing exclusions. | Found: Classic answer | 1 Copilot Credit | No charge ... The "No charge" inclusion doesn't apply to agents powered by the Microsoft Copilot harness. Usage is limited to fair usage limits. | Fix: Link 'billing rates page' to https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management and add that URL to sources. No rates need to be added. | Source: https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management
- [supported, minor] Scope: Rollout / behaviour: Learn describes declarative agent deployment through Copilot Studio starting in a sandbox. | Found: Add the Employee Self-Service declarative agent package through Copilot Studio. We recommend starting in a sandbox environment | Fix: Replace the deployment clause with 'Learn says the declarative agents are deployed through Copilot Studio and recommends starting in a sandbox'; retain the separately supported one-at-a-time statement. | Source: https://learn.microsoft.com/copilot/employee-self-service/declarative-agent-overview
- [supported, minor] controls[1].ui; controls[1].note; Governance guidance: At rollout; Governance controls table / admin-path: The audience approval route is Microsoft 365 admin center > Agents > All agents > Requests > agent > Publish to store. | Found: Select Agents > All agents > Requests. ... Select the submitted Employee Self-Service agent. ... Select Publish to store to open the publishing wizard. ... Select the users or groups that can install the agent. | Fix: Keep the path and replace the note's first sentence with 'Publish to store opens the publishing wizard; in that wizard, select the users or groups that can install the agent.' Apply the same note change to the rendered controls table. | Source: https://learn.microsoft.com/copilot/employee-self-service/declarative-agent-publish
- [supported, minor] Governance controls: Availability / applicability: The custom engine publishing page says blocking the agent in Teams does not affect availability in Microsoft Copilot. | Found: Blocking the agent in Teams doesn't affect availability in Microsoft Copilot. Users can still access it via Copilot Business Chat. | Fix: After this statement add 'However, the Teams governance page says tenants migrated to unified app management can allow or block an agent in either admin center; confirm your tenant's management model before treating a Teams block as isolated from Copilot.' Cite https://learn.microsoft.com/microsoftteams/manage-apps#allow-or-block. | Source: https://learn.microsoft.com/copilot/employee-self-service/publish
- [contradicted, minor] Governance guidance; Governance controls table / consistency: The checklist's governance controls are not all represented by controls-table rows. | Found: Checklist: 'an administrator must allow feedback sharing in the Microsoft 365 admin center'; 'Search the Microsoft Purview audit log'. Table: only whole-organisation availability and approved-agent audience rows. | Fix: Flag that the checklist's billing/capacity, maker access and role assignment, Teams blocking, feedback sharing and Purview audit checks have no corresponding controls-table rows. Do not add rows in this correction.
-->
