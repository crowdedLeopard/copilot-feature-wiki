---
title: "Microsoft Purview DLP: DLP event details in Defender alerts through Microsoft Graph"
slug: "microsoft-purview-data-loss-prevention-enrich-defender-alerts-graph-api-with-dlp-event-dat"
roadmapId: 558681
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans to add DLP rule-match event data to the alerts that the Microsoft Graph security API returns, so SIEM and automation tools can read alert and event together. Integration owners should review which apps can read alerts."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: "May CY2026"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "DLP alerts come with a DLP subscription: the Learn page says all organisations with one (E1, E3, E5, F1, G1, G3, G5) can configure single-event alerts. Nothing specific to the Graph enrichment is published."
audiences: ["security","compliance"]
tags: ["purview","dlp","microsoft-graph","defender-xdr","data-export","integration"]
sources:
  - title: "Microsoft 365 Roadmap item 558681"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=558681"
    kind: "roadmap"
  - title: "List alerts_v2"
    url: "https://learn.microsoft.com/graph/api/security-list-alerts_v2?view=graph-rest-1.0"
    kind: "learn"
  - title: "alert resource type"
    url: "https://learn.microsoft.com/graph/api/resources/security-alert?view=graph-rest-beta"
    kind: "learn"
  - title: "alertEvidence resource type"
    url: "https://learn.microsoft.com/graph/api/resources/security-alertevidence?view=graph-rest-1.0"
    kind: "learn"
  - title: "Get started with the data loss prevention alerts"
    url: "https://learn.microsoft.com/purview/dlp-alerts-get-started"
    kind: "learn"
  - title: "Which applications can read alerts, including DLP alerts, through Microsoft Graph (Microsoft Entra admin center)"
    url: "https://learn.microsoft.com/entra/identity/enterprise-apps/grant-admin-consent"
    kind: "learn"
  - title: "Which applications can read alerts, including DLP alerts, through Microsoft Graph (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/serviceprincipal-post-approleassignments?view=graph-rest-1.0"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-loss-prevention-enriched-audit-data-for-matched-rules","microsoft-purview-data-loss-prevention-data-security-triage-agent-summaries-and-categoriza","microsoft-purview-data-loss-prevention-user-based-aggregation-of-dlp-alerts-564765","auditing"]
controls:
  - governs: "Which applications can read alerts, including DLP alerts, through Microsoft Graph"
    scope: "app"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Enterprise apps > All applications > application > Security > Permissions > Grant admin consent"
      docs: "https://learn.microsoft.com/entra/identity/enterprise-apps/grant-admin-consent"
    api:
      kind: "graph"
      call: "POST /v1.0/servicePrincipals/{id}/appRoleAssignments"
      docs: "https://learn.microsoft.com/graph/api/serviceprincipal-post-approleassignments?view=graph-rest-1.0"
    note: "The request body sets principalId, resourceId and appRoleId; appRoleId names the application permission, such as SecurityAlert.Read.All. Covers every alert source, not only DLP."
  - governs: "Tenant switch for including DLP event data in Graph alerts"
    scope: "tenant"
    ui: null
    api: null
    note: "No separate switch is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-07-20T22:37:15"
changes:
  - date: "2026-11-26"
    note: "New briefing: DLP event data planned for Graph security alerts, with the app permission controls that decide who can read it."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 54 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 54
  confirmed: 54
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "805cb40381850299146de64d85cf24c2"
---

## What's changing

Microsoft plans to add Data Loss Prevention (DLP) event data to the alerts returned by the Microsoft Graph security API. The roadmap item states that today alert data is in the Graph API while DLP rule-match event details are in the Office 365 Management API, and that this work enriches the Graph API with DLP event data to make correlation and integration with SIEM tools, automated workflows and reports easier.

Microsoft Learn does not describe this enrichment yet, so what follows about its behaviour is the roadmap's description. The Graph alert resource already carries an `evidence` collection and a `serviceSource` value, `dataLossPrevention`, that the beta reference says refers to Microsoft Purview Data Loss Prevention. The v1.0 evidence reference lists no DLP-specific evidence type at the time of writing (November 2026), and Microsoft has not documented which DLP fields will appear or where in the alert they will sit.

In the Purview DLP alerts dashboard, an alert event already shows the matched DLP policy and rule, the sensitive information types detected, the actions taken and any user override justification, plus entities such as file path, site URL, email subject and email recipients. Whether the Graph enrichment carries all of these is not stated.

The roadmap record lists the item as Launched, with a preview date of May CY2026 and a target of June CY2026, in General Availability and Preview phases, for Worldwide (Standard Multi-Tenant) on the Web platform.

## Why it matters

For security operations, this removes a join: today an integration that wants both the alert and the rule that fired has to pull from two APIs and correlate them itself. With the enrichment, one Graph call should be enough, which simplifies SIEM connectors and Power Automate or Logic Apps workflows that triage DLP alerts.

The flip side is data reach. Every app that already holds the Graph permission to read alerts may start receiving DLP event detail, which in Purview includes who sent what to whom and where a file lives. Microsoft has not stated whether existing callers receive the new data automatically or whether anything must be switched on, so take stock of those apps now rather than after the data appears in a downstream SIEM with different retention and access rules.

## Risk assessment

**Data exposure**
- DLP event details in Purview include email subjects, recipients, attachment names, file paths and site URLs. If the enrichment carries these, they flow to whichever apps hold alert-read permission in Microsoft Graph and on into their stores. The control is the app's permission grant in Microsoft Entra ID (first row of the table).
- Microsoft has not documented whether matched sensitive content itself is included. In the Purview dashboard, viewing matched content needs the Content Explorer Content Viewer role group; Microsoft has not said whether that role group affects what the Graph API returns, so confirm what the API returns before widening access.

**Security & identity**
- List alerts_v2 needs SecurityAlert.Read.All (least privileged) for delegated or application access; delegated callers also need a supported Microsoft Entra role such as Security Reader or Global Reader. No new permission for DLP data is documented.

**Autonomy & actions**
- No change: the roadmap describes added data in a read API. Automations built on it act only as their owners design them.

**Change & support**
- SIEM parsers and workflows that read alert payloads may need updating once the field layout is documented. Expect integration owners to ask where the schema is.

## Cost and licensing

- **Licence.** The Learn page *Get started with the data loss prevention alerts* says all organisations with a DLP subscription (E1, E3, E5, F1, G1, E3, G3, E5, G5) can configure single-event alerts; aggregated alerts need an A5, E5 or G5 subscription, or E1, F1, G1, E3 or G3 with one of the listed add-ons. Microsoft publishes no separate licence for DLP data in Graph alerts.
- **Meter.** No meter is documented for this feature at the time of writing.
- **Indirect costs.** Integration work to parse the new fields, and ingestion volume in any SIEM that bills by data ingested, which depends on the SIEM.

## Scope

- **Who:** security and compliance teams, and owners of apps that call `GET /security/alerts_v2`.
- **Roles:** the Graph call supports Security Reader, Global Reader, Security Operator and Security Administrator for delegated access. Viewing DLP alerts in Purview needs one of the role groups the DLP alerts page lists.
- **Clouds:** Worldwide (Standard Multi-Tenant), per the roadmap record.
- **Platform:** Web.
- **Prerequisite:** DLP policies must be configured to generate alerts; the Learn page notes it may take up to 3 hours for alerts to start after configuring or changing them.

## Governance guidance

### Before rollout
- List the applications in Microsoft Entra ID that hold SecurityAlert.Read.All or SecurityAlert.ReadWrite.All, and confirm each one should receive DLP event detail.
- Agree with the SIEM owner how long DLP event data may be kept downstream and who can read it there.
- Check the Graph alert and alertEvidence references for DLP fields before changing parsers.

### At rollout
- Call `GET /security/alerts_v2` filtered on serviceSource for a test DLP alert and record which DLP fields come back.
- Remove alert-read permission from any app that should not see DLP event detail.

### After rollout
- Compare enriched Graph alerts with the same events from the Management Activity API before retiring that feed.
- Review app permission grants for alert-read access each quarter.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which applications can read alerts, including DLP alerts, through Microsoft Graph</strong><br><small>App</small><br><small class="controls__note">The request body sets principalId, resourceId and appRoleId; appRoleId names the application permission, such as SecurityAlert.Read.All. Covers every alert source, not only DLP.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Enterprise apps › All applications › application › Security › Permissions › Grant admin consent <a href="https://learn.microsoft.com/entra/identity/enterprise-apps/grant-admin-consent" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/servicePrincipals/{id}/appRoleAssignments</code> <a href="https://learn.microsoft.com/graph/api/serviceprincipal-post-approleassignments?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant switch for including DLP event data in Graph alerts</strong><br><small>Tenant</small><br><small class="controls__note">No separate switch is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no tenant setting that turns the DLP enrichment of Graph alerts on or off at the time of writing (November 2026); access is decided by which apps and users can call the alerts API at all. Granting an application permission through admin consent or an app role assignment applies to every alert the app can list, not only DLP alerts. Delegated callers also need a supported Microsoft Entra role, as listed on the List alerts_v2 page.

## Open questions

- Which DLP fields (policy, rule, sensitive information types, actions, override justification, entities) does the enriched Graph alert carry, and in which property? Watch the Graph alert and alertEvidence references.
- Do apps already calling the alerts API receive DLP event data automatically, or does anything need enabling?
- Is matched sensitive content or a content preview included, and if so is it gated by any Purview role?
- Is the enrichment in v1.0 or only in beta?

<!-- rationale
risk: Medium. DLP event details can include file paths, email subjects and recipients; once in Graph alerts, any app granted alert-read permission could receive them, and Microsoft has not documented which fields are added.
cost: Low. The only cost the sources show is admin and integration time; Microsoft publishes no separate licence or charge for the Graph enrichment.
impact: Low. Only security teams and owners of SIEM, automation and reporting integrations that call the Graph security API notice; end users see nothing.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].note; Why it matters; Risk assessment; Governance controls; rationale: risk / applicability: SecurityAlert.Read.All grants access across security alert sources rather than being limited to DLP alerts. | Found: Allows the app to read all security alerts, without a signed-in user. ... Allows the app to read all security alerts, on behalf of the signed-in user. | Fix: Add https://learn.microsoft.com/graph/permissions-reference#securityalertreadall to sources for the statement that alert-read access covers all security alerts rather than DLP alone. | Source: https://learn.microsoft.com/graph/permissions-reference#securityalertreadall
- [supported, minor] controls[0].governs; Governance controls / applicability: The Graph alerts API includes Microsoft Purview DLP alerts, so its application-permission grants govern access to those alerts. | Found: Alerts from the following security providers are available via these rich alerts and incidents: ... Microsoft Purview Data Loss Prevention | Fix: Add https://learn.microsoft.com/graph/api/resources/security-api-overview?view=graph-rest-1.0#alerts to sources for DLP's inclusion among providers of Graph alerts. | Source: https://learn.microsoft.com/graph/api/resources/security-api-overview?view=graph-rest-1.0#alerts
- [supported, minor] Scope: Who; Governance guidance: At rollout / command: GET /security/alerts_v2 is the operation used to list Graph security alerts. | Found: GET /security/alerts_v2 ... GET https://graph.microsoft.com/v1.0/security/alerts_v2 | Fix: Replace the two occurrences of GET /security/alerts_v2 with GET /v1.0/security/alerts_v2 to give the documented version explicitly. This versions the existing read operation, not a claim that the enrichment itself is documented in v1.0. | Source: https://learn.microsoft.com/graph/api/security-list-alerts_v2?view=graph-rest-1.0
-->
