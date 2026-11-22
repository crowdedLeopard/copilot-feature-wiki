---
title: "Word: Copilot Chat edit mode creates and edits documents for users without a Microsoft 365 Copilot licence"
slug: "m365-copilot-copilot-chat-agent-mode-in-word-enables-conversational-support-to-create-edit"
roadmapId: 543241
topic: "m365-copilot"
products: ["Word","Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans an Edit mode in Copilot Chat in Word on the web that writes and edits document content for users without a Microsoft 365 Copilot licence. Default state and any admin switch are not stated."
status: "in-development"
releasePhase: ["Current Channel","General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "February CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "The roadmap says it is available to Microsoft 365 users without a Microsoft 365 Copilot licence. Learn describes Copilot Chat (Basic) as included with eligible Microsoft 365 licences, with fair use limits on some features. A limit or meter specific to this feature is not yet published."
audiences: ["m365-admin","service-owner","change-adoption","end-user"]
tags: ["word","copilot-chat","m365-copilot","unlicensed-users","admin-controls"]
sources:
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Manage Copilot Chat"
    url: "https://learn.microsoft.com/copilot/manage/manage-copilot-chat"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
  - title: "Apps for Microsoft 365 that work across application hosts"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Get started with Word, Excel, and PowerPoint Agents in Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/manage/wordexcelppt-agents"
    kind: "learn"
  - title: "Supported Copilot resources for Tenant Configuration Management (preview)"
    url: "https://learn.microsoft.com/graph/utcm-copilot-resources"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 543241"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=543241"
    kind: "roadmap"
videos: []
related: ["word-copilot-edit-mode-is-available-to-users-in-office-365-gcc","m365-copilot-copilot-chat-in-onenote-can-create-edit-and-refine-content","m365-copilot-writing-blocks-in-m365-copilot"]
controls:
  - governs: "Whether the Copilot app and Copilot Chat are available in the tenant"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Integrated Apps > Available Apps > app > Block app"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    api: null
    note: "Global Administrator. Manage Copilot Chat says the block includes Teams; the Integrated Apps page says only the Microsoft Copilot app and Outlook are blocked. Not specific to Edit mode."
  - governs: "Switch for Edit mode in Copilot Chat in Word"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such setting at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2025-12-19T23:00:49"
changes:
  - date: "2026-11-22"
    note: "New briefing: Copilot Chat Edit mode in Word for users without a Microsoft 365 Copilot licence; default, admin switch and feature-specific licensing are not yet published."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 56 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected after the independent check: Copilot Chat (Basic) data wording, the Integrated Apps block scope and the preview Copilot Chat side-pane policy, and a roadmap-only opening for Why it matters."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 58 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 58
  confirmed: 56
  unconfirmed: 1
  contradicted: 1
  attempts: 0
  hash: "ffb9a2e937a8cbe1fa6ecfdb1bdc9a0e"
---

## What's changing

The roadmap item describes an Edit mode for Copilot Chat in Word, so that users can ask in natural language for new documents to be generated and for existing documents to be edited from the chat pane. In this mode Copilot asks clarifying questions if needed and, after making changes, recaps the actions taken and recommends next steps. Changes are supported by controls in the document canvas so users can review what changed.

The roadmap states that the capability is available to Microsoft 365 users without a Microsoft 365 Copilot licence, and lists Web as the only platform, Current Channel and General Availability as release phases, and Worldwide (Standard Multi-Tenant) as the only cloud. The record does not say whether Edit mode is on by default or whether users or administrators switch it on.

The roadmap shows the status as In development with a target of February CY2026. At the time of writing (November 2026) that target month has passed and the record, last modified on 19 December 2025, still shows In development, so treat the date as a plan. Microsoft Learn has no page for this feature. Learn's release notes for 2 June 2026 list a separate Word item, "Copilot can edit your document by default in Word" (Roadmap ID 557673, Web), which says users can turn the experience off; the release notes do not say whether it is the same change as this roadmap item.

## Why it matters

Microsoft plans chat-based document creation and editing in Word for users without a Microsoft 365 Copilot licence. For a service owner that raises two questions at once: who in the organisation will be editing documents with AI, and how that is reviewed before content is shared. Microsoft has not stated what happens on arrival, so base planning on the roadmap's description and re-check Message center and the roadmap item as the target date has already passed.

The wiki's view is that the control that matters most is the one users already have, the review controls in the document canvas, together with whatever tenant-level switch Microsoft documents for Copilot Chat. Microsoft Learn documents no switch specific to this feature at the time of writing (November 2026).

## Risk assessment

**Data exposure**
- Edit mode works on new and existing documents. Which content Copilot can read for an edit, and whether it can reach other files, is not described in the roadmap item; Learn describes Copilot Chat (Basic) as primarily using web data; organisational content can be supplied with a prompt, used from open content in select apps such as Teams and Outlook, or accessed through a pay-as-you-go agent. Confirm how that applies to Edit mode before relying on it.

**Security & identity**
- The roadmap does not say which licence checks or admin roles apply. Learn lists Global Administrator as the role for Integrated Apps controls. Blocking the Copilot app in Integrated Apps is a documented tenant-level control. Microsoft also documents a preview Copilot Chat side-pane policy that shows or hides Chat entry points in Microsoft 365 apps for users without a Microsoft 365 Copilot licence; it is not an Edit-mode-only switch.

**Autonomy & actions**
- Copilot makes changes to the document after asking clarifying questions where needed, then recaps what it did and suggests next steps. Review controls in the document canvas let the user check the changes. Whether the review is optional for the user is not stated.

**Change & support**
- Users without a Microsoft 365 Copilot licence gain an editing capability inside Word on the web. Expect help-desk questions about fair use limits, which Learn says apply to some Copilot Chat features, and about why Word offers chat editing to some users and not others.

## Cost and licensing

The roadmap says the capability is available to Microsoft 365 users without a Microsoft 365 Copilot licence. Learn's Microsoft Copilot overview describes Copilot Chat (Basic) as "the standalone baseline experience included with eligible Microsoft 365 licenses" and says some features are subject to fair use limits.

The same overview says that users with the Copilot Chat (Basic) licence do not have access to Copilot in Word, Excel, PowerPoint and OneNote, while Microsoft 365 Copilot (Basic) users can use Copilot in those apps. Which of those experiences carries Edit mode is not stated.

No meter, price or credit rate for this feature is published at the time of writing. Indirect cost is admin and communication time. Learn's Word, Excel and PowerPoint Agents page says those agents need a paid Microsoft 365 Copilot licence and are not available to Copilot Chat users without one; the roadmap record does not say whether this item is related to those agents.

## Scope

- **Users:** the roadmap says Microsoft 365 users without a Microsoft 365 Copilot licence. Which licences and plans qualify is not stated for this feature.
- **Platform:** Web only, as the roadmap lists it.
- **Cloud:** Worldwide (Standard Multi-Tenant) only, as the roadmap lists it. The roadmap lists no US Government clouds for this item.
- **Release phase:** Current Channel and General Availability, as the roadmap lists them. Status is In development with a target of February CY2026.
- **Prerequisites:** not documented for this feature.

## Governance guidance

### Before rollout
- Ask the service owner for Word to confirm with Microsoft's roadmap and Message center whether and when this item ships, since its February CY2026 target has passed.
- Decide which users without a Microsoft 365 Copilot licence should get chat-based editing, and who communicates the change to them.
- Read Learn's Manage Copilot Chat page and note the controls it documents, including the Integrated Apps block of the Copilot app (see the controls table).

### At rollout
- Tell affected users to use the review controls in the document canvas to check changes Copilot makes before they save or share.
- Watch for Message center posts that state the default and any admin action; the record has none.

### After rollout
- Collect help-desk reports about unexpected edits and fair use limit messages, and feed them back into the user guidance.
- Re-read Learn's Copilot overview and settings pages for a setting that governs Edit mode in Word, and add it to the table when it appears.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Copilot app and Copilot Chat are available in the tenant</strong><br><small>Tenant</small><br><small class="controls__note">Global Administrator. Manage Copilot Chat says the block includes Teams; the Integrated Apps page says only the Microsoft Copilot app and Outlook are blocked. Not specific to Edit mode.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Integrated Apps › Available Apps › app › Block app <a href="https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Switch for Edit mode in Copilot Chat in Word</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Blocking the Copilot app in Integrated Apps is a documented tenant-level control. Learn's Manage Copilot Chat page describes it as blocking Copilot in the Microsoft Copilot app, Teams, Outlook and Copilot Chat on the web for all users. The linked Integrated Apps page says the app is blocked only in the Microsoft Copilot application and Outlook, and that Teams continues to honour the Teams admin center settings. Learn does not say whether the block removes chat inside Word, so confirm that in a test tenant before relying on it. It is not a switch for Edit mode alone, and it removes Copilot Chat rather than narrowing it.

Microsoft also documents a preview Copilot Chat side-pane policy that shows or hides Chat entry points in Microsoft 365 apps for users without a Microsoft 365 Copilot licence; it is not an Edit-mode-only switch. It is described in [Supported Copilot resources for Tenant Configuration Management (preview)](https://learn.microsoft.com/graph/utcm-copilot-resources#copilotchatsidepane-resource-type).

The Integrated Apps controls are described as available to Global Administrators. Learn's Copilot settings page lists the Copilot settings in the Microsoft 365 admin center and names AI Administrator as a role that can manage them; none of the settings listed there is described as governing Word chat editing. The release notes entry for 2 June 2026 says users can turn off the default editing experience; it is not stated whether that applies to this item.

## Open questions

- Is Edit mode on by default for users without a Microsoft 365 Copilot licence, and does a Message center post announce it? Watch Message center and the roadmap item.
- Is there a tenant, group or user control for Edit mode in Word chat, and is there an API for it? Watch the Copilot settings page and the Word Copilot documentation.
- Is this item the same change as Learn's 2 June 2026 release note "Copilot can edit your document by default in Word" (Roadmap ID 557673)?
- Which licence experience (Copilot Chat (Basic) or Microsoft 365 Copilot (Basic)) carries Edit mode, and does a fair use limit apply to it?
- What content can Copilot read and change in Edit mode beyond the open document?

<!-- rationale
risk: Medium. Copilot would change document content directly from chat, with review controls in the document canvas, but Microsoft has not documented a switch for this feature or said whether it is on by default.
cost: Low. The roadmap says it is for users without a Microsoft 365 Copilot licence and Learn describes Copilot Chat (Basic) as included with eligible licences; no meter for this feature is documented, so the known cost is admin time.
impact: Medium. It is aimed at users who have no Microsoft 365 Copilot licence, which can be a large share of a tenant, and it changes how they work in Word on the web.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters / behaviour: Users already have the review controls described for this planned Edit-mode feature. | Found: Searched: Word Edit mode Copilot Chat pricing fair use limits prerequisites review changes; 543241. Read roadmap and June 2 release notes. The roadmap describes planned controls; the release note identifies another item and does not establish these controls already exist for this audience. | Fix: Replace 'the one users already have, the review controls in the document canvas' with 'the review controls in the document canvas described by the roadmap'.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: At rollout; Governance controls table / consistency: The checklist tells readers to use document-canvas review controls, but those controls have no table row. | Found: Tell affected users to use the review controls in the document canvas ... Table rows: Whether the Copilot app and Copilot Chat are available in the tenant; Switch for Edit mode in Copilot Chat in Word. | Fix: Replace the checklist bullet with 'Tell affected users to check Copilot's edits before they save or share.' Do not add a control row.
-->
