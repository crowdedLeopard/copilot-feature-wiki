---
title: "Microsoft Purview Data Lifecycle Management: insights and retention policy recommendations for sensitive SharePoint and OneDrive data"
slug: "microsoft-purview-data-lifecycle-management-insights-and-policy-recommendations-on-sensiti"
roadmapId: 562343
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans insights on sensitive OneDrive and SharePoint data and retention policy recommendations in Purview Data Lifecycle Management. Preview is targeted for January CY2027; Learn does not describe it yet."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "February CY2027"
previewDate: "January CY2027"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's service description lists the licences that give user rights for retention policies, for example Microsoft 365 E5/A5/G5/E3/A3/G3 and Business Premium. A licence statement specific to the insights and recommendations is not yet published."
audiences: ["compliance","m365-admin"]
tags: ["purview","data-lifecycle-management","retention","sharepoint","onedrive","data-governance"]
sources:
  - title: "Microsoft 365 Roadmap item 562343"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=562343"
    kind: "roadmap"
  - title: "Learn about data lifecycle management"
    url: "https://learn.microsoft.com/purview/data-lifecycle-management"
    kind: "learn"
  - title: "Get started with data lifecycle management"
    url: "https://learn.microsoft.com/purview/get-started-with-data-lifecycle-management"
    kind: "learn"
  - title: "Create and configure retention policies"
    url: "https://learn.microsoft.com/purview/create-retention-policies"
    kind: "learn"
  - title: "New-RetentionCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-lifecycle-management-retention-capabilities-based-on-files-last-acc","microsoft-purview-data-lifecycle-management-archive-sharepoint-files-under-retention","microsoft-purview-data-lifecycle-management-hard-delete-capability-for-onedrive-and-sharep"]
controls:
  - governs: "Switch or role scoping for the insights and recommendations"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting is documented on Learn at the time of writing (November 2026). The feature is described only in the roadmap item."
  - governs: "Creating retention policies for SharePoint and OneDrive content (existing path)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Data Lifecycle Management > Policies > Retention policies > New retention policy"
      docs: "https://learn.microsoft.com/purview/create-retention-policies"
    api:
      kind: "powershell"
      call: "New-RetentionCompliancePolicy -Name \"<policy name>\" -SharePointLocation \"<site URL>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy"
    note: "Existing control, not a control over the insights. Needs the Compliance Administrator role group or Retention Management role. A policy also needs New-RetentionComplianceRule."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-09-21T23:04:49"
changes:
  - date: "2026-11-21"
    note: "New briefing: roadmap-only description of Data Lifecycle Management insights and retention policy recommendations; Learn does not yet describe the feature."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 42 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 42
  confirmed: 40
  unconfirmed: 1
  contradicted: 1
  attempts: 1
  hash: "d8f8ef61fdc12e2e1283916dc18b64af"
---

## What's changing

Microsoft plans to add insights on sensitive Microsoft 365 data in OneDrive and SharePoint to Microsoft Purview Data Lifecycle Management, together with recommendations on retention policies, so that customers can govern that data better. That is the whole of the roadmap item's description.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. Which sensitive data the insights draw on, where in the Microsoft Purview portal they appear, and what a recommendation lets an administrator do are not stated.

For background, Learn describes retention policies as the cornerstone of Data Lifecycle Management: they cover Exchange, SharePoint, OneDrive, Teams and Viva Engage, and can retain content, permanently delete it after a set period, or do both.

The roadmap item is In development, with a preview targeted for January CY2027 and a target of February CY2027. It lists General Availability and Preview as release phases, Worldwide (Standard Multi-Tenant) as the cloud and Web as the platform. These are Microsoft's targets, not commitments.

## Why it matters

For a service owner, the change is a new source of advice on retention policies for SharePoint and OneDrive content. Advice is only as safe as the decision that follows it: a retention policy can be set to delete content permanently, so a recommendation is worth acting on only after a compliance owner has checked it against existing policies and legal holds.

Microsoft has not stated what happens on arrival, so base your plan on no source saying that existing retention behaviour changes. Nothing in the roadmap item says a policy is created or changed without an administrator.

## Risk assessment

**Data exposure**
- The roadmap describes insights on sensitive data in OneDrive and SharePoint. Microsoft has not described what detail an insight shows or who can open it, so confirm the required role before preview rather than assuming access matches retention-policy roles.
- Learn says the people who configure retention policies do not need access to the content. Whether that holds for the insights is not stated.

**Security & identity**
- The documented roles for retention policies are the Compliance Administrator role group, or a custom role group with the Retention Management role (View-Only Retention Management for read-only). Which roles see the insights and recommendations is not stated.

**Autonomy & actions**
- The roadmap describes recommendations, not automatic changes. Whether a recommendation can be applied in one step is not stated, so treat each one as input to the normal retention policy path.
- A retention policy can be configured to permanently delete content after a specified period, so acting on a recommendation can lead to deletion.

**Change & support**
- A new insights view and recommendations may prompt questions from compliance owners about policies that already exist. Compare any recommendation with the retention policies already listed under Data Lifecycle Management > Policies > Retention policies before changing them.

## Cost and licensing

Microsoft's Purview service description lists the licences that give user rights for retention policies: for organisation-wide, location-wide, or include/exclude retention policies, Microsoft 365 E5/A5/G5/E3/A3/G3 and Business Premium among others. Where the location is SharePoint or OneDrive for Business, SharePoint Plan 2 is also listed. Those statements are about retention policies, not about this feature.

A licence requirement, meter or price specific to the insights and recommendations is not yet published. The cost the sources show is indirect: the compliance team's time to review recommendations and any retention policy changes that follow.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) as the cloud and Web as the platform. It names OneDrive and SharePoint as the data in scope. Rollout mechanics, prerequisites and the roles that can see the insights are not stated.

Roles documented for retention policies in general are the Compliance Administrator role group or the Retention Management role; these are the closest documented roles but are not confirmed to apply to the insights.

## Governance guidance

### Before rollout
- Identify who holds the Compliance Administrator role group or the Retention Management role, since these are the documented roles for creating retention policies.
- List the retention policies that already include SharePoint and OneDrive locations (Microsoft Purview portal > Solutions > Data Lifecycle Management > Policies > Retention policies), so a recommendation can be compared with what is already applied.
- Check the licences you hold against the retention policy list in the Purview service description.

### At rollout
- Watch Message center and the Data Lifecycle Management pages on Learn for documentation of the insights and recommendations before the January CY2027 preview target.
- Agree who reviews a recommendation and who may create the resulting policy through the retention policy path or the New-RetentionCompliancePolicy cmdlet.

### After rollout
- Review any retention policy created from a recommendation against existing policies, especially any that delete content.
- Re-check whether Microsoft has documented a setting for the feature and, if so, add it to the controls table.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Switch or role scoping for the insights and recommendations</strong><br><small>Tenant</small><br><small class="controls__note">No setting is documented on Learn at the time of writing (November 2026). The feature is described only in the roadmap item.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Creating retention policies for SharePoint and OneDrive content (existing path)</strong><br><small>Tenant</small><br><small class="controls__note">Existing control, not a control over the insights. Needs the Compliance Administrator role group or Retention Management role. A policy also needs New-RetentionComplianceRule.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Data Lifecycle Management › Policies › Retention policies › New retention policy <a href="https://learn.microsoft.com/purview/create-retention-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-RetentionCompliancePolicy -Name &quot;&lt;policy name&gt;&quot; -SharePointLocation &quot;&lt;site URL&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No setting for the insights or recommendations is documented at the time of writing (November 2026), so the first row records that gap. The second row is the existing way to create the retention policies a recommendation would concern; it is not a control over the insights.

The cmdlet reference says a new policy is not valid until a rule is added, so scripting also needs New-RetentionComplianceRule. Roles for retention policies are the Compliance Administrator role group, or a custom role group with the Retention Management role; Priority Cleanup Admin is a separate role for priority cleanup.

## Open questions

- Which roles can see the insights and recommendations, and do they match the Compliance Administrator and Retention Management roles used for retention policies? Watch the Data Lifecycle Management pages on Learn.
- Can an administrator turn the insights or recommendations off, or limit them to some sites or accounts, in the portal or by script?
- Does a recommendation create or change a retention policy on its own, or only suggest one for an administrator to create?
- Which licence covers the insights and recommendations, and is any meter charged? Watch the Purview service description and Message center.
- What does each of the preview and general availability targets (January and February CY2027) cover?

<!-- rationale
risk: Low. The roadmap describes insights and recommendations, and no source says existing retention behaviour changes; retention policies that delete content remain a separate, existing admin decision.
cost: Low. The only cost the sources show is admin time; a licence or meter specific to the insights and recommendations is not yet published.
impact: Low. The roadmap item describes the feature as help for customers to govern sensitive data, which points to compliance administrators; Microsoft has not said who sees the insights.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] front matter: licensing.model / licensing: The insights and recommendations are included in a licence the product already needs. | Found: Searched: "Data Lifecycle Management" "insights" "recommendations" license price meter. Opened Purview service description and DLM getting-started; licences are assigned to particular retention capabilities, with no named entitlement covering these new insights. | Fix: Change licensing.model from "included" to "unknown". Keep the notes and Cost and licensing text distinguishing existing retention-policy licences from the unpublished licence requirement for the insights and recommendations.
- [contradicted, blocker] controls[1].note; Risk assessment: Security & identity; Scope; Governance guidance; Governance controls / role: The role guidance for creating SharePoint retention policies gives Compliance Administrator or Retention Management but omits the qualification for administrators restricted to administrative units. | Found: you won't be able to configure a retention policy that includes SharePoint sites or Exchange public folders. For these locations, you must be an unrestricted administrator. | Fix: Keep the documented role names, but append this qualification to the role guidance and controls[1].note in both front matter and the rendered table: "For policies that include SharePoint sites, the administrator must be unrestricted; administrators assigned administrative units cannot configure those policies." Source: https://learn.microsoft.com/purview/create-retention-policies. | Source: https://learn.microsoft.com/purview/create-retention-policies
-->
