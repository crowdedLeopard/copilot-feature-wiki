---
title: "Outlook for Mac and iPad: pop out Copilot Chat into a floating window"
slug: "outlook-copilot-chat-pop-out-for-outlook-for-mac-and-ipad"
roadmapId: 568368
topic: "modern-work"
products: ["Outlook"]
summary: "Copilot Chat in Outlook for Mac and iPad gets a pop-out button that floats the chat over the main Outlook window. It is a display change; no administrator action is documented, and Microsoft has published no pop-out switch."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["iOS","Mac"]
targetDate: "August CY2026"
previewDate: null
risk: "low"
cost: "none"
impact: "low"
defaultState: "user-opt-in"
action: "none"
licensing:
  model: "included"
  notes: "Microsoft Learn describes Copilot Chat (Basic) as the baseline experience included with eligible Microsoft 365 licences, with Copilot Chat in Outlook as an access point. Nothing specific to the pop-out is published."
audiences: ["m365-admin","service-owner","end-user","change-adoption"]
tags: ["outlook","copilot-chat","macos","mobile","user-experience"]
sources:
  - title: "Microsoft 365 Roadmap 568368"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=568368"
    kind: "roadmap"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Manage Copilot Chat"
    url: "https://learn.microsoft.com/copilot/manage/manage-copilot-chat"
    kind: "learn"
  - title: "Apps for Microsoft 365 that work across application hosts"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
videos: []
related: ["m365-copilot-copilot-chat-in-outlook-expands-to-reason-over-inbox-calendar-and-enterprise","microsoft-teams-m365-admin-centers-manage-teams-apps-that-work-on-outlook-and-m365-app","outlook-new-copilot-entry-point-in-classic-outlook"]
controls:
  - governs: "Whether Copilot Chat (the Copilot app) is available in Outlook"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Integrated Apps > Available Apps > app > Block app"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    api: null
    note: "Needs the Global Administrator role. Blocks Copilot Chat in Outlook, Teams and the Copilot app, scopable to users or groups; it is not a pop-out switch."
  - governs: "Switch for the Copilot Chat pop-out in Outlook for Mac and iPad"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no setting for the pop-out at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-10-23T21:59:27"
changes:
  - date: "2026-11-22"
    note: "New briefing: Copilot Chat pop-out for Outlook for Mac and iPad, with the existing Integrated Apps block and no documented pop-out switch."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 47 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 47
  confirmed: 44
  unconfirmed: 1
  contradicted: 2
  attempts: 1
  hash: "76d49fd0ff7a47466a29d06e9fd97290"
---

## What's changing

Copilot Chat in Outlook gains a pop-out button. The roadmap item says Copilot Chat stays available inside the Outlook app window and can now also be popped out to float over the main Outlook window, so people can switch contexts, have more room for their Outlook work and control the space and form Copilot Chat takes on screen. Clicking the pop-out button opens Copilot separately over the main Outlook window.

The roadmap record lists the platforms as iOS and Mac, and the title names Outlook for Mac and iPad. It lists the release phase as General Availability, the cloud as Worldwide (Standard Multi-Tenant) and the status as Rolling out, with a target of August CY2026. That target month has passed, and the status was still Rolling out when the record was last modified on 2026-10-23.

Microsoft Learn does not describe the pop-out at the time of writing (November 2026), so what is stated here about its behaviour is the roadmap's description. The record gives no admin setting for it, and no Message Center post was supplied with the item.

## Why it matters

This is a change to the window Copilot Chat appears in, not to what it can do. Copilot Chat in Outlook already reaches users through the Copilot app, so the pop-out does not add a new product to govern. Microsoft has not stated whether a pop-out window changes how Copilot Chat handles open email content, and the roadmap text says nothing to suggest it does.

For a service owner the practical effect is support and training: people on Mac and iPad will see a floating Copilot window that did not exist before. If nobody acts, the roadmap describes users choosing to click the button; no source says existing behaviour changes for anyone who does not.

## Risk assessment

**Data exposure**
- The roadmap describes a change of window, not of data access. Microsoft Learn describes Copilot Chat in Outlook as able to work with content the user has open, and as protected by Enterprise Data Protection when users sign in with Microsoft Entra accounts. Confirm that the pop-out window keeps the same sign-in and protection, which Microsoft has not stated.

**Security & identity**
- No new identity or permission is described. Copilot Chat in Outlook is delivered through the Copilot app, which an administrator can block in the Microsoft 365 admin center under Integrated Apps (controls table, row 1); blocking removes Copilot Chat from Outlook rather than only the pop-out.

**Autonomy & actions**
- No change: the roadmap describes a button that moves where Copilot Chat is shown, not new actions.

**Change & support**
- A floating Copilot window on Mac and iPad is something help desks will be asked about. Microsoft documents no setting to disable the pop-out alone (controls table, row 2), so the choice for an administrator is to accept it or block Copilot Chat in Outlook.

## Cost and licensing

Microsoft Learn describes Copilot Chat (Basic) as the standalone baseline experience included with eligible Microsoft 365 licences, and lists Copilot Chat in Outlook and Teams among its access points (Microsoft Copilot overview). The page states that chat experiences in Microsoft 365 apps vary with tenant configuration and licence.

No separate licence, meter or price for the pop-out is published at the time of writing (November 2026). Indirect cost is limited to user communication and help-desk time.

## Scope

The record lists Outlook as the product, iOS and Mac as platforms, Worldwide (Standard Multi-Tenant) as the cloud and General Availability as the release phase. The title names Outlook for Mac and iPad. The record lists no US Government clouds.

The status is Rolling out, with a target of August CY2026. Microsoft has not published which Outlook versions or release channels carry the button. Users need Copilot Chat available in Outlook for the pop-out to matter; Learn describes the Copilot app as providing Copilot Chat in Outlook (web, desktop, mobile).

## Governance guidance

### Before rollout
- Tell Mac and iPad Outlook users who already use Copilot Chat that a pop-out button is arriving and that the chat can float over the main window.
- Decide whether Copilot Chat in Outlook should stay available to everyone; the only documented block is the Integrated Apps control in controls table row 1, which removes Copilot Chat from Outlook, Teams and the Copilot app.

### At rollout
- Open Outlook for Mac and for iPad on a pilot account, click the pop-out button and confirm that the floating window shows the same work account and protections as the in-window chat.
- Record the Outlook build that shows the button, because Microsoft has not published a version.

### After rollout
- Ask the help desk to log pop-out questions for a month and feed them back into the user guidance.
- Re-check Microsoft Learn and the roadmap item for a pop-out setting or a status change from Rolling out to Launched.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Copilot Chat (the Copilot app) is available in Outlook</strong><br><small>Tenant</small><br><small class="controls__note">Needs the Global Administrator role. Blocks Copilot Chat in Outlook, Teams and the Copilot app, scopable to users or groups; it is not a pop-out switch.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Integrated Apps › Available Apps › app › Block app <a href="https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Switch for the Copilot Chat pop-out in Outlook for Mac and iPad</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no setting for the pop-out at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The Integrated Apps block applies to the Copilot app as a whole. Microsoft's page says the Copilot app settings on that page apply to both Microsoft Copilot and Copilot Chat, and that blocking it removes Copilot Chat from Outlook, Teams and the Copilot app. The page says these Integrated Apps controls are available to Global Administrators. Microsoft Learn documents no control that targets the pop-out alone at the time of writing (November 2026).

## Open questions

- Will Microsoft add a setting or policy to disable the Copilot Chat pop-out on Outlook for Mac and iPad? Watch the Copilot Chat management page on Microsoft Learn and Message center.
- Which Outlook for Mac and iOS versions and release channels carry the pop-out button, and when does rollout finish now that the August CY2026 target has passed?
- Does the floating window keep the same Enterprise Data Protection, sign-in and open-content behaviour as Copilot Chat inside the Outlook window?

<!-- rationale
risk: Low. The roadmap describes a change in where Copilot Chat appears on screen, not new data access; the existing Integrated Apps block still removes Copilot Chat from Outlook.
cost: None. Microsoft Learn describes Copilot Chat in Outlook as part of the Copilot Chat (Basic) experience included with eligible Microsoft 365 licences, and no separate charge for the pop-out is published.
impact: Low. Only people using Copilot Chat in Outlook on Mac or iPad see the new button, and the roadmap describes it as a layout choice.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Data exposure; Open questions / absence: Microsoft has not stated whether enterprise data protection applies to Copilot Chat in the floating window. | Found: Copilot Chat (Basic), Microsoft 365 Copilot (Basic), and Microsoft 365 Copilot (Premium) are protected by Enterprise Data Protection (EDP) when you sign in with Microsoft Entra accounts. | Fix: Replace 'Confirm that the pop-out window keeps the same sign-in and protection, which Microsoft has not stated' with 'Confirm that the pop-out window is signed in with the intended work account; Microsoft states that Copilot Chat has Enterprise Data Protection when signed in with Microsoft Entra accounts.' Replace the final Open questions bullet with 'Does the floating window retain the same signed-in account and open-content behaviour as Copilot Chat inside the Outlook window?' Keep the cited overview URL. | Source: https://learn.microsoft.com/copilot/plan/copilot-overview
- [unsupported, major] Why it matters / behaviour: The change does not change what Copilot Chat can do. | Found: Searched: Outlook Copilot Chat pop-out Mac iPad floating window; Copilot Chat pop-out Outlook enterprise data protection open content sign in. Opened overview, management, privacy and release notes; the roadmap describes layout but does not state capabilities are unchanged. | Fix: Replace 'This is a change to the window Copilot Chat appears in, not to what it can do' with 'The roadmap describes a change to the window Copilot Chat appears in; it does not describe changes to its capabilities.'
- [contradicted, blocker] Governance guidance: Before rollout / absence: Integrated Apps is the only documented block for Copilot Chat in Outlook. | Found: If you turn off connected experiences that analyze your content on devices in your organization, Microsoft Copilot features won't be available ... Outlook ... This applies ... on Windows, Mac, iOS, or Android devices. | Fix: Replace 'the only documented block is the Integrated Apps control in controls table row 1' with 'the Integrated Apps control in controls table row 1 is a documented block'. Do not claim it is the only block: Microsoft also documents connected-experience privacy controls affecting Copilot features in Outlook on Mac and iOS at https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy. | Source: https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].note; Governance guidance; Governance controls / applicability: The Integrated Apps block also blocks Copilot Chat in Teams. | Found: This setting blocks Copilot in the Microsoft Copilot app, Teams, Outlook, and Copilot Chat on the web for all users. | Fix: Add: 'Manage Copilot Chat says this block includes Teams, but https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365 says the app is blocked only in the Microsoft Copilot application and Outlook, with Teams continuing to honour its Teams admin center settings.' | Source: https://learn.microsoft.com/copilot/manage/manage-copilot-chat
- [supported, minor] controls[0].note; Governance controls table / applicability: The tenant-wide Integrated Apps block can be scoped to specific users or groups. | Found: Blocking Copilot through Integrated Apps is a tenant-wide control that you can scope to specific users or groups, including licensed users. | Fix: Replace 'scopable to users or groups' with 'Manage Copilot Chat describes user/group scoping, but the linked Integrated Apps instructions say Block app blocks all users; those instructions document user/group selection separately under Edit Users or the Users tab.' Cite both https://learn.microsoft.com/copilot/manage/manage-copilot-chat and https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365. | Source: https://learn.microsoft.com/copilot/manage/manage-copilot-chat
-->
