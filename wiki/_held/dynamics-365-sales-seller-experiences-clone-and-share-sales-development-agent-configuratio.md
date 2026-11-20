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
cost: "low"
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
    api: null
    note: "Requires AI Administrator or Global Administrator. Chooses who can create instances; it does not govern copying a configuration between instances. Preview page."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-10-16T17:39:50"
changes:
  - date: "2026-11-20"
    note: "New briefing on copying a Sales Development agent's configuration between agents; Learn documents the preview steps, and no admin switch is documented."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 52 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-20"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 52
  confirmed: 49
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "00d73a7d644f57e31e29b3c088228f7c"
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
- The export is a downloaded file holding playbook, guidelines and settings. Learn says it can contain business-specific details and advises storing and sharing it according to your organisation's data policies, limiting access to authorised users and deleting local and cloud copies, such as OneDrive, when the transfer is complete. Microsoft Learn documents no admin setting that stops or logs the export, so these steps rest on the managers.
- Knowledge sources are not exported, so uploaded documents, FAQs and URLs do not travel in the file. Each has to be added to the target agent separately, and that is where your existing access rules for those sources apply.

**Security & identity**
- Learn requires the person copying to be a manager or owner of both agents and to be able to open both in Microsoft Teams. How those roles are granted is covered by the activation steps, where an administrator names the manager of each instance. Confirm that managers of the target agents are the people you intend to receive the playbook.

**Autonomy & actions**
- The roadmap description says guardrails are part of what is distributed, so an imported configuration shapes how the target agent behaves in outreach. Learn tells managers to review the playbook, guidelines, persona, follow-up cadence and send-window settings after import, and the page notes that a partial-failure message can appear, so a target agent could run with an incomplete copy if nobody checks.

**Change & support**
- Because the copy is a snapshot, source and target agents drift apart after import. Learn's own advice is to re-export and re-import when the source changes.
- Learn lists the failure modes: renaming, unzipping or editing the file can stop the target agent parsing it, and attaching the file without a request leaves the agent without an action. Expect support questions on these.

## Cost and licensing

Microsoft Learn's copy-configuration page names no licence and no meter for the copy. The activation page for the Sales Development agent (preview) says to have "the required subscriptions and licenses for Microsoft 365, Microsoft 365 Copilot, and Microsoft Teams", and its enablement steps have an administrator purchase the $0 Agent 365 SKU, which includes a license for 25 agent instances. Those are the requirements for the agent the copy runs inside, and the wiki reads them as covering this feature too; Microsoft has not published anything more specific.

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
<tr><td data-label="Control"><strong>Which users or groups can create Sales Development agent instances</strong><br><small>Group</small><br><small class="controls__note">Requires AI Administrator or Global Administrator. Chooses who can create instances; it does not govern copying a configuration between instances. Preview page.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All Agents › Sales Development (Frontier) › Activate <a href="https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/activate-agent" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No tenant-wide switch for exporting or importing a configuration is documented, so the first row is a gap, not a setting. The only documented admin control that touches this feature is activation of the Sales Development agent, which decides which users or groups can create agent instances. It does not govern the export or import itself, and the Learn page names being a manager or owner of both agents as the condition for copying. The activation steps need the AI Administrator or Global Administrator role in the Microsoft 365 admin center.

## Open questions

- Is the configuration copy on, off or opt-in on arrival, and will an admin setting be added to turn export or import off? Watch the Learn page and Message center.
- Which licence, if any, is specific to exporting or importing a configuration, and does it use Copilot Credits?
- Which guardrail and settings content is in the export file, and is the export recorded in an audit log an administrator can search?
- Will the final design at general availability keep the Teams chat steps documented for the preview?

<!-- rationale
risk: Medium. The export is a downloadable file of business-specific playbook and guideline content, and Microsoft Learn documents no admin control over exporting or importing it.
cost: Low. The only cost the sources show is manager time and the licences the Sales Development agent already needs; Microsoft Learn publishes no charge or meter specific to the configuration copy.
impact: Low. Per the Learn page, those who manage both agents carry out the copy; sellers notice only that a new agent starts with the same playbook and settings.
-->

<!-- verifier-findings (2026-11-20, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].api / absence: Microsoft has not documented automation for choosing the users or groups allowed to create Sales Development agent instances. | Found: POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/activate agentManagerScope | Required. The users or groups allowed to create instances from this template. | Fix: Set controls[1].api to kind 'graph', call 'POST /beta/copilot/admin/catalog/packages/{id}/activate', and docs to https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackageactivationresult-activate. Add to its note: 'The beta request sets agentManagerScope to choose who can create instances and requires policyTemplateId. This is a reviewed beta contract: availability depends on the matching schema and backend release, and API-review approval is not evidence of deployed availability. Package Management API access requires a Microsoft Agent 365 licence.' | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackageactivationresult-activate
- [contradicted, blocker] Risk assessment: Data exposure, second bullet / applicability: Existing access rules for knowledge sources apply when those sources are added separately to the target agent. | Found: The content you share with an agent, such as files, chat history, or emails, might be summarized or included in the agent's responses to other users, even those individuals who don't originally have access to that content. | Fix: Replace 'and that is where your existing access rules for those sources apply' with 'but Microsoft warns that shared content may appear in responses to people who lacked access to the original content, regardless of its sensitivity labels or permissions'. Cite https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/onboard-agent#provide-product-knowledge. | Source: https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/onboard-agent
- [contradicted, blocker] Governance controls / applicability: Activation is the only documented administrative control that touches this feature. | Found: Copilot Frontier is enabled in the Microsoft 365 admin center: Copilot > Settings > Copilot Frontier. All users who create agent instances are enabled for Frontier features. As an administrator, you can still control which Frontier agents users can access. | Fix: Replace 'The only documented admin control that touches this feature is activation of the Sales Development agent, which decides which users or groups can create agent instances' with 'Activation of the Sales Development agent decides which users or groups can create agent instances'. Keep the following sentence distinguishing instance creation from configuration export and import. | Source: https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/activate-agent
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance guidance: Before rollout; Governance controls / admin-path: Microsoft 365 admin center > Agents > All Agents > Sales Development (Frontier) > Activate leads to configuring which users or groups can create instances. | Found: In the Microsoft 365 admin center, go to Agents > All Agents. Search for Sales Development (Frontier), and then select Activate. Choose the users or groups that can create Sales Development agent instances. | Fix: Keep the path, which reaches the activation procedure, and append to controls[1].note: 'After selecting Activate, choose the users or groups that can create instances and apply a policy template that allows agent instance creation.' The cited activation page gives these remaining steps. | Source: https://learn.microsoft.com/dynamics365/sales/sales-dev-agent/activate-agent
-->
