---
title: "Microsoft Purview Endpoint DLP: choose file extensions from a curated list"
slug: "endpoint-data-loss-prevention-endpoint-dlp-now-supports-a-pre-curated-list-of-file-extensi"
roadmapId: 562993
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans to replace free-text entry in the Endpoint DLP File extension condition with a curated picker from mid-December 2026. Existing policies keep enforcing; edited ones must drop unsupported extensions."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "The Microsoft Purview service description lists Endpoint Data Loss Prevention (DLP) as Included for Microsoft 365 E5/A5/G5 and the other plans it names. A licence or meter specific to the curated list is not yet published."
audiences: ["compliance","security","m365-admin"]
tags: ["endpoint-dlp","dlp","purview","policy"]
sources:
  - title: "Microsoft 365 Roadmap 562993"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=562993"
    kind: "roadmap"
  - title: "MC1384415: (Updated) Microsoft Purview | Endpoint Data Loss Prevention now supports a pre‑curated file extension list"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1384415"
    kind: "message-center"
  - title: "Data Loss Prevention policy reference"
    url: "https://learn.microsoft.com/purview/dlp-policy-reference"
    kind: "learn"
  - title: "Learn about Endpoint data loss prevention"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-learn-about"
    kind: "learn"
  - title: "Configure endpoint data loss prevention settings"
    url: "https://learn.microsoft.com/purview/dlp-configure-endpoint-settings"
    kind: "learn"
  - title: "Help protect files that Endpoint Data Loss Prevention doesn't scan"
    url: "https://learn.microsoft.com/purview/dlp-create-policy-files-edlp-doesnt-scan"
    kind: "learn"
  - title: "Get started with endpoint data loss prevention"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-getting-started"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "New-DlpComplianceRule"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule"
    kind: "learn"
videos: []
related: ["microsoft-purview-endpoint-data-loss-prevention-ability-to-protect-files-stored-in-the-exc","microsoft-purview-endpoint-data-loss-prevention-protect-sensitive-data-over-ftp-and-sftp-w","microsoft-purview-endpoint-data-loss-prevention-policy-sync-and-device-health-ai-powered-i"]
controls:
  - governs: "Tenant switch to keep free-form file extension entry in the File extension condition"
    scope: "tenant"
    ui: null
    api: null
    note: "MC1384415 says free-form entry is no longer available once the picker rolls out."
  - governs: "Coverage for file extensions Endpoint DLP does not scan (the alternative Microsoft names)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Loss Prevention > Policies > Enterprise applications & devices > Create policy > Custom > Custom policy"
      docs: "https://learn.microsoft.com/purview/dlp-create-policy-files-edlp-doesnt-scan"
    api: null
    note: "In the rule: Actions > Audit or restrict activities on devices > Apply restrictions to only unsupported file extensions. Pages mark the scenario preview; no scoping by Device and device groups."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-09-18T22:00:04"
changes:
  - date: "2026-11-19"
    note: "First briefing: free-text file extension entry in Endpoint DLP gives way to a curated picker from mid-December 2026, per MC1384415."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 50 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-19"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 50
  confirmed: 48
  unconfirmed: 1
  contradicted: 1
  attempts: 1
  hash: "932c481ef497cd826109b107a945fca7"
---

## What's changing

Microsoft plans to replace free-text entry in the **File extension is** condition of Endpoint DLP policies with a picker of pre-curated file extensions, so that only supported, scannable file types can be chosen. The roadmap item (ID 562993) says free-form entry could previously let unsupported or non-scannable extensions be used, which could leave gaps in protection and add processing overhead on endpoints.

Microsoft's notice MC1384415 sets out the behaviour. Only file types that are supported and can be scanned appear in the picker, and free-form text entry is no longer available. Existing policies continue to enforce as they do today unless edited. If an edited policy contains unsupported file extensions, those entries must be removed before the policy can be saved. To keep coverage for unsupported or non-scannable types, the notice points to the **Apply restrictions to only unsupported file extensions** feature, and says the overall protection posture does not change.

The roadmap record shows the item as In development, targeted for December CY2026, General Availability, Worldwide (Standard Multi-Tenant), platform Web. MC1384415 was updated on 18 September 2026 and says rollout begins in mid-December 2026 (previously mid-September) and completes by the end of December 2026. It sets no act-by date. These are Microsoft's targets, not shipped behaviour.

Microsoft Learn currently describes **File extension is** as a condition where you add file extensions separated by commas. The notice says the Learn pages on Endpoint DLP and on conditions supported for Endpoints will be updated before rollout, so what the picker contains is not yet on Learn and this page relies on the notice.

## Why it matters

Nothing breaks on arrival: the notice says existing policies keep enforcing, and it asks for no action if you are not modifying policies. The effect lands on the next edit. A rule that lists an extension outside the curated list cannot be saved until that entry is removed, so a routine change request to such a rule can stall until someone decides what covers those files.

The replacement Microsoft names works differently. Learn says Endpoint DLP scans content for the **File extension is** condition, which lets you see Sensitive info type values in events or alerts, while **Apply restrictions to only unsupported file extensions** does not scan file content. Learn also says that option does not support scoping by **Device and device groups** in the policy location setting, and the pages describing it mark the scenario as preview. Plan the rule edits as a small migration, not a tidy-up. Because the default is on, the picker reaches tenants in the December window without anyone enabling it.

## Risk assessment

**Data exposure**

- Removing an unsupported extension from a **File extension is** rule to get it saved takes those files out of that condition. Unless a replacement rule using **Apply restrictions to only unsupported file extensions** is in place, activity on them is no longer matched by that rule.
- A replacement rule does not scan content, so alerts for those files carry no Sensitive info type values, per Learn. Investigators lose that detail for the migrated extensions.

**Security & identity**

- The roadmap item and MC1384415 describe no change to roles, identities or permissions.

**Autonomy & actions**

- The notice describes a change to how the condition is configured, not to the actions a rule takes. Block, warn and audit settings on existing rules are not described as changing.

**Change & support**

- Saving an edited policy that still holds unsupported extensions will be refused, so owners editing rules for any reason hit the change during the rollout window.
- Learn warns that blocking specific file extensions can break an application that is marked as unallowed and needs to open files with those extensions in normal operation, citing .dll, .json and .tmp as examples. Check this before moving extensions into a blocking rule.
- Runbooks, screenshots and scripts that assume free-text entry will be out of date. Whether automation is affected is not stated (see Open questions).

## Cost and licensing

**Licence.** The Microsoft Purview service description lists Endpoint Data Loss Prevention (DLP) as Included for Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW and Microsoft Defender + Purview Suite FLW, and Microsoft 365 E5/A5/F5/G5 Information Protection & Governance. The Endpoint DLP getting-started page points to the Microsoft 365 licensing guidance for licensing. Neither the roadmap item nor MC1384415 names a licence or meter for the curated list.

**Meter.** None is published for this change at the time of writing (November 2026).

**Indirect cost.** Admin time to review each rule that uses **File extension is**, move unsupported extensions to a replacement rule and test it. The roadmap item says the curated list reduces unnecessary processing on endpoints; it gives no figure.

## Scope

- **Who is affected:** Microsoft 365 administrators managing Microsoft Purview Endpoint DLP device policies, per MC1384415. The notice lists the platforms as Microsoft Purview, Endpoint Data Loss Prevention and supported Windows endpoints; the roadmap record lists the platform as Web.
- **Clouds:** the roadmap record lists Worldwide (Standard Multi-Tenant) only.
- **Rollout:** the roadmap targets December CY2026; MC1384415 says rollout begins in mid-December 2026 and completes by the end of December 2026.
- **Existing policies:** continue to enforce as they do today unless edited, per the notice.
- **Prerequisites:** none are stated for the picker beyond the Endpoint DLP licensing above.

## Governance guidance

### Before rollout

- Inventory every Endpoint DLP rule that uses **File extension is** and list the extensions each holds, as the notice recommends.
- Compare each extension with the monitored and unsupported file lists on the Learn page "Learn about Endpoint data loss prevention", and mark any that look unsupported.
- Decide, for each unsupported entry, whether a separate rule using **Apply restrictions to only unsupported file extensions** should cover it. Test it outside production first, as its Learn page cautions, and note that it does not support scoping by **Device and device groups**.
- Warn policy owners that an edit may be refused until unsupported entries are removed.

### At rollout

- Build and enable the replacement rules before you remove unsupported extensions from existing rules, so coverage does not lapse between edits.
- Edit existing rules in planned batches during mid to late December 2026 and keep the old and new lists in your change record.
- Check which applications touch the extensions you are about to block, as Learn advises, before enabling a blocking action.

### After rollout

- Review events from the replacement rules and expect no Sensitive info type values in them.
- Re-read the updated Learn pages on Endpoint DLP and on conditions supported for Endpoints once Microsoft publishes them, and correct your runbooks.
- Record which extensions the picker offered, so later reviews can tell a dropped entry from a typing mistake.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant switch to keep free-form file extension entry in the File extension condition</strong><br><small>Tenant</small><br><small class="controls__note">MC1384415 says free-form entry is no longer available once the picker rolls out.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Coverage for file extensions Endpoint DLP does not scan (the alternative Microsoft names)</strong><br><small>Tenant</small><br><small class="controls__note">In the rule: Actions &gt; Audit or restrict activities on devices &gt; Apply restrictions to only unsupported file extensions. Pages mark the scenario preview; no scoping by Device and device groups.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Loss Prevention › Policies › Enterprise applications &amp; devices › Create policy › Custom › Custom policy <a href="https://learn.microsoft.com/purview/dlp-create-policy-files-edlp-doesnt-scan" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No tenant setting for the picker is documented, so the curated list cannot be switched off separately. The replacement the notice names is the policy action in the second row; it is a different mechanism with its own limits, not a control over the picker.

The **Unsupported file extension exclusions** list in Endpoint DLP settings is a separate control that trims what the unsupported-files approach covers; see [Configure endpoint data loss prevention settings](https://learn.microsoft.com/purview/dlp-configure-endpoint-settings#unsupported-file-extension-exclusions). The roles needed to edit these policies are not stated in the sources read for this page.

## Open questions

- Which extensions will the picker contain, and will Microsoft publish the list? The notice says the Learn pages on Endpoint DLP and on conditions supported for Endpoints will be updated before rollout.
- Does the save-time check also apply to rules created or edited through Security & Compliance PowerShell or other automation, or only in the portal?
- Does "edited" in the notice mean any edit to a rule, or only a change to its file extension list?
- Does the picker apply to rules that cover macOS devices, given that the notice names supported Windows endpoints?
- Will **Apply restrictions to only unsupported file extensions** leave preview? Watch Message center and its Learn pages.

<!-- rationale
risk: Low. Microsoft's notice MC1384415 says existing policies keep enforcing as they do today unless edited; the exposure is a coverage gap if unsupported extensions are removed from a rule without a replacement.
cost: Low. The only cost the sources show is admin time to review and edit rules; the Purview service description lists Endpoint DLP as included in the plans it names, and no separate meter is published for this change.
impact: Low. The notice names Microsoft 365 administrators managing Endpoint DLP device policies as the people affected; end users are not described as changed.
-->

<!-- verifier-findings (2026-11-19, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] Governance controls / absence: The curated list cannot be switched off separately. | Found: Searched: 'Endpoint DLP curated file extension picker disable tenant setting licensing meter supported extensions'. MC1384415 removes free-form entry; policy reference, endpoint settings and PowerShell references publish no opt-out, but do not state a prohibition. | Fix: Replace 'No tenant setting for the picker is documented, so the curated list cannot be switched off separately.' with 'No tenant setting to switch off the picker is documented at the time of writing (November 2026).'
- [contradicted, blocker] Governance controls / absence: The roles needed to edit these policies are not stated in the sources read for the briefing. | Found: This parameter requires membership in the Compliance Administrator or Compliance Data Administrator roles in Microsoft Entra ID. | Fix: Remove 'The roles needed to edit these policies are not stated in the sources read for this page.' The cited New-DlpComplianceRule reference specifies roles for EndpointDlpRestrictions, and https://learn.microsoft.com/purview/dlp-create-deploy-policy publishes policy-creation permissions. | Source: https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment; Governance guidance / behaviour: Events or alerts from the unsupported-file replacement do not contain Sensitive info type values. | Found: you don't see values for Sensitive info type in events or alerts that are generated by policy matches. | Fix: Add https://learn.microsoft.com/purview/dlp-create-policy-sharing-set-unsupported-files to sources for the statement about missing Sensitive info type values. | Source: https://learn.microsoft.com/purview/dlp-create-policy-sharing-set-unsupported-files
- [supported, minor] controls[1].ui; controls[1].note; Governance controls table / admin-path: The printed Purview route through Policies, Enterprise applications & devices, Create policy, Custom and Custom policy leads toward the unsupported-extension action. | Found: Open Data Loss Prevention > Policies. Select Enterprise applications & devices. Select Create policy and select the Custom from the Categories then Custom policy template from Regulations. | Fix: The cited route is correct but ends early. Extend it to 'Data Loss Prevention > Policies > Enterprise applications & devices > Create policy > Custom > Custom policy > Full directory > Devices > rule > Conditions > Document could not be scanned > Actions > Audit or restrict activities on devices > Apply restrictions to specific activity > Apply restrictions to only unsupported file extensions'. The other Microsoft page https://learn.microsoft.com/purview/dlp-create-policy-sharing-set-unsupported-files reverses Create policy and Enterprise applications & devices; note that documentation difference. | Source: https://learn.microsoft.com/purview/dlp-create-policy-files-edlp-doesnt-scan
-->
