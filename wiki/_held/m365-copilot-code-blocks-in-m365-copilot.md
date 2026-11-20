---
title: "Microsoft Copilot (Microsoft 365): code blocks preview code, charts and diagrams inline in Chat"
slug: "m365-copilot-code-blocks-in-m365-copilot"
roadmapId: 569429
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans code blocks in Microsoft 365 Copilot Chat, previewing code, charts and diagrams inline. Learn does not yet document the feature, its default or an admin setting; no administrator action is documented."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mobile"]
targetDate: "September CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Microsoft Learn says Microsoft Copilot Chat is available to users with an eligible Microsoft 365 subscription, and that Microsoft Copilot needs a Microsoft Copilot licence and a qualifying prerequisite licence. Which applies to code blocks is not yet published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["m365-copilot","copilot-chat","user-experience","mobile"]
sources:
  - title: "Microsoft 365 Roadmap 569429"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569429"
    kind: "roadmap"
  - title: "Microsoft Copilot requirements"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements"
    kind: "learn"
  - title: "License options for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/copilot-license-options"
    kind: "learn"
  - title: "Manage Copilot Chat"
    url: "https://learn.microsoft.com/copilot/manage/manage-copilot-chat"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "copilotAdminSetting resource type"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/resources/copilotadminsetting"
    kind: "learn"
videos: []
related: ["m365-copilot-app-blocks","m365-copilot-writing-blocks-in-m365-copilot","m365-copilot-build-interactive-reports-and-dashboards-with-pages"]
controls:
  - governs: "Whether code blocks specifically can be switched off in Chat"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting is documented at the time of writing (November 2026). Blocking the Copilot app through Integrated Apps blocks Chat as a whole, not code blocks alone."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-08-19T22:58:06"
changes:
  - date: "2026-11-20"
    note: "First briefing: roadmap-only feature with no Learn page yet; no code blocks setting is documented and the licence is not yet published."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 43 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-20"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 43
  confirmed: 38
  unconfirmed: 1
  contradicted: 4
  attempts: 1
  hash: "26791605632ff6320f932d61cb3c5de1"
---

## What's changing

The roadmap item states that Microsoft 365 Copilot now supports code blocks, which let users preview code, charts, diagrams and more directly inline while using Chat. The record adds that users previously previewed code side by side in a code canvas. It lists Desktop and Mobile as platforms and Worldwide (Standard Multi-Tenant) as the cloud.

Microsoft Learn does not describe code blocks at the time of writing (November 2026), so what follows about behaviour is the roadmap's description. Learn does not state which output types render, whether the code canvas remains available, or what happens on arrival.

The roadmap shows the status In development, the release phase General Availability and a target of September CY2026. That target month has passed and the record still shows In development, so read the date as a target. Learn now names the product Microsoft Copilot (formerly Microsoft 365 Copilot) and Microsoft Copilot Chat (formerly Microsoft 365 Copilot Chat); this briefing keeps the roadmap's wording where it reports the record.

## Why it matters

Microsoft has not stated whether code blocks arrive switched on, need an administrator to enable them or are chosen by each user. No source says existing Chat behaviour changes, so this is a feature to review and plan communications for, not one with a deadline.

The visible effect is on how Chat answers look to users who ask for code, charts or diagrams, on desktop and on mobile. Expect questions from analysts and makers about where previews now appear. Nothing in the roadmap text says code blocks read new data or act in other systems; confirm that when Microsoft publishes a Learn page.

## Risk assessment

**Data exposure**
- The roadmap describes previews of code, charts and diagrams inside the Chat response. It names no new data source or storage location, and Microsoft Learn describes none at the time of writing.

**Security & identity**
- Microsoft has not said whether a code block preview only displays content or also runs code, or where any execution would happen. Confirm this before issuing user guidance; the roadmap text describes no sandbox or identity.

**Autonomy & actions**
- The roadmap text describes previewing content in the conversation, not taking actions in other systems. No change to what Chat can do on its own is documented.

**Change & support**
- Users on desktop and mobile may see previews inline where the roadmap says they previously used a side-by-side code canvas. Microsoft has not said whether the canvas remains, so tell the service desk that the layout of code answers can differ between users while the feature rolls out.
- Blocking the Microsoft Copilot app through Integrated Apps blocks Chat as a whole, so it is not a way to switch off code blocks alone (see the controls notes).

## Cost and licensing

Microsoft has published no licence, meter or price specific to code blocks, and the roadmap item names none. The Microsoft Copilot requirements page says Microsoft Copilot Chat is available to users with an eligible Microsoft 365 subscription, and that for Microsoft Copilot users need a Microsoft Copilot licence and a qualifying prerequisite licence. Which of those routes covers code blocks is not yet published.

No cap or budget control is relevant to this feature in the sources read. Indirect costs are communications and service-desk time.

## Scope

- **Clouds:** the roadmap lists Worldwide (Standard Multi-Tenant) only; no US Government cloud is listed on the record.
- **Platforms:** Desktop and Mobile, per the record.
- **Status and dates:** In development, release phase General Availability, target September CY2026; no preview date is given.
- **Users:** the roadmap says the feature appears in Chat. Learn says users must have a work or school account in Microsoft Entra ID. Which users receive code blocks, and in what order, is not stated.

## Governance guidance

### Before rollout
- Watch the roadmap item and Message center for a rollout window, a default and a Learn page, none of which are published yet.
- Ask analyst and maker teams that use Chat for code, charts or diagrams whether they depend on the side-by-side code canvas the roadmap mentions.
- Decide which team answers user questions about where previews appear.

### At rollout
- Run a test prompt that asks for a chart, a diagram and a code sample in Chat on desktop and on mobile with a pilot account, and record what appears inline.
- Tell the service desk what the pilot showed, including whether the earlier code canvas still opens.

### After rollout
- Check Microsoft Learn for a page on code blocks and for any setting that governs them; the controls table records none at the time of writing.
- Update user guidance once Microsoft states the default and which licence covers the feature.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether code blocks specifically can be switched off in Chat</strong><br><small>Tenant</small><br><small class="controls__note">No setting is documented at the time of writing (November 2026). Blocking the Copilot app through Integrated Apps blocks Chat as a whole, not code blocks alone.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no setting for code blocks at the time of writing (November 2026), so the table has a single row that records the gap. Check it again when Microsoft publishes a page for the feature.

The nearest documented controls are broader. Microsoft's Manage Copilot Chat page says that blocking Copilot through Integrated Apps in the Microsoft 365 admin center "blocks Copilot in the Microsoft Copilot app, Teams, Outlook, and Copilot Chat on the web for all users", so it removes Chat rather than code blocks. The Pin Copilot Chat setting under Copilot > Settings > User access controls whether Chat is pinned in supported app navigation, not what a response shows.

## Open questions

- Do code blocks arrive on by default, or does an administrator or user have to enable them? Watch Message center and the roadmap item.
- Does a code block preview only display code, charts and diagrams, or can it run code, and if it runs code, where? Watch for a Learn page on the feature.
- Does the side-by-side code canvas remain available alongside inline code blocks?
- Which licence covers code blocks: the one Copilot Chat users already hold, or a Microsoft Copilot licence? Watch the Microsoft Copilot requirements page.
- Will Microsoft add an admin setting for code blocks, and where will it appear?

<!-- rationale
risk: Low. The roadmap describes inline preview of code, charts and diagrams in Chat and names no new data source or action; Microsoft has not stated the default, so this rates today's behaviour continuing.
cost: Low. Microsoft has published no licence or meter for code blocks, so the cost the sources show is communication and service-desk time; licensing for this feature is not yet published.
impact: Medium. Chat users on desktop and mobile who ask for code, charts or diagrams would see previews inline, where the roadmap says they previously used a side-by-side code canvas.
-->

<!-- verifier-findings (2026-11-20, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] summary; What's changing; Governance guidance; front matter: changes / absence: Microsoft Learn does not describe code blocks. | Found: Enabled: Users can view and interact with AI-generated code previews in Copilot Chat and Copilot Pages, including building lightweight apps. | Fix: Replace the broad absence with: 'Microsoft Learn documents code previews in Copilot Chat; details specific to the new inline layout are not yet documented.' Cite https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration wherever the briefing currently says Learn does not describe the feature. | Source: https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration
- [contradicted, blocker] controls[0].ui and controls[0].api; summary; Governance controls; front matter: changes / absence: No setting is documented for switching off code-block previews in Copilot Chat. | Found: Block code previews only: Disable Enable code previews for AI-generated content in Microsoft Copilot Chat and Copilot Pages; leave Create and view Copilot Pages and Copilot Notebooks enabled | Fix: Replace the existing row's UI absence with 'Microsoft 365 Apps admin center > Customization > Policy Management > policy configuration > Configure Settings > Enable code previews for AI-generated content in Microsoft Copilot Chat and Copilot Pages', citing https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration. Use scope 'user' and note: 'Enabled and Not configured allow code previews; Disabled prevents Copilot from running previews in Chat and Pages. This is a broader preview control, not a separate switch for the new inline layout.' Leave api null: the Graph admin-setting reference and targeted API/PowerShell search found no operation for this policy. Replace statements that no preview control exists with the policy's documented reach. | Source: https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration
- [unsupported, blocker] front matter: licensing.model / licensing: The licensing model for code blocks is mixed. | Found: Searched: '"Copilot" "code blocks" "license" "price"' and '"Copilot Chat" "code previews" "license"'; read microsoft-copilot-requirements and copilot-license-options. Neither establishes mixed licensing for this feature. | Fix: Set licensing.model to 'included', following the schema's rule for a new option inside a licensed product. Retain the two documented product-level requirements in licensing.notes, but replace its last sentence with: 'No additional licensing requirement specific to code blocks is published.' Use the same narrower wording in Cost and licensing and the cost rationale; do not describe the product's two access routes as mixed code-block entitlement.
- [contradicted, blocker] Risk assessment: Security & identity; Open questions / absence: Microsoft has not said whether code previews only display content or also run code. | Found: Disabled: Copilot doesn't run code previews in Copilot Chat or Copilot Pages. | Fix: Replace the display-versus-execution uncertainty with: 'Microsoft documents running and interacting with code previews in Copilot Chat. The sources checked do not specify the execution location for the new inline layout.' Cite https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration and narrow the corresponding open question to execution location. | Source: https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration
- [contradicted, blocker] Why it matters / record: No source says existing Chat behaviour changes. | Found: M365 Copilot now supports code blocks, which lets you preview code, charts, diagrams, and more directly inline while using Chat. Previously, users could preview code side-by-side in a code canvas. | Fix: Replace 'No source says existing Chat behaviour changes' with 'The roadmap describes a change in preview placement, but does not state whether the earlier code canvas remains available'. Do not infer either automatic replacement or user opt-in from that description.
-->
