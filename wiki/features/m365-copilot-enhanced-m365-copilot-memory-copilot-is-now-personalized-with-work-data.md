---
title: "Microsoft 365 Copilot: personalised responses from Microsoft 365 work data"
slug: "m365-copilot-enhanced-m365-copilot-memory-copilot-is-now-personalized-with-work-data"
roadmapId: 551195
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft is rolling out Copilot use of inferences from Microsoft 365 work data to personalise responses. The tenant control can switch it off; Microsoft's notice says no admin action is required."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "November CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "high"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "Learn says Copilot memory is available to Copilot Chat users with and without a Microsoft Copilot licence. No price or meter for this feature is published on that page."
audiences: ["m365-admin","security","compliance","change-adoption"]
tags: ["m365-copilot","copilot-chat","memory","personalisation","privacy","microsoft-graph"]
sources:
  - title: "Microsoft 365 Roadmap 551195"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=551195"
    kind: "roadmap"
  - title: "MC1492154: (Updated) Enhanced M365 Copilot Memory - Copilot is now personalized with work data"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1492154"
    kind: "message-center"
  - title: "Manage Copilot personalization and memory"
    url: "https://learn.microsoft.com/copilot/manage/copilot-personalization-memory"
    kind: "learn"
  - title: "Enhanced personalization control overview"
    url: "https://learn.microsoft.com/graph/control-enhanced-personalization-privacy"
    kind: "learn"
  - title: "Update enhancedPersonalizationSetting"
    url: "https://learn.microsoft.com/graph/api/enhancedpersonalizationsetting-update?view=graph-rest-beta"
    kind: "learn"
  - title: "Get enhancedPersonalizationSetting"
    url: "https://learn.microsoft.com/graph/api/enhancedpersonalizationsetting-get?view=graph-rest-beta"
    kind: "learn"
videos: []
related: ["memory","m365-copilot-updates-to-memory-and-personalization-in-m365-copilot","m365-copilot-enhanced-personalization-with-memory-in-copilot","microsoft-purview-data-lifecycle-management-retention-for-copilot-memory","work-iq"]
controls:
  - governs: "Whether Copilot can use Enhanced personalization features such as memory, for the tenant or except one Entra group"
    scope: "tenant"
    ui: null
    api:
      kind: "graph"
      call: "PATCH /beta/copilot/settings/people/enhancedpersonalization"
      docs: "https://learn.microsoft.com/graph/api/enhancedpersonalizationsetting-update?view=graph-rest-beta"
    note: "Request body sets isEnabledInOrganization (required) and disabledForGroup (Entra group ID, optional). Least privileged role: People Administrator. Beta."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-06-22T23:00:47"
changes:
  - date: "2026-11-24"
    note: "New briefing: Copilot uses Microsoft 365 work-data inferences for personalised responses, rolling out to the end of November 2026, with the Graph beta control to disable it."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 50 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected after the independent check: memory is not covered by Purview retention, the audit claim is narrowed, the opening of Why it matters no longer says what Copilot used before, and rollout completion is described as expected."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 56 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-24"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 56
  confirmed: 56
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "7b236ab06f18d8148286120c25f3b7a4"
---

## What's changing

Copilot is starting to use inferences drawn from Microsoft 365 data as extra context, so that its responses are more personalised to a user's work. The roadmap item describes updated settings that make it easier to view and manage what Copilot remembers and the user's personalisation preferences.

Microsoft's notice MC1492154 says users can stop Copilot using inferences generated from Microsoft 365 work data ("Work insight") with the "Chat History and Work Insights" toggle in Settings > Personalization. It says administrators can disable the setting with the enhancedPersonalizationSetting control. Microsoft Learn's page on that control, called Enhanced personalization, says it covers Copilot memory and personalised recommendations, and that it uses data such as Teams chats, Outlook emails, transcripts, Microsoft 365 usage data, profile information such as role, and data from connectors.

The roadmap item is In development with a target of November CY2026, release phase General Availability, Worldwide (Standard Multi-Tenant), on Android, Desktop, iOS, Mac and Web. Microsoft's notice, last updated 2026-10-26, is the later statement on rollout: it says rollout began in early October 2026 and is expected to finish by the end of November 2026 (previously late October). The notice gives no act-by date. Learn marks its Copilot personalisation and memory page as preview, while the roadmap lists General Availability; both are reported as Microsoft gives them.

## Why it matters

This adds inferences from Microsoft 365 work data as context for Copilot responses. Learn says Enhanced personalization is turned on by default and that no action is needed to turn Copilot memory on, only to turn it off for users or the tenant. A tenant that does nothing should therefore expect the feature to start working for its users as the rollout reaches them.

The decision for an administrator is whether to accept that default, and with what communication. The one documented tenant switch is a Microsoft Graph beta call with no documented admin centre path, so someone has to own that script before the expected rollout completion by the end of November 2026.

## Risk assessment

**Data exposure**
- Microsoft Learn says the Enhanced personalization control lets Microsoft use a user's private communication data connected to Microsoft 365, such as Teams chats, Outlook emails and transcripts. The same page says the information is not shared with other users.
- Memories, including details inferred from chat history, are stored in the user's Exchange mailbox in a hidden folder, so mailbox protections such as Customer Lockbox and encryption at rest apply; Purview retention policies and retention labels do not apply to Copilot memory.

**Security & identity**
- Learn says admins can't restrict what type of information is added to Copilot memory, so there is no documented way to narrow what is remembered short of turning the control off.
- Learn says Purview retention policies and labels don't apply to Copilot memory, and that there are no admin controls to enforce retention rules specifically for it.

**Autonomy & actions**
- The documented effect is on the context Copilot uses for responses and recommendations. Neither Learn page read describes this feature taking actions on its own.

**Change & support**
- Learn says memory and personalisation actions don't generate audit log entries in Purview.
- Turning the control off does not delete stored items: Learn says saved memories and custom instructions are kept but not applied, and details from chat history are deleted after 30 days.
- Users see the "Chat History and Work Insights" toggle in Settings > Personalization. Learn says that where the admin control is off, the user-level controls show as off and users can't turn them on.

## Cost and licensing

Microsoft Learn says Copilot memory is available to Copilot Chat users with and without a Microsoft Copilot licence (page: Manage Copilot personalization and memory). That page publishes no separate price or meter for memory, and no price or meter for this feature is published at the time of writing (November 2026).

The costs known today are indirect: administrator time to decide on the control and script it, and communication to users before the expected rollout completion by the end of November 2026. A licence requirement specific to the work-data inferences is not stated in the roadmap item or the notice.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant) and the platforms Android, Desktop, iOS, Mac and Web. Microsoft's notice MC1492154 targets users of Microsoft Copilot (Microsoft 365), with rollout starting in early October 2026 and expected to complete by the end of November 2026.

Learn says Copilot memory is available to Copilot Chat users with and without a Microsoft Copilot licence. The control can be set for the tenant, with an optional Microsoft Entra group for which it is disabled. The Graph update operation lists People Administrator as the least privileged supported role, with the PeopleSettings.ReadWrite.All permission, and is marked beta.

## Governance guidance

### Before rollout
- Read the current state of the Enhanced personalization setting with Microsoft Graph and record it, because Learn says it is on by default.
- Decide whether Copilot should use Microsoft 365 inferences for the whole tenant, or be disabled for one Microsoft Entra group.
- Assign a person holding the People Administrator role to own the Graph script, since no admin centre path is documented.
- Brief users and the data protection team on what the control draws on (Teams chats, Outlook emails, transcripts) and on the user toggle in Settings > Personalization.

### At rollout
- Apply the decision with the PATCH call in the controls table before the expected rollout completion by the end of November 2026.
- Check the Message center notice MC1492154 for further timeline changes, since Microsoft has already moved the end date once.
- Confirm with a pilot user that the personalisation toggles show as off after you turn the control off.

### After rollout
- Plan for stored items that survive switching the control off: Learn says saved memories and custom instructions are kept, and chat history details are deleted after 30 days.
- Tell your compliance team that Learn says memory actions are not audited in Purview and retention policies don't apply.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Copilot can use Enhanced personalization features such as memory, for the tenant or except one Entra group</strong><br><small>Tenant</small><br><small class="controls__note">Request body sets isEnabledInOrganization (required) and disabledForGroup (Entra group ID, optional). Least privileged role: People Administrator. Beta.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/settings/people/enhancedpersonalization</code> <a href="https://learn.microsoft.com/graph/api/enhancedpersonalizationsetting-update?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The documented tenant control is one Graph operation. Its request body sets isEnabledInOrganization (required) and disabledForGroup (a Microsoft Entra group ID, optional); the operation is marked beta, which Microsoft says is subject to change and not supported in production applications. The notice says admins can disable the setting with enhancedPersonalizationSetting, and Learn's control overview says the control can disable linked features for the tenant or a group of users.

Users have their own toggles in Settings > Personalization; an administrator cannot turn these on for a user while the admin control is off. Microsoft Learn documents no Microsoft 365 admin center path for the tenant control at the time of writing (November 2026). Retention policies are not a control over memory, and Learn describes eDiscovery as a way to search and delete memory data, not as a switch. Learn says admins can search users' memory through Microsoft Purview eDiscovery or Content Search; custom instructions aren't yet discoverable in these solutions.

## Open questions

- Does the enhancedPersonalizationSetting control switch off the "Work insight" inferences in the notice completely, or only the memory features Learn lists? Watch the Enhanced personalization control overview on Learn.
- Will Microsoft add an admin centre path for the Enhanced personalization control, and will the Graph operation move from beta to v1.0 before the expected rollout completion by the end of November 2026?
- Is any licence or meter specific to work-data inferences planned? None is published, and the notice says only that no additional work is required from the admin.
- When the roadmap item moves from In development to a later status, will Microsoft restate the end of November 2026 rollout date again? Watch MC1492154.

<!-- rationale
risk: Medium. Copilot memory draws on Teams chats, Outlook emails and transcripts, is on by default per Learn, and has one documented tenant switch (Graph beta), no Purview audit entries and no retention controls.
cost: Low. Learn says Copilot memory is available to Copilot Chat users with and without a Microsoft Copilot licence and publishes no price or meter; the known cost is admin and communication time.
impact: High. Microsoft's notice MC1492154 says inferences from Microsoft 365 data will be used for Copilot responses as it rolls out, so most Copilot users see changed behaviour unless the control is turned off.
-->
