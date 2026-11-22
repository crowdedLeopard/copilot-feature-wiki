---
title: "Microsoft Teams: emoji shortcuts with autocomplete on iOS and Android"
slug: "microsoft-teams-emoji-shortcuts-with-autocomplete-on-mobile"
roadmapId: 565370
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams on iOS and Android gains colon-based emoji shortcuts with autocomplete, including custom emojis. Microsoft says it is on by default with no admin controls and no action is required; a help desk heads-up is advised."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Android","iOS"]
targetDate: "August CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "high"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Teams can be licensed as part of qualifying Microsoft 365 offerings or as a standalone SKU. No licence specific to mobile emoji shortcuts is published."
audiences: ["m365-admin","end-user","change-adoption"]
tags: ["teams","mobile","emoji","user-experience","adoption","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 565370"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=565370"
    kind: "roadmap"
  - title: "MC1404321: (Updated) Microsoft Teams: Emoji shortcuts expand to iOS and Android"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1404321"
    kind: "message-center"
  - title: "Custom emojis in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/teams-custom-emojis"
    kind: "learn"
  - title: "Manage messaging policies in Teams"
    url: "https://learn.microsoft.com/microsoftteams/messaging-policies-in-teams"
    kind: "learn"
  - title: "Set-CsTeamsMessagingConfiguration"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingconfiguration"
    kind: "learn"
  - title: "Set-CsTeamsMessagingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingpolicy"
    kind: "learn"
  - title: "Microsoft Teams service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/teams-service-description"
    kind: "learn"
videos: []
related: ["microsoft-teams-expanded-markdown-support-in-microsoft-teams"]
controls:
  - governs: "Whether emoji shortcuts and autocomplete are available on Teams mobile"
    scope: "tenant"
    ui: null
    api: null
    note: "MC1404321 states the feature is enabled by default with no admin controls."
  - governs: "Whether custom emojis and reactions are used across the tenant"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Messaging Settings > Custom emojis > use custom emojis"
      docs: "https://learn.microsoft.com/microsoftteams/teams-custom-emojis"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMessagingConfiguration -CustomEmojis $false"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingconfiguration"
    note: "Existing custom emoji control; on by default. Enables or disables use of custom emojis and reactions across the whole tenant."
  - governs: "Which users can upload (create) custom emojis"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Messaging policies > policy > Edit > Upload custom emojis"
      docs: "https://learn.microsoft.com/microsoftteams/messaging-policies-in-teams"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMessagingPolicy -Identity <policy name> -CreateCustomEmojis $false"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingpolicy"
    note: "Applies per messaging policy; on by default. Controls who can add custom emojis, not who can insert them."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-22"
roadmapModified: "2026-11-19T00:53:06"
changes:
  - date: "2026-11-21"
    note: "First briefing: colon-based emoji shortcuts and autocomplete reach Teams on iOS and Android, on by default with no admin controls."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 60 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected after the independent check: Upload custom emojis path now includes Edit, the Autonomy & actions bullet follows the notice, custom emoji control wording matches Learn, and licensing now cites the Teams service description."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 64 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 64
  confirmed: 64
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "43771c88d553f79a10f8a894b4990921"
---

## What's changing

Microsoft Teams on iOS and Android gets the colon-based emoji shortcuts that the desktop client already has. Users type a keyword between colons in the compose box (for example :smile:) and Teams inserts the emoji, with real-time autocomplete suggestions as they type. The roadmap item adds that custom emojis are supported.

Microsoft's notice MC1404321 gives the behaviour in more detail. The suggestion menu opens when a user types a colon followed by at least two characters (for example :sm). Common emoticons such as :), :D and :P convert to emojis automatically, and lowercase emoticons such as :d and :p are also supported. Emoji search supports fuzzy matching and mid-string search. Existing parenthesis shortcuts continue to work and Microsoft says they will be retired later, in alignment with desktop. The notice states that the feature is enabled by default with no admin controls.

The roadmap item is Launched, with a target of August CY2026, for Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, on Android and iOS, in General Availability. MC1404321 was last updated on 2026-10-05 with a revised timeline: Targeted Release (Worldwide) began in early August 2026 and was expected to finish by mid-August 2026. General Availability was to begin in mid-August 2026 (Worldwide and GCC), late August 2026 (GCC High) and early September 2026 (DoD), and to complete by early November 2026 in each of those clouds. Microsoft Learn has no page for this feature at the time of writing (November 2026), so its behaviour here is the roadmap's and the notice's description.

## Why it matters

For a service owner this is a user-facing change with no switch to set. The notice says it is on by default, so mobile users get the new suggestion menu whether or not anyone plans for it, and your help desk may field questions about colons turning into emojis, or about emoticons such as :D converting without being asked. Microsoft's notice asks for no action and suggests telling the help desk, updating training material to mention shortcuts triggered with a colon, and sending a short user communication.

The feature is low in risk and cost, so the work is communication. The one point worth a decision is custom emojis: the notice says the shortcuts support them, and Teams already has tenant and policy settings for custom emojis. Check those settings now so the mobile shortcut does not surface custom emojis your organisation has not decided to allow.

## Risk assessment

**Data exposure**
- No new data access is described. The shortcuts insert emojis into messages users are already composing; MC1404321 states no compliance considerations were identified.
- Custom emojis are supported in the shortcut menu. Per Microsoft's custom emoji page, custom emojis are accessible to all users in the tenant alongside the standard emojis, so the shortcut menu can surface emojis that other users uploaded.

**Security & identity**
- No change to sign-in, roles or permissions is described in the roadmap item or the notice.

**Autonomy & actions**
- The notice describes emoji insertion and conversion while users compose messages, including colon-based and existing parenthesis shortcuts.

**Change & support**
- The behaviour is on by default and the notice states there are no admin controls, so the only way to manage the change is communication. Emoticons such as :), :D and :P convert automatically, which users may notice as unexpected text changes.
- Parenthesis shortcuts keep working for now and are to be retired later, so expect a second round of user questions when that happens.

## Cost and licensing

Teams can be licensed as part of qualifying Microsoft 365 offerings or as a standalone SKU ([Microsoft Teams service description](https://learn.microsoft.com/office365/servicedescriptions/teams-service-description)). No licence specific to mobile emoji shortcuts is published: neither the roadmap item nor MC1404321 names a licence, a meter or a price for this feature.

The indirect cost is admin and support time: updating help desk scripts and training material, and sending a user communication, as the notice suggests.

## Scope

**Who and where:** Microsoft's notice says all Microsoft Teams users on iOS and Android devices are affected. The roadmap item lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, with platforms Android and iOS and release phase General Availability.

**Rollout:** Per MC1404321, rollout began in Targeted Release (Worldwide) in early August 2026 and General Availability was scheduled to complete in every listed cloud by early November 2026. The notice names no prerequisites and no roles.

**Custom emojis:** Microsoft's custom emoji page says custom emojis are on by default, and that the feature is currently not available for EDU tenants.

## Governance guidance

### Before rollout
- Notify the help desk that typing a colon plus two characters opens an emoji suggestion menu on Teams for iOS and Android, and that :), :D and :P convert automatically, using the behaviours in MC1404321.
- Update internal training or adoption material to include emoji shortcuts triggered with a colon, as the notice suggests.
- Check the tenant-wide custom emoji switch and the **Upload custom emojis** setting in messaging policies, because custom emojis are supported in the shortcuts (see the controls table).

### At rollout
- Send a short user communication about the mobile parity experience, as Microsoft's notice recommends.
- Brief the help desk that existing parenthesis shortcuts still work, so users who report different behaviour on mobile and desktop can be told both syntaxes are valid.

### After rollout
- Review help desk tickets for confusion about automatic emoticon conversion and share a workaround or guidance if volume warrants.
- Watch Message center and the Teams roadmap item for the date on which parenthesis shortcuts are retired, then repeat the communication.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether emoji shortcuts and autocomplete are available on Teams mobile</strong><br><small>Tenant</small><br><small class="controls__note">MC1404321 states the feature is enabled by default with no admin controls.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether custom emojis and reactions are used across the tenant</strong><br><small>Tenant</small><br><small class="controls__note">Existing custom emoji control; on by default. Enables or disables use of custom emojis and reactions across the whole tenant.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Messaging Settings › Custom emojis › use custom emojis <a href="https://learn.microsoft.com/microsoftteams/teams-custom-emojis" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMessagingConfiguration -CustomEmojis $false</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingconfiguration" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users can upload (create) custom emojis</strong><br><small>User</small><br><small class="controls__note">Applies per messaging policy; on by default. Controls who can add custom emojis, not who can insert them.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Messaging policies › policy › Edit › Upload custom emojis <a href="https://learn.microsoft.com/microsoftteams/messaging-policies-in-teams" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMessagingPolicy -Identity &lt;policy name&gt; -CreateCustomEmojis $false</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft's notice MC1404321 states the emoji shortcuts are enabled by default with no admin controls, and Microsoft Learn documents no setting for them in the messaging policy settings list at the time of writing (November 2026). The first row records that gap.

The next two rows are existing custom emoji controls, listed because the notice says custom emojis are supported in the shortcuts. They govern custom emojis in Teams. The tenant setting enables or disables use of custom emojis and reactions across the whole tenant; the Upload custom emojis policy setting controls creation, not insertion. They are not switches for the standard emoji shortcuts. Microsoft's custom emoji page also lists a **Delete custom emojis** policy setting, which is off by default except for Teams admins.

## Open questions

- When will the parenthesis shortcuts be retired? Microsoft's notice says only "later", in alignment with desktop; watch Message center for a dated notice.
- Is a licence specific to mobile emoji shortcuts published? Watch the roadmap item and Microsoft Learn.
- Will Microsoft add an admin setting for emoji shortcuts or emoticon conversion? MC1404321 says there are no admin controls at present.

<!-- rationale
risk: Low. It changes how users type emojis in the compose box; Microsoft's notice MC1404321 identifies no compliance considerations and describes no new data access.
cost: Low. The only cost the sources show is admin time for help desk and training updates; Microsoft has not published a licence requirement or charge for this feature.
impact: High. Microsoft's notice says all Teams users on iOS and Android are affected and the feature is enabled by default, so users will see a new suggestion menu when they type a colon.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] rationale: impact / record: Users see the new suggestion menu when they type a colon. | Found: Users can open the emoji suggestion menu by typing : followed by at least two characters (e.g., :sm) | Fix: Replace the impact rationale's final clause with 'so users will see a new suggestion menu when they type a colon followed by at least two characters.' The body already gives this qualification correctly.
-->
