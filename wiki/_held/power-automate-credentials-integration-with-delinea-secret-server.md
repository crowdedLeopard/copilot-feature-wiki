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
  model: "unknown"
  notes: "Not yet published. The roadmap item names no licence, and Microsoft Learn has no page on this provider at the time of writing (November 2026)."
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
      path: "Machines > machine or group > Configure CyberArk"
      docs: "https://learn.microsoft.com/power-automate/desktop-flows/create-cyberark-credential"
    api: null
    note: "Today's alternative for CyberArk only. Does not govern Delinea; Microsoft has not said whether a Delinea equivalent will exist."
  - governs: "Who can use or share a credential"
    scope: "maker"
    ui:
      surface: "Power Automate"
      path: "Credentials > credential > Share"
      docs: "https://learn.microsoft.com/power-automate/desktop-flows/create-azurekeyvault-credential"
    api:
      kind: "rest"
      call: "Dataverse Web API credential table actions GrantAccess, ModifyAccess, RevokeAccess"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/credential"
    note: "Documented for existing credentials (Azure Key Vault page for the UI). Microsoft has not confirmed it applies to Delinea-backed credentials."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-11-12T01:35:00"
changes:
  - date: "2026-11-16"
    note: "First briefing for this roadmap item: the plan is known only from the roadmap; Learn documents no Delinea setup, licence or controls yet."
  - date: "2026-11-16"
    note: "Corrected after verification: removed unsupported claims about the Delinea service account and network access, and documented the Dataverse credential access actions alongside the existing sharing control."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 60 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-23"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 60
  confirmed: 55
  unconfirmed: 2
  contradicted: 3
  attempts: 1
  hash: "d20bb1567e786fc91a9ef900ac9b1b38"
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
- For the existing CyberArk and Azure Key Vault credentials, the variable from the **Get credential** action is marked as sensitive and its value is not stored in the logs. Whether the Delinea provider behaves the same way is not documented.

**Security & identity**

- The roadmap item covers unattended runs, where a stored identity retrieves a privileged machine password with no person present. The authentication method between Power Automate and Delinea is not yet published.
- The CyberArk design relies on a certificate that is opened and encrypted with the machine group's public key, so it is only readable from registered machines. Whether Delinea will use a comparable trust relationship is not documented.

**Autonomy & actions**

- A flow that holds a credential can sign in to the target machine as that account, so the privileges of the account held in Delinea matter. Review them as one security boundary; other Power Automate controls also apply and are not yet documented for this provider.

**Change & support**

- A failed retrieval could originate in Delinea, the network or Power Automate, so support spans two products. Microsoft has not published troubleshooting guidance for this provider.
- For Azure Key Vault credentials, sharing a credential also shares the environment variables it uses, and removing permissions on the credential does not remove permissions on those variables. Whether Delinea-backed credentials use the same sharing model is not documented.

## Cost and licensing

Licensing for this feature is not yet published. The roadmap item names no licence, and Microsoft Learn has no page on the Delinea provider at the time of writing (November 2026).

What the Delinea provider will need is not stated, so check the Power Automate licensing pages for desktop flows once Microsoft documents the provider.

Indirect costs may include admin time to configure the provider and any infrastructure the Delinea integration needs; neither is documented yet. Delinea's own licence terms are set by Delinea and are outside the Microsoft sources. No Power Automate meter is documented for this feature at the time of writing.

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
- Review run history for credential retrieval failures and confirm that retrieved values do not appear in run logs.
- Remove superseded stored passwords from desktop flow connections once the Delinea-backed credentials are in use.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Setup and availability of the Delinea Secret Server credential provider</strong><br><small>Tenant</small><br><small class="controls__note">Not documented. The roadmap item is In development and Microsoft Learn has no page on this provider.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>CyberArk application configuration on machines (existing external vault)</strong><br><small class="controls__note">Today's alternative for CyberArk only. Does not govern Delinea; Microsoft has not said whether a Delinea equivalent will exist.</small></td><td data-label="Admin UI"><strong>Power Automate</strong><br>Machines › machine or group › Configure CyberArk <a href="https://learn.microsoft.com/power-automate/desktop-flows/create-cyberark-credential" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can use or share a credential</strong><br><small>Maker</small><br><small class="controls__note">Documented for existing credentials (Azure Key Vault page for the UI). Microsoft has not confirmed it applies to Delinea-backed credentials.</small></td><td data-label="Admin UI"><strong>Power Automate</strong><br>Credentials › credential › Share <a href="https://learn.microsoft.com/power-automate/desktop-flows/create-azurekeyvault-credential" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>Dataverse Web API credential table actions GrantAccess, ModifyAccess, RevokeAccess</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/credential" rel="noopener" class="controls__docs">Learn</a></td></tr>
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
risk: Medium. The feature would let unattended desktop flows retrieve privileged machine credentials from an external vault, and Microsoft Learn documents no setup path, admin switch or permission model for it at the time of writing (November 2026).
cost: Low. The only cost the sources show is admin and security-team time; the roadmap item names no licence or meter, and Power Automate licensing for this provider is not yet published.
impact: Low. Admins, security teams and makers who run desktop flows would notice; end users would not, and the roadmap item describes an additional credential provider, not a change to existing flows.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].api; Governance controls table / absence: Automation for configuring a CyberArk application on a machine or group is not documented. | Found: applicationid: Unique ID of the application as registered in the CyberArk CCP. primarycertificatefile: Certificate that will be used as an SSL client certificate to contact the CCP. This field is encrypted with the group public key. | Fix: Replace controls[1].api null with kind rest, call 'POST [organization URI]/api/data/v9.2/flowcredentialapplications', docs https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/flowcredentialapplication. Add to its note: 'Creates the CyberArk application record; applicationid names the CCP application, flowmachinegroupid associates its machine group, and primarycertificatefile carries the SSL client certificate encrypted with the group public key.' Retain the statement that this is not a Delinea setup contract. | Source: https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/flowcredentialapplication
- [unsupported, major] Risk assessment: Security & identity / behaviour: A stored identity retrieves the machine password in the planned unattended Delinea integration. | Found: Searched: Power Automate Delinea unattended stored identity privileged machine password; read roadmap, credential guides, Run unattended desktop flows and desktop architecture excerpts. None states the Delinea retrieval identity or where it is stored. | Fix: Replace 'where a stored identity retrieves a privileged machine password with no person present' with 'which does not require human supervision'. Retain the following sentence that the Power Automate-to-Delinea authentication method is not yet published.
- [unsupported, major] Risk assessment: Security & identity; rationale: risk / behaviour: The machine password or credentials retrieved through the planned integration are privileged. | Found: Searched: Power Automate Delinea unattended stored identity privileged machine password; read roadmap and both credential guides. Secret Server connector describes privileged accounts, but does not establish privileged machine accounts for the planned native provider. | Fix: Remove 'privileged' before 'machine password' and 'machine credentials'. If needed, express the risk conditionally: 'If teams use privileged machine accounts, those privileges determine the potential exposure.'
- [contradicted, blocker] Cost and licensing / absence: No Power Automate meter is documented for this feature. | Found: Desktop flow runs in a pay-as-you-go environment are charged as follows: ... Attended runs ... $0.60 per run. ... Unattended runs are charged at $3.00 per run regardless of any capacity assigned to the environment. | Fix: Replace with: 'No separate Delinea-provider meter is published. Microsoft's Power Automate flow-run meters are in preview: in a pay-as-you-go environment, attended desktop runs cost $0.60 per run unless the user's licence includes attended RPA, and unattended runs cost $3.00 per run regardless of assigned environment capacity; these charges bill the linked Azure subscription.' Cite https://learn.microsoft.com/power-platform/admin/pay-as-you-go-meters. Do not extend the absence of a provider-specific rate to the desktop runs themselves. | Source: https://learn.microsoft.com/power-platform/admin/pay-as-you-go-meters
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model and notes; Cost and licensing; rationale: cost / licensing: Licensing is unknown because Microsoft has not published a licence specific to this provider. | Found: The Power Automate Premium license provides access to all RPA premium features, except unattended RPA and hosted RPA. | Fix: Set licensing.model to included and name the existing product entitlement: 'Power Automate Premium includes premium RPA features, including retrieving and using desktop-flow credentials; unattended executions require Power Automate Process. Pay-as-you-go also provides access to most premium features in its enabled environment. Microsoft has not published licensing specific to the Delinea provider.' Cite https://learn.microsoft.com/power-automate/desktop-flows/premium-features. Do not claim the future provider has no additional charge. | Source: https://learn.microsoft.com/power-automate/desktop-flows/premium-features
- [supported, minor] controls[1].ui; Governance controls table / admin-path: CyberArk application configuration is reached in Power Automate through Machines > machine or group > Configure CyberArk. | Found: From the left navigation, select Machines, and then select the machine or the group. ... In the Machine details, select Configure CyberArk. ... Select New application. | Fix: Expand controls[1].ui.path and the rendered path to 'Machines > machine or group > Machine details > Configure CyberArk > New application'. The present path reaches the correct configuration area but omits its heading and stops before creating the application. | Source: https://learn.microsoft.com/power-automate/desktop-flows/create-cyberark-credential
- [supported, minor] controls[2].api; Governance controls table and prose / command: The credential table supports the GrantAccess, ModifyAccess and RevokeAccess actions for access management. | Found: The following operations can be used with the credential entity type. ... GrantAccess | Not Bound ... ModifyAccess | Not Bound ... RevokeAccess | Not Bound | Fix: Replace the descriptive action list with one explicit operation: 'POST [organization URI]/api/data/v9.2/GrantAccess'. Set docs to https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/grantaccess and add to the note: 'Target identifies the credential record; PrincipalAccess identifies the recipient and access rights.' Cite https://learn.microsoft.com/power-apps/developer/data-platform/webapi/use-web-api-actions for the unbound POST syntax. Keep ModifyAccess and RevokeAccess only as names in the prose, not as a substitute for a call. | Source: https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/credential
- [supported, minor] Risk assessment: Data exposure / behaviour: The CyberArk Get credential variable's value is not stored in logs. | Found: This restriction means the value of this variable isn't stored in the logs. | Fix: Qualify the logging statement: 'The credential guides describe sensitive values as excluded from logs; however, unpatched versions 2.62 through 2.66 can expose global sensitive variables used in local subflows. Install a listed patched build or version 2.67.143.26090 or later.' Cite https://learn.microsoft.com/troubleshoot/power-platform/power-automate/desktop-flows/sensitive-variables-security-update, which documents this exception. | Source: https://learn.microsoft.com/power-automate/desktop-flows/create-cyberark-credential
- [supported, minor] Risk assessment: Data exposure / behaviour: The Azure Key Vault Get credential variable's value is not stored in logs. | Found: This means the value of this variable isn't stored in the logs. | Fix: Apply the same qualification to the shared CyberArk/Azure Key Vault logging sentence: 'The credential guides describe sensitive values as excluded from logs; however, unpatched versions 2.62 through 2.66 can expose global sensitive variables used in local subflows. Install a listed patched build or version 2.67.143.26090 or later.' Cite https://learn.microsoft.com/troubleshoot/power-platform/power-automate/desktop-flows/sensitive-variables-security-update. | Source: https://learn.microsoft.com/power-automate/desktop-flows/create-azurekeyvault-credential
- [supported, minor] Risk assessment: Security & identity / behaviour: Unattended desktop automation runs without human supervision. | Found: Unattended desktop flows are ideal for automating tasks that don't need human supervision. | Fix: Add https://learn.microsoft.com/power-automate/desktop-flows/run-unattended-desktop-flows to sources for the unattended-run statement; do not extend it to an undocumented Delinea authentication mechanism. | Source: https://learn.microsoft.com/power-automate/desktop-flows/run-unattended-desktop-flows
- [supported, minor] Risk assessment: Autonomy & actions / applicability: Other general Power Automate controls govern desktop flows, without documented Delinea-specific behaviour. | Found: setting up credentials, managing sensitive variables, controlling access to desktop flows and related components, enforcing data loss prevention (DLP) policies, and capturing audit logs. | Fix: Add https://learn.microsoft.com/power-automate/guidance/desktop-flow-coding-guidelines/secure-your-data to sources. Narrow the caveat to 'Microsoft has not documented Delinea-specific behaviour for these general desktop-flow controls', rather than suggesting their general reach is unconfirmed. | Source: https://learn.microsoft.com/power-automate/guidance/desktop-flow-coding-guidelines/secure-your-data
- [contradicted, minor] Governance guidance: After rollout; Governance controls / consistency: The checklist tells the reader to review run history, but the controls table has no monitoring row. | Found: Review run history for credential retrieval failures ... Table rows: Setup and availability of the Delinea Secret Server credential provider; CyberArk application configuration on machines; Who can use or share a credential. | Fix: Remove 'Review run history for credential retrieval failures' from that checklist bullet; retain 'Confirm that retrieved values do not appear in run logs'. This resolves the missing monitoring-control row without adding an unverified control.
-->
