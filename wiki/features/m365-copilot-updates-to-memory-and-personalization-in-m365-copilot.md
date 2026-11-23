---
title: "Microsoft 365 Copilot: memory now uses chat history, with refreshed Memory settings"
slug: "m365-copilot-updates-to-memory-and-personalization-in-m365-copilot"
roadmapId: 503955
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Copilot Chat personalises replies from users' chat history and gets a redesigned Memory settings page. Learn says the Enhanced personalization control is on by default; no admin action is required, but a Graph setting can turn it off."
status: "rolling-out"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "December CY2025"
previewDate: "November CY2025"
risk: "medium"
cost: "low"
impact: "high"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "Learn states that Copilot memory is available to Copilot Chat users with and without a Microsoft Copilot license. The page names no separate licence, price or meter for memory."
audiences: ["m365-admin","security","compliance","change-adoption"]
tags: ["m365-copilot","copilot-chat","memory","privacy","microsoft-graph","frontier-program"]
sources:
  - title: "Microsoft 365 Roadmap 503955"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=503955"
    kind: "roadmap"
  - title: "Manage Copilot personalization and memory"
    url: "https://learn.microsoft.com/copilot/manage/copilot-personalization-memory"
    kind: "learn"
  - title: "Enhanced personalization control overview"
    url: "https://learn.microsoft.com/graph/control-enhanced-personalization-privacy"
    kind: "learn"
  - title: "enhancedPersonalizationSetting resource type"
    url: "https://learn.microsoft.com/graph/api/resources/enhancedpersonalizationsetting?view=graph-rest-beta"
    kind: "learn"
  - title: "Update enhancedPersonalizationSetting"
    url: "https://learn.microsoft.com/graph/api/enhancedpersonalizationsetting-update?view=graph-rest-beta"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
  - title: "MC1158329: (Updated) Microsoft 365 Copilot: Updates to memory and personalization"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1158329"
    kind: "message-center"
videos: []
related: ["microsoft-purview-data-lifecycle-management-retention-for-copilot-memory","m365-copilot-copilot-response-personalization-memory-citations","m365-copilot-copilot-workspaces-updated-workspace-memory","frontier-program","ediscovery"]
controls:
  - governs: "Whether Enhanced personalization (and so Copilot memory) is on for the tenant, with an optional group to disable it for"
    scope: "tenant"
    ui: null
    api:
      kind: "graph"
      call: "PATCH https://graph.microsoft.com/beta/copilot/settings/people/enhancedpersonalization"
      docs: "https://learn.microsoft.com/graph/api/enhancedpersonalizationsetting-update?view=graph-rest-beta"
    note: "Request body sets isEnabledInOrganization and, optionally, disabledForGroup (a Microsoft Entra group ID). Beta. Least privileged delegated role: People Administrator; permission PeopleSettings.ReadWrite.All."
confidence: "high"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-09-01T23:00:02"
changes:
  - date: "2026-11-23"
    note: "New briefing: Copilot memory uses chat history, with the Graph control for Enhanced personalization and the September 2026 rollout timeline."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 57 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected the discovery statement (custom instructions are not discoverable), the Graph role wording, the action rating (now act-now) and removed an untabled eDiscovery checklist step."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 69 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-23"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 69
  confirmed: 69
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "fbf7e3e2241636a6c722bebee75aac52"
---

## What's changing

Copilot memory now uses chat history to personalise responses, and users get a redesigned Memory settings page in Copilot settings for viewing and managing what Copilot remembers. The roadmap item describes it as Copilot using chat history to give more relevant, contextual responses, with updated settings for viewing and managing what Copilot remembers and personalisation preferences.

Microsoft's notice MC1158329 says this is available to all Copilot Chat users, that existing admin and user-level Memory settings are respected (a Memory setting that is off stays off), and that there are no changes to admin controls or policy enforcement. Microsoft Learn describes memories as saved memories, details inferred from chat history and custom instructions, stored in the user's Exchange mailbox in a hidden folder. Learn marks Copilot personalization and memory as in preview and subject to change.

The roadmap record lists the status as Rolling out, with a preview date of November CY2025 and a target date of December CY2025, for General Availability and Preview on Android, Desktop, iOS, Mac and Web in the Worldwide (Standard Multi-Tenant) cloud. MC1158329, updated 1 September 2026, is the later statement on rollout: Public Preview (Frontier) began rolling out in mid-November 2025, and General Availability begins mid-September 2026 (previously early January) and is expected to complete by late October 2026 (previously late July). The notice gives an end date of 2026-11-30 and no act-by date.

## Why it matters

If nobody acts, Copilot will use users' chat history to personalise their replies. The Learn page says Enhanced personalization is turned on by default and that no action is needed to turn memory on, so the first place a service owner will meet this is a user asking why Copilot remembers earlier chats.

The decision for administrators is whether the default suits the organisation. Learn documents a tenant-level control and a group exception through Microsoft Graph, but no admin centre switch, and says admins cannot restrict what type of information is added to memory. Settle the position and the user guidance before users ask.

## Risk assessment

**Data exposure**
- Chat history becomes an input to personalisation. Microsoft's notice MC1158329 states that this changes how existing customer data is processed to generate contextual replies. Learn says memories sit in the user's Exchange mailbox in a hidden folder and follow the same security and compliance policies as other mailbox data, such as Customer Lockbox and encryption at rest.
- Learn says retention policies and retention labels configured in Purview do not apply to Copilot memory, and that there are no admin controls to enforce retention rules specifically for Copilot memory. A "delete after three months" policy for Copilot Chat interactions does not delete users' memories.
- Learn says admins can search users' saved memories and memories inferred from chat history with Microsoft Purview eDiscovery or Content Search (item class IPM.Contact, in the CopilotMemory folder) and can delete memory data through Microsoft Graph Explorer in combination with Purview. Custom instructions are not discoverable through these tools; the user can manually export them through Settings > Personalization.

**Security & identity**
- The Enhanced personalization control can be changed through Microsoft Graph by an admin holding the PeopleSettings.ReadWrite.All permission; for delegated access the least privileged supported Microsoft Entra role is People Administrator. Limit who holds that role and permission, because it decides whether memory is available to every user.

**Autonomy & actions**
- No change documented: the sources describe memory as personalising responses and say nothing about Copilot taking new actions because of it.

**Change & support**
- Users see a redesigned Memory settings page, and Learn says users with the control turned off see Custom instructions, Saved memories and Chat history as turned off in Settings > Personalization and cannot turn them on. Expect questions about why a setting is greyed out.
- Learn says memory and personalisation actions do not generate audit log entries in Purview, so changes to what users have saved cannot be reviewed from the audit log.

## Cost and licensing

Learn states that Copilot memory is available to Copilot Chat users with and without a Microsoft Copilot license, and Microsoft's notice says the change is available to all Copilot Chat users. The Learn page names no separate licence, and it names no price or meter for memory (Manage Copilot personalization and memory, read November 2026).

The indirect cost is admin and communication time: updating internal documentation and training material, which Microsoft's notice says is the only reason for an admin to act, and handling user questions about the redesigned settings page. A rate or licence specific to this update is not published at the time of writing.

## Scope

**Users and licences:** Microsoft's notice says all users of Microsoft 365 Copilot in tenants where Memory is enabled; Learn says memory is available to Copilot Chat users with and without a Microsoft Copilot license.

**Roles:** Learn says a tenant administrator, such as the Global Administrator role, uses the enhanced personalization control. For the Graph update call, the reference gives People Administrator as the least privileged supported role for delegated access.

**Cloud and platforms:** the roadmap record lists Worldwide (Standard Multi-Tenant) and the platforms Android, Desktop, iOS, Mac and Web. The Graph update reference lists availability in the global service and not in US Government L4, US Government L5 (DOD) or China operated by 21Vianet.

**Rollout:** Public Preview (Frontier) from mid-November 2025; General Availability from mid-September 2026, expected to complete by late October 2026, per MC1158329. Learn still marks personalization and memory as in preview.

## Governance guidance

### Before rollout
- Confirm whether your tenant leaves Enhanced personalization on, and decide whether any group should have it disabled, using the Microsoft Graph setting in the controls table.
- Agree who can change the control: delegated access requires PeopleSettings.ReadWrite.All and a supported Microsoft Entra role, with People Administrator the least privileged; application access requires PeopleSettings.ReadWrite.All.
- Tell the compliance team that Purview retention policies and labels do not apply to Copilot memory and that memory actions are not written to the Purview audit log, per Learn.
- Update user guidance and training material for the redesigned Memory settings page, which Microsoft's notice names as the optional preparation.

### At rollout
- Read the current setting before changing anything, and record the result so later changes can be compared with it.
- Brief the service desk on where users manage Custom instructions, Saved memories and Chat history (Settings > Personalization) and that these appear turned off, and cannot be turned on, where the Enhanced personalization control is off.
- Confirm that tenants or users who already turned Memory off still have it off, as Microsoft's notice says existing settings are respected.

### After rollout
- Re-read the Learn page and MC1158329 when General Availability completes, because the page still marks the feature as in preview.
- Review whether any group exception set through the Graph setting is still needed.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Enhanced personalization (and so Copilot memory) is on for the tenant, with an optional group to disable it for</strong><br><small>Tenant</small><br><small class="controls__note">Request body sets isEnabledInOrganization and, optionally, disabledForGroup (a Microsoft Entra group ID). Beta. Least privileged delegated role: People Administrator; permission PeopleSettings.ReadWrite.All.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH https://graph.microsoft.com/beta/copilot/settings/people/enhancedpersonalization</code> <a href="https://learn.microsoft.com/graph/api/enhancedpersonalizationsetting-update?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The only tenant-level control Learn documents is the Enhanced personalization setting, scripted through Microsoft Graph. It is a beta API, so Microsoft says it is subject to change and not supported in production applications. Learn says that when the control is turned off at admin level, Copilot stops applying saved memories and custom instructions without removing them, and details from chat history are deleted after 30 days.

Users have their own controls in Settings > Personalization for Custom instructions, Saved memories and Chat history. Learn says that turning Chat history off at user level also leads to chat history details being deleted after 30 days. Learn also says admins cannot restrict what type of information is added to memory. Purview retention policies and labels, and Purview audit, are not documented as covering memory, so they are not rows in this table.

## Open questions

- Will Microsoft add an admin centre setting for Enhanced personalization? Learn documents only the Microsoft Graph route at the time of writing (November 2026); watch the Manage Copilot personalization and memory page and Message center.
- Is the GA rollout complete? The roadmap record still shows December CY2025 as the target, while MC1158329 gives mid-September to late October 2026; check Message center for a further update.
- When will Learn drop the preview label for personalization and memory, and will its limits (no retention controls, no audit entries) change at General Availability?
- Will the Enhanced personalization Graph API move from beta to v1.0, so that it can be used in production scripts?

<!-- rationale
risk: Medium. Copilot now draws on chat history to personalise replies, which Microsoft's notice says changes how existing customer data is processed, and the documented tenant control is a beta Graph API with no admin centre path.
cost: Low. The only cost the sources show is admin time and user communication; the Learn page names no separate licence or meter for Copilot memory.
impact: High. Microsoft's notice says the change applies to all Copilot Chat users in tenants where Memory is enabled, and the Learn page says Enhanced personalization is turned on by default.
-->
