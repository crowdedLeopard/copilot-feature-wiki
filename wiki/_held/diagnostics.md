---
kind: "concept"
title: "Self-help diagnostics: which admin tests explain a broken setting, and who can run them?"
slug: "diagnostics"
summary: "Self-help diagnostics are tests an administrator runs from the Microsoft 365 admin center or the Microsoft Purview portal to check tenant and user configuration and explain why a feature is not behaving as expected. Admin roles decide who can run them."
created: "2026-11-28"
updated: "2026-11-28"
version: 1
tags: ["diagnostics","purview","m365-admin-center","dlp","information-protection","role-groups","powershell","admin-controls"]
covers: []
sources:
  - title: "Self-help diagnostics for Microsoft Purview"
    url: "https://learn.microsoft.com/troubleshoot/microsoft-365/purview/diagnostics/purview-compliance-diagnostics"
    kind: "learn"
  - title: "Data processed by diagnostics that run in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/troubleshoot/microsoft-365/admin/miscellaneous/data-used-by-self-help-diagnostics"
    kind: "learn"
  - title: "Self-help diagnostics for issues in Exchange Online and Outlook"
    url: "https://learn.microsoft.com/troubleshoot/exchange/administration/self-help-diagnostics"
    kind: "learn"
  - title: "Test your Data Loss Prevention policies"
    url: "https://learn.microsoft.com/purview/dlp-test-dlp-policies"
    kind: "learn"
  - title: "Permissions in the Microsoft Purview portal"
    url: "https://learn.microsoft.com/purview/purview-permissions"
    kind: "learn"
  - title: "Microsoft Purview eDiscovery permissions"
    url: "https://learn.microsoft.com/purview/edisc-permissions"
    kind: "learn"
  - title: "Assign admin roles in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/add-users/assign-admin-roles"
    kind: "learn"
  - title: "Create unifiedRoleAssignment"
    url: "https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments?view=graph-rest-1.0"
    kind: "learn"
related: ["microsoft-purview-data-loss-prevention-additional-diagnostics-for-data-loss-prevention-and","microsoft-purview-compliance-portal-expanding-access-to-diagnostics-to-compliance-administ","role-groups","sensitivity-labels","endpoint-dlp","copilot-connectors"]
controls:
  - governs: "Who can run DLP and Information Protection diagnostics in the Purview portal (role-group membership)"
    scope: "user"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > role group > Edit > Edit members of the role group > Choose users"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member <member>"
      docs: "https://learn.microsoft.com/purview/edisc-permissions"
    note: "Editing role groups needs the Role management role."
  - governs: "Who can run Help-pane diagnostics that require a Microsoft 365 admin role"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Roles > Role assignments > role > Assigned > Add users"
      docs: "https://learn.microsoft.com/microsoft-365/admin/add-users/assign-admin-roles"
    api:
      kind: "graph"
      call: "POST /v1.0/roleManagement/directory/roleAssignments"
      docs: "https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments?view=graph-rest-1.0"
    note: "Privileged Role Administrator is the least privileged role for the Graph call."
  - governs: "Which DLP policies and rules match a SharePoint or OneDrive file"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Data Loss Prevention > Diagnostics"
      docs: "https://learn.microsoft.com/troubleshoot/microsoft-365/purview/diagnostics/purview-compliance-diagnostics"
    api:
      kind: "powershell"
      call: "Test-DlpPolicies -workload <workload> -Fileurl <path/direct link> -SendReportTo <smtpaddress>"
      docs: "https://learn.microsoft.com/purview/dlp-test-dlp-policies"
    note: "SharePoint and OneDrive only; simple conditions only."
  - governs: "Label, label policy, auto-labeling and email encryption checks"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Diagnostics"
      docs: "https://learn.microsoft.com/troubleshoot/microsoft-365/purview/diagnostics/purview-compliance-diagnostics"
    api: null
    note: "Compliance Administrator or Security Administrator. Rolling out gradually."
  - governs: "Running a Help-pane diagnostic for Purview, Exchange, SharePoint or Teams"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Help > describe the issue > select an option > Run Tests"
      docs: "https://learn.microsoft.com/troubleshoot/microsoft-365/purview/diagnostics/purview-compliance-diagnostics"
    api: null
    note: "Not available in GCC High, DoD or 21Vianet. Consent notice covers processing outside the compliance boundary."
confidence: "medium"
dependents: 7
changes:
  - date: "2026-11-28"
    note: "New page explaining self-help diagnostics in the Microsoft 365 admin center and Microsoft Purview portal, who can run them and what data they process."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 73 statements contradicted, 2 unconfirmed; taken offline until corrected"
verification:
  status: "held"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 73
  confirmed: 68
  unconfirmed: 2
  contradicted: 3
  attempts: 1
  hash: "dda88d1333eed6505585d044d797b8fe"
---

## What it is

A self-help diagnostic is a test that an administrator runs against their own tenant to find out why something is not working, such as a sensitivity label a user cannot see or a DLP rule that did not fire. It reads configuration, reports known issues and gives instructions to fix them; Microsoft says the diagnostics do not make changes to the tenant without the administrator's consent.

### Where they run

| Location | How it is reached | Coverage |
|---|---|---|
| Microsoft 365 admin center, Help pane | Describe the issue, pick an option, select **Run Tests** | Exchange Online and Outlook, SharePoint and OneDrive, Teams, Purview |
| Microsoft Purview portal, Help pane | **Help** > **Ask a question**, then the same steps | Purview areas such as archive mailboxes, retention, eDiscovery holds, labels, encryption and DLP |
| Microsoft Purview portal, Solutions pages | **Solutions** > **Information Protection** > **Diagnostics** or **Solutions** > **Data Loss Prevention** > **Diagnostics** | Sensitivity labels and label policies, email encryption, DLP policies |

In the Help pane, the administrator types a description of the problem and the matching diagnostics are offered through text analytics. Each diagnostic asks for the values it needs, such as a user name, URL or meeting ID, and Microsoft uses them to gather configuration data scoped to those values.

A Solutions-page diagnostic first runs the `Check-PurviewConfig` cmdlet, then the cmdlet for the issue: for example `Test-IrmConfiguration` for email encryption, `Get-Label` and `Get-LabelPolicy` for a missing label, and `Test-DlpPolicies` for a SharePoint or OneDrive file that a DLP rule or auto-labeling did not match. The DLP diagnostics can also read an uploaded message trace log to show which DLP rules applied to an Exchange Online message.

**Other uses of the word.** Some briefings tagged *diagnostics* describe status views rather than tests, such as device health for [Endpoint DLP](/concepts/endpoint-dlp/) or connection errors for [Copilot connectors](/concepts/copilot-connectors/). Those are explained on their own pages.

## Why it matters

Diagnostics turn a support case into a self-service check: who is in scope of a DLP policy, which labels a user is offered, whether a file met a rule's conditions. Because they answer from live configuration, they are also a way to read policy and user details, so the people who hold the qualifying roles can see that information through them.

The Help-pane diagnostics send tenant and user configuration outside the compliance boundary for the length of the run, which matters to organisations with strict data-handling commitments. Microsoft does not document a tenant setting that switches diagnostics off; the roles below are the documented gate.

## Cost and licensing

Microsoft does not publish a licence requirement or a charge for running self-help diagnostics: Not yet documented. Some diagnostics check licensing as part of the test, for example the email encryption diagnostic checks licence availability for sensitivity labels.

## Risks and limits

- **Data leaves the compliance boundary briefly.** Running a Microsoft 365 admin center diagnostic shows a consent notice that tenant and user configuration information will be processed and stored temporarily outside the compliance boundary. Examples include user display names, email subject lines and SharePoint site names. Microsoft says customer content such as email messages and documents is never accessed, and the data is removed when the diagnostic finishes.
- **Some diagnostics offer a fix.** The grace eDiscovery hold diagnostic can remove a grace eDiscovery hold or invalid retention policy it finds, so a Compliance admin running it can change retention state.
- **Sovereign clouds.** Help-pane diagnostics are not available in GCC High, DoD or Microsoft 365 operated by 21Vianet. For Exchange Online, a subset can be run through Exchange Online PowerShell or the Exchange admin center, and these might be available in those environments.
- **Gradual rollout.** Diagnostics on Purview Solutions pages are being rolled out gradually and might not yet be available in a given tenant.
- **Narrow DLP file test.** `Test-DlpPolicies` works only for SharePoint and OneDrive items, reports only on policies scoped to those locations, and does not work with complex, grouped or nested conditions. A clean result on a policy with nested conditions proves nothing.
- **No Microsoft Support help for Help-pane diagnostics.** Problems with them are reported through the Feedback link in the diagnostic.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can run DLP and Information Protection diagnostics in the Purview portal (role-group membership)</strong><br><small>User</small><br><small class="controls__note">Editing role groups needs the Role management role.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › Role groups for Microsoft Purview solutions › role group › Edit › Edit members of the role group › Choose users <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &lt;member&gt;</code> <a href="https://learn.microsoft.com/purview/edisc-permissions" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can run Help-pane diagnostics that require a Microsoft 365 admin role</strong><br><small>User</small><br><small class="controls__note">Privileged Role Administrator is the least privileged role for the Graph call.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Roles › Role assignments › role › Assigned › Add users <a href="https://learn.microsoft.com/microsoft-365/admin/add-users/assign-admin-roles" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/roleManagement/directory/roleAssignments</code> <a href="https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which DLP policies and rules match a SharePoint or OneDrive file</strong><br><small>Tenant</small><br><small class="controls__note">SharePoint and OneDrive only; simple conditions only.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Data Loss Prevention › Diagnostics <a href="https://learn.microsoft.com/troubleshoot/microsoft-365/purview/diagnostics/purview-compliance-diagnostics" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Test-DlpPolicies -workload &lt;workload&gt; -Fileurl &lt;path/direct link&gt; -SendReportTo &lt;smtpaddress&gt;</code> <a href="https://learn.microsoft.com/purview/dlp-test-dlp-policies" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Label, label policy, auto-labeling and email encryption checks</strong><br><small>Tenant</small><br><small class="controls__note">Compliance Administrator or Security Administrator. Rolling out gradually.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Diagnostics <a href="https://learn.microsoft.com/troubleshoot/microsoft-365/purview/diagnostics/purview-compliance-diagnostics" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Running a Help-pane diagnostic for Purview, Exchange, SharePoint or Teams</strong><br><small>Tenant</small><br><small class="controls__note">Not available in GCC High, DoD or 21Vianet. Consent notice covers processing outside the compliance boundary.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Help › describe the issue › select an option › Run Tests <a href="https://learn.microsoft.com/troubleshoot/microsoft-365/purview/diagnostics/purview-compliance-diagnostics" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Who can run a diagnostic depends on where it runs. Information Protection diagnostics on Solutions pages need Compliance Administrator or Security Administrator. DLP diagnostics accept a wider set, including Organization Configuration, View-Only Configuration, Security Reader, DLP Compliance Management and Information Protection Analyst. Help-pane diagnostics each list a minimum role: some accept any Microsoft 365 admin role, the mailbox holds and grace eDiscovery hold diagnostics need Compliance admin, and the DLP policy, sensitivity label and Audit configuration diagnostics need Global admin.

Editing Purview role groups needs the Role management role. Creating a directory role assignment through Microsoft Graph needs Privileged Role Administrator at least. `Test-DlpPolicies` needs a connection to Exchange Online PowerShell and sends its report to the SMTP address given in `-SendReportTo`, so choose a mailbox that may receive policy and classification details.

## What to check

- Review who holds the Purview role groups that open the DLP and Information Protection diagnostics, including read-only roles such as Security Reader and View-Only Configuration.
- Review who holds Microsoft 365 admin roles, since several Help-pane diagnostics accept any admin role.
- Confirm whether running Help-pane diagnostics fits your data-handling commitments, given the temporary processing outside the compliance boundary.
- Check whether the Diagnostics pages under Data Loss Prevention and Information Protection have reached your tenant.
- Agree a mailbox for `Test-DlpPolicies` reports.

## Open questions

- Is a run of a self-help diagnostic recorded in the unified audit log, and under which activity?
- Does running a Solutions-page diagnostic in the Purview portal process data outside the compliance boundary in the same way as the Microsoft 365 admin center diagnostics?
- Will Microsoft offer a tenant setting to restrict or disable self-help diagnostics independently of admin roles?
- When will Solutions-page diagnostics reach GCC, GCC High and DoD tenants?

<!-- verifier-findings (2026-11-28, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].note; Governance controls / role: Creating a directory role assignment through Microsoft Graph requires Privileged Role Administrator at least. | Found: For delegated access using work or school accounts, the signed-in user must be assigned a supported Microsoft Entra role or a custom role that grants the permissions required for this operation. Privileged Role Administrator is the least privileged role supported for this operation. | Fix: Replace both role statements with: 'For delegated access using work or school accounts, Privileged Role Administrator is the least privileged supported built-in role; a custom role granting the required permissions is also supported.' The reference also supports application access with RoleManagement.ReadWrite.Directory, so do not state this signed-in-user role requirement for all calls. | Source: https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments?view=graph-rest-1.0
- [contradicted, blocker] controls[3].api / absence: Automation for label, label-policy, auto-labeling and email-encryption checks is not yet documented. | Found: Use the Test-IRMConfiguration cmdlet to test Information Rights Management (IRM) configuration and functionality. ... Test-IRMConfiguration -Sender chris@fabrikam.com -Recipient michell@fourthcoffee.com | Fix: Replace controls[3].api with kind 'powershell', call 'Test-IRMConfiguration -Sender <sender-email-address> -Recipient <recipient-email-address>', docs 'https://learn.microsoft.com/powershell/module/exchangepowershell/test-irmconfiguration'. Append to the existing note: 'This call covers the IRM configuration and functionality check, not all label checks.' The cited Purview diagnostics page explicitly maps email-encryption checks to this cmdlet. | Source: https://learn.microsoft.com/powershell/module/exchangepowershell/test-irmconfiguration
- [contradicted, blocker] controls[4].api / absence: Automation for running the Help-pane diagnostics covered by this Purview, Exchange, SharePoint and Teams row is not yet documented. | Found: However, a subset of these diagnostics can be accessed by using Exchange Online PowerShell or the Exchange admin center (EAC). ... Company Object ... Invoke-ProvisioningCompanyObjectDiagnostic | Fix: Replace controls[4].api with kind 'powershell', call 'Invoke-ProvisioningCompanyObjectDiagnostic', docs 'https://learn.microsoft.com/powershell/module/exchangepowershell/invoke-provisioningcompanyobjectdiagnostic'. Append to its note: 'Automation shown covers the Exchange company-object diagnostic only, not a general API for the Help pane; see its reference for permissions and limits.' The reference documents this parameterless operation as validating core Microsoft 365 tenant information. | Source: https://learn.microsoft.com/troubleshoot/exchange/administration/self-help-diagnostics
- [unsupported, major] What it is: configuration data scoped to supplied values / behaviour: Microsoft gathers configuration data scoped to supplied values for the Help-pane diagnostics generally described here. | Found: Searched: 'Purview Help pane diagnostics data compliance boundary processing'; opened Purview self-help diagnostics and data-used-by-self-help-diagnostics. The scoped-data passage explicitly covers diagnostics running in the Microsoft 365 admin center, not both portals. | Fix: Replace the final sentence of this paragraph with: 'For diagnostics running in the Microsoft 365 admin center, Microsoft uses the supplied information to gather additional configuration data scoped to those values.'
- [unsupported, major] Why it matters: Help-pane data handling; What to check / behaviour: Help-pane diagnostics generally send tenant and user configuration outside the compliance boundary for the duration of the run. | Found: Searched: 'Purview Help pane diagnostics data compliance boundary processing'; opened Purview diagnostics and data-used-by-self-help-diagnostics. The processing and removal statements cover Microsoft 365 admin center diagnostics, not Purview Help-pane diagnostics. | Fix: Replace the Why it matters sentence with: 'Diagnostics running in the Microsoft 365 admin center process tenant and user configuration outside the compliance boundary temporarily, and Microsoft says the data is removed after the diagnostic finishes.' In What to check, change 'running Help-pane diagnostics' to 'running diagnostics in the Microsoft 365 admin center'.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].api / command: Add-RoleGroupMember -Identity "<role-group>" -Member <member> adds a member to a management role group. | Found: Use the Add-RoleGroupMember cmdlet to add members to a management role group. ... The Identity parameter specifies the role group to add a member to. ... The Member parameter specifies who you want to add to the role group. | Fix: Add the Microsoft pages relied on but missing from sources: https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember, https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync, and https://learn.microsoft.com/microsoft-365/copilot/connectors/error-responses. The existing eDiscovery docs link contains the printed Add-RoleGroupMember operation and can remain. | Source: https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember
- [supported, minor] controls[1].ui / admin-path: Microsoft 365 admin roles are assigned through Roles > Role assignments > role > Assigned > Add users. | Found: To view the administrator roles available for your organization, choose the Microsoft Entra ID, Exchange, Intune, or Billing tab. ... On the Assigned tab, select Add users or Add groups. | Fix: For the Microsoft 365 directory roles discussed here, expand the path to 'Roles > Role assignments > Microsoft Entra ID > role > Assigned > Add users'. The omitted tab selects the list of roles, so this is not a wrong destination. | Source: https://learn.microsoft.com/microsoft-365/admin/add-users/assign-admin-roles
- [supported, minor] controls[1].api / command: POST /v1.0/roleManagement/directory/roleAssignments creates a directory role assignment. | Found: POST https://graph.microsoft.com/v1.0/roleManagement/directory/roleAssignments ... "roleDefinitionId": "c2cf284d-6c41-4e6b-afac-4b80928c9034", "principalId": "f8ca5a85-489a-49a0-b555-0a6d81e56f0d", "directoryScopeId": "/" | Fix: Keep the call and add to its note: 'The request body identifies the assigned role with roleDefinitionId and the recipient with principalId; directoryScopeId specifies the scope.' | Source: https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments?view=graph-rest-1.0
- [supported, minor] controls[3].note; Governance controls / role: Information Protection Solutions-page diagnostics require Compliance Administrator or Security Administrator. | Found: To run the Information Protection diagnostics, you need to have either of the following roles: Compliance Administrator; Security Administrator | Fix: Keep the roles supported by the cited Purview-specific article. Add this qualification in Governance controls and cite https://learn.microsoft.com/troubleshoot/microsoft-365/diagnostics/purview-compliance-diagnostics: 'Microsoft's alternate self-help diagnostics article states that Solutions-page diagnostics require a Microsoft 365 global administrator; the Purview-specific article instead lists Compliance Administrator or Security Administrator for Information Protection and a wider role list for DLP.' | Source: https://learn.microsoft.com/troubleshoot/microsoft-365/purview/diagnostics/purview-compliance-diagnostics
- [supported, minor] controls[4].ui / admin-path: Microsoft 365 Help-pane diagnostics are reached through Help > describe the issue > select an option > Run Tests. | Found: Select the Help icon ... enter a brief description of the issue ... Select one of the listed options ... If the selected option has an associated diagnostic, enter any requested information, and then select Run Tests | Fix: The pre-check's missing phrases are descriptions of documented actions, not invented labels. Keep the route, but add to the note: 'The Exchange diagnostics article describes the entry point as Help & support; the Purview diagnostics article describes the Help icon.' Both cited pages support the experience but use different entry-point labels. | Source: https://learn.microsoft.com/troubleshoot/microsoft-365/purview/diagnostics/purview-compliance-diagnostics
-->
