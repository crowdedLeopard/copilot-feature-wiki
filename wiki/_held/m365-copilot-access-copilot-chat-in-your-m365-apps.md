---
title: "Microsoft Copilot Chat: side pane in Word, Excel, PowerPoint, Outlook and OneNote for commercial Microsoft 365 users"
slug: "m365-copilot-access-copilot-chat-in-your-m365-apps"
roadmapId: 494830
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","Excel","Word","PowerPoint","Outlook","OneNote"]
summary: "Copilot Chat opens from the side pane of Word, Excel, PowerPoint, Outlook and OneNote for users with a commercial Microsoft 365 licence, not only Copilot licence holders. It has launched; decide who should have it and set the policies now."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "July CY2025"
previewDate: null
risk: "medium"
cost: "low"
impact: "high"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "Microsoft's overview describes Copilot Chat (Basic) as included with eligible Microsoft 365 licences, listed on the License options page. The full in-app experience needs the Microsoft 365 Copilot add-on licence."
audiences: ["m365-admin","security","service-owner","change-adoption"]
tags: ["copilot-chat","unlicensed-users","microsoft-365-apps","word","excel","powerpoint","outlook","onenote","usage-reports","group-policy","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap 494830"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=494830"
    kind: "roadmap"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Manage Copilot Chat"
    url: "https://learn.microsoft.com/copilot/manage/manage-copilot-chat"
    kind: "learn"
  - title: "Microsoft Copilot requirements"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements"
    kind: "learn"
  - title: "License options for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/copilot-license-options"
    kind: "learn"
  - title: "Data, Privacy, and Security for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy"
    kind: "learn"
  - title: "Microsoft Copilot Chat usage report"
    url: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-copilot-usage"
    kind: "learn"
  - title: "November 2026 announcements"
    url: "https://learn.microsoft.com/partner-center/announcements/2026-november"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Copilot features in Word, Excel, PowerPoint, Outlook and OneNote (connected experiences that analyse content) (Group Policy Management)"
    url: "https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls"
    kind: "learn"
  - title: "Whether the Copilot app (Copilot Chat in Outlook and the Microsoft Copilot app) is blocked for the whole organisation (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    kind: "learn"
videos: []
related: ["m365-copilot-copilot-chat-agent-mode-in-word-enables-conversational-support-to-create-edit","m365-copilot-copilot-chat-agent-mode-in-excel","usage-reports","web-search","cloud-policy"]
controls:
  - governs: "Copilot features in Word, Excel, PowerPoint, Outlook and OneNote (connected experiences that analyse content)"
    scope: "user"
    ui:
      surface: "Group Policy Management"
      path: "User Configuration > Policies > Administrative Templates > Microsoft Office 2016 > Privacy > Trust Center > Allow the use of connected experiences in Office that analyze content"
      docs: "https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls"
    api:
      kind: "other"
      call: "Registry: HKEY_CURRENT_USER\\Software\\Policies\\Microsoft\\office\\16.0\\common\\privacy \"usercontentdisabled\"=dword:00000002"
      docs: "https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls"
    note: "Disabled also turns off other connected experiences that analyse content. The page says the policy can be set through Cloud Policy too. 2=Disabled."
  - governs: "Whether the Copilot app (Copilot Chat in Outlook and the Microsoft Copilot app) is blocked for the whole organisation"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Integrated Apps > Available Apps > app > Block app"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    api: null
    note: "Global Administrator. Blocks licensed users too. Learn does not say whether the Graph copilotPackage block (beta) applies to the built-in Copilot app."
  - governs: "Which users can install and use the Copilot app in Outlook and the Microsoft Copilot app"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Integrated Apps > Available Apps > app > Users > Specific users/group in the organization can install"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    api: null
    note: "Global Administrator. Microsoft suggests assigning a group of licensed users to keep the app from unlicensed users."
  - governs: "Admin switch for Copilot Chat in the Word, Excel, PowerPoint and OneNote side pane alone"
    scope: "tenant"
    ui: null
    api: null
    note: "Not documented as a separate setting at the time of writing (November 2026); use the connected-experiences policy, which removes more than Copilot."
confidence: "medium"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-05-05T23:00:02"
changes:
  - date: "2026-11-28"
    note: "New briefing: Copilot Chat in the side pane of Word, Excel, PowerPoint, Outlook and OneNote for commercial Microsoft 365 users, with the documented admin controls."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 57 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 57
  confirmed: 51
  unconfirmed: 2
  contradicted: 4
  attempts: 1
  hash: "401384914911771cdb0798272b751b86"
---

## What's changing

Copilot Chat can be opened from the side pane in Word, Excel, PowerPoint, Outlook and OneNote by users who hold a commercial Microsoft 365 licence, as well as by users with a Microsoft 365 Copilot licence. The roadmap item lists desktop and web.

Microsoft's [Copilot overview](https://learn.microsoft.com/copilot/plan/copilot-overview) describes the in-app experience for users without the add-on as **Microsoft 365 Copilot (Basic)**: such users "can use Copilot in Word, Excel, PowerPoint, and OneNote", with in-app tasks such as drafting and summarising in Word, analysing data in Excel and drafting emails in Outlook. Responses are grounded in web data; Basic users cannot use organisational data through Microsoft Graph, and supply work content by uploading it or working with open content. Some features are subject to fair use limits.

The same Learn page also describes a separate **Copilot Chat (Basic)** tier whose users "don't have access to Copilot in Word, Excel, PowerPoint, and OneNote". The roadmap item says a commercial Microsoft 365 licence is enough. Microsoft does not say which eligible licences fall into which tier, so the two sources are reported side by side here.

The roadmap item is **Launched**, in **General Availability**, with a target of July CY2025, for the Worldwide (Standard Multi-Tenant) cloud.

## Why it matters

This puts a generative AI chat inside the everyday Office apps of the whole licensed workforce, not only the people the organisation chose to buy Copilot for. Microsoft describes Copilot Chat as available to users with an eligible Microsoft 365 subscription, so unless an administrator has acted, expect users to find it already there. The questions that follow are which users should have it, what they may paste or open into it, and how the help desk answers "why does my colleague get more than I do?".

The controls are uneven. Outlook and the Copilot app are managed through Integrated Apps, but the documented admin route for Word, Excel, PowerPoint and OneNote is the connected-experiences privacy policy, which removes far more than Copilot. Plan the decision before relying on either.

## Risk assessment

**Data exposure**
- Users can bring open or uploaded documents into Copilot Chat. Microsoft states that Copilot Chat (Basic) and Microsoft 365 Copilot (Basic) are protected by Enterprise Data Protection when users sign in with Microsoft Entra accounts, and that Basic users cannot use organisational data through Microsoft Graph.
- Responses are grounded in the public web. The **Allow web search in Copilot** policy governs this and, per Microsoft, applies to Copilot Chat across all licences (see [/concepts/web-search/](/concepts/web-search/)).

**Security & identity**
- Microsoft lists Copilot Chat entry points for users signed in with a personal Microsoft account, and points administrators to Tenant Restrictions v2 to manage personal-account sign-in to Microsoft 365 apps.
- The Integrated Apps controls are available only to Global Administrators, according to the Integrated Apps page.

**Autonomy & actions**
- No change described: the roadmap item and the overview describe a chat pane that drafts, summarises and analyses on request.

**Change & support**
- Microsoft introduced additional fair use limits for users without a Copilot licence from November 2, 2026 (organisations with 2,000 or fewer seats) and November 9, 2026 (larger organisations); admins cannot view or adjust them.
- Turning off connected experiences that analyse content removes Copilot from these apps but also removes other content-analysing features, so expect user complaints if it is used as the switch.

## Cost and licensing

**Licence.** The [Copilot overview](https://learn.microsoft.com/copilot/plan/copilot-overview) calls Copilot Chat (Basic) "the standalone baseline experience included with eligible Microsoft 365 licenses", and the [requirements page](https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements) says Copilot Chat "is available to users with an eligible Microsoft 365 subscription". The eligible plans are listed on [License options for Microsoft Copilot](https://learn.microsoft.com/copilot/plan/copilot-license-options) and include Microsoft 365 E3 and E5 and Office 365 E3 and E5. The full in-app experience comes with the Microsoft 365 Copilot add-on licence.

**Meter.** No meter is documented for chatting in the side pane. The overview notes that access to custom or other agents from Copilot Chat is pay-as-you-go; that is billed separately (see [/concepts/copilot-credits/](/concepts/copilot-credits/)).

**Limits.** Fair use limits apply to some features. Microsoft states that it sets and manages them, does not publish specific limits, and that admins cannot view or adjust them.

**Indirect costs.** Help-desk time for fair-use and licence-difference questions, and user communication.

## Scope

- **Users:** holders of a commercial Microsoft 365 licence, per the roadmap item; Microsoft 365 Copilot licence holders get the full experience.
- **Apps:** Word, Excel, PowerPoint, Outlook and OneNote, per the roadmap record.
- **Platforms:** Desktop and Web, per the roadmap record.
- **Cloud:** Worldwide (Standard Multi-Tenant) only on the roadmap record.
- **Admin roles:** Global Administrator for Integrated Apps; the AI Administrator role manages Copilot and AI features across Copilot Chat tiers.
- **Prerequisite:** users must sign in with a Microsoft Entra work or school account to get enterprise protections.

## Governance guidance

### Before rollout
- Decide whether Copilot Chat in the Office apps is for every user with an eligible licence or only for Microsoft 365 Copilot licence holders.
- Check whether the *Allow the use of connected experiences in Office that analyze content* policy is set anywhere in Group Policy or Cloud Policy, because disabling it already removes Copilot from Word, Excel, PowerPoint, Outlook and OneNote.
- Review the availability of the Copilot app in Microsoft 365 admin center > Settings > Integrated Apps, which governs Copilot Chat in Outlook.
- Brief the help desk on the difference between Copilot Chat and Microsoft 365 Copilot and on fair use limits.

### At rollout
- Set the Copilot app's availability to **Specific users/group in the organization can install** if only some users should have it in Outlook and the Copilot app.
- Disable connected experiences that analyse content only for users who must have no Copilot in the Office apps, and tell them which other features go with it.
- Tell users to sign in with their work account so Enterprise Data Protection applies.

### After rollout
- Open the Copilot Chat usage report (Microsoft 365 admin center > Reports > Usage > Microsoft Copilot > Copilot Chat) to see use in Word, Excel, PowerPoint and OneNote by unlicensed users.
- Watch Message center for changes to fair use limits and to the Copilot Chat tiers.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Copilot features in Word, Excel, PowerPoint, Outlook and OneNote (connected experiences that analyse content)</strong><br><small>User</small><br><small class="controls__note">Disabled also turns off other connected experiences that analyse content. The page says the policy can be set through Cloud Policy too. 2=Disabled.</small></td><td data-label="Admin UI"><strong>Group Policy Management</strong><br>User Configuration › Policies › Administrative Templates › Microsoft Office 2016 › Privacy › Trust Center › Allow the use of connected experiences in Office that analyze content <a href="https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry: HKEY_CURRENT_USER\Software\Policies\Microsoft\office\16.0\common\privacy &quot;usercontentdisabled&quot;=dword:00000002</code> <a href="https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the Copilot app (Copilot Chat in Outlook and the Microsoft Copilot app) is blocked for the whole organisation</strong><br><small>Tenant</small><br><small class="controls__note">Global Administrator. Blocks licensed users too. Learn does not say whether the Graph copilotPackage block (beta) applies to the built-in Copilot app.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Integrated Apps › Available Apps › app › Block app <a href="https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users can install and use the Copilot app in Outlook and the Microsoft Copilot app</strong><br><small>Group</small><br><small class="controls__note">Global Administrator. Microsoft suggests assigning a group of licensed users to keep the app from unlicensed users.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Integrated Apps › Available Apps › app › Users › Specific users/group in the organization can install <a href="https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Admin switch for Copilot Chat in the Word, Excel, PowerPoint and OneNote side pane alone</strong><br><small>Tenant</small><br><small class="controls__note">Not documented as a separate setting at the time of writing (November 2026); use the connected-experiences policy, which removes more than Copilot.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

- Microsoft Learn documents no admin setting that removes Copilot Chat from the Word, Excel, PowerPoint and OneNote side pane alone at the time of writing (November 2026). The documented route is the connected-experiences policy, which Microsoft says makes Copilot features unavailable in Excel, OneNote, Outlook, PowerPoint and Word on Windows, Mac, iOS and Android, and which also turns off other connected experiences that analyse content. The privacy page does not list Office for the web for this effect.
- Integrated Apps governs the Copilot app in Outlook and the Microsoft Copilot app. Microsoft notes that the Copilot app settings apply to both Microsoft Copilot and Copilot Chat, and that blocking it applies tenant-wide, including to users with a Microsoft 365 Copilot licence.
- Integrated Apps controls are available only to Global Administrators per the Integrated Apps page; the registry and Group Policy settings act per user.

## Open questions

- Which eligible Microsoft 365 licences give users Copilot in Word, Excel, PowerPoint and OneNote (Microsoft 365 Copilot (Basic)) and which give only Copilot Chat (Basic)? Watch the Copilot overview on Microsoft Learn.
- Will Microsoft add an admin setting that removes Copilot Chat from the Office apps' side pane without disabling other connected experiences? Watch Message center and the Manage Copilot Chat page.
- Which control removes Copilot Chat from Word, Excel, PowerPoint and OneNote on the web, which the connected-experiences page does not list?
- Does the Microsoft 365 Copilot app's block in Integrated Apps affect the side pane in Word, Excel, PowerPoint and OneNote, which the Manage Copilot Chat page does not mention?

<!-- rationale
risk: Medium. Users without a Copilot licence can send open document content to Copilot Chat; it runs under Enterprise Data Protection and cannot reach Microsoft Graph, but the documented off switch for the apps is a broad privacy policy.
cost: Low. Microsoft describes Copilot Chat as included with eligible Microsoft 365 licences; the cost is admin time and help-desk load, including questions about fair use limits Microsoft introduced in November 2026.
impact: High. Every user with an eligible commercial Microsoft 365 licence can meet Copilot Chat in the apps they use all day, without a Copilot licence being assigned.
-->

<!-- verifier-findings (2026-11-28, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] front matter: defaultState; Why it matters / default: The app side-pane change is on by default and users should already find it there unless an administrator acted. | Found: Searched: Copilot Chat Word Excel PowerPoint OneNote side pane default enabled; Copilot Chat side pane enabled by default. Read requirements, overview, manage-copilot-chat, privacy controls and utcm-copilot-resources; none states this side-pane rollout default. | Fix: Set defaultState to unknown. Replace 'so unless an administrator has acted, expect users to find it already there' with 'Microsoft has not stated the default state of this side-pane change in the sources cited here'. Availability to eligible subscribers does not itself establish its rollout default.
- [unsupported, blocker] Cost and licensing: Licence; front matter: licensing.notes / licensing: The License options page establishes the eligible Copilot Chat baseline plans, including Microsoft 365 E3/E5 and Office 365 E3/E5. | Found: Searched: Copilot Chat included eligible subscriptions Microsoft 365 E3 E5 Office 365 E3 E5. Read license-options, requirements, overview, service description and E3/E5/E7 comparison; the licence table lists add-on prerequisites, not Chat baseline eligibility. | Fix: Replace the eligible-plans sentence with 'The License options page lists Microsoft 365 E3 and E5 and Office 365 E3 and E5 as qualifying prerequisite licences for Microsoft Copilot.' In licensing.notes, remove ', listed on the License options page'. Do not present the add-on prerequisite table as a published Copilot Chat tier entitlement table.
- [contradicted, blocker] controls[2].governs; governance: At rollout, first bullet / applicability: Setting Specific users/group in the organization can install determines which users can use the Copilot app without qualification. | Found: The availability setting of an app doesn't impact any admin deployed apps. The availability setting only allows you to control which end users can install and use these apps on their own. Any previous admin deployments made are still be honored. | Fix: Change controls[2].governs to 'Which users can self-install and use the Copilot app in Outlook and the Microsoft Copilot app'. Add to its note and the At rollout bullet: 'The availability setting does not override admin-deployed apps; previous admin deployments remain honoured.' | Source: https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365
- [contradicted, blocker] controls[3].ui and api; Why it matters; Governance controls: first bullet; Open questions: second bullet / absence: Microsoft documents no separate administrator setting for Copilot Chat in the Microsoft 365 app side pane. | Found: Shows or hides Microsoft 365 Copilot Chat entry points in Microsoft 365 apps for users without a Microsoft 365 Copilot license. 0 disables the setting; 1 enables the setting. This policy doesn't apply to licensed users. | Fix: Remove controls[3] and the claim that there is no separate setting, including the corresponding open question. Replace the absence and only-broad-policy statements with: 'Microsoft documents a Copilot Chat side-pane Office Cloud Policy setting for users without a Microsoft 365 Copilot licence. The microsoft.copilot.copilotchatsidepane resource uses string value "0" to disable and "1" to enable it; it does not apply to licensed users. Tenant Configuration Management support is preview and limited to tenant-level policies, with no group-level policy configuring the target setting.' Cite https://learn.microsoft.com/graph/utcm-copilot-resources and https://learn.microsoft.com/graph/utcm-remediation-applyonce-resources. Keep the broad connected-experiences control described as an existing alternative, not the only documented route. | Source: https://learn.microsoft.com/graph/utcm-copilot-resources#copilotchatsidepane-resource-type
- [contradicted, blocker] Why it matters: first paragraph; summary; rationale: impact / availability: Copilot Chat in Word, Excel, PowerPoint and OneNote reaches the whole eligible licensed workforce, rather than depending on its Basic tier and tenant configuration. | Found: Chat experiences in Microsoft 365 apps vary depending on your tenant configuration and license. ... You don't have the Microsoft 365 Copilot add-on license and don't have access to Copilot in Word, Excel, PowerPoint, and OneNote. | Fix: Replace 'the whole licensed workforce' with 'users entitled to an in-app Copilot experience, including some users without the Copilot add-on'. Replace the summary's opening sentence with 'The launched roadmap item describes Copilot Chat side panes for commercial Microsoft 365 users; current Learn documentation says in-app access depends on licence and tenant configuration.' Replace the impact rationale's universal-access sentence with 'High. The roadmap describes access beyond Copilot add-on licence holders, while current Learn documentation distinguishes Basic users with and without in-app access.' Keep the documented tier caveat alongside the roadmap description wherever availability is stated. | Source: https://learn.microsoft.com/copilot/plan/copilot-overview
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.notes; Cost and licensing: Licence; Scope: Users / licensing: The full in-app experience comes with the Microsoft 365 Copilot add-on licence. | Found: You have the Microsoft 365 Copilot add-on license with access to the full experience of Copilot in Word, Excel, PowerPoint, and OneNote. | Fix: Replace 'The full in-app experience needs the Microsoft 365 Copilot add-on licence' and the corresponding cost sentence with 'The overview describes the full in-app experience as Microsoft 365 Copilot (Premium); the License options page says Microsoft Copilot is included with Microsoft 365 E7 or available as an add-on for eligible plans.' Cite https://learn.microsoft.com/copilot/plan/copilot-license-options, which the page already lists. | Source: https://learn.microsoft.com/copilot/plan/copilot-overview
- [supported, minor] Risk assessment: Data exposure; rationale: risk / behaviour: Users without a Copilot licence can ask Copilot about content in an open document in an eligible Microsoft 365 app. | Found: Controls whether users can ask Copilot questions about the file currently open in an eligible Microsoft 365 app, such as requesting summaries, key action items, or rewrites. This policy applies only to users without a Microsoft 365 Copilot license. | Fix: Cite https://learn.microsoft.com/graph/utcm-copilot-resources#blockaccesstoopenfiles-resource-type for the open-document premise. The cited overview's explicit open-content examples are Teams and Outlook, not Word. | Source: https://learn.microsoft.com/graph/utcm-copilot-resources#blockaccesstoopenfiles-resource-type
- [supported, minor] Governance guidance: After rollout, first bullet / applicability: The Copilot Chat usage report covers users without a Copilot licence interacting in Word, Excel, PowerPoint and OneNote. | Found: The report currently supports only users without a Microsoft Copilot license who interact with Copilot Chat in Teams, Outlook, m365.cloud.microsoft/chat, Microsoft Copilot (app), Microsoft Edge, Word, Excel, PowerPoint, and OneNote. | Fix: Add to the report sentence: 'The report-specific page says this currently covers only users without a Copilot licence, although the Copilot overview describes the Chat usage report as applying to all licences.' Both https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-copilot-usage and https://learn.microsoft.com/copilot/plan/copilot-overview are already cited. | Source: https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-copilot-usage
- [contradicted, minor] Governance guidance: After rollout; Governance controls table / consistency: The checklist tells administrators to use a reporting control that has no row in the controls table. | Found: After rollout: 'Open the Copilot Chat usage report ...' Controls table: connected experiences, Copilot app blocking, Copilot app self-installation availability, and an absent side-pane switch; no usage-report row. | Fix: Remove the instruction to open the usage report from the governance checklist; retain its verified description outside the checklist if desired. Do not add a new control row in this correction.
-->
