---
title: "Microsoft Purview DLP: file creation and modification date conditions for SharePoint and OneDrive"
slug: "microsoft-purview-file-creation-modification-conditions-in-dlp-for-sharepoint-onedrive-and"
roadmapId: 557590
topic: "governance"
products: ["Microsoft Purview"]
summary: "DLP rules for SharePoint sites and OneDrive accounts can now match files by creation or modification date. Microsoft has not stated what happens on arrival. Auto-labeling support is not yet documented."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "April CY2026"
previewDate: "March CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
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
  - title: "Create a DLP policy to quarantine files in SharePoint and OneDrive"
    url: "https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-quarantine"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-loss-prevention-file-quarantine-action-in-dlp-for-sharepoint-onedri","microsoft-purview-data-loss-prevention-adaptive-scopes-for-dlp-for-sharepoint","sensitivity-labels","purview-retention-last-accessed-sharepoint-onedrive"]
controls:
  - governs: "Whether a SharePoint or OneDrive DLP rule matches files by creation or modification date"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > Create policy > Enterprise applications & devices > Custom > Custom policy > SharePoint sites > Define policy settings > Create or customize advanced DLP rules > Create rule > Conditions > Add condition"
      docs: "https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-quarantine"
    api: null
    note: "Choose OneDrive accounts as the location for OneDrive. The four date conditions are listed in the DLP policy reference. The Information Protection Admin role can manage DLP policies."
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
  - date: "2026-11-28"
    note: "Corrected after the independent check: default state now Not stated, role wording no longer implies one required role, risk bullets narrowed to what Microsoft documents, admin path adds Define policy settings."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 41 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 41
  confirmed: 41
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "d447a3cbb4f453509359fbc423f10745"
---

## What's changing

Microsoft Purview data loss prevention (DLP) rules for SharePoint and OneDrive gain conditions based on when a file was created or last modified. The Microsoft Learn DLP policy reference lists four of them for both **SharePoint sites** and **OneDrive accounts**: **Document creation date is on or after**, **Document creation date is on or before**, **Document modification date is on or after** and **Document modification date is on or before**. A rule can now combine content checks with a date window: newly created documents, recently edited files, or older content.

Microsoft has not stated what happens on arrival; no source says existing policy behaviour changes. Microsoft's guide to moving Microsoft Defender for Cloud Apps file policies to Purview maps the Defender **Created date** and **Last modified date** conditions to Purview conditions it calls **Document created date** and **Document last modified date**, as a partial equivalent for SharePoint and OneDrive only. The labels on that page differ from the DLP policy reference; expect the reference's wording in the rule editor.

The roadmap item also names auto-labeling (automatic sensitivity labelling). Microsoft Learn's auto-labeling article does not list date conditions at the time of writing (November 2026): for SharePoint sites and OneDrive accounts it lists **Document created by** as the one extra advanced-rule condition. Treat date-based auto-labeling as announced but not yet documented.

The roadmap item is marked Launched, with release phases General Availability and Preview, a preview date of March CY2026 and a target date of April CY2026, for the Worldwide (Standard Multi-Tenant) cloud on the web.

## Why it matters

Date conditions let DLP rules separate old content from new without restructuring sites. A rule can apply a stricter action only to files modified recently, or leave a legacy archive out of a noisy policy, which should cut alerts on content nobody is touching. The flip side is that a date window is also a way to exclude content by accident: a rule limited to recently modified files ignores sensitive files that have not been edited since the cut-off.

Microsoft has not stated what happens on arrival; no source says existing policy behaviour changes. The decision is whether date windows improve existing SharePoint and OneDrive policies, and how to test them before enforcement.

## Risk assessment

**Data exposure**
- A rule restricted with **Document modification date is on or after** does not match files whose modification date is before the cut-off. Sensitive files untouched since the cut-off stay outside it unless another rule covers them.
- Microsoft Learn does not describe whether a modification date reflects only user edits or also background updates; confirm with test files before relying on a narrow window.

**Security & identity**
- The roadmap describes date predicates within DLP rules, not a new identity or sharing mechanism.

**Autonomy & actions**
- The conditions trigger whatever actions the rule already has, such as restricting access or quarantine. A broad date window combined with a blocking action can block many files at once; DLP alerts for SharePoint and OneDrive events show the matched file's creation and last modified times, which helps check what a rule caught.

**Change & support**
- Administrators migrating from Defender for Cloud Apps file policies get a partial equivalent for created and last modified date filters.
- Microsoft Learn does not yet document these date conditions for auto-labeling policies, so plans that rely on the roadmap's auto-labeling wording should confirm availability before relying on them.

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

### At rollout
- Add the date condition in a new custom policy for SharePoint sites or OneDrive accounts; use the full custom-policy and advanced-rule route in the date-condition controls row.
- Test with files created and modified on both sides of the cut-off to confirm which files the rule matches.
- Pair any rule limited to recent files with another rule, or an existing policy, that still covers older sensitive content.

### After rollout
- Check the auto-labeling documentation and Message center before promising date-based labelling.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a SharePoint or OneDrive DLP rule matches files by creation or modification date</strong><br><small class="controls__note">Choose OneDrive accounts as the location for OneDrive. The four date conditions are listed in the DLP policy reference. The Information Protection Admin role can manage DLP policies.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › Create policy › Enterprise applications &amp; devices › Custom › Custom policy › SharePoint sites › Define policy settings › Create or customize advanced DLP rules › Create rule › Conditions › Add condition <a href="https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-quarantine" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether an auto-labeling policy for SharePoint or OneDrive matches files by creation or modification date</strong><br><small class="controls__note">Named in the roadmap item. Learn lists Document created by as the only extra SharePoint and OneDrive advanced-rule condition for auto-labeling.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The date conditions are chosen under **Add condition** in an advanced DLP rule; the DLP policy reference lists them for SharePoint sites and OneDrive accounts. The New-DlpComplianceRule reference lists no dedicated parameter for creation or modification dates at the time of writing (November 2026); its AdvancedRule parameter takes JSON condition syntax, but the page names no condition for these dates. The Information Protection Admin role can create, edit and delete DLP policies; it is included in the Compliance Administrator role group.

## Open questions

- When will auto-labeling policies for SharePoint and OneDrive offer creation and modification date conditions, as the roadmap item states? Watch the auto-labeling article on Microsoft Learn.
- What is the PowerShell or AdvancedRule syntax for the date conditions in New-DlpComplianceRule? Watch the cmdlet reference.
- Which timestamp does the modification-date condition read, and do background updates by SharePoint count as modification? Watch the DLP policy reference.
- Do the conditions accept relative windows (for example, the last 30 days) or only fixed dates? Watch the DLP policy reference.

<!-- rationale
risk: Low. The date conditions are matching options in DLP rules for SharePoint and OneDrive. Microsoft has not stated what happens on arrival; no source says existing policy behaviour changes.
cost: Low. The conditions sit inside DLP for SharePoint Online and OneDrive, which Microsoft licenses through plans such as Microsoft 365 E3 and E5; the only new cost shown is admin time to design and test rules.
impact: Low. Compliance administrators who write DLP rules notice the new conditions; users notice only if a rule using them blocks or notifies.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Autonomy & actions / behaviour: Quarantine is an example of a configured DLP action for SharePoint and OneDrive. | Found: The features described in this article are in preview. This article walks you through the prerequisites and configuration for using the DLP file quarantine action for SharePoint and OneDrive locations. | Fix: Replace 'such as restricting access or quarantine' with 'such as restricting access' to avoid presenting the separately licensed preview quarantine action as an unqualified example. | Source: https://learn.microsoft.com/purview/dlp-spo-odb-quarantine-get-started
- [supported, minor] controls[0].ui; Governance controls; Scope: Platform / admin-path: The printed Microsoft Purview portal custom-policy path reaches Add condition in an advanced DLP rule. | Found: Accept the Full directory default under Admin units. ... SharePoint sites ... Define policy settings ... Create or customize advanced DLP rules ... Select + Create rule. ... Under Conditions, select Add condition | Fix: Replace controls[0].ui.path and the rendered path with 'Data loss prevention > Policies > Create policy > Enterprise applications & devices > Custom > Custom policy > Admin units > Full directory > SharePoint sites > Define policy settings > Create or customize advanced DLP rules > Create rule > Conditions > Add condition', following https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-quarantine. The omitted scope heading and accepted default do not prevent reaching the control. | Source: https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-quarantine
-->
