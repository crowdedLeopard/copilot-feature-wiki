---
title: "Microsoft 365 Copilot: declarative agents ground answers in scanned PDFs from SharePoint"
slug: "m365-copilot-newly-created-declarative-agents-now-understand-referenced-scanned-pdfs"
roadmapId: 550514
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Newly created declarative agents can now answer from scanned and image-based PDFs referenced in SharePoint. Microsoft Learn documents no switch for it, so review which SharePoint content agents can reach."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop"]
targetDate: "February CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft's knowledge sources page says SharePoint and OneDrive knowledge requires the signed-in user to have an active Microsoft 365 Copilot licence. No price or meter specific to scanned PDFs is published."
audiences: ["m365-admin","service-owner","security","maker"]
tags: ["declarative-agents","m365-copilot","sharepoint","knowledge-grounding","oversharing","restricted-content-discovery","agent-governance"]
sources:
  - title: "Microsoft 365 Roadmap item 550514"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=550514"
    kind: "roadmap"
  - title: "Add knowledge sources to your declarative agent"
    url: "https://learn.microsoft.com/plugins/knowledge-sources"
    kind: "learn"
  - title: "Create declarative agents by using Microsoft 365 Agents Toolkit and TypeSpec"
    url: "https://learn.microsoft.com/plugins/build-declarative-agents-typespec"
    kind: "learn"
  - title: "Add knowledge sources to an agent in Agent Builder"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/agent-builder-add-knowledge"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Restrict discovery of SharePoint sites and content"
    url: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    kind: "learn"
videos: []
related: ["knowledge-grounding","sensitivity-labels"]
controls:
  - governs: "Whether a given agent is available to anyone in the organisation"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST /beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Existing control, not specific to scanned PDFs. Graph API is beta, needs a Microsoft Agent 365 licence and takes no request body."
  - governs: "Which SharePoint sites Microsoft Copilot can discover content from"
    scope: "site"
    ui:
      surface: "SharePoint admin center"
      path: "Sites > Active sites > site > Settings > Restrict content from Microsoft Copilot"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    api:
      kind: "powershell"
      call: "Set-SPOSite -Identity <site-url> -RestrictContentOrgWideSearch $true"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    note: "Existing control, not specific to scanned PDFs. Needs a Copilot licence and SharePoint Advanced Management; affects discovery, not permissions; SharePoint sites only, not OneDrive."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-08-25T23:13:41"
changes:
  - date: "2026-11-21"
    note: "First briefing for this item: Launched with a February CY2026 target; Microsoft Learn does not yet describe the scanned-PDF behaviour or any setting for it."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 62 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected after the independent check: accuracy wording now matches the roadmap, added the Restricted SharePoint Search prerequisite, and removed unsupported identity and prior-inability statements."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 59 statements not yet confirmed"
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 60 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 60
  confirmed: 57
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "deb2b7a4af4e01a40710943953154624"
---

## What's changing

Newly created declarative agents can now ground their answers in scanned PDFs and image-based documents that they reference from SharePoint. The roadmap item describes this as unlocking a class of enterprise content that was previously hard to use in agent scenarios.

Microsoft Learn has no page that describes this behaviour, so what follows about how it works is the roadmap's description. The roadmap record says "newly created" agents and does not say whether agents created earlier are covered. It does not say how the scanned content is read, which file types beyond PDFs count as image-based, or any measured accuracy results.

The roadmap record gives the status as Launched, with a target of February CY2026 and the General Availability release phase. It lists Worldwide (Standard Multi-Tenant) as the cloud and Desktop as the platform. A separate April 7, 2026 entry in the Microsoft 365 Copilot release notes (roadmap ID 531758) describes declarative agents interpreting embedded images in .docx, .pptx and .pdf files; that is a different roadmap item and this briefing does not treat it as the same change.

## Why it matters

Scans are often the least governed content in a SharePoint tenant: archived contracts, signed forms, invoices and legacy records, frequently in libraries with broad permissions. An agent that can now read them can quote them in answers, so existing permission problems can become more visible.

Microsoft has not stated what happens on arrival, so no source says an administrator has to switch anything on. Plan on the assumption that agents pointed at SharePoint items, or at no specific item, can now return content from scanned files that the signed-in user can already open.

## Risk assessment

**Data exposure**
- An agent whose knowledge is set to a site, library, folder or file can now use scanned PDFs inside that scope. The Agents Toolkit page says that when no `items_by_url` or SharePoint IDs array is given, the agent can access all OneDrive and SharePoint content in the organisation that the signed-in user can access, so leaving the scope open widens what scans can surface.
- The Agent Builder page says the agent respects existing permissions and sensitivity labels for files already uploaded to SharePoint or OneDrive. Libraries of scans with broad permissions are therefore the exposure; check them with the Restricted Content Discovery row in the controls table.

**Security & identity**
- SharePoint and OneDrive knowledge requires the signed-in user to hold an active Microsoft 365 Copilot licence, and SharePoint grounding is limited to content that user can access. Microsoft Learn does not describe a separate identity for scanned-content processing.

**Autonomy & actions**
- No change documented: the roadmap item describes reading scanned content to answer questions, not new actions.

**Change & support**
- Answers from agents may change for the same prompts once scans are readable, and makers may report differing results for scans of varying quality. The roadmap describes grounding as reliable but supplies no measured accuracy results, so set expectations with makers.

## Cost and licensing

Microsoft's knowledge sources page says SharePoint and OneDrive knowledge sources require the signed-in user to have an active Microsoft 365 Copilot licence, and that without one requests fail with the message "Sorry, I wasn’t able to respond". Its table also marks SharePoint as needing a licence or metered usage.

A price, meter or licence specific to scanned-PDF grounding is not yet published, and the roadmap record names none. The only other cost the sources show is admin and maker time to review libraries of scans.

The Graph block endpoint in the controls table needs a Microsoft Agent 365 licence, according to its reference page; the admin centre block action does not carry that statement on its page.

## Scope

The roadmap record lists the Worldwide (Standard Multi-Tenant) cloud, the Desktop platform and General Availability as the release phase. It does not list GCC, GCC High or DoD; that is a record fact, not a statement that the feature is unavailable there.

The record scopes the change to newly created declarative agents and to scanned PDFs and image-based documents referenced from SharePoint. Users need an active Microsoft 365 Copilot licence to use SharePoint knowledge in an agent. Microsoft has not stated a rollout mechanism specific to scanned-PDF grounding. The Agent Builder documentation says SharePoint cannot be used as a knowledge source when Restricted SharePoint Search is enabled.

## Governance guidance

### Before rollout
- Identify SharePoint libraries that hold scanned records and review their permissions, since an agent returns only what the asking user can access.
- Review which declarative agents use SharePoint knowledge with no specific item set, and ask makers to scope them to named sites, libraries or folders.
- Confirm which sensitivity labels cover the scanned files, using the Agent Builder page's statement that agents respect existing labels.
- Brief makers that the roadmap item covers newly created agents and that Microsoft has not said whether older agents behave the same way.

### At rollout
- Test a newly created agent against a few scanned PDFs the tester can open and one they cannot, and confirm the second is not quoted.
- Apply the Restricted Content Discovery row to sites that need review before Copilot can discover their scans.
- Block any agent that returns content from a site you have not reviewed, using the Block row in the controls table.

### After rollout
- Ask makers and support staff for reports of wrong or missing answers from scanned files and record which library each came from.
- Re-check Message center and the Microsoft 365 Copilot release notes for a page that describes this behaviour or any setting for it.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a given agent is available to anyone in the organisation</strong><br><small>Agent</small><br><small class="controls__note">Existing control, not specific to scanned PDFs. Graph API is beta, needs a Microsoft Agent 365 licence and takes no request body.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which SharePoint sites Microsoft Copilot can discover content from</strong><br><small>Site</small><br><small class="controls__note">Existing control, not specific to scanned PDFs. Needs a Copilot licence and SharePoint Advanced Management; affects discovery, not permissions; SharePoint sites only, not OneDrive.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Sites › Active sites › site › Settings › Restrict content from Microsoft Copilot <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOSite -Identity &lt;site-url&gt; -RestrictContentOrgWideSearch $true</code> <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No setting specific to scanned-PDF grounding is documented, so these rows are the existing controls an administrator can use instead. They govern whether an agent is available and whether a SharePoint site is discoverable to Copilot, not whether scans are read.

The Block action in the Microsoft 365 admin center acts on the selected agent for the whole organisation. Its page says blocking an agent created with Agent Builder or Copilot Studio affects it in other host products, while blocking an agent created with SharePoint or Microsoft Foundry affects only Copilot Chat; it does not name agents built with the Agents Toolkit. The Graph call is a beta API.

Restricted Content Discovery changes discoverability, not permissions, and the page says users who already have access can still open the content. The page does not say how it applies to an agent whose knowledge is set to a specific SharePoint item. By default only SharePoint administrators can manage it.

## Open questions

- Does the scanned-PDF behaviour apply to declarative agents created before it launched, and how would an administrator tell the difference? Watch the Microsoft 365 Copilot release notes and the roadmap item.
- Is there an admin or maker setting to turn scanned-content reading off, or to exclude a library? Microsoft Learn describes none at the time of writing (November 2026).
- Does Restricted Content Discovery or a sensitivity label stop an agent from reading scanned files in a site pinned by URL as knowledge? Watch the Restricted Content Discovery page.
- How does this change relate to the embedded image understanding in roadmap item 531758, and which file types beyond PDFs count as image-based?

<!-- rationale
risk: Medium. Scanned documents described by the roadmap as previously hard to use become more usable as answer sources, so oversharing in SharePoint libraries holding scans surfaces more readily; the agent pages say existing permissions and sensitivity labels still apply.
cost: Low. The only cost the sources show is admin time and the Microsoft 365 Copilot licence that SharePoint knowledge already requires; no charge or meter specific to scanned PDFs is published.
impact: Medium. Makers and users of declarative agents grounded in SharePoint libraries of scans, such as contracts, forms and archived records, notice better answers; other users see no change.
-->

<!-- verifier-findings (2026-11-28, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Cost and licensing; rationale: cost / cost: The only costs the sources show are the existing Microsoft 365 Copilot licence and admin or maker time. | Found: The following table ... indicates whether users require a Microsoft 365 Copilot license or metered usage to access agents with that capability or knowledge source. | SharePoint | ✅ | ✅ | Yes | | Fix: Remove 'The only other cost the sources show is admin and maker time to review libraries of scans' and replace it with 'Reviewing libraries of scans also creates admin and maker work.' Replace the cost rationale with 'Low. Reviewing scanned-document libraries creates admin and maker work. Microsoft documents SharePoint knowledge through a Copilot licence or metered usage, but no scanned-PDF-specific charge or meter is published.' Keep the knowledge-sources table attribution and acknowledge the prerequisites page's Copilot Credits route as specified in the licensing correction. | Source: https://learn.microsoft.com/plugins/knowledge-sources
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] licensing.notes; Risk assessment: Security & identity; Cost and licensing; Scope; rationale: cost / licensing: SharePoint and OneDrive knowledge requires the signed-in user to hold an active Microsoft 365 Copilot licence, as stated on the knowledge sources page. | Found: SharePoint and OneDrive knowledge sources require the signed-in user to have an active Microsoft 365 Copilot license. | Fix: Retain the attribution, but qualify the repeated licence statements with: 'Microsoft's prerequisites page also lists declarative-agent SharePoint data as available through usage-based billing in Copilot Credits without a full Copilot licence, which differs from the knowledge sources page's licence-only note.' Cite https://learn.microsoft.com/microsoft-365/copilot/extensibility/prerequisites#agent-capabilities-and-licensing-models. | Source: https://learn.microsoft.com/plugins/knowledge-sources
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: The checklist tells readers to review permissions, scope knowledge and confirm sensitivity labels, but those controls have no table rows. | Found: review their permissions; ask makers to scope them to named sites, libraries or folders; Confirm which sensitivity labels cover the scanned files. Controls table: agent Block; Restricted Content Discovery. | Fix: The Before rollout permission-review, knowledge-scoping and sensitivity-label steps have no corresponding control rows. Do not add rows as part of this correction.
- [contradicted, minor] front matter: action / consistency: The prepare rating conflicts with the action scale for a launched, medium-risk change with controls and decisions to take now. | Found: status: launched; risk: medium; action: prepare. Newly created declarative agents can now ground their answers in scanned PDFs. Apply the Restricted Content Discovery row ... Block any agent ... | Fix: Set action to act-now: the briefing describes a launched change with medium risk and existing controls and decisions to apply now.
-->
