---
title: "Outlook for Mac: conversational email drafting, editing and formatting with Copilot (Worldwide)"
slug: "outlook-draft-edit-and-format-emails-conversationally-with-copilot-in-outlook-552595"
roadmapId: 552595
topic: "m365-copilot"
products: ["Outlook","Microsoft Copilot (Microsoft 365)"]
summary: "Copilot in Outlook for Mac drafts, refines and formats emails through conversation with the user (Worldwide, rolling out). Its default and licence tier are not stated; tell Mac users and decide whether Copilot should stay on in Office for Mac."
status: "rolling-out"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Mac"]
targetDate: "May CY2026"
previewDate: "February CY2026"
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft's Copilot overview lists \"Outlook: Draft emails\" among Microsoft 365 Copilot (Basic) in-app features, for users without the Copilot add-on licence. The service description marks Edit with Copilot in Word, Excel, PowerPoint and OneNote as Premium, but not Copilot in Outlook. The tier for this feature is not yet published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["outlook","m365-copilot","macos","cloud-policy","privacy"]
sources:
  - title: "Microsoft Copilot - Service Descriptions"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot"
    kind: "learn"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Microsoft Copilot requirements"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements"
    kind: "learn"
  - title: "Data, Privacy, and Security for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy"
    kind: "learn"
  - title: "Use preferences to manage privacy controls for Office for Mac"
    url: "https://learn.microsoft.com/microsoft-365-apps/privacy/mac-privacy-preferences"
    kind: "learn"
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
  - title: "Set preferences for Outlook for Mac"
    url: "https://learn.microsoft.com/microsoft-365-apps/mac/preferences-outlook"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Microsoft 365 Roadmap 552595"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=552595"
    kind: "roadmap"
videos: []
related: ["outlook-draft-edit-and-format-emails-conversationally-with-copilot-in-outlook","cloud-policy","outlook-inline-chat-for-email-drafting","outlook-agents-for-m365-copilot-available-in-copilot-chat-in-outlook-for-mac","m365-copilot-copilot-chat-agent-mode-in-word-enables-conversational-support-to-create-edit"]
controls:
  - governs: "Whether Copilot features, including in Outlook, are available via connected experiences that analyse content"
    scope: "group"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > policy configuration > Choose the scope > Configure Settings > Allow the use of connected experiences in Office that analyze content"
      docs: "https://learn.microsoft.com/microsoft-365-apps/privacy/mac-privacy-preferences"
    api:
      kind: "other"
      call: "Preference domain com.microsoft.office, key OfficeExperiencesAnalyzingContentPreference set to FALSE"
      docs: "https://learn.microsoft.com/microsoft-365-apps/privacy/mac-privacy-preferences"
    note: "Existing control. Removes Copilot features from Excel, OneNote, Outlook, PowerPoint and Word, not only this feature. The Cloud Policy overview recommends Office Apps Administrator; the Mac key is enforced by configuration profile or MDM."
  - governs: "Separate switch for conversational drafting in Outlook for Mac"
    scope: "tenant"
    ui: null
    api: null
    note: "The Copilot settings page and the Outlook for Mac preferences reference list no such setting at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-05-06T23:15:10"
changes:
  - date: "2026-11-28"
    note: "First briefing for the Mac and Worldwide item; the web item for GCC, GCC High and DoD is roadmap 573280."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 63 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-28"
    note: "Corrected after the independent check: removed the unsupported claim about unchanged data reach and the 'only device-level control' claim, pointed the Cloud Policy path to the Mac privacy page, and qualified the Cloud Policy roles."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 60 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 60
  confirmed: 60
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "aa7fd7f3d19de82868c90c6759c541c7"
---

## What's changing

Copilot in Outlook for Mac becomes a conversational writing partner: the roadmap item says Copilot "works side by side with users to draft, refine, and format emails conversationally, powered by the same agentic capabilities available in Word, Excel, and PowerPoint."

Microsoft Learn has no page for this feature at the time of writing (November 2026), so what follows about its behaviour is the roadmap's description. The roadmap does not say where the conversation takes place, whether Copilot changes the draft itself or proposes changes for the user to accept, or what it reads beyond the email being written. Microsoft's release notes of August 11, 2026 describe a neighbouring Outlook item (roadmap 559418, coaching in chat) in which "Users have the option to choose which suggestions are applied, and Copilot updates your email in place"; that is a different roadmap item, and Microsoft has not said this one works the same way.

This item (552595) covers Outlook on **Mac** in **Worldwide (Standard Multi-Tenant)**. Its status is Rolling out, the release phases are General Availability and Preview, the preview date was February CY2026 and the target was May CY2026. Microsoft lists the same feature under a second roadmap item, 573280, for Outlook on the web in GCC, GCC High and DoD, which is In development with a November CY2026 target; see [/features/outlook-draft-edit-and-format-emails-conversationally-with-copilot-in-outlook/](/features/outlook-draft-edit-and-format-emails-conversationally-with-copilot-in-outlook/).

## Why it matters

The roadmap describes a new way of working on an email draft but does not specify this feature's data sources. Microsoft has not stated whether the feature is on for users when it arrives, and the record shows it rolling out, so plan on Mac users meeting it without an announcement from IT.

The decisions are about expectations and scope. Users need to know that they remain responsible for every email Copilot helps write, and the service desk needs to know which platform and cloud this item covers. Organisations that do not want Copilot in Office for Mac at all already have a documented route: turning off connected experiences that analyse content, which removes Copilot features from Outlook and the other Office apps together, not from this feature alone.

## Risk assessment

**Data exposure**
- The roadmap names no data beyond the email being drafted. Microsoft's requirements page says Copilot needs an Exchange Online mailbox for mailbox-grounded experiences; whether this feature draws on mailbox content is not stated. Confirm in a pilot before telling users what it can see.

**Security & identity**
- No change described: the roadmap names no new connector, agent, permission or sign-in.

**Autonomy & actions**
- The roadmap calls the capability "agentic" and says Copilot drafts, refines and formats. It does not say whether Copilot applies edits without the user accepting them or can send mail. Test this on a Mac before briefing users.

**Change & support**
- Expect questions from Mac users who see a different drafting experience from colleagues on Windows or the web, and confusion with item 573280 for government clouds.
- The content-analysis control in the table turns off Copilot features across Excel, OneNote, Outlook, PowerPoint and Word together, so using it to remove this feature also removes the rest.

## Cost and licensing

**Licence.** Microsoft's [Copilot overview](https://learn.microsoft.com/copilot/plan/copilot-overview) lists "Outlook: Draft emails, summarize threads, and use the coaching tips to improve clarity, sentiment and tone" among the in-app features of Microsoft 365 Copilot (Basic), which it describes as users without the Copilot add-on licence who have access to Copilot capabilities inside apps. The [service description](https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot) says Microsoft 365 Copilot is an add-on plan with specific licensing prerequisites, and marks Edit with Copilot in Word, Excel, PowerPoint and OneNote as a Premium feature that needs a Microsoft 365 Copilot licence. Its Copilot in Outlook row carries no such mark. The roadmap ties this feature to the agentic capabilities in Word, Excel and PowerPoint, so which tier conversational drafting in Outlook needs is not yet published.

**Meter.** No meter or price is documented for this feature at the time of writing (November 2026). The overview says some Basic features are subject to fair use limits; it does not list this one.

**Indirect costs.** Admin time for a Mac pilot, user communication and a service-desk briefing.

## Scope

**Platform and cloud.** Outlook on Mac, Worldwide (Standard Multi-Tenant), as the roadmap record lists them. Microsoft's requirements page says Copilot works with supported versions of classic Outlook and new Outlook for Windows and Mac, and that the user must have an Exchange Online mailbox for mailbox-grounded experiences.

**Users.** Licence tier not yet published (see Cost and licensing).

**Roles.** The Copilot settings page names the Office Apps admin role; the Cloud Policy overview also lists Security Administrator and Global Administrator as supported roles and recommends Office Apps Administrator. Mac preferences are deployed through a configuration profile or MDM server.

**Out of scope.** Outlook on the web in GCC, GCC High and DoD is roadmap item 573280. Rollout mechanics and minimum Outlook for Mac version are not stated.

## Governance guidance

### Before rollout
- Identify Outlook for Mac users in the Worldwide tenant and which of them use Copilot today, so communication reaches the right group.
- Decide whether Copilot should be available in Office for Mac at all; if not, plan the connected-experiences setting in the controls table and accept that it removes Copilot from Word, Excel, PowerPoint, OneNote and Outlook together.
- Draft a short note for Mac users: Copilot can now be asked in conversation to draft, refine and format an email, and the sender remains responsible for what is sent.

### At rollout
- Pilot on one or two Macs and record whether Copilot applies edits directly or waits for the user, and what content it draws on.
- Brief the service desk that item 552595 covers Mac in Worldwide and item 573280 covers the web in government clouds.

### After rollout
- Check the roadmap item and Message center for a default state, licence tier or Outlook-specific admin setting, and update this assessment when one appears.
- Re-read the service description's Copilot in Outlook row for a change in licence marking.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Copilot features, including in Outlook, are available via connected experiences that analyse content</strong><br><small>Group</small><br><small class="controls__note">Existing control. Removes Copilot features from Excel, OneNote, Outlook, PowerPoint and Word, not only this feature. The Cloud Policy overview recommends Office Apps Administrator; the Mac key is enforced by configuration profile or MDM.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › policy configuration › Choose the scope › Configure Settings › Allow the use of connected experiences in Office that analyze content <a href="https://learn.microsoft.com/microsoft-365-apps/privacy/mac-privacy-preferences" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Preference domain com.microsoft.office, key OfficeExperiencesAnalyzingContentPreference set to FALSE</code> <a href="https://learn.microsoft.com/microsoft-365-apps/privacy/mac-privacy-preferences" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Separate switch for conversational drafting in Outlook for Mac</strong><br><small>Tenant</small><br><small class="controls__note">The Copilot settings page and the Outlook for Mac preferences reference list no such setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The connected-experiences setting is a general control, not a switch for this feature: Microsoft's privacy page says that turning it off makes Copilot features unavailable in Excel, OneNote, Outlook, PowerPoint and Word on Windows, Mac, iOS and Android, when running the most current version of those apps. The Mac preference and the Cloud Policy setting carry the same name; Microsoft's Mac page says either can be used. Microsoft's Mac page says users signed in with a work or school account can't turn this setting off themselves. The Copilot settings page names the Office Apps admin role; the Cloud Policy overview also lists Security Administrator and Global Administrator as supported roles and recommends Office Apps Administrator. Microsoft documents no setting that turns conversational drafting in Outlook for Mac on or off on its own at the time of writing (November 2026).

## Open questions

- Is conversational drafting in Outlook for Mac on for all Copilot users on arrival, or does it appear only after a user or admin chooses it? Watch Message center.
- Does it need a Microsoft 365 Copilot licence, as Edit with Copilot does in Word, Excel and PowerPoint, or is it part of Microsoft 365 Copilot (Basic)? Watch the service description's Copilot in Outlook row.
- Does Copilot change the draft directly or propose changes for the user to accept, and can it ever send? Watch for a support or Learn page for the feature.
- Will Microsoft add an Outlook-specific setting to switch this off without removing Copilot from the other Office apps on Mac?

<!-- rationale
risk: Low. The roadmap describes Copilot helping a user write an email in Outlook, which Microsoft already lists as a Copilot feature in Outlook; it describes no new data source, connector or sending on the user's behalf.
cost: Low. Microsoft lists email drafting in Outlook among the Microsoft 365 Copilot (Basic) in-app features and documents no meter for it; the licence tier for this conversational version is not yet published. The known cost is admin and communication time.
impact: Medium. Outlook for Mac users in Worldwide tenants who use Copilot notice a new way of composing mail; Windows, web and government-cloud users are not covered by this item.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls: table / admin-path: The content-analysis policy is reached in Microsoft 365 Apps admin center through Customization > Policy Management > policy configuration > Choose the scope > Configure Settings > Allow the use of connected experiences in Office that analyze content. | Found: You can also use Cloud Policy and these five policy settings: ... Allow the use of connected experiences in Office that analyze content | Fix: Add https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration to sources for the shared editing route: Customization > Policy Management > an existing policy configuration > Choose the scope > Configure Settings. Keep controls[0].ui.docs as the Mac privacy page, which documents this policy's own label. | Source: https://learn.microsoft.com/microsoft-365-apps/privacy/mac-privacy-preferences
-->
