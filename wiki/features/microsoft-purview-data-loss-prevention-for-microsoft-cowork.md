---
title: "Microsoft Purview: Data Loss Prevention now covers Microsoft Cowork"
slug: "microsoft-purview-data-loss-prevention-for-microsoft-cowork"
roadmapId: 570845
topic: "governance"
products: ["Microsoft Purview"]
summary: "Purview DLP policies for the Copilot location extend to Microsoft Cowork: sensitivity-label grounding, sensitive-prompt blocking and web-search blocking. Existing policies apply automatically; review them."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: "September CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "per-user"
  notes: "The Purview service description lists restricting files and emails as included in Microsoft 365 E5/A5, Purview Suite and similar plans; prompt protection is available to all Copilot and Copilot Chat users. It does not name Cowork separately."
audiences: ["security","compliance","m365-admin","service-owner"]
tags: ["purview","dlp","cowork","m365-copilot","copilot-chat","sensitivity-labels","sensitive-information-types","web-search"]
sources:
  - title: "Learn about using Microsoft Purview Data Loss Prevention to protect interactions with Microsoft 365 Copilot, Copilot Chat, and Cowork"
    url: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Learn about Microsoft Purview billing models"
    url: "https://learn.microsoft.com/purview/purview-billing-models"
    kind: "learn"
  - title: "New-DlpCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy?view=exchange-ps"
    kind: "learn"
  - title: "MC1477182: Microsoft Purview: Data Loss Prevention for Microsoft Cowork"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1477182"
    kind: "message-center"
  - title: "Microsoft 365 Roadmap 570845"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570845"
    kind: "roadmap"
videos: []
related: ["purview-dlp-block-sensitive-data-in-copilot-web-search","microsoft-purview-data-loss-prevention-to-restrict-processing-external-emails-in-m365-copi","microsoft-purview-dspm-copilot-readiness-and-data-explorer","auditing"]
controls:
  - governs: "DLP policy at the Microsoft Copilot, Copilot Chat, and Copilot Cowork location"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Loss Prevention > Policies > + Create policy > Custom > Custom policy > Locations > Microsoft Copilot, Copilot Chat, and Copilot Cowork"
      docs: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about"
    api:
      kind: "powershell"
      call: "New-DlpCompliancePolicy -Name \"<policy name>\" -Locations $loc -EnforcementPlanes @(\"CopilotExperiences\")"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy?view=exchange-ps"
    note: "Role such as Purview Data Security AI Admin. The PowerShell example on the reference page is for the Microsoft 365 Copilot location; it does not mention Cowork."
confidence: "high"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-11-06T23:04:41"
changes:
  - date: "2026-11-18"
    note: "New briefing: Purview DLP for the Copilot location now covers Microsoft Cowork, with the Cowork gaps Learn lists."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 60 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected after verification: added the email-date and calendar-invite qualification, replaced the unpublished-licensing statements with the Purview service description's licensing, removed an unsupported absence claim and one monitoring bullet, and set action to act-now."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 72 statements not yet confirmed"
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 65 statements not yet confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 72 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 72
  confirmed: 72
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "179f216234f3f14228307a860560ab5b"
---

## What's changing

Microsoft Purview Data Loss Prevention (DLP) now extends to Microsoft Cowork, so one policy can govern both Microsoft 365 Copilot and Cowork. The roadmap item describes three protections: preventing the use of labelled knowledge sources, blocking prompts that contain supported sensitive information types (SITs), and restricting sensitive prompts from being sent to Bing for web search.

Microsoft's notice MC1477182 says existing DLP policies that target the Microsoft Copilot workload apply to Cowork automatically, new policies created for Copilot include Cowork, and no separate configuration is required. On Microsoft Learn, the location is named **Microsoft Copilot, Copilot Chat, and Copilot Cowork**. The notice says SIT-based prompt and web-search DLP apply to the prompt text only, not uploaded files, and Learn says the same.

Learn lists what Cowork does not yet support: blocking external email, and customising the **Learn about access restrictions** link in Policy Tips. It also marks the SIT-in-prompts capability as preview, while the roadmap record and the notice describe general availability (see Scope for dates).

## Why it matters

If your tenant already has a DLP policy at the Copilot location, Cowork interactions now fall under it. That is protective, but it also means users can start seeing blocked prompts, or prompts that skip web search, in an experience your policy author may not have tested. Treat this as a policy review, not a new project.

The decision for a service owner is which labels and SITs the shared policy should name, now that Cowork prompts and the files and emails it grounds on are in scope.

## Risk assessment

**Data exposure**
- Sensitivity-label rules stop Copilot and Cowork using the content of matching files and emails in responses, but Learn says identified items can still appear in the response citations. For email, Learn says this protection covers emails sent on or after January 1, 2025, and calendar invites are not supported. Review whether citation titles are acceptable for your most sensitive labels.
- Prompt and web-search rules evaluate the text typed into the prompt only. Learn says DLP cannot scan files uploaded directly into prompts, so sensitive data inside an upload is not evaluated.
- Learn says blocking external email is not yet supported for Cowork, so a rule built for that condition does not cover Cowork.

**Security & identity**
- Learn says Copilot prompts run in the security context of the user who submits them, so a user must already have access to content before a response can include it. DLP excludes items from the response on top of that access.
- Creating or editing these policies needs one of the roles Learn lists, such as Purview Data Security AI Admin or Purview Compliance Administrator.

**Autonomy & actions**
- No change documented: the sources describe policy evaluation of prompts and grounding content, and no new agent actions.

**Change & support**
- Existing policies extend to Cowork per MC1477182, so expect helpdesk questions about blocked prompts. Policy Tips link customisation is not yet supported for Cowork, so those users see the standard Learn link.
- Learn says updates to a DLP policy can take up to four hours to reflect in these experiences, which slows tuning.
- Learn says you cannot use the sensitive information types and sensitivity labels conditions in the same rule; keep one rule for each.

## Cost and licensing

The Purview service description publishes licensing for the Copilot DLP location: restricting files and emails is included in Microsoft 365 E5/A5, Microsoft Purview Suite/EDU/FLW, Microsoft Defender + Purview Suite FLW, Microsoft 365 E5/A5/F5 Information Protection and Governance, and Office 365 E5/A5. Prompt protection is available to all Microsoft Copilot and Copilot Chat users. That table does not separately name Cowork, so any Cowork-specific entitlement differences remain unconfirmed. The Learn feature page's Licensing section only links to Microsoft 365 Enterprise Plans and the Microsoft 365 security and compliance licensing guidance. The Purview billing models page describes the per-user licensing model as the one for Microsoft 365 assets.

MC1477182 describes no meter or charge for the Cowork extension, and no meter is documented for it at the time of writing (November 2026). The known cost is admin time: reviewing existing policies, testing in simulation mode, tuning SITs and labels, and briefing stakeholders.

## Scope

- **Who and what:** Microsoft 365 Copilot, Copilot Chat and Cowork prompts and grounding content, through the single **Microsoft Copilot, Copilot Chat, and Copilot Cowork** policy location. The notice names administrators of Copilot, Cowork and Purview DLP as the affected group.
- **Email and file coverage:** a sensitivity-label rule supports file items and, for email, emails sent on or after January 1, 2025. Learn says calendar invites are not supported.
- **Cloud and platform:** the roadmap record lists Worldwide (Standard Multi-Tenant) and Web.
- **Dates:** the roadmap record gives status Launched, preview September CY2026 and General Availability October CY2026. MC1477182 gave Public Preview from late September to early October 2026 and Worldwide General Availability from mid-October to late October 2026. The notice's end date is 2026-11-30 and it sets no act-by date.
- **Learn and the notice differ:** Learn marks blocking SITs in prompts as preview and rolling out. Where they differ, treat the notice and roadmap record as the rollout statement and check your tenant.
- **Policy rules:** the location is available only in the Custom policy template, and selecting it disables all other locations for that policy. Policy simulation mode is available for Microsoft 365 Copilot and Cowork.
- **Administrative units:** Learn documents scoping this location by administrative unit, including Cowork, as preview and rolling out, so it may not yet be in your tenant. Scoping follows the user who submits the prompt.
- **Not covered for Cowork:** external email blocking and Policy Tips link customisation. Uploaded file contents are not scanned.

## Governance guidance

### Before rollout
- Inventory the DLP policies that use the Microsoft Copilot, Copilot Chat, and Copilot Cowork location (controls table, row 1), because MC1477182 says they now apply to Cowork.
- Decide which sensitivity labels and SITs the shared policy should name, and check that any rule needing external email blocking or a custom Policy Tips link has a fallback, because Learn says neither is supported for Cowork yet.
- Confirm who holds a role Learn lists for editing these policies, such as Purview Data Security AI Admin.
- Tell compliance, security and AI governance stakeholders, as the notice recommends.

### At rollout
- Test new or changed rules in policy simulation mode first, which Learn says is available for Cowork.
- Keep SIT rules and sensitivity-label rules in separate rules, as Learn does not allow both conditions in one rule.
- Allow up to four hours for an edited policy to reach Copilot and Cowork, per Learn.

### After rollout
- Tune SIT selection where benign prompts are blocked, and tell Cowork users that uploaded files are not checked.
- Recheck the Learn page for the preview and rollout labels as they change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>DLP policy at the Microsoft Copilot, Copilot Chat, and Copilot Cowork location</strong><br><small>Tenant</small><br><small class="controls__note">Role such as Purview Data Security AI Admin. The PowerShell example on the reference page is for the Microsoft 365 Copilot location; it does not mention Cowork.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Loss Prevention › Policies › + Create policy › Custom › Custom policy › Locations › Microsoft Copilot, Copilot Chat, and Copilot Cowork <a href="https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpCompliancePolicy -Name &quot;&lt;policy name&gt;&quot; -Locations $loc -EnforcementPlanes @(&quot;CopilotExperiences&quot;)</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The controls table has one row because Learn documents policy creation at one combined location, which is where Cowork coverage is set. Microsoft Learn shows no separate Cowork switch for that location at the time of writing (November 2026). The notice says no separate configuration is required to extend Copilot coverage to Cowork.

Learn says Cowork supports DLP alerts, notifications and policy simulation. The PowerShell example Microsoft publishes on the New-DlpCompliancePolicy page is written for the Microsoft 365 Copilot location with sensitivity labels; that page does not mention Cowork, so confirm the same call covers the Cowork location.

The roles Learn lists include Microsoft Entra AI Admin, Purview Data Security AI Admin, Purview Compliance Administrator and Microsoft Entra Global Admin. Learn recommends the roles with the fewest permissions.

## Open questions

- Does Cowork carry any entitlement difference from the Copilot DLP licensing in the Purview service description, which does not name Cowork separately? Watch that page and the Learn feature page.
- When will blocking external email and Policy Tips link customisation be supported for Cowork? Watch the feature's Learn page and Message center.
- Will DLP evaluate files uploaded into Cowork prompts? Both Learn and MC1477182 say prompt DLP applies to the typed text only, "at this time".
- Is there a way to apply a rule at the Copilot location to Copilot but not to Cowork? Learn and the notice describe one combined location and no separate setting.
- When does Learn drop its preview label for SIT-based prompt blocking, given the roadmap lists General Availability?

<!-- rationale
risk: Medium. Existing Copilot DLP policies start applying to Cowork without separate configuration, and Learn lists Cowork gaps: uploaded files are not scanned, external email blocking and the Policy Tips link are not yet supported.
cost: Low. The only cost the sources show is admin time to review and tune policies. The Purview service description lists restricting files and emails as included only in E5-tier plans and prompt protection as available to all Copilot users.
impact: Medium. Security and compliance admins must review policies, and Cowork users whose prompts match a rule get no response or lose web search for that prompt.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] rationale: cost / licensing: The rationale describes the listed file and email protection plans collectively as E5-tier plans. | Found: Microsoft 365 E5/A5, Microsoft Purview Suite/EDU/FLW and Microsoft Defender + Purview Suite FLW, Microsoft 365 E5/A5/F5 Information Protection and Governance | Office 365 E5/A5 | Fix: In the cost rationale, replace 'included only in E5-tier plans' with 'included in the plans listed in Cost and licensing'. The documented list also includes suite and frontline entitlements. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description
-->
