---
title: "Viva Glint: Copilot admin configuration assistant for how-to guidance"
slug: "microsoft-viva-viva-glint-copilot-admin-configuration-assistance"
roadmapId: 567320
topic: "modern-work"
products: ["Microsoft Viva"]
summary: "Viva Glint admins get a Copilot side pane that answers configuration questions with step-by-step guidance and links to settings. It cannot change anything in the tenant. Microsoft has not stated its default or a switch for it."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "The assistant is offered to users who already have access to the Viva Glint admin experience, and its page names no separate licence. A separate licence or meter for it is not yet published."
audiences: ["m365-admin","service-owner"]
tags: ["viva-glint","copilot","ai","admin-controls","viva-feature-access-management","gcc"]
sources:
  - title: "Microsoft 365 Roadmap 567320"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=567320"
    kind: "roadmap"
  - title: "Microsoft Viva Glint admin configuration assistant"
    url: "https://learn.microsoft.com/viva/glint/copilot/copilot-viva-glint-admin"
    kind: "learn"
  - title: "Manage Viva Glint Copilot access in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/viva/glint/copilot/mac-copilot-access"
    kind: "learn"
  - title: "Introduction to Microsoft Copilot in Viva Glint"
    url: "https://learn.microsoft.com/viva/glint/copilot/copilot-admin-intro"
    kind: "learn"
  - title: "Control access to features in Microsoft 365 using PowerShell"
    url: "https://learn.microsoft.com/viva/manage-access-policies"
    kind: "learn"
  - title: "Control access to features in Microsoft 365"
    url: "https://learn.microsoft.com/viva/feature-access-management"
    kind: "learn"
videos: []
related: ["viva-feature-access-management","microsoft-viva-viva-glint-copilot-assisted-commenting-in-glint-survey-taking"]
controls:
  - governs: "Access to Microsoft Copilot in Viva Glint (Learn does not say it covers the admin assistant)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Viva > Viva Glint > Manage settings for Microsoft Copilot in Viva Glint > Org-wide setting > Manage"
      docs: "https://learn.microsoft.com/viva/glint/copilot/mac-copilot-access"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaGlint -FeatureId <featureId> -Name <policyName> -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/viva/manage-access-policies"
    note: "Global Administrator, Viva Glint Tenant Administrator or AI Administrator. Documented for Copilot Highlights and comment summarisation; get the featureId from Get-VivaModuleFeature. Changes take up to 24 hours."
  - governs: "A switch for the Viva Glint admin configuration assistant on its own"
    scope: "tenant"
    ui: null
    api: null
    note: "Not yet documented at the time of writing (November 2026). Access follows existing Viva Glint admin experience access."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-08-28T21:59:29"
changes:
  - date: "2026-11-23"
    note: "First briefing for this item, written from the assistant's Learn page and the Copilot in Viva Glint access pages."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 50 statements not yet confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 56 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 56
  confirmed: 54
  unconfirmed: 1
  contradicted: 1
  attempts: 0
  hash: "a476fa4a07ea7f571b93a35f8ec76b62"
---

## What's changing

Viva Glint gets a Copilot-powered conversational assistant, called the Viva Glint admin configuration assistant, inside its admin experience. Administrators ask configuration and how-to questions in plain language and get step-by-step guidance. The roadmap item says responses include deep links to configuration pages, and Microsoft Learn adds that answers carry source attribution to the documentation they are based on.

The assistant opens in a collapsible side pane, similar to Copilot in Microsoft Edge and Microsoft Teams. It offers suggested prompts that adapt to the admin page the user is on, and a question can be up to 500 characters. Learn is explicit that it provides guidance only: it does not make changes to the tenant, programs, users, data or settings, and it cannot manage users or roles, modify or export survey data or comments, take proactive or autonomous actions, or report on the tenant's current configuration.

The roadmap item is listed as Rolling out, with a target date of September CY2026, at General Availability, for Worldwide (Standard Multi-Tenant) and GCC, on the web. The roadmap item says it is only available for Viva Glint users with Admin permissions; Learn names Viva Glint service admins and users with Admin permissions (such as survey designers) as its audience.

## Why it matters

This is a support-load feature rather than a data or spend change. Viva Glint admins, often HR or people-analytics staff rather than IT, can ask the assistant how to configure surveys, nudges, people data, roles or reporting instead of searching documentation or raising tickets. Expect fewer how-to questions to reach the service owner, and some questions about why an answer differed from what an admin saw on screen.

Microsoft has not stated what happens on arrival, so a service owner cannot assume it is switched on or off for their admins. Because it cannot change anything and Learn says it does not collect customer organisation or survey response data, the case for acting early is weak; the case for checking is that it is a Copilot feature in a product that handles employee feedback, and the controls over it are not clearly documented.

## Risk assessment

**Data exposure**

- Learn states that the capability does not collect, access or process customer organisation data or survey response data, and that it currently provides guidance based on product documentation and user-selected context within the Viva Glint experience. Prompts typed by admins are therefore the main input; remind admins not to paste survey comments or employee details into them.

**Security & identity**

- Learn says the assistant is available to users who already have access to the Viva Glint admin experience, and that it cannot manage users, roles or permissions. Access to it follows existing admin access; Viva Glint admin roles are the audience to review.

**Autonomy & actions**

- The assistant takes no actions: Learn says it cannot make changes to surveys, programs or settings or take proactive or autonomous actions. It also will not stop an admin making a change, so a wrong answer followed by an admin becomes a real change, for example launching a survey, updating confidentiality settings, changing user data or deleting content, which Learn names as hard to reverse.

**Change & support**

- Learn warns that AI-generated responses may not always be accurate and that each response includes a reminder to this effect. Support teams should expect admins to quote assistant answers, and should point them to the linked source before acting.

## Cost and licensing

The assistant's Learn page lists no licence requirement and no meter. It says the assistant is available to users who already have access to the Viva Glint admin experience, and that you must have that access to use it.

The Learn pages for Copilot in Viva Glint (Copilot Highlights and comment summarisation) state that a licence for Viva Glint, Microsoft Viva Suite or Microsoft Viva Workplace Analytics and Employee Feedback is required, and that a Microsoft Copilot licence is not required. Those pages do not mention the assistant, so treat them as the nearest licensing statement rather than as the assistant's own terms.

A licence, credit rate or charge specific to the assistant is not yet published. The indirect cost is admin time spent verifying answers against the linked sources and communicating the change.

## Scope

**Who:** Viva Glint service admins and users with Admin permissions (survey designers, for example), and anyone responsible for configuring surveys, nudges, people data, roles or reporting settings, provided they already have access to the Viva Glint admin experience.

**Where:** the Viva Glint admin experience on the web. The roadmap record lists Worldwide (Standard Multi-Tenant) and GCC, with General Availability as the release phase.

**Rollout:** the roadmap status is Rolling out, with a September CY2026 target. The assistant's Learn page does not state a rollout mechanism or what an admin sees before it arrives.

**Prerequisite:** access to the Viva Glint admin experience, per Learn.

## Governance guidance

### Before rollout

- Identify who holds Viva Glint service admin or Admin permissions (survey designers and similar roles), because they are the stated audience for the assistant.
- Check how Copilot in Viva Glint is set in the Microsoft 365 admin center (see the first controls row), and record the org-wide setting and any custom policies, noting that Learn does not say this setting covers the assistant.
- Tell admins in advance that the assistant gives guidance only and cannot change settings, so they still make and own every change.

### At rollout

- Ask admins to follow the source links in each answer and confirm the steps before launching a survey, changing confidentiality settings, changing user data or deleting content.
- Instruct admins not to type survey comments or employee details into prompts.
- Allow up to 24 hours for any Copilot in Viva Glint access policy change to take effect, and avoid changing the same policy again within that time, as the access page advises.

### After rollout

- Collect admin feedback, including the thumbs up and thumbs down ratings the assistant provides, and route wrong answers to Microsoft through those controls.
- Re-read the assistant's Learn page and Message center for a stated default, a dedicated switch or a licence statement.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Access to Microsoft Copilot in Viva Glint (Learn does not say it covers the admin assistant)</strong><br><small>Tenant</small><br><small class="controls__note">Global Administrator, Viva Glint Tenant Administrator or AI Administrator. Documented for Copilot Highlights and comment summarisation; get the featureId from Get-VivaModuleFeature. Changes take up to 24 hours.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Viva › Viva Glint › Manage settings for Microsoft Copilot in Viva Glint › Org-wide setting › Manage <a href="https://learn.microsoft.com/viva/glint/copilot/mac-copilot-access" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaGlint -FeatureId &lt;featureId&gt; -Name &lt;policyName&gt; -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/manage-access-policies" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>A switch for the Viva Glint admin configuration assistant on its own</strong><br><small>Tenant</small><br><small class="controls__note">Not yet documented at the time of writing (November 2026). Access follows existing Viva Glint admin experience access.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The first row is the documented access control for Copilot in Viva Glint. Learn documents it for Copilot Highlights and comment summarisation, and its page does not mention the admin configuration assistant, so confirm what it governs before relying on it for the assistant. It can be managed by Microsoft 365 Global Administrators, Viva Glint Tenant Administrators and AI Administrators, and Learn says custom policies override the organization-wide setting.

The second row records that no separate switch for the assistant is documented at the time of writing (November 2026). Until one is, the practical limit on who can use it is access to the Viva Glint admin experience, which is governed by Viva Glint's own admin roles.

## Open questions

- Does the Microsoft Copilot in Viva Glint setting in the Microsoft 365 admin center (Viva Feature Access Management) also turn the admin configuration assistant on or off, or is there a separate setting? Watch the assistant's Learn page and the Viva Feature Access Management feature table.
- Is the assistant on by default when it reaches a tenant? Learn says Copilot in Viva Glint is enabled by default, but the assistant's page does not state a default.
- Will a licence or meter specific to the assistant be published? Watch the Copilot in Viva Glint access page and Message center.
- Which Viva Glint roles see the assistant? The roadmap says Admin permissions and Learn gives service admins and survey designers as examples, but no full role list is given.

<!-- rationale
risk: Low. Microsoft Learn says the assistant gives guidance only, changes no settings and does not collect, access or process customer organisation or survey response data; the remaining exposure is an admin acting on an inaccurate answer.
cost: Low. The only cost the sources show is admin time. The assistant's Learn page names no licence or meter, and a separate charge for it is not yet published.
impact: Low. Learn describes the assistant as intended for administrators who run Viva Glint programs, and the roadmap says it is only available to users with Admin permissions.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters / behaviour: Viva Glint admins are often HR or people-analytics staff rather than IT. | Found: Searched: Viva Glint service administrators typically HR people analytics staff IT key roles. Read role-definitions, set-up-user-roles and viva-glint-learning-paths-and-modules excerpts; none establishes which team usually holds admin roles. | Fix: Remove 'often HR or people-analytics staff rather than IT' from the first paragraph of Why it matters.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model and licensing.notes; Cost and licensing / licensing: The assistant is an included option within the existing Viva Glint entitlement. | Found: The purchase of a Viva Suite or Viva Glint subscription plan is required for using Microsoft Viva Glint. | Fix: Keep licensing.model as included. Add to licensing.notes and Cost and licensing: 'Using Viva Glint requires a Viva Suite or Viva Glint subscription plan; no licence specific to the admin configuration assistant is published.' Cite https://learn.microsoft.com/viva/glint/setup/glint-order-teams in sources. | Source: https://learn.microsoft.com/viva/glint/setup/glint-order-teams
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The org-wide control is reached in Microsoft 365 admin center through Settings > Viva > Viva Glint > Manage settings for Microsoft Copilot in Viva Glint > Org-wide setting > Manage. | Found: Select Settings > Viva. ... Select Viva Glint and choose Manage settings for Microsoft Copilot in Viva Glint. ... select Manage in the Org-wide setting section. ... Choose On. | Fix: Extend controls[0].ui.path and the rendered table path to 'Settings > Viva > Viva Glint > Manage settings for Microsoft Copilot in Viva Glint > Org-wide setting > Manage > On / Off', as documented at https://learn.microsoft.com/viva/glint/copilot/mac-copilot-access. | Source: https://learn.microsoft.com/viva/glint/copilot/mac-copilot-access
- [supported, minor] controls[0].note; Governance controls table and prose / role: Microsoft 365 Global Administrators, Viva Glint Tenant Administrators and AI Administrators can manage the Copilot access setting. | Found: This feature can be managed by: Microsoft 365 Global Administrators; Viva Glint Tenant Administrators; AI Administrators | Fix: Retain the feature-specific roles. Add: 'The general VFAM feature table lists only Global admin for Glint, while the feature-specific access page also lists Viva Glint Tenant Administrators and AI Administrators.' The differing cited page is https://learn.microsoft.com/viva/feature-access-management. | Source: https://learn.microsoft.com/viva/glint/copilot/mac-copilot-access
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: The checklist asks the reader to take stock of service admin and Admin permissions, but the controls table has no row for those existing role controls. | Found: Identify who holds Viva Glint service admin or Admin permissions ... Table rows: Access to Microsoft Copilot in Viva Glint; A switch for the Viva Glint admin configuration assistant on its own. | Fix: The first Before rollout step inventories Viva Glint admin-role access without a corresponding controls row. Remove that checklist bullet; do not add a control row.
-->
