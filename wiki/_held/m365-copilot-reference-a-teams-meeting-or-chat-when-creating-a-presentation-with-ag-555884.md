---
title: "PowerPoint on desktop: reference a Teams meeting or chat when creating a presentation with Copilot Agent Mode"
slug: "m365-copilot-reference-a-teams-meeting-or-chat-when-creating-a-presentation-with-ag-555884"
roadmapId: 555884
topic: "m365-copilot"
products: ["PowerPoint","Microsoft Copilot (Microsoft 365)"]
summary: "Agent Mode in PowerPoint on desktop can build a deck from a Teams meeting or chat named in the prompt. Launched; no admin setting or feature-specific licence is documented, so review fit and permissions."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop"]
targetDate: "March CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "The Copilot overview ties the full experience of Copilot in PowerPoint to the Microsoft 365 Copilot add-on licence and says users without it can still use Copilot in PowerPoint. No page states which applies to this feature."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["powerpoint","m365-copilot","teams","copilot"]
sources:
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Microsoft Copilot requirements"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements"
    kind: "learn"
  - title: "Assign or unassign licenses for users in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Assign Microsoft 365 licenses to user accounts with PowerShell"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 555884"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=555884"
    kind: "roadmap"
videos: []
related: ["m365-copilot-reference-a-teams-meeting-or-chat-when-creating-a-presentation-with-agent-mod","m365-copilot-powerpoint-agent","m365-copilot-reference-webpages-when-creating-a-presentation-with-agent-mode-in-pow-555896"]
controls:
  - governs: "Which users hold the Microsoft 365 Copilot add-on licence for the full experience of Copilot in PowerPoint"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "Existing control, used today in place of a feature switch. Role: at least License Administrator or User Administrator. It covers Copilot licensing generally, not this feature alone."
  - governs: "A setting that turns off referencing Teams meetings or chats in Agent Mode in PowerPoint"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such setting at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-06-02T23:00:40"
changes:
  - date: "2026-11-24"
    note: "New briefing for the desktop roadmap item: Teams meeting or chat references in Agent Mode in PowerPoint, with the licence control and the gaps Microsoft has not documented."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 6 of 50 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 50
  confirmed: 43
  unconfirmed: 1
  contradicted: 6
  attempts: 1
  hash: "69881aaebcc6b346ca8032c500b17151"
---

## What's changing

Users of Agent Mode in PowerPoint on desktop can now name a Teams meeting or chat in their prompt, and Copilot uses that content as context to create a presentation. The Microsoft 365 Copilot release notes (entry dated July 01, 2026) describe it this way: users enter a prompt that mentions the relevant Teams meeting or chat, and Copilot generates a deck based on that content.

The release notes give the steps as: open PowerPoint and start Copilot, enter a prompt that references the Teams meeting or chat, and press Enter. The release notes say the integration supports referencing meetings and chat messages securely, but they do not say how that is done.

The roadmap record for item 555884 has the status Launched, the release phase General Availability, a target of March CY2026, the platform Desktop and the cloud Worldwide (Standard Multi-Tenant). Microsoft lists the same feature under two more roadmap items, 555883 (Web) and 555885 (Mac), with the same status, target and cloud. The release notes entry covers all three ids and labels them Windows, Web and Mac, where this record says Desktop. The Mac item has its own page at /features/m365-copilot-reference-a-teams-meeting-or-chat-when-creating-a-presentation-with-agent-mod/.

No Microsoft Learn page dedicated to this feature was found, so what follows about its behaviour is the release notes' description.

## Why it matters

This adds a new data source to a feature users already have. Teams meetings and chats often hold decisions, customer names and personnel matters, and a prompt can now turn them into slides without anyone copying notes. Expect people to use it quickly, because the release notes present it as a way to avoid manually summarising or transferring notes.

Microsoft has not stated what happens on arrival, so base planning on the fact that no source says existing behaviour changes. The question for a service owner is whether your Teams retention, sharing and labelling habits are ready for content to be reused in decks that travel by email and links.

## Risk assessment

**Data exposure**
- A prompt that names a Teams meeting or chat makes that content source material for slides. The release notes say this is done securely but give no detail on permissions or sensitivity labels, so confirm both in a pilot before relying on them.
- The output is a presentation, so anyone who later receives the file can see whatever was drawn from the meeting or chat. The Teams source and the deck are governed separately.

**Security & identity**
- The release notes do not say whose access decides which meetings or chats can be referenced. Confirm that a user cannot reference a meeting or chat they could not already open.
- Access to the full Copilot experience in PowerPoint follows the licence assigned to the user (see the controls table).

**Autonomy & actions**
- The release notes describe the user entering a prompt and pressing Enter, after which Copilot creates a presentation. They describe no action outside the presentation.

**Change & support**
- Microsoft lists the feature under three roadmap ids by platform, and the release notes label them Windows, Web and Mac. Support teams should expect the same question from users on each platform.
- No admin setting for this feature is documented, so the only lever today is the user's Copilot licence.

## Cost and licensing

The Microsoft Copilot overview says users with the Microsoft 365 Copilot add-on licence have access to the full experience of Copilot in Word, Excel, PowerPoint and OneNote, and that users without it can still use Copilot in those apps, with some features subject to fair use limits. The requirements page adds that chat experiences in Word, Excel and PowerPoint vary depending on the user's licence and tenant configuration.

Neither the release notes nor those two pages state which licence this feature needs, and a licence or meter specific to this feature is not yet published. Admin time to assign licences and brief users is the only cost the sources show.

## Scope

The roadmap record lists the platform Desktop and the cloud Worldwide (Standard Multi-Tenant). It does not list GCC, GCC High or DoD. Microsoft's release notes list Windows, Web and Mac for the same feature across the three roadmap ids.

The release notes describe the user starting Copilot in PowerPoint and entering a prompt, and name no other prerequisite. The licence a user holds decides which Copilot experience they get in PowerPoint, as set out above. Rollout mechanics are not stated beyond the Launched status.

## Governance guidance

### Before rollout
- Check which users hold the Microsoft 365 Copilot add-on licence, using the licence row in the controls table, so you know who has the full experience of Copilot in PowerPoint.
- Review how your organisation handles Teams meeting and chat content that should not appear in decks, and decide whether users need guidance.

### At rollout
- Test the feature with a pilot user: reference a meeting and a chat in a prompt, then confirm what content appears in the slides and whether sensitivity labels carry over.
- Tell desktop users how to reference a Teams meeting or chat and remind them that the generated deck needs the same review as any other.

### After rollout
- Watch Message center and the Microsoft 365 Copilot release notes for a licence, setting or permission statement specific to this feature.
- Collect support questions by platform, since the feature is listed as separate roadmap items for Desktop, Web and Mac.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot add-on licence for the full experience of Copilot in PowerPoint</strong><br><small>User</small><br><small class="controls__note">Existing control, used today in place of a feature switch. Role: at least License Administrator or User Administrator. It covers Copilot licensing generally, not this feature alone.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>A setting that turns off referencing Teams meetings or chats in Agent Mode in PowerPoint</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No admin setting that switches this feature on or off is documented, so the only documented lever is the licence assigned to each user. Removing a licence affects the whole Copilot experience in PowerPoint, not only this feature.

The licence row needs at least the License Administrator or User Administrator role, as the Learn page states. Whether a licence is required for this feature specifically is not stated.

## Open questions

- Does referencing a Teams meeting or chat only draw on content the user could already open, and how are sensitivity labels and retention handled? Watch the Microsoft 365 Copilot release notes and Microsoft Learn.
- Which licence does this feature need, and does it differ for users without the Microsoft 365 Copilot add-on?
- Does a meeting need a transcript, recap or recording before it can be referenced, and do Teams meeting policies affect that?
- Will Microsoft publish an admin setting to turn this feature off separately?

<!-- rationale
risk: Medium. Teams meeting and chat content becomes source material for slides, and Microsoft Learn describes no admin setting, permission rule or label handling specific to this feature at the time of writing (November 2026).
cost: Low. The only cost the sources show is admin time and any Copilot licence a user already needs; Microsoft's release notes and the Copilot overview publish no licence or meter specific to this feature.
impact: Medium. Users of Agent Mode in PowerPoint on desktop notice it, because they can now name a Teams meeting or chat in a prompt; the roadmap record gives Desktop as the platform for this item.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: defaultState; Why it matters / default: The feature's default state is unknown. | Found: You can now reference a Teams meeting or chat when creating a presentation with Agent Mode in PowerPoint. Enter a prompt that references the Teams meeting or chat you want to use in your presentation. | Fix: Set defaultState to 'user-opt-in': the launched capability is available and is used when the user chooses to reference a meeting or chat in a prompt; the targeted control searches found no dedicated admin switch. Replace 'Microsoft has not stated what happens on arrival' with 'Users choose whether to reference a Teams meeting or chat when creating a presentation.' | Source: https://learn.microsoft.com/microsoft-365/copilot/release-notes
- [contradicted, blocker] Risk assessment: Data exposure / applicability: Anyone who later receives the presentation file can see whatever was drawn from the meeting or chat. | Found: encryption can also restrict what actions specified people can take on the content. Protect content in Office apps across different platforms and devices. Supported by Word, Excel, PowerPoint, and Outlook | Fix: Replace the universal recipient claim with 'Sharing the generated presentation can expose reused Teams content to its permitted readers.' Cite https://learn.microsoft.com/purview/sensitivity-labels for the protection of PowerPoint content. | Source: https://learn.microsoft.com/purview/sensitivity-labels
- [unsupported, blocker] front matter: licensing.model / licensing: This feature has a mixed licensing model. | Found: Searched: Copilot PowerPoint Teams meeting chat references license prerequisite billing meter; PowerPoint Agent Mode referencing Teams meeting chat license required. Read overview, requirements and service description; none assigns this feature a mixed entitlement. | Fix: Set licensing.model to 'included' for this new option inside Copilot in PowerPoint, and retain the product-level qualification: 'The Microsoft 365 Copilot add-on licence provides the full Copilot experience in PowerPoint. Microsoft also documents an in-app experience without that add-on; the release-notes entry does not specify which experience includes Teams meeting or chat references.' Cite https://learn.microsoft.com/copilot/plan/copilot-overview.
- [contradicted, blocker] Scope / availability: Rollout mechanics are not stated beyond the Launched status. | Found: Copilot features are introduced using a safe deployment model, gradually rolling out to a subset of users within a tenant before expanding across the organization. | Fix: Replace 'Rollout mechanics are not stated beyond the Launched status' with 'The roadmap status is Launched. The release notes describe Copilot features generally as gradually rolling out to a subset of users within a tenant before expanding across the organisation.' | Source: https://learn.microsoft.com/microsoft-365/copilot/release-notes
- [contradicted, blocker] Risk assessment: Change & support; Governance controls / absence: The user's Copilot licence is the only documented lever for controlling this desktop capability. | Found: If you turn off connected experiences that analyze your content on devices in your organization, Microsoft Copilot features won't be available to your users in the following apps: Excel OneNote Outlook PowerPoint Word | Fix: Remove both 'the only lever today' and 'the only documented lever' conclusions. Replace them with 'The licence row governs access to the full Copilot experience, not this feature alone. Connected-experience privacy controls can also disable Copilot in desktop PowerPoint more broadly.' Cite https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy. | Source: https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy
- [contradicted, blocker] rationale: risk; Open questions: user access / absence: Microsoft has not documented a permission rule governing this Copilot reference capability. | Found: Permissions come first. Copilot only summarizes or references content that the user is already authorized to access. | Fix: Remove the permission-rule absence from the risk rationale and the question asking whether Copilot can reference inaccessible content. State 'Copilot only summarizes or references content the user is already authorised to access.' Cite https://learn.microsoft.com/copilot/plan/architecture-data-protection-auditing. Pilot advice can remain as validation, not as an undocumented product boundary. | Source: https://learn.microsoft.com/copilot/plan/architecture-data-protection-auditing
- [contradicted, blocker] rationale: risk; Open questions: sensitivity labels; Governance guidance: At rollout / absence: How Copilot handles sensitivity labels protecting referenced Teams meetings and chats is undocumented. | Found: copying chat data can't be prevented for a destination item, and the sensitivity label can't be inherited. This limitation doesn't apply to meeting invites, responses, and calendar events that are protected by sensitivity labels. | Fix: Remove the label-handling absence from the rationale and resolve the label-inheritance part of the open question with 'Copilot and agents do not currently recognize sensitivity labels protecting Teams meetings and chats, and those labels cannot be inherited by destination content. This limitation does not apply to labeled meeting invites, responses and calendar events.' Cite https://learn.microsoft.com/purview/ai-m365-copilot-considerations. Narrow the pilot instruction to checking the generated deck's protection rather than discovering an undocumented inheritance rule. | Source: https://learn.microsoft.com/purview/ai-m365-copilot-considerations
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Data exposure / applicability: The Teams source and the generated deck are governed separately rather than automatically sharing the meeting or chat label. | Found: Sensitivity labels that protect Teams meetings and chat aren't currently recognized by Copilot and agents. For example, data returned from a meeting chat or channel chat won't display an associated sensitivity label | Fix: Replace 'The Teams source and the deck are governed separately' with 'Sensitivity labels protecting Teams meetings and chats are not currently recognized by Copilot and agents, and cannot be inherited by destination content; this limitation does not apply to labeled meeting invites, responses and calendar events.' Cite https://learn.microsoft.com/purview/ai-m365-copilot-considerations. | Source: https://learn.microsoft.com/purview/ai-m365-copilot-considerations
-->
