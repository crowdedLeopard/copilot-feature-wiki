---
title: "Microsoft Copilot: realtime voice conversations in Word and PowerPoint"
slug: "m365-copilot-realtime-voice-interactions-in-word-and-powerpoint"
roadmapId: 487852
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","PowerPoint","Word"]
summary: "Microsoft plans to re-release spoken, realtime conversations with Copilot inside Word and PowerPoint (desktop and web), targeted for December CY2026. No admin switch, default or voice-specific licence is documented yet."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "December CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "The Copilot overview describes Microsoft 365 Copilot (Basic) users without the add-on and Premium add-on users as having different experiences in Word and PowerPoint. Which tier gets voice is not yet published."
audiences: ["m365-admin","security","change-adoption"]
tags: ["m365-copilot","word","powerpoint","speech","real-time","user-experience"]
sources:
  - title: "Microsoft 365 Roadmap 487852"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=487852"
    kind: "roadmap"
  - title: "2025 Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/previous-year-release-notes"
    kind: "learn"
  - title: "Updated Windows and Microsoft Copilot Chat experience"
    url: "https://learn.microsoft.com/windows/client-management/manage-windows-copilot"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Microsoft Copilot requirements"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements"
    kind: "learn"
  - title: "copilotAdminSetting resource type"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/resources/copilotadminsetting"
    kind: "learn"
  - title: "Data, privacy, and security for web search in Microsoft Copilot and Microsoft Copilot Chat"
    url: "https://learn.microsoft.com/copilot/plan/manage-public-web-access"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "A feature-specific switch for voice in Word and PowerPoint"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such switch at the time of writing (November 2026). For voice in Microsoft Copilot, a different surface, Microsoft documents no feature-specific toggle either."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-23"
roadmapModified: "2026-11-06T23:04:41"
changes:
  - date: "2026-11-22"
    note: "New briefing: roadmap item 487852 (realtime voice in Word and PowerPoint, In development, targeted December CY2026); no admin control, default or voice-specific licence is documented yet."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 51 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected after the independent check: removed an unsupported usage-ranking claim, replaced the enterprise-commitments gap with Microsoft's documented enterprise data protection, and clarified web grounding and optional connected experiences."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 57 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-23"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 57
  confirmed: 56
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "327154c3a22846597aee148662ab2883"
---

## What's changing

The roadmap item describes realtime voice interactions in Word and PowerPoint: users "use your voice to talk with Copilot, interact in-real time, and understand the content within your document or presentation". It lists the Desktop and Web platforms, the Worldwide (Standard Multi-Tenant) cloud and the General Availability release phase.

The roadmap status is In development with a target of December CY2026. The description carries an update dated September 9, 2026: "We will be re-releasing this feature with updates in October." The description and the target date therefore differ (October in the text, December in the target field); treat both as targets, not commitments. The record was last modified on 2026-11-06.

Microsoft Learn has no page for this item at the time of writing (November 2026), so what follows about behaviour is the roadmap's description. Separately, Microsoft's Copilot release notes for November 25, 2025 state that "Copilot now supports voice input, enabling natural, conversational interactions in the Microsoft 365 Copilot app on mobile, desktop and the web and across Microsoft 365 apps, starting with Outlook, Word and PowerPoint" and list it under roadmap ID 481138. Learn does not say how that entry relates to this item.

## Why it matters

Voice adds a spoken input path to Copilot in Word and PowerPoint, and the roadmap text says Copilot will "understand the content within your document or presentation". For a service owner the questions are who is entitled, whether voice can be switched off for a group, and what is kept from a spoken session. Microsoft has not stated a default for this item and has published no voice-specific control for Word or PowerPoint, so plan on no source saying existing behaviour changes, but expect users to ask for it as the December CY2026 target approaches.

The nearest documented behaviour is for voice in Microsoft Copilot (the Copilot app and Windows experience), not Word or PowerPoint. Use it as a prompt for questions to put to Microsoft, not as a description of this feature.

## Risk assessment

**Data exposure**
- The roadmap text says voice lets Copilot understand a document or presentation's content, so spoken prompts would be answered from content the user has open. Microsoft Learn documents no Word- or PowerPoint-specific data handling for voice at the time of writing.
- For voice in Microsoft Copilot, Microsoft states that "Text transcripts from voice chats are stored and managed like regular Copilot conversations, so your existing retention, eDiscovery, and audit policies apply to the transcript content. No user or Copilot audio is stored." Confirm that the same holds in Word and PowerPoint before relying on it.

**Security & identity**
- Microsoft states that voice in Microsoft Copilot adheres to the same enterprise commitments as text interactions. Microsoft documents enterprise data protection for Copilot Basic and Premium experiences when users sign in with Microsoft Entra accounts ([Microsoft Copilot overview](https://learn.microsoft.com/copilot/plan/copilot-overview)).
- Voice in Microsoft Copilot can ground answers in the web as well as work data. The Windows guidance says turning off optional connected experiences disables web grounding for voice and other Copilot experiences. The web-search guidance distinguishes the admin policy from users' privacy settings: users turning off optional connected experiences does not disable web search ([web search in Microsoft Copilot](https://learn.microsoft.com/copilot/plan/manage-public-web-access)). Whether voice in Word and PowerPoint uses web grounding is not yet documented.

**Autonomy & actions**
- The roadmap text describes talking with Copilot and understanding content; it does not describe voice-triggered edits or actions. Treat any action beyond answering as unconfirmed until Microsoft documents it.

**Change & support**
- The date has moved: the description says a re-release in October with updates, while the target field says December CY2026. Expect user questions about microphones, shared spaces and noise, and prepare a short note for Copilot-licensed users.

## Cost and licensing

No price, meter or voice-specific licence is published for this item at the time of writing (November 2026). The roadmap record names no licence.

For the surrounding product, the Copilot overview says users without the Microsoft 365 Copilot add-on licence but with Microsoft 365 Copilot (Basic) "can use Copilot in Word, Excel, PowerPoint, and OneNote", while the add-on (Premium) licence gives "the full experience of Copilot in Word, Excel, PowerPoint, and OneNote". The Microsoft Copilot requirements page adds that chat experiences in Word, Excel and PowerPoint vary with the user's licence and tenant configuration. Which tier receives voice is therefore not yet published.

The known indirect cost is admin and communications time. No Copilot Credits or pay-as-you-go meter is documented for this feature.

## Scope

The roadmap record lists Desktop and Web, the Worldwide (Standard Multi-Tenant) cloud and the General Availability release phase, and products Microsoft Copilot (Microsoft 365), Word and PowerPoint. The record lists no government cloud, and Microsoft Learn states nothing about government cloud availability for this item.

The record names no licence, role or prerequisite. Microsoft Learn says an appropriate role such as AI Administrator manages Copilot settings in the Microsoft 365 admin center, but no setting for this feature is documented there. Rollout mechanics (release channel, targeted release, staging) are not stated.

## Governance guidance

### Before rollout
- Watch the roadmap item and Message center for a post that states the default, licence tier and any control, and record its ID here when it appears.
- Ask your Microsoft account team which Copilot licence tier will receive voice in Word and PowerPoint and whether a Word- or PowerPoint-specific switch will exist.
- Decide whether spoken Copilot use is acceptable in open-plan offices and shared rooms, and draft the guidance for Copilot-licensed users.

### At rollout
- Pilot with a small group of Copilot users on desktop and web, and note whether voice appears without any admin action.
- Test in the pilot what is retained from a spoken session, comparing it with the retention and eDiscovery behaviour Microsoft describes for voice in Microsoft Copilot.
- Brief the help desk on microphone permissions and noise complaints.

### After rollout
- Review whether voice use in Word and PowerPoint appears in your existing Copilot reporting and audit processes, and record any gap.
- Revisit the open questions below when Microsoft publishes a Learn page for this feature.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>A feature-specific switch for voice in Word and PowerPoint</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such switch at the time of writing (November 2026). For voice in Microsoft Copilot, a different surface, Microsoft documents no feature-specific toggle either.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

At the time of writing (November 2026), the Copilot settings page in the Microsoft 365 admin center lists no voice setting for Word or PowerPoint, and the Microsoft Graph copilotAdminSetting resource lists only a limited-mode relationship for Teams meetings. The table therefore records the missing control.

For voice in Microsoft Copilot, which is a different surface, Microsoft states "There is no feature-specific toggle for admins to disable voice chat today", and that turning off Screen and camera sharing "doesn't turn off voice". Do not assume either setting governs voice in Word or PowerPoint.

## Open questions

- Which Copilot licence tier will include voice in Word and PowerPoint, and will Basic users get it? Watch the roadmap item and the Copilot overview on Microsoft Learn.
- Is voice on by default for eligible users, and will a tenant-level switch or Cloud Policy setting exist? Watch Message center.
- Does the storage rule Microsoft gives for voice in Microsoft Copilot (text transcripts kept, no audio stored) apply in Word and PowerPoint, and where do the transcripts appear?
- How does this roadmap item relate to the November 25, 2025 release-notes entry under roadmap ID 481138, and what changes in the re-release with updates?
- Is the delivery date October or December CY2026, given the description and the target field disagree?

<!-- rationale
risk: Medium. Users would speak to Copilot about open documents and presentations, and Microsoft Learn documents no admin switch for voice in Word or PowerPoint at the time of writing (November 2026).
cost: Low. No meter or voice-specific licence is published, so the known cost is admin time; which Copilot licence tier gets voice in Word and PowerPoint is not yet published.
impact: Medium. Users with Copilot in Word and PowerPoint would notice a new way to talk to it, and the roadmap gives no default, so help desks may field questions about microphones and noise.
-->

<!-- verifier-findings (2026-11-23, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: After rollout / consistency: The checklist asks readers to review reporting and audit processes, but these have no row in the controls table. | Found: Review whether voice use in Word and PowerPoint appears in your existing Copilot reporting and audit processes, and record any gap. The table contains only: A feature-specific switch for voice in Word and PowerPoint. | Fix: Remove the After rollout bullet beginning 'Review whether voice use in Word and PowerPoint appears in your existing Copilot reporting and audit processes': it names monitoring controls without a controls-table row.
-->
