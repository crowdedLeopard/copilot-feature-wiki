---
title: "Microsoft Purview Insider Risk Management: alert classification replaces dismissal reasons"
slug: "microsoft-purview-introducing-irm-alert-classification"
roadmapId: 576710
topic: "governance"
products: ["Microsoft Purview"]
summary: "Insider Risk Management analysts will classify alerts as True positive, Benign (operational) or False positive, replacing today's dismissal reasons. Plan for reporting and analyst-process changes; no admin switch is documented."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "December CY2026"
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Learn's Microsoft Purview service description lists Insider Risk Management as included in Microsoft 365 E5/A5/G5 and related Purview suites. Nothing specific to alert classification is published."
audiences: ["compliance","security"]
tags: ["insider-risk-management","purview","governance","gcc","gcc-high","dod"]
sources:
  - title: "Investigate Microsoft Purview Insider Risk Management activities"
    url: "https://learn.microsoft.com/purview/insider-risk-management-activities"
    kind: "learn"
  - title: "Assign permissions in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    kind: "learn"
  - title: "Add-RoleGroupMember"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember?view=exchange-ps"
    kind: "learn"
  - title: "Plan for Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-plan"
    kind: "learn"
  - title: "Get started with Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-configure"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "MC1568697: Microsoft Purview: Insider Risk Management-Introducing IRM Alert classification"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1568697"
    kind: "message-center"
  - title: "Microsoft Purview: Introducing IRM Alert classification"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576710"
    kind: "roadmap"
videos: []
related: ["microsoft-purview-insider-risk-management-policy-recommendation-panel-in-irm"]
controls:
  - governs: "Which users can triage alerts, through Insider Risk Management role group membership"
    scope: "user"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and groups > Roles groups > role group > Edit > Choose users"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"Insider Risk Management Analysts\" -Member <user-UPN>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember?view=exchange-ps"
    note: "Covers today's alert access and dismissal. Classification permissions are not yet documented. Requires one of the roles that can assign Insider Risk Management role groups."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-26"
roadmapModified: "2026-11-19T00:53:06"
changes:
  - date: "2026-11-20"
    note: "First briefing for this roadmap item: classification of insider risk alerts replaces dismissal reasons; Learn does not yet describe it."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 45 statements not yet confirmed"
  - date: "2026-11-26"
    note: "Extended the role-group path to Edit > Choose users and reworded the risk rationale; added Microsoft's notice MC1568697: rollout window, no configuration required, and classification managed separately from alert status."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 65 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 65
  confirmed: 63
  unconfirmed: 1
  contradicted: 1
  attempts: 0
  hash: "3bea2b07b3f6fa882020edaf386a0801"
---

## What's changing

Microsoft plans to let Insider Risk Management analysts classify alerts as True positive, Benign (operational) or False positive. According to the roadmap item, the option will be available on all alerts, and authorised analysts with the appropriate permissions will choose from a list of predefined classification reasons. Microsoft says this will support reporting and tuning, and that it replaces the existing dismissal reasons.

Today, an analyst triages an alert into one of four statuses: Confirmed, Dismissed, Needs review or Resolved. A dismissed alert is treated as benign, and the analyst can give a dismissal reason: *Activity is expected for this user*, *Activity is impactful enough for me to investigate further*, or *Alerts for this user contain too much activity*. The Alerts dashboard can also be filtered by **Alert dismissal reason**. Those are the behaviours the roadmap says classification will replace.

Microsoft Learn does not yet describe alert classification, so what follows about its behaviour comes from the roadmap item and Microsoft's notice MC1568697. The notice says classification will be managed independently from the alert's workflow status (Needs review, Confirmed, Dismissed or Resolved): changing the classification will not change the status, and changing the status will not overwrite the classification. It also says the existing Confirm and Dismiss actions will be consolidated under a **Manage** action, with a separate **Classify** action, and a new Classification column in the Alerts queue. The notice's steps name the choices True positive, False positive and Benign Positive, where the roadmap says Benign (operational). The list of predefined reasons and what happens to dismissal reasons already recorded on past alerts are not yet documented.

The roadmap item is In development, targets a preview in December CY2026 and general availability in January CY2027, and lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD on the Web. Microsoft's notice MC1568697 says the public preview will begin rolling out early December 2026 and complete by mid-December 2026, and global rollout will begin mid-January 2027 and complete by late January 2027. The notice sets no act-by date. It says no configuration changes are required before the update rolls out, and that admins should notify Insider Risk Management analysts and investigators about the new Classification field and the updated alert actions. These dates are Microsoft's targets, not commitments.

## Why it matters

Anyone who measures or tunes Insider Risk Management by dismissal reason will need to move to the new classifications. Dismissal reasons are a filter on the Alerts dashboard, and Microsoft describes the new classification as supporting reporting and tuning, so saved views, analyst guidance and any reporting built on dismissal reasons are the places to look first.

Microsoft's notice says no configuration changes are required before the update rolls out, so analysts will meet the Classify and Manage actions without an administrator turning anything on. The notice does not say whether existing alerts are reclassified, so the wiki does not assume they are. No source says the change alters what is detected or who sees which alerts. The effect is on how analysts record their decisions and how that record is used. Brief analysts before the preview so that the first classifications are made consistently.

## Risk assessment

**Data exposure**

- No new data source is described. Classification records an analyst's decision on alerts that already exist; Learn documents access to alerts today through the Insider Risk Management role groups, and the roadmap says only authorised analysts with the appropriate permissions can classify.

**Security & identity**

- Which role groups will be allowed to classify is not yet documented. Learn lists *Insider Risk Management*, *Insider Risk Management Analysts* and *Insider Risk Management Investigators* as able to dismiss alerts today, and the permissions page gives the same three groups the "Access & investigate alerts" action. Confirm that classification follows the same groups before assuming it does.

**Autonomy & actions**

- No automated action is described. The roadmap describes a choice made by an analyst from predefined reasons.

**Change & support**

- Replacing dismissal reasons can leave analyst guidance, saved Alerts dashboard filters on **Alert dismissal reason** and reporting that assumed the old values out of step with the product. Inventory them now so they can be updated when the preview arrives.
- Inconsistent use of "Benign (operational)" and "False positive" would weaken the tuning the classification is meant to support. Agree definitions with analysts before they start.

## Cost and licensing

Learn's Microsoft Purview service description lists Insider Risk Management as "Included" for Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW and Microsoft Defender + Purview Suite FLW, and Microsoft 365 E5/A5/F5/G5 Insider Risk Management. Learn's planning page says Microsoft offers Insider Risk Management as part of a wide selection of Microsoft 365 licensing subscriptions.

A licence or meter specific to alert classification is not yet published, and the roadmap item names none. The cost the sources support is indirect: analyst and administrator time to update procedures, filters and reports.

## Scope

The roadmap item lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, on the Web, with General Availability and Preview release phases. It says classification will be available on all alerts, for authorised analysts with the appropriate permissions.

The roles that can classify are not yet documented. Today, dismissing an alert requires membership of the *Insider Risk Management*, *Insider Risk Management Analysts* or *Insider Risk Management Investigators* role group. Microsoft's notice MC1568697 gives the rollout window (see What's changing) and says no configuration changes are required before the update rolls out; prerequisites are not stated.

## Governance guidance

### Before rollout

- Identify who holds the *Insider Risk Management*, *Insider Risk Management Analysts* and *Insider Risk Management Investigators* role groups, and remove access that is no longer needed.
- List the saved filters, reports and written procedures that use dismissal reasons, including the **Alert dismissal reason** filter on the Alerts dashboard.
- Agree internal definitions for True positive, Benign (operational) and False positive so that analysts apply them consistently.

### At rollout

- Brief analysts and investigators on the Classification column and the Classify and Manage actions when the preview arrives, as Microsoft's notice MC1568697 asks.
- Test the new classification on a small set of alerts before wider use, and check which role groups can classify.

### After rollout

- Compare alert filters and reporting with the new classifications, and update any that relied on dismissal reasons.
- Review how classified alerts feed policy tuning, and record the result for your next policy review.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users can triage alerts, through Insider Risk Management role group membership</strong><br><small>User</small><br><small class="controls__note">Covers today's alert access and dismissal. Classification permissions are not yet documented. Requires one of the roles that can assign Insider Risk Management role groups.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and groups › Roles groups › role group › Edit › Choose users <a href="https://learn.microsoft.com/purview/insider-risk-management-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;Insider Risk Management Analysts&quot; -Member &lt;user-UPN&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Role group membership is the control Learn documents for who can triage alerts. Members of the Insider Risk Management, Insider Risk Management Admins, Compliance Administrator and Organization Management groups, and the Entra ID Global Administrator and Compliance Administrator roles, can assign users to Insider Risk Management role groups. Role group changes can take up to 30 minutes to apply.

Whether classification uses the same role groups as dismissal is not yet documented, so the row above describes today's alert access, not a documented classification permission. Microsoft Learn documents no setting for classification itself at the time of writing (November 2026).

## Open questions

- Which role groups will be able to classify alerts, and will classification need a permission beyond those that allow dismissal today? Watch the Insider Risk Management permissions page.
- What are the predefined classification reasons, and will the third classification appear as Benign (operational), as the roadmap says, or Benign Positive, as the notice's steps say?
- What happens to dismissal reasons already recorded on past alerts, and to filters and reports that use them?
- How will classification appear on insider risk alerts in the Microsoft Defender portal? Microsoft's notice says classification stays consistent for alerts shared between Microsoft Purview and Microsoft Defender, but does not describe the Defender experience.

<!-- rationale
risk: Low. The roadmap describes classification of alerts analysts already triage and describes no new data source; Microsoft's notice MC1568697 says no configuration changes are required before it rolls out, and it changes how decisions are recorded, not what is detected.
cost: Low. Insider Risk Management is listed as included in Microsoft 365 E5-level plans; the only known cost is analyst and admin time, and no licence or meter specific to alert classification is published.
impact: Medium. Analysts and investigators who triage alerts will see new classification choices in place of dismissal reasons; other users do not notice.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [unsupported, minor] rationale: risk / behaviour: The update changes how decisions are recorded, not what is detected. | Found: Searched: Insider Risk Management new alert classification detection changes data sources automated actions reclassify existing alerts. Opened activities and Defender IRM investigation; read roadmap and MC1568697. They describe recording outcomes but do not guarantee unchanged detection. | Fix: Replace 'and it changes how decisions are recorded, not what is detected' with 'and no change to detection is described'.
- [contradicted, minor] Governance guidance: Before rollout and After rollout / consistency: The checklist's instructions to inventory and update Alerts dashboard filters have a corresponding control row. | Found: List the saved filters ... including the Alert dismissal reason filter on the Alerts dashboard. ... Compare alert filters and reporting ... The controls table contains only role-group membership. | Fix: The Alerts dashboard filter steps have no table row. Replace the Before rollout bullet with 'List reports and written procedures that use dismissal reasons.' Replace the After rollout bullet with 'Compare reporting with the new classifications, and update any that relied on dismissal reasons.' Do not add a control row.
-->
