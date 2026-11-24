---
title: "Microsoft Entra: Security Copilot agent for private application lifecycle management"
slug: "microsoft-entra-microsoft-security-copilot-app-lifecycle-management-agent-in-microsoft-ent"
roadmapId: 536578
topic: "governance"
products: ["Microsoft Entra"]
summary: "Microsoft plans a Security Copilot agent in Microsoft Entra that finds unmanaged private apps, onboards them and flags unused privileged ones. It is in development, and its default and charges are not stated."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "July CY2026"
previewDate: "December CY2025"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "consumption"
  notes: "Learn's Microsoft Entra agents page lists available security compute units (SCUs) as a prerequisite and does not list this agent. SCU consumption by this agent is not yet published."
audiences: ["security","m365-admin","finops"]
tags: ["entra-id","security-copilot","agents","global-secure-access","least-privilege","lifecycle"]
sources:
  - title: "Microsoft Entra agents"
    url: "https://learn.microsoft.com/entra/security-copilot/entra-agents"
    kind: "learn"
  - title: "Application discovery for Global Secure Access"
    url: "https://learn.microsoft.com/entra/global-secure-access/how-to-application-discovery"
    kind: "learn"
  - title: "Microsoft Security Copilot Security Compute Units and capacity"
    url: "https://learn.microsoft.com/copilot/security/security-compute-units-capacity"
    kind: "learn"
  - title: "Manage security compute unit usage in Security Copilot"
    url: "https://learn.microsoft.com/copilot/security/manage-usage"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 536578"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=536578"
    kind: "roadmap"
videos: []
related: []
controls:
  - governs: "Whether and how a Microsoft Entra agent is turned on and configured"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Agents > View details"
      docs: "https://learn.microsoft.com/entra/security-copilot/entra-agents"
    api: null
    note: "The page does not list this agent. Roles differ by agent. Microsoft Learn documents no API for turning on Entra agents at the time of writing (November 2026)."
  - governs: "Security Compute Units (provisioned and overage) that Security Copilot agents consume"
    scope: "tenant"
    ui:
      surface: "Security Copilot"
      path: "Home menu > Owner settings > Security compute units"
      docs: "https://learn.microsoft.com/copilot/security/manage-usage"
    api: null
    note: "Role: Azure capacity owner or contributor who is also a Security Copilot owner. General Security Copilot spend control, not specific to this agent. Learn documents no API for it at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-02-12T00:15:53"
changes:
  - date: "2026-11-24"
    note: "First briefing: Microsoft's planned Entra agent for private app lifecycle management, documented only on the roadmap so far."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 71 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 71
  confirmed: 66
  unconfirmed: 0
  contradicted: 5
  attempts: 1
  hash: "59a874dc23837836aafa10147ef96fcf"
---

## What's changing

Microsoft plans an Application Lifecycle Management Agent for Microsoft Entra that runs through Microsoft Security Copilot. The roadmap item says it discovers unmanaged private apps from Global Secure Access telemetry, recommends onboarding them to Microsoft Entra and sets them up with automated naming, tagging and least-privilege scoping. It then monitors app usage and permissions, flags unused high-privileged apps and notifies owners through Teams or email. From that data it suggests a phased disablement plan that administrators can adjust to their risk priorities.

Microsoft Learn does not yet describe this agent: its page for [Microsoft Entra agents](https://learn.microsoft.com/entra/security-copilot/entra-agents) lists the Conditional Access Optimization Agent and the Identity Risk Management Agent (Preview) and says agents are released at various stages of availability. What follows about this agent's behaviour is the roadmap's description. Statements about Entra agents in general come from that page and have not been confirmed for this agent.

The manual route that exists today is Global Secure Access application discovery. Its Learn page says it shows application segments that users accessed through Quick Access in the last 30 days, offers an Entra recommendation to onboard discovered segments, and lets an administrator create an application from them. The page says new applications created this way inherit all assigned users and groups from Quick Access at creation, and that the rescoping to least privilege is the administrator's step afterwards. Whether the agent follows that behaviour is not stated.

The roadmap item is In development, with a preview target of December CY2025 and a general availability target of July CY2026, and lists release phases General Availability and Preview. The roadmap item lists Worldwide (Standard Multi-Tenant) and Web only. Those targets are Microsoft's plan, and the July CY2026 target has passed while the status remains In development.

## Why it matters

This agent would take over the work of deciding which private apps to bring under Entra management and which privileged apps to retire. That puts an automated process into decisions about access, so the service owner should decide who may switch it on and who approves what it proposes before it appears in the tenant.

Microsoft has not stated whether this agent is on or off on arrival, so no source says existing behaviour changes. The sensible position is to treat it as an opt-in capability to evaluate, and to check the Agents page in the Microsoft Entra admin center for it, because Learn says an agent identity is created when an Entra agent is turned on.

## Risk assessment

**Data exposure**
- The roadmap item says the agent reads Global Secure Access telemetry and monitors app usage and permissions. Which tables or logs it reads is not stated; confirm this before turning it on. Learn says Entra agents use the organisation's identity data and configuration.

**Security & identity**
- Learn says each Entra agent gets a unique agent identity when turned on, with specific read and write permissions that "can't be changed or removed". The permission list for this agent is not yet published, so review it when it is.
- The roadmap item says the agent recommends onboarding apps to Microsoft Entra and handles the setup. For the manual application discovery route, Learn says the new application inherits all assigned users and groups from Quick Access at creation, so wide access can carry over until someone rescopes it.

**Autonomy & actions**
- The roadmap item says the agent sets up apps with automated naming, tagging and least-privilege scoping, and proposes a phased disablement plan. Learn says Entra agents can run automatically or be triggered manually; whether this agent can disable apps on its own is not stated.

**Change & support**
- Owners of flagged apps would be notified through Teams or email, so expect questions to the helpdesk about notices.

## Cost and licensing

Learn's Microsoft Entra agents page says that to use Entra agents you must have available security compute units (SCUs), and that buying SCUs needs an Azure subscription. It lists the Conditional Access Optimization Agent as needing Microsoft Entra ID P1 and the Identity Risk Management Agent as needing Microsoft Entra Agent ID; it names no licence for this agent.

The Security Copilot capacity page says you consume SCUs when invoking Security Copilot through Microsoft-developed agents. For Microsoft 365 E5 customers who are eligible and onboarded, Security Copilot is auto provisioned with a default capacity, and other customers purchase SCUs by provisioning them. Provisioned capacity is billed per hour, and overage capacity is billed on usage and can be set to a maximum or unlimited. For provisioned capacity, the page says that if the SCUs run out, Security Copilot requests stop unless another capacity type is available.

The usage page says generally available and public preview capabilities are charged and private preview ones are not. How many SCUs this agent consumes per run is not yet published. Use the Security Copilot usage monitoring dashboard to watch consumption once the agent is in use.

## Scope

The roadmap item lists Worldwide (Standard Multi-Tenant) and the Web platform, and no US Government clouds. Learn's Entra agents page says administrators need specific Microsoft Entra built-in roles to turn on, view and use an agent, and the roles differ by agent; the roles for this agent are not yet published.

The page also lists available SCUs and Security Copilot being enabled as setup steps for Entra agents. The roadmap item says discovery relies on Global Secure Access telemetry; Learn's application discovery page requires a tenant onboarded to Microsoft Entra Private Access, configured with Quick Access, and a device with the Global Secure Access client, and says the discovery page shows no data without Quick Access traffic. Whether the agent has the same prerequisites is not stated.

## Governance guidance

### Before rollout
- Confirm with your Security Copilot owner whether SCU capacity is provisioned or comes from the Microsoft 365 E5 default capacity, and whether overage is set to a maximum.
- Check whether Global Secure Access with Quick Access is configured in the tenant, since the manual application discovery page shows no data without Quick Access traffic.
- Decide which Microsoft Entra roles may turn on the agent and which approve its suggestions, once Microsoft publishes the roles for it.

### At rollout
- Look for the agent under Agents in the Microsoft Entra admin center, and open View details before turning anything on.
- Review the permissions listed for the agent identity before turning it on, because Learn says they can't be changed or removed.
- Rescope the users and groups on any application the agent or application discovery creates, as the discovery page tells administrators to do after validating the new app.

### After rollout
- Watch SCU consumption on the Security Copilot usage monitoring dashboard.
- Review the agent's disablement suggestions against your own owner and business-impact list before approving any.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether and how a Microsoft Entra agent is turned on and configured</strong><br><small>Tenant</small><br><small class="controls__note">The page does not list this agent. Roles differ by agent. Microsoft Learn documents no API for turning on Entra agents at the time of writing (November 2026).</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Agents › View details <a href="https://learn.microsoft.com/entra/security-copilot/entra-agents" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Security Compute Units (provisioned and overage) that Security Copilot agents consume</strong><br><small>Tenant</small><br><small class="controls__note">Role: Azure capacity owner or contributor who is also a Security Copilot owner. General Security Copilot spend control, not specific to this agent. Learn documents no API for it at the time of writing (November 2026).</small></td><td data-label="Admin UI"><strong>Security Copilot</strong><br>Home menu › Owner settings › Security compute units <a href="https://learn.microsoft.com/copilot/security/manage-usage" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The Entra agents page documents agent setup under Agents and says specific Microsoft Entra roles are needed; this agent is not named there, so confirm it appears on that page before relying on the row. The SCU row is a spend control for Security Copilot in general: it governs capacity, not this agent alone.

The documented capacity change roles are Azure capacity owner or contributor, who are also Security Copilot owners for changes in the Security Copilot portal.

## Open questions

- Is the Application Lifecycle Management Agent on or off when it arrives, and who can turn it on? Watch the Microsoft Entra agents page on Learn and Message center.
- Which Microsoft Entra roles and Microsoft Graph permissions does the agent identity need, and can administrators narrow them?
- Can the agent disable or delete apps itself, or does it only suggest a plan that an administrator carries out?
- How many SCUs does a run use, and does the agent need Microsoft Entra Private Access or Quick Access beyond Global Secure Access telemetry?
- When will the roadmap's July CY2026 target be updated, given the item is still In development?

<!-- rationale
risk: Medium. The roadmap describes an agent that sets up apps with its own naming and scoping and notifies owners, and Learn says Entra agents' permissions cannot be changed; its default state is not stated.
cost: Variable. Learn lists available Security Compute Units (SCUs) as a prerequisite for Microsoft Entra agents; no SCU rate or licence for this agent is published.
impact: Low. Administrators configure and use the agent; app owners would also get Teams or email notices if the roadmap description holds.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What's changing: manual application discovery paragraph / availability: Manual application discovery offers an Entra recommendation to onboard discovered segments, without a regional qualification. | Found: Select the recommendation for Application discovery: Onboard new discovered application segments to enterprise applications. ... This feature is currently unavailable in Australia and Africa. | Fix: Add immediately after the recommendation statement: 'The Application discovery recommendation is currently unavailable in Australia and Africa.' Keep this qualification about the manual recommendation, not the planned agent. Source: https://learn.microsoft.com/entra/global-secure-access/how-to-application-discovery. | Source: https://learn.microsoft.com/entra/global-secure-access/how-to-application-discovery
- [contradicted, blocker] Cost and licensing: other customers purchase SCUs / licensing: Customers other than eligible and onboarded Microsoft 365 E5 customers must purchase SCUs by provisioning them. | Found: Default Security Copilot Capacity is the automatically created inclusion capacity that appears in your tenant when Security Copilot inclusion is enabled through Microsoft 365 E5 and E7. | Fix: Replace the E5/other-customers sentence with: 'When Security Copilot inclusion is enabled through Microsoft 365 E5 or E7, a default inclusion capacity is created automatically; non-Microsoft 365 E5 and E7 customers must provision capacity.' Use https://learn.microsoft.com/copilot/security/security-compute-units-capacity. In Before rollout, change 'Microsoft 365 E5 default capacity' to 'Microsoft 365 E5 or E7 default inclusion capacity'. | Source: https://learn.microsoft.com/copilot/security/security-compute-units-capacity
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance controls table / admin-path: Security Copilot > Home menu > Owner settings > Security compute units is the capacity-control route. | Found: go to the Home menu > Owner settings. ... Through the owner settings page: Under Security compute units or Number of overage units, select Change. | Fix: Complete controls[1].ui.path as 'Home menu > Owner settings > Security compute units > Change'. In its note add: 'For overage, under Number of overage units select Change.' The current path stops on the correct page but before the action; both labels are documented at https://learn.microsoft.com/copilot/security/manage-usage. | Source: https://learn.microsoft.com/copilot/security/manage-usage
- [supported, minor] summary: its default and charges are not stated / absence: Charges specific to this agent are not stated. | Found: Searched: Application Lifecycle Management Agent SCU license; App Lifecycle Management Agent licensing permissions default. Read SCU capacity and manage-usage: no agent-specific per-run amount, but general SCU consumption and GA/public-preview charging are stated. | Fix: Replace 'its default and charges are not stated' with 'its default and per-run SCU consumption are not stated'. This preserves the narrow confirmed gap without suggesting that Security Copilot's general charging rules are unpublished.
- [supported, minor] Governance guidance: At rollout, rescope applications / behaviour: Microsoft advises rescoping discovery-created applications after validation, and the checklist extends that advice to agent-created applications. | Found: new applications you create through application discovery inherit all assigned users and groups from Quick Access at creation. After you validate the new application, rescope the application's permissions | Fix: Replace the checklist bullet with: 'Rescope the users and groups on applications created through application discovery after validation, as its Learn page advises. For agent-created applications, review whether their assignments match your intended access scope.' The second sentence is the wiki's advice, not an attribution to Microsoft's manual-discovery guidance. | Source: https://learn.microsoft.com/entra/global-secure-access/how-to-application-discovery
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: The checklist's instruction to check Quick Access configuration has a corresponding control row. | Found: Check whether Global Secure Access with Quick Access is configured in the tenant ... Table rows: Whether and how a Microsoft Entra agent is turned on and configured; Security Compute Units (provisioned and overage) | Fix: The Quick Access configuration check has no table row. Remove that checklist bullet; retain the documented Quick Access prerequisite and empty-discovery explanation in Scope. Do not add a control row during this correction.
- [contradicted, minor] Governance guidance: At rollout; Governance controls table / consistency: The checklist's instruction to rescope application user and group assignments has a corresponding control row. | Found: Rescope the users and groups on any application the agent or application discovery creates ... Table rows cover Entra agent configuration and SCU capacity only. | Fix: The application-assignment checklist step has no table row. Remove that bullet from the checklist and retain any corrected, narrowly attributed rescoping advice in the existing manual-discovery paragraph. Do not add a control row.
- [contradicted, minor] Governance guidance: After rollout; Governance controls table / consistency: The checklist's instruction to watch the usage monitoring dashboard has a corresponding monitoring control row. | Found: Watch SCU consumption on the Security Copilot usage monitoring dashboard. ... SCU row path: Home menu > Owner settings > Security compute units. | Fix: The usage-monitoring checklist step has no corresponding monitoring row; the existing SCU row changes capacity. Remove the dashboard bullet from the checklist and retain the dashboard advice in Cost and licensing. Do not add a row.
-->
