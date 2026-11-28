---
title: "Microsoft Purview DLP: file creation and modification date conditions for SharePoint and OneDrive"
slug: "microsoft-purview-file-creation-modification-conditions-in-dlp-for-sharepoint-onedrive-and"
roadmapId: 557590
topic: "governance"
products: ["Microsoft Purview"]
summary: "DLP rules for SharePoint sites and OneDrive accounts can now match files by creation or modification date. Nothing changes until an administrator adds a condition; auto-labeling support is not yet documented."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "April CY2026"
previewDate: "March CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Part of DLP for SharePoint Online and OneDrive, which the Microsoft Purview service description lists under Microsoft 365 E5/A5/G5/E3/A3/G3, Business Premium, Office 365 E5/E3 and other plans. No separate licence for the date conditions is published."
audiences: ["compliance","security","m365-admin"]
tags: ["purview","dlp","sharepoint","onedrive","auto-labeling","sensitivity-labels"]
sources:
  - title: "Microsoft 365 Roadmap item 557590"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=557590"
    kind: "roadmap"
  - title: "Data Loss Prevention policy reference"
    url: "https://learn.microsoft.com/purview/dlp-policy-reference"
    kind: "learn"
  - title: "Automatically apply a sensitivity label to Microsoft 365 data"
    url: "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"
    kind: "learn"
  - title: "Migrate file policies to Microsoft Purview"
    url: "https://learn.microsoft.com/defender-cloud-apps/migrate-file-policies-to-purview"
    kind: "learn"
  - title: "New-DlpComplianceRule"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule"
    kind: "learn"
  - title: "New-AutoSensitivityLabelRule"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-autosensitivitylabelrule"
    kind: "learn"
  - title: "Get started with DLP file quarantine for SharePoint and OneDrive"
    url: "https://learn.microsoft.com/purview/dlp-spo-odb-quarantine-get-started"
    kind: "learn"
  - title: "Get started with the data loss prevention alerts"
    url: "https://learn.microsoft.com/purview/dlp-alerts-get-started"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Roles and role groups in Microsoft Defender for Office 365 and Microsoft Purview"
    url: "https://learn.microsoft.com/defender-office-365/scc-permissions"
    kind: "learn"
  - title: "Whether a SharePoint or OneDrive DLP rule matches files by creation or modification date (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-quarantine"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-loss-prevention-file-quarantine-action-in-dlp-for-sharepoint-onedri","microsoft-purview-data-loss-prevention-adaptive-scopes-for-dlp-for-sharepoint","sensitivity-labels","purview-retention-last-accessed-sharepoint-onedrive"]
controls:
  - governs: "Whether a SharePoint or OneDrive DLP rule matches files by creation or modification date"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > Create policy > Enterprise applications & devices > Custom > Custom policy > SharePoint sites > Create or customize advanced DLP rules > Create rule > Conditions > Add condition"
      docs: "https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-quarantine"
    api: null
    note: "Choose OneDrive accounts as the location for OneDrive. The four date conditions are listed in the DLP policy reference. Requires the Information Protection Admin role."
  - governs: "Whether an auto-labeling policy for SharePoint or OneDrive matches files by creation or modification date"
    scope: "other"
    ui: null
    api: null
    note: "Named in the roadmap item. Learn lists Document created by as the only extra SharePoint and OneDrive advanced-rule condition for auto-labeling."
confidence: "medium"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-05-04T23:00:45"
changes:
  - date: "2026-11-28"
    note: "New briefing: DLP date conditions for SharePoint and OneDrive, with auto-labeling support noted as not yet documented."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 44 statements contradicted, 4 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 44
  confirmed: 38
  unconfirmed: 4
  contradicted: 2
  attempts: 1
  hash: "bf27ae1ab672467f19731cce97fe28e8"
---

## What's changing

Microsoft Purview data loss prevention (DLP) rules for SharePoint and OneDrive gain conditions based on when a file was created or last modified. The Microsoft Learn DLP policy reference lists four of them for both **SharePoint sites** and **OneDrive accounts**: **Document creation date is on or after**, **Document creation date is on or before**, **Document modification date is on or after** and **Document modification date is on or before**. A rule can now combine content checks with a date window: newly created documents, recently edited files, or older content.

The conditions apply only in rules where an administrator adds them; existing DLP policies are not changed. Microsoft's guide to moving Microsoft Defender for Cloud Apps file policies to Purview maps the Defender **Created date** and **Last modified date** conditions to Purview conditions it calls **Document created date** and **Document last modified date**, as a partial equivalent for SharePoint and OneDrive only. The labels on that page differ from the DLP policy reference; expect the reference's wording in the rule editor.

The roadmap item also names auto-labeling (automatic sensitivity labelling). Microsoft Learn's auto-labeling article does not list date conditions at the time of writing (November 2026): for SharePoint sites and OneDrive accounts it lists **Document created by** as the one extra advanced-rule condition. Treat date-based auto-labeling as announced but not yet documented.

The roadmap item is marked Launched, with release phases General Availability and Preview, a preview date of March CY2026 and a target date of April CY2026, for the Worldwide (Standard Multi-Tenant) cloud on the web.

## Why it matters

Date conditions let DLP rules separate old content from new without restructuring sites. A rule can apply a stricter action only to files modified recently, or leave a legacy archive out of a noisy policy, which should cut alerts on content nobody is touching. The flip side is that a date window is also a way to exclude content by accident: a rule limited to recently modified files ignores sensitive files that have not been edited since the cut-off.

If nobody acts, nothing changes: the conditions do nothing until an administrator adds them to a rule. The decision is whether date windows improve existing SharePoint and OneDrive policies, and how to test them before enforcement.

## Risk assessment

**Data exposure**
- A rule restricted with **Document modification date is on or after** does not evaluate older files under that rule. Sensitive files untouched since the cut-off stay outside it unless another rule covers them.
- Microsoft Learn does not describe whether a modification date reflects only user edits or also background updates; confirm with test files before relying on a narrow window.

**Security & identity**
- No change: the conditions add no new identity, permission or sharing mechanism.

**Autonomy & actions**
- The conditions trigger whatever actions the rule already has, such as restricting access or quarantine. A broad date window combined with a blocking action can block many files at once; DLP alerts for SharePoint and OneDrive events show the matched file's creation and last modified times, which helps check what a rule caught.

**Change & support**
- Administrators migrating from Defender for Cloud Apps file policies get a partial equivalent for created and last modified date filters.
- Auto-labeling policies cannot yet be built on these dates according to the documentation, so plans that rely on the roadmap's auto-labeling wording need to wait.

## Cost and licensing

**Licence.** The Microsoft Purview service description lists the licences that give users rights to DLP for Exchange Online, SharePoint Online and OneDrive for Business: Microsoft 365 E5/A5/G5/E3/A3/G3, Microsoft 365 Business Premium, SharePoint Online Plan 2, OneDrive for Business (Plan 2), Exchange Online Plan 2; Office 365 E5/A5/G5/E3/A3/G3; and Microsoft Purview Suite/EDU/GOV/FLW and Microsoft Defender + Purview Suite FLW. For SharePoint sites, the same page says users with the owner or member role must have the required licence when a Purview policy is used on the site.

**Meter.** No meter is documented for these conditions; the service description publishes no separate licence or charge for date-based DLP conditions.

**Indirect costs.** Admin time to design date windows, test them and review alerts.

## Scope

- **Locations:** SharePoint sites and OneDrive accounts, per the DLP policy reference. Not listed for Exchange, Teams or endpoints.
- **Auto-labeling:** named in the roadmap item; not yet documented on Microsoft Learn.
- **Roles:** the **Information Protection Admin** role can create, edit and delete DLP policies; it is assigned to role groups including Compliance Administrator and Information Protection Admins.
- **Clouds:** Worldwide (Standard Multi-Tenant), as the roadmap record lists it.
- **Platform:** Web (Microsoft Purview portal).
- **Prerequisites:** a DLP policy with the SharePoint sites or OneDrive accounts location and advanced rules.

## Governance guidance

### Before rollout
- List existing SharePoint and OneDrive DLP policies whose alert volume comes mostly from old, unedited content, and decide whether a date condition would narrow them.
- Agree a date convention (absolute cut-off dates) with the records and retention owners so DLP windows do not contradict retention plans.
- Confirm who holds the Information Protection Admin role before changing production rules.

### At rollout
- Add the date condition in a new custom policy for SharePoint sites or OneDrive accounts (Microsoft Purview portal > Data loss prevention > Policies > Create policy), leaving the policy turned off until tested.
- Test with files created and modified on both sides of the cut-off to confirm which files the rule matches.
- Pair any rule limited to recent files with another rule, or an existing policy, that still covers older sensitive content.

### After rollout
- Review DLP alerts (Microsoft Purview portal > Data loss prevention > Alerts) and check the file created and file last modified properties against the rule's window.
- Check the auto-labeling documentation and Message center before promising date-based labelling.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a SharePoint or OneDrive DLP rule matches files by creation or modification date</strong><br><small class="controls__note">Choose OneDrive accounts as the location for OneDrive. The four date conditions are listed in the DLP policy reference. Requires the Information Protection Admin role.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › Create policy › Enterprise applications &amp; devices › Custom › Custom policy › SharePoint sites › Create or customize advanced DLP rules › Create rule › Conditions › Add condition <a href="https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-quarantine" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether an auto-labeling policy for SharePoint or OneDrive matches files by creation or modification date</strong><br><small class="controls__note">Named in the roadmap item. Learn lists Document created by as the only extra SharePoint and OneDrive advanced-rule condition for auto-labeling.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The date conditions are chosen under **Add condition** in an advanced DLP rule; the DLP policy reference lists them for SharePoint sites and OneDrive accounts. The New-DlpComplianceRule reference lists no dedicated parameter for creation or modification dates at the time of writing (November 2026); its AdvancedRule parameter takes JSON condition syntax, but the page names no condition for these dates. Creating and editing DLP policies requires the Information Protection Admin role or a role group that holds it, such as Compliance Administrator.

## Open questions

- When will auto-labeling policies for SharePoint and OneDrive offer creation and modification date conditions, as the roadmap item states? Watch the auto-labeling article on Microsoft Learn.
- What is the PowerShell or AdvancedRule syntax for the date conditions in New-DlpComplianceRule? Watch the cmdlet reference.
- Which timestamp does the modification-date condition read, and do background updates by SharePoint count as modification? Watch the DLP policy reference.
- Do the conditions accept relative windows (for example, the last 30 days) or only fixed dates? Watch the DLP policy reference.

<!-- rationale
risk: Low. The date conditions only act inside DLP rules an administrator builds; left alone, existing policies behave as they do today.
cost: Low. The conditions sit inside DLP for SharePoint Online and OneDrive, which Microsoft licenses through plans such as Microsoft 365 E3 and E5; the only new cost shown is admin time to design and test rules.
impact: Low. Compliance administrators who write DLP rules notice the new conditions; users notice only if a rule using them blocks or notifies.
-->

<!-- verifier-findings (2026-11-28, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] front matter: defaultState; summary; What's changing; Why it matters; rationale: risk / default: The default is admin-opt-in: nothing changes in existing policies until an administrator adds a date condition. | Found: Searched: Purview DLP file creation modification date conditions default existing policies administrator enable. Read roadmap, DLP policy reference, creation guide and default Office 365 DLP policy excerpt; none states these predicates' arrival default. | Fix: Set defaultState to 'unknown'. Replace the no-change assurances in the summary, What's changing, Why it matters and risk rationale with 'Microsoft has not stated what happens on arrival; no source says existing policy behaviour changes.' Keep action 'review'.
- [unsupported, blocker] Risk assessment: Change & support / availability: Auto-labeling policies cannot yet be built on these dates according to the documentation. | Found: Searched: Purview auto-labeling creation modification date conditions; New-AutoSensitivityLabelRule date SharePoint condition. Read auto-labeling article and cmdlet reference; neither states that date-based policies cannot be built. | Fix: Replace 'Auto-labeling policies cannot yet be built on these dates according to the documentation' with 'Microsoft Learn does not yet document these date conditions for auto-labeling policies'. Replace the instruction that plans 'need to wait' with 'confirm availability before relying on them'.
- [unsupported, major] Risk assessment: Data exposure / behaviour: A rule restricted by modification date does not evaluate older files. | Found: Searched: Document modification date background relative DLP. Read DLP policy reference, Rules and Conditions. It lists a match predicate, not a mechanism that skips evaluating older files; classification and rule matching are described separately. | Fix: Replace 'does not evaluate older files under that rule' with 'does not match files whose modification date is before the cut-off'.
- [unsupported, major] Risk assessment: Security & identity / behaviour: The conditions add no new identity, permission or sharing mechanism. | Found: Searched: Purview DLP document date conditions identity permissions. Read DLP policy reference and roadmap; search returned general Purview permissions and other DLP controls, but no statement establishing this feature-specific no-change assurance. | Fix: Replace the bullet with 'The roadmap describes date predicates within DLP rules, not a new identity or sharing mechanism.' This confines the statement to what the roadmap describes rather than asserting an undocumented absence.
- [contradicted, blocker] controls[0].note; Governance controls / role: Creating and editing the DLP policies requires Information Protection Admin or a role group that holds it. | Found: DLP Compliance Management | View and edit settings and reports for data loss prevention (DLP) policies. | Compliance Administrator  Compliance Data Administrator  Organization Management  Security Administrator | Fix: Replace 'Requires the Information Protection Admin role' in the row note with 'The Information Protection Admin role can manage DLP policies'. Replace the final governance-controls sentence with 'The Information Protection Admin role can create, edit and delete DLP policies; it is included in the Compliance Administrator role group.' This removes the false exclusive requirement while preserving the verified role guidance. | Source: https://learn.microsoft.com/defender-office-365/scc-permissions
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls / admin-path: The printed Microsoft Purview portal path reaches Add condition in a custom advanced DLP rule for SharePoint or OneDrive. | Found: On the Define policy settings page, make sure the Create or customize advanced DLP rules option is selected. ... Select + Create rule. ... Under Conditions, select Add condition | Fix: Replace the path with 'Data loss prevention > Policies > Create policy > Enterprise applications & devices > Custom > Custom policy > SharePoint sites > Define policy settings > Create or customize advanced DLP rules > Create rule > Conditions > Add condition'. The omitted Define policy settings heading is on the cited guide; retain the OneDrive location note. | Source: https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-quarantine
- [supported, minor] Risk assessment: Autonomy & actions; rationale: impact / behaviour: Matched date-conditioned rules can invoke configured actions such as access restrictions or file quarantine. | Found: The features described in this article are in preview. ... Under Actions, select Add an action > Restrict access or encrypt the content in Microsoft 365 locations. ... Select Block everyone and move file to quarantine location. | Fix: Change 'such as restricting access or quarantine' to 'such as restricting access or the preview file quarantine action, which requires an E5 licence'. The preview is stated in the cited creation guide and the E5 qualification at https://learn.microsoft.com/purview/dlp-spo-odb-quarantine-get-started. | Source: https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-quarantine
- [supported, minor] Governance guidance: At rollout / admin-path: Microsoft Purview portal > Data loss prevention > Policies > Create policy is the entry route to creating the custom policy. | Found: Sign in to the Microsoft Purview portal. Open the Data loss prevention solution and go to Policies. Select Create policy. | Fix: Replace the abbreviated parenthetical path with 'use the full custom-policy and advanced-rule route in the date-condition controls row'. The printed route stops at the creation entry point rather than the date control. | Source: https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-quarantine
- [contradicted, minor] Governance guidance versus controls / consistency: The checklist tells readers to check DLP role assignments, policy state and alerts, but the controls table has no rows for those controls. | Found: Confirm who holds the Information Protection Admin role ... leaving the policy turned off until tested ... Review DLP alerts ... Table rows: DLP creation/modification-date matching; auto-labeling creation/modification-date matching. | Fix: The 'Confirm who holds the Information Protection Admin role', policy-off instruction and 'Review DLP alerts' checklist steps have no corresponding control rows. Remove those checklist instructions; retain the role and alert facts in the existing Scope and Risk assessment prose.
-->
