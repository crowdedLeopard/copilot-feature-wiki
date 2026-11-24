---
title: "Microsoft Copilot (Microsoft 365): multichannel customer outreach across web chat, voice, SMS and email"
slug: "m365-copilot-engage-customers-across-multiple-channels-web-voice-sms-and-email"
roadmapId: 567001
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "The roadmap plans an agent that engages customers over web chat, voice, SMS and email. Microsoft Copilot is available with Microsoft 365 E7 or as an add-on; no Learn page, default or admin control for this feature is published."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "August CY2026"
previewDate: "July CY2026"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft Copilot is available with Microsoft 365 E7 or as an add-on for eligible commercial, US Government, and education subscription plans. Terms specific to multichannel outreach are not yet published."
audiences: ["m365-admin","service-owner","compliance"]
tags: ["m365-copilot","agents","channels"]
sources:
  - title: "Microsoft 365 Roadmap item 567001"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=567001"
    kind: "roadmap"
  - title: "License options for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/copilot-license-options"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
  - title: "Graph API for agent registry and agent details"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/graph-api"
    kind: "learn"
  - title: "Agent management in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-365-overview"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Switch for multichannel customer outreach (web chat, voice, SMS, email)"
    scope: "tenant"
    ui: null
    api: null
    note: "No control for this feature is documented at the time of writing (November 2026)."
confidence: "low"
created: "2026-11-23"
updated: "2026-11-24"
roadmapModified: "2026-07-08T23:10:57"
changes:
  - date: "2026-11-23"
    note: "New briefing: the roadmap describes multichannel customer outreach, and Microsoft Learn documents no default, licence or admin control for it yet."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 40 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected: the record gives no recipient-selection mechanism (previously said it does not say who is contacted); licensing is now Microsoft Copilot's product licence, with feature-specific terms not yet published."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 46 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-24"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 46
  confirmed: 46
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "54ba7d7e6e1a340eb473694016038cc4"
---

## What's changing

Microsoft's roadmap item 567001 describes a multichannel outreach capability for Microsoft Copilot (Microsoft 365). It spans web chat, voice, SMS and email, and the roadmap text says the aim is to activate "the agent" across several surfaces so that conversations continue if one channel fails.

Microsoft Learn does not describe this feature yet, so everything in this briefing about its behaviour is the roadmap's description. The record does not name the agent, explain how customer recipients are selected, say what data it uses or say whether it acts without a person approving each message. It gives no default state and links to no documentation.

The roadmap record lists the status as In development, with a preview target of July CY2026 and a general availability target of August CY2026, for Worldwide (Standard Multi-Tenant) on the Web platform. Both dates are Microsoft's targets, and as of 23 November 2026 both months have passed while the status is still In development. The record lists General Availability and Preview as release phases and was last modified in July 2026.

## Why it matters

This item matters because it describes software contacting people outside the organisation by voice, SMS and email. Those channels reach customers directly, so a mistake is visible outside the tenant and may touch communications rules that your compliance team owns. Microsoft has not said which of these channels a tenant can switch on or off.

Microsoft has not stated what happens on arrival, so the sensible position is to assume no source says existing behaviour changes, and to treat this as something to track. The one useful step now is to find out whether a team in your organisation (sales, marketing, service) expects to use it, so that you can ask the right questions when Microsoft publishes documentation.

## Risk assessment

**Data exposure**

- The roadmap describes outreach to customers across web chat, voice, SMS and email. Microsoft has not said which data the agent reads to personalise that outreach or where messages and call content are stored. Treat this as an open question until documentation exists.

**Security & identity**

- Microsoft has not said which identity the agent uses to send email, place calls or send SMS, or how customers are authenticated on web chat. No control can be assessed until that is published.

**Autonomy & actions**

- The roadmap says the capability supports "always-on, end-to-end engagement" and a handoff to sales motions. Whether messages are sent without a person approving them, and how a handoff to a person works, is not described.

**Change & support**

- The record gives a July CY2026 preview and August CY2026 general availability target, both now past while the status remains In development. Expect the dates to move, and do not plan a rollout around them.

## Cost and licensing

Microsoft Copilot is available with Microsoft 365 E7 or as an add-on for eligible commercial, US Government, and education subscription plans, according to [License options for Microsoft Copilot](https://learn.microsoft.com/copilot/plan/copilot-license-options). Terms specific to multichannel outreach are not yet published. The roadmap record names no licence, and Microsoft Learn pages for Copilot agent management cover agents in general, not this feature.

The licence page establishes the product requirement only. No meter, credit rate or cap for multichannel outreach is published at the time of writing (November 2026).

The cost that can be stated today is admin time: tracking the roadmap item, and talking to the teams that might use it.

## Scope

Cloud: the roadmap record lists Worldwide (Standard Multi-Tenant) only. That is a record fact; it does not by itself say the feature is unavailable elsewhere.

Platform: the record lists Web. Release phase: General Availability and Preview. The product is listed as Microsoft Copilot (Microsoft 365).

Licences: Microsoft Copilot is available with Microsoft 365 E7 or as an add-on for eligible commercial, US Government, and education subscription plans. Which users get this feature, which roles configure it and any prerequisites specific to it are not stated in the record or on any Microsoft page found, and rollout mechanics are not described.

## Governance guidance

### Before rollout

- Ask sales, marketing and customer service leads whether they expect to use automated multichannel outreach, so that you know who to brief when documentation appears.
- Ask your compliance team which of your existing rules on contacting customers by SMS, voice and email would apply to an agent that contacts them.
- Check the roadmap item at https://www.microsoft.com/microsoft-365/roadmap?id=567001 for status and date changes.

### At rollout

- Wait for a Microsoft Learn page or a Message center post that names the agent before enabling or promoting anything for this feature.
- Confirm the default state, the feature-specific licence terms and the admin controls with Microsoft once they are published, and update your change plan.

### After rollout

- Review which customer messages were sent over each channel with the team that owns the outreach, once Microsoft documents how activity is logged.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Switch for multichannel customer outreach (web chat, voice, SMS, email)</strong><br><small>Tenant</small><br><small class="controls__note">No control for this feature is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No admin control that governs multichannel outreach is documented at the time of writing (November 2026). The table records that gap so the row can be filled in when Microsoft publishes one.

The Microsoft 365 admin center Copilot settings page groups settings under User access, Data access, Copilot actions and Other settings, and none of the settings it lists names this feature. An existing agent control may or may not apply to it, and Microsoft has not said which agent this item concerns.

## Open questions

- Which agent does roadmap item 567001 describe, and where will Microsoft document it? Watch the roadmap item and Message center.
- Is the capability on, off or opt-in when it arrives, and who in the tenant gets it first?
- Does any meter or separate charge apply to voice, SMS and email outreach beyond the Microsoft Copilot licence?
- Can an administrator turn individual channels off, and is there an API for that setting?
- Does the agent send messages without a person approving them, and where are sent messages and call content recorded?

<!-- rationale
risk: Medium. The roadmap describes an agent contacting customers over voice, SMS and email, which is external communication, but Microsoft has not said what it can reach, what it does unattended or whether any control exists. Rated on today's behaviour continuing.
cost: Low. Microsoft Copilot is available with Microsoft 365 E7 or as an add-on, but terms and any meter specific to this feature are not yet published, so the only cost the sources support is admin time to track the item and plan communications.
impact: Low. The roadmap record does not say which users or teams get it, and its release phase lists both General Availability and Preview. Microsoft has not stated that anyone receives it without an administrator acting.
-->
