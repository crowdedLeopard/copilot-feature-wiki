---
title: "Microsoft Teams: external presenters in event group chat"
slug: "microsoft-teams-external-presenter-support-for-event-group-chat"
roadmapId: 573706
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Microsoft plans to let presenters from other tenants join the event group chat in Teams events and structured meetings, with rollout from late March 2027. Check external access settings and brief organisers."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Mac"]
targetDate: "March CY2027"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Teams events use the organiser's eligible Teams licence; Microsoft documents Teams Enterprise event entitlements. An additional licence, price or meter specific to this external-presenter chat change is not yet published."
audiences: ["m365-admin","service-owner","security","change-adoption"]
tags: ["teams","teams-events","cross-tenant","meeting-policy","admin-center"]
sources:
  - title: "Microsoft 365 Roadmap 573706"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=573706"
    kind: "roadmap"
  - title: "MC1528011: (Updated) Microsoft Teams: External presenter support for event group chat"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1528011"
    kind: "message-center"
  - title: "IT Admins - Manage external meetings and chat with people and organizations using Microsoft identities"
    url: "https://learn.microsoft.com/microsoftteams/manage-external-access"
    kind: "learn"
  - title: "Unified external collab settings management"
    url: "https://learn.microsoft.com/microsoftteams/unified-external-collab-settings-management-experience"
    kind: "learn"
  - title: "Manage join verification for external presenters in Teams events"
    url: "https://learn.microsoft.com/microsoftteams/events-external-presenter-join-verification"
    kind: "learn"
  - title: "Manage chat for Teams events"
    url: "https://learn.microsoft.com/microsoftteams/manage-event-chat"
    kind: "learn"
  - title: "Plan for Teams events"
    url: "https://learn.microsoft.com/microsoftteams/plan-events"
    kind: "learn"
  - title: "Teams events licensing overview"
    url: "https://learn.microsoft.com/microsoftteams/events-licensing"
    kind: "learn"
  - title: "Set-CsTenantFederationConfiguration"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-cstenantfederationconfiguration"
    kind: "learn"
  - title: "Set-CsTeamsEventsPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamseventspolicy"
    kind: "learn"
videos: []
related: ["microsoft-teams-chat-for-organizers-and-presenters-in-structured-meetings-and-webinars-on","microsoft-teams-external-presenters-can-access-production-controls-for-teams-events"]
controls:
  - governs: "Which external organisations your users can chat and meet with"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Users > External access > Teams and Skype for Business users in external organizations > Allow only specific external domains > Add external domains"
      docs: "https://learn.microsoft.com/microsoftteams/manage-external-access"
    api:
      kind: "powershell"
      call: "Set-CsTenantFederationConfiguration -AllowFederatedUsers $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-cstenantfederationconfiguration"
    note: "Existing setting. MC1528011 names external user collaboration as a prerequisite and labels it External collaboration; Learn places the External access page inside that section."
  - governs: "Which users may chat and meet with people outside the organisation"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Users > External access > Policies > policy > Manage external domains for this policy"
      docs: "https://learn.microsoft.com/microsoftteams/manage-external-access"
    api:
      kind: "powershell"
      call: "Set-CsExternalAccessPolicy -EnableFederationAccess $true"
      docs: "https://learn.microsoft.com/microsoftteams/manage-external-access"
    note: "Existing policy; the default policy is Org-wide default settings. Learn says organisation settings can override it."
  - governs: "Whether external presenters must verify their identity before joining an event"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Events policies > policy > Verify external presenters before joining an event"
      docs: "https://learn.microsoft.com/microsoftteams/events-external-presenter-join-verification"
    api:
      kind: "powershell"
      call: "Set-CsTeamsEventsPolicy -Identity <policy name> -ExternalPresenterJoinVerification EOTP"
      docs: "https://learn.microsoft.com/microsoftteams/events-external-presenter-join-verification"
    note: "The join-verification how-to documents this command; the Set-CsTeamsEventsPolicy reference marks the policy as preview."
  - governs: "Switch for external presenters in event group chat"
    scope: "tenant"
    ui: null
    api: null
    note: "Learn's events planning page lists \"No control\" for admins over event group chat."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-26"
roadmapModified: "2026-11-19T00:53:06"
changes:
  - date: "2026-11-16"
    note: "First briefing for this item, based on roadmap item 573706 and Message Center post MC1528011 as updated on 29 October 2026."
  - date: "2026-11-16"
    note: "Corrected the two external access PowerShell calls to valid syntax, explained how the notice's External collaboration label relates to Users > External access, and added Learn's statement that admins have no control over event group chat."
  - date: "2026-11-17"
    note: "Corrected the audit and retention open question to cite Learn's Teams retention page, completed two admin paths, and noted that a custom external access policy's domain setting takes precedence over organisation settings."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 58 statements confirmed"
  - date: "2026-11-18"
    note: "Message Center post MC1528011 (updated 18 November 2026) moved the rollout to late March 2027 (previously early December 2026); action changes to prepare. Retention page claim removed."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 56 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected licensing to Teams events organiser licences (cost stays low), removed an unsupported external access policy caveat, and reworded the timeline-change statements; added a preview note on the events policy reference."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 63 statements confirmed"
  - date: "2026-11-19"
    note: "Roadmap target moved from December CY2026 to March CY2027, now matching the notice's late March 2027 rollout; removed a reference-page claim about a missing parameter."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 68 statements confirmed"
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 75 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected the AllowedDomains note: it takes a domain object from New-CsEdgeAllowList or New-CsEdgeAllowAllKnownDomains, not a string; completed the two external access admin paths."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 60 statements not yet confirmed"
version: 7
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 7
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 60
  confirmed: 60
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "9a54ec9f8929f73658da508b82777a77"
---

## What's changing

Microsoft is adding support for external presenters in event group chat, the private chat that organisers, co-organisers and presenters use to coordinate during an event or structured meeting. A presenter from outside the tenant that hosts the meeting or event will be able to take part in that chat. For events optimised for large audiences, Microsoft Learn describes the existing chat as available before, during and after an event, and separate from the chat with attendees.

Microsoft's notice MC1528011 (published 27 October 2026, updated 18 November 2026) says the chat is used in meetings or events that have the **Enable Green room** Teams meeting option turned on, and that external user collaboration must be enabled for external presenters to use it. Microsoft Learn does not yet describe this change itself, so what follows about its behaviour is the roadmap item's description and the notice's.

The updated notice gives the General Availability (Worldwide) rollout as beginning in late March 2027 (previously early December 2026) and expected to complete by mid-April 2027 (previously early January). The roadmap item shows the status In development with a target of March CY2027, release phases General Availability and Targeted Release, and the platforms Android, Desktop, iOS and Mac. Both fall in March 2027. The notice sets no act-by date. Dates are Microsoft's targets.

The notice also states that external federated presenters will be able to read and post in the chat, including messages written before they joined if the thread shows history, and that the presenter's stored tenantId changes from the organiser's tenant to the presenter's own tenant.

## Why it matters

This opens a new cross-tenant chat path between the hosting organisation and its external presenters, in a chat that organisers use for backstage coordination. The notice itself describes it as a new way of communicating between tenants and says both tenants must allow external access.

The notice says external presenters will be able to join the chat, and sets no admin switch for it, so expect organisers who invite external presenters to green room events to start putting them in the group chat, where earlier internal messages may be visible. Decide before the late March 2027 start whether that is acceptable, and tell organisers what not to post in that chat.

## Risk assessment

**Data exposure**

- External federated presenters can read and post in the event group chat, and the notice says that includes messages written before they joined if the thread shows history. Anything internal already in that chat, such as run-of-show notes, is visible to them.
- The notice states that the change stores no new customer data and that external presenters' messages fall under existing federated-chat handling.

**Security & identity**

- The change adds a cross-tenant chat path between the organiser's tenant and external presenters; the notice says both tenants must allow external access. The partner organisation's own external access settings therefore decide whether its presenters can join.
- The notice says the presenter's stored tenantId changes to the presenter's own tenant. Confirm with Microsoft how this affects audit or retention records for the chat before relying on them.

**Autonomy & actions**

- No agent or automated action is described. External presenters take part in a chat as people do.

**Change & support**

- Learn's events planning page lists no admin control for event group chat at the time of writing (November 2026), so the levers are the existing external access settings. Expect helpdesk questions when a presenter from a blocked or non-federated domain cannot see the chat.
- The notice's timeline changed on 18 November 2026, so communications planned around early December 2026 need re-dating.

## Cost and licensing

Teams events use the organiser's eligible Teams licence; Microsoft documents Teams Enterprise event entitlements. An additional licence, price or meter specific to this external-presenter chat change is not yet published. Microsoft's events licensing page says event capabilities and attendee capacity vary based on the organizer's license ([Teams events licensing overview](https://learn.microsoft.com/microsoftteams/events-licensing); see also [Plan for Teams events](https://learn.microsoft.com/microsoftteams/plan-events)).

The cost that is known is indirect: administrator time to check external access settings and organiser communication.

## Scope

- **Who:** organisers, co-organisers and presenters in meetings or events that use event group chat, including external presenters, per the notice.
- **Prerequisites:** the **Enable Green room** Teams meeting option on the meeting or event, and external user collaboration enabled, per the notice. Microsoft Learn says the organisation setting and a user policy must both allow external access, and that both are turned on by default.
- **Cloud:** Worldwide (Standard Multi-Tenant) on the roadmap record. Other clouds are not listed.
- **Platforms:** Android, Desktop, iOS and Mac on the roadmap record.
- **Rollout:** General Availability, beginning late March 2027 and expected to complete by mid-April 2027 per MC1528011; the roadmap target is March CY2027 and it also lists Targeted Release.
- **Default:** the notice names no admin switch for the feature. It states what will happen and asks administrators to confirm external collaboration only if they want external presenters to use the chat.

## Governance guidance

### Before rollout

- Check that the organisation setting under Users > External access allows the partner organisations that supply your external presenters, and whether you have restricted it to an allow or block list of domains.
- Review the external access policy assigned to your event organisers as well as the organisation setting: Learn says organisation settings can override policies, and that a custom policy's Allow or block external domains value takes precedence over organisation settings.
- Decide whether external presenters should be verified before they join, using the events policy setting for join verification.
- Tell organisers that external presenters may see earlier messages in the event group chat, and agree what is posted there.

### At rollout

- Watch Message center for MC1528011 for further timeline changes; the dates changed in the 18 November 2026 update.
- Run a test event with the green room enabled and one external presenter from a trusted tenant to confirm what that presenter can see.
- Brief the helpdesk on the green room and external access prerequisites.

### After rollout

- Ask organisers whether presenters from blocked or non-federated domains could not join the chat, and adjust the allow list only where there is a business need.
- Re-check Microsoft Learn for a page that documents this change and for any admin control for event group chat.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which external organisations your users can chat and meet with</strong><br><small>Tenant</small><br><small class="controls__note">Existing setting. MC1528011 names external user collaboration as a prerequisite and labels it External collaboration; Learn places the External access page inside that section.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Users › External access › Teams and Skype for Business users in external organizations › Allow only specific external domains › Add external domains <a href="https://learn.microsoft.com/microsoftteams/manage-external-access" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTenantFederationConfiguration -AllowFederatedUsers $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-cstenantfederationconfiguration" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users may chat and meet with people outside the organisation</strong><br><small>User</small><br><small class="controls__note">Existing policy; the default policy is Org-wide default settings. Learn says organisation settings can override it.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Users › External access › Policies › policy › Manage external domains for this policy <a href="https://learn.microsoft.com/microsoftteams/manage-external-access" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsExternalAccessPolicy -EnableFederationAccess $true</code> <a href="https://learn.microsoft.com/microsoftteams/manage-external-access" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether external presenters must verify their identity before joining an event</strong><br><small>User</small><br><small class="controls__note">The join-verification how-to documents this command; the Set-CsTeamsEventsPolicy reference marks the policy as preview.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Events policies › policy › Verify external presenters before joining an event <a href="https://learn.microsoft.com/microsoftteams/events-external-presenter-join-verification" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsEventsPolicy -Identity &lt;policy name&gt; -ExternalPresenterJoinVerification EOTP</code> <a href="https://learn.microsoft.com/microsoftteams/events-external-presenter-join-verification" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Switch for external presenters in event group chat</strong><br><small>Tenant</small><br><small class="controls__note">Learn's events planning page lists &quot;No control&quot; for admins over event group chat.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The notice names external user collaboration as the prerequisite and points to Teams admin center > External collaboration. Learn describes External Collaboration as a section in the Teams admin center left rail that contains the existing External access page, so the first two rows use the Users > External access path given on the external access page.

The organisation setting and a user policy must both allow external access, and the organisation setting can override the policy. A custom policy's Allow or block external domains value takes precedence over the organisation settings. Both tenants must allow external access per the notice. The PowerShell calls are separate operations. The -AllowedDomains parameter takes a domain object created with New-CsEdgeAllowList or New-CsEdgeAllowAllKnownDomains, not a string; -BlockedDomains takes a list, as the [cmdlet reference](https://learn.microsoft.com/powershell/module/microsoftteams/set-cstenantfederationconfiguration) describes.

Learn's events planning page lists "No control" for admins over event group chat, and also over the green room. The join-verification setting is documented for external presenters joining events; Microsoft has not confirmed that it governs access to the group chat.

## Open questions

- Does a Teams admin setting exist, or will one be added, to stop external presenters joining the event group chat while keeping external access on? Watch Message center and the Teams events Learn pages.
- Can the thread show history to a presenter who joins late, and what decides that? Watch MC1528011 and the manage chat for Teams events page.
- Will Microsoft publish any licence, price or meter specific to external presenters in event group chat? Watch MC1528011 and the Teams events licensing overview.
- What effect does the tenantId correction the notice describes have on audit or retention records for external presenters' messages in this chat? MC1528011 says their messages fall under existing federated-chat handling.
- Does the join-verification setting for external presenters apply to the group chat, or only to joining the event?

<!-- rationale
risk: Medium. Federated external presenters will be able to read and post in the event group chat, including earlier messages if the thread shows history, and Learn lists no admin control for that chat itself.
cost: Low. Teams events use the organiser's eligible Teams licence, and no licence, price or meter specific to this change is yet published; the known added cost is admin time to check settings and brief organisers.
impact: Medium. Organisers, co-organisers and presenters in Teams events and structured meetings with the green room enabled will notice; attendees do not use this chat.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Data exposure / record: Internal material already in the chat, such as run-of-show notes, is visible to external presenters under the preceding history condition. | Found: External federated presenters can now read and post in the event group chat. That includes messages written before they joined, if the thread shows history. | Fix: Replace 'Anything internal already in that chat, such as run-of-show notes, is visible to them.' with 'Internal messages written before they joined, such as run-of-show notes, may be visible to them if the thread shows history.'
-->
