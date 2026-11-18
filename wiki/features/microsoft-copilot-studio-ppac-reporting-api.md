---
title: "Copilot Studio: PPAC Reporting API for daily usage data"
slug: "microsoft-copilot-studio-ppac-reporting-api"
roadmapId: 579968
topic: "copilot-studio"
products: ["Microsoft Copilot Studio"]
summary: "Microsoft plans an API that returns daily Copilot Studio usage data by environment, user, agent and feature. In development; preview targeted November CY2026. Optional for admins; no licence or default is stated yet."
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
  notes: "Not yet published for this API. Microsoft Learn says creating and managing Copilot Studio agents needs a Copilot Studio User License per user and a tenant licence, and says nothing about reporting APIs."
audiences: ["finops","power-platform-admin","service-owner"]
tags: ["copilot-studio","copilot-credits","finops","cost-management","power-platform-admin-center","power-platform-cli","analytics","monitoring"]
sources:
  - title: "Microsoft 365 Roadmap 579968"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=579968"
    kind: "roadmap"
  - title: "Manage Copilot Credits and capacity for Copilot Studio"
    url: "https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity"
    kind: "learn"
  - title: "Licensing Reports - Generate Licensing Report"
    url: "https://learn.microsoft.com/rest/api/power-platform/copilotstudio/licensing-reports/generate-licensing-report"
    kind: "docs"
  - title: "pac copilot-studio"
    url: "https://learn.microsoft.com/power-platform/developer/cli/reference/copilot-studio"
    kind: "docs"
  - title: "Microsoft Power Platform API reference"
    url: "https://learn.microsoft.com/rest/api/power-platform/"
    kind: "docs"
  - title: "Assign licenses and manage access to Copilot Studio"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/requirements-licensing"
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
    note: "Existing licensing report, not confirmed as the roadmap's API. Requires the Global, Dynamics 365 or Power Platform administrator role; the request body sets startDate, endDate and granularity."
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
updated: "2026-11-18"
roadmapModified: "2026-11-18T18:32:08"
changes:
  - date: "2026-11-18"
    note: "New briefing: roadmap-only description of the PPAC Reporting API, with the documented admin centre reports and preview licensing report operation shown as today's alternatives."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 52 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 52
  confirmed: 52
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "0ecf6f8715267b9cb19190750523b173"
---

## What's changing

The roadmap item describes a PPAC (Power Platform admin center) Reporting API that gives customers programmatic access to Copilot Studio usage data from Microsoft's lakehouse. It says the API replaces older unsupported methods for pulling consumption data, and returns daily JSON data by environment, user, agent and feature. The roadmap says this data powers dashboards, FinOps reporting and automated cost controls.

The roadmap item gives a preview date of November CY2026 and a General Availability target of January CY2027. Its status is In development, it lists Web as the platform, and it lists only Worldwide (Standard Multi-Tenant) as a cloud. These are Microsoft's targets, not commitments.

Microsoft Learn does not describe an API under this name at the time of writing (November 2026), so what the roadmap says about format, fields and access is the roadmap's description. Learn does document related pieces today. The Power Platform admin center lets administrators download consumption reports by environment, agent or user, and the Power Platform API has a Copilot Studio licensing report operation that returns a gzip-compressed CSV file, not JSON. Microsoft has not stated whether that operation is the roadmap's API or a predecessor.

## Why it matters

If you run FinOps for Copilot Studio, the documented route to usage data today is the admin centre's download reports, which an administrator must trigger by hand. The roadmap's daily feed by environment, user, agent and feature would let a team load the same dimensions into its own dashboards and alerts instead.

Microsoft has not stated what happens on arrival, so base planning on no source saying that existing behaviour changes. The practical decision is whether to wait for the API or to start with the documented preview licensing report operation. Treat user-level rows as personal data from the first dashboard, because the feed would carry usage by user.

## Risk assessment

**Data exposure**
- The roadmap says the data is broken down by user and agent. The existing admin centre user report can show usage from unauthenticated sessions under the user ID 00000000-0000-0000-0000-000000000000 with no user name, so expect rows like that in any export.
- Which roles may call the roadmap's API is not stated. The documented licensing report operation requires the Global, Dynamics 365 or Power Platform administrator role.

**Security & identity**
- The Power Platform API reference says callers register an app and get an authentication token. How the PPAC Reporting API would be authorised is not yet documented.

**Autonomy & actions**
- The roadmap names automated cost controls as a use of the data. Microsoft Learn documents no API for the per-agent monthly limit at the time of writing (November 2026); the limit is set in the Power Platform admin center, so automation built on the feed would need its own way to act.

**Change & support**
- The roadmap says the API replaces older unsupported methods. Microsoft has not said when those methods stop, so check any current scripts for dependencies before the January CY2027 target.
- Learn marks the pac licensing report commands as Preview, so the schema may change between preview and General Availability.

## Cost and licensing

No licence or charge for the PPAC Reporting API is published at the time of writing (November 2026): the roadmap item states none, and Learn has no page for it. Learn says that to create and manage agents with Copilot Studio you need a Copilot Studio User License for each user and a tenant licence ([Assign licenses and manage access to Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/requirements-licensing)). That page does not mention reporting APIs, so treat the API's own entitlement as Not yet published.

The data the API would expose is consumption data. Copilot Credits are the unit the admin centre reports, and the Power Platform admin center page says one interaction can use several credits because each feature has its own rate. See [Copilot Credits](/concepts/copilot-credits/) for the meter.

Indirect cost is the time to build and maintain dashboards and automation. A rate for calling the API, and any call limits, are not yet published.

## Scope

The roadmap lists Microsoft Copilot Studio as the product, Web as the platform, and Worldwide (Standard Multi-Tenant) as the cloud. It lists General Availability and Preview as release phases, with a November CY2026 preview date and a January CY2027 target.

Who can call the API, and the prerequisites, are not yet published. For the documented licensing report operation in the Power Platform API, Learn says the caller must be a Global, Dynamics 365 or Power Platform administrator. The admin centre's user report shows consumption by user for agents powered by the standard harness, so the same qualification may apply to user-level data in any export. Confirm this when Microsoft documents the new API.

## Governance guidance

### Before rollout
- Download the consumption reports for environment, agent and user from the Power Platform admin center (first row of the table) so you know what the current data looks like and which columns your dashboards need.
- Review which agents have a monthly limit in the admin centre (second row of the table), because the roadmap pairs the data with cost controls but Learn documents no API to set a limit.
- Identify who holds the Global, Dynamics 365 or Power Platform administrator role, the roles the documented licensing report operation requires.

### At rollout
- Test the preview licensing report operation (first row of the table) with a short date range in a non-production script before building on it.
- Restrict access to any dashboard that shows user or agent rows, because the data is broken down by user.

### After rollout
- Compare dashboard totals with a fresh download from the Summary tab of the Copilot Studio licensing page to catch gaps or schema changes.
- Watch Message center and the Power Platform API reference for the PPAC Reporting API's own page, then replace any preview-based script.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Access to Copilot Studio consumption data by environment, agent or user (existing alternative)</strong><br><small>Tenant</small><br><small class="controls__note">Existing licensing report, not confirmed as the roadmap's API. Requires the Global, Dynamics 365 or Power Platform administrator role; the request body sets startDate, endDate and granularity.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Products › Copilot Studio › Summary › Download report <a href="https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>POST https://api.powerplatform.com/copilotstudio/licensing/reports/{ReportName}?api-version=2024-10-01</code> <a href="https://learn.microsoft.com/rest/api/power-platform/copilotstudio/licensing-reports/generate-licensing-report" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Monthly credit limit and hard stop for a Copilot Studio agent (existing cost control)</strong><br><small>Agent</small><br><small class="controls__note">Limits are not applied instantly, and an agent's limit does not stop the agent flows it calls.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Products › Copilot Studio › Summary › Manage Agents <a href="https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Neither row below is confirmed as a control over the PPAC Reporting API. Both are existing tools an administrator uses today for the same kind of data and decisions.

The licensing report operation is shown as an existing alternative: Learn describes it as returning a gzip-compressed CSV and marks the pac commands as Preview, while the roadmap describes daily JSON. A control that switches the new API on or off, or limits who can call it, is not yet documented.

A per-agent limit has a hard stop that turns the agent off, but the Learn page says limits are not applied instantly and an agent can keep responding for some time after reaching its limit. It also says a limit does not stop the agent flows the agent calls.

## Open questions

- Is the PPAC Reporting API the same as the Copilot Studio licensing report operation in the Power Platform API, or a separate API? Watch the Power Platform API reference and Message center.
- Which roles, permissions and licences are needed to call it, and is there a charge or call limit? Watch the Power Platform admin center documentation for Copilot Studio.
- Which older methods does it replace, and when do they stop working?
- Will it return usage for all Copilot Studio harnesses or only some? The admin centre user report documents a standard-harness qualification for user-level data.

<!-- rationale
risk: Low. The roadmap describes a reporting feed of usage data, not a change to agent behaviour or spend settings; the main exposure is that user-level usage could be copied into dashboards.
cost: Low. Microsoft has not published a licence or charge for this API, so the only cost the sources show is admin and engineering time to build dashboards and cost automation.
impact: Low. Administrators, FinOps analysts and report builders would notice it; the roadmap describes no change for makers or end users.
-->

<!-- verifier-findings (2026-11-18, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.notes; Cost and licensing / licensing: The cited licensing page says creating and managing Copilot Studio agents requires a Copilot Studio User License for each user. | Found: To create and manage agents with Copilot Studio, you need: A license for each user, also known as a per user license (or Copilot Studio User License as referred to on the Microsoft 365 admin center). | Fix: Qualify the background licensing statement in licensing.notes and Cost and licensing: 'The cited page lists a Copilot Studio User License per author and a tenant licence for standard-harness agent authoring. The licensing overview also lists Copilot Studio authors access, a Microsoft 365 Copilot licence or a trial licence as access routes.' Cite https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing, whose 'Get started in Copilot Studio' section lists those alternatives. Keep the new reporting API's own entitlement open. | Source: https://learn.microsoft.com/microsoft-copilot-studio/requirements-licensing
-->
