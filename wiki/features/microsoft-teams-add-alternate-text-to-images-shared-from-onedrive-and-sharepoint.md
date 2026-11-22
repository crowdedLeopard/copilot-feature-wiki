---
title: "Microsoft Teams: alternate text for images shared from OneDrive and SharePoint"
slug: "microsoft-teams-add-alternate-text-to-images-shared-from-onedrive-and-sharepoint"
roadmapId: 571687
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams users will be able to add alt text to OneDrive and SharePoint images in messages, so screen readers can describe them. Microsoft's notice says no admin action is required; plan help desk and accessibility guidance."
status: "rolling-out"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Desktop","Mac","Web"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "user-opt-in"
action: "prepare"
licensing:
  model: "included"
  notes: "Users need a Teams license to use Teams. Microsoft has not published a licensing requirement specific to this alt-text option."
audiences: ["m365-admin","service-owner","change-adoption","end-user"]
tags: ["teams","accessibility","onedrive","sharepoint","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 571687"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=571687"
    kind: "roadmap"
  - title: "MC1523086: Alternate text parameter for ODSP attached images in Teams"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1523086"
    kind: "message-center"
  - title: "Accessibility guide for Microsoft Teams Admins"
    url: "https://learn.microsoft.com/microsoftteams/accessibility-guide-admin"
    kind: "learn"
  - title: "Manage messaging policies in Teams"
    url: "https://learn.microsoft.com/microsoftteams/messaging-policies-in-teams"
    kind: "learn"
  - title: "Set-CsTeamsMessagingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingpolicy"
    kind: "learn"
  - title: "Manage user access to Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/user-access"
    kind: "learn"
  - title: "Limits and specifications for Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/limits-specifications-teams#storage"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Whether users can edit messages they sent in chat"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Messaging policies > policy > Edit > Edit sent messages"
      docs: "https://learn.microsoft.com/microsoftteams/messaging-policies-in-teams"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMessagingPolicy -Identity <policy name> -AllowUserEditMessage $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingpolicy"
    note: "Existing control, not a separate alt-text switch. Edit sent messages lets users edit messages they sent in chat. MC1523086 describes later description updates as editing the sent message."
  - governs: "Tenant or policy switch for alternate text on OneDrive and SharePoint images in Teams"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such setting at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-11-12T01:50:56"
changes:
  - date: "2026-11-22"
    note: "First briefing for this item, based on roadmap record 571687 and Message Center post MC1523086."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 40 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected the Edit sent messages admin path; stated the Teams licence requirement, a note on the editing control and the file-permission source."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 42 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 42
  confirmed: 42
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "d23b980e04b1543cd4f4e54d98861789"
---

## What's changing

Teams will let users add alternate text (alt text) to images attached from OneDrive and SharePoint. According to Microsoft's notice MC1523086, users can add alt text to an image attachment while composing a message, and can add or update the description later by editing their sent message. Screen readers can announce the saved description when users meet the image in the Teams message.

The notice says the description is associated with the image in that Teams message and does not modify the original image file in OneDrive or SharePoint. It names Microsoft 365 users who share or receive image attachments stored in OneDrive and SharePoint through Teams as the people affected, on Teams for Windows, Mac and the web.

The roadmap item is in the Rolling out status with a target of November CY2026, for General Availability and Targeted Release, on Desktop, Mac and Web, in Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. MC1523086, published 2026-10-23, gives a later schedule for General Availability (Worldwide): rollout begins in early December 2026 and is expected to complete by mid-December 2026. The notice's schedule covers Worldwide only. Microsoft Learn does not yet describe this feature, so the behaviour above is the roadmap's and the notice's description.

## Why it matters

This is an accessibility change that arrives through the Teams message composer, not through an admin setting. Microsoft's notice says no admin action is required, and describes users adding the description themselves. The wiki's reading is that the benefit depends on users writing useful descriptions, so the work for a service owner is communication, not configuration.

Because the notice also recommends notifying help desk staff and end users and updating accessibility guidance, expect questions from users about where the option appears and from screen reader users about what they hear. Microsoft's own guidance for Teams admins already points organisations to a user guide on writing effective alt text, which fits this change.

## Risk assessment

**Data exposure**

- The notice says the description belongs to the image in that Teams message and does not change the file in OneDrive or SharePoint. A description is text a user types, so it can describe what an image shows; remind users not to put sensitive detail in it that the surrounding message would not carry.
- MC1523086 lists no compliance considerations. How the saved description is treated by retention, eDiscovery or DLP is a point to confirm in a test tenant (see Open questions).

**Security & identity**

- No change identified in the notice: it describes no new permissions, sharing links or identities. Access to the original shared file continues to depend on OneDrive and SharePoint file permissions; the Teams limits and specifications page says that permissions and file security options set in SharePoint are automatically reflected within Teams.

**Autonomy & actions**

- No change: the notice describes users writing descriptions; it does not describe generated or automatic alt text.

**Change & support**

- Users get a new option in the composer and in sent-message editing. The Teams messaging policy setting Edit sent messages lets users edit messages they sent in chat, and MC1523086 describes later description updates as editing the sent message. Test this in a pilot group before telling users they can change a description after sending.
- Microsoft's notice recommends briefing help desk staff and updating accessibility guidance to encourage concise, meaningful descriptions.

## Cost and licensing

Users need a Teams license to use Teams, per the Manage user access to Microsoft Teams page. Microsoft has not published a licensing requirement specific to this alt-text option: neither the roadmap record nor MC1523086 states one.

No meter or price is documented for it at the time of writing (November 2026). The cost the sources show is indirect: help desk preparation and updating accessibility guidance, as the notice recommends.

## Scope

- **Who:** Microsoft 365 users who share or receive image attachments stored in OneDrive and SharePoint through Teams, per MC1523086.
- **Platforms:** the roadmap lists Desktop, Mac and Web; the notice names Teams on Windows, Mac and the web. Mobile is not listed in either.
- **Clouds:** the roadmap record lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. The notice's rollout schedule gives General Availability (Worldwide) only.
- **Release phase:** General Availability and Targeted Release, per the roadmap record.
- **Timing:** roadmap status Rolling out with a target of November CY2026; the notice gives early to mid-December 2026 for Worldwide General Availability.
- **Roles:** no admin role or prerequisite is documented for this change.

## Governance guidance

### Before rollout

- Tell help desk staff what the change is and when it is due: early to mid-December 2026 for Worldwide General Availability in MC1523086, and the roadmap target of November CY2026.
- Update the organisation's accessibility guidance to ask for concise, meaningful descriptions, as the notice suggests.
- Check the Edit sent messages setting in the Teams messaging policies that your users hold, since the notice says descriptions can be added or updated by editing a sent message.

### At rollout

- Send users the Microsoft guide on writing effective alt text, which the Teams accessibility guide for admins recommends sharing.
- Test with a screen reader user in a pilot group that an image attached from OneDrive or SharePoint announces its saved description.

### After rollout

- Collect help desk questions about where the option appears and feed them into the accessibility guidance.
- Check Message center and the roadmap item for the schedule in GCC, GCC High and DoD, which the notice does not give.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can edit messages they sent in chat</strong><br><small>User</small><br><small class="controls__note">Existing control, not a separate alt-text switch. Edit sent messages lets users edit messages they sent in chat. MC1523086 describes later description updates as editing the sent message.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Messaging policies › policy › Edit › Edit sent messages <a href="https://learn.microsoft.com/microsoftteams/messaging-policies-in-teams" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMessagingPolicy -Identity &lt;policy name&gt; -AllowUserEditMessage $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant or policy switch for alternate text on OneDrive and SharePoint images in Teams</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No admin setting for this feature is documented at the time of writing (November 2026), so the table shows that gap. The one existing control that touches it is the messaging policy setting that lets users edit messages they sent in chat. It is not a separate alt-text switch; MC1523086 describes later description updates as editing the sent message. Messaging policies apply per user, and a user can be assigned only one messaging policy at a time, per the messaging policies page.

## Open questions

- Does turning off **Edit sent messages** in a Teams messaging policy stop users from adding or updating a description after they send a message? Watch the Teams messaging policies page and Message center.
- Will a licensing requirement specific to this alt-text option be published? None is published at the time of writing; watch MC1523086 and the Teams licensing pages.
- Is there a tenant or policy switch for alt text on OneDrive and SharePoint images? None is documented at the time of writing.
- How are saved descriptions treated by retention, eDiscovery and DLP? MC1523086 lists no compliance considerations; confirm in a test tenant.
- When does rollout reach GCC, GCC High and DoD? The roadmap lists these clouds, but the notice's schedule covers Worldwide only.

<!-- rationale
risk: Low. Microsoft's notice MC1523086 says the description is stored with the Teams message and does not change the original file in OneDrive or SharePoint.
cost: Low. The only cost shown is admin and help desk time for communication; Microsoft has not published a licensing requirement specific to this alt-text option.
impact: Medium. Users who share or receive OneDrive and SharePoint images in Teams see a new option, and screen reader users are the people who notice the result.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Security & identity / applicability: Access to the original shared file continues to depend on OneDrive and SharePoint permissions. | Found: In Teams chat and channels, the file sharing settings are based on the sharing settings for SharePoint and OneDrive in the SharePoint admin center. | Fix: Add https://learn.microsoft.com/troubleshoot/microsoftteams/files/guests-cannot-access-files to sources to support the OneDrive-and-SharePoint file-access statement; retain the existing limits-specifications-teams citation for SharePoint permissions. | Source: https://learn.microsoft.com/troubleshoot/microsoftteams/files/guests-cannot-access-files#summary
-->
