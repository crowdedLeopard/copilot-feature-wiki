---
title: "Microsoft Entra ID Governance: account discovery finds local and unassigned accounts in provisioned apps"
slug: "microsoft-entra-account-discovery-for-application-access-governance"
roadmapId: 559476
topic: "governance"
products: ["Microsoft Entra"]
summary: "Administrators can scan an app that Microsoft Entra ID provisions and list accounts with no Entra match or no app assignment. It needs Entra ID Governance or Entra Suite; nothing changes for users, so review fit."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: "April CY2026"
risk: "low"
cost: "medium"
impact: "low"
defaultState: "on"
action: "review"
licensing:
  model: "add-on"
  notes: "The Microsoft Entra ID Governance licensing fundamentals page states that Account Discovery requires the Microsoft Entra ID Governance add-on or Microsoft Entra Suite. No price or meter specific to the feature is published there."
audiences: ["security","service-owner","compliance"]
tags: ["entra-id","entra-id-governance","app-provisioning","identity","microsoft-graph","lifecycle","gcc"]
sources:
  - title: "Microsoft 365 Roadmap 559476"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=559476"
    kind: "roadmap"
  - title: "Discover identities in target applications with account discovery"
    url: "https://learn.microsoft.com/entra/identity/app-provisioning/how-to-account-discovery"
    kind: "learn"
  - title: "Microsoft Entra ID Governance licensing fundamentals"
    url: "https://learn.microsoft.com/entra/id-governance/licensing-fundamentals"
    kind: "learn"
  - title: "identityCorrelation resource type"
    url: "https://learn.microsoft.com/graph/api/resources/identitycorrelation?view=graph-rest-beta"
    kind: "learn"
  - title: "List identityCorrelation objects"
    url: "https://learn.microsoft.com/graph/api/reportroot-list-correlations?view=graph-rest-beta"
    kind: "learn"
  - title: "Tutorial - Customize user provisioning attribute-mappings for SaaS applications in Microsoft Entra ID"
    url: "https://learn.microsoft.com/entra/identity/app-provisioning/customize-application-attributes"
    kind: "learn"
  - title: "Update synchronizationSchema"
    url: "https://learn.microsoft.com/graph/api/synchronization-synchronizationschema-update?view=graph-rest-1.0"
    kind: "learn"
videos: []
related: ["microsoft-entra-microsoft-security-copilot-app-lifecycle-management-agent-in-microsoft-ent"]
controls:
  - governs: "Running account discovery and reviewing its report for an application"
    scope: "app"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Identity > Applications > Enterprise applications > application > Provisioning > Discover identities"
      docs: "https://learn.microsoft.com/entra/identity/app-provisioning/how-to-account-discovery"
    api: null
    note: "Application Administrator, Cloud Application Administrator or Hybrid Identity Administrator; needs Entra ID Governance or Entra Suite."
  - governs: "Retrieving account discovery reports by script"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Identity > Applications > Enterprise applications > application > Provisioning > Discover identities"
      docs: "https://learn.microsoft.com/entra/identity/app-provisioning/how-to-account-discovery"
    api:
      kind: "graph"
      call: "GET /beta/reports/correlations"
      docs: "https://learn.microsoft.com/graph/api/reportroot-list-correlations?view=graph-rest-beta"
    note: "Beta only; least-privileged permission ProvisioningLog.Read.All. Global service only per the reference."
  - governs: "Which attribute matches app accounts to Microsoft Entra ID users"
    scope: "app"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Enterprise apps > app > Provisioning > Manage > Attribute Mapping > mapping > Match objects using this attribute"
      docs: "https://learn.microsoft.com/entra/identity/app-provisioning/customize-application-attributes"
    api:
      kind: "graph"
      call: "PUT /v1.0/servicePrincipals/{id}/synchronization/jobs/{jobId}/schema"
      docs: "https://learn.microsoft.com/graph/api/synchronization-synchronizationschema-update?view=graph-rest-1.0"
    note: "The request body replaces the whole synchronizationSchema; attribute mappings carry matchingPriority. Discovery uses the first direct matching attribute."
  - governs: "Bringing matched but unassigned identities under provisioning"
    scope: "app"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Identity > Applications > Enterprise applications > application > Users and groups"
      docs: "https://learn.microsoft.com/entra/identity/app-provisioning/how-to-account-discovery"
    api:
      kind: "powershell"
      call: "pwsh -File '.\\Assign-CorrelatedUsers.ps1' -ServicePrincipalId <service principal id>"
      docs: "https://learn.microsoft.com/entra/identity/app-provisioning/how-to-account-discovery"
    note: "Microsoft-published script, run in PowerShell 7.x; -DryRun previews, -RulesFile assigns to access packages."
confidence: "high"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-06-01T23:15:29"
changes:
  - date: "2026-11-27"
    note: "New briefing: account discovery for provisioned apps, its licence, supported connectors, roles and Graph beta report API."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 60 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 60
  confirmed: 58
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "2be62415212a5e07303a5c47ffb1898d"
---

## What's changing

Account discovery lets an administrator scan an application that Microsoft Entra ID already provisions and see which of its accounts Microsoft Entra ID governs and which it does not. On an enterprise application's **Provisioning** page, **Discover identities** retrieves the users and groups held in the target application, matches them to Microsoft Entra ID users and groups, and sorts them into three categories:

- **Local identities**: no matching user or group in Microsoft Entra ID. Microsoft's examples are former employees whose app accounts were not deprovisioned, service or shared accounts, users provisioned by another process, groups created in the app, and data-quality mismatches.
- **Unassigned identities**: a match exists in Microsoft Entra ID, but it is not assigned to the enterprise application, so provisioning does not manage it.
- **Assigned identities**: matched, assigned and managed by the provisioning service.

Discovery uses the app's existing provisioning connection and the first direct matching attribute in its attribute mappings; expression-based matching is not supported. Microsoft documents it as enabled for all provisioning connectors except a listed set, and group discovery, including group memberships, is in preview. A report takes at least 30 minutes; Microsoft's example is 12 hours or more for an application with 250,000 identities. Results can be read in the Microsoft Entra admin center, through the Microsoft Graph beta identity correlation APIs, or through Microsoft MCP Server for Enterprise (preview). Microsoft also publishes a PowerShell script, `Assign-CorrelatedUsers.ps1`, that assigns matched users to the enterprise application or to access packages.

The roadmap item is Launched for Worldwide and GCC on the web, with preview in April CY2026 and general availability targeted for June CY2026.

## Why it matters

Application administrators can create accounts directly in a connected app after it is onboarded to provisioning, and those accounts sit outside the access packages, reviews and lifecycle workflows Microsoft Entra ID Governance applies. Account discovery is the documented way to find them from Microsoft Entra rather than by exporting each app's user list and matching it by hand. Expect the first report on a long-running app to show local accounts that need an owner's decision.

The feature is a report, not an enforcement point. Microsoft documents the report as starting when an administrator selects **Discover identities**, and it removes nothing itself. Tenants that hold the licence gain the option on supported connectors; what changes in an application depends on what administrators do with the results afterwards.

## Risk assessment

**Data exposure**
- The report imports account attributes from the target app into Microsoft Entra (**View attributes**, **Manage columns**). Through Microsoft Graph, the reports can also be read by roles that cannot run discovery, including Global Reader, Reports Reader and Security Reader.

**Security & identity**
- Local identities can include former employees' and service accounts that still work in the app. The report surfaces them; removing or matching them is a separate step in the app or in Microsoft Entra.
- Running discovery requires Application Administrator, Cloud Application Administrator or Hybrid Identity Administrator.

**Autonomy & actions**
- Assigning unassigned identities to the enterprise application puts them under provisioning: the page says the service manages them on subsequent provisioning cycles, so their attributes in the app can then be updated by Microsoft Entra. Run `Assign-CorrelatedUsers.ps1` with `-DryRun` first.

**Change & support**
- Results depend on the matching attribute. Mismatched or outdated values put real users in the local category, so check matches before deleting accounts.
- Unsupported connectors, including Amazon Web Services (AWS), ServiceNow and Snowflake, give no discovery; apps that do not implement SCIM pagination can return zero results.

## Cost and licensing

- **Licence:** the [licensing fundamentals page](https://learn.microsoft.com/entra/id-governance/licensing-fundamentals) states that Account Discovery requires the Microsoft Entra ID Governance add-on or Microsoft Entra Suite; the feature page lists the same prerequisite.
- **Meter:** neither page documents a separate meter or charge for discovery runs at the time of writing (November 2026).
- **Indirect costs:** administrator and app-owner time to review local accounts, and report runs that Microsoft says can take 12 hours or more for large applications.

## Scope

- **Who:** administrators with Application Administrator, Cloud Application Administrator or Hybrid Identity Administrator, in tenants licensed for Microsoft Entra ID Governance or Microsoft Entra Suite.
- **Prerequisites:** an enterprise application configured for provisioning with valid credentials and a successful test connection, and a direct matching attribute mapping. The target app must implement SCIM pagination (RFC 7644, Section 3.4.2.4).
- **Not supported:** Adobe Identity Management, AWS, Cloud sync, cross-tenant and cross-cloud synchronisation, Freshservice, group provisioning to Active Directory, HR provisioning (Workday, SAP SuccessFactors, HiBob, API-driven provisioning), LinkedIn Learning, LinkedIn Sales Navigator, N-able, ServiceNow and Snowflake. ECMA, Google Cloud and Google Workspace support user but not group discovery.
- **Clouds:** the roadmap lists Worldwide (Standard Multi-Tenant) and GCC. The feature page says Microsoft MCP Server for Enterprise and the identity correlation APIs are not currently available in sovereign clouds, and the Graph reference marks the list API for the global service only, not US Government L4, US Government L5 (DOD) or China.
- **Platform:** web.

## Governance guidance

### Before rollout
- Confirm the tenant holds Microsoft Entra ID Governance or Microsoft Entra Suite before planning discovery runs.
- Check each target app's connector against Microsoft's unsupported list, and ask vendors of SCIM apps to confirm pagination support.
- Set one direct matching attribute with **Match objects using this attribute** on each app's attribute mappings, because discovery uses only the first and ignores expressions.
- Name the administrators who will run discovery, from the Application Administrator, Cloud Application Administrator and Hybrid Identity Administrator roles.

### At rollout
- Run **Discover identities** first on an app whose account population you know, and allow at least 30 minutes.
- Review **Local identities** with the app owner and record for each whether to remove it, match it or keep it.
- Run `Assign-CorrelatedUsers.ps1` with `-DryRun` and `-OutputFile` before assigning unassigned identities to the app or to access packages.

### After rollout
- Rerun discovery on each governed app at a set interval to catch accounts created directly in the app after onboarding.
- Pull completed reports with `GET /beta/reports/correlations` for tracking, bearing in mind that Microsoft does not support beta APIs in production.
- Add access reviews to the access packages that newly assigned users land in.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Running account discovery and reviewing its report for an application</strong><br><small>App</small><br><small class="controls__note">Application Administrator, Cloud Application Administrator or Hybrid Identity Administrator; needs Entra ID Governance or Entra Suite.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Identity › Applications › Enterprise applications › application › Provisioning › Discover identities <a href="https://learn.microsoft.com/entra/identity/app-provisioning/how-to-account-discovery" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Retrieving account discovery reports by script</strong><br><small>Tenant</small><br><small class="controls__note">Beta only; least-privileged permission ProvisioningLog.Read.All. Global service only per the reference.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Identity › Applications › Enterprise applications › application › Provisioning › Discover identities <a href="https://learn.microsoft.com/entra/identity/app-provisioning/how-to-account-discovery" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>GET /beta/reports/correlations</code> <a href="https://learn.microsoft.com/graph/api/reportroot-list-correlations?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which attribute matches app accounts to Microsoft Entra ID users</strong><br><small>App</small><br><small class="controls__note">The request body replaces the whole synchronizationSchema; attribute mappings carry matchingPriority. Discovery uses the first direct matching attribute.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Enterprise apps › app › Provisioning › Manage › Attribute Mapping › mapping › Match objects using this attribute <a href="https://learn.microsoft.com/entra/identity/app-provisioning/customize-application-attributes" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PUT /v1.0/servicePrincipals/{id}/synchronization/jobs/{jobId}/schema</code> <a href="https://learn.microsoft.com/graph/api/synchronization-synchronizationschema-update?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Bringing matched but unassigned identities under provisioning</strong><br><small>App</small><br><small class="controls__note">Microsoft-published script, run in PowerShell 7.x; -DryRun previews, -RulesFile assigns to access packages.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Identity › Applications › Enterprise applications › application › Users and groups <a href="https://learn.microsoft.com/entra/identity/app-provisioning/how-to-account-discovery" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>pwsh -File '.\Assign-CorrelatedUsers.ps1' -ServicePrincipalId &lt;service principal id&gt;</code> <a href="https://learn.microsoft.com/entra/identity/app-provisioning/how-to-account-discovery" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

- Discovery only reads. The controls that change access are the app assignment (or access package) and, in the app itself, removal of local accounts.
- Changing **Match objects using this attribute** also changes how provisioning matches users between Microsoft Entra ID and the app, not only the discovery report. The Graph schema update replaces the whole schema, so read the current schema first.
- Starting a discovery run is documented in the admin centre only: the Microsoft Graph identityCorrelation resource lists List, Get and List identities operations, all reads, at the time of writing (November 2026).
- Graph reads need `ProvisioningLog.Read.All` and one of the supported roles, which include Enterprise Application Owner, Global Reader, Reports Reader and the Security roles as well as the application administrator roles.

## Open questions

- Will Microsoft add a Graph operation to start a discovery run, or a schedule, so reports can refresh without an administrator selecting **Discover identities**? Watch the identityCorrelation reference.
- Are the identity correlation APIs available to GCC tenants, given that the roadmap lists GCC and the Graph reference lists only the global service?
- When will group discovery and group memberships leave preview?
- Will connectors on the unsupported list, such as ServiceNow and AWS, gain discovery? Watch the account discovery page's application support section.

<!-- rationale
risk: Low. Discovery produces a report when an administrator selects Discover identities; it reads the target app's accounts and changes nothing until someone assigns or removes them.
cost: Medium. Account discovery requires the Microsoft Entra ID Governance add-on or Microsoft Entra Suite, so tenants on P1 or P2 alone need an add-on licence; no separate meter is documented.
impact: Low. Application and identity administrators see the report; end users notice only if their unmanaged app accounts are later removed or brought under assignment.
-->

<!-- verifier-findings (2026-11-27, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Governance controls: final bullet; controls[1].note / role: Graph reads need ProvisioningLog.Read.All and one of the supported directory roles. | Found: | Application | ProvisioningLog.Read.All | AuditLog.Read.All | For delegated access using work or school accounts, the signed-in user must be assigned a supported Microsoft Entra role or a custom role that grants the permissions required for this operation. | Fix: Replace the final Governance controls bullet with: 'ProvisioningLog.Read.All is the least-privileged permission for delegated and application access; AuditLog.Read.All is also accepted. For delegated work or school access, the signed-in user additionally needs a supported Microsoft Entra role or a custom role granting the operation's permissions.' Keep controls[1].note's least-privileged wording. | Source: https://learn.microsoft.com/graph/api/reportroot-list-correlations?view=graph-rest-beta
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[2].note / behaviour: Attribute mappings carry matchingPriority to determine matching precedence. | Found: matchingPriority | Int32 | If higher than 0, this attribute will be used to perform an initial match of the objects between source and target directories. | Fix: Add https://learn.microsoft.com/graph/api/resources/synchronization-attributemapping?view=graph-rest-1.0 to sources; it documents matchingPriority on attributeMapping. | Source: https://learn.microsoft.com/graph/api/resources/synchronization-attributemapping?view=graph-rest-1.0
- [contradicted, minor] Governance guidance: After rollout; Governance controls table / consistency: The checklist's instruction to add access reviews has a corresponding controls-table row. | Found: Checklist: 'Add access reviews to the access packages that newly assigned users land in.' Table rows cover discovery runs, report retrieval, matching attributes and assignment, but not access reviews. | Fix: Remove the checklist bullet 'Add access reviews to the access packages that newly assigned users land in.': that step has no corresponding controls-table row.
-->
