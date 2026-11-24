---
title: "PowerPoint on the web: reference webpages when creating a presentation with Copilot Agent Mode"
slug: "m365-copilot-reference-webpages-when-creating-a-presentation-with-agent-mode-in-powerpoint"
roadmapId: 555898
topic: "m365-copilot"
products: ["PowerPoint","Microsoft Copilot (Microsoft 365)"]
summary: "PowerPoint on the web: Copilot can reference web sources when it builds a presentation (roadmap item 555898, Launched). Microsoft names no admin action; check whether the Allow web search in Copilot policy fits."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "April CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Microsoft's Copilot overview lists Copilot in PowerPoint under the Microsoft 365 Copilot (Basic) licence, which needs no add-on and has fair use limits, and under the Premium add-on licence. A licence or limit specific to this feature is not yet published."
audiences: ["m365-admin","security","change-adoption"]
tags: ["powerpoint","m365-copilot","web-search","web-grounding","cloud-policy"]
sources:
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
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    kind: "learn"
  - title: "Create configurationMonitor"
    url: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    kind: "learn"
  - title: "Supported Copilot resources for Tenant Configuration Management (preview)"
    url: "https://learn.microsoft.com/graph/utcm-copilot-resources"
    kind: "learn"
  - title: "Supported resources for remediation and applyOnce (preview)"
    url: "https://learn.microsoft.com/graph/utcm-remediation-applyonce-resources"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 555898"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=555898"
    kind: "roadmap"
videos: []
related: ["cloud-policy","m365-copilot-reference-files-saved-in-sharepoint-libraries-and-onedrive-folders-whe-555894","m365-copilot-attach-and-reference-an-image-when-creating-a-presentation-with-copilo-555882","m365-copilot-reference-an-attached-powerpoint-deck-s-style-when-creating-a-new-pres-555879"]
controls:
  - governs: "Whether Copilot can use public web content (Allow web search in Copilot)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > Data access > Web search for Microsoft Copilot and Microsoft Copilot Chat"
      docs: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    api:
      kind: "graph"
      call: "POST /beta/admin/configurationManagement/configurationMonitors"
      docs: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    note: "Link opens the cloud policy in the Microsoft 365 Apps admin center. Graph: preview; body mode applyOnce with resource microsoft.copilot.allowwebsearch; tenant-level only. Coverage of this feature not confirmed."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-06-03T23:00:57"
changes:
  - date: "2026-11-24"
    note: "First briefing for roadmap item 555898 (PowerPoint on the web): covers the Learn release note, the Allow web search in Copilot policy and the open question of whether it governs this feature."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 66 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected three statements: the Bing query exclusion for very short prompts, the release notes' gradual-deployment wording, and the optional connected experiences qualification on web search availability."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 65 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 65
  confirmed: 65
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "4b543e5ef2458ce6c1c7ebe07df9f1d3"
---

## What's changing

Copilot in PowerPoint on the web can now reference web sources while it creates a presentation. The roadmap item words this as "You can now reference webpages when creating a presentation with Agent Mode in PowerPoint". Its status is Launched, the release phase is General Availability, the target date is April CY2026, and it covers Worldwide (Standard Multi-Tenant) on the Web platform.

Microsoft lists the feature under three roadmap ids, one per platform: 555893 (Mac), 555896 (Desktop) and 555898 (Web). This briefing covers the Web item only.

Microsoft Learn's Copilot release notes list the Web item as "Reference web sources when creating a presentation with Copilot in PowerPoint", under August 11, 2026. They say Copilot in PowerPoint now supports source referencing during presentation creation, and that Copilot can gather relevant information from the web and use referenced sources while respecting web content security and privacy standards. The steps in the entry have the user ask for a presentation on a topic that would benefit from current web information, then review the generated slides and source references. The entry does not mention Agent Mode or a way to name a specific webpage, so this page does not say how a user points Copilot at a page.

Microsoft has not stated whether the feature is on or off by default, and no source says existing behaviour changes.

## Why it matters

Decks built with this feature can carry content from outside the tenant. That moves the question from "what can Copilot read in our files" to "what may Copilot pull in from the web, and who checks it". Microsoft's release note says the benefit is current information and less manual research, which also means users may stop checking sources themselves.

The one admin control Microsoft documents for web search in Copilot is a Cloud Policy setting that covers Microsoft Copilot and Microsoft Copilot Chat. Microsoft's pages do not say it governs this feature, so treat the first weeks as a test: pilot with a group, confirm what the policy does in PowerPoint on the web, then decide. Because Microsoft has not stated a default, plan on the feature being available to licensed users and confirm that in a pilot rather than assuming either way.

## Risk assessment

**Data exposure**

- Microsoft's web search page says Copilot sends a generated search query, not the whole prompt unless the prompt is very short (for example, "local weather"), to the Bing search service, along with the user's client IP address, and that the query may be informed by data in a Microsoft 365 document when the prompt is entered inside a Microsoft 365 app. That page covers Microsoft Copilot and Microsoft Copilot Chat. The release note does not say whether this feature uses that web search, so confirm before relying on those terms.
- The same page says the Data Protection Addendum does not apply to generated web search queries, and that HIPAA compliance and the EU Data Boundary do not apply to them. If this feature uses that search, regulated teams should ask for it to be restricted.

**Security & identity**

- For web search in Copilot, Microsoft says identifying information based on the user's Microsoft Entra ID, such as username, domain or tenant ID, is not included in the generated query. Learn does not describe identity handling for this feature specifically.

**Autonomy & actions**

- The release note describes Copilot gathering web information and showing source references in the slides it generates, and describes no other action. Learn does not describe Agent Mode behaviour for this feature.

**Change & support**

- Expect questions about where a slide's content came from and whether web sources are reliable. The release note tells users to review the generated slides and source references; build that review into your communication to users.
- If you switch web search off with the Allow web search in Copilot policy, Microsoft says the **Web content** toggle in Microsoft Copilot is turned off and dimmed. What users see in PowerPoint on the web is not documented.

## Cost and licensing

**Licence.** Microsoft's Copilot overview says users with Microsoft 365 Copilot (Basic) do not have the Microsoft 365 Copilot add-on licence but can use Copilot in Word, Excel, PowerPoint and OneNote, and that users with the Premium add-on licence get the full experience of Copilot in those apps. It says some features are subject to fair use limits, and that users with only Copilot Chat (Basic) do not have access to Copilot in PowerPoint. The overview also lists creating presentations from prompts or existing content under the Basic experience.

**Meter.** A licence, limit or meter specific to referencing web sources is not yet published; the release note names none.

**Indirect cost.** Admin time to pilot the feature and, if you restrict web search, to build a Cloud Policy configuration. Creating Cloud Policy settings for Microsoft 365 apps requires the Office Apps admin role, according to Microsoft's Copilot settings page.

## Scope

- **Platform and cloud:** the roadmap record lists Web and Worldwide (Standard Multi-Tenant). Mac and Desktop are separate roadmap items (555893 and 555896).
- **Users:** people with the Microsoft 365 Copilot (Basic) or (Premium) experience in PowerPoint, per Microsoft's Copilot overview. Which of these experiences gets this feature is not yet published.
- **Rollout:** the record gives status Launched and target April CY2026. The release notes list it under August 11, 2026. Microsoft has not stated this feature's default. The Copilot release notes describe gradual deployment to a subset of users within a tenant before expanding across the organisation.
- **Prerequisites:** none are stated for this feature.

## Governance guidance

### Before rollout

- Ask security and compliance whether web content from Bing may flow into decks built by licensed users, using Microsoft's web search page (Bing, query handling, Data Protection Addendum exclusion) as the basis.
- Check whether an **Allow web search in Copilot** policy already exists in the Microsoft 365 Apps admin center, and who it targets. Without one, Microsoft says web search is available to Microsoft Copilot and Copilot Chat users unless Allow the use of additional optional connected experiences in Office is Disabled.
- Pick a pilot group of PowerPoint on the web users and target the policy at a Microsoft Entra group.

### At rollout

- Have the pilot group build the same presentation with the policy set to enabled and to disabled, and record whether web source references appear in PowerPoint on the web.
- Tell users to review the generated slides and source references, as Microsoft's release note does, before sharing a deck.

### After rollout

- Watch the Microsoft 365 Copilot release notes and Message center for wording that names PowerPoint presentation creation in the web search policy.
- Sample decks for source quality and for confidential text copied into prompts, and feed the result into your Copilot usage guidance.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Copilot can use public web content (Allow web search in Copilot)</strong><br><small>Tenant</small><br><small class="controls__note">Link opens the cloud policy in the Microsoft 365 Apps admin center. Graph: preview; body mode applyOnce with resource microsoft.copilot.allowwebsearch; tenant-level only. Coverage of this feature not confirmed.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › Data access › Web search for Microsoft Copilot and Microsoft Copilot Chat <a href="https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/admin/configurationManagement/configurationMonitors</code> <a href="https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The documented control for web search is the **Allow web search in Copilot** policy. Its page says it applies to Microsoft Copilot and Microsoft Copilot Chat and names Researcher, Analyst and Cowork. It does not name PowerPoint presentation creation, so confirm coverage in a pilot before you rely on it.

The policy can target users or user groups and offers three options, including disabling web search in Copilot Work mode while keeping it in Web mode and Copilot Chat. Microsoft also says that if the policy is not configured, web search stays available unless **Allow the use of additional optional connected experiences in Office** is Disabled, which restricts many Microsoft 365 experiences. Users can still turn web search off for themselves with the **Web content** toggle.

The Graph route is a preview Tenant Configuration Management API. It applies tenant-level Cloud Policy settings only: if the setting is configured in a group-level policy, the operation fails. Microsoft documents web search query logging for Audit and eDiscovery for Microsoft Copilot and Microsoft Copilot Chat; its coverage of this feature is not stated.

## Open questions

- Does the **Allow web search in Copilot** policy govern referencing web sources when creating a presentation in PowerPoint on the web, and what do users see when it is disabled? Watch the web search page on Microsoft Learn.
- Is this feature the same as Agent Mode in PowerPoint, as the roadmap title says, or Copilot in PowerPoint, as the release notes say, and can a user name a specific webpage? Watch the roadmap item and the release notes.
- Which licence or fair use limit applies to referencing web sources, and is a meter planned? Watch the Copilot overview and the release notes.
- Do the Data Protection Addendum and EU Data Boundary exclusions for generated web search queries apply to this feature, and are the queries logged in Purview Audit? Watch the web search page.
- Is the feature on by default for licensed users? Watch Message center.

<!-- rationale
risk: Medium. Microsoft documents web search in Copilot as sending generated queries to Bing, outside the Data Protection Addendum. The release note does not say this feature uses that search, and the documented policy names Copilot and Copilot Chat, not PowerPoint.
cost: Low. No licence or meter specific to this feature is published. Copilot in PowerPoint sits under the Microsoft 365 Copilot (Basic) and (Premium) licences, so the cost that is known is admin time.
impact: Medium. People who build presentations with Copilot in PowerPoint on the web notice it. Microsoft's release note names no administrator action.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: Microsoft 365 admin center > Copilot > Settings > Data access > Web search for Microsoft Copilot and Microsoft Copilot Chat opens the Cloud Policy configuration route. | Found: Web search for Microsoft Copilot and Microsoft Copilot Chat ... Follow the link from Copilot settings to create an **Allow web search in Copilot** cloud policy in the Microsoft 365 Apps admin center. | Fix: Keep the documented shortcut and add this continuation to the row note: 'In the Microsoft 365 Apps admin center, go to Customization > Policy Management > Create > Choose the scope > Configure Settings > Allow web search in Copilot.' The configuration route is documented at https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy and the policy name at https://learn.microsoft.com/copilot/plan/manage-public-web-access; both are already cited. | Source: https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center
- [supported, minor] controls[0].api; controls[0].note; Governance controls table / command: POST /beta/admin/configurationManagement/configurationMonitors with mode applyOnce and resource microsoft.copilot.allowwebsearch can configure tenant-level web search. | Found: Create a new configurationMonitor object that runs periodically in the background at a scheduled frequency to detect configuration drift in `monitorOnly` mode, or applies a desired-state baseline once in `applyOnce` mode. | Fix: Keep the call unchanged. Add to the row note: 'Set the baseline resource properties.value to "0" to enable web search in both experiences, "1" to disable it in both, or "2" to disable Work mode while enabling Web mode and Copilot Chat.' These values are documented at https://learn.microsoft.com/graph/utcm-copilot-resources#allowwebsearch-resource-type, which is already cited. | Source: https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta
-->
