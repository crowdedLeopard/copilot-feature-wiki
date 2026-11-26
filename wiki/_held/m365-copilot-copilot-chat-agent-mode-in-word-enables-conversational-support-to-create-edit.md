---
title: "Word: Copilot Chat edit mode creates and edits documents for users without a Microsoft 365 Copilot licence"
slug: "m365-copilot-copilot-chat-agent-mode-in-word-enables-conversational-support-to-create-edit"
roadmapId: 543241
topic: "m365-copilot"
products: ["Word","Microsoft Copilot (Microsoft 365)"]
summary: "The roadmap lists as Launched an Edit mode in Copilot Chat in Word on the web that writes and edits document content for users without a Microsoft 365 Copilot licence. Default state and any admin switch are not stated."
status: "launched"
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
updated: "2026-11-26"
roadmapModified: "2026-11-26T00:16:54"
changes:
  - date: "2026-11-22"
    note: "New briefing: Copilot Chat Edit mode in Word for users without a Microsoft 365 Copilot licence; default, admin switch and feature-specific licensing are not yet published."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 56 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected after the independent check: Copilot Chat (Basic) data wording, the Integrated Apps block scope and the preview Copilot Chat side-pane policy, and a roadmap-only opening for Why it matters."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 58 statements not yet confirmed"
  - date: "2026-11-26"
    note: "Corrected after the independent check: the document-canvas review controls are now attributed to the roadmap's description, the rollout step no longer relies on them, and the status reads Launched as the roadmap record now shows."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 61 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 3
verification:
  status: "held"
  date: "2026-11-26"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 61
  confirmed: 58
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "02e44a0271b8f87653f3b7924344b5fe"
---

## What's changing

The roadmap item describes an Edit mode for Copilot Chat in Word, so that users can ask in natural language for new documents to be generated and for existing documents to be edited from the chat pane. In this mode Copilot asks clarifying questions if needed and, after making changes, recaps the actions taken and recommends next steps. Changes are supported by controls in the document canvas so users can review what changed.

The roadmap states that the capability is available to Microsoft 365 users without a Microsoft 365 Copilot licence, and lists Web as the only platform, Current Channel and General Availability as release phases, and Worldwide (Standard Multi-Tenant) as the only cloud. The record does not say whether Edit mode is on by default or whether users or administrators switch it on.

The roadmap shows the status as Launched with a target of February CY2026. Microsoft Learn has no page for this feature. Learn's release notes for 2 June 2026 list a separate Word item, "Copilot can edit your document by default in Word" (Roadmap ID 557673, Web), which says users can turn the experience off; the release notes do not say whether it is the same change as this roadmap item.

## Why it matters

The roadmap describes chat-based document creation and editing in Word for users without a Microsoft 365 Copilot licence. For a service owner that raises two questions at once: who in the organisation will be editing documents with AI, and how that is reviewed before content is shared. Microsoft has not stated what happens on arrival, so base planning on the roadmap's description and check Message center and the roadmap item, which now lists the item as Launched.

The wiki's view is that the control that matters most is the review controls in the document canvas described by the roadmap, together with whatever tenant-level switch Microsoft documents for Copilot Chat. Microsoft Learn documents no switch specific to this feature at the time of writing (November 2026).

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
- **Release phase:** Current Channel and General Availability, as the roadmap lists them. Status is Launched with a target of February CY2026.
- **Prerequisites:** not documented for this feature.

## Governance guidance

### Before rollout
- Ask the service owner for Word to confirm in Message center whether this item, which the roadmap lists as Launched, has reached your tenant.
- Decide which users without a Microsoft 365 Copilot licence should get chat-based editing, and who communicates the change to them.
- Read Learn's Manage Copilot Chat page and note the controls it documents, including the Integrated Apps block of the Copilot app (see the controls table).

### At rollout
- Tell affected users to check Copilot's edits before they save or share.
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

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: defaultState / default: The default state of Edit mode is unknown because Microsoft has not stated whether it is on by default. | Found: Copilot opens in the chat pane with Edit mode turned on. Type a prompt, choose a suggested action, or ask a question about your file. | Fix: Set defaultState to on and replace the blanket default-state gaps with: 'Microsoft Support says Copilot opens in Word's chat pane with Edit mode turned on; availability depends on subscription, licence, organisation settings and platform. The roadmap does not state tenant rollout mechanics.' Cite https://support.microsoft.com/office/welcome-to-copilot-in-word-2135e85f-a467-463b-b2f0-c51a46d625d1 and align the risk rationale and first Open question with this distinction. | Source: https://support.microsoft.com/office/welcome-to-copilot-in-word-2135e85f-a467-463b-b2f0-c51a46d625d1
- [contradicted, blocker] Scope: Prerequisites / absence: Prerequisites for Edit mode are not documented. | Found: Copilot opens in the chat pane with Edit mode turned on. ... To use this feature, an eligible Microsoft 365 subscription and/or Microsoft Copilot license is required. | Fix: Replace the Prerequisites bullet with: '**Prerequisites:** Microsoft Support says an eligible Microsoft 365 subscription and/or Microsoft Copilot licence is required to use the Word chat-pane feature; availability depends on subscription, licence, organisation settings and platform.' Cite https://support.microsoft.com/office/welcome-to-copilot-in-word-2135e85f-a467-463b-b2f0-c51a46d625d1. Keep the roadmap's statement that this item serves users without the Copilot add-on. | Source: https://support.microsoft.com/office/welcome-to-copilot-in-word-2135e85f-a467-463b-b2f0-c51a46d625d1
- [contradicted, blocker] Cost and licensing; Open questions / absence: It is unstated which of Copilot Chat (Basic) and Microsoft 365 Copilot (Basic) carries the in-Word editing experience. | Found: Microsoft 365 Copilot (Basic) refers to users without the Copilot add-on license, but who have access to Copilot capabilities inside apps (for example, Word or Excel). ... Word: Draft, rewrite, and summarize documents | Fix: Replace 'Which of those experiences carries Edit mode is not stated' with: 'The overview places in-app Word capabilities for users without the Copilot add-on under Microsoft 365 Copilot (Basic); Copilot Chat (Basic) does not include in-app Word access.' Narrow the fourth Open question to: 'Does a feature-specific fair use limit apply to Edit mode?' Retain licensing.model as included and cite https://learn.microsoft.com/copilot/plan/copilot-overview. | Source: https://learn.microsoft.com/copilot/plan/copilot-overview
-->
