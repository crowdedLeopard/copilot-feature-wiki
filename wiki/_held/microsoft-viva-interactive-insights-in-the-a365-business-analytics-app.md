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
  - governs: "Feature access policy for Viva Insights features (general control, may not cover Interactive insights)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Viva > Settings > Manage feature access > Create a policy"
      docs: "https://learn.microsoft.com/viva/control-access-admin-center"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId <featureId> -Name <policyName> -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/viva/manage-access-policies"
    note: "General control: Microsoft has not confirmed it applies to Interactive insights. Get-VivaModuleFeature -ModuleId VivaInsights lists supported features."
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
version: 1
verification:
  status: "held"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 83
  confirmed: 82
  unconfirmed: 0
  contradicted: 1
  attempts: 1
  hash: "7cddbee03d8c9419b5355f2ddebc3399"
---

## What's changing

Interactive insights is an AI-powered feature in Agent 365 Business Analytics. Users ask business questions in natural language about AI adoption, engagement and consumption, and get summaries, charts, a web report or a PowerPoint presentation. The roadmap item says responses are grounded in data within the user's authorised scope. Microsoft Learn adds that it prepares analysis and recommendations and doesn't change budgets, billing, policies, licences or permissions.

Learn already documents the feature as part of the Frontier preview program, under the heading 'Public Preview'. It can use scenario metrics, an allowlist of organisational attributes (Organization, Function, Group, Location) and files that users upload when their administrator has enabled file uploads. Sensitive and custom organisational attributes aren't available in the preview. Learn also describes the same capability as a Business Analytics plug-in for Copilot Cowork and as a Business Analytics MCP server that supported clients such as GitHub Copilot CLI and Visual Studio Code can use.

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

- Run Get-VivaModuleFeature -ModuleId VivaInsights to see whether Interactive insights is listed as a feature that accepts a Viva Feature Access Management policy; apply a policy only once it is listed, since Microsoft has not confirmed that it governs this feature.
- Ask a pilot leader and a manager to start sessions under different **View as** settings and compare the answers with their Business Analytics pages.
- Show pilot users the Reasoning component and the prompt 'Summarize the data sources, methods, and assumptions you used for this comparison' so they can audit answers.

### After rollout

- Recheck access policies and permission sets when roles change, because a capability turned on by any assignment is available to the user.
- Review the Viva Feature Access Management change logs in Microsoft Purview after any policy change.
- Watch Message center and the Interactive insights Learn page for the general availability default, licence and file-upload setting.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can open Business Analytics and whose data they can see</strong><br><small>User</small><br><small class="controls__note">Global administrator, AI administrator or Viva Insights administrator. Interactive insights needs eligible access in the Global Partition; Frontier preview.</small></td><td data-label="Admin UI"><strong>Agent 365 Business Analytics</strong><br>Manage › Access management › New access policy <a href="https://learn.microsoft.com/a365-business-analytics/manage/access" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Feature access policy for Viva Insights features (general control, may not cover Interactive insights)</strong><br><small>Tenant</small><br><small class="controls__note">General control: Microsoft has not confirmed it applies to Interactive insights. Get-VivaModuleFeature -ModuleId VivaInsights lists supported features.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Viva › Settings › Manage feature access › Create a policy <a href="https://learn.microsoft.com/viva/control-access-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId &lt;featureId&gt; -Name &lt;policyName&gt; -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/manage-access-policies" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Enabling Interactive insights outside Frontier and enabling file uploads</strong><br><small>Tenant</small><br><small class="controls__note">The page says an administrator enables both but gives no path or call.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Business Analytics access is managed by Global administrators, AI administrators and Viva Insights administrators. A user's effective access combines all valid assignments, and one assignment never removes access another grants. Microsoft Learn documents no API for Business Analytics access policies at the time of writing (November 2026).

The Viva Feature Access Management page says its settings apply to Agent 365 Business Analytics 'where applicable', and its feature table does not list Interactive insights by name. Treat the row as a general control until Microsoft confirms it covers this feature. The Interactive insights page says a tenant administrator must enable it outside Frontier and that file uploads depend on administrator configuration, but at the time of writing (November 2026) Learn documents no path or command for either. Learn adds that organisations can govern access and capabilities through 'applicable Microsoft 365 and Viva Insights controls'.

## Open questions

- Where does a tenant administrator enable Interactive insights outside Frontier, and where are file uploads switched on? Watch the Interactive insights and Business Analytics admin pages on Microsoft Learn.
- Will Interactive insights use a licence or a meter such as Copilot Credits at general availability, and what is the fair use limit?
- Does a Viva Feature Access Management policy cover Interactive insights, and is it on or off by default when it reaches general availability in March CY2027?
- Are Interactive insights prompts, uploaded files and generated reports retained or audited, and where can an administrator see them?

<!-- rationale
risk: Medium. It reads AI cost and usage data, optionally with uploaded files, and generates reports and slides that users can share; Learn documents access and privacy limits but no switch for it by name.
cost: Low. The only cost the sources show is admin and communication time. Microsoft has not published a licence or meter for Interactive insights, so budget conclusions are not yet possible.
impact: Medium. Business Analytics access is given by default to senior leaders, managers of teams of 10 or more and Global admins, so the people who notice are leaders and analysts rather than most users.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].ui; Governance controls table / admin-path: The Microsoft 365 admin center path starts at Viva > Settings > Manage feature access > Create a policy. | Found: From the Microsoft 365 admin center, select Viva from the settings menu. ... Select the Settings tab and select Manage feature access. ... Select Create a policy. | Fix: Replace controls[1].ui.path and the corresponding rendered table path with 'Settings > Viva > Settings > Manage feature access > Create a policy'. The first Settings is the admin-center menu; the second is the Viva Settings tab, as documented at https://learn.microsoft.com/viva/control-access-admin-center. | Source: https://learn.microsoft.com/viva/control-access-admin-center
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] summary; What's changing; Scope; changes[0] / availability: Learn documents Interactive insights as a Frontier preview and calls the phase Public Preview. | Found: This feature is part of the Frontier preview program. ... For other tenants, a tenant administrator must enable it during Public Preview. | Fix: In What's changing, replace "under the heading 'Public Preview'" with "described in the text as 'Public Preview'": the page's heading is Availability, not Public Preview. | Source: https://learn.microsoft.com/a365-business-analytics/interactive-insights
- [supported, minor] Governance guidance: After rollout / behaviour: VFAM policy creation, updates and deletions have change logs in Microsoft Purview. | Found: For a history of policy creation, updates, and deletions, see the Viva Feature Access Management (VFAM) change logs for your organization in Microsoft Purview. | Fix: Remove the checklist bullet 'Review the Viva Feature Access Management change logs in Microsoft Purview after any policy change.' It instructs readers to check an audit control with no controls-table row; do not add a new row in this correction. | Source: https://learn.microsoft.com/viva/control-access-admin-center
-->
