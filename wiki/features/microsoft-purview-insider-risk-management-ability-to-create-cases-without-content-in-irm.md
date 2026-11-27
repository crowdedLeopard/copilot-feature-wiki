---
title: "Microsoft Purview Insider Risk Management: create cases without downloading content"
slug: "microsoft-purview-insider-risk-management-ability-to-create-cases-without-content-in-irm"
roadmapId: 554940
topic: "governance"
products: ["Microsoft Purview"]
summary: "Insider Risk Management investigators can open a case without copying the alert's files and emails into it, and add content later. No admin switch is needed; review case-handling practice and the case limits."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "May CY2026"
previewDate: "February CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Part of Insider Risk Management, which Microsoft's Get started page says needs a supported subscription with the appropriate licences assigned to users. No licence or charge specific to creating cases without content is published."
audiences: ["security","compliance"]
tags: ["insider-risk-management","purview","role-groups","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 554940"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=554940"
    kind: "roadmap"
  - title: "Investigate Microsoft Purview Insider Risk Management activities"
    url: "https://learn.microsoft.com/purview/insider-risk-management-activities"
    kind: "learn"
  - title: "Take action on Insider Risk Management cases"
    url: "https://learn.microsoft.com/purview/insider-risk-management-cases"
    kind: "learn"
  - title: "Review data with the Insider Risk Management content explorer"
    url: "https://learn.microsoft.com/purview/insider-risk-management-content-explorer"
    kind: "learn"
  - title: "Limits in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-limits"
    kind: "learn"
  - title: "Assign permissions in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    kind: "learn"
  - title: "Get started with Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-configure"
    kind: "learn"
  - title: "Learn about Insider Risk Management settings"
    url: "https://learn.microsoft.com/purview/insider-risk-management-settings"
    kind: "learn"
  - title: "Who can create cases and view Content explorer (Insider Risk Management role group membership) (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
videos: []
related: ["insider-risk-management","microsoft-purview-insider-risk-management-ability-to-preview-content-in-insider-risk-manag","microsoft-purview-compliance-portal-insider-risk-management-data-security-investigations-i","microsoft-purview-insider-risk-management-expanding-note-capabilities-across-alerts-and-ca","role-groups"]
controls:
  - governs: "Whether a new case downloads the alert's content into Content explorer"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Insider Risk Management > Alerts > alert > Actions > Confirm alerts & create case > Create case with content download on"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-activities"
    api: null
    note: "Investigator's choice per case, marked preview on Learn. Must be left unchecked once the content download limit is reached."
  - governs: "Downloading content into an active case created without it"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Insider Risk Management > Cases > case > Content explorer > Add content"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-content-explorer"
    api: null
    note: "Needs capacity under the content download limit; resolve cases to free it."
  - governs: "Resolving a case, which frees content download capacity"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Insider Risk Management > Cases > case > Resolve case"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-cases"
    api: null
    note: "Resolved cases and their artefacts are deleted 120 days after resolution."
  - governs: "Who can create cases and view Content explorer (Insider Risk Management role group membership)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and groups > Roles groups > Insider Risk Management > Edit > Choose users"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"Insider Risk Management\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "The Insider Risk Management Investigators role group can also create cases and view Content explorer."
  - governs: "Tenant-wide requirement or block on content download for new cases"
    scope: "tenant"
    ui: null
    api: null
    note: "Content download is set per case by the investigator."
confidence: "medium"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-06-11T23:15:28"
changes:
  - date: "2026-11-27"
    note: "New briefing: per-case content download choice in Insider Risk Management, with the roadmap's 2,000 active case limit and the Learn limits page that still shows 100."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 48 statements confirmed"
version: 1
verification:
  status: "verified"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 48
  confirmed: 48
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "0ee7a9102e70a01aaaec04583423894c"
---

## What's changing

Insider Risk Management (the Microsoft Purview solution that scores user activity for insider risk and raises alerts) now lets an investigator create a case from an alert without downloading the alert's content into the case. Until content is downloaded, the case's Content explorer holds no copies of the files and email messages behind the alert.

The choice is made per case. In the **Confirm alert and create insider risk case** dialog box, the investigator selects **Create case with content download on** to download content; Microsoft Learn marks that option as preview. If content download is not enabled at creation, it can be enabled while the case is active, through **Add content** on the case's **Content explorer** tab. The **Cases** dashboard has a **Content download** column showing whether download is on or off for each case.

The roadmap item states that Microsoft is introducing a new active case limit of 2,000, while the active content download limit stays at 100. The Learn page *Limits in Insider Risk Management* still lists the maximum number of active cases as 100 at the time of writing (November 2026), so the two sources disagree. The case-creation steps on Learn say that after the content download limit is reached, investigators can still create cases but must leave the download box unchecked.

The roadmap item is **Launched**, with preview in February CY2026 and general availability targeted for May CY2026, on the web, in Worldwide, GCC, GCC High and DoD.

## Why it matters

For a team that works many insider risk alerts, the content download limit becomes the figure to manage: per the roadmap, up to 2,000 cases can be active, while the active content download limit stays at 100. Investigators now have to decide, case by case, whether the evidence copy is needed yet, and resolve cases to free download capacity when it is. Expect questions from investigators who open a case and find Content explorer empty.

There is also a data-minimisation gain. A case with content download on copies the alert's files from their original storage into the case; a case without it does not, so fewer copies of sensitive material sit in Insider Risk Management. Microsoft Learn documents no tenant setting that makes the choice for them.

## Risk assessment

**Data exposure**
- A case with content download on copies the alert's files and messages into the case from their original locations; creating cases without download reduces those copies. The permissions page gives Content explorer access to the Insider Risk Management and Insider Risk Management Investigators role groups.
- More active cases means more retained data: Learn states that active cases and their artefacts are retained indefinitely, while resolved cases are deleted 120 days after resolution. Resolving cases promptly keeps the retained set down.

**Security & identity**
- No change to who can act: creating a case still requires the Insider Risk Management or Insider Risk Management Investigators role group. Usernames can be shown pseudonymised in alerts and cases through the **Privacy** setting described on the [settings page](https://learn.microsoft.com/purview/insider-risk-management-settings).

**Autonomy & actions**
- No change: cases are still created by a person from an alert.

**Change & support**
- Evidence may arrive late. Learn says content for new cases usually takes about an hour to populate, and that Content explorer stops updating with new activities once a case has been active for over 30 days, so content added late to a long-running case may not reflect recent activity.
- When the content download limit is reached, investigators must resolve cases before they can download more content.

## Cost and licensing

**Licence.** Creating cases is part of Insider Risk Management. Microsoft's [Get started with Insider Risk Management](https://learn.microsoft.com/purview/insider-risk-management-configure) page says administrators need to verify the organisation has a supported subscription and assign the appropriate licences to users. No licence specific to this option is published.

**Meter.** The same page says some Insider Risk Management indicators need the Purview pay-as-you-go billing model; it publishes no separate charge or meter for cases or content download.

**Indirect costs.** Investigator time to decide on content download per case and to resolve cases when the content download limit is reached.

## Scope

- **Who uses it:** members of the Insider Risk Management or Insider Risk Management Investigators role groups, who can create cases. Insider Risk Management Analysts can investigate cases but cannot view Content explorer.
- **Where:** the Insider Risk Management solution in the Microsoft Purview portal (web).
- **Clouds:** Worldwide, GCC, GCC High and DoD, as the roadmap item lists them.
- **Limits:** the roadmap gives 2,000 active cases and 100 active content downloads; the Learn limits page lists 100 active cases at the time of writing (November 2026).

## Governance guidance

### Before rollout
- Agree with the insider risk team when a case should be created with content download on, for example when an alert is likely to go to HR, legal or an eDiscovery (Premium) escalation.
- Check who holds the Insider Risk Management and Insider Risk Management Investigators role groups, since those members decide whether content is copied into each case.

### At rollout
- Brief investigators that the **Create case with content download on** option sits in the case-creation dialog, and that content can be added later with **Add content** on the case's Content explorer tab.
- Tell investigators that once the content download limit is reached they must leave the box unchecked, and resolve cases to download more content.

### After rollout
- Review the **Content download** column on the Cases dashboard to see how many active cases hold downloaded content.
- Resolve finished cases, since active cases are retained indefinitely and hold download capacity.
- Recheck the *Limits in Insider Risk Management* page for the 2,000 active case limit the roadmap describes.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a new case downloads the alert's content into Content explorer</strong><br><small class="controls__note">Investigator's choice per case, marked preview on Learn. Must be left unchecked once the content download limit is reached.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Insider Risk Management › Alerts › alert › Actions › Confirm alerts &amp; create case › Create case with content download on <a href="https://learn.microsoft.com/purview/insider-risk-management-activities" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Downloading content into an active case created without it</strong><br><small class="controls__note">Needs capacity under the content download limit; resolve cases to free it.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Insider Risk Management › Cases › case › Content explorer › Add content <a href="https://learn.microsoft.com/purview/insider-risk-management-content-explorer" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Resolving a case, which frees content download capacity</strong><br><small class="controls__note">Resolved cases and their artefacts are deleted 120 days after resolution.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Insider Risk Management › Cases › case › Resolve case <a href="https://learn.microsoft.com/purview/insider-risk-management-cases" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can create cases and view Content explorer (Insider Risk Management role group membership)</strong><br><small>Tenant</small><br><small class="controls__note">The Insider Risk Management Investigators role group can also create cases and view Content explorer.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and groups › Roles groups › Insider Risk Management › Edit › Choose users <a href="https://learn.microsoft.com/purview/insider-risk-management-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;Insider Risk Management&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide requirement or block on content download for new cases</strong><br><small>Tenant</small><br><small class="controls__note">Content download is set per case by the investigator.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Content download is an investigator's per-case choice in the Microsoft Purview portal, not an admin setting. Microsoft Learn documents no tenant-wide setting to require or prevent content download on new cases at the time of writing (November 2026); who makes the choice is governed through membership of the Insider Risk Management and Insider Risk Management Investigators role groups. Role group changes can take up to 30 minutes to apply. Insider Risk Management Analysts can work cases but cannot view Content explorer. When resolving a case, the option to delete the case and associated content immediately permanently removes its content, alerts and insights.

## Open questions

- When will the *Limits in Insider Risk Management* page show the 2,000 active case limit and the 100 content download limit that the roadmap describes?
- When will the **Create case with content download on** option lose its preview label, given that the roadmap item is Launched?
- Will Microsoft add a tenant setting or API to require or prevent content download on new cases? Watch the Insider Risk Management settings page.
- For a case active for more than 30 days, does content added later through **Add content** include recent activity, given that Content explorer stops updating after 30 days?

<!-- rationale
risk: Low. The change lets investigators copy less content into cases; it stays inside the existing Insider Risk Management role groups and adds no new data access.
cost: Low. It sits inside Insider Risk Management's existing licensing, and Microsoft publishes no separate charge for cases or content download; the cost is investigator and admin time.
impact: Low. Only members of the Insider Risk Management and Insider Risk Management Investigators role groups, who create cases, see the new option.
-->
