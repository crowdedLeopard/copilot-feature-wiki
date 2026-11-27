---
title: "Microsoft Copilot (Microsoft 365): scheduling meetings from Copilot Chat in GCC, GCC High and DoD"
slug: "m365-copilot-scheduling-with-copilot"
roadmapId: 573220
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans to let users in GCC, GCC High and DoD ask Copilot in chat to find times, book rooms, draft agendas and send invites. The licence and default are not yet published; decide who gets the Copilot app before it lands."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Android","Desktop","iOS","Teams and Surface Devices","Web"]
targetDate: "October CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for this item. Microsoft's requirements page says Microsoft Copilot needs a Microsoft Copilot licence plus a qualifying prerequisite, and Copilot Chat needs an eligible Microsoft 365 subscription; it does not say which tier scheduling belongs to."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["m365-copilot","copilot-chat","outlook","exchange","app-management","admin-controls","licensing","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap item 573220"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=573220"
    kind: "roadmap"
  - title: "Microsoft Copilot (service description)"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot"
    kind: "learn"
  - title: "Understand Microsoft U.S. government cloud environments for Microsoft 365 and Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/gov-overview"
    kind: "learn"
  - title: "Microsoft Copilot requirements"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Manage Copilot Chat"
    url: "https://learn.microsoft.com/copilot/manage/manage-copilot-chat"
    kind: "learn"
  - title: "Apps for Microsoft 365 that work across application hosts"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
videos: []
related: ["app-management"]
controls:
  - governs: "Tenant switch for scheduling with Copilot on its own"
    scope: "tenant"
    ui: null
    api: null
    note: "No scheduling-only setting is documented; the Copilot app controls below cover all of Copilot Chat."
  - governs: "Whether anyone can use the Copilot app, and so Copilot Chat, in the Microsoft Copilot app and Outlook"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Integrated Apps > Available Apps > app > Block app"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    api: null
    note: "Global Admins only, per the page. Blocks all of Copilot Chat, not scheduling alone. Learn pages differ on whether Teams is included; see notes."
  - governs: "Which users can install and use the Copilot app"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Integrated Apps > Available Apps > app > Users > Specific users/group in the organization can install"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    api: null
    note: "Global Admins only, per the page. Does not affect admin-deployed apps. Governs the whole Copilot app, not scheduling alone."
confidence: "medium"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-10-09T22:04:35"
changes:
  - date: "2026-11-27"
    note: "New briefing for the GCC, GCC High and DoD roadmap item; the worldwide feature is listed separately as item 532735."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 61 statements contradicted, 3 unconfirmed; taken offline until corrected"
  - date: "2026-11-27"
    note: "Corrected three unsupported statements: removed the claim that Copilot chooses attendees, and reworded the data-exposure bullets on whose calendars are read and who receives drafted agendas."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 57 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 57
  confirmed: 57
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "66dc96ec4cb28f2222ec4868c00b94f4"
---

## What's changing

Microsoft plans to let users in the US Government clouds schedule appointments and meetings by asking Copilot in chat. The roadmap item states that Copilot "will find available times, book rooms, draft agendas, and send invites—all within the chat experience", on Android, Desktop, iOS, Teams and Surface Devices, and Web.

This item covers GCC, GCC High and DoD. Microsoft lists the same feature for the worldwide cloud under roadmap item 532735, which is marked Launched with a December CY2025 target. The Microsoft Copilot service description notes, in its feature-availability table, that the Schedule with Copilot scenario in Copilot in Outlook is "not yet available in GCC, GCCH, or DOD". Microsoft Learn has no page for this item yet, so what follows about its behaviour is the roadmap's description. The closest Learn text is the August 25, 2026 release note for scheduling with Copilot chat in classic Outlook for Windows (roadmap 542185): it says Copilot "sends invites automatically", and its own steps end with the user reviewing and sending the invite.

The record gives the status as In development, the release phase as General Availability and the target as October CY2026. That target has passed without the record changing; it was last modified on 9 October 2026. Microsoft has not stated whether the feature is on for users when it reaches these clouds.

## Why it matters

Scheduling from chat hands the choice of slot, room and agenda to Copilot, and the result lands in colleagues' calendars and room mailboxes. For a government tenant the decisions are who is entitled to it and whether drafted agendas meet the organisation's rules for meeting content. Microsoft states that Copilot in these clouds operates entirely within the customer's US government cloud tenant, and that prompts, responses and generated content stay in the government cloud.

Microsoft has not stated what happens on arrival. Because no scheduling-only switch is documented, the practical control is who can reach the Copilot app at all, so settle that before the feature ships rather than after the first unexpected room booking.

## Risk assessment

**Data exposure**
- The roadmap says Copilot will find available times. Microsoft has not described which calendar details Copilot reads or shows in chat; confirm this in a pilot before broad use. Microsoft's requirements page states that an Exchange Online mailbox is required for experiences that use email, calendar, meeting or other mailbox data.
- Review any agenda included in a proposed invitation before sending it. Microsoft has not said which content Copilot draws on for agendas.

**Security & identity**
- Microsoft has not described which account books the room and sends the invitation. Confirm this before relying on room booking rules or calendar audit trails that assume a person acted.

**Autonomy & actions**
- The roadmap states that Copilot books rooms and sends invites from chat. For the classic Outlook version, the release note says both that Copilot "sends invites automatically" and that the user's last step is to review and send the invite. Whether this item asks the user to confirm before sending is not stated.

**Change & support**
- Until the service description's note on GCC, GCCH and DoD changes, users can meet worldwide guidance for Schedule with Copilot that does not yet apply to their tenant. Expect help desk questions on both sides of the release.

## Cost and licensing

The licence for scheduling in chat under this item is not yet published. The [Microsoft Copilot requirements](https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements) page sets two tiers: for Microsoft Copilot, users need a Microsoft Copilot licence and a qualifying prerequisite licence; Microsoft Copilot Chat is available to users with an eligible Microsoft 365 subscription. Neither the roadmap item nor the service description says which tier scheduling belongs to.

For a related surface, the [Microsoft 365 Copilot release notes](https://learn.microsoft.com/microsoft-365/copilot/release-notes) (August 25, 2026) state that scheduling with Copilot chat in classic Outlook for Windows "requires a Microsoft 365 Copilot license". That statement is about roadmap item 542185, not this one, but it is the nearest published signal: budget on the possibility that scheduling here needs the Copilot licence.

The cost known today is admin time to set Copilot app availability and to brief meeting organisers and room owners.

## Scope

- **Clouds:** GCC, GCC High and DoD, as the record lists them. The worldwide cloud is roadmap item 532735.
- **Platforms:** Android, Desktop, iOS, Teams and Surface Devices, and Web, as the record lists them. The service description notes that the Microsoft Copilot app isn't available as a Mac desktop app, and Copilot Chat isn't available in the Edge sidebar, for GCC, GCCH and DoD; it lists Copilot in Teams as not currently available in GCCH.
- **Users:** work or school accounts in Microsoft Entra ID, with an Exchange Online mailbox for experiences that use calendar or meeting data (requirements page). The licence tier is not yet published.
- **Roles:** the Integrated Apps controls in the Microsoft 365 admin center are available only to Global Admins, according to that page.
- **Rollout:** In development, General Availability phase, target October CY2026 per the record.

## Governance guidance

### Before rollout
- Decide which users should reach the Copilot app, and set its availability in Integrated Apps to a group of those users.
- Check that those users have Exchange Online mailboxes, which Microsoft lists as required for experiences that use calendar data.
- Prepare guidance for meeting organisers to check the time, room, attendees and agenda Copilot proposes before an invitation goes out.
- Brief owners of room mailboxes that Copilot may book rooms on users' behalf.

### At rollout
- Watch Message center and the service description's feature-availability table for the Schedule with Copilot note on GCC, GCCH and DoD to change.
- Test in a pilot whether Copilot asks the user to confirm before it books a room or sends an invitation, and which colleagues' calendar details it shows.

### After rollout
- Review help desk tickets about unexpected invitations or room bookings in the first weeks.
- Revisit the Copilot app availability once Microsoft publishes the licence for this feature.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant switch for scheduling with Copilot on its own</strong><br><small>Tenant</small><br><small class="controls__note">No scheduling-only setting is documented; the Copilot app controls below cover all of Copilot Chat.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether anyone can use the Copilot app, and so Copilot Chat, in the Microsoft Copilot app and Outlook</strong><br><small>Tenant</small><br><small class="controls__note">Global Admins only, per the page. Blocks all of Copilot Chat, not scheduling alone. Learn pages differ on whether Teams is included; see notes.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Integrated Apps › Available Apps › app › Block app <a href="https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users can install and use the Copilot app</strong><br><small>User</small><br><small class="controls__note">Global Admins only, per the page. Does not affect admin-deployed apps. Governs the whole Copilot app, not scheduling alone.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Integrated Apps › Available Apps › app › Users › Specific users/group in the organization can install <a href="https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no setting that turns scheduling with Copilot on or off by itself at the time of writing (November 2026); the Integrated Apps rows govern the Copilot app as a whole. According to the Integrated Apps page, its controls are only available to Global Admins, and the Copilot app settings there apply to both the Microsoft Copilot and Copilot Chat apps.

The two Learn pages describe the block's reach differently. [Manage Copilot Chat](https://learn.microsoft.com/copilot/manage/manage-copilot-chat) says blocking through Integrated Apps blocks Copilot "in the Microsoft Copilot app, Teams, Outlook, and Copilot Chat on the web for all users". The Integrated Apps page says an app is blocked only in the Microsoft Copilot application and Outlook, and that Teams continues to honour the Teams admin center setting. Manage Copilot Chat says Copilot Chat in Teams is managed through the Copilot app in the Teams admin center.

For US government customers, Manage Copilot Chat advises not deploying the Copilot app to unlicensed users to prevent their access. The Microsoft Graph package-block API (beta) lists the global service only, not US Government L4 or US Government L5 (DOD), requires a Microsoft Agent 365 licence, and its page does not say it applies to the Copilot app.

## Open questions

- Which licence does scheduling with Copilot in chat need in GCC, GCC High and DoD: an eligible Microsoft 365 subscription for Copilot Chat, or a Microsoft Copilot licence? Watch the service description and the Learn release notes.
- Will the feature be on for eligible users when it reaches these clouds, and will Microsoft post a Message center notice for it?
- Does Copilot ask the user to confirm before it books a room or sends an invitation on this item's surfaces?
- Which colleagues' calendar details does Copilot read and show when it finds available times?
- With the October CY2026 target passed, what is Microsoft's new target date for these clouds? Watch the roadmap item.

<!-- rationale
risk: Medium. Copilot books rooms and sends invitations from chat on a user's request, and Microsoft Learn documents no switch for scheduling alone, only controls over the whole Copilot app.
cost: Low. The only cost the sources show is admin and help desk time; which licence covers scheduling in these clouds is not yet published.
impact: Medium. Meeting organisers who use Copilot Chat notice it, and so do the colleagues and room mailboxes that receive the invitations it sends.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters / behaviour: Microsoft's government-cloud overview says Copilot operates entirely within the customer's US government cloud tenant. | Found: Microsoft Copilot is available in GCC, GCC High, and DoD, and operates entirely within the customer's U.S. government cloud tenant. | Fix: Attribute this assurance explicitly to the government-cloud overview and add: 'Microsoft separately documents an optional exception for non-federal GCC customers: enabling Anthropic models processes Customer Data outside the government cloud.' Cite https://learn.microsoft.com/copilot/implement/anthropic-non-federal-gcc, which says: 'When enabled, these Anthropic AI models process Customer Data outside Microsoft’s FedRAMP-authorized U.S. Government cloud.' | Source: https://learn.microsoft.com/copilot/plan/gov-overview
- [supported, minor] Why it matters / behaviour: Microsoft's government-cloud overview says prompts, responses and generated content stay in the government cloud. | Found: Prompts, responses, and generated content stay in the government cloud. | Fix: Keep this statement attributed to the overview, alongside the optional non-federal GCC Anthropic exception, rather than as an unconditional guarantee. Cite https://learn.microsoft.com/copilot/implement/anthropic-non-federal-gcc, which states: 'If you choose to enable Anthropic models, Customer Data will be processed in commercial environments.' | Source: https://learn.microsoft.com/copilot/plan/gov-overview
-->
