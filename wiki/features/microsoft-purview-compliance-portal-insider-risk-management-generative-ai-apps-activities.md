---
title: "Microsoft Purview Insider Risk Management: generative AI apps indicators as triggers in Risky AI usage policies"
slug: "microsoft-purview-compliance-portal-insider-risk-management-generative-ai-apps-activities"
roadmapId: 501538
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans to let generative AI apps indicators bring users into scope of Risky AI usage policies in Insider Risk Management (GCC, GCC High, DoD). Nothing is stated about defaults; Purview admins should review the policy and cost settings."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "January CY2026"
previewDate: null
risk: "low"
cost: "variable"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn says Insider Risk Management needs a supported subscription and that some indicators are available only with pay-as-you-go billing. No licence or rate specific to generative AI apps triggers is published."
audiences: ["compliance","security","finops"]
tags: ["insider-risk-management","purview","ai","pay-as-you-go","adaptive-protection","licensing","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap: item 501538"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=501538"
    kind: "roadmap"
  - title: "Learn about Insider Risk Management policy templates"
    url: "https://learn.microsoft.com/purview/insider-risk-management-policy-templates"
    kind: "learn"
  - title: "Configure policy indicators in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators"
    kind: "learn"
  - title: "Get started with Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-configure"
    kind: "learn"
  - title: "Create and manage Insider Risk Management policies"
    url: "https://learn.microsoft.com/purview/insider-risk-management-policies"
    kind: "learn"
  - title: "Assign permissions in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    kind: "learn"
  - title: "Manage pay-as-you-go and per-user licensing usage"
    url: "https://learn.microsoft.com/purview/purview-billing-usage"
    kind: "learn"
  - title: "Add-RoleGroupMember"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
  - title: "Plan for Microsoft Purview compliance and risk management solutions – GCC High deployments"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/plan-for-microsoft-purview-gcc-high-deployments"
    kind: "learn"
videos: []
related: ["insider-risk-management","microsoft-purview-insider-risk-management-pay-as-you-go-model-for-other-generative-ai-apps","microsoft-purview-insider-risk-management-priority-content-support-for-risky-ai-usage","microsoft-purview-insider-risk-management-insider-risk-management-for-agents"]
controls:
  - governs: "Which generative AI apps the indicators monitor"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Insider Risk Management > Settings > Policy indicators > Generative AI apps indicators > Choose apps to monitor"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators"
    api: null
    note: "Applies to Microsoft Copilot experiences and Enterprise AI apps only. Learn says a deselected app's signals are not processed and no cost is incurred."
  - governs: "Creating or editing an Insider Risk Management policy and its triggers"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Insider Risk Management > Policies > Create policy"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-configure"
    api: null
    note: "Learn documents the Triggers for this policy page for Data leaks and Data leaks by priority users; a trigger step for Risky AI usage is not documented yet."
  - governs: "Who can configure Insider Risk Management policies and settings"
    scope: "group"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and groups > Roles groups > Insider Risk Management > Edit > Choose users"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"Insider Risk Management\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "The Insider Risk Management and Insider Risk Management Admins role groups can configure policies and settings. Role changes can take up to 30 minutes to apply."
  - governs: "Pay-as-you-go usage of Insider Risk Management"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Usage center > Pay-as-you-go"
      docs: "https://learn.microsoft.com/purview/purview-billing-usage"
    api: null
    note: "Usage center is in preview. The page lists Insider Risk Management as not pausable, so the app selection above is the lever for spend."
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2025-09-08T23:45:21"
changes:
  - date: "2026-11-25"
    note: "New briefing: generative AI apps indicators planned as triggers in Risky AI usage policies for GCC, GCC High and DoD; target January CY2026 is stale."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 54 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 54
  confirmed: 53
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "5927a2290fd1f28a553b681e8181d2ec"
---

## What's changing

The roadmap item states that generative AI apps indicators will be supported as triggers in the Risky AI usage policy in Microsoft Purview Insider Risk Management. A trigger lets customers define the conditions that bring a user into the scope of a policy, while the generative AI apps indicators are used to determine the risk score. The item is listed for GCC, GCC High and DoD, on the Web platform, at General Availability.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. Learn describes the building blocks today. Triggering events are prerequisites that determine whether a user is active for a policy, and indicators determine the risk score once a user is in scope. The generative AI apps indicators analyse prompts and responses entered into AI applications, and Learn's indicator settings page lists Microsoft Copilot experiences, Enterprise AI apps, Other AI applications and Azure AI Content Safety indicators. Learn also says that today triggering events can be modified only for policies created from the Data leaks or Data leaks by priority users templates, and that the Risky AI usage template is not one of them. That is the behaviour this item would change.

The roadmap record shows status In development with a target of January CY2026. That target is earlier than the date of this briefing (25 November 2026) and the record was last modified in September 2025, so treat the date as stale until Microsoft updates the item. No Message Center post was supplied for it.

## Why it matters

For a compliance or security team, a trigger decides who gets risk-scored at all. Learn says a user without a triggering event is not evaluated by the policy unless an administrator adds them manually in the Users dashboard. Letting AI-app activity act as a trigger would change which users enter Risky AI usage policies, and Learn says activity from this template also contributes to user risk scoring in Adaptive Protection.

Microsoft has not stated what happens on arrival, and no source says existing Risky AI usage policies change. Treat it as a new option to review rather than a change that lands on its own, and decide ahead of time which AI apps you want monitored, because some of those apps are billed.

## Risk assessment

**Data exposure**

- The indicators analyse prompts and responses entered into AI applications to detect risky interactions or sharing of confidential information. Triggers would widen which users' AI activity enters a policy; Microsoft has not said which data the triggers read beyond what the indicators already cover.
- Microsoft Copilot experiences and Enterprise AI apps can be limited per app under Insider Risk Management > Settings > Policy indicators (see the controls table).

**Security & identity**

- Access to configure policies and settings sits with the Insider Risk Management and Insider Risk Management Admins role groups, according to the permissions page. Keep those groups small, since a new trigger changes who is scored.
- The Risky AI usage template needs the Microsoft Insider risk extension (Microsoft Edge) or the Microsoft Purview extension (Chrome) on user devices; confirm that deployment before relying on any trigger.

**Autonomy & actions**

- Learn says detection by the Risky AI usage template contributes to user risk scoring in Adaptive Protection, so a user brought into scope by a new trigger could affect that scoring. Confirm what your Adaptive Protection configuration does with those scores.

**Change & support**

- The roadmap date is stale and no Learn page describes the trigger setup, so expect the policy wizard to change when it ships and brief analysts then.
- Alerts from the new triggers may raise alert volume. Learn lists a policy health warning when a triggering event repeatedly occurs for over 15% of users in a policy, which is worth watching once triggers are chosen.

## Cost and licensing

Learn says that to access and use Insider Risk Management an organisation needs a supported Microsoft 365 subscription and the appropriate licences assigned to users. It points to a subscription requirements page rather than naming a plan for this feature.

Some generative AI apps indicators are billed on a pay-as-you-go basis. Learn says the Microsoft Copilot experiences indicator needs pay-as-you-go billing for non-Microsoft 365 AI data, that the Enterprise AI apps and Other AI applications indicators need it as well, and that Microsoft 365 Copilot data carries no pay-as-you-go requirement or charge. Deselecting an app under Choose apps to monitor means its signals are not processed and no cost is incurred. The Usage center (in preview) lists Insider Risk Management among the pay-as-you-go features, marked as not pausable.

A price or meter specific to using these indicators as triggers is not yet published, and whether pay-as-you-go billing applies in GCC, GCC High and DoD is not stated. See the related briefing on pay-as-you-go billing for Other AI apps indicators in the government clouds.

## Scope

The roadmap item lists GCC, GCC High and DoD, the Web platform and General Availability, and it names Microsoft Purview as the product. It applies to the Risky AI usage policy in Insider Risk Management.

Learn lists the prerequisites for the Risky AI usage template: the Microsoft Insider risk extension (Edge) or Microsoft Purview extension (Chrome) on user devices, at least one browsing indicator selected, and optionally an HR connector and a Communication Compliance policy. Whether triggers add prerequisites is not documented.

The Microsoft Purview GCC High plan page lists Insider Risk Management features but does not list a Risky AI usage template or generative AI apps indicators, so availability of the existing template in each government cloud is worth confirming with Microsoft.

## Governance guidance

### Before rollout

- Confirm who holds the Insider Risk Management and Insider Risk Management Admins role groups, and remove anyone who does not need to configure policies.
- Review which generative AI apps are selected under Generative AI apps indicators, and deselect apps you do not intend to monitor to avoid unnecessary pay-as-you-go charges.
- Check that the browser extensions the Risky AI usage template needs are deployed to user devices.
- Ask your Microsoft account team whether the Risky AI usage template and its indicators are available in your government cloud.

### At rollout

- Open the Create policy workflow when Microsoft announces the item and check whether the Risky AI usage template now shows a Triggers for this policy page.
- Start with a narrow user group so you can see how many users enter scope before widening it.
- Check the Usage center for Insider Risk Management pay-as-you-go usage in the first billing period after enabling AI-app indicators.

### After rollout

- Review policy health for a warning that a triggering event repeatedly occurs for over 15% of users, and adjust the trigger if it does.
- Revisit the app selection under Choose apps to monitor when new AI apps are connected.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which generative AI apps the indicators monitor</strong><br><small>Tenant</small><br><small class="controls__note">Applies to Microsoft Copilot experiences and Enterprise AI apps only. Learn says a deselected app's signals are not processed and no cost is incurred.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Insider Risk Management › Settings › Policy indicators › Generative AI apps indicators › Choose apps to monitor <a href="https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Creating or editing an Insider Risk Management policy and its triggers</strong><br><small>Tenant</small><br><small class="controls__note">Learn documents the Triggers for this policy page for Data leaks and Data leaks by priority users; a trigger step for Risky AI usage is not documented yet.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Insider Risk Management › Policies › Create policy <a href="https://learn.microsoft.com/purview/insider-risk-management-configure" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can configure Insider Risk Management policies and settings</strong><br><small>Group</small><br><small class="controls__note">The Insider Risk Management and Insider Risk Management Admins role groups can configure policies and settings. Role changes can take up to 30 minutes to apply.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and groups › Roles groups › Insider Risk Management › Edit › Choose users <a href="https://learn.microsoft.com/purview/insider-risk-management-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;Insider Risk Management&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Pay-as-you-go usage of Insider Risk Management</strong><br><small>Tenant</small><br><small class="controls__note">Usage center is in preview. The page lists Insider Risk Management as not pausable, so the app selection above is the lever for spend.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Usage center › Pay-as-you-go <a href="https://learn.microsoft.com/purview/purview-billing-usage" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No Microsoft Learn page documents a PowerShell or API operation for creating or editing Insider Risk Management policies or the generative AI apps indicator selection at the time of writing (November 2026), so those sides of the rows are marked as not documented.

The trigger setup for Risky AI usage is not documented yet. The policy wizard rows describe today's documented behaviour, in which custom triggering events are available only for Data leaks and Data leaks by priority users. The app selection applies to Microsoft Copilot experiences and Enterprise AI apps only. The role group row covers who can configure policies; Learn says the Insider Risk Management and Insider Risk Management Admins role groups can configure policies and settings, and changes can take up to 30 minutes to apply.

## Open questions

- Which generative AI apps indicators can be used as triggers in the Risky AI usage template, and where in the policy workflow are they chosen? Watch the Learn policy indicators and policy templates pages.
- What happens to existing Risky AI usage policies when triggers ship, and is any configuration required? Watch Message center and the roadmap item.
- Does using an indicator as a trigger change pay-as-you-go billing, and does that billing apply in GCC, GCC High and DoD? Watch the Purview billing models page.
- Is the January CY2026 target still valid, given the item is still In development in November 2026? Watch the roadmap item.

<!-- rationale
risk: Low. Learn says triggering events are customisable only for Data leaks templates today, and no source says existing Risky AI usage policies change on arrival; the exposure is who gets risk-scored once admins adopt the triggers.
cost: Variable. Learn says the Enterprise AI apps and Other AI applications indicators need pay-as-you-go billing; no price or meter specific to triggers is published, and Insider Risk Management itself needs a supported subscription.
impact: Low. Insider Risk Management administrators and analysts configure and review the policies, and the roadmap item describes no change that end users see.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Governance controls; rationale: risk / applicability: The indicator settings page says triggering events are customisable only for Data leaks and Data leaks by priority users, not Risky AI usage. | Found: You can only modify triggering events for policies created from the Data leaks or Data leaks by priority users templates. Policies created from all other templates don't have customizable triggering indicators or events. | Fix: Keep the attribution to the indicator settings page, then add: 'The Get started workflow also documents Communication Compliance and HR trigger options for Data leaks by risky users and Security policy violations by risky users; it still gives no Risky AI usage trigger setup.' Cite https://learn.microsoft.com/purview/insider-risk-management-configure. | Source: https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators
- [supported, minor] controls[0].ui; Governance controls table; Risk assessment: Data exposure / admin-path: App selection is reached in Microsoft Purview portal through Insider Risk Management > Settings > Policy indicators > Generative AI apps indicators > Choose apps to monitor. | Found: Expand Generative AI apps indicators. ... For Microsoft Copilot experiences and Enterprise AI apps, select Choose apps to monitor. ... From the side panel, you can select or clear the checkbox for each app | Fix: Use 'Insider Risk Management > Settings > Policy indicators > Generative AI apps indicators > Microsoft Copilot experiences > Choose apps to monitor > app' for the Copilot route; state in the note that replacing 'Microsoft Copilot experiences' with 'Enterprise AI apps' gives the other documented route. The omitted category is a heading, not a separately documented selection. | Source: https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators
- [supported, minor] controls[1].ui; Governance controls table; Governance guidance: At rollout / admin-path: Insider Risk Management > Policies > Create policy opens the policy workflow in Microsoft Purview portal. | Found: Go to the Insider Risk Management solution. ... Select Policies in the left navigation. ... Select Create policy to open the policy workflow. | Fix: Keep the documented path and narrow the row's governs text to 'Opening the Insider Risk Management policy creation workflow'. Create policy opens creation, not editing, and the row already states that Risky AI usage trigger setup is undocumented. | Source: https://learn.microsoft.com/purview/insider-risk-management-configure
- [contradicted, minor] Governance guidance: Before rollout and After rollout / consistency: The governance checklist and controls table satisfy the standard's requirement to represent every control the checklist asks readers to check. | Found: 'Check that the browser extensions ... are deployed' and 'Review policy health' have no corresponding row; the table covers app selection, policy creation, role membership and Usage center. | Fix: Remove the browser-extension deployment check and the policy-health review bullet from Governance guidance; their factual background may remain in Scope and Risk assessment. Do not add control rows during this correction.
- [supported, minor] front matter: cost; Cost and licensing; rationale: cost / cost: Variable cost is warranted because generative AI policy indicators can incur metered pay-as-you-go charges. | Found: | Insider Risk Management | Detect risky behavior for non-Microsoft 365 locations when using Cloud and generative AI policy indicators | Data Security processing unit as measured on a daily basis | | Fix: Name the published general meter in Cost and licensing and the cost rationale: 'For non-Microsoft 365 locations using cloud and generative AI policy indicators, Microsoft lists Data Security processing units measured daily; pay-as-you-go charges appear on the monthly Azure bill.' Add https://learn.microsoft.com/purview/purview-billing-models to sources. Keep the narrower absence of a separate trigger-specific rate. | Source: https://learn.microsoft.com/purview/purview-billing-models
-->
