---
title: "Power Automate: Delinea Secret Server as a credential provider for desktop flows"
slug: "power-automate-credentials-integration-with-delinea-secret-server"
roadmapId: 579974
topic: "power-platform"
products: ["Power Automate"]
summary: "Microsoft plans to let desktop flows fetch machine sign-in and flow credentials from Delinea Secret Server, for attended and unattended runs. Optional for most tenants; nothing is documented on Learn yet."
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
videos: []
related: []
controls:
  - governs: "Setup and availability of the Delinea Secret Server credential provider"
    scope: "tenant"
    ui: null
    api: null
    note: "Not yet documented. The roadmap item is In development and Microsoft Learn has no page on this provider."
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
    api: null
    note: "Documented for Azure Key Vault credentials. Microsoft has not confirmed it applies to Delinea-backed credentials."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-11-12T01:35:00"
changes:
  - date: "2026-11-16"
    note: "First briefing for this roadmap item: the plan is known only from the roadmap; Learn documents no Delinea setup, licence or controls yet."
version: 1
---

## What's changing

Power Automate plans to support Delinea Secret Server as an external credential provider for desktop flows. The roadmap item says organisations will be able to use credentials managed in Delinea for machine sign-in and credential retrieval during attended and unattended automation.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. Learn does document two existing credential stores for desktop flows, Azure Key Vault and CyberArk, and the Delinea option is presumably meant to sit alongside them. That is the wiki's reading, not a Microsoft statement. On the CyberArk page, a credential "retrieves CCP CyberArk secrets from the vault during runtime", and the Azure Key Vault page says a credential used in a desktop flow connection is "used to sign into the machine during runtime (attended and unattended runs)".

The roadmap record lists the item as In development, with a target of March CY2027, release phase General Availability, platform Desktop and cloud Worldwide (Standard Multi-Tenant). The date is a target, not a commitment, and no preview date is given.

## Why it matters

Teams that already keep robotic process automation (RPA) machine accounts in Delinea Secret Server would otherwise have to copy those passwords into Azure Key Vault or CyberArk, or type them into desktop flow connections. A native provider would let the vault stay the single place where those passwords live and rotate. Treat that as the wiki's expectation: how the provider authenticates and what it can reach is not yet published.

If nobody acts, nothing is documented to change. The decision for a service owner is whether to plan a move of existing desktop flow credentials once the provider is documented, and who owns the Delinea-side service account that Power Automate will use.

## Risk assessment

**Data exposure**

- The provider is described as retrieving credentials used for machine sign-in and in flows. Which Delinea folders or secrets a flow can reach, and how access is scoped, is not yet documented.
- Existing credential types in desktop flows mark the retrieved variable as sensitive: the Azure Key Vault page says it "is marked as sensitive and can't be modified", so its value is not stored in the logs. Whether the Delinea provider behaves the same way is not documented.

**Security & identity**

- The roadmap item covers unattended runs, where a stored identity retrieves a privileged machine password with no person present. The authentication method between Power Automate and Delinea is not yet documented.
- For CyberArk, the machine or machine group holds an application certificate, and a registered machine is required at runtime. Plan on the Delinea design needing an equivalent trust relationship, and confirm it when Microsoft documents it.

**Autonomy & actions**

- A flow that holds a credential can sign in to the target machine and act as that account. The permissions of the Delinea-held account, not Power Automate, bound what the flow can do.

**Change & support**

- Support will span two products: a failed retrieval could be a Delinea, network or Power Automate fault. Microsoft has not published troubleshooting guidance for this provider.
- Credentials created for other stores are shared with the Share command. Removing permission on a credential does not remove permissions on the underlying environment variables, per the Azure Key Vault page. Whether the Delinea provider uses the same sharing model is not documented.

## Cost and licensing

Licensing for this feature is not yet published. The roadmap item names no licence, and Microsoft Learn has no page on the Delinea provider at the time of writing (November 2026).

The existing credential pages for Azure Key Vault and CyberArk list set-up prerequisites in the vault and name no Power Automate licence. That does not establish what the Delinea provider will need, so check the Power Automate licensing pages for desktop flows (attended and unattended) once Microsoft documents the provider.

Indirect costs are the admin time to configure the provider and a Delinea Secret Server instance reachable from the machines that run flows. Delinea's own licence terms are set by Delinea and are not covered by the Microsoft sources. No Power Automate meter is documented for this feature.

## Scope

The roadmap record lists Power Automate, platform Desktop, and Worldwide (Standard Multi-Tenant) only. It lists no US Government clouds; that is a record fact, not a statement that the feature is unavailable there.

The roadmap description covers desktop flows in attended and unattended runs. Roles, prerequisites, rollout mechanics and Power Automate for desktop version requirements are not yet published. For comparison, the CyberArk page says machines must be able to reach the CyberArk server, and that a registered machine is needed even for local attended or debugging runs.

## Governance guidance

### Before rollout

- Inventory which desktop flows and desktop flow connections use stored machine passwords, so you know what would move to Delinea. The owner is the Power Platform admin working with the flow makers.
- Ask the Delinea Secret Server owner which service account and folder permissions the RPA machine accounts would need, and keep them to the minimum.
- Confirm that the machines running attended and unattended flows can reach the Delinea Secret Server instance over the network.

### At rollout

- Wait for Microsoft Learn to document the provider before configuring it, and record the exact setup path in your runbook when it appears.
- Pilot with one machine group and one non-production credential before moving production unattended flows.
- Limit who can create and share credentials in the pilot environment, using the existing Credentials page sharing roles.

### After rollout

- Test a password rotation in Delinea and confirm that unattended runs pick up the new value.
- Review the run history for credential retrieval failures and confirm that retrieved values do not appear in run logs.
- Remove superseded stored passwords from desktop flow connections once the Delinea-backed credentials are in use.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Setup and availability of the Delinea Secret Server credential provider</strong><br><small>Tenant</small><br><small class="controls__note">Not yet documented. The roadmap item is In development and Microsoft Learn has no page on this provider.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>CyberArk application configuration on machines (existing external vault)</strong><br><small class="controls__note">Today's alternative for CyberArk only. Does not govern Delinea; Microsoft has not said whether a Delinea equivalent will exist.</small></td><td data-label="Admin UI"><strong>Power Automate</strong><br>Machines › machine or group › Configure CyberArk <a href="https://learn.microsoft.com/power-automate/desktop-flows/create-cyberark-credential" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can use or share a credential</strong><br><small>Maker</small><br><small class="controls__note">Documented for Azure Key Vault credentials. Microsoft has not confirmed it applies to Delinea-backed credentials.</small></td><td data-label="Admin UI"><strong>Power Automate</strong><br>Credentials › credential › Share <a href="https://learn.microsoft.com/power-automate/desktop-flows/create-azurekeyvault-credential" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

At the time of writing (November 2026), Microsoft Learn documents no setup path, admin switch or API for the Delinea provider, so the first row is a gap. The two rows below it are existing controls that administrators use for other credential stores; they are not confirmed to govern Delinea.

For CyberArk, the application and its certificate are configured per machine or machine group in the Power Automate portal, and the page says a CyberArk application can't currently be associated with machines or groups that are shared with other users. Whether Delinea will follow the same model is an open question. A search of Microsoft Learn for the Power Automate credentials APIs and PowerShell found no documented API for creating or restricting credentials.

## Open questions

- How will Power Automate authenticate to Delinea Secret Server (certificate, service account or another method), and where is that trust configured? Watch the Power Automate desktop flows documentation and the Power Automate for desktop release notes.
- Which Power Automate licence do attended and unattended runs that use the Delinea provider require, and will any meter apply?
- Will the provider be available in US Government clouds? The roadmap record lists Worldwide (Standard Multi-Tenant) only; the Azure Key Vault and CyberArk pages say those features are not available there.
- Can administrators restrict which credential stores makers may use, or turn the Delinea provider off for an environment?
- Which Power Automate for desktop version and Dataverse solution version will be required? Check Message center and the roadmap item for the March CY2027 target.

<!-- rationale
risk: Medium. The feature lets desktop flows retrieve privileged machine credentials from an external vault, and Microsoft Learn documents no admin switch or setup path for it at the time of writing (November 2026).
cost: Low. The only cost the sources show is admin and security-team time; Power Automate licensing for this provider is not yet published, and Delinea's own licence terms are outside the Microsoft sources.
impact: Low. Admins, security teams and makers who run desktop flows would notice; end users do not, and the roadmap item describes a new provider option rather than a change to existing flows.
-->
