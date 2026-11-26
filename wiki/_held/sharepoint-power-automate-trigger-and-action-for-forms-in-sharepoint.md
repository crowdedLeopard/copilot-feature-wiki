---
title: "SharePoint forms: Power Automate trigger \"When a form is submitted\" and action \"Get form metadata\""
slug: "sharepoint-power-automate-trigger-and-action-for-forms-in-sharepoint"
roadmapId: 561025
topic: "power-platform"
products: ["Microsoft 365","Power Automate","SharePoint"]
summary: "Power Automate gets a SharePoint trigger and an action for list, file upload and document generation forms. Makers can start flows on submission; no admin action is documented, but data policies are the control to check."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: "May CY2026"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn lists the SharePoint connector among Standard tier connectors, and a Standard connectors entitlement is needed to use one in a cloud flow. Creating document generation forms needs a Microsoft Copilot licence. A rate or licence specific to these two operations is not yet published."
audiences: ["service-owner","maker","power-platform-admin","m365-admin"]
tags: ["sharepoint","power-automate","triggers","document-generation","connectors","data-policies","automation","approvals"]
sources:
  - title: "Microsoft 365 Roadmap 561025"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=561025"
    kind: "roadmap"
  - title: "Microsoft SharePoint Connector in Power Automate"
    url: "https://learn.microsoft.com/sharepoint/dev/business-apps/power-automate/sharepoint-connector-actions-triggers"
    kind: "learn"
  - title: "Generate structured documents in a SharePoint document library"
    url: "https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-structured-document-generation"
    kind: "learn"
  - title: "Manage data policies"
    url: "https://learn.microsoft.com/power-platform/admin/prevent-data-loss"
    kind: "learn"
  - title: "Connector action control"
    url: "https://learn.microsoft.com/power-platform/admin/dlp-granular-controls"
    kind: "learn"
  - title: "Types of Power Automate licenses"
    url: "https://learn.microsoft.com/power-platform/admin/power-automate-licensing/types"
    kind: "learn"
  - title: "List of all Standard tier connectors"
    url: "https://learn.microsoft.com/connectors/connector-reference/connector-reference-standard-connectors"
    kind: "learn"
  - title: "Add-ConnectorsToPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy"
    kind: "learn"
videos: []
related: ["m365-copilot-generate-documents-using-forms-in-sharepoint-with-power-automate","m365-copilot-structured-document-generation-with-forms"]
controls:
  - governs: "Which connectors flows using the SharePoint connector may combine with"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Settings > Data and privacy > Data policy > policy > Edit Policy > Prebuilt connectors > SharePoint > Move to Business"
      docs: "https://learn.microsoft.com/power-platform/admin/prevent-data-loss"
    api:
      kind: "powershell"
      call: "Add-ConnectorsToPolicy -PolicyName <policy GUID> -Classification Confidential -Connectors <connector objects>"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy"
    note: "Existing control, not specific to the new operations. SharePoint is not blockable, so Block is not offered. The role needed depends on the policy level; see the notes below the table."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-19"
roadmapModified: "2026-04-29T23:15:48"
changes:
  - date: "2026-11-18"
    note: "New briefing: Learn already documents the form trigger and metadata action; document generation forms remain in preview."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 42 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected the data policy admin path and the roles needed to edit a policy, and removed a rollout step that had no matching control."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 48 statements confirmed"
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 62 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 62
  confirmed: 59
  unconfirmed: 2
  contradicted: 1
  attempts: 1
  hash: "fc426e711c6d28b1b5306cf0fb96cd77"
---

## What's changing

Power Automate gains a trigger, **When a form is submitted**, and an action, **Get form metadata**, for forms in SharePoint. The trigger starts a flow when a list form, file upload form or document generation form is submitted, so a maker can start approvals, notifications or routing from a submission. The action returns the form's metadata: its ID, title, link, form type, output format and the questions that collect responses, so a flow can read the form's structure before it acts.

Microsoft Learn already documents both operations in its SharePoint connector article. It says the trigger provides the form ID, responder information, submission time and responses to form questions, and, for forms that support file upload or document generation, metadata about uploaded or generated documents where applicable. The same article lists a separate action, **Generate a document from a form**, which it says is supported only for document generation forms. The document generation page labels all three operations (Preview).

Document generation forms are part of the AI in SharePoint Public Preview, and access may be limited to customers enrolled in the preview program. List forms and file upload forms are not part of that preview.

The roadmap item is **In development**, with a preview target of May CY2026 and a general availability target of June CY2026, for Worldwide (Standard Multi-Tenant) on the web. Both dates are targets and have passed at the time of writing (November 2026) with the status unchanged. The record lists General Availability and Preview as release phases and does not say which operation or form type is in which phase.

## Why it matters

Submissions to SharePoint forms become a source of automated actions. Anything a form collects, including responder details and uploaded-document metadata, can reach whatever a maker adds after the trigger: email, approvals, other connectors. That is useful for the business and widens where form data can travel, so service owners should treat these flows like any other flow built on SharePoint data.

Microsoft has not stated what happens on arrival, such as whether the operations appear for all makers at once. Nothing in the roadmap or Learn says existing forms or flows change, so the practical decision is whether your data policies already cover flows that use the SharePoint connector, and who in your organisation is allowed to build them.

## Risk assessment

**Data exposure**
- The trigger carries responder information, submission time and the answers to form questions. A flow can pass those to any connector its maker adds, and the data policy covering the SharePoint connector decides which connector combinations are allowed (see the controls table).
- For file upload and document generation forms the trigger can include metadata about uploaded or generated documents, so document names and locations can leave SharePoint through a flow.

**Security & identity**
- Learn says form submitters on document generation forms need only the form link, so whoever holds the link can submit, and a submission is the event that fires the trigger.
- Learn says form creators need Edit permission on the document library and, for document generation forms, a Microsoft Copilot licence.

**Autonomy & actions**
- The trigger runs a flow on each submission without a person starting it. What follows (approve, notify, route) is whatever the maker builds, so review the downstream actions rather than the trigger.

**Change & support**
- Document generation forms and the new operations are labelled Preview on Learn, and access to document generation may be limited to enrolled customers, so expect behaviour to change and support to be limited.
- Learn says Power Automate does not apply a form's conditional visibility, so a required field the form hides will still be visible in a document generated through a flow; make such fields optional.

## Cost and licensing

Learn's Power Automate licensing page says a Standard connectors entitlement is needed to add a standard connector to a cloud flow and trigger it, and the connector reference lists the SharePoint connector under Standard tier connectors. That page does not say which operations of the connector are covered individually, and the connector article names no separate meter or price for **When a form is submitted** or **Get form metadata**. A licence or rate specific to these two operations is not yet published.

Creating document generation forms needs a Microsoft Copilot licence assigned to the form creator, according to the document generation page. That requirement is stated for creating forms; the page does not tie it to flows. Indirect cost is maker and admin time to review the new flows.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) and the web platform. It does not list the US Government clouds.

List forms and file upload forms are outside the AI in SharePoint preview. Document generation forms are inside it, and access may be limited to enrolled customers. Learn says creating a document generation form needs Edit permission on the document library and a Microsoft Copilot licence; the connector article does not state the permissions a flow owner needs to use the trigger or action on someone else's form.

## Governance guidance

### Before rollout
- Identify which environments let makers use the SharePoint connector and confirm the data policy covering them (Power Platform admin center > Security > Settings > Data and privacy > Data policy > policy > Edit Policy > Prebuilt connectors > SharePoint > Move to Business).
- Decide who may create document generation forms and who holds the Microsoft Copilot licence they need.
- Tell makers that document generation forms are in preview and may be limited to enrolled customers.

### At rollout
- Review new flows that use the **When a form is submitted** trigger, and which connectors follow it.

### After rollout
- Re-read the SharePoint connector article when the roadmap status changes from In development, to see whether the Preview labels have gone.
- Revisit the data policy classification if flows start combining form responses with connectors outside the Business group.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which connectors flows using the SharePoint connector may combine with</strong><br><small>Environment</small><br><small class="controls__note">Existing control, not specific to the new operations. SharePoint is not blockable, so Block is not offered. The role needed depends on the policy level; see the notes below the table.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Settings › Data and privacy › Data policy › policy › Edit Policy › Prebuilt connectors › SharePoint › Move to Business <a href="https://learn.microsoft.com/power-platform/admin/prevent-data-loss" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-ConnectorsToPolicy -PolicyName &lt;policy GUID&gt; -Classification Confidential -Connectors &lt;connector objects&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Data policies decide which connectors a flow may combine with the SharePoint connector; they do not decide whether a maker may use these two operations. Learn's data policy walkthrough says that for connectors like SharePoint that are not blockable, the Block action is not available. Learn's connector action control page, which allows or blocks individual actions and triggers, says it can be configured for blockable connectors and not for unblockable ones, so confirm in your tenant before relying on it for these operations.

Tenant-level policies require the Power Platform Administrator role. Environment-level policies require Environment Admin permissions, or the System Administrator role for environments with a Dataverse database. Environment admins cannot edit policies created by the tenant admin, and environment-level policies cannot override tenant-wide ones, per the data policy page.

## Open questions

- Which licence, if any, applies specifically to **When a form is submitted** and **Get form metadata**? Watch the SharePoint connector reference and the Power Automate licensing page.
- Which connection and permissions does a flow need to use the trigger on a form its owner did not create? Watch the SharePoint connector article.
- Will Microsoft document an admin switch in the SharePoint admin center or Power Platform admin center that limits these operations? Watch Message center and the SharePoint connector article.
- When will the Preview labels come off, given the May and June CY2026 targets have passed with the item still In development? Watch the roadmap item.

<!-- rationale
risk: Medium. The trigger passes responder details and form responses into flows, which can route them onward; the data policy covering the SharePoint connector is the main control, and Learn describes SharePoint as a connector that cannot be blocked.
cost: Low. Learn's connector article names no separate charge for the trigger or action; the cost shown is maker time plus the licences already needed for the SharePoint connector and, for document generation forms, a Microsoft Copilot licence for form creators.
impact: Low. Makers who build flows on SharePoint forms notice it; the roadmap and Learn describe no change for form submitters or for users who build no flow.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Security & identity / availability: Whoever holds a document generation form link can submit. | Found: After you publish the form, share the form link so users in your organization can submit forms and generate documents. | Fix: Replace 'so whoever holds the link can submit' with 'and describes sharing the form link with users in your organization'. The source does not establish unrestricted submission by anyone holding a link. | Source: https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-structured-document-generation
- [unsupported, major] Risk assessment: Data exposure, second bullet / behaviour: The uploaded or generated document metadata carried by the submission trigger includes document names. | Found: Searched: SharePoint When a form is submitted metadata name location. Read connector article/reference and document generation page. The trigger's outputs are dynamic; explicit Name metadata is documented for Generate a document from a form, not this trigger. | Fix: Replace 'so document names and locations can leave SharePoint through a flow' with 'so that metadata can leave SharePoint through a flow'. The submission trigger article does not enumerate its document metadata fields.
- [unsupported, major] Risk assessment: Data exposure, second bullet / behaviour: The uploaded or generated document metadata carried by the submission trigger includes document locations. | Found: Searched: SharePoint When a form is submitted metadata name location. Read connector article/reference and document generation page. The trigger's outputs are dynamic; explicit location metadata is documented for Generate a document from a form, not this trigger. | Fix: Replace 'so document names and locations can leave SharePoint through a flow' with 'so that metadata can leave SharePoint through a flow'. The submission trigger article does not enumerate its document metadata fields.
-->
