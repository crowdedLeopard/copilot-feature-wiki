---
title: "Microsoft Copilot: ask about highlighted text in a response"
slug: "m365-copilot-ask-copilot-about-highlighted-response-content"
roadmapId: 522616
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft is rolling out a web feature that lets users highlight part of a Copilot response and ask about that selection alone. Microsoft has not stated its default or licensing; no setting for highlighted-response questions alone is documented."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's requirements page says Microsoft Copilot needs a Microsoft Copilot licence plus a qualifying prerequisite licence, and Copilot Chat is available with an eligible Microsoft 365 subscription. Nothing specific to this feature is published."
audiences: ["m365-admin","end-user","change-adoption"]
tags: ["copilot","copilot-chat","m365-copilot","m365-admin-center","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap 522616"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=522616"
    kind: "roadmap"
  - title: "Microsoft Copilot requirements"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements"
    kind: "learn"
  - title: "Manage Copilot Chat"
    url: "https://learn.microsoft.com/copilot/manage/manage-copilot-chat"
    kind: "learn"
  - title: "Apps for Microsoft 365 that work across application hosts"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    kind: "learn"
  - title: "Enterprise data protection in Microsoft Copilot and Microsoft Copilot Chat"
    url: "https://learn.microsoft.com/copilot/plan/enterprise-data-protection"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
videos: []
related: ["m365-copilot-session-and-response-sharing-in-m365-copilot","m365-copilot-code-blocks-in-m365-copilot","microsoft-edge-ask-copilot-about-an-image","app-management"]
controls:
  - governs: "Whether the Copilot app, and so Copilot on the web, is available to users"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Integrated Apps > Available Apps > app > Block app"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    api: null
    note: "Whole-app block, not specific to this feature. Documented for a Global Administrator. Applies to both Microsoft Copilot and Copilot Chat apps."
  - governs: "Switch for highlighted-response questions alone"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no setting for this feature at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-09-22T22:57:16"
changes:
  - date: "2026-11-23"
    note: "First briefing for roadmap item 522616: rolling out on the web, with the default, licensing and any feature-specific admin control not yet stated."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 62 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected after the independent check: the whole-app block is no longer described as the only documented control, the enterprise data protection scope is stated, and the no-data-source claim is attributed to the roadmap."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 66 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-23"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 66
  confirmed: 66
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "a4f077728fc2a622718eeab688aed135"
---

## What's changing

The roadmap item describes a way to highlight a sentence, paragraph or table in a Copilot response and ask Copilot to work on that selection alone. The roadmap lists focused explanations, concise summaries, quick translations and next steps as examples. The selection is previewed in the prompt, so the user can edit it before sending.

Microsoft Learn does not describe this feature at the time of writing (November 2026): the Microsoft 365 Copilot release notes carry no entry for roadmap ID 522616. What this page says about behaviour is therefore the roadmap's description. Microsoft has not stated whether the feature is on by default, which licences or Copilot experiences (Microsoft Copilot or Copilot Chat) get it, or whether a setting for highlighted-response questions alone is available.

The roadmap record gives the status as Rolling out, the target date as September CY2026, the release phase as General Availability and the platform as Web. It lists Worldwide (Standard Multi-Tenant) as the cloud. The record was last modified on 22 September 2026. The release notes page describes Copilot features as introduced through a safe deployment model, rolling out to a subset of users in a tenant before expanding, so users in one tenant may not see the option at the same time.

## Why it matters

The roadmap describes a change to how users write prompts and names no new data source, so the practical effects are in support and training: users may ask where the option is, and staged availability can make one team see it before another. On the evidence available it does not need a decision from an administrator today.

If nobody acts, Microsoft has not stated what happens on arrival, and no source says existing behaviour changes. The roadmap's claim that Copilot works only on the selection is Microsoft's description of intent. Check it in a pilot before telling users that a highlighted question limits what Copilot draws on.

## Risk assessment

**Data exposure**
- The roadmap says the highlighted selection is previewed in the prompt and can be edited before sending, and that Copilot works on that selection. The roadmap describes no new data source for this feature.
- Microsoft's enterprise data protection page says prompts and responses in Microsoft Copilot and Copilot Chat are protected by the Data Protection Addendum and Product Terms. That page covers customer data, including prompts and responses, for users of Microsoft Copilot and Copilot Chat, and the page says the specific controls vary with the subscription plan.

**Security & identity**
- No change described: the roadmap names no new permission, connector or identity for the feature. The enterprise data protection page says Copilot respects the organisation's identity model and permissions and inherits sensitivity labels, applies retention policies and supports audit of interactions.

**Autonomy & actions**
- The roadmap describes explanations, summaries, translations and next steps for the selection. It describes no action taken in another app and no autonomous behaviour.

**Change & support**
- Expect questions from users about the new option and about why colleagues see it first, because Microsoft describes Copilot features as rolling out to a subset of users within a tenant before expanding.
- The controls table documents the whole-app block in Integrated Apps. It does not separate this feature from the rest of Copilot.

## Cost and licensing

Microsoft has not published a licence requirement, price or meter for this feature. The product's requirements page states the general rule: Microsoft Copilot needs a Microsoft Copilot licence and a qualifying prerequisite licence, and Microsoft Copilot Chat is available to users with an eligible Microsoft 365 subscription, with no Copilot licence required for eligible users ([Microsoft Copilot requirements](https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements)).

A licence or credit rate specific to this feature is not yet published, and the roadmap record states none. The indirect cost known today is admin time to review availability and user-communication time. Which of the two licensing tiers gets the feature has not been stated.

## Scope

The roadmap record lists the platform as Web and the cloud as Worldwide (Standard Multi-Tenant). It lists no other cloud; that is a record fact, not a statement that the feature is unavailable elsewhere.

Users in scope are those using Copilot on the web. The requirements page says both Microsoft Copilot and Microsoft Copilot Chat need a Microsoft Entra ID account, but which of the two experiences gets this feature has not been stated. Rollout is described on the roadmap as Rolling out with a September CY2026 target. Microsoft has not published a prerequisite or an admin role specific to this feature. The Integrated Apps block in the controls table is documented for a Global Administrator.

## Governance guidance

### Before rollout
- Check whether the Copilot app is already blocked in Integrated Apps (Microsoft 365 admin center > Settings > Integrated Apps), since a blocked app removes Copilot in the Microsoft Copilot app, Teams, Outlook and Copilot Chat on the web.
- Decide that the existing Copilot availability decision is enough, because no setting for this feature alone is documented.
- Brief the service desk that users may see a highlight-and-ask option in the Copilot response view on the web, and that availability can differ between users during rollout.

### At rollout
- Watch Message center and the roadmap item for a post that states the default, licensing or an admin control for this feature.
- Test with a pilot user on Copilot on the web: highlight a passage, confirm the selection is previewed in the prompt and can be edited before sending, as the roadmap describes.

### After rollout
- Ask pilot users what the preview showed and what Copilot did with it, and use the answers to update your user guidance.
- Re-read the Microsoft 365 Copilot release notes for an entry on this feature and revisit the licensing and control rows if Microsoft publishes either.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Copilot app, and so Copilot on the web, is available to users</strong><br><small>Tenant</small><br><small class="controls__note">Whole-app block, not specific to this feature. Documented for a Global Administrator. Applies to both Microsoft Copilot and Copilot Chat apps.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Integrated Apps › Available Apps › app › Block app <a href="https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Switch for highlighted-response questions alone</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no setting for this feature at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The whole-app block documented here is blunt. Microsoft's Manage Copilot Chat page says blocking Copilot through Integrated Apps is a tenant-wide control that you can scope to specific users or groups, including licensed users, and that it blocks Copilot in the Microsoft Copilot app, Teams, Outlook, and Copilot Chat on the web. The Integrated Apps page says that when you block an app it is blocked for all users in your organisation. Those two pages differ on scoping, so confirm what your tenant's pane offers. The Integrated Apps page also says the app is blocked only in the Microsoft Copilot application and Outlook, while Teams continues to honor the current setting for Teams apps made in the Teams admin center; the two pages differ on Teams reach as well as scoping.

The Integrated Apps page says its controls are available to Global Administrators and that settings for the Copilot app apply to both Microsoft Copilot and Copilot Chat. That page does not mention this feature. The second row records that Microsoft Learn documents no switch for highlighted-response questions at the time of writing (November 2026).

## Open questions

- Is the highlight-and-ask option on by default for tenants that do not change any setting, and does any admin control govern it? Watch Message center and the Microsoft 365 Copilot release notes.
- Does the option come with the Microsoft Copilot licence, with Copilot Chat for eligible Microsoft 365 subscriptions, or both? Watch the Microsoft Copilot requirements page.
- Does the roadmap's statement that Copilot works only on the selection mean the earlier conversation is not used as context for that question? Watch for a Learn page describing the feature.
- Does the audit log record the highlighted selection as part of the prompt, and do sensitivity labels and DLP for Copilot apply to it in the way the enterprise data protection page describes for prompts generally?

<!-- rationale
risk: Low. The roadmap describes a selection inside an existing Copilot response, previewed and editable before it is sent, and names no new data source, connector or autonomous action.
cost: Low. The only cost the sources show is admin and communication time; Microsoft has not published a separate licence, price or meter for this feature.
impact: Medium. Users of Copilot on the web would see a new way to act on a response; Microsoft has not said which licences or Copilot experiences get it, or whether it arrives switched on.
-->

<!-- verifier-findings (2026-11-23, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] summary; What's changing; Cost and licensing; licensing.notes; rationale: cost / absence: Microsoft has not published feature-specific licensing, although general product requirements are documented. | Found: Searched: '"highlighted response" Copilot licensing' and 'Copilot highlighted response selection ask default admin disable setting license prerequisite price meter'; read requirements and licensing search excerpts. No feature-specific entitlement is stated. | Fix: In the summary replace 'Microsoft has not stated its default or licensing' with 'Microsoft has not stated its default or feature-specific licensing'. General product licensing is documented and is already given in licensing.notes and Cost and licensing.
- [supported, minor] Governance guidance: Before rollout, first bullet / admin-path: Microsoft 365 admin center > Settings > Integrated Apps reaches the page where the Copilot app's blocked status can be checked. | Found: Select Settings, then select Integrated Apps. Select the Available Apps or Blocked Apps list. Here you can view the status of all apps | Fix: Replace the abbreviated checklist path with 'Microsoft 365 admin center > Settings > Integrated Apps > Blocked Apps' to check whether Copilot is blocked, as documented at https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365#how-to-see-the-available-and-blocked-apps-in-your-organization. | Source: https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365
-->
