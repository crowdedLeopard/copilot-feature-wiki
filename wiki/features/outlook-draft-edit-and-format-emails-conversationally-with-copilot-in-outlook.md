---
title: "Outlook on the web: conversational email drafting with Copilot (GCC, GCC High, DoD)"
slug: "outlook-draft-edit-and-format-emails-conversationally-with-copilot-in-outlook"
roadmapId: 573280
topic: "modern-work"
products: ["Outlook"]
summary: "Microsoft plans conversational drafting, editing and formatting of emails with Copilot in Outlook on the web for GCC, GCC High and DoD (target November CY2026). Its default, licence split and admin switch are not yet documented."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Learn's Copilot overview lists Outlook email drafting among Microsoft 365 Copilot (Basic) in-app features and says the Premium add-on includes everything in Basic. No page states how conversational drafting is split between them, and no price or meter is published for it."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["outlook","m365-copilot","copilot","app-management","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft Copilot (service description)"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot"
    kind: "learn"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Understand Microsoft U.S. government cloud environments for Microsoft 365 and Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/gov-overview"
    kind: "learn"
  - title: "Apps for Microsoft 365 that work across application hosts"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Microsoft 365 Roadmap 573280"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=573280"
    kind: "roadmap"
videos: []
related: ["m365-copilot-copilot-chat-in-outlook-expands-to-reason-over-inbox-calendar-and-enterprise","microsoft-teams-m365-admin-centers-manage-teams-apps-that-work-on-outlook-and-m365-app","app-management"]
controls:
  - governs: "Whether the Copilot app is blocked in Outlook and the Microsoft Copilot application"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Integrated Apps > Available Apps > app > Block app"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    api: null
    note: "Global Administrator only. Learn says the CoPilot entry's settings apply to the Microsoft Copilot and Copilot Chat apps; it does not say they govern drafting in Outlook."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-10-02T22:01:21"
changes:
  - date: "2026-11-23"
    note: "First briefing for the GCC, GCC High and DoD web item; the Mac and Worldwide item 552595 is listed separately."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 64 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 64
  confirmed: 63
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "0d7febf632fec5658e7d3c68e7260aa7"
---

## What's changing

The roadmap item says that in Outlook, Copilot works side by side with users to draft, refine and format emails conversationally, powered by the same agentic capabilities available in Word, Excel and PowerPoint. This item (573280) covers the Web platform in GCC, GCC High and DoD. Its status is In development, the release phase is General Availability and the target is November CY2026. That is a target, not a shipped date.

Microsoft lists the same feature under a second roadmap item, 552595, for Worldwide (Standard Multi-Tenant) on Mac. That item shows Rolling out, a May CY2026 target and a February CY2026 preview date. Treat the two as separate entries with separate clouds and platforms.

Microsoft Learn has no page for this feature at the time of writing (November 2026), so what follows about behaviour is the roadmap's description. The roadmap does not say where the conversation happens, what Copilot can change in a draft, or whether the user approves each change. Learn's service description lists Copilot in Outlook as available in GCC, GCC High and DoD, with a footnote that Schedule with Copilot and Themes by Copilot are not yet available there. The same table lists Word, Excel, and PowerPoint Agents as not currently available in those three clouds. The roadmap ties this feature to those agentic capabilities, so how the two fit together in government clouds is an open question.

## Why it matters

This changes how users compose mail in government-cloud tenants that already have Copilot in Outlook. Microsoft has not stated what happens on arrival, and no source says existing behaviour is switched off, so plan on users meeting a more conversational drafting experience in Outlook on the web from about the November CY2026 target.

The practical decisions are small but real: confirm which users hold a Microsoft 365 Copilot licence, decide whether you want the Copilot app available to everyone, and tell users that they remain responsible for anything they send. Microsoft says sovereign cloud requirements can delay Copilot capabilities compared with commercial environments, so expect the date to move and watch the roadmap item rather than the calendar.

## Risk assessment

**Data exposure**
- Microsoft has not described which data the conversational drafting reads beyond the email being written. Microsoft's government cloud page says prompts, responses and generated content stay in the government cloud. Confirm in a pilot what the conversation can draw on before widening access.

**Security & identity**
- The roadmap item describes no new connector, agent or permission. The only documented admin lever found is blocking the Copilot app in Integrated Apps, which needs the Global Administrator role and has not been shown to govern this feature.

**Autonomy & actions**
- The roadmap says Copilot drafts, refines and formats emails alongside the user. It does not say whether Copilot applies edits itself, whether the user approves them, or whether it can send. Test this before telling users what the feature does.

**Change & support**
- Expect questions about timing and gaps: government clouds can lag commercial ones, and Learn lists Word, Excel, and PowerPoint Agents as not currently available in GCC, GCC High and DoD.
- Expect confusion with item 552595, which covers Mac in Worldwide and is already rolling out.

## Cost and licensing

**Licence.** Microsoft's Copilot overview lists "Outlook: Draft emails, summarize threads, and use the coaching tips to improve clarity, sentiment and tone" among the in-app features of Microsoft 365 Copilot (Basic), which it defines as users without the Copilot add-on licence who can use Copilot capabilities inside apps. It says Microsoft 365 Copilot (Premium) includes everything in Basic. The service description says Microsoft 365 Copilot is an add-on plan with specific licensing prerequisites. No page states how conversational drafting in Outlook is divided between Basic and Premium.

**Meter.** Learn documents no price or meter for this feature at the time of writing (November 2026). The overview says some features are subject to fair use limits; it does not say whether this one is.

**Indirect costs.** Admin time for a pilot, user communication and service-desk briefing.

## Scope

**Who and where.** The roadmap lists Outlook on the Web platform, in GCC, GCC High and DoD, status In development, General Availability, target November CY2026. Microsoft lists the Mac and Worldwide variant under roadmap item 552595.

**Licences.** See Cost and licensing: the overview places Outlook email drafting in Copilot (Basic) and says Premium includes everything in Basic. How this feature is divided between them is not stated.

**Roles.** The Integrated Apps controls are available only to Global Administrators on Microsoft's page. For Copilot settings in the Microsoft 365 admin center, Microsoft's page says to use an appropriate admin role, such as AI Administrator.

**Government clouds.** Microsoft says Copilot is available in GCC, GCC High and DoD and operates within the customer's U.S. government cloud tenant, and that feature availability can lag commercial environments.

**Rollout mechanics and prerequisites.** Not stated by the roadmap or on Learn.

## Governance guidance

### Before rollout
- Check which users in the GCC, GCC High or DoD tenant hold a Microsoft 365 Copilot licence, because Learn does not yet say how this feature is divided between Basic and Premium.
- Decide whether the Copilot app should stay available to all users in Integrated Apps, using the controls row below.
- Draft a short user note that Copilot proposes drafting and formatting help and that the sender remains responsible for the final email.

### At rollout
- Pilot with a small group on Outlook on the web and record what data the conversation uses, whether edits are suggested or applied, and whether anything can be sent without the user.
- Test whether blocking the Copilot app entry in Integrated Apps removes the feature before relying on that setting.
- Brief the service desk that roadmap item 552595 covers a different platform and cloud.

### After rollout
- Re-read the Microsoft Copilot service description feature table for the Copilot in Outlook footnote and the Word, Excel, and PowerPoint Agents row.
- Check the roadmap item and Message center for a default state, licence statement or admin control, and update this assessment when one appears.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Copilot app is blocked in Outlook and the Microsoft Copilot application</strong><br><small>Tenant</small><br><small class="controls__note">Global Administrator only. Learn says the CoPilot entry's settings apply to the Microsoft Copilot and Copilot Chat apps; it does not say they govern drafting in Outlook.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Integrated Apps › Available Apps › app › Block app <a href="https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The Copilot entry in Integrated Apps is the only admin lever found, and Microsoft's page does not say it governs drafting in Outlook, so treat it as a broad block and test it. Blocking applies to all users, overrides earlier deployments and installations in Outlook and the Microsoft Copilot application, and needs the Global Administrator role.

The Microsoft 365 admin center Copilot > Settings page lists no entry specific to drafting in Outlook at the time of writing (November 2026). Microsoft Graph documents a beta call that blocks a Copilot package, but it needs a Microsoft Agent 365 licence, its page marks US Government L4 and L5 (DOD) as not supported, and Learn does not say it covers the Copilot app entry, so it is not listed as the API side.

## Open questions

- What can Copilot change in a draft, does the user approve each change, and can it send? Watch for a Learn page on Copilot in Outlook and the roadmap item.
- Which licence covers conversational drafting: Microsoft 365 Copilot (Basic) or the Premium add-on? Watch the Copilot overview and the service description.
- Will the feature reach GCC, GCC High and DoD together, given that Learn lists Word, Excel, and PowerPoint Agents as not currently available there? Watch the service description feature table.
- Is it on by default, and does any admin setting, including the Integrated Apps block, switch it off? Watch Message center.

<!-- rationale
risk: Low. The roadmap describes Copilot helping users draft, refine and format their own emails and names no new connector, agent or permission, though Microsoft has not described what data the conversation reads.
cost: Low. Microsoft's Copilot overview lists Outlook email drafting among the in-app features of Microsoft 365 Copilot (Basic); the only cost shown is admin time, and no licence or meter specific to this feature is published.
impact: Medium. Users who compose email in Outlook on the web with Copilot in GCC, GCC High and DoD tenants would notice a changed drafting experience; the roadmap item names no other audience.
-->

<!-- verifier-findings (2026-11-23, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Scope; front matter: changes / record: Roadmap item 552595 describes the same conversational email drafting feature separately. | Found: "id": 552595, "title": "Outlook: Draft, edit and format emails conversationally with Copilot in Outlook" | Fix: Add a roadmap source titled 'Microsoft 365 Roadmap 552595' with URL https://www.microsoft.com/microsoft-365/roadmap?id=552595 for the separate entry discussed in What's changing.
- [contradicted, minor] Governance guidance: Before rollout / consistency: The checklist tells administrators to check user Copilot licence assignments, but the controls table contains no licence-assignment row. | Found: Check which users in the GCC, GCC High or DoD tenant hold a Microsoft 365 Copilot licence ... Controls table: Whether the Copilot app is blocked in Outlook and the Microsoft Copilot application. | Fix: Remove the 'Check which users in the GCC, GCC High or DoD tenant hold a Microsoft 365 Copilot licence' bullet from Before rollout: that control has no table row. Do not add a row.
-->
