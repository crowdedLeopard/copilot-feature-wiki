---
title: "Microsoft Purview Insider Risk Management: preview content in alerts without creating a case"
slug: "microsoft-purview-insider-risk-management-ability-to-preview-content-in-insider-risk-manag"
roadmapId: 557189
topic: "governance"
products: ["Microsoft Purview"]
summary: "Investigators can preview files and emails behind an Insider Risk Management alert from Activity explorer, before opening a case. Launched on the roadmap; Learn still labels it preview. No separate switch is documented."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "July CY2026"
previewDate: "April CY2026"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Learn says Insider Risk Management is offered as part of a wide selection of Microsoft 365 subscriptions and that users need the appropriate licences. A licence or meter specific to content preview is not yet published."
audiences: ["compliance","security","m365-admin"]
tags: ["insider-risk-management","purview","role-groups","privacy","least-privilege","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 557189"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=557189"
    kind: "roadmap"
  - title: "Investigate Microsoft Purview Insider Risk Management activities"
    url: "https://learn.microsoft.com/purview/insider-risk-management-activities"
    kind: "learn"
  - title: "Assign permissions in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    kind: "learn"
  - title: "Get started with Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-configure"
    kind: "learn"
  - title: "Plan for Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-plan"
    kind: "learn"
  - title: "Learn about Insider Risk Management settings"
    url: "https://learn.microsoft.com/purview/insider-risk-management-settings"
    kind: "learn"
  - title: "Review activities with the Insider Risk Management audit log"
    url: "https://learn.microsoft.com/purview/insider-risk-management-audit-log"
    kind: "learn"
  - title: "Add-RoleGroupMember"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
videos: []
related: ["insider-risk-management","microsoft-purview-insider-risk-management-unified-alert-queue","microsoft-purview-insider-risk-management-enhanced-user-profile-in-irm-alerts","microsoft-purview-insider-risk-management-expanding-note-capabilities-across-alerts-and-ca","microsoft-purview-insider-risk-management-irm-alerts-in-xdr"]
controls:
  - governs: "Who can access and investigate Insider Risk Management alerts"
    scope: "user"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and groups > Roles groups > Insider Risk Management > Edit > Choose users"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Role group changes can take up to 30 minutes to apply. Learn does not say which role groups can use Content preview; this row governs alert access."
  - governs: "A separate switch for Content preview in Activity explorer"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such setting at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-08-28T21:59:29"
changes:
  - date: "2026-11-23"
    note: "New briefing: content preview in Insider Risk Management alerts, launched on the roadmap and labelled preview on Learn."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 59 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 59
  confirmed: 56
  unconfirmed: 1
  contradicted: 2
  attempts: 0
  hash: "dc8646ea55275f120c797e7acf04f546"
---

## What's changing

Insider Risk Management now lets reviewers preview content from inside an alert. The roadmap item says users with appropriate permissions can preview relevant files referenced in Activity explorer in each alert, without creating a case first.

Microsoft Learn describes the same capability as **Content preview (preview)** on the Activity explorer tab. It says investigators can preview related content there "to quickly validate risk without creating a case", to decide whether an activity contains sensitive data, is a false positive, or needs escalation to a full investigation. The Activity explorer tab is available for alerts in both dashboard views.

Learn lists the activities that support it: SharePoint and OneDrive for Business file accessed, file download and full file sync download, and Exchange email sent (hygiene events) and data loss prevention rule matches. It does not support state changes, permission changes, deletions or signal-only events, including endpoint activities (file deletion, copying, printing, USB transfers), browser or removable media events, metadata-only events and renamed files.

The roadmap record gives the status as Launched, with a preview date of April CY2026 and a target date of July CY2026, for Worldwide, GCC, GCC High and DoD, on the web. The record lists both General Availability and Preview as release phases, and the Learn section is still labelled preview, so treat limits on the Learn page as those of a preview.

## Why it matters

This moves the first look at the underlying content from the case stage to the alert stage. An analyst or investigator can open the file or email behind an activity and settle a false positive quickly, which cuts triage time. It also means more people read real content earlier, for users who are pseudonymised by default in the rest of the product.

Microsoft has not stated what happens on arrival, such as whether the capability is on for every tenant or needs enabling, so no source says existing behaviour changes. Decide now who in your tenant holds the alert-handling role groups, because that membership is the practical boundary for who can reach this content.

## Risk assessment

**Data exposure**
- Content preview shows the content behind SharePoint, OneDrive for Business and Exchange activities inside the alert, before a case exists. Anyone who can open the alert's Activity explorer may therefore see file or email content for the users in the alert.
- Preview is not available for endpoint, browser, removable media or deletion activities, so it does not widen what analysts can read for those events.

**Security & identity**
- Access rests on Insider Risk Management role groups. The permissions table gives *Access & investigate alerts* to the Insider Risk Management, Analysts and Investigators groups and not to Insider Risk Management Admins. Learn does not say which of these role groups can use Content preview, so confirm that before widening or narrowing membership.
- Administrative units can limit what restricted administrators see: Learn says they have limited access to settings, policies and user data, and cannot access alerts for users assigned through security or distribution groups added in administrative units.

**Autonomy & actions**
- No autonomous action is described. Preview is a read action by a reviewer; confirming an alert, creating a case or dismissing it remain separate steps.

**Change & support**
- The Learn section is labelled preview while the roadmap says Launched, so behaviour and limits may still change.
- Microsoft Learn documents no setting to turn Content preview off separately. The practical control is role group membership, and role group changes can take up to 30 minutes to apply.

## Cost and licensing

Learn's planning page says Microsoft offers Insider Risk Management as part of a wide selection of Microsoft 365 licensing subscriptions, and the getting-started page says administrators need to verify a supported subscription and assign the appropriate licences to users. Content preview is a part of the Activity explorer inside that solution.

Learn also says some Insider Risk Management indicators are only available with the pay-as-you-go billing model. The Content preview section does not tie preview to a pay-as-you-go meter, and a licence or meter specific to content preview is not yet published. Indirect cost is analyst time and any change to role group membership.

## Scope

**Who:** people in the Insider Risk Management role groups that handle alerts. Learn's Activity explorer text addresses investigators and analysts; which role groups can use Content preview itself is not yet documented.

**Where:** the Activity explorer tab of an alert in the Microsoft Purview portal, in both the Standard and Triage Agent dashboard views, for the supported SharePoint, OneDrive for Business and Exchange activities only.

**Clouds and platform:** the roadmap record lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, on the web.

**Prerequisites:** Learn's Activity explorer note says users can access it in the alert management area when their organisation enables the feature and after users trigger events. It does not say which setting that refers to.

## Governance guidance

### Before rollout
- Review who sits in the Insider Risk Management, Insider Risk Management Analysts and Insider Risk Management Investigators role groups, and remove anyone who does not triage alerts.
- Decide whether alert reviewers should see content for every user in scope, and if not, check how administrative units limit restricted administrators.
- Brief analysts and investigators on which activities support preview and which do not, so a missing preview is not read as a fault.

### At rollout
- Test Content preview on an alert with a SharePoint or OneDrive file download using a test reviewer, and note which role group that account belongs to.
- Allow up to 30 minutes after any role group change before testing again.

### After rollout
- Review role group membership on a regular schedule, using the roles groups page and, where scripted, the role group cmdlet.
- Check the Insider Risk Management audit log for alert-related activity by reviewers, and confirm with your own test whether a preview appears there.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can access and investigate Insider Risk Management alerts</strong><br><small>User</small><br><small class="controls__note">Role group changes can take up to 30 minutes to apply. Learn does not say which role groups can use Content preview; this row governs alert access.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and groups › Roles groups › Insider Risk Management › Edit › Choose users <a href="https://learn.microsoft.com/purview/insider-risk-management-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>A separate switch for Content preview in Activity explorer</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Content preview has no documented control of its own, so role group membership is the control in use. Per Learn's permissions table, the Insider Risk Management Admins group does not have *Access & investigate alerts*, while the Insider Risk Management, Analysts and Investigators groups do. Whether those groups can all use Content preview is not yet documented.

If you scope people with administrative units, restricted administrators are limited as Learn describes under administrative units. The Insider Risk Management audit log is turned on automatically and cannot be disabled; its Alerts category is documented, but Learn does not say whether a content preview is recorded.

## Open questions

- Which Insider Risk Management role groups can use Content preview, and does it need a permission beyond *Access & investigate alerts*? Watch the permissions page on Microsoft Learn.
- Is Content preview on for all tenants, or must an administrator enable it? Learn's Activity explorer note refers to an organisation enabling the feature without naming a setting. Watch Message center and the Activity explorer page.
- Is a content preview recorded in the Insider Risk Management audit log or the unified audit log?
- Will a licence or meter specific to Content preview be published once it leaves preview on Learn?

<!-- rationale
risk: Medium. Alert reviewers can read the content behind an alert before any case exists, and Microsoft Learn documents no separate switch for it; access follows the Insider Risk Management role groups.
cost: Low. The only cost the sources show is admin and analyst time, plus the Insider Risk Management licence the tenant already needs; no licence or meter specific to content preview is published.
impact: Low. Only people who work Insider Risk Management alerts (analysts and investigators) see the preview; other users notice nothing.
-->

<!-- verifier-findings (2026-11-23, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters: first sentence / behaviour: Before this change, the first look at underlying content occurred at the case stage rather than the alert stage. | Found: Searched: Insider Risk Management content preview previously case first content review. Read activities and content-explorer passages. They document case content review and the new alert preview, but do not establish that all earlier first content review required a case. | Fix: Replace the first sentence with: 'This brings content review into the alert stage without creating a case.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model and notes; Cost and licensing; rationale: cost / licensing: Content preview is included as an option inside the licensed Insider Risk Management product. | Found: | Feature | Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW and Microsoft Defender + Purview Suite FLW, and Microsoft 365 E5/A5/F5/G5 Insider Risk Management | ... | Insider Risk Management | Included | | Fix: Keep licensing.model as 'included'. Add this sentence to the licensing notes and Cost and licensing: 'Insider Risk Management is included in Microsoft 365 E5/A5/G5 and the other plans listed in Microsoft's Purview service description.' Add https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description to sources. Keep the narrower statement that no licence or meter specific to Content preview is published. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: The checklist asks readers to check administrative-unit scoping, but that control is absent from the controls table. | Found: check how administrative units limit restricted administrators. ... Table controls: Who can access and investigate Insider Risk Management alerts; A separate switch for Content preview in Activity explorer. | Fix: The Before rollout instruction to check administrative-unit scoping has no corresponding controls-table row. Remove that checklist bullet; retain the documented administrative-unit explanation in Risk assessment and Governance controls.
- [contradicted, minor] Governance guidance: After rollout; Governance controls table / consistency: The checklist asks readers to check the Insider Risk Management audit log, but that control is absent from the controls table. | Found: Check the Insider Risk Management audit log for alert-related activity by reviewers ... Table controls: Who can access and investigate Insider Risk Management alerts; A separate switch for Content preview in Activity explorer. | Fix: The After rollout instruction to check the Insider Risk Management audit log has no corresponding controls-table row. Remove that checklist bullet; retain the audit-log facts and the open question about Content preview logging.
-->
