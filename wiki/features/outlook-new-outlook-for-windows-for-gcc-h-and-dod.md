---
title: "Outlook: new Outlook for Windows for GCC High and DoD tenants"
slug: "outlook-new-outlook-for-windows-for-gcc-h-and-dod"
roadmapId: 564913
topic: "modern-work"
products: ["Outlook"]
summary: "The new Outlook for Windows app can now be used with GCC High and DoD mailboxes. It stays off until an admin points the app at the sovereign cloud by policy, so admins choose when to pilot and when to migrate."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["GCC High","DoD"]
platforms: ["Desktop"]
targetDate: "September CY2026"
previewDate: "July CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's licensing page says new Outlook with a work account needs a plan that includes the desktop versions of the Microsoft 365 apps, and lists Office 365 under Government. Frontline licences and device-based licensing are not supported."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["new-outlook","outlook","exchange","cloud-policy","group-policy","migration","powershell","gcc-high","dod"]
sources:
  - title: "Control installing and using new Outlook"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/control-install"
    kind: "learn"
  - title: "Enable or disable user access to Outlook for Windows in Exchange Online"
    url: "https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/enable-disable-employee-access-new-outlook"
    kind: "learn"
  - title: "Understand licensing in new Outlook for Windows"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/licensing-options"
    kind: "learn"
  - title: "Supported accounts in new Outlook for Windows"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/supported-account-types"
    kind: "learn"
  - title: "Policy Management in new Outlook for Windows"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/manage/policy-management"
    kind: "learn"
  - title: "Enable new Outlook for Windows if Outlook for web is blocked"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/manage/enable-new-outlook-if-outlook-web-is-blocked"
    kind: "learn"
  - title: "Release notes for Outlook for Windows (New) in Government Cloud Channels"
    url: "https://learn.microsoft.com/officeupdates/release-notes-outlook-new-gc"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 564913"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=564913"
    kind: "roadmap"
videos: []
related: ["cloud-policy","outlook-new-cloud-policy-controls","conditional-access"]
controls:
  - governs: "Which sovereign cloud new Outlook connects to (without it, no GCC High or DoD account is found)"
    scope: "user"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > Create"
      docs: "https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/control-install"
    api:
      kind: "other"
      call: "[HKEY_CURRENT_USER\\Software\\Microsoft\\office\\16.0\\outlook] \"NewOutlookForWindowsCloudType\"=dword:00000003 (GCC High) or dword:00000004 (DoD)"
      docs: "https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/control-install"
    note: "Policy: \"Select the cloud environment for the new Outlook application\". Sign in at config.office365.us (GCC High) or config.apps.mil (DoD). Group Policy is the documented alternative."
  - governs: "Whether mailboxes under an OWA mailbox policy can be opened in new Outlook"
    scope: "group"
    ui: null
    api:
      kind: "powershell"
      call: "Set-OwaMailboxPolicy -Identity <PolicyIdentity> -OneWinNativeOutlookEnabled $false"
      docs: "https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/enable-disable-employee-access-new-outlook"
    note: "Applies to existing and future mailboxes with the policy, and governs shared mailboxes and public folders. Default is blank, equal to $true."
  - governs: "Whether an individual mailbox can be opened in new Outlook"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CASMailbox -Identity <MailboxIdentity> -OneWinNativeOutlookEnabled $false"
      docs: "https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/enable-disable-employee-access-new-outlook"
    note: "Existing mailboxes only. Does not govern shared mailboxes or public folders."
  - governs: "Whether classic Outlook shows the Try the new Outlook toggle"
    scope: "user"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > Create > Hide the \"Try the new Outlook\" toggle in Outlook"
      docs: "https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/control-install"
    api:
      kind: "other"
      call: "[HKEY_CURRENT_USER\\Software\\Microsoft\\Office\\16.0\\Outlook\\Options\\General] \"HideNewOutlookToggle\"=dword:00000001"
      docs: "https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/enable-disable-employee-access-new-outlook"
    note: "Hides the toggle only; it does not block mailboxes from being added to new Outlook."
confidence: "high"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-10-05T23:03:05"
changes:
  - date: "2026-11-28"
    note: "New briefing: new Outlook for Windows in GCC High and DoD, with the cloud selection policy and the Exchange Online access controls."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 78 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 78
  confirmed: 76
  unconfirmed: 0
  contradicted: 2
  attempts: 0
  hash: "62ab8f1d47400ed0cb11053da578ad85"
---

## What's changing

The new Outlook for Windows (the redesigned Windows mail client that replaces classic Outlook) can now be used by organisations in the GCC High and DoD sovereign clouds. The roadmap item states that it "will be available for US Government clouds (GCC-H and DoD sovereign environments)".

Microsoft Learn's guidance for these clouds says new Outlook "remains off by default, requires administrative action to enable supported sovereign environments, and does not automatically switch users from classic Outlook". The app has to be told which cloud to use: a Cloud Policy or Group Policy setting, or the registry value `NewOutlookForWindowsCloudType` (3 for GCC High, 4 for DoD). Without it, Learn says new Outlook defaults to the Worldwide endpoint and will not find the user's accounts. All accounts in one client must be in the same sovereign cloud, though not necessarily the same tenant; support for mixing Worldwide, GCC High and DoD accounts is not yet available.

The **Try the new Outlook** toggle in classic Outlook was not part of the initial Public Preview; Learn expected it in August 2026. It shows only when the user is on a qualifying build, the cloud selection policy is set, and every account in the profile and the signed-in Office user belong to that cloud.

The roadmap record shows the item as Launched, with preview in July CY2026 and general availability targeted for September CY2026. The sources do not fully agree: at the time of writing (November 2026) the Learn section for GCC High and DoD still describes a Public Preview, and the release notes for new Outlook in Government Cloud Channels say the app "is currently scoped to GCC".

## Why it matters

This opens the route from classic Outlook to new Outlook for GCC High and DoD users, and the admin decides when it starts. Because the cloud must be set by policy before the app finds any mailbox, nothing reaches users on its own. Expect the work to be in the pilot: COM add-ins do not run in new Outlook, and Learn advises an add-in inventory and a move to web add-ins before migration.

The app is already on many devices. Learn says new Outlook is installed with Windows 11, so users can open it before any policy is set; with no cloud selected it will point to the Worldwide service and fail to find their accounts. Plan helpdesk messaging for that, and decide which existing mailbox policies (including any that already block new Outlook) should apply during the pilot.

## Risk assessment

**Data exposure**
- New Outlook opens Exchange Online mailboxes in the selected cloud. Learn says accounts from more than one tenant in the same sovereign cloud can be added to one client; the page links a [Set-OwaMailboxPolicy example](https://learn.microsoft.com/powershell/module/exchangepowershell/set-owamailboxpolicy#example-5) for blocking accounts from other tenants.
- Access to shared mailboxes and public folders is controlled by the Outlook on the web mailbox policy, not the per-mailbox setting, so a shared mailbox and the user opening it both need access.

**Security & identity**
- Learn names Conditional Access for the new Outlook app (multifactor authentication, locations, managed devices), and OWA mailbox policies with the *ConditionalAccessPolicy* parameter for finer limits such as restricting attachments on noncompliant devices.
- Setting `OWAEnabled` to `$false` on a mailbox also blocks it in new Outlook; Learn recommends Conditional Access instead where Outlook on the web is to be blocked.

**Autonomy & actions**
- No change: new Outlook is a mail client. Learn lists Copilot chat among the scenarios to test in the pilot; see [Copilot Chat in Outlook for government clouds](/features/m365-copilot-copilot-chat-in-outlook-expands-to-reason-over-inbox-calendar-and-enterprise/).

**Change & support**
- COM add-ins are not supported in new Outlook; workflows that depend on them break for pilot users.
- If the cloud selection is missing, the preinstalled app points to the Worldwide endpoint and will not find accounts, which will reach the helpdesk as a sign-in fault.

## Cost and licensing

**Licence.** The [licensing page](https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/licensing-options) says that using Outlook for Windows, classic or new, with an organisational mailbox needs a plan that includes the desktop versions of the Microsoft 365 apps, and lists Office 365 under Government among the subscriptions that include them. Accounts with Microsoft 365 for frontline workers licences cannot be added to new Outlook, and device-based licensing is not supported. The [supported accounts page](https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/supported-account-types) says accounts on SKUs without Outlook client licences get an error.

**Indirect costs.** Pilot time, an inventory of COM add-ins and their replacement with web add-ins, user training and change management, all of which Learn recommends during the preview period.

## Scope

- **Clouds:** GCC High and DoD, as the roadmap record lists them. Accounts from Worldwide, GCC High and DoD cannot yet be mixed in one client.
- **Platform:** Windows desktop. Learn says new Outlook is installed with Windows 11; it can be reinstalled from the installer links on the deployment overview page.
- **Users:** work accounts whose licence includes the desktop apps; frontline licences are excluded.
- **Prerequisites:** the cloud selection policy (Cloud Policy at config.office365.us for GCC High or config.apps.mil for DoD, Group Policy, or the registry), and mailbox access to new Outlook not blocked in Exchange Online.
- **Toggle in classic Outlook:** shown to GCC High and DoD users on Current Channel builds 16.0.20225.20000 or later, or Monthly Enterprise Channel builds 16.0.20326.20000 or later, when the cloud policy is set and all accounts and the signed-in Office user belong to that cloud.
- **Roles:** the access cmdlets need the permissions listed under "Outlook on the web mailbox policies" in Feature permissions in Exchange Online.

## Governance guidance

### Before rollout
- Inventory COM add-ins used with classic Outlook and identify web add-in replacements, as Learn advises.
- Check `OneWinNativeOutlookEnabled` in every OWA mailbox policy and on pilot mailboxes with `Get-OwaMailboxPolicy` and `Get-CASMailbox`, and decide who should be blocked.
- Choose a test tenant or pilot group that includes delegates, shared mailbox users and large mailboxes.
- Decide whether classic Outlook users should see the **Try the new Outlook** toggle, and set the hide-toggle policy if not.

### At rollout
- Create the cloud selection policy for pilot users in the Microsoft 365 Apps admin center for your cloud (config.office365.us or config.apps.mil), or deploy `NewOutlookForWindowsCloudType` by Group Policy or registry.
- Grant new Outlook access to both pilot users and the shared mailboxes they open, through the OWA mailbox policy.
- Keep classic Outlook available side by side, as Learn recommends, and tell pilot users how to send in-app feedback.

### After rollout
- Collect the reasons pilot users return to classic Outlook and check them against the new Outlook roadmap and feature comparison.
- Review in-app feedback in the Microsoft 365 admin center.
- Watch Learn and Message center for the move from Public Preview to general availability guidance for these clouds.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which sovereign cloud new Outlook connects to (without it, no GCC High or DoD account is found)</strong><br><small>User</small><br><small class="controls__note">Policy: &quot;Select the cloud environment for the new Outlook application&quot;. Sign in at config.office365.us (GCC High) or config.apps.mil (DoD). Group Policy is the documented alternative.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › Create <a href="https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/control-install" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>[HKEY_CURRENT_USER\Software\Microsoft\office\16.0\outlook] &quot;NewOutlookForWindowsCloudType&quot;=dword:00000003 (GCC High) or dword:00000004 (DoD)</code> <a href="https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/control-install" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether mailboxes under an OWA mailbox policy can be opened in new Outlook</strong><br><small>Group</small><br><small class="controls__note">Applies to existing and future mailboxes with the policy, and governs shared mailboxes and public folders. Default is blank, equal to $true.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-OwaMailboxPolicy -Identity &lt;PolicyIdentity&gt; -OneWinNativeOutlookEnabled $false</code> <a href="https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/enable-disable-employee-access-new-outlook" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether an individual mailbox can be opened in new Outlook</strong><br><small>User</small><br><small class="controls__note">Existing mailboxes only. Does not govern shared mailboxes or public folders.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CASMailbox -Identity &lt;MailboxIdentity&gt; -OneWinNativeOutlookEnabled $false</code> <a href="https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/enable-disable-employee-access-new-outlook" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether classic Outlook shows the Try the new Outlook toggle</strong><br><small>User</small><br><small class="controls__note">Hides the toggle only; it does not block mailboxes from being added to new Outlook.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › Create › Hide the &quot;Try the new Outlook&quot; toggle in Outlook <a href="https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/control-install" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>[HKEY_CURRENT_USER\Software\Microsoft\Office\16.0\Outlook\Options\General] &quot;HideNewOutlookToggle&quot;=dword:00000001</code> <a href="https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/enable-disable-employee-access-new-outlook" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The cloud selection policy decides whether new Outlook can find GCC High or DoD accounts at all; the Exchange Online setting `OneWinNativeOutlookEnabled` decides whether a given mailbox may be opened in it. Learn calls the mailbox policy "the final block" because it applies however the app was installed. The default for `OneWinNativeOutlookEnabled` is blank, which equals `$true`. Microsoft Learn documents no Exchange admin center setting for it at the time of writing (November 2026); the documented route is Exchange Online PowerShell.

Hiding the toggle does not stop a mailbox being added to new Outlook, and the mailbox setting does not hide the toggle; set both where both are wanted. Learn documents removal of the preinstalled app with `Remove-AppxProvisionedPackage` on the [control page](https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/control-install).

## Open questions

- When will the Learn guidance for GCC High and DoD move from Public Preview to general availability, and will the default or the setup steps change? Watch the control-install page.
- When will the Government Cloud Channels release notes, which say new Outlook is scoped to GCC, cover GCC High and DoD?
- Will Microsoft later migrate GCC High and DoD users from classic Outlook automatically, and does the automatic migration opt-out policy apply in these clouds?
- Is the "Hide the 'Try the new Outlook' toggle in Outlook" policy offered in the GCC High and DoD Cloud Policy portals? Learn gives the worldwide portal address for it.
- When will accounts from Worldwide, GCC High and DoD be usable in one client? Learn says the roadmap will be updated.

<!-- rationale
risk: Low. Microsoft Learn says new Outlook stays off by default in these clouds and needs admin action, and does not switch users from classic Outlook automatically.
cost: Low. Microsoft's licensing page covers new Outlook under plans that include the desktop apps, Government Office 365 among them; the cost is pilot and migration effort, such as replacing COM add-ins.
impact: Low. Until an admin sets the cloud policy, users see no change; once enabled for a pilot, only those users get the app and, later, the switch toggle in classic Outlook.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.notes; Cost and licensing; Scope: Users / licensing: Using classic or new Outlook with an organisational mailbox needs a plan that includes desktop Microsoft 365 apps. | Found: To use the Outlook for Windows desktop app (either the classic or new version) with a Microsoft 365 organizational email address, you need to purchase a plan that includes the desktop versions of the Microsoft 365 apps. | Fix: Keep the requirement but add: 'For multiple accounts, the licensing page says that if any account logged into the app has desktop application rights, secondary accounts such as Business Basic or E1 can also be added.' Apply that qualification to Scope: Users as well; the Frontline exclusion remains. Source: https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/licensing-options. | Source: https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/licensing-options
- [supported, minor] controls[0].ui; Governance controls table; Governance guidance: At rollout / admin-path: Cloud selection policy creation starts at Microsoft 365 Apps admin center > Customization > Policy Management > Create. | Found: Under Customization, select Policy Management. 3. Select Create. 4. Set up the policy: follow the steps in Policy Creation UI as described below. | Fix: Extend controls[0].ui.path to 'Customization > Policy Management > Create > Policies > Select the cloud environment for the new Outlook application'. The current path reaches the right creation wizard but stops before the setting. The policy name is on control-install; the Policies screen is described at https://learn.microsoft.com/microsoft-365-apps/outlook/manage/policy-management. | Source: https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/control-install
- [supported, minor] controls[3].api; Governance controls table / command: HKCU\Software\Microsoft\Office\16.0\Outlook\Options\General HideNewOutlookToggle DWORD 1 hides the classic Outlook toggle. | Found: Hide the Try the new Outlook toggle in classic Outlook: [HKEY_CURRENT_USER\Software\Microsoft\Office\16.0\Outlook\Options\General] "HideNewOutlookToggle"=dword:00000001 | Fix: Keep the value and reference. Add a short note: 'The Exchange access article documents DWORD 1 to hide the toggle; control-install also prints DWORD 0 in its initial hide-toggle example, so those examples disagree.' Source: https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/control-install. | Source: https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/enable-disable-employee-access-new-outlook
- [supported, minor] Scope: Toggle in classic Outlook; What's changing / availability: The sovereign-cloud toggle prerequisites include Current Channel build 16.0.20225.20000 or later. | Found: The toggle to switch to new Outlook in classic Outlook will be shown to GCC-H and DoD users if all of the following conditions are satisfied: ... In Current Channel, for builds >= 16.0.20225.20000 | Fix: Keep the cloud-specific prerequisites and add: 'The deployment troubleshooting page still says switching is unavailable for computers that are or were part of a sovereign network; this differs from control-install's GCC High and DoD toggle guidance.' Cite https://learn.microsoft.com/troubleshoot/outlook/deployment/resolve-deployment-issues#toggle-doesn't-display-in-classic-outlook. | Source: https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/control-install
- [supported, minor] Scope: Platform / behaviour: The deployment overview page supplies installer links for reinstalling new Outlook. | Found: For organizations that disable access to the Windows Store, the installer can be directly accessed from the Office CDN. ... Download the Setup.exe. | Fix: Cite https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/deployment-new-outlook directly for the installer-link statement. | Source: https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/deployment-new-outlook
- [supported, minor] Risk assessment: Data exposure / applicability: The cloud-enablement page links Set-OwaMailboxPolicy example 5 as a way to block accounts from different tenants. | Found: If you would like to block users from adding accounts from different tenants, you can do so with this policy example. | Fix: Replace the example sentence with: 'The control-install page points to example 5 for blocking accounts from other tenants, but the cmdlet reference says example 5 allows any other Exchange account. Example 6 instead allows specified account domains and blocks all other domains.' Link https://learn.microsoft.com/powershell/module/exchangepowershell/set-owamailboxpolicy#example-6 and retain the conflicting control-install citation. | Source: https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/control-install
- [supported, minor] Cost and licensing / licensing: The supported accounts page says SKUs without Outlook client licences are unsupported and produce a licence error. | Found: Accounts associated with SKUs that don't carry licenses for Outlook client apps are also not supported. If users attempt to add those accounts, they see an error: | Fix: Add: 'The supported accounts page gives this general error rule, while the licensing page explicitly permits secondary Business Basic or E1 accounts once an account with desktop app rights is present.' Both pages are already cited; retain the Frontline exclusion. | Source: https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/supported-account-types
- [supported, minor] Governance guidance: Before rollout / command: Get-OwaMailboxPolicy retrieves OWA mailbox policies for inspection. | Found: This example retrieves detailed information for the policy named "Executives". Get-OwaMailboxPolicy -Identity Executives | Fix: Cite https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/configure-outlook-web-app-mailbox-policy-properties for the policy-inspection guidance. It documents retrieving detailed policy information without running Set-OwaMailboxPolicy. | Source: https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/configure-outlook-web-app-mailbox-policy-properties
- [contradicted, minor] rationale: impact / consistency: Only users enabled for a pilot get the app, and users see no change before an administrator sets cloud policy. | Found: impact: Low. Until an admin sets the cloud policy, users see no change; once enabled for a pilot, only those users get the app ... / The app is already on many devices. Learn says new Outlook is installed with Windows 11, so users can open it before any policy is set | Fix: Replace the impact rationale with: 'Low. Pilot users need the sovereign-cloud setting before new Outlook can find their accounts; the app may already be installed with Windows 11, but Microsoft says it does not automatically switch users from classic Outlook.' Keep the low rating. Source: https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/control-install.
- [contradicted, minor] Governance guidance: After rollout / consistency: The checklist asks administrators to review in-app feedback, but the controls table has no feedback-review row. | Found: Review in-app feedback in the Microsoft 365 admin center. / The four control rows cover cloud selection, OWA mailbox policy access, individual mailbox access and toggle visibility. | Fix: Remove the checklist bullet 'Review in-app feedback in the Microsoft 365 admin center.' The table has no row for that review step; retain the separately supported advice to collect pilot feedback.
-->
