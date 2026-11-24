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
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "The Microsoft 365 Copilot add-on licence provides the full Copilot experience in PowerPoint. Microsoft also documents an in-app experience without that add-on; the release-notes entry does not specify which experience includes Teams meeting or chat references."
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
  - title: "Data, Privacy, and Security for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy"
    kind: "learn"
  - title: "Data protection and auditing for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/architecture-data-protection-auditing"
    kind: "learn"
  - title: "Considerations to manage Microsoft 365 Copilot and Channel Agent in Teams for security and compliance"
    url: "https://learn.microsoft.com/purview/ai-m365-copilot-considerations"
    kind: "learn"
  - title: "Learn about sensitivity labels"
    url: "https://learn.microsoft.com/purview/sensitivity-labels"
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
  - date: "2026-11-24"
    note: "Corrected after verification: default is now user-opt-in, licensing model is included with the product-level qualification, and statements on rollout, permissions, sensitivity labels and available controls now follow Microsoft Learn."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 48 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 48
  confirmed: 47
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "8291137b60c7b02b88453cb44fc80437"
---

## What's changing

Users of Agent Mode in PowerPoint on desktop can now name a Teams meeting or chat in their prompt, and Copilot uses that content as context to create a presentation. The Microsoft 365 Copilot release notes (entry dated July 01, 2026) describe it this way: users enter a prompt that mentions the relevant Teams meeting or chat, and Copilot generates a deck based on that content.

The release notes give the steps as: open PowerPoint and start Copilot, enter a prompt that references the Teams meeting or chat, and press Enter. The release notes say the integration supports referencing meetings and chat messages securely, but they do not say how that is done.

The roadmap record for item 555884 has the status Launched, the release phase General Availability, a target of March CY2026, the platform Desktop and the cloud Worldwide (Standard Multi-Tenant). Microsoft lists the same feature under two more roadmap items, 555883 (Web) and 555885 (Mac), with the same status, target and cloud. The release notes entry covers all three ids and labels them Windows, Web and Mac, where this record says Desktop. The Mac item has its own page at /features/m365-copilot-reference-a-teams-meeting-or-chat-when-creating-a-presentation-with-agent-mod/.

No Microsoft Learn page dedicated to this feature was found, so what follows about its behaviour is the release notes' description.

## Why it matters

This adds a new data source to a feature users already have. Teams meetings and chats often hold decisions, customer names and personnel matters, and a prompt can now turn them into slides without anyone copying notes. Expect people to use it quickly, because the release notes present it as a way to avoid manually summarising or transferring notes.

Users choose whether to reference a Teams meeting or chat when creating a presentation. The question for a service owner is whether your Teams retention, sharing and labelling habits are ready for content to be reused in decks that travel by email and links.

## Risk assessment

**Data exposure**
- A prompt that names a Teams meeting or chat makes that content source material for slides. The release notes say this is done securely but give no detail on how.
- Sharing the generated presentation can expose reused Teams content to its permitted readers. Sensitivity labels protecting Teams meetings and chats are not currently recognised by Copilot and agents, and cannot be inherited by destination content; this limitation does not apply to labeled meeting invites, responses and calendar events.

**Security & identity**
- Copilot only summarises or references content the user is already authorised to access, so a user's own access to a meeting or chat decides what can be referenced.
- Access to the full Copilot experience in PowerPoint follows the licence assigned to the user (see the controls table).

**Autonomy & actions**
- The release notes describe the user entering a prompt and pressing Enter, after which Copilot creates a presentation. They describe no action outside the presentation.

**Change & support**
- Microsoft lists the feature under three roadmap ids by platform, and the release notes label them Windows, Web and Mac. Support teams should expect the same question from users on each platform.
- The licence row governs access to the full Copilot experience, not this feature alone. Connected-experience privacy controls can also disable Copilot in desktop PowerPoint more broadly.

## Cost and licensing

The Microsoft Copilot overview says users with the Microsoft 365 Copilot add-on licence have access to the full experience of Copilot in Word, Excel, PowerPoint and OneNote, and that users without it can still use Copilot in those apps, with some features subject to fair use limits. The requirements page adds that chat experiences in Word, Excel and PowerPoint vary depending on the user's licence and tenant configuration.

Neither the release notes nor those two pages state which licence this feature needs, and a licence or meter specific to this feature is not yet published. Admin time to assign licences and brief users is the only cost the sources show.

## Scope

The roadmap record lists the platform Desktop and the cloud Worldwide (Standard Multi-Tenant). It does not list GCC, GCC High or DoD. Microsoft's release notes list Windows, Web and Mac for the same feature across the three roadmap ids.

The release notes describe the user starting Copilot in PowerPoint and entering a prompt, and name no other prerequisite. The licence a user holds decides which Copilot experience they get in PowerPoint, as set out above. The roadmap status is Launched. The release notes describe Copilot features generally as gradually rolling out to a subset of users within a tenant before expanding across the organisation.

## Governance guidance

### Before rollout
- Check which users hold the Microsoft 365 Copilot add-on licence, using the licence row in the controls table, so you know who has the full experience of Copilot in PowerPoint.
- Review how your organisation handles Teams meeting and chat content that should not appear in decks, and decide whether users need guidance.

### At rollout
- Test the feature with a pilot user: reference a meeting and a chat in a prompt, then confirm what content appears in the slides and check the generated deck's protection.
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

No admin setting that switches this feature on or off separately is documented at the time of writing (November 2026). The licence row governs access to the full Copilot experience, not this feature alone. Connected-experience privacy controls can also disable Copilot in desktop PowerPoint more broadly. Removing a licence affects the whole Copilot experience in PowerPoint, not only this feature.

The licence row needs at least the License Administrator or User Administrator role, as the Learn page states. Whether a licence is required for this feature specifically is not stated.

## Open questions

- How does Teams retention apply to meeting or chat content reused in a generated deck? Watch the Microsoft 365 Copilot release notes and Microsoft Learn.
- Which licence does this feature need, and does it differ for users without the Microsoft 365 Copilot add-on?
- Does a meeting need a transcript, recap or recording before it can be referenced, and do Teams meeting policies affect that?
- Will Microsoft publish an admin setting to turn this feature off separately?

<!-- rationale
risk: Medium. Teams meeting and chat content becomes source material for slides. Copilot only references content the user is already authorised to access, but labels protecting Teams meetings and chats are not currently recognised by Copilot and agents.
cost: Low. The only cost the sources show is admin time and any Copilot licence a user already needs; Microsoft's release notes and the Copilot overview publish no licence or meter specific to this feature.
impact: Medium. Users of Agent Mode in PowerPoint on desktop notice it, because they can now name a Teams meeting or chat in a prompt; the roadmap record gives Desktop as the platform for this item.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: At rollout; Governance controls / consistency: The checklist's instruction to check the generated deck's protection has no corresponding governance-control row. | Found: At rollout: "check the generated deck's protection". The controls table contains only Copilot licence assignment and the absence of a feature-specific switch. | Fix: Remove "and check the generated deck's protection" from the first At rollout checklist item; retain the instruction to confirm what content appears in the slides.
-->
