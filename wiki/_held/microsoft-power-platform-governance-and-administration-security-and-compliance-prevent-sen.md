---
title: "Power Platform: Dataverse audit events sent to Purview no longer carry before-and-after values"
slug: "microsoft-power-platform-governance-and-administration-security-and-compliance-prevent-sen"
roadmapId: 576863
topic: "power-platform"
products: ["Microsoft Power Platform governance and administration"]
summary: "Dataverse audit events sent to Microsoft Purview omit before-and-after field values; the values stay in Dataverse. Admins should repoint any Purview rules or pipelines that relied on them."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "unknown"
  notes: "Not yet published: neither the roadmap item nor the Learn notice states a licence or meter for this change. Learn says the option to turn on audit logging is only visible when the minimum Office licensing requirements are met."
audiences: ["power-platform-admin","compliance","security"]
tags: ["auditing","purview","dataverse","data-governance","privacy","power-platform","monitoring"]
sources:
  - title: "Microsoft 365 Roadmap 576863"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576863"
    kind: "roadmap"
  - title: "Important changes (deprecations) coming in Power Platform"
    url: "https://learn.microsoft.com/power-platform/important-changes-coming#removal-of-before-and-after-field-change-values-in-audit-events-sent-to-microsoft-purview"
    kind: "learn"
  - title: "View Microsoft Dataverse and model-driven app activity logs in Microsoft Purview"
    url: "https://learn.microsoft.com/power-platform/admin/activity-logging-auditing/activity-logs-dataverse-model-driven-apps"
    kind: "learn"
  - title: "Manage Dataverse auditing"
    url: "https://learn.microsoft.com/power-platform/admin/manage-dataverse-auditing"
    kind: "learn"
  - title: "Configure auditing"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/auditing/configure"
    kind: "learn"
  - title: "Retrieve the history of audited data changes"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/auditing/retrieve-audit-data"
    kind: "learn"
  - title: "Overview of Power Platform activity logging and auditing in Microsoft Purview"
    url: "https://learn.microsoft.com/power-platform/admin/activity-logging-auditing/activity-logs-overview"
    kind: "learn"
  - title: "Manage Microsoft Dataverse settings"
    url: "https://learn.microsoft.com/power-platform/admin/admin-settings"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Whether Dataverse auditing is on for an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Audit and logs > Audit settings > Global Audit Settings > Start Auditing"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-dataverse-auditing"
    api:
      kind: "rest"
      call: "PATCH [Organization URI]/api/data/v9.2/organizations([Organization ID])"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/auditing/configure"
    note: "System Administrator or System Customizer role to change settings. The request body sets isauditenabled to enable or disable environment auditing. Purview receives production environments only."
  - governs: "Where before-and-after field values can still be read: Dataverse audit data"
    scope: "environment"
    ui:
      surface: "Model-driven app"
      path: "Settings > Advanced Settings > System > Auditing > Audit Summary view"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-dataverse-auditing"
    api:
      kind: "rest"
      call: "GET [Organization URI]/api/data/v9.2/audits(<audit id>)/Microsoft.Dynamics.CRM.RetrieveAuditDetails"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/auditing/retrieve-audit-data"
    note: "Needs the View Audit Summary privilege in the app; the Web API messages need prvReadRecordAuditHistory and prvReadAuditSummary. Reads values; does not send them to Purview."
confidence: "high"
created: "2026-11-17"
updated: "2026-11-19"
roadmapModified: "2026-10-16T19:09:56"
changes:
  - date: "2026-11-17"
    note: "First briefing for this item: Purview-bound Dataverse audit events no longer carry before-and-after field values; Learn and the roadmap give different start dates."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 44 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected after verification: the Audit Summary row now names the model-driven app as its surface, the Enable SAS Logging in Purview path is complete, and the action is now act-now."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 50 statements confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 48 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected the auditing control row: the admin path now ends at Global Audit Settings > Start Auditing and the API call is the organizations PATCH that sets isauditenabled; removed 'Read logs' from that row and its checklist step."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 50 statements confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 46 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 3
verification:
  status: "held"
  date: "2026-11-24"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 46
  confirmed: 45
  unconfirmed: 0
  contradicted: 1
  attempts: 1
  hash: "ef97d490e4e105ad3e0beb27c2cf2f44"
---

## What's changing

Dataverse no longer includes before-and-after field change values in the audit events it sends to Microsoft Purview. The roadmap item describes the aim as preventing sensitive customer data, such as financial, medical and personal information, leaking from Dataverse audit logs. Create and update events are still captured in Dataverse audit logs with those values; they are not sent to Purview activity logging.

Audit events keep flowing to Purview. Microsoft Learn says Purview continues to receive audit event metadata, such as who made changes, the date of the changes and the tables affected, without the field-level value changes. Learn also says Dataverse continues to store and expose before-and-after field changes through its native audit APIs and tables.

The roadmap item is Launched, General Availability, with a target of June CY2026, for Worldwide (Standard Multi-Tenant) on the web. Microsoft's Learn notice on important changes gives a different start: "Starting in May 2026". The roadmap description says "all customer data is removed" from these events, while the Learn notice describes the removal as the field-level before-and-after values. This page follows the narrower Learn wording. The roadmap's "Enabled for" line reads "Enabled by admins/makers/marketers for end users"; the Learn notice presents the change as a platform change, and the action it asks of administrators is to update downstream monitoring.

## Why it matters

Anything that reads old and new values from Purview now sees less. Microsoft's notice says existing monitoring, alerting or reporting solutions that depend on those values stop working once the change takes effect, and names rules that compare old and new values for anomaly detection, data pipelines that analyse field-level deltas and custom compliance checks in Purview as examples. Because the change is on by default and the roadmap item is already Launched, expect these to have changed without an administrator doing anything, so check them now.

For most tenants the change reduces exposure: sensitive field values no longer travel into Purview and the systems that consume it. The notice says no changes are required if your solution uses Dataverse audit logs as the source of truth. The work for service owners is to find the solutions that do not.

## Risk assessment

**Data exposure**
- Purview-bound audit events no longer carry the before-and-after values of a column, which Microsoft says reduces the risk of exposing sensitive business or personal information through downstream monitoring or analytics systems. The values remain in Dataverse, where reading them takes Dataverse privileges (View Audit Summary for the Audit Summary view; prvReadAuditSummary and prvReadRecordAuditHistory for the audit detail messages).
- Learn's Manage Dataverse auditing page says that when auditing is turned off for a column, its before-and-after values are sent to Purview as "*", and the Purview activity log page says column-level secured fields are sent with an asterisk. Confirm how those placeholders appear now (see Open questions).

**Security & identity**
- Detection that relied on old and new values in Purview, such as anomaly rules comparing them, loses its input and gives no signal. Rebuild it on Dataverse audit data or accept the gap in writing.
- Purview users with the Audit Logs or View-Only Audit Logs role still search the events; they need separate Dataverse privileges to see the values, so decide who should hold them.

**Autonomy & actions**
- No change: the notice describes a removal of fields from events and no action on records or users.

**Change & support**
- Investigations that answered "what was this field before?" from a Purview search now need a step in Dataverse (Audit History, Audit Summary or the Web API). Brief the compliance and support teams who run those searches.
- Purview events keep who, when and which tables, so searches that only need that information are not affected, according to the notice.

## Cost and licensing

Microsoft has not published a licence or meter for this change: neither the roadmap record nor the Learn notice "Removal of before-and-after field change values in audit events sent to Microsoft Purview" states one. The cost the sources support is admin time to find and rework Purview-based monitoring.

The surrounding services have their own conditions. The Manage Dataverse auditing page says Dataverse stores audit logs and they consume log storage capacity, so moving field-level reporting to Dataverse audit data depends on that capacity. The Power Platform activity logs page says the option to turn on audit logging is only visible when the minimum Office licensing requirements are met, and points to the Microsoft Purview service description for licensing.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant), the web platform and General Availability, with status Launched and a target of June CY2026. Learn says Dataverse and model-driven app user access or activity logging is sent to Purview for production environments only.

To configure auditing you need a system administrator or system customizer role or equivalent permissions. To view the logs in Purview you need the Audit Logs or View-Only Audit Logs role. The Learn notice describes no opt-in or opt-out for this change, and the roadmap record gives no clouds other than Worldwide.

## Governance guidance

### Before rollout
- Inventory the Purview audit searches, alert rules, SIEM or data pipelines and compliance checks that read old and new field values from Dataverse audit events, starting with the three examples in Microsoft's notice. Owner: security and compliance leads.
- Confirm which production environments have auditing turned on in Audit settings, since those are the environments whose events reach Purview (controls table, row 1).
- Decide who needs Dataverse access to read before-and-after values, because the Purview roles alone are not described as giving it (controls table, row 2).

### At rollout
- Repoint each affected rule or pipeline to Dataverse audit data through RetrieveAuditDetails or the Audit Summary view (controls table, row 2).
- Tell compliance, security and support teams that Purview events keep who, when and which tables but not field values.

### After rollout
- Review any alert that has stopped firing since the change and rebuild it on Dataverse audit data.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Dataverse auditing is on for an environment</strong><br><small>Environment</small><br><small class="controls__note">System Administrator or System Customizer role to change settings. The request body sets isauditenabled to enable or disable environment auditing. Purview receives production environments only.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Audit and logs › Audit settings › Global Audit Settings › Start Auditing <a href="https://learn.microsoft.com/power-platform/admin/manage-dataverse-auditing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>PATCH [Organization URI]/api/data/v9.2/organizations([Organization ID])</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/auditing/configure" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Where before-and-after field values can still be read: Dataverse audit data</strong><br><small>Environment</small><br><small class="controls__note">Needs the View Audit Summary privilege in the app; the Web API messages need prvReadRecordAuditHistory and prvReadAuditSummary. Reads values; does not send them to Purview.</small></td><td data-label="Admin UI"><strong>Model-driven app</strong><br>Settings › Advanced Settings › System › Auditing › Audit Summary view <a href="https://learn.microsoft.com/power-platform/admin/manage-dataverse-auditing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>GET [Organization URI]/api/data/v9.2/audits(&lt;audit id&gt;)/Microsoft.Dynamics.CRM.RetrieveAuditDetails</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/auditing/retrieve-audit-data" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Both rows are existing Dataverse controls. They decide whether auditing is on and where the values can be read; they do not restore the removed values to Purview, and the Learn notice names no step that does.

Changing audit settings needs the System Administrator or System Customizer role. Separately, the Power Platform activity logs page describes the **Enable SAS Logging in Purview** setting (Power Platform admin center > Manage > Environments > environment > Settings > Product > Privacy and Security > Storage Shared Access Signature (SAS) Security Settings > Enable SAS Logging in Purview), which gives Purview access to an environment's activity logs for each production environment. It is how events reach Purview, not a switch for the removed values.

## Open questions

- Does the Fields property that the Purview schema describes as holding created or updated values still carry any values for Dataverse events, or is it now empty? Watch the activity logs page for Dataverse and model-driven apps.
- Do columns with auditing turned off, or secured by column-level security, still appear in Purview events as "*", as the Manage Dataverse auditing page says? Watch that page and the Learn notice.
- The Learn notice says "Starting in May 2026" and the roadmap targets June CY2026: when did the change reach each tenant? Watch Message center and the roadmap item.
- Will Microsoft publish any licence or meter that applies to this change? Check the roadmap item and the Purview service description.

<!-- rationale
risk: Medium. Less sensitive data reaches Purview, but monitoring or compliance rules that compare old and new values in Purview stop working, according to Microsoft's notice.
cost: Low. The sources state no licence or meter for this change; the known cost is admin time to rework Purview-based monitoring. Licensing is not yet published.
impact: Medium. Security, compliance and Power Platform admins who search Purview or run pipelines on Dataverse audit events notice; the sources do not describe makers or end users as affected.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Governance guidance: Before rollout, second bullet / applicability: Production environments with auditing turned on in Audit settings are the environments whose events reach Purview. | Found: A Power Platform system admin or customizer needs to configure auditing in the Power Platform admin center and then turn on the Enable SAS Logging in Purview setting for each Power Platform production environment so Microsoft Purview auditing solutions can access the environment's activity logs. | Fix: Replace the checklist bullet with: 'Confirm which production environments have auditing turned on in Audit settings (controls table, row 1).' Remove the clause 'since those are the environments whose events reach Purview': auditing alone does not establish that Purview receives their events. | Source: https://learn.microsoft.com/power-platform/admin/activity-logging-auditing/activity-logs-overview
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model / licensing: The licensing model is unknown, with notes limiting the gap to this change and acknowledging surrounding licensing conditions. | Found: | Feature | Microsoft 365 E3/A3/A1/G3/F3/F1 | Office 365 E3/E1/A3/A1/G3/G1/F3 | Microsoft 365 Business Basic/Standard/Premium | | Audit (Standard) | Included | Included | Included | | Fix: Set licensing.model to included. Add to licensing.notes: 'Microsoft Purview Audit (Standard) is included in the plans listed in the Microsoft Purview service description, including Microsoft 365 E3 and Office 365 E3; no licence or meter specific to this removal is published.' Cite https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description
-->
