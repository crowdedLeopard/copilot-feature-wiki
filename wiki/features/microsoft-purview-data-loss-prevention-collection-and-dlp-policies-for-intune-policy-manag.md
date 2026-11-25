---
title: "Microsoft Purview: DLP and collection policies for Intune-protected mobile apps"
slug: "microsoft-purview-data-loss-prevention-collection-and-dlp-policies-for-intune-policy-manag"
roadmapId: 567311
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans Purview DLP checks on clipboard actions in Intune MAM-protected mobile apps, plus collection policies for them. Targeted February CY2027; Learn has no page for it yet, so plan and watch for documentation."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "February CY2027"
previewDate: "January CY2027"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for this capability. Microsoft's service description says there are no licensing requirements to apply collection policies, only for the workload being governed; no page states which licence covers DLP for Intune MAM apps."
audiences: ["security","compliance","m365-admin","end-user"]
tags: ["purview","dlp","mobile","intune-app-protection","collection-policies","data-governance"]
sources:
  - title: "Microsoft 365 Roadmap item 567311"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=567311"
    kind: "roadmap"
  - title: "How to Create and Assign App Protection Policies"
    url: "https://learn.microsoft.com/intune/app-management/protection/create-policy"
    kind: "learn"
  - title: "iOS App Protection Policy Settings"
    url: "https://learn.microsoft.com/intune/app-management/protection/ref-settings-ios"
    kind: "learn"
  - title: "App Protection Policies Overview"
    url: "https://learn.microsoft.com/intune/app-management/protection/overview"
    kind: "learn"
  - title: "Create iosManagedAppProtection"
    url: "https://learn.microsoft.com/graph/api/intune-mam-iosmanagedappprotection-create"
    kind: "learn"
  - title: "Collection Policies solution overview"
    url: "https://learn.microsoft.com/purview/collection-policies-solution-overview"
    kind: "learn"
  - title: "Collection policy reference"
    url: "https://learn.microsoft.com/purview/collection-policies-policy-reference"
    kind: "learn"
  - title: "Create and deploy collection policies"
    url: "https://learn.microsoft.com/purview/collection-policies-create-deploy-policy"
    kind: "learn"
  - title: "Create and deploy data loss prevention policies"
    url: "https://learn.microsoft.com/purview/dlp-create-deploy-policy"
    kind: "learn"
  - title: "Learn about data loss prevention"
    url: "https://learn.microsoft.com/purview/dlp-learn-about-dlp"
    kind: "learn"
  - title: "New-DlpCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy"
    kind: "learn"
  - title: "New-FeatureConfiguration"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-featureconfiguration"
    kind: "learn"
  - title: "Microsoft Purview data security and governance APIs"
    url: "https://learn.microsoft.com/graph/security-datasecurityandgovernance-overview"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
videos: []
related: ["endpoint-dlp","outlook-purview-dlp-wait-on-send-support-for-outlook-mobile-apps","outlook-purview-data-loss-prevention-support-for-calendar-events-in-outlook-mobile-apps","sensitive-information-types"]
controls:
  - governs: "Clipboard sharing between apps under Intune app protection"
    scope: "app"
    ui:
      surface: "Microsoft Intune admin center"
      path: "Apps > Protection > Create policy > iOS/iPadOS > Basics > Apps > Data protection > Restrict cut, copy and paste between other apps"
      docs: "https://learn.microsoft.com/intune/app-management/protection/create-policy"
    api:
      kind: "graph"
      call: "POST /v1.0/deviceAppManagement/iosManagedAppProtections"
      docs: "https://learn.microsoft.com/graph/api/intune-mam-iosmanagedappprotection-create"
    note: "Existing Intune control, not a control over the new Purview capability. UI setting: Restrict cut, copy and paste between other apps. The request body sets allowedOutboundClipboardSharingLevel."
  - governs: "Which events Purview collects from supported data sources"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Data Loss Prevention > Classifiers > Collection policies > + Create policy > + Add activities"
      docs: "https://learn.microsoft.com/purview/collection-policies-create-deploy-policy"
    api:
      kind: "powershell"
      call: "New-FeatureConfiguration -Name <policy-name> -FeatureScenario KnowYourData -Mode Enable -ScenarioConfig <collection-policy-JSON>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-featureconfiguration"
    note: "Role listed: DLP Compliance Management. No mobile managed-app data source is listed at the time of writing (November 2026). Select + Create policy, supply a name and any optional conditions, then select + Add activities."
  - governs: "Purview DLP policy for Intune MAM-protected mobile apps"
    scope: "tenant"
    ui: null
    api: null
    note: "Planned per the roadmap item; no portal location or cmdlet parameter documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-25"
roadmapModified: "2026-10-06T22:56:31"
changes:
  - date: "2026-11-21"
    note: "New briefing: the roadmap plans Purview DLP and collection policies for Intune MAM-protected mobile apps; Learn does not yet document the feature."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 48 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Correction: stated the Intune licence requirement for existing app protection policies, reworded the controls note, completed the Intune path, and made the risk rationale and preview-date wording match the record."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 51 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Correction: replaced the claim that roles for DLP policies are undocumented with the general DLP role groups, and removed an After rollout step that had no matching controls row."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 53 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 50 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Correction: the collection policies row now gives the New-FeatureConfiguration PowerShell cmdlet (public preview) instead of 'Not yet documented', and the Purview portal path and note now follow the Create policy steps."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 61 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Correction: the collection policies row now cites the Create and deploy collection policies page, which gives the + Create policy and + Add activities steps."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 60 statements confirmed"
version: 5
verification:
  status: "verified"
  date: "2026-11-25"
  version: 5
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 60
  confirmed: 60
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "01302a37290194834bd056966fa2bc5f"
---

## What's changing

The roadmap item says Microsoft is adding a Microsoft Purview Data Loss Prevention (DLP) capability for mobile apps protected by Intune Mobile Application Management (MAM). It states that clipboard actions in those managed apps will be evaluated against Purview DLP policies before sharing is allowed. It also says Purview collection policies can be used to govern how sensitive data is handled in mobile apps.

Microsoft Learn does not describe this capability yet, so what follows about its behaviour is the roadmap's description. At the time of writing (November 2026), the Learn page on [Collection policies](https://learn.microsoft.com/purview/collection-policies-policy-reference) lists these data sources: Devices, Copilot experiences, Enterprise AI, Unmanaged cloud apps and Adaptive app scopes. The DLP overview's list of locations has no Intune-managed mobile app entry either. How the two features reach mobile apps is therefore not yet documented.

Today's Intune route for clipboard control is the app protection policy, which has a data protection setting for cut, copy and paste between apps. Learn does not say that Purview DLP reads or changes that setting.

The roadmap record gives the status as In development, with a preview target of January CY2027 and a general availability target of February CY2027. It lists the Worldwide (Standard Multi-Tenant) cloud and the platform as Web, although the description is about mobile apps.

## Why it matters

If this ships as described, clipboard control in mobile apps could move from a per-app Intune setting toward content-aware Purview rules. That would matter to security and compliance teams that already use Purview DLP, because they would be configuring mobile behaviour from the Purview portal as well as from Intune.

Microsoft has not stated what happens on arrival. No source says existing mobile behaviour changes, so treat it as something to review now and plan for, not as a change that will alter users' clipboards by itself. Decide who will own the two policy sets (Intune and Purview) before preview, so that a block has one owner when users report it.

## Risk assessment

**Data exposure**
- The roadmap states that clipboard actions are the data path being checked. Until Purview DLP policies apply to these apps, the Intune app protection clipboard setting remains the control that Learn documents for cut, copy and paste between apps.
- Collection policies decide which events are collected. Microsoft's service description says they are designed to streamline discovery of relevant information rather than to apply enforcement, so a collection policy alone does not block anything.

**Security & identity**
- No change documented: Learn does not describe the identity used to evaluate DLP in the app. Microsoft's general DLP guidance requires the account creating and deploying policies to belong to Compliance administrator, Compliance data administrator, Information Protection, Information Protection Admin or Security administrator. Additional permissions specific to the mobile integration are not yet documented. Collection policies list the DLP Compliance Management role and several role groups as applicable.

**Autonomy & actions**
- No change documented: the roadmap describes evaluation of user clipboard actions and no autonomous actions.

**Change & support**
- Expect support calls about blocked or allowed pastes when two systems can restrict the same action. Learn does not say which wins if an Intune clipboard setting and a Purview DLP rule disagree; confirm in preview before widening scope.
- The record's platform field says Web and its cloud list is Worldwide only; confirm the real app and device coverage before promising it to users.

## Cost and licensing

No licence or meter for DLP in Intune MAM-protected mobile apps is yet published. The roadmap item names none, and Learn has no page for the feature.

What is published covers collection policies. Microsoft's Purview service description says: there are no licensing requirements to apply collection policies, and you must be licensed for the workload for which you are creating the policy. The collection policy reference says some data sources are pay-as-you-go and need an Azure subscription linked before a policy is created: Copilot experiences, Enterprise AI and unmanaged cloud app activity detected through non-Microsoft SASE and secure enterprise browser integrations. Whether any of that applies to a mobile data source is not yet published.

Indirect cost is admin time to write and test two sets of policies and to explain new paste behaviour to mobile users. The existing Intune app protection policy is separate. The [App Protection Policies Overview](https://learn.microsoft.com/intune/app-management/protection/overview) says users must have a Microsoft Intune licence assigned to their Microsoft Entra account.

## Scope

Who: the roadmap says the capability applies to Intune MAM-protected mobile apps; the user and licence scope is not yet published. Roles: Microsoft's general DLP guidance requires the account creating and deploying policies to belong to Compliance administrator, Compliance data administrator, Information Protection, Information Protection Admin or Security administrator ([Create and deploy data loss prevention policies](https://learn.microsoft.com/purview/dlp-create-deploy-policy)). Additional permissions specific to the mobile integration are not yet documented. Collection policies list the DLP Compliance Management role and the Organization Management, Compliance Administrator, Insider Risk Management Admin and Information Protection Admins role groups as applicable, with Data Security Viewers for read-only support.

Clouds and platforms: the record lists Worldwide (Standard Multi-Tenant) and the platform Web. Rollout: preview targeted for January CY2027 and general availability for February CY2027, per the roadmap record. Prerequisites are not yet published; the Intune app protection policy documentation describes how policies target apps that are integrated with the Intune SDK, which is the existing route to protected apps.

## Governance guidance

### Before rollout
- Inventory the Intune app protection policies that set **Restrict cut, copy and paste between other apps**, and record which apps and groups they target (Intune admin center, row 1 of the controls table).
- Agree who in security or compliance will own Purview DLP for mobile apps and which Intune administrator they must coordinate with.
- List the collection policies you already run and check whether any assume the data sources Learn lists today (row 2).
- Ask your Microsoft account team or watch Message center for the licensing page before committing budget.

### At rollout
- Start in preview with a small pilot group of MAM-protected mobile users, and write down which pastes are blocked and which are allowed.
- Test the case where an Intune clipboard setting and a Purview DLP rule could disagree, because Learn does not document which applies.
- Tell pilot users what a blocked paste looks like once Microsoft documents the experience.

### After rollout
- Re-check the Learn pages behind the controls table, because the mobile DLP surface is not documented yet.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Clipboard sharing between apps under Intune app protection</strong><br><small>App</small><br><small class="controls__note">Existing Intune control, not a control over the new Purview capability. UI setting: Restrict cut, copy and paste between other apps. The request body sets allowedOutboundClipboardSharingLevel.</small></td><td data-label="Admin UI"><strong>Microsoft Intune admin center</strong><br>Apps › Protection › Create policy › iOS/iPadOS › Basics › Apps › Data protection › Restrict cut, copy and paste between other apps <a href="https://learn.microsoft.com/intune/app-management/protection/create-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/deviceAppManagement/iosManagedAppProtections</code> <a href="https://learn.microsoft.com/graph/api/intune-mam-iosmanagedappprotection-create" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which events Purview collects from supported data sources</strong><br><small>Tenant</small><br><small class="controls__note">Role listed: DLP Compliance Management. No mobile managed-app data source is listed at the time of writing (November 2026). Select + Create policy, supply a name and any optional conditions, then select + Add activities.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Data Loss Prevention › Classifiers › Collection policies › + Create policy › + Add activities <a href="https://learn.microsoft.com/purview/collection-policies-create-deploy-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-FeatureConfiguration -Name &lt;policy-name&gt; -FeatureScenario KnowYourData -Mode Enable -ScenarioConfig &lt;collection-policy-JSON&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-featureconfiguration" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Purview DLP policy for Intune MAM-protected mobile apps</strong><br><small>Tenant</small><br><small class="controls__note">Planned per the roadmap item; no portal location or cmdlet parameter documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The table shows two documented existing controls, distinct from the planned mobile DLP capability. The Intune app protection policy is the current way to limit clipboard sharing in managed mobile apps; it is an Intune control, and Learn does not say Purview DLP reads or overrides it. Collection policies govern which events Purview collects and are not enforcement.

The collection policy automation in row 2 is the New-FeatureConfiguration cmdlet in Security & Compliance PowerShell, which Learn marks as public preview, not available in all organizations and subject to change. Its ScenarioConfig parameter sets Activities, EnforcementPlanes and SensitiveTypeIds, and Locations scopes the policy; the reference supplies the JSON syntax and examples. This is automation for existing collection policies, not confirmation of mobile integration support.

The third row states a gap: at the time of writing (November 2026), Learn documents no Purview DLP location or cmdlet parameter for Intune MAM-protected mobile apps. The Intune Graph operation shown creates an iOS/iPadOS policy; Android policies are not covered by this row.

## Open questions

- Where in the Purview portal will an administrator create a DLP policy for Intune MAM-protected mobile apps, and what will the location be called? Watch the Learn data loss prevention pages.
- Which licence and which meter, if any, apply to DLP and collection policies for mobile apps? Watch the Microsoft Purview service description.
- What is the default if the capability reaches its January CY2027 preview target: does anything evaluate clipboard actions before an admin creates a policy? Watch Message center.
- Which Intune MAM-protected apps and which iOS/iPadOS and Android versions are supported, given the roadmap record lists Web as its platform?
- If an Intune clipboard setting and a Purview DLP rule disagree, which one applies?

<!-- rationale
risk: Medium. Microsoft has not stated the new control's default; this assessment assumes today's mobile data protection behaviour continues, rather than asserting what happens on arrival. The roadmap plans content-aware evaluation of clipboard actions against Purview DLP policies.
cost: Low. The only cost the sources show is admin time; the licence and any meter for this mobile capability are not yet published, so budget requests should wait for Microsoft's licensing page.
impact: Medium. People who use Intune MAM-protected apps on mobile devices would notice clipboard actions being evaluated; admins in Purview and Intune configure it. Roughly who is affected depends on policy scope.
-->
