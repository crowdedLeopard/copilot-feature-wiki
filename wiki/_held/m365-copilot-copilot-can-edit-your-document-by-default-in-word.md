---
title: "Word: Copilot edits your document directly by default in chat"
slug: "m365-copilot-copilot-can-edit-your-document-by-default-in-word"
roadmapId: 557673
topic: "m365-copilot"
products: ["Word","Microsoft Copilot (Microsoft 365)"]
summary: "Copilot chat in Word can now edit the document directly, without users toggling editing on; users can turn it off. No tenant-wide admin switch is documented, so plan communication and licence review."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mac","Web"]
targetDate: "March CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "high"
defaultState: "on"
action: "prepare"
licensing:
  model: "mixed"
  notes: "Microsoft's overview says users with the Microsoft 365 Copilot add-on licence get the full experience of Copilot in Word, and users without it can still use Copilot in Word within fair use limits. Which tier gets direct editing by default is not yet published."
audiences: ["m365-admin","change-adoption","end-user"]
tags: ["word","m365-copilot","copilot","user-experience","admin-controls","licensing"]
sources:
  - title: "Microsoft 365 Roadmap item 557673"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=557673"
    kind: "roadmap"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Microsoft Copilot requirements"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
  - title: "copilotPolicySetting resource type"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/resources/copilotpolicysetting"
    kind: "learn"
  - title: "Assign or unassign licenses for users in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Assign Microsoft 365 licenses to user accounts with PowerShell"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
videos: []
related: ["word-copilot-edit-mode-is-available-to-users-in-office-365-gcc"]
controls:
  - governs: "Which users hold the Microsoft 365 Copilot add-on licence"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "Governs the licence tier for Copilot in Word generally. It does not switch direct editing on or off."
  - governs: "Tenant-wide switch for Copilot editing documents directly in Word"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such setting at the time of writing (November 2026). Users can turn the experience off themselves, per the release notes."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-02-25T00:15:23"
changes:
  - date: "2026-11-22"
    note: "First briefing: Copilot chat in Word edits documents directly by default; roadmap says In development while the release notes list it; no admin switch documented."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 42 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 42
  confirmed: 38
  unconfirmed: 1
  contradicted: 3
  attempts: 1
  hash: "15963601cae6dea138daa8a127caa3cf"
---

## What's changing

The default chat experience with Copilot in Word now allows Copilot to directly edit your document. The roadmap item says all changes made by Copilot are fully reviewable and reversible, and that users can turn this experience off if needed.

The Microsoft 365 Copilot release notes list the same item under an entry dated June 2, 2026, marked [Web]. They say Copilot can make direct edits without users toggling editing on, and that users can still turn the experience off if they prefer. Their "Try this" steps include asking Copilot to rewrite a paragraph, change formatting, or insert new content and then review the tracked changes. The release notes do not say where a user turns the experience off.

The roadmap record lists the item as In development with a target of March CY2026, for Desktop, Mac and Web in the Worldwide (Standard Multi-Tenant) cloud, at General Availability. The release notes show Web only, and the record has not moved from In development, so the two sources differ on status and platforms. Microsoft Learn has no page for this feature beyond the release note, so the behaviour described here is the roadmap's and the release note's description.

## Why it matters

Until now users who wanted Copilot to change a Word document had to switch editing on; the release notes say they no longer need to. In practice a prompt such as "rewrite this paragraph" can now change the document itself rather than only produce text to paste. Microsoft has not stated whether any further step is needed on arrival beyond the user's own off switch, and no admin control for it is documented.

For a service owner the exposure is document integrity: shared contracts, policies and reports can be altered by a user's Copilot prompt. The roadmap's reviewable-and-reversible wording and the release notes' tracked changes are the safety net, so help desk and training messages should tell users where to review changes before they save or share a document.

## Risk assessment

**Data exposure**
- No new data source is described: the change is about what Copilot can do to the document the user has open. Microsoft Learn does not describe a different data boundary for direct editing, so existing Copilot controls and sensitivity labels apply as they do today.

**Security & identity**
- The release notes describe edits made in the user's own Word session. Microsoft Learn documents no separate identity for these edits, and none is assumed here.

**Autonomy & actions**
- Direct edits happen without the user switching editing on first, so an unreviewed accept or save can carry a Copilot change into a shared file. The roadmap says changes are fully reviewable and reversible, and the release notes say they remain trackable and reversible.
- No admin setting for this behaviour is documented, so the user's own off switch is the documented opt-out. The release notes do not say where it is.

**Change & support**
- Expect questions from users who see Copilot edit text instead of suggesting it, and from those who cannot find the off switch. The roadmap target (March CY2026) has passed and the status is still In development, so confirm what your users see before communicating a date.

## Cost and licensing

Microsoft's Copilot overview says users with the Microsoft 365 Copilot add-on licence have access to the full experience of Copilot in Word, Excel, PowerPoint and OneNote, and that users without the add-on can use Copilot in those apps within fair use limits. It also says the chat experiences in Word vary depending on the user's licence and tenant configuration.

Microsoft Learn documents no separate licence, meter or credit rate for direct editing in Word at the time of writing (November 2026), and the roadmap item names none. Which licence tier receives direct editing by default is not yet published. The indirect cost is admin and help desk time, plus any licence assignment changes you make using the controls table.

## Scope

The roadmap record lists Word and Microsoft Copilot (Microsoft 365) as products, the Worldwide (Standard Multi-Tenant) cloud, and Desktop, Mac and Web as platforms, at General Availability. The release notes entry is marked [Web]. Microsoft publishes a separate item for GCC (see the related briefing), and this record does not list any US Government cloud.

The roadmap description says the default chat experience in Word allows direct edits, so it is aimed at users who have Copilot in Word. The overview page describes Word access by licence tier, and which tiers get direct editing is not yet published. The roadmap record names no rollout mechanics, release channel or prerequisite.

## Governance guidance

### Before rollout
- Check the roadmap item and the Microsoft 365 Copilot release notes for status changes, because the record says In development while the release notes already list the change.
- Identify which users hold the Microsoft 365 Copilot add-on licence, using the licence assignment row in the controls table, so you know who is likely to see full Copilot in Word.
- Write a short user note that says Copilot in Word can edit the document directly, that changes can be reviewed and undone, and that users can turn the experience off.

### At rollout
- Ask a pilot group on Desktop, Mac and Web to confirm what they see, since the release notes mention only Web.
- Brief the help desk that Copilot edits can now appear in the document itself, and tell them to ask users to review the tracked changes.

### After rollout
- Collect user reports of unexpected edits, and check shared documents that Copilot touched before accepting them.
- Re-check Microsoft Learn for an admin setting for this behaviour, and add it to your runbook when one is published.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot add-on licence</strong><br><small>User</small><br><small class="controls__note">Governs the licence tier for Copilot in Word generally. It does not switch direct editing on or off.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch for Copilot editing documents directly in Word</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such setting at the time of writing (November 2026). Users can turn the experience off themselves, per the release notes.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Licence assignment decides who has the Copilot add-on in Word. It does not switch direct editing on or off, and Microsoft has not said whether the add-on tier changes the behaviour. Assigning licences needs at least the License Administrator or User Administrator role, as the licence page states.

Microsoft Learn lists Copilot settings in the Microsoft 365 admin center under Copilot > Settings, and its Microsoft Graph copilotPolicySetting page lists five supported settings, none for Word editing. The user-level off switch in Word is described in the release notes but its location is not given.

## Open questions

- Where in Word does a user turn off direct editing, and can an administrator set that choice for the tenant or for groups? Watch the Microsoft 365 Copilot release notes and Message center.
- Does direct editing apply to users without the Microsoft 365 Copilot add-on licence who use Copilot in Word? Watch the Copilot overview page.
- Does the rollout cover Desktop and Mac as the roadmap record lists, or only Web as the release notes show, and when does the status move from In development?
- Does direct editing honour sensitivity label restrictions and read-only documents in the same way as other Copilot actions in Word?

<!-- rationale
risk: Medium. Copilot's default chat in Word is described as editing the document directly, and Microsoft Learn documents no tenant-wide admin setting for it at the time of writing (November 2026); edits are described as reviewable and reversible.
cost: Low. The cost known is admin and communication time plus the Copilot licence users already need for Word; Microsoft Learn documents no separate licence or meter for this behaviour at the time of writing (November 2026).
impact: High. It changes the default chat behaviour in Word for the people who use Copilot there, so users notice on first use without an admin acting.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters / behaviour: Until this change, users who wanted Copilot to change a Word document had to switch editing on. | Found: Searched: Copilot Word direct editing by default user turn off editing mode settings 557673; Copilot Word edit mode license. Read release notes and overview. They describe the new chat default, not a historical requirement for every way Copilot could change a Word document. | Fix: Replace the first sentence with: 'The release notes say Copilot can now make direct edits in Word chat without users toggling editing on.'
- [contradicted, blocker] front matter: licensing.notes; Cost and licensing / licensing: Users without the Copilot add-on can use Copilot in Word, Excel, PowerPoint and OneNote within fair use limits. | Found: Copilot Chat (Basic): You don't have the Microsoft 365 Copilot add-on license and don't have access to Copilot in Word, Excel, PowerPoint, and OneNote. | Fix: Replace the unqualified statement in the notes and body with: 'Microsoft 365 Copilot (Basic) users without the add-on can use Copilot capabilities in Word, Excel, PowerPoint and OneNote; some features have fair use limits. Copilot Chat (Basic) users do not have this app access.' Keep the overview citation. | Source: https://learn.microsoft.com/copilot/plan/copilot-overview
- [contradicted, blocker] front matter: licensing.model / licensing: The licensing model for the editing feature is mixed. | Found: Edit with Copilot in Word, Excel, PowerPoint, and OneNote² ² Microsoft 365 Copilot (Premium) features: A Microsoft 365 Copilot license is required to access this feature. | Fix: Set licensing.model to 'add-on' and state: 'The Microsoft Copilot service description identifies Edit with Copilot in Word as a Premium feature requiring a Microsoft 365 Copilot licence.' Add https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot to sources. | Source: https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot
- [contradicted, blocker] front matter: licensing.notes; Cost and licensing; Scope; Governance controls; Open questions / absence: Microsoft has not published which licence tier can edit directly in Word. | Found: Edit with Copilot in Word, Excel, PowerPoint, and OneNote² ² Microsoft 365 Copilot (Premium) features: A Microsoft 365 Copilot license is required to access this feature. | Fix: Replace statements that editing entitlement is unpublished with: 'The service description requires a Microsoft 365 Copilot licence for Edit with Copilot in Word; the release note does not separately describe licence-specific rollout of the new chat default.' Replace the Basic-user open question with: 'Does the new default have any licence-specific rollout qualifications beyond the published Edit with Copilot requirement?' Cite the service description. | Source: https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Data exposure / applicability: Existing Copilot data protections and sensitivity labels continue to apply to Copilot in Word. | Found: It uses the same data protection, access control, and compliance capabilities that already apply across Microsoft 365. Copilot honors Microsoft Purview sensitivity labels and encryption when it grounds responses and generates content. | Fix: Replace the inference with: 'Microsoft says Copilot uses existing Microsoft 365 data protection and access controls and honours sensitivity labels when grounding responses and generating content.' Cite https://learn.microsoft.com/copilot/plan/architecture-data-protection-auditing. | Source: https://learn.microsoft.com/copilot/plan/architecture-data-protection-auditing
- [supported, minor] Governance controls / behaviour: The copilotPolicySetting reference lists five supported setting identifiers, none for Word's editing default. | Found: This API is currently in preview. Supported settings: microsoft.copilot.copilotchatpinning; microsoft.copilot.blockaccesstoopenfiles; microsoft.copilot.imagegeneration; microsoft.copilot.allowwebsearch; microsoft.copilot.allowinadmincenters. | Fix: Change 'its Microsoft Graph copilotPolicySetting page lists five supported settings' to 'its preview Microsoft Graph copilotPolicySetting page lists five supported settings'. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/resources/copilotpolicysetting
-->
