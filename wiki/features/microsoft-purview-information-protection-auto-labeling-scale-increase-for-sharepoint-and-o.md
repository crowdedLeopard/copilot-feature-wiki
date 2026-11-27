---
title: "Microsoft Purview: auto-labeling ceiling for SharePoint and OneDrive rises to 500,000 files a day (Worldwide)"
slug: "microsoft-purview-information-protection-auto-labeling-scale-increase-for-sharepoint-and-o"
roadmapId: 567890
topic: "governance"
products: ["Microsoft Purview"]
summary: "The tenant-wide daily ceiling for auto-labeling SharePoint and OneDrive files rises from 100,000 to up to 500,000 for Worldwide tenants. Active policies pick it up automatically; Microsoft's notice says no action is required."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: "September CY2026"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "Microsoft Learn directs service-side auto-labeling licensing to the Client and service-side automatic sensitivity labeling feature matrix; that matrix includes Microsoft 365 E5 and Microsoft 365 E5 Information Protection and Governance. No charge specific to the higher ceiling is documented."
audiences: ["compliance","security","m365-admin","service-owner"]
tags: ["auto-labeling","sensitivity-labels","information-protection","purview","sharepoint","onedrive","data-governance","m365-copilot"]
sources:
  - title: "Microsoft 365 Roadmap 567890"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=567890"
    kind: "roadmap"
  - title: "Microsoft 365 Roadmap 571309"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=571309"
    kind: "roadmap"
  - title: "Automatically apply a sensitivity label to Microsoft 365 data"
    url: "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description#microsoft-purview-information-protection-sensitivity-labeling"
    kind: "learn"
  - title: "Encryption based on sensitivity labels"
    url: "https://learn.microsoft.com/purview/encryption-sensitivity-labels"
    kind: "learn"
  - title: "Set-AutoSensitivityLabelPolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-autosensitivitylabelpolicy"
    kind: "learn"
  - title: "Export-ActivityExplorerData"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/export-activityexplorerdata"
    kind: "learn"
  - title: "Turn auditing on or off"
    url: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    kind: "learn"
  - title: "MC1461154: Microsoft Purview | Information Protection – Auto-labeling scale increase for SharePoint and OneDrive"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1461154"
    kind: "message-center"
videos: []
related: ["microsoft-purview-auto-labeling-scalability-policy-management-and-reporting-enhancements","sensitivity-labels","auditing"]
controls:
  - governs: "Which SharePoint and OneDrive locations an auto-labeling policy covers"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Policies > Auto-labeling policies > policy > Edit policy > Choose locations where you want to apply the label"
      docs: "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"
    api:
      kind: "powershell"
      call: "Set-AutoSensitivityLabelPolicy -Identity <PolicyIdParameter> -AddSharePointLocation <SharePointSites>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-autosensitivitylabelpolicy"
    note: "Security & Compliance PowerShell. Use -AddOneDriveLocation for OneDrive. Learn says the default of All is exempt from the 1,000-site portal limit."
  - governs: "Whether an auto-labeling policy runs in simulation or applies labels"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Policies > Auto-labeling policies > policy > Turn on policy"
      docs: "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"
    api:
      kind: "powershell"
      call: "Set-AutoSensitivityLabelPolicy -Identity <PolicyIdParameter> -Mode Enable"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-autosensitivitylabelpolicy"
    note: "Portal needs Compliance Administrator or Compliance Data Administrator and a completed simulation. -Mode TestWithoutNotifications is test mode; Disable turns the policy off."
  - governs: "Labeling progress, labeled items and failures for each policy"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Policies > Auto-labeling policies > policy > View details"
      docs: "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"
    api:
      kind: "powershell"
      call: "Export-ActivityExplorerData -Filter1 @(\"Activity\", \"LabelApplied\")"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/export-activityexplorerdata"
    note: "The API side exports Activity explorer data, a different view from the per-policy review pages. Both are read-only monitoring, not a control over the ceiling."
  - governs: "Whether the unified audit log records activity (required for simulation)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Start recording user and admin activity"
      docs: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    api:
      kind: "powershell"
      call: "Set-AdminAuditLogConfig -UnifiedAuditLogIngestionEnabled $true"
      docs: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    note: "Run in Exchange Online PowerShell; needs the Audit Logs role. The portal banner appears only if auditing is not already on."
confidence: "high"
created: "2026-11-20"
updated: "2026-11-27"
roadmapModified: "2026-10-06T22:56:31"
changes:
  - date: "2026-11-20"
    note: "First briefing for the Worldwide item: the auto-labeling ceiling for SharePoint and OneDrive rises to up to 500,000 files per tenant per day, with Learn's caveat that it is not a guaranteed rate."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 83 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Correction: removed a sentence that wrongly said every control acts on individual policies, set action to act-now, and added two source links."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 88 statements not yet confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 87 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-27"
    note: "Correction: licensing now follows the Purview service description's service-side auto-labeling matrix (Microsoft 365 E5, Microsoft 365 E5 Information Protection and Governance); removed the unsupported Azure Information Protection Premium P2 and E5 Compliance entitlements."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 82 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 82
  confirmed: 80
  unconfirmed: 1
  contradicted: 1
  attempts: 0
  hash: "057985c514adf181d63908cbd3c062cd"
---

## What's changing

Microsoft is raising the maximum number of files that Microsoft Purview auto-labeling policies can label in SharePoint and OneDrive from 100,000 to up to 500,000 files per tenant per day. Auto-labeling policies are the service-side method that applies sensitivity labels to files already stored in SharePoint and OneDrive when they match conditions an administrator defines.

Microsoft's notice MC1461154 (published 24 August 2026) says the higher limit applies automatically to existing active auto-labeling policies, and that policy configuration, labeling conditions and label settings do not change. It gives a public preview rollout from early September to late September 2026 and a General Availability rollout for Worldwide tenants from early October to late October 2026. It sets no act-by date, says no action is required for organisations already using auto-labeling policies, and expects no end-user experience changes. For organisations not using auto-labeling, it recommends creating a policy in simulation mode, reviewing the results, then enabling it.

Microsoft Learn describes the figure more cautiously than the roadmap. It calls 500,000 the "absolute maximum throughput", in aggregate across all auto-labeling policies, and says the ceiling is not a guaranteed or consistently expected daily rate and that actual throughput can be lower. Plan on the lower reading.

The roadmap record for this item (567890) shows status Launched, a target of October CY2026, a preview date of September CY2026, release phases General Availability and Preview, Worldwide (Standard Multi-Tenant) and the Web platform. Microsoft lists the same feature under a second roadmap item, 571309, for GCC, GCC High and DoD (Launched, target November CY2026). This page covers item 567890 only.

## Why it matters

If your tenant already runs auto-labeling policies on SharePoint or OneDrive, the service now has more daily room to work through the files those policies match, and Microsoft's notice says this happens without any change to the policies. Learn says auto-labeling policies run continuously until they are deleted and include new and modified files, so a policy that is switched on keeps labeling at whatever rate the service allows. Whatever those policies do, including applying encryption or replacing labels, now reaches more files per day.

The roadmap frames the change as closing labeling gaps before Microsoft 365 Copilot is rolled out more widely. Treat that as a reason to check your policies' conditions and scope now, not as evidence that the labels are right: faster labeling only helps if the policy matches the files you intend. If nobody acts, Microsoft's notice says active policies pick up the higher limit automatically, and nothing is documented that would change a tenant with no auto-labeling policies.

## Risk assessment

**Data exposure**
- The increase adds no new conditions, locations or protection capabilities, according to MC1461154. It raises how many files a policy can process per day, so a policy with over-broad conditions reaches more files sooner. Control: the policy's locations and conditions, reviewed in simulation before it is turned on.
- If the chosen label applies encryption to SharePoint or OneDrive content, Learn requires **Assign permissions now** and **User access to content expires** set to **Never**. More files can therefore become protected, and unreadable to people without rights, in a day.

**Security & identity**
- An auto-labeling policy can replace a lower-priority manually applied label if that setting is chosen, and a policy set to remove a label can remove it even when it was applied manually (Learn). At a higher daily ceiling, an unintended replacement or removal spreads further before someone reviews it.
- Turning a policy on after simulation requires the Compliance Administrator or Compliance Data Administrator role, so those roles decide what runs at the new ceiling.

**Autonomy & actions**
- Once on, a policy labels files without user interaction, and Learn says it cannot label or remove labels until it has run at least one simulation. Simulation is the only documented checkpoint before the service acts.
- Learn says files that are open, and PDFs when PDF labeling is not enabled for the tenant, are not labeled, so a higher ceiling does not by itself extend coverage to them.

**Change & support**
- Microsoft's notice expects no end-user changes. The visible effect is in reporting: Learn says labeling progress updates every 48 hours, so the effect of the change shows with a delay.
- The 500,000 figure is described as a ceiling and not as a rate, so agree expectations with stakeholders before promising completion dates for a labeling backlog.

## Cost and licensing

Microsoft Learn directs service-side auto-labeling licensing to the Client and service-side automatic sensitivity labeling feature matrix; that matrix includes Microsoft 365 E5 and Microsoft 365 E5 Information Protection and Governance. The auto-labeling page says that with E3 or Business Premium, auto-labeling of files and emails is not included and requires an eligible subscription or add-on for service-side automatic sensitivity labeling; check the Client and service-side automatic sensitivity labeling matrix. Sources: [Automatically apply a sensitivity label to Microsoft 365 data](https://learn.microsoft.com/purview/apply-sensitivity-label-automatically) and [Microsoft Purview service description](https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description#microsoft-purview-information-protection-sensitivity-labeling).

That page names no separate charge, meter or licence for the higher daily ceiling at the time of writing (November 2026), and the roadmap item and MC1461154 mention none. Indirect costs are admin time to review simulation results and labeling reports, and the Data Classification Content Viewer role needed to see file contents in simulation results, which global admins do not hold by default.

## Scope

MC1461154 says the change affects organisations using Microsoft Purview auto-labeling policies for SharePoint Online and OneDrive for Business. The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform. Roadmap item 571309 lists the same feature for GCC, GCC High and DoD separately.

Learn lists these related conditions for SharePoint and OneDrive auto-labeling: PDF and Word, Excel and PowerPoint files are supported, PDFs are skipped unless PDF labeling is enabled for the tenant, files cannot be labeled while open, a OneDrive account not associated with its user account is not supported, and sensitivity labels must be enabled for Office files in SharePoint and OneDrive. The same page gives a maximum of 100 auto-labeling policies per tenant, and says the Auto-labeling page is not visible in regions where a backend Azure dependency is unavailable.

## Governance guidance

### Before rollout
- Inventory the auto-labeling policies that are On in the Microsoft Purview portal, and confirm each one's SharePoint and OneDrive locations still match your intent.
- Confirm auditing is turned on for the organisation, because Learn lists it as required for simulation.
- Check every label used by a SharePoint or OneDrive policy: those that apply encryption need **Assign permissions now** and **User access to content expires** set to **Never**.

### At rollout
- Treat any policy already On as running at the higher ceiling, and decide whether any should stay in simulation until its results are reviewed.
- Run new or edited policies in simulation first, review the matches, then use **Turn on policy**; the person doing so needs the Compliance Administrator or Compliance Data Administrator role.
- Brief the service desk that labels and protection may appear on more files sooner, while noting that Microsoft's notice expects no end-user experience changes.

### After rollout
- Review **Labeled items** and **Labeling failures** for each policy through **View details**, and read the failure reasons even when few files fail.
- Export labeling activity from Activity explorer to follow tenant-wide trends, and note Learn says its labeling progress figures refresh every 48 hours.
- Revisit estimates for clearing labeling backlogs: Learn says 500,000 files a day is a ceiling and not a guaranteed rate.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which SharePoint and OneDrive locations an auto-labeling policy covers</strong><br><small class="controls__note">Security &amp; Compliance PowerShell. Use -AddOneDriveLocation for OneDrive. Learn says the default of All is exempt from the 1,000-site portal limit.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Policies › Auto-labeling policies › policy › Edit policy › Choose locations where you want to apply the label <a href="https://learn.microsoft.com/purview/apply-sensitivity-label-automatically" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AutoSensitivityLabelPolicy -Identity &lt;PolicyIdParameter&gt; -AddSharePointLocation &lt;SharePointSites&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-autosensitivitylabelpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether an auto-labeling policy runs in simulation or applies labels</strong><br><small class="controls__note">Portal needs Compliance Administrator or Compliance Data Administrator and a completed simulation. -Mode TestWithoutNotifications is test mode; Disable turns the policy off.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Policies › Auto-labeling policies › policy › Turn on policy <a href="https://learn.microsoft.com/purview/apply-sensitivity-label-automatically" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AutoSensitivityLabelPolicy -Identity &lt;PolicyIdParameter&gt; -Mode Enable</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-autosensitivitylabelpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Labeling progress, labeled items and failures for each policy</strong><br><small class="controls__note">The API side exports Activity explorer data, a different view from the per-policy review pages. Both are read-only monitoring, not a control over the ceiling.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Policies › Auto-labeling policies › policy › View details <a href="https://learn.microsoft.com/purview/apply-sensitivity-label-automatically" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Export-ActivityExplorerData -Filter1 @(&quot;Activity&quot;, &quot;LabelApplied&quot;)</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/export-activityexplorerdata" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the unified audit log records activity (required for simulation)</strong><br><small>Tenant</small><br><small class="controls__note">Run in Exchange Online PowerShell; needs the Audit Logs role. The portal banner appears only if auditing is not already on.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Start recording user and admin activity <a href="https://learn.microsoft.com/purview/audit-log-enable-disable" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AdminAuditLogConfig -UnifiedAuditLogIngestionEnabled $true</code> <a href="https://learn.microsoft.com/purview/audit-log-enable-disable" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The 500,000 figure is described by Learn as a tenant-wide ceiling in aggregate across all auto-labeling policies, so nothing in the table sets the ceiling itself.

Roles: Learn says turning a policy from Ready to turn on to On needs Compliance Administrator or Compliance Data Administrator, and viewing file contents in simulation source view needs Data Classification Content Viewer. Turning auditing on or off needs the Audit Logs role in Exchange Online. The Activity explorer export runs in Security & Compliance PowerShell and needs permissions assigned there; it reports on up to 30 days of data. The PowerShell mode value TestWithoutNotifications is the test (simulation) mode and Disable switches a policy off.

## Open questions

- What daily rate should tenants plan around, given that Learn calls 500,000 an absolute maximum that is not a guaranteed or consistently expected rate? Watch the Learn auto-labeling page for any published figure.
- Is there a report or indicator that shows when the higher ceiling is in effect for a given tenant, given the rollout windows in MC1461154? Watch Message center and the Learn page.
- Does the higher ceiling change how quickly simulation completes? Learn gives a separate limit of 20,000,000 matched files per policy simulation.
- When will the GCC, GCC High and DoD item (571309) reach tenants? The roadmap targets November CY2026; watch that roadmap item.

<!-- rationale
risk: Medium. Active auto-labeling policies can label up to 500,000 files a day without an admin doing anything, so a mis-scoped policy that applies encryption or replaces labels acts on files faster. Simulation and policy scope are the controls.
cost: Low. Auto-labeling policies are listed as included with E5-tier licences, and the Learn page names no separate charge for the higher ceiling at the time of writing (November 2026). The remaining cost is admin time for simulation and review.
impact: Low. Only tenants with active auto-labeling policies for SharePoint or OneDrive are affected, and Microsoft's notice MC1461154 says no end-user experience changes are expected. Compliance admins will see faster labeling.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: Simulation is the only documented checkpoint before the service acts. | Found: Searched: Purview auto-labeling simulation only checkpoint before policy actions prerequisites validation; read apply-sensitivity-label-automatically, auto-label-simulation-results and troubleshooting excerpts. They require simulation but do not state this exclusive description. | Fix: Remove 'Simulation is the only documented checkpoint before the service acts.' Keep the preceding, supported statement that the policy must run at least one simulation.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout / consistency: Every control that the governance checklist tells administrators to check is represented in the controls table. | Found: Checklist: Check every label ... Assign permissions now ... User access to content expires ... Never. Table rows: policy locations; policy mode; labeling monitoring; unified audit logging. No label-encryption settings row. | Fix: The Before rollout step checking Assign permissions now and User access to content expires has no controls-table row. Remove that checklist bullet; retain the supported encryption prerequisites in Risk assessment. Do not add a new row as part of this correction.
-->
