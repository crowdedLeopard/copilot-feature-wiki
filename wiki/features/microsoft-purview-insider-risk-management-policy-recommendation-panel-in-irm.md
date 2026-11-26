---
title: "Microsoft Purview Insider Risk Management: Policy Recommendation panel"
slug: "microsoft-purview-insider-risk-management-policy-recommendation-panel-in-irm"
roadmapId: 560600
topic: "governance"
products: ["Microsoft Purview"]
summary: "Insider Risk Management gains a Policy Recommendation panel on the Policies page that points to missing or high-value insider risk policies. Microsoft says it is on by default and needs no action; preview is targeted for January CY2027."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "February CY2027"
previewDate: "January CY2027"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "The panel is part of Insider Risk Management, which Learn says needs a supported Microsoft 365 subscription; some indicators also need pay-as-you-go billing. A licence or meter specific to the panel is not yet published."
audiences: ["security","compliance","change-adoption"]
tags: ["purview","insider-risk-management","analytics"]
sources:
  - title: "Microsoft 365 Roadmap 560600"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=560600"
    kind: "roadmap"
  - title: "MC1387681: (Updated) Microsoft Purview | Insider Risk Management: Policy recommendation panel in IRM"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1387681"
    kind: "message-center"
  - title: "Plan for Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-plan"
    kind: "learn"
  - title: "Get started with Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-configure"
    kind: "learn"
  - title: "Assign permissions in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    kind: "learn"
  - title: "Enable analytics in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-settings-analytics"
    kind: "learn"
  - title: "Create and manage Insider Risk Management policies"
    url: "https://learn.microsoft.com/purview/insider-risk-management-policies"
    kind: "learn"
  - title: "Add-RoleGroupMember"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember?view=exchange-ps"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Whether the Policy Recommendation panel is shown"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft's notice MC1387681 says the panel is enabled by default. Learn documents no switch for it at the time of writing (November 2026)."
  - governs: "Insider risk analytics scanning, the documented source of policy recommendations today"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Insider Risk Management > Insider risk settings > Analytics"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-settings-analytics"
    api: null
    note: "Existing capability. Whether the new panel relies on this setting is not stated. Requires Insider Risk Management, Insider Risk Management Admins or Microsoft 365 Global admin role group membership."
  - governs: "Who can configure Insider Risk Management policies and settings, through role group membership"
    scope: "group"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and groups > Roles groups > Insider Risk Management > Edit > Choose users"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"Insider Risk Management\" -Member <user-UPN>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember?view=exchange-ps"
    note: "Which role groups see the panel is not documented. Role groups Insider Risk Management and Insider Risk Management Admins can configure policies and settings. API: Security & Compliance PowerShell."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-09-29T23:05:21"
changes:
  - date: "2026-11-19"
    note: "First briefing for roadmap item 560600: Policy Recommendation panel in Insider Risk Management, with the notice's updated January and February CY2027 timeline."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 64 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected the role group control: the admin path now ends at Edit > Choose users, and the Add-RoleGroupMember cmdlet is given as its PowerShell equivalent."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 64 statements not yet confirmed"
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 80 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 80
  confirmed: 78
  unconfirmed: 1
  contradicted: 1
  attempts: 0
  hash: "dae66537f11fd742af272b15db166beb"
---

## What's changing

Microsoft is adding a Policy Recommendation panel to Microsoft Purview Insider Risk Management (IRM). The roadmap item says IRM will provide guidance on what protections are missing or which policy configurations deliver the most incremental value, so that customers get more complete coverage against insider risk.

Microsoft's notice MC1387681 (updated 29 September 2026) says the panel appears on the Policies page, analyses existing policies, identifies potential gaps in coverage and recommends policies for risks such as data leakage, data theft and risky AI usage. The notice says the feature is enabled by default and available automatically as part of the rollout, that existing policies and configurations remain unchanged, and that there is no impact to user workflows.

Microsoft Learn does not describe this panel yet at the time of writing (November 2026), so the behaviour above is the roadmap's and the notice's description. Learn does document an existing, related capability: insider risk analytics, which scans the audit log and other sources and gives policy recommendations from its results (see the controls table).

The roadmap item is In development. It targets Preview in January CY2027 and General Availability in February CY2027, for Worldwide (Standard Multi-Tenant) on the web. The notice gives Public Preview as rolling out mid-January 2027 through late January 2027, and General Availability (Worldwide) as rolling out mid-February 2027 and expected to complete by late February 2027. It sets no act-by date.

## Why it matters

This is a new view over your existing insider risk policies, not a new detection. If nobody acts, Microsoft's notice says the panel arrives enabled and existing policies stay as they are, so the realistic outcome is that administrators start seeing suggestions to add policies. The wiki's view is that the first weeks matter: a recommendation to add a policy for risky AI usage or data theft is a prompt to change what your organisation monitors, which has privacy, legal and HR implications beyond the Purview team.

The notice's own compliance answers state that the feature introduces additional processing of customer data signals and uses analytics-driven intelligence. Agree in advance who may act on a recommendation, so that policies are not created simply because the panel suggested them.

## Risk assessment

**Data exposure**
- Microsoft's notice says the panel analyses existing policy configurations and organisational signals within IRM, which it describes as additional processing of customer data signals. Which signals the panel reads, and where they are stored, is not documented yet.
- Microsoft Learn says IRM pseudonymises users by default and uses role-based access controls and audit logs for user-level privacy; the notice says nothing that changes this for the panel.

**Security & identity**
- Learn lists who can configure IRM policies and settings in its permissions table. Which role groups can see the Policy Recommendation panel is not yet documented, so check what your Insider Risk Management role group members will see on arrival.
- Learn says restricted administrators (those assigned administrative units) have limited access to IRM settings, policies and user data. Whether the panel respects that scoping is not yet documented.

**Autonomy & actions**
- The notice describes recommendations only, and says existing policies and configurations remain unchanged. Nothing in the notice or roadmap says the panel creates or edits a policy without an administrator.

**Change & support**
- The panel is on by default according to the notice, and Learn documents no switch to turn it off (see the controls table). Administrators who are not ready will still see it on the Policies page.
- Recommendations may lead teams to ask for new policies. Decide who triages them before the January CY2027 preview begins.

## Cost and licensing

Learn says IRM is offered as part of a wide selection of Microsoft 365 licensing subscriptions (Plan for Insider Risk Management), and that administrators need a supported subscription with the appropriate licences assigned to users (Get started with Insider Risk Management). The roadmap item and Microsoft's notice name no licence for the panel itself, so the wiki treats it as part of IRM and rates the cost as the administrator time to review recommendations.

Learn also says some IRM indicators are only available if you enable the pay-as-you-go billing model, and that features using it show usage in the Usage center in the Microsoft Purview portal. Whether the panel or its recommendations use a meter is not yet published, and neither is any licence or price specific to the panel.

If a recommendation suggests a policy that uses a pay-as-you-go indicator, that policy, not the panel, is what Learn ties to billing.

## Scope

The roadmap record lists Microsoft Purview, Worldwide (Standard Multi-Tenant) and the web platform, with no other clouds. Absence from the record's cloud list is not a statement that the feature is unavailable elsewhere.

The notice names IRM administrators and organisations using IRM policies as the people affected, and says the panel is on the Policies page. Learn says you must be assigned to a role or role group such as Insider Risk Management or Insider Risk Management Admins for Insider Risk Management to appear as a menu option in Microsoft Purview. Which role groups see the panel is not yet documented. The notice says no action is required and that existing policies are unchanged.

## Governance guidance

### Before rollout
- Confirm who holds the Insider Risk Management and Insider Risk Management Admins role groups in your tenant, and remove anyone who does not need to see policy gaps (Microsoft Purview portal role groups row in the controls table).
- Agree with privacy, legal and HR stakeholders who may approve a new policy before an administrator creates one from a recommendation.
- Check whether insider risk analytics is already turned on, since it is the documented source of policy recommendations today (analytics setting row in the controls table).
- Tell security and compliance teams that the panel is planned for Preview in January CY2027, as the notice recommends.

### At rollout
- Open the Policies page in the Insider Risk Management solution when the panel appears and read each recommendation before acting.
- Record which recommendations you accept and which you decline, and the reason.
- Create a policy only after the stakeholders agreed above have approved it.

### After rollout
- Review the panel on a regular schedule and update internal governance or risk management processes as the notice recommends.
- Re-check whether Microsoft Learn has documented a switch for the panel, and update the controls table when it has.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Policy Recommendation panel is shown</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft's notice MC1387681 says the panel is enabled by default. Learn documents no switch for it at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Insider risk analytics scanning, the documented source of policy recommendations today</strong><br><small>Tenant</small><br><small class="controls__note">Existing capability. Whether the new panel relies on this setting is not stated. Requires Insider Risk Management, Insider Risk Management Admins or Microsoft 365 Global admin role group membership.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Insider Risk Management › Insider risk settings › Analytics <a href="https://learn.microsoft.com/purview/insider-risk-management-settings-analytics" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can configure Insider Risk Management policies and settings, through role group membership</strong><br><small>Group</small><br><small class="controls__note">Which role groups see the panel is not documented. Role groups Insider Risk Management and Insider Risk Management Admins can configure policies and settings. API: Security &amp; Compliance PowerShell.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and groups › Roles groups › Insider Risk Management › Edit › Choose users <a href="https://learn.microsoft.com/purview/insider-risk-management-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;Insider Risk Management&quot; -Member &lt;user-UPN&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Learn documents no setting that turns the Policy Recommendation panel off, and the notice says it is enabled by default, so role group membership is the nearest control an administrator has today. Which roles see the panel is not yet documented, so treat the role groups below as an existing control over IRM access, not as an enforcement of the panel.

The analytics setting is shown because Learn documents it as the source of policy recommendations today. Whether the new panel uses the same scan, or still works with analytics turned off, is not stated. Learn says you must be an unrestricted administrator to access analytics insights; whether the panel carries the same restriction is not stated.

Configuring policies and settings is open to members of the Insider Risk Management and Insider Risk Management Admins role groups, according to Learn's permissions table.

## Open questions

- Which role groups see the Policy Recommendation panel, and does administrative unit scoping limit it? Watch the Insider Risk Management permissions page on Microsoft Learn.
- Is there a setting, in the Microsoft Purview portal or by API, to turn the panel off or limit it? Watch the Insider Risk Management policies page and MC1387681.
- Does the panel depend on insider risk analytics being turned on, and does it use the same scan? Watch the analytics page on Microsoft Learn.
- Does the panel or its recommendations carry a licence requirement or a pay-as-you-go meter beyond the Insider Risk Management subscription? Watch the Insider Risk Management plan and Get started pages.

<!-- rationale
risk: Medium. Microsoft's notice says the panel is enabled by default and adds processing of existing signals, and Learn documents no switch for it. It changes no policy and no user workflow.
cost: Low. No charge specific to the panel is published; the known cost is administrator time to review recommendations, on top of the subscription Insider Risk Management already needs.
impact: Low. Insider Risk Management administrators see the panel; Microsoft's notice says there is no impact to user workflows and existing policies stay unchanged.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters: first sentence / behaviour: The change is not a new detection. | Found: Searched: "Policy Recommendation panel" "Insider" "detection"; read the roadmap, MC1387681, policies and analytics. They describe recommendations and additional signal processing, but do not establish that no new detection is involved. | Fix: Replace the first sentence with: "Microsoft's notice describes a new recommendation view over existing insider risk policies."
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing: final paragraph / cost: If a suggested policy uses a pay-as-you-go indicator, Microsoft ties billing to that policy's indicator processing. | Found: Insider Risk Management processes user activities corresponding to the non-Microsoft 365 indicators selected in data theft and data leak policies to generate insights, alerts, and cases. | Fix: Add https://learn.microsoft.com/purview/purview-billing-models to sources for the conditional statement about billing when a suggested policy uses pay-as-you-go indicators. | Source: https://learn.microsoft.com/purview/purview-billing-models
- [supported, minor] controls[1].ui; Governance controls table / admin-path: The analytics control is reached in Microsoft Purview through Settings > Insider Risk Management > Insider risk settings > Analytics. | Found: Select Settings in the upper-right corner of the page. 3. Select Insider Risk Management to go to the Insider Risk Management settings. 4. Under Insider risk settings, select Analytics, and then turn off the setting. | Fix: Set controls[1].ui.path and the rendered path to "Settings > Insider Risk Management > Insider risk settings > Analytics > Scan your tenant's user activity to identify potential insider risks". The final switch label is documented in the already cited https://learn.microsoft.com/purview/insider-risk-management-configure#step-3-optional-enable-and-view-insider-risk-analytics-insights. | Source: https://learn.microsoft.com/purview/insider-risk-management-settings-analytics
- [contradicted, minor] front matter: action / consistency: The prepare action rating is consistent with the verified facts and the action scale on 26 November 2026. | Found: action: "prepare"; risk: "medium"; previewDate: "January CY2027"; "The feature is enabled by default and available automatically as part of the rollout"; "Agree in advance who may act on a recommendation". | Fix: Set action to "act-now". The January month-only preview target is counted from 1 January under the standard, 36 days after the run date; the panel arrives automatically, risk is medium, and the briefing identifies an approval decision to take before arrival.
-->
