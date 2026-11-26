---
title: "Outlook: custom descriptions on follow-up flags in new Outlook for Windows and Outlook on the web"
slug: "outlook-add-custom-flag-descriptions-for-clearer-follow-ups"
roadmapId: 580885
topic: "modern-work"
products: ["Outlook"]
summary: "Users will be able to type their own description on an email's follow-up flag. Microsoft plans it for February CY2027; no admin switch is documented and nothing needs doing beyond telling users."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "February CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Covered by the licence Outlook already needs: a plan with the Microsoft 365 desktop apps for new Outlook for Windows, while Business Basic gives the web and mobile versions. Nothing specific to this feature is published."
audiences: ["m365-admin","change-adoption","end-user"]
tags: ["outlook","new-outlook","user-experience"]
sources:
  - title: "Microsoft 365 Roadmap 580885"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=580885"
    kind: "roadmap"
  - title: "Understand licensing in new Outlook for Windows"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/licensing-options"
    kind: "learn"
  - title: "Supported accounts in new Outlook for Windows"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/supported-account-types"
    kind: "learn"
  - title: "Policy Management in new Outlook for Windows"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/manage/policy-management"
    kind: "learn"
  - title: "Set-OwaMailboxPolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-owamailboxpolicy"
    kind: "docs"
videos: []
related: ["outlook-instantly-find-rules-quick-steps-and-more-by-name"]
controls:
  - governs: "Whether users can add custom descriptions to follow-up flags"
    scope: "tenant"
    ui: null
    api: null
    note: "No Exchange admin center or Set-OwaMailboxPolicy setting for follow-up flags or their text is documented at the time of writing (November 2026)."
confidence: "low"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-11-24T00:13:11"
changes:
  - date: "2026-11-26"
    note: "New briefing: custom follow-up flag descriptions planned for February CY2027, with no admin control documented."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 2 of 40 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 40
  confirmed: 38
  unconfirmed: 2
  contradicted: 0
  attempts: 0
  hash: "c3eff3b8a9d6d7bd8d0b648ab4986e23"
---

## What's changing

Outlook users will be able to add their own text to an email's follow-up flag, describing what they need to do with that message. The roadmap item says the aim is a clear reminder of why the email was flagged when the user comes back to it. It is tagged for the new Outlook for Windows and lists the Desktop and Web platforms.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. Microsoft has not said where the description is shown besides the flagged message, whether it carries over to other Outlook apps, or what happens to it when the flag is cleared.

The roadmap item is **In development**, with General Availability targeted for **February CY2027**, for the Worldwide (Standard Multi-Tenant) cloud.

## Why it matters

For administrators this is a small change. It adds a free-text field to something users already do, so the main effect is on support and adoption: help desk staff and trainers will be asked how it works and whether descriptions show up elsewhere, such as in other Outlook apps. Microsoft has not stated whether the option appears for every user on arrival, and no source says existing flags change.

The one thing worth noting is that users will be writing notes on messages, and those notes may name people, customers or deadlines. Microsoft has not described where the text is stored or who else can see it, so treat it like any other content users write in their mailbox until that is documented.

## Risk assessment

**Data exposure**
- Users can write free text against a message. Microsoft has not described where the description is stored, or whether delegates and people with access to a shared mailbox see it. Until that is documented, assume it is as visible as the flag itself.

**Security & identity**
- No change: the roadmap describes nothing that signs in, grants access or changes permissions.

**Autonomy & actions**
- No change: the description is text the user types; the roadmap describes no automatic action.

**Change & support**
- Microsoft Learn documents no admin setting to turn the descriptions on or off at the time of writing (November 2026), so the help desk should expect questions rather than a configuration task.

## Cost and licensing

**Licence.** The feature is part of Outlook, so it takes the licence Outlook needs. Microsoft's page [Understand licensing in new Outlook for Windows](https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/licensing-options) says that using the Outlook for Windows desktop app (classic or new) with a Microsoft 365 work email address needs a plan that includes the desktop versions of the Microsoft 365 apps, such as Business Standard or Business Premium. The same page says Business Basic gives the web and mobile versions of Outlook, and that users with a Frontline licence are required to use the web and mobile versions.

**Meter.** None is documented for this feature.

**Indirect costs.** Time to update user guidance and brief the help desk.

**Not yet published.** Microsoft has published nothing about licensing specific to custom flag descriptions.

## Scope

- **Users:** the roadmap item does not say which account types get the feature. For new Outlook for Windows, the [supported accounts page](https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/supported-account-types) lists Microsoft 365 work and school accounts (Exchange Online) among the supported account types and says on-premises Exchange accounts aren't supported.
- **Platforms:** Desktop and Web, as the roadmap item lists them; its hashtag is #newoutlookforwindows.
- **Clouds:** the roadmap item lists Worldwide (Standard Multi-Tenant) only.
- **Roles:** none to configure, as no admin setting is documented.
- **Rollout:** General Availability targeted for February CY2027. Rollout mechanics and the default state are not stated.

## Governance guidance

### Before rollout
- Add a line on flag descriptions to the user guidance your service desk keeps for new Outlook for Windows and Outlook on the web.
- Watch Message center for a post on this roadmap item, which may give the rollout window and default.

### At rollout
- Confirm in a test mailbox where the description appears and whether it shows in other Outlook apps the organisation uses.
- Check whether a delegate or shared-mailbox user can see a description added by the mailbox owner, before advising users what to write in it.

### After rollout
- Recheck the Set-OwaMailboxPolicy reference and the new Outlook policy management page for a setting that governs flag descriptions.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can add custom descriptions to follow-up flags</strong><br><small>Tenant</small><br><small class="controls__note">No Exchange admin center or Set-OwaMailboxPolicy setting for follow-up flags or their text is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no setting for this feature at the time of writing (November 2026). The Outlook on the web mailbox policy, which Microsoft says mostly applies to both Outlook on the web and new Outlook for Windows, has no parameter for follow-up flags or their text; its -TasksEnabled parameter governs access to the Tasks folder, not flags. If Microsoft adds a mailbox policy setting later, expect it to apply to both clients together.

## Open questions

- Will the option be available to every user as soon as it rolls out, or will an administrator be able to turn it off? Watch Message center and the Set-OwaMailboxPolicy reference.
- Where is the description stored, and do delegates and shared-mailbox users see it?
- Does the description appear in classic Outlook, Outlook mobile or the flagged email list in To Do?
- What happens to the description when the flag is marked complete or cleared?

<!-- rationale
risk: Low. The change adds a user-written note to a flag on a message already in the user's own mailbox; it moves no data and acts on nothing by itself.
cost: Low. It sits inside Outlook, which users already need a licence for; the only cost the sources show is the time to tell users and answer questions. No price for this feature is published.
impact: Low. Only users who flag messages and choose to add a description notice it; no source says existing flags or follow-up behaviour change.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Governance controls / behaviour: TasksEnabled governs access to the Tasks folder, rather than custom flag descriptions. | Found: This parameter is functional only in on-premises Exchange. The TasksEnabled parameter specifies whether Tasks folder is available in Outlook Web App. | Fix: Replace the TasksEnabled clause with 'its -TasksEnabled parameter governs access to the Tasks folder in Outlook Web App and is functional only in on-premises Exchange, not a control for custom flag descriptions.' | Source: https://learn.microsoft.com/powershell/module/exchangepowershell/set-owamailboxpolicy
- [unsupported, minor] rationale: risk / behaviour: The custom flag description feature moves no data. | Found: Searched: "new Outlook" "custom flag" descriptions data automatic actions; Outlook custom flag descriptions storage. Read roadmap, Supported accounts and returned release-note/reference excerpts; none states that this feature moves no data. | Fix: Replace 'it moves no data' with 'the roadmap describes no new data movement'.
- [unsupported, minor] rationale: risk / behaviour: The custom flag description feature acts on nothing by itself. | Found: Searched: "new Outlook" "custom flag" descriptions data automatic actions. Read roadmap and returned Outlook actions and follow-up excerpts; none establishes the absence of automatic actions for this planned feature. | Fix: Replace 'acts on nothing by itself' with 'describes no automatic action'. With the preceding correction, the clause reads 'the roadmap describes no new data movement and describes no automatic action'.
-->
