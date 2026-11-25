---
title: "Microsoft Purview Compliance Manager: assess Azure, AWS and Google Cloud through Microsoft Defender for Cloud"
slug: "microsoft-purview-compliance-manager-microsoft-defender-for-cloud-mdc-integration"
roadmapId: 167331
topic: "governance"
products: ["Microsoft Purview"]
summary: "Compliance Manager is planned to take Defender for Cloud signals for Azure, AWS and GCP in GCC, GCC High and DoD. Setup sits in Azure and Purview, and a paid Defender plan may be needed."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "December CY2025"
previewDate: null
risk: "low"
cost: "variable"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Compliance Manager is available with Office 365 and Microsoft 365 licences, and assessment availability depends on the licensing agreement. Cloud signals need an Azure subscription and Defender for Cloud; Foundational CSPM is free and Defender CSPM is paid. A charge specific to the integration is not yet published."
audiences: ["compliance","security","finops"]
tags: ["compliance-manager","defender-for-cloud","multicloud","purview","integration","licensing","gcc","gcc-high","dod"]
sources:
  - title: "Roadmap item 167331"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=167331"
    kind: "roadmap"
  - title: "Multicloud support in Compliance Manager"
    url: "https://learn.microsoft.com/purview/compliance-manager-multicloud"
    kind: "learn"
  - title: "Configure cloud settings for use with Compliance Manager"
    url: "https://learn.microsoft.com/purview/compliance-manager-cloud-settings"
    kind: "learn"
  - title: "Get started with Compliance Manager"
    url: "https://learn.microsoft.com/purview/compliance-manager-setup"
    kind: "learn"
  - title: "Working with improvement actions in Compliance Manager"
    url: "https://learn.microsoft.com/purview/compliance-manager-improvement-actions"
    kind: "learn"
  - title: "Improve regulatory compliance"
    url: "https://learn.microsoft.com/azure/defender-for-cloud/regulatory-compliance-dashboard"
    kind: "learn"
  - title: "Assign regulatory compliance standards in Microsoft Defender for Cloud"
    url: "https://learn.microsoft.com/azure/defender-for-cloud/assign-regulatory-compliance-standards"
    kind: "learn"
  - title: "What is Cloud Security Posture Management (CSPM)"
    url: "https://learn.microsoft.com/azure/defender-for-cloud/concept-cloud-security-posture-management"
    kind: "learn"
videos: []
related: ["microsoft-purview-compliance-manager-purview-compliance-manager-integration-with-microsoft","microsoft-purview-compliance-manager-ai-powered-regulatory-templates"]
controls:
  - governs: "Automatic testing of improvement actions (does not cover actions for services Defender for Cloud supports)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Compliance Manager > Testing source > Turn off automatic testing for all actions"
      docs: "https://learn.microsoft.com/purview/compliance-manager-setup"
    api: null
    note: "Compliance Manager Administrator or Global Administrator. Testing source can't be changed on actions for services Defender for Cloud supports; adjust testing logic and scope in Defender for Cloud."
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2025-07-30T23:15:18"
changes:
  - date: "2026-11-25"
    note: "First briefing: Compliance Manager and Defender for Cloud integration for GCC, GCC High and DoD, with Learn's multicloud setup, roles and Defender plan costs."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 57 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected after verification: automatic testing applies to technical Defender for Cloud actions only, the testing-source path now ends at its option, the checklist no longer sets controls absent from the table, and the standard-assignment routes are given in full."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 65 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected after verification: removed the unsupported 'optional until you set it up' wording from the summary and dropped two After rollout checklist items that had no row in the controls table."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 63 statements confirmed"
version: 3
verification:
  status: "verified"
  date: "2026-11-25"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 63
  confirmed: 63
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "7cafdab2dc12f59bebc2e22fefe1a0fa"
---

## What's changing

Compliance Manager is planned to integrate with Microsoft Defender for Cloud (MDC), so that an organisation can assess its compliance posture across Microsoft 365, Azure, Google Cloud Platform (GCP) and Amazon Web Services (AWS) with resource-level testing and cloud-specific guidance. The roadmap item lists GCC, GCC High and DoD, the Web platform and the General Availability phase.

Microsoft Learn already documents the integration as available ("Compliance Manager now integrates with Microsoft Defender for Cloud"), while the roadmap item still shows status In development with a target of December CY2025 and no preview date. Both are reported as written. The multicloud support and cloud settings pages do not specify the integration's coverage in GCC, GCC High or DoD; the setup page separately confirms Compliance Manager product availability in those clouds.

Per Learn, the integration shows up in two places. When you create an assessment you choose a supported regulation and then one or more services to assess, and Compliance Manager monitors those services' configurations. In improvement actions, signals from Defender for Cloud set the test status and result for automatically tested technical improvement actions that pertain to Azure and to non-Microsoft services. If a service is not one Defender for Cloud monitors, you can add it as a new service, but the universal version of the regulation is used and you do the implementation and testing work manually.

The Defender for Cloud page adds that when you add a standard to its compliance dashboard, including standards that monitor AWS and GCP, resource-level compliance data is automatically surfaced in Compliance Manager for the same standard. Defender for Cloud calls these "standards" and Compliance Manager calls them "regulations".

## Why it matters

For a compliance owner this puts evidence from several clouds into one assessment and score, instead of a separate manual workstream per cloud. It also moves part of the testing logic into Azure: Compliance Manager does not let you change the testing source for actions on services Defender for Cloud supports, so disputes about a result are settled in Defender for Cloud.

Microsoft has not stated what happens on arrival in the US Government clouds, and no source says existing Compliance Manager behaviour changes, so nothing forces action. The reason to look now is cost and ownership: Azure plan charges and Azure roles sit outside the team that normally runs Compliance Manager.

## Risk assessment

**Data exposure**
- Resource-level compliance results for Azure, AWS and GCP appear in Compliance Manager once a standard is enabled in Defender for Cloud. Access to Compliance Manager follows its roles, which need at least Compliance Manager Reader or Microsoft Entra Global Reader; confirm who holds them before connecting other clouds.

**Security & identity**
- Connecting an AWS account or GCP project through Defender for Cloud needs admin permissions in that account and some configuration inside AWS or GCP. Most Azure setup functions need the Azure Owner role. Both are broad roles, so decide who holds them for this work.
- In GCC High and DoD, Compliance Manager roles are set in Microsoft Entra ID only.

**Autonomy & actions**
- Technical actions implemented through Defender for Cloud are automatically tested and monitored; non-technical actions must be manually tested, and their statuses do not synchronise between Compliance Manager and Defender for Cloud. The overall score for an improvement action is an aggregate of the scores for each subscription in the service, so one failing subscription moves the whole action.

**Change & support**
- Two portals are involved: standards and plans are managed in Defender for Cloud, assessments in the Microsoft Purview portal. Expect support questions about why a result differs from a manual test.
- A standard may cover only some clouds: the supported list shows FedRAMP High and FedRAMP Moderate for Azure only.

## Cost and licensing

Compliance Manager is available to organisations with Office 365 and Microsoft 365 licences, and to GCC Moderate, GCC High and DoD customers; assessment availability and management capabilities depend on your licensing agreement (Get started with Compliance Manager).

The integration needs an Azure subscription with Defender for Cloud enabled. The cloud settings page recommends enabling Foundational CSPM or Defender CSPM. Foundational CSPM is free; Defender CSPM is a paid plan whose billing is based on the resources enabled in your subscriptions or connectors. The Defender for Cloud page states that non-default compliance standards can be added when at least one paid plan is enabled, so budget for Defender CSPM if you need standards beyond the defaults. The standards-assignment page separately says to onboard a Defender for Cloud plan except Defender for Servers Plan 1 or Defender for API Plan 1.

A charge or meter specific to the Compliance Manager integration is not yet published. Indirect costs are administrator time in both portals and AWS or GCP configuration work.

## Scope

**Clouds and platform:** the roadmap item lists GCC, GCC High and DoD, the Web platform and General Availability. Status is In development with a target of December CY2025; the record gives no preview date. That target date is earlier than today's date (25 November 2026), so confirm the current status on the roadmap item.

**Prerequisites per Learn:** at least one Azure subscription with Defender for Cloud enabled, and at least one supported standard assigned to the subscription. The supported list covers Azure, AWS and GCP depending on the standard. Connected AWS or GCP accounts can take standards within about an hour, and full data can take up to 24 hours to appear.

**Roles:** Compliance Manager Administrator or Global Administrator for Compliance Manager settings; Azure Owner for most Defender for Cloud setup; Owner or Policy Contributor to add a standard.

## Governance guidance

### Before rollout
- Confirm on the roadmap item and Learn whether the integration applies in your GCC, GCC High or DoD tenant before planning around it.
- List the Azure subscriptions, AWS accounts and GCP projects you want assessed, and check that your standard is on the supported list for each cloud.
- Agree the Defender for Cloud plan with finance: Foundational CSPM is free, Defender CSPM is billed on enabled resources.

### At rollout
- Create the assessment in Compliance Manager, choose the service and the subscriptions in scope, and allow up to 24 hours for data from connected AWS or GCP accounts.

### After rollout
- Compare the first assessment scores with your manual results and note where a subscription drags an action's aggregate score.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Automatic testing of improvement actions (does not cover actions for services Defender for Cloud supports)</strong><br><small>Tenant</small><br><small class="controls__note">Compliance Manager Administrator or Global Administrator. Testing source can't be changed on actions for services Defender for Cloud supports; adjust testing logic and scope in Defender for Cloud.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Compliance Manager › Testing source › Turn off automatic testing for all actions <a href="https://learn.microsoft.com/purview/compliance-manager-setup" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Standards for the integration are assigned in Defender for Cloud, not in Compliance Manager. The cloud settings page gives Defender for Cloud > Environment settings > subscription > Edit settings > Policy settings > Security policy > Industry & regulatory standards > standard > Enable. The standards-assignment page gives an alternative Azure portal route: Microsoft Defender for Cloud > Regulatory compliance > Manage compliance policies > account > Security policies > standard > On; it says you need Owner or Policy Contributor. The standard-assignment route is described here but is not represented in the controls table.

The one row is today's Compliance Manager setting for automatic testing. It does not govern this integration: Learn states that testing source cannot be changed on actions for services Defender for Cloud supports, so it covers other automated sources only. It requires the Compliance Manager Administrator or Global Administrator role. Changes to the setting are reflected in the audit log.

## Open questions

- Does the Defender for Cloud integration apply in GCC, GCC High and DoD, and from when? Watch the roadmap item and the multicloud support page on Microsoft Learn.
- What happens on arrival in those clouds: does anything change in existing assessments until Defender for Cloud is enabled and standards are assigned?
- Is any licence or charge specific to the integration planned beyond the Defender for Cloud plan charges?
- Can access to resource-level cloud results be limited separately from access to the assessment that shows them?

<!-- rationale
risk: Low. Learn describes setup steps in Azure and Defender for Cloud before cloud signals reach Compliance Manager, and the data is compliance test status. What happens on arrival in the US Government clouds is not stated.
cost: Variable. The meter is the Defender for Cloud plan: Foundational CSPM is free, Defender CSPM is billed on enabled resources, and the compliance dashboard page says non-default standards need a paid plan. Compliance Manager licensing depends on your agreement.
impact: Low. Compliance and security administrators who build assessments and improvement actions notice it; Learn does not describe a change for end users.
-->
