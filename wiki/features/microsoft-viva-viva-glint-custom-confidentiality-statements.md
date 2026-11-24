---
title: "Viva Glint: custom confidentiality statements for surveys"
slug: "microsoft-viva-viva-glint-custom-confidentiality-statements"
roadmapId: 557982
topic: "modern-work"
products: ["Microsoft Viva"]
summary: "Viva Glint admins can switch off Microsoft's default confidentiality statement and enter their own, with translations. It is optional and off until configured, so no action is required."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Using Viva Glint requires the purchase of a Viva Suite or Viva Glint subscription plan (Viva Glint licensing page). No separate licence or price for custom confidentiality statements is published."
audiences: ["service-owner","compliance","change-adoption"]
tags: ["viva-glint","privacy"]
sources:
  - title: "Microsoft 365 Roadmap item 557982"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=557982"
    kind: "roadmap"
  - title: "MC1318856: Microsoft Viva Glint: Custom confidentiality statements"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1318856"
    kind: "message-center"
  - title: "Manage General Settings in Viva Glint"
    url: "https://learn.microsoft.com/viva/glint/setup/manage-general-settings"
    kind: "learn"
  - title: "How Viva Glint protects your privacy"
    url: "https://learn.microsoft.com/viva/glint/setup/viva-glint-survey-privacy"
    kind: "learn"
  - title: "Viva Glint licensing"
    url: "https://learn.microsoft.com/viva/glint/setup/glint-order-teams"
    kind: "learn"
  - title: "Key roles for Viva Glint"
    url: "https://learn.microsoft.com/viva/glint/start/role-definitions"
    kind: "learn"
videos: []
related: ["microsoft-viva-viva-glint-configure-data-retention-policy-for-viva-glint","microsoft-viva-glint-teams-notification-customization"]
controls:
  - governs: "Whether the default confidentiality statement is replaced by custom statements"
    scope: "tenant"
    ui:
      surface: "Viva Glint admin dashboard"
      path: "Configuration > Service Configuration > General Settings > Company Information > Confidentiality and privacy statements > Manage"
      docs: "https://learn.microsoft.com/viva/glint/setup/manage-general-settings"
    api: null
    note: "The Show default Microsoft statements toggle is switched to Off there. Applies to all survey programs."
confidence: "high"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-07-06T23:00:50"
changes:
  - date: "2026-11-24"
    note: "First briefing for this item: Launched with Worldwide rollout from early June 2026; optional, default statements stay unless an admin turns them off."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 42 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 42
  confirmed: 41
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "999627af0b4db79bf7beff3d6971ae77"
---

## What's changing

Viva Glint administrators can replace the default Microsoft confidentiality statement shown to survey takers with their own text. In General Settings, an admin switches the **Show default Microsoft statements** toggle to **Off** and enters a **Confidentiality statement** and a **Non-confidentiality statement**. An optional **Raw data export statement** can tell survey takers that their responses may be identifiable in raw survey data exports.

The settings apply to every survey program on the platform. Viva Glint shows the confidentiality statement for programs with a confidentiality threshold of three or more, and the non-confidentiality statement for programs with a threshold below three. The organisation must translate its statements into each survey language; where a translation is missing, the survey taker in that language sees the default statement instead.

The default is unchanged. The toggle is **On** by default, and Microsoft's notice MC1318856 states that the feature is not enabled by default, that configuration is optional and that the existing default statement stays in place if no changes are made. The notice asks for no action and says rollout begins in early June 2026 for Worldwide.

The roadmap record lists the item as Launched, General Availability, Worldwide (Standard Multi-Tenant) and Web, with a target date of June CY2026. The Learn page on privacy says customised confidentiality statements do not impact reporting directly.

## Why it matters

A confidentiality statement is the promise employees read before they answer. Where the default wording does not match your legal, HR or regional requirements, this setting lets you change it, but the new text becomes your organisation's own commitment to respondents. Microsoft's Learn page tells admins to make sure the program has the correct confidentiality settings first.

If nobody acts, the default Microsoft statements continue to appear, as Microsoft's notice and the General Settings page both state. The risk to manage is therefore a wrong or untranslated custom statement, not an unwanted default.

## Risk assessment

**Data exposure**

- No change to how survey data is handled: Microsoft's notice MC1318856 says admin-defined statements modify the messaging shown to users but do not change how survey response data is processed or stored.
- A statement that promises more than the program delivers can mislead respondents. Reporting thresholds such as the **Rated Confidentiality Threshold** and **Suppression Threshold** still apply as configured, so check that the wording matches them.

**Security & identity**

- The setting is changed by Viva Glint admins (Company Admins in the notice; the Learn roles page says the Viva Glint Service Administrator role was formerly called "Company Admin"). Keep that role to few people, because a change here reaches every survey program.

**Autonomy & actions**

- No change: the setting displays text to survey takers and takes no action on its own.

**Change & support**

- A custom statement without a translation for a survey language falls back to the default statement in that language, so respondents can see inconsistent wording across languages.
- The confidentiality and non-confidentiality statements are chosen by each program's threshold. Changing a program's threshold or making a program identifiable changes which statement respondents see, so recheck the text after such changes.

## Cost and licensing

Viva Glint requires the purchase of a Viva Suite or Viva Glint subscription plan, and the Viva Glint licensing page says individual user licence assignment is not required for using Viva Glint. Neither the General Settings page nor the privacy page names an additional licence for custom confidentiality statements, and no price or meter for this setting is published at the time of writing (November 2026).

The indirect cost is people's time: legal or HR review of the wording, and translation into each survey language, which the General Settings page makes the organisation's responsibility.

## Scope

The feature is in the Viva Glint web app and applies to every survey program on the platform, because Microsoft states that changes in General Settings apply to all survey programs and that enabled statements apply to all survey programs. The roadmap record lists Worldwide (Standard Multi-Tenant) only and the Web platform; it lists no US Government clouds.

The notice names Viva Glint Company Admins as configurers and survey participants as the people affected when custom messaging is set. Learn describes the Viva Glint Service Administrator role as formerly known as "Company Admin". The roadmap record is Launched, and the notice says rollout began in early June 2026.

## Governance guidance

### Before rollout

- Agree the statement wording with legal and HR, covering both the confidentiality and the non-confidentiality case and, if raw data exports are enabled, the optional raw data export statement.
- Check each program's confidentiality threshold in program setup, because the system picks the statement from it: three or more for the confidentiality statement, below three for the non-confidentiality statement.
- Prepare a translation of every statement for each survey language in use, since a missing translation falls back to the default statement.

### At rollout

- Open the Viva Glint admin dashboard, go to General Settings > Company Information > Confidentiality and privacy statements, and select **Manage** (see the controls table).
- Switch **Show default Microsoft statements** to **Off**, enter the text and the translations, and review the preview of how each statement appears in the survey.
- End each statement with a space if you also use a raw data export statement, so the two read separately in the survey.

### After rollout

- Open a survey in each language as a test and confirm the custom statement shows, not the default one.
- Recheck the statements whenever a program's confidentiality threshold or its raw export setting changes.
- Review who holds the Viva Glint Service Administrator role, since the setting reaches every program.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the default confidentiality statement is replaced by custom statements</strong><br><small>Tenant</small><br><small class="controls__note">The Show default Microsoft statements toggle is switched to Off there. Applies to all survey programs.</small></td><td data-label="Admin UI"><strong>Viva Glint admin dashboard</strong><br>Configuration › Service Configuration › General Settings › Company Information › Confidentiality and privacy statements › Manage <a href="https://learn.microsoft.com/viva/glint/setup/manage-general-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

One setting group controls this feature, and it is tenant-wide in effect: the **Show default Microsoft statements** toggle and the statement fields apply to every survey program.

The default Microsoft statements are not editable; wording changes require turning the toggle off and entering your own text. Microsoft Learn documents no API or script for these settings at the time of writing (November 2026), so changes are made in the admin dashboard.

## Open questions

- Is there a supported way to read or script these statements, for audit or for many tenants? Microsoft Learn documents none at the time of writing (November 2026); watch the General Settings page.
- Is a charge or separate licence planned for this setting? None is published beyond the Viva Glint subscription requirement; watch the Viva Glint licensing page and Message center.
- Do custom statements also appear in Viva Glint 360 feedback programs? The General Settings page says the statements apply to all survey programs but does not name 360 programs; watch the page.

<!-- rationale
risk: Low. The change is an optional admin setting that alters the wording survey takers see; Microsoft's notice MC1318856 says it does not change how response data is processed or stored.
cost: Low. Viva Glint needs a Viva Suite or Viva Glint subscription already; the only cost shown for this setting is admin, legal review and translation time. No feature-specific charge is published.
impact: Low. Admins notice it first; survey takers see different wording only if an admin turns off the default statement and publishes their own.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table; Governance guidance: At rollout / admin-path: The admin dashboard route is Configuration > Service Configuration > General Settings > Company Information > Confidentiality and privacy statements > Manage. | Found: Select the Configuration symbol on your Viva Glint admin dashboard and then General Settings in the Service Configuration section. From the admin dashboard, navigate to General Settings>Company Information>Confidentiality and privacy statements>click Manage | Fix: Extend controls[0].ui.path and its rendered table path to 'Configuration > Service Configuration > General Settings > Company Information > Confidentiality and privacy statements > Manage > Show default Microsoft statements'; keep the note instructing Off. The cited page documents the toggle inside Manage. | Source: https://learn.microsoft.com/viva/glint/setup/manage-general-settings
- [contradicted, minor] Governance guidance: Before rollout and After rollout; Governance controls table / consistency: The checklist asks readers to check controls that do not have corresponding controls-table rows. | Found: Check each program's confidentiality threshold in program setup ... Recheck the statements whenever a program's confidentiality threshold or its raw export setting changes ... Review who holds the Viva Glint Service Administrator role. The table has only the custom-statements row. | Fix: Add the note 'The checklist also refers to program confidentiality thresholds, raw export settings and Viva Glint Service Administrator assignments; these controls are not represented in the table.' Do not add new control rows as part of this correction.
-->
