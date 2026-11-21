---
title: "Microsoft Purview: retention based on last accessed date for SharePoint and OneDrive files (GCC, GCC High, DoD)"
slug: "microsoft-purview-data-lifecycle-management-retention-capabilities-based-on-files-last-acc"
roadmapId: 565866
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans to let retention labels and policies act on OneDrive and SharePoint files by last accessed date (GCC, GCC High, DoD; target March CY2027). Learn does not document it yet; review once it does."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "March CY2027"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Learn's Microsoft Purview service description lists the licences that give user rights for retention policies (Microsoft 365 E5/A5/G5/E3/A3/G3 and Business Premium among them) and for SharePoint or OneDrive locations (SharePoint Plan 2 also). A licence or price specific to the last-accessed option is not yet published."
audiences: ["compliance","m365-admin","service-owner"]
tags: ["purview","retention","data-lifecycle-management","sharepoint","onedrive","last-accessed","stale-content","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 565866"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=565866"
    kind: "roadmap"
  - title: "Learn about retention policies and retention labels"
    url: "https://learn.microsoft.com/purview/retention"
    kind: "learn"
  - title: "Create and configure retention policies"
    url: "https://learn.microsoft.com/purview/create-retention-policies"
    kind: "learn"
  - title: "Get started with data lifecycle management"
    url: "https://learn.microsoft.com/purview/get-started-with-data-lifecycle-management"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "New-RetentionComplianceRule"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancerule"
    kind: "learn"
  - title: "Plan for Microsoft Purview compliance and risk management solutions – GCC deployments"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/plan-for-microsoft-purview-gcc-deployments"
    kind: "learn"
  - title: "Plan for Microsoft Purview compliance and risk management solutions – GCC High deployments"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/plan-for-microsoft-purview-gcc-high-deployments"
    kind: "learn"
videos: []
related: ["purview-retention-last-accessed-sharepoint-onedrive","microsoft-purview-data-lifecycle-management-archive-sharepoint-files-under-retention","microsoft-purview-data-lifecycle-management-hard-delete-capability-for-onedrive-and-sharep"]
controls:
  - governs: "Which date starts the retention period in a retention policy"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Data Lifecycle Management > Policies > Retention policies > New retention policy"
      docs: "https://learn.microsoft.com/purview/create-retention-policies"
    api:
      kind: "powershell"
      call: "New-RetentionComplianceRule -Policy <policy name> -ExpirationDateOption ModificationAgeInDays"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancerule"
    note: "Existing alternative, not a control over the new option. Settings sit on the 'Decide if you want to retain content, delete it, or both' page. The rule is added to an existing policy; no last-accessed value is documented."
  - governs: "Last-accessed start option for retention policies and labels"
    scope: "tenant"
    ui: null
    api: null
    note: "Learn documents no setting for this option at the time of writing (November 2026); the roadmap item describes the capability only."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-10-19T23:15:15"
changes:
  - date: "2026-11-21"
    note: "Initial briefing for the GCC, GCC High and DoD roadmap item: planned last-accessed retention for SharePoint and OneDrive, not yet documented on Learn."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 57 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 57
  confirmed: 55
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "9d5206a752456626072f51aec186c70e"
---

## What's changing

The roadmap item describes the ability to apply retention labels and retention policies to items in OneDrive and SharePoint based on when a user last accessed them. Microsoft Learn does not describe this option yet, so what follows about its behaviour is the roadmap's description and nothing more.

Learn's retention pages document four ways to start the retention period: when the content was created (the default), when it was last modified (files in SharePoint, OneDrive and Microsoft 365 Groups only), when it was labelled (retention labels) and when an event occurs. Last accessed is not among them at the time of writing (November 2026). The record does not say how an access is defined, which file types are covered, or whether the option deletes content, retains it or both.

The roadmap record shows status In development, release phase General Availability, a target of March CY2027 and no preview date. It lists the clouds GCC, GCC High and DoD, and the Web platform. These dates are targets. The record has no more-info link, and no Message center post was supplied for this item. Learn's Purview plan pages for GCC and GCC High list retention policies as Available, with no row for this option.

## Why it matters

If it ships as described, retention could follow inactivity, not just age: a compliance team could target files nobody has opened for a set period, which is a different question from how old a file is or when it was last edited. That is useful for clean-up programmes, and it is also where mistakes would be costly, because retention policies can be configured to delete content.

Microsoft has not stated what happens on arrival, and no source says existing retention policies change. Treat the option as something to evaluate when it is documented, not something to switch on at launch. The access signal is the part to understand first: until Microsoft says what counts as an access and how quickly it is recorded, a deletion rule keyed to it cannot be judged.

## Risk assessment

**Data exposure**
- Learn says a retention policy can retain content, retain and then delete it after a set period, or just delete it after a set period. If the last-accessed option is used for deletion, files that are needed but rarely opened could be removed; the roadmap does not say how access is measured, so the exposure cannot be sized yet. Control: retention policy configuration (first row of the table).
- Retention that keeps content in SharePoint and OneDrive uses the Preservation Hold library, which Learn says counts towards the site's storage quota.

**Security & identity**
- The roadmap describes no new permission or identity. Who can set deletion by last accessed follows who can manage retention: Learn recommends the Compliance Administrator role group, or a custom role group with the Retention Management role.
- A restricted administrator assigned administrative units cannot configure a retention policy that includes SharePoint sites, per Learn.

**Autonomy & actions**
- Retention policies apply to content without per-item approval, and Learn says to allow up to seven days for retention settings to be applied. Whether the last-accessed option supports review before deletion is not stated.

**Change & support**
- Expect help-desk questions from file owners if files disappear or are held, because the roadmap does not define what counts as 'accessed'. No admin documentation exists yet to point them to.

## Cost and licensing

Learn's Microsoft Purview service description lists the licences that give user rights for retention policies: Microsoft 365 E5/A5/G5/E3/A3/G3 and Business Premium, among others. Where the location is SharePoint or OneDrive for Business, SharePoint Plan 2 also gives user rights. A retention policy that uses an adaptive policy scope needs one of a narrower list that includes Microsoft 365 E5/A5/G5. For retention labels, label creation is listed under Microsoft 365 E5/A5/G5/E3/A3/G3/F3/F1 and Business Premium, among others.

A licence, meter or price specific to the last-accessed option is not yet published. The cost the sources show is admin time to design and test policies, plus storage in the Preservation Hold library where content is retained.

## Scope

The roadmap item covers items in OneDrive and SharePoint, and lists the clouds GCC, GCC High and DoD and the Web platform. Status is In development with a March CY2027 target, a date Microsoft may change.

People affected are the owners of files in sites and OneDrive accounts that a retention policy or label would cover. Learn recommends the Compliance Administrator role group for managing retention policies and labels; a restricted administrator with administrative units cannot configure a policy that includes SharePoint sites. Rollout mechanics and prerequisites for this option are not stated.

## Governance guidance

### Before rollout
- Inventory the retention policies and labels that already cover SharePoint sites and OneDrive accounts in the Microsoft Purview portal (Solutions > Data Lifecycle Management > Policies > Retention policies), so overlaps are known before a new option appears.
- Check your users' licences against the retention lists in the Microsoft Purview service description, including the narrower list for adaptive policy scopes if you plan to use them.
- Decide which sites or accounts, if any, would be candidates for deletion after inactivity, and who signs off on that scope.

### At rollout
- Wait for Microsoft Learn to document the last-accessed option, including what counts as an access, before creating any policy that deletes content.
- Pilot on a single low-risk location with a new retention policy rather than editing an existing one.
- Allow up to seven days before judging whether a policy has been applied.

### After rollout
- Sample the files a pilot policy acted on and compare them with their owners' expectations before widening scope.
- Re-read the roadmap item and the Learn retention pages for changes to the target date, supported file types and licensing.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which date starts the retention period in a retention policy</strong><br><small>Tenant</small><br><small class="controls__note">Existing alternative, not a control over the new option. Settings sit on the 'Decide if you want to retain content, delete it, or both' page. The rule is added to an existing policy; no last-accessed value is documented.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Data Lifecycle Management › Policies › Retention policies › New retention policy <a href="https://learn.microsoft.com/purview/create-retention-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-RetentionComplianceRule -Policy &lt;policy name&gt; -ExpirationDateOption ModificationAgeInDays</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancerule" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Last-accessed start option for retention policies and labels</strong><br><small>Tenant</small><br><small class="controls__note">Learn documents no setting for this option at the time of writing (November 2026); the roadmap item describes the capability only.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No setting for the last-accessed option is documented at the time of writing, so the first row shows the controls that exist today for choosing the start of the retention period, and the second row records the gap. The start options Learn documents for the retention rule are created and last modified; the reference for the rule's expiration setting lists CreationAgeInDays and ModificationAgeInDays as its valid values.

Creating or editing retention policies requires the Compliance Administrator role group or a role group containing Retention Management; the View-Only Retention Management role is the read-only option. These permissions are needed only to configure policies and labels, not to access the content.

## Open questions

- What counts as an access to a file, and how quickly is it recorded? Watch the roadmap item and the Learn retention pages.
- Will the option apply to retention policies, retention labels or both, and can it delete, retain or both?
- Which file types and locations are covered, and do GCC, GCC High and DoD get the same scope and timing as other clouds?
- What is the default on arrival, and will existing retention configurations change?
- Which licence covers the option, and will PowerShell and the policy wizard expose it the same way?

<!-- rationale
risk: Medium. Retention policies can be set to delete content, and the roadmap does not say how 'last accessed' is measured or what the default is, so a badly set policy could delete files that are still in use.
cost: Low. The only cost the sources show is admin time; Learn lists the licences for retention policies in general, and a licence or price specific to this option is not yet published.
impact: Low. Compliance administrators configure retention policies and labels; file owners would notice only if a policy acted on their files.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Governance guidance: Before rollout, first bullet / admin-path: Solutions > Data Lifecycle Management > Policies > Retention policies is where administrators can inventory retention labels. | Found: Sign in to the Microsoft Purview portal > Solutions > Data Lifecycle Management > Retention labels. | Fix: Remove 'and labels' from the first Before rollout bullet, leaving 'Inventory the retention policies that already cover SharePoint sites and OneDrive accounts in the Microsoft Purview portal (Solutions > Data Lifecycle Management > Policies > Retention policies), so overlaps are known before a new option appears.' The existing controls row then covers the instruction without adding another row. | Source: https://learn.microsoft.com/purview/create-retention-labels-data-lifecycle-management
- [contradicted, blocker] rationale: cost; Cost and licensing / consistency: The cost rationale says admin time is the only cost the sources show, but the body also identifies retained-content storage. | Found: Rationale: 'The only cost the sources show is admin time'. Body: 'The cost the sources show is admin time to design and test policies, plus storage in the Preservation Hold library where content is retained.' | Fix: Replace the cost rationale with 'Low. Admin time is needed to design and test policies, and retained content can increase storage usage in the Preservation Hold library; a licence or price specific to this option is not yet published.' Keep the low rating.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; rendered controls table / admin-path: The printed Microsoft Purview portal path reaches New retention policy, an entry point for choosing the retention-period start. | Found: Sign in to the Microsoft Purview portal > Solutions > Data Lifecycle Management > Policies > Retention policies. Select New retention policy to start the Create retention policy configuration, and name your new retention policy. | Fix: The path correctly stops at the wizard entry point. Extend controls[0].ui.path for a static policy to 'Solutions > Data Lifecycle Management > Policies > Retention policies > New retention policy > Assign admin units > Full directory > Choose the type of retention policy to create > Static > Choose locations > Decide if you want to retain content, delete it, or both', as documented at https://learn.microsoft.com/purview/create-retention-policies. | Source: https://learn.microsoft.com/purview/create-retention-policies
-->
