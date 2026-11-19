---
title: "Outlook: send local Word, Excel and PowerPoint files by email from the new Outlook for Windows"
slug: "outlook-share-word-excel-and-powerpoint-local-files-via-the-new-outlook-for-windows"
roadmapId: 557675
topic: "modern-work"
products: ["Outlook"]
summary: "Users of the new Outlook for Windows will be able to email a copy of a locally stored Word, Excel or PowerPoint file. Microsoft says it is on by default and no admin action is required; rollout starts mid-January 2027."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Desktop"]
targetDate: "January CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft Learn says using the new Outlook with an organisational address needs a plan that includes the desktop Microsoft 365 apps. No licence, price or meter specific to this feature is published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["outlook","exchange","word","excel","powerpoint","user-experience","adoption","gcc"]
sources:
  - title: "Microsoft 365 Roadmap 557675"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=557675"
    kind: "roadmap"
  - title: "MC1245222: (Updated) Outlook: Share Word, Excel and PowerPoint local files via the new Outlook for Windows"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1245222"
    kind: "message-center"
  - title: "Licensing in new Outlook for Windows"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/licensing-options"
    kind: "learn"
  - title: "Enable or disable access to Outlook for Windows"
    url: "https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/enable-disable-employee-access-new-outlook"
    kind: "learn"
  - title: "Overview of the new Outlook for Windows"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/overview-new-outlook-windows"
    kind: "learn"
  - title: "Control Installing and Using New Outlook"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/control-install"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Whether a mailbox can use the new Outlook for Windows at all (existing control, not specific to this feature)"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CASMailbox -Identity <MailboxIdentity> -OneWinNativeOutlookEnabled $false"
      docs: "https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/enable-disable-employee-access-new-outlook"
    note: "Exchange Online PowerShell. Blocks the whole app for the mailbox, so it removes this feature with it. Set-OwaMailboxPolicy takes the same parameter per policy."
  - governs: "A switch for sending local Office files from the new Outlook alone"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft's notice says there is no change to existing admin controls or policies."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-11-05T00:00:11"
changes:
  - date: "2026-11-19"
    note: "First briefing for this item: covers the roadmap target, the updated Message Center timeline and the existing mailbox-access control."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 52 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-19"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 52
  confirmed: 50
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "ede03d1b7a2bf16d208a9aed50a42bc5"
---

## What's changing

Microsoft plans to let users of the new Outlook for Windows send a copy of a locally stored Word, Excel or PowerPoint file by email while the file is open. The roadmap item describes it as sending "a copy of the locally stored file by email through the new Outlook for Windows".

Microsoft's notice MC1245222 gives the detail that matters to administrators: it affects users working with local files (not files stored in OneDrive) and organisations moving to the new Outlook for Windows, the feature is on by default, no admin action is required, and there is no change to existing admin controls or policies. The notice adds that all existing Outlook and Exchange policies continue to apply. Microsoft Learn does not describe this feature at the time of writing (November 2026), so what follows about its behaviour is the roadmap item and the notice.

The notice, updated on 4 November 2026, moved the timeline. Worldwide rollout is to begin in mid-January 2027 (previously early November 2026) and finish in mid-February 2027 (previously early December 2026). GCC rollout is to begin in late February 2027 (previously mid-January) and finish in late March 2027 (previously mid-February). The roadmap item is "In development" with a target of January CY2027 and lists Worldwide (Standard Multi-Tenant) and GCC for the Desktop platform; its single target date does not show the later GCC dates in the notice.

## Why it matters

This arrives without anyone choosing it: the notice says it is on by default, so users of the new Outlook for Windows who send local Office files by email will see a new route from the open file. The notice says no admin action is required, and the feature adds nothing to administrators' controls. The change therefore needs communication and a decision about how comfortable you are with it, more than configuration.

The practical effect for service owners is support load and policy confidence. Microsoft's notice suggests informing help desk staff and updating internal documentation that refers to classic Outlook workflows. Because Microsoft states that existing Outlook and Exchange policies continue to apply, treat the rollout as a prompt to confirm that the mail policies you already depend on behave as expected for messages that start from an Office app.

## Risk assessment

**Data exposure**
- The feature lets a user email a copy of a locally stored Office file. Microsoft's notice identifies no new data access and no compliance considerations, and says existing Outlook and Exchange policies continue to apply; the controls that cover the resulting email are the ones you already run on Exchange Online.

**Security & identity**
- No change to identity or sign-in is described in the roadmap item or the notice.

**Autonomy & actions**
- No autonomous behaviour is described: the roadmap item describes users sending a copy of a file they are working in.

**Change & support**
- The feature is on by default, and Microsoft Learn documents no setting that switches it off on its own. Expect questions from users who move from classic Outlook, which the notice links to feature parity between classic and new Outlook for Windows.
- The timeline has already moved once (the notice was updated on 4 November 2026), so plan against the notice's current window rather than the earlier one.
- Users on the new Outlook are the audience; the Learn licensing page says Microsoft 365 accounts with a Frontline licence cannot be added to the new Outlook, so those users are outside the feature as far as that page goes.

## Cost and licensing

No licence, meter or price specific to this feature is published at the time of writing (November 2026). The roadmap item and Message Center notice MC1245222 mention none.

The licence that applies to the new Outlook itself is on Microsoft's licensing page: to use the Outlook for Windows desktop app (classic or new) with a Microsoft 365 organisational email address, you need a plan that includes the desktop versions of the Microsoft 365 apps (page: Licensing in new Outlook for Windows). That page lists Frontline-licensed accounts as not supported in the new Outlook.

The indirect costs the sources show are admin time: briefing the help desk and updating documentation that references classic Outlook workflows, both of which the notice suggests.

## Scope

**Who:** users of the new Outlook for Windows who work with locally stored Word, Excel or PowerPoint files, per the notice. Files stored in OneDrive are outside the description.

**Clouds and platform:** the roadmap item lists Worldwide (Standard Multi-Tenant) and GCC, on the Desktop platform, at the General Availability phase. Rollout windows per the notice: Worldwide from mid-January 2027 to mid-February 2027; GCC from late February 2027 to late March 2027.

**Rollout:** Microsoft Learn says new Outlook for Windows features are flighted to different release rings and that some tenants or users can opt into Targeted release. Which ring this feature uses is not stated.

**Prerequisites:** the new Outlook for Windows, with a plan that includes the desktop Microsoft 365 apps. Other prerequisites are not yet published.

## Governance guidance

### Before rollout
- Identify who uses the new Outlook for Windows by checking the OneWinNativeOutlookEnabled value on mailboxes (see the first controls row); blank or True means access is enabled.
- Decide whether the notice's "no action required" suits you, given that no control specific to this feature is documented, and record the decision with the service owner.
- Brief help desk staff on the new route, as Microsoft's notice suggests.
- Update internal documentation that references classic Outlook workflows, as the notice suggests.

### At rollout
- Watch for the rollout window in MC1245222: Worldwide mid-January 2027 to mid-February 2027, GCC late February 2027 to late March 2027.
- Test with a pilot user that a message started from an open local Office file is covered by the Exchange Online policies you already rely on.

### After rollout
- Review help desk tickets for questions from users who moved from classic Outlook.
- Re-read MC1245222 and the Microsoft Learn pages for new Outlook for Windows, since the timeline has already changed once.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a mailbox can use the new Outlook for Windows at all (existing control, not specific to this feature)</strong><br><small>User</small><br><small class="controls__note">Exchange Online PowerShell. Blocks the whole app for the mailbox, so it removes this feature with it. Set-OwaMailboxPolicy takes the same parameter per policy.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CASMailbox -Identity &lt;MailboxIdentity&gt; -OneWinNativeOutlookEnabled $false</code> <a href="https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/enable-disable-employee-access-new-outlook" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>A switch for sending local Office files from the new Outlook alone</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft's notice says there is no change to existing admin controls or policies.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft's notice says there is no change to existing admin controls or policies, and Microsoft Learn documents no setting specific to this feature at the time of writing (November 2026). The first row is the documented control over whether a mailbox can use the new Outlook for Windows at all. It is an existing control and not a switch for this feature: the Learn page says the cmdlets determine whether users can open their work or school mailboxes in Outlook for Windows. Disabling a mailbox there removes the new Outlook for that account, and with it this feature.

The same Learn page documents `Set-OwaMailboxPolicy -Identity <PolicyIdentity> -OneWinNativeOutlookEnabled $false` for the same decision by Outlook on the web mailbox policy; it applies to all current and future mailboxes that have the policy. The permission needed is the "Outlook on the web mailbox policies" entry in Feature permissions in Exchange Online. The page also says these cmdlets do not affect the Try the new Outlook toggle in classic Outlook.

## Open questions

- Will Microsoft document a setting, policy or Outlook on the web mailbox policy option that turns this feature off on its own? Watch MC1245222 and the new Outlook pages on Microsoft Learn.
- Which release ring will the feature use, and will it appear in Targeted release first? The notice gives rollout windows but not the ring.
- Does the feature carry a licence or prerequisite of its own beyond a plan that includes the desktop Microsoft 365 apps? None is published.
- Why does the roadmap item give a single January CY2027 target when the notice gives later GCC dates, and will the roadmap be updated to match?

<!-- rationale
risk: Low. Microsoft's notice says there is no change to existing admin controls and that all existing Outlook and Exchange policies continue to apply; no new data access is described.
cost: Low. No licence, meter or price is published for this feature; the only cost the sources show is admin time for help desk briefing and updating documentation.
impact: Medium. Users of the new Outlook for Windows who work with locally stored Office files will notice it, and Microsoft's notice says it is on by default.
-->

<!-- verifier-findings (2026-11-19, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Scope: Rollout; Open questions: release ring / absence: Which release ring this feature uses, including whether Targeted Release comes first, is not stated. | Found: In new Outlook, new features become available first in Targeted Release for 30 days and then are rolled out to Standard Release (General Availability). | Fix: Replace 'Which ring this feature uses is not stated' with 'Microsoft documents the general new Outlook sequence as Targeted Release for 30 days, then Standard Release (General Availability); MC1245222 gives General Availability windows but no feature-specific Targeted Release dates.' Replace the release-ring Open question with 'What are the feature-specific Targeted Release dates? MC1245222 does not give them.' Cite https://learn.microsoft.com/microsoft-365-apps/outlook/manage/manage-updates-new-outlook-windows. | Source: https://learn.microsoft.com/microsoft-365-apps/outlook/manage/manage-updates-new-outlook-windows
- [contradicted, blocker] Governance guidance: Before rollout, first bullet / applicability: Checking OneWinNativeOutlookEnabled identifies who uses new Outlook for Windows. | Found: The default value for the OneWinNativeOutlookEnabled parameter on both cmdlets is blank ($null), which is equivalent to the value $true (users aren't restricted from accessing their work or school mailboxes using Outlook for Windows). | Fix: Replace the first Before rollout bullet with 'Review the OneWinNativeOutlookEnabled mailbox access setting (see the first controls row); Microsoft documents True or blank as access enabled. This setting describes access permission, not actual usage.' The source is https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/enable-disable-employee-access-new-outlook. | Source: https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/enable-disable-employee-access-new-outlook
-->
