---
title: "Microsoft Purview Endpoint DLP: hyperlinks in Edge warn and block notifications (Worldwide)"
slug: "microsoft-purview-endpoint-data-loss-prevention-add-support-of-hyperlinks-in-warn-a-558688"
roadmapId: 558688
topic: "governance"
products: ["Microsoft Purview"]
summary: "Endpoint DLP warn and block notifications in Microsoft Edge can carry a hyperlink, such as a link to an internal policy site, in the Worldwide cloud. It is an option in DLP rules; Microsoft has not stated what happens to existing notifications on arrival."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "April CY2026"
previewDate: "March CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's Edge security page states that Endpoint DLP requires a Microsoft 365 E5, a Microsoft 365 E5 Compliance, or a Microsoft 365 Business Premium subscription. No separate licence, price or meter for notification hyperlinks is published."
audiences: ["compliance","security","change-adoption"]
tags: ["purview","dlp","endpoint-dlp","microsoft-edge","user-experience"]
sources:
  - title: "Microsoft 365 Roadmap 558688"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=558688"
    kind: "roadmap"
  - title: "Data Loss Prevention policy reference"
    url: "https://learn.microsoft.com/purview/dlp-policy-reference"
    kind: "learn"
  - title: "Help prevent unauthorized sensitive data sharing with block actions and allow overrides"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-create-policy-unauthorized-data-sharing"
    kind: "learn"
  - title: "Create and deploy data loss prevention policies"
    url: "https://learn.microsoft.com/purview/dlp-create-deploy-policy"
    kind: "learn"
  - title: "Microsoft Edge security for your business"
    url: "https://learn.microsoft.com/deployedge/ms-edge-security-for-business"
    kind: "learn"
  - title: "Understand Data Loss Prevention (DLP) in Microsoft Edge for Business"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-security-dlp"
    kind: "learn"
  - title: "Set-DlpComplianceRule"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule"
    kind: "docs"
videos: []
related: ["microsoft-purview-endpoint-data-loss-prevention-add-support-of-hyperlinks-in-warn-and-bloc","endpoint-dlp"]
controls:
  - governs: "Whether Edge activities on sensitive content are audited, warned (Block with override) or blocked"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > policy > Edit policy > Customize advanced DLP rules > rule > Actions > Audit or restrict activities on Windows device > Service domain and browser activities > Block with override"
      docs: "https://learn.microsoft.com/purview/endpoint-dlp-create-policy-unauthorized-data-sharing"
    api:
      kind: "powershell"
      call: "Set-DlpComplianceRule -Identity <rule> -EndpointDlpRestrictions @(@{\"Setting\"=\"<Setting>\"; \"Value\"=\"Warn\"})"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule"
    note: "Set per rule. Block and Warn values also need the NotifyUser parameter. Requires Compliance Administrator or Compliance Data Administrator in Microsoft Entra ID."
  - governs: "Custom notification title, content and hyperlink for an Endpoint DLP rule"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > policy > Edit policy > Customize advanced DLP rules > rule"
      docs: "https://learn.microsoft.com/purview/dlp-policy-reference"
    api: null
    note: "Route ends at the rule. For policies scoped to Devices only, the DLP policy reference documents a custom title, content and a Get Support hyperlink, without further step labels."
confidence: "medium"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-05-11T23:15:11"
changes:
  - date: "2026-11-28"
    note: "New briefing for the Worldwide roadmap item, launched with an April CY2026 target after a March CY2026 preview."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 3 of 46 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 46
  confirmed: 42
  unconfirmed: 3
  contradicted: 1
  attempts: 0
  hash: "1e1c592bc659a95f7c18e042411bcbeb"
---

## What's changing

Endpoint DLP (Microsoft Purview data loss prevention enforced on onboarded devices) can show a hyperlink inside the warn and block notifications that Microsoft Edge displays when a rule is triggered. The roadmap item states that the user sees a notification with a customised title, message and hyperlink, and gives an internal policy SharePoint site as an example of where to send users.

The DLP policy reference documents that when a policy is scoped to **Devices** only, its rules offer "the option to customize the notification title, content, and add a hyperlink in the form of a Get Support button that appears on the Windows 10/11 device". The hyperlink must be a resolvable URL and is shown behind a selectable control; the title is limited to 120 characters and the content to 250. Microsoft Learn does not yet describe how the hyperlink is displayed in Edge's own notifications (November 2026), so what follows about Edge is the roadmap's description.

This roadmap item covers the Worldwide (Standard Multi-Tenant) cloud. Its status is Launched, with release phases Preview and General Availability, a preview date of March CY2026 and a target of April CY2026. Microsoft lists the same feature for GCC, GCC High and DoD under roadmap item 560398, with a May CY2026 target.

## Why it matters

A block message that only says an action is not allowed sends users to the service desk. A link to the organisation's DLP guidance or an exception request form lets them find out why and what to do next, which matters most for **Block with override** rules, where users decide for themselves whether to proceed.

Microsoft has not stated what happens to existing notifications on arrival, and no source says current rules change. Expect the link to appear only where an administrator adds one to a rule. The link is only as useful as the page behind it: a page users cannot open, or one that later moves, turns the notification into a dead end.

## Risk assessment

**Data exposure**
- No change to what DLP detects or blocks. The hyperlink is a URL the administrator types into the rule; the policy reference requires it to be a resolvable URL.

**Security & identity**
- A notification link is a click target users are encouraged to trust. Point it at a page on a domain users recognise, such as the organisation's SharePoint, so genuine DLP notifications do not teach users to follow unfamiliar links.

**Autonomy & actions**
- Whether an Edge activity is audited, warned or blocked is set by the rule's actions (first row of the controls table). The hyperlink does not change that.

**Change & support**
- The policy reference says custom policy tips show for the most restrictive rule, not necessarily the rule performing the restriction, so a user may see the link from a different rule than the one that acted. Plan link targets per policy rather than per rule.
- The reference describes the hyperlink as a Get Support button on Windows 10/11 devices; test how Edge renders it before writing user guidance.

## Cost and licensing

Microsoft's [Edge security page](https://learn.microsoft.com/deployedge/ms-edge-security-for-business) states: "Microsoft Endpoint data loss prevention requires a Microsoft 365 E5, a Microsoft 365 E5 Compliance, or a Microsoft 365 Business Premium subscription." The hyperlink is an option inside Endpoint DLP rules, so it comes under that requirement. Microsoft publishes no separate licence, price or meter for notification hyperlinks.

Indirect costs are the time to write notification text, to build or choose the page the link points to and to keep that page current.

## Scope

- **Users:** people on onboarded Windows 10/11 devices whose activity in Microsoft Edge matches an Endpoint DLP rule set to warn or block.
- **Policies:** the custom title, content and hyperlink options are documented for policies scoped to **Devices** only.
- **Roles:** the DLP deployment guide says the account that creates and deploys policies must be a member of one of these role groups: Compliance administrator, Compliance data administrator, Information Protection, Information Protection Admin or Security administrator.
- **Clouds:** Worldwide (Standard Multi-Tenant) on this roadmap item; GCC, GCC High and DoD are under item 560398.
- **Platforms:** Web, as the roadmap record lists it.

## Governance guidance

### Before rollout
- Choose the page each Devices-scoped DLP policy should link to, such as the DLP guidance on the organisation's SharePoint, and confirm every user in scope can open it.
- List the Endpoint DLP rules whose Edge activities are set to Block or Block with override; those are the rules whose notifications a link would help.
- Draft notification titles under 120 characters and content under 250, using tokens such as %%PolicyName%% where useful.

### At rollout
- Add the custom title, content and hyperlink to one rule in a policy scoped to Devices only, in the Microsoft Purview portal, and trigger it from a test device in Edge.
- Confirm the link opens the intended page from the Edge notification before adding it to other rules.
- Tell the service desk which page the notification links to, so they can point users to it.

### After rollout
- Check Activity explorer for blocked and overridden events from the rules that carry a link, to see whether overrides change.
- Review the linked page whenever DLP policies change, and update the rule if the page moves.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Edge activities on sensitive content are audited, warned (Block with override) or blocked</strong><br><small class="controls__note">Set per rule. Block and Warn values also need the NotifyUser parameter. Requires Compliance Administrator or Compliance Data Administrator in Microsoft Entra ID.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › policy › Edit policy › Customize advanced DLP rules › rule › Actions › Audit or restrict activities on Windows device › Service domain and browser activities › Block with override <a href="https://learn.microsoft.com/purview/endpoint-dlp-create-policy-unauthorized-data-sharing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-DlpComplianceRule -Identity &lt;rule&gt; -EndpointDlpRestrictions @(@{&quot;Setting&quot;=&quot;&lt;Setting&gt;&quot;; &quot;Value&quot;=&quot;Warn&quot;})</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Custom notification title, content and hyperlink for an Endpoint DLP rule</strong><br><small class="controls__note">Route ends at the rule. For policies scoped to Devices only, the DLP policy reference documents a custom title, content and a Get Support hyperlink, without further step labels.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › policy › Edit policy › Customize advanced DLP rules › rule <a href="https://learn.microsoft.com/purview/dlp-policy-reference" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The hyperlink is set per rule, not tenant-wide. The DLP deployment guide names Compliance administrator, Compliance data administrator, Information Protection, Information Protection Admin and Security administrator as the role groups that can create and deploy policies; the Set-DlpComplianceRule reference says the EndpointDlpRestrictions parameter requires Compliance Administrator or Compliance Data Administrator in Microsoft Entra ID. The Set-DlpComplianceRule reference documents NotifyPolicyTipUrl as the URL in the popup dialog for Exchange workloads, and documents no parameter for the Get Support hyperlink on device notifications at the time of writing (November 2026). Microsoft Learn documents no tenant-wide switch for notification hyperlinks.

## Open questions

- How does Edge display the hyperlink: as the Get Support button the policy reference describes for Windows 10/11, or in another form? Watch the DLP policy reference.
- Will Security & Compliance PowerShell gain a parameter for the device notification hyperlink, so it can be set in scripts? Watch the Set-DlpComplianceRule reference.
- Does the link appear on Edge warn and block notifications on macOS devices? Microsoft Learn describes the button on Windows 10/11 only.
- Are clicks on the link recorded anywhere, such as Activity explorer? Watch the Endpoint DLP documentation.

<!-- rationale
risk: Low. The change adds a link to a notification users already see when a Devices-scoped DLP rule warns or blocks; what is audited, warned or blocked is still set by the rule's actions.
cost: Low. Endpoint DLP needs Microsoft 365 E5, E5 Compliance or Business Premium according to Microsoft's Edge documentation; no separate price for notification hyperlinks is published, so the cost is admin time.
impact: Low. Only users on onboarded devices whose Edge activity matches a rule that warns or blocks see the notification, and only rules an administrator gives a hyperlink show one.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Data exposure / behaviour: Adding notification hyperlinks makes no change to what DLP detects. | Found: Searched: Endpoint DLP hyperlink notification changes detection blocking actions existing rules rollout. Read roadmap 558688, DLP policy reference and Edge DLP page; they describe notification customisation, not an explicit unchanged-detection guarantee. | Fix: Replace 'No change to what DLP detects or blocks.' with 'The roadmap describes this change as adding hyperlinks to Edge warn and block notifications.'
- [unsupported, major] Risk assessment: Data exposure; Autonomy & actions; rationale: risk / behaviour: The hyperlink does not change the rule's auditing, warning or blocking behaviour. | Found: Searched: Endpoint DLP hyperlink notification changes detection blocking actions existing rules rollout. Opened DLP policy reference, deployment guide and Edge DLP page; rule actions are documented but no hyperlink-specific unchanged-enforcement statement found. | Fix: Remove 'The hyperlink does not change that.' Replace the risk rationale with: 'Low. The roadmap describes a link in an Edge warn or block notification. Microsoft has not stated what happens to existing notifications on arrival.' Apply the replacement of 'No change to what DLP detects or blocks.' specified for the detection claim.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Scope / record: Microsoft lists the same feature for GCC, GCC High and DoD under roadmap item 560398. | Found: Record 560398: "title": "Microsoft Purview: Endpoint Data Loss Prevention - Add support of hyperlinks in warn & block toast messages for Edge browser"; "clouds": ["GCC", "GCC High", "DoD"] | Fix: Add https://www.microsoft.com/microsoft-365/roadmap?id=560398 to sources as a roadmap source titled 'Microsoft 365 Roadmap 560398'. Its record supports the government-cloud statement and May CY2026 target.
- [supported, minor] What's changing / behaviour: Endpoint DLP extends Microsoft Purview data loss prevention to onboarded devices. | Found: Microsoft Endpoint DLP allows you to monitor onboarded Windows 10, and Windows 11 and onboarded macOS devices running any of the three latest released versions. Once a device is onboarded, DLP detects when sensitive items are used and shared. | Fix: Add https://learn.microsoft.com/purview/endpoint-dlp-getting-started to sources, titled 'Get started with endpoint data loss prevention', for the onboarded-device requirement. | Source: https://learn.microsoft.com/purview/endpoint-dlp-getting-started
- [supported, minor] front matter: licensing.notes; Cost and licensing; rationale: cost / licensing: The cited Edge security page says Endpoint DLP requires Microsoft 365 E5, Microsoft 365 E5 Compliance or Microsoft 365 Business Premium. | Found: Microsoft Endpoint data loss prevention requires a Microsoft 365 E5, a Microsoft 365 E5 Compliance, or a Microsoft 365 Business Premium subscription. | Fix: Add this sentence to Cost and licensing and reflect it in licensing.notes: 'Microsoft's Purview service description instead lists Endpoint DLP as included with Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW and Microsoft Defender + Purview Suite FLW, and Microsoft 365 E5/A5/F5/G5 Information Protection & Governance; its Endpoint DLP table does not list standalone Business Premium.' Cite https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description in sources. | Source: https://learn.microsoft.com/deployedge/ms-edge-security-for-business
- [supported, minor] controls[1].ui; Governance controls table / admin-path: Data loss prevention > Policies > policy > Edit policy > Customize advanced DLP rules > rule reaches the rule containing the notification customisation options. | Found: ## Rules ... ### User notifications and policy tips ... If you selected Devices only ... plus the option to customize the notification title, content, and add a hyperlink in the form of a Get Support button | Fix: Keep the printed route, whose navigation is confirmed by the already-cited unauthorized-data-sharing guide. Replace the note with: 'Route ends at the rule. In its user notifications and policy tips, policies scoped to Devices only offer a custom notification title, content and a Get Support hyperlink; the policy reference gives no further UI step labels.' | Source: https://learn.microsoft.com/purview/dlp-policy-reference
- [unsupported, minor] rationale: impact / default: Only rules an administrator gives a hyperlink show one. | Found: Searched: Endpoint DLP hyperlink default Edge; Endpoint DLP hyperlinks notification only; notification changes existing rules rollout. Read roadmap 558688, DLP policy reference and endpoint settings; no statement excludes automatic or pre-existing links on arrival. | Fix: Replace the impact rationale with: 'Low. The roadmap describes hyperlinks in notifications shown when an Edge rule triggers; Microsoft has not stated what happens to existing notifications on arrival.' The 'Expect' sentence in Why it matters is analysis, not evidence for this categorical default claim.
- [contradicted, minor] Governance guidance: After rollout; Governance controls table / consistency: The checklist tells readers to check Activity explorer, but the controls table has no monitoring row. | Found: Checklist: 'Check Activity explorer for blocked and overridden events'. Table rows: 'Whether Edge activities ... are audited, warned ... or blocked' and 'Custom notification title, content and hyperlink'. Neither gives Activity explorer. | Fix: Remove the checklist bullet 'Check Activity explorer for blocked and overridden events from the rules that carry a link, to see whether overrides change.' Do not add a control row during this correction.
-->
