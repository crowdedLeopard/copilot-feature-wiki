---
title: "Microsoft Purview Insider Risk Management: notes on alerts and cases"
slug: "microsoft-purview-insider-risk-management-expanding-note-capabilities-across-alerts-and-ca"
roadmapId: 564620
topic: "governance"
products: ["Microsoft Purview"]
summary: "Analysts can add notes to Insider Risk Management alerts, and system-generated notes log status, assignment and closure changes on alerts and cases. The roadmap lists it as launched; Learn still labels it preview."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: "July CY2026"
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Learn says Microsoft offers Insider Risk Management as part of a wide selection of Microsoft 365 licensing subscriptions. The notes sections name no separate licence, and no price or meter for notes is published."
audiences: ["compliance","security"]
tags: ["insider-risk-management","purview","defender-xdr","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 564620"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=564620"
    kind: "roadmap"
  - title: "Investigate Microsoft Purview Insider Risk Management activities"
    url: "https://learn.microsoft.com/purview/insider-risk-management-activities"
    kind: "learn"
  - title: "Take action on Insider Risk Management cases"
    url: "https://learn.microsoft.com/purview/insider-risk-management-cases"
    kind: "learn"
  - title: "Assign permissions in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    kind: "learn"
  - title: "Plan for Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-plan"
    kind: "learn"
  - title: "Get started with Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-configure"
    kind: "learn"
  - title: "Review activities with the Insider Risk Management audit log"
    url: "https://learn.microsoft.com/purview/insider-risk-management-audit-log"
    kind: "learn"
  - title: "Investigate insider risk threats in the Microsoft Defender portal"
    url: "https://learn.microsoft.com/defender-xdr/irm-investigate-alerts-defender"
    kind: "learn"
  - title: "Which users can investigate alerts and cases, where notes are added (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
videos: []
related: ["insider-risk-management","microsoft-purview-insider-risk-management-unified-alert-queue","microsoft-purview-insider-risk-management-irm-alerts-in-xdr","microsoft-purview-introducing-irm-alert-classification"]
controls:
  - governs: "Which users can investigate alerts and cases, where notes are added"
    scope: "group"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and groups > Roles groups > Insider Risk Management > Edit > Choose users"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Path shown is for the Insider Risk Management role group; Analysts and Investigators role groups also access alerts and cases. Changes can take up to 30 minutes."
  - governs: "Tenant switch to turn alert and case notes on or off"
    scope: "tenant"
    ui: null
    api: null
    note: "Learn describes no such setting at the time of writing (November 2026)."
confidence: "high"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-10-06T22:56:31"
changes:
  - date: "2026-11-22"
    note: "First briefing: alert notes and system-generated notes for Insider Risk Management alerts and cases, launched on the roadmap but still labelled preview on Learn."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 56 statements confirmed"
version: 1
verification:
  status: "verified"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 56
  confirmed: 56
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "5f1805b6c1e24613a6df08c3603a28d6"
---

## What's changing

Insider Risk Management now lets analysts and investigators add notes directly on alerts, and adds system-generated notes that record changes on alerts and cases. The roadmap item describes this as a collaboration capability for documenting investigation progress and keeping an auditable timeline, with the note enhancements also made available in Cases.

Microsoft Learn describes the behaviour in the unified alert experience, reached from the **Alerts (preview)** tab in the left navigation of Insider Risk Management. System-generated notes are added to an alert when its status changes, when the assigned user changes, or when the alert is closed. They appear in the **Notes** tab of the alert details panel. Learn adds that some system-generated notes might not appear for activity before July 1. Analysts and investigators can also add and view their own notes on alerts.

On cases, system-generated notes are added for a change in case status, a change in the assigned user, closure of a case and a case escalation. They sit beside analyst-written notes, which are added from the **Case notes** tab with **Add case note**. Comments typed in the **Confirm alert and create insider risk case** dialog box automatically become a case note.

Limits Learn states: up to 50 manual notes per alert or case (system-generated notes are not counted), notes can't be edited or deleted at this time, and there's no sync between alert notes in Insider Risk Management and Microsoft Defender. The roadmap record gives status Launched, a preview date of July CY2026 and a target date of October CY2026, with release phases General Availability and Preview. Learn's notes sections are still headed "preview", so the two sources differ on maturity. Clouds listed on the record: Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD; platform: Web.

## Why it matters

Notes move investigation history into the alert itself, so the reasoning behind a triage decision is kept with the alert and no longer relies on side channels. For a compliance or security owner this is the place where sensitive judgements about named employees will now be written down, and Learn says saved notes can't be edited or deleted at this time.

Microsoft has not been found to describe an admin switch for notes, and system-generated entries are described as added automatically. If nobody acts, expect the automatic entries to accumulate on alerts and cases and analysts to start writing free text without any agreed standard. The useful preparation is guidance on what belongs in a note, and a check of who holds the roles that can reach alerts and cases.

## Risk assessment

**Data exposure**

- Notes are free text written by analysts about alerts that concern individual users. Learn states that saved notes can't be edited or deleted at this time, so a note written with excessive detail stays on the alert or case. Agree what may be recorded before analysts start.
- Learn's permissions table lists the *Insider Risk Management*, *Insider Risk Management Analysts* and *Insider Risk Management Investigators* role groups as able to access and investigate alerts and cases. Review those memberships, because those are the groups the table associates with working alerts and cases.

**Security & identity**

- Administrative units can limit what scoped role-group members reach: Learn's table shows access to investigate alerts and cases as "Scoped" for scoped analysts and investigators. Confirm scoped investigators see the notes you expect on the alerts they can open.
- Role-group changes can take up to 30 minutes to apply, per the permissions page.

**Autonomy & actions**

- No change in what the system does to users: system-generated notes record status, assignment, closure and escalation changes that people make, as Learn describes them.

**Change & support**

- Alert notes belong to the unified alert experience on the **Alerts (preview)** tab. Learn says the classic and unified experiences would both be available for at least 60 days and that after August 31 only the unified experience will be supported, so analysts still on classic dashboards should be told where notes live.
- Alert notes do not sync to Microsoft Defender, per Learn, so Defender portal users will not see them next to the alerts shared with Defender XDR.

## Cost and licensing

Learn says Microsoft offers Insider Risk Management as part of a wide selection of Microsoft 365 licensing subscriptions and points to the subscription requirements for details ([Plan for Insider Risk Management](https://learn.microsoft.com/purview/insider-risk-management-plan)). The pages that describe alert notes and case notes name no separate licence, price or meter for notes, and the roadmap record states none.

Learn separately says that some Insider Risk Management indicators are available only if you enable the pay-as-you-go billing model ([Get started with Insider Risk Management](https://learn.microsoft.com/purview/insider-risk-management-configure)). The notes pages do not tie notes to that model. The cost to budget is analyst time and the guidance you write.

## Scope

**Who it reaches.** Analysts and investigators who work Insider Risk Management alerts and cases. Learn's permissions table gives *Insider Risk Management*, *Insider Risk Management Analysts* and *Insider Risk Management Investigators* access to investigate alerts and cases. Members scoped by administrative units are limited to the scope they are assigned.

**Clouds and platform.** The roadmap record lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, on the Web platform.

**Where it appears.** Alert notes are described in the unified alert experience under **Alerts (preview)**; case notes are in the **Case notes** tab of a case.

**Rollout.** The roadmap item is Launched with a target of October CY2026. Learn's notes sections still carry a preview label, and Learn does not state a rollout mechanism or a tenant switch.

## Governance guidance

### Before rollout

- Write a short standard for what analysts may put in a note, because saved notes can't be edited or deleted at this time.
- Check membership of the role groups that can investigate alerts and cases, and who holds the **Insider Risk Management** role group, using the first controls row.
- Tell analysts that alert notes live in the unified alert experience under **Alerts (preview)** and that Learn says there's no sync to Microsoft Defender.

### At rollout

- Brief analysts and investigators on the **Notes** tab for alerts and the **Case notes** tab for cases, and on the 50 manual notes limit per alert or case.
- Explain that status, assignment, closure and escalation changes now create system-generated entries, and that some may be missing for activity before July 1.

### After rollout

- Sample a few alerts and cases to confirm notes follow the agreed standard.
- Re-check Learn's notes sections and the roadmap item for the removal of the preview label and any change to the edit and delete limitation.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users can investigate alerts and cases, where notes are added</strong><br><small>Group</small><br><small class="controls__note">Path shown is for the Insider Risk Management role group; Analysts and Investigators role groups also access alerts and cases. Changes can take up to 30 minutes.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and groups › Roles groups › Insider Risk Management › Edit › Choose users <a href="https://learn.microsoft.com/purview/insider-risk-management-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant switch to turn alert and case notes on or off</strong><br><small>Tenant</small><br><small class="controls__note">Learn describes no such setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Learn describes no tenant setting that turns alert notes or case notes on or off, so the second row is an absence, not a control. The role-group row governs who can investigate alerts and cases; Learn does not name a permission specific to notes. After you change role-group membership, permissions can take up to 30 minutes to apply. Members of the Microsoft Entra Global Administrator and Compliance Administrator roles, and the Microsoft Purview Organization Management and Compliance Administrator role groups, can assign users to Insider Risk Management role groups.

## Open questions

- Is the notes capability fully available, or still preview? The roadmap says Launched and lists General Availability and Preview, while Learn headings still say preview. Watch the Learn pages for Insider Risk Management alerts and cases, and Message center.
- Do manual and system-generated notes appear in the Insider risk audit log? Learn's audit log page lists Alerts and Cases among its categories but does not name notes.
- Will Microsoft add the ability to edit or delete notes, which Learn says isn't possible at this time, and how does that interact with your retention rules?
- Will alert notes sync with Microsoft Defender in future? Learn currently says there's no sync.

<!-- rationale
risk: Low. Notes sit inside existing alerts and cases, which Learn lists three role groups as able to investigate; the exposure to plan for is that saved notes can't be edited or deleted at this time.
cost: Low. Learn's notes sections name no separate licence or meter, so the known cost is analyst time and guidance; Insider Risk Management itself needs a supported Microsoft 365 subscription.
impact: Medium. Analysts and investigators who work alerts and cases see the Notes tab and the automatic entries; other users and admins outside those role groups are not described as affected.
-->
