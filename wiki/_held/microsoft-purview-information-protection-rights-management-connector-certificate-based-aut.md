---
title: "Microsoft Purview: Rights Management connector moves to certificate-based authentication"
slug: "microsoft-purview-information-protection-rights-management-connector-certificate-based-aut"
roadmapId: 564617
topic: "governance"
products: ["Microsoft Purview"]
summary: "The on-premises Rights Management connector is planned to authenticate with an administrator-owned Entra app registration and certificate instead of a shared secret. Connector administrators need to prepare before installing or upgrading."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "October CY2026"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "Learn says to use the Azure Rights Management service with Microsoft 365 subscriptions or subscriptions for Microsoft Purview Information Protection. No licence or price specific to certificate-based authentication is published."
audiences: ["m365-admin","security","compliance"]
tags: ["purview","information-protection","authentication","entra-id","powershell","encryption","exchange","sharepoint"]
sources:
  - title: "Microsoft 365 Roadmap item 564617"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=564617"
    kind: "roadmap"
  - title: "Deploying the Microsoft Rights Management connector"
    url: "https://learn.microsoft.com/azure/information-protection/deploy-rms-connector"
    kind: "learn"
  - title: "Installing and configuring the Microsoft Rights Management connector"
    url: "https://learn.microsoft.com/azure/information-protection/install-configure-rms-connector"
    kind: "learn"
  - title: "Requirements for the Azure Rights Management service"
    url: "https://learn.microsoft.com/purview/rights-management-requirements"
    kind: "learn"
  - title: "Learn about the Azure Rights Management encryption service"
    url: "https://learn.microsoft.com/purview/azure-rights-management-learn-about"
    kind: "learn"
  - title: "Add-AipServiceRoleBasedAdministrator"
    url: "https://learn.microsoft.com/powershell/module/aipservice/add-aipservicerolebasedadministrator"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Who may sign in to install and administer the connector"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Add-AipServiceRoleBasedAdministrator -EmailAddress <email address> -Role ConnectorAdministrator"
      docs: "https://learn.microsoft.com/powershell/module/aipservice/add-aipservicerolebasedadministrator"
    note: "Existing control for the account used to install the connector today; not a control over certificate authentication."
  - governs: "Certificate-based authentication for the connector and each workload"
    scope: "other"
    ui: null
    api: null
    note: "Planned per the roadmap item (new PowerShell module). Learn documents neither an admin UI nor a command at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-10-13T23:01:05"
changes:
  - date: "2026-11-21"
    note: "First briefing for this roadmap item."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 48 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 48
  confirmed: 45
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "b9c3ce5277511ad2c127e5586ffc7eec"
---

## What's changing

The Microsoft Rights Management (RMS) connector is planned to move from shared-secret authentication to certificate-based authentication. The roadmap item says administrators will create their own Microsoft Entra app registration and certificate, then use a new PowerShell module to configure the certificate for each workload: Connector, Exchange, SharePoint and FCI (File Classification Infrastructure). New cmdlets handle certificate import, registry configuration, private-key permissions and validation.

The roadmap item also says connector setup will no longer provision an Entra service principal or issue a shared secret on the customer's behalf, and that customers should register an Entra ID application and upload a certificate before installing or upgrading the connector.

Microsoft Learn does not describe this change yet, so the behaviour above is the roadmap's description. Learn's current pages describe the existing setup: an administrator signs in during installation, the installer sets up security tokens that are stored in the registry, and the connector creates a service principal named Aadrm_S-1-7-0 in Microsoft Entra ID. The connector serves Exchange Server, SharePoint Server and file servers that use FCI.

The roadmap item is In development, with a preview date of October CY2026 and a General Availability target of January CY2027. Both are Microsoft's targets. The record lists Worldwide (Standard Multi-Tenant) only.

## Why it matters

The connector is the relay between on-premises Exchange, SharePoint and file servers and Azure Rights Management, so its credential decides who can act for those servers against Azure RMS. Moving that credential to an app registration and certificate that you own puts certificate issuing, protection and renewal on your team, and the plan to register an app before installing or upgrading means a connector rebuild or upgrade can stall without it.

Microsoft has not stated what happens to connectors that are already installed, so treat the January CY2027 target as the point to have the app registration, certificate owner and test plan ready. No source says existing behaviour changes before then.

## Risk assessment

**Data exposure**
- Learn says the connector acts as a relay between on-premises servers and the cloud service, and that accounts specified for the Exchange Server role are granted the Azure RMS super user role, with access to all content for the RMS tenant. The roadmap item does not say whether that changes, so confirm which privileges the new app registration and certificate carry before approving them.

**Security & identity**
- The administrator now owns the Entra app registration and certificate. Restrict who can read the certificate's private key on each connector server and who can edit the app registration; Microsoft has not published the permissions the app needs.
- Learn currently says the accounts used by the connector, including the Aadrm_S-1-7-0 service principal it creates, must not require MFA. The roadmap says that service principal is no longer provisioned; confirm how Conditional Access and MFA policies apply to the new app registration.

**Autonomy & actions**
- No change described: the roadmap item covers how the connector authenticates, and adds no new actions.

**Change & support**
- Learn requires at least two connector computers for fault tolerance. Confirm whether each needs the certificate, and plan for both before an upgrade.
- The roadmap lists separate configuration for Connector, Exchange, SharePoint and FCI, so a missed workload is a likely support case. Use the validation cmdlets the roadmap mentions once they are documented.

## Cost and licensing

Learn says to use the Azure Rights Management service with Microsoft 365 subscriptions or subscriptions for Microsoft Purview Information Protection. The connector is part of that service's on-premises deployment, and the connector deployment page lists no separate licence among its prerequisites.

No price, meter or licence specific to certificate-based authentication is published at the time of writing (November 2026). The roadmap item asks administrators to supply their own certificate, so the indirect costs are the time to register the app, issue and protect the certificate, and configure each workload.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform, with release phases General Availability and Preview. It does not list the US Government clouds; that is a record fact, not a statement that the change is unavailable there.

The connector supports Exchange Server, SharePoint Server and Windows file servers that use FCI. Learn says today's installing account must be a global administrator, an Azure RMS global administrator or an Azure RMS connector administrator. Which roles can complete the new app registration and certificate steps is not stated.

The roadmap says the app registration and certificate come before installing or upgrading the connector.

## Governance guidance

### Before rollout
- Inventory every connector server and the Exchange, SharePoint and FCI servers that use it, so each workload gets its certificate.
- Name an owner for the Entra app registration and the certificate, including who issues and renews it.
- Check who holds the connector administrator role today (see the controls table) and remove accounts that no longer need it.
- Plan the app registration and certificate for the roadmap's preview and GA targets, and schedule connector installs and upgrades after they exist.

### At rollout
- Register the Entra application and upload the certificate before installing or upgrading the connector, as the roadmap item says.
- Use the new PowerShell module's cmdlets for each workload and run their validation step once Learn documents them.
- Restrict private-key access to the certificate on each connector server to the accounts that need it.

### After rollout
- Confirm that Exchange protection, SharePoint protection and FCI classification still work through the connector.
- Track the certificate's expiry and renewal in your own certificate inventory.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who may sign in to install and administer the connector</strong><br><small>Tenant</small><br><small class="controls__note">Existing control for the account used to install the connector today; not a control over certificate authentication.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-AipServiceRoleBasedAdministrator -EmailAddress &lt;email address&gt; -Role ConnectorAdministrator</code> <a href="https://learn.microsoft.com/powershell/module/aipservice/add-aipservicerolebasedadministrator" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Certificate-based authentication for the connector and each workload</strong><br><small class="controls__note">Planned per the roadmap item (new PowerShell module). Learn documents neither an admin UI nor a command at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Learn documents no control for certificate-based authentication at the time of writing (November 2026), so the second row is empty. The first row is today's way to decide who may sign in to install and administer the connector; it does not govern the new authentication.

Learn says delegated administration of the protection service must be done in PowerShell and cannot be done in a management portal, so the portal side of that row is empty. Controls over the Entra app registration are not covered by any page read for this briefing.

## Open questions

- Do connectors that are already installed keep working on the shared secret after General Availability, or must they move to certificates, and by what date? Watch Message center and the connector deployment pages on Microsoft Learn.
- Which Entra permissions does the app registration need, and which roles can create it?
- What certificate requirements and renewal procedure apply, and what happens to the connector when the certificate expires?
- What is the new PowerShell module called, where is it downloaded from, and does the Azure RMS connector administrator role cover it?
- Will the change reach the US Government clouds, which the roadmap record does not list?

<!-- rationale
risk: Medium. Connector credentials move to an Entra app registration and certificate that administrators own, and Learn says Exchange accounts authorised through the connector get the Azure RMS super user role.
cost: Low. The only cost the sources show is administrator time to register an Entra app and supply a certificate; no price or meter specific to this change is published.
impact: Low. The roadmap item describes steps for administrators who run the connector; it describes nothing for end users.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Scope: installing account / role: Today's installing account can be a tenant global administrator, Azure RMS global administrator or Azure RMS connector administrator without a stated onboarding qualification. | Found: If you have implemented onboarding controls, make sure that the account you specify is able to protect content. For example, if you restricted the ability to protect content to the "IT department" group, the account that you specify here must be a member of that group. | Fix: Keep the listed installation roles and append: 'If onboarding controls are configured, the installing account must also be allowed to protect content, including membership of the permitted group where protection is restricted to that group.' Cite https://learn.microsoft.com/azure/information-protection/install-configure-rms-connector. | Source: https://learn.microsoft.com/azure/information-protection/install-configure-rms-connector
- [contradicted, blocker] Scope: new app registration roles; Open questions / absence: Which roles can complete the new app registration and certificate steps is not stated. | Found: Users in this role can create and manage all aspects of enterprise applications, application registrations, and application proxy settings. ... This role grants the ability to manage application credentials. | Fix: Replace the Scope absence with: 'Microsoft Entra's Application Administrator role can create and manage app registrations and their credentials. Connector-specific authorization for the new PowerShell module is not yet documented.' Cite https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference#application-administrator. Remove 'and which roles can create it' from the app-permissions open question. | Source: https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference#application-administrator
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: At rollout; controls table / consistency: The checklist instructs app registration and certificate upload, but the table has no row for those Entra controls. | Found: Register the Entra application and upload the certificate before installing or upgrading the connector ... Table rows: Who may sign in to install and administer the connector; Certificate-based authentication for the connector and each workload. | Fix: The checklist's Entra application registration and certificate-upload step has no corresponding Entra control row. Do not add a row in this correction; narrow that bullet to: 'Plan connector installation or upgrade after the roadmap's app-registration and certificate-upload prerequisites are complete.'
-->
