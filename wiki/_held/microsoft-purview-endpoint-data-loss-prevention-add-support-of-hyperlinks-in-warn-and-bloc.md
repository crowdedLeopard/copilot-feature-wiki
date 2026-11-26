---
title: "Microsoft Purview Endpoint DLP: hyperlinks in Edge warn and block notifications (GCC, GCC High, DoD)"
slug: "microsoft-purview-endpoint-data-loss-prevention-add-support-of-hyperlinks-in-warn-and-bloc"
roadmapId: 560398
topic: "governance"
products: ["Microsoft Purview"]
summary: "Endpoint DLP warn and block notifications in Microsoft Edge can carry a hyperlink, such as a link to an internal policy site, in US Government clouds. Microsoft has not stated what happens to existing notifications on arrival."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "May CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's Edge documentation states that Endpoint DLP requires a Microsoft 365 E5, a Microsoft 365 E5 Compliance, or a Microsoft 365 Business Premium subscription. No separate licence or charge for notification hyperlinks is published."
audiences: ["compliance","security","change-adoption"]
tags: ["purview","dlp","endpoint-dlp","microsoft-edge","user-experience","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 560398"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=560398"
    kind: "roadmap"
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
  - title: "Get started with Endpoint data loss prevention"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-getting-started"
    kind: "learn"
  - title: "Microsoft Edge security for your business"
    url: "https://learn.microsoft.com/deployedge/ms-edge-security-for-business"
    kind: "learn"
  - title: "Understand Data Loss Prevention (DLP) in Microsoft Edge for Business"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-security-dlp"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Set-DlpComplianceRule"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule"
    kind: "docs"
  - title: "Custom notification title, content and hyperlink for an Endpoint DLP rule (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/dlp-policy-reference#policy-tips-and-user-notifications-configuration-options"
    kind: "learn"
videos: []
related: ["endpoint-dlp"]
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
      docs: "https://learn.microsoft.com/purview/dlp-policy-reference#policy-tips-and-user-notifications-configuration-options"
    api: null
    note: "The DLP policy reference lists the notification title, content and hyperlink among the options of a Devices rule; Learn gives no step label for it inside the rule."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-07-14T22:41:38"
changes:
  - date: "2026-11-26"
    note: "New briefing for the US Government cloud roadmap item (GCC, GCC High, DoD), launched with a May CY2026 target."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 48 statements contradicted, 5 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected after review: default state is now Not stated; removed unsupported claims that the link reads no new data or leaves enforcement unchanged; the notification control now links the DLP policy reference; added the Purview service description's licensing table."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 40 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 40
  confirmed: 38
  unconfirmed: 0
  contradicted: 2
  attempts: 2
  hash: "8fee8537a5f9c3f45e2313e2b866c2a8"
---

## What's changing

Endpoint DLP (Microsoft Purview data loss prevention enforced on onboarded devices) can now show a hyperlink inside the warn and block notifications that Microsoft Edge displays when a rule is triggered. The roadmap item states that the user sees a notification with a customised title, message and hyperlink, and gives an internal policy SharePoint site as the kind of page to link to.

The DLP policy reference documents that rules for the Devices location offer "the option to customize the notification title, content, and add a hyperlink in the form of a Get Support button that appears on the Windows 10/11 device". The hyperlink must be a resolvable URL and sits behind a selectable control. Edge already shows its own notification for Endpoint DLP: under **Block with override**, users proceed with the **Ok** button on the Microsoft Edge notification. Microsoft Learn does not yet describe how the hyperlink appears in Edge's notifications specifically (November 2026), so what follows about Edge is the roadmap's description.

This roadmap item covers GCC, GCC High and DoD. Its status is Launched, release phase General Availability, with a target of May CY2026. Microsoft lists the same feature for the Worldwide cloud under roadmap item 558688.

## Why it matters

A block message that says only "not allowed" sends users to the service desk. A link to the organisation's DLP guidance, or to a request form, lets them find out why and what to do, which matters most for **Block with override** rules where users must judge whether to proceed.

Microsoft has not stated what happens to existing notifications on arrival. The link is only as useful as the page behind it: a link to a page users cannot open, or one that is later moved, turns a helpful notification into a dead end.

## Risk assessment

**Data exposure**
- The hyperlink must be a resolvable URL.

**Security & identity**
- A notification link is a click target users are told to trust. Point it at a page on a domain users recognise, such as the organisation's SharePoint, so that genuine DLP notifications do not train users to follow unfamiliar links.

**Autonomy & actions**
- Whether an action is audited, warned or blocked is set by the rule's actions (first row of the controls table).

**Change & support**
- Custom policy tips show for the most restrictive rule, not necessarily the rule performing the restriction, so users may see a link from a different rule than the one that acted. Plan link targets per policy, not per rule.
- Microsoft Learn documents the hyperlink as a Get Support button on Windows 10/11; confirm in a test that Edge renders it the same way before writing user guidance.

## Cost and licensing

Microsoft's Edge security documentation states: "Microsoft Endpoint data loss prevention requires a Microsoft 365 E5, a Microsoft 365 E5 Compliance, or a Microsoft 365 Business Premium subscription." The Microsoft Purview service description lists Endpoint DLP as included with Microsoft 365 E5/A5/G5 and other listed suites; its Endpoint DLP table does not list Business Premium. The hyperlink is an option within Endpoint DLP rules, so it falls under that requirement. No separate licence, price or meter for notification hyperlinks is published.

Indirect costs are the time to write notification text and to keep the linked page current.

## Scope

- **Users:** people on onboarded devices whose activity in Microsoft Edge matches an Endpoint DLP rule set to warn or block.
- **Roles:** the DLP deployment guide says the account that creates and deploys policies must be in one of these role groups: Compliance administrator, Compliance data administrator, Information Protection, Information Protection Admin or Security administrator.
- **Clouds:** GCC, GCC High and DoD, as the roadmap record lists them; Worldwide is roadmap item 558688.
- **Platform:** Web (Microsoft Edge), per the roadmap record.
- **Prerequisites:** devices onboarded to Endpoint DLP and a DLP policy scoped to the Devices location.

## Governance guidance

### Before rollout
- Choose the page each policy's notification will link to, and check that every user in the policy's scope can open it.
- Decide which rules set to **Block with override** should carry a link explaining when overriding is acceptable.
- Confirm your account is in a role group that can edit DLP policies.

### At rollout
- Edit a test policy's rule under Data loss prevention > Policies and add the notification title, content and hyperlink.
- Trigger the rule in Microsoft Edge on a test device and confirm the link appears and opens the intended page.
- Tell the service desk what the new notification says and where its link goes.

### After rollout
- Review the linked pages when a policy changes, so the guidance matches what the rule does.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Edge activities on sensitive content are audited, warned (Block with override) or blocked</strong><br><small class="controls__note">Set per rule. Block and Warn values also need the NotifyUser parameter. Requires Compliance Administrator or Compliance Data Administrator in Microsoft Entra ID.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › policy › Edit policy › Customize advanced DLP rules › rule › Actions › Audit or restrict activities on Windows device › Service domain and browser activities › Block with override <a href="https://learn.microsoft.com/purview/endpoint-dlp-create-policy-unauthorized-data-sharing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-DlpComplianceRule -Identity &lt;rule&gt; -EndpointDlpRestrictions @(@{&quot;Setting&quot;=&quot;&lt;Setting&gt;&quot;; &quot;Value&quot;=&quot;Warn&quot;})</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Custom notification title, content and hyperlink for an Endpoint DLP rule</strong><br><small class="controls__note">The DLP policy reference lists the notification title, content and hyperlink among the options of a Devices rule; Learn gives no step label for it inside the rule.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › policy › Edit policy › Customize advanced DLP rules › rule <a href="https://learn.microsoft.com/purview/dlp-policy-reference#policy-tips-and-user-notifications-configuration-options" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The hyperlink is set per rule. In Security & Compliance PowerShell, the Set-DlpComplianceRule reference documents no parameter for the Endpoint DLP notification title, content or hyperlink; its NotifyPolicyTipUrl parameter is described for the popup dialog in Exchange workloads. The EndpointDlpRestrictions parameter requires the Compliance Administrator or Compliance Data Administrator role in Microsoft Entra ID, and its Block and Warn values need the NotifyUser parameter as well.

## Open questions

- Does Microsoft Edge show the hyperlink as the same Get Support button that the DLP policy reference describes for Windows 10/11 notifications? Watch the DLP policy reference.
- Will Set-DlpComplianceRule gain a parameter for the Endpoint DLP notification hyperlink so it can be scripted? Watch the cmdlet reference.
- Does the Edge notification hyperlink also apply to Chrome and Firefox with the Microsoft Purview extension? Neither the roadmap item nor Learn says.

<!-- rationale
risk: Low. The hyperlink is an option administrators add to a DLP rule's notification; it changes the message users see.
cost: Low. Endpoint DLP needs Microsoft 365 E5, Microsoft 365 E5 Compliance or Microsoft 365 Business Premium; known indirect costs are the time to write notification text and maintain the linked page; no separate hyperlink price or meter is published.
impact: Low. Only users whose activity in Edge triggers a warn or block rule see the link.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What's changing: Devices notification options; controls[1].note; Scope: Prerequisites / applicability: A policy scoped to the Devices location offers custom notification title, content and a Get Support hyperlink. | Found: If you selected Devices only, you get all the same options ... plus the option to customize the notification title, content, and add a hyperlink in the form of a Get Support button that appears on the Windows 10/11 device. | Fix: Change the introductory clause in What's changing to 'The DLP policy reference documents that when Devices only is selected, rules offer'. Change Scope's prerequisite to 'devices onboarded to Endpoint DLP and a DLP policy scoped to the Devices location only'. Add 'when Devices only is selected' to controls[1].note and its rendered table note. Source: https://learn.microsoft.com/purview/dlp-policy-reference. | Source: https://learn.microsoft.com/purview/dlp-policy-reference
- [contradicted, blocker] Governance controls: PowerShell notification parameters / absence: Set-DlpComplianceRule documents no parameter for Endpoint DLP notification title, content or hyperlink. | Found: You can localize your custom policy tips by using the Set-DlpComplianceRule -NotifyPolicyTipCustomTextTranslations cmdlet. | Fix: Replace the sentence with 'In Security & Compliance PowerShell, the Set-DlpComplianceRule reference documents no parameter specifically for the Endpoint DLP notification hyperlink; its NotifyPolicyTipUrl parameter is described for the popup dialog in Exchange workloads.' The Devices notification section documents policy-tip localisation with NotifyPolicyTipCustomTextTranslations, so remove the broader title/content absence. Sources: https://learn.microsoft.com/purview/dlp-policy-reference and https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule. | Source: https://learn.microsoft.com/purview/dlp-policy-reference
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; rendered controls table; Governance guidance: At rollout / admin-path: Data loss prevention > Policies > policy > Edit policy > Customize advanced DLP rules > rule reaches the rule containing notification customisation. | Found: If you selected Devices only ... the option to customize the notification title, content, and add a hyperlink ...; the cited unauthorized-data-sharing procedure gives Policies > policy > Edit policy > Customize advanced DLP rules > rule. | Fix: Keep the path: its entry steps are documented on the already-cited https://learn.microsoft.com/purview/endpoint-dlp-create-policy-unauthorized-data-sharing. Amend controls[1].note and its rendered note to 'Route ends at the rule. When Devices only is selected, the DLP policy reference documents custom notification title, content and a Get Support hyperlink, but gives no further UI step labels.' Do not invent labels for the remaining route. | Source: https://learn.microsoft.com/purview/dlp-policy-reference#policy-tips-and-user-notifications-configuration-options
-->
