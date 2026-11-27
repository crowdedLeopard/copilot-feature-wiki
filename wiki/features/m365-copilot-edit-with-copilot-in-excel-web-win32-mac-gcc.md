---
title: "Excel: Edit with Copilot builds and edits workbooks in GCC, GCC High and DoD"
slug: "m365-copilot-edit-with-copilot-in-excel-web-win32-mac-gcc"
roadmapId: 542181
topic: "m365-copilot"
products: ["Excel","Microsoft Copilot (Microsoft 365)"]
summary: "The roadmap marks Edit with Copilot in Excel as Launched for GCC, GCC High and DoD, but Microsoft's service description still lists it as not currently available there. It needs a Microsoft 365 Copilot licence; no switch of its own is documented."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Desktop","Mac","Web"]
targetDate: "October CY2026"
previewDate: null
risk: "medium"
cost: "medium"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "add-on"
  notes: "The Microsoft Copilot service description says a Microsoft 365 Copilot licence, an add-on plan, is required for Edit with Copilot. The licence options page lists Copilot as an add-on in GCC, GCC High and DoD. No price is published there."
audiences: ["m365-admin","service-owner","compliance","change-adoption"]
tags: ["excel","m365-copilot","microsoft-365-apps","anthropic","licensing","cloud-policy","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 542181"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=542181"
    kind: "roadmap"
  - title: "Microsoft Copilot (service description)"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot"
    kind: "learn"
  - title: "Understand Microsoft U.S. government cloud environments for Microsoft 365 and Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/gov-overview"
    kind: "learn"
  - title: "License options for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/copilot-license-options"
    kind: "learn"
  - title: "Anthropic operated models for non-federal customers in GCC"
    url: "https://learn.microsoft.com/copilot/implement/anthropic-non-federal-gcc"
    kind: "learn"
  - title: "Claude models from Anthropic in Microsoft Online Services"
    url: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor"
    kind: "learn"
  - title: "Data, Privacy, and Security for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy"
    kind: "learn"
  - title: "Use policy settings to manage privacy controls for Microsoft 365 Apps for enterprise"
    url: "https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "copilotPolicySetting resource type"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/resources/copilotpolicysetting"
    kind: "learn"
  - title: "Which users hold the Microsoft 365 Copilot licence Edit with Copilot requires (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Which users hold the Microsoft 365 Copilot licence Edit with Copilot requires (PowerShell)"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
videos: []
related: ["m365-copilot-agent-mode-in-excel-for-desktop-apps","m365-copilot-agent-mode-in-excel","word-copilot-edit-mode-is-available-to-users-in-office-365-gcc","m365-copilot-edit-your-document-with-copilot-in-powerpoint-in-government-clouds-gcc-high","cloud-policy"]
controls:
  - governs: "Which users hold the Microsoft 365 Copilot licence Edit with Copilot requires"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "License or User Administrator at least. The service description lists Edit with Copilot as needing this licence."
  - governs: "Which users can access Anthropic models in non-federal GCC tenants"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > View all > AI providers operating as Microsoft subprocessors > Available subprocessors for your organization > Anthropic > I acknowledge and agree to the above terms > Choose which users can access Anthropic models"
      docs: "https://learn.microsoft.com/copilot/implement/anthropic-non-federal-gcc"
    api: null
    note: "AI Administrator or Global Administrator. Disabled by default. The GCC page documents the models only in Copilot Chat's model picker, not in Edit with Copilot."
  - governs: "Whether Copilot features are available in Excel and other Office apps (connected experiences that analyse content)"
    scope: "user"
    ui:
      surface: "Group Policy Management"
      path: "User Configuration > Policies > Administrative Templates > Microsoft Office 2016 > Privacy > Trust Center > Allow the use of connected experiences in Office that analyze content"
      docs: "https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls"
    api:
      kind: "other"
      call: "Registry value UserContentDisabled set to 2 (Disabled) under HKEY_CURRENT_USER\\Software\\Policies\\Microsoft\\office\\16.0\\common\\privacy"
      docs: "https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls"
    note: "Existing control, also settable through Cloud Policy. Removes Copilot features from several apps, not Edit with Copilot alone. Unconfigured, these experiences stay available."
  - governs: "Setting that turns Edit with Copilot in Excel on or off on its own"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such setting at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-11-03T00:14:11"
changes:
  - date: "2026-11-27"
    note: "New briefing: the roadmap marks Edit with Copilot in Excel as Launched for GCC, GCC High and DoD while the service description still lists it as not currently available."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 49 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 49
  confirmed: 49
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "c1800061961808edabb88e2729356ccf"
---

## What's changing

Edit with Copilot in Excel lets users build and change workbooks side by side with Copilot in US government clouds. The roadmap item states that Copilot uses Excel's tables, charts, PivotTables and formulas to help with tasks such as updating budgets, building financial models and analysing data. The record lists GCC, GCC High and DoD as clouds, and Desktop, Mac and Web as platforms.

Microsoft's release notes describe the worldwide release (roadmap IDs 542182 and 527835, "formerly Agent Mode") as a new option in Copilot in Excel that lets users edit a workbook through chat, reached from the "Let's edit together" message or by selecting **Edit with Copilot** from the tools menu. Microsoft Learn has no page about the government-cloud release, so how it appears there rests on the roadmap description. Microsoft has not stated what happens on arrival in government tenants, including whether the option is on by default.

The roadmap record and Microsoft Learn disagree. The record gives the status as Launched, with a target of October CY2026 and a release phase of General Availability. The Microsoft Copilot service description, whose table shows availability as of its last update date, lists Edit with Copilot in Word, Excel, PowerPoint and OneNote as "Not currently available" in GCC, GCCH and DoD at the time of writing (November 2026). Its footnote on Copilot Chat in the apps adds that Copilot's ability to analyse structured Excel data "is impacted until Edit with Copilot in Excel is released in GCC, GCC-High and DoD".

## Why it matters

This is a Microsoft 365 Copilot (Premium) capability that lets Copilot make changes inside workbooks government users already hold, such as budgets and financial models. The decisions for a service owner are who holds the Copilot licence, whether a non-federal GCC tenant allows Anthropic models, and what to tell analysts while the roadmap says Launched and the service description says not available.

Microsoft has not stated whether the capability is on by default, and no source says existing Excel behaviour changes for users without the licence. Expect licensed users to ask for it because the roadmap shows it as Launched; check the service description table for your cloud before promising a date, and treat it as the better guide to what is live.

## Risk assessment

**Data exposure**

- Copilot works on the workbook the user has open. Microsoft's government overview says prompts, responses and generated content stay in the government cloud, and that Copilot inherits the security and compliance controls of the underlying environment.
- The exception is Anthropic models in non-federal GCC: Microsoft says that, when enabled, they process Customer Data outside Microsoft's FedRAMP-authorized U.S. Government cloud. The setting is disabled by default, and the GCC page documents the models only in the model picker in Copilot Chat in the Microsoft Copilot app and on the web.

**Security & identity**

- The service description ties Edit with Copilot to the Microsoft 365 Copilot licence, so licence assignment decides who can use it. Microsoft's Anthropic page says Claude models aren't available for federal customers in GCC or for any customers in GCC High and DoD.

**Autonomy & actions**

- The roadmap says Copilot builds and edits workbooks using formulas and PivotTables. Microsoft has not described for government clouds how users review or undo its changes, so pilot it on copies of financial models before relying on the output.

**Change & support**

- The Launched status beside the "Not currently available" table entry will generate tickets from licensed users who cannot find the option. Microsoft Learn documents no setting that switches Edit with Copilot in Excel on or off on its own at the time of writing (November 2026); the broader policy for connected experiences that analyse content removes Copilot features from Excel and other apps together.

## Cost and licensing

**Licence.** The Microsoft Copilot service description says Microsoft 365 Copilot is an add-on plan with specific licensing prerequisites, and its footnote for Edit with Copilot says "A Microsoft 365 Copilot license is required to access this feature." The License options for Microsoft Copilot page says Microsoft Copilot is available as an add-on in GCC, GCC High and DoD environments for the US Government plans it lists.

**Meter and caps.** Neither page attaches a meter or credit rate to Edit with Copilot.

**Indirect costs.** Admin time to assign licences, run a pilot and answer tickets while the sources disagree.

**Not yet published.** Neither page states a price for the add-on in government clouds.

## Scope

**Users and licences.** Users with a Microsoft 365 Copilot licence, per the service description footnote.

**Clouds.** GCC, GCC High and DoD, as the roadmap record lists them. The service description lists the capability as "Not currently available" in all three at the time of writing (November 2026).

**Platforms.** Desktop, Mac and Web, per the record. For users without the Copilot licence, the service description says Copilot Chat is currently not available in the web apps in GCC, GCC-High and DoD.

**Roles.** At least a License or User Administrator assigns licences. Changing the Anthropic setting in non-federal GCC needs the AI Administrator or Global Administrator role.

**Rollout.** Status Launched, target October CY2026. Microsoft has not stated a rollout mechanism for government tenants.

## Governance guidance

### Before rollout

- Check the Microsoft Copilot service description feature table for your cloud before giving analysts a date; it currently lists Edit with Copilot as not currently available in GCC, GCCH and DoD.
- List which users hold a Microsoft 365 Copilot licence (Users > Active users in the Microsoft 365 admin center) and decide who should get Edit with Copilot first.
- Decide, as a non-federal GCC tenant, whether the Anthropic setting stays at its default of disabled, coordinating with compliance and procurement stakeholders as Microsoft's GCC page asks.

### At rollout

- Pilot Edit with Copilot with a few licensed finance users on copies of budget and model workbooks, and record how its edits appear on each platform.
- Confirm whether your Group Policy or Cloud Policy disables connected experiences that analyse content, since that removes Copilot features from Excel on Windows and Mac.
- Tell licensed users where Microsoft documents the option for the worldwide release (**Edit with Copilot** in the tools menu) and that they must check the formulas Copilot writes.

### After rollout

- Compare help-desk reports of a missing option with the service description table before opening a Microsoft support case.
- Re-check the service description table and Message center monthly until the table and the roadmap agree.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot licence Edit with Copilot requires</strong><br><small>User</small><br><small class="controls__note">License or User Administrator at least. The service description lists Edit with Copilot as needing this licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users can access Anthropic models in non-federal GCC tenants</strong><br><small>Tenant</small><br><small class="controls__note">AI Administrator or Global Administrator. Disabled by default. The GCC page documents the models only in Copilot Chat's model picker, not in Edit with Copilot.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › AI providers operating as Microsoft subprocessors › Available subprocessors for your organization › Anthropic › I acknowledge and agree to the above terms › Choose which users can access Anthropic models <a href="https://learn.microsoft.com/copilot/implement/anthropic-non-federal-gcc" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Copilot features are available in Excel and other Office apps (connected experiences that analyse content)</strong><br><small>User</small><br><small class="controls__note">Existing control, also settable through Cloud Policy. Removes Copilot features from several apps, not Edit with Copilot alone. Unconfigured, these experiences stay available.</small></td><td data-label="Admin UI"><strong>Group Policy Management</strong><br>User Configuration › Policies › Administrative Templates › Microsoft Office 2016 › Privacy › Trust Center › Allow the use of connected experiences in Office that analyze content <a href="https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry value UserContentDisabled set to 2 (Disabled) under HKEY_CURRENT_USER\Software\Policies\Microsoft\office\16.0\common\privacy</code> <a href="https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Setting that turns Edit with Copilot in Excel on or off on its own</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No control specific to Edit with Copilot in Excel is documented, so the rows are existing controls. The licence decides who can use it. The connected-experiences policy is broader: Microsoft says turning it off removes Copilot features from Excel, OneNote, Outlook, PowerPoint and Word in the current versions on Windows, Mac, iOS and Android, and that page does not mention Excel for the web. The Anthropic setting exists only for non-federal GCC tenants; Microsoft says the option doesn't appear in the admin center for federal GCC, GCC High or DoD customers.

## Open questions

- When will the service description table show Edit with Copilot in Excel as available in GCC, GCC High and DoD, given the roadmap's Launched status? Watch the service description and Message center.
- Is Edit with Copilot on by default for licensed users in government tenants when it arrives? Watch Message center.
- Will Anthropic models be offered in Edit with Copilot in Excel for non-federal GCC, beyond Copilot Chat's model picker? Watch the Anthropic GCC page.
- Will Microsoft add an admin setting for Edit with Copilot on its own, for example in the Copilot policy settings API? Watch the copilotPolicySetting reference.

<!-- rationale
risk: Medium. Copilot changes workbooks users already hold, but Microsoft says content stays in the government cloud; the Anthropic exception in non-federal GCC is off by default.
cost: Medium. The service description requires the Microsoft 365 Copilot add-on licence for Edit with Copilot; no government price is published on the licensing pages.
impact: Medium. Analysts and finance staff with a Copilot licence notice it in Excel; no source documents a change for other users.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui / admin-path: The printed Microsoft 365 admin center path reaches Anthropic user access configuration for non-federal GCC. | Found: Review the information in the Terms and conditions section, and if they’re acceptable, select the I acknowledge and agree to the above terms checkbox. ... Under Choose which users can access Anthropic models | Fix: Set the path to 'Copilot > Settings > View all > AI providers operating as Microsoft subprocessors > Available subprocessors for your organization > Anthropic > Terms and conditions > I acknowledge and agree to the above terms > Choose which users can access Anthropic models', adding the omitted section heading documented at https://learn.microsoft.com/copilot/implement/anthropic-non-federal-gcc. | Source: https://learn.microsoft.com/copilot/implement/anthropic-non-federal-gcc
-->
