---
kind: "concept"
title: "Data residency: where is your data stored, and where do AI features process it?"
slug: "data-residency"
summary: "Data residency is the geography where Microsoft stores and processes customer data. Administrators use the Product Terms, Advanced Data Residency, Multi-Geo and the cross-region, flex routing and AI subprocessor settings to decide whether Copilot data stays in their region."
created: "2026-11-26"
updated: "2026-11-26"
version: 2
tags: ["data-residency","m365-copilot","power-platform","copilot-studio","anthropic","privacy","eu-data-boundary","multi-geo","advanced-data-residency"]
covers: []
sources:
  - title: "What is Microsoft 365 Data Residency?"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/m365-dr-overview"
    kind: "learn"
  - title: "Data Residency for Microsoft 365 Copilot Offerings"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/m365-dr-service-copilot-offerings"
    kind: "learn"
  - title: "Microsoft 365 Multi-Geo: Overview and requirements"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/microsoft-365-multi-geo"
    kind: "learn"
  - title: "Advanced Data Residency: Overview and requirements"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/m365-dr-adr-overview"
    kind: "learn"
  - title: "Advanced Data Residency: Migration initiation"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/m365-dr-adr-initiate-migration"
    kind: "learn"
  - title: "Advanced Data Residency: License management"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/m365-dr-adr-license-management"
    kind: "learn"
  - title: "Data Location Card"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/m365-dr-data-location-card"
    kind: "learn"
  - title: "Data, Privacy, and Security for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy"
    kind: "learn"
  - title: "Flex routing (EU and EFTA)"
    url: "https://learn.microsoft.com/copilot/manage/copilot-flex-routing"
    kind: "learn"
  - title: "Move data across regions for Copilots, AI agents, and generative AI features"
    url: "https://learn.microsoft.com/power-platform/admin/geographical-availability-copilot"
    kind: "learn"
  - title: "\"Generative AI not available\" error message"
    url: "https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/generative-answers/generative-ai-not-available"
    kind: "learn"
  - title: "Set-PowerPlatformGenerativeAiSettings"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/set-powerplatformgenerativeaisettings"
    kind: "learn"
  - title: "Environment groups"
    url: "https://learn.microsoft.com/power-platform/admin/environment-groups"
    kind: "learn"
  - title: "Claude models from Anthropic in Microsoft Online Services"
    url: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor"
    kind: "learn"
  - title: "Enable Claude models only for Copilot experiences in Microsoft 365 apps"
    url: "https://learn.microsoft.com/copilot/implement/copilot-anthropic-apps"
    kind: "learn"
  - title: "Continuing data transfers that apply to all EU Data Boundary Services"
    url: "https://learn.microsoft.com/privacy/eudb/eu-data-boundary-transfers-for-all-services"
    kind: "learn"
  - title: "User Testing in Multi-Geo"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/m365-multi-geo-user-testing"
    kind: "learn"
related: ["m365-copilot-local-inferencing","m365-copilot-word-agent","microsoft-viva-copilot-analytics-copilot-studio-agent-report-in-insights-enhanced-with-aut","dynamics-365-customer-insights-journeys-improve-engagement-and-message-timing-with-outreac","managed-environments","web-search"]
controls:
  - governs: "Whether an environment's generative AI prompts and outputs may move to another region"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Generative AI features > Edit > Move data across regions"
      docs: "https://learn.microsoft.com/power-platform/admin/geographical-availability-copilot"
    api:
      kind: "powershell"
      call: "Set-PowerPlatformGenerativeAiSettings -EnvironmentName <EnvironmentId> -CrossGeoDataMovement $false"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/set-powerplatformgenerativeaisettings"
    note: "Power Platform administrator or Dynamics 365 administrator. Not shown for U.S., government cloud or full in-region capacity environments."
  - governs: "Whether Microsoft Copilot and Copilot Chat may run LLM inferencing outside the EU Data Boundary at peak load"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > View all > Flex routing during peak load periods > Allow flex routing during periods of peak load"
      docs: "https://learn.microsoft.com/copilot/manage/copilot-flex-routing"
    api: null
    note: "AI Administrator. EU Data Boundary tenants only; not available to tenants that have purchased or used Multi-Geo. On by default for eligible tenants created after March 25, 2026."
  - governs: "Whether Dynamics 365, Power Platform and Copilot Studio may use flex routing in an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Generative AI features > Edit > Allow flex routing during periods of peak load"
      docs: "https://learn.microsoft.com/power-platform/admin/geographical-availability-copilot"
    api: null
    note: "Shown for environments in the EU Data Boundary; unavailable when the Microsoft 365 setting disallows flex routing or Move data across regions is off."
  - governs: "Whether Anthropic is available as a Microsoft subprocessor, which sends Claude processing outside the EU Data Boundary"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > View all > AI providers operating as Microsoft subprocessors > Available subprocessors for your organization > Anthropic"
      docs: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor"
    api: null
    note: "AI Administrator or Global Administrator. Off (No users) by default in the EU, EFTA and UK, but the apps-only option is on by default there for tenants created after March 25, 2026; on for most other commercial tenants."
  - governs: "Which users and groups may use Claude models in Copilot and generative AI experiences"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > View all > AI providers operating as Microsoft subprocessors > Choose who can access Anthropic models for Copilot and generative AI experiences"
      docs: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor"
    api: null
    note: "Applied at provider level and enforced across Microsoft Copilot and Copilot Studio."
  - governs: "Which geography a Multi-Geo user's data, including Copilot interactions, is stored in (Preferred Data Location)"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Update-MgUser -UserId <UserId> -PreferredDataLocation <international location code>"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/m365-multi-geo-user-testing"
    note: "Cloud-only users. Synchronised users take PDL from on-premises Active Directory. Requires Multi-Geo."
  - governs: "Whether ADR data migration to the Local Region Geography starts"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org settings > Organization profile > Data location > option to initiate migration for ADR services not currently in the Local Region Geography"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/m365-dr-adr-initiate-migration"
    api: null
    note: "Global Administrator, once ADR licences, with seats already covered by Multi-Geo, cover 100% of the required seats. The Data Location Card shows current locations and the migration option."
confidence: "high"
dependents: 10
changes:
  - date: "2026-11-26"
    note: "New concept page: where Microsoft 365 and Power Platform store and process data, the ADR and Multi-Geo add-ons, and the cross-region, flex routing and Anthropic settings that move AI processing."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 89 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected ADR seat coverage (purchased seats; Multi-Geo seats need no ADR licence), qualified the EU/UK Claude default and the December 9 change, narrowed the Data Location Card check, removed an unsupported in-country processing premise and added three sources."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 107 statements not yet confirmed"
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 107
  confirmed: 107
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "f6311f21fab63c0cfe815732b101b9f4"
---

## What it is

Data residency is the geographic location where an organisation's data is stored or processed.

### Where data is stored

Microsoft stores a Microsoft 365 tenant's data at rest according to its **Default Geography**, the country or region given at sign-up, and the geographies where each service is available. Microsoft 365 offers three ways to commit that location:

| Commitment | What it covers | How it is obtained |
|---|---|---|
| Product Terms | Microsoft 365 Copilot and Copilot Chat, among other services, for tenants whose sign-up country is on Microsoft's list | Included with the subscription |
| Advanced Data Residency (ADR) | Data at rest in the tenant's own country (a Local Region Geography), more services than the core set, and prioritised migration | Add-on |
| Multi-Geo | A data location per user for Exchange Online, SharePoint, OneDrive, Teams, Microsoft 365 Copilot and Copilot Chat | Add-on |

For Copilot, the stored data is the **content of interactions**: the user's prompt, the response and its citations. Under Multi-Geo it is stored in the geography of the **Preferred Data Location (PDL)** of the user who asked; where the PDL isn't set or is invalid, it goes to the tenant's Primary Provisioned Geography.

### Where AI processing runs

Where a model runs is governed separately from storage:

- **EU Data Boundary.** For EU customers, Microsoft Copilot is an EU Data Boundary service. Customers outside the EU may have their queries processed in the US, EU or other regions.
- **Flex routing.** An EU and EFTA setting that allows large language model (LLM) inferencing outside the EU Data Boundary during peak demand, in the United States, Canada or Australia.
- **Move data across regions.** A Power Platform environment setting that lets prompts and outputs move to the region where a generative AI feature is hosted.
- **AI subprocessors.** Claude models from Anthropic are currently excluded from the EU Data Boundary and, when applicable, in-country processing commitments.

## Why it matters

Residency is how an organisation answers a regulator or customer who asks where Copilot prompts and responses are kept, and where the model ran. The two answers come from different settings. Microsoft states that allowing data movement across regions in Power Platform doesn't affect the Product Terms commitments on storing customer data at rest, so a tenant can have a storage commitment while prompts are inferenced elsewhere.

Several processing settings are on for some tenants without an administrator choosing them: flex routing is on by default for eligible tenants created after March 25, 2026, and Claude models are on by default for most commercial-cloud customers outside the EU, EFTA and UK. The subprocessor overview says EU Data Boundary and UK customers have Claude models disabled by default. The apps-only documentation separately says its setting is enabled by default for EU, EFTA and UK tenants created after March 25, 2026; check the tenant's actual selection. A tenant whose residency obligations rest on the EU Data Boundary needs to read these settings rather than assume them.

## Cost and licensing

Microsoft describes the options as ranging from default commitments included with the subscription to paid add-ons.

- **ADR** requires a Default Geography in a listed Local Region Geography and a qualifying subscription. ADR coverage is calculated against eligible purchased paid seats, not assigned users; seats already covered by Multi-Geo do not also need ADR licences. Together the programs must cover 100% of the required seats. The European Union isn't available as a single ADR geography.
- **Multi-Geo** is licensed through the Enterprise Agreement, Web Direct or CSP channels, according to its overview; the Copilot data residency page asks for an active Enterprise or CSP Partner Agreement. The Copilot residency page requires purchased Multi-Geo units greater than 5% of eligible licences; the Multi-Geo overview instead says equal to or greater than 5% for EA and CSP customers.
- The Microsoft Learn data residency pages publish no price for either add-on. The licence each AI feature needs is on that feature's page.

## Risks and limits

- **Clearing Move data across regions does not undo earlier movement.** Data that moved while the setting was allowed can't be reversed by clearing it.
- **Move data across regions is not an off switch.** Not all Copilot and generative AI features are governed by it, and an environment that needs it can show Copilot Studio agents a "Generative AI not available" error once it is cleared.
- **Some Copilot Studio models ignore the restriction.** Microsoft states that some models might process data outside the environment's region even when cross-geo data movement is restricted.
- **The setting is not always shown.** The checkbox isn't displayed for environments in U.S. or government cloud regions, or in regions with full in-region capacity.
- **Multi-Geo changes EU Data Boundary scope.** Customers who have purchased or used Multi-Geo are not in scope for the EU Data Boundary for Microsoft 365, and do not get the flex routing setting in the Microsoft 365 admin center.
- **Claude processing leaves the boundary.** When Claude models are allowed, customer data is processed by Anthropic in the United States and stays stored in the EU Data Boundary. Microsoft says Claude models are coming into the EU Data Boundary starting in December 2026.
- **Anthropic models with Data Retention sit outside Microsoft's terms.** Their data is stored by Anthropic, not subject to the Product Terms and DPA, and Anthropic keeps most inputs and outputs for up to 30 days. For suspected Usage Policy violations, Anthropic may retain content for up to two years and trust and safety classification scores for up to seven years. They stay off until an administrator opts in.
- **ADR migration waits for the Global Administrator.** It starts only after the opt-in, and Microsoft uses reasonable efforts to finish within 12 months.
- **A new PDL does not move OneDrive.** Exchange Online relocates the mailbox automatically, but an existing OneDrive stays where it is.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether an environment's generative AI prompts and outputs may move to another region</strong><br><small>Environment</small><br><small class="controls__note">Power Platform administrator or Dynamics 365 administrator. Not shown for U.S., government cloud or full in-region capacity environments.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Generative AI features › Edit › Move data across regions <a href="https://learn.microsoft.com/power-platform/admin/geographical-availability-copilot" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PowerPlatformGenerativeAiSettings -EnvironmentName &lt;EnvironmentId&gt; -CrossGeoDataMovement $false</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/set-powerplatformgenerativeaisettings" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Microsoft Copilot and Copilot Chat may run LLM inferencing outside the EU Data Boundary at peak load</strong><br><small>Tenant</small><br><small class="controls__note">AI Administrator. EU Data Boundary tenants only; not available to tenants that have purchased or used Multi-Geo. On by default for eligible tenants created after March 25, 2026.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › Flex routing during peak load periods › Allow flex routing during periods of peak load <a href="https://learn.microsoft.com/copilot/manage/copilot-flex-routing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Dynamics 365, Power Platform and Copilot Studio may use flex routing in an environment</strong><br><small>Environment</small><br><small class="controls__note">Shown for environments in the EU Data Boundary; unavailable when the Microsoft 365 setting disallows flex routing or Move data across regions is off.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Generative AI features › Edit › Allow flex routing during periods of peak load <a href="https://learn.microsoft.com/power-platform/admin/geographical-availability-copilot" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Anthropic is available as a Microsoft subprocessor, which sends Claude processing outside the EU Data Boundary</strong><br><small>Tenant</small><br><small class="controls__note">AI Administrator or Global Administrator. Off (No users) by default in the EU, EFTA and UK, but the apps-only option is on by default there for tenants created after March 25, 2026; on for most other commercial tenants.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › AI providers operating as Microsoft subprocessors › Available subprocessors for your organization › Anthropic <a href="https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users and groups may use Claude models in Copilot and generative AI experiences</strong><br><small>Group</small><br><small class="controls__note">Applied at provider level and enforced across Microsoft Copilot and Copilot Studio.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › AI providers operating as Microsoft subprocessors › Choose who can access Anthropic models for Copilot and generative AI experiences <a href="https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which geography a Multi-Geo user's data, including Copilot interactions, is stored in (Preferred Data Location)</strong><br><small>User</small><br><small class="controls__note">Cloud-only users. Synchronised users take PDL from on-premises Active Directory. Requires Multi-Geo.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-MgUser -UserId &lt;UserId&gt; -PreferredDataLocation &lt;international location code&gt;</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/m365-multi-geo-user-testing" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether ADR data migration to the Local Region Geography starts</strong><br><small>Tenant</small><br><small class="controls__note">Global Administrator, once ADR licences, with seats already covered by Multi-Geo, cover 100% of the required seats. The Data Location Card shows current locations and the migration option.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › Organization profile › Data location › option to initiate migration for ADR services not currently in the Local Region Geography <a href="https://learn.microsoft.com/microsoft-365/enterprise/m365-dr-adr-initiate-migration" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

- **Roles.** Flex routing in the Microsoft 365 admin center needs the AI Administrator role; the Anthropic subprocessor settings need AI Administrator or Global Administrator; Move data across regions needs a Power Platform administrator or Dynamics 365 administrator; the ADR migration opt-in needs a Global Administrator.
- **Flex routing is set twice.** The Microsoft 365 admin center setting applies to Microsoft Copilot and Copilot Chat; the Power Platform admin center setting applies to Dynamics 365, Power Platform and Copilot Studio and honours the Microsoft 365 setting unless it is more restrictive. If the Microsoft 365 setting disallows flex routing, the Power Platform one is off and can't be changed.
- **At scale.** Microsoft points to the **Generative AI settings** environment group rule (Manage > Environment groups > group > Rules > Generative AI settings) to set Move data across regions across environments. Environment groups contain only managed environments (see [Managed Environments](/concepts/managed-environments/)), and a published rule overrides the environment's own generative AI settings.
- **Synchronised users** take their PDL from on-premises Active Directory through Microsoft Entra Connect, not from the cmdlet below.

## What to check

- Open the Data Location Card in the Microsoft 365 admin center and confirm the current and committed geography for each displayed service; Copilot Chat is not currently displayed, and Multi-Geo satellite locations are not shown.
- Read the Microsoft 365 flex routing setting if the tenant is in the EU or EFTA, above all if it was created after March 25, 2026.
- Review **Move data across regions** and the Power Platform flex routing checkbox in each environment that holds regulated data.
- Check whether Anthropic is enabled as a subprocessor and which users and groups may use Claude models.
- Confirm the PDL of every user in a Multi-Geo satellite geography before they first use Copilot.

## Open questions

- Where does Microsoft 365 Copilot run inference for each tenant geography, once Microsoft publishes its documentation for data in processing?
- Will in-country processing for Copilot come with a tenant setting? See [local inferencing](/features/m365-copilot-local-inferencing/).
- Will the flex routing and AI subprocessor settings get a Microsoft Graph or PowerShell equivalent?
- When Claude models enter the EU Data Boundary, will the UK default or the in-country processing exclusion change?

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].note; Governance controls: Roles / role: Move data across regions requires a Power Platform administrator or Dynamics 365 administrator. | Found: To grant consent, you must be a Power Platform administrator or Dynamics 365 administrator. | Fix: Add to the Roles bullet: 'The Power Platform page names Power Platform administrator or Dynamics 365 administrator; the Copilot Studio data-movement page instead says only global and Power Platform administrators can enable or disable these features outside the United States (https://learn.microsoft.com/microsoft-copilot-studio/manage-data-movement-outside-us).' | Source: https://learn.microsoft.com/power-platform/admin/geographical-availability-copilot
- [supported, minor] What it is: commitment table, Product Terms; Cost and licensing / cost: Eligible tenants' Product Terms commitments are included with the subscription rather than purchased as an add-on. | Found: These commitments are included for Tenants that meet specific eligibility criteria. No additional purchase is required. | Fix: Add https://learn.microsoft.com/microsoft-365/enterprise/m365-dr-compare-offerings to sources for the explicit included-versus-paid comparison. Also add https://learn.microsoft.com/microsoft-copilot-studio/manage-data-movement-outside-us for the conflicting role guidance identified in the Roles correction. | Source: https://learn.microsoft.com/microsoft-365/enterprise/m365-dr-compare-offerings
- [supported, minor] Risks and limits: new PDL / behaviour: Exchange Online automatically relocates the mailbox after a PDL change. | Found: Exchange Online automatically relocates the user's mailbox if the PDL changes and the MailboxRegion no longer matches the Mailbox Database Geo Location code. | Fix: Replace 'Exchange Online relocates the mailbox automatically' with 'Exchange Online relocates the mailbox automatically if the PDL changes and MailboxRegion no longer matches the Mailbox Database Geo Location code'. | Source: https://learn.microsoft.com/microsoft-365/enterprise/m365-multi-geo-user-testing
-->
