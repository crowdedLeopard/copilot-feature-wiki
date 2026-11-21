---
title: "Microsoft Purview Insider Risk Management: priority content for the Risky AI usage template"
slug: "microsoft-purview-insider-risk-management-priority-content-support-for-risky-ai-usage"
roadmapId: 528978
topic: "governance"
products: ["Microsoft Purview"]
summary: "Risky AI usage policies in Insider Risk Management will support priority content (sensitive info types, trainable classifiers, sensitivity labels) and can alert only on matches. Targeted January CY2027 for GCC, GCC High and DoD."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Insider Risk Management is included with Microsoft 365 G5, per the Microsoft Purview service description; Learn says it needs a supported subscription, and some indicators need pay-as-you-go billing. A licence or meter specific to priority content is not yet published."
audiences: ["compliance","security"]
tags: ["insider-risk-management","purview","sensitive-information-types","sensitivity-labels","classifiers","adaptive-protection","ai","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 528978"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=528978"
    kind: "roadmap"
  - title: "Create and manage Insider Risk Management policies"
    url: "https://learn.microsoft.com/purview/insider-risk-management-policies"
    kind: "learn"
  - title: "Learn about Insider Risk Management policy templates"
    url: "https://learn.microsoft.com/purview/insider-risk-management-policy-templates"
    kind: "learn"
  - title: "Get started with Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-configure"
    kind: "learn"
  - title: "Assign permissions in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    kind: "learn"
  - title: "Plan for Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-plan"
    kind: "learn"
  - title: "Add-RoleGroupMember"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
videos: []
related: ["microsoft-purview-insider-risk-management-insider-risk-management-for-agents","sensitive-information-types","sensitivity-labels","microsoft-purview-unified-classification-management-experience"]
controls:
  - governs: "Which content is treated as priority in a Risky AI usage policy"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Insider Risk Management > Policies > Create policy > Policy template > policy category > Risky AI usage > Content to prioritize > I want to prioritize content"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-configure"
    api: null
    note: "Detail pages then take the SITs, sensitivity labels and trainable classifiers. Learn does not name the template's category on the Policy template page. Existing policies are edited with Edit policy."
  - governs: "Whether a Risky AI usage policy scores and alerts on all activity or only on priority content"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Insider Risk Management > Policies > Create policy > Policy template > policy category > Risky AI usage > Content to prioritize > I want to prioritize content > Scoring > Get alerts only for activity that includes priority content"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-configure"
    api: null
    note: "The alternative on the same page is Get alerts for all activity. Cumulative exfiltration activity is always scored."
  - governs: "Who can configure Insider Risk Management policies and settings"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and groups > Roles groups > Insider Risk Management > Edit > Choose users"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "The permissions page documents the portal route; the cmdlet page lists Security & Compliance for -Identity and -Member. Insider Risk Management Admins also configure policies."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-10-12T23:01:05"
changes:
  - date: "2026-11-21"
    note: "First briefing for this roadmap item: priority content for the Risky AI usage template, with the Learn workflow path and the open question on GCC, GCC High and DoD availability."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 62 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected: the admin path now includes the policy category step; removed an unsupported licensing gap and the browser-extension check from the checklist; named the Microsoft 365 G5 entitlement."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 68 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-21"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 68
  confirmed: 68
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "c905e5c740b45203b095a152d1ab06a5"
---

## What's changing

The roadmap item states that the Risky AI usage policy template in Microsoft Purview Insider Risk Management will support priority content. Administrators define sensitive info types (SITs), trainable classifiers and sensitivity labels as priority content and are alerted only when activity matches the selected priority content. The roadmap record lists GCC, GCC High and DoD, the General Availability release phase and the Web platform.

Microsoft Learn already describes priority content in general terms. Its policies page lists Risky AI usage among the templates that support priority content selection, says that specifying content as a priority raises the risk score for associated activity, and says a policy can assign risk scores and generate alerts only for activities that include priority content. That page states no cloud scope, so Learn does not confirm that it describes what GCC, GCC High and DoD tenants will get. Treat the roadmap's target as the plan.

The Risky AI usage template detects user browsing to generative AI websites and prompts and AI responses containing sensitive information in Microsoft 365 Copilot, Microsoft Copilot and agents. Learn adds that detection of risky activity by this policy contributes to user risk scoring in Adaptive Protection. The roadmap status is In development with a target of January CY2027, which is a target and not a commitment. Microsoft has not stated whether the change is on, off or opt-in when it arrives.

## Why it matters

This is a tuning control for a detection that already exists, so its effect is on alert volume and on what analysts never see. Learn says that when a policy alerts only on priority content, activities without priority content are not scored, although they can still be reviewed if an alert is generated. A narrow priority list in a Risky AI usage policy would therefore leave prompts and responses with other sensitive data unscored. Used with care it cuts noise; used loosely it creates blind spots.

Microsoft has not stated what happens to existing Risky AI usage policies on arrival, and no source says their behaviour changes. If nobody acts, no source describes a change. The decision for a service owner is whether to use priority content, which labels, SITs and classifiers to list, and whether to restrict alerts to them.

## Risk assessment

**Data exposure**
- The roadmap item describes a change to which activity is scored and alerted, not new data collection. Priority content decides which prompt and response content raises the score; the SITs, trainable classifiers and labels you list are the ones that count, so errors in those lists change what analysts see. Learn says priority content raises the score of associated activity and the chance of a high severity alert.
- The roadmap states that users are pseudonymised by default and that role-based access controls and audit logs are in place. Who can configure policies is set by the role-group row in the controls table.

**Security & identity**
- Choosing **Get alerts only for activity that includes priority content** means other activity is not scored. Learn says some activities generate no alert at all unless the content contains a built-in or custom SIT or is specified as priority in the policy, so a short priority list can hide risk. Start from **Get alerts for all activity** (Scoring row).
- Learn says cumulative exfiltration activity always receives a risk score whether or not it contains prioritised content, so the restriction does not apply to it.

**Autonomy & actions**
- Learn describes priority content as affecting risk scores and alerts. It describes no action taken on users by this setting.

**Change & support**
- Analysts may see alert volume and severity shift once priority content is used. Tell the Insider Risk Management analyst group before changing a live policy.
- Learn says the Policy template and Name of an existing policy cannot be edited. Confirm in a test tenant that the **Content to prioritize** page appears when you edit an existing Risky AI usage policy.
- Learn requires the Microsoft Insider risk extension (Edge) or Microsoft Purview extension (Chrome) on user devices for this template, so priority content only helps where that signal already flows.

## Cost and licensing

Learn names no licence or meter specific to priority content on the Risky AI usage template at the time of writing (November 2026). The Insider Risk Management licensing rules apply to the product: Learn says Microsoft offers Insider Risk Management as part of a wide selection of Microsoft 365 licensing subscriptions, and that administrators need a supported subscription and the appropriate licences assigned to users. The Microsoft Purview service description says Insider Risk Management is included with Microsoft 365 G5.

Learn also says some Insider Risk Management indicators are only available if you enable the pay-as-you-go billing model, and that Insider Risk Management uses pay-as-you-go billing or per-user licensing or both, with a Usage center in the Microsoft Purview portal.

Indirect cost is analyst and admin time to choose and test priority content, and the browser extension deployment the template already needs. A licence or meter specific to priority content is not yet published.

## Scope

Insider Risk Management administrators configure it; analysts review the resulting alerts. Learn says the Insider Risk Management role group and the Insider Risk Management Admins role group can configure policies and settings. Administrative units can limit restricted administrators to the users they are scoped to.

The roadmap record lists GCC, GCC High and DoD, General Availability and Web, with a January CY2027 target and In development status. Learn's policies page lists Risky AI usage among the templates that support priority content selection and states no cloud scope.

Prerequisites for the template, per Learn: the Microsoft Insider risk extension on Microsoft Edge or the Microsoft Purview extension on Chrome on user devices, and at least one browsing indicator selected in the policy. Learn says Insider Risk Management supports up to 100 policies for each policy template, and that up to 5 trainable classifiers can be selected in a policy.

## Governance guidance

### Before rollout
- List your existing Risky AI usage policies in Insider Risk Management > Policies.
- Agree with your information protection owners which SITs, trainable classifiers (up to 5) and sensitivity labels count as priority content. See [Sensitive information types](/concepts/sensitive-information-types/) and [Sensitivity labels](/concepts/sensitivity-labels/).
- Confirm who is in the Insider Risk Management and Insider Risk Management Admins role groups, and keep at least one member in each role group you rely on.
- Plan against the roadmap's January CY2027 target and treat the Learn page as general guidance, because it states no cloud scope.

### At rollout
- Open the policy workflow for a test Risky AI usage policy and check that the **Content to prioritize** page offers your SITs, trainable classifiers and labels.
- Select **I want to prioritize content** with **Get alerts for all activity** first, so priority content raises scores without suppressing anything.
- Brief analysts on the expected change in alert severity before you apply priority content to a live policy.

### After rollout
- Compare alert volume and severity before and after, and review a sample of unscored activity before moving to **Get alerts only for activity that includes priority content**.
- Revisit the priority lists whenever labels, SITs or classifiers change.
- Re-check the roadmap item and Learn for cloud scope, default behaviour and licensing as the target date nears.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which content is treated as priority in a Risky AI usage policy</strong><br><small class="controls__note">Detail pages then take the SITs, sensitivity labels and trainable classifiers. Learn does not name the template's category on the Policy template page. Existing policies are edited with Edit policy.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Insider Risk Management › Policies › Create policy › Policy template › policy category › Risky AI usage › Content to prioritize › I want to prioritize content <a href="https://learn.microsoft.com/purview/insider-risk-management-configure" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a Risky AI usage policy scores and alerts on all activity or only on priority content</strong><br><small class="controls__note">The alternative on the same page is Get alerts for all activity. Cumulative exfiltration activity is always scored.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Insider Risk Management › Policies › Create policy › Policy template › policy category › Risky AI usage › Content to prioritize › I want to prioritize content › Scoring › Get alerts only for activity that includes priority content <a href="https://learn.microsoft.com/purview/insider-risk-management-configure" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can configure Insider Risk Management policies and settings</strong><br><small>Tenant</small><br><small class="controls__note">The permissions page documents the portal route; the cmdlet page lists Security &amp; Compliance for -Identity and -Member. Insider Risk Management Admins also configure policies.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and groups › Roles groups › Insider Risk Management › Edit › Choose users <a href="https://learn.microsoft.com/purview/insider-risk-management-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Both policy rows are set in the policy workflow in the Microsoft Purview portal. Microsoft Learn documents no PowerShell, Microsoft Graph or other API for these settings at the time of writing (November 2026), so the API side is not yet documented.

Learn's permissions table gives **Configure policies and settings** to the Insider Risk Management and Insider Risk Management Admins role groups, and says restricted administrators with administrative units are scoped when they configure policies. The role-group row is the control over who can change these settings.

Learn says the option to alert only on priority content does not apply to cumulative exfiltration activity, which always receives a risk score, and that it makes no changes to risk score boosters. The SITs, classifiers and labels themselves are managed elsewhere in Purview; this briefing does not cover their controls.

## Open questions

- Does the priority content support that Learn describes for the Risky AI usage template apply to GCC, GCC High and DoD, and will it reach those clouds in January CY2027 as the roadmap targets? Watch the roadmap item and the Learn policies page.
- Is priority content selected or off by default in the policy workflow, and do existing Risky AI usage policies change on arrival? Microsoft has not stated it.
- Does the alert-only-on-priority-content option apply to every Risky AI usage detection (browsing to AI sites, prompts and responses), and which priority types does that template accept? Learn lists further priority types generally.
- Is any licence or pay-as-you-go meter specific to priority content on this template? None is published yet.

<!-- rationale
risk: Low. It tunes scoring inside an existing policy template; the exposure is an admin choosing to alert only on priority content and leaving other activity unscored. What happens on arrival is not stated.
cost: Low. Learn names no charge specific to priority content; the known cost is analyst and admin time, and Insider Risk Management's own subscription requirement applies. Licensing specific to this feature is not yet published.
impact: Low. Insider Risk Management administrators and analysts who configure or review Risky AI usage policies notice it; the sources describe nothing that end users see.
-->

<!-- verifier-findings (2026-11-21, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The priority-content route is Microsoft Purview portal > Insider Risk Management > Policies > Create policy > Policy template > policy category > Risky AI usage > Content to prioritize > I want to prioritize content. | Found: On the Policy template page, choose a policy category and then select the template for the new policy. ... On the Content to prioritize page ... I want to prioritize content | Fix: Keep the route, which reaches the priority-content option. Append to controls[0].note: 'On the subsequent detail pages, select Sensitive info type > Add sensitive info type, Sensitivity labels > Add sensitivity label, or Trainable classifiers > Add trainable classifier to choose the content.' These last steps are documented at https://learn.microsoft.com/purview/insider-risk-management-configure; the Risky AI usage template's applicability is documented at the already-cited https://learn.microsoft.com/purview/insider-risk-management-policies. | Source: https://learn.microsoft.com/purview/insider-risk-management-configure
- [supported, minor] Governance controls: final paragraph / behaviour: SIT definitions are managed elsewhere in Purview, outside this policy's priority-content selection. | Found: Sign in to the Microsoft Purview portal > Information Protection > Classifiers > Sensitive info types and choose the sensitive information type from the list that you want to modify. | Fix: Add https://learn.microsoft.com/purview/sit-manage-custom-sits-compliance-center to sources to support the statement that SITs are managed elsewhere; no additional control row is needed. | Source: https://learn.microsoft.com/purview/sit-manage-custom-sits-compliance-center
- [supported, minor] Governance controls: final paragraph / behaviour: Sensitivity labels themselves are managed elsewhere in Purview. | Found: When you have published sensitivity labels from the Microsoft Purview portal, they start to appear in Office apps for users to classify and protect data as it's created or edited. | Fix: Add https://learn.microsoft.com/purview/sensitivity-labels-office-apps to sources to support the statement about labels being managed elsewhere; do not add a new control row. | Source: https://learn.microsoft.com/purview/sensitivity-labels-office-apps
- [supported, minor] Governance controls: final paragraph / behaviour: Classifiers themselves are managed elsewhere in Purview. | Found: The Classifiers page brings classification types together in one experience where you can discover, create, inspect, and manage classifiers. ... In the Microsoft Purview portal, you can access Classifiers under Information Protection, Data Loss Prevention, or DSPM | Fix: Add https://learn.microsoft.com/purview/data-classification-overview to sources to support the statement about classifiers being managed elsewhere; no additional control row is needed. | Source: https://learn.microsoft.com/purview/data-classification-overview
-->
