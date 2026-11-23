---
title: "Microsoft Purview DLP: start a Power Automate workflow when a rule matches (GCC, GCC High, DoD)"
slug: "microsoft-purview-compliance-portal-data-loss-prevention-trigger-power-automate-workflows"
roadmapId: 380721
topic: "governance"
products: ["Microsoft Purview"]
summary: "The roadmap item adds a DLP rule action that starts a Power Automate workflow on a rule match, for GCC, GCC High and DoD. Rule authors choose it; no extra Purview licence is documented, but custom flows may need a Power Automate plan."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: null
risk: "medium"
cost: "medium"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Microsoft Learn says the integration is available to existing DLP customers with no other Purview licence requirement. A Power Automate plan is needed to access premium connectors in custom flows, not for the templates."
audiences: ["compliance","security","maker"]
tags: ["dlp","purview","power-automate","automation","connectors","exchange","sharepoint","onedrive","endpoint-dlp","gcc","gcc-high","dod"]
sources:
  - title: "Get started with Power Automate integration in Microsoft Purview DLP"
    url: "https://learn.microsoft.com/purview/dlp-powerautomate-int-get-started"
    kind: "learn"
  - title: "Create and deploy data loss prevention policies"
    url: "https://learn.microsoft.com/purview/dlp-create-deploy-policy"
    kind: "learn"
  - title: "Help prevent sharing credit card numbers through email"
    url: "https://learn.microsoft.com/purview/dlp-create-policy-cc-email"
    kind: "learn"
  - title: "Set-DlpComplianceRule"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule"
    kind: "learn"
  - title: "Troubleshoot Power Automate trigger problems and errors"
    url: "https://learn.microsoft.com/troubleshoot/power-platform/power-automate/flow-run-issues/triggers-troubleshoot"
    kind: "learn"
  - title: "Impact of data policies on apps and flows"
    url: "https://learn.microsoft.com/power-platform/admin/dlp-impact-policies-apps-flows"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 380721"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=380721"
    kind: "roadmap"
videos: []
related: ["endpoint-dlp","connectors"]
controls:
  - governs: "Whether a DLP rule starts a Power Automate workflow"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > + Create policy > Enterprise applications & devices > Custom > Custom > Create or customize advanced DLP rules > Create rule > Add an action > Start a Power Automate workflow"
      docs: "https://learn.microsoft.com/purview/dlp-powerautomate-int-get-started"
    api: null
    note: "The Set-DlpComplianceRule reference lists -TriggerPowerAutomateFlow <String>, but its description is a placeholder and does not document how to configure the linked workflow."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-07-15T22:55:27"
changes:
  - date: "2026-11-23"
    note: "First briefing for roadmap item 380721: DLP rule action that starts a Power Automate workflow, with licensing and supported locations from Learn."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 63 statements contradicted, 3 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected after verification: data policy suspension of flows now stated from Learn, plan price claim removed, cost raised to medium, API side set to Not yet documented, and the control's docs link and path updated."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 60 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-23"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 60
  confirmed: 60
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "dc917e98ad329f75bb7189ffc667cdbe"
---

## What's changing

The roadmap item introduces a new DLP rule action that triggers custom Power Automate workflows when a DLP rule is violated. The record lists it as In development with a target of September CY2026, for the GCC, GCC High and DoD clouds on the Web platform, with release phases General Availability and Preview. That target month has passed as of November 2026 and the record still shows In development.

Microsoft Learn already has a page, "Get started with Power Automate integration in Microsoft Purview DLP". It says that with Power Automate integration "you can now trigger custom Power Automate workflows as a DLP rule action". The page does not name any cloud and does not label itself preview or generally available, so what follows is the feature as Learn describes it, and its availability in US Government clouds needs confirming.

According to that page, a rule author adds **Start a Power Automate workflow** as an action on the DLP rule authoring page, then picks a template or builds a custom workflow with the DLP trigger from the Microsoft Purview connector. The linked workflow can be selected or updated like any other rule action. The page lists three supported policy locations: Exchange emails, files in SharePoint Online and OneDrive, and Windows devices (24H2 and above).

The one template described is **Notify manager when a DLP policy is violated**. It emails the manager of the violating user with the user name and policy name, and the sender and extra information can be changed by editing the workflow in Power Automate. For files in SharePoint and OneDrive, the page says workflows run only for new or modified content; existing files that match a rule do not trigger a flow.

## Why it matters

A DLP match can now lead to a workflow, so what happens after a match is partly decided in Power Automate by whoever builds the flow, not only in the Purview rule. That moves some of the response to DLP incidents (who is told, which systems receive the details) outside the Purview portal, and it needs an owner on each side.

Microsoft has not stated what happens on arrival, and no source says existing rules change. Treat it as an optional action to evaluate, and confirm US Government availability before planning around it.

## Risk assessment

**Data exposure**
- The notify-manager template sends the user name and policy name by email. Custom flows can use "available Power Automate connectors", so violation details can reach whichever services a flow connects to. The Learn page does not list which event fields the DLP trigger passes to a flow, so confirm that before building a custom flow. The rule-side control is the first row of the controls table; connector choice is made in Power Automate.

**Security & identity**
- The page says there is "no change to required role for DLP policy authoring", so anyone who can author rules can add the action; the role groups are under Governance controls. The page also says a flow is by default only available to the user who created it, so plan who owns and shares each flow linked to a rule.

**Autonomy & actions**
- The action starts a workflow when a rule matches, and what that workflow does is whatever its builder configures. Power Automate's troubleshooting page says that if a flow violates a DLP policy, the service suspends the flow and the trigger does not fire. Power Platform data policies govern connector combinations in Power Automate flows. A flow using connectors that are blocked or cannot be used together is suspended and cannot execute until the violation is resolved; runtime suspension is not instantaneous ([Impact of data policies on apps and flows](https://learn.microsoft.com/power-platform/admin/dlp-impact-policies-apps-flows)).
- For SharePoint and OneDrive files, only new or modified content triggers a flow, so existing matching files do not produce a workflow run.

**Change & support**
- Responsibility splits across the Microsoft Purview portal (rule) and Power Automate (flow), and the page does not name a single place to see both. The roadmap target month has passed with the item still In development, and clouds are not named on the Learn page, so support teams in GCC, GCC High and DoD should not assume it is available.

## Cost and licensing

**Licence.** The Learn page says Power Automate integration in Microsoft Purview DLP "is available for all existing DLP customers with no other Purview license requirements" and points to the Microsoft 365 Enterprise plans and service descriptions for DLP licensing.

**Power Automate.** To access premium connectors when configuring custom flows, the page says you need a Power Automate plan. It says a Power Automate licence is not needed to access the templates. The page does not say whether the Microsoft Purview connector counts as a premium connector, and it names no meter or price for the action.

**Indirect cost.** Admin time to build, share and test flows, and any Power Automate plan a custom flow needs.

## Scope

The roadmap record lists the GCC, GCC High and DoD clouds, the Web platform, and release phases General Availability and Preview; the target is September CY2026 and the status is In development. The Learn page names no cloud.

Supported policy locations on the Learn page are Exchange emails, files in SharePoint Online and OneDrive, and Windows devices (24H2 and above). The page says there is no change to the role required for DLP policy authoring, and refers to Power Automate's own documentation for Power Automate roles. Making the action work needs the DLP rule author and a flow builder, who may be different people.

The page does not describe a release channel, rollout wave or tenant prerequisite.

## Governance guidance

### Before rollout
- Confirm with Microsoft (Message center, the Learn page, roadmap item 380721) that the action is available in your US Government cloud before you plan the work.
- Check whether your custom flows will use premium connectors, which the page says need a Power Automate plan; the Notify manager template does not.

### At rollout
- Link the Notify manager template to one pilot rule on the DLP rule authoring page, using the **Start a Power Automate workflow** action, before adding the action elsewhere.
- Test with new or modified files and with email, because the page says existing SharePoint and OneDrive files that match a rule do not trigger a flow.
- Confirm which rule author roles can add the action, using the role groups listed under Governance controls.

### After rollout
- Check that the manager emails arrive with the user name and policy name the template describes, and edit the workflow in Power Automate if the sender or content needs changing.
- Revisit the Learn page and Message center for cloud availability and licensing changes.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a DLP rule starts a Power Automate workflow</strong><br><small class="controls__note">The Set-DlpComplianceRule reference lists -TriggerPowerAutomateFlow &lt;String&gt;, but its description is a placeholder and does not document how to configure the linked workflow.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › + Create policy › Enterprise applications &amp; devices › Custom › Custom › Create or customize advanced DLP rules › Create rule › Add an action › Start a Power Automate workflow <a href="https://learn.microsoft.com/purview/dlp-powerautomate-int-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The rule-side control is where an author adds the action; the flow-side settings (who owns and shares the flow, which connectors it uses) are in Power Automate and are not a row here. The Learn page lists "no change to required role for DLP policy authoring". The Learn page for creating DLP policies says the account must be in one of these role groups: Compliance administrator, Compliance data administrator, Information Protection, Information Protection Admin or Security administrator.

The Set-DlpComplianceRule reference lists the -TriggerPowerAutomateFlow parameter in its syntax but at the time of writing (November 2026) its description is still a placeholder, so confirm the value it expects before scripting. Microsoft Learn documents no separate tenant-wide switch for this action at the time of writing.

## Open questions

- Which of GCC, GCC High and DoD will get the action, and from when? The Learn page names no cloud; watch the roadmap item and Message center.
- Is the action in preview or generally available? The roadmap lists both phases and the Learn page does not label itself.
- Which event details does the DLP trigger pass to a flow beyond the user name and policy name in the template?
- Is the Microsoft Purview connector a premium connector, so that custom flows need a Power Automate plan?
- What does the Purview rule show when its linked Power Automate flow is suspended?

<!-- rationale
risk: Medium. The action hands a DLP match to a workflow that a flow builder designs in Power Automate, and the page does not list which event details the workflow receives. Nothing is documented as switching on by itself.
cost: Medium. Existing DLP customers need no additional Purview licence, but custom flows using premium connectors require a Power Automate plan; the templates do not require a Power Automate licence.
impact: Low. Mainly DLP policy authors and flow builders notice it; a manager receives an email only if the notify-manager template is linked to a rule.
-->

<!-- verifier-findings (2026-11-23, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The printed Microsoft Purview portal path reaches the Start a Power Automate workflow rule action. | Found: DLP rule authoring page: Add Start a Power Automate workflow as an action, and then create the workflow using a template or a custom workflow using DLP trigger. | Fix: Include the omitted scope steps and headings: Data loss prevention > Policies > + Create policy > Enterprise applications & devices > Custom > Custom > Assign admin units > location > Define policy settings > Create or customize advanced DLP rules > Create rule > Actions > Add an action > Start a Power Automate workflow. The preceding route is documented at https://learn.microsoft.com/purview/dlp-create-policy-cc-email, already cited; the final action is documented at the existing docs URL. Update both the structured path and rendered table. | Source: https://learn.microsoft.com/purview/dlp-powerautomate-int-get-started
-->
