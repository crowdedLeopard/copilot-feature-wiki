---
title: "Microsoft Teams: report suspicious guest invitations to your admin"
slug: "microsoft-teams-report-suspicious-guest-invitations"
roadmapId: 571297
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams users will be able to report a suspicious guest invitation when they decline it, and the report reaches admins. The existing Report a security concern messaging policy setting governs it; plan communication and triage."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mac","Web"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published. Neither Microsoft's notice MC1530615 nor the Teams reporting pages name a licence or meter for reporting guest invitations."
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
  - title: "Manage messaging policies in Teams"
    url: "https://learn.microsoft.com/microsoftteams/messaging-policies-in-teams"
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
      call: "Set-CsTeamsMessagingPolicy -Identity <policy> -AllowSecurityEndUserReporting $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingpolicy"
    note: "MC1530615 names this setting for the feature. The same page points to Settings & policies in the new experience. The parameter is a Boolean; $false turns it off. Learn has not confirmed it covers guest invitations."
  - governs: "Where admins review user-submitted security reports"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Analytics & reports > Protection reports > View reports > User reported security submissions"
      docs: "https://learn.microsoft.com/microsoftteams/end-user-reported-security-signal"
    api: null
    note: "Learn lists Calling, Chats and channels, and User categories and does not list guest invitations. No API for the report is documented at the time of writing (November 2026)."
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
  - date: "2026-11-16"
    note: "Corrected after verification: default state is now On (documented for Report a security concern), cmdlet syntax fixed, unsupported claims about remediation and alerting removed, and Defender licence wording reconciled."
version: 2
verification:
  status: "held"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 60
  confirmed: 57
  unconfirmed: 2
  contradicted: 1
  attempts: 2
---

## What's changing

Microsoft Teams will let users report a suspicious guest invitation, meaning an unexpected invitation to join another organisation as a guest, so that their IT admin can review it. Microsoft's notice MC1530615 says users report it when declining the invitation in Teams, and that the report is shared with their IT admin through the User reported security submissions report in the Teams admin center and with Microsoft for review.

Microsoft Learn does not describe this feature itself at the time of writing (November 2026), so its behaviour here is as the roadmap item and the notice describe it. Learn does document the reporting model it extends: users can report chat and channel messages, and can report external users while blocking them. The notice says the capability is controlled through the Report a security concern setting in the Teams messaging policy. Learn documents that setting, in the Teams admin center, as 'On' by default.

The roadmap item (ID 571297) has status In development and a target date of November CY2026. It lists General Availability and Targeted Release for Worldwide (Standard Multi-Tenant) on Desktop, Mac and Web. MC1530615, updated 3 November 2026, says rollout begins in mid-November 2026 (previously early November) and is expected to complete in mid-November 2026. It gives no act-by date and states its end date as 15 January 2027.

## Why it matters

Guest invitations let an outside party put an invitation in front of your users, and the notice names phishing and other abuse through them as the problem this addresses. Reports give a security team a signal of invitation-based phishing aimed at the organisation.

The change arrives without an admin choosing it, so plan for it. Where Report a security concern is on, users will see the option and reports will arrive; where an admin has turned it off in a policy, users on that policy cannot report. Decide who reads the new reports and what they do with them before the feature reaches users.

## Risk assessment

**Data exposure**

- A report is shared with the admin and with Microsoft (per MC1530615). For the existing User report category, Learn lists the reporter's name in the report and, in the exported CSV file, the reporter's email address, tenant ID and any comments they typed. Learn does not say what a guest-invitation report contains.

**Security & identity**

- Microsoft has not documented whether reporting triggers any automatic action on the invitation. The effect of reporting on any associated guest account in the inviting organisation is not yet documented.
- Assign an owner to review the User reported security submissions report in the Teams admin center regularly. Invitation-specific notification and alert behaviour is not yet documented.

**Autonomy & actions**

- No change: the feature is a user-initiated report, and the notice describes no autonomous action.

**Change & support**

- Report a security concern is also the setting for reporting messages and external users, and the notice names it for this feature. An admin who turned it off in a policy for another reason removes guest-invitation reporting for users on that policy as well.
- Expect user questions about what happens after they report; Microsoft has not documented the outcome for the reporter.

## Cost and licensing

Microsoft has not published a licence requirement, price or meter for reporting guest invitations. MC1530615 names no licence or charge, and the Learn page on the User reported security submissions report (microsoftteams/end-user-reported-security-signal) lists reporting settings as its prerequisites and names no licence.

Learn's pages on neighbouring reporting differ on one point. The Teams page End user reporting for Security says that in organisations with Microsoft Defender for Office 365 Plan 2 or Microsoft Defender XDR, admins can decide whether users can report malicious messages, and the Teams messaging policies page repeats that for Report a security concern. The Defender page User reported settings in Microsoft Teams says Defender for Office 365 Plan 1 or Plan 2, or Microsoft Defender XDR. Both describe message reporting, and Learn does not say whether either condition applies to guest-invitation reports.

The cost the sources do show is indirect: admin time to triage reports and to tell users what the option is for.

## Scope

The roadmap item lists Worldwide (Standard Multi-Tenant) as its only cloud, on Desktop, Mac and Web; it does not say the feature is unavailable elsewhere.

The audience is users who receive a guest invitation to another organisation, and the admins who review reports. The governing setting, Report a security concern, sits in the Teams messaging policy, and Learn says custom messaging policies can be assigned to users, so the setting can differ between users on different policies. Per MC1530615, no action is required for organisations that already have Report a security concern enabled in their Teams messaging policy.

## Governance guidance

### Before rollout

- Check the Report a security concern setting in every messaging policy in use (Teams admin center > Messaging policies), including custom policies, and record which have it off.
- Name who reviews the User reported security submissions report in the Teams admin center and how often, and confirm they can open it.
- Decide whether your Defender set-up needs to receive these reports. Learn's Defender statements cover messages, and says reporting of external users is not yet supported in Microsoft Defender; it does not address guest invitations.

### At rollout

- Tell users that they can report a suspicious guest invitation when declining it, and describe what a suspicious invitation looks like in your organisation.
- Watch Message center for further updates to MC1530615, since its timeline has already moved once.

### After rollout

- Run the User reported security submissions report each week for the first month and note whether guest-invitation reports appear under an existing report category or a new one.
- Check the reported sender and any associated guest account in your tenant before deciding on action; Learn does not describe any automatic remediation.
- Review the Report a security concern setting if report volume or false positives become a support burden, and weigh the signal lost before turning it off.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can report security concerns in Teams, including guest invitations</strong><br><small>User</small><br><small class="controls__note">MC1530615 names this setting for the feature. The same page points to Settings &amp; policies in the new experience. The parameter is a Boolean; $false turns it off. Learn has not confirmed it covers guest invitations.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Messaging policies › policy › Report a security concern <a href="https://learn.microsoft.com/microsoftteams/end-user-reporting-security" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMessagingPolicy -Identity &lt;policy&gt; -AllowSecurityEndUserReporting $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Where admins review user-submitted security reports</strong><br><small>Tenant</small><br><small class="controls__note">Learn lists Calling, Chats and channels, and User categories and does not list guest invitations. No API for the report is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Analytics &amp; reports › Protection reports › View reports › User reported security submissions <a href="https://learn.microsoft.com/microsoftteams/end-user-reported-security-signal" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>A switch for guest-invitation reporting separate from Report a security concern</strong><br><small>Tenant</small><br><small class="controls__note">None documented at the time of writing (November 2026); the notice names only the messaging policy setting.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Report a security concern is the only control the notice names, and it is shared with message and external-user reporting, so one switch covers all of them. No separate switch for guest-invitation reporting is documented at the time of writing (November 2026).

Learn describes a second setting in the Microsoft Defender portal that must be on for user-reported messages to show on the Submissions page. It also says user reporting of external users is not yet supported in Defender, and does not address guest invitations. The Learn page User reported settings in Microsoft Teams (defender-office-365/submissions-teams) covers the Defender side; this briefing gives no path for it.

The Set-CsTeamsMessagingPolicy parameter is documented as a Boolean; $false turns the setting off. Learn has not confirmed it governs guest-invitation reporting. The pages do not state the Teams admin center role needed to edit messaging policies or view the report.

## Open questions

- What exactly does a guest-invitation report contain, and which report category in the Teams admin center will show it? Watch the Learn page for the User reported security submissions report.
- Does the documented default for Report a security concern ('On' in the Teams admin center) apply unchanged to guest-invitation reporting, and does the Targeted Release phase mean some users see it first? Watch MC1530615 and the roadmap item.
- Does Microsoft Defender for Office 365 (Plan 1 or Plan 2) or Microsoft Defender XDR need to be licensed for admins to receive these reports, as Learn states for message reports? Watch the Teams and Defender Learn pages.
- What does Microsoft do with a report it receives, and what happens to the invitation or any guest account? Watch the Learn page that will describe this feature.

<!-- rationale
risk: Low. Reporting is user-initiated and adds no new access or autonomous action; the exposure is that report details go to admins and Microsoft, and the Report a security concern setting is documented as on by default.
cost: Low. The only cost the sources show is admin time to triage reports and to brief users; no licence or meter is published for guest-invitation reporting.
impact: Medium. Users who receive a guest invitation to another organisation may see the new option when declining, and whoever triages Teams reports will see new submissions.
-->

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [contradicted, blocker] Governance controls: final paragraph / absence: The cited pages do not state the Teams admin center role needed to edit the reporting messaging-policy setting. | Found: To view or configure user reporting in the Teams admin center, you need to be a member of the Global Administrator* or Teams Administrator roles. | Fix: Replace the configuration-role absence with: 'To configure user reporting in the Teams admin center, Microsoft names Teams Administrator or Global Administrator; use the least-privileged suitable role.' Cite https://learn.microsoft.com/defender-office-365/submissions-teams#user-reporting-settings-for-teams-items. Do not extend these configuration roles to report access without evidence. | Source: https://learn.microsoft.com/defender-office-365/submissions-teams
- [unsupported, minor] rationale: risk / behaviour: Guest-invitation reporting adds no new access. | Found: Searched: "Teams" "guest invitations" reporting permissions access autonomous. Read the roadmap, MC1530615 and the cited reporting pages; none explicitly establishes that this feature adds no access. The notice confirms report sharing, not an access-boundary guarantee. | Fix: Remove 'adds no new access' from the risk rationale. Ground the judgement in the verified facts instead: 'Low. Reporting is user-initiated, and the notice places it under the existing Report a security concern messaging-policy setting; reports are shared with admins and Microsoft.'
- [unsupported, minor] rationale: risk / behaviour: Guest-invitation reporting adds no autonomous action. | Found: Searched: "Teams" "guest invitation" report notification automatic remediation; "Teams" "guest invitations" reporting permissions access autonomous. Read MC1530615 and the reporting pages; they do not establish that automatic post-report actions cannot occur. | Fix: Replace the categorical 'adds no ... autonomous action' with 'the notice describes no autonomous action', matching the qualified wording in Risk assessment and retaining the open question about automatic remediation.
-->
