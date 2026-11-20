---
title: "Dynamics 365 Sales: copy a Sales Development agent's configuration to another agent"
slug: "dynamics-365-sales-seller-experiences-clone-and-share-sales-development-agent-configuratio"
roadmapId: 576637
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","Dynamics 365 Sales"]
summary: "Managers will be able to export one Sales Development agent's playbook, guidelines and settings from Teams and import them into another agent. It is a one-time copy; knowledge sources are excluded. No admin switch is documented."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "April CY2027"
previewDate: "August CY2026"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "The Sales Development agent's activation page lists Microsoft 365, Microsoft 365 Copilot and Microsoft Teams licences as prerequisites and a $0 Agent 365 SKU with 25 agent instances. Nothing specific to the configuration copy is published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["sales-development-agent","dynamics-365","teams","agent-365","frontier-program","agents"]
sources:
  - title: "Microsoft 365 Roadmap 576637"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576637"
    kind: "roadmap"
  - title: "Copy configuration from one Sales Development agent to another (preview)"
    url: "https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/copy-configuration"
    kind: "learn"
  - title: "Activate Sales Development agent (preview)"
    url: "https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/activate-agent"
    kind: "learn"
  - title: "Onboard the Sales Development agent (preview)"
    url: "https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/onboard-agent"
    kind: "learn"
  - title: "copilotPackage: activate"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackageactivationresult-activate"
    kind: "learn"
  - title: "Audit log activities"
    url: "https://learn.microsoft.com/purview/audit-log-activities"
    kind: "learn"
  - title: "Sales Development agent architecture"
    url: "https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/architecture"
    kind: "learn"
  - title: "Microsoft 365 Resources for Agents"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-resources-for-agents"
    kind: "learn"
videos: []
related: ["m365-copilot-sales-development-agent-is-now-available","m365-copilot-sales-development-agent-meeting-scheduling","knowledge-grounding"]
controls:
  - governs: "Whether managers can export or import a Sales Development agent configuration"
    scope: "tenant"
    ui: null
    api: null
    note: "No tenant setting is documented at the time of writing (November 2026). The Learn page makes being a manager or owner of both agents the condition."
  - governs: "Which users or groups can create Sales Development agent instances"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All Agents > Sales Development (Frontier) > Activate"
      docs: "https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/activate-agent"
    api:
      kind: "graph"
      call: "POST /beta/copilot/admin/catalog/packages/{id}/activate"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackageactivationresult-activate"
    note: "AI Administrator or Global Administrator. Sets who can create instances, not who can copy a configuration. Beta request sets agentManagerScope, needs policyTemplateId; API needs an Agent 365 licence. Preview."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-10-16T17:39:50"
changes:
  - date: "2026-11-20"
    note: "New briefing on copying a Sales Development agent's configuration between agents; Learn documents the preview steps, and no admin switch is documented."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 52 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected after verification: added the Graph activation call for the instance-creation control, noted that shared knowledge content can reach people without access to it, and removed an 'only control' claim."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 61 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected after verification: cost is now variable, with the published Copilot Credits consumption billing for Sales Development agents, and the audit statement now notes general Agent 365 auditing."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 66 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-20"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 66
  confirmed: 66
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "c493e7b4b9c7f19c9d7e9168d90b8678"
---

## What's changing

Managers of Sales Development agents will be able to copy one agent's configuration into another. In Teams, the manager asks the source agent to package its configuration into a file, downloads it, then attaches it to a message to the target agent with a request to apply it. The Learn page says the file covers the playbook, guidelines and settings, and lists the persona and email footer, follow-up cadence and send-window settings, and default product and locale settings (if used) as items to check afterwards.

The copy is a one-time transfer. After import, later changes in the source agent do not sync to the target agent, so a changed source has to be exported and imported again. Knowledge sources (uploaded documents, FAQs and URLs) are not included and have to be added to the target agent directly.

The roadmap item is **In development**, with a preview date of August CY2026 and a target date of April CY2027, for the Worldwide (Standard Multi-Tenant) cloud on the web, with release phases General Availability and Preview. The Microsoft Learn page [Copy configuration from one Sales Development agent to another (preview)](https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/copy-configuration) already describes the procedure and is marked as prerelease documentation for a preview feature. Treat its steps as the preview design, not the final one.

## Why it matters

This makes it quick to roll one agreed playbook and set of guardrails out across business units, which is the consistency the roadmap item aims at. The same speed means a configuration approved once is replicated as many times as managers choose to import it, and a later correction to the source reaches no copy unless someone repeats the export and import.

Microsoft has not stated what happens on arrival, so base your plan on the fact that no source says existing agents change. Nothing in the documented procedure changes an existing agent until a manager of both agents imports a file. The exposure that matters is the exported file itself: Learn says export files can contain business-specific details and should be treated as an internal document.

## Risk assessment

**Data exposure**
- The export is a downloaded file holding playbook, guidelines and settings. Learn says it can contain business-specific details and advises storing and sharing it according to your organisation's data policies, limiting access to authorised users and deleting local and cloud copies, such as OneDrive, when the transfer is complete. No export-specific tenant switch is documented. General Agent 365 auditing records agent invocations and tool calls; a configuration-export-specific audit event is not yet documented.
- Knowledge sources are not exported, so uploaded documents, FAQs and URLs do not travel in the file. Each has to be added to the target agent separately, but Microsoft warns that shared content may appear in responses to people who lacked access to the original content, regardless of its sensitivity labels or permissions.

**Security & identity**
- Learn requires the person copying to be a manager or owner of both agents and to be able to open both in Microsoft Teams. How those roles are granted is covered by the activation steps, where an administrator names the manager of each instance. Confirm that managers of the target agents are the people you intend to receive the playbook.

**Autonomy & actions**
- The roadmap description says guardrails are part of what is distributed, so an imported configuration shapes how the target agent behaves in outreach. Learn tells managers to review the playbook, guidelines, persona, follow-up cadence and send-window settings after import, and the page notes that a partial-failure message can appear, so a target agent could run with an incomplete copy if nobody checks.

**Change & support**
- Because the copy is a snapshot, source and target agents drift apart after import. Learn's own advice is to re-export and re-import when the source changes.
- Learn lists the failure modes: renaming, unzipping or editing the file can stop the target agent parsing it, and attaching the file without a request leaves the agent without an action. Expect support questions on these.

## Cost and licensing

Microsoft Learn's copy-configuration page names no licence and no meter for the copy. The activation page for the Sales Development agent (preview) says to have "the required subscriptions and licenses for Microsoft 365, Microsoft 365 Copilot, and Microsoft Teams", and its enablement steps have an administrator purchase the $0 Agent 365 SKU, which includes a license for 25 agent instances. Those are the requirements for the agent the copy runs inside, and the wiki reads them as covering this feature too; Microsoft has not published anything more specific.

The Microsoft 365 Resources for Agents service description lists Sales Development Agent public preview availability as December 1, 2026, when consumption billing begins. It publishes 100 Copilot Credits per agent per month for the agent account and persistent resource access, and says all agent activity, including model, context, tools and runtime usage, is billed consumptively. The activation page still describes the $0 preview SKU; that SKU price does not establish that agent activity is unmetered.

A credit rate or price specific to exporting or importing a configuration is not yet published. The indirect cost is manager time to export, import and validate each target agent, and to re-add knowledge sources by hand.

## Scope

The roadmap item lists the Worldwide (Standard Multi-Tenant) cloud and the Web platform, and describes it as enabled by admins, makers or marketers for end users. The Learn page puts the work with the agents' managers or owners.

- **Who copies:** a manager or owner of both agents, who can open both in Microsoft Teams. The target agent has to be already hired and ready to configure.
- **Surface:** the export and import are chat requests in Teams. The roadmap description names an example prompt, "Export your configuration"; Learn gives several others.
- **Prerequisites for the agent itself:** Copilot Frontier enabled in the Microsoft 365 admin center, and activation by an AI Administrator or Global Administrator, per the activation page.
- **Not covered:** knowledge sources, and any ongoing synchronisation.

## Governance guidance

### Before rollout
- Identify the managers who own Sales Development agents, and decide which source agent holds the playbook you would approve for copying.
- Review who can create instances: in the Microsoft 365 admin center the activation step chooses the users or groups that can create Sales Development agent instances (see the controls table).
- Define where exported files may be stored, and tell managers to delete local and cloud copies when a transfer is complete, as Learn advises.

### At rollout
- Tell managers to attach the file exactly as downloaded, without renaming, unzipping or editing it, and to include the import request in the same message.
- Ask managers to stay in the chat until the target agent confirms completion, so partial-failure messages are not missed.
- Require managers to add knowledge sources to each target agent by hand.

### After rollout
- Check each target agent's playbook, guidelines and language settings, persona and email footer, follow-up cadence and send window against the source.
- Re-export and re-import when the source configuration changes, because the copy does not sync.
- Watch Message center and the Learn page for the move from preview to the target date of April CY2027.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether managers can export or import a Sales Development agent configuration</strong><br><small>Tenant</small><br><small class="controls__note">No tenant setting is documented at the time of writing (November 2026). The Learn page makes being a manager or owner of both agents the condition.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users or groups can create Sales Development agent instances</strong><br><small>Group</small><br><small class="controls__note">AI Administrator or Global Administrator. Sets who can create instances, not who can copy a configuration. Beta request sets agentManagerScope, needs policyTemplateId; API needs an Agent 365 licence. Preview.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All Agents › Sales Development (Frontier) › Activate <a href="https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/activate-agent" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/admin/catalog/packages/{id}/activate</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackageactivationresult-activate" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No tenant-wide switch for exporting or importing a configuration is documented, so the first row is a gap, not a setting. Activation of the Sales Development agent decides which users or groups can create agent instances. It does not govern the export or import itself, and the Learn page names being a manager or owner of both agents as the condition for copying. The activation steps need the AI Administrator or Global Administrator role in the Microsoft 365 admin center.

## Open questions

- Is the configuration copy on, off or opt-in on arrival, and will an admin setting be added to turn export or import off? Watch the Learn page and Message center.
- Which Copilot Credits rate, if any, is specific to exporting or importing a configuration? Watch the Microsoft 365 Resources for Agents service description and the Learn page.
- Which guardrail and settings content is in the export file, and which audit event, if any, identifies a configuration export?
- Will the final design at general availability keep the Teams chat steps documented for the preview?

<!-- rationale
risk: Medium. The export is a downloadable file of business-specific playbook and guideline content, and Microsoft Learn documents no admin control over exporting or importing it.
cost: Variable. Microsoft publishes consumption billing via Copilot Credits for Sales Development agents from December 1, 2026; no export/import-specific rate is published.
impact: Low. Per the Learn page, those who manage both agents carry out the copy; sellers notice only that a new agent starts with the same playbook and settings.
-->

<!-- verifier-findings (2026-11-20, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].api; controls[1].note / command: POST /beta/copilot/admin/catalog/packages/{id}/activate is the documented beta action for activating a template for users or groups allowed to create instances. | Found: POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/activate This reference describes the reviewed beta contract. Availability depends on the matching schema and backend release; API-review approval isn't evidence of deployed availability. | Fix: Append to controls[1].note and the rendered row note: 'This is a reviewed beta contract; availability depends on the matching schema and backend release, not API-review approval.' The existing API reference states this qualification. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackageactivationresult-activate
-->
