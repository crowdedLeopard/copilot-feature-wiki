---
title: "Microsoft Purview Insider Risk Management: built-in filter for temporary file noise on endpoints"
slug: "microsoft-purview-insider-risk-management-reduce-temporary-file-noise-for-endpoint-activit"
roadmapId: 560601
topic: "governance"
products: ["Microsoft Purview"]
summary: "Insider Risk Management plans built-in filtering of well-known temporary file name patterns from Endpoint events, so they drop out of activity explorer and scoring. No admin action is stated; default and patterns are not yet published."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "May CY2027"
previewDate: "March CY2027"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft Learn names Microsoft 365 Enterprise E5 as a plan for trying Insider Risk Management; verify the supported subscription and assign appropriate user licenses. A licence or price specific to this filter is not yet published."
audiences: ["compliance","security"]
tags: ["insider-risk-management","purview","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 560601"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=560601"
    kind: "roadmap"
  - title: "Set up global exclusions for Insider Risk Management policies"
    url: "https://learn.microsoft.com/purview/insider-risk-management-settings-global-exclusions"
    kind: "learn"
  - title: "Create and manage Insider Risk Management policies"
    url: "https://learn.microsoft.com/purview/insider-risk-management-policies"
    kind: "learn"
  - title: "Plan for Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-plan"
    kind: "learn"
  - title: "Get started with Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-configure"
    kind: "learn"
  - title: "Assign permissions in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    kind: "learn"
  - title: "Learn about Insider Risk Management settings"
    url: "https://learn.microsoft.com/purview/insider-risk-management-settings"
    kind: "learn"
  - title: "Limits in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-limits"
    kind: "learn"
  - title: "Configure policy indicators in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Which file types, keywords and file paths Insider Risk Management policies ignore"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Insider Risk Management > Insider risk settings > Global exclusions"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-settings-global-exclusions"
    api: null
    note: "Existing alternative, not a control over the new filter. Entries: File paths > Individual file paths > Add file paths to exclude; File types > Individual file types > Add file type; Keywords > Individual keywords. Up to 500 per list."
  - governs: "Switch or scope for the built-in temporary file name filter"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting is documented at the time of writing (November 2026); the roadmap item describes the filter but no control."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-10-12T23:01:05"
changes:
  - date: "2026-11-21"
    note: "New briefing for roadmap item 560601, based on the roadmap record and Learn's existing global exclusions pages."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 53 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Correction: no longer says global exclusions are the only noise-tuning setting; added the Microsoft 365 Enterprise E5 trial plan, the 500-item limits page and the exclusion entry routes."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 47 statements not yet confirmed"
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 54 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 54
  confirmed: 53
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "69aa64a49f7328a0f0929ab22f613d08"
---

## What's changing

Microsoft plans built-in filtering in Microsoft Purview Insider Risk Management (IRM) for well-known temporary file name patterns, so that Endpoint file operations on those files are excluded from IRM activity explorer and scoring. The roadmap item explains the problem: when files are opened in Windows, the operating system and applications such as Microsoft Office and browsers create, rename and delete temporary files, the Endpoint client audits those operations, and they show up as high-volume, low-signal events.

The roadmap item says the existing global exclusions (file type, keyword, file path and others) do not easily capture some temporary file naming patterns, so customers cannot cut this noise without over-excluding. Microsoft Learn does not yet describe the new filter, so what follows about its behaviour is the roadmap's description. Which patterns are covered, and whether the filter is on at arrival or needs a setting, are not stated.

The roadmap item lists the status as In development, with a preview targeted for March CY2027 and general availability targeted for May CY2027. It lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, and the Web platform. These are Microsoft's targets, not commitments.

## Why it matters

If the filter works as described, IRM analysts should see fewer alerts and activity rows driven by Office, browser and operating-system temporary files, and can spend their time on the remaining events. That helps most where teams have loosened thresholds or added broad exclusions just to quiet this noise.

Microsoft has not stated what happens on arrival, so no source says existing behaviour changes for your tenant until the filter reaches you. Plan to compare alert and activity volumes before and after it arrives, because filtered events are excluded from both scoring and activity explorer.

## Risk assessment

**Data exposure**

- The roadmap describes filtering of events the Endpoint client already audits, not collection of new data. The exposure is on the detection side: events matching a built-in pattern are excluded from activity explorer and scoring, so analysts cannot review them there.
- The list of patterns is not yet published, so you cannot check whether a file name that a user could choose deliberately would match. Review the published patterns before relying on the filter.
- For the existing global exclusions, Microsoft documents that an excluded event is still included in a sequence when it is part of an obfuscation activity (https://learn.microsoft.com/purview/insider-risk-management-policies). Whether the built-in filter behaves the same way is not stated.

**Security & identity**

- No change documented: the roadmap item describes no new permissions or identities. Configuring the existing exclusions needs a role such as Insider Risk Management or Insider Risk Management Admins.

**Autonomy & actions**

- No change documented: the roadmap item describes filtering of audited events only.

**Change & support**

- Alert and activity volumes should drop, which can look like a fault to analysts who tuned thresholds against the old volume. Tell them before the preview reaches you.
- A dedicated control for this filter is not yet documented; existing Global exclusions is one documented option for tuning noise.

## Cost and licensing

Microsoft Learn says Microsoft offers Insider Risk Management as part of a wide selection of Microsoft 365 licensing subscriptions, and that administrators must confirm a supported subscription and assign the appropriate licenses to users (https://learn.microsoft.com/purview/insider-risk-management-configure). Microsoft Learn names Microsoft 365 Enterprise E5 as a plan for trying Insider Risk Management (https://learn.microsoft.com/purview/insider-risk-management-plan). The roadmap item names no separate licence for this filter, and a licence or price specific to it is not yet published.

No meter for this filter is documented at the time of writing (November 2026). The indirect cost is admin and analyst time to review alert volumes and existing exclusions after the filter arrives.

## Scope

The filter targets Endpoint file operations on well-known temporary file name patterns, as audited by the Endpoint client on Windows, according to the roadmap item. It affects IRM activity explorer and scoring. The roadmap item lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, with the Web platform, and release phases General Availability and Preview.

Microsoft Learn documents the Insider Risk Management and Insider Risk Management Admins role groups as able to configure policies and settings. Prerequisites for the filter and how it rolls out are not yet published.

## Governance guidance

### Before rollout

- Review your current Global exclusions (file types, keywords, file paths) in the Microsoft Purview portal and note which were added only to suppress temporary file noise.
- Record current alert and activity volumes for Endpoint-based policies as a baseline for comparison.
- Tell IRM analysts that fewer Endpoint events are expected once the filter arrives.

### At rollout

- Watch Message center and the roadmap item for the preview in March CY2027 and for the pattern list and any setting for the filter.
- Compare alert and activity volumes against the baseline after the preview reaches your tenant.

### After rollout

- Remove broad global exclusions that are no longer needed, one at a time, rechecking volumes after each change.
- Check that analysts still see the events you expect for high-risk users in activity explorer.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which file types, keywords and file paths Insider Risk Management policies ignore</strong><br><small>Tenant</small><br><small class="controls__note">Existing alternative, not a control over the new filter. Entries: File paths &gt; Individual file paths &gt; Add file paths to exclude; File types &gt; Individual file types &gt; Add file type; Keywords &gt; Individual keywords. Up to 500 per list.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Insider Risk Management › Insider risk settings › Global exclusions <a href="https://learn.microsoft.com/purview/insider-risk-management-settings-global-exclusions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Switch or scope for the built-in temporary file name filter</strong><br><small>Tenant</small><br><small class="controls__note">No setting is documented at the time of writing (November 2026); the roadmap item describes the filter but no control.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

One documented control for tuning IRM noise today is Global exclusions, which Microsoft describes as excluding items from being scored by Insider Risk Management policies. The roadmap item says some temporary file naming patterns are not easily captured with current exclusions, which is the gap it describes. Global exclusions include a default file path exclusion for \Users\*\AppData\Local\Temp, which you can cancel to enable scoring in that location.

The second row records that no switch, setting or automation for the built-in filter is documented yet. Microsoft's limits page gives a maximum of 500 items in each global exclusion list, file types included (https://learn.microsoft.com/purview/insider-risk-management-limits).

## Open questions

- Which temporary file name patterns will the filter cover, and will Microsoft publish the list? Watch the Insider Risk Management Learn pages and the roadmap item.
- Is the filter on by default, or must an administrator turn it on? Watch Message center when the preview starts.
- Will an administrator be able to switch the filter off or limit it to certain users or policies, and will there be a setting or API for that?
- Will events removed by the filter still appear in a sequence as an obfuscation activity, as documented for existing global exclusions?
- Does the filter need a licence or prerequisite beyond Insider Risk Management itself?

<!-- rationale
risk: Low. The roadmap describes filtering existing Endpoint events, not new data access; the default state is not stated, so this rates today's behaviour continuing. The main exposure is that filtered events no longer appear for analysts.
cost: Low. Insider Risk Management already needs a supported Microsoft 365 subscription, and no separate licence or meter for this filter is published. The known cost is admin and analyst time to check alert volumes afterwards.
impact: Low. Insider Risk Management administrators and analysts notice it, as fewer low-signal Endpoint events appear in activity explorer and scoring. Other users see no change in the roadmap description.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The Microsoft Purview portal route is Settings > Insider Risk Management > Insider risk settings > Global exclusions. | Found: Select Settings in the upper-right corner of the page, then select Insider Risk Management to go to the Insider Risk Management settings. Under Insider risk settings, select Global exclusions. | Fix: Retain the correct route and complete its note and rendered table with these suffixes after Global exclusions: 'Type > File paths > Individual file paths > Add file paths to exclude'; 'Type > File types > Individual file types > Add file type'; 'Type > Keywords > Individual keywords > Exclude these keywords'. Source: https://learn.microsoft.com/purview/insider-risk-management-settings-global-exclusions. | Source: https://learn.microsoft.com/purview/insider-risk-management-settings-global-exclusions
- [supported, minor] controls[0].note; Governance controls table / admin-path: Individual keyword entries use Keywords > Individual keywords. | Found: Individual keywords. To add keywords one at a time, enter a keyword in the Exclude these keywords field, then press Enter. | Fix: Replace 'Keywords > Individual keywords' with 'Keywords > Individual keywords > Exclude these keywords' in controls[0].note and the rendered table. Source: https://learn.microsoft.com/purview/insider-risk-management-settings-global-exclusions. | Source: https://learn.microsoft.com/purview/insider-risk-management-settings-global-exclusions
- [contradicted, minor] front matter: impact; rationale: impact / consistency: Low impact is the rating for a change the rationale says Insider Risk Management administrators and analysts notice. | Found: impact: "low"; rationale: "Insider Risk Management administrators and analysts notice it". SCHEMA defines medium impact as "specific roles such as makers, analysts or one business unit". | Fix: Set impact to 'medium' and replace the rationale with 'Medium. Insider Risk Management administrators and analysts notice fewer low-signal Endpoint events in activity explorer and scoring. Other users see no change in the roadmap description.'
-->
