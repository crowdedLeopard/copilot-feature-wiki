---
title: "Microsoft Purview Insider Risk Management: more indicator variants and larger detection groups"
slug: "microsoft-purview-compliance-portal-enhancements-to-variant-limits-and-detection-groups"
roadmapId: 511798
topic: "governance"
products: ["Microsoft Purview"]
summary: "Insider Risk Management now allows up to 10 variants per built-in indicator (100 in total) and 500 items per detection group. Administrators can use the extra room to tune detections; no separate higher-limits switch is documented."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2025"
previewDate: "November CY2025"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft offers Insider Risk Management as part of a selection of Microsoft 365 subscriptions and points to its subscription requirements page. Insider Risk Management is included in Microsoft 365 E5, among the plans listed in Microsoft's service description. Nothing specific to variant or detection group limits is published. Some indicators need Purview pay-as-you-go billing."
audiences: ["security","compliance"]
tags: ["insider-risk-management","purview","role-groups","sensitive-information-types","classifiers"]
sources:
  - title: "Configure policy indicators in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators"
    kind: "learn"
  - title: "Fine-tune exclusions in Insider Risk Management by creating detection groups"
    url: "https://learn.microsoft.com/purview/insider-risk-management-settings-detection-groups"
    kind: "learn"
  - title: "Limits in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-limits"
    kind: "learn"
  - title: "Learn about Insider Risk Management settings"
    url: "https://learn.microsoft.com/purview/insider-risk-management-settings"
    kind: "learn"
  - title: "Assign permissions in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    kind: "learn"
  - title: "Plan for Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-plan"
    kind: "learn"
  - title: "Get started with Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-configure"
    kind: "learn"
  - title: "Best practices for managing your alert volume in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-best-practices-alert-tuning"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 511798"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=511798"
    kind: "roadmap"
  - title: "Who can configure Insider Risk Management policies and settings (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
  - title: "Configure inline alert customization in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-settings-inline-alert-customization"
    kind: "learn"
videos: []
related: ["insider-risk-management","microsoft-purview-compliance-portal-insider-risk-management-recommended-thresholds","microsoft-purview-compliance-portal-insider-risk-management-bring-your-own-detections","role-groups","classifiers"]
controls:
  - governs: "Creating variants of built-in indicators"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Insider Risk Management > Settings > Policy indicators > New indicator variant (preview)"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators"
    api: null
    note: "Preview label in the portal. Up to 10 variants per built-in indicator and 100 in total, per this page."
  - governs: "Contents of detection groups (up to 500 items each)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Insider Risk Management > Settings > Detection groups > Type > Domains > New domain group > Add domains"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-settings-detection-groups"
    api: null
    note: "Domains shown; file paths, file types, keywords, sensitive info types, SharePoint sites and trainable classifiers follow the same steps with their own type and New button."
  - governs: "Which indicators and variants a policy uses"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Insider Risk Management > Policies > policy > Edit policy > Indicators"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-best-practices-alert-tuning"
    api: null
    note: "Scope is the individual policy. On Indicators, find the built-in indicator, open its variant list and select the required variant checkboxes."
  - governs: "Who can configure Insider Risk Management policies and settings"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and groups > Roles groups > Insider Risk Management > Edit > Choose users"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"Insider Risk Management\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "The Insider Risk Management Admins role group can also configure policies and settings."
confidence: "medium"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-05-14T23:15:59"
changes:
  - date: "2026-11-28"
    note: "New briefing: higher variant and detection group limits in Insider Risk Management, with the conflicting Learn limits page noted."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 61 statements contradicted, 3 unconfirmed; taken offline until corrected"
  - date: "2026-11-28"
    note: "Corrected after review: variant control now covers creation only; removed unsupported 'nothing changes' and 'no new data' statements; added the Microsoft 365 E5 licensing source."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 60 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-28"
    note: "Corrected after review: default state is now Not stated, as Microsoft has not said what happens on arrival; detection group path extended to the Add domains field; impact rationale narrowed."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 64 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-28"
    note: "Corrected after review: the role group sentence no longer says configuration is limited to two role groups; the At rollout step now gives the full documented domain detection group path."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 62 statements not yet confirmed"
version: 4
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 62
  confirmed: 62
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "734ebbc23d53d1c19db9f815ba1edae2"
---

## What's changing

Microsoft Purview Insider Risk Management raises two limits that govern how far administrators can tune its built-in indicators. The roadmap item states that the variant limit rises from 3 to 10 per indicator, with an overall limit of 100 across all indicators, and that the number of items in one detection group rises from 200 to 500.

A **variant** is a copy of a built-in indicator narrowed by **detection groups**: named lists of domains, file paths, file types, keywords, sensitive info types, SharePoint sites or trainable classifiers. A variant can ignore activity involving the items in the selected groups, or detect only that activity. Detection groups are also used to adjust global exclusions. The policy indicators page now states the new variant limits ("up to ten variants for each built-in indicator and a total of 100 variants across all indicators"), and the detection groups page states that each group can have up to 500 items, with up to 10 groups of each type. Neither page describes a setting to turn the higher limits on. Microsoft has not stated what happens on arrival if no administrator acts.

Microsoft Learn is not consistent at the time of writing (November 2026): the **Limits in Insider Risk Management** page still lists 3 variants per indicator and 200 items in a detection group. The variant option in the portal is labelled **New indicator variant (preview)**.

The roadmap record shows the item as Launched, with a preview date of November CY2025 and a target date of December CY2025, release phases General Availability and Preview, on the web, in the Worldwide (Standard Multi-Tenant) cloud.

## Why it matters

Three variants per indicator forced teams to choose which user groups or data sets got tailored detection; ten per indicator lets one tenant keep, for example, separate email variants for personal domains, partner domains and named file types without dropping one. Five hundred items per group means longer domain, site and keyword lists fit in one group rather than being split.

The flip side is that a variant set to ignore activity involving its groups, or a detection group added to global exclusions, removes activity from scoring. Larger lists make it easier to exclude more than intended, so changes to variants and groups deserve the same review as policy changes. No source says existing behaviour changes merely because these limits rise.

## Risk assessment

**Data exposure**
- Variants and detection groups narrow or widen what existing indicators score.

**Security & identity**
- Members of the *Insider Risk Management* and *Insider Risk Management Admins* role groups can configure policies and settings; the Entra and Purview administrative roles listed on the permissions page have the same solution permissions as *Insider Risk Management Admins*. Keep membership small, since these roles can now exclude far more activity from scoring.

**Autonomy & actions**
- When variants are added to policies, the dashboard generates alerts.

**Change & support**
- A variant using **Ignore activity involving items in selected groups** with a 500-item group can hide activity investigators expect to see. Microsoft's tip is to run the built-in indicator and its variant in the same policy and compare alerts before relying on the variant alone.
- Variants don't support sequences, cumulative exfiltration activities, the risk score booster, or real-time analytics, so threshold recommendations are not available for them.

## Cost and licensing

Microsoft offers Insider Risk Management as part of a selection of Microsoft 365 licensing subscriptions, and the Get started page sends administrators to the subscription requirements for Insider Risk Management (Plan for Insider Risk Management; Get started with Insider Risk Management). Insider Risk Management is included in Microsoft 365 E5, among the plans listed in Microsoft's service description ([Microsoft Purview service description](https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description)). Nothing specific to the higher variant or detection group limits is published, and the roadmap item names no licence.

The Get started page also states that some indicators are available only with Purview pay-as-you-go billing. Whether a variant of such an indicator adds to that billing is not yet published. The indirect cost is administrator and analyst time to design, test and review variants.

## Scope

- **Who**: Insider Risk Management administrators; members of the *Insider Risk Management* or *Insider Risk Management Admins* role groups can configure policies and settings.
- **Limits**: up to 10 variants per built-in indicator and 100 across all indicators; up to five detection groups of a single type per variant; up to 10 detection groups of each type, each with up to 500 items. Some built-in indicators (Microsoft Defender for Endpoint indicators, for example) don't support variants.
- **Clouds**: Worldwide (Standard Multi-Tenant), as the roadmap record lists. US Government clouds are not listed on the record.
- **Platform**: web (Microsoft Purview portal).

## Governance guidance

### Before rollout
- List the indicators where your team hit the old limit of three variants, and the detection groups split to stay under 200 items.
- Confirm who sits in the *Insider Risk Management* and *Insider Risk Management Admins* role groups, since both can change variants and detection groups.

### At rollout
- Consolidate split domain detection groups into single groups of up to 500 items under Microsoft Purview portal > Insider Risk Management > Settings > Detection groups > Type > Domains > New domain group > Add domains, and update the variants that used them.
- Add new variants alongside their built-in indicator in the same policy, as Microsoft suggests, before switching to the variant alone.

### After rollout
- Compare alert volume for each new variant with its built-in indicator before removing the built-in indicator from a policy.
- Review detection groups used with **Ignore activity involving items in selected groups** each quarter, so long lists do not hide activity you need scored.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Creating variants of built-in indicators</strong><br><small>Tenant</small><br><small class="controls__note">Preview label in the portal. Up to 10 variants per built-in indicator and 100 in total, per this page.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Insider Risk Management › Settings › Policy indicators › New indicator variant (preview) <a href="https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Contents of detection groups (up to 500 items each)</strong><br><small>Tenant</small><br><small class="controls__note">Domains shown; file paths, file types, keywords, sensitive info types, SharePoint sites and trainable classifiers follow the same steps with their own type and New button.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Insider Risk Management › Settings › Detection groups › Type › Domains › New domain group › Add domains <a href="https://learn.microsoft.com/purview/insider-risk-management-settings-detection-groups" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which indicators and variants a policy uses</strong><br><small class="controls__note">Scope is the individual policy. On Indicators, find the built-in indicator, open its variant list and select the required variant checkboxes.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Insider Risk Management › Policies › policy › Edit policy › Indicators <a href="https://learn.microsoft.com/purview/insider-risk-management-best-practices-alert-tuning" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can configure Insider Risk Management policies and settings</strong><br><small>Tenant</small><br><small class="controls__note">The Insider Risk Management Admins role group can also configure policies and settings.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and groups › Roles groups › Insider Risk Management › Edit › Choose users <a href="https://learn.microsoft.com/purview/insider-risk-management-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;Insider Risk Management&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Variants and detection groups are tenant-wide settings: a detection group can serve both variants and global exclusions, so editing one group can change several policies at once. Variants take effect only once selected on a policy's **Indicators** page. Microsoft Learn documents no PowerShell or API for creating variants or detection groups at the time of writing (November 2026), so changes are made in the portal. After role group changes, permissions can take up to 30 minutes to apply.

## Open questions

- Which limit is current: the policy indicators and detection groups pages (10 variants, 500 items) or the Limits in Insider Risk Management page (3 variants, 200 items)? Watch the limits page for an update.
- When will indicator variants leave preview, given the roadmap lists General Availability?
- Does a variant of a pay-as-you-go indicator add to Purview pay-as-you-go billing? Watch the policy indicators page.
- Will Microsoft publish PowerShell or API support for managing variants and detection groups in bulk?

<!-- rationale
risk: Low. The change raises configuration limits only; administrators use variants and detection groups to tailor detections in policies or global exclusions.
cost: Low. Insider Risk Management comes with the Microsoft 365 subscriptions that include it; no separate charge for the higher limits is published, so the cost is admin time spent tuning variants.
impact: Low. The higher limits concern administrator configuration of indicator variants and detection groups.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[2].ui; Governance controls table / admin-path: Policy indicator selection is reached at Microsoft Purview portal > Insider Risk Management > Policies > policy > Edit policy > Indicators. | Found: Go to the specific policy on the Policies page, select Edit policy, go to the Indicators page, and then select more indicators. | Fix: Extend controls[2].ui.path and the rendered path to 'Insider Risk Management > Policies > policy > Edit policy > Indicators > built-in indicator > variant list > variant checkboxes'. These last steps are documented at https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators; retain the existing note. | Source: https://learn.microsoft.com/purview/insider-risk-management-best-practices-alert-tuning
- [supported, minor] controls[3].ui; Governance controls table / admin-path: Role membership is reached at Microsoft Purview portal > Settings > Roles and groups > Roles groups > Insider Risk Management > Edit > Choose users. | Found: Select Settings in the upper-right corner of the page, select Roles and groups, then select Roles groups in the left navigation pane. Select the Insider Risk Management role group, then select Edit. Select Choose users | Fix: Keep the cited path, but append to controls[3].note: 'Microsoft documentation differs: the general Purview permissions page instead gives Settings > Roles and scopes > Role groups > Insider Risk Management > Edit > Choose users.' Cite https://learn.microsoft.com/purview/purview-permissions in sources and link that sentence to it. | Source: https://learn.microsoft.com/purview/insider-risk-management-permissions
-->
