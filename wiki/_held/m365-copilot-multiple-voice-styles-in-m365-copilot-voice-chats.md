---
title: "Microsoft Copilot (Microsoft 365): choose from multiple voice styles in voice chats"
slug: "m365-copilot-multiple-voice-styles-in-m365-copilot-voice-chats"
roadmapId: 564804
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Users will be able to pick a voice style for spoken replies in Microsoft 365 Copilot voice chats. It is a user-facing option; Microsoft Learn documents no admin switch for it or for voice chat generally."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mobile"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Microsoft's requirements page says Copilot Chat is available with an eligible Microsoft 365 subscription and that Microsoft Copilot needs a Copilot licence. A licence rule specific to voice styles is not yet published."
audiences: ["m365-admin","change-adoption","end-user"]
tags: ["m365-copilot","copilot-chat","speech","user-experience","mobile"]
sources:
  - title: "Microsoft 365 Roadmap 564804"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=564804"
    kind: "roadmap"
  - title: "Updated Windows and Microsoft Copilot Chat experience"
    url: "https://learn.microsoft.com/windows/client-management/manage-windows-copilot"
    kind: "learn"
  - title: "Microsoft Copilot requirements"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Admin switch for voice chat or for the choice of voice style"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn states there is no feature-specific toggle for admins to disable voice chat. Screen and camera sharing does not turn off voice."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-11-06T23:04:41"
changes:
  - date: "2026-11-22"
    note: "First briefing for this roadmap item: voice styles in Microsoft 365 Copilot voice chats, target December CY2026."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 46 statements contradicted, 4 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 46
  confirmed: 42
  unconfirmed: 4
  contradicted: 0
  attempts: 1
  hash: "8c1d8a6c6dd059f8b05472e3ea96c8cd"
---

## What's changing

The roadmap item says users can select from multiple voice style options for their voice experience in Microsoft 365 Copilot. The item's title places this in Microsoft 365 Copilot voice chats. Microsoft Learn does not yet describe voice styles, so what follows about behaviour is the roadmap's description only.

Voice chat itself is documented. Microsoft's Windows and Copilot Chat page says users can start a voice chat with Microsoft Copilot and receive real-time spoken responses, grounded in their work data through Microsoft Graph and the web. The roadmap lists Desktop and Mobile as platforms for this item.

The roadmap record shows status In development, a target date of December CY2026, release phase General Availability and the Worldwide (Standard Multi-Tenant) cloud. The date is Microsoft's target, not a commitment. The record was last modified on 6 November 2026 and links to no Learn page or Message Center post. The names and number of the voice styles are not published.

## Why it matters

This is a user-level personalisation of an existing capability, so the main work for a service owner is communication and support. If users can pick a voice, expect questions from help desks about why colleagues hear different voices, and from users who want a quieter or more neutral one.

Microsoft has not stated what happens on arrival, including whether the choice is on for everyone or reaches tenants in stages. Base planning on no source saying that voice chat's data handling changes. Check the roadmap item and Message center as the December CY2026 target approaches.

## Risk assessment

**Data exposure**

- Microsoft's page says voice in Microsoft Copilot follows the same enterprise commitments to data security and privacy as text, and that no user or Copilot audio is stored. The roadmap describes no new data access for voice styles.
- Text transcripts of voice chats are stored and managed like regular Copilot conversations, so existing retention, eDiscovery and audit policies apply to the transcript content, according to the same page.

**Security & identity**

- No change is described: the roadmap item says nothing about identity, sign-in or permissions for voice chat.

**Autonomy & actions**

- No change is described: a voice style is a presentation choice in the roadmap's wording, and nothing in the record says it adds actions Copilot can take.

**Change & support**

- A new choice appears in voice chats on desktop and mobile once it rolls out. Tell users where to find it when Microsoft documents the screen.
- Microsoft Learn states that there is no feature-specific toggle for admins to disable voice chat, so a support team cannot switch the choice off for a group. Whether a separate control for voice styles will exist is not yet documented.

## Cost and licensing

No price, meter or Copilot Credits rate for voice styles is yet published, and the roadmap item names no licence.

The product's licence rules apply to the surrounding experience. Microsoft's Copilot requirements page says Microsoft Copilot Chat is available to users with an eligible Microsoft 365 subscription, and that users of Microsoft Copilot need a Microsoft Copilot licence and a qualifying prerequisite licence. Which of the two groups gets voice styles is not yet published.

The indirect cost is admin and help-desk time to tell users about the new choice.

## Scope

The roadmap lists the Worldwide (Standard Multi-Tenant) cloud and the platforms Desktop and Mobile. It lists no US Government cloud. That is a record fact and does not itself say the feature is unavailable there.

The item's audience is end users who use voice chat. Microsoft's Windows page describes starting a voice chat from the Copilot key or Win+C on a Windows PC. Licence and rollout details specific to voice styles are not yet published.

## Governance guidance

### Before rollout

- Identify which user groups already use voice chat, using the Copilot usage reports you already run, so you know who will notice the new choice.
- Brief the help desk that users may hear different voices from one another and that Microsoft documents no admin switch for voice chat.
- Check the requirements page for the Copilot Chat and Microsoft Copilot licence rules so you can answer who gets voice features.

### At rollout

- Watch the Microsoft 365 roadmap item 564804 and Message center for a rollout notice, since the default and rollout window are not stated.
- Confirm with a pilot user on desktop and on mobile that the voice choice appears, once Microsoft publishes the user steps.

### After rollout

- Review help-desk tickets for voice-related complaints and feed them back through your Microsoft support route.
- Re-read Microsoft's voice FAQ and Learn pages for any admin control that has since been documented, and add it to your change records.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Admin switch for voice chat or for the choice of voice style</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn states there is no feature-specific toggle for admins to disable voice chat. Screen and camera sharing does not turn off voice.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

At the time of writing (November 2026), Microsoft Learn documents no admin setting that turns voice chat on or off, or that sets or limits voice styles. The Windows and Copilot Chat page says there is no feature-specific toggle for admins to disable voice chat today. The Copilot settings page in the Microsoft 365 admin center says turning off Screen and camera sharing does not turn off voice.

The same Windows page says web grounding can be disabled by turning off optional connected experiences, which also disables web grounding for other Copilot experiences including text. That control affects the web part of voice answers, not the voice style.

## Open questions

- Which voice styles will be offered, and will they differ by language or region? Watch the roadmap item and the Copilot release notes on Microsoft Learn.
- Is the voice style choice on for everyone on arrival, or does it roll out in stages? Watch Message center.
- Does voice style selection need a Microsoft Copilot licence, or is it also available in Copilot Chat? Watch the Copilot requirements page.
- Will Microsoft add an admin control for voice chat or voice styles? Watch the Microsoft 365 admin center Copilot settings page.

<!-- rationale
risk: Low. The roadmap describes a choice of voice style inside voice chat, and Microsoft Learn says voice chats follow the same data protection commitments as text and store no audio.
cost: Low. No price or meter is published for voice styles; the only cost Microsoft's pages show is admin time for communication. Copilot licence rules for the product are on the requirements page.
impact: Low. Only users who start voice chats will notice a new choice of voice, and the roadmap lists no change to what voice chat can reach or do.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] front matter: licensing.model / licensing: Voice styles have a mixed licensing model. | Found: Searched: Microsoft 365 Copilot voice styles licensing pricing Copilot Credits voice selection 564804. Read requirements and licence-options excerpts; product licence alternatives do not establish multiple entitlement routes for voice styles. | Fix: Set licensing.model to 'included', the standard's classification for a new option inside an already licensed product. Keep the documented Microsoft Copilot and qualifying prerequisite licence requirements and the caveat that voice-style-specific eligibility is not yet published; do not imply confirmed Copilot Chat eligibility.
- [unsupported, blocker] Risk assessment: Change & support / applicability: A support team cannot switch the voice-style choice off for a group. | Found: Searched: Microsoft 365 Copilot voice chat disable group admin support team voice styles policy. Read Windows voice and admin-center settings; no feature-specific voice toggle is documented, but neither establishes this categorical group-level impossibility. | Fix: Remove ', so a support team cannot switch the choice off for a group'. Retain the documented statement that there is no feature-specific admin toggle to disable voice chat and the narrower absence of a documented voice-style control.
- [unsupported, blocker] Governance guidance: Before rollout, first bullet / applicability: Copilot usage reports can identify which user groups already use voice chat. | Found: Searched: Microsoft 365 Copilot usage reports identify voice chat users voice mode. Read both Copilot usage-report references, including their user metric tables; they describe prompts, activity dates and app entry points, not voice-chat user identification. | Fix: Replace the bullet with 'Ask pilot users which groups already use voice chat, so you know who may notice the new choice.' Do not claim that Copilot usage reports distinguish voice chat from text.
- [unsupported, major] rationale: cost / behaviour: Microsoft's pages show admin time for communication as the only cost. | Found: Searched: Microsoft 365 Copilot voice styles licensing pricing Copilot Credits voice selection 564804. Read requirements, Windows voice and admin-center settings pages; none identifies communication time as the only cost. | Fix: Replace the cost rationale with 'Low. Plan for indirect admin and help-desk time for communication. No separate voice-style price or meter is published; the product licence requirements are documented, but voice-style-specific eligibility is not yet published.' This distinguishes the wiki's cost analysis from Microsoft's statements.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] summary; What's changing; Risk assessment: Change & support / record: Users will be able to choose multiple voice styles in Microsoft 365 Copilot voice chats. | Found: Users can select from multiple voice style options for their voice experience in M365 Copilot. | Fix: Replace the summary's first sentence with 'Microsoft plans to let users pick a voice style for spoken replies in Microsoft 365 Copilot voice chats.' The item remains In development.
-->
