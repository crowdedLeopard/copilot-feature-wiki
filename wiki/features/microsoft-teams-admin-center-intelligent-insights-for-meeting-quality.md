---
title: "Microsoft Teams: AI-powered insights on meeting quality in the Teams admin center"
slug: "microsoft-teams-admin-center-intelligent-insights-for-meeting-quality"
roadmapId: 574108
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "The Teams admin center gains daily AI insights that flag locations and public IPs with unusual meeting quality, with likely causes and actions. Nothing to configure; the listed admin roles see it."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "on"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published for this feature. MC1523077 names no licence or meter. The existing troubleshooting page says its data is available for all Teams users regardless of license type, with depth and retention varying by licence."
audiences: ["m365-admin","service-owner"]
tags: ["teams","admin-center","monitoring","analytics","ai","telemetry","performance","gcc"]
sources:
  - title: "Microsoft 365 Roadmap 574108"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=574108"
    kind: "roadmap"
  - title: "MC1523077: Teams admin center - Intelligent insights for meeting quality"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1523077"
    kind: "message-center"
  - title: "Monitor and troubleshoot Teams meetings and calls from the Teams admin center"
    url: "https://learn.microsoft.com/microsoftteams/monitor-troubleshoot-teams-meetings-calls"
    kind: "learn"
  - title: "Use Microsoft Teams administrator roles to manage Teams"
    url: "https://learn.microsoft.com/microsoftteams/using-admin-roles"
    kind: "learn"
  - title: "Assign user roles with Microsoft Entra ID"
    url: "https://learn.microsoft.com/entra/fundamentals/users-assign-role-azure-portal"
    kind: "learn"
  - title: "Create unifiedRoleAssignment"
    url: "https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments"
    kind: "learn"
  - title: "Best practice configurations dashboard for Microsoft Teams meetings"
    url: "https://learn.microsoft.com/microsoftteams/best-practice-dashboard"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Whether the meeting-quality insights are available in the tenant"
    scope: "tenant"
    ui: null
    api: null
    note: "No switch documented at the time of writing (November 2026); MC1523077 says no configuration is required."
  - governs: "Which administrators can view the insights (Microsoft Entra role assignment)"
    scope: "user"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Users > select the user > Assigned roles > Add assignments"
      docs: "https://learn.microsoft.com/entra/fundamentals/users-assign-role-azure-portal"
    api:
      kind: "graph"
      call: "POST /v1.0/roleManagement/directory/roleAssignments"
      docs: "https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments"
    note: "General control for admin roles; the role list for the insights comes from MC1523077. Graph: Privileged Role Administrator is the least privileged supported role; a custom role is also supported."
  - governs: "Existing location view for network best practices (not the new insights)"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Best practice configurations"
      docs: "https://learn.microsoft.com/microsoftteams/best-practice-dashboard"
    api: null
    note: "Separate dashboard that highlights locations not following recommended practices, evaluated over seven days; it does not control the insights."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-17"
roadmapModified: "2026-10-15T22:47:30"
changes:
  - date: "2026-11-16"
    note: "New briefing: Teams admin center AI insights for meeting quality, rolling out from mid-November 2026 per MC1523077."
  - date: "2026-11-16"
    note: "Corrected the verifier findings: removed claims that thresholds cannot be tuned, that the feature is read-only and that no budget control applies; added the peer-to-peer exception and the Graph reference."
  - date: "2026-11-17"
    note: "Corrected the Graph role requirement: Privileged Role Administrator is the least privileged supported role, a custom role is also supported, and RoleManagement.ReadWrite.Directory is required."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 64 statements confirmed"
version: 3
verification:
  status: "verified"
  date: "2026-11-17"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 64
  confirmed: 64
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "1a5dc4ae69b0103e192681c6f86fcca8"
---

## What's changing

Microsoft is adding AI-powered meeting-quality insights to the Teams admin center. They evaluate historical meeting-quality data across the organisation and highlight locations or public IP addresses where quality is behaving unusually, with the number of affected users, a quality trend, likely causes and recommended actions.

Microsoft's notice MC1523077 (published 2026-10-23) says administrators find the insights at Teams admin center > Meetings > Meetings, as enhancements to the meeting and call troubleshooting flow. Insights are refreshed daily and use machine learning to evaluate what counts as anomalous, so administrators do not need to configure thresholds. Likely causes are grouped as network (bandwidth, Wi-Fi, VPN, proxy), compute (CPU, memory, client) and devices (microphones, cameras, speakers), and administrators can review the affected users and supporting evidence. The notice says the insights use meeting data across the tenant and supported clients and platforms, and do not include telemetry from SIP phones or from PSTN and peer-to-peer calls.

The roadmap item (status In development, target November CY2026, General Availability and Targeted Release, Worldwide and GCC, Web) is a plan. The notice gives the rollout window: Worldwide from mid-November 2026, expected to complete by early December 2026; GCC from mid-November 2026, expected to complete by mid-December 2026. At the time of writing (November 2026) Microsoft Learn has no page for these insights. The Learn page on the existing meeting troubleshooting experience is background only, not a description of this feature.

## Why it matters

The existing Learn pages describe tools that work per meeting, per user or against a list of best practices. The insights add a view that starts from the pattern: the locations and public IPs where quality is degrading, with a likely cause. A network or helpdesk team can start from that instead of from a user's complaint. Treat it as a prioritisation aid rather than a verdict, because the causes are machine-learning output.

Nothing has to be done for it to appear, and the notice says no configuration is required. The decisions that remain are organisational: who holds the roles that can see user counts, locations and public IPs, and which team acts on the recommendations. If nobody decides, the insights arrive and are simply ignored or read inconsistently.

## Risk assessment

**Data exposure**
- The notice says the feature uses AI and machine learning to analyse historical meeting-quality data and does not alter how customer data is stored or processed. The insights do surface locations, public IPs and affected users, so the audience for that view is what to govern.
- For the existing troubleshooting experience, Learn says identifiable information for federated and external participants is obfuscated, except for peer-to-peer calls, where relevant identifiable information is not obfuscated. The notice excludes peer-to-peer telemetry from the insights; Learn does not say how the insights treat external participants.

**Security & identity**
- Access follows admin roles: the notice lists Global Administrators, Teams Administrators, Teams Communications Administrators, Teams Communications Support Engineers and Teams Communications Support Specialists. Teams Reader is not listed. Learn describes Teams Communications Support Specialist as a basic-tools role that can only view user information for the specific user being searched for, so check what that role sees in the new view.
- No new identity, permission or consent is described.

**Autonomy & actions**
- The insights recommend actions; the notice does not describe the feature changing any setting itself. An administrator or network team carries out any change.

**Change & support**
- Machine learning evaluates anomalies automatically, without requiring administrators to configure thresholds, so helpdesk staff may see flags that do not match their own experience. Agree who triages them and how a flagged location reaches the network team.
- Telemetry from SIP phones, PSTN and peer-to-peer calls is excluded, so a location with poor quality in those areas may show no insight.

## Cost and licensing

The licence a user needs is not yet published. Microsoft's notice MC1523077 names no licence, add-on or meter, and Microsoft Learn has no page for the insights at the time of writing (November 2026).

For the existing troubleshooting experience, the Learn page says meeting troubleshooting data is available for all Teams users regardless of license type, but the depth and retention period of telemetry data vary by licence. There, real-time telemetry is available for Teams Premium and Teams Rooms Pro users for seven days after the meeting ends, and aggregated telemetry for all users for 30 days. Do not assume the insights follow the same rules.

No meter, spending cap or budget control is documented for these insights at the time of writing (November 2026). The indirect cost is administrator and network-team time spent investigating flagged locations.

## Scope

**Who sees it:** the five admin roles in the notice (Global Administrators, Teams Administrators, Teams Communications Administrators, Teams Communications Support Engineers, Teams Communications Support Specialists). End users have no part in it.

**Clouds and platform:** the roadmap record lists Worldwide (Standard Multi-Tenant) and GCC, on the web (the Teams admin center). The record lists no other cloud; that is not a statement that the feature is unavailable elsewhere.

**Rollout:** Worldwide from mid-November 2026, expected to complete by early December 2026; GCC from mid-November 2026, expected to complete by mid-December 2026 (MC1523077). The record lists both General Availability and Targeted Release.

**Prerequisites:** none are named in the notice. For the existing troubleshooting experience, Learn says administrative unit assignment determines which users' meetings an administrator can access, and that partner admins using GDAP need the Teams Communications Support Specialist or Teams Communications Support Engineer role in the customer tenant. Whether the same applies to the insights is not stated.

## Governance guidance

### Before rollout
- Inventory who holds the five roles named in MC1523077 in the Microsoft Entra admin center, and remove assignments that are no longer needed.
- Decide which team triages the insights (network, helpdesk or service owner) and what a flagged location or public IP triggers.
- Note the current state of Meetings > Best practice configurations in the Teams admin center so you can later judge whether recommended actions changed anything.

### At rollout
- Open Teams admin center > Meetings > Meetings once the notice's window reaches your tenant (mid-November to early December 2026 for Worldwide, to mid-December 2026 for GCC).
- Check that the roles you expect can see the insights, and that others, such as Teams Reader, which the notice does not list, are handled as you intend.
- Tell the helpdesk that the insights are generated daily by machine learning and that SIP phone, PSTN and peer-to-peer telemetry is excluded.

### After rollout
- Compare flagged locations and public IPs with what network engineers already know, and record false positives for your own triage rules.
- Recheck Microsoft Learn and Message center for documentation on a tenant setting or licence for the insights, and revisit this decision if one appears.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the meeting-quality insights are available in the tenant</strong><br><small>Tenant</small><br><small class="controls__note">No switch documented at the time of writing (November 2026); MC1523077 says no configuration is required.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which administrators can view the insights (Microsoft Entra role assignment)</strong><br><small>User</small><br><small class="controls__note">General control for admin roles; the role list for the insights comes from MC1523077. Graph: Privileged Role Administrator is the least privileged supported role; a custom role is also supported.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Users › select the user › Assigned roles › Add assignments <a href="https://learn.microsoft.com/entra/fundamentals/users-assign-role-azure-portal" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/roleManagement/directory/roleAssignments</code> <a href="https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Existing location view for network best practices (not the new insights)</strong><br><small>Tenant</small><br><small class="controls__note">Separate dashboard that highlights locations not following recommended practices, evaluated over seven days; it does not control the insights.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Best practice configurations <a href="https://learn.microsoft.com/microsoftteams/best-practice-dashboard" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

At the time of writing (November 2026), searches of Microsoft Learn found no tenant switch, policy or PowerShell setting for the insights, which is consistent with the notice saying no configuration is required. The only documented lever is who holds the admin roles, assigned in Microsoft Entra ID; the role-assignment steps are general and not specific to this feature. The Entra admin center steps on Learn are written for a signed-in Privileged Role Administrator. For delegated Graph access, Privileged Role Administrator is the least-privileged supported built-in role; a custom role granting the required permissions is also supported. The API requires RoleManagement.ReadWrite.Directory for delegated or application access.

Learn says Teams admin roles can be scoped to selected users or groups with administrative units, and that for the existing troubleshooting experience the assignment determines which users' meetings an administrator can access. It does not say whether the insights follow that scoping. The best practice configurations dashboard is a separate, existing location-based view and does not control the insights.

## Open questions

- Which licence, if any, do the insights need, and is any data depth or retention tied to Teams Premium or Teams Rooms Pro as it is for the existing troubleshooting data? Watch Message center and the Teams admin center pages on Learn.
- Is there a tenant or role-level switch to turn the insights off? None is documented at the time of writing.
- Do administrative unit scopes limit which locations, public IPs and affected users an administrator sees in the insights?
- Does Teams Reader, which the notice does not list, see the insights?
- The roadmap record still shows In development while MC1523077 gives a rollout starting mid-November 2026; when does the record move to Rolling out?

<!-- rationale
risk: Low. Microsoft's notice MC1523077 says the insights analyse historical meeting-quality data and does not say they change how customer data is stored or processed; only admins in listed roles see them.
cost: Low. No licence or meter is published for the insights, so the only known cost is admin and network-team time; licensing is not yet published.
impact: Low. Only administrators in the roles listed in MC1523077 see the insights; end users notice only if admins act on them, for example by changing network settings.
-->
