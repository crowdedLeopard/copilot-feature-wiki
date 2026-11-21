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
  - title: "Learn about data loss prevention"
    url: "https://learn.microsoft.com/purview/dlp-learn-about-dlp"
    kind: "learn"
  - title: "New-DlpCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy"
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
      path: "Apps > Protection > Create policy > iOS/iPadOS > Data protection"
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
      path: "Solutions > Data Loss Prevention > Classifiers > Collection policies"
      docs: "https://learn.microsoft.com/purview/collection-policies-solution-overview"
    api: null
    note: "Role listed: DLP Compliance Management. The reference lists no mobile managed-app data source at the time of writing (November 2026)."
  - governs: "Purview DLP policy for Intune MAM-protected mobile apps"
    scope: "tenant"
    ui: null
    api: null
    note: "Planned per the roadmap item; no portal location or cmdlet parameter documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-10-06T22:56:31"
changes:
  - date: "2026-11-21"
    note: "New briefing: the roadmap plans Purview DLP and collection policies for Intune MAM-protected mobile apps; Learn does not yet document the feature."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 48 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 48
  confirmed: 45
  unconfirmed: 2
  contradicted: 1
  attempts: 1
  hash: "49f23f0f642df96b13b15a94875d2665"
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
- No change documented: Learn does not describe the identity used to evaluate DLP in the app or the role needed for the mobile scenario. Collection policies list the DLP Compliance Management role and several role groups as applicable.

**Autonomy & actions**
- No change documented: the roadmap describes evaluation of user clipboard actions and no autonomous actions.

**Change & support**
- Expect support calls about blocked or allowed pastes when two systems can restrict the same action. Learn does not say which wins if an Intune clipboard setting and a Purview DLP rule disagree; confirm in preview before widening scope.
- The record's platform field says Web and its cloud list is Worldwide only; confirm the real app and device coverage before promising it to users.

## Cost and licensing

No licence or meter for DLP in Intune MAM-protected mobile apps is yet published. The roadmap item names none, and Learn has no page for the feature.

What is published covers collection policies. Microsoft's Purview service description says: there are no licensing requirements to apply collection policies, and you must be licensed for the workload for which you are creating the policy. The collection policy reference says some data sources are pay-as-you-go and need an Azure subscription linked before a policy is created: Copilot experiences, Enterprise AI and unmanaged cloud app activity detected through non-Microsoft SASE and secure enterprise browser integrations. Whether any of that applies to a mobile data source is not yet published.

Indirect cost is admin time to write and test two sets of policies and to explain new paste behaviour to mobile users. The Intune app protection policy path is separate and its licensing is not covered by these pages.

## Scope

Who: the roadmap says the capability applies to Intune MAM-protected mobile apps; the user and licence scope is not yet published. Roles: collection policies list the DLP Compliance Management role and the Organization Management, Compliance Administrator, Insider Risk Management Admin and Information Protection Admins role groups as applicable, with Data Security Viewers for read-only support. Which roles manage the mobile DLP policy is not yet documented.

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
- Review DLP and collection results in the Purview portal and compare them with Intune app protection reports.
- Re-check the Learn pages behind the controls table, because the mobile DLP surface is not documented yet.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Clipboard sharing between apps under Intune app protection</strong><br><small>App</small><br><small class="controls__note">Existing Intune control, not a control over the new Purview capability. UI setting: Restrict cut, copy and paste between other apps. The request body sets allowedOutboundClipboardSharingLevel.</small></td><td data-label="Admin UI"><strong>Microsoft Intune admin center</strong><br>Apps › Protection › Create policy › iOS/iPadOS › Data protection <a href="https://learn.microsoft.com/intune/app-management/protection/create-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/deviceAppManagement/iosManagedAppProtections</code> <a href="https://learn.microsoft.com/graph/api/intune-mam-iosmanagedappprotection-create" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which events Purview collects from supported data sources</strong><br><small>Tenant</small><br><small class="controls__note">Role listed: DLP Compliance Management. The reference lists no mobile managed-app data source at the time of writing (November 2026).</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Data Loss Prevention › Classifiers › Collection policies <a href="https://learn.microsoft.com/purview/collection-policies-solution-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Purview DLP policy for Intune MAM-protected mobile apps</strong><br><small>Tenant</small><br><small class="controls__note">Planned per the roadmap item; no portal location or cmdlet parameter documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Two existing controls are the only ones Learn documents today. The Intune app protection policy is the current way to limit clipboard sharing in managed mobile apps; it is an Intune control, and Learn does not say Purview DLP reads or overrides it. Collection policies govern which events Purview collects and are not enforcement.

The third row states a gap: at the time of writing (November 2026), Learn documents no Purview DLP location or cmdlet parameter for Intune MAM-protected mobile apps. The Intune Graph operation shown creates an iOS/iPadOS policy; Android policies are not covered by this row.

## Open questions

- Where in the Purview portal will an administrator create a DLP policy for Intune MAM-protected mobile apps, and what will the location be called? Watch the Learn data loss prevention pages.
- Which licence and which meter, if any, apply to DLP and collection policies for mobile apps? Watch the Microsoft Purview service description.
- What is the default when the capability reaches preview in January CY2027: does anything evaluate clipboard actions before an admin creates a policy? Watch Message center.
- Which Intune MAM-protected apps and which iOS/iPadOS and Android versions are supported, given the roadmap record lists Web as its platform?
- If an Intune clipboard setting and a Purview DLP rule disagree, which one applies?

<!-- rationale
risk: Medium. Microsoft has not stated a default; if the new DLP checks stay unconfigured, today's Intune clipboard settings keep governing mobile apps, and the roadmap says Purview DLP will govern clipboard sharing once policies exist.
cost: Low. The only cost the sources show is admin time; the licence and any meter for this mobile capability are not yet published, so budget requests should wait for Microsoft's licensing page.
impact: Medium. People who use Intune MAM-protected apps on mobile devices would notice clipboard actions being evaluated; admins in Purview and Intune configure it. Roughly who is affected depends on policy scope.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Cost and licensing: final paragraph / licensing: The cited pages do not cover licensing for Intune app protection policies. | Found: User requirements to use app protection policies ... The user must have a license for Microsoft Intune assigned to their Microsoft Entra account. | Fix: Replace 'The Intune app protection policy path is separate and its licensing is not covered by these pages' with 'The existing Intune app protection policy is separate. The App Protection Policies Overview says users must have a Microsoft Intune licence assigned to their Microsoft Entra account.' Keep the absence of licensing specific to the new Purview integration distinct. | Source: https://learn.microsoft.com/intune/app-management/protection/overview
- [unsupported, major] Governance controls: first paragraph / behaviour: The two existing controls in the table are the only controls Learn documents today. | Found: Searched: "Purview" "mobile apps" "Intune" DLP policy. Opened Intune create-policy, iOS settings, collection overview and collection create/deploy; these establish the two selected controls, not an exhaustive inventory of all documented controls. | Fix: Replace 'Two existing controls are the only ones Learn documents today' with 'The table shows two documented existing controls, distinct from the planned mobile DLP capability.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The Intune route to clipboard controls is Apps > Protection > Create policy > iOS/iPadOS > Data protection. | Found: Select Apps > Protection. ... Select Create policy and select either iOS/iPadOS or Android. ... Click Next to display the Data protection page. ... including cut, copy, paste, and save-as restrictions. | Fix: Complete the route as 'Apps > Protection > Create policy > iOS/iPadOS > Basics > Apps > Data protection > Restrict cut, copy and paste between other apps'. The Basics fields and app targeting are pass-through or scope selections, not blockers. The final setting label is documented at https://learn.microsoft.com/intune/app-management/protection/ref-settings-ios. | Source: https://learn.microsoft.com/intune/app-management/protection/create-policy
- [supported, minor] controls[1].ui; Governance controls table / admin-path: Collection policies are at Microsoft Purview portal > Solutions > Data Loss Prevention > Classifiers > Collection policies. | Found: In the Microsoft Purview portal, select Solutions > Data Loss Prevention > Classifiers > Collection policies. | Fix: The path correctly reaches the policy list. Qualify the row note with 'This route opens the collection policy list; use + Create policy to configure a policy, then + Add activities to choose activities to detect', as documented at the already cited https://learn.microsoft.com/purview/collection-policies-create-deploy-policy. | Source: https://learn.microsoft.com/purview/collection-policies-solution-overview
- [unsupported, minor] rationale: risk / default: If the new checks remain unconfigured, existing Intune clipboard settings keep governing, and the roadmap says Purview governs once policies exist. | Found: Searched: Purview Intune mobile DLP clipboard no policy configured default enforcement identity evaluation precedence. Read roadmap and Purview Graph security overview; neither states this integration requires newly configured policies or excludes automatic use of existing or default policies. | Fix: Replace the risk rationale with 'Medium. Microsoft has not stated the new control's default; this assessment assumes today's mobile data protection behaviour continues, rather than asserting what happens on arrival. The roadmap plans content-aware evaluation of clipboard actions against Purview DLP policies.'
- [supported, minor] Open questions: default-state question / date: The capability reaches preview in January CY2027. | Found: "status": "In development", "previewDate": "January CY2027" | Fix: Replace 'when the capability reaches preview in January CY2027' with 'if the capability reaches its January CY2027 preview target'.
-->
