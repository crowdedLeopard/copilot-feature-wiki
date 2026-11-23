---
title: "Microsoft Purview: collection policies can filter Insider Risk Management device signals"
slug: "microsoft-purview-compliance-portal-insider-risk-management-collection-policies-impact-on"
roadmapId: 501582
topic: "governance"
products: ["Microsoft Purview"]
summary: "Collection policies now feed Purview solutions. For Insider Risk Management, a deployed device collection policy overrides what an IRM policy monitors on devices. Security and compliance admins should review them."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "September CY2025"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn's Purview service description says there are no licensing requirements to apply collection policies; you need a licence for the workload, and device policies need endpoint DLP licensing. Some data sources are pay-as-you-go."
audiences: ["security","compliance","m365-admin"]
tags: ["collection-policies","insider-risk-management","purview","endpoint-dlp","device-onboarding","sensitive-information-types","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 501582"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=501582"
    kind: "roadmap"
  - title: "Collection Policies solution overview"
    url: "https://learn.microsoft.com/purview/collection-policies-solution-overview"
    kind: "learn"
  - title: "Collection policy reference"
    url: "https://learn.microsoft.com/purview/collection-policies-policy-reference"
    kind: "learn"
  - title: "Create and deploy collection policies"
    url: "https://learn.microsoft.com/purview/collection-policies-create-deploy-policy"
    kind: "learn"
  - title: "Configure policy indicators in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Microsoft Purview data security and governance APIs"
    url: "https://learn.microsoft.com/graph/security-datasecurityandgovernance-overview"
    kind: "learn"
  - title: "Configure endpoint data loss prevention settings"
    url: "https://learn.microsoft.com/purview/dlp-configure-endpoint-settings"
    kind: "learn"
  - title: "New-FeatureConfiguration"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-featureconfiguration?view=exchange-ps"
    kind: "learn"
  - title: "Set-FeatureConfiguration"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-featureconfiguration?view=exchange-ps"
    kind: "learn"
videos: []
related: ["insider-risk-management","endpoint-dlp","microsoft-purview-compliance-portal-insider-risk-management-policy-tuning-analysis-for-pri","microsoft-purview-insider-risk-management-irm-alerts-in-xdr","sensitive-information-types"]
controls:
  - governs: "Which device activities and data collection policies pass to Insider Risk Management"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Data Loss Prevention > Classifiers > Collection policies"
      docs: "https://learn.microsoft.com/purview/collection-policies-solution-overview"
    api:
      kind: "powershell"
      call: "New-FeatureConfiguration -Name <name> -FeatureScenario KnowYourData -Mode Enable -ScenarioConfig <configuration-json> -Locations <locations-json>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-featureconfiguration?view=exchange-ps"
    note: "Security & Compliance PowerShell; Public Preview, not available in all organizations. ScenarioConfig sets Activities and EnforcementPlanes; the device example uses Devices and an EndpointDevices location in Locations."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-09-16T22:57:03"
changes:
  - date: "2026-11-23"
    note: "First briefing for this item: how Purview collection policies can override what Insider Risk Management policies collect from devices."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 6 of 60 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Correction: added the New-FeatureConfiguration and Set-FeatureConfiguration cmdlets, limited the Devices data source to Windows devices, and removed an unsupported claim and checklist items without table rows."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 68 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-23"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 68
  confirmed: 67
  unconfirmed: 1
  contradicted: 0
  attempts: 0
  hash: "1b4b1689f06f94ff6b25e96b0b776fe4"
---

## What's changing

Microsoft Purview collection policies now affect how Insider Risk Management (IRM) sees activity. The roadmap item describes collection policies as a way to scope classification (sensitive information types, or SITs) and activities for scoped users, and recommends reviewing them because different Purview solution admins can create them. The roadmap record gives the status as Launched, with a General Availability phase, a target of September CY2025, and the clouds GCC, GCC High and DoD.

Microsoft Learn explains the IRM effect. A collection policy is made of conditions (such as **Content contains** a sensitive information type), activities (such as **File copied to removable media**) and a data source (such as devices). When a device collection policy is configured and deployed, and what the IRM policy monitors conflicts with what the collection policy filters for, the collection policy configuration takes precedence. If the collection policy filters out an activity that an IRM policy monitors, the activity is not collected and is not available for review in IRM. If a collection policy collects something an IRM policy is not configured for, the indicator is collected but IRM ignores it.

Learn says this applies only to device indicators in IRM policies, and only when a device collection policy is deployed. Learn also says Purview combines all collection policies for a data source into a single policy for that source, so every device collection policy in the tenant contributes to what is collected.

## Why it matters

The practical consequence is a possible blind spot. An IRM policy can be configured to monitor an activity such as copying files to removable media, while a collection policy created by another Purview administrator filters that activity out. In that case the IRM policy raises no signal for it. Microsoft's roadmap text makes the same point by recommending a review so that collection policies are set up to detect the activities IRM policies require.

Microsoft has not stated what a tenant gets on arrival, so no source says existing IRM behaviour changes by itself. The risk starts when a device collection policy is deployed, including by someone outside the IRM team. Learn also says one-click policies in Data Security Posture Management (DSPM) and DSPM for AI can create collection policies on your behalf, so a new policy can appear without an IRM administrator creating it.

## Risk assessment

**Data exposure**
- A device collection policy that filters out an activity stops that activity reaching IRM, so risky device activity can go unreviewed. Cover this by comparing the activities in each IRM policy's device indicators with the activities in each device collection policy.
- A collection policy with no conditions on the Devices data source detects all data, even data that does not match your classifiers, according to the policy reference. Check conditions before assuming a policy is narrow.

**Security & identity**
- Learn lists DLP Compliance Management as the applicable role, and Organization Management, Compliance Administrator, Insider Risk Management Admin and Information Protection Admins as role groups, with Data Security Viewers for read-only access. Review who holds these role groups, since collection policies change what IRM receives.

**Autonomy & actions**
- Collection policies decide what is collected and do not enforce on it. Learn states they can't impact the behaviour of DLP policies, only what is collected and recorded for audit file events on devices.

**Change & support**
- Learn says if Always audit file activity for devices is not enabled, activities are not collected from devices even where a collection policy is scoped to devices. The Endpoint DLP settings page also says to turn this setting off to audit activity only when onboarded devices are included in an active policy; confirm the applicable collection behaviour before treating it as a complete stop. Missing IRM device alerts therefore have two possible causes to check: that setting and the collection policies.
- Several collection policies for one data source are merged on the back end, so a support case may need every policy reviewed, not just the newest.

## Cost and licensing

Learn's Purview service description says there are no licensing requirements to apply collection policies; instead you must be licensed for the workload for which you create the policy. It gives an example: a collection policy that includes devices requires endpoint DLP licensing, because the device data source is available under that licensing tier.

The Create and deploy collection policies page says the feature uses pay-as-you-go billing or per-user licensing for Microsoft Purview capabilities, or both, and points to the Usage center in the Microsoft Purview portal. The collection policy reference lists Copilot experiences, Enterprise AI and unmanaged cloud app activity detected through non-Microsoft SASE and secure enterprise browser integrations as pay-as-you-go data sources that need a linked Azure subscription. These do not bear on the device indicators that IRM is affected by. Beyond that, the indirect cost is administrator time to review policies.

## Scope

Who is affected: tenants that use Insider Risk Management policies with device indicators and that have, or will deploy, a collection policy for the Devices data source. Collection policies can be scoped to all users and groups (the default), specific users and groups, or all except specific ones, and exclusions take precedence over inclusions.

The collection policy reference lists Windows devices onboarded to Microsoft 365 and managed by your organisation for the Devices data source. The roadmap record lists the clouds GCC, GCC High and DoD, the platform Web and the phase General Availability. Collection policies are managed in the Microsoft Purview portal; the roles that Learn lists for them are given under Risk assessment.

## Governance guidance

### Before rollout
- Ask each Purview solution administrator whether any collection policy exists or is planned, including policies created by one-click DSPM recommendations.

### At rollout
- Create or edit collection policies under Classifiers > Collection policies, and include in every device policy the activities your IRM policies monitor.
- Agree that IRM administrators are told before a device policy is deployed.

### After rollout
- Test that a monitored device activity such as File copied to removable media appears in IRM once a device collection policy is deployed.
- Revisit the comparison whenever a collection policy is added or edited, because Purview combines them into one policy per data source.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which device activities and data collection policies pass to Insider Risk Management</strong><br><small>Tenant</small><br><small class="controls__note">Security &amp; Compliance PowerShell; Public Preview, not available in all organizations. ScenarioConfig sets Activities and EnforcementPlanes; the device example uses Devices and an EndpointDevices location in Locations.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Data Loss Prevention › Classifiers › Collection policies <a href="https://learn.microsoft.com/purview/collection-policies-solution-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-FeatureConfiguration -Name &lt;name&gt; -FeatureScenario KnowYourData -Mode Enable -ScenarioConfig &lt;configuration-json&gt; -Locations &lt;locations-json&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-featureconfiguration?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft documents [New-FeatureConfiguration](https://learn.microsoft.com/powershell/module/exchangepowershell/new-featureconfiguration?view=exchange-ps) for creating collection policies and [Set-FeatureConfiguration](https://learn.microsoft.com/powershell/module/exchangepowershell/set-featureconfiguration?view=exchange-ps) for modifying them in Security & Compliance PowerShell. These cmdlets are Public Preview and are not available in all organizations.

Learn lists DLP Compliance Management as a role and Insider Risk Management Admin among the role groups. Collection policies are also reachable under Solutions > Information Protection > Classifiers > Collection policies.

The IRM policy that is affected is configured separately in Insider Risk Management, and Always audit file activity for devices is an Endpoint DLP setting described on Learn's [Configure endpoint data loss prevention settings](https://learn.microsoft.com/purview/dlp-configure-endpoint-settings) page. Role groups are listed on Learn's Create and deploy collection policies page.

## Open questions

- Does a tenant have any collection policy by default, or does none exist until an administrator or a DSPM one-click policy creates one? Learn pages describe the IRM effect as arising when a device collection policy is configured and deployed. Watch the collection policies overview on Microsoft Learn.
- Does Purview warn an IRM administrator when a collection policy filters out an activity that an IRM policy monitors? Learn describes the precedence rule but not an alert.
- Does the Learn guidance on which data sources and activities are supported differ in GCC, GCC High and DoD, which the roadmap record lists? Watch the roadmap item and the collection policy reference.

<!-- rationale
risk: Medium. When a device collection policy filters out an activity, Learn says the collection policy takes precedence and Insider Risk Management never receives that device activity, so detection can silently narrow.
cost: Low. Learn's Purview service description says there are no licensing requirements to apply collection policies; the licence for the workload applies. The cost is admin time, plus pay-as-you-go for some data sources.
impact: Medium. Insider Risk Management analysts and the admins who create collection policies notice; end users see nothing change. Only device indicators are affected, and only when a device collection policy is deployed.
-->

<!-- verifier-findings (2026-11-23, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing; front matter: licensing.notes; rationale: cost / cost: Some collection policy data sources use pay-as-you-go and require a linked Azure subscription. | Found: Some collection policy data sources and features are pay-as-you-go and require an Azure subscription to be linked before creating a policy. Copilot experiences; Enterprise AI; Unmanaged cloud app activity detected through non-Microsoft SASE and secure enterprise browser integrations | Fix: Narrow the cost rationale to the change being rated: 'Low. Applying device collection policies has no separate licensing requirement; endpoint DLP licensing applies. The indirect cost is administrator time to review policies.' Keep the existing explanation of other data sources in Cost and licensing. | Source: https://learn.microsoft.com/purview/collection-policies-policy-reference
- [supported, minor] controls[0].ui; Governance controls table; Scope; Governance guidance: At rollout / admin-path: In the Microsoft Purview portal, Solutions > Data Loss Prevention > Classifiers > Collection policies reaches the collection policy list. | Found: In the Microsoft Purview portal, select Solutions > Data Loss Prevention > Classifiers > Collection policies. | Fix: Extend controls[0].ui.path to 'Solutions > Data Loss Prevention > Classifiers > Collection policies > + Create policy > + Add activities' to reach activity selection, and set controls[0].ui.docs to https://learn.microsoft.com/purview/collection-policies-create-deploy-policy. That page describes the intervening optional conditions and Next steps. | Source: https://learn.microsoft.com/purview/collection-policies-solution-overview
- [unsupported, minor] rationale: impact / behaviour: End users see nothing change. | Found: Searched: Microsoft Purview device collection policies end user experience no change enforce activities; read collection policies overview, reference and service description. They describe filtering and lack of enforcement, not an assurance that end users see no change. | Fix: Remove 'end users see nothing change' from the impact rationale.
-->
