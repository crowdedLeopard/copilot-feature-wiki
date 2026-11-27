---
title: "Microsoft Purview Insider Risk Management: choose which AI apps the generative AI apps indicators monitor"
slug: "microsoft-purview-insider-risk-management-ai-app-selection-for-generative-ai-apps-indicato"
roadmapId: 559992
topic: "governance"
products: ["Microsoft Purview"]
summary: "Insider Risk Management admins can now pick which Copilot experiences and enterprise AI apps the generative AI apps indicators watch. All apps stay selected by default; deselecting one stops its processing and pay-as-you-go charges."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: "May CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Insider Risk Management needs a supported subscription with licences assigned to users. The Enterprise AI apps indicator, and the Microsoft Copilot experiences indicator for non-Microsoft 365 AI data, need pay-as-you-go billing on data security processing units; Microsoft 365 Copilot data is not charged."
audiences: ["security","compliance","finops"]
tags: ["insider-risk-management","purview","pay-as-you-go","m365-copilot","role-groups","ai"]
sources:
  - title: "Microsoft 365 Roadmap 559992"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=559992"
    kind: "roadmap"
  - title: "Configure policy indicators in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators"
    kind: "learn"
  - title: "Get started with Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-configure"
    kind: "learn"
  - title: "Learn about Microsoft Purview billing models"
    url: "https://learn.microsoft.com/purview/purview-billing-models"
    kind: "learn"
  - title: "Manage pay-as-you-go and per-user licensing usage"
    url: "https://learn.microsoft.com/purview/purview-billing-usage"
    kind: "learn"
  - title: "Use reports in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-reports"
    kind: "learn"
  - title: "Assign permissions in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    kind: "learn"
  - title: "Learn about Insider Risk Management policy templates"
    url: "https://learn.microsoft.com/purview/insider-risk-management-policy-templates"
    kind: "learn"
  - title: "Who can configure Insider Risk Management policies and settings (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
videos: []
related: ["microsoft-purview-compliance-portal-insider-risk-management-generative-ai-apps-activities","microsoft-purview-insider-risk-management-pay-as-you-go-model-for-other-generative-ai-apps","insider-risk-management","microsoft-purview-insider-risk-management-priority-content-support-for-risky-ai-usage","role-groups"]
controls:
  - governs: "Which Copilot experiences and enterprise AI apps the generative AI apps indicators monitor"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Insider Risk Management > Settings > Policy indicators > Generative AI apps indicators > Choose apps to monitor"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators"
    api: null
    note: "In the side panel, select or clear the checkbox for each app. All available apps are selected by default. Microsoft Copilot experiences and Enterprise AI apps only."
  - governs: "Whether the generative AI apps indicators are turned on for all insider risk policies"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Insider Risk Management > Settings > Policy indicators > Generative AI apps indicators"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators"
    api: null
    note: "All global indicators are disabled by default. Enterprise AI apps, and Copilot experiences for non-Microsoft 365 AI data, require pay-as-you-go billing."
  - governs: "Who can configure Insider Risk Management policies and settings"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and groups > Roles groups > Insider Risk Management > Edit > Choose users"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"Insider Risk Management\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "The Insider Risk Management Admins role group can also configure policies and settings. Run in Security & Compliance PowerShell."
  - governs: "Billed pay-as-you-go processing by data source category and indicator"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Insider Risk Management > Reports > Pay-as-you-go"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-reports"
    api: null
    note: "Reporting only. The Usage center lists Insider Risk Management as not pausable."
confidence: "high"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-06-22T23:00:47"
changes:
  - date: "2026-11-27"
    note: "New briefing: per-app selection for the Copilot experiences and Enterprise AI apps indicators, its default, pay-as-you-go effect and controls."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 49 statements contradicted, 6 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 49
  confirmed: 43
  unconfirmed: 6
  contradicted: 0
  attempts: 1
  hash: "bde271fffd993fd102c81e2fbef1e022"
---

## What's changing

Microsoft Purview Insider Risk Management now lets administrators choose which individual AI apps its generative AI apps indicators monitor, instead of monitoring every available app. The setting covers two groups of apps: **Microsoft Copilot experiences** (Copilot in Microsoft Fabric, Microsoft Security Copilot, Microsoft Copilot Studio and connected or cloud AI applications) and **Enterprise AI apps** (non-Copilot AI applications connected through Microsoft Entra and Microsoft Purview Data Map connectors). The Learn page says app selection is available for these two groups only, not for **Other AI applications** discovered from browser activity.

By default all available apps are selected, so nothing changes until an administrator clears an app. When an app is deselected, Microsoft states that its signals are not processed and no cost is incurred. The choice is made in Insider Risk Management settings, which apply to every Insider Risk Management policy whatever its template.

The roadmap item describes the change in terms of four indicators: "Entering risky prompts in Copilot", "Receiving sensitive responses from Copilot", "Entering risky prompts in enterprise AI apps" and "Receiving sensitive responses from enterprise AI apps". Microsoft Learn describes the same setting by app group rather than by indicator name. The roadmap lists the item as Launched, with a preview date of May CY2026 and a target of June CY2026, release phases General Availability and Preview, for the Worldwide (Standard Multi-Tenant) cloud on the web.

## Why it matters

This is mainly a cost and noise lever. The Enterprise AI apps indicator and the Copilot experiences indicator for non-Microsoft 365 AI data run on Purview pay-as-you-go billing, and the Usage center lists Insider Risk Management as a pay-as-you-go feature that cannot be paused there. Clearing apps the organisation does not use, or does not consider risky, is the documented way to stop paying to process their interactions.

The trade-off is coverage. A deselected app's prompts and responses are not processed, so a user who pastes sensitive data into it raises no Insider Risk Management alert and adds nothing to their risk score, which also feeds Adaptive Protection. If nobody acts, every available app stays selected and the tenant keeps today's coverage and today's charges.

## Risk assessment

**Data exposure**
- No new data is read: the setting narrows which apps' interactions are processed. Deselecting an app removes its prompts and responses from Insider Risk Management analysis, so risky sharing in that app goes undetected by these indicators.

**Security & identity**
- The setting is a global Insider Risk Management setting, configured by the *Insider Risk Management* and *Insider Risk Management Admins* role groups (or the Global Administrator, Compliance Administrator and Organization Management roles). Keep membership of those groups small, since one change here alters coverage for every policy.

**Autonomy & actions**
- No change: the feature takes no action on users or apps.

**Change & support**
- Analysts may see alert volumes fall after apps are cleared; record which apps were deselected and why, so a quiet queue is not mistaken for low risk.

## Cost and licensing

**Licence.** The Insider Risk Management getting-started page asks administrators to confirm a supported subscription and assign licences to users, and points to Microsoft's subscription requirements; it offers a Microsoft 365 Enterprise E5 trial to organisations without E5. The same page says Insider Risk Management uses pay-as-you-go billing, per-user licensing, or both.

**Meter.** On the policy indicators page, the Enterprise AI apps indicator and the Microsoft Copilot experiences indicator for non-Microsoft 365 AI data both require pay-as-you-go billing. The billing models page lists Insider Risk Management's pay-as-you-go use for cloud and generative AI policy indicators under the **Data Security processing unit as measured on a daily basis**. Pay-as-you-go is billed through Azure: the tenant must be associated with an active Azure subscription, and an Azure bill is generated monthly. Microsoft states there are no pay-as-you-go requirements or charges for detecting risky interactions in Microsoft 365 Copilot data. Rates are on the Microsoft Purview pricing page that the billing models page links to.

**Spend control.** Deselecting apps is the documented way to reduce this meter for the two app groups: a deselected app's signals are not processed and no cost is incurred. The Usage center lists Insider Risk Management as not pausable, so the Usage center cannot stop this meter. The Insider Risk Management **Pay-as-you-go** report breaks billed processing down by data source category and indicator (see the controls table).

**Indirect cost.** Admin time to review the app list and re-check it as new apps are connected.

## Scope

- **Who configures it:** members of the *Insider Risk Management* or *Insider Risk Management Admins* role groups, or holders of Global Administrator, Compliance Administrator or Organization Management, who have the same solution permissions as Insider Risk Management Admins.
- **Apps covered:** Microsoft Copilot experiences and Enterprise AI apps. Other AI applications are not part of the app selection.
- **Where:** the Microsoft Purview portal, under Insider Risk Management settings, which apply to all Insider Risk Management policies.
- **Clouds:** Worldwide (Standard Multi-Tenant), as the roadmap record lists it.
- **Prerequisite:** pay-as-you-go billing enabled, for the indicators that need it.

## Governance guidance

### Before rollout
- Check in Insider Risk Management > Settings > Policy indicators whether the Generative AI apps indicators are turned on, and which policies use them.
- List the Copilot experiences and enterprise AI apps your organisation actually uses, with the data owners who can say which ones handle sensitive data.
- Open the Insider Risk Management **Pay-as-you-go** report to see which data source categories and indicators drive processing charges today.

### At rollout
- Open **Choose apps to monitor** for Microsoft Copilot experiences and Enterprise AI apps, and clear only the apps you have decided not to monitor.
- Record each deselected app, the reason and the approver, so analysts know where the indicators no longer look.
- Limit membership of the Insider Risk Management and Insider Risk Management Admins role groups to the people accountable for coverage.

### After rollout
- Compare the **Pay-as-you-go** report before and after the change to confirm the charge fell for the deselected apps.
- Re-open **Choose apps to monitor** when a new AI app is connected through Microsoft Entra or Purview Data Map, and decide whether it stays selected.
- Review alert volumes with analysts after the change, so a fall is explained by the scoping rather than read as lower risk.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which Copilot experiences and enterprise AI apps the generative AI apps indicators monitor</strong><br><small>Tenant</small><br><small class="controls__note">In the side panel, select or clear the checkbox for each app. All available apps are selected by default. Microsoft Copilot experiences and Enterprise AI apps only.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Insider Risk Management › Settings › Policy indicators › Generative AI apps indicators › Choose apps to monitor <a href="https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the generative AI apps indicators are turned on for all insider risk policies</strong><br><small>Tenant</small><br><small class="controls__note">All global indicators are disabled by default. Enterprise AI apps, and Copilot experiences for non-Microsoft 365 AI data, require pay-as-you-go billing.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Insider Risk Management › Settings › Policy indicators › Generative AI apps indicators <a href="https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can configure Insider Risk Management policies and settings</strong><br><small>Tenant</small><br><small class="controls__note">The Insider Risk Management Admins role group can also configure policies and settings. Run in Security &amp; Compliance PowerShell.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and groups › Roles groups › Insider Risk Management › Edit › Choose users <a href="https://learn.microsoft.com/purview/insider-risk-management-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;Insider Risk Management&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Billed pay-as-you-go processing by data source category and indicator</strong><br><small>Tenant</small><br><small class="controls__note">Reporting only. The Usage center lists Insider Risk Management as not pausable.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Insider Risk Management › Reports › Pay-as-you-go <a href="https://learn.microsoft.com/purview/insider-risk-management-reports" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The app selection is a tenant-wide Insider Risk Management setting: it sits in Insider Risk Management settings, which apply to all Insider Risk Management policies. It works only for Microsoft Copilot experiences and Enterprise AI apps; Other AI applications have no per-app selection. Microsoft Learn documents no Security & Compliance PowerShell cmdlet or Microsoft Graph operation for Insider Risk Management indicator settings at the time of writing (November 2026), so the selection is made in the portal. The Usage center, which can pause some Purview pay-as-you-go features, lists Insider Risk Management as not pausable; reading the Usage center needs Global Reader, Security Reader or Global Admin.

## Open questions

- Which apps appear in the **Choose apps to monitor** panel, and does it list Microsoft 365 Copilot, whose data carries no pay-as-you-go charge? Watch the policy indicators page on Microsoft Learn.
- Is a change to the app selection written to the unified audit log, and under which activity name?
- Do alerts and risk scores already raised from a deselected app's activity remain, or are they affected by the change?
- Will per-app selection be extended to the Other AI applications indicator?
- Will Microsoft publish a PowerShell or Microsoft Graph way to set the app selection for scripted or multi-tenant management?

<!-- rationale
risk: Low. This is a scoping control and every available app stays selected by default, so detection carries on as before; the exposure it creates is a blind spot for any app an administrator deselects.
cost: Low. The setting adds no charge of its own and only admin time; it can reduce the data security processing unit pay-as-you-go meter, because Microsoft says a deselected app's signals are not processed and incur no cost.
impact: Low. Only Insider Risk Management administrators and the analysts who triage its alerts notice; users of the AI apps see no change.
-->

<!-- verifier-findings (2026-11-27, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters: coverage trade-off / behaviour: Pasting sensitive data into a deselected app raises no Insider Risk Management alert. | Found: Searched: Insider Risk Management app deselection no alerts risk score sensitive data pasted browser exfiltration. Opened policy-indicators and policy-templates pages; neither establishes exclusion from every Insider Risk Management detection route. | Fix: Replace 'so a user who pastes sensitive data into it raises no Insider Risk Management alert and adds nothing to their risk score' with 'so these generative AI apps indicators no longer process that app's signals'. The cited policy-indicators page documents that narrower effect.
- [unsupported, major] Why it matters: coverage trade-off / behaviour: Pasting sensitive data into a deselected app adds nothing to the user's Insider Risk Management risk score. | Found: Searched: Insider Risk Management app deselection no alerts risk score sensitive data pasted browser exfiltration. Opened policy-indicators and policy-templates pages; no statement rules out contributions through other indicators. | Fix: Use the same narrowed replacement for the coverage sentence: 'A deselected app's prompts and responses are not processed by these generative AI apps indicators.' Do not promise zero risk-score contribution across Insider Risk Management.
- [unsupported, major] Risk assessment: Data exposure / behaviour: No new data is read by this feature. | Found: Searched: Insider Risk Management app selection no new data read no action users apps end user experience. Opened policy-indicators page; it describes selecting signals to process, not a guarantee about all data read by the setting. | Fix: Remove 'No new data is read:' and begin the bullet 'The setting narrows which apps' interactions are processed.' Keep the documented explanation that deselected app signals are not processed.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: The feature takes no action on users or apps. | Found: Searched: Insider Risk Management app selection no new data read no action users apps end user experience. Opened policy-indicators and policy-templates pages; neither expressly guarantees no action on users or apps. | Fix: Replace 'No change: the feature takes no action on users or apps.' with 'The documented setting includes or excludes individual apps from monitoring.'
- [unsupported, blocker] rationale: cost / cost: The app-selection setting adds no charge of its own. | Found: Searched: Insider Risk Management AI app selection pricing additional charge feature choosing apps monitoring cost. Opened policy-indicators, configure and billing-models pages; no statement that the selection setting itself has no charge. | Fix: Replace the cost rationale with 'Low. Plan for admin time to review app selection; deselecting apps can reduce existing data security processing unit charges because Microsoft says their signals are not processed and incur no cost.' Do not assert that Microsoft has stated there is no separate setting charge.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters; controls[3].note; Cost and licensing; Governance controls / behaviour: The Usage center lists Insider Risk Management as not pausable. | Found: The Microsoft Purview Usage center feature is in preview. ... | Feature name | Pausable | Detailed report available | ... | Insider Risk Management | No | Yes | | Fix: At the first mention of Usage center, describe it as 'the preview Usage center'; keep the statement that Insider Risk Management is not pausable there. The cited billing-usage page explicitly marks Usage center as preview. | Source: https://learn.microsoft.com/purview/purview-billing-usage
- [unsupported, minor] rationale: impact / behaviour: Users of the AI apps see no change from app selection. | Found: Searched: Insider Risk Management app selection no new data read no action users apps end user experience. Opened policy-indicators page; it documents monitoring exclusions but does not state the resulting end-user experience. | Fix: Replace the impact rationale with the assessment 'Low. Expect the operational impact to fall mainly on administrators reviewing app selection and analysts interpreting monitoring coverage.' Remove the guarantee that AI app users see no change.
-->
