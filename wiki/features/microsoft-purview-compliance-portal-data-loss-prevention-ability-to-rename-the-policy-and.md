---
title: "Microsoft Purview DLP: rename existing policies and rules (GCC, GCC High, DoD)"
slug: "microsoft-purview-compliance-portal-data-loss-prevention-ability-to-rename-the-policy-and"
roadmapId: 380678
topic: "governance"
products: ["Microsoft Purview"]
summary: "DLP administrators will be able to rename an existing data loss prevention policy or rule instead of recreating it. Nothing is renamed until an admin does it; check reports and queries that match on policy or rule names."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "October CY2025"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Renaming is part of managing DLP policies, which the Microsoft Purview service description licenses through Microsoft 365 E5/A5/G5/E3/A3/G3, Office 365 E5/A5/G5/E3/A3/G3 and other listed plans. Nothing specific to renaming is published."
audiences: ["compliance","security","m365-admin"]
tags: ["purview","dlp","role-groups","auditing","powershell","policy","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 380678"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=380678"
    kind: "roadmap"
  - title: "Create and deploy data loss prevention policies"
    url: "https://learn.microsoft.com/purview/dlp-create-deploy-policy"
    kind: "learn"
  - title: "Set-DlpCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancepolicy"
    kind: "learn"
  - title: "Set-DlpComplianceRule"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule"
    kind: "learn"
  - title: "Permissions in the Microsoft Purview portal"
    url: "https://learn.microsoft.com/purview/purview-permissions"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Create policy to detect and alert on U.S. PII data exposure"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-create-policy-detect-pii-data-exposure"
    kind: "learn"
  - title: "Add-RoleGroupMember"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
videos: []
related: ["data-loss-prevention-dlp-policy-change-insights-with-security-copilot","microsoft-purview-data-loss-prevention-export-dlp-and-label-policy-configurations","auditing"]
controls:
  - governs: "Who can edit, and so rename, DLP policies and rules (role group membership)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > role group > Edit > Edit members of the role group > Choose users"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Role groups that can create and deploy DLP policies are listed on the Create and deploy DLP policies page. Portal changes need the Role Management role."
  - governs: "Display name of an existing DLP policy"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > policy > Edit policy"
      docs: "https://learn.microsoft.com/purview/endpoint-dlp-create-policy-detect-pii-data-exposure"
    api: null
    note: "Rename is preview on Learn. This route opens the policy editor; Microsoft Learn does not document the subsequent steps to the rename field."
  - governs: "Display name of an existing DLP rule"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > policy > Edit policy > Customize advanced DLP rules > rule"
      docs: "https://learn.microsoft.com/purview/endpoint-dlp-create-policy-detect-pii-data-exposure"
    api: null
    note: "Rename is preview on Learn. This route opens the rule editor; Microsoft Learn does not document the subsequent steps to the rename field."
  - governs: "Tenant-wide switch for the rename capability"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no setting to enable or disable renaming at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2025-04-18T22:15:14"
changes:
  - date: "2026-11-25"
    note: "New briefing: renaming DLP policies and rules, described as preview on Learn, with the role-group control and the Set-DlpCompliancePolicy and Set-DlpComplianceRule -DisplayName parameter."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 45 statements contradicted, 8 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected: removed the undocumented -DisplayName commands from the rename rows, narrowed statements on what renaming changes and on -Identity in scripts, and dropped unverified monitoring checks."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 45 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 45
  confirmed: 45
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "c7cc9740aad40eb554da72a84c8c1a5f"
---

## What's changing

Microsoft plans to let DLP administrators rename an existing Microsoft Purview data loss prevention (DLP) policy or rule without recreating it. The roadmap item states that the feature gives the DLP admin the ability to rename the existing policy or rule "without having to create the entire the rule or policy again".

Microsoft Learn already describes this as a preview capability: on the [Create and deploy data loss prevention policies](https://learn.microsoft.com/purview/dlp-create-deploy-policy) page, Microsoft says you can change the display name of DLP policies and rules. Once a policy or rule is renamed, existing records keep the previous name in activity explorer events, alerts and audit records; new records carry the new name. The old names remain until those items age out of the system. Renaming is something an administrator chooses to do, and Microsoft Learn documents no tenant setting that turns the capability on or off at the time of writing (November 2026).

This roadmap item covers GCC, GCC High and DoD, on the web, for General Availability. Its status is In development with a target of October CY2025, a date that has now passed; the record was last modified in April 2025. The Learn page marks the capability as preview and does not say which clouds the preview reaches, so the roadmap status and the Learn text differ, and US Government tenants should not assume the preview applies to them.

## Why it matters

Recreating a policy just to correct its name means rebuilding its rules, scope and state, and risks a gap or a mistake in enforcement. Being able to rename in place removes that reason to touch a working policy.

The catch is history. Because older alerts, activity explorer events and audit records keep the previous name, anything that finds DLP activity by policy or rule name (saved audit searches, SIEM queries, alert triage filters, scheduled reports) will see one policy under two names until the old records age out. If nobody renames anything, nothing changes; once someone does, name-based reporting needs to match both names for a while.

## Risk assessment

**Data exposure**
- Renaming changes the display name of a policy or rule, according to the Learn page.

**Security & identity**
- Renaming is done by whoever can edit DLP policies: the Learn page lists role groups such as Compliance administrator, Compliance data administrator, Information Protection, Information Protection Admin and Security administrator, and the granular DLP Compliance Management role. Membership of those role groups (controls table, first row) decides who can rename.
- A renamed policy can be made to look like something it is not, for example a narrowed policy keeping a broad-sounding name. Confirm in the audit log how a rename is recorded before relying on it to spot such changes.

**Autonomy & actions**
- Microsoft describes renaming as changing the display name of a policy or rule.

**Change & support**
- Existing alerts, activity explorer events and audit records keep the old name, and new ones show the new name, so investigations and reports that filter by name split in two until the old records age out.
- The cmdlet references say `-Identity` accepts a name, DN, GUID or Id; they do not state whether a display-name change affects name-based resolution. Test this before changing production scripts.

## Cost and licensing

**Licence.** The [Microsoft Purview service description](https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description) lists the licences that give users the right to benefit from DLP for Exchange Online, SharePoint Online and OneDrive, including Microsoft 365 E5/A5/G5/E3/A3/G3, Microsoft 365 Business Premium and Office 365 E5/A5/G5/E3/A3/G3. Renaming is a way of managing those policies; Microsoft has not published any licence term specific to it.

**Meter.** No meter or charge is documented for renaming at the time of writing (November 2026).

**Indirect cost.** Admin time to update saved searches, SIEM queries, reports and scripts that match on policy or rule names.

## Scope

- **Who uses it:** DLP administrators. The Learn page lists the role groups whose members can create and deploy policies (see Risk assessment).
- **Clouds:** the roadmap item lists GCC, GCC High and DoD.
- **Platform:** Web (Microsoft Purview portal), per the roadmap record.
- **Status:** In development, target October CY2025, General Availability phase.
- **Learn status:** preview; the page does not name the clouds the preview covers.
- **Objects:** DLP policies and the rules inside them.

## Governance guidance

### Before rollout
- List the saved audit searches, SIEM queries, alert filters and reports that match DLP activity by policy or rule name, so each can be updated when a name changes.
- Change scripts that call Set-DlpCompliancePolicy or Set-DlpComplianceRule by name to use the GUID or Id that `-Identity` also accepts.
- Agree a naming convention for DLP policies and rules before anyone starts renaming.
- Check who holds the role groups that can edit DLP policies (Microsoft Purview portal > Settings > Roles and scopes > Role groups).

### At rollout
- Rename one test policy and one test rule first.
- Record each rename (old name, new name, date, who) in your change log, since older records keep the old name.

### After rollout
- Update name-based queries and reports to match both the old and new names until the old records age out.
- Brief alert triage staff that one policy can appear under two names during that period.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can edit, and so rename, DLP policies and rules (role group membership)</strong><br><small>Tenant</small><br><small class="controls__note">Role groups that can create and deploy DLP policies are listed on the Create and deploy DLP policies page. Portal changes need the Role Management role.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › Role groups for Microsoft Purview solutions › role group › Edit › Edit members of the role group › Choose users <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Display name of an existing DLP policy</strong><br><small class="controls__note">Rename is preview on Learn. This route opens the policy editor; Microsoft Learn does not document the subsequent steps to the rename field.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › policy › Edit policy <a href="https://learn.microsoft.com/purview/endpoint-dlp-create-policy-detect-pii-data-exposure" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Display name of an existing DLP rule</strong><br><small class="controls__note">Rename is preview on Learn. This route opens the rule editor; Microsoft Learn does not document the subsequent steps to the rename field.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › policy › Edit policy › Customize advanced DLP rules › rule <a href="https://learn.microsoft.com/purview/endpoint-dlp-create-policy-detect-pii-data-exposure" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch for the rename capability</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no setting to enable or disable renaming at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Renaming has no switch of its own: Microsoft Learn documents no tenant setting that enables or disables it at the time of writing (November 2026), so the practical control is who may edit DLP policies, set through Microsoft Purview role groups. Adding members to role groups in the portal needs the Role Management role.

The Set-DlpCompliancePolicy and Set-DlpComplianceRule references list `-DisplayName` as String but do not explain whether it performs the documented rename, so test a scripted rename on a non-production policy before relying on it. The portal routes in the table are the documented way into an existing policy and its rules; the Learn pages do not say which page of the edit wizard holds the name.

## Open questions

- When will the rename capability, which Learn marks as preview, reach GCC, GCC High and DoD tenants, given the roadmap target of October CY2025 has passed? Watch this roadmap item and Message center.
- Does `-DisplayName` on Set-DlpCompliancePolicy and Set-DlpComplianceRule perform the same rename as the portal, and does it change the name that `-Identity` accepts? Watch the cmdlet reference pages.
- How long do the old names persist in alerts, activity explorer and audit records before they age out? Watch the Create and deploy data loss prevention policies page.

<!-- rationale
risk: Low. Renaming changes the display name of a policy or rule: older alerts, activity explorer events and audit records keep the previous name, which can split reports and searches.
cost: Low. DLP itself is licensed through plans such as Microsoft 365 E3/E5 and Office 365 E3/E5; no separate licence or charge for renaming is published, so the cost is admin time to update name-based reports and scripts.
impact: Low. Only DLP administrators and the analysts who search alerts and audit records by policy or rule name notice the change.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].governs; Risk assessment: Security & identity; Governance controls / applicability: DLP editing permissions, granted through role groups, govern who can edit and rename DLP policies and rules. | Found: Administrative unit admins need to be assigned to one of the same roles or role groups as administrators of unrestricted DLP policies in order to create and manage DLP policies for their administrative unit. | Fix: Add https://learn.microsoft.com/purview/dlp-policy-reference#policy-scoping to sources and cite it after the explanation that DLP editing permissions govern renaming; this page explicitly documents policy-management and editing permissions. | Source: https://learn.microsoft.com/purview/dlp-policy-reference#policy-scoping
-->
