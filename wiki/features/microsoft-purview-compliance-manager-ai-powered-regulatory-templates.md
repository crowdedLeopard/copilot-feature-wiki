---
title: "Microsoft Purview Compliance Manager: AI-powered regulatory templates from regulation PDFs"
slug: "microsoft-purview-compliance-manager-ai-powered-regulatory-templates"
roadmapId: 523209
topic: "governance"
products: ["Microsoft Purview"]
summary: "Compliance Manager is planned to turn regulation PDFs into templates of controls and actions for assessments. Roadmap status is In development; Learn already documents PDF upload. No admin action is stated as required."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: "November CY2025"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Compliance Manager is included with Office 365 and Microsoft 365 licences; premium regulation templates require a purchased licence, though A5/E5/G5 organisations can choose three for free. A licence rule specific to PDF-created templates is not yet published."
audiences: ["compliance","security","m365-admin"]
tags: ["compliance-manager","purview","ai","governance"]
sources:
  - title: "Creating regulation templates in Compliance Manager"
    url: "https://learn.microsoft.com/purview/compliance-manager-create-template"
    kind: "learn"
  - title: "Learn about regulations in Compliance Manager"
    url: "https://learn.microsoft.com/purview/compliance-manager-regulations"
    kind: "learn"
  - title: "Get started with Compliance Manager"
    url: "https://learn.microsoft.com/purview/compliance-manager-setup"
    kind: "learn"
  - title: "Compliance Manager regulations list"
    url: "https://learn.microsoft.com/purview/compliance-manager-regulations-list"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 523209"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=523209"
    kind: "roadmap"
videos: []
related: ["microsoft-purview-compliance-manager-purview-compliance-manager-integration-with-microsoft"]
controls:
  - governs: "Creating a regulation template from a regulation PDF"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Compliance Manager > Regulations > Create new template > Upload PDF document > Scan and extract > Review draft template > Publish template"
      docs: "https://learn.microsoft.com/purview/compliance-manager-create-template"
    api: null
    note: "Needs the Compliance Manager Administration or Assessor role. Learn describes this procedure; the roadmap item is still In development."
  - governs: "Who can access the assessments built from a regulation template"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Compliance Manager > Regulations > regulation > Manage user access > role > Add readers / Add assessors / Add contributors"
      docs: "https://learn.microsoft.com/purview/compliance-manager-regulations"
    api: null
    note: "Roles set here apply to existing and future assessments created with that regulation. The last choice follows the selected Reader, Assessor or Contributor tab. Entra-assigned admins do not appear in the pane."
  - governs: "Tenant switch to turn PDF template creation on or off"
    scope: "tenant"
    ui: null
    api: null
    note: "None documented at the time of writing (November 2026); roles are the available limit."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-08-26T22:50:58"
changes:
  - date: "2026-11-22"
    note: "New briefing: roadmap item In development; Learn already documents PDF upload for regulation templates, but licensing and default are not stated."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 54 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected per-regulation access: removing a regulation-based role does not remove an overall Compliance Manager role. Extended two control paths and the Settings route, added the counter's Get started name, and removed two checklist bullets with no control row."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 64 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 64
  confirmed: 63
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "93d6520bbceb6f72b06924da35147685"
---

## What's changing

The roadmap item says this Purview Compliance Manager feature "shall enable customers to convert complex regulations from PDF documents to actionable controls and actions in multi cloud environment". Customers can then use the converted regulatory templates to create assessments, identify compliance gaps and implement controls.

Microsoft Learn already documents a related procedure, "Creating regulation templates in Compliance Manager". An admin uploads a regulatory PDF; the system analyses the document for malware, extracts controls and maps them to existing improvement actions. Detected errors are shown for correction, the admin edits or adds controls and maps actions manually, and then publishes the draft template. Learn requires a regulation document published by an official regulator or standards body, in PDF format only. Learn also documents starting from a blank template instead.

The Learn page does not call this AI-powered, does not label it preview or generally available, and does not mention the roadmap item, so it is not confirmed to be the same capability. Treat the roadmap text as the plan and the Learn page as the closest documented behaviour.

The roadmap record lists the status as In development, a target of October CY2026 and a preview date of November CY2025, with release phases Preview and General Availability, the Worldwide (Standard Multi-Tenant) cloud and the Web platform. The target month has passed at 22 November 2026 and the status is still In development. Microsoft has not stated what happens on arrival: the roadmap and Learn describe a capability an admin uses, not a default.

## Why it matters

Regulation templates are the starting point for Compliance Manager assessments, so the way a template's controls are extracted and mapped decides which gaps an assessment shows. Where the feature works as Learn describes, the compliance team reviews and corrects the draft before publishing, which makes that review the control that matters. Extraction and mapping errors that are published carry into every assessment built on the template.

If nobody acts, Microsoft has not stated that existing behaviour changes. The practical decision is whether your compliance team should use PDF-based templates, who may publish them, and whether any licence cost applies, which Microsoft has not yet published for this case.

## Risk assessment

**Data exposure**
- The uploaded file is a regulation PDF that Learn says must be published by an official regulator or standards body, which limits what is expected to be uploaded. Where the file is stored and processed is not yet documented.
- A role assigned in the Microsoft Purview portal extends by default to all regulations, so anyone with a Compliance Manager role can see a published template and its assessments. Per-regulation assignments apply at the assigned role level, but removing one does not remove an overall Compliance Manager role; change the overall role in the Microsoft Purview portal (see the controls table).

**Security & identity**
- Learn names the Compliance Manager Administration and Compliance Manager Assessor roles for uploading. The Compliance Manager role table lists Administration as the role that manages regulatory templates, so confirm which role your tenant needs.
- Learn states that the system analyses the uploaded document for malware.

**Autonomy & actions**
- The system extracts and maps controls on its own, but Learn has the admin review the draft and select **Publish template** before it can be used for assessments. No step in Learn publishes a template without that selection.

**Change & support**
- Extracted controls or mappings to improvement actions may be wrong; Learn shows detected errors and lets the admin edit controls and map actions manually. Expect compliance staff to compare the draft with the source PDF.
- The roadmap status is In development with a past target date, so the behaviour on your tenant may differ from the Learn procedure.

## Cost and licensing

**Licence.** The Microsoft Purview service description says Compliance Manager is available to organisations with Office 365 and Microsoft 365 licences, and that assessment availability and management capabilities depend on the licensing agreement. The Microsoft Data Protection Baseline template is available at all subscription levels. Regulations designated premium require a purchased licence; depending on the agreement, an organisation might use up to three more premium templates for free, and Learn states that A5/E5/G5 customers can choose three premium regulations for free.

**Meter.** The Learn page on creating regulation templates names roles and PDF format as its requirements and names no licence or meter. Whether a template created from a PDF counts towards the **Regulation licenses used** counter, which tracks templates in use against the number you are eligible to use, is not yet published. The Get started page calls these counters Free regulation licenses used/Purchased regulation licenses used.

**Indirect cost.** Admin and compliance time to review each extracted draft and correct controls and mappings.

## Scope

- **Users and roles:** Learn requires the Compliance Manager Administration or Compliance Manager Assessor role to create templates. Compliance Manager settings are accessible to users holding the Compliance Manager Administrator or Global Administrator role.
- **Cloud and platform:** the roadmap record lists Worldwide (Standard Multi-Tenant) and Web only.
- **Input:** a PDF regulation document from an official regulator or standards body. The upload steps also have the admin select applicable services.
- **Rollout:** status In development; target October CY2026; preview date November CY2025. No Message Center post was supplied for this item.

## Governance guidance

### Before rollout
- List the regulations your compliance team would upload and confirm each is a PDF published by an official regulator or standards body.

### At rollout
- Watch the roadmap item and Message center for a status change from In development.
- Pilot with one regulation: upload it, then compare the extracted controls and mapped improvement actions with the source PDF before selecting **Publish template**.
- Review per-regulation assignments in **Manage user access**; also review overall Compliance Manager roles, which removing a regulation-based role does not remove.

### After rollout
- Record who published each template and the publishing notes entered, so later reviewers can see what was checked.
- Re-read the Learn page for creating regulation templates when the roadmap status changes, and update your procedure.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Creating a regulation template from a regulation PDF</strong><br><small>Tenant</small><br><small class="controls__note">Needs the Compliance Manager Administration or Assessor role. Learn describes this procedure; the roadmap item is still In development.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Compliance Manager › Regulations › Create new template › Upload PDF document › Scan and extract › Review draft template › Publish template <a href="https://learn.microsoft.com/purview/compliance-manager-create-template" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can access the assessments built from a regulation template</strong><br><small class="controls__note">Roles set here apply to existing and future assessments created with that regulation. The last choice follows the selected Reader, Assessor or Contributor tab. Entra-assigned admins do not appear in the pane.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Compliance Manager › Regulations › regulation › Manage user access › role › Add readers / Add assessors / Add contributors <a href="https://learn.microsoft.com/purview/compliance-manager-regulations" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant switch to turn PDF template creation on or off</strong><br><small>Tenant</small><br><small class="controls__note">None documented at the time of writing (November 2026); roles are the available limit.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Compliance Manager role holders see regulations by default. Per-regulation assignments apply at the assigned role level, but removing one does not remove an overall Compliance Manager role; change the overall role in the Microsoft Purview portal. Compliance Manager settings, including **User access** for assessments and assessment templates, are reached in the Microsoft Purview portal through Settings > Compliance Manager > User access and are open to the Compliance Manager Administrator or Global Administrator role. Admins whose Compliance Manager permissions come from Microsoft Entra ID do not appear on the **Manage user access** pane.

The Compliance Manager settings page lists four setting types (Testing source, Manage user history, User access, Connectors) and none is a switch for PDF template creation. At the time of writing (November 2026), Microsoft Learn documents no tenant setting to turn the feature on or off and no API for it. Use roles as the limit.

## Open questions

- Is the Learn procedure "Upload PDF document" the capability in roadmap item 523209, and will the feature reach Preview or General Availability in the October CY2026 target or later? Watch the roadmap item and the Learn page.
- Does a template created from a PDF need a premium licence or count towards the **Regulation licenses used** counter?
- Where is an uploaded PDF stored and processed, and which AI service reads it?
- Will Microsoft add a tenant setting or API to control PDF template creation?

<!-- rationale
risk: Low. An administrator uploads a regulation PDF and must review and publish the draft template, so nothing in the sources changes existing data access. Microsoft has not stated a default on arrival.
cost: Low. Compliance Manager is included with Office 365 and Microsoft 365 licences, but premium regulation templates need a licence; whether a template built from a PDF needs one is not yet published.
impact: Low. Only people holding a Compliance Manager role who build or maintain regulation templates are named by Learn as users of the capability.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: At rollout; Risk assessment: Data exposure / consistency: The instruction to review overall Compliance Manager roles is represented in the controls table. | Found: also review overall Compliance Manager roles ... (see the controls table). The table covers PDF creation, per-regulation access and a missing tenant switch; it has no overall-role management row. | Fix: Remove '; also review overall Compliance Manager roles, which removing a regulation-based role does not remove' from the At rollout checklist bullet. Remove '(see the controls table)' from the Data exposure paragraph's instruction to change the overall role. Keep the verified overall-role explanation in the prose; do not add a control row.
-->
