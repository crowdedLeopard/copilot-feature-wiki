---
title: "Power Automate: Delinea Secret Server as a credential provider for desktop flows"
slug: "power-automate-credentials-integration-with-delinea-secret-server"
roadmapId: 579974
topic: "power-platform"
products: ["Power Automate"]
summary: "Microsoft plans to let desktop flows use credentials managed in Delinea Secret Server for machine sign-in and credential retrieval, attended and unattended. Optional; nothing is documented on Learn yet."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop"]
targetDate: "March CY2027"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Power Automate Premium includes premium RPA features, including retrieving and using desktop-flow credentials; unattended executions require Power Automate Process. Microsoft has not published licensing specific to the Delinea provider."
audiences: ["power-platform-admin","security","service-owner","maker"]
tags: ["power-automate","desktop-flows","authentication","identity","integration","automation"]
sources:
  - title: "Microsoft 365 Roadmap 579974"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=579974"
    kind: "roadmap"
  - title: "Create a CyberArk credential"
    url: "https://learn.microsoft.com/power-automate/desktop-flows/create-cyberark-credential"
    kind: "learn"
  - title: "Create an Azure Key Vault credential"
    url: "https://learn.microsoft.com/power-automate/desktop-flows/create-azurekeyvault-credential"
    kind: "learn"
  - title: "credential EntityType"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/credential"
    kind: "learn"
  - title: "flowcredentialapplication EntityType"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/flowcredentialapplication"
    kind: "learn"
  - title: "GrantAccess Action"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/grantaccess"
    kind: "learn"
  - title: "Use Web API actions"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/use-web-api-actions"
    kind: "learn"
  - title: "Pay-as-you-go meters"
    url: "https://learn.microsoft.com/power-platform/admin/pay-as-you-go-meters"
    kind: "learn"
  - title: "Premium RPA features"
    url: "https://learn.microsoft.com/power-automate/desktop-flows/premium-features"
    kind: "learn"
  - title: "Security update for sensitive variables"
    url: "https://learn.microsoft.com/troubleshoot/power-platform/power-automate/desktop-flows/sensitive-variables-security-update"
    kind: "learn"
  - title: "Run unattended desktop flows"
    url: "https://learn.microsoft.com/power-automate/desktop-flows/run-unattended-desktop-flows"
    kind: "learn"
  - title: "Secure your data"
    url: "https://learn.microsoft.com/power-automate/guidance/desktop-flow-coding-guidelines/secure-your-data"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Setup and availability of the Delinea Secret Server credential provider"
    scope: "tenant"
    ui: null
    api: null
    note: "Not documented. The roadmap item is In development and Microsoft Learn has no page on this provider."
  - governs: "CyberArk application configuration on machines (existing external vault)"
    scope: "other"
    ui:
      surface: "Power Automate"
      path: "Machines > machine or group > Machine details > Configure CyberArk > New application"
      docs: "https://learn.microsoft.com/power-automate/desktop-flows/create-cyberark-credential"
    api:
      kind: "rest"
      call: "POST [organization URI]/api/data/v9.2/flowcredentialapplications"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/flowcredentialapplication"
    note: "CyberArk only; not a Delinea setup contract. Creates the application record: applicationid names the CCP application, flowmachinegroupid its machine group, primarycertificatefile the SSL client certificate (group public key)."
  - governs: "Who can use or share a credential"
    scope: "maker"
    ui:
      surface: "Power Automate"
      path: "Credentials > credential > Share"
      docs: "https://learn.microsoft.com/power-automate/desktop-flows/create-azurekeyvault-credential"
    api:
      kind: "rest"
      call: "POST [organization URI]/api/data/v9.2/GrantAccess"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/grantaccess"
    note: "Existing credentials (Azure Key Vault page for the UI); not confirmed for Delinea-backed credentials. Target identifies the credential record; PrincipalAccess identifies the recipient and access rights."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-23"
roadmapModified: "2026-11-12T01:35:00"
changes:
  - date: "2026-11-16"
    note: "First briefing for this roadmap item: the plan is known only from the roadmap; Learn documents no Delinea setup, licence or controls yet."
  - date: "2026-11-16"
    note: "Corrected after verification: removed unsupported claims about the Delinea service account and network access, and documented the Dataverse credential access actions alongside the existing sharing control."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 60 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected after verification: removed unsupported claims about privileged accounts and a stored identity, added the CyberArk and GrantAccess Dataverse calls, the pay-as-you-go flow-run meters and existing Premium RPA licensing, and a log-exposure caveat."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 73 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 3
verification:
  status: "held"
  date: "2026-11-23"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 73
  confirmed: 72
  unconfirmed: 0
  contradicted: 1
  attempts: 2
  hash: "32e08be1001d2541d4ccb336fedd25a8"
---

## What's changing

Power Automate plans to support Delinea Secret Server as an external credential provider for desktop flows. The roadmap item says organisations will be able to use credentials managed in Delinea for machine sign-in and credential retrieval during attended and unattended automation.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. Learn does document two existing external or vault-backed credential sources for desktop flows. The CyberArk page says its feature "enables you to create a Power Automate credential that retrieves CCP CyberArk secrets from the vault during runtime", and the Azure Key Vault page says a credential used in a desktop flow connection "is used to sign into the machine during runtime (attended and unattended runs)". Whether the Delinea provider will work the same way is not stated.

The roadmap record lists the item as In development, with a target of March CY2027, release phase General Availability, platform Desktop and cloud Worldwide (Standard Multi-Tenant). The date is a target, not a commitment, and no preview date is given.

## Why it matters

A native provider could reduce the need to duplicate or manually maintain machine credentials in existing desktop flow configurations for teams that already keep them in Delinea Secret Server. That is the wiki's expectation, not a Microsoft statement: how the provider authenticates and what it can reach is not yet published.

If nobody acts, nothing is documented to change. The decision for a service owner is whether to plan a move of existing desktop flow credentials once the provider is documented, and who will own the authentication identity between Power Automate and Delinea, if one is required.

## Risk assessment

**Data exposure**

- The roadmap item describes retrieving credentials for machine sign-in. Which Delinea secrets a flow can reach, and how that access is scoped, is not yet documented.
- For the existing CyberArk and Azure Key Vault credentials, the variable from the **Get credential** action is marked as sensitive, and the credential guides describe its value as not stored in the logs. However, unpatched Power Automate for desktop versions 2.62 through 2.66 can expose global sensitive variables used in local subflows ([security update](https://learn.microsoft.com/troubleshoot/power-platform/power-automate/desktop-flows/sensitive-variables-security-update)). Install a listed patched build or version 2.67.143.26090 or later. Whether the Delinea provider behaves the same way is not documented.

**Security & identity**

- The roadmap item covers unattended runs, which do not require human supervision ([Run unattended desktop flows](https://learn.microsoft.com/power-automate/desktop-flows/run-unattended-desktop-flows)). The authentication method between Power Automate and Delinea is not yet published.
- The CyberArk design relies on a certificate that is opened and encrypted with the machine group's public key, so it is only readable from registered machines. Whether Delinea will use a comparable trust relationship is not documented.

**Autonomy & actions**

- A flow that holds a credential can sign in to the target machine as that account, so the privileges of the account held in Delinea matter. If teams use privileged machine accounts, those privileges determine the potential exposure. Review them as one security boundary; the general Power Automate controls for desktop flows also apply ([Secure your data](https://learn.microsoft.com/power-automate/guidance/desktop-flow-coding-guidelines/secure-your-data)), and Microsoft has not documented Delinea-specific behaviour for them.

**Change & support**

- A failed retrieval could originate in Delinea, the network or Power Automate, so support spans two products. Microsoft has not published troubleshooting guidance for this provider.
- For Azure Key Vault credentials, sharing a credential also shares the environment variables it uses, and removing permissions on the credential does not remove permissions on those variables. Whether Delinea-backed credentials use the same sharing model is not documented.

## Cost and licensing

Licensing specific to the Delinea provider is not yet published. The roadmap item names no licence, and Microsoft Learn has no page on the Delinea provider at the time of writing (November 2026).

For credentials in desktop flows generally, the [Premium RPA features](https://learn.microsoft.com/power-automate/desktop-flows/premium-features) page lists "Credentials: Retrieve and use credentials in desktop flows" among the features that the Power Automate Premium licence includes. Unattended desktop flow executions require the Power Automate Process plan, and desktop flow users in a pay-as-you-go-enabled environment have access to most of the premium features in that environment. What the Delinea provider will need beyond this is not stated, so check the Power Automate licensing pages once Microsoft documents the provider.

Indirect costs may include admin time to configure the provider and any infrastructure the Delinea integration needs; neither is documented yet. Delinea's own licence terms are set by Delinea and are outside the Microsoft sources. No separate Delinea-provider meter is published. Microsoft's [Power Automate flow-run meters](https://learn.microsoft.com/power-platform/admin/pay-as-you-go-meters) are in preview: in a pay-as-you-go environment, attended desktop runs cost $0.60 per run unless the user's licence includes attended RPA, and unattended runs cost $3.00 per run regardless of assigned environment capacity; these charges bill the linked Azure subscription.

## Scope

The roadmap record lists Power Automate, platform Desktop and Worldwide (Standard Multi-Tenant) only. It lists no US Government clouds; that is a record fact, not a statement that the feature is unavailable there.

The roadmap description covers desktop flows in attended and unattended runs. Roles, prerequisites, rollout mechanics and version requirements are not yet published. For comparison, the CyberArk and Azure Key Vault pages say those features are currently not available for US Government Clouds, and that a registered machine is needed for credentials to work at runtime, even for local attended or debugging runs.

## Governance guidance

### Before rollout

- Inventory which desktop flows and desktop flow connections use stored machine passwords, so you know what could move to Delinea. The Power Platform admin and the flow makers own this.
- Ask the Delinea Secret Server owner who will own the authentication identity for Power Automate, if Microsoft's eventual documentation requires one, and keep its permissions to the minimum.
- Wait for Microsoft to document which component contacts Delinea before changing firewall rules or machine network access.

### At rollout

- Record the exact setup path in your runbook once Microsoft Learn documents the provider, and do not configure it before then.
- Pilot with one machine group and one non-production credential before moving production unattended flows.
- Once Microsoft confirms the Delinea permission model, restrict credential use and sharing through its documented controls.

### After rollout

- Test a password rotation in Delinea and confirm that unattended runs pick up the new value.
- Confirm that retrieved values do not appear in run logs.
- Remove superseded stored passwords from desktop flow connections once the Delinea-backed credentials are in use.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Setup and availability of the Delinea Secret Server credential provider</strong><br><small>Tenant</small><br><small class="controls__note">Not documented. The roadmap item is In development and Microsoft Learn has no page on this provider.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>CyberArk application configuration on machines (existing external vault)</strong><br><small class="controls__note">CyberArk only; not a Delinea setup contract. Creates the application record: applicationid names the CCP application, flowmachinegroupid its machine group, primarycertificatefile the SSL client certificate (group public key).</small></td><td data-label="Admin UI"><strong>Power Automate</strong><br>Machines › machine or group › Machine details › Configure CyberArk › New application <a href="https://learn.microsoft.com/power-automate/desktop-flows/create-cyberark-credential" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST [organization URI]/api/data/v9.2/flowcredentialapplications</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/flowcredentialapplication" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can use or share a credential</strong><br><small>Maker</small><br><small class="controls__note">Existing credentials (Azure Key Vault page for the UI); not confirmed for Delinea-backed credentials. Target identifies the credential record; PrincipalAccess identifies the recipient and access rights.</small></td><td data-label="Admin UI"><strong>Power Automate</strong><br>Credentials › credential › Share <a href="https://learn.microsoft.com/power-automate/desktop-flows/create-azurekeyvault-credential" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST [organization URI]/api/data/v9.2/GrantAccess</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/grantaccess" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

At the time of writing (November 2026), Microsoft Learn documents no setup path, admin switch or API for the Delinea provider, so the first row is a gap. The other rows are existing controls for other credential stores or for credentials in general; Microsoft has not confirmed they govern Delinea-backed credentials.

For CyberArk, the application and its certificate are configured per machine or machine group in the Power Automate portal, and the page says you can't currently associate a CyberArk application with machines or groups that you share with other users. Whether Delinea will follow the same model is an open question. The Dataverse credential table documents create, read, update and delete operations plus access operations; no Delinea-specific creation contract was found.

## Open questions

- How will Power Automate authenticate to Delinea Secret Server (certificate, service account or another method), and where is that trust configured? Watch the Power Automate desktop flows documentation and the Power Automate for desktop release notes.
- Which Power Automate licence do attended and unattended runs that use the Delinea provider require, and will any meter apply?
- Will the provider be available in US Government clouds? The roadmap record lists Worldwide (Standard Multi-Tenant) only; the CyberArk and Azure Key Vault pages say those features are currently unavailable there.
- Can administrators restrict which credential stores makers may use, or turn the Delinea provider off for an environment?
- Which Power Automate for desktop version will be required? Check Message center and the roadmap item for the March CY2027 target.

<!-- rationale
risk: Medium. The feature would let unattended desktop flows retrieve machine credentials from an external vault, and Microsoft Learn documents no setup path, admin switch or permission model for it at the time of writing (November 2026).
cost: Low. The only cost the sources show for this feature is admin and security-team time; the roadmap item names no licence or meter, and licensing specific to the Delinea provider is not yet published.
impact: Low. Admins, security teams and makers who run desktop flows would notice; end users would not, and the roadmap item describes an additional credential provider, not a change to existing flows.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: cost; rationale: cost; Cost and licensing / consistency: The low cost rating and rationale classify known cost as staff time only despite the documented desktop-flow run meters. | Found: cost: Low. The only cost the sources show for this feature is admin and security-team time ... attended desktop runs cost $0.60 per run unless the user's licence includes attended RPA, and unattended runs cost $3.00 per run | Fix: Set cost to 'variable'. Replace the cost rationale with 'Variable. In pay-as-you-go environments, the preview Power Automate flow-run meters charge $0.60 per attended desktop run unless the user has attended RPA entitlement, and $3.00 per unattended run. No separate Delinea-provider meter or provider-specific licensing is published.' This uses the already cited https://learn.microsoft.com/power-platform/admin/pay-as-you-go-meters; the general meter covers desktop-flow runs and the absence of a provider-specific meter does not make known cost indirect-only.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Autonomy & actions / behaviour: The account's rights are a security boundary relevant to the exposure from its desktop flows. | Found: Power Automate for desktop runs with the same user rights as the user who starts it. | Fix: Cite https://learn.microsoft.com/power-automate/desktop-flows/how-to/enable-ui-access for the account-rights premise; add that page to sources. The existing conditional advice to review privileged accounts need not change. | Source: https://learn.microsoft.com/power-automate/desktop-flows/how-to/enable-ui-access
- [supported, minor] front matter: licensing.notes; Cost and licensing / licensing: Unattended desktop-flow executions require Power Automate Process. | Found: Unattended desktop flow executions require the Power Automate Process plan (previously named Power Automate per flow). | Fix: The cited Premium RPA page supports this, but https://learn.microsoft.com/power-platform/admin/power-automate-licensing/types also says to subscribe to Process or enable pay-as-you-go. Replace the sentence in notes and prose with 'For unattended desktop flow executions, use Power Automate Process or enable pay-as-you-go.' Cite the types page and retain the existing pay-as-you-go charges. | Source: https://learn.microsoft.com/power-automate/desktop-flows/premium-features
- [supported, minor] controls[2].ui; Governance controls table / admin-path: Credential use and sharing permissions are reached in Power Automate through Credentials > credential > Share. | Found: go to Credentials. ... Select your credential from the list of credentials. ... On the command bar, select Share. ... Select Add people ... select the role you want to grant to this user | Fix: The path stops on the correct sharing pane. Extend controls[2].ui.path and its rendered table entry to 'Credentials > credential > Share > Add people > role' to reach the choice of use or sharing permissions, as documented at https://learn.microsoft.com/power-automate/desktop-flows/create-azurekeyvault-credential. | Source: https://learn.microsoft.com/power-automate/desktop-flows/create-azurekeyvault-credential
- [supported, minor] controls[2].note; Governance controls table / command: PrincipalAccess identifies both the recipient and its access rights. | Found: AccessMask ... The access rights of the security principal (user, team, or organization). ... Principal ... The security principal (user, team, or organization). | Fix: Add https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/principalaccess to sources for the note's access-rights statement. Keep the GrantAccess docs link and existing note wording. | Source: https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/principalaccess
- [supported, minor] controls[2].note; Governance controls / applicability: The correctly documented general credential-sharing control is not confirmed for Delinea-backed credentials. | Found: Manage access through the dedicated page of each component in the Power Automate portal or through a Dataverse security role that grants access to the records in the component's table. ... Credentials | Use the Get credential action | Share a credential | Credential | Fix: Replace 'Existing credentials (Azure Key Vault page for the UI); not confirmed for Delinea-backed credentials.' in controls[2].note and its table entry with 'Applies to Credential records referenced by the Get credential action; manage their access through the component page or Dataverse security roles.' In the prose replace 'The other rows are existing controls for other credential stores or for credentials in general; Microsoft has not confirmed they govern Delinea-backed credentials.' with 'The CyberArk row is specific to CyberArk; the sharing row governs Credential records referenced by the Get credential action.' The cited Secure your data page states this general reach; a native Delinea creation contract remains undocumented. | Source: https://learn.microsoft.com/power-automate/guidance/desktop-flow-coding-guidelines/secure-your-data
-->
