---
title: "OneNote for Android: Copilot chat pane with page summaries and questions"
slug: "onenote-summary-and-q-and-a-in-onenote-mobile-with-copilot-android"
roadmapId: 422323
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","OneNote"]
summary: "Microsoft plans a Copilot chat pane in OneNote on Android that summarises pages and answers questions about notes, for users with Microsoft 365 Copilot (Premium). Microsoft's notice says no admin action is required."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android"]
targetDate: "November CY2026"
previewDate: null
risk: "medium"
cost: "medium"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "add-on"
  notes: "Microsoft's notice MC1309746 says the pane is for users licensed with Microsoft 365 Copilot (Premium), which Microsoft's Copilot overview describes as the add-on licensed experience. A price specific to this feature is not stated in the notice."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["onenote","mobile","m365-copilot","ai","cloud-policy","microsoft-365-apps","licensing"]
sources:
  - title: "Microsoft 365 Roadmap item 422323"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=422323"
    kind: "roadmap"
  - title: "MC1309746: (Updated) Microsoft 365 Copilot: Copilot chat pane and Summary feature in OneNote Mobile (Android)"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1309746"
    kind: "message-center"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Data, Privacy, and Security for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy"
    kind: "learn"
  - title: "Use policy settings to manage privacy controls for Office on Android devices"
    url: "https://learn.microsoft.com/microsoft-365-apps/privacy/android-privacy-controls"
    kind: "learn"
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    kind: "learn"
videos: []
related: ["onenote-multimodal-capture-in-copilot-notebooks-windows"]
controls:
  - governs: "Whether connected experiences that analyse content, which Copilot in OneNote needs, are on for Android"
    scope: "user"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > Policy configurations > Create > Start with the basics > Choose the scope > Configure Settings"
      docs: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    api: null
    note: "Setting name: Allow the use of connected experiences in Office that analyze content. Turning it off removes Copilot in OneNote on Android. Broader than this feature. Office Apps Administrator recommended."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-19"
roadmapModified: "2026-11-06T23:04:41"
changes:
  - date: "2026-11-18"
    note: "New briefing for roadmap item 422323, covering the MC1309746 rollout update to the end of November 2026."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 48 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Correction: removed the claim that Android activity-history storage is unstated and that no further prerequisites are published, and removed a checklist item with no matching control row."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 48 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Correction: cost rating raised from low to medium because the pane needs the Microsoft 365 Copilot (Premium) add-on licence; cost rationale reworded to match."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 46 statements confirmed"
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 46 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 46
  confirmed: 45
  unconfirmed: 1
  contradicted: 0
  attempts: 0
  hash: "f1aab5f51c85dbd8b4186760cab1f810"
---

## What's changing

Microsoft plans to add a Copilot chat pane to OneNote on Android. Through it, users can generate a short summary of a long OneNote page and ask questions about their notes without leaving the app. The roadmap item describes this as a Summary feature plus question and answer "directly within your notes".

Microsoft's notice MC1309746 says the pane is for users licensed with Microsoft 365 Copilot (Premium). Those users "will see" the pane in OneNote on Android, and the notice says no admin action is required before rollout. It also says existing Microsoft 365 Copilot controls, permissions and policies continue to apply.

The roadmap record lists the item as In development, General Availability, Worldwide (Standard Multi-Tenant), Android only, with a target of November CY2026. The notice updated on 6 November 2026 says rollout begins at the end of November 2026 and is expected to finish at the end of November 2026, previously the end of October. Microsoft has not set an act-by date. Microsoft Learn has no page for this feature yet, so what follows about behaviour is the roadmap's and the notice's description.

## Why it matters

This is a new way for licensed users to put generative AI over their own notes, on a phone, and Microsoft's notice says it arrives without admin action. With a rollout window that ends at the end of November 2026, the pane can reach users before helpdesk, security and adoption teams have said anything about it.

The notice's own compliance answers say the change alters how existing customer data is processed and introduces AI that interacts with customer data, always within what the user already has permission to access. The practical task is to confirm that your existing Copilot governance already covers OneNote content on Android, and to tell the right users before the pane appears.

## Risk assessment

**Data exposure**

- The pane processes OneNote content the user already has access to, in order to write summaries and answer questions. Microsoft's notice says this follows existing Microsoft 365 Copilot data handling, permissions and security controls. Microsoft's Copilot privacy page says Copilot only surfaces organisational data to which the user has at least view permissions, so oversharing in shared notebooks becomes easier to surface through questions.
- Microsoft's Copilot privacy page says that when users interact with Copilot in apps including OneNote, it stores the prompt and response as the user's Copilot activity history.

**Security & identity**

- Access follows the signed-in user's licence and permissions, so licence assignment decides who sees the pane. Users without a Microsoft 365 Copilot (Premium) licence are not impacted, per the notice.
- Microsoft's Copilot privacy page says that turning off connected experiences that analyse your content removes Copilot features in OneNote on Android and other platforms. This is the one documented lever that reaches OneNote on Android, and it is broader than this feature.

**Autonomy & actions**

- The notice and roadmap describe summaries and question answering only. Neither describes the pane changing notes or taking actions, so none is assumed here.

**Change & support**

- Users will see a new pane on Android with no admin step, so expect questions about what it reads and about wrong or incomplete summaries. Microsoft's privacy page says Copilot responses are not guaranteed to be factual.
- The notice suggests informing helpdesk staff and users about the pane and the Summary feature.

## Cost and licensing

Microsoft's notice MC1309746 says the pane is for users licensed with Microsoft 365 Copilot (Premium). Microsoft's Copilot overview describes Microsoft 365 Copilot (Premium) as the full add-on licensed experience and notes that some features are subject to fair use limits. The notice asks administrators to make sure users who should have the feature hold that licence.

The notice names no separate meter or charge for the pane, and the Copilot overview's usage-based billing section lists Cowork, Code and Autopilot, not OneNote. A price or fair-use limit specific to this feature is not stated. Indirect costs are licence assignment, helpdesk briefing and user communication.

## Scope

- **Users:** those licensed with Microsoft 365 Copilot (Premium) who use OneNote on Android. The notice says users without that licence are not impacted.
- **Clouds:** the roadmap record lists Worldwide (Standard Multi-Tenant).
- **Platform:** Android only, per the roadmap record. Other platforms are not covered by this item.
- **Release phase and timing:** General Availability. The roadmap target is November CY2026; the notice says rollout begins and is expected to complete at the end of November 2026.
- **Prerequisites:** a Microsoft 365 Copilot (Premium) licence for each user.

## Governance guidance

### Before rollout

- Confirm how your Cloud Policy setting for connected experiences that analyse content is configured today, because it governs Copilot features in OneNote on Android.
- Review oversharing in shared notebooks and sections, because answers draw on content the asking user can open.
- Brief helpdesk staff on the pane and the Summary feature, as the notice suggests.

### At rollout

- Watch Message center and the roadmap item for the final rollout date, as the timeline has already moved once.
- Tell licensed Android users what the pane reads and that summaries need checking against the page.

### After rollout

- Ask pilot users whether summaries and answers matched their notes, and log any wrong or sensitive results for follow-up.
- Reassess the Cloud Policy setting if the pane shows up for users you did not intend to cover.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether connected experiences that analyse content, which Copilot in OneNote needs, are on for Android</strong><br><small>User</small><br><small class="controls__note">Setting name: Allow the use of connected experiences in Office that analyze content. Turning it off removes Copilot in OneNote on Android. Broader than this feature. Office Apps Administrator recommended.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › Policy configurations › Create › Start with the basics › Choose the scope › Configure Settings <a href="https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The documented control that reaches OneNote on Android is the Cloud Policy setting for connected experiences that analyse content. Microsoft's pages say turning it off removes Copilot features in OneNote, so it is a broad switch, not a control for this pane alone. It applies to the users in the policy configuration's scope, set on the Choose the scope page.

Microsoft's Android privacy page says Cloud Policy is how this setting is applied to Office on Android. Microsoft's Cloud Policy page recommends the Office Apps Administrator role. Microsoft Learn documents no API for Cloud Policy settings at the time of writing (November 2026), so this setting is set in the admin centre.

Who sees the pane is also set by the Microsoft 365 Copilot (Premium) licence, as the notice says. Microsoft's notice says existing Microsoft 365 Copilot controls, permissions and policies continue to apply.

## Open questions

- Does a setting govern this pane separately from existing Copilot controls and the Cloud Policy connected-experiences setting? Watch the Microsoft Learn Copilot pages and MC1309746.
- Does a price or fair-use limit specific to this feature exist? Watch the Microsoft Copilot overview page.
- Will the rollout finish by the end of November 2026, given that the notice already moved it from the end of October?

<!-- rationale
risk: Medium. Generative AI will read note content on Android phones for licensed users by default, and Microsoft's notice says it alters how existing customer data is processed, though existing Copilot permissions and policies still apply.
cost: Medium. The pane requires the Microsoft 365 Copilot (Premium) add-on licence for Android users who should have access. The notice names no separate meter; licence assignment, helpdesk briefing and communication also take staff time.
impact: Medium. Only users with a Microsoft 365 Copilot (Premium) licence who use OneNote on Android will see the pane; Microsoft's notice says users without the licence are not impacted.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls: table / admin-path: The listed Microsoft 365 Apps admin center path reaches Configure Settings when creating a Cloud Policy configuration. | Found: On the Configure Settings page, select the policies that you want to include in the policy configuration. You can search for the policy by name, or you can create a custom filter. | Fix: Append ' > Allow the use of connected experiences in Office that analyze content' to controls[0].ui.path and its rendered table path. The existing route correctly reaches the settings page; the setting name is documented at https://learn.microsoft.com/microsoft-365-apps/privacy/android-privacy-controls. | Source: https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy
- [unsupported, minor] rationale: risk / default: Generative AI will read note content on Android phones for licensed users by default. | Found: Searched: OneNote Android Copilot chat pane Summary automatically processes reads notes by default user generates summary. Read MC1309746, roadmap record, Copilot privacy and Learn search excerpts; automatic pane availability is stated, automatic note analysis is not. | Fix: Replace the risk rationale's first clause with 'Medium. The Copilot pane will appear for licensed Android users without admin action and lets them request summaries and answers about accessible note content'. Retain the existing clause about changed processing and existing permissions and policies. MC1309746 states availability and these capabilities, not automatic analysis.
-->
