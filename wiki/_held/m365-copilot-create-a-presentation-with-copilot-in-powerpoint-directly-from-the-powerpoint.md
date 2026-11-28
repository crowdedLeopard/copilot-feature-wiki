---
title: "PowerPoint for Windows: create a presentation with Copilot from PowerPoint Home"
slug: "m365-copilot-create-a-presentation-with-copilot-in-powerpoint-directly-from-the-powerpoint"
roadmapId: 560694
topic: "m365-copilot"
products: ["PowerPoint","Microsoft Copilot (Microsoft 365)"]
summary: "PowerPoint for Windows gains an option on PowerPoint Home (File menu) to start a new presentation with Copilot. Microsoft says it is on by default for users with a Microsoft Copilot licence and needs no admin action; tell users."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop"]
targetDate: "May CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "add-on"
  notes: "MC1311974 names users assigned a Microsoft Copilot licence (the renamed Microsoft 365 Copilot add-on) as affected. Microsoft's overview also says Microsoft 365 Copilot (Basic) users can create presentations in PowerPoint; whether they get this option is not stated."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["powerpoint","m365-copilot","copilot","microsoft-365-apps","cloud-policy","licensing"]
sources:
  - title: "Microsoft 365 Roadmap item 560694"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=560694"
    kind: "roadmap"
  - title: "MC1311974: PowerPoint for Windows: Create a presentation with Copilot directly from PowerPoint Home"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1311974"
    kind: "message-center"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Data, Privacy, and Security for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/microsoft-365/microsoft-365-copilot-privacy"
    kind: "learn"
  - title: "Use policy settings to manage privacy controls for Microsoft 365 Apps for enterprise"
    url: "https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls"
    kind: "learn"
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    kind: "learn"
  - title: "Manage Copilot Chat"
    url: "https://learn.microsoft.com/copilot/manage/manage-copilot-chat"
    kind: "learn"
  - title: "Which users hold a Microsoft Copilot licence, the users MC1311974 says get the option (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Which users hold a Microsoft Copilot licence, the users MC1311974 says get the option (PowerShell)"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
videos: []
related: ["cloud-policy","m365-copilot-powerpoint-agent","powerpoint-async-notifications-for-powerpoint-agent-windows-desktop"]
controls:
  - governs: "Whether Copilot features, including this option, are available in PowerPoint and other Office apps"
    scope: "group"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > policy configuration > Choose the scope > Configure Settings > Allow the use of connected experiences in Office that analyze content"
      docs: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    api:
      kind: "other"
      call: "Registry: HKEY_CURRENT_USER\\Software\\Policies\\Microsoft\\office\\16.0\\common\\privacy usercontentdisabled=dword:00000002"
      docs: "https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls"
    note: "Turns off all connected experiences that analyze content, not only Copilot. Office Apps Administrator recommended. The page lists 1=Enabled, 2=Disabled."
  - governs: "Which users hold a Microsoft Copilot licence, the users MC1311974 says get the option"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "License Administrator or User Administrator at least. Removes the whole add-on experience, not just this option."
confidence: "medium"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-06-01T23:15:29"
changes:
  - date: "2026-11-28"
    note: "New briefing: Copilot create option on PowerPoint Home for Windows, on by default for Microsoft Copilot licence holders per MC1311974."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 55 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 55
  confirmed: 50
  unconfirmed: 2
  contradicted: 3
  attempts: 1
  hash: "7a0041c1b69c68fab467350c3e6e0c0a"
---

## What's changing

PowerPoint for Windows adds an option on PowerPoint Home, in the File menu, to create a presentation with Copilot, so users can start a Copilot draft without first opening a new file.

Microsoft's notice MC1311974 says users will find the new option on PowerPoint Home, that the experience is available immediately when PowerPoint is opened, and that the feature is enabled by default for eligible users. It says existing Microsoft 365 and Copilot policies are respected and that no admin configuration changes are required. Microsoft Learn does not have a page for this entry point yet, so what follows about its behaviour comes from the roadmap item and the notice.

The roadmap item (560694) lists the feature for Desktop in the Worldwide (Standard Multi-Tenant) cloud, at General Availability, with status Rolling out and a target of May CY2026. MC1311974 says General Availability rollout begins in late May 2026, and sets no act-by date. Microsoft lists the same feature for Mac under roadmap item 560536 and for PowerPoint on the web under 560537; this page covers the Windows desktop app only.

## Why it matters

This is a new door into an existing capability rather than a new capability. Microsoft's overview of Copilot licences already lists creating presentations from prompts as something Copilot does in PowerPoint; this change puts that option on the screen users see when PowerPoint opens. Because the notice says it is on by default for eligible users, licensed users get it without anyone in IT acting, and nothing on the notice suggests admins need to change a setting.

The practical effect is on support and adoption: expect more first drafts started with Copilot, and questions from users who see the option and from users who do not. Which users see it is decided by Copilot licensing and by the connected-experiences policy that already governs Copilot in the Office apps, so a tenant that has already decided who gets Copilot in PowerPoint has already decided who gets this.

## Risk assessment

**Data exposure**
- Microsoft's privacy page says Microsoft Copilot accesses content and context through Microsoft Graph that the user has permission to access. MC1311974 says existing Microsoft 365 and Copilot policies are respected; it does not say what content a presentation started from PowerPoint Home can draw on beyond the user's prompt.

**Security & identity**
- No change described: the option runs as the signed-in user, and Microsoft's overview says prompts and responses are covered by Enterprise Data Protection when users sign in with Microsoft Entra accounts.

**Autonomy & actions**
- Copilot drafts a presentation that the user then reviews; nothing in the notice describes Copilot acting outside the new file.

**Change & support**
- The option appears on PowerPoint Home for eligible users by default, so expect help-desk questions about why some users see it and others do not (licence, and the **Allow the use of connected experiences in Office that analyze content** policy).

## Cost and licensing

MC1311974 says the users affected are those on PowerPoint for Windows who are assigned a Microsoft Copilot licence. Microsoft's Copilot Chat management page notes that Microsoft 365 Copilot is now named Microsoft Copilot, and the [Microsoft Copilot overview](https://learn.microsoft.com/copilot/plan/copilot-overview) describes Microsoft 365 Copilot (Premium) as the add-on licence with the full Copilot experience in Word, Excel, PowerPoint and OneNote.

The same overview says Microsoft 365 Copilot (Basic) users, who do not have the add-on licence, can use Copilot in PowerPoint to create presentations from prompts or existing content, and that some features are subject to fair use limits. Microsoft has not said whether the PowerPoint Home option reaches Basic users.

No separate price, meter or spending control for this option is published. The indirect cost is user communication, which the notice suggests.

## Scope

- **Users:** people using PowerPoint for Windows who are assigned a Microsoft Copilot licence (MC1311974).
- **Platform:** Desktop on the roadmap record; the notice names PowerPoint for Windows. Mac (560536) and web (560537) are separate roadmap items.
- **Cloud:** Worldwide (Standard Multi-Tenant) on the roadmap record; no other cloud is listed.
- **Rollout:** General Availability, rollout beginning in late May 2026 per MC1311974; roadmap status Rolling out, target May CY2026.
- **Prerequisite:** Microsoft's privacy page says that if connected experiences that analyze content are turned off, Copilot features are not available in PowerPoint on Windows, Mac, iOS or Android.
- **Roles:** Office Apps Administrator is the recommended role for Cloud Policy; License Administrator or User Administrator at least for licence assignment.

## Governance guidance

### Before rollout
- Confirm which users hold a Microsoft Copilot licence in the Microsoft 365 admin center, since MC1311974 names them as the users who get the option.
- Check whether a Cloud Policy or Group Policy configuration disables **Allow the use of connected experiences in Office that analyze content** for any group, as those users will not get Copilot in PowerPoint.
- Brief the service desk that the option is on by default for eligible users and has no separate admin switch named in the notice.

### At rollout
- Tell licensed PowerPoint for Windows users where the option is (PowerPoint Home in the File menu), as MC1311974 suggests.
- Point users to your organisation's guidance on reviewing Copilot-generated content before sharing it.

### After rollout
- Review the Microsoft Copilot usage report, which Microsoft says covers Copilot use in apps including PowerPoint, to see whether in-app adoption changes.
- Watch Message center for updates to MC1311974 and for a Learn page describing what the Home option draws on.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Copilot features, including this option, are available in PowerPoint and other Office apps</strong><br><small>Group</small><br><small class="controls__note">Turns off all connected experiences that analyze content, not only Copilot. Office Apps Administrator recommended. The page lists 1=Enabled, 2=Disabled.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › policy configuration › Choose the scope › Configure Settings › Allow the use of connected experiences in Office that analyze content <a href="https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry: HKEY_CURRENT_USER\Software\Policies\Microsoft\office\16.0\common\privacy usercontentdisabled=dword:00000002</code> <a href="https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users hold a Microsoft Copilot licence, the users MC1311974 says get the option</strong><br><small>User</small><br><small class="controls__note">License Administrator or User Administrator at least. Removes the whole add-on experience, not just this option.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

MC1311974 says no admin configuration changes are required and names no setting specific to the PowerPoint Home option, so the controls in the table are the existing ones that decide who gets Copilot in PowerPoint at all.

- The connected-experiences policy is broad: turning it off removes every Office connected experience that analyzes content, not only Copilot. Microsoft's privacy page says Copilot features are then unavailable in Excel, OneNote, Outlook, PowerPoint and Word.
- Cloud Policy settings apply after the Office app restarts, and Cloud Policy takes precedence over Group Policy where both are set.
- Removing a Microsoft Copilot licence removes the whole add-on experience, not just this option, and Microsoft 365 Copilot (Basic) users keep in-app Copilot according to the overview page.

## Open questions

- Do Microsoft 365 Copilot (Basic) users, without the add-on licence, see the create-with-Copilot option on PowerPoint Home, or only users with a Microsoft Copilot licence? Watch MC1311974 and the Microsoft Copilot overview.
- Can a presentation started from PowerPoint Home reference the user's files, meetings or email, or only the prompt? Watch for a Learn or support page on the feature.
- Will Microsoft add a policy that hides the PowerPoint Home entry point without turning off Copilot in PowerPoint? Watch Message center.
- Does use of this option appear separately in the Microsoft Copilot usage report? Watch the usage report documentation.

<!-- rationale
risk: Low. This is a new entry point to Copilot in PowerPoint, and Microsoft's notice MC1311974 says existing Microsoft 365 and Copilot policies are respected; it adds no new data access that Microsoft describes.
cost: Low. Microsoft's notice scopes the option to users assigned a Microsoft Copilot licence, so the visible cost is telling users about it; no separate price or meter for this option is published.
impact: Medium. Users of PowerPoint for Windows who hold a Microsoft Copilot licence see a new option on PowerPoint Home; other users and admins notice nothing.
-->

<!-- verifier-findings (2026-11-28, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What's changing / absence: Microsoft Learn does not have a page describing this Windows opening-screen or File-menu entry point yet. | Found: You can quickly begin a new presentation using Microsoft 365 Copilot from the PowerPoint start menu or file menu. Copilot is easily accessible when you open PowerPoint or click the File tab, helping to simplify your workflow. | Fix: Replace the documentation-absence sentence with: 'Microsoft Learn's July 22, 2025 release notes already describe creating presentations from the Windows start or File menus; MC1311974 describes the PowerPoint Home rollout beginning in late May 2026.' Cite https://learn.microsoft.com/microsoft-365/copilot/previous-year-release-notes#july-22,-2025. Do not infer that the two announcements describe an identical rollout. | Source: https://learn.microsoft.com/microsoft-365/copilot/previous-year-release-notes#july-22,-2025
- [unsupported, major] Risk assessment: Security & identity / behaviour: The PowerPoint Home option runs as the signed-in user. | Found: Searched: PowerPoint Home create Copilot signed in user review generated presentation policy disable entry point. Read Copilot privacy, overview, requirements excerpt and Create a new presentation with Copilot in PowerPoint; these establish user permissions, not this option's execution identity. | Fix: Replace 'the option runs as the signed-in user' with 'Microsoft Copilot respects the current user's data-access permissions', supported by https://learn.microsoft.com/copilot/microsoft-365/microsoft-365-copilot-privacy.
- [contradicted, blocker] controls[0].ui / admin-path: The Cloud Policy route is Customization > Policy Management > policy configuration > Choose the scope > Configure Settings > Allow the use of connected experiences in Office that analyze content. | Found: On the Policy configurations page, select Create. On the Choose the scope page, determine whether the policy configuration applies to all users, specific groups On the Configure Settings page, select the policies that you want to include in the policy configuration. | Fix: Use the documented creation route: 'Customization > Policy Management > Create > Choose the scope > Configure Settings > Allow the use of connected experiences in Office that analyze content'. The current route substitutes selecting an existing configuration for Create; the cited page documents Choose the scope and Configure Settings in the creation wizard. The privacy-controls page already cited supplies the policy name. | Source: https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model; licensing.notes; Cost and licensing / licensing: Microsoft 365 Copilot (Premium) is an add-on licence providing the full experience in Word, Excel, PowerPoint and OneNote. | Found: You have the Microsoft 365 Copilot add-on license with access to the full experience of Copilot in Word, Excel, PowerPoint, and OneNote. | Fix: Keep the cited add-on description, but add to licensing.notes and Cost and licensing: 'The current licence-options page also says Microsoft Copilot is available with Microsoft 365 E7.' Cite https://learn.microsoft.com/copilot/plan/copilot-license-options, which states 'Microsoft Copilot is available with Microsoft 365 E7 or as an add-on'. | Source: https://learn.microsoft.com/copilot/plan/copilot-overview
- [supported, minor] Governance controls / behaviour: Cloud Policy settings apply after the Office app restarts. | Found: Policies from Cloud Policy are applied only when the Office app is restarted. Some policies related to privacy controls will apply without restarting any Office apps. | Fix: Replace the restart clause with: 'Cloud Policy settings normally apply when Office apps restart; some privacy-control policies apply without restarting.' Keep the existing Cloud Policy citation. | Source: https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy
- [supported, minor] Governance controls / behaviour: Cloud Policy takes precedence over Group Policy when both are configured. | Found: policy settings implemented by using Cloud Policy take precedence over policy settings implemented by using Group Policy on Windows Server | Fix: Replace the precedence clause with: 'The Cloud Policy overview says Cloud Policy takes precedence over Group Policy; Microsoft's sensitive-and-regulated-customer guidance instead says Group Policy takes precedence for Win32 Office apps and advises keeping the policies aligned.' Cite https://learn.microsoft.com/compliance/anz/blueprint-copilot-reqconfig#connected-experiences, whose search excerpt states that conflicting precedence. | Source: https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy
- [unsupported, minor] rationale: impact / behaviour: Other users and administrators notice nothing from the change. | Found: Searched: PowerPoint Home Copilot option other users not licensed visible. Read MC1311974, overview and creation support page. The notice names affected users but does not guarantee no visible effect or support impact for everyone else. | Fix: Remove '; other users and admins notice nothing' from the impact rationale. Keep the sentence identifying licensed PowerPoint for Windows users as the affected audience.
- [contradicted, minor] Governance guidance: After rollout; controls / consistency: The checklist tells readers to review the Microsoft Copilot usage report, but that monitoring control has no controls-table row. | Found: After rollout: 'Review the Microsoft Copilot usage report'. The controls table lists only connected-experiences availability and licence assignment. | Fix: The 'Review the Microsoft Copilot usage report' checklist step has no matching table row. Remove that checklist bullet for this correction rather than adding an unverified control row.
-->
