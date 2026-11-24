---
title: "PowerPoint on Mac: reference webpages when creating a presentation with Copilot Agent Mode"
slug: "m365-copilot-reference-webpages-when-creating-a-presentation-with-agent-mode-in-pow-555893"
roadmapId: 555893
topic: "m365-copilot"
products: ["PowerPoint","Microsoft Copilot (Microsoft 365)"]
summary: "Copilot in PowerPoint on Mac can now draw on web sources when it builds a presentation in Agent Mode. Launched; the roadmap names no admin switch for it. Web search policy may be the control: confirm its reach."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Mac"]
targetDate: "April CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's Copilot overview describes Copilot in PowerPoint under Microsoft 365 Copilot (Basic) and (Premium) experiences; which of them includes this feature is not yet published. No feature-specific price or meter is published."
audiences: ["m365-admin","security","compliance"]
tags: ["powerpoint","m365-copilot","web-search","cloud-policy"]
sources:
  - title: "Microsoft 365 Roadmap 555893"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=555893"
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
related: ["m365-copilot-reference-files-saved-in-sharepoint-libraries-and-onedrive-folders-whe-555897","m365-copilot-attach-and-reference-an-image-when-creating-a-presentation-with-copilot-in-po","cloud-policy","m365-copilot-powerpoint-agent","auditing"]
controls:
  - governs: "Whether Copilot web search is available to users or groups"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > Data access > Web search for Microsoft Copilot and Microsoft Copilot Chat"
      docs: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    api:
      kind: "graph"
      call: "POST /beta/admin/configurationManagement/configurationMonitors"
      docs: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    note: "Cloud policy needs Office Apps admin. Graph (preview): mode applyOnce, resource microsoft.copilot.allowwebsearch, properties.value \"0\" enables, \"1\" disables, \"2\" disables in Work mode only. Reach over this feature not confirmed."
  - governs: "Switch for referencing webpages in PowerPoint Agent Mode on Mac"
    scope: "other"
    ui: null
    api: null
    note: "No feature-specific setting is documented at the time of writing (November 2026); the web search policy above is the nearest documented control."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-06-03T23:00:57"
changes:
  - date: "2026-11-24"
    note: "New briefing for the Mac roadmap item: web sources in Copilot PowerPoint presentations, with the web search policy as the nearest documented control."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 7 of 63 statements contradicted, 4 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected after the independent check: release-note wording on asking Copilot for web-based presentations, the very-short-prompt exception, the new-capability and default statements, licensing model, rollout and channel wording, and the toggle and audit advice."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 72 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 72
  confirmed: 72
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "f646a5bfcdb57d9dda322d23ebeef671"
---

## What's changing

Copilot in PowerPoint on Mac can now reference web sources when it creates a presentation. The roadmap item says users can reference webpages when creating a presentation with Copilot in PowerPoint using Agent Mode. Microsoft's Copilot release notes describe the same change as Copilot gathering relevant information from the web and using referenced sources "while respecting web content security and privacy standards".

Microsoft Learn has no page for this feature itself, so what follows about behaviour comes from the roadmap item and the release note. The release note tells users to ask Copilot to create a presentation on a topic that benefits from current web information and review the generated slides and source references. Neither it nor the roadmap says whether users can paste webpage addresses, and the release note does not use the words Agent Mode. Microsoft's web search article covers how Copilot's web search works in general: Copilot generates a search query from the prompt and sends it to the Bing search service.

The roadmap record gives status Launched, release phase General Availability, target April CY2026, cloud Worldwide (Standard Multi-Tenant) and platform Mac. Microsoft lists the same feature under separate roadmap items for Desktop (555896) and Web (555898), with the same status, target date and cloud; this page covers the Mac item 555893 only.

## Why it matters

If this feature uses Copilot web search, generated search queries can carry information derived from prompts to the Bing search service outside Microsoft 365. Microsoft's web search article says the generated query is not the whole prompt (unless it is very short) and excludes entire Microsoft 365 files, but it can be informed by a document when a user prompts Copilot inside an app. Bing handles those queries under different terms from Microsoft 365 data.

Microsoft has not stated the feature-specific default on arrival. The release note does describe a new capability: users previously could not directly incorporate live web information as source material within Copilot in PowerPoint. For the Worldwide cloud in this record, Copilot web search is available when Allow web search in Copilot is not configured, unless Allow the use of additional optional connected experiences in Office is Disabled; whether the Mac PowerPoint feature follows that policy is the question to settle first.

## Risk assessment

**Data exposure**
- Copilot web search sends a generated query, which can contain the entire prompt when the prompt is very short, to the Bing search service, along with the user's client IP address. Microsoft says the query can be informed by a document the user has open when prompting inside an app. If this feature uses that web search, that applies to presentation prompts too.
- Microsoft's web search article says the Data Protection Addendum, HIPAA compliance and the EU Data Boundary do not apply to generated web search queries. Regulated teams should treat this as a decision for the web search policy, not a PowerPoint setting.

**Security & identity**
- Web content that Copilot pulls into slides comes from outside the tenant. Microsoft's release note says Copilot respects web content security and privacy standards but gives no detail, so reviewers should check cited sources before a deck is shared externally.

**Autonomy & actions**
- The roadmap and release note describe Copilot creating a presentation that uses web sources. Neither describes actions beyond producing the presentation.

**Change & support**
- Help-desk questions are likely to be about where sources came from and why a user in one group sees web content and another does not, because web search is controlled per user or group through Cloud Policy and each user can also turn it off. Microsoft says web search query logging supports audit and eDiscovery.

## Cost and licensing

Microsoft publishes no separate price, meter or credit rate for this feature at the time of writing (November 2026). The roadmap item and release note state none.

Microsoft's Copilot overview says users without the Microsoft 365 Copilot add-on licence can use Copilot in Word, Excel, PowerPoint and OneNote under the Microsoft 365 Copilot (Basic) experience, and users with the add-on licence get the full experience of Copilot in those apps. Which experience includes web sources in Mac PowerPoint is not yet published. The overview notes that chat experiences in apps vary by tenant configuration and licence.

Indirect cost is admin and communication time: deciding the web search policy, telling users, and reviewing sources in decks.

## Scope

Users: those with Copilot in PowerPoint on Mac. The roadmap record lists platform Mac only for this item; Desktop and Web have their own roadmap items (555896, 555898) with the same status and target date.

Clouds: the record lists Worldwide (Standard Multi-Tenant). Release phase General Availability, status Launched, target April CY2026.

The release-notes page describes generally available changes for Current Channel and gradual deployment to subsets of users before expanding across a tenant; it gives no Mac feature-specific build or rollout window. Feature-specific prerequisites are not stated. For web search in general, Microsoft documents that it is turned off by default for GCC and DoD customers, which the record does not list for this item. Roles: Microsoft's Copilot settings article names AI Administrator for Copilot settings in the Microsoft 365 admin center and Office Apps admin for creating Cloud Policy settings.

## Governance guidance

### Before rollout
- Confirm with Microsoft (Message center, support) whether web sources in PowerPoint Agent Mode on Mac follow the Allow web search in Copilot policy.
- Decide, with security and compliance, whether web search is acceptable for the users who hold Copilot in PowerPoint, given that generated queries are outside the Data Protection Addendum.
- Check whether the Allow web search in Copilot policy is already configured in Cloud Policy, because for the Worldwide cloud in this record Copilot web search is available when it is not configured, unless Allow the use of additional optional connected experiences in Office is Disabled.

### At rollout
- Set the Allow web search in Copilot policy for the users or groups that should not use web content, using the first row of the controls table.
- Tell Mac PowerPoint users that Copilot-generated decks can contain web-sourced content. Before presenting the Copilot app's Settings > Personalization > Advanced > Web search toggle as a control for this feature, confirm that it governs this webpage-reference flow.

### After rollout
- Confirm whether this PowerPoint webpage-reference flow generates the documented Copilot web-search query logs before relying on Microsoft Purview audit or eDiscovery to review its use.
- Revisit the policy when Microsoft publishes a Learn page for this feature.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Copilot web search is available to users or groups</strong><br><small>Tenant</small><br><small class="controls__note">Cloud policy needs Office Apps admin. Graph (preview): mode applyOnce, resource microsoft.copilot.allowwebsearch, properties.value &quot;0&quot; enables, &quot;1&quot; disables, &quot;2&quot; disables in Work mode only. Reach over this feature not confirmed.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › Data access › Web search for Microsoft Copilot and Microsoft Copilot Chat <a href="https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/admin/configurationManagement/configurationMonitors</code> <a href="https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Switch for referencing webpages in PowerPoint Agent Mode on Mac</strong><br><small class="controls__note">No feature-specific setting is documented at the time of writing (November 2026); the web search policy above is the nearest documented control.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The Allow web search in Copilot policy lives in Cloud Policy service for Microsoft 365, and the Microsoft 365 admin center Copilot settings page links to it. Microsoft's web search article says it applies to Microsoft Copilot and Microsoft Copilot Chat; it does not name PowerPoint Agent Mode, so its reach over this feature is to be confirmed. Creating Cloud Policy settings requires the Office Apps admin role.

If the policy is enabled, users can still turn web search off with the Web content toggle; if the admin disables it, the toggle is dimmed and users cannot turn it on. Microsoft also says that setting Allow the use of additional optional connected experiences in Office to Disabled turns web search off when the web search policy is not configured, but that setting restricts many other Microsoft 365 experiences.

The Graph route is preview. Tenant Configuration Management supports the setting only in tenant-level policies, so a group-level policy for the same setting blocks it. No feature-specific switch for referencing webpages in PowerPoint is documented.

## Open questions

- Does the Allow web search in Copilot policy, or the optional connected experiences policy, govern referencing webpages in PowerPoint Agent Mode on Mac? Watch the Learn web search article and Message center.
- Is the feature on by default for licensed users, and does it need any admin or user action? The roadmap and release note do not say.
- Which licence experience (Microsoft 365 Copilot Basic or Premium) includes it, and is any usage metered?
- Can users supply webpage addresses, and are source references embedded in the generated deck?
- Will Microsoft add an audit event or log that identifies web sources used in a presentation?

<!-- rationale
risk: Medium. Copilot's web search sends generated queries to Bing, which Microsoft says sits outside the Data Protection Addendum, and whether this feature follows the Allow web search in Copilot policy is not yet documented.
cost: Low. Microsoft publishes no separate licence or meter for this feature, so the known cost is admin time; users need a Microsoft Copilot licence experience that includes Copilot in PowerPoint.
impact: Medium. Copilot users creating presentations in PowerPoint on Mac notice it; admins see no new setting unless web search policy turns out to govern it.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls: first table row / admin-path: Microsoft 365 admin center > Copilot > Settings > Data access > Web search for Microsoft Copilot and Microsoft Copilot Chat reaches the documented Cloud Policy shortcut. | Found: Follow the link from Copilot settings to create an Allow web search in Copilot cloud policy in the Microsoft 365 Apps admin center. | Fix: The printed route is a valid shortcut but stops before configuration. Append to controls[0].note and the rendered note: 'Follow this shortcut to Microsoft 365 Apps admin center: Customization > Policy Management > Policy configurations > Create > Start with the basics > Choose the scope > Configure Settings > Allow web search in Copilot.' Cite https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy alongside the existing sources; its creation steps give the remaining route. | Source: https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center
-->
