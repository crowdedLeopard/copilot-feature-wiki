---
title: "Microsoft Teams: report suspicious guest invitations to your admin"
slug: "microsoft-teams-report-suspicious-guest-invitations"
roadmapId: 571297
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams users will be able to report suspicious guest invitations when they decline them, and the reports reach admins. The existing Report a security concern messaging policy setting governs it; plan communication and triage."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mac","Web"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published. Neither Microsoft's notice MC1530615 nor the Learn pages on user reporting in Teams name a licence or meter for reporting guest invitations."
audiences: ["m365-admin","security","change-adoption"]
tags: ["teams","threat-detection","admin-controls","cross-tenant","policy","guest-access"]
sources:
  - title: "Microsoft 365 Roadmap 571297"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=571297"
    kind: "roadmap"
  - title: "MC1530615: (Updated) Microsoft Teams: Report guest invitations for security concerns"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1530615"
    kind: "message-center"
  - title: "End user reporting for Security"
    url: "https://learn.microsoft.com/microsoftteams/end-user-reporting-security"
    kind: "learn"
  - title: "User reported security submissions report in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/end-user-reported-security-signal"
    kind: "learn"
  - title: "Set-CsTeamsMessagingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingpolicy"
    kind: "learn"
  - title: "User reported settings in Microsoft Teams"
    url: "https://learn.microsoft.com/defender-office-365/submissions-teams"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Whether users can report security concerns in Teams, including guest invitations"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Messaging policies > policy > Report a security concern"
      docs: "https://learn.microsoft.com/microsoftteams/end-user-reporting-security"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMessagingPolicy -Identity <policy> -AllowSecurityEndUserReporting $true | $false"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingpolicy"
    note: "MC1530615 names the UI setting for this feature. The cmdlet parameter is documented for security concerns in messages; Learn has not confirmed it covers guest invitations."
  - governs: "Where admins review user-submitted security reports"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Analytics & reports > Protection reports > View reports > User reported security submissions"
      docs: "https://learn.microsoft.com/microsoftteams/end-user-reported-security-signal"
    api: null
    note: "Learn lists Calling, Chats and channels, and User categories and does not yet list guest invitations. No API for the report is documented at the time of writing (November 2026)."
  - governs: "A switch for guest-invitation reporting separate from Report a security concern"
    scope: "tenant"
    ui: null
    api: null
    note: "None documented at the time of writing (November 2026); the notice names only the messaging policy setting."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-09-16T22:57:03"
changes:
  - date: "2026-11-16"
    note: "First briefing for this item: covers the November 2026 rollout window in MC1530615 and the Report a security concern setting that governs it."
version: 1
verification:
  status: "held"
  date: "2026-11-16"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 55
  confirmed: 50
  unconfirmed: 3
  contradicted: 2
  attempts: 1
---

## What's changing

Microsoft Teams will let users report a suspicious guest invitation, meaning an unexpected invitation to join another organisation as a guest, so that their IT admin can review it. Microsoft's notice MC1530615 says users report it when declining the invitation in Teams, and that the report is shared with their IT admin through the User reported security submissions report in the Teams admin center and with Microsoft for review.

Microsoft Learn does not yet describe this feature itself at the time of writing (November 2026), so its behaviour here is as the roadmap item and the notice describe it. Learn does document the existing reporting model that it extends: users can already report chat and channel messages, and can report external users while blocking them, and those reports appear in the same Teams admin center report.

The roadmap item (ID 571297) has status In development, a target date of November CY2026, and lists General Availability and Targeted Release for Worldwide (Standard Multi-Tenant) on Desktop, Mac and Web. MC1530615, updated 3 November 2026, says rollout begins in mid-November 2026 (previously early November) and is expected to complete in mid-November 2026. It gives no act-by date and states its end date as 15 January 2027.

## Why it matters

Guest invitations let an outside party put an invitation in front of your users, and the notice describes phishing and other abuse through them as the problem this addresses. Reports give a security team a signal of invitation-based phishing aimed at the organisation.

The change arrives without an admin choosing it, so plan for it. If the Report a security concern setting is on, users will see the option and reports will arrive; if it is off, users cannot report and you lose the signal. Decide who will read the new reports and what they will do with them before the feature reaches users.

## Risk assessment

**Data exposure**

- A report is shared with the admin and with Microsoft (per MC1530615). For the existing user report types, the Learn report lists the reporter's name, email address, tenant ID and any comments they typed, so expect the same reporter details to be visible to admins. Learn does not say what a guest-invitation report contains.

**Security & identity**

- The feature reports invitations and does not block, quarantine or remove them. Microsoft has not documented any automatic action on a reported invitation, so the guest object stays in place until someone acts on it.
- The signal only helps if someone reads it. Reports appear in the Teams admin center under Analytics & reports > Protection reports, so they reach admins only if someone opens that report.

**Autonomy & actions**

- No change: the feature is a user-initiated report and nothing in the notice describes an autonomous action.

**Change & support**

- Turning off Report a security concern in a messaging policy stops users reporting messages and external users, and the notice names the same setting for this feature. An admin who disabled it for another reason will also remove guest-invitation reporting.
- Expect questions from users about what happens after they report, since Learn says message senders are not notified when their messages are reported and says nothing on this for invitations.

## Cost and licensing

Microsoft has not published a licence requirement, price or meter for reporting guest invitations. MC1530615 names no licence or charge, and the Learn page for the User reported security submissions report (microsoftteams/end-user-reported-security-signal) lists reporting settings as its only prerequisites and names no licence.

One qualification applies to the neighbouring feature. Learn says that in organisations with Microsoft Defender for Office 365 Plan 2 or Microsoft Defender XDR, admins can decide whether users can report malicious messages in Teams, and the messaging policy page repeats that for the Report a security concern setting. Learn does not say whether that licence condition applies to guest-invitation reports.

The cost the sources do show is indirect: admin time to triage reports and to tell users what the option is for.

## Scope

The roadmap item lists Worldwide (Standard Multi-Tenant) as its only cloud, on Desktop, Mac and Web; it does not say the feature is unavailable elsewhere.

The audience is users who receive a guest invitation to another organisation, and the admins who review reports. The setting that governs it, Report a security concern, is part of the Teams messaging policy, so it can differ between users who hold different policies. Per MC1530615, no action is required for organisations that already have Report a security concern enabled in their Teams messaging policy.

## Governance guidance

### Before rollout

- Check the Report a security concern setting in every messaging policy in use (Teams admin center > Messaging policies), including custom policies assigned to groups, and record which policies have it off.
- Name who will review the User reported security submissions report in the Teams admin center and how often, and confirm they can open it.
- Decide whether your Defender for Office 365 or Defender XDR set-up is expected to receive these reports; Learn's Defender statements cover messages, and not guest invitations.

### At rollout

- Tell users in advance that they can report a suspicious guest invitation when declining it, and what a suspicious invitation looks like in your organisation.
- Watch Message center for further updates to MC1530615, since its timeline has already moved once.

### After rollout

- Run the User reported security submissions report weekly for the first month and note whether guest-invitation reports appear under an existing category or a new one.
- Act on reports by checking the reported sender and, where an invitation was accepted, the guest account it created.
- Review the Report a security concern setting again if report volume or false positives become a support burden, and weigh the signal lost before turning it off.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can report security concerns in Teams, including guest invitations</strong><br><small>User</small><br><small class="controls__note">MC1530615 names the UI setting for this feature. The cmdlet parameter is documented for security concerns in messages; Learn has not confirmed it covers guest invitations.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Messaging policies › policy › Report a security concern <a href="https://learn.microsoft.com/microsoftteams/end-user-reporting-security" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMessagingPolicy -Identity &lt;policy&gt; -AllowSecurityEndUserReporting $true | $false</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Where admins review user-submitted security reports</strong><br><small>Tenant</small><br><small class="controls__note">Learn lists Calling, Chats and channels, and User categories and does not yet list guest invitations. No API for the report is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Analytics &amp; reports › Protection reports › View reports › User reported security submissions <a href="https://learn.microsoft.com/microsoftteams/end-user-reported-security-signal" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>A switch for guest-invitation reporting separate from Report a security concern</strong><br><small>Tenant</small><br><small class="controls__note">None documented at the time of writing (November 2026); the notice names only the messaging policy setting.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The Report a security concern messaging policy setting is the only control the notice names, and it is shared with message and external-user reporting, so one switch covers all three. No separate switch for guest-invitation reporting is documented.

The Learn pages describe the setting in the Teams admin center and, in a second place, the Microsoft Defender portal, where a matching setting must be on for user-reported messages to show on the Submissions page. Learn says user reporting of external users is not yet supported in Defender, and does not address guest invitations. The Defender portal setting for sending reported Teams items to Microsoft is described on the Learn page User reported settings in Microsoft Teams (defender-office-365/submissions-teams); this briefing does not give its path, and whether it applies to guest-invitation reports is not documented.

The Set-CsTeamsMessagingPolicy parameter is documented for reporting security concerns posted in messages; Learn has not confirmed it governs guest-invitation reporting. The page does not state the Teams admin center role needed to edit messaging policies or view the report.

## Open questions

- What exactly does a guest-invitation report contain, and which report category in the Teams admin center will show it? Watch the Learn page for the User reported security submissions report.
- Is the Report a security concern setting on by default for this capability, and does the roadmap's Targeted Release phase mean some users see it before others? Watch MC1530615 and the roadmap item.
- Does Microsoft Defender for Office 365 Plan 2 or Defender XDR need to be licensed for admins to receive these reports, as Learn states for message reports? Watch the Teams and Defender Learn pages.
- What does Microsoft do with a report it receives, and is the reporter told the outcome? Watch the Learn page that will describe this feature.

<!-- rationale
risk: Low. The feature adds a user-side reporting route and no new access or autonomous action; its default state is not stated, so this rates today's behaviour continuing, with reports going to admins and to Microsoft.
cost: Low. The only cost the sources show is admin time to triage reports; no licence or meter is named in the notice or the Learn pages read, and licensing for this feature is not yet published.
impact: Medium. Any user who receives a guest invitation may see the new option when declining, and the team that triages Teams reports will see new submissions.
-->

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] controls[0].ui; Governance controls; Governance guidance: Before rollout / admin-path: The cited Teams page gives Teams admin center > Messaging policies > policy > Report a security concern. | Found: In the left navigation, select Messaging policies.
3. Select a policy.
4. Turn on the setting: Report a security concern. | Fix: Keep the cited path, but add that the same page directs the new experience to Settings & policies. The cited Defender page gives Settings & policies > Global (Org-wide) default settings or Custom policies for users & groups > Messaging > Messaging > policy > Report a security concern. | Source: https://learn.microsoft.com/microsoftteams/end-user-reporting-security
- [contradicted, blocker] controls[0].api; Governance controls: first table row / command: Set-CsTeamsMessagingPolicy -Identity <policy> -AllowSecurityEndUserReporting $true | $false is the automation call. | Found: [-AllowSecurityEndUserReporting <Boolean>]
This setting determines if users can report any security concern posted in message to their admin. Possible values: True, False | Fix: The cmdlet, MicrosoftTeams module and parameter names are real, but the parameter takes one Boolean; '| $false' is a pipeline, not alternative-value syntax in an executable call. Print 'Set-CsTeamsMessagingPolicy -Identity <policy> -AllowSecurityEndUserReporting $true' and explain separately that $false disables it. Preserve the existing guest-invitation applicability caveat. | Source: https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingpolicy
- [contradicted, blocker] front matter: defaultState; Open questions; rationale: risk / default: The default state of guest-invitation reporting is unknown. | Found: In the Teams admin center: 'On' by default and controls whether users are able to report messages and user from Teams. | Fix: Set defaultState to on and explain that this is the documented default of the existing Report a security concern control, which MC1530615 explicitly says governs guest-invitation reporting. Existing policies with the setting disabled remain an exception. Update the default-state open question and risk rationale accordingly; do not describe this as a separate new default or as overriding configured policies. | Source: https://learn.microsoft.com/microsoftteams/end-user-reporting-security
- [supported, minor] Cost and licensing; Open questions / licensing: The Teams end-user reporting page names Microsoft Defender for Office 365 Plan 2 or Microsoft Defender XDR for malicious-message reporting. | Found: In organizations with Microsoft Defender for Office 365 Plan 2 or Microsoft Defender XDR, admins can decide whether users can report malicious messages in Microsoft Teams. | Fix: Also report the disagreement with the already cited https://learn.microsoft.com/defender-office-365/submissions-teams, which names Microsoft Defender for Office 365 Plan 1 or Plan 2, or Microsoft Defender XDR. Keep both statements scoped to neighbouring reporting functionality, not guest-invitation licensing. | Source: https://learn.microsoft.com/microsoftteams/end-user-reporting-security
- [supported, minor] Cost and licensing / licensing: The messaging-policy page repeats the Plan 2 or Microsoft Defender XDR qualification for Report a security concern. | Found: Report a security concern - When this is ON, users can report malicious messages in Microsoft Teams in organizations with Microsoft Defender for Office 365 Plan 2 or Microsoft Defender XDR. | Fix: Add https://learn.microsoft.com/microsoftteams/messaging-policies-in-teams to sources, since the prose explicitly relies on it. | Source: https://learn.microsoft.com/microsoftteams/messaging-policies-in-teams
- [supported, minor] Scope / behaviour: Messaging policies can be assigned to different users, allowing reporting settings to differ between them. | Found: Users in your organization will automatically get the global policy, unless you create and assign a custom policy. | Fix: Cite https://learn.microsoft.com/microsoftteams/messaging-policies-in-teams for the user-policy scope; this is the same source addition needed for the licensing paragraph. | Source: https://learn.microsoft.com/microsoftteams/messaging-policies-in-teams
- [supported, minor] Governance guidance: Before rollout / behaviour: Custom messaging policies can be assigned to groups. | Found: You can also assign a messaging policy directly to users at scale through a batch policy assignment or to a group that the users are members of. | Fix: Add a citation for group policy assignment, for example https://learn.microsoft.com/microsoftteams/scripts/powershell-script-teams-messaging-policy-edu, or the linked policy-assignment documentation. | Source: https://learn.microsoft.com/microsoftteams/scripts/powershell-script-teams-messaging-policy-edu
- [unsupported, major] Risk assessment: Security & identity / behaviour: The feature does not block, quarantine or remove reported invitations. | Found: Searched: Teams report guest invitations automatic block quarantine remove guest object admin notification report sender notified. Read MC1530615 and the Teams reporting and Defender submissions pages; they do not establish this absence of product behaviour. | Fix: Remove the categorical statement and retain only: 'Microsoft has not documented whether reporting triggers any automatic action on the invitation.' Silence about remediation does not establish that none occurs.
- [unsupported, major] Risk assessment: Security & identity / behaviour: The guest object stays in place until someone acts on it after an invitation is reported. | Found: Searched: Teams suspicious guest invitation reporting admin alert notification guest object remains block quarantine remove invitation. Read MC1530615, Teams reporting pages and guest-access search excerpts; none establishes the guest object's lifecycle after reporting. | Fix: Remove 'so the guest object stays in place until someone acts on it'. Replace it with 'The effect of reporting on any associated guest object is not yet documented.' Do not extend ordinary guest-removal documentation to this reporting flow.
- [unsupported, major] Risk assessment: Security & identity / behaviour: Reports reach admins only if someone opens the Teams admin center report. | Found: Searched: Teams suspicious guest invitation reporting admin alert notification guest object remains block quarantine remove invitation. Read MC1530615, end-user-reported-security-signal and submissions-teams; none states that opening this report is the only notification or discovery route. | Fix: Replace the exclusivity claim with advice: 'Assign an owner to review the Teams admin center report regularly; invitation-specific notification and alert behaviour is not yet documented.' Do not carry over Defender alerts for messages or calls either.
- [supported, minor] Governance guidance: After rollout / behaviour: A Teams guest invitation can be associated with a guest account created for the invited person. | Found: When you invite a guest to Teams, a guest account is created for them in Microsoft Entra ID | Fix: Cite https://learn.microsoft.com/microsoftteams/guest-access if retaining the guest-account premise. Prefer 'any associated guest account in the inviting organisation' to avoid implying that accepting creates the account or that the recipient's home admin owns that account. | Source: https://learn.microsoft.com/microsoftteams/guest-access
-->
