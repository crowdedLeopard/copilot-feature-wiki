---
title: "Microsoft Copilot (Microsoft 365): code blocks preview code, charts and diagrams inline in Chat"
slug: "m365-copilot-code-blocks-in-m365-copilot"
roadmapId: 569429
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans code blocks in Microsoft 365 Copilot Chat, previewing code, charts and diagrams inline. Learn documents code previews in Copilot Chat and a policy for them; details of the new inline layout are not yet documented."
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
  model: "included"
  notes: "Microsoft Learn says Microsoft Copilot Chat is available to users with an eligible Microsoft 365 subscription, and that Microsoft Copilot needs a Microsoft Copilot licence and a qualifying prerequisite licence. No additional licensing requirement specific to code blocks is published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["m365-copilot","copilot-chat","user-experience","mobile"]
sources:
  - title: "Microsoft 365 Roadmap 569429"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569429"
    kind: "roadmap"
  - title: "Manage Copilot Pages and Copilot Notebooks in your organization"
    url: "https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration"
    kind: "learn"
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
  - governs: "Whether AI-generated code previews run in Copilot Chat and Copilot Pages"
    scope: "user"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > policy configuration > Configure Settings > Enable code previews for AI-generated content in Microsoft Copilot Chat and Copilot Pages"
      docs: "https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration"
    api: null
    note: "Enabled and Not configured allow code previews; Disabled prevents Copilot from running previews in Chat and Pages. This is a broader preview control, not a separate switch for the new inline layout."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-08-19T22:58:06"
changes:
  - date: "2026-11-20"
    note: "First briefing: roadmap-only feature with no Learn page yet; no code blocks setting is documented and the licence is not yet published."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 43 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected after the independent check: Learn documents code previews in Copilot Chat and a Cloud Policy setting for them; licensing model set to included; execution and arrival wording narrowed."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 47 statements not yet confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 46 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 46
  confirmed: 45
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "8e746cd0d75dc294ae97219d0f1b4180"
---

## What's changing

The roadmap item states that Microsoft 365 Copilot now supports code blocks, which let users preview code, charts, diagrams and more directly inline while using Chat. The record adds that users previously previewed code side by side in a code canvas. It lists Desktop and Mobile as platforms and Worldwide (Standard Multi-Tenant) as the cloud.

Microsoft Learn documents code previews in Copilot Chat: its [Cloud Policy setting](https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration) says that when it is Enabled, users can view and interact with AI-generated code previews in Copilot Chat and Copilot Pages, including building lightweight apps. Details specific to the new inline layout are not yet documented, so what follows about that layout is the roadmap's description. Learn does not state which output types render in it, whether the code canvas remains available, or what happens on arrival.

The roadmap shows the status In development, the release phase General Availability and a target of September CY2026. That target month has passed and the record still shows In development, so read the date as a target. Learn now names the product Microsoft Copilot (formerly Microsoft 365 Copilot) and Microsoft Copilot Chat (formerly Microsoft 365 Copilot Chat); this briefing keeps the roadmap's wording where it reports the record.

## Why it matters

Microsoft has not stated whether code blocks arrive switched on, need an administrator to enable them or are chosen by each user. The roadmap describes a change in preview placement, but does not state whether the earlier code canvas remains available, so this is a feature to review and plan communications for, not one with a deadline.

The visible effect is on how Chat answers look to users who ask for code, charts or diagrams, on desktop and on mobile. Expect questions from analysts and makers about where previews now appear. Nothing in the roadmap text says code blocks read new data or act in other systems; confirm that when Microsoft publishes a Learn page.

## Risk assessment

**Data exposure**
- The roadmap describes previews of code, charts and diagrams inside the Chat response. It names no new data source or storage location, and Microsoft Learn describes none at the time of writing.

**Security & identity**
- Microsoft documents running and interacting with code previews in Copilot Chat: when the Cloud Policy setting is Disabled, Copilot doesn't run code previews in Copilot Chat or Copilot Pages ([Learn](https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration)). The sources checked do not specify the execution location for the new inline layout; confirm it before issuing user guidance.

**Autonomy & actions**
- The roadmap text describes previewing content in the conversation, not taking actions in other systems. No change to what Chat can do on its own is documented.

**Change & support**
- Users on desktop and mobile may see previews inline where the roadmap says they previously used a side-by-side code canvas. Microsoft has not said whether the canvas remains, so tell the service desk that the layout of code answers can differ between users while the feature rolls out.
- Blocking the Microsoft Copilot app through Integrated Apps blocks Chat as a whole, so it is not a way to switch off code blocks alone (see the controls notes).

## Cost and licensing

The Microsoft Copilot requirements page says Microsoft Copilot Chat is available to users with an eligible Microsoft 365 subscription, and that for Microsoft Copilot users need a Microsoft Copilot licence and a qualifying prerequisite licence. No additional licensing requirement specific to code blocks is published, and the roadmap item names no meter or price.

No cap or budget control is relevant to this feature in the sources read. Indirect costs are communications and service-desk time.

## Scope

- **Clouds:** the roadmap lists Worldwide (Standard Multi-Tenant) only; no US Government cloud is listed on the record.
- **Platforms:** Desktop and Mobile, per the record.
- **Status and dates:** In development, release phase General Availability, target September CY2026; no preview date is given.
- **Users:** the roadmap says the feature appears in Chat. Learn says users must have a work or school account in Microsoft Entra ID. Which users receive code blocks, and in what order, is not stated.

## Governance guidance

### Before rollout
- Watch the roadmap item and Message center for a rollout window, a default and Learn details of the new inline layout, none of which are published yet.
- Ask analyst and maker teams that use Chat for code, charts or diagrams whether they depend on the side-by-side code canvas the roadmap mentions.
- Decide which team answers user questions about where previews appear.

### At rollout
- Run a test prompt that asks for a chart, a diagram and a code sample in Chat on desktop and on mobile with a pilot account, and record what appears inline.
- Tell the service desk what the pilot showed, including whether the earlier code canvas still opens.

### After rollout
- Review the Enable code previews policy in the controls table, and check Microsoft Learn for any page on the inline layout or a setting specific to it.
- Update user guidance once Microsoft states the default and any licence requirement specific to code blocks.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether AI-generated code previews run in Copilot Chat and Copilot Pages</strong><br><small>User</small><br><small class="controls__note">Enabled and Not configured allow code previews; Disabled prevents Copilot from running previews in Chat and Pages. This is a broader preview control, not a separate switch for the new inline layout.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › policy configuration › Configure Settings › Enable code previews for AI-generated content in Microsoft Copilot Chat and Copilot Pages <a href="https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The table has a single row: the Cloud Policy setting that Microsoft Learn documents for code previews in Copilot Chat and Copilot Pages. It is a broader preview control, not a separate switch for the new inline layout. Microsoft Learn documents no API for this policy at the time of writing (November 2026), and Cloud Policy lets an administrator scope it to all users or to a group.

The nearest other documented control is broader still. Microsoft's Manage Copilot Chat page says that blocking Copilot through Integrated Apps in the Microsoft 365 admin center "blocks Copilot in the Microsoft Copilot app, Teams, Outlook, and Copilot Chat on the web for all users", so it removes Chat rather than code blocks. The Pin Copilot Chat setting under Copilot > Settings > User access controls whether Chat is pinned in supported app navigation, not what a response shows.

## Open questions

- Do code blocks arrive on by default, or does an administrator or user have to enable them? Watch Message center and the roadmap item.
- Where does a code block preview run in the new inline layout? Watch for a Learn page on the feature.
- Does the side-by-side code canvas remain available alongside inline code blocks?
- Which licence covers code blocks: the one Copilot Chat users already hold, or a Microsoft Copilot licence? Watch the Microsoft Copilot requirements page.
- Will Microsoft add a setting specific to code blocks beyond the Enable code previews policy, and where will it appear?

<!-- rationale
risk: Low. The roadmap describes inline preview of code, charts and diagrams in Chat and names no new data source or action; Microsoft has not stated the default, so this rates today's behaviour continuing.
cost: Low. The only cost the sources show is communication and service-desk time; no additional licensing requirement specific to code blocks is published.
impact: Medium. Chat users on desktop and mobile who ask for code, charts or diagrams would see previews inline, where the roadmap says they previously used a side-by-side code canvas.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The code-preview policy is at Microsoft 365 Apps admin center > Customization > Policy Management > policy configuration > Configure Settings > Enable code previews for AI-generated content in Microsoft Copilot Chat and Copilot Pages. | Found: Select Customization from the left pane. Select Policy Management. Create a new policy configuration or edit an existing one. From the Choose the scope dropdown list, choose either All users or select the group for which you want to apply the policy. | Fix: In controls[0].ui.path and the rendered table, use 'Customization > Policy Management > policy configuration > Choose the scope > all users or group > Configure Settings > Enable code previews for AI-generated content in Microsoft Copilot Chat and Copilot Pages', as documented at https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration. | Source: https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration
- [contradicted, minor] front matter: action; Why it matters / consistency: Review is the appropriate action classification for this change in an existing preview layout. | Found: action: "review"; "The roadmap describes a change in preview placement"; "Users on desktop and mobile may see previews inline where the roadmap says they previously used a side-by-side code canvas." | Fix: Set action to 'prepare'. Replace 'this is a feature to review and plan communications for, not one with a deadline' with 'this is a layout change to prepare communications for, with no administrator deadline stated.' The assessment scale assigns prepare to redesigns of existing experiences even when the arrival default is unknown.
-->
