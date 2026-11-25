---
title: "Microsoft Purview Insider Risk Management: recommended thresholds in the policy wizard"
slug: "microsoft-purview-compliance-portal-insider-risk-management-recommended-thresholds"
roadmapId: 477363
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans tailored recommended thresholds for built-in indicators in the Insider Risk Management policy wizard. Policy authors tuning alert volume are affected; no administrator action is needed yet."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "March CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "The Microsoft Purview service description lists Insider Risk Management as Included for Microsoft 365 E5/A5/G5, Microsoft Purview Suite and Microsoft 365 E5/A5/F5/G5 Insider Risk Management. Nothing specific to this feature is published."
audiences: ["compliance","security"]
tags: ["insider-risk-management","purview","analytics","gcc","gcc-high","dod"]
sources:
  - title: "Configure policy indicators in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators"
    kind: "learn"
  - title: "Enable analytics in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-settings-analytics"
    kind: "learn"
  - title: "Get started with Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-configure"
    kind: "learn"
  - title: "Assign permissions in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    kind: "learn"
  - title: "Add-RoleGroupMember"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Plan for Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-plan"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 477363"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=477363"
    kind: "roadmap"
videos: []
related: ["insider-risk-management","microsoft-purview-compliance-portal-insider-risk-management-policy-tuning-analysis-for-pri","microsoft-purview-insider-risk-management-policy-recommendation-panel-in-irm","auditing"]
controls:
  - governs: "Whether insider risk analytics, the prerequisite for the Learn-documented threshold recommendations, is on"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Insider Risk Management > Insider risk settings > Analytics"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-settings-analytics"
    api: null
    note: "Describes the related preview. Role groups: Insider Risk Management, Insider Risk Management Admins or Microsoft 365 Global admin."
  - governs: "Whether a policy uses recommended thresholds for its built-in indicators"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Insider Risk Management > Policies > Create policy > template > Indicators > Apply thresholds specific to your users' activity"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators"
    api: null
    note: "Describes the real-time analytics preview. Needs at least one built-in indicator and the Include all users and groups scope for the impact graph."
  - governs: "Who can configure Insider Risk Management policies and settings"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and groups > Roles groups > Insider Risk Management > Edit > Choose users"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"Insider Risk Management\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "The Insider Risk Management Admins role group also configures policies and settings. Role changes can take up to 30 minutes to apply."
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2025-09-02T23:15:02"
changes:
  - date: "2026-11-25"
    note: "New briefing: recommended thresholds for built-in indicators in the Insider Risk Management policy wizard, with the related Learn preview, roles and licensing."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 57 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 57
  confirmed: 53
  unconfirmed: 1
  contradicted: 3
  attempts: 1
  hash: "b23ed0cc927e6d6a85cce6e20554874d"
---

## What's changing

Microsoft plans to give administrators with the appropriate permissions tailored recommended thresholds for all the built-in indicators in the Insider Risk Management policy wizard. The roadmap item says the aim is to let organisations fine-tune their insider risk policies and get an optimal number of alerts.

Microsoft Learn does not describe a feature by this name yet. It does document a related capability labelled preview: real-time analytics recommendations for indicator thresholds. When analytics is turned on, the **Apply thresholds specific to your users' activity** option is enabled on the **Indicators** page of the policy workflow, and Insider Risk Management gives threshold recommendations based on the previous 10 days of user activity in the organization. If a policy author selects **Choose your own thresholds**, the defaults are based on recommended values for the organisation instead of the built-in defaults, and the page shows a gauge, a top five indicator list and per-indicator insights. Microsoft has not said whether the roadmap item is this preview reaching general availability, so treat the Learn description as the nearest documented behaviour, not as the final design.

The roadmap record gives the status as In development with a target of March CY2026, for Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, on the web, at General Availability. The record was last modified on 2 September 2025. As of 25 November 2026 the status is still In development, so the target month has passed without a status change in the record.

## Why it matters

Alert volume is the main running cost of an Insider Risk Management deployment: thresholds set too low bury analysts, and thresholds set too high hide real activity. Recommendations sized to the organisation's own recent activity replace guesswork with an estimate of how many users would cross each threshold, which is the number a service owner needs when agreeing analyst capacity.

Microsoft has not stated what happens on arrival, so no source says existing policies or their thresholds change. The wiki's reading is that existing policies keep the thresholds they have until someone edits them, and that the useful preparation is to decide who will tune policies and whether the analytics prerequisite is acceptable to the organisation.

## Risk assessment

**Data exposure**

- Learn's description of the related preview says analytics scans the Microsoft 365 audit logs, Exchange Online and Microsoft Entra ID, plus the Microsoft 365 HR connector if configured, and returns results as aggregated and anonymised user activity that reviewers can't use to identify usernames. The role groups that can access analytics insights are limited by the controls table below.

**Security & identity**

- Configuring policies and settings is open to the Insider Risk Management and Insider Risk Management Admins role groups. Administrators scoped by administrative units are listed as "Not allowed, if scoped" for accessing analytics insights, so a scoped policy author may not see the data the recommendations rest on.

**Autonomy & actions**

- Learn describes the recommendations as options the policy author selects or adjusts in the wizard. Thresholds sized to the previous 10 days can lock in a quiet or unusual period, so a recommended value is a starting point for the policy author to review before activating the policy.

**Change & support**

- The Learn description requires at least one built-in indicator. It states that recommended thresholds are not provided for custom indicators or for variants of built-in indicators, and that real-time analytics for threshold settings isn't available for the Communication Compliance indicators at this time. The roadmap item refers to all built-in indicators, so expect support questions where the two differ.
- The impact graph is not available if a policy uses **Include specific users**; the policy must use **Include all users and groups**. After analytics is enabled, Learn says insights and recommendations can take 24 to 48 hours to appear.

## Cost and licensing

The Microsoft Purview service description lists Insider Risk Management as Included for Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW and Microsoft Defender + Purview Suite FLW, and Microsoft 365 E5/A5/F5/G5 Insider Risk Management. Learn's planning page says Microsoft offers Insider Risk Management as part of a wide selection of Microsoft 365 licensing subscriptions. Neither page has an entry for recommended thresholds, and no meter, price or add-on licence specific to this feature is published at the time of writing (November 2026).

The indirect cost is administrator time: enabling analytics, reviewing recommendations and re-tuning policies. Learn's getting started page says some Insider Risk Management indicators are only available with pay-as-you-go billing; whether that affects recommendations for those indicators is not stated.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, with the web as the platform and General Availability as the release phase. It is aimed at administrators with the appropriate permissions working in the policy wizard.

For the related preview, Learn says the user must be in the Insider Risk Management, Insider Risk Management Admins or Microsoft 365 Global admin role group to enable analytics. Real-time analytics requires insider risk analytics insights to be enabled first. Rollout mechanics and per-cloud availability for the roadmap item are not stated.

## Governance guidance

### Before rollout

- Confirm which members of the Insider Risk Management or Insider Risk Management Admins role groups will author and tune policies, and whether any are scoped by administrative units.
- Decide whether to turn on Insider Risk Management analytics, which the Learn description of the preview lists as the prerequisite, and agree with the privacy team that its scan sources are acceptable.
- List policies that rely on custom indicators, indicator variants or Communication Compliance indicators, since Learn says the preview gives no recommendations for these.

### At rollout

- Create or edit policies with **Include all users and groups** so the impact graph is available.
- Compare the gauge and the top five indicators with analyst capacity before choosing between the recommended thresholds and your own.
- Record which threshold option each policy used and the date, so later alert volumes can be explained.

### After rollout

- Check alert volume per policy in the weeks after activation and revisit thresholds that produce too many or too few alerts.
- Watch the roadmap item and the policy indicators page on Microsoft Learn for the general availability description, the default state and any change in indicator coverage.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether insider risk analytics, the prerequisite for the Learn-documented threshold recommendations, is on</strong><br><small>Tenant</small><br><small class="controls__note">Describes the related preview. Role groups: Insider Risk Management, Insider Risk Management Admins or Microsoft 365 Global admin.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Insider Risk Management › Insider risk settings › Analytics <a href="https://learn.microsoft.com/purview/insider-risk-management-settings-analytics" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a policy uses recommended thresholds for its built-in indicators</strong><br><small class="controls__note">Describes the real-time analytics preview. Needs at least one built-in indicator and the Include all users and groups scope for the impact graph.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Insider Risk Management › Policies › Create policy › template › Indicators › Apply thresholds specific to your users' activity <a href="https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can configure Insider Risk Management policies and settings</strong><br><small>Tenant</small><br><small class="controls__note">The Insider Risk Management Admins role group also configures policies and settings. Role changes can take up to 30 minutes to apply.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and groups › Roles groups › Insider Risk Management › Edit › Choose users <a href="https://learn.microsoft.com/purview/insider-risk-management-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;Insider Risk Management&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Analytics is the control that the related preview depends on: Learn says that turning it off stops the real-time analytics view when customising thresholds. Role groups decide who can enable analytics and who can configure policies. Microsoft Learn documents no separate admin switch for recommended thresholds at the time of writing (November 2026), and the wizard option itself is chosen per policy.

The Learn pages describe real-time analytics as a preview. Their paths and options describe that preview, not the final design of the roadmap item.

## Open questions

- Is the roadmap item the general availability of the real-time analytics threshold recommendations that Learn labels preview, or a different capability? Watch the policy indicators page on Microsoft Learn and the roadmap item.
- Will the released feature still require insider risk analytics to be turned on, and what is its default state on arrival?
- Will recommendations cover all built-in indicators, including the Communication Compliance indicators that Learn's preview description excludes?
- Will the feature reach GCC, GCC High and DoD together with Worldwide, as the roadmap record lists?
- Will Microsoft update the March CY2026 target, given the record shows In development in November 2026?

<!-- rationale
risk: Low. The recommendations are guidance inside the policy wizard and Learn's description of the related preview reads existing audit data. Microsoft has not stated the default, so this rates today's behaviour continuing.
cost: Low. The only cost the sources show is admin time to tune policies; Insider Risk Management is listed as included in the plans on the Microsoft Purview service description, and no price specific to this feature is published.
impact: Low. Only administrators and analysts who author Insider Risk Management policies see the recommendations; alert volume changes only if they apply them.
-->

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] Why it matters; rationale: impact / default: Existing policies keep their thresholds until someone edits them, and alert volume changes only if policy authors apply the recommendations. | Found: Searched: 'Insider Risk Management existing policies thresholds automatically change recommended thresholds rollout'; also searched 477363 default and rollout. Read roadmap, analytics, configure and policy indicators. No guarantee that existing policy thresholds remain unchanged was found. | Fix: Replace the second sentence of the second paragraph of Why it matters with 'Decide who will tune policies and whether the analytics prerequisite is acceptable to the organisation.' Remove 'alert volume changes only if they apply them' from the impact rationale. Retain the statement that Microsoft has not stated what happens on arrival.
- [contradicted, blocker] Risk assessment: Data exposure / role: The role groups that can access analytics insights are limited to those shown in the controls table. | Found: | Access analytics insights | Yes | Yes | Yes | No | No | No | | Fix: Replace the last sentence of Data exposure with 'The Insider Risk Management, Insider Risk Management Admins and Insider Risk Management Analysts role groups can access analytics insights; members scoped by administrative units cannot.' Cite https://learn.microsoft.com/purview/insider-risk-management-permissions. The analytics row's note describes enabling analytics, not every group allowed to read insights. | Source: https://learn.microsoft.com/purview/insider-risk-management-permissions
- [contradicted, blocker] controls[1].ui / admin-path: The complete route is Insider Risk Management > Policies > Create policy > template > Indicators > Apply thresholds specific to your users' activity. | Found: On the **Policy template** page, choose a policy category and then select the template for the new policy. | Fix: Narrow controls[1].ui.path to 'Insider Risk Management > Policies' and set its docs to https://learn.microsoft.com/purview/insider-risk-management-configure, which documents that route. Retain its existing preview and prerequisite note, appending "The policy workflow offers Apply thresholds specific to your users' activity." The current purported full wizard route omits the policy-category choice and template-dependent intermediate choices; a route ending on Policies avoids inventing one universal wizard sequence. | Source: https://learn.microsoft.com/purview/insider-risk-management-configure
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: At rollout and After rollout; Governance controls / consistency: Every control the checklist tells readers to check or configure appears in the controls table. | Found: Checklist: 'Create or edit policies with Include all users and groups' and 'Check alert volume per policy'. Table: analytics enablement, recommended thresholds and role membership only. | Fix: The At rollout instruction to configure policy user scope and the After rollout instruction to monitor alert volume have no corresponding controls rows. Remove those two checklist bullets to align the checklist with the existing table; do not add unverified rows.
-->
