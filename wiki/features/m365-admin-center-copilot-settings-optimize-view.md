---
title: "Microsoft 365 admin center: Copilot settings Optimize view"
slug: "m365-admin-center-copilot-settings-optimize-view"
roadmapId: 526793
topic: "governance"
products: ["Microsoft 365 admin center","Microsoft Copilot (Microsoft 365)"]
summary: "The Microsoft 365 admin center adds an Optimize view to Copilot settings, showing configuration status and recommended actions. Launched per the roadmap; Learn does not yet describe the view itself."
status: "launched"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "March CY2026"
previewDate: "February CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for the Optimize view. Microsoft's Copilot settings page says Copilot capabilities and the controls available to manage them vary by license and service."
audiences: ["m365-admin","service-owner"]
tags: ["m365-admin-center","m365-copilot","admin-controls","governance","frontier-program","usage-based-billing"]
sources:
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
  - title: "Optimize Microsoft Copilot configuration settings"
    url: "https://learn.microsoft.com/copilot/implement/optimize-copilot-configuration-settings"
    kind: "learn"
  - title: "copilotAdminSetting resource type"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/resources/copilotadminsetting"
    kind: "learn"
  - title: "Supported Copilot resources for Tenant Configuration Management (preview)"
    url: "https://learn.microsoft.com/graph/utcm-copilot-resources"
    kind: "learn"
  - title: "Microsoft 365 admin center: Copilot settings – Optimize view"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=526793"
    kind: "roadmap"
videos: []
related: ["frontier-program","copilot-credits"]
controls:
  - governs: "Whether the Optimize view is shown or can be switched off"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no setting for showing or hiding the view at the time of writing (November 2026)."
  - governs: "Which AI providers operating as Microsoft subprocessors Copilot can use"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > View all > AI providers operating as Microsoft subprocessors"
      docs: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    api: null
    note: "An area Learn's Optimize article lists; Learn does not say the Optimize view links to it. Needs an admin role such as AI Administrator."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-03-25T23:15:06"
changes:
  - date: "2026-11-24"
    note: "First briefing: the roadmap describes the Optimize view, but Microsoft Learn does not yet document it, so controls and licensing are marked as not yet published."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 43 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 43
  confirmed: 41
  unconfirmed: 0
  contradicted: 2
  attempts: 0
  hash: "f9457ec2c07314346db9e525e2f21147"
---

## What's changing

The roadmap item describes a new Copilot settings landing experience in the Microsoft 365 admin center, called the Optimize view. According to the roadmap description, it centralises visibility into key configuration status and helps admins optimise settings for Copilot using Microsoft-recommended policies, actions and guidance.

Microsoft Learn does not describe a view called Optimize at the time of writing (November 2026), so what the view shows, and whether it changes settings itself, rests on the roadmap description. Learn does document the settings page it belongs to: in the Microsoft 365 admin center, **Copilot** > **Settings** groups settings under **User access**, **Data access**, **Copilot actions** and **Other settings**. A separate Learn article, "Optimize Microsoft Copilot configuration settings", lists areas to review when deploying Copilot, including the Microsoft Frontier program, usage-based billing and AI providers operating as Microsoft subprocessors. Learn does not say that this article is the content of the view.

The roadmap record gives the status as Launched, with a preview date of February CY2026 and a target date of March CY2026. The release phases are General Availability and Targeted Release, the cloud is Worldwide (Standard Multi-Tenant) and the platform is Web. Microsoft has not stated what the view does on arrival.

## Why it matters

For a service owner, the Optimize view is a new place where Microsoft's own recommendations about Copilot configuration appear in the admin centre. Admins may be asked to justify why a tenant differs from those recommendations, so it is worth knowing what the view recommends before anyone acts on it.

Microsoft has not stated what happens on arrival, so base planning on no source saying existing behaviour changes. The recommendations that matter are the ones that touch data reach, preview access and spend, and each of those settings has its own owner and its own Learn page. Learn's Optimize article says its configurations are not intended as universal recommendations to enable every capability, which is the right posture for any recommendation the view makes.

## Risk assessment

**Data exposure**
- No new data access is documented for the Optimize view. The settings that Learn's Optimize article lists, such as web search and AI providers operating as Microsoft subprocessors, decide what Copilot can use, so following a recommendation there can widen data reach. Check each one against your own policy first.

**Security & identity**
- Learn says managing Copilot settings in the Microsoft 365 admin center takes an appropriate admin role, such as AI Administrator, and that Global Reader can view but not change settings. Learn names no roles specific to the Optimize view at the time of writing.

**Autonomy & actions**
- The roadmap describes policies, actions and guidance. Learn does not say whether the view applies a recommended setting in one step or links to the setting's own page, so confirm that before an admin acts on a recommendation.

**Change & support**
- Learn says the settings shown depend on an organisation's licenses, enabled features and rollout status, and that a setting's location or availability might differ from the documentation. Expect admins in the same tenant, or across tenants, to see different things during rollout.

## Cost and licensing

No licence or meter specific to the Optimize view is published at the time of writing (November 2026). The Learn page "Configure Microsoft Copilot settings in the Microsoft 365 admin center" says Copilot capabilities and the controls that are available to manage them vary by license and service, and does not name a licence for this view.

The indirect cost is admin time to review the view and act on what it recommends. Some of the areas in Learn's Optimize article are metered: the article says some Microsoft Copilot and agent experiences use usage-based billing and can consume Copilot Credits. Learn does not say the Optimize view itself consumes credits. A credit rate specific to the view is not published.

## Scope

The roadmap lists the cloud as Worldwide (Standard Multi-Tenant), the platform as Web, and the release phases as General Availability and Targeted Release. The view sits in the Microsoft 365 admin center, which is an admin surface, so its audience is administrators, not end users.

Learn says managing Copilot settings takes an appropriate admin role, such as AI Administrator, and that Global Reader can view but not change settings. Controls that open another service require that service's permissions. Learn names no prerequisites specific to the Optimize view.

## Governance guidance

### Before rollout
- Confirm who holds the AI Administrator and Global Reader roles, because those roles decide who can change and who can only view Copilot settings.
- Read Learn's "Optimize Microsoft Copilot configuration settings" article and note which of its areas your organisation has already decided.
- Record the current state of **AI providers operating as Microsoft subprocessors** so you can compare it with any recommendation the view makes.

### At rollout
- Open **Copilot** > **Settings** in the Microsoft 365 admin center and note whether the Optimize view appears for your tenant.
- Treat each recommendation as a proposal and check which setting it changes, and who it affects, before applying it.
- Ask the owner of each affected setting, such as Frontier access or billing, to approve a change before an admin makes it.

### After rollout
- Revisit the Copilot configuration on a schedule, because Learn says to revisit it as capabilities, licensing and policies change.
- Watch the Learn Copilot settings page and Message center for documentation of the Optimize view, its defaults and any licence requirement.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Optimize view is shown or can be switched off</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no setting for showing or hiding the view at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which AI providers operating as Microsoft subprocessors Copilot can use</strong><br><small>Tenant</small><br><small class="controls__note">An area Learn's Optimize article lists; Learn does not say the Optimize view links to it. Needs an admin role such as AI Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › AI providers operating as Microsoft subprocessors <a href="https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The Optimize view is described as a place to see status and recommendations, so the table lists the settings page it sits on and one setting Learn's Optimize article lists. Copilot Frontier access is a separate setting on the same page (**Copilot** > **Settings** > **View all** > **Copilot Frontier**); Microsoft documents a Frontier resource type for Tenant Configuration Management in Microsoft Graph beta, which is in preview.

Changing a setting from **Copilot** > **Settings** takes an appropriate admin role, such as AI Administrator. Global Reader can view but not change. Settings that link out to another service need the permissions of that service.

## Open questions

- What does the Optimize view show, and does it apply any recommended setting itself or only link to it? Watch the Learn page "Configure Microsoft Copilot settings in the Microsoft 365 admin center".
- Is the view shown to every eligible admin on arrival, and can an admin hide or turn it off? Microsoft has not stated the default.
- Which roles can open the view, and does any licence beyond the admin role apply? Watch the same Learn page.
- Is Learn's "Optimize Microsoft Copilot configuration settings" article the guidance the view's recommendations are based on? Learn does not say.

<!-- rationale
risk: Low. The roadmap describes visibility and guidance for admins, and no source says the view changes a setting on its own. The default state is not stated, so this rates today's behaviour continuing.
cost: Low. The only cost the sources show is admin time; no licence or meter specific to the Optimize view is published at the time of writing (November 2026).
impact: Low. It is an admin-facing landing experience in the Microsoft 365 admin center; users notice only if an admin acts on a recommendation and changes a Copilot setting.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] front matter: action / consistency: The action rating review fits a new Copilot settings landing experience. | Found: action: "review"; What's changing: "a new Copilot settings landing experience". The scale assigns prepare to a redesign or replacement of existing behaviour even when default state is unknown; review is for optional capabilities or controls. | Fix: Change action from review to prepare: this is a new landing experience, not an optional setting that changes nothing until selected.
- [contradicted, minor] Governance guidance: Before rollout, first bullet / consistency: Every control the governance checklist tells readers to check has a controls-table row. | Found: Checklist: "Confirm who holds the AI Administrator and Global Reader roles". The controls table contains only view visibility and AI provider access; it has no role-assignment row. | Fix: Remove the Before rollout bullet beginning 'Confirm who holds the AI Administrator and Global Reader roles'. Keep the supported role descriptions in Scope and Governance controls; do not add a row.
-->
