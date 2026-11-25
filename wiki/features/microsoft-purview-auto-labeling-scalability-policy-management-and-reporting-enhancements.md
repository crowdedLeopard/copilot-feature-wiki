---
title: "Microsoft Purview: higher auto-labeling limits for SharePoint sites and simulation, plus new reporting"
slug: "microsoft-purview-auto-labeling-scalability-policy-management-and-reporting-enhancements"
roadmapId: 570445
topic: "governance"
products: ["Microsoft Purview"]
summary: "Purview auto-labeling raises its simulation, SharePoint site and adaptive scope limits and adds reporting. It is on by default and Microsoft says no action is required; admins can review policies the old limits constrained."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: "September CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "on"
action: "none"
licensing:
  model: "included"
  notes: "Service-side auto-labeling entitlement is defined by the Client and service-side automatic sensitivity labeling row in the Microsoft Purview service description; Microsoft 365 E5 is included. The standalone AIP Premium P2 listing is for client-side auto-labeling. Separate licensing for these enhancements is not yet published."
audiences: ["compliance","security","m365-admin"]
tags: ["purview","sensitivity-labels","information-protection","adaptive-scopes","sharepoint","sensitive-information-types","auditing","data-governance"]
sources:
  - title: "Microsoft 365 Roadmap item 570445"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570445"
    kind: "roadmap"
  - title: "MC1469958"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1469958"
    kind: "message-center"
  - title: "Automatically apply a sensitivity label to Microsoft 365 data"
    url: "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"
    kind: "learn"
  - title: "Adaptive scopes"
    url: "https://learn.microsoft.com/purview/purview-adaptive-scopes"
    kind: "learn"
  - title: "Use the Insights tab to analyze auto-labeling policies in Microsoft Purview"
    url: "https://learn.microsoft.com/purview/auto-label-insights-tab"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description#microsoft-purview-information-protection-sensitivity-labeling"
    kind: "learn"
videos: []
related: ["microsoft-purview-adaptive-scope-evaluation-control-with-recipient-and-site-owner-lifecycl","microsoft-purview-unified-classification-management-experience","microsoft-purview-information-protection-sensitivity-labels-for-microsoft-entra-security-g"]
controls:
  - governs: "Which SharePoint sites an auto-labeling policy targets by explicit selection"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Policies > Auto-labeling policies > Create auto-labeling policy"
      docs: "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"
    api:
      kind: "powershell"
      call: "Set-AutoSensitivityLabelPolicy -Identity <AutoLabelingPolicyName> -AddSharePointLocation $spoLocations -ApplySensitivityLabel <Label> -Mode TestWithoutNotifications"
      docs: "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"
    note: "Security & Compliance PowerShell. Learn gives 1,000 explicitly selected sites per policy in the portal."
  - governs: "Dynamic SharePoint site targeting for auto-labeling with an adaptive scope"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Adaptive scopes"
      docs: "https://learn.microsoft.com/purview/purview-adaptive-scopes"
    api:
      kind: "powershell"
      call: "New-AutoSensitivityLabelPolicy -Name <AutoLabelingPolicyName> -SharePointAdaptiveScopes <AdaptiveScope> -ApplySensitivityLabel <Label> -Mode TestWithoutNotifications"
      docs: "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"
    note: "Scope Manager role creates the scope. Learn gives 50,000 sites per SharePoint adaptive scope for auto-labeling policies."
confidence: "high"
created: "2026-11-18"
updated: "2026-11-25"
roadmapModified: "2026-11-11T00:52:46"
changes:
  - date: "2026-11-18"
    note: "New briefing: higher auto-labeling simulation, SharePoint site and adaptive scope limits, plus new reporting, per roadmap item 570445 and MC1469958."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 61 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected the After rollout reporting step: SIT summaries are on the Insights tab, while the 30-day Labeling activity overview chart is in Overview under View details."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 67 statements not yet confirmed"
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 73 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 69 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected the service-side auto-labeling licensing statement to the Microsoft Purview service description row, and removed the auditing and reporting checklist steps and the reporting-switch absence."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 70 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 70
  confirmed: 69
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "c37336bdb2b33a55a9adde4dbf300249"
---

## What's changing

Microsoft Purview is raising the scale limits of auto-labeling policies and adding reporting. Microsoft's notice MC1469958 lists five changes: auto-labeling simulation capacity rises from 4 million to 20 million items; admins can select up to 1,000 individual SharePoint sites in a policy; adaptive scopes support up to 50,000 SharePoint sites per policy; policies can filter SharePoint sites on the SiteTemplate property; and audit and reporting views add summaries of the sensitive information types (SITs) detected when labels are applied, plus a 30-day chart of files processed each day.

The notice says these enhancements are on by default, arrive automatically as the rollout reaches a tenant, and that existing auto-labeling policies keep working without modification. It states that no action is required and that no impact on end users is expected.

The roadmap record shows the item as Launched, with a preview target of September CY2026 and a general availability target of November CY2026. The notice gives public preview as beginning early September 2026 and completing by mid-September 2026, and worldwide general availability as beginning and completing in mid-November 2026 (previously late October), per its update of 3 November 2026. The record lists Worldwide (Standard Multi-Tenant) only.

Microsoft Learn already documents several of these figures. The auto-labeling page states that simulation mode supports up to 20,000,000 matched files, that each policy can target up to 1,000 explicitly included or excluded SharePoint sites in the portal, and the adaptive scopes page states that a SharePoint adaptive scope supports up to 50,000 sites per policy for auto-labeling policies. The Learn page describes a **Labeling activity overview** chart covering the last 30 days with separate successful and failed series, which may or may not be the same as the notice's chart of files processed per day.

## Why it matters

Policies that were split or left unfinished because of the old limits can now be built at a larger scale. Expect admins who hit a simulation or site-selection ceiling to revisit those policies, and expect compliance teams to use the SIT summaries and the daily processing chart to judge whether a policy is working.

If nobody acts, the notice says existing policies continue as they are. The practical consequence of acting is that a policy covering more sites can label more content once turned on, so the same simulation and review discipline applies at larger volumes.

## Risk assessment

**Data exposure**
- Larger policies reach more SharePoint content. Microsoft's notice says the change expands processing capacity rather than changing labeling behaviour, so the exposure comes from the scope you choose, not from the update itself.
- Learn states that a policy cannot be turned on for labeling if simulation matched more than 20,000,000 files, and that this maximum applies to simulation mode only. Narrow the policy and rerun simulation in that case.

**Security & identity**
- No new role is described. Learn lists Compliance Administrator or Compliance Data Administrator as the roles needed to turn a policy on after simulation, and Compliance Administrator, Compliance Data Administrator, Information Protection Admin or Information Protection Analyst for the review pages.
- Learn notes that for organisations using administrative units in a policy, SharePoint must use the **All** default and cannot use **Included** or **Excluded**; confirm how this interacts with the larger site limits in such tenants.

**Autonomy & actions**
- Auto-labeling applies labels without a user acting. Learn states a tenant-wide ceiling of 500,000 automatically labeled SharePoint and OneDrive files per day across all policies, described as not a guaranteed rate, so larger scopes can take longer to complete.

**Change & support**
- Microsoft says existing policies need no modification. The reporting changes may alter what your reviewers see, so update runbooks that reference the previous views.
- Learn lists auditing being turned on for Microsoft 365 as required for simulation.

## Cost and licensing

No separate licence or meter is published for these enhancements. The Learn page on automatically applying sensitivity labels says service-side auto-labeling (SharePoint, OneDrive, Exchange) is defined by the Client and service-side automatic sensitivity labeling entry in the feature matrix, and that client-only entitlements do not establish service-side entitlement. In the [Microsoft Purview service description](https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description#microsoft-purview-information-protection-sensitivity-labeling), that row is Included for Microsoft 365 E5. The auto-labeling page's standalone Azure Information Protection Premium P2 listing is for client-side auto-labeling, not proof of service-side entitlement.

The notice does not mention any charge. The indirect cost is admin time to revisit constrained policies and update reporting processes. Whether any of the new reports needs a different licence is not yet published.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform. The record does not list GCC, GCC High or DoD, which is a record fact and not a statement that the features are unavailable there.

The notice says the enhancements arrive automatically as the rollout reaches an organisation and cover SharePoint targeting, simulation capacity and reporting. Learn states auto-labeling is not available in all regions because of a backend Azure dependency; where a tenant cannot support it, the **Auto-labeling** page is not visible in the Microsoft Purview portal.

## Governance guidance

### Before rollout
- Inventory auto-labeling policies that were constrained by the previous simulation or site limits, using Solutions > Information Protection > Policies > Auto-labeling policies in the Microsoft Purview portal.
- Confirm that the roles you need are assigned: Compliance Administrator or Compliance Data Administrator to turn policies on, and one of the review-page roles for reporting.
- Check whether any policy in your tenant uses administrative units, because Learn restricts SharePoint location options for those policies.

### At rollout
- Test any enlarged policy in simulation first and preserve results you need before rerunning, as Learn advises.
- Evaluate whether sites can now be added by explicit selection (up to 1,000 in the portal) or by an adaptive scope, and filter with the SiteTemplate property where a scope should cover only some site types.

### After rollout
- Watch the Message center and the Learn auto-labeling page for further timeline changes.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which SharePoint sites an auto-labeling policy targets by explicit selection</strong><br><small>Tenant</small><br><small class="controls__note">Security &amp; Compliance PowerShell. Learn gives 1,000 explicitly selected sites per policy in the portal.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Policies › Auto-labeling policies › Create auto-labeling policy <a href="https://learn.microsoft.com/purview/apply-sensitivity-label-automatically" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AutoSensitivityLabelPolicy -Identity &lt;AutoLabelingPolicyName&gt; -AddSharePointLocation $spoLocations -ApplySensitivityLabel &lt;Label&gt; -Mode TestWithoutNotifications</code> <a href="https://learn.microsoft.com/purview/apply-sensitivity-label-automatically" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Dynamic SharePoint site targeting for auto-labeling with an adaptive scope</strong><br><small>Tenant</small><br><small class="controls__note">Scope Manager role creates the scope. Learn gives 50,000 sites per SharePoint adaptive scope for auto-labeling policies.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Adaptive scopes <a href="https://learn.microsoft.com/purview/purview-adaptive-scopes" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-AutoSensitivityLabelPolicy -Name &lt;AutoLabelingPolicyName&gt; -SharePointAdaptiveScopes &lt;AdaptiveScope&gt; -ApplySensitivityLabel &lt;Label&gt; -Mode TestWithoutNotifications</code> <a href="https://learn.microsoft.com/purview/apply-sensitivity-label-automatically" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Creating or editing policies and scopes needs the roles Learn names: Compliance Administrator or Compliance Data Administrator to turn a policy on after simulation, and the Scope Manager role (in role groups including Compliance Administrator) to create an adaptive scope. Explicit site selection is capped at 1,000 per policy in the portal; Learn states that associating an adaptive scope by PowerShell does not increase the portal limit but replaces static site lists with dynamic membership.

To review activity, go to Solutions > Information Protection > Policies > Auto-labeling policies, select a policy, then select View details. Learn describes the Overview, Labeled items and Labeling failures tabs and an Insights tab summarising detected sensitive information types. The controls above are general auto-labeling controls, not switches for this rollout.

## Open questions

- Is the notice's 30-day chart of files processed per day the same view as the **Labeling activity overview** chart that Learn describes, and where does each appear in the portal?
- Do the new SIT detection summaries and processing visibility require any licence beyond the eligible service-side auto-labeling licences? Watch the Microsoft Purview service description and the Learn auto-labeling page.
- Will the new SiteTemplate filtering for policy configuration be documented as a policy-level setting, or does it remain an adaptive scope property as Learn describes it today?
- Will Microsoft give a further timeline update, given general availability moved from late October to mid-November 2026? Watch MC1469958 in the Message center.

<!-- rationale
risk: Low. Microsoft's notice says existing auto-labeling policies keep working unchanged and the update expands processing capacity rather than changing labeling behaviour; the exposure that remains is larger policies you choose to build.
cost: Low. The only cost the sources show is admin time to revisit policies. Microsoft has not published separate licensing for these enhancements; service-side auto-labeling needs eligible service-side auto-labeling licences.
impact: Low. Compliance and information protection admins notice the new limits and reports; Microsoft's notice expects no impact on end users.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: Solutions > Information Protection > Policies > Auto-labeling policies > Create auto-labeling policy is the portal entry point for explicit SharePoint targeting. | Found: Sign in to the Microsoft Purview portal ... **Solutions** > **Information Protection** > **Policies** > **Auto-labeling policies**. ... Select **+ Create auto-labeling policy**. | Fix: The path stops at the creation wizard. Extend it to 'Solutions > Information Protection > Policies > Auto-labeling policies > Create auto-labeling policy > Automatically apply label only > Choose info you want this label applied to > Custom > Custom policy > Choose a label to auto-apply > Assign admin units > Choose locations where you want to apply the label > SharePoint > Included', following https://learn.microsoft.com/purview/apply-sensitivity-label-automatically#creating-an-auto-labeling-policy. | Source: https://learn.microsoft.com/purview/apply-sensitivity-label-automatically
- [supported, minor] controls[1].ui; Governance controls table / admin-path: Settings > Roles and scopes > Adaptive scopes opens the portal page for configuring adaptive scopes. | Found: Sign in to the Microsoft Purview portal > **Settings** > **Roles and scopes** > **Adaptive scopes**. ... On the **Adaptive scopes** page, select **+ Create scope**. | Fix: The path stops on the scope-list page. Extend it to 'Settings > Roles and scopes > Adaptive scopes > Create scope > Full directory > SharePoint sites > Advanced query builder' to reach the documented SharePoint membership-query control at https://learn.microsoft.com/purview/purview-adaptive-scopes#how-to-configure-an-adaptive-scope. | Source: https://learn.microsoft.com/purview/purview-adaptive-scopes
- [contradicted, minor] Governance guidance: Before rollout and At rollout; Governance controls table / consistency: Every control the governance checklist asks administrators to check is represented in the controls table. | Found: Checklist: 'Confirm that the roles you need are assigned'; 'Check whether any policy in your tenant uses administrative units'; 'Test any enlarged policy in simulation first'. The table has only explicit site selection and adaptive-scope targeting rows. | Fix: The role-assignment check, policy administrative-unit check and simulation step have no corresponding controls-table rows. Remove those three checklist bullets if strict checklist/table alignment is required; do not add control rows as part of this correction.
-->
