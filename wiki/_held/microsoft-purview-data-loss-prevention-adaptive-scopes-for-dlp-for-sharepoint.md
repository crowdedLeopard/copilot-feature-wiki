---
title: "Microsoft Purview DLP: adaptive scopes for SharePoint sites"
slug: "microsoft-purview-data-loss-prevention-adaptive-scopes-for-dlp-for-sharepoint"
roadmapId: 549288
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans adaptive scopes for DLP on SharePoint: site attributes, not a hand-kept list, decide which sites a policy covers. Nothing to do yet; review the fit before the January CY2027 target."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "February CY2026"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's Purview service description lists the licences that give users the right to use DLP for Exchange Online, SharePoint Online and OneDrive for Business, including Microsoft 365 E5/A5/G5/E3/A3/G3 and Business Premium. Nothing specific to adaptive scopes is published."
audiences: ["compliance","security","m365-admin"]
tags: ["dlp","purview","sharepoint","adaptive-scopes","data-governance"]
sources:
  - title: "Data Loss Prevention policy reference"
    url: "https://learn.microsoft.com/purview/dlp-policy-reference"
    kind: "learn"
  - title: "Adaptive scopes"
    url: "https://learn.microsoft.com/purview/purview-adaptive-scopes"
    kind: "learn"
  - title: "New-DlpCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy"
    kind: "learn"
  - title: "Set-DlpCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancepolicy"
    kind: "learn"
  - title: "New-AdaptiveScope"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-adaptivescope"
    kind: "learn"
  - title: "Help prevent sharing sensitive items via SharePoint and OneDrive with external users"
    url: "https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-external"
    kind: "learn"
  - title: "Create and deploy data loss prevention policies"
    url: "https://learn.microsoft.com/purview/dlp-create-deploy-policy"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 549288"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=549288"
    kind: "roadmap"
videos: []
related: ["microsoft-purview-adaptive-scope-evaluation-control-with-recipient-and-site-owner-lifecycl","microsoft-purview-data-loss-prevention-admin-units-support-for-copilot-and-cowork-dlp","microsoft-purview-auto-labeling-scalability-policy-management-and-reporting-enhancements"]
controls:
  - governs: "Which SharePoint sites a DLP policy covers, by adaptive scope"
    scope: "site"
    ui: null
    api:
      kind: "powershell"
      call: "New-DlpCompliancePolicy -Name \"<policy name>\" -SharePointAdaptiveScopes <values>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy"
    note: "Security & Compliance PowerShell. Parameter is listed without a description of its values; Set-DlpCompliancePolicy lists no SharePoint adaptive scope parameter. In preview per the DLP policy reference."
  - governs: "Definition of a SharePoint sites adaptive scope"
    scope: "site"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Adaptive scopes > + Create scope"
      docs: "https://learn.microsoft.com/purview/purview-adaptive-scopes"
    api:
      kind: "powershell"
      call: "New-AdaptiveScope -Name \"<scope name>\" -LocationType Site -FilterConditions <hashtable>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-adaptivescope"
    note: "Needs the Scope Manager role. Cannot be created for SharePoint sites with an administrative unit selected. The reference describes scopes for retention policies, not DLP."
  - governs: "Static list of SharePoint sites a DLP policy covers (today's alternative)"
    scope: "site"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > + Create policy > Enterprise applications & devices > Custom > Assign admin units > Choose where to apply the policy > SharePoint sites"
      docs: "https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-external"
    api:
      kind: "powershell"
      call: "New-DlpCompliancePolicy -Name \"<policy name>\" -SharePointLocation \"<site URL>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy"
    note: "Existing way to scope DLP to named sites; the policy reference gives up to 100 sites. Does not evaluate site attributes."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-08-27T22:38:48"
changes:
  - date: "2026-11-22"
    note: "First briefing for this roadmap item."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 50 statements contradicted, 3 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 50
  confirmed: 45
  unconfirmed: 3
  contradicted: 2
  attempts: 1
  hash: "bd4128ed680ba981a857a7591e30d131"
---

## What's changing

The roadmap item describes adaptive scopes for SharePoint in Microsoft Purview DLP: administrators target a DLP policy at sites by attributes such as site URL, site name or custom site metadata, instead of listing sites by hand. The item says adaptive scopes continuously evaluate site properties, auto-include or exclude locations as they change, and remove the 100-site static policy limit.

Microsoft Learn has no page dedicated to this feature at the time of writing (November 2026), so behaviour beyond the following is the roadmap's description. The Data Loss Prevention policy reference lists, for the SharePoint location, "site locations and, in preview, adaptive scopes at the policy level". It adds that a policy scoped to an administrative unit that includes SharePoint sites applies to all sites in that unit, with no further scoping. It also says DLP supports scoping policies to up to 100 sites; the page does not say whether that figure applies to adaptive scopes.

The Learn page on adaptive scopes describes a SharePoint sites scope type that can query Site URL, Site name, Site template and custom properties (RefinableString00 to RefinableString99). It says these queries run daily, where the roadmap says scopes evaluate continuously; both are reported here. That page names retention and auto-labeling policies for SharePoint site scopes, not DLP.

The record gives the status as In development, with release phases General Availability and Preview, a preview date of February CY2026 and a target date of January CY2027. The record lists Worldwide (Standard Multi-Tenant) and the Web platform. These dates are Microsoft's targets.

## Why it matters

If you run DLP over SharePoint, scoping is where coverage is won or lost. A policy aimed at named sites is only as complete as the list someone maintains; an adaptive scope moves that work into a query, so the accuracy of the query becomes the control. Expect the effort to shift from editing site lists to designing and testing site attributes.

Microsoft has not stated what happens on arrival, and no source says existing policies change, so treat existing static scoping as continuing until you choose otherwise. Our view: pilot adaptive scopes on a new policy in simulation mode, because a mistyped value is not caught when the scope is saved.

## Risk assessment

**Data exposure**

- A query that is wrong or too narrow leaves matching sites outside the policy. Learn says the scope query runs daily and, because it does not run immediately, "there's no validation that you typed in the value correctly". Run new policies in simulation mode first, as Learn's deployment guidance recommends.
- Sites that start to match a query come under the policy's actions without a DLP administrator editing the policy, according to the roadmap's description of auto-including locations. Review the policy's actions with that in mind.

**Security & identity**

- A scope that uses custom site properties depends on those values. Confirm who can change the property a query relies on, because changing it would change which sites match.
- Creating a scope needs a role group with the Scope Manager role, such as Compliance Administrator; creating DLP policies needs one of the role groups Learn lists. Keep the two groups of people deliberately separate or deliberately the same.

**Autonomy & actions**

- Membership is recalculated by the query without further administrator action. Learn says the queries run daily, so a new or renamed site may not be covered until the next run.

**Change & support**

- The feature is described as in preview on Learn and In development on the roadmap, so documentation may still change. Plan support notes around what is documented today, not the final design.
- A SharePoint sites adaptive scope cannot be created with an administrative unit selected, according to Learn, and a DLP policy scoped to an administrative unit that includes SharePoint sites allows no further scoping. Do not combine the two designs.

## Cost and licensing

**Licence.** The Microsoft Purview service description lists the licences that provide the rights to use Data Loss Prevention for Exchange Online, SharePoint Online and OneDrive for Business: Microsoft 365 E5/A5/G5/E3/A3/G3, Microsoft 365 Business Premium, SharePoint Online Plan 2, OneDrive for Business (Plan 2) and Exchange Online Plan 2, among others it lists. Adaptive scopes for DLP are a scoping option inside that policy type; no licence or meter specific to adaptive scopes is published at the time of writing.

**Meter.** No meter is documented for this feature on the pages Microsoft publishes for DLP licensing or adaptive scopes.

**Limits.** The roadmap says adaptive scopes remove the 100-site static policy limit. Learn's DLP policy reference states the 100-site figure for scoping policies and does not say whether it applies to adaptive scopes. For auto-labeling policies, the adaptive scopes page gives 50,000 sites per policy for a SharePoint adaptive scope; no figure for DLP is published.

**Indirect costs.** Admin time to design and test site queries, and possibly SharePoint configuration for custom site properties, which Learn says might be needed.

## Scope

**Who and what is covered.** SharePoint sites under DLP policies, selected by adaptive scope. The roadmap names site URL, site name and custom site metadata as attributes; Learn's SharePoint sites scope type lists Site URL, Site name, Site template and custom properties RefinableString00 to RefinableString99.

**Roles.** Any role group with the Scope Manager role can create an adaptive scope. For DLP policies, Learn lists membership of the Compliance administrator, Compliance data administrator, Information Protection, Information Protection Admin or Security administrator role groups.

**Clouds and platform.** The record lists Worldwide (Standard Multi-Tenant) and Web.

**Rollout and prerequisites.** The record gives a target of January CY2027, with a preview date of February CY2026. Learn says custom site properties might need additional SharePoint configuration. Microsoft has not stated how the feature arrives or whether anything is on by default.

## Governance guidance

### Before rollout

- List the DLP policies that are scoped to specific SharePoint sites today, and note which are close to the 100-site figure in the policy reference (controls table, static site list row).
- Decide which site attributes (URL pattern, name, template or a custom RefinableString property) should define each policy's coverage, and ask the SharePoint admin whether custom properties need extra configuration.
- Check who holds the Scope Manager role and who may create DLP policies, using the roles named in Scope.
- Check whether any DLP policy is scoped to an administrative unit that includes SharePoint sites; no further site scoping is possible there.

### At rollout

- Create the SharePoint sites adaptive scope in the Microsoft Purview portal (controls table, scope definition row).
- Attach the scope to a new test DLP policy and run it in simulation mode, then review DLP alerts and Activity explorer, as Learn's deployment guidance describes.
- Compare the sites you expect to be covered with the activity you see, and correct the query before turning the policy on.

### After rollout

- Re-check coverage after any change to site names, URLs or the properties a scope relies on, allowing for the daily query run Learn describes.
- Watch the roadmap item and the DLP policy reference for the preview label, the limit wording and any default being stated.
- Revisit static policies near the 100-site figure once Microsoft confirms how adaptive scopes are counted.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which SharePoint sites a DLP policy covers, by adaptive scope</strong><br><small>Site</small><br><small class="controls__note">Security &amp; Compliance PowerShell. Parameter is listed without a description of its values; Set-DlpCompliancePolicy lists no SharePoint adaptive scope parameter. In preview per the DLP policy reference.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpCompliancePolicy -Name &quot;&lt;policy name&gt;&quot; -SharePointAdaptiveScopes &lt;values&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Definition of a SharePoint sites adaptive scope</strong><br><small>Site</small><br><small class="controls__note">Needs the Scope Manager role. Cannot be created for SharePoint sites with an administrative unit selected. The reference describes scopes for retention policies, not DLP.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Adaptive scopes › + Create scope <a href="https://learn.microsoft.com/purview/purview-adaptive-scopes" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-AdaptiveScope -Name &quot;&lt;scope name&gt;&quot; -LocationType Site -FilterConditions &lt;hashtable&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-adaptivescope" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Static list of SharePoint sites a DLP policy covers (today's alternative)</strong><br><small>Site</small><br><small class="controls__note">Existing way to scope DLP to named sites; the policy reference gives up to 100 sites. Does not evaluate site attributes.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › + Create policy › Enterprise applications &amp; devices › Custom › Assign admin units › Choose where to apply the policy › SharePoint sites <a href="https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-external" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpCompliancePolicy -Name &quot;&lt;policy name&gt;&quot; -SharePointLocation &quot;&lt;site URL&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The adaptive scope is defined in one place and attached to a policy in another, so two roles are involved: Scope Manager to create the scope, and a DLP policy role to attach it.

At the time of writing (November 2026) Microsoft Learn does not document where an adaptive scope is chosen in the DLP policy wizard. The New-DlpCompliancePolicy reference lists -SharePointAdaptiveScopes without a description of the values it takes, and the Set-DlpCompliancePolicy reference lists adaptive scope parameters for Exchange, OneDrive, Teams and endpoint locations but none for SharePoint. How to change the scopes on an existing policy by script is therefore not documented.

The New-AdaptiveScope reference describes adaptive scopes as used in retention policies and retention label policies, and the Learn adaptive scopes page names retention and auto-labeling policies for SharePoint site scopes. Whether that scope definition is the one DLP uses is not stated; the controls table gives it because the roadmap describes the same attributes.

## Open questions

- What is the default state on arrival, and will any existing DLP policy scoped to SharePoint sites change? Watch Message center and the roadmap item.
- Does the 100-site limit apply to adaptive scopes in DLP, and is there a maximum number of sites per policy, as there is for auto-labeling (50,000)? Watch the DLP policy reference.
- How often are adaptive scopes evaluated for DLP: continuously, as the roadmap says, or daily, as the adaptive scopes page says for queries?
- Where are adaptive scopes selected in the DLP policy wizard, and how are they changed on an existing policy by PowerShell? Watch the DLP policy creation pages and the Set-DlpCompliancePolicy reference.
- Will adaptive scopes for DLP carry any licence or meter beyond the DLP licences already listed? Watch the Microsoft Purview service description.

<!-- rationale
risk: Medium. Microsoft has not stated a default, so today's static scoping is assumed to carry on; once a scope is used, a query that misses a site leaves it outside the policy, and Learn says scope queries run daily and typed values are not validated.
cost: Low. No licence or meter specific to adaptive scopes is published; DLP for SharePoint sits under licences Microsoft lists, so the known cost is admin time to design and test scope queries.
impact: Low. Administrators who write DLP policies and adaptive scopes see the change; no source says what users of the affected sites will notice.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] controls[0].api; Governance guidance: At rollout / command: New-DlpCompliancePolicy -Name "<policy name>" -SharePointAdaptiveScopes <values> is documented as the operation that attaches SharePoint adaptive scopes. | Found: Searched: SharePointAdaptiveScopes scope values New-DlpCompliancePolicy; opened its reference. Syntax lists the parameter, but its description is '{{ Fill SharePointAdaptiveScopes Description }}'; no passage explains what values identify a scope or what the parameter does. | Fix: Set controls[0].api to null and retain the note that New-DlpCompliancePolicy lists -SharePointAdaptiveScopes but does not describe its values or operation. Replace 'Attach the scope to a new test DLP policy' with 'Confirm Microsoft's documented method for attaching the scope before testing a new DLP policy.'
- [contradicted, blocker] controls[2].ui / admin-path: The static DLP wizard path needs only one Custom selection between Enterprise applications & devices and Assign admin units. | Found: Select Enterprise applications & devices. Select Custom from both the Categories list and the Regulations list. ... Accept the default Full directory on the Assign admin units page. | Fix: Replace controls[2].ui.path with 'Data loss prevention > Policies > + Create policy > Enterprise applications & devices > Categories > Custom > Regulations > Custom > Assign admin units > Full directory > Choose where to apply the policy > SharePoint sites'. The cited procedure requires both Custom choices. | Source: https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-external
- [unsupported, blocker] Risk assessment: Autonomy & actions; Governance guidance: After rollout; rationale: risk / applicability: The general adaptive scopes page's daily query schedule applies to SharePoint DLP and can be used when allowing for coverage changes. | Found: Searched: DLP SharePoint adaptive scopes daily evaluation New-AdaptiveScope site scope; read Adaptive scopes, DLP policy reference and roadmap. The daily page lists retention and auto-labeling, not DLP; the roadmap describes continuous evaluation. | Fix: Replace the Autonomy & actions timing sentence with 'The roadmap describes automatic membership changes; Microsoft's DLP evaluation interval is not yet documented.' Remove 'allowing for the daily query run Learn describes' from After rollout and remove daily timing as a verified DLP premise from the risk rationale. Keep the explicitly attributed background comparison and open question.
- [unsupported, major] Why it matters; Risk assessment: Data exposure; rationale: risk / behaviour: A mistyped query value is not validated when saving the new DLP adaptive scope. | Found: Searched: DLP SharePoint adaptive scopes daily evaluation New-AdaptiveScope site scope; read Adaptive scopes and DLP policy reference. The validation statement is on the general page that does not name DLP; no DLP-specific validation behaviour was found. | Fix: Remove 'because a mistyped value is not caught when the scope is saved' from Why it matters. In Data exposure, replace the validation premise with 'The general adaptive scopes page warns that typed values are not immediately validated, but it does not state whether DLP uses this configuration.' Remove unvalidated values as a confirmed DLP premise from the risk rationale.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing / behaviour: The general adaptive scopes page says dynamic queries run daily. | Found: These dynamic queries run daily against the attributes or properties that you specify for the selected scope. ... It can take up to five days for the queries to fully populate and changes aren't immediate. | Fix: Add to the background description: 'The same page says queries can take up to five days to fully populate and recommends waiting a few days before adding a newly created scope to a policy.' Keep this explicitly about the general adaptive scopes documentation, not confirmed DLP timing. | Source: https://learn.microsoft.com/purview/purview-adaptive-scopes
- [supported, minor] controls[1].ui / admin-path: Microsoft Purview portal > Settings > Roles and scopes > Adaptive scopes > + Create scope reaches adaptive scope creation. | Found: Sign in to the Microsoft Purview portal > Settings > Roles and scopes > Adaptive scopes. On the Adaptive scopes page, select + Create scope. | Fix: Keep the printed path and add to the row note: 'In the wizard, keep Full directory and select SharePoint sites as the scope type before building the property query.' The path currently ends at entry to the wizard rather than the site-scope configuration. | Source: https://learn.microsoft.com/purview/purview-adaptive-scopes
- [contradicted, minor] Governance guidance: Before rollout and At rollout / consistency: Every control the checklist asks administrators to check or set has a corresponding controls-table row. | Found: Checklist: 'Check who holds the Scope Manager role'; 'Check whether any DLP policy is scoped to an administrative unit'; 'run it in simulation mode ... review DLP alerts and Activity explorer'. Rows: adaptive assignment, scope definition, static site list. | Fix: Remove the checklist bullets asking readers to check role assignments and administrative-unit assignments; those facts can remain in Scope and Risk assessment. Remove the simulation-mode and monitoring instruction from the At rollout checklist, retaining the already-supported simulation advice in Risk assessment. Do not add control rows.
-->
