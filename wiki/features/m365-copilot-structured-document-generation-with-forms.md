---
title: "SharePoint and Microsoft 365 Copilot: structured document generation with Forms"
slug: "m365-copilot-structured-document-generation-with-forms"
roadmapId: 545896
topic: "m365-copilot"
products: ["SharePoint","Microsoft Copilot (Microsoft 365)"]
summary: "Copilot licence holders can turn a Word template in a SharePoint library into a form that generates documents. Microsoft says it is on by default and needs no admin action; no feature-specific admin switch is documented."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "October CY2026"
previewDate: null
risk: "medium"
cost: "medium"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "per-user"
  notes: "Microsoft's notice MC1218000 says creating and configuring structured document forms requires a Microsoft 365 Copilot licence. The Learn page lists a Microsoft Copilot licence for form creators. No meter or price is stated."
audiences: ["m365-admin","service-owner","compliance","change-adoption"]
tags: ["sharepoint","m365-copilot","microsoft-forms","document-generation","power-automate","sensitivity-labels","licensing"]
sources:
  - title: "Microsoft 365 Roadmap 545896"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=545896"
    kind: "roadmap"
  - title: "Generate structured documents in a SharePoint document library"
    url: "https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-structured-document-generation"
    kind: "learn"
  - title: "MC1218000: (Updated) Microsoft 365 Copilot: Structured document generation with Forms"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1218000"
    kind: "message-center"
  - title: "Get started with Copilot in SharePoint"
    url: "https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started"
    kind: "learn"
  - title: "Turn off or turn on Microsoft Forms"
    url: "https://learn.microsoft.com/microsoft-forms/turn-off-turn-on-microsoft-forms"
    kind: "learn"
videos: []
related: ["copilot-credits"]
controls:
  - governs: "A switch specific to structured document generation"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents none at the time of writing (November 2026). Form creation requires a Copilot licence and Edit permission on the library."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-10-26T23:15:50"
changes:
  - date: "2026-11-17"
    note: "First briefing for roadmap item 545896, now Launched, covering the feature's default, licence requirement and the lack of a documented feature-specific switch."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 67 statements not yet confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 77 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 77
  confirmed: 75
  unconfirmed: 0
  contradicted: 2
  attempts: 0
  hash: "d0e6f46353529fbbf3df34581d433e0b"
---

## What's changing

Structured document generation lets a user in a SharePoint document library turn a Word template into a form. When someone submits the form, the system generates a new document from the template with the submitted values merged into its fields. Microsoft Learn describes two roles: a content manager who creates and governs the templates and forms, and a content consumer who fills in the form and receives the document.

To create a form, the Learn page says users select **Forms** in the library command bar, then **Document generation form**, and upload a Word (.docx) template. Copilot in SharePoint analyses the document and suggests fields such as names, dates and addresses, which the creator reviews. The creator can set field types, add conditional sections to the template, choose Word (.docx) or PDF output, set a file name pattern, and share the form link in Teams, Outlook, SharePoint agents or a SharePoint site page. Each generated document is saved to a folder in the library the form was set up in, with the submitted values captured as library metadata.

The roadmap record shows status Launched, with a target of October CY2026 and release phases General Availability and Preview, for Worldwide (Standard Multi-Tenant) on desktop and web. Microsoft's notice MC1218000 (updated 2 September 2026) says public preview began rolling out opt-in in mid-February 2026 and completed by the end of March 2026, and that from 15 June the public preview was to be on by default. It says general availability would begin rolling out in October 2026, to complete by the end of October 2026, and states that the feature will be on by default with no admin action required.

## Why it matters

This is a new way for people in your tenant to produce contracts, agreements, offer letters and similar documents, and Microsoft's notice says it is on by default. If nobody acts, licensed users can create forms and submitters can generate documents under existing SharePoint permissions. Microsoft Learn documents no switch specific to the feature, so the practical levers are who holds a Copilot licence, who has Edit permission on each library, and how the template and library are designed.

The value and the risk sit in the same place: a template becomes a repeatable source of formal documents. A wrong clause, a stale template or a mis-set condition is copied into every document the form generates. Service owners should decide who may own templates for legal, HR and procurement documents before business teams start publishing forms.

## Risk assessment

**Data exposure**

- Copilot in SharePoint analyses the uploaded Word template to suggest fields, so templates containing real names, rates or clauses are read by Copilot during form creation. Choose template content accordingly; Microsoft Learn does not describe any other processing.
- Generated documents land in the library folder the form creator configures, with submitted values stored as library columns, so personal data typed into a form becomes searchable metadata in that library. Microsoft's notice says existing SharePoint permissions and information management controls continue to apply.
- The Learn page says form submitters need only the form link and do not automatically receive access to the destination library. Without a separate grant, or the receipt option the page mentions, a submitter may not be able to open the document they generated.

**Security & identity**

- Anyone who can create a form needs Edit permission on the library and a Copilot licence. Review who holds Edit permission on libraries where documents are generated, because form creators write into those libraries.
- The Learn page says PDF generation does not work if sensitivity labels are enabled for the site or library, and describes support as coming soon. Sites that rely on labels should expect .docx output only for now.

**Autonomy & actions**

- Generation runs when a person submits the form; the Learn page describes no autonomous generation. The Power Automate actions **Form submitted (Preview)**, **Get form metadata (Preview)** and **Generate document from form (Preview)** let a flow trigger or create documents, so flow owners can generate documents without the form UI.
- The Learn page says Power Automate does not apply conditional field visibility, so a field the form hides can still be visible in a flow-generated document.

**Change & support**

- The Learn page says conditional sections in a document opened in Word for the web do not update when a field value is changed after generation. Expect support questions from users who edit generated documents online.
- Published forms are read-only in SharePoint; structural changes are made in the Word template and republished, and the form link stays the same. Submitters see the updated fields automatically, so a template edit changes live forms without a new link.

## Cost and licensing

Licence: Microsoft's notice MC1218000 says creating and configuring structured document forms requires a Microsoft 365 Copilot licence. The Learn page, **Generate structured documents in a SharePoint document library**, lists a Microsoft Copilot licence for content managers or users who create and configure forms, and Edit permission on the document library.

Meter: that page names no meter, credit rate or price for structured document generation, and no licence requirement for form submitters. Whether the feature consumes Copilot Credits is not stated there. The separate Copilot in SharePoint page says its "advanced work" capabilities use Copilot Credits through usage-based billing; it does not say whether structured document generation counts as advanced work. See [Copilot Credits](/concepts/copilot-credits/).

Indirect cost: admin and business-owner time to design templates, and library storage for generated documents. No price for either is published on the page.

## Scope

**Who creates forms:** users with a Microsoft 365 Copilot licence and Edit permission on the document library, using a Word (.docx) template. **Who submits:** per the Learn page, submitters need only the form link; Read access to the template is granted automatically.

**Rollout:** Microsoft's notice MC1218000 says all Microsoft 365 tenants using SharePoint Online are affected, with general availability starting to roll out in October 2026 and due to finish by the end of October 2026; Microsoft gives an end date of 30 November 2026 for the post. The roadmap record lists Worldwide (Standard Multi-Tenant) only, and platforms Desktop and Web. Other clouds are not listed on the record; that is not a statement that the feature is unavailable there.

**Limits from the Learn page:** only .docx templates; forms are read-only once published; PDF output does not work where sensitivity labels are enabled; Word for the web does not re-evaluate conditional sections after generation.

## Governance guidance

### Before rollout

- Tell the business teams who own contracts, HR letters and proposals that Microsoft's notice MC1218000 says the feature is on by default, and agree who may create templates.
- Identify which libraries hold documents that need sensitivity labels, and plan for .docx output because the Learn page says PDF generation does not work where sensitivity labels are enabled.
- Confirm which users hold a Microsoft 365 Copilot licence, since form creation requires one per the notice and the Learn page.

### At rollout

- Pilot one template per document type in a library that the template owners control, and test both a form submission and a Power Automate flow.
- Test that a submitter without library access can see the generated document, using the receipt option or a separate access grant described on the Learn page.
- Publish the form link on a SharePoint site page or in Teams, so one agreed link per template is circulated.

### After rollout

- Review generated documents and their metadata columns in each library to confirm that values typed into forms are acceptable to store there.
- Check flows that use the Preview Power Automate actions after each template change, because the Learn page says the flow does not apply conditional field visibility.
- Watch Message center and the Learn page for any admin setting for this feature.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>A switch specific to structured document generation</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents none at the time of writing (November 2026). Form creation requires a Copilot licence and Edit permission on the library.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no admin switch specific to structured document generation at the time of writing (November 2026), so the first row records that gap. Form creation depends on Edit permission on the document library and a Copilot licence, which are existing controls rather than feature settings.

Copilot in SharePoint has its own availability controls, including a **Site AI** panel and Restricted Content Discovery; see [Get started with Copilot in SharePoint](https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started). Microsoft has not confirmed that they govern structured document generation, and that page says the preview PowerShell controls are being retired. Microsoft Forms has its own on and off setting, described at [Turn off or turn on Microsoft Forms](https://learn.microsoft.com/microsoft-forms/turn-off-turn-on-microsoft-forms); whether it governs forms created in SharePoint libraries is also not confirmed.

## Open questions

- Is there, or will there be, a tenant or site setting that turns structured document generation off, and will Message center announce it?
- Does the Microsoft 365 Copilot licence requirement apply only to form creators, as the Learn page and MC1218000 describe, or will submitters need one? Watch the Learn page and Message center.
- Does structured document generation consume Copilot Credits, or does it stay within the Microsoft 365 Copilot licence? Check the Copilot in SharePoint page and Microsoft's billing guidance.
- Can people outside the organisation, such as guests, use a shared form link? The Learn page says submitters need only the form link and refers to users in your organisation.
- When will PDF generation work in libraries that use sensitivity labels? The Learn page says support is coming soon.

<!-- rationale
risk: Medium. Microsoft's notice says the feature is on by default, and Microsoft Learn documents no switch specific to it, so control rests on existing SharePoint permissions and library design.
cost: Medium. Microsoft's notice MC1218000 says creating and configuring forms requires a Microsoft 365 Copilot licence; the feature's page names no meter, and no extra charge is stated for submitters.
impact: Medium. Template owners and form creators with a Copilot licence see it first; form submitters across the organisation then receive generated documents, in a feature that is on by default.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Change & support; Scope: Limits / behaviour: Published forms are read-only in SharePoint. | Found: Forms are read-only once published. To make structural field changes, edit the template in Word and republish. ... Make non-structural changes such as showing or hiding fields, changing themes, and updating settings directly in the SharePoint form view. | Fix: Replace 'Published forms are read-only in SharePoint' and 'forms are read-only once published' with 'Published form fields require Word for structural changes; visibility, themes and settings remain editable in SharePoint', as qualified at https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-structured-document-generation. | Source: https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-structured-document-generation
- [contradicted, minor] front matter: action / consistency: The prepare action rating fits the standard for this launched, on-by-default feature with medium risk and cost and a decision to take. | Found: Fields: status 'launched', defaultState 'on', risk 'medium', cost 'medium', action 'prepare'. Checklist: 'agree who may create templates'. The standard assigns act-now to launched automatic changes with medium risk or cost and a decision to take. | Fix: Change front matter action from 'prepare' to 'act-now': on 24 November 2026 the feature is launched and on by default, and the briefing identifies a template-ownership decision to take.
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The controls table represents the checklist's instruction to check Copilot licence assignments. | Found: Checklist: 'Confirm which users hold a Microsoft 365 Copilot licence'. The only controls row is 'A switch specific to structured document generation'; no licence-assignment row appears. | Fix: Remove the Before rollout bullet 'Confirm which users hold a Microsoft 365 Copilot licence, since form creation requires one per the notice and the Learn page.' Retain the verified licence prerequisite elsewhere; do not add a control row.
-->
