---
title: "PowerPoint on the web: reference a Teams meeting or chat when creating a presentation with Copilot Agent Mode"
slug: "m365-copilot-reference-a-teams-meeting-or-chat-when-creating-a-presentation-with-ag-555883"
roadmapId: 555883
topic: "m365-copilot"
products: ["PowerPoint","Microsoft Copilot (Microsoft 365)"]
summary: "Launched on the web: users can name a Teams meeting or chat in a prompt and Copilot Agent Mode in PowerPoint builds a deck from it. Microsoft names no admin switch or action; the data reached follows each user's Teams permissions."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "March CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Microsoft's licensing page says Microsoft Copilot is available with Microsoft 365 E7 or as an add-on for eligible plans. No page read states a licence rule specific to this feature."
audiences: ["m365-admin","compliance","change-adoption"]
tags: ["m365-copilot","powerpoint","teams","licensing"]
sources:
  - title: "Microsoft 365 Roadmap 555883"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=555883"
    kind: "roadmap"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Data, Privacy, and Security for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy"
    kind: "learn"
  - title: "License options for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/microsoft-365/microsoft-365-copilot-licensing"
    kind: "learn"
  - title: "Assign or unassign licenses for users in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Assign Microsoft 365 licenses to user accounts with PowerShell"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
videos: []
related: ["m365-copilot-reference-a-teams-meeting-or-chat-when-creating-a-presentation-with-agent-mod","m365-copilot-reference-webpages-when-creating-a-presentation-with-agent-mode-in-powerpoint","m365-copilot-reference-files-saved-in-sharepoint-libraries-and-onedrive-folders-whe-555894"]
controls:
  - governs: "Which users hold a Microsoft Copilot licence"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "General licence assignment, not a switch for this feature. Needs at least License Administrator or User Administrator."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-06-02T23:00:40"
changes:
  - date: "2026-11-24"
    note: "First briefing for the Web roadmap item; the feature is also listed as Desktop (555884) and Mac (555885)."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 36 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 36
  confirmed: 33
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "8eb456303903be6c483fc8346066abfb"
---

## What's changing

Users of Copilot in PowerPoint on the web can now name a Teams meeting or chat in a prompt, and Copilot builds a presentation from that content. Microsoft's release notes describe it this way: "Users can enter a prompt that mentions the relevant Teams meeting or chat, and Copilot will generate a deck based on that content."

This roadmap item covers the Web platform. Microsoft lists the same feature under two further roadmap items: 555884 for Desktop and 555885 for Mac ([Mac briefing](/features/m365-copilot-reference-a-teams-meeting-or-chat-when-creating-a-presentation-with-agent-mod/)). All three are Launched, with a March CY2026 target and General Availability as the release phase, for the Worldwide (Standard Multi-Tenant) cloud.

Microsoft's Copilot release notes list the feature under July 01, 2026, which differs from the roadmap's March CY2026 target; both are given as published. Microsoft Learn has no page for this feature beyond that release-notes entry, so what follows about behaviour is the release notes' description.

## Why it matters

Teams chats and meetings now feed generated presentations, so content that people discuss in Teams can end up on slides without anyone retyping it. Microsoft's privacy page says Copilot only surfaces organisational data to which the individual user has at least view permissions, so the exposure follows existing Teams and file permissions rather than creating new access.

Microsoft has not stated whether anything is switched on or off on arrival, so no source says existing behaviour changes for tenants. The wiki's view is that this needs a communication to PowerPoint users about what to reference and share, and a check that Copilot licences sit with the people you intend.

## Risk assessment

**Data exposure**
- A prompt that names a Teams meeting or chat uses that content as the basis of a deck. Microsoft's privacy page says Copilot only surfaces organisational data the user has at least view permissions to, so oversharing in Teams carries through to what a user can pull into slides.
- Microsoft's privacy page says Copilot honours the usage rights granted to a user on data encrypted by Microsoft Purview Information Protection, through sensitivity labels or restricted permissions. Whether a generated deck carries the source's label is not stated on any page read.

**Security & identity**
- No new identity or permission model is described: the release notes describe a prompt entered by the user, and the privacy page ties results to that user's own access.

**Autonomy & actions**
- The release notes describe Copilot creating a presentation after the user enters a prompt and presses Enter. No page read describes it taking actions outside the presentation.

**Change & support**
- Expect questions about why a deck contains discussion content, and about which meeting or chat Copilot picked. Microsoft has not published how a referenced meeting or chat is matched to the prompt.

## Cost and licensing

Microsoft's licensing page says Microsoft Copilot is available with Microsoft 365 E7 or as an add-on for eligible commercial, US Government and education subscription plans. This is the product-level requirement; no Learn page read states a licence rule specific to referencing Teams content in PowerPoint.

No separate meter or charge for this feature appears on the licensing page or in the release-notes entry at the time of writing (November 2026). Indirect cost is admin time to assign licences and to brief users.

Licences are assigned in the Microsoft 365 admin center by at least a License Administrator or User Administrator (see the controls table).

## Scope

- **Platform:** this item is the Web entry; Desktop (555884) and Mac (555885) are separate roadmap items.
- **Cloud:** Worldwide (Standard Multi-Tenant), as the roadmap record lists it.
- **Status:** Launched, General Availability, target March CY2026.
- **Users:** people using Copilot in PowerPoint who name a Teams meeting or chat in a prompt. Microsoft's privacy page limits Copilot results to data the user has at least view permissions to.
- **Prerequisites:** no feature-specific prerequisite is stated in the release notes. The product-level licence is described under cost and licensing.

## Governance guidance

### Before rollout
- Identify who holds a Microsoft Copilot licence in the Microsoft 365 admin center (License Administrator or User Administrator), since the licensing page ties the product to those licences.
- Review oversharing in Teams chats and channels that licensed users can read, because Copilot results follow what each user has at least view permissions to.
- Draft guidance for makers of decks on what to reference and where to store the result.

### At rollout
- Tell licensed PowerPoint users on the web that they can name a Teams meeting or chat in a Copilot prompt.
- Ask users to check generated slides for content that should not leave its original audience before sharing the deck.

### After rollout
- Collect help-desk questions about unexpected content in generated decks and about which meeting or chat was used.
- Re-check the Microsoft 365 Copilot release notes and Message center for any admin setting Microsoft documents for this feature.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold a Microsoft Copilot licence</strong><br><small>User</small><br><small class="controls__note">General licence assignment, not a switch for this feature. Needs at least License Administrator or User Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The table lists the only control a page read ties to this feature's availability: the licence that Microsoft's licensing page describes for Microsoft Copilot. It is a general licence control, not a switch for referencing Teams content. The role needed is at least License Administrator or User Administrator. What a user can pull into a deck is bounded by that user's own Teams and file permissions, which are governed in Teams and SharePoint, not in this table.

## Open questions

- Is there an admin setting, in the Microsoft 365 admin center or elsewhere, that turns this capability on or off for the tenant or a group? Watch the Microsoft 365 Copilot release notes and Message center.
- Which licence does this feature require in a tenant that has Microsoft Copilot Chat users without a Microsoft Copilot licence? No page read states it.
- Does a deck generated from a labelled meeting or chat inherit a sensitivity label, and does a meeting need a transcript or recap to be referenced? Microsoft has not said.
- Why do the release notes date the feature July 01, 2026 when the roadmap target is March CY2026?

<!-- rationale
risk: Medium. Teams meeting and chat content becomes source material for presentation files, and Microsoft's pages say Copilot only surfaces data the user can already view, so existing permissions are the main control.
cost: Low. Microsoft's licensing page lists Microsoft Copilot as available with Microsoft 365 E7 or as an add-on; no separate meter or charge for this feature is published, so the cost is licence assignment and admin time.
impact: Medium. People who build decks in PowerPoint on the web with Copilot will notice it, and they choose it by naming a meeting or chat in a prompt.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Data exposure; Open questions / absence: Microsoft has not stated whether generated decks inherit the sensitivity label of a source Teams meeting or chat. | Found: Sensitivity labels that protect Teams meetings and chat aren't currently recognized by Copilot and agents. For example, data returned from a meeting chat or channel chat won't display an associated sensitivity label | Fix: Replace the label-inheritance absence and that part of the open question with: 'Microsoft documents that Copilot does not recognize sensitivity labels protecting Teams meetings and chat: returned chat data does not display the label, copying it to a destination item cannot be prevented, and the label cannot be inherited. This limitation does not apply to labelled meeting invites, responses or calendar events.' Cite https://learn.microsoft.com/purview/ai-m365-copilot-considerations. | Source: https://learn.microsoft.com/purview/ai-m365-copilot-considerations
- [contradicted, blocker] front matter: defaultState; Why it matters; rationale: impact / default: The default state is unknown despite the documented capability that users choose by naming a meeting or chat in a prompt. | Found: Users can enter a prompt that mentions the relevant Teams meeting or chat, and Copilot will generate a deck based on that content. | Fix: Set defaultState to 'user-opt-in', as the standard defines an available capability each user chooses to use after a search finds no feature-specific admin switch. Replace the first sentence of the second Why it matters paragraph with: 'Users choose to use the capability by referencing a Teams meeting or chat in a prompt; no feature-specific admin switch is documented at the time of writing (November 2026).' Retain action 'review'. | Source: https://learn.microsoft.com/microsoft-365/copilot/release-notes
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The checklist asks readers to review Teams access and oversharing, but the controls table has only licence assignment. | Found: Review oversharing in Teams chats and channels that licensed users can read ... Which users hold a Microsoft Copilot licence ... Teams and file permissions ... not in this table. | Fix: Remove the Before rollout bullet 'Review oversharing in Teams chats and channels that licensed users can read, because Copilot results follow what each user has at least view permissions to.' It asks for a review of a control missing from the table; do not add an unverified row.
-->
