---
title: "Outlook: grant mailbox and folder delegate permissions from the new Outlook"
slug: "outlook-grant-mail-delegate-sharing-permissions-from-the-new-outlook"
roadmapId: 417063
topic: "modern-work"
products: ["Outlook"]
summary: "The roadmap plans for users to grant and view delegate access to mailboxes and folders in the new Outlook. No Learn page describes the feature yet; Cloud Policy can restrict folder-permission changes. Admins should review delegate permissions."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "July CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Outlook for Windows with a Microsoft 365 organisational email address requires a plan that includes the desktop Microsoft 365 apps, such as Business Standard or Business Premium (Learn licensing page). A licence or meter specific to this item is not yet published (November 2026)."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["outlook","new-outlook","delegation","exchange","sharing"]
sources:
  - title: "Microsoft 365 Roadmap 417063"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=417063"
    kind: "roadmap"
  - title: "Manage permissions for recipients in Exchange Online"
    url: "https://learn.microsoft.com/exchange/recipients-in-exchange-online/manage-permissions-for-recipients"
    kind: "learn"
  - title: "Understand calendar and delegate permissions in Exchange Online"
    url: "https://learn.microsoft.com/exchange/collaboration-exo/shared-calendars/understand-calendar-delegate-permissions"
    kind: "learn"
  - title: "Add-MailboxFolderPermission"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-mailboxfolderpermission"
    kind: "learn"
  - title: "Unable to open default folders-you do not have permissions to logon error when accessing another user's mailbox folder"
    url: "https://learn.microsoft.com/troubleshoot/exchange/outlook-issues/cannot-access-another-mailbox-folder"
    kind: "learn"
  - title: "Prevent mailbox delegates from reading protected messages"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/security/prevent-delegate-access-to-irm-messages"
    kind: "learn"
  - title: "Understand licensing in new Outlook for Windows"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/licensing-options"
    kind: "learn"
  - title: "Restrict users from changing folder permissions in Outlook"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/configuration/restrict-users-from-modifying-folder-permissions"
    kind: "learn"
  - title: "\"Cannot copy this folder because it may contain private items\" error in Outlook"
    url: "https://learn.microsoft.com/troubleshoot/outlook/user-interface/cannot-copy-this-folder-because-it-may-contain-private-items"
    kind: "learn"
videos: []
related: ["outlook-keep-folder-sharing-within-your-organization-s-policies","outlook-new-cloud-policy-controls"]
controls:
  - governs: "Which delegates hold Full Access on a mailbox (also Send as and Send on behalf)"
    scope: "user"
    ui:
      surface: "Exchange admin center"
      path: "Recipients > Mailboxes > mailbox > Mailbox Delegation > Read and manage (Full Access) > Edit > Add members"
      docs: "https://learn.microsoft.com/exchange/recipients-in-exchange-online/manage-permissions-for-recipients"
    api:
      kind: "powershell"
      call: "Add-MailboxPermission -Identity <MailboxIdentity> -User <DelegateIdentity> -AccessRights FullAccess -InheritanceType All"
      docs: "https://learn.microsoft.com/exchange/recipients-in-exchange-online/manage-permissions-for-recipients"
    note: "Existing Exchange control, not confirmed as what the new Outlook screens use. Send as uses Add-RecipientPermission; Send on behalf uses Set-Mailbox -GrantSendOnBehalfTo."
  - governs: "Which users hold permissions on a mailbox folder (for example Calendar with the Delegate flag)"
    scope: "user"
    ui:
      surface: "Outlook (classic)"
      path: "mailbox folder (right-click) > Properties > Permissions > Add > user > Add > OK > user > Permission Level"
      docs: "https://learn.microsoft.com/troubleshoot/outlook/user-interface/cannot-copy-this-folder-because-it-may-contain-private-items"
    api:
      kind: "powershell"
      call: "Add-MailboxFolderPermission -Identity <mailbox>:\\<folder> -User <user> -AccessRights <role>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-mailboxfolderpermission"
    note: "Existing controls, not confirmed as what the new Outlook screens use; the UI side is the existing Outlook folder dialog, not the Exchange admin center. -SharingPermissionFlags Delegate applies to calendar folders in the cmdlet's examples."
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2026-02-19T00:15:25"
changes:
  - date: "2026-11-25"
    note: "First briefing for this roadmap item; the roadmap record is the only source on the feature itself, with Learn's Exchange delegate pages as background."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 52 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected after the independent check: documented Cloud Policy restrictions on folder-permission changes, the existing Outlook folder-permission UI, and the Exchange admin center inventory step."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 56 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-25"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 56
  confirmed: 53
  unconfirmed: 0
  contradicted: 3
  attempts: 2
  hash: "20582f56fbdb96ae28392d2966d0cf5f"
---

## What's changing

The roadmap item states that delegate access for mailboxes and folders can be granted from the new Outlook app, and that users will be able to view the permissions granted for mailboxes and folders. The description is tagged #newoutlookforwindows; the record lists Web as the platform, General Availability as the release phase and Worldwide (Standard Multi-Tenant) as the cloud.

Microsoft Learn does not describe this feature yet at the time of writing (November 2026), so what is said above about its behaviour is the roadmap's description. In particular, Microsoft has not said which permission types the new screens grant (Full Access, Send as, Send on behalf, or folder roles), and has not said whether they read and write the same permissions that administrators manage in Exchange.

For background, Learn describes the existing Exchange Online model. Users assigned Full Access, Send as or Send on behalf on a mailbox are called delegates. For calendars, an Outlook delegate has the Editor calendar role and a Delegate sharing permission flag, and Learn says to configure delegate relationships from Outlook while the calendar owner is signed in. This is background on existing permissions, not a description of the new feature.

The roadmap lists the item as In development with a target of July CY2026. That target month has passed at the time of writing and the record still shows In development, so treat the date as a target that has not been met.

## Why it matters

Delegation decides who else can read or act in a mailbox, so any new place where users can grant it deserves a look from the service owner. Learn describes Full Access as allowing the delegate to open the mailbox and view, add and remove its contents, and Send as as making messages appear to come directly from the mailbox with no indication the delegate sent them. If the new Outlook screens grant those permissions, users will be able to hand them out without a ticket.

Microsoft has not stated what happens on arrival, so base your plan on no source saying that existing behaviour changes. The practical work is to know which delegate permissions exist in your tenant today, decide who may grant them, and be ready to explain to users what the new screens do once Microsoft documents them.

## Risk assessment

**Data exposure**

- A delegate with Full Access can open the mailbox and view, add and remove its contents. By default, a delegate with Full Access on a user mailbox can read Information Rights Management (IRM)-protected messages, according to Learn's page on preventing delegates reading protected messages, which gives different prevention methods per client.
- The calendar permission page says delegate access does not include viewing private calendar items by default; that capability is a separate flag. Microsoft has not said whether the new screens expose it.

**Security & identity**

- Send as lets a delegate send messages with no indication that the delegate sent them, per Learn. Send on behalf shows the delegate in the From address. Which of these the new screens can grant is not yet documented.
- Learn says folder sharing needs permissions on the shared folder and on each parent folder in the hierarchy, and that the root Mailbox folder must give the default role at least Folder visible. Partial grants can leave a delegate unable to open the folder.

**Autonomy & actions**

- No change: the roadmap item describes no agent or automated action. Delegates are people, and what they can do is set by the permission granted.

**Change & support**

- Users may start granting delegate access themselves from the new Outlook, so permissions can appear that your helpdesk did not set up. The Exchange admin center Mailbox delegation view is where mailbox-level permissions can be checked; see the controls table.
- Expect questions where a folder is shared but will not open: Learn lists the error "Unable to open default folders-you do not have permissions to logon" for this case.

## Cost and licensing

Learn's licensing page for new Outlook for Windows says that to use the Outlook for Windows desktop app (classic or new) with a Microsoft 365 organisational email address, you need a plan that includes the desktop versions of the Microsoft 365 apps; Business Standard and Business Premium are its examples. Once an account with a qualifying licence is added, the page says secondary accounts such as Business Basic or E1 can be added.

A licence or meter specific to this roadmap item is not yet published at the time of writing (November 2026). The Exchange Online page on delegate permissions lists no licence for assigning Full Access, Send as or Send on behalf.

The cost the sources support is admin time: reviewing existing delegate permissions, deciding who may grant them, and briefing users.

## Scope

The roadmap lists Outlook as the product, Web as the platform, General Availability as the release phase and Worldwide (Standard Multi-Tenant) as the cloud. It does not list GCC, GCC High or DoD; that is a record fact, not a statement that the feature is unavailable there. The #newoutlookforwindows tag suggests the new Outlook for Windows; whether the web client and the Windows app both get the screens is not stated.

The roadmap does not name the users, licences or roles in scope. For the existing Exchange controls, Learn tells administrators to see the "Mailbox settings" entry in the Feature permissions in Exchange Online article for the permissions needed. Mailboxes of different types (user, shared, resource) can hold different permissions in Exchange; which types the new screens cover is not stated.

## Governance guidance

### Before rollout

- Identify who in your organisation relies on delegates, such as executives with assistants, and decide who may grant mailbox or folder access to others.
- List who holds Full Access, Send as and Send on behalf on key mailboxes today, using the Exchange admin center Mailbox delegation view.
- Check whether Full Access delegates reading IRM-protected messages is acceptable for those mailboxes; Learn describes prevention methods per client.
- Confirm with Microsoft's rollout notice which permission types the new screens grant before deciding whether to brief users.

### At rollout

- Watch the roadmap item and Message center for a rollout notice, since the July CY2026 target has passed with the status still In development.
- Tell users that sharing a subfolder needs permission on the folder and on its parent folders, including Folder visible on the root Mailbox folder for the default role.

### After rollout

- Compare the delegates listed under Mailbox delegation for sensitive mailboxes with the list you made before rollout.
- Review support tickets about shared folders that will not open and about unexpected delegates.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which delegates hold Full Access on a mailbox (also Send as and Send on behalf)</strong><br><small>User</small><br><small class="controls__note">Existing Exchange control, not confirmed as what the new Outlook screens use. Send as uses Add-RecipientPermission; Send on behalf uses Set-Mailbox -GrantSendOnBehalfTo.</small></td><td data-label="Admin UI"><strong>Exchange admin center</strong><br>Recipients › Mailboxes › mailbox › Mailbox Delegation › Read and manage (Full Access) › Edit › Add members <a href="https://learn.microsoft.com/exchange/recipients-in-exchange-online/manage-permissions-for-recipients" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-MailboxPermission -Identity &lt;MailboxIdentity&gt; -User &lt;DelegateIdentity&gt; -AccessRights FullAccess -InheritanceType All</code> <a href="https://learn.microsoft.com/exchange/recipients-in-exchange-online/manage-permissions-for-recipients" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users hold permissions on a mailbox folder (for example Calendar with the Delegate flag)</strong><br><small>User</small><br><small class="controls__note">Existing controls, not confirmed as what the new Outlook screens use; the UI side is the existing Outlook folder dialog, not the Exchange admin center. -SharingPermissionFlags Delegate applies to calendar folders in the cmdlet's examples.</small></td><td data-label="Admin UI"><strong>Outlook (classic)</strong><br>mailbox folder (right-click) › Properties › Permissions › Add › user › Add › OK › user › Permission Level <a href="https://learn.microsoft.com/troubleshoot/outlook/user-interface/cannot-copy-this-folder-because-it-may-contain-private-items" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-MailboxFolderPermission -Identity &lt;mailbox&gt;:\&lt;folder&gt; -User &lt;user&gt; -AccessRights &lt;role&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-mailboxfolderpermission" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Both rows are existing controls for the permissions the roadmap item names in general terms. Microsoft has not said whether the new Outlook screens read and write the same permissions these controls manage, so treat them as the administrator-side view of delegation, not as a switch for this feature.

Learn documents Cloud Policy restrictions on folder-permission changes in new Outlook, using Turn off sharing recommendation, Do not allow users to change permissions on folders, and Control Calendar Sharing. They are set in a policy configuration under Customization > Policy Management in the Microsoft 365 Apps admin center; see [Restrict users from changing folder permissions in Outlook](https://learn.microsoft.com/microsoft-365-apps/outlook/configuration/restrict-users-from-modifying-folder-permissions). A switch specifically for all of this roadmap item's new screens is not documented.

The Learn page for the Exchange admin center says you need assigned permissions to use it and points to the "Mailbox settings" entry in the Feature permissions in Exchange Online article. Send as is managed with Add-RecipientPermission and Send on behalf with the GrantSendOnBehalfTo parameter of the mailbox Set- cmdlets, on the same page as the first row. The calendar permission page says Exchange Online PowerShell is appropriate for calendar folder permission administration but is not the preferred way to create a complete delegate relationship.

## Open questions

- Which permissions do the new Outlook screens grant: Full Access, Send as, Send on behalf, or folder roles such as Editor with the Delegate flag? Watch the roadmap item and the Learn pages on delegate access.
- Is the capability on for all users on arrival, or does an administrator have to enable it? Microsoft has not stated the default; watch Message center.
- Does a separate switch cover the complete new capability, beyond the Cloud Policy restrictions on folder-permission changes that Learn documents? Watch Message center and the Learn page on restricting folder permissions.
- Does the capability reach Outlook on the web and the new Outlook for Windows alike, and does it cover shared and resource mailboxes?

<!-- rationale
risk: Medium. Delegate access gives another person access to mailbox or folder content, and the roadmap plans for users to grant it from the new Outlook; Learn documents Cloud Policy restrictions on folder-permission changes, but the default is not stated.
cost: Low. The only cost the sources show is admin time to review delegate permissions; a licence or meter specific to this item is not yet published, and the new Outlook for Windows licence requirement on Learn applies as it does today.
impact: Medium. Mailbox owners who share with assistants or colleagues, and the delegates themselves, are the people who would notice; the roadmap does not say the change affects other users.
-->

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What's changing; Risk assessment: Security & identity; Open questions / absence: Microsoft has not said which permission types the new Outlook sharing screens grant, including folder roles. | Found: In the Permissions section, select the Permission level dropdown and select the permissions you want to grant to this user. | Fix: Replace the blanket gap with: 'Microsoft Support documents folder permission levels in new Outlook, including Owner, Publishing Editor, Editor, Publishing Author, Author, Nonediting Author, Reviewer, Contributor, None and Custom. This does not establish that the screens grant Exchange Full Access or Send as.' Cite https://support.microsoft.com/office/share-and-access-another-person-s-mailbox-or-folder-in-outlook-a909ad30-e413-40b5-a487-0ea70b763081 and narrow the repeated open question to the remaining mailbox-level permissions. | Source: https://support.microsoft.com/office/share-and-access-another-person-s-mailbox-or-folder-in-outlook-a909ad30-e413-40b5-a487-0ea70b763081
- [contradicted, blocker] Scope; Open questions / availability: Microsoft has not stated whether both new Outlook for Windows and the web client have the mailbox/folder sharing screens. | Found: Share and access a folder or mailbox in new Outlook ... Share and access a folder or mailbox in Outlook on the web | Fix: Replace the platform uncertainty with: 'The roadmap record lists Web and carries #newoutlookforwindows. Microsoft Support documents Sharing and permissions for mailbox and folder sharing in both new Outlook for Windows and Outlook on the web, although the supplied roadmap record remains In development.' Cite https://support.microsoft.com/office/share-and-access-another-person-s-mailbox-or-folder-in-outlook-a909ad30-e413-40b5-a487-0ea70b763081. Remove the repeated question about whether these two clients have sharing screens; retain the separate question about shared and resource mailbox coverage. | Source: https://support.microsoft.com/office/share-and-access-another-person-s-mailbox-or-folder-in-outlook-a909ad30-e413-40b5-a487-0ea70b763081
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] summary; What's changing / absence: No Microsoft Learn page describes this specific roadmap feature yet. | Found: Searched: new Outlook grant delegate mailbox folder permissions 417063; "new Outlook" "delegate" "permissions" "sharing" 417063. Opened cited Learn pages and Microsoft's Support sharing and delegate articles; found Support instructions, not a Learn feature page. | Fix: Replace the documentation-gap wording with: 'Microsoft Support documents mailbox and folder sharing in new Outlook, while the supplied roadmap record still lists In development with a July CY2026 target.' Cite https://support.microsoft.com/office/share-and-access-another-person-s-mailbox-or-folder-in-outlook-a909ad30-e413-40b5-a487-0ea70b763081. Do not describe the roadmap as the only source about the functionality.
- [supported, minor] Risk assessment: Security & identity; Governance guidance: At rollout / behaviour: Folder sharing requires access on the shared folder and its parent folders, and partial grants can prevent opening it. | Found: the user has to grant the other person access to the specific folder that the user wants to share and also to all other parent folders in the folder hierarchy. | Fix: Qualify the existing guidance with: 'Microsoft Support says new Outlook and Outlook on the web preserve existing parent-folder permissions and automatically assign Folder visible where parent folders have no permissions assigned.' Cite https://support.microsoft.com/office/share-and-access-another-person-s-mailbox-or-folder-in-outlook-a909ad30-e413-40b5-a487-0ea70b763081 so readers are not told that these clients always require manual parent-folder grants. | Source: https://learn.microsoft.com/troubleshoot/exchange/outlook-issues/cannot-access-another-mailbox-folder
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The checklist asks readers to review prevention of delegates reading IRM-protected messages, but the controls table has no corresponding control. | Found: Check whether Full Access delegates reading IRM-protected messages is acceptable for those mailboxes; Learn describes prevention methods per client. / Table rows cover mailbox delegation and mailbox-folder permissions only. | Fix: Remove the Before rollout bullet beginning 'Check whether Full Access delegates reading IRM-protected messages is acceptable'. This is the checklist control with no table row; do not add a new control row as part of this correction.
-->
