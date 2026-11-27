---
title: "Microsoft Purview: Adaptive Protection retains content deleted by high-risk users (GCC, GCC High and DoD)"
slug: "microsoft-purview-data-lifecycle-management-adaptive-protection-integration-with-data-life"
roadmapId: 566324
topic: "governance"
products: ["Microsoft Purview"]
summary: "Planned for GCC, GCC High and DoD: Adaptive Protection would retain content that users at the Elevated insider risk level delete. Learn describes 120-day retention for commercial clouds. Review before it ships."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "February CY2027"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Insider Risk Management is included in Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW, Microsoft Defender + Purview Suite FLW, and Microsoft 365 E5/A5/F5/G5 Insider Risk Management. An integration-specific licence requirement for the planned government release is not yet published."
audiences: ["compliance","security","m365-admin"]
tags: ["adaptive-protection","insider-risk-management","data-lifecycle-management","retention","purview","ediscovery","auditing","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap: item 566324"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=566324"
    kind: "roadmap"
  - title: "Help dynamically mitigate risks with Adaptive Protection"
    url: "https://learn.microsoft.com/purview/insider-risk-management-adaptive-protection"
    kind: "learn"
  - title: "Learn about retention policies and retention labels"
    url: "https://learn.microsoft.com/purview/retention"
    kind: "learn"
  - title: "Search the audit log"
    url: "https://learn.microsoft.com/purview/audit-search"
    kind: "learn"
  - title: "Search-UnifiedAuditLog"
    url: "https://learn.microsoft.com/powershell/module/exchange/search-unifiedauditlog"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Plan for Microsoft Purview compliance and risk management solutions – GCC High deployments"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/plan-for-microsoft-purview-gcc-high-deployments"
    kind: "learn"
videos: []
related: ["ediscovery","auditing","microsoft-purview-introducing-irm-alert-classification","microsoft-purview-insider-risk-management-policy-recommendation-panel-in-irm"]
controls:
  - governs: "Whether deleted content from Elevated-risk users is retained automatically"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Settings > Solution settings > Data lifecycle management > Adaptive protection > Adaptive protection in Data Lifecycle Management"
      docs: "https://learn.microsoft.com/purview/retention"
    api: null
    note: "Turning it off deletes the policy and removes the labels applied. Needs Adaptive Protection turned on. Documented for commercial clouds."
  - governs: "Whether Adaptive Protection assigns insider risk levels and shares them with other policy engines"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Insider Risk Management > Adaptive protection > Adaptive Protection settings > Adaptive Protection"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-adaptive-protection"
    api: null
    note: "Role group: Insider Risk Management or Insider Risk Management Admins."
  - governs: "Which activity assigns the Elevated risk level that triggers retention"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Insider Risk Management > Adaptive protection > Insider risk levels > Edit > Custom insider risk level > Insider risk level based on"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-adaptive-protection"
    api: null
    note: "Select Edit for the Elevated level. Options: Alert generated or confirmed for a user, or Specific user activity. Role group: Insider Risk Management or Insider Risk Management Admins."
  - governs: "Audit records of items retained by Adaptive Protection"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog -StartDate <date> -EndDate <date> -Operations <operation names>"
      docs: "https://learn.microsoft.com/powershell/module/exchange/search-unifiedauditlog"
    note: "Reads events only. Look for Retained file proactively and Retained email item proactively. Needs the Audit Logs or View-Only Audit Logs role."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-10-22T22:58:40"
changes:
  - date: "2026-11-20"
    note: "New briefing: planned Adaptive Protection retention of content deleted by Elevated-risk users in GCC, GCC High and DoD, with the commercial-cloud behaviour and the US Government availability gap."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 60 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected after verification: setup-method wording for the retention policy, storage-quota cost, product-level Insider Risk Management licence, risk-level path, and removal of an unsupported test-group step."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 66 statements confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 64 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 64
  confirmed: 64
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "e1baf65182969f5204764d994042e77a"
---

## What's changing

The roadmap item states that the integration of Adaptive Protection with Data Lifecycle Management will automatically apply retention labels to preserve deleted emails and files, based on a user's insider risk level. Adaptive Protection is the Microsoft Purview feature that moves users in and out of policies as their insider risk levels change.

The record lists GCC, GCC High and DoD, the Web platform and the General Availability release phase. Its status is In development with a target of February CY2027. Treat that date as Microsoft's target, not a commitment.

Microsoft Learn describes the behaviour for commercial clouds, not for these three clouds. There, when a user at the Elevated risk level deletes content from SharePoint, OneDrive or Exchange, an automatically created auto-labeling retention policy keeps that content for 120 days. The retention page marks the integration as preview, while the roadmap lists General Availability for the US Government clouds. Learn describes a single label and policy for the tenant: users do not see the label, and at the time of writing the retention period and the policy per risk level or location cannot be changed.

The same Adaptive Protection page says Insider Risk Management is available for commercial clouds but not for US Government cloud programs at this time. Microsoft's GCC High deployment guide separately lists Insider Risk Management capabilities, including General data leaks, as Available; it does not establish availability of this integration. Microsoft Learn does not yet describe how the planned US Government release reconciles the two statements (November 2026).

## Why it matters

If your organisation holds a GCC, GCC High or DoD tenant and uses Insider Risk Management, this changes what a deletion means for the users most likely to be misusing data. Content an Elevated-risk user deletes would stay searchable for eDiscovery for 120 days, which supports investigations but also keeps data that someone intended to remove.

Microsoft has not stated what happens on arrival in the US Government clouds, so do not assume it is off or on. Learn's quick-setup table says the policy is automatically created and applied when Adaptive Protection is first turned on, while its custom-setup note requires an explicit opt-in to apply the Data Lifecycle Management policy. Tenants that enabled Adaptive Protection before the integration released also need to opt in. Agree with compliance and legal now whether that retention fits your deletion obligations, and decide who owns the setting.

## Risk assessment

**Data exposure**
- Retained items stay accessible for search and eDiscovery from the secured locations the workload uses, until the 120 days expire and they become eligible for permanent deletion. Content a user meant to delete therefore remains reachable by eDiscovery roles for that period (see [eDiscovery](/concepts/ediscovery/)).
- Learn says the label applies to unlabelled content deleted from SharePoint, OneDrive or Exchange. Whether the US Government release covers the same locations is not documented.

**Security & identity**
- The trigger is the Elevated insider risk level that Adaptive Protection assigns. How your Insider Risk Management policy defines Elevated decides whose deletions are retained, so loosening those conditions widens retention.
- Configuring Adaptive Protection needs the Insider Risk Management or Insider Risk Management Admins role group, so retention behaviour sits with insider risk administrators as well as data lifecycle administrators.

**Autonomy & actions**
- The retention label and its policy apply automatically. Learn says you do not create or manage them and they are not visible in the Microsoft Purview portal, so the only on/off control is the Adaptive protection in Data Lifecycle Management setting.
- Turning that setting off deletes the policy and removes the labels it applied, which makes those items eligible for permanent deletion.

**Change & support**
- Learn says admins can contact Microsoft support to restore preserved content, so plan that support route before users ask.
- Retention and audit events can lag setup: Learn gives up to 36 hours (custom setup) and up to 72 hours (quick setup) before actions apply.

## Cost and licensing

Insider Risk Management is included in the plans named in the [Microsoft Purview service description](https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description): Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW, Microsoft Defender + Purview Suite FLW, and Microsoft 365 E5/A5/F5/G5 Insider Risk Management. That page does not mention Adaptive Protection. The [Adaptive Protection page](https://learn.microsoft.com/purview/insider-risk-management-adaptive-protection) refers readers to Microsoft's subscription plans page for licensing requirements for Adaptive Protection with data loss prevention, data lifecycle management and Conditional Access. An integration-specific licence requirement for the planned government release is not yet published.

The indirect cost is admin and compliance time: defining the Elevated risk level, deciding on the opt-in and answering restore requests. Microsoft documents that the Preservation Hold library counts against the site storage quota, so retention in SharePoint and OneDrive may require more storage ([retention page](https://learn.microsoft.com/purview/retention)). A separate meter and a government-integration-specific licence requirement were not found.

## Scope

The roadmap record lists GCC, GCC High and DoD, on the Web platform, targeted for February CY2027 with the status In development.

The behaviour described here comes from the commercial-cloud Learn pages. It applies to users whom Adaptive Protection assigns the Elevated risk level, and to content they delete from SharePoint, OneDrive or Exchange. Adaptive Protection must be turned on for the tenant before the Data Lifecycle Management setting can be turned on. Configuring Adaptive Protection needs the Insider Risk Management or Insider Risk Management Admins role group. Microsoft has not stated the rollout mechanics or the default for the US Government clouds.

## Governance guidance

### Before rollout
- Ask Microsoft through Message center or your account team whether Insider Risk Management and Adaptive Protection are available in your US Government cloud, because the Adaptive Protection page says Insider Risk Management is not available for US Government cloud programs at this time.
- Name the owner who holds the Insider Risk Management or Insider Risk Management Admins role group.
- Agree with compliance and legal whether keeping content deleted by Elevated-risk users for 120 days fits your deletion obligations.
- Review how your Insider Risk Management policy defines the Elevated level on the Insider risk levels page.

### At rollout
- Check the state of the Adaptive protection in Data Lifecycle Management setting, and turn it off if you do not want automatic retention.
- Allow for the delay Learn gives before actions apply after setup.

### After rollout
- Search the audit log for the Retained file proactively and Retained email item proactively events to see which items were retained.
- Document the route for restoring preserved content: Learn says admins can contact Microsoft support.
- Re-read the Learn pages when the roadmap item launches to confirm availability, the default and the retention period in your cloud.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether deleted content from Elevated-risk users is retained automatically</strong><br><small>Tenant</small><br><small class="controls__note">Turning it off deletes the policy and removes the labels applied. Needs Adaptive Protection turned on. Documented for commercial clouds.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Settings › Solution settings › Data lifecycle management › Adaptive protection › Adaptive protection in Data Lifecycle Management <a href="https://learn.microsoft.com/purview/retention" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Adaptive Protection assigns insider risk levels and shares them with other policy engines</strong><br><small>Tenant</small><br><small class="controls__note">Role group: Insider Risk Management or Insider Risk Management Admins.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Insider Risk Management › Adaptive protection › Adaptive Protection settings › Adaptive Protection <a href="https://learn.microsoft.com/purview/insider-risk-management-adaptive-protection" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which activity assigns the Elevated risk level that triggers retention</strong><br><small>Tenant</small><br><small class="controls__note">Select Edit for the Elevated level. Options: Alert generated or confirmed for a user, or Specific user activity. Role group: Insider Risk Management or Insider Risk Management Admins.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Insider Risk Management › Adaptive protection › Insider risk levels › Edit › Custom insider risk level › Insider risk level based on <a href="https://learn.microsoft.com/purview/insider-risk-management-adaptive-protection" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Audit records of items retained by Adaptive Protection</strong><br><small>Tenant</small><br><small class="controls__note">Reads events only. Look for Retained file proactively and Retained email item proactively. Needs the Audit Logs or View-Only Audit Logs role.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog -StartDate &lt;date&gt; -EndDate &lt;date&gt; -Operations &lt;operation names&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchange/search-unifiedauditlog" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Learn documents the data lifecycle setting only in the Microsoft Purview portal. The setting is available only while Adaptive Protection is turned on for the tenant, and turning Adaptive Protection off stops insider risk levels being shared with data lifecycle management without deleting its policy. Microsoft Learn documents no PowerShell, Graph or other API for these settings at the time of writing (November 2026).

The audit events are "Retained file proactively" for SharePoint and OneDrive and "Retained email item proactively" for Exchange. In the portal they are listed under Retention policy and retention label activities. The operation names to pass to the cmdlet were not read, so look them up in the audit activities reference. All paths and behaviour are from commercial-cloud pages and are not confirmed for GCC, GCC High or DoD.

## Open questions

- Will Insider Risk Management and Adaptive Protection be available in GCC, GCC High and DoD by the February CY2027 target, given the Adaptive Protection page says Insider Risk Management is not available for US Government cloud programs at this time?
- Is the integration off, on or opt-in on arrival in the US Government clouds? Microsoft has not stated it; watch Message center and the Learn retention page.
- Does Microsoft publish an integration-specific licence requirement or meter for the Data Lifecycle Management integration in the US Government clouds?
- Will the 120-day period or the Elevated-only trigger be configurable in the US Government clouds, since Learn says they cannot be changed at this time for the commercial release?
- Will the Learn page keep its preview label while the roadmap lists General Availability for these clouds?

<!-- rationale
risk: Medium. Learn describes retained items staying searchable for 120 days after a user deletes them, which changes what deletion means for Elevated-risk users. A setting turns the retention off.
cost: Low. Plan for admin and compliance time, plus possible storage growth: Microsoft says the Preservation Hold library counts against site storage quotas.
impact: Low. Compliance and insider risk administrators configure it. Learn says users do not see the retention label, and only users at the Elevated risk level trigger it.
-->
