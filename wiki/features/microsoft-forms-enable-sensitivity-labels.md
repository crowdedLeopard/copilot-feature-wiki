---
title: "Microsoft Forms: sensitivity labels on forms and generated Excel files"
slug: "microsoft-forms-enable-sensitivity-labels"
roadmapId: 528932
topic: "modern-work"
products: ["Forms"]
summary: "Microsoft plans to let Forms authors and co-authors assign sensitivity labels to forms, with Excel files generated from Forms inheriting the label. Still in development and not yet documented on Learn; no admin action is known."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2025"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "The Purview service description lists manual sensitivity labelling as Included for plans such as Microsoft 365 E5/A5/G5/E3/A3/G3/F1/F3/Business Premium. It does not mention Forms, and no licence or price specific to this feature is published."
audiences: ["m365-admin","compliance","security"]
tags: ["microsoft-forms","sensitivity-labels","information-protection","purview","excel","data-governance"]
sources:
  - title: "Microsoft 365 Roadmap: Microsoft Forms: Enable Sensitivity Labels"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=528932"
    kind: "roadmap"
  - title: "Administrator settings for Microsoft Forms"
    url: "https://learn.microsoft.com/microsoft-forms/administrator-settings-microsoft-forms"
    kind: "learn"
  - title: "Turn off or turn on Microsoft Forms"
    url: "https://learn.microsoft.com/microsoft-forms/turn-off-turn-on-microsoft-forms"
    kind: "learn"
  - title: "Set up Microsoft Forms"
    url: "https://learn.microsoft.com/microsoft-forms/set-up-microsoft-forms"
    kind: "learn"
  - title: "Admin information"
    url: "https://learn.microsoft.com/microsoft-forms/admin-information"
    kind: "learn"
  - title: "Learn about sensitivity labels"
    url: "https://learn.microsoft.com/purview/sensitivity-labels"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "formsSettings resource type"
    url: "https://learn.microsoft.com/graph/api/resources/formssettings?view=graph-rest-beta"
    kind: "learn"
  - title: "Update adminForms"
    url: "https://learn.microsoft.com/graph/api/adminforms-update?view=graph-rest-beta"
    kind: "learn"
  - title: "Set-MgUserLicense"
    url: "https://learn.microsoft.com/powershell/module/microsoft.graph.users.actions/set-mguserlicense"
    kind: "learn"
  - title: "Assign Microsoft 365 licenses to user accounts with PowerShell"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
videos: []
related: ["sensitivity-labels","m365-copilot-surveys-agent-and-copilot-chat-in-microsoft-forms"]
controls:
  - governs: "Switch for sensitivity labels in Microsoft Forms"
    scope: "tenant"
    ui: null
    api: null
    note: "No label setting is documented on the Forms admin settings page or in the formsSettings resource at the time of writing (November 2026)."
  - governs: "Organisation-wide Forms options such as external sharing (existing control; does not govern labels)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org settings > Services > Microsoft Forms > External sharing"
      docs: "https://learn.microsoft.com/microsoft-forms/administrator-settings-microsoft-forms"
    api:
      kind: "graph"
      call: "PATCH /beta/admin/forms"
      docs: "https://learn.microsoft.com/graph/api/adminforms-update?view=graph-rest-beta"
    note: "Beta API; the request body sets the settings property (formsSettings). UI settings are documented for Education and Apps for business customers only."
  - governs: "Whether an individual user can use Microsoft Forms (existing control; does not govern labels)"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Manage product licenses > Licenses and Apps > Apps > Microsoft Forms"
      docs: "https://learn.microsoft.com/microsoft-forms/turn-off-turn-on-microsoft-forms"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId <user ID> -AddLicenses $addLicenses -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.graph.users.actions/set-mguserlicense"
    note: "Turning Forms off for a user stops that user using Forms. Disable the Forms service plan through DisabledPlans inside the AddLicenses value."
confidence: "low"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2025-11-21T00:00:57"
changes:
  - date: "2026-11-25"
    note: "First briefing for this item: roadmap description only, with no Learn page on the feature and no label setting in the existing Forms admin controls."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 49 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected: removed the claim that existing Forms settings and Purview label configuration are the only levers, and dropped two checklist steps (label selection, audit log search) that had no control row."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 53 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 53
  confirmed: 53
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "216ec3aeb8c810dc53ae28cedab4aa87"
---

## What's changing

The roadmap item says Microsoft Forms will enable sensitivity labels. Authors and co-authors will be able to manually assign or edit a label on a form, so that only users with appropriate permissions can access the form's design and response pages. Excel files generated from Forms will inherit the label.

Microsoft Learn does not describe this feature at the time of writing (November 2026), so everything above is the roadmap's description. Learn's sensitivity labels page names Word, Excel, PowerPoint and Outlook on the Office desktop apps and Office for the web as supporting labels and says 'For other apps, check their documentation'. The Forms administrator pages on Learn list no label setting. Microsoft has not stated whether the feature is on or off on arrival.

The record gives status In development, a target of December CY2025, release phase General Availability, platform Web and cloud Worldwide (Standard Multi-Tenant). It has no preview date and no more-info link. The target month is earlier than today's date (25 November 2026) while the status is still In development, so treat the target as a plan that has not been met.

## Why it matters

If delivered as described, a label becomes a way to tie who can open a form's design and response pages, and the Excel file generated from it, to the same classification your tenant uses on documents. Learn says Forms data can be exported to Excel, so the exported workbook is where responses often end up, and the roadmap says that file inherits the label.

Microsoft has not stated what happens on arrival, and no source says existing forms change, so the wiki's view is that this is a feature to review rather than one that forces action. Before telling authors to rely on a label for confidential responses, confirm which label settings Forms honours; the roadmap does not say.

## Risk assessment

**Data exposure**
- The roadmap says labels will limit access to form design and response pages and carry to generated Excel files. It does not say whether forms that already exist, or workbooks already exported, receive a label, so do not assume responses collected today are covered.
- The Forms admin settings include external sharing options (send a form link, collaborate, share results, share templates) that are all checked by default. The roadmap does not say how a label interacts with these.

**Security & identity**
- Labels are assigned manually by authors and co-authors. Protection therefore depends on authors choosing a label; the roadmap describes no automatic or default labelling for Forms.
- Which permissions count as 'appropriate permissions' for design and response pages is not described. Confirm how this relates to co-author access before relying on it.

**Autonomy & actions**
- No change: the roadmap item describes no agent, automation or background action.

**Change & support**
- The roadmap says only users with appropriate permissions can access a labelled form's design and response pages. Expect questions from collaborators who can no longer open a form they used to reach.
- No Forms-specific tenant switch for labels is documented.

## Cost and licensing

No licence or price specific to labels in Forms is published at the time of writing. The Microsoft Purview service description says administrators and end users need the appropriate licences to use Information Protection functionality in their client applications, and lists Manual Sensitivity Labeling as Included for Microsoft 365 E5/A5/G5/E3/A3/G3/F1/F3/Business Premium, OneDrive for Business (Plan 2), Enterprise Mobility + Security E3/E5, Office 365 E5/A5/E3/A3 and AIP Plan 1 and Plan 2. That page does not mention Forms, so whether the same entitlement applies to this feature is a point to confirm.

The roadmap names no meter, and the Purview service description names none for manual labelling. Indirect costs are admin time to review label settings, and author communication. Per-user Forms access is a separate, existing control (see the controls table).

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant) as the cloud and Web as the platform, with release phase General Availability. The people in scope are form authors and co-authors, who the roadmap says will assign or edit labels.

Forms is turned on for everyone in an organisation by default, per Learn's Forms turn-off page. Learn's Forms administrator settings page says an office apps administrator with the application administrator role can control the Forms organisation settings, and that these administrator settings are only available for Office 365 Education and Microsoft 365 Apps for business customers. Which role configures labels for Forms is not described. Rollout mechanics and prerequisites for this feature are not stated.

## Governance guidance

### Before rollout
- Check the Forms external sharing options in the Microsoft 365 admin center and decide whether the current settings suit labelled forms.
- Check which users have Forms switched on in their licence assignment, so you know who will be able to author labelled forms.

### At rollout
- Watch Message center and the Forms blog for a rollout notice, and Learn's Forms administrator pages for documentation of the feature.
- Test with a pilot form: assign a label, then check who can open the design and response pages and whether the generated Excel file carries the label, as the roadmap describes.
- Brief the help desk that collaborators or respondents may be unable to open a labelled form.

### After rollout
- Review the Forms Graph settings and the admin settings pane for any label-related option Microsoft adds.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Switch for sensitivity labels in Microsoft Forms</strong><br><small>Tenant</small><br><small class="controls__note">No label setting is documented on the Forms admin settings page or in the formsSettings resource at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Organisation-wide Forms options such as external sharing (existing control; does not govern labels)</strong><br><small>Tenant</small><br><small class="controls__note">Beta API; the request body sets the settings property (formsSettings). UI settings are documented for Education and Apps for business customers only.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › Services › Microsoft Forms › External sharing <a href="https://learn.microsoft.com/microsoft-forms/administrator-settings-microsoft-forms" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/admin/forms</code> <a href="https://learn.microsoft.com/graph/api/adminforms-update?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether an individual user can use Microsoft Forms (existing control; does not govern labels)</strong><br><small>User</small><br><small class="controls__note">Turning Forms off for a user stops that user using Forms. Disable the Forms service plan through DisabledPlans inside the AddLicenses value.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Manage product licenses › Licenses and Apps › Apps › Microsoft Forms <a href="https://learn.microsoft.com/microsoft-forms/turn-off-turn-on-microsoft-forms" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId &lt;user ID&gt; -AddLicenses $addLicenses -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.graph.users.actions/set-mguserlicense" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No Forms-specific switch for sensitivity labels is documented, so the first row of the table is empty on both sides. The two Forms rows below are existing controls and do not govern labels: one turns Forms on or off per user, the other sets organisation-wide Forms options such as external sharing.

The Graph row is a beta API, and Learn lists OrgSettings-Forms.ReadWrite.All as the least privileged permission. The formsSettings resource has seven properties covering Bing image search, external sharing, phishing scan and recording names; none concerns sensitivity labels. The admin settings pane is documented as available only for Office 365 Education and Microsoft 365 Apps for business customers.

Labels themselves are created in the Microsoft Purview management solution; see the [sensitivity labels concept](/concepts/sensitivity-labels/).

## Open questions

- Which label settings (for example encryption or access restrictions) will Forms enforce on design and response pages? Watch the Forms administrator pages on Learn.
- Is there an admin setting, in the Microsoft 365 admin center or Microsoft Graph, to turn label support in Forms on or off? Watch Message center.
- Which licence covers labels in Forms, and does it match the Purview service description's manual labelling entitlement? Watch the Purview service description.
- The roadmap target of December CY2025 has passed and the status is still In development: what is the current date? Watch the roadmap item.
- Do existing forms and already exported workbooks pick up a label, and are label changes written to the audit log?

<!-- rationale
risk: Low. The roadmap describes a new labelling control that authors and co-authors apply manually, and no source says existing forms or responses change; the default state is not stated, so this rates today's behaviour continuing.
cost: Low. The only cost the sources show is admin and communication time; Microsoft has published no licence, meter or price specific to labels in Forms, and the Purview service description lists manual labelling as included in several plans.
impact: Medium. Form authors, co-authors and anyone who opens a labelled form's design or response pages would notice; the roadmap says only users with appropriate permissions can access those pages.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model / licensing: The licensing model is included for a new option within the already licensed Forms product, with feature-specific terms unconfirmed. | Found: The following Office 365 Education and Microsoft 365 Apps for business customers can also use Microsoft Forms: ... Microsoft 365 Business Premium ... Microsoft 365 Enterprise E1, E3, and E5 plans | Fix: Keep model included, but add to licensing.notes: 'Learn lists Microsoft 365 Business Premium and Microsoft 365 Enterprise E1, E3, and E5 plans among the plans whose customers can use Forms. No licence or price specific to labels in Forms is published.' The cited Set up Microsoft Forms page supports this product-level entitlement; do not imply that the Purview table confirms Forms-label entitlement. | Source: https://learn.microsoft.com/microsoft-forms/set-up-microsoft-forms
- [supported, minor] front matter: licensing.notes; Cost and licensing; rationale: cost / licensing: The Purview table lists Manual Sensitivity Labeling as Included for the Microsoft 365, OneDrive, EMS, Office 365 and AIP plans named in the briefing. | Found: | Feature | Microsoft 365 E5/A5/G5/E3/A3/G3/F1/F3/Business Premium | OneDrive for Business (Plan 2) | Enterprise Mobility + Security E3/E5 | Office 365 E5/A5/E3/A3 | AIP Plan 1, AIP Plan 2 | | Manual Sensitivity Labeling | Included | Included | Included | Included | Included | | Fix: After the table-based entitlement sentence, add: 'The same section also says sensitivity labeling, including automatic or policy-based labeling, requires Microsoft 365 E5 or Microsoft 365 Information Protection and Governance (IPG), which conflicts with the broader manual-labeling table. It also requires a standard/Plan 1 licence to be assigned alongside a premium/Plan 2 licence for sensitivity labeling.' Keep the statement that Forms-specific entitlement is unconfirmed. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description
-->
