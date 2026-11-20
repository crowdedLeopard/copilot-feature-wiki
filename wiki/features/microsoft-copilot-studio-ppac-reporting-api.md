---
title: "Copilot Studio: PPAC Reporting API for Copilot Credit usage data"
slug: "microsoft-copilot-studio-ppac-reporting-api"
roadmapId: 579968
topic: "copilot-studio"
products: ["Microsoft Copilot Studio"]
summary: "Microsoft plans a Power Platform API that reports Copilot Studio Copilot Credit usage by resource, environment, user and feature. In development; preview targeted November CY2026. Optional for admins; no default is stated."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "November CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for this API. For standard-harness agent authoring, the cited page lists a Copilot Studio User License per author and a tenant licence. The licensing overview also lists Copilot Studio authors access, a Microsoft 365 Copilot licence or a trial licence as access routes."
audiences: ["finops","power-platform-admin","service-owner"]
tags: ["copilot-studio","copilot-credits","finops","cost-management","power-platform-admin-center","usage-reports","analytics","monitoring"]
sources:
  - title: "Microsoft 365 Roadmap 579968"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=579968"
    kind: "roadmap"
  - title: "Manage Copilot Credits and capacity for Copilot Studio"
    url: "https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity"
    kind: "learn"
  - title: "Tutorial: Download Copilot Credit usage reports programmatically (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-download-copilot-credit-usage-reports"
    kind: "learn"
  - title: "Licensing Reports - Generate Licensing Report"
    url: "https://learn.microsoft.com/rest/api/power-platform/copilotstudio/licensing-reports/generate-licensing-report"
    kind: "docs"
  - title: "Assign licenses and manage access to Copilot Studio"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/requirements-licensing"
    kind: "learn"
  - title: "Licensing for agents powered by the standard harness"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing"
    kind: "learn"
videos: []
related: ["copilot-credits","spending-policies","copilot-studio-cost-management-m365-admin-center","microsoft-copilot-studio-cost-visibility-in-monitor-tab"]
controls:
  - governs: "Access to Copilot Studio consumption data by environment, agent or user (existing alternative)"
    scope: "tenant"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Products > Copilot Studio > Summary > Download report"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity"
    api:
      kind: "power-platform-api"
      call: "POST https://api.powerplatform.com/copilotstudio/licensing/reports/{ReportName}?api-version=2024-10-01"
      docs: "https://learn.microsoft.com/rest/api/power-platform/copilotstudio/licensing-reports/generate-licensing-report"
    note: "Preview; not confirmed as the roadmap's API. Requires the Global, Dynamics 365 or Power Platform administrator role; the request body sets startDate, endDate and granularity."
  - governs: "Monthly credit limit and hard stop for a Copilot Studio agent (existing cost control)"
    scope: "agent"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Products > Copilot Studio > Summary > Manage Agents"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity"
    api: null
    note: "Limits are not applied instantly, and an agent's limit does not stop the agent flows it calls."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-20"
roadmapModified: "2026-11-20T01:24:53"
changes:
  - date: "2026-11-18"
    note: "New briefing: roadmap-only description of the PPAC Reporting API, with the documented admin centre reports and preview licensing report operation shown as today's alternatives."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 52 statements not yet confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 54 statements not yet confirmed"
  - date: "2026-11-20"
    note: "Corrected after the independent check: Learn now documents preview programmatic usage reporting, the licensing notes name the licence routes, and text the current roadmap record no longer states was removed."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 57 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-20"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 57
  confirmed: 57
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "067235324e512e9388f7d8e06cd28089"
---

## What's changing

The roadmap item describes a Power Platform reporting API for Copilot credits. It says the API gives customers access to Copilot Credit usage from Copilot Studio through the Power Platform API, extending the existing reports in the Power Platform admin center (PPAC). It says the reports give insights by resource, environment, user and feature, that new reports and capabilities will continue to be released, and that the reports can be used with Power Platform API credit allocations to monitor and optimise resources and environments that consume Copilot Credits.

The roadmap item gives a preview date of November CY2026 and a General Availability target of January CY2027. Its status is In development, it lists Web as the platform, and it lists only Worldwide (Standard Multi-Tenant) as a cloud. These are Microsoft's targets, not commitments.

Learn now documents programmatic Copilot Studio usage reporting in preview, including an end-to-end tutorial ([Tutorial: Download Copilot Credit usage reports programmatically (preview)](https://learn.microsoft.com/power-platform/admin/programmability-tutorial-download-copilot-credit-usage-reports)), but does not explicitly identify it as the PPAC Reporting API named in the roadmap. The preview documentation describes an asynchronous workflow: submit a request, poll for completion, and download the gzip-compressed file. What the roadmap says about the PPAC Reporting API is the roadmap's description; what the preview pages say is a description of the documented preview operation. Microsoft has not stated whether the two are the same.

## Why it matters

If you run FinOps for Copilot Studio, the documented routes to usage data today are the admin centre's download reports, which an administrator triggers by hand, and the preview Power Platform API route. The tutorial says the API data can be combined with other sources and kept as a long-term history beyond the 30-day reporting window, which is what the roadmap's reporting by resource, environment, user and feature would feed.

Microsoft has not stated what happens on arrival, so base planning on no source saying that existing behaviour changes. The practical decision is whether to wait for the roadmap's API or to start with the documented preview operation. Treat user-level rows as personal data from the first report, because the roadmap says the data is broken down by user.

## Risk assessment

**Data exposure**
- The roadmap says the reports give insights by user, resource, environment and feature. The existing admin centre user report can show usage from unauthenticated sessions under the user ID 00000000-0000-0000-0000-000000000000 with no user name, so expect rows like that in any export.
- Which roles may call the roadmap's API is not stated. The documented preview operation requires the Global, Dynamics 365 or Power Platform administrator role.

**Security & identity**
- The tutorial says the usage reports API supports delegated (user) authentication only, and that application-only (service principal) tokens aren't supported. A scheduled script therefore runs under a signed-in administrator's token. How the PPAC Reporting API would be authorised is not yet documented.

**Autonomy & actions**
- The roadmap says the reports can be used with Power Platform API credit allocations to monitor and optimise consumption. Microsoft Learn documents no API for the per-agent monthly limit at the time of writing (November 2026); that limit is set in the Power Platform admin center.

**Change & support**
- The tutorial and the capacity page mark the usage reports API as preview and subject to change, so the schema may change between preview and the roadmap's January CY2027 General Availability target.
- The tutorial says report submissions can return 429 Too Many Requests when service protection is enforced, so schedule reports instead of running them in a tight loop.

## Cost and licensing

No licence or charge for the PPAC Reporting API is published at the time of writing (November 2026): the roadmap item states none, and Learn has no page that identifies the API by that name. For standard-harness agent authoring, [Assign licenses and manage access to Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/requirements-licensing) lists a Copilot Studio User License per author and a tenant licence. The licensing overview, [Licensing for agents powered by the standard harness](https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing), also lists Copilot Studio authors access, a Microsoft 365 Copilot licence or a trial licence as access routes. Neither page mentions reporting APIs, so treat the API's own entitlement as Not yet published.

The data the API would expose is consumption data. Copilot Credits are the unit the admin centre reports, and the Power Platform admin center page says one interaction can use several credits because each feature has its own rate. See [Copilot Credits](/concepts/copilot-credits/) for the meter.

Indirect cost is the time to build and maintain reports. The tutorial says the Copilot Studio workflow client needs sufficient Copilot Credits to run the workflow, and the Power Automate client needs a licence that includes standard connectors. A rate for calling the API itself is not yet published.

## Scope

The roadmap lists Microsoft Copilot Studio as the product, Web as the platform, and Worldwide (Standard Multi-Tenant) as the cloud. It lists General Availability and Preview as release phases, with a November CY2026 preview date and a January CY2027 target. The tutorial says sovereign clouds aren't currently supported by the preview usage reports API.

Who can call the roadmap's API, and its prerequisites, are not yet published. For the documented preview operation, Learn says the caller must be a Global, Dynamics 365 or Power Platform administrator. The admin centre's user report shows consumption by user for agents powered by the standard harness, so the same qualification may apply to user-level data in any export. Confirm this when Microsoft documents the new API.

## Governance guidance

### Before rollout
- Download the consumption reports for environment, agent and user from the Power Platform admin center (first row of the table) so you know what the current data looks like and which columns your reports need.
- Review which agents have a monthly limit in the admin centre (second row of the table), because the roadmap pairs the data with credit allocations but Learn documents no API to set a limit.
- Identify who holds the Global, Dynamics 365 or Power Platform administrator role, the roles the documented preview operation requires.

### At rollout
- Test the preview usage report operation (first row of the table) with a short date range in a non-production script before building on it.
- Restrict access to any report or dashboard that shows user or agent rows, because the roadmap says the data is broken down by user.

### After rollout
- Compare report totals with a fresh download from the Summary tab of the Copilot Studio licensing page to catch gaps or schema changes.
- Watch Message center and the Power Platform API reference for a page that names the PPAC Reporting API, then replace any preview-based script.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Access to Copilot Studio consumption data by environment, agent or user (existing alternative)</strong><br><small>Tenant</small><br><small class="controls__note">Preview; not confirmed as the roadmap's API. Requires the Global, Dynamics 365 or Power Platform administrator role; the request body sets startDate, endDate and granularity.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Products › Copilot Studio › Summary › Download report <a href="https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>POST https://api.powerplatform.com/copilotstudio/licensing/reports/{ReportName}?api-version=2024-10-01</code> <a href="https://learn.microsoft.com/rest/api/power-platform/copilotstudio/licensing-reports/generate-licensing-report" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Monthly credit limit and hard stop for a Copilot Studio agent (existing cost control)</strong><br><small>Agent</small><br><small class="controls__note">Limits are not applied instantly, and an agent's limit does not stop the agent flows it calls.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Products › Copilot Studio › Summary › Manage Agents <a href="https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Neither row is confirmed as a control over the PPAC Reporting API. Both are existing tools an administrator uses today for the same kind of data and decisions.

The licensing report operation is shown as an existing alternative: Learn documents programmatic usage reporting as a preview and does not identify it as the roadmap's API. A control that switches the new API on or off, or limits who can call it, is not yet documented.

A per-agent limit has a hard stop that turns the agent off, but the Learn page says limits are not applied instantly and an agent can keep responding for some time after reaching its limit. It also says a limit does not stop the agent flows the agent calls.

## Open questions

- Is the PPAC Reporting API the same as the Copilot Studio licensing report operation in the Power Platform API, or a separate API? Watch the Power Platform API reference and Message center.
- Is there a licence or charge specific to calling it, and will the roles and delegated-only authentication of the preview carry over to General Availability? Watch the Power Platform admin center documentation for Copilot Studio.
- How do the Power Platform API credit allocations the roadmap mentions relate to these reports, and which API operations expose them?
- Will it return usage for all Copilot Studio harnesses or only some? The admin centre user report documents a standard-harness qualification for user-level data.

<!-- rationale
risk: Low. The roadmap describes a reporting API for usage data, not a change to agent behaviour or spend settings; the main exposure is that user-level usage could be copied into dashboards.
cost: Low. Microsoft has not published a licence or charge for this API, so the only cost the sources show is admin and engineering time to build reports and dashboards.
impact: Low. Administrators, FinOps analysts and report builders would notice it; the roadmap describes no change for makers or end users.
-->

<!-- verifier-findings (2026-11-20, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance controls / admin-path: Licensing > Products > Copilot Studio > Summary > Manage Agents leads to the page for monthly limits and hard stops. | Found: On the Summary tab, select Manage Agents. The Agents page appears where you can: ... You can set a monthly limit for any agent directly from this page. | Fix: Extend controls[1].ui.path and the matching table path to 'Licensing > Products > Copilot Studio > Summary > Manage Agents > agent > Set limit > Stop usage'. Add https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness to sources; its 'Set a monthly limit for an agent' section documents selecting the agent, Set limit and Stop usage, and states these controls apply across Copilot Studio. | Source: https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity
-->
