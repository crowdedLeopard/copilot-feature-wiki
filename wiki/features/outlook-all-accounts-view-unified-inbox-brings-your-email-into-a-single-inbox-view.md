---
title: "Outlook: All Accounts view (Unified Inbox) shows email from several accounts in one inbox"
slug: "outlook-all-accounts-view-unified-inbox-brings-your-email-into-a-single-inbox-view"
roadmapId: 564609
topic: "modern-work"
products: ["Outlook"]
summary: "New Outlook for Windows is rolling out an All Accounts view, on by default, that lists mail from a user's connected accounts together. Admins can set the default and block user changes through Cloud Policy; no action is required."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "August CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "For multiple-account use in new Outlook, any signed-in account with desktop-app licence rights qualifies the app; secondary accounts can use plans without desktop apps, such as Business Basic or E1. A licence or charge specific to All Accounts view is not yet published."
audiences: ["m365-admin","service-owner","change-adoption","end-user"]
tags: ["outlook","new-outlook","cloud-policy","admin-controls","exchange","copilot","user-experience"]
sources:
  - title: "Microsoft 365 Roadmap 564609"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=564609"
    kind: "roadmap"
  - title: "MC1519843: (Updated) New Outlook for Windows: All Accounts view brings email into a single inbox view"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1519843"
    kind: "message-center"
  - title: "Manage All Accounts view in new Outlook for Windows"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/manage/manage-all-accounts-view"
    kind: "learn"
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    kind: "learn"
  - title: "Understand licensing in new Outlook for Windows"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/licensing-options"
    kind: "learn"
  - title: "Enable or disable user access to Outlook for Windows in Exchange Online"
    url: "https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/enable-disable-employee-access-new-outlook"
    kind: "learn"
videos: []
related: ["cloud-policy","outlook-new-cloud-policy-controls","outlook-offline-settings-days-of-email-to-save-admin-policy"]
controls:
  - governs: "Whether All Accounts view is shown or hidden by default"
    scope: "group"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > policy configuration > Configure Settings > Show All Accounts view for users with multiple accounts in Outlook for Windows > Configure the unified inbox view"
      docs: "https://learn.microsoft.com/microsoft-365-apps/outlook/manage/manage-all-accounts-view"
    api: null
    note: "Applies when Configuration setting is Enabled. Roles: Office Apps Administrator (recommended), Security Administrator or Global Administrator. Targets Microsoft Entra groups."
  - governs: "Whether users can change the configured All Accounts view"
    scope: "group"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > policy configuration > Configure Settings > Show All Accounts view for users with multiple accounts in Outlook for Windows > Allow user to override this setting"
      docs: "https://learn.microsoft.com/microsoft-365-apps/outlook/manage/manage-all-accounts-view"
    api: null
    note: "Disabled means users cannot change the configured behaviour. Covers new Outlook for Windows, not Outlook on the web or classic Outlook."
confidence: "high"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-10-29T23:01:00"
changes:
  - date: "2026-11-22"
    note: "First briefing: All Accounts view is rolling out on by default in new Outlook for Windows, with a Cloud Policy setting for the default and user override."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 60 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected the licensing statement for multiple accounts, added the Cloud Policy limit for Microsoft 365 Apps for business, narrowed two behaviour statements, set action to act-now and removed the audit-log checklist item."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 66 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 66
  confirmed: 65
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "0a501df3e54401512b2502f57a9bcf7a"
---

## What's changing

The All Accounts view, also known as Unified Inbox, lets a user see email from several connected accounts in one inbox list in new Outlook for Windows. Each account's inbox stays separate: Microsoft's notice MC1519843 and the roadmap item both say the view does not merge mailboxes, and the Learn page says the policy itself does not move messages between accounts or delete email.

The roadmap item says users can read, delete, move, archive and mark messages across accounts from the view, and that it works with Copilot. The roadmap item says Immersive Search finds messages across the primary account and that cross-account search and shared mailbox support follow in later releases. MC1519843 describes the same search as "Search with Copilot" for the user's primary account and lists search among the actions across accounts, so the two Microsoft texts differ on search.

Microsoft's notice MC1519843 says All Accounts view is enabled by default for eligible users and that users can change the setting unless an admin policy enforces it. The Learn page "Manage All Accounts view in new Outlook for Windows" says that if the policy is not configured, users can choose their preferred inbox view; it does not state a default. The view needs at least two eligible connected accounts with offline access enabled.

The roadmap record gives status Rolling out, target August CY2026, release phase General Availability and platform Web. Learn says the policy article covers new Outlook for Windows, not Outlook on the web or classic Outlook. MC1519843 says rollout began in late September 2026 and is expected to finish by late November 2026 (previously late October). The notice sets no act-by date.

## Why it matters

If nobody acts, users with two or more eligible connected accounts get the view on by default under MC1519843, and can switch it off themselves. Expect questions from users who now see mail from several accounts in one list.

The control is a single Cloud Policy setting, so the decision is small: leave the default, hide the view by default, or enforce either state. MC1519843 asks administrators to review their Outlook account and automated-assistance policies as appropriate, which is the wiki's cue to check how Copilot features are described for this view before users find them.

## Risk assessment

**Data exposure**
- The view lists messages from every eligible connected account in one place, so a user can read, move, archive or delete mail from an account the organisation does not manage, next to organisational mail. Cloud Policy can hide the view; Learn says the policy does not control whether users can add secondary accounts.
- The roadmap item says the view integrates with Copilot. Which accounts Copilot features read from the view is not described on the Learn page, so confirm it before enabling Copilot features for users with several accounts.

**Security & identity**
- No change to mailbox boundaries is described: the roadmap item says mailboxes are not merged, and Learn says the policy does not merge mailboxes or move messages.

**Autonomy & actions**
- Actions are taken by the user (read, delete, move, archive, mark). The roadmap item describes no autonomous action in the view; Copilot integration is described only as AI-assisted email workflows.

**Change & support**
- Where the policy is left unconfigured, a user can show or hide the view from the View tab or under Settings > Mail > Folder pane. Where the policy sets override to Disabled, Learn says the user cannot change it. For example, when the view is Enabled and override is Disabled, the checkbox "See emails from all your accounts in one place" is selected and unavailable.
- Policies apply to user objects in the targeted Microsoft Entra groups. Where a user is in several groups with conflicting settings, Cloud Policy priority decides.

## Cost and licensing

For multiple-account use in new Outlook, any signed-in account with desktop-app licence rights qualifies the app; secondary accounts can use plans without desktop apps, such as Business Basic or E1 (Learn, Understand licensing in new Outlook for Windows). The Learn page for managing All Accounts view names no licence or charge of its own, and a licence or meter specific to this view is not yet published.

Cloud Policy, the service that manages the setting, supports most Microsoft 365 subscription plans that include Microsoft 365 Apps; the Cloud Policy overview says to check licensing documentation for specifics. For Microsoft 365 Apps for business, only policy settings related to privacy controls are supported. Indirect cost is admin time to configure the policy and communicate the change.

## Scope

- **Users:** the roadmap item and MC1519843 describe users with more than one connected account in new Outlook for Windows. Learn says the view needs at least two eligible connected accounts with offline access enabled.
- **Clouds:** the roadmap record lists Worldwide (Standard Multi-Tenant) only.
- **Platforms:** the roadmap record lists Web, while MC1519843 and the Learn page describe new Outlook for Windows. Learn says the policy article does not cover Outlook on the web or classic Outlook.
- **Roles:** Cloud Policy lists Office Apps Administrator (recommended), Security Administrator and Global Administrator as built-in roles that can use it.
- **Rollout:** began late September 2026, expected to complete late November 2026, per MC1519843.

## Governance guidance

### Before rollout
- Decide per group whether All Accounts view should be shown by default, hidden by default or enforced, and who may override it, using the Cloud Policy rows in the controls table.
- Identify the Microsoft Entra groups to target; Cloud Policy policies apply only to user objects, and an Office Apps Administrator is the recommended role.
- Brief users with several connected accounts that their inboxes stay separate and that the view is a display only.

### At rollout
- Publish the policy configuration in the Microsoft 365 Apps admin center with **Configuration setting** set to Enabled, because the other two settings apply only then.
- Set both **Configure the unified inbox view** and **Allow user to override this setting** to Disabled if you want the view hidden and users unable to turn it on.

### After rollout
- Compare a targeted user's view with the behaviour table on the Learn page, and check group membership and policy priority if it differs.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether All Accounts view is shown or hidden by default</strong><br><small>Group</small><br><small class="controls__note">Applies when Configuration setting is Enabled. Roles: Office Apps Administrator (recommended), Security Administrator or Global Administrator. Targets Microsoft Entra groups.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › policy configuration › Configure Settings › Show All Accounts view for users with multiple accounts in Outlook for Windows › Configure the unified inbox view <a href="https://learn.microsoft.com/microsoft-365-apps/outlook/manage/manage-all-accounts-view" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether users can change the configured All Accounts view</strong><br><small>Group</small><br><small class="controls__note">Disabled means users cannot change the configured behaviour. Covers new Outlook for Windows, not Outlook on the web or classic Outlook.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › policy configuration › Configure Settings › Show All Accounts view for users with multiple accounts in Outlook for Windows › Allow user to override this setting <a href="https://learn.microsoft.com/microsoft-365-apps/outlook/manage/manage-all-accounts-view" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Both settings sit in one Cloud Policy setting, and they apply only when its **Configuration setting** is Enabled; Learn warns against confusing that with **Configure the unified inbox view**, which can be Disabled while the policy stays Enabled. Learn lists four combinations of view and override, from "Show All Accounts by default. Users can change it." to "Hide All Accounts and prevent users from changing it."

The policy does not stop users adding secondary accounts and does not change the offline sync window, per Learn. Microsoft Learn documents no API or PowerShell cmdlet for Cloud Policy policy configurations at the time of writing (November 2026). The Cloud Policy overview says the service is also reachable in the Microsoft Intune admin center under Apps > Policy > Policies for Office apps, and that Purview auditing records creation, deletion and modification of policy configurations.

For the whole app rather than this view, the existing Exchange Online control is `Set-CASMailbox -Identity <MailboxIdentity> -OneWinNativeOutlookEnabled $false`, which restricts mailbox access using Outlook for Windows; it is not specific to All Accounts view.

## Open questions

- Which accounts and data do Copilot features read when a user works from All Accounts view? Watch Message center and the Learn page for MC1519843 follow-ups.
- Is search across accounts available now, as MC1519843 describes, or planned for later releases, as the roadmap item says?
- Why does the roadmap record list the Web platform while MC1519843 and Learn describe new Outlook for Windows?
- Does Microsoft intend a licence or charge specific to this view? None is published at the time of writing (November 2026).

<!-- rationale
risk: Medium. The view is on by default for eligible users and brings mail from other connected accounts into one list, but a Cloud Policy setting lets admins turn it off and stop users turning it back on.
cost: Low. The only cost the sources show is admin time to set the policy and brief users; Microsoft Learn publishes no licence or charge specific to All Accounts view.
impact: Medium. Users of new Outlook for Windows with two or more eligible connected accounts see a changed inbox by default; users with one account are not described as affected.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] summary / record: No administrator action is required. | Found: No admin action is required unless you want to manage this experience for your users. | Fix: Replace 'no action is required' in the summary with 'action is needed only to manage the experience', preserving the notice's qualification and distinguishing optional management from a mandatory rollout task.
- [supported, minor] Governance controls / behaviour: Purview auditing records creation, deletion and modification of Cloud Policy configurations. | Found: When auditing is enabled, events such as the creation, deletion, modification of policy configurations, changes to configured policy settings, and adjustments to priority order are tracked. | Fix: Replace the auditing clause with 'when auditing is enabled, Purview auditing records creation, deletion and modification of policy configurations', retaining the condition stated in https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy#microsoft-purview-support. | Source: https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy
- [contradicted, minor] Governance guidance: After rollout; controls / consistency: Every control that the governance checklist tells readers to check appears in the controls table. | Found: check group membership and policy priority if it differs. The table contains only 'Whether All Accounts view is shown or hidden by default' and 'Whether users can change the configured All Accounts view'. | Fix: Remove 'and policy priority' from the After rollout checklist bullet. Keep the documented explanation of priority in Risk assessment; do not add a control row as part of this correction.
-->
