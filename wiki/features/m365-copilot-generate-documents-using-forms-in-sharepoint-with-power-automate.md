---
title: "Power Automate: generate documents from SharePoint document generation forms"
slug: "m365-copilot-generate-documents-using-forms-in-sharepoint-with-power-automate"
roadmapId: 561026
topic: "power-platform"
products: ["Power Automate","SharePoint","Microsoft Copilot (Microsoft 365)"]
summary: "A new Power Automate action, Generate document from form (Preview), fills a Word template from mapped flow data and saves the result to SharePoint. Makers and form owners are affected."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: "May CY2026"
risk: "medium"
cost: "medium"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "per-user"
  notes: "The Learn page lists a Microsoft Copilot licence for users who create and configure forms. The action belongs to the Standard SharePoint connector, so standard-connector entitlements apply; no additional action-specific licence requirement is published."
audiences: ["m365-admin","power-platform-admin","service-owner","maker"]
tags: ["power-automate","sharepoint","document-generation","automation","connectors","data-policies","copilot"]
sources:
  - title: "Microsoft 365 Roadmap 561026"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=561026"
    kind: "roadmap"
  - title: "Generate structured documents in a SharePoint document library"
    url: "https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-structured-document-generation"
    kind: "learn"
  - title: "Microsoft SharePoint Connector in Power Automate"
    url: "https://learn.microsoft.com/sharepoint/dev/business-apps/power-automate/sharepoint-connector-actions-triggers"
    kind: "learn"
  - title: "SharePoint"
    url: "https://learn.microsoft.com/connectors/sharepointonline/"
    kind: "learn"
  - title: "Types of Power Automate licenses"
    url: "https://learn.microsoft.com/power-platform/admin/power-automate-licensing/types"
    kind: "learn"
  - title: "Manage data policies"
    url: "https://learn.microsoft.com/power-platform/admin/create-dlp-policy"
    kind: "learn"
  - title: "Add-ConnectorsToPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy"
    kind: "learn"
  - title: "Manage Permission Scopes in SharePoint"
    url: "https://learn.microsoft.com/sharepoint/manage-permission-scope"
    kind: "learn"
videos: []
related: ["m365-copilot-structured-document-generation-with-forms","m365-copilot-copilot-in-sharepoint"]
controls:
  - governs: "Which connectors flows in an environment may combine with the SharePoint connector"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Settings > Data and privacy > Data policy > + New Policy > Pre-built connectors > SharePoint > Move to Business"
      docs: "https://learn.microsoft.com/power-platform/admin/create-dlp-policy"
    api:
      kind: "powershell"
      call: "Add-ConnectorsToPolicy -PolicyName <policy GUID> -Classification Confidential -Connectors <connector objects>"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy"
    note: "Data policies govern which connectors a flow can combine with the SharePoint connector; this action is listed under that connector."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-11-04T00:02:09"
changes:
  - date: "2026-11-18"
    note: "First briefing for this item: the Power Automate action for document generation forms, its Preview labelling, licence prerequisites and the one general control found."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 6 of 54 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected after verification: removed the no-admin-action claim, narrowed library read access, stated the action is under the Standard SharePoint connector, and fixed the data policy path and applicability."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 54 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected after verification: the data policy row now gives the full path to moving SharePoint to the Business group and the Add-ConnectorsToPolicy command, the data policy roles are stated as the page gives them, and the unpublished storage-figure claim is removed."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 57 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 58 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 58
  confirmed: 57
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "f75e8de19af7b8ea1704cc185ad8b197"
---

## What's changing

Power Automate gains an action, **Generate document from form (Preview)**, that creates a document from a document generation template by mapping input data to the template's fields and saves the output to a SharePoint library. The roadmap item adds that the action returns the generated document with file metadata such as location and status, and gives contracts, invoices, letters and reports as example uses.

The action builds on document generation forms in SharePoint. A content manager turns a Word (.docx) template into a form from the **Forms** command in a document library; a person who submits the form gets a generated document saved into the library folder the form creator chose. Learn lists two companion Power Automate items, also marked Preview: **Form submitted (Preview)**, which triggers a flow when a form is submitted, and **Get form metadata (Preview)**, which retrieves the form structure so responses can be mapped to fields.

The roadmap record shows status Launched, with a preview date of May CY2026 and a target date of October CY2026, and lists General Availability and Preview as release phases. Learn still labels all three Power Automate items "(Preview)", and the SharePoint connector page says document generation forms are part of AI in SharePoint Public Preview. The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform. No Message Center post was supplied for this item.

## Why it matters

This moves document creation out of a form that a person submits and into flows that makers build, so documents such as contracts and invoices can be created on a trigger with no person present at the keyboard. Expect documents to appear in SharePoint libraries from flows that an administrator may not know exist.

Microsoft has not stated what happens on arrival: the roadmap says Launched while Learn and the connector page still say Preview and that access may be limited to customers enrolled in the preview programme. Treat it as something to review, not a change that reaches users by itself, and confirm in your tenant whether the action appears for makers.

## Risk assessment

**Data exposure**

- A flow writes each generated document to the SharePoint library the form is configured for, with the submitted values merged into the template. Users with read access to a generated document can read the merged values, so check library permissions before a flow starts populating it.
- Learn says form submitters do not automatically receive access to the destination library; the form creator grants it separately or enables the receipt option. Flow-generated documents may therefore sit where the requester cannot see them.

**Security & identity**

- Creating a form needs Edit permissions on the document library, and the Learn page lists a Microsoft Copilot licence for those who create and configure forms. Review who holds Edit on libraries that will host templates.
- Microsoft Learn does not describe which identity the action runs under. Confirm the connection used in a test flow before relying on it for sensitive libraries.

**Autonomy & actions**

- The action runs as a step in an automated flow, so documents are created whenever the flow's trigger fires. Learn lists approvals and notifications as workflows a flow can start after a submission.

**Change & support**

- Learn states that PDF generation does not work if sensitivity labels are enabled for the site or library, so flows set to produce PDF there are affected. The same page says support is coming soon.
- All three Power Automate items are labelled Preview on Learn, which can change before general availability. Avoid building business-critical contract flows on them without a fallback.

## Cost and licensing

Learn's prerequisites for structured document generation list a Microsoft Copilot licence for content managers, or users who create and configure forms, and Edit permissions on the document library. The page does not name a licence for form submitters and gives no price.

For the flow side, the SharePoint connector reference lists the connector as Standard class in Power Automate, and Generate a document from a form (preview) is listed as an operation of the Standard SharePoint connector. The Power Automate licence page says the standard connectors entitlement is needed to add a standard connector to a cloud flow and trigger it, and that the Free licence includes creating and running cloud flows (without sharing) with connector use limited to standard connectors. The action belongs to the Standard SharePoint connector, so standard-connector entitlements apply. Microsoft has not published an additional action-specific licence requirement, a meter or a credit rate for this action.

Indirect costs are maker time to map fields and SharePoint library storage for the generated files.

## Scope

- **Roadmap record:** Worldwide (Standard Multi-Tenant); Web; Power Automate, SharePoint and Microsoft Copilot (Microsoft 365) products. Other clouds are not listed on the record.
- **Template:** the source document must be a Microsoft Word document (.docx format).
- **Who creates forms:** users with Edit permissions on the document library who hold a Microsoft Copilot licence.
- **Who submits:** users with the form link; Learn says Read access to the template is granted automatically and that submitters do not need access to the destination library.
- **Rollout:** the SharePoint connector page says access to document generation capabilities may be limited to customers enrolled in the preview programme, and its section on the action says document generation forms are available only to customers enrolled in the preview programme. Microsoft has not stated a rollout mechanism or default state beyond the roadmap record.

## Governance guidance

### Before rollout

- Ask makers which flows use or plan to use Generate document from form, Form submitted or Get form metadata, and which libraries they write to.
- Review Edit permissions on the libraries that will hold templates and generated documents, because Edit is what lets a user create a form.
- Check which Microsoft Copilot licences are assigned to the content managers who will build the forms.
- Review whether the environments where makers build these flows are covered by a data policy that includes the SharePoint connector (controls table).

### At rollout

- Build one test flow with a template and a non-sensitive library, and check which connection it uses and where the output lands.
- Check whether generated files must be PDF; if so, test on a library without sensitivity labels, as Learn says PDF generation does not work where they are enabled.
- Tell makers the actions are labelled Preview on Learn and that behaviour can change.

### After rollout

- Review the destination libraries for who can open the generated documents, since submitters do not automatically get access.
- Re-check the Learn page and the roadmap item for the removal of the Preview labels, a published licence requirement specific to the action and any admin setting.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which connectors flows in an environment may combine with the SharePoint connector</strong><br><small>Environment</small><br><small class="controls__note">Data policies govern which connectors a flow can combine with the SharePoint connector; this action is listed under that connector.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Settings › Data and privacy › Data policy › + New Policy › Pre-built connectors › SharePoint › Move to Business <a href="https://learn.microsoft.com/power-platform/admin/create-dlp-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-ConnectorsToPolicy -PolicyName &lt;policy GUID&gt; -Classification Confidential -Connectors &lt;connector objects&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The data policy row is a general Power Platform control. Data policies govern which connectors a flow can combine with the SharePoint connector; this action is listed under that connector. The data policy page says the Block action is not available for connectors like SharePoint, so a policy can place the connector in a data group but, on that page's wording, not block it. Tenant-level data policies require the Power Platform Administrator role. Environment-level data policies require Power Apps Environment Admin permissions, or the System Administrator role for environments with a Dataverse database.

Access to create a form is set by SharePoint library permissions (Edit), not by a Power Automate setting. Microsoft Learn describes no tenant switch for document generation forms or for the three Power Automate items at the time of writing (November 2026); see Open questions.

## Open questions

- Is there an administrator setting that turns document generation forms, or the Power Automate actions for them, on or off for a site or tenant? Watch the Learn page for structured document generation.
- Will Microsoft publish a meter or an action-specific licence requirement for a flow run that uses Generate document from form? Watch the SharePoint connector reference and the Power Automate licensing pages.
- Which identity does the action use to write to the destination library?
- When do the three actions leave Preview, given that the roadmap lists General Availability and Learn still says Preview?

<!-- rationale
risk: Medium. Any flow can write generated documents to a SharePoint library, and the data policy page says the Block action is not available for connectors like SharePoint, so a data policy is not a switch-off for it.
cost: Medium. Users who create and configure the forms need a Microsoft Copilot licence; the action is listed under the Standard SharePoint connector, and Microsoft has not published an additional action-specific licence requirement.
impact: Medium. Makers building flows and content managers who own templates notice it; people who submit forms need only the form link, and nothing is documented that changes what other users see.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing: second paragraph / admin-path: A content manager starts turning a Word template into a form through the Forms command in a SharePoint document library. | Found: In a SharePoint document library, select Forms from the command bar. Select Document generation form to start the form creation process. | Fix: Complete the sentence's route as 'Forms > Document generation form' in a SharePoint document library, as documented at https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-structured-document-generation. | Source: https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-structured-document-generation
- [contradicted, minor] Governance guidance: Before rollout and After rollout / consistency: The governance checklist's permission and licence controls are represented in the controls table. | Found: Review Edit permissions ... Check which Microsoft Copilot licences are assigned ... Review the destination libraries for who can open the generated documents. The sole controls-table row governs connector combinations. | Fix: The Before rollout steps to review library Edit permissions and Copilot licence assignments, and the After rollout step to review generated-document access, have no corresponding controls-table rows. Do not add rows as part of this correction.
-->
