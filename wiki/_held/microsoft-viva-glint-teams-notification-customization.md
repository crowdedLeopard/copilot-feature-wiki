---
title: "Viva Glint: customise the Teams survey notifications"
slug: "microsoft-viva-glint-teams-notification-customization"
roadmapId: 577175
topic: "modern-work"
products: ["Microsoft Viva"]
summary: "Viva Glint admins are due to edit the title, message and button label of Teams survey notifications in each language, with a live preview. Roadmap target is January CY2027; Learn does not yet describe it and no default is stated."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "per-user"
  notes: "Learn's Viva Glint licensing page says a Viva Suite or Viva Glint subscription plan is required, with no individual licence assignment. Users need Teams licences to receive Viva Glint notifications in Teams. No licence specific to this feature is published."
audiences: ["m365-admin","change-adoption","service-owner"]
tags: ["viva-glint","teams","survey-notifications"]
sources:
  - title: "Microsoft 365 Roadmap 577175"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577175"
    kind: "roadmap"
  - title: "Use Microsoft Teams for Viva Glint notifications"
    url: "https://learn.microsoft.com/viva/glint/setup/glint-teams"
    kind: "learn"
  - title: "Preview Microsoft Teams Communications in Viva Glint"
    url: "https://learn.microsoft.com/viva/glint/setup/glint-teams-previews"
    kind: "learn"
  - title: "Viva Glint survey Communications setup"
    url: "https://learn.microsoft.com/viva/glint/setup/program-summary-communications"
    kind: "learn"
  - title: "Customize Viva Glint survey email content"
    url: "https://learn.microsoft.com/viva/glint/setup/email-content-customization"
    kind: "learn"
  - title: "Viva Glint licensing"
    url: "https://learn.microsoft.com/viva/glint/setup/glint-order-teams"
    kind: "learn"
  - title: "Use setup policies to manage, install and pin agents and apps for users"
    url: "https://learn.microsoft.com/microsoftteams/teams-app-setup-policies"
    kind: "learn"
videos: []
related: ["microsoft-teams-ability-for-it-admins-to-customize-the-user-notification-messages-for-reco","microsoft-viva-import-hris-data-in-viva-glint-from-microsoft-admin-center"]
controls:
  - governs: "Whether Microsoft Teams is a notification option for the organisation"
    scope: "tenant"
    ui:
      surface: "Viva Glint"
      path: "Configuration > Service Configuration > General Settings > Communications > Microsoft Teams"
      docs: "https://learn.microsoft.com/viva/glint/setup/glint-teams"
    api: null
    note: "Learn describes this as making Teams a notification option overall; each survey program has its own Teams channel setting (next row). It does not govern the new editing."
  - governs: "Whether a survey program sends invites and reminders in Teams"
    scope: "other"
    ui:
      surface: "Viva Glint"
      path: "Configuration > Surveys > Survey Programs > survey > Communications > Channels > Microsoft Teams"
      docs: "https://learn.microsoft.com/viva/glint/setup/glint-teams"
    api: null
    note: "Enable before the survey launches; enabling it after a survey is live sends no Teams notifications. Not available for Always-On surveys."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-10-21T23:02:10"
changes:
  - date: "2026-11-20"
    note: "First briefing: the roadmap plans editable Teams survey notifications for Viva Glint, but Learn still says edits are not supported."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 51 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-20"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 51
  confirmed: 49
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "df5993c7b1b1d02002eec8dbc3fdda22"
---

## What's changing

The roadmap item says Viva Glint admins will be able to customise the Microsoft Teams notifications sent for surveys. Admins would edit the title, message and button label in each survey language and see their changes in a live preview. The roadmap's stated aim is to keep Teams and email messages consistent and in your organisation's voice, so that more employees see the survey and take part.

Microsoft Learn does not describe this feature yet, so what follows about how editing will behave is the roadmap's description. Two Learn pages say the opposite of the roadmap about today: [Use Microsoft Teams for Viva Glint notifications](https://learn.microsoft.com/viva/glint/setup/glint-teams) lists edits to Teams notification content as not currently supported, and [Preview Microsoft Teams Communications in Viva Glint](https://learn.microsoft.com/viva/glint/setup/glint-teams-previews) says the same while documenting only a Teams preview tab. Email content for invites, reminders and results notifications can already be edited, in the Communications section of a survey program's Program Summary ([Customize Viva Glint survey email content](https://learn.microsoft.com/viva/glint/setup/email-content-customization)).

Teams notifications are only sent where admins have enabled Teams in Viva Glint General Settings and in the survey program. Learn says Teams notifications are sent in each user's configured Viva Glint survey language, and in English (en-US) where that language is not supported for Teams notifications. How edited text would interact with that fallback is not described.

The roadmap record lists the item as In development, with a target date of January CY2027, for Worldwide (Standard Multi-Tenant), on Web, at General Availability. The target is Microsoft's plan, not a commitment.

## Why it matters

For a service owner, the Teams message is the front door to the survey. Today Learn describes Teams notifications as fixed content, so an organisation that has sent its own wording by email has had no matching Teams text. If this ships as the roadmap describes, the wording becomes something your communications team owns, in every survey language you use, and a mistake in it reaches every recipient of that survey at once.

Microsoft has not stated what happens on arrival, and no source says existing Teams notifications will change on their own. Plan on the assumption that editing is something an admin chooses to do, and confirm that against the Learn page once it is published.

## Risk assessment

**Data exposure**

- No new data access is described. The notifications already go to survey recipients where admins enable Teams, and the roadmap describes editing their text only. Learn says Viva Glint emails do not support hyperlinks or HTML in customised text; whether the same rule applies to Teams text is not stated.

**Security & identity**

- No change is described. Teams delivery depends on the Viva Glint app being installed for users through a Teams app setup policy, which a Microsoft 365 admin sets in the Teams admin center. Wording that looks like a legitimate survey invitation is something recipients will act on, so route any custom wording through your internal communications review.

**Autonomy & actions**

- No change: the roadmap describes manual edits by admins, not automated actions.

**Change & support**

- Wording can differ by language. Teams text follows each user's Viva Glint survey language, so a user whose language is not supported for Teams notifications gets English (en-US). Expect support questions if translations are edited for some languages and not others.
- Cycle-level notification settings take precedence over program-level settings when a notification is enabled or queued at the cycle level, per the communications setup page. Check both before a cycle goes live.
- Enabling Teams after a survey is live sends no Teams notifications, so late changes to the channel will not reach a live survey.

## Cost and licensing

The [Viva Glint licensing page](https://learn.microsoft.com/viva/glint/setup/glint-order-teams) says a Viva Suite or Viva Glint subscription plan is required, and that the number of active licences should be at least the number of active users. It says individual user licence assignment is not required. The [Teams notifications page](https://learn.microsoft.com/viva/glint/setup/glint-teams) adds that users need individual Microsoft Teams licences to receive Viva Glint notifications in Teams.

Microsoft has published no licence, meter or price specific to editing Teams notifications at the time of writing (November 2026). The costs you can plan for are indirect: admin time to write the wording, and translation effort for each survey language you use.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant) and the Web platform, and does not list GCC. Separately, Learn says Teams notifications for Viva Glint are currently not supported in GCC environments.

For surveys, Learn says Always-On surveys have no Communications section and send no notifications, so Teams messages are not available for that survey type. Teams must be enabled in General Settings and per survey program, and before the survey launches. Learn lists Teams notifications as not supporting 360 feedback notifications or notifications across multiple tenants in a multitenant organisation.

Which Viva Glint role edits notification content is not stated for this feature. Learn's [Viva Glint licensing page](https://learn.microsoft.com/viva/glint/setup/glint-order-teams) and the Teams notifications page name no role for it.

## Governance guidance

### Before rollout

- Check whether Teams is switched on in Viva Glint General Settings and for which survey programs, using the first two rows of the controls table.
- Ask a Microsoft 365 admin to confirm the Viva Glint app is installed for your survey audience through a Teams app setup policy, and that the audience has Teams licences.
- Review each user's survey language in Viva Glint, since Teams text follows it and unsupported languages fall back to English (en-US).
- Agree who in communications will write and approve the title, message and button label for each survey language you use.

### At rollout

- Watch the Microsoft 365 Roadmap and Message center for this item and read the Learn page when it is published, before relying on the roadmap's description of how editing works.
- Switch Teams on for a survey program before the cycle launches; enabling it afterwards sends nothing in Teams.
- Preview the invite, reminder and results notifications on the Teams tab of the Configure Notifications preview pane.

### After rollout

- Compare a delivered Teams notification with the email for the same survey to check that title, message and button wording match.
- Review program-level and cycle-level notification settings before each new cycle goes live.
- Record any wording that Teams does not accept, and feed it back to your communications owner.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Microsoft Teams is a notification option for the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Learn describes this as making Teams a notification option overall; each survey program has its own Teams channel setting (next row). It does not govern the new editing.</small></td><td data-label="Admin UI"><strong>Viva Glint</strong><br>Configuration › Service Configuration › General Settings › Communications › Microsoft Teams <a href="https://learn.microsoft.com/viva/glint/setup/glint-teams" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a survey program sends invites and reminders in Teams</strong><br><small class="controls__note">Enable before the survey launches; enabling it after a survey is live sends no Teams notifications. Not available for Always-On surveys.</small></td><td data-label="Admin UI"><strong>Viva Glint</strong><br>Configuration › Surveys › Survey Programs › survey › Communications › Channels › Microsoft Teams <a href="https://learn.microsoft.com/viva/glint/setup/glint-teams" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Learn documents the Viva Glint app switches for Teams as notification options at two levels: the organisation (General Settings) and each survey program (Communications). Learn describes no switch for the customisation itself, because the page for this feature is not published yet. Whether the new editing sits under the same Communications section is not stated.

Installing the Viva Glint app for Teams users is a Teams admin center action under Teams apps > Setup policies, as the [Teams notifications page](https://learn.microsoft.com/viva/glint/setup/glint-teams) describes. The [setup policies page](https://learn.microsoft.com/microsoftteams/teams-app-setup-policies) says a Teams Administrator or an admin with a higher role can manage these policies.

Microsoft Learn documents no API for these Viva Glint settings at the time of writing (November 2026), so both rows are configured in the Viva Glint app.

## Open questions

- Is the editing available by default when it arrives, or does an admin have to switch it on? Microsoft has not stated the default; watch the Roadmap item and the Viva Glint Learn pages.
- Where in the Viva Glint app will Teams notification content be edited, and which Viva Glint role can do it?
- Will edited text be rolled out per notification type (invite, reminder, results) and per language, and what happens when a language falls back to English (en-US)?
- Will the roadmap's January CY2027 target hold for Worldwide, and will Teams notifications and this editing become available in GCC, where Learn currently says Teams notifications are not supported?

<!-- rationale
risk: Low. This changes the wording of notifications that Viva Glint already sends where admins enable Teams, and the roadmap describes no new data access. The default is not stated, so this rates today's behaviour continuing.
cost: Low. Viva Glint needs a Viva Suite or Viva Glint subscription, and Microsoft has published no licence or meter specific to this feature, so the known cost is admin and translation time.
impact: Medium. Recipients of surveys that have Teams notifications enabled would see the new wording, and the admins who run those survey programs do the editing.
-->

<!-- verifier-findings (2026-11-20, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Security & identity; Governance guidance; Governance controls / applicability: Teams delivery depends on installing Viva Glint through a Teams app setup policy. | Found: If your organization uses app centric management functionality, then use Manage apps page to install agents and apps for users. Otherwise, continue to preinstall agents and apps using setup policies. | Fix: Replace the mandatory setup-policy wording with 'The Viva Glint app must be installed for recipients. For central installation, organisations using app-centric management use Manage apps; other organisations can use Teams app setup policies.' Apply that qualification to the installation checklist and Governance controls prose. Cite https://learn.microsoft.com/microsoftteams/teams-app-setup-policies. Do not describe a setup policy as a delivery prerequisite: https://learn.microsoft.com/viva/glint/setup/glint-teams also documents individual installation. | Source: https://learn.microsoft.com/microsoftteams/teams-app-setup-policies
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance; Governance controls table / consistency: The checklist asks readers to review app installation, user survey languages and program/cycle notification settings without corresponding controls-table rows. | Found: Checklist: 'confirm the Viva Glint app is installed'; 'Review each user's survey language'; 'Review program-level and cycle-level notification settings'. The table contains only the organisation-level Teams toggle and survey-program Teams channel toggle. | Fix: Remove the checklist bullets asking readers to confirm app installation, review each user's survey language, and review program-level and cycle-level notification settings. These controls have no table rows; retain the existing explanatory prose.
-->
