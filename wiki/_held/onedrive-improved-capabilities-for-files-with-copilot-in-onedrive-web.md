---
title: "OneDrive: improved Copilot file skills in OneDrive on the web"
slug: "onedrive-improved-capabilities-for-files-with-copilot-in-onedrive-web"
roadmapId: 569215
topic: "m365-copilot"
products: ["OneDrive","Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans richer Copilot skills for finding, analysing, creating and sharing from files in OneDrive on the web. Default, licence and a feature-specific control are not yet documented, so plan from existing Copilot controls."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: "August CY2026"
risk: "medium"
cost: "medium"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "add-on"
  notes: "Microsoft Learn says Microsoft Copilot is available with Microsoft 365 E7 or as an add-on for eligible plans. A licence statement or price specific to this feature is not yet published."
audiences: ["m365-admin","service-owner","security","end-user"]
tags: ["onedrive","m365-copilot","copilot","sharing","oversharing","restricted-content-discovery","sensitivity-labels","licensing"]
sources:
  - title: "License options for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/copilot-license-options"
    kind: "learn"
  - title: "Data protection and auditing for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/architecture-data-protection-auditing"
    kind: "learn"
  - title: "Restrict discovery of SharePoint sites and content"
    url: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 569215"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569215"
    kind: "roadmap"
  - title: "Which users hold a Microsoft Copilot licence (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Which users hold a Microsoft Copilot licence (PowerShell)"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
videos: []
related: ["sharepoint-copilot-search-in-sharepoint-and-onedrive","sensitivity-labels"]
controls:
  - governs: "Tenant-wide switch for Copilot file skills in OneDrive on the web"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no OneDrive-specific switch for this feature at the time of writing (November 2026)."
  - governs: "Which users hold a Microsoft Copilot licence"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Licenses > product > Assign licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "At least License Administrator or User Administrator. Learn does not say this feature requires the Microsoft Copilot licence."
  - governs: "Which SharePoint sites Microsoft Copilot can discover content from"
    scope: "site"
    ui:
      surface: "SharePoint admin center"
      path: "Sites > Active sites > site > Settings > Restrict content from Microsoft Copilot"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    api:
      kind: "powershell"
      call: "Set-SPOSite -Identity <site-url> -RestrictContentOrgWideSearch $true"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    note: "Microsoft's page says this applies to SharePoint sites only and is not supported for OneDrive sites, so it is an alternative for SharePoint content, not a control over OneDrive."
confidence: "low"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-08-17T22:52:47"
changes:
  - date: "2026-11-21"
    note: "First briefing for this roadmap item: plans only, with no Learn page for the feature yet."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 57 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 57
  confirmed: 54
  unconfirmed: 2
  contradicted: 1
  attempts: 1
  hash: "c33dc8fde18bc43521464420fb2518e9"
---

## What's changing

Microsoft plans improved Copilot file skills in OneDrive on the web. The roadmap item says users can go from files to finished work from chat: Copilot helps find the right content, analyse files and data, create outputs such as summaries, dashboards and presentations, and collaborate by saving or sharing the results from OneDrive.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. The roadmap does not say which file types, which Copilot surface or which permissions the skills use, and it does not state what happens on arrival.

The roadmap record shows the status as In development, with release phases General Availability and Preview, a preview target of August CY2026 and a general availability target of December CY2026. Platform is Web and cloud is Worldwide (Standard Multi-Tenant). These are Microsoft's targets, not commitments. The preview target month has passed while the status is still In development, so confirm the actual state in your tenant's Message center.

## Why it matters

This change adds creation and sharing steps to what Copilot does with OneDrive files. Microsoft documents that Copilot respects existing SharePoint and OneDrive permissions and, if content is already overshared, can surface it to anyone who has access. A skill that turns found files into a new summary, dashboard or presentation, and then saves or shares it, moves that existing oversharing into new content.

Microsoft has not stated whether the improved skills arrive on by default, so do not assume nothing changes. No source says existing behaviour changes either. Use the weeks before the December CY2026 target to check labels, data loss prevention and sharing settings, because no OneDrive-specific switch for this feature is documented.

## Risk assessment

**Data exposure**
- Copilot respects existing OneDrive permissions and can surface overshared content to anyone who has access, so a user with broad access can now ask for outputs built from those files.
- Restricted Content Discovery is the SharePoint control for limiting what Copilot discovers, but Microsoft's page says it is not supported for OneDrive sites, so it cannot narrow what Copilot finds in a user's OneDrive.

**Security & identity**
- For encrypted files, the user needs both the VIEW and EXTRACT usage rights for Copilot to summarise or return the content; with VIEW but not EXTRACT, Copilot can return a link only.
- When Copilot creates new content from labelled items, the highest-priority label is applied to the new content where label inheritance is supported. Check which of your labels support inheritance before users save results.
- A Microsoft Purview DLP policy for Copilot can keep Copilot from summarising labelled files and emails.

**Autonomy & actions**
- The roadmap says Copilot helps users save or share results from OneDrive. Microsoft has not described whether sharing needs a confirmation step or which sharing settings apply to Copilot-created files; treat this as something to confirm.

**Change & support**
- Expect questions about where saved outputs land and who can open them. Microsoft Purview Audit logs Copilot interactions, but its records do not contain the text of prompts or responses.

## Cost and licensing

Microsoft Learn's licence page says Microsoft Copilot is available with Microsoft 365 E7 or as an add-on for eligible commercial, US Government and education subscription plans ([License options for Microsoft Copilot](https://learn.microsoft.com/copilot/plan/copilot-license-options)). Whether Copilot file skills in OneDrive on the web need that licence is not yet published, and the roadmap item names no licence.

No meter, credit rate or cap for this feature is published at the time of writing (November 2026). Indirect costs are admin time to review sharing and labels, and user communication.

## Scope

The roadmap lists OneDrive and Microsoft Copilot (Microsoft 365) as the products, Web as the platform and Worldwide (Standard Multi-Tenant) as the cloud. Government clouds are not listed on the roadmap item; that is a record fact, not a statement that the feature is unavailable there.

Who gets the feature, which roles configure it and the rollout mechanics are not stated by the roadmap or Microsoft Learn. Microsoft Copilot sees only the content the user can already access.

## Governance guidance

### Before rollout
- Confirm with your Microsoft account team, or in Message center, whether Copilot file skills in OneDrive on the web need a Microsoft Copilot licence, and which users hold one.
- Review sharing and permissions on OneDrive content that Copilot-licensed users can reach, because Copilot respects existing permissions and can surface overshared content.
- Check that sensitivity labels and any Microsoft Purview DLP policy for Copilot cover the files users keep in OneDrive.

### At rollout
- Watch Message center for a post on this roadmap item; none was supplied with this briefing.
- Tell users that saved or shared Copilot outputs follow the permissions and labels that apply where they are saved, and ask them to check recipients before sharing.

### After rollout
- Review Microsoft Purview Audit for Copilot interactions that touched OneDrive files, remembering that audit records carry no prompt or response text.
- Re-check Microsoft Learn for a page on this feature and a OneDrive-specific control, and update your plan when one appears.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant-wide switch for Copilot file skills in OneDrive on the web</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no OneDrive-specific switch for this feature at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users hold a Microsoft Copilot licence</strong><br><small>User</small><br><small class="controls__note">At least License Administrator or User Administrator. Learn does not say this feature requires the Microsoft Copilot licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Licenses › product › Assign licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which SharePoint sites Microsoft Copilot can discover content from</strong><br><small>Site</small><br><small class="controls__note">Microsoft's page says this applies to SharePoint sites only and is not supported for OneDrive sites, so it is an alternative for SharePoint content, not a control over OneDrive.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Sites › Active sites › site › Settings › Restrict content from Microsoft Copilot <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOSite -Identity &lt;site-url&gt; -RestrictContentOrgWideSearch $true</code> <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No setting specific to this feature is documented, so the table lists the controls that exist around it. Licence assignment is the only documented switch over who holds a Microsoft Copilot licence; Learn does not say this feature depends on it. Assigning licences needs at least the License Administrator or User Administrator role.

Restricted Content Discovery applies to SharePoint sites only. Microsoft's page states it is not supported for OneDrive sites, so it does not govern this feature's use of OneDrive files. Sensitivity labels and Microsoft Purview DLP for Copilot are configured in Microsoft Purview and are described on Microsoft's data protection page; their exact paths were not read for this briefing, so they are named here without a row.

## Open questions

- Which licence does Copilot file skills in OneDrive on the web require, and is any usage metered? Watch the Microsoft 365 Roadmap item and Microsoft Learn.
- Is the improved experience on by default when it reaches a tenant, and can an administrator turn it off for OneDrive specifically? Watch Message center.
- Which OneDrive sharing and label settings apply when Copilot saves or shares a generated output?
- Will the August CY2026 preview and December CY2026 general availability targets hold, given the status is still In development?

<!-- rationale
risk: Medium. Copilot works within existing OneDrive permissions, so the new create-and-share skills widen what users can do with overshared files; Microsoft documents no OneDrive-specific control for this feature.
cost: Medium. Microsoft Learn lists Microsoft Copilot as available with Microsoft 365 E7 or as an add-on; whether this feature needs that licence, and any meter, is not yet published.
impact: Medium. Users who open Copilot in OneDrive on the web would notice it; the roadmap lists Web as the only platform and does not say who gets it first.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Governance guidance: At rollout / behaviour: Saved or shared outputs from these improved skills follow the permissions of their save location. | Found: Searched: Copilot generated files saved shared OneDrive permissions sensitivity labels. Read data protection, release notes and OneDrive storage excerpts; general access controls are described, not how these skills choose destination permissions. | Fix: Replace the rollout bullet with 'Ask users to check recipients, effective file permissions and sensitivity labels before sharing generated outputs.' This is advice and does not assert undocumented save behaviour.
- [unsupported, blocker] Governance guidance: At rollout / applicability: Saved or shared Copilot outputs follow the labels that apply where they are saved. | Found: Searched: Copilot generated files saved shared OneDrive permissions sensitivity labels. Read data protection and Purview considerations excerpts: inheritance is from source labels where supported; container labels aren't inherited. No blanket destination-label rule for these skills. | Fix: Replace the rollout bullet with 'Ask users to check recipients, effective file permissions and sensitivity labels before sharing generated outputs.' Keep the existing supported source-label inheritance statement in Risk assessment; do not promise inheritance from the destination.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] summary; licensing.notes; controls[1].note; Cost and licensing; Governance controls; Open questions / absence: No licence requirement specific to these improved file skills is published. | Found: Searched: "Copilot file skills" "OneDrive" pricing; Copilot in OneDrive web license Microsoft 365 Copilot required. Read license options and service description. General Copilot licensing is published; no passage separately names these improved skills. | Fix: Narrow the summary to 'Default and a feature-specific control are not yet documented; general Microsoft Copilot licensing is published.' Replace controls[1].note's final sentence with 'Microsoft publishes general Copilot licensing; no separate terms for these improved skills are published.' Keep the existing general licensing statement and the narrower feature-specific gap in Cost and licensing.
- [supported, minor] Cost and licensing; rationale: cost; Open questions / absence: No meter specifically identified with these improved file skills is published. | Found: Searched: Copilot in OneDrive file skills licensing pricing meter credits cap. Read usage-based billing overview: Advanced work in OneDrive uses Copilot Credits, but no description connects that service to this roadmap item. | Fix: Replace the meter sentence with 'Microsoft lists Advanced work in OneDrive among services managed by usage-based billing in Copilot Credits, with a Copilot licence required; the page does not identify that service as these improved file skills.' Cite https://learn.microsoft.com/copilot/plan/usage-based-billing-overview-copilot-credits. Retain only the narrower uncertainty about whether this roadmap feature uses that service.
- [contradicted, minor] Governance guidance; controls / consistency: The checklist asks readers to review sharing and permissions, sensitivity labels, DLP and Audit, but these controls have no table rows. | Found: Review sharing and permissions ... Check that sensitivity labels and any Microsoft Purview DLP policy ... Review Microsoft Purview Audit ... controls: tenant-wide switch, licence assignment, Restricted Content Discovery. | Fix: The Before rollout sharing/permissions review and labels/DLP check, and the After rollout Audit review, have no corresponding controls-table rows. Remove those checklist items to satisfy the table-consistency rule without adding unverified rows; retain the supported descriptions in Risk assessment.
-->
