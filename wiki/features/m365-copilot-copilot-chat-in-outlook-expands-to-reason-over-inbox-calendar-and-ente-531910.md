---
title: "Microsoft Copilot Chat in Outlook: reasoning over inbox, calendar and enterprise data (Worldwide)"
slug: "m365-copilot-copilot-chat-in-outlook-expands-to-reason-over-inbox-calendar-and-ente-531910"
roadmapId: 531910
topic: "m365-copilot"
products: ["Outlook","Microsoft Copilot (Microsoft 365)"]
summary: "Copilot Chat in Outlook expands from one email thread to the whole inbox, calendar and enterprise data for users without a Microsoft 365 Copilot licence in Worldwide tenants. It is Launched: set Purview DLP and Copilot app availability now."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "January CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "high"
defaultState: "unknown"
action: "act-now"
licensing:
  model: "included"
  notes: "Microsoft's requirements page says Copilot Chat is available to users with an eligible Microsoft 365 subscription and that a Microsoft Copilot licence is not required for eligible users. No price or meter specific to this expansion is published."
audiences: ["m365-admin","security","compliance","change-adoption"]
tags: ["copilot-chat","outlook","m365-copilot","unlicensed-users","dlp","sensitivity-labels","oversharing","enterprise-data-protection","app-management"]
sources:
  - title: "Microsoft 365 Roadmap 531910"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=531910"
    kind: "roadmap"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Privacy and protections"
    url: "https://learn.microsoft.com/copilot/plan/privacy-and-protections"
    kind: "learn"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Microsoft Copilot requirements"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements"
    kind: "learn"
  - title: "Manage Copilot Chat"
    url: "https://learn.microsoft.com/copilot/manage/manage-copilot-chat"
    kind: "learn"
  - title: "Microsoft Copilot and on-premises mailboxes"
    url: "https://learn.microsoft.com/exchange/hybrid-deployment/exchange-hybrid-and-copilot-behaviour"
    kind: "learn"
  - title: "Restrict discovery of SharePoint sites and content"
    url: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Which users can self-install the Copilot app that provides Copilot Chat in Outlook (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    kind: "learn"
  - title: "Which sensitivity-labelled emails and files Copilot Chat may use in responses (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about"
    kind: "learn"
  - title: "Which sensitivity-labelled emails and files Copilot Chat may use in responses (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy"
    kind: "learn"
videos: []
related: ["m365-copilot-copilot-chat-in-outlook-expands-to-reason-over-inbox-calendar-and-enterprise","sensitivity-labels","app-management","m365-copilot-access-copilot-chat-in-your-m365-apps","restricted-content-discovery"]
controls:
  - governs: "Which users can self-install the Copilot app that provides Copilot Chat in Outlook"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Integrated Apps > Available Apps > app > Users > Specific users/group in the organization can install"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    api: null
    note: "Global Administrator only. Applies to both the Microsoft Copilot and Copilot Chat apps. Does not change apps an admin has deployed."
  - governs: "Whether the Copilot app is blocked in Outlook and the Microsoft Copilot app for the whole organisation"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Integrated Apps > Available Apps > app > Block app"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    api: null
    note: "Global Administrator only. Blocks all users, including those assigned a Microsoft 365 Copilot licence."
  - governs: "Which sensitivity-labelled emails and files Copilot Chat may use in responses"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Loss Prevention > Policies > Create policy > Custom template > Custom policy > Locations > Microsoft Copilot, Copilot Chat, and Copilot Cowork > Add a rule > Content contains > Sensitivity labels"
      docs: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about"
    api:
      kind: "powershell"
      call: "New-DLPComplianceRule -Name \"Copilot Rule\" -Policy \"Copilot Policy\" -AdvancedRule $advrule -RestrictAccess @(@{setting=\"ExcludeContentProcessing\";value=\"Block\"})"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy"
    note: "Set the action Prevent Copilot and Cowork from processing content. Covers emails sent on or after January 1, 2025, not calendar invites. The call is the reference's example for a Microsoft 365 Copilot policy."
  - governs: "A setting that keeps Copilot Chat in Outlook to the open message for users without a Copilot licence"
    scope: "tenant"
    ui: null
    api: null
    note: "Not documented at the time of writing (November 2026). Use the Copilot app availability and DLP rows above instead."
confidence: "medium"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-04-24T22:00:04"
changes:
  - date: "2026-11-28"
    note: "First briefing for the Worldwide roadmap item 531910; the GCC, GCC High and DoD item 554934 has its own page."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 81 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 81
  confirmed: 79
  unconfirmed: 0
  contradicted: 2
  attempts: 0
  hash: "9f9761b22155cf65c2692b9afa1500d4"
---

## What's changing

Copilot Chat in Outlook is expanding from the open email thread to the user's whole mailbox and calendar, for people who use Copilot Chat without a Microsoft 365 Copilot licence. Microsoft's release notes (entry dated July 01, 2026, filed under roadmap ID 531910) say Copilot Chat in Outlook "for affected users will expand from reasoning over a single email thread to reasoning over the user's entire inbox, calendar, meetings, and other enterprise data that is already available to them through Microsoft 365", without requiring a Microsoft 365 Copilot licence. Users can ask it to locate and summarise information across their mailbox, uncover action items and follow-ups from email and meetings, and help manage their calendar. The notes also say users can take action directly in Outlook, without listing the actions.

Microsoft's Privacy and protections page describes the reach. Copilot Chat in Outlook can access the user's emails, calendar, meetings, chats and files, with files limited to the user's OneDrive and other OneDrive files they can access, files from frequently visited SharePoint sites, files shared directly with them, and files they have viewed, edited or created. This data is accessed via lexical indexing; the page says full work data through Work IQ and semantic indexing is only available for users with the Microsoft Copilot licence.

Microsoft's pages do not all agree. The Microsoft Copilot overview says Copilot Chat (Basic) users can't use organisational data via Microsoft Graph and must upload content, work with open content in Teams and Outlook, or use a pay-as-you-go agent. This briefing reports both descriptions.

The roadmap record shows this item as Launched, General Availability, for Worldwide (Standard Multi-Tenant) on Android, Desktop, iOS, Mac and Web, with a January CY2026 target. Microsoft lists the same feature for GCC, GCC High and DoD under roadmap item 554934, covered in [its own briefing](/features/m365-copilot-copilot-chat-in-outlook-expands-to-reason-over-inbox-calendar-and-enterprise/). No Message center post was supplied with this item.

## Why it matters

For users without a Copilot licence, Copilot Chat in Outlook moves from the message in front of them to their whole mailbox and calendar plus a bounded set of OneDrive and SharePoint files. The content is the user's own or already shared with them, but searching and summarising make forgotten, misfiled or over-shared material easy to surface, and external email in the inbox becomes material Copilot reasons over. Because the expansion is aimed at people without a Microsoft 365 Copilot licence, licence assignment is not the lever that limits it.

Microsoft has not stated whether the expansion arrived on by default or whether tenants can turn it off on its own; the roadmap shows it as Launched. Plan on it being in front of Copilot Chat users already, and decide now which Purview DLP rules and which Copilot app availability setting you want in place.

## Risk assessment

**Data exposure**
- Copilot Chat in Outlook can draw on emails, calendar, meetings, chats and a bounded set of OneDrive and SharePoint files. A Purview DLP rule in the Microsoft Copilot, Copilot Chat, and Copilot Cowork location can stop Copilot using labelled files and emails, but Microsoft says label rules cover emails sent on or after January 1, 2025 and calendar invites aren't supported.
- Prompts and responses are processed within the Microsoft 365 service boundary under enterprise data protection, and are logged and stored in Exchange for auditing and eDiscovery.

**Security & identity**
- External mail becomes grounding material. A preview DLP condition, Email is received from > External users, excludes it; Microsoft says this helps reduce the risk of prompt injection and untrusted data influence.
- Microsoft's DLP page says Copilot prompts run in the security context of the user who initiates the prompt, so the feature reaches what that user can already open.

**Autonomy & actions**
- The release notes say users can take action directly in Outlook but do not say which actions or whether each needs confirmation. Confirm this in a pilot before relying on existing approvals.

**Change & support**
- Users whose primary mailbox is on-premises see a dimmed Copilot icon in Microsoft 365 Apps Outlook with no experience to call, per Microsoft's hybrid page. Expect tickets from them.
- Microsoft's two descriptions of what Copilot Chat can read will confuse users and the service desk; settle one internal answer after testing.

## Cost and licensing

**Licence.** Microsoft's requirements page says Microsoft Copilot Chat is available to users with an eligible Microsoft 365 subscription, and lists a Microsoft Copilot licence as not required for eligible users. The Copilot overview calls Copilot Chat (Basic) the standalone baseline experience included with eligible Microsoft 365 licences, and the release notes say this expansion comes without requiring a Microsoft 365 Copilot licence.

**Meter.** No meter or price specific to this expansion is published at the time of writing (November 2026). The overview says some Copilot Chat features are subject to fair use limits. The Privacy and protections page says enterprise data protection is available in Copilot Chat at no extra cost.

**Indirect costs.** Admin time to write and test DLP rules and to decide Copilot app availability. The Purview DLP page refers licensing to the Microsoft 365 Enterprise Plans and the Microsoft 365 security and compliance licensing guidance rather than naming a plan.

## Scope

**Who.** Copilot Chat users without a Microsoft 365 Copilot licence, per the roadmap item. Users must have a work or school account in Microsoft Entra ID.

**Mailboxes.** Microsoft's requirements page says an Exchange Online mailbox is required for experiences that use email, calendar, meeting or other mailbox data, and that Microsoft Copilot isn't available in group mailboxes.

**Clouds and platforms.** Worldwide (Standard Multi-Tenant); Android, Desktop, iOS, Mac and Web. GCC, GCC High and DoD are under roadmap item 554934.

**Status.** Launched, General Availability, target January CY2026.

**Roles.** The Integrated Apps controls are available only to Global Admins. The AI Administrator role gives access to Copilot and AI administration without Global Administrator permissions. Roles that can edit Copilot DLP policies include Microsoft Entra AI Admin, Purview Data Security AI Admin and Purview Compliance Administrator.

## Governance guidance

### Before rollout
- List users who have Copilot Chat but no Microsoft 365 Copilot licence, since the roadmap item targets them.
- Create a Purview DLP policy in the Microsoft Copilot, Copilot Chat, and Copilot Cowork location that excludes your most sensitive labels (DLP row), starting in simulation mode.
- Decide whether the Copilot app stays installable by all users or only a named group (availability row).
- Find users whose primary mailbox is on-premises and tell them the Copilot icon in Outlook will be dimmed.

### At rollout
- Test inbox, calendar and file prompts in Outlook on desktop, web and mobile with a pilot user who has no Copilot licence.
- Confirm labelled email is excluded, allowing up to four hours for DLP changes to reach Copilot, and remember calendar invites are not covered.
- Brief the service desk on the on-premises mailbox behaviour and on what Copilot Chat in Outlook can now read.

### After rollout
- Add the preview Email is received from > External users condition to the DLP policy if external mail should not ground answers.
- Search Copilot Chat prompts and responses with Purview audit and eDiscovery when investigating, since Microsoft logs them in Exchange.
- Use Block app only if you accept a tenant-wide block that also removes the app from licensed users.
- Re-read the Privacy and protections page and the Copilot overview for changes to what Copilot Chat can read.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users can self-install the Copilot app that provides Copilot Chat in Outlook</strong><br><small>Group</small><br><small class="controls__note">Global Administrator only. Applies to both the Microsoft Copilot and Copilot Chat apps. Does not change apps an admin has deployed.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Integrated Apps › Available Apps › app › Users › Specific users/group in the organization can install <a href="https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the Copilot app is blocked in Outlook and the Microsoft Copilot app for the whole organisation</strong><br><small>Tenant</small><br><small class="controls__note">Global Administrator only. Blocks all users, including those assigned a Microsoft 365 Copilot licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Integrated Apps › Available Apps › app › Block app <a href="https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which sensitivity-labelled emails and files Copilot Chat may use in responses</strong><br><small>Tenant</small><br><small class="controls__note">Set the action Prevent Copilot and Cowork from processing content. Covers emails sent on or after January 1, 2025, not calendar invites. The call is the reference's example for a Microsoft 365 Copilot policy.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Loss Prevention › Policies › Create policy › Custom template › Custom policy › Locations › Microsoft Copilot, Copilot Chat, and Copilot Cowork › Add a rule › Content contains › Sensitivity labels <a href="https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DLPComplianceRule -Name &quot;Copilot Rule&quot; -Policy &quot;Copilot Policy&quot; -AdvancedRule $advrule -RestrictAccess @(@{setting=&quot;ExcludeContentProcessing&quot;;value=&quot;Block&quot;})</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>A setting that keeps Copilot Chat in Outlook to the open message for users without a Copilot licence</strong><br><small>Tenant</small><br><small class="controls__note">Not documented at the time of writing (November 2026). Use the Copilot app availability and DLP rows above instead.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Integrated Apps settings for the Copilot app apply to both the Microsoft Copilot and Copilot Chat apps, and Manage Copilot Chat says the Copilot app provides Copilot Chat in Outlook on web, desktop and mobile. The availability setting does not change apps an admin has deployed: to keep the app from unlicensed users, Manage Copilot Chat says not to deploy it to them and to limit self-install to a group that includes only licensed users. Block app blocks the Copilot app tenant-wide, including for users assigned a Microsoft 365 Copilot licence. Turning off the Let users access Microsoft apps in your tenant setting won't turn off the Copilot app.

The DLP row creates a policy in the Copilot location with a sensitivity-label rule. The same location offers the preview Email is received from > External users condition with the Prevent Copilot from processing content action. Policy scope follows the user who submits the prompt, not the owner of the email.

Microsoft Learn documents no setting specific to mailbox-wide reasoning at the time of writing (November 2026); the other rows are existing controls over Copilot Chat as a whole.

## Open questions

- Will Microsoft offer a setting that keeps Copilot Chat in Outlook to the open message for users without a Copilot licence? Watch Manage Copilot Chat and Message center.
- Which description is current: the Copilot overview, which says Copilot Chat (Basic) can't use organisational data via Microsoft Graph, or the Privacy and protections page and release notes, which describe inbox, calendar and file access? Watch the Copilot overview.
- Which actions can Copilot Chat take directly in Outlook, and does each need the user's confirmation? Watch the release notes.
- Does the expansion reach shared, delegate and archive mailboxes, which the requirements page says Microsoft Copilot can use? Watch the Microsoft Copilot requirements page.
- Does Restricted Content Discovery keep a SharePoint site's files out of Copilot Chat in Outlook, given that its page lists a Microsoft Copilot licence among its prerequisites? Watch the Restricted Content Discovery page.

<!-- rationale
risk: Medium. Copilot Chat in Outlook moves from one email thread to the user's whole inbox, calendar and some OneDrive and SharePoint files, within data the user can already reach; Purview DLP and Copilot app availability cover it but need configuring.
cost: Low. Microsoft's requirements page says a Microsoft Copilot licence is not required for eligible Copilot Chat users, and no meter for this expansion is published; the known cost is admin time for DLP rules and app availability.
impact: High. It changes what Copilot Chat in Outlook answers from for every Copilot Chat user without a Microsoft 365 Copilot licence, on desktop, web and mobile.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[2].ui; rendered table: sensitivity-labelled content / admin-path: The printed Purview route reaches the sensitivity-label condition for a custom Copilot DLP policy. | Found: Go to Data Loss Prevention > Policies and select + Create policy. Select the Custom template, then Custom policy. On the Locations page, set the Microsoft Copilot, Copilot Chat, and Copilot Cowork location to on. Content contains > Sensitivity labels | Fix: The route stops at the condition rather than the enforcement action. Set controls[2].ui.path and its rendered counterpart to 'Data Loss Prevention > Policies > Create policy > Custom > Custom policy > Locations > Microsoft Copilot, Copilot Chat, and Copilot Cowork > Add a rule > Content contains > Sensitivity labels > Prevent Copilot and Cowork from processing content', using the setup steps and supported-actions table at https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about. | Source: https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about
- [supported, minor] Governance guidance: Before rollout / behaviour: A DLP policy can start in simulation mode before enforcement. | Found: Run the policy in simulation mode, otherwise known as simulation mode, for Microsoft Purview Data Loss Prevention (DLP) policies replaces the Test and Test with policy tips policy states. | Fix: Add https://learn.microsoft.com/purview/dlp-simulation-mode-learn to sources for the simulation-mode advice; the cited Copilot-specific page expressly names simulation for Microsoft 365 Copilot and Cowork, whereas this general DLP page states the policy-level mechanism. | Source: https://learn.microsoft.com/purview/dlp-simulation-mode-learn
- [contradicted, minor] Governance guidance: After rollout; controls / consistency: The checklist tells readers to configure an external-email restriction, but the table's DLP row governs sensitivity-labelled content only. | Found: After rollout: Add the preview Email is received from > External users condition to the DLP policy. controls[2].governs: Which sensitivity-labelled emails and files Copilot Chat may use in responses | Fix: Add to Governance controls: 'The checklist's preview external-email restriction is not represented in the controls table.' Do not add a control row during this correction.
- [contradicted, minor] Governance guidance: After rollout; controls / consistency: The checklist tells readers to use Purview audit and eDiscovery, but neither has a controls-table row. | Found: Search Copilot Chat prompts and responses with Purview audit and eDiscovery when investigating. Controls table: self-install availability, Block app, sensitivity-labelled content, open-message restriction. | Fix: Add to Governance controls: 'The checklist's Purview audit and eDiscovery investigation tools are not represented in the controls table.' Do not add control rows during this correction.
- [supported, minor] rationale: impact / behaviour: The high-impact rationale describes the expansion as changing answers for every Copilot Chat user without a Microsoft 365 Copilot licence. | Found: Copilot Chat in Outlook for affected users will expand from reasoning over a single email thread to reasoning over the user's entire inbox, calendar, meetings, and other enterprise data that is already available to them through Microsoft 365. | Fix: Keep impact high, but replace the rationale with 'High. It changes what Copilot Chat in Outlook answers from for affected Copilot Chat users without a Microsoft 365 Copilot licence, on desktop, web and mobile.' This retains the source's affected-user qualification rather than suggesting universal access regardless of app availability and prerequisites. | Source: https://learn.microsoft.com/microsoft-365/copilot/release-notes
-->
