---
title: "Power Automate process mining: import star schema (normalised) event data"
slug: "power-automate-process-mining-get-support-for-normalized-schema-import-for-data-ingestion"
roadmapId: 577827
topic: "power-platform"
products: ["Power Automate"]
summary: "Makers can import event data held as an event table plus case and lookup tables into Power Automate Process Mining from a JSON config. Learn labels it preview. No admin switch is documented; no separate licence is named."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "August CY2026"
previewDate: "June CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn says process mining is licensed as part of Power Automate: Power Automate Premium adds 50 MB of capacity per licence to a tenant-wide pool up to 100 GB, and the Process Mining add-on adds 100 GB. No licence specific to normalised import is named."
audiences: ["power-platform-admin","maker","service-owner"]
tags: ["process-mining","power-automate","licensing","security-roles"]
sources:
  - title: "Create a process from normalized schema"
    url: "https://learn.microsoft.com/power-automate/process-mining-normalized-import-ux-guide"
    kind: "learn"
  - title: "Normalized schema JSON authoring"
    url: "https://learn.microsoft.com/power-automate/process-mining-normalized-import-authoring-guide"
    kind: "learn"
  - title: "Overview of process mining and task mining in Power Automate"
    url: "https://learn.microsoft.com/power-automate/process-advisor-overview"
    kind: "learn"
  - title: "Security and privacy"
    url: "https://learn.microsoft.com/power-automate/process-advisor-security"
    kind: "learn"
  - title: "Ingest data from Fabric OneLake"
    url: "https://learn.microsoft.com/power-automate/process-mining-files-fabric-onelake"
    kind: "learn"
  - title: "Power Platform licensing FAQs"
    url: "https://learn.microsoft.com/power-platform/admin/powerapps-flow-licensing-faq"
    kind: "learn"
  - title: "OneLake tenant settings"
    url: "https://learn.microsoft.com/fabric/admin/service-admin-portal-onelake"
    kind: "learn"
  - title: "Tenants - List Tenant Settings"
    url: "https://learn.microsoft.com/rest/api/fabric/admin/tenants/list-tenant-settings"
    kind: "learn"
  - title: "Export OCPM semantic model into Fabric workspace"
    url: "https://learn.microsoft.com/power-automate/object-centric-semantic-model"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 577827"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577827"
    kind: "roadmap"
videos: []
related: ["power-automate-process-mining-enable-process-intelligence-studio-in-object-centric-process"]
controls:
  - governs: "Where a maker starts a normalized-schema import"
    scope: "maker"
    ui:
      surface: "Power Automate (maker)"
      path: "environment > Process mining > + Start from blank > Case ID process mining > Normalized schema (preview)"
      docs: "https://learn.microsoft.com/power-automate/process-mining-normalized-import-ux-guide"
    api: null
    note: "Maker-side entry point, not an admin restriction. Needs a rights-to-create role such as Environment maker; preview label on Learn."
  - governs: "Admin switch to turn normalized-schema import off"
    scope: "tenant"
    ui: null
    api: null
    note: "Not documented on the normalized schema articles at the time of writing (November 2026)."
  - governs: "OneLake access for apps external to Fabric, which a OneLake source depends on"
    scope: "tenant"
    ui:
      surface: "Microsoft Fabric (OneLake catalog, Govern section)"
      path: "Configurations > Tenant settings > Users can access data stored in OneLake with apps external to Fabric"
      docs: "https://learn.microsoft.com/fabric/admin/service-admin-portal-onelake"
    api:
      kind: "rest"
      call: "GET https://api.fabric.microsoft.com/v1/admin/tenantsettings"
      docs: "https://learn.microsoft.com/rest/api/fabric/admin/tenants/list-tenant-settings"
    note: "General control: the OneLake page lists it as a prerequisite. Lists settings (read); caller must be a Fabric administrator or a service principal."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-10-22T23:45:51"
changes:
  - date: "2026-11-17"
    note: "First briefing: star-schema (normalised) import for Power Automate Process Mining, which Learn still labels preview while the roadmap shows Launched."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 60 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected after verification: removed the unsupported claim about the Process Insight Prod prerequisite, added the environment step to the maker path and trimmed checklist steps that have no controls row."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 69 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-17"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 69
  confirmed: 68
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "53fccc8ad11215721bf2ec76fbe3d59b"
---

## What's changing

Power Automate Process Mining can now ingest event data that is not stored as a single wide table. Instead of flattening everything into one CSV, a maker points Process Mining at a star schema: a thin event table plus optional case and lookup tables, linked by foreign keys. Learn lists OneLake (Fabric lakehouse) and Azure Data Lake Storage Gen2 as the supported sources, in CSV, Parquet or Delta-Parquet.

The import is driven by a JSON configuration file that describes the tables, the storage backend and how columns map to Process Mining attributes. Learn states that normalised import is JSON-only today, with no in-product editor. A maker starts it at make.powerautomate.com by choosing their environment from the environment picker, then **Process mining** > **+ Start from blank**, selecting **Case ID process mining** as the process type and **Normalized schema (preview)** as the data source, then browsing to the JSON file. The service validates the file, opens a Mapping screen to review and adjust, and the maker selects **Save and analyze**. Learn says the resulting model is identical whichever import path fed it.

Status and dates come from the roadmap record: the item is Launched, with a preview date of June CY2026 and a target date of August CY2026, release phases General Availability and Preview, for Worldwide (Standard Multi-Tenant) on the web. Microsoft Learn still labels the data source **Normalized schema (preview)**, so the two sources do not settle whether the capability is generally available; treat the Learn label as the current description of the product.

The roadmap's more-info link opens a page titled "Export OCPM semantic model into Fabric workspace", which covers publishing object-centric process models to a Fabric semantic model. It does not describe this feature; the details above come from the normalized schema articles.

## Why it matters

For organisations that already hold event data in a lakehouse or data mesh, this removes the step of rebuilding a flat event log before analysis. Learn lists storage cost as lower for the normalised route because dimension values are stored once rather than repeated on every event row. The roadmap description makes the same point and adds faster ingestion.

For administrators the effect is mostly in who can reach what. Microsoft has not stated a default beyond the data source appearing in the New Process dialog, so expect makers with the Environment maker role to be able to use it, and expect the data reach to be set by the OneLake or ADLS Gen2 prerequisites rather than by a new switch. If nobody acts, no source says existing processes change.

## Risk assessment

**Data exposure**

- The JSON file carries the storage details: workspace and lakehouse IDs for OneLake, or subscription, resource group, storage account and container for ADLS Gen2. The maker chooses the backend through the file, not through the UI, so the data a process can read is decided by the file and by what the environment can reach.
- For OneLake sources the UX article points to the OneLake page's prerequisites. That page lists the tenant setting that lets apps external to Fabric read OneLake data, and sharing the Fabric workspace with the Process Insight Prod service principal with an Admin role. Review who holds Admin on that workspace (see the Fabric controls row).

**Security & identity**

- Learn says the Environment maker role can create, share and contribute to processes, and administrators and system customizers can access all processes created in the environment. Anyone who can create a process can therefore point it at any storage location named in a JSON file they can write, subject to the storage-side prerequisites.
- Learn's Conditional Access note for process mining says that applying a policy to Power Automate alone isn't enough; Power Apps must be in the Cloud apps list too. This is a general process mining statement, not one written for normalised import.

**Autonomy & actions**

- The Learn articles describe a maker-initiated import and a mapping review step. They describe no autonomous action; whether a normalised process can refresh on a schedule is not described on the two normalised schema articles.

**Change & support**

- Authoring is JSON-only, so mistakes surface as validation errors in the New Process dialog; the authoring article carries the validation checklist. Expect support questions from makers who are not used to editing JSON.
- The data source carries a preview label on Learn. Preview behaviour and limits can change.

## Cost and licensing

Learn's process mining overview says process mining is licensed as part of Microsoft Power Automate. Each Power Automate Premium licence adds 50 MB of process mining capacity to a tenant-wide capacity pool up to a total of 100 GB; beyond that, the Power Automate Process Mining add-on, a tenant-wide add-on available for Power Automate Premium, adds 100 GB to the pool. The trial offers limited process mining capacity of 100 MB per process. The overview lists the required licences or trials as a prerequisite and names none specific to normalised import.

The overview also says process data uses mostly Dataverse file capacity, so a larger import can use up Dataverse storage. The authoring article lists storage cost as lower for the normalised route (dimensions stored once). How a normalised import is counted against the process mining capacity pool is not stated on the pages; no price specific to it is published.

Licensing FAQs state that customers can assess their highest monthly Process Mining usage, with current and past usage data in the Power Platform admin center.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform; no other cloud is listed on the record. Users need a Power Automate environment where Process Mining is enabled and a user account with rights to create processes in it. Learn's overview names the Environment Maker role for creating, sharing and contributing to processes, and the Process Mining User role can only view created process reports.

Sources are OneLake / Microsoft Fabric (managed Delta tables, or loose Parquet or CSV files under the Files/ area) and Azure Data Lake Storage Gen2 (CSV, Parquet or Delta-Parquet folders). The UX article points to the OneLake and ADLS Gen2 pages for their own prerequisites. Process type in the dialog is Case ID process mining.

## Governance guidance

### Before rollout

- Check with the Power Platform admin team that Process Mining is enabled in the environments where makers will try normalised import.
- Confirm with the Fabric administrator whether the OneLake tenant setting described on the OneLake page is already in place, using the Fabric tenant settings row in the table.
- Ask makers who plan to use the feature which storage location and tables their JSON config will name, so reviewers can see the data in scope.

### At rollout

- Pilot with one maker and one lakehouse, following the Create a process from normalized schema article, and keep the JSON file under change control.
- Brief makers that the data source is labelled preview and that the config is JSON-only.

### After rollout

- Re-open the Learn pages when Microsoft removes the preview label or documents an admin control.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Where a maker starts a normalized-schema import</strong><br><small>Maker</small><br><small class="controls__note">Maker-side entry point, not an admin restriction. Needs a rights-to-create role such as Environment maker; preview label on Learn.</small></td><td data-label="Admin UI"><strong>Power Automate (maker)</strong><br>environment › Process mining › + Start from blank › Case ID process mining › Normalized schema (preview) <a href="https://learn.microsoft.com/power-automate/process-mining-normalized-import-ux-guide" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Admin switch to turn normalized-schema import off</strong><br><small>Tenant</small><br><small class="controls__note">Not documented on the normalized schema articles at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>OneLake access for apps external to Fabric, which a OneLake source depends on</strong><br><small>Tenant</small><br><small class="controls__note">General control: the OneLake page lists it as a prerequisite. Lists settings (read); caller must be a Fabric administrator or a service principal.</small></td><td data-label="Admin UI"><strong>Microsoft Fabric (OneLake catalog, Govern section)</strong><br>Configurations › Tenant settings › Users can access data stored in OneLake with apps external to Fabric <a href="https://learn.microsoft.com/fabric/admin/service-admin-portal-onelake" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>GET https://api.fabric.microsoft.com/v1/admin/tenantsettings</code> <a href="https://learn.microsoft.com/rest/api/fabric/admin/tenants/list-tenant-settings" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No administrator switch for this data source is documented on the pages that describe it at the time of writing (November 2026), so the first two rows separate the maker entry point from the missing admin control. Access is shaped by existing controls instead: Dataverse security roles (Environment maker can create processes, Process Mining User can only view reports) and the storage-side prerequisites.

The Fabric row is a general control that a OneLake source depends on according to the OneLake page; the listed call reads tenant settings and lets you check the setting's state, and the Learn reference states that the caller must be a Fabric administrator or a service principal.

## Open questions

- Is normalised schema import generally available? The roadmap record shows Launched with General Availability and Preview phases, while Learn labels the data source Normalized schema (preview). Watch the Create a process from normalized schema article.
- Will Microsoft document an administrator setting or API to restrict normalised import? None is documented at the time of writing (November 2026).
- How is normalised data counted against the process mining capacity pool and Dataverse file capacity? Watch the Overview of process mining and task mining article.
- Can a normalised process use scheduled or incremental refresh? The two normalised schema articles do not say.

<!-- rationale
risk: Low. Nothing starts until a maker selects Normalized schema (preview) and uploads a JSON config file; it reads tables or files already held in OneLake or Azure Data Lake Storage Gen2.
cost: Low. Learn names no separate licence or meter for normalised import; process mining stays licensed through Power Automate, and Learn lists storage cost as lower than the flat import.
impact: Low. Makers and analysts who build process mining models from lakehouse data notice it; other users and administrators see no change.
-->

<!-- verifier-findings (2026-11-17, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout, first bullet / consistency: The checklist asks administrators to check that Process Mining is enabled, but the controls table has no corresponding environment-level control row. | Found: Check with the Power Platform admin team that Process Mining is enabled in the environments where makers will try normalised import. Table rows cover maker import entry, the missing normalized-import switch, and OneLake external-app access, not this environment check. | Fix: Remove the first Before rollout bullet, 'Check with the Power Platform admin team that Process Mining is enabled in the environments where makers will try normalised import.' Keep the documented environment prerequisite in Scope.
-->
