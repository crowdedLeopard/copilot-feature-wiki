---
title: "Microsoft Purview: collection policies support in Insider Risk Management"
slug: "microsoft-purview-compliance-portal-collection-policies-support-in-irm"
roadmapId: 500639
topic: "governance"
products: ["Microsoft Purview"]
summary: "Insider Risk Management is planned to support Purview collection policies, which scope the classifiers and activities collected for chosen users. Microsoft plans automatic policies for device indicators; review before they filter signals."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "September CY2025"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft states that collection policies require licensing for the workload; including devices requires Endpoint DLP licensing. Insider Risk Management also needs a supported subscription and licences assigned to users. A meter specific to this feature is not yet published."
audiences: ["compliance","security"]
tags: ["purview","insider-risk-management","collection-policies","endpoint-dlp","device-onboarding","sensitive-information-types","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap item 500639"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=500639"
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
  - title: "Get started with Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-configure"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description#microsoft-purview-collection-policies"
    kind: "learn"
videos: []
related: ["microsoft-purview-compliance-portal-insider-risk-management-collection-policies-impact-on","insider-risk-management","endpoint-dlp","sensitive-information-types","classifiers"]
controls:
  - governs: "Which events collection policies let Purview ingest, including device activities that Insider Risk Management reviews"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Data Loss Prevention > Classifiers > Collection policies"
      docs: "https://learn.microsoft.com/purview/collection-policies-solution-overview"
    api: null
    note: "Applies to IRM device indicators when a device collection policy is deployed; it wins over the IRM policy on conflict. Role groups listed include Insider Risk Management Admin."
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2025-08-14T23:15:02"
changes:
  - date: "2026-11-25"
    note: "First briefing for roadmap item 500639: IRM support for collection policies and automatic policies for device indicators."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 49 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected after verification: default state now on, per the roadmap's automatic policy creation; licensing now follows the Purview service description (workload licence, Endpoint DLP for devices)."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 54 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 54
  confirmed: 52
  unconfirmed: 1
  contradicted: 1
  attempts: 0
  hash: "0f3034f974c04d8accd2d576257db1bb"
---

## What's changing

The Microsoft 365 roadmap item says Insider Risk Management (IRM) will start supporting collection policies. Collection policies let customers scope classification, meaning sensitive information types (SITs), and activities for scoped users. The roadmap item also says that for an IRM policy based on device indicators, the required collection policies will be created automatically in the background.

Microsoft Learn describes collection policies as an event collection and filtering tool in Microsoft Purview: they filter which events are ingested, and the ingested data can then be used by solutions such as Insider Risk Management. An event is a condition (for example, content contains a sensitive information type) plus an activity (for example, file copied to removable media). Microsoft Learn already documents that device indicators are included in collection policy evaluations, which the roadmap item describes as support that is still to come. The Learn pages read do not describe the automatic creation of policies for device indicators, so that part rests on the roadmap text. Microsoft's separate note on how collection policies can filter IRM device signals is covered in [/features/microsoft-purview-compliance-portal-insider-risk-management-collection-policies-impact-on/](/features/microsoft-purview-compliance-portal-insider-risk-management-collection-policies-impact-on/).

The roadmap record gives the status as In development with a target of September CY2025, listed for GCC, GCC High and DoD on the web, with release phases General Availability and Targeted Release. That target date has passed at the time of writing (November 2026) and the record still shows In development, so treat the date as a target that has not been met.

## Why it matters

The point for an IRM owner is precedence. Microsoft Learn warns that when a device collection policy is deployed and it conflicts with what an IRM policy is set to monitor, the collection policy configuration takes precedence. An activity the collection policy filters out is not collected and is not available for review in Insider Risk Management. A collection policy built for another purpose, such as reducing noise in Activity explorer, can therefore thin out the evidence IRM analysts rely on.

The roadmap plans automatic background creation of required collection policies for device-indicator IRM policies; it does not specify their configuration or whether existing policies are covered. Expect to confirm that your device-based IRM policies still collect the activities you intend to monitor once the feature reaches your tenant.

## Risk assessment

**Data exposure**

- A collection policy decides which classifiers and activities are ingested for the users it covers, and for devices it can be scoped to all users, specific users and groups, or all except specific users and groups. Narrow scoping reduces what IRM can review for excluded users; the control is the collection policy itself (see the controls table).
- Without conditions, a device collection policy detects all data, including data that does not match your organisation's classifiers, so a broadly scoped device policy collects more than an IRM policy alone may need.

**Security & identity**

- Silent gaps in insider-risk coverage are the main exposure: if a collection policy filters out an activity that an IRM policy monitors, the activity is not collected and no alert can be raised on it. This applies to device indicators when a device collection policy is deployed.
- Several collection policies for one data source are combined into one policy at evaluation time, so a narrow policy added by one team can interact with those of others.

**Autonomy & actions**

- The roadmap says required collection policies will be created automatically in the background for device-indicator IRM policies. Which settings those policies carry, and whether they are visible and editable on the collection policies page, is not described on the pages read; confirm both before relying on them.

**Change & support**

- IRM administrators and DLP or information protection administrators may now both change what IRM sees. Agree who owns collection policies before the feature arrives, because the collection policy wins a conflict.

## Cost and licensing

Collection policies have no separate licensing requirement, but require licensing for their workload; a collection policy that includes devices requires Endpoint DLP licensing ([Microsoft Purview service description](https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description#microsoft-purview-collection-policies)). Separately, Microsoft's Get started page says administrators need to confirm their organisation has a supported subscription and assign the appropriate licences to users for Insider Risk Management, and points to the Microsoft 365 subscription requirements; it does not name a single licence in that passage.

Microsoft's collection policy pages say the feature uses pay-as-you-go billing, per-user licensing or both, with usage shown in the Usage center in the Microsoft Purview portal. The collection policy reference lists pay-as-you-go for the Copilot experiences and Enterprise AI data sources and for non-Microsoft SASE integrations; devices is not in that list. A meter or rate specific to IRM support for collection policies is not yet published. Indirect cost is the admin time to review collection policies and IRM policies together.

## Scope

The roadmap record lists Microsoft Purview, the GCC, GCC High and DoD clouds, the Web platform, and release phases General Availability and Targeted Release. Learn's reference for collection policies describes devices as devices onboarded to Microsoft 365 and managed by your organisation, so device indicators depend on onboarding.

Learn's create-and-deploy page lists the Organization Management, Compliance Administrator, Insider Risk Management Admin and Information Protection Admins role groups as applicable to collection policies, and Data Security Viewers for read-only access. Collection policies are reached from the Classifiers feature in the Microsoft Purview portal.

## Governance guidance

### Before rollout

- Inventory the IRM policies that use device indicators and the devices they cover, using the device onboarding status Microsoft documents.
- List the existing collection policies on the Collection policies page and note any scoped to the Devices data source, because they already take precedence over IRM device indicators.
- Agree an owner, between the IRM and DLP administrators, for collection policies that can filter IRM signals.

### At rollout

- Check whether new collection policies appear for your device-indicator IRM policies, and record their conditions, activities and user scope.
- Compare the activities each IRM device policy monitors with the activities the device collection policies collect, and fix any that are filtered out.
- Watch Message center for a notice that gives the rollout window and default for this item.

### After rollout

- Review collection policy changes whenever an IRM policy is edited, because the combined policy for the Devices data source decides what IRM receives.
- Confirm in IRM alerts and Activity explorer that expected device activities still arrive for in-scope users.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which events collection policies let Purview ingest, including device activities that Insider Risk Management reviews</strong><br><small>Tenant</small><br><small class="controls__note">Applies to IRM device indicators when a device collection policy is deployed; it wins over the IRM policy on conflict. Role groups listed include Insider Risk Management Admin.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Data Loss Prevention › Classifiers › Collection policies <a href="https://learn.microsoft.com/purview/collection-policies-solution-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Collection policies are the only control read for this feature. They sit under the Classifiers feature and can be reached from either Data Loss Prevention or Information Protection in the portal. Role groups that Microsoft lists for them include Insider Risk Management Admin, so IRM administrators can work in the same place as DLP administrators. At the time of writing (November 2026), Microsoft Learn documents no PowerShell or Microsoft Graph operation for creating or editing collection policies, so changes are made in the portal.

## Open questions

- Are collection policies created automatically for existing device-indicator IRM policies, or only for new ones? Watch Message center and the roadmap item.
- What conditions, activities and user scope do the automatically created collection policies carry, and can administrators edit or delete them? Watch the collection policies solution overview.
- Is there a pay-as-you-go meter or rate specific to IRM use of collection policies? Watch Microsoft Purview billing models and the Usage center documentation.
- Will the target of September CY2025 be updated now that the item is still In development, and does availability differ in GCC, GCC High and DoD? Watch the roadmap item.

<!-- rationale
risk: Medium. A collection policy takes precedence over an Insider Risk Management policy, so a device activity it filters out is not collected and cannot be reviewed; the configuration of the automatic policies, and whether existing policies are covered, is not stated.
cost: Low. The only cost the sources show is admin time; Insider Risk Management already needs a supported subscription, and a meter specific to this feature is not yet published.
impact: Medium. Insider Risk Management administrators and analysts notice first, because the device signals they review can change; end users see no new screen on any source read.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Security & identity / behaviour: No alert can be raised on an activity filtered out by the collection policy. | Found: Searched: collection policy filtered device activity no alert Insider Risk Management. Read collection-policies-solution-overview, insider-risk-management-settings-policy-indicators and policy-template search results; they state not collected or available for review, not the stronger alert guarantee | Fix: Remove 'and no alert can be raised on it'; retain the documented statement that the activity is not collected and is unavailable for review.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout; After rollout; controls / consistency: Every control the governance checklist asks readers to review or monitor has a corresponding controls-table row. | Found: Inventory the IRM policies that use device indicators and the devices they cover, using the device onboarding status Microsoft documents. / Confirm in IRM alerts and Activity explorer that expected device activities still arrive for in-scope users. | Fix: The Before rollout inventory step names IRM policy and device-onboarding controls without corresponding rows; the final After rollout step names IRM alerts and Activity explorer without corresponding rows. The table contains only collection policies.
-->
