---
title: "Dynamics 365 Contact Center: agentic simulations test your contact center with AI-generated calls"
slug: "dynamics-365-contact-center-copilot-and-ai-innovation-use-agentic-simulations-to-evaluate"
roadmapId: 576636
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","Dynamics 365 Contact Center"]
summary: "Preview of voice-call simulations that run natural-language scenarios through your contact center setup. Admins launch them, and each run consumes Copilot Studio AI credits. Review who may run them and watch the credits."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2027"
previewDate: "July CY2026"
risk: "low"
cost: "variable"
impact: "low"
defaultState: "on"
action: "review"
licensing:
  model: "consumption"
  notes: "The Learn page meters each simulation in Microsoft Copilot Studio AI credits (about 40 for three minutes) and lists roles, the voice channel and a simulation phone number as prerequisites, with no licence named. A credit rate for general availability is not yet published."
audiences: ["service-owner","power-platform-admin","finops"]
tags: ["contact-center","dynamics-365","ai","agent-evaluation","copilot-credits","security-roles","unified-routing"]
sources:
  - title: "Microsoft 365 Roadmap 576636"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576636"
    kind: "roadmap"
  - title: "Use AI-generated conversations for agentic simulations (preview)"
    url: "https://learn.microsoft.com/dynamics365/contact-center/administer/configure-simulation-agent"
    kind: "learn"
  - title: "Use Service Operations Agent"
    url: "https://learn.microsoft.com/dynamics365/contact-center/administer/use-service-operations-agent"
    kind: "learn"
  - title: "Manage Copilot Credits and capacity for Copilot Studio"
    url: "https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-messages-capacity"
    kind: "learn"
  - title: "Assign a security role to a user"
    url: "https://learn.microsoft.com/power-platform/admin/assign-security-roles"
    kind: "learn"
  - title: "Tutorial: Download Copilot Credit usage reports programmatically (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-download-copilot-credit-usage-reports"
    kind: "learn"
  - title: "Which users hold the roles Learn lists as prerequisites for running simulations (REST API)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/aad-group-team"
    kind: "learn"
  - title: "Copilot Studio credits consumed by simulations, per environment (Power Platform API)"
    url: "https://learn.microsoft.com/rest/api/power-platform/copilotstudio/licensing-reports/generate-licensing-report"
    kind: "learn"
videos: []
related: ["dynamics-365-contact-center-administrator-experiences-use-service-operations-agent-to-acce","dynamics-365-contact-center-unified-routing-orchestrate-conversation-distribution-with-nat","copilot-credits","security-roles"]
controls:
  - governs: "Which users hold the roles Learn lists as prerequisites for running simulations"
    scope: "user"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Users + permissions > Users > user > Manage security roles"
      docs: "https://learn.microsoft.com/power-platform/admin/assign-security-roles"
    api:
      kind: "rest"
      call: "POST [Organization URI]/api/data/v9.0/systemusers(azureactivedirectoryobjectid=<user object ID>)/systemuserroles_association/$ref"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/aad-group-team"
    note: "Prerequisites are System administrator and Omnichannel administrator. The API page prints the request for a Microsoft Entra ID group user; the body names the role."
  - governs: "Copilot Studio credits consumed by simulations, per environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Products > Copilot Studio > Environments > environment"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-messages-capacity"
    api:
      kind: "power-platform-api"
      call: "POST https://api.powerplatform.com/copilotstudio/licensing/reports/{ReportName}?api-version=2024-10-01"
      docs: "https://learn.microsoft.com/rest/api/power-platform/copilotstudio/licensing-reports/generate-licensing-report"
    note: "Monitoring only; it does not limit use. The API is preview and needs the Global, Dynamics 365 or Power Platform administrator role."
  - governs: "Tenant or environment switch to turn agentic simulations off"
    scope: "other"
    ui: null
    api: null
    note: "Not yet documented. The documented gates are the two prerequisite roles, the voice channel and a simulation phone number."
confidence: "high"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-10-16T17:39:48"
changes:
  - date: "2026-11-20"
    note: "First briefing: documents the preview voice-call simulations, their Copilot Studio credit meter, roles and limits, and the absence of a documented off switch."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 58 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-20"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 58
  confirmed: 58
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "10cf19ce3531a220d38d2601aa7be120"
---

## What's changing

Agentic simulations let an administrator describe a test scenario in plain language and have an AI generate synthetic voice calls that run end to end through the configured Dynamics 365 Contact Center. The roadmap item describes it as a capability of Service Operations Agent that generates conversations, runs them through AI agents, routing and configuration, and calculates contact center KPIs, with dashboards, scorecards and reusable saved prompts.

The Learn page documents it as a preview. In the Copilot Service admin center, an administrator selects **Launch** on the **Agentic Simulation** tile on the Home page, then enters a prompt or picks one from the prompt library (suggested, saved and recent prompts). Results appear on the **Simulation Run History** page, the calls show in the **Ongoing conversation** report while they run, and transcripts and recordings are viewable in the closed conversation form. The simulation prompt must include a phone number configured for simulation.

Learn states the limits for the preview: inbound workstreams of the voice channel only, English only, no DTMF (dual-tone multi-frequency, keypad menu) functionality, up to five conversations per prompt, up to two concurrent call conversations, calls of at most five minutes once accepted, and one simulation at a time in one org. The roadmap item gives the same voice, English, DTMF and five-conversation limits.

The roadmap record gives status In development, a preview date of July CY2026 and a target date of June CY2027, in the General Availability and Preview release phases for Worldwide (Standard Multi-Tenant) on the web. These are Microsoft's targets. The roadmap description says the feature is enabled for admins, makers and marketers automatically.

## Why it matters

For a service owner this is a way to test routing, assignment and AI agent setup before real customers arrive, but it is not free to run: Learn says each three-minute simulation consumes about 40 Microsoft Copilot Studio AI credits, and the figure varies with the speed and complexity of the dialogues. Finance owners should expect a new line, D365 Contact Center Agentic Simulation, in Copilot Studio consumption data.

The roadmap says the capability is enabled automatically, but Learn's prerequisites mean it does nothing until someone with the System administrator and Omnichannel administrator roles, a provisioned voice channel and a simulation phone number launches it. Treat it as an optional tool to review, and decide who may use it before it reaches general availability.

## Risk assessment

**Data exposure**

- Simulations produce transcripts and recordings viewable in the closed conversation form, per Learn, so synthetic calls add records to the environment. Microsoft Learn does not describe how long they are retained or whether they can be separated from real conversations in reports; this is an open question.

**Security & identity**

- Learn lists System administrator and Omnichannel administrator as the prerequisite roles. Both are high-trust Dataverse roles, so access to simulations follows who holds them; see [Dataverse security roles](/concepts/security-roles/).

**Autonomy & actions**

- Each simulation places AI-generated calls into the configured contact center and consumes credits. Learn bounds a run: up to five conversations per prompt, two concurrent calls, five-minute accepted calls, unaccepted calls ending after five minutes, and one simulation at a time per org.
- Learn says that for a realistic simulation you should configure representatives and routing rules to handle the simulated calls. Confirm before the first run whether simulated calls can ring real representatives in a production queue.

**Change & support**

- The page is prerelease documentation and "subject to change"; the roadmap item is still In development. Do not treat the preview limits as the final design.
- Voice only, English only and no DTMF menus mean flows that use keypad menus cannot be simulated, which a test report should not be read as covering.

## Cost and licensing

The Learn page meters simulations in Microsoft Copilot Studio AI credits: "Each simulation of three minutes consumes about 40 Microsoft Copilot Studio AI credits", varying with dialogue speed or complexity. The consumption appears under the entry **D365 Contact Center Agentic Simulation** in the Power Platform admin center. The page lists System administrator and Omnichannel administrator, a provisioned voice channel and a simulation phone number as prerequisites, and names no licence.

Using the page's own figure, five three-minute simulated conversations would be on the order of 200 credits if each consumed about 40; this is an illustration, since Learn gives the figure per three-minute simulation and says it varies.

Not yet published: a credit rate for general availability, and which funding route (prepaid capacity or a pay-as-you-go plan) the simulation page expects. Service Operations Agent's own page requires a pay-as-you-go plan for that agent, and the simulation page does not repeat that prerequisite. Indirect costs are administrator time and the representatives' time spent on simulated calls.

## Scope

**Who and where.** Administrators with the System administrator and Omnichannel administrator roles run simulations from the Copilot Service admin center. The roadmap record lists Worldwide (Standard Multi-Tenant) and the web platform; it lists no US Government clouds, which is a record fact, not a statement that the feature is unavailable there.

**Rollout.** The roadmap status is In development, with a preview date of July CY2026 and a target date of June CY2027. Learn documents the feature as a preview limited to inbound workstreams of the voice channel.

**Prerequisites.** The voice channel provisioned, and a phone number configured for simulation. The administrator supplies the number associated with the target workstream in the prompt, and the caller number of the simulated call is a default number for each region, per Learn.

## Governance guidance

### Before rollout

- Identify who holds the System administrator and Omnichannel administrator roles in each Contact Center environment, and remove them from anyone who should not launch simulations.
- Name a finance owner for Copilot Studio credit consumption and agree a per-run budget using the page's figure of about 40 credits per three-minute simulation.
- Decide which environment runs the first simulation, and confirm the voice channel is provisioned and a simulation phone number is configured there.

### At rollout

- Launch the **Agentic Simulation** tile in a non-production environment first and keep the prompt to a few conversations.
- Check which representatives and queues receive the simulated calls before running, because Learn says simulations need representatives and routing rules set up to handle them.
- Tell supervisors that simulated calls appear in the **Ongoing conversation** report while a run is in progress.

### After rollout

- Review **Simulation Run History** and the transcripts and recordings in the closed conversation form for each run.
- Check the **D365 Contact Center Agentic Simulation** entry in Copilot Studio consumption data in the Power Platform admin center after the first runs.
- Re-read the Learn page when the feature reaches general availability, since the preview limits may change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold the roles Learn lists as prerequisites for running simulations</strong><br><small>User</small><br><small class="controls__note">Prerequisites are System administrator and Omnichannel administrator. The API page prints the request for a Microsoft Entra ID group user; the body names the role.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Users + permissions › Users › user › Manage security roles <a href="https://learn.microsoft.com/power-platform/admin/assign-security-roles" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST [Organization URI]/api/data/v9.0/systemusers(azureactivedirectoryobjectid=&lt;user object ID&gt;)/systemuserroles_association/$ref</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/aad-group-team" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Copilot Studio credits consumed by simulations, per environment</strong><br><small>Environment</small><br><small class="controls__note">Monitoring only; it does not limit use. The API is preview and needs the Global, Dynamics 365 or Power Platform administrator role.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Products › Copilot Studio › Environments › environment <a href="https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-messages-capacity" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>POST https://api.powerplatform.com/copilotstudio/licensing/reports/{ReportName}?api-version=2024-10-01</code> <a href="https://learn.microsoft.com/rest/api/power-platform/copilotstudio/licensing-reports/generate-licensing-report" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant or environment switch to turn agentic simulations off</strong><br><small class="controls__note">Not yet documented. The documented gates are the two prerequisite roles, the voice channel and a simulation phone number.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Learn documents the roles as prerequisites rather than as a switch: access follows who holds System administrator and Omnichannel administrator. Role assignment needs the privileges described on the assign-security-roles page, and the Dataverse call shown is the page's example for a Microsoft Entra ID group user.

Consumption is visible in the Power Platform admin center; the preview usage-report API is a way to download the same Copilot Credit consumption data programmatically, and needs the Global, Dynamics 365 or Power Platform administrator role. This page does not document a limit or budget for the simulation entry itself. Microsoft Learn documents no setting that turns agentic simulations off at the time of writing (November 2026).

## Open questions

- Does a simulation draw on prepaid Copilot Studio capacity, a pay-as-you-go plan, or both, and what happens when credits run out? The simulation page names the credit meter only. Watch the Learn page and the Copilot Studio capacity page.
- Is there a tenant or environment setting to turn agentic simulations off, other than withholding the two prerequisite roles? Watch the Learn page.
- Can simulated calls ring real representatives in a production queue, and how are simulated conversations told apart from real ones in reports and retention?
- What will change between the preview and general availability in June CY2027: the voice-only, English-only and five-conversation limits, and the credits per simulation? Watch the roadmap item and Message center.

<!-- rationale
risk: Low. Learn documents it as an admin-launched preview limited to five conversations per prompt, two at a time and one simulation at a time per org, so exposure stays inside existing contact center data.
cost: Variable. Learn says each three-minute simulation consumes about 40 Microsoft Copilot Studio AI credits, so spend follows how often admins run simulations; no separate licence is named.
impact: Low. Only administrators holding the System administrator and Omnichannel administrator roles run simulations; representatives notice only if simulated calls reach their queues.
-->

<!-- verifier-findings (2026-11-20, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: targetDate; What's changing; Scope; Open questions / record: General availability is targeted for June CY2027, although Open questions calls it general availability in June CY2027. | Found: "targetDate": "June CY2027", "status": "In development" | Fix: In the last Open questions bullet, replace 'general availability in June CY2027' with 'general availability targeted for June CY2027'.
- [supported, minor] Risk assessment: Security & identity / role: System administrator and Omnichannel administrator are high-trust roles. | Found: Omnichannel administrator: Required for performing administrator tasks; also requires the System Administrator role to manage user roles and privileges in Dynamics 365 Contact Center. | Fix: Add https://learn.microsoft.com/dynamics365/customer-service/implement/add-users-assign-roles to sources for the role-privilege assessment. | Source: https://learn.microsoft.com/dynamics365/customer-service/implement/add-users-assign-roles
- [supported, minor] controls[0].api; controls[0].note; Governance controls / command: The printed Dataverse v9.0 POST to systemuserroles_association/$ref assigns a role to the identified Microsoft Entra ID group user. | Found: POST [Organization URI]/api/data/v9.0/systemusers(azureactivedirectoryobjectid=<user object ID>)/systemuserroles_association/$ref Accept: application/json { "@odata.id":"[Organization URI]/api/data/v9.0/roles(<role ID>)" } | Fix: In controls[0].note, replace 'the body names the role' with 'the request body property @odata.id identifies the role'. Make the same change in the rendered table note. | Source: https://learn.microsoft.com/power-apps/developer/data-platform/aad-group-team
- [supported, minor] controls[1].ui; Governance controls / admin-path: Per-environment credit consumption is reached through Power Platform admin center > Licensing > Products > Copilot Studio > Environments > environment. | Found: View the Copilot Studio capacity consumed within that environment. The following cards are displayed on the Copilot Credits capacity tab: | Fix: Complete controls[1].ui.path and the rendered table path as 'Licensing > Products > Copilot Studio > Environments > environment > Copilot Credits capacity > Copilot credit consumption details'. The current route reaches the correct environment page but stops before its consumption grid. | Source: https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-messages-capacity
-->
