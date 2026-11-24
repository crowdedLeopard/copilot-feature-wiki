---
title: "Microsoft 365 admin center: more agent metadata fields in the inventory export"
slug: "m365-admin-center-agent-metadata-in-inventory-export"
roadmapId: 502878
topic: "governance"
products: ["Microsoft 365","Microsoft Copilot (Microsoft 365)","Microsoft 365 admin center"]
summary: "The roadmap says the agent inventory export now covers Capabilities, Data Sources, Actions, Created In and Created By. It is launched and optional for admins; Learn does not yet name those columns."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2025"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Per Microsoft Learn, viewing all agents in the Microsoft 365 admin center needs no specific licence, only a role such as AI Reader or AI Administrator. Nothing specific to the export is published."
audiences: ["m365-admin","security","compliance"]
tags: ["agent-registry","agent-governance","data-export","m365-admin-center","copilot-control-system","agents"]
sources:
  - title: "Microsoft 365 Roadmap 502878"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=502878"
    kind: "roadmap"
  - title: "Manage agent registry in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview"
    kind: "learn"
  - title: "Agent management roles and permissions in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-roles-perms"
    kind: "learn"
  - title: "Agent management in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-365-overview"
    kind: "learn"
  - title: "Agent Registry convergence with Microsoft Agent 365"
    url: "https://learn.microsoft.com/entra/agent-id/agent-registry-convergence"
    kind: "learn"
  - title: "List packages"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackages-list"
    kind: "learn"
videos: []
related: ["agent-registry","m365-copilot-agent-lifecycle-management-rules","m365-admin-center-agents-usage-report"]
controls:
  - governs: "Exporting the agent inventory, with its metadata fields"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > Registry > Export"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview"
    api:
      kind: "graph"
      call: "GET /v1.0/copilot/admin/catalog/packages"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackages-list"
    note: "The API lists agents for reporting; it is not the export file. Learn describes the Graph agent APIs as preview and the reference prints a /beta/ request as well. Access to the Package Management API requires a Microsoft Agent 365 licence."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-03-12T23:15:41"
changes:
  - date: "2026-11-24"
    note: "First briefing for this item: the roadmap's five new export fields are not yet named on Learn, so the page reports what the registry export documents today."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 46 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected: added the Microsoft Agent 365 licence requirement for the Graph List packages call, and removed the role-assignment checklist step."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 51 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 51
  confirmed: 51
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "df64bef28b7b029446311e2bfa77f5e8"
---

## What's changing

The roadmap item says the agent metadata export in the Microsoft 365 admin center now includes expanded fields: Capabilities, Data Sources, Actions, Created In and Created By. It describes the purpose as visibility for auditing, governance and lifecycle tracking.

The export belongs to the agent registry, the inventory under **Agents** > **All agents** > **Registry**. Microsoft Learn describes the registry's **Export** action as exporting agents to a CSV file, and a separate section of the same page describes exporting the agent list to an Excel file with a scope of **All agents** or **Filtered agents**. The two descriptions differ on the file format, and the page does not say which one applies.

The columns Learn lists for the export are Name, Status, Channel, Date created, Last modified, Publisher, Publisher type, Version, Owner, Description, Platform and Instructions, and it adds that there are more than 30 items per agent that you can include. At the time of writing (November 2026) the page does not name Capabilities, Data Sources, Actions, Created In or Created By, so those five fields rest on the roadmap record alone. Do not assume that Date created and Owner are the same fields as Created In and Created By.

The roadmap record lists the item as Launched, with a target of October CY2025, General Availability, Worldwide (Standard Multi-Tenant) and the Web platform.

## Why it matters

For a service owner, the registry export is the way to take agent inventory out of the admin centre for audit evidence, ownership reviews and lifecycle clean-up. Fields that say what an agent can do, what data it draws on and where and by whom it was created would let those reviews run from a file, if the export carries them as the roadmap describes.

If nobody acts, nothing in the sources says existing behaviour changes: Microsoft has not stated whether the new fields appear in an export by default or have to be selected. The practical step is to run an export, look at the columns, and decide whether your audit process can use them.

## Risk assessment

**Data exposure**
- The exported list can include agent Description, Owner and Instructions, per the Learn column list. An exported file moves that metadata out of the admin centre's role-based view into wherever the file is saved, so treat it as sensitive internal documentation.
- If the roadmap's Data Sources and Actions fields are present, they would describe what an agent can reach and do. Whether they list the data itself or only its type is not documented.

**Security & identity**
- Learn's roles page marks Global Administrator, AI Administrator, Global Reader, AI Reader, Security Administrator, Security Reader, Reports Reader and User Experience Success Manager as able to view agent registry information. It does not say which of them can run the export, so confirm that before sharing the task with a wider group.

**Autonomy & actions**
- No change: the export reads agent metadata and does not block, publish or modify an agent.

**Change & support**
- Learn says the same Copilot Studio agent can appear more than once in the registry with different publisher types, such as Shared by creator and Published by your org. Check whether your export shows the same duplicate-looking rows before using row counts as an agent count.
- The export column set on Learn and on the roadmap differ, so an auditor following the roadmap wording may look for columns that are not in the file.

## Cost and licensing

Microsoft Learn's agent registry page lists no licence for the export. The Agent Registry convergence page says viewing all agents in the Microsoft 365 admin center does not require a specific licence and that administrators only need an appropriate role, such as AI Reader or AI Administrator, to access the inventory view. The agent management overview lists, as a prerequisite, a subscription and licences for Microsoft 365, Microsoft Copilot or Microsoft Agent 365.

The Graph reporting alternative requires a Microsoft Agent 365 licence, per the List packages reference; this is distinct from viewing the inventory.

The registry pages publish no meter or separate charge for the export at the time of writing (November 2026). The indirect cost is admin time to run exports and the storage and handling of the files. A licence or rate specific to the new metadata fields is not yet published.

## Scope

The roadmap record lists the Worldwide (Standard Multi-Tenant) cloud, the Web platform and General Availability. It does not list the US Government clouds, and the record alone does not say whether the export is unavailable there.

The export sits in the registry under **Agents** > **All agents** > **Registry**. Learn's roles page marks several Microsoft Entra roles, including AI Reader and Global Reader, as able to view agent registry information. Learn does not say which role is needed to run the export itself. Learn also says the registry lists agents of four types: Microsoft agents, external partner-built agents, agents published by your org and agents shared by their creator.

## Governance guidance

### Before rollout
- Name who is responsible for running the export.
- Decide where exported files are stored and who may open them, because the column list includes Owner, Description and Instructions.

### At rollout
- Run the export from Agents > All agents > Registry with the scope set to All agents and compare its columns with the five fields in the roadmap item.
- Record which fields are missing, and raise them with Microsoft support or through Message center rather than assuming they will be added.
- Check the export for duplicate-looking rows for the same agent before using it for counts.

### After rollout
- Repeat the export on a schedule your audit team sets and compare it with the previous file to find new, ownerless or changed agents.
- Re-read the registry page on Microsoft Learn when it changes, to see whether it begins to name the new fields.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Exporting the agent inventory, with its metadata fields</strong><br><small>Tenant</small><br><small class="controls__note">The API lists agents for reporting; it is not the export file. Learn describes the Graph agent APIs as preview and the reference prints a /beta/ request as well. Access to the Package Management API requires a Microsoft Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › Registry › Export <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>GET /v1.0/copilot/admin/catalog/packages</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackages-list" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The export is a registry action. Microsoft Learn describes no admin setting that turns the export on or off, and no setting that selects its columns, at the time of writing (November 2026). The registry's **Customize view** action chooses the columns shown in the **All agents** list; Learn does not say that the choice carries into the export.

The Graph row lists agents programmatically. It returns the agent list, not the export file, and the reference excerpt read does not confirm that it carries the five roadmap fields. Learn's registry page describes the Microsoft Graph agent APIs as preview and says they work with the AI Administrator role. Access to the Package Management API requires a Microsoft Agent 365 licence.

## Open questions

- Do the Capabilities, Data Sources, Actions, Created In and Created By columns appear in the export by default, or must an administrator select them? Watch the agent registry page on Microsoft Learn.
- What do those five fields contain, and do Created In and Created By differ from the documented Date created and Owner columns?
- Which administrator roles can run the export, as distinct from viewing the registry?
- Is the export a CSV file or an Excel file, given that the registry page describes both?
- Does a Microsoft Graph operation return the same metadata as the export, so the report can be scripted?

<!-- rationale
risk: Low. The export is a read-only report of agent metadata for admins who can already view the registry; nothing changes for agents or users.
cost: Low. Learn says viewing the agent inventory needs no specific licence, only a role, and documents no charge for the export; the cost is admin time to use and store the files.
impact: Low. Only administrators and auditors who run the export notice the change; makers and end users see nothing.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Governance controls / absence: Microsoft Learn documents no switch enabling or disabling the registry export. | Found: Searched: Microsoft 365 admin center agent inventory export disable enable setting select exported columns; read registry overview and search results. Viva Agent Dashboard export switches concern a different export, not the registry inventory. | Fix: Remove the sentence 'Microsoft Learn describes no admin setting that turns the export on or off, and no setting that selects its columns, at the time of writing (November 2026).' The standard requires absent controls named in prose to have null-sided table rows; removing this sentence avoids adding rows.
-->
