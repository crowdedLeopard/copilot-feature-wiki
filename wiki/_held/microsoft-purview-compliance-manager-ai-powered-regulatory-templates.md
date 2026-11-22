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
      path: "Compliance Manager > Regulations > Create new template > Upload PDF document"
      docs: "https://learn.microsoft.com/purview/compliance-manager-create-template"
    api: null
    note: "Needs the Compliance Manager Administration or Assessor role. Learn describes this procedure; the roadmap item is still In development."
  - governs: "Who can access the assessments built from a regulation template"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Compliance Manager > Regulations > regulation > Manage user access"
      docs: "https://learn.microsoft.com/purview/compliance-manager-regulations"
    api: null
    note: "Roles set here apply to existing and future assessments created with that regulation. Entra-assigned admins do not appear in the pane."
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
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 54
  confirmed: 52
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "eeb5300a2ee8937a739ab18966790248"
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
- A role assigned in the Microsoft Purview portal extends by default to all regulations, so anyone with a Compliance Manager role can see a published template and its assessments unless you restrict access per regulation (see the controls table).

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

**Meter.** The Learn page on creating regulation templates names roles and PDF format as its requirements and names no licence or meter. Whether a template created from a PDF counts towards the **Regulation licenses used** counter, which tracks templates in use against the number you are eligible to use, is not yet published.

**Indirect cost.** Admin and compliance time to review each extracted draft and correct controls and mappings.

## Scope

- **Users and roles:** Learn requires the Compliance Manager Administration or Compliance Manager Assessor role to create templates. Compliance Manager settings are accessible to users holding the Compliance Manager Administrator or Global Administrator role.
- **Cloud and platform:** the roadmap record lists Worldwide (Standard Multi-Tenant) and Web only.
- **Input:** a PDF regulation document from an official regulator or standards body. The upload steps also have the admin select applicable services.
- **Rollout:** status In development; target October CY2026; preview date November CY2025. No Message Center post was supplied for this item.

## Governance guidance

### Before rollout
- Review who holds the Compliance Manager Administration and Compliance Manager Assessor roles, and confirm each holder should be able to create and publish templates.
- List the regulations your compliance team would upload and confirm each is a PDF published by an official regulator or standards body.
- Check the **Regulation licenses used** counter on the Regulations page and your licensing agreement before building templates you intend to assess against.

### At rollout
- Watch the roadmap item and Message center for a status change from In development.
- Pilot with one regulation: upload it, then compare the extracted controls and mapped improvement actions with the source PDF before selecting **Publish template**.
- Use **Manage user access** on the regulation details page to limit who works on assessments built from a published template.

### After rollout
- Record who published each template and the publishing notes entered, so later reviewers can see what was checked.
- Re-read the Learn page for creating regulation templates when the roadmap status changes, and update your procedure.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Creating a regulation template from a regulation PDF</strong><br><small>Tenant</small><br><small class="controls__note">Needs the Compliance Manager Administration or Assessor role. Learn describes this procedure; the roadmap item is still In development.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Compliance Manager › Regulations › Create new template › Upload PDF document <a href="https://learn.microsoft.com/purview/compliance-manager-create-template" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can access the assessments built from a regulation template</strong><br><small class="controls__note">Roles set here apply to existing and future assessments created with that regulation. Entra-assigned admins do not appear in the pane.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Compliance Manager › Regulations › regulation › Manage user access <a href="https://learn.microsoft.com/purview/compliance-manager-regulations" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant switch to turn PDF template creation on or off</strong><br><small>Tenant</small><br><small class="controls__note">None documented at the time of writing (November 2026); roles are the available limit.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Compliance Manager role holders see regulations by default, so per-regulation access is the narrowing control. Compliance Manager settings, including **User access** for assessments and assessment templates, are reached from the Settings icon in the Microsoft Purview portal and are open to the Compliance Manager Administrator or Global Administrator role. Admins whose Compliance Manager permissions come from Microsoft Entra ID do not appear on the **Manage user access** pane.

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

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Data exposure; Governance controls; Governance guidance: At rollout / applicability: Restricting access per regulation is sufficient to narrow the all-regulation access of an existing overall Compliance Manager role holder. | Found: Removing a regulation-based role won't remove the user's overall Compliance Manager role if they have one. If you want to change a user's overall role, you have to change it in the Microsoft Purview portal. | Fix: Replace the 'unless you restrict access per regulation' clause with: 'Per-regulation assignments apply at the assigned role level, but removing one does not remove an overall Compliance Manager role; change the overall role in the Microsoft Purview portal.' Replace 'per-regulation access is the narrowing control' with the same qualification. In the rollout checklist, say 'Review per-regulation assignments in Manage user access; also review overall Compliance Manager roles, which removing a regulation-based role does not remove.' Source: https://learn.microsoft.com/purview/compliance-manager-regulations#grant-user-access-to-regulations. | Source: https://learn.microsoft.com/purview/compliance-manager-regulations
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing: Meter; Governance guidance: Before rollout / licensing: Regulation licenses used on the Regulations page tracks templates in use against entitlement. | Found: The Regulation licenses used counter near the top of the Regulations page represents the number of regulatory templates in use out of the number you're eligible to use according to your licensing agreement and any purchased licenses. | Fix: Add after the counter description: 'The Get started page calls these counters Free regulation licenses used/Purchased regulation licenses used.' Both names are documented; retain the existing counter description. See https://learn.microsoft.com/purview/compliance-manager-setup#regulations-page. | Source: https://learn.microsoft.com/purview/compliance-manager-regulations
- [supported, minor] controls[0].ui; Governance controls table / admin-path: PDF template creation is reached at Microsoft Purview portal > Compliance Manager > Regulations > Create new template > Upload PDF document. | Found: From your Regulations page, select Create new template. ... Select Upload PDF document. ... Select Scan and extract. ... select Review draft template. ... When you're satisfied, select Publish template. | Fix: Extend controls[0].ui.path and its rendered copy to 'Compliance Manager > Regulations > Create new template > Upload PDF document > Scan and extract > Review draft template > Publish template'. The existing path stops early in the documented creation procedure; applicable services and form fields can remain in the prose. | Source: https://learn.microsoft.com/purview/compliance-manager-create-template
- [supported, minor] controls[1].ui; Governance controls table; Governance guidance: At rollout / admin-path: Per-regulation user access is reached at Microsoft Purview portal > Compliance Manager > Regulations > regulation > Manage user access. | Found: Select it to open its details page. ... select Manage user access. ... Navigate to the tab for the role you want your user to hold for this regulation. ... Add readers, or Add assessors or Add contributors. | Fix: Extend controls[1].ui.path and its rendered copy to 'Compliance Manager > Regulations > regulation > Manage user access > role > Add readers / Add assessors / Add contributors'. State in the note that the last choice follows the selected Reader, Assessor or Contributor tab. The existing path stops at the pane holding the control. | Source: https://learn.microsoft.com/purview/compliance-manager-regulations
- [supported, minor] Governance controls / admin-path: Compliance Manager settings, including User access, are reached from the Settings icon in the Purview portal. | Found: select the Settings icon at the top of the page, then select Compliance Manager. ... User access: Allows you to view and manage user roles for access to assessments or assessment templates. | Fix: Replace the navigation clause with 'are reached in the Microsoft Purview portal through Settings > Compliance Manager > User access'. This completes the prose's abbreviated description of the route. | Source: https://learn.microsoft.com/purview/compliance-manager-setup
- [contradicted, minor] Governance guidance: Before rollout / consistency: The checklist asks readers to inventory Compliance Manager role holders and check the licence counter without corresponding control rows. | Found: Review who holds the Compliance Manager Administration and Compliance Manager Assessor roles ... Check the Regulation licenses used counter ... Controls rows cover PDF creation, per-regulation access and the absent tenant switch. | Fix: The role-holder inventory and Regulation licenses used counter checks have no corresponding table rows. Remove those two checklist bullets; retain the existing role and licensing discussion. Do not add control rows during correction.
-->
