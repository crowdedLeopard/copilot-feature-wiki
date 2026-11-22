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
  model: "unknown"
  notes: "Not yet published. Neither the roadmap record nor Microsoft's notice MC1523086 names a licence for this change."
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
  - title: "Microsoft Teams Premium licensing"
    url: "https://learn.microsoft.com/microsoftteams/teams-add-on-licensing/licensing-enhance-teams"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Whether users can edit messages they sent in chat"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Messaging policies > policy > Edit sent messages"
      docs: "https://learn.microsoft.com/microsoftteams/messaging-policies-in-teams"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMessagingPolicy -Identity <policy name> -AllowUserEditMessage $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingpolicy"
    note: "Existing control, not a switch for alt text. MC1523086 says descriptions can be updated by editing a sent message; whether this setting governs that is not documented."
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
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 40
  confirmed: 39
  unconfirmed: 0
  contradicted: 1
  attempts: 1
  hash: "b5268e38864a9894540181910f347e43"
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

- No change identified in the notice: it describes no new permissions, sharing links or identities. Image access continues to be decided by OneDrive and SharePoint permissions on the shared file.

**Autonomy & actions**

- No change: the notice describes users writing descriptions; it does not describe generated or automatic alt text.

**Change & support**

- Users get a new option in the composer and in sent-message editing. The Teams messaging policy setting Edit sent messages decides whether users can edit messages they sent in chat, so test whether turning it off affects later description updates before telling users they can change a description after sending.
- Microsoft's notice recommends briefing help desk staff and updating accessibility guidance to encourage concise, meaningful descriptions.

## Cost and licensing

No licence is named for this change. Neither the roadmap record nor MC1523086 states one, and the Teams Premium licensing page does not mention alternate text for image attachments. A licence for this change is not yet published.

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
<tr><td data-label="Control"><strong>Whether users can edit messages they sent in chat</strong><br><small>User</small><br><small class="controls__note">Existing control, not a switch for alt text. MC1523086 says descriptions can be updated by editing a sent message; whether this setting governs that is not documented.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Messaging policies › policy › Edit sent messages <a href="https://learn.microsoft.com/microsoftteams/messaging-policies-in-teams" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMessagingPolicy -Identity &lt;policy name&gt; -AllowUserEditMessage $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant or policy switch for alternate text on OneDrive and SharePoint images in Teams</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No admin setting for this feature is documented at the time of writing (November 2026), so the table shows that gap. The one existing control that touches it is the messaging policy setting that lets users edit messages they sent in chat. It governs editing in general; Microsoft has not said whether it also governs updating an image description after sending. Messaging policies apply per user, and a user can be assigned only one messaging policy at a time, per the messaging policies page.

## Open questions

- Does turning off **Edit sent messages** in a Teams messaging policy stop users from adding or updating a description after they send a message? Watch the Teams messaging policies page and Message center.
- Which licence, if any, does this change require? A licence is not yet published; watch MC1523086 and the Teams licensing pages.
- Is there a tenant or policy switch for alt text on OneDrive and SharePoint images? None is documented at the time of writing.
- How are saved descriptions treated by retention, eDiscovery and DLP? MC1523086 lists no compliance considerations; confirm in a test tenant.
- When does rollout reach GCC, GCC High and DoD? The roadmap lists these clouds, but the notice's schedule covers Worldwide only.

<!-- rationale
risk: Low. Microsoft's notice MC1523086 says the description is stored with the Teams message and does not change the original file in OneDrive or SharePoint.
cost: Low. The only cost shown is admin and help desk time for communication; a licence for this change is not yet published.
impact: Medium. Users who share or receive OneDrive and SharePoint images in Teams see a new option, and screen reader users are the people who notice the result.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].ui / admin-path: Teams admin center > Messaging policies > policy > Edit sent messages is the route to the message-editing control. | Found: In the left navigation of the Microsoft Teams admin center, go to Messaging policies. Select the policy by clicking to the left of the policy name, and then select Edit. | Fix: Replace controls[0].ui.path and the rendered table path with 'Messaging policies > policy > Edit > Edit sent messages'. Keep Teams admin center as the surface and https://learn.microsoft.com/microsoftteams/messaging-policies-in-teams as docs. | Source: https://learn.microsoft.com/microsoftteams/messaging-policies-in-teams
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model; Cost and licensing; Open questions; rationale: cost / licensing: Licensing is unknown because Microsoft has not published licensing specific to this change. | Found: Except for joining Teams meetings anonymously, each user in your organization must have a Teams license before they can use Teams. | Fix: Set licensing.model to included. Replace licensing notes and the feature-licence gap wording in Cost and licensing, Open questions and the cost rationale with: 'Users need a Teams license to use Teams. Microsoft has not published a licensing requirement specific to this alt-text option.' Cite https://learn.microsoft.com/microsoftteams/user-access. | Source: https://learn.microsoft.com/microsoftteams/user-access
- [supported, minor] controls[0].note; Risk assessment: Change & support; Governance controls / applicability: Edit sent messages governs message editing in general, but its applicability to later image-description updates is not confirmed. | Found: Edit sent messages - Use this setting to let users edit the messages that they sent in chat. | Fix: Replace the control note and its repeated caveat in Governance controls with: 'Existing control, not a separate alt-text switch. Edit sent messages lets users edit messages they sent in chat. MC1523086 describes later description updates as editing the sent message.' Keep the pilot-test advice without asserting undocumented field-specific behaviour. | Source: https://learn.microsoft.com/microsoftteams/messaging-policies-in-teams
- [supported, minor] Risk assessment: Security & identity / applicability: Access to the shared image continues to depend on OneDrive and SharePoint file permissions. | Found: Files shared within a conversation are automatically added to the document library, and permissions and file security options set in SharePoint are automatically reflected within Teams. | Fix: Cite https://learn.microsoft.com/microsoftteams/limits-specifications-teams#storage for the existing file-permission boundary. Keep this about access to the original shared file, not access to the saved description. | Source: https://learn.microsoft.com/microsoftteams/limits-specifications-teams#storage
-->
