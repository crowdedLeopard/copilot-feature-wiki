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
  notes: "MC1311974 names users assigned a Microsoft Copilot licence (the renamed Microsoft 365 Copilot add-on) as affected. Microsoft's overview also says Microsoft 365 Copilot (Basic) users can create presentations in PowerPoint; whether they get this option is not stated. The current licence-options page also says Microsoft Copilot is available with Microsoft 365 E7."
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
  - title: "License options for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/copilot-license-options"
    kind: "learn"
  - title: "2025 Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/previous-year-release-notes#july-22,-2025"
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
  - title: "Required configuration for Copilot guidance for Sensitive and Regulated customers"
    url: "https://learn.microsoft.com/compliance/anz/blueprint-copilot-reqconfig#connected-experiences"
    kind: "learn"
  - title: "Manage Copilot Chat"
    url: "https://learn.microsoft.com/copilot/manage/manage-copilot-chat"
    kind: "learn"
  - title: "Whether Copilot features, including this option, are available in PowerPoint and other Office apps (Microsoft 365 Apps admin center)"
    url: "https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls#policy-setting-for-connected-experiences-that-analyze-your-content"
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
      path: "Customization > Policy Management > Create > Choose the scope > Configure Settings > Allow the use of connected experiences in Office that analyze content"
      docs: "https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls#policy-setting-for-connected-experiences-that-analyze-your-content"
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
  - date: "2026-11-28"
    note: "Corrected the Cloud Policy path to the Create route, replaced the claim that Learn had no page with the July 2025 release note, narrowed the identity statement, noted E7 licensing and the Group Policy precedence conflict, and removed the usage-report step."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 54 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-28"
    note: "Corrected the documentation link for the connected-experiences control to the page that documents the setting, and narrowed the Cloud Policy and Group Policy precedence statement to what each Microsoft page says."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 55 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 55
  confirmed: 55
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "afab6b64913f6b659b5854484bc11b9d"
---

## What's changing

PowerPoint for Windows adds an option on PowerPoint Home, in the File menu, to create a presentation with Copilot, so users can start a Copilot draft without first opening a new file.

Microsoft's notice MC1311974 says users will find the new option on PowerPoint Home, that the experience is available immediately when PowerPoint is opened, and that the feature is enabled by default for eligible users. It says existing Microsoft 365 and Copilot policies are respected and that no admin configuration changes are required. Microsoft Learn's [22 July 2025 release notes](https://learn.microsoft.com/microsoft-365/copilot/previous-year-release-notes#july-22,-2025) already describe creating presentations from the Windows start or File menus; MC1311974 describes the PowerPoint Home rollout beginning in late May 2026.

The roadmap item (560694) lists the feature for Desktop in the Worldwide (Standard Multi-Tenant) cloud, at General Availability, with status Rolling out and a target of May CY2026. MC1311974 says General Availability rollout begins in late May 2026, and sets no act-by date. Microsoft lists the same feature for Mac under roadmap item 560536 and for PowerPoint on the web under 560537; this page covers the Windows desktop app only.

## Why it matters

This is a new door into an existing capability rather than a new capability. Microsoft's overview of Copilot licences already lists creating presentations from prompts as something Copilot does in PowerPoint; this change puts that option on the screen users see when PowerPoint opens. Because the notice says it is on by default for eligible users, licensed users get it without anyone in IT acting, and nothing on the notice suggests admins need to change a setting.

The practical effect is on support and adoption: expect more first drafts started with Copilot, and questions from users who see the option and from users who do not. Which users see it is decided by Copilot licensing and by the connected-experiences policy that already governs Copilot in the Office apps, so a tenant that has already decided who gets Copilot in PowerPoint has already decided who gets this.

## Risk assessment

**Data exposure**
- Microsoft's privacy page says Microsoft Copilot accesses content and context through Microsoft Graph that the user has permission to access. MC1311974 says existing Microsoft 365 and Copilot policies are respected; it does not say what content a presentation started from PowerPoint Home can draw on beyond the user's prompt.

**Security & identity**
- No change described: Microsoft's privacy page says Microsoft Copilot presents only data that each individual can access, using the same underlying controls for data access used in other Microsoft 365 services, and Microsoft's overview says prompts and responses are covered by Enterprise Data Protection when users sign in with Microsoft Entra accounts.

**Autonomy & actions**
- Copilot drafts a presentation that the user then reviews; nothing in the notice describes Copilot acting outside the new file.

**Change & support**
- The option appears on PowerPoint Home for eligible users by default, so expect help-desk questions about why some users see it and others do not (licence, and the **Allow the use of connected experiences in Office that analyze content** policy).

## Cost and licensing

MC1311974 says the users affected are those on PowerPoint for Windows who are assigned a Microsoft Copilot licence. Microsoft's Copilot Chat management page notes that Microsoft 365 Copilot is now named Microsoft Copilot, and the [Microsoft Copilot overview](https://learn.microsoft.com/copilot/plan/copilot-overview) describes Microsoft 365 Copilot (Premium) as the add-on licence with the full Copilot experience in Word, Excel, PowerPoint and OneNote. The current [licence-options page](https://learn.microsoft.com/copilot/plan/copilot-license-options) also says Microsoft Copilot is available with Microsoft 365 E7.

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
- Watch Message center for updates to MC1311974 and for a Learn page describing what the Home option draws on.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Copilot features, including this option, are available in PowerPoint and other Office apps</strong><br><small>Group</small><br><small class="controls__note">Turns off all connected experiences that analyze content, not only Copilot. Office Apps Administrator recommended. The page lists 1=Enabled, 2=Disabled.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › Create › Choose the scope › Configure Settings › Allow the use of connected experiences in Office that analyze content <a href="https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls#policy-setting-for-connected-experiences-that-analyze-your-content" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry: HKEY_CURRENT_USER\Software\Policies\Microsoft\office\16.0\common\privacy usercontentdisabled=dword:00000002</code> <a href="https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users hold a Microsoft Copilot licence, the users MC1311974 says get the option</strong><br><small>User</small><br><small class="controls__note">License Administrator or User Administrator at least. Removes the whole add-on experience, not just this option.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

MC1311974 says no admin configuration changes are required and names no setting specific to the PowerPoint Home option, so the controls in the table are the existing ones that decide who gets Copilot in PowerPoint at all.

- The connected-experiences policy is broad: turning it off removes every Office connected experience that analyzes content, not only Copilot. Microsoft's privacy page says Copilot features are then unavailable in Excel, OneNote, Outlook, PowerPoint and Word.
- Cloud Policy settings normally apply when Office apps restart; some privacy-control policies apply without restarting. The Cloud Policy overview says Cloud Policy takes precedence over Group Policy on Windows Server; Microsoft's [sensitive-and-regulated-customer guidance](https://learn.microsoft.com/compliance/anz/blueprint-copilot-reqconfig#connected-experiences) says Group Policy takes precedence for Win32 Office apps where both are in use and advises keeping the policies aligned.
- Removing a Microsoft Copilot licence removes the whole add-on experience, not just this option, and Microsoft 365 Copilot (Basic) users keep in-app Copilot according to the overview page.

## Open questions

- Do Microsoft 365 Copilot (Basic) users, without the add-on licence, see the create-with-Copilot option on PowerPoint Home, or only users with a Microsoft Copilot licence? Watch MC1311974 and the Microsoft Copilot overview.
- Can a presentation started from PowerPoint Home reference the user's files, meetings or email, or only the prompt? Watch for a Learn or support page on the feature.
- Will Microsoft add a policy that hides the PowerPoint Home entry point without turning off Copilot in PowerPoint? Watch Message center.
- Does use of this option appear separately in the Microsoft Copilot usage report? Watch the usage report documentation.

<!-- rationale
risk: Low. This is a new entry point to Copilot in PowerPoint, and Microsoft's notice MC1311974 says existing Microsoft 365 and Copilot policies are respected; it adds no new data access that Microsoft describes.
cost: Low. Microsoft's notice scopes the option to users assigned a Microsoft Copilot licence, so the visible cost is telling users about it; no separate price or meter for this option is published.
impact: Medium. Users of PowerPoint for Windows who hold a Microsoft Copilot licence see a new option on PowerPoint Home.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Scope / record: Microsoft lists the equivalent PowerPoint Home feature for Mac under item 560536. | Found: Item 560536: "description": "You can now create a presentation with Copilot in PowerPoint straight from the PowerPoint Home in file menu."; "platforms": ["Mac"] | Fix: Add the supporting roadmap sources https://www.microsoft.com/microsoft-365/roadmap?id=560536 and https://www.microsoft.com/microsoft-365/roadmap?id=560537 for the existing Mac and web sentences.
- [supported, minor] Risk assessment: Autonomy & actions / behaviour: Copilot produces a presentation draft for the user to review and refine. | Found: A well-structured first draft is a starting point, not a finished product. In this unit, you'll move from draft to delivery-ready by refining your text, stress-testing your narrative | Fix: Cite https://learn.microsoft.com/training/modules/present-copilot-microsoft-powerpoint/3-refine-enhance-presentation for the existing draft-and-review sentence. | Source: https://learn.microsoft.com/training/modules/present-copilot-microsoft-powerpoint/3-refine-enhance-presentation
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The connected-experiences setting is reached through Customization > Policy Management > Create > Choose the scope > Configure Settings in the Microsoft 365 Apps admin center. | Found: Under Customization, select Policy Management. ... select Create. ... On the Start with the basics page ... On the Choose the scope page ... On the Configure Settings page, select the policies | Fix: Use 'Customization > Policy Management > Create > Start with the basics > Choose the scope > Configure Settings > Allow the use of connected experiences in Office that analyze content'. The cited privacy-controls page documents the final setting; the already-cited Cloud Policy overview documents the route. | Source: https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy
- [supported, minor] controls[0].governs; Scope: Prerequisite; Why it matters; Governance guidance / applicability: Turning off content-analyzing connected experiences makes Copilot unavailable in PowerPoint on Windows, Mac, iOS and Android, including this Windows entry point. | Found: If you turn off connected experiences that analyze your content ... Microsoft Copilot features won't be available ... PowerPoint ... This applies to when you're running the most current version of these apps on Windows, Mac, iOS, or Android devices. | Fix: In Scope, replace the prerequisite sentence with 'Microsoft's privacy page says that if connected experiences that analyze content are turned off, Copilot features are not available in the most current version of PowerPoint on Windows, Mac, iOS or Android.' | Source: https://learn.microsoft.com/copilot/microsoft-365/microsoft-365-copilot-privacy
-->
