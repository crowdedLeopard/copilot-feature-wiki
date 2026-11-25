---
title: "Microsoft Viva: Interactive insights in Agent 365 Business Analytics"
slug: "microsoft-viva-interactive-insights-in-the-a365-business-analytics-app"
roadmapId: 577181
topic: "modern-work"
products: ["Microsoft Viva"]
summary: "Ask natural-language questions about your organisation's AI cost, usage and adoption in Agent 365 Business Analytics. In preview now; Frontier tenants get it automatically, others must enable it."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "March CY2027"
previewDate: "November CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published. The Interactive insights pages name no licence or meter; Business Analytics itself lists at least 50 assigned Copilot licences and spending policies as prerequisites."
audiences: ["m365-admin","finops","service-owner","compliance"]
tags: ["agent-365","viva-insights","analytics","adoption","cost-management","frontier-program","viva-feature-access-management","privacy","file-upload"]
sources:
  - title: "Microsoft 365 Roadmap 577181"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577181"
    kind: "roadmap"
  - title: "How to use Interactive insights (Frontier)"
    url: "https://learn.microsoft.com/a365-business-analytics/interactive-insights"
    kind: "learn"
  - title: "Data, privacy, and security for Interactive insights (Frontier)"
    url: "https://learn.microsoft.com/a365-business-analytics/reference/interactive-insights-data-privacy-security"
    kind: "learn"
  - title: "Introduction to Agent 365 Business Analytics (Frontier)"
    url: "https://learn.microsoft.com/a365-business-analytics/introduction"
    kind: "learn"
  - title: "Introduction to the Admin section in Agent 365 Business Analytics (Frontier)"
    url: "https://learn.microsoft.com/a365-business-analytics/manage/introduction"
    kind: "learn"
  - title: "Manage access in Agent 365 Business Analytics (Frontier)"
    url: "https://learn.microsoft.com/a365-business-analytics/manage/access"
    kind: "learn"
  - title: "How to make configurations in Agent 365 Business Analytics (Frontier)"
    url: "https://learn.microsoft.com/a365-business-analytics/manage/configurations"
    kind: "learn"
  - title: "Control access to features in Microsoft 365"
    url: "https://learn.microsoft.com/viva/feature-access-management"
    kind: "learn"
  - title: "Control who can access features in Microsoft Viva using the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/viva/control-access-admin-center"
    kind: "learn"
  - title: "Control access to features in Microsoft 365 using PowerShell"
    url: "https://learn.microsoft.com/viva/manage-access-policies"
    kind: "learn"
  - title: "Export Copilot metrics from the Microsoft Copilot Dashboard"
    url: "https://learn.microsoft.com/viva/insights/org-team-insights/export-copilot-metrics"
    kind: "learn"
videos: []
related: ["m365-copilot-agent-365-business-analytics-experience","microsoft-viva-copilot-analytics-agent-dashboard","microsoft-viva-copilot-analytics-export-metrics-from-agent-dashboard"]
controls:
  - governs: "Who can open Business Analytics and whose data they can see"
    scope: "user"
    ui:
      surface: "Agent 365 Business Analytics"
      path: "Manage > Access management > New access policy"
      docs: "https://learn.microsoft.com/a365-business-analytics/manage/access"
    api: null
    note: "Global administrator, AI administrator or Viva Insights administrator. Interactive insights needs eligible access in the Global Partition; Frontier preview."
  - governs: "User-level export and insights, including user-level insights from Interactive insights"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Viva > Settings > Manage feature access > Create a policy"
      docs: "https://learn.microsoft.com/viva/control-access-admin-center"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId <featureId> -Name <policyName> -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/viva/manage-access-policies"
    note: "Off leaves aggregated insights only for leaders and managers; always on for analysts. A dedicated Interactive insights enablement policy is not yet documented."
  - governs: "Enabling Interactive insights outside Frontier and enabling file uploads"
    scope: "tenant"
    ui: null
    api: null
    note: "The page says an administrator enables both but gives no path or call."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-11-17T19:05:12"
changes:
  - date: "2026-11-18"
    note: "New briefing: Interactive insights is documented in the Frontier preview, but its general availability default, licensing and enablement path are not yet published."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 83 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected the Microsoft 365 admin center path for Viva feature access policies, reworded the Public Preview reference and removed the Purview change-log checklist item."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 85 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected the Viva feature access row: Learn documents User-level export and insights as controlling user-level insights from Interactive insights, so the unconfirmed-applicability caveat was replaced."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 101 statements not yet confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 100 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 101 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 101
  confirmed: 101
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "4e95244037c132c8f7c0b97ba6c1893b"
---

## What's changing

Interactive insights is an AI-powered feature in Agent 365 Business Analytics. Users ask business questions in natural language about AI adoption, engagement and consumption, and get summaries, charts, a web report or a PowerPoint presentation. The roadmap item says responses are grounded in data within the user's authorised scope. Microsoft Learn adds that it prepares analysis and recommendations and doesn't change budgets, billing, policies, licences or permissions.

Learn already documents the feature as part of the Frontier preview program, described in the text as 'Public Preview'. It can use scenario metrics, an allowlist of organisational attributes (Organization, Function, Group, Location) and files that users upload when their administrator has enabled file uploads. Sensitive and custom organisational attributes aren't available in the preview. Learn also describes the same capability as a Business Analytics plug-in for Copilot Cowork and as a Business Analytics MCP server that supported clients such as GitHub Copilot CLI and Visual Studio Code can use.

The roadmap item (577181) lists the status as In development, with preview targeted for November CY2026 and general availability for March CY2027. These are Microsoft's targets, not commitments. The item lists Worldwide (Standard Multi-Tenant) only, on the Web platform.

## Why it matters

This turns a fixed analytics dashboard into an open question-and-answer tool over AI spend and usage data. For finance and service owners it shortens the path from a cost figure to an explanation; for the organisation it widens what a leader can pull out of usage data, including generated files that leave the app. Learn states the feature isn't designed to evaluate or rank individuals, so expect to need a clear usage message to leaders.

What happens on arrival depends on the tenant. Learn says Interactive insights is automatically enabled for tenants in Frontier and that other tenants' administrators must enable it during Public Preview. Microsoft has not stated the default at general availability, so plan on the preview behaviour and recheck at GA.

## Risk assessment

**Data exposure**

- Interactive insights reads the metrics behind Business Analytics scenarios and an allowlist of organisational attributes, 'subject to your access'. A session's data scope is fixed when its first request is submitted, using the **View as** setting, so check which roles and delegations your leaders hold.
- Where file uploads are enabled, users can attach .csv, Excel, text, Markdown and Word files. Learn says an attachment doesn't grant additional access to organisational data or add a source to Business Analytics. It does not say how long uploads are kept.
- Through the plug-in and MCP experiences, responses returned to the client are stored and handled under that client's terms, retention and compliance settings, and users can combine them with content from other sources there.

**Security & identity**

- Access follows Business Analytics permission sets and partitions. By default, leaders in the top three organisational layers, managers of teams of at least 10 people and Global admins have access. Widening the Chief Officer or Group Manager policies therefore widens who can query.
- Learn says Interactive insights doesn't browse the open web, call arbitrary external services or write back to user assets, identity or licensing.

**Autonomy & actions**

- Learn limits it to analysis and content generation in a sandboxed environment, with outputs returned for human review. It is designed to refuse requests to evaluate, rank or monitor individual employees, but Learn also says customers remain responsible for how they use outputs.
- Learn lists known limitations: it can pick an inappropriate measure, overstate a relationship or sound confident on weak evidence, so reports shared with budget owners need review.

**Change & support**

- This is preview behaviour that Learn says might change. A fair use limitation can apply, and Learn does not publish its thresholds.
- Existing Interactive insights sessions aren't recalculated when metric calculators change; users must rerun them.

## Cost and licensing

The Interactive insights page and its privacy page name no licence, meter or price, so licensing is not yet published. The Business Analytics introduction lists, as prerequisites for the app, at least 50 assigned Copilot licences and spending policies for usage-based services. Cost insights also depend on billing being turned on in the Microsoft 365 admin center.

Learn mentions a 'fair use limitation' in the experience and points users to Copilot Chat or Cowork when they reach it. No limit value, and no charge against Copilot Credits or another meter, is published for Interactive insights. Indirect cost is admin time to set access, brief leaders and review generated reports.

## Scope

Interactive insights sits in the Business Analytics app, in the Global Partition, and the user needs eligible access there. Default access goes to the top three organisational layers, managers of teams of at least 10 and Global admins; Insights analysts, Insights admins and other leaders are assigned by a Global admin, and delegates by a leader. Role assignments already made in Viva Insights carry over.

The roadmap item lists Worldwide (Standard Multi-Tenant) and the Web platform. Learn does not describe other clouds for this feature. Learn says the Viva feature access controls aren't available in GCC-High or DoD. Learn marks the feature, and the admin pages around it, as Frontier preview. The Business Analytics prerequisite of at least 50 assigned Copilot licences applies to the app.

## Governance guidance

### Before rollout

- Confirm whether your tenant is enrolled in the Frontier preview program, because that decides whether Interactive insights is enabled automatically or needs an administrator to enable it.
- Review who holds access in Business Analytics (Access management in the controls table) and who can use **View as** with delegated or role-based views.
- Decide whether to enable file uploads before users ask; Microsoft Learn documents no admin path for that setting yet.
- Brief leaders and analysts on Microsoft's stated limits: organisational analysis, not individual evaluation, and human review before generated reports are shared.

### At rollout

- Decide whether leaders and managers should get user-level insights from Interactive insights; the **User-level export and insights** setting in Viva Feature Access Management turns them off and leaves aggregated insights only. Run Get-VivaModuleFeature -ModuleId VivaInsights to list the features that accept a policy.
- Ask a pilot leader and a manager to start sessions under different **View as** settings and compare the answers with their Business Analytics pages.
- Show pilot users the Reasoning component and the prompt 'Summarize the data sources, methods, and assumptions you used for this comparison' so they can audit answers.

### After rollout

- Recheck access policies and permission sets when roles change, because a capability turned on by any assignment is available to the user.
- Watch Message center and the Interactive insights Learn page for the general availability default, licence and file-upload setting.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can open Business Analytics and whose data they can see</strong><br><small>User</small><br><small class="controls__note">Global administrator, AI administrator or Viva Insights administrator. Interactive insights needs eligible access in the Global Partition; Frontier preview.</small></td><td data-label="Admin UI"><strong>Agent 365 Business Analytics</strong><br>Manage › Access management › New access policy <a href="https://learn.microsoft.com/a365-business-analytics/manage/access" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>User-level export and insights, including user-level insights from Interactive insights</strong><br><small>Tenant</small><br><small class="controls__note">Off leaves aggregated insights only for leaders and managers; always on for analysts. A dedicated Interactive insights enablement policy is not yet documented.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Viva › Settings › Manage feature access › Create a policy <a href="https://learn.microsoft.com/viva/control-access-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId &lt;featureId&gt; -Name &lt;policyName&gt; -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/manage-access-policies" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Enabling Interactive insights outside Frontier and enabling file uploads</strong><br><small>Tenant</small><br><small class="controls__note">The page says an administrator enables both but gives no path or call.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Business Analytics access is managed by Global administrators, AI administrators and Viva Insights administrators. A user's effective access combines all valid assignments, and one assignment never removes access another grants. Microsoft Learn documents no API for Business Analytics access policies at the time of writing (November 2026).

Microsoft documents User-level export and insights as controlling user-level insights from Interactive insights for leaders and managers: turning it off leaves aggregated insights only. The setting is always on for analysts and cannot be changed for that role. A dedicated Interactive insights enablement policy is not yet documented. The Interactive insights page says a tenant administrator must enable it outside Frontier and that file uploads depend on administrator configuration, but at the time of writing (November 2026) Learn documents no path or command for either. Learn adds that organisations can govern access and capabilities through 'applicable Microsoft 365 and Viva Insights controls'.

## Open questions

- Where does a tenant administrator enable Interactive insights outside Frontier, and where are file uploads switched on? Watch the Interactive insights and Business Analytics admin pages on Microsoft Learn.
- Will Interactive insights use a licence or a meter such as Copilot Credits at general availability, and what is the fair use limit?
- Is Interactive insights on or off by default when it reaches general availability in March CY2027, and will Microsoft publish a dedicated enablement policy for it?
- Are Interactive insights prompts, uploaded files and generated reports retained or audited, and where can an administrator see them?

<!-- rationale
risk: Medium. It reads AI cost and usage data, optionally with uploaded files, and generates reports and slides that users can share; Learn documents access and privacy limits but no dedicated enablement switch for it.
cost: Low. The only cost the sources show is admin and communication time. Microsoft has not published a licence or meter for Interactive insights, so budget conclusions are not yet possible.
impact: Medium. Business Analytics access is given by default to senior leaders, managers of teams of 10 or more and Global admins, so the people who notice are leaders and analysts rather than most users.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: targetDate; What's changing; Open questions, third bullet / record: General availability is targeted for March CY2027, although the open question describes it as when GA occurs. | Found: "targetDate": "March CY2027"; "status": "In development" | Fix: Replace the third Open questions bullet with: "What will the default be if Interactive insights reaches general availability at the roadmap's March CY2027 target, and will Microsoft publish a dedicated enablement policy for it?"
- [supported, minor] front matter: licensing.model and notes; Cost and licensing; rationale: cost / licensing: Feature-specific licensing is not published, and the briefing therefore sets the licensing model to unknown. | Found: The tenant must have at least 50 Copilot licenses assigned. An Agent 365 license is not required to access the app but is required to view data on third party agents. | Fix: Set licensing.model to "included" and licensing.notes to "Business Analytics requires at least 50 assigned Copilot licences in the tenant. An Agent 365 licence is not required to access the app but is required to view data on third-party agents. A licence or meter specific to Interactive insights is not yet published." In Cost and licensing and the cost rationale, replace blanket unpublished-licensing wording with "A licence or meter specific to Interactive insights is not yet published." Source: https://learn.microsoft.com/a365-business-analytics/introduction. | Source: https://learn.microsoft.com/a365-business-analytics/introduction
- [supported, minor] controls[0].ui; Governance controls, first row / admin-path: Agent 365 Business Analytics > Manage > Access management > New access policy reaches the access-policy creation experience. | Found: In Business Analytics, on the left, under Manage, select Access management. ... On the Access management home page, at the top, select New access policy. | Fix: Extend controls[0].ui.path and its rendered table path to "Manage > Access management > New access policy > Permission set > Partition > Add users". The cited page documents these choices for the policy's permission set, partition and recipients: https://learn.microsoft.com/a365-business-analytics/manage/access. | Source: https://learn.microsoft.com/a365-business-analytics/manage/access
- [supported, minor] controls[1].ui; Governance controls, second row / admin-path: Microsoft 365 admin center > Settings > Viva > Settings > Manage feature access > Create a policy reaches the feature-access policy wizard. | Found: From the Microsoft 365 admin center, select Viva from the settings menu. ... Select the Settings tab and select Manage feature access. ... Select Create a policy. | Fix: Extend controls[1].ui.path and its rendered table path to "Settings > Viva > Settings > Manage feature access > Create a policy > app and feature > Access setting". Add to its note: "Select the Insights app and User-level export and insights feature, then choose Off under Access setting." Sources: https://learn.microsoft.com/viva/control-access-admin-center and https://learn.microsoft.com/viva/insights/org-team-insights/export-copilot-metrics. | Source: https://learn.microsoft.com/viva/control-access-admin-center
-->
