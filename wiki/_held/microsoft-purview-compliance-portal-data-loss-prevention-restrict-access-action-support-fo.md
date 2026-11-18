---
title: "Microsoft Purview DLP: restrict access to Fabric semantic models and lakehouses"
slug: "microsoft-purview-compliance-portal-data-loss-prevention-restrict-access-action-support-fo"
roadmapId: 422501
topic: "governance"
products: ["Microsoft Purview"]
summary: "Purview DLP policies for Fabric can block guests or all other users from semantic models and lakehouses that match labels or sensitive info types. Nothing is restricted until a compliance admin adds the action to a policy."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: "April CY2024"
risk: "low"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Microsoft's Fabric DLP page says the admin account that sets up DLP rules must hold Microsoft 365 E5, E5 Compliance, E5 Information Protection & Governance or Purview capacities. Evaluation also affects capacity consumption; no rate is quoted here."
audiences: ["security","compliance","service-owner"]
tags: ["purview","dlp","microsoft-fabric","semantic-model","sensitivity-labels","sensitive-information-types","guest-access","pay-as-you-go"]
sources:
  - title: "Microsoft 365 Roadmap 422501"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=422501"
    kind: "roadmap"
  - title: "MC937920: Microsoft Purview | Data Loss Prevention: Restrict Access action for semantic models in Microsoft Fabric (preview)"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC937920"
    kind: "message-center"
  - title: "Get started with data loss prevention policies for Fabric and Power BI"
    url: "https://learn.microsoft.com/fabric/governance/data-loss-prevention-overview"
    kind: "learn"
  - title: "Configure data loss prevention policies for Fabric"
    url: "https://learn.microsoft.com/fabric/governance/data-loss-prevention-configure"
    kind: "learn"
  - title: "Learn about Microsoft Purview billing models"
    url: "https://learn.microsoft.com/purview/purview-billing-models"
    kind: "learn"
  - title: "Restrict access action in a DLP rule for Fabric items (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule"
    kind: "learn"
  - title: "Which Fabric workspaces a DLP policy covers (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-loss-prevention-new-guided-experience-to-diagnose-and-resolve-dlp-i","microsoft-purview-data-loss-prevention-data-security-for-non-microsoft-connected-apps","microsoft-purview-unified-classification-management-experience"]
controls:
  - governs: "Restrict access action in a DLP rule for Fabric items"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > + Create policy > Custom > Custom policy > Fabric and Power BI workspaces > Create or customize advanced DLP rules > Create rule > Actions > Restrict access or encrypt the content in Microsoft 365 locations"
      docs: "https://learn.microsoft.com/fabric/governance/data-loss-prevention-configure"
    api:
      kind: "powershell"
      call: "New-DlpComplianceRule -Name \"<rule name>\" -Policy \"<policy name>\" -ContentContainsSensitiveInformation @{Name=\"<sensitive info type>\"} -BlockAccess $true"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule"
    note: "Then select the Block users option and choose everyone or outsiders only. Cmdlet is Security & Compliance PowerShell; its example is not Fabric-specific. Marked preview on Learn."
  - governs: "Which Fabric workspaces a DLP policy covers"
    scope: "environment"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > + Create policy > Custom > Custom policy > Fabric and Power BI workspaces > Edit"
      docs: "https://learn.microsoft.com/fabric/governance/data-loss-prevention-configure"
    api:
      kind: "powershell"
      call: "New-DlpCompliancePolicy -Name \"<policy name>\" -PowerBIDlpLocation \"All\" -PowerBIDlpLocationException \"<workspaceID>\" -Mode Enable"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy"
    note: "The cmdlet page describes Power BI workspaces on Premium Gen2 capacities and does not mention Fabric lakehouses. Learn: DLP actions apply only to workspaces on Fabric or Premium capacities."
confidence: "high"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-11-11T00:53:22"
changes:
  - date: "2026-11-18"
    note: "New briefing: the DLP restrict access action for Fabric semantic models and lakehouses, with Learn's preview label, billing and limitations."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 74 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 74
  confirmed: 71
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "d0dce3436a87d4b555add933e0d0fc85"
---

## What's changing

The roadmap item says Microsoft Purview Data Loss Prevention (DLP) policies for Fabric can now include a restrict access action for semantic models and lakehouses. A policy can block guest users or all users, depending on which sensitivity labels or sensitive information types match the item. This sits alongside the audit and Policy Tip (a notice shown on the item) actions that DLP policies already support for these items.

Microsoft Learn describes the behaviour: when a policy with the restrict access action matches, it restricts access to the data owners or to members of the organisation, depending on the policy configuration, and all other users lose access to the item. For DLP, a member of the organisation is a user with UserType = Member, which includes people who sign in with an external account; UserType = Guest users are external, and the **Block only people outside your organization** setting applies to them. At the time of writing (November 2026) the Learn overview still labels the restrict access action "(preview)".

The roadmap record gives status Launched, a target of October CY2026, a preview date of April CY2024 and the release phases General Availability and Preview, for Worldwide (Standard Multi-Tenant) on the web. Microsoft's notice MC937920 (last updated 26 March 2026) says semantic-model restrict access has been in public preview since November 2024, lakehouse preview began rolling out in mid-April 2025 and was expected to finish in late April 2025, and general availability starts rolling out in late October 2026 and is expected to finish in late November 2026. The post's end date is 28 December 2026 and it sets no act-by date.

## Why it matters

This gives a security or compliance team a way to stop guests, or everyone except data owners, from opening a Fabric item once its content matches a label or sensitive information type, instead of only being alerted. MC937920 singles out organisations with guest users who should not accidentally reach sensitive information.

Microsoft's notice says the rollout needs no admin action and that a security or compliance admin must update or create DLP policies for Fabric to include the action. The default is therefore opt-in: if nobody acts, no restriction is applied. The risk sits in the policy you write: a broad rule can remove access for everyone except the owners of a workspace's items.

## Risk assessment

**Data exposure**

- Items stay open if a policy does not evaluate them. Learn says DLP is not evaluated for a semantic model when a service principal initiates the publish, republish or refresh, or owns the model. It also lists unsupported cases: DirectQuery or live-connection semantic models, non-Delta table data, and advanced classifiers such as exact data match and trainable classifiers, where a policy returns no results.

**Security & identity**

- "Block only people outside your organization" targets UserType = Guest. External accounts with UserType = Member are treated as internal, so that setting does not block them. Choose between blocking everyone and blocking outsiders with that distinction in mind.

**Autonomy & actions**

- The action runs without a person approving it: Learn says semantic models are evaluated on publish, republish and refresh, and lakehouses and other Fabric items when their data changes. A match can remove access after an ordinary data refresh.
- Learn's configuration page says that when you enable the restrict access action, user overrides are automatically allowed. A restriction may therefore be overridden by item owners, depending on the override options you choose.

**Change & support**

- Expect support questions from users who lose access, and from owners seeing a policy tip. Learn limits DLP actions to workspaces on Fabric or Premium capacities, and says onboarding a new tenant to DLP can take a few hours.

## Cost and licensing

Microsoft's page on configuring DLP for Fabric says the admin account that sets up the DLP rules must be assigned Microsoft 365 E5, Microsoft 365 E5 Compliance, Microsoft 365 E5 Information Protection & Governance, or Purview capacities. It names no licence for the users who are restricted.

The Fabric DLP overview says DLP evaluation workloads impact capacity consumption and points to the Microsoft Purview billing models page. That page lists Microsoft Fabric among the locations covered by pay-as-you-go billing (an Azure-billed consumption model), says you are charged for each day a policy covers an asset, and says an asset counts when it is in a location in the policy's scope, whether or not it matches the conditions. Its example: ten Fabric workspaces of 50 assets each, with a policy covering five of them, gives an asset count of 250.

The pages read quote no rate. Whether the restrict access action adds a charge of its own beyond that asset counting is not yet published. Excluding workspaces from the policy changes which assets the policy covers.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant) and the web platform; it does not list the US Government clouds. The Learn overview says DLP for Fabric is not supported in the China North region.

Supported item types on the Learn overview include semantic models, lakehouses, warehouses, KQL databases, mirrored databases, SQL databases and Cosmos databases. Policies apply to workspaces, and only workspaces hosted in Fabric or Premium capacities are supported. DLP for Fabric applies only to data in tables stored in Delta format, and does not support sample semantic models or streaming datasets.

The account that creates the policy must be in the Compliance administrator, Compliance data administrator, Information Protection, Information Protection Admin or Security administrator role groups. Policy templates and admin units are not supported for Fabric DLP; choose the Custom category and Custom policy.

## Governance guidance

### Before rollout

- List the workspaces that hold semantic models and lakehouses carrying the labels or sensitive information types you want to control, and confirm they are on Fabric or Premium capacities (see the workspace scope row).
- Check that the people who will build the policy are in a role group listed on Microsoft's configuration page and that the account holds one of the listed licences.
- Decide whether to block everyone or only people outside your organisation, remembering that external accounts with UserType = Member count as internal.
- Ask finance or your Azure billing owner how Fabric assets covered by a DLP policy will be counted under pay-as-you-go, using the Purview billing models page.

### At rollout

- Create or update a custom DLP policy for Fabric and add the restrict access action, starting with a limited set of workspaces (see the restrict access and workspace scope rows).
- Turn on user notifications so item owners see a policy tip explaining the restriction.
- Decide which override options to allow, since user overrides are automatically allowed once the action is enabled.

### After rollout

- Review matches on the data loss prevention Alerts page in the Microsoft Purview portal and in Activity explorer, which Compliance administrators, Security administrators and Compliance data administrators can open.
- Check for items that should have matched but did not, for example because they use DirectQuery, an advanced classifier or a service principal refresh.
- Watch Message Center post MC937920 and the Learn overview for the end of the preview label on the restrict access action.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Restrict access action in a DLP rule for Fabric items</strong><br><small>Tenant</small><br><small class="controls__note">Then select the Block users option and choose everyone or outsiders only. Cmdlet is Security &amp; Compliance PowerShell; its example is not Fabric-specific. Marked preview on Learn.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › + Create policy › Custom › Custom policy › Fabric and Power BI workspaces › Create or customize advanced DLP rules › Create rule › Actions › Restrict access or encrypt the content in Microsoft 365 locations <a href="https://learn.microsoft.com/fabric/governance/data-loss-prevention-configure" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpComplianceRule -Name &quot;&lt;rule name&gt;&quot; -Policy &quot;&lt;policy name&gt;&quot; -ContentContainsSensitiveInformation @{Name=&quot;&lt;sensitive info type&gt;&quot;} -BlockAccess $true</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which Fabric workspaces a DLP policy covers</strong><br><small>Environment</small><br><small class="controls__note">The cmdlet page describes Power BI workspaces on Premium Gen2 capacities and does not mention Fabric lakehouses. Learn: DLP actions apply only to workspaces on Fabric or Premium capacities.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › + Create policy › Custom › Custom policy › Fabric and Power BI workspaces › Edit <a href="https://learn.microsoft.com/fabric/governance/data-loss-prevention-configure" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpCompliancePolicy -Name &quot;&lt;policy name&gt;&quot; -PowerBIDlpLocation &quot;All&quot; -PowerBIDlpLocationException &quot;&lt;workspaceID&gt;&quot; -Mode Enable</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The restrict access action is configured per rule inside a DLP policy, and the policy's location setting decides which workspaces it covers. Microsoft Learn documents the portal path for both on the configuration page. The cmdlet rows show cmdlets documented for DLP policies and rules; the cmdlet pages do not mention Fabric lakehouses or semantic models, so confirm in a test tenant that they produce the same policy as the portal.

User overrides are part of the rule: Learn says they are automatically allowed once restrict access is enabled, and the **User overrides** section of the rule sets the options. Microsoft Learn describes monitoring through the Alerts page and Activity explorer in the Microsoft Purview portal.

## Open questions

- The Learn overview still marks restrict access as "(preview)" while the roadmap says Launched and MC937920 gives a general availability rollout through late November 2026. When does Learn drop the preview label, and are there differences in behaviour between the two phases? Watch the Learn overview and the Message Center post.
- Does the restrict access action carry a charge of its own beyond the pay-as-you-go asset counting, and what rates apply to Fabric items? Watch the Purview billing models and pricing pages.
- Which DLP PowerShell parameters set the restrict access action and its scope for the Fabric and Power BI workspaces location? The cmdlet pages do not name Fabric items.
- Does restrict access apply to lakehouse changes made by service principals? Learn says semantic model evaluation is skipped for them and is silent on lakehouses.

<!-- rationale
risk: Low. Microsoft's notice MC937920 says the action is available for admins to configure and needs no admin action; nothing is restricted until a policy includes it, so the exposure is a policy that locks out the wrong people.
cost: Variable. Microsoft documents that DLP evaluation for Fabric affects capacity consumption, and its pay-as-you-go page counts assets in workspaces a DLP policy covers per day. No rate is quoted here.
impact: Low. Security and compliance admins configure it; users notice only once a policy match removes their access to a semantic model or lakehouse.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Data exposure; Governance guidance: After rollout / behaviour: Using unsupported advanced classifiers such as exact data match or trainable classifiers means a policy returns no results. | Found: Other classifiers specified in the policy return results if any. | Fix: Replace the advanced-classifier clause with: 'Advanced classifiers such as exact data match and trainable classifiers are unsupported and return no matches; other classifiers specified in the same policy can still return results.' | Source: https://learn.microsoft.com/fabric/governance/data-loss-prevention-overview
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Why it matters / behaviour: A matching policy restricts access to data owners or organisation members, with all other users losing access. | Found: the policy restricts access to the data owners or to members of the organization, depending on the policy configuration. All other users lose access to the item. | Fix: Add: 'Microsoft's troubleshooting page describes the all-users case as blocking everyone except workspace admins.' Cite https://learn.microsoft.com/fabric/governance/troubleshoot-restricted-access, which says 'DLP policies block all users except workspace admins'; retain the overview's different wording. | Source: https://learn.microsoft.com/fabric/governance/data-loss-prevention-overview
- [supported, minor] What's changing; controls[0].note; Open questions / availability: The Learn overview still labels restrict access as preview. | Found: Restrict access (preview). | Fix: Add: 'The Fabric What’s new page instead lists DLP restrict access as generally available in September 2026.' Cite https://learn.microsoft.com/fabric/fundamentals/whats-new#generally-available-features, whose table says 'September 2026' and 'DLP restrict access (Generally Available)'. | Source: https://learn.microsoft.com/fabric/governance/data-loss-prevention-overview
- [contradicted, minor] rationale: impact / behaviour: Users notice the feature only once a match removes their access. | Found: For semantic models, opening the details page shows a policy tip that explains the policy violation and how to handle the type of sensitive information detected. | Fix: Replace the impact rationale with: 'Low. Security and compliance admins configure it; policy matches can remove user access or show owners policy tips.' The Low impact judgement itself does not need changing. | Source: https://learn.microsoft.com/fabric/governance/data-loss-prevention-overview
- [contradicted, minor] Governance guidance: At rollout and After rollout / consistency: The checklist instructs readers to configure notifications and override options and review monitoring surfaces, but the controls table covers only restriction and workspace scope. | Found: Checklist: 'Turn on user notifications'; 'Decide which override options to allow'; 'Review matches ... Alerts page ... Activity explorer'. Table: 'Restrict access action in a DLP rule for Fabric items'; 'Which Fabric workspaces a DLP policy covers'. | Fix: The user-notification, user-override and monitoring checklist instructions have no corresponding controls-table rows. Remove those checklist instructions if retaining the current two-row table.
-->
