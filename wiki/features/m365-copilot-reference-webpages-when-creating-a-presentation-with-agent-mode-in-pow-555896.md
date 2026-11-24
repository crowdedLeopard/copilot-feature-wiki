---
title: "PowerPoint on desktop: reference webpages when creating a presentation with Copilot Agent Mode"
slug: "m365-copilot-reference-webpages-when-creating-a-presentation-with-agent-mode-in-pow-555896"
roadmapId: 555896
topic: "m365-copilot"
products: ["PowerPoint","Microsoft Copilot (Microsoft 365)"]
summary: "Copilot Agent Mode in PowerPoint on desktop can now reference webpages when creating a presentation. No default or feature-specific licence is stated; review the Allow web search in Copilot policy."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop"]
targetDate: "April CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Microsoft's Copilot overview says users without the add-on licence \"can use Copilot in Word, Excel, PowerPoint, and OneNote\" (Basic) and users with it get the full experience (Premium). A licence or price specific to this capability is not yet published."
audiences: ["m365-admin","security","compliance","change-adoption"]
tags: ["powerpoint","m365-copilot","web-search","web-grounding","cloud-policy"]
sources:
  - title: "Microsoft 365 Roadmap 555896"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=555896"
    kind: "roadmap"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Data, privacy, and security for web search in Microsoft Copilot and Microsoft Copilot Chat"
    url: "https://learn.microsoft.com/copilot/plan/manage-public-web-access"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Supported Copilot resources for Tenant Configuration Management (preview)"
    url: "https://learn.microsoft.com/graph/utcm-copilot-resources"
    kind: "learn"
  - title: "Supported resources for remediation and applyOnce (preview)"
    url: "https://learn.microsoft.com/graph/utcm-remediation-applyonce-resources"
    kind: "learn"
  - title: "Create configurationMonitor"
    url: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    kind: "learn"
videos: []
related: ["m365-copilot-powerpoint-agent","m365-copilot-reference-files-saved-in-sharepoint-libraries-and-onedrive-folders-when-creat","m365-copilot-attach-and-reference-an-image-when-creating-a-presentation-with-copilo-555881","cloud-policy"]
controls:
  - governs: "Whether Copilot can use public web content (Allow web search in Copilot policy)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > Data access > Web search for Microsoft Copilot and Microsoft Copilot Chat"
      docs: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    api:
      kind: "graph"
      call: "POST /beta/admin/configurationManagement/configurationMonitors"
      docs: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    note: "Preview Graph beta. Body: mode applyOnce, resource microsoft.copilot.allowwebsearch, value 0, 1 or 2. Setting link opens the cloud policy in the Microsoft 365 Apps admin center. Not confirmed to gate this feature."
  - governs: "A switch for referencing webpages in PowerPoint Agent Mode alone"
    scope: "tenant"
    ui: null
    api: null
    note: "Web search policy above is the nearest documented control; it is not documented as specific to this capability."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-06-03T23:00:57"
changes:
  - date: "2026-11-24"
    note: "New briefing for the desktop roadmap item; Mac (555893) and web (555898) are separate items with matching status and dates."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 65 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Correction: removed the claim that the web search policy is the only documented switch for Copilot's use of web content; it is Microsoft's primary admin policy, alongside a user-level Web content toggle."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 67 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 67
  confirmed: 67
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "af11e2766023f104595c3c81a52e9aa4"
---

## What's changing

The roadmap item states that users can now reference webpages when creating a presentation with Copilot in PowerPoint using Agent Mode. This item covers the Desktop platform. Microsoft lists the same feature under two further roadmap items, 555893 for Mac and 555898 for the web, with the same status, target date, cloud and release phase as this one.

Microsoft's Learn release notes list the capability as "Reference web sources when creating a presentation with Copilot in PowerPoint", under Windows with roadmap ID 555896, in the update window of July 28, 2026 to August 11, 2026. They say users can ask Copilot to reference relevant online sources, that Copilot gathers relevant information from the web and uses referenced sources "while respecting web content security and privacy standards", and that users then review the generated slides and source references. The release notes do not mention Agent Mode and do not say whether users supply the page addresses themselves or Copilot chooses the sources.

The roadmap record gives status Launched, target April CY2026, release phase General Availability, cloud Worldwide (Standard Multi-Tenant) and platform Desktop. The release notes place the change in the August 2026 window; both are reported as given. No Message Center post was supplied for this item, and Microsoft Learn has no page for the feature beyond the release notes, so how it fetches or cites pages is not described.

## Why it matters

This is a web-grounding feature inside an app most staff use daily, so the question for a service owner is whether the existing web search controls cover it. Microsoft's web search page describes the **Allow web search in Copilot** policy as the way admins turn web search on or off for users or groups, but no page says that policy gates this PowerPoint capability. Until that is confirmed, treat the policy as the closest control and verify it in a pilot.

Microsoft has not stated what happens on arrival, so the advice here rests on no source saying existing behaviour changes. The practical effect is on content: decks may now carry material drawn from outside the organisation, which changes how reviewers should treat accuracy and provenance, and which data-handling terms apply to any web query Copilot generates.

## Risk assessment

**Data exposure**
- Where the feature uses Copilot web search, Microsoft's web search page says Copilot generates a short query that it sends to the Bing search service together with the user's client IP address. The query does not include entire Microsoft 365 files, but it can be informed by the open document when a user prompts inside a Microsoft 365 app (the page's example is Word). Whether this PowerPoint capability uses that route is not stated.
- That page also says the Data Protection Addendum does not apply to generated web search queries, and that HIPAA compliance and the EU Data Boundary do not apply to them. Confirm with your compliance team before enabling it for regulated users.

**Security & identity**
- The documented control is the **Allow web search in Copilot** policy in Cloud Policy service for Microsoft 365, which can turn web search on or off for users or groups. A user-level **Web content** toggle also exists, so a tenant-wide setting does not remove the user's own choice to switch it off. Microsoft does not say whether either control gates this capability.
- Microsoft documents no setting specific to referencing webpages in PowerPoint Agent Mode at the time of writing (November 2026).

**Autonomy & actions**
- The release notes describe Copilot gathering web information and adding source references to generated slides, and tell users to review the generated slides and source references. Microsoft does not describe an approval step before the web content is used, so the review depends on the person who makes the deck.

**Change & support**
- Expect questions about where a slide's content came from and how current it is. The release notes say source references appear; they do not say how long they stay in the file.
- The three roadmap items cover Desktop, Mac and the web separately, and the Learn Windows listing carries only this item's ID, so users on different platforms may report different availability.

## Cost and licensing

Microsoft's Copilot overview says users without the Microsoft 365 Copilot add-on licence but with Microsoft 365 Copilot (Basic) can use Copilot in Word, Excel, PowerPoint and OneNote, and that users with the add-on licence (Premium) get the full experience; Copilot Chat (Basic) users do not have access to Copilot in PowerPoint. Some features are subject to fair use limits. The overview lists PowerPoint creating presentations from prompts or existing content among the in-app features.

No licence, price, credit rate or meter specific to referencing webpages is published for this capability at the time of writing (November 2026). The known costs are indirect: admin time to check the web search policy, and user guidance on reviewing web-sourced content.

## Scope

The roadmap record lists the Desktop platform, the Worldwide (Standard Multi-Tenant) cloud and the General Availability release phase, with status Launched. The Learn release notes list the entry under Windows. Mac and web are separate roadmap items (555893 and 555898).

The users in scope are those with Copilot in PowerPoint under the Basic or Premium licences described above; Microsoft does not state a further prerequisite for this capability. To work in the admin centre, Microsoft says to use an appropriate admin role such as AI Administrator, and that creating Cloud Policy settings for Microsoft 365 apps requires the Office Apps admin role. The roadmap record does not list other clouds; that is a record fact, not a statement that the feature is unavailable there.

## Governance guidance

### Before rollout
- Check whether the **Allow web search in Copilot** policy is configured for your users, and at which scope. Microsoft says that if it is not configured, web search is available in Microsoft Copilot and Microsoft Copilot Chat unless the optional connected experiences policy is set to Disabled.
- Decide with your compliance owner whether web queries sent to Bing are acceptable for your regulated groups, given that the Data Protection Addendum and the EU Data Boundary do not apply to them.
- Prepare a short note for PowerPoint users on reviewing generated slides and source references before sharing a deck.

### At rollout
- Pilot with a few desktop PowerPoint users: ask Copilot to reference a webpage, then repeat with web search disabled for those users, to learn whether the policy gates this capability.
- Record the result for your service desk, including which Copilot licence tier each pilot user holds.

### After rollout
- Watch Message center and the Learn release notes for a page that describes how this capability fetches pages and whether the web search policy governs it.
- Collect user reports of unexpected or low-quality web sources in decks and feed them to the owner of your Copilot web search policy.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Copilot can use public web content (Allow web search in Copilot policy)</strong><br><small>Tenant</small><br><small class="controls__note">Preview Graph beta. Body: mode applyOnce, resource microsoft.copilot.allowwebsearch, value 0, 1 or 2. Setting link opens the cloud policy in the Microsoft 365 Apps admin center. Not confirmed to gate this feature.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › Data access › Web search for Microsoft Copilot and Microsoft Copilot Chat <a href="https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/admin/configurationManagement/configurationMonitors</code> <a href="https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>A switch for referencing webpages in PowerPoint Agent Mode alone</strong><br><small>Tenant</small><br><small class="controls__note">Web search policy above is the nearest documented control; it is not documented as specific to this capability.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The first row is Microsoft's primary admin policy for controlling Copilot web search. Its admin centre entry opens a link to create the cloud policy in the Microsoft 365 Apps admin center, which needs the Office Apps admin role; the Copilot settings page itself is managed with a role such as AI Administrator. Microsoft's pages describe the policy as applying to Microsoft Copilot and Microsoft Copilot Chat and do not say whether it gates referencing webpages in PowerPoint Agent Mode.

The Graph call is preview, delegated-only and, per Microsoft, works only for settings in tenant-level policies: a group-level policy for the same setting makes it fail. It is for the global service, not national clouds. The second row records that no switch for this capability alone is documented.

A user-level **Web content** toggle also exists in the Microsoft Copilot app; Microsoft's page says that when an admin turns web search off, the toggle is dimmed and users cannot turn it on.

## Open questions

- Does the **Allow web search in Copilot** policy, or the optional connected experiences policy, govern referencing webpages in PowerPoint Agent Mode? Watch the Learn web search page.
- Does this capability fetch a page address the user supplies, or send generated queries to Bing, and which data-handling terms apply to each route? Watch the Learn release notes and the web search page.
- What is the default state, and does the capability need Microsoft 365 Copilot (Basic) or only the Premium add-on licence, including any fair use limit? Watch the Learn Copilot overview.
- Is there a switch for this capability alone, and are web references recorded in audit or eDiscovery data? Watch the Copilot settings page in Learn.

<!-- rationale
risk: Medium. Copilot brings web content into decks and, where it uses Copilot web search, generated queries go to Bing outside the Data Protection Addendum; a web search policy exists, but Microsoft does not say it governs this feature.
cost: Low. No licence or meter specific to this capability is published; Copilot in PowerPoint comes with Microsoft 365 Copilot (Basic) or the add-on licence, so the known cost is admin time and user communication.
impact: Medium. People who build presentations with Copilot in desktop PowerPoint will notice it; Microsoft has not stated whether it arrives on by default or needs a user or admin to switch it on.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The Microsoft 365 admin center route is Copilot > Settings > Data access > Web search for Microsoft Copilot and Microsoft Copilot Chat. | Found: In the left navigation, expand **Copilot**, and then select **Settings**. 3. Browse **User access**, **Data access**, **Copilot actions**, and **Other settings**. | Fix: Keep the documented entry-point path, but complete its note: 'Follow the link to the Microsoft 365 Apps admin center, then Customization > Policy Management > Create > Choose the scope > Configure Settings > Allow web search in Copilot.' Cite https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy for the continuation. The existing route stops at the correct setting's link rather than the policy itself. | Source: https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center
- [supported, minor] Governance controls / availability: The documented TCM applyOnce capability is for the global service, not national clouds. | Found: TCM is available only in the global service, not in national clouds. | Fix: Replace 'It is for the global service, not national clouds' with 'The TCM remediation and applyOnce support page limits the capability to the global service; the Create configurationMonitor reference separately lists endpoint availability in Global, US Government L4 and US Government L5 (DOD), but not China operated by 21Vianet.' Both cited pages were read and their availability statements differ. | Source: https://learn.microsoft.com/graph/utcm-remediation-applyonce-resources
- [supported, minor] Scope; Governance controls / role: The Copilot settings page says creating Cloud Policy settings requires the Office Apps admin role. | Found: For example, creating Cloud Policy settings for Microsoft 365 apps requires the **Office Apps admin** role. | Fix: Use 'Microsoft's Copilot settings page names the Office Apps admin role for creating Cloud Policy settings. The Cloud Policy overview recommends Office Apps Administrator and also lists Security Administrator and Global Administrator as supported roles.' Cite https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy, whose role table gives those alternatives, and replace the unqualified 'needs the Office Apps admin role' wording in Governance controls. | Source: https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center
-->
