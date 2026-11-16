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
  notes: "Not yet published for this feature. Microsoft's notice names no licence or meter. The existing troubleshooting page says its data is available for all Teams users regardless of licence type, but depth and retention vary by licence."
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
  - title: "Best practice configurations dashboard for Microsoft Teams meetings"
    url: "https://learn.microsoft.com/microsoftteams/best-practice-dashboard"
    kind: "learn"
  - title: "Create custom roles to manage enterprise apps in Microsoft Entra ID"
    url: "https://learn.microsoft.com/entra/identity/role-based-access-control/custom-enterprise-apps"
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
      call: "POST https://graph.microsoft.com/v1.0/roleManagement/directory/roleAssignments"
      docs: "https://learn.microsoft.com/entra/identity/role-based-access-control/custom-enterprise-apps"
    note: "General control for Teams admin roles; role list for the insights comes from MC1523077. Requires Privileged Role Administrator for the portal steps."
  - governs: "Existing location view for network best practices (not the new insights)"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Best practice configurations"
      docs: "https://learn.microsoft.com/microsoftteams/best-practice-dashboard"
    api: null
    note: "Separate dashboard that highlights locations not following recommended practices over seven days; it does not control the insights."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-10-15T22:47:30"
changes:
  - date: "2026-11-16"
    note: "New briefing: Teams admin center AI insights for meeting quality, rolling out from mid-November 2026 per MC1523077."
version: 1
---

## What's changing

Microsoft is adding AI-powered meeting-quality insights to the Teams admin center. They evaluate historical meeting-quality data across the organisation and highlight locations or public IP addresses where quality is behaving unusually, with the number of affected users, a quality trend, likely causes and recommended actions.

Microsoft's notice MC1523077 (published 2026-10-23) says admins find the insights at Teams admin center > Meetings > Meetings, as new enhancements to the meeting and call troubleshooting flow. Insights refresh daily and use machine learning to decide what counts as anomalous, so there are no thresholds to set. Likely causes are grouped as network (bandwidth, Wi-Fi, VPN, proxy), compute (CPU, memory, client) and devices (microphones, cameras, speakers). Admins can also review the affected users and the supporting evidence. The notice says the insights use meeting data across the tenant and supported clients and platforms, and exclude telemetry from SIP phones and from PSTN and peer-to-peer calls.

The roadmap item (status In development, target November CY2026, General Availability and Targeted Release, Worldwide and GCC, Web) is a plan. The notice gives the rollout window: Worldwide from mid-November 2026 to early December 2026, GCC from mid-November 2026 to mid-December 2026. At the time of writing (November 2026) Microsoft Learn has no page for these insights. Learn does document the existing meeting troubleshooting experience, which already offers a suggested root cause analysis per meeting, so treat that page as background for this feature.

## Why it matters

The troubleshooting tools described on Learn work per meeting and per user, with the best practice configurations dashboard covering locations. The insights add a tenant-wide view: they point at the places and public IPs where quality is degrading, so a network or helpdesk team can start from the pattern rather than from a user's complaint. Treat it as a prioritisation aid, not a verdict, because the causes are machine-learning output.

Nobody has to act for it to appear, and the notice says no configuration is required. The decisions that remain are who holds the roles that can see it, because it surfaces user counts, locations and public IPs, and whether your network and desktop teams will act on its recommendations.

## Risk assessment

**Data exposure**
- The insights draw on meeting-quality telemetry Microsoft already holds, and the notice says the feature does not alter how customer data is stored or processed. They add a new view onto locations, public IPs and affected users, so the audience for that view is the audience that matters.
- Learn says, for the existing troubleshooting experience, that identifiable information for federated and external participants is obfuscated. Learn does not say whether the same applies to the new insights.

**Security & identity**
- Access follows admin roles: the notice lists Global Administrators, Teams Administrators, Teams Communications Administrators, Teams Communications Support Engineers and Teams Communications Support Specialists. The Teams Communications Support Specialist role is described on Learn as a basic-tools role limited to the user being searched for, so check that the new view does not widen what that role sees.
- No new identity, permission or consent is described.

**Autonomy & actions**
- The insights recommend actions; the notice does not describe the feature changing any setting itself. An admin or network team carries out any change.

**Change & support**
- Anomaly detection is automatic and not tunable, so the wiki's view is that helpdesk staff may see flags that do not match their own experience. Agree who triages them and how a flagged location is handed to the network team.
- Telemetry from SIP phones, PSTN and peer-to-peer calls is out of scope, so a location with poor call quality in those areas can show no insight.

## Cost and licensing

The licence a user needs is not yet published. Microsoft's notice MC1523077 names no licence, add-on or meter, and Microsoft Learn has no page for the insights at the time of writing (November 2026).

The closest documented position is for the existing troubleshooting experience: Learn says meeting troubleshooting data is available for all Teams users regardless of licence type, but the depth and retention period of telemetry varies by licence. For that experience, real-time telemetry is kept for seven days after a meeting ends for Teams Premium and Teams Rooms Pro users, and aggregated telemetry for 30 days for all users. Do not assume the insights follow the same rules.

Indirect cost is admin and network-team time spent investigating flagged locations. No cap or budget control applies, because no meter is described.

## Scope

**Who sees it:** the five admin roles in the notice (Global Administrators, Teams Administrators, Teams Communications Administrators, Teams Communications Support Engineers, Teams Communications Support Specialists). End users have no part in it.

**Clouds and platform:** the roadmap record lists Worldwide (Standard Multi-Tenant) and GCC, on the web (the Teams admin center). The record lists no other cloud; that is not a statement that the feature is unavailable elsewhere.

**Rollout:** Worldwide from mid-November 2026, expected to complete by early December 2026; GCC from mid-November 2026, expected to complete by mid-December 2026 (MC1523077). Both General Availability and Targeted Release are listed on the roadmap record.

**Prerequisites:** none are named in the notice. For the existing troubleshooting experience Learn says admins need a supported Teams admin role in Microsoft Entra ID, that administrative unit assignment determines which users' meetings they can access, and that partner admins using GDAP need the Teams Communications Support Specialist or Teams Communications Support Engineer role in the customer tenant. Whether the same applies to the insights is not stated.

## Governance guidance

### Before rollout
- Inventory who holds the five roles named in MC1523077 in the Microsoft Entra admin center, and remove assignments that are no longer needed.
- Decide which team triages the insights (network, helpdesk or service owner) and what a flagged location or public IP triggers.
- Record a baseline from the existing best practice configurations dashboard (Meetings > Best practice configurations) so you can tell later whether recommended actions changed anything.

### At rollout
- Open Teams admin center > Meetings > Meetings once the notice's window reaches your tenant (mid-November to early December 2026 for Worldwide, to mid-December 2026 for GCC).
- Check that the roles you expected can see the insights, and that others, such as Teams Reader, are handled as you intend; the notice does not list Teams Reader.
- Tell the helpdesk that the insights are generated daily by machine learning and that SIP phone, PSTN and peer-to-peer telemetry is excluded.

### After rollout
- Review the flagged locations and public IPs against what network engineers already know, and note false positives for your own triage rules.
- Re-read the Learn pages for meeting troubleshooting for new documentation on the insights, and update this decision if a tenant setting or licence is published.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the meeting-quality insights are available in the tenant</strong><br><small>Tenant</small><br><small class="controls__note">No switch documented at the time of writing (November 2026); MC1523077 says no configuration is required.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which administrators can view the insights (Microsoft Entra role assignment)</strong><br><small>User</small><br><small class="controls__note">General control for Teams admin roles; role list for the insights comes from MC1523077. Requires Privileged Role Administrator for the portal steps.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Users › select the user › Assigned roles › Add assignments <a href="https://learn.microsoft.com/entra/fundamentals/users-assign-role-azure-portal" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/v1.0/roleManagement/directory/roleAssignments</code> <a href="https://learn.microsoft.com/entra/identity/role-based-access-control/custom-enterprise-apps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Existing location view for network best practices (not the new insights)</strong><br><small>Tenant</small><br><small class="controls__note">Separate dashboard that highlights locations not following recommended practices over seven days; it does not control the insights.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Best practice configurations <a href="https://learn.microsoft.com/microsoftteams/best-practice-dashboard" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

At the time of writing (November 2026) no search of Microsoft Learn found a tenant switch, policy or PowerShell setting that turns the insights on or off, which matches the notice saying no configuration is required. The only lever is who holds the admin roles, assigned in Microsoft Entra ID; the Entra role-assignment steps are general and not specific to this feature.

The Teams administrator roles page says Teams roles can be scoped to selected users or groups with administrative units. Learn states that administrative unit assignment determines which users' meetings an admin can see in the existing troubleshooting experience; it does not say whether the insights follow it. The best practice configurations dashboard is an existing, separate location-based view and is not a control over the insights.

## Open questions

- Which licence, if any, do the insights need, and is any data depth or retention tied to Teams Premium or Teams Rooms Pro as it is for the existing troubleshooting data? Watch Message center and the Teams admin center Learn pages.
- Is there a tenant or role-level switch to turn the insights off? None is documented at the time of writing.
- Do administrative unit scopes limit which locations, public IPs and affected users an admin sees in the insights?
- Are the insights themselves available in GCC on the same dates as Worldwide, given the notice gives GCC a later completion date (mid-December 2026)?
- The roadmap record still shows In development while notice MC1523077 gives a rollout starting mid-November 2026; when does the record move to Rolling out?

<!-- rationale
risk: Low. Microsoft's notice MC1523077 says the insights are read-only analysis of existing meeting-quality data and do not alter how customer data is stored or processed; only admin roles see them.
cost: Low. Microsoft has not published a licence or meter for the insights, so the only known cost is admin time; Learn says troubleshooting data is available for all Teams users regardless of licence type, with depth and retention varying by licence.
impact: Low. Only administrators in the listed Teams roles see the insights; end users notice only if admins act on them, for example by changing network or device settings.
-->
