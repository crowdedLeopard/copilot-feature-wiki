---
title: "Microsoft 365 Copilot: Researcher reports export to PowerPoint, PDF, Infographic and Audio Overview"
slug: "m365-copilot-researcher-output-formats"
roadmapId: 546246
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Researcher users can export reports to PowerPoint, PDF, an Infographic or an Audio Overview, and the Word and Pages outputs are redesigned. No per-format admin switch is documented; brief users and check the Copilot Pages policy."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "April CY2026"
previewDate: null
risk: "low"
cost: "none"
impact: "medium"
defaultState: "user-opt-in"
action: "prepare"
licensing:
  model: "included"
  notes: "Included with Researcher, which Microsoft describes as part of the core default experience for Microsoft Copilot licensed users. Nothing specific to the export formats is published."
audiences: ["m365-admin","compliance","change-adoption"]
tags: ["researcher","m365-copilot","copilot-pages","powerpoint","data-export","cloud-policy"]
sources:
  - title: "Microsoft 365 Roadmap 546246"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=546246"
    kind: "roadmap"
  - title: "Microsoft Copilot Researcher agent frequently asked questions"
    url: "https://learn.microsoft.com/copilot/manage/faq-researcher"
    kind: "learn"
  - title: "Get started with Researcher agent in Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/manage/researcher-agent"
    kind: "learn"
  - title: "Agent installation in Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/manage/copilot-agent-install"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "Admin policies for Copilot Pages and Copilot Notebooks"
    url: "https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration"
    kind: "learn"
  - title: "Supported Copilot resources for Tenant Configuration Management (preview)"
    url: "https://learn.microsoft.com/graph/utcm-copilot-resources"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Whether users can create Copilot Pages, including Researcher's Pages output (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    kind: "learn"
videos: []
related: ["m365-copilot-critique-in-researcher","m365-copilot-researcher-council","cloud-policy","agent-registry","web-search"]
controls:
  - governs: "Whether Researcher, and with it every export format, is available in the organisation"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api: null
    note: "For Researcher the Edit users panel is disabled; Block applies tenant-wide. Automation for this Researcher-specific action is not yet documented at the time of writing (November 2026)."
  - governs: "Whether users can create Copilot Pages, including Researcher's Pages output"
    scope: "other"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > policy configuration > Choose the scope > Configure Settings > Create and view Copilot Pages and Copilot Notebooks"
      docs: "https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration"
    api:
      kind: "graph"
      call: "POST /beta/admin/configurationManagement/configurationMonitors"
      docs: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    note: "Preview API. UI: all users or a group. API: tenant-level policies only. Body: mode applyOnce, resource copilotpagesnotebooks, value \"0\" disables. Also governs Copilot Notebooks."
  - governs: "Per-format switch for Researcher exports to PowerPoint, PDF, Infographic and Audio Overview"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such setting at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-06-09T20:46:16"
changes:
  - date: "2026-11-28"
    note: "New briefing: Researcher export formats, the tenant-wide Researcher block, the Copilot Pages policy, and the FAQ's conflicting 'to be released soon' answer."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 61 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-28"
    note: "Corrected: removed the unconfirmed Graph automation for blocking Researcher, limited the Copilot Pages API to tenant-level policies, added the OneDrive exception to the default, and qualified admin access to Researcher sessions."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 62 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 62
  confirmed: 62
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "48e82410c5ad5d0ebc0d4f3cedd270fa"
---

## What's changing

Researcher, the deep-research agent in Microsoft 365 Copilot, gains new formats for the reports it writes. The roadmap item states that users will be able to export a Researcher report to PowerPoint, PDF, an Infographic or an Audio Overview, and that Microsoft is updating the user experience for the existing Word and Pages outputs.

Microsoft Learn does not describe these output formats yet, so what follows about the feature is the roadmap's description. The roadmap presents the formats as something each user chooses when exporting a report, and mentions no admin setting. Researcher itself is, in Microsoft's words, "part of the core default experience for Microsoft Copilot licensed users" ([Researcher FAQ](https://learn.microsoft.com/copilot/manage/faq-researcher)).

The roadmap record shows the item as Launched, in General Availability, with a target of April CY2026, on the Web platform and in the Worldwide (Standard Multi-Tenant) cloud. The sources disagree: at the time of writing (November 2026) the Researcher FAQ on Microsoft Learn still answers "Can Researcher agent generate PowerPoint and PDFs?" with "To be released soon".

## Why it matters

This changes what users can take away from Researcher, not what Researcher can read. A report built from the mail, chats, meetings and files a user can access can now leave the conversation as a slide deck, a PDF, an infographic or an audio file, which travel more easily than a chat answer. Expect questions from users and the help desk about where exported files go and whether they keep the protection of their sources.

If nobody acts, users who have Researcher get the new formats as options inside it. Microsoft Learn documents no setting for individual export formats at the time of writing (November 2026); the documented control that removes them is blocking Researcher for the whole tenant, which removes Researcher too.

## Risk assessment

**Data exposure**
- An exported report repackages content Researcher drew from work data and, where web search is allowed, the web. Microsoft's July 1, 2026 release note says that when generating files with Microsoft 365 Copilot, sensitivity labels are applied based on the highest label detected in the source data. Where each export format is saved is not yet documented.
- Reports saved as Pages are Copilot Pages, stored in the user-owned SharePoint Embedded container that Loop My workspace uses; the **Create and view Copilot Pages and Copilot Notebooks** policy decides whether users can create them.
- Researcher won't use web data when web search is disabled at the tenant level, and Microsoft says Researcher adheres to DLP policies in the same way as Microsoft Copilot.

**Security & identity**
- No change: the roadmap describes output formats only, with no new sign-in, connection or permission.

**Autonomy & actions**
- No change: the roadmap describes exporting as something the user chooses to do.

**Change & support**
- Users who already export to Word or Pages will meet a redesigned flow (roadmap).
- Microsoft states that, by default, Researcher session content is not directly accessible to admins or compliance tools; if a user explicitly submits feedback containing session data, that feedback might be stored. Confirm whether exported files land where your eDiscovery holds reach before relying on them in an investigation.

## Cost and licensing

**Licence.** Researcher is part of the core default experience for Microsoft Copilot licensed users, and Microsoft deployed it to existing users with Microsoft Copilot licences ([Researcher FAQ](https://learn.microsoft.com/copilot/manage/faq-researcher); [Agent installation in Microsoft Copilot](https://learn.microsoft.com/copilot/manage/copilot-agent-install)). The export formats are options inside Researcher, so they come with that licence. Microsoft publishes no separate licence, charge or meter for them at the time of writing (November 2026).

**Limits.** The Researcher FAQ gives a maximum of 25 queries per user per month for Researcher. It does not say whether an export counts as a query.

**Indirect costs.** Copilot Pages storage counts toward your organisation's overall SharePoint quota ([Admin policies for Copilot Pages and Copilot Notebooks](https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration)). Which storage the PowerPoint, PDF, Infographic and Audio Overview exports use is not yet documented. Budget admin time to brief users and the help desk.

## Scope

- **Users:** people with a Microsoft Copilot licence, for whom Researcher is part of the default experience.
- **Formats:** PowerPoint, PDF, Infographic and Audio Overview (new); Word and Pages (updated experience).
- **Cloud:** Worldwide (Standard Multi-Tenant), as the roadmap record lists it. The Researcher FAQ answers "Is Researcher agent available in Sovereign Clouds?" with "To be released soon".
- **Platform:** Web, per the roadmap record.
- **Admin roles:** blocking Researcher is done in the Microsoft 365 admin center; applying the Copilot Pages setting through Tenant Configuration Management needs the AI Administrator role.

## Governance guidance

### Before rollout
- Decide whether Researcher stays available, knowing that the Block action in the Microsoft 365 admin center removes Researcher for the whole tenant, not only the new formats.
- Check the **Create and view Copilot Pages and Copilot Notebooks** Cloud Policy setting, which decides whether users can create Copilot Pages, one of Researcher's output formats.
- Test each export format with a pilot user to see where the file is saved and which sensitivity label it carries.

### At rollout
- Tell Researcher users about the new formats and the redesigned Word and Pages outputs, and where your organisation wants exported files kept.
- Brief the help desk that the Researcher FAQ still lists PowerPoint and PDF as "To be released soon", so users may find conflicting guidance.

### After rollout
- Re-check the scope of the Copilot Pages policy if you restricted it, since disabling it also stops Copilot Notebooks.
- Watch Message center and the Researcher FAQ for an export-specific admin setting or documentation of where exports are stored.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Researcher, and with it every export format, is available in the organisation</strong><br><small>Tenant</small><br><small class="controls__note">For Researcher the Edit users panel is disabled; Block applies tenant-wide. Automation for this Researcher-specific action is not yet documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether users can create Copilot Pages, including Researcher's Pages output</strong><br><small class="controls__note">Preview API. UI: all users or a group. API: tenant-level policies only. Body: mode applyOnce, resource copilotpagesnotebooks, value &quot;0&quot; disables. Also governs Copilot Notebooks.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › policy configuration › Choose the scope › Configure Settings › Create and view Copilot Pages and Copilot Notebooks <a href="https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/admin/configurationManagement/configurationMonitors</code> <a href="https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Per-format switch for Researcher exports to PowerPoint, PDF, Infographic and Audio Overview</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

- The Researcher FAQ says agent-wide switches do not remove Researcher: Microsoft says it remains accessible in Microsoft Copilot Chat under **Tools** even when Copilot agents are disabled for some or all users. For Researcher the **Edit users** panel is disabled, so the Block action applies to the entire tenant.
- The Copilot Pages policy governs Copilot Pages and Copilot Notebooks together, for all users or a group. A change takes up to 90 minutes to apply where a policy configuration already existed, and up to 24 hours where none did.
- Not configured leaves creation available except for users whose OneDrive creation is disabled; those users cannot create Copilot Pages or Copilot Notebooks regardless of this policy ([Admin policies for Copilot Pages and Copilot Notebooks](https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration)).
- Through the Graph API the Copilot Pages setting is supported in tenant-level policies only; the operation fails if this setting is configured in any group-level policy in the Microsoft 365 Apps admin center ([Supported Copilot resources for Tenant Configuration Management](https://learn.microsoft.com/graph/utcm-copilot-resources)).
- Microsoft Learn documents no setting for individual Researcher export formats at the time of writing (November 2026).

## Open questions

- Where are PowerPoint, PDF, Infographic and Audio Overview exports saved (OneDrive, the Copilot Pages container or a local download), and which storage quota do they use? Watch the Researcher FAQ.
- Do Infographic and Audio Overview outputs carry the highest sensitivity label of their sources, as Microsoft describes for generated files?
- Will Microsoft add an admin setting to turn individual export formats off without blocking Researcher? Watch Message center.
- Does exporting a report count against Researcher's 25 queries per user per month?
- When will the Researcher FAQ be updated to match the roadmap's Launched status for PowerPoint and PDF?

<!-- rationale
risk: Low. The roadmap describes new formats for reports users already create and could already export to Word or Pages; it describes no new data sources, permissions or actions.
cost: None. Researcher is part of the core default experience for Microsoft Copilot licensed users, and Microsoft publishes no separate licence, charge or meter for the export formats.
impact: Medium. Researcher users notice new export options and a redesigned Word and Pages flow; people without Researcher see nothing.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Scope: Cloud / availability: The Researcher FAQ answers the sovereign-cloud availability question with 'To be released soon'. | Found: Is Researcher agent available in Sovereign Clouds? To be released soon. | Fix: Append: 'The Microsoft Copilot service description instead lists Researcher as available in GCC and GCCH, but not currently available in DoD; this is Researcher availability, not confirmation of these export formats.' Cite https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot. | Source: https://learn.microsoft.com/copilot/manage/faq-researcher
- [supported, minor] Governance controls: agent-wide switches / applicability: The Researcher FAQ says Researcher remains accessible under Tools even when Copilot agents are disabled for some or all users. | Found: This tool will remain accessible in Microsoft Copilot Chat under Tools, even when Copilot agents are disabled for some or all users in Microsoft 365 admin center. | Fix: Append: 'The Agent installation page gives a conflicting statement: disabling or restricting Copilot extensibility applies to both non-Microsoft-deployed and Microsoft-deployed agents.' Cite https://learn.microsoft.com/copilot/manage/copilot-agent-install and retain the independently documented Researcher-specific Block action. | Source: https://learn.microsoft.com/copilot/manage/faq-researcher
- [supported, minor] Risk assessment: Data exposure / behaviour: Copilot Pages are stored in a user-owned SharePoint Embedded container. | Found: Copilot Pages (.page files) and Copilot Notebooks are stored in the same user-owned SharePoint Embedded container used by Loop My workspace. | Fix: Replace the storage clause with: 'The admin-policy page says Copilot Pages use a user-owned SharePoint Embedded container, but the storage page says Pages and Notebooks now use OneDrive for Business; only items created before November 2025 remain in the legacy container.' Cite https://learn.microsoft.com/microsoft-365/loop/cpcn-storage alongside the existing policy-page citation. | Source: https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration
- [supported, minor] Cost and licensing: Indirect costs / cost: Copilot Pages storage counts toward the organisation's overall SharePoint quota. | Found: Storage counts toward your organization's overall SharePoint quota. | Fix: Replace with: 'The admin-policy page says storage counts toward the organisation's SharePoint quota, but the storage page says current Pages and Notebooks count against the user's OneDrive limit; the SharePoint quota applies to legacy items created before November 2025.' Cite https://learn.microsoft.com/microsoft-365/loop/cpcn-storage alongside the existing policy-page citation. | Source: https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration
-->
