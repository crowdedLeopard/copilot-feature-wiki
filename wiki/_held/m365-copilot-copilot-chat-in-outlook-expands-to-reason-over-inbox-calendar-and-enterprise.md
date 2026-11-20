---
title: "Microsoft Copilot Chat in Outlook: reasoning over inbox, calendar and enterprise data (GCC, GCC High, DoD)"
slug: "m365-copilot-copilot-chat-in-outlook-expands-to-reason-over-inbox-calendar-and-enterprise"
roadmapId: 554934
topic: "m365-copilot"
products: ["Outlook","Microsoft Copilot (Microsoft 365)"]
summary: "Copilot Chat in Outlook widens from one email thread to the whole inbox, calendar and enterprise data for users without a Copilot licence in GCC, GCC High and DoD. Prepare DLP and app-availability settings before it reaches users."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "October CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "high"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft's Copilot requirements page says Copilot Chat is available to users with an eligible Microsoft 365 subscription and that a Microsoft Copilot licence is not required for eligible users. No price or meter specific to this expansion is published."
audiences: ["m365-admin","security","compliance","change-adoption"]
tags: ["copilot-chat","outlook","m365-copilot","unlicensed-users","enterprise-data-protection","dlp","sensitivity-labels","oversharing","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 554934"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=554934"
    kind: "roadmap"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Microsoft Copilot requirements"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements"
    kind: "learn"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Microsoft Copilot service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot"
    kind: "learn"
  - title: "Understand Microsoft U.S. government cloud environments for Microsoft 365 and Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/gov-overview"
    kind: "learn"
  - title: "Manage Copilot Chat"
    url: "https://learn.microsoft.com/copilot/manage/manage-copilot-chat"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
  - title: "Pin Microsoft Copilot Chat in the Microsoft 365 apps"
    url: "https://learn.microsoft.com/copilot/implement/pin-copilot-chat-navbar"
    kind: "learn"
  - title: "Microsoft Copilot and on-premises mailboxes"
    url: "https://learn.microsoft.com/exchange/hybrid-deployment/exchange-hybrid-and-copilot-behaviour"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Which users can install the Copilot app that provides Copilot Chat in Outlook (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    kind: "learn"
  - title: "Which labelled or external email Copilot Chat may use as grounding (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about"
    kind: "learn"
  - title: "Which labelled or external email Copilot Chat may use as grounding (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-loss-prevention-to-restrict-processing-external-emails-in-m365-copi","outlook-new-copilot-entry-point-in-classic-outlook","microsoft-teams-m365-admin-centers-manage-teams-apps-that-work-on-outlook-and-m365-app","sensitivity-labels"]
controls:
  - governs: "Which users can install the Copilot app that provides Copilot Chat in Outlook"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Integrated Apps > Available Apps > app > Edit Users > Specific users/group in the organization can install"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    api: null
    note: "Global Administrator only. The Copilot entry applies to both the Copilot and Copilot Chat apps. Availability does not change apps an admin has deployed."
  - governs: "Whether the Copilot app is blocked in Outlook, the Copilot app and the web"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Integrated Apps > Available Apps > app > Block app"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    api: null
    note: "Global Administrator only. Blocks the Copilot app across the Copilot app, Outlook and the web, including users with a Microsoft 365 Copilot licence."
  - governs: "Which labelled or external email Copilot Chat may use as grounding"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Loss Prevention > Policies > Create policy > Custom template > Custom policy > Locations > Microsoft Copilot, Copilot Chat, and Copilot Cowork"
      docs: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about"
    api:
      kind: "powershell"
      call: "New-DLPComplianceRule -Name \"Copilot Rule\" -Policy \"Copilot Policy\" -AdvancedRule $advrule -RestrictAccess @(@{setting=\"ExcludeContentProcessing\";value=\"Block\"})"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy"
    note: "Label rules cover emails sent on or after January 1, 2025, not calendar invites; the external-email condition is preview. The call is the policy page's example for a Microsoft 365 Copilot policy."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-10-29T23:01:00"
changes:
  - date: "2026-11-20"
    note: "First briefing for the GCC, GCC High and DoD roadmap item; the Worldwide item 531910 is listed separately and has no briefing yet."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 82 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-20"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 82
  confirmed: 78
  unconfirmed: 2
  contradicted: 2
  attempts: 1
  hash: "ed6c646973be53de1e72f065b98129bf"
---

## What's changing

Copilot Chat in Outlook is expanding from reasoning over a single email thread to reasoning over a user's entire inbox, calendar, meetings and other enterprise data that is already available to them through Microsoft 365. The roadmap item aims this at Microsoft 365 Copilot Chat users without a Microsoft 365 Copilot licence. This item covers GCC, GCC High and DoD on Android, Desktop, iOS, Mac and Web. Microsoft lists the same feature under a second roadmap item, 531910, for Worldwide (Standard Multi-Tenant), which the roadmap shows as Launched with a January CY2026 target.

The detail comes from Microsoft's Learn release notes, dated 01 July 2026 and filed under roadmap ID 531910. They say users will be able to ask Copilot Chat to locate and summarise information across their mailbox, find action items and follow-ups from across email and meetings, and help manage their calendar. They also say users can take action directly in Outlook, without saying which actions.

Microsoft's pages do not agree on scope. The Microsoft Copilot overview says Copilot Chat (Basic) users can't use organizational data via Microsoft Graph and must upload content, work with open content in Teams and Outlook, or use a pay-as-you-go agent. The roadmap item and the release notes describe the wider reach. This briefing reports both and does not choose between them.

The roadmap record shows status Rolling out, General Availability, with an October CY2026 target. That target has passed and the status has not changed to Launched. Learn's service description lists Copilot in Outlook as available in GCC, GCC High and DoD, with a footnote that Schedule with Copilot and Themes by Copilot are not yet available there. No Message center post came with this roadmap record.

## Why it matters

Mailbox-wide reasoning lets a prompt reach anything a user can already open in their mailbox and calendar. The data is the user's own, but summarising and searching make forgotten, over-shared or sensitive mail much easier to find than browsing would. It reaches people who hold no Copilot licence, so licence assignment is not the way to limit it.

Microsoft has not stated what happens on arrival in a tenant where nobody acts, and no source says existing behaviour is switched off for these users. Plan on the expansion reaching Copilot Chat users in your government tenant, and decide before then which Purview DLP rules and which Integrated Apps availability setting you want in place.

## Risk assessment

**Data exposure**
- The release notes say Copilot Chat reasons over the user's entire inbox, calendar, meetings and other enterprise data already available to them, so any mail or invite a user can open can ground an answer. Purview DLP can exclude labelled email from Copilot, but its sensitivity-label rules cover emails sent on or after January 1, 2025 and don't support calendar invites.
- Microsoft's overview says Copilot Chat is protected by Enterprise Data Protection when users sign in with Microsoft Entra accounts, and its government cloud page says prompts, responses and generated content stay in the government cloud.

**Security & identity**
- Inbox reasoning means external email can become grounding material. Microsoft's DLP page offers a preview condition, Email is received from > External users, to exclude such mail and says it helps reduce the risk of prompt injection and untrusted data influence.
- Microsoft documents mailbox grounding as not supported where the primary mailbox is on-premises, so hybrid users are outside the expansion.

**Autonomy & actions**
- The release notes say users can take action directly in Outlook, and do not describe which actions. Confirm in a pilot what Copilot Chat can change in a mailbox or calendar before relying on your current approvals.

**Change & support**
- Expect support questions from users with an on-premises mailbox: Microsoft says the Copilot icon in Microsoft 365 Apps Outlook is dimmed and no experience can be called.
- Expect questions about government cloud gaps, such as Copilot Chat not being available in the Edge sidebar, and about the conflicting Microsoft guidance on what Copilot Chat can read.

## Cost and licensing

**Licence.** Microsoft's requirements page says Copilot Chat is available to users with an eligible Microsoft 365 subscription, and lists a Microsoft Copilot licence as not required for eligible users. The roadmap text and the release notes say the expansion is for users without a Microsoft 365 Copilot licence. Learn's overview adds that some Copilot Chat features are subject to fair use limits.

**Meter.** Learn documents no meter or price for this expansion at the time of writing (November 2026), so no cap or budget control applies to it.

**Indirect costs.** Admin time to write and test DLP policies and decide app availability. Microsoft's service description says Purview controls for Copilot require a licence for Microsoft Purview, available as part of Microsoft 365 G3/G5 or as a standalone. Integrated Apps controls require the Global Administrator role.

## Scope

**Who.** Microsoft 365 Copilot Chat users without a Microsoft 365 Copilot licence, per the roadmap item. Users need a work or school account in Microsoft Entra ID.

**Mailboxes.** An Exchange Online mailbox is required for experiences that use email, calendar, meeting or other mailbox data. Microsoft's pages say Copilot isn't available in group mailboxes and that mailbox grounding is not supported when the primary mailbox is on-premises.

**Clouds and platforms.** GCC, GCC High and DoD per this roadmap record; Android, Desktop, iOS, Mac and Web. Microsoft's requirements page says Copilot works with supported versions of classic Outlook and new Outlook for Windows and Mac.

**Rollout.** Status Rolling out, target October CY2026. Microsoft's government cloud page says release timing typically lags behind commercial environments and feature availability might differ.

**Roles.** AI Administrator manages Copilot settings in the Microsoft 365 admin center; Integrated Apps controls need Global Administrator; Purview roles that can edit Copilot DLP policies include Purview Data Security AI Admin.

## Governance guidance

### Before rollout
- List users who have Copilot Chat but no Microsoft 365 Copilot licence in the GCC, GCC High or DoD tenant, since the roadmap item targets them.
- Draft a Purview DLP policy in the Microsoft Copilot, Copilot Chat, and Copilot Cowork location that excludes your most sensitive labels, using the DLP row in the controls table.
- Check which users have primary mailboxes on-premises and tell them the Copilot icon in Outlook may be dimmed.
- Decide whether the Copilot app stays installable by all users or only a licensed group, using the Integrated Apps availability row.

### At rollout
- Test inbox and calendar prompts in Outlook on Desktop, Web, Mac, iOS and Android with a pilot group that has no Copilot licence.
- Confirm that labelled mail is excluded and note that calendar invites are not covered by the label rule.
- Brief the service desk on the on-premises mailbox behaviour and the government cloud differences.

### After rollout
- Re-read the Microsoft Copilot overview and the release notes for changes to what Copilot Chat can read.
- Review the DLP policy again when Microsoft moves the external-email condition out of preview.
- Use the Block app row only if you accept a tenant-wide block that also affects licensed users.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users can install the Copilot app that provides Copilot Chat in Outlook</strong><br><small>Group</small><br><small class="controls__note">Global Administrator only. The Copilot entry applies to both the Copilot and Copilot Chat apps. Availability does not change apps an admin has deployed.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Integrated Apps › Available Apps › app › Edit Users › Specific users/group in the organization can install <a href="https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the Copilot app is blocked in Outlook, the Copilot app and the web</strong><br><small>Tenant</small><br><small class="controls__note">Global Administrator only. Blocks the Copilot app across the Copilot app, Outlook and the web, including users with a Microsoft 365 Copilot licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Integrated Apps › Available Apps › app › Block app <a href="https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which labelled or external email Copilot Chat may use as grounding</strong><br><small>Tenant</small><br><small class="controls__note">Label rules cover emails sent on or after January 1, 2025, not calendar invites; the external-email condition is preview. The call is the policy page's example for a Microsoft 365 Copilot policy.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Loss Prevention › Policies › Create policy › Custom template › Custom policy › Locations › Microsoft Copilot, Copilot Chat, and Copilot Cowork <a href="https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DLPComplianceRule -Name &quot;Copilot Rule&quot; -Policy &quot;Copilot Policy&quot; -AdvancedRule $advrule -RestrictAccess @(@{setting=&quot;ExcludeContentProcessing&quot;;value=&quot;Block&quot;})</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents no setting specific to this expansion at the time of writing (November 2026); the rows above are existing controls that apply to Copilot Chat as a whole.

The Integrated Apps availability setting does not change apps an admin has deployed. Microsoft's Manage Copilot Chat page says blocking through Integrated Apps is a tenant-wide control that can be scoped to specific users or groups, including licensed users, and that it applies to Copilot in the Copilot app, Teams, Outlook and Copilot Chat on the web. The Copilot > Settings > Pin Microsoft Copilot Chat page says Copilot Chat cannot be unpinned from the navigation for all tenants worldwide as of January 2026, so pinning is not a reliable control. Microsoft's Graph call to block a Copilot package needs a Microsoft Agent 365 licence, and Learn does not say it covers the Copilot app itself.

DLP policy scoping is based on the user who submits the prompt, not on the owner of the mail.

## Open questions

- Does mailbox-wide reasoning arrive switched on for Copilot Chat users in GCC, GCC High and DoD, and on what dates? Watch Message center and roadmap item 554934.
- Which of Microsoft's two descriptions applies: the Copilot overview, which says Copilot Chat (Basic) can't use organizational data via Microsoft Graph, or the release notes and roadmap, which describe inbox and calendar reasoning? Watch the Microsoft Copilot overview page.
- Which actions can Copilot Chat take directly in Outlook, and do they need user confirmation? Watch the Copilot Chat in Outlook documentation.
- Is there an admin setting that keeps Copilot Chat in Outlook to the open item for unlicensed users? Watch the Copilot > Settings page.
- Will Purview DLP for Copilot extend to calendar invites? Watch the DLP for Copilot page.

<!-- rationale
risk: Medium. Copilot Chat in Outlook moves from one email thread to the whole inbox and calendar, within data users can already reach; Purview DLP and app availability settings mostly cover it but need configuring.
cost: Low. The roadmap text and Microsoft's requirements page say no Microsoft 365 Copilot licence is needed, so the cost is admin time plus any Purview licence used for DLP. Learn documents no meter or price for this expansion at the time of writing.
impact: High. It changes what Copilot Chat in Outlook can answer from for users who have Copilot Chat but no Microsoft 365 Copilot licence, on desktop, web and mobile.
-->

<!-- verifier-findings (2026-11-20, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Why it matters; Risk assessment: Data exposure / behaviour: Anything a user can open in their mailbox or calendar can ground an answer. | Found: Identified items still appear in the citations of the response, but Copilot and Cowork don't access or use the content of the item in the response. | Fix: Replace 'Mailbox-wide reasoning lets a prompt reach anything a user can already open in their mailbox and calendar' with 'Mailbox-wide reasoning can use inbox and calendar data already available to the user, subject to applicable data-protection restrictions.' Remove 'so any mail or invite a user can open can ground an answer' from Data exposure. The cited DLP page documents accessible labelled emails whose content is excluded. | Source: https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about
- [unsupported, blocker] Risk assessment: Security & identity / availability: Hybrid users are outside the expansion. | Found: Searched: Exchange hybrid deployment Exchange Online mailboxes Copilot Chat supported. Read exchange-hybrid-and-copilot-behaviour, microsoft-copilot-requirements and the Exchange Server hybrid deployment excerpt. The exclusion is primary mailboxes on-premises, not all hybrid users. | Fix: Replace 'so hybrid users are outside the expansion' with 'so users whose primary mailbox is hosted on-premises cannot use mailbox grounding', as documented at https://learn.microsoft.com/exchange/hybrid-deployment/exchange-hybrid-and-copilot-behaviour.
- [unsupported, blocker] Cost and licensing: Meter / cost: No cap or budget control applies to this expansion because no meter or price is documented. | Found: Searched: Copilot Chat Outlook inbox calendar reasoning price meter billing budget cap unlicensed users; "Copilot Chat" "Outlook" "billing" "inbox". Read requirements, overview, release entry, pay-as-you-go-overview and pay-as-you-go-meters. None states that no spending control applies. | Fix: Delete ', so no cap or budget control applies to it'. Keep only 'Learn documents no meter or price for this expansion at the time of writing (November 2026).' An unpublished meter does not establish the absence or inapplicability of budget controls.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; front matter: changes / record: Roadmap item 531910 describes the same Copilot Chat in Outlook expansion. | Found: 531910: Microsoft Copilot (Microsoft 365): Copilot Chat in Outlook expands to reason over inbox, calendar, and enterprise data | Fix: Add https://www.microsoft.com/microsoft-365/roadmap?id=531910 to sources as a roadmap source for the separately quoted record.
- [supported, minor] Governance controls / applicability: Manage Copilot Chat says Integrated Apps blocking can be scoped to specific users or groups. | Found: Blocking Copilot through Integrated Apps is a tenant-wide control that you can scope to specific users or groups, including licensed users. | Fix: Replace the scoping clause with: 'Manage Copilot Chat describes user/group scoping, but the Integrated Apps blocking instructions say Block app blocks all users. To retain licensed-user access, Manage Copilot Chat instead directs administrators to restrict self-install availability to a licensed group and not deploy the app to unlicensed users.' Cite https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365 and https://learn.microsoft.com/copilot/manage/manage-copilot-chat. | Source: https://learn.microsoft.com/copilot/manage/manage-copilot-chat
- [supported, minor] Governance controls / applicability: Manage Copilot Chat says Integrated Apps blocking also blocks Teams. | Found: This setting blocks Copilot in the Microsoft Copilot app, Teams, Outlook, and Copilot Chat on the web for all users. | Fix: Add: 'The Integrated Apps reference disagrees about Teams: it says the app is blocked only in Outlook and the Microsoft Copilot application, and Teams continues to honour its Teams admin center settings.' Cite https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365. | Source: https://learn.microsoft.com/copilot/manage/manage-copilot-chat
- [supported, minor] controls[2].ui / admin-path: The printed Purview route reaches the Microsoft Copilot, Copilot Chat, and Copilot Cowork policy location. | Found: Go to Data Loss Prevention > Policies and select + Create policy. Select the Custom template, then Custom policy. On the Locations page, set the Microsoft Copilot, Copilot Chat, and Copilot Cowork location to on. | Fix: Keep the documented route, but clarify its stopping point in the note: 'This route selects the policy location. Add a rule using Content contains > Sensitivity labels and Prevent Copilot and Cowork from processing content to exclude labelled items. External-email rules use Email is received from > External users and Prevent Copilot from processing content.' These further choices are documented at https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about. | Source: https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about
- [supported, minor] Governance controls / behaviour: The pinning page says Copilot Chat cannot be unpinned from navigation for all tenants worldwide as of January 2026. | Found: The Pin Copilot Chat in Microsoft 365 apps setting no longer applies to the Microsoft Copilot app, and Copilot Chat cannot be unpinned from the navigation for all tenants worldwide as of January 28, 2026. | Fix: Replace the blanket navigation statement with: 'The pinning page says this setting no longer applies to the Microsoft Copilot app. It separately says Do not pin Copilot Chat in Microsoft 365 apps is honoured in Teams and Outlook, but users can still add Copilot from their app store; pinning is therefore not an access block.' Cite https://learn.microsoft.com/copilot/implement/pin-copilot-chat-navbar. | Source: https://learn.microsoft.com/copilot/implement/pin-copilot-chat-navbar
- [contradicted, minor] front matter: action; Governance guidance / consistency: The prepare action rating fits a rolling-out expansion with medium risk and an immediate app-availability decision. | Found: action: "prepare"; status: "rolling-out"; risk: "medium"; Decide whether the Copilot app stays installable by all users or only a licensed group, using the Integrated Apps availability row. | Fix: Set action to act-now: the item is already Rolling out, expands existing users' data access, is rated medium risk, and the briefing identifies an availability decision and DLP configuration to make before it reaches users. Keep the feature-specific default as unknown.
-->
