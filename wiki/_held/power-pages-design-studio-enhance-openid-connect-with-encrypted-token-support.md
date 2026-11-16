---
title: "Power Pages: OpenID Connect sign-in accepts encrypted ID tokens"
slug: "power-pages-design-studio-enhance-openid-connect-with-encrypted-token-support"
roadmapId: 576395
topic: "power-platform"
products: ["Power Pages"]
summary: "Power Pages plans to accept encrypted as well as signed OpenID Connect ID tokens. The roadmap says it is enabled automatically; Learn does not yet document it, so plan for stricter identity providers and watch for settings."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: "August CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "on"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published for this feature. Learn says Power Pages licensing is capacity based, by authenticated users per website per month and anonymous users per website per month."
audiences: ["power-platform-admin","security","maker"]
tags: ["power-pages","design-studio","authentication","end-user-authentication","identity-providers","encryption"]
sources:
  - title: "Microsoft 365 Roadmap 576395"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576395"
    kind: "roadmap"
  - title: "Set up an OpenID Connect provider"
    url: "https://learn.microsoft.com/power-pages/security/authentication/openid-provider"
    kind: "learn"
  - title: "Set up an OpenID Connect provider with Microsoft Entra ID"
    url: "https://learn.microsoft.com/power-pages/security/authentication/openid-settings"
    kind: "learn"
  - title: "FAQs about using OpenID Connect in Power Pages"
    url: "https://learn.microsoft.com/power-pages/security/authentication/openid-faqs"
    kind: "learn"
  - title: "Use governance controls to manage site authentication"
    url: "https://learn.microsoft.com/power-pages/security/external-auth-control"
    kind: "learn"
  - title: "Power Platform licensing FAQs"
    url: "https://learn.microsoft.com/power-platform/admin/powerapps-flow-licensing-faq"
    kind: "learn"
videos: []
related: ["power-pages-administration-and-governance-manage-external-authentication-providers-with-gr","power-pages-design-studio-configure-authentication-with-security-agent"]
controls:
  - governs: "Whether makers can configure OpenID Connect identity providers on a site"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Products > Power Pages > Settings > Authentication > OpenID Connect > environment > Manage"
      docs: "https://learn.microsoft.com/power-pages/security/external-auth-control"
    api: null
    note: "Protocol controls are prerelease. They restrict the OpenID Connect protocol, not encrypted tokens; Microsoft has not confirmed they apply to this feature."
  - governs: "OpenID Connect provider configuration on a site"
    scope: "site"
    ui:
      surface: "Power Pages design studio"
      path: "Security > Identity providers"
      docs: "https://learn.microsoft.com/power-pages/security/authentication/openid-provider"
    api: null
    note: "Existing maker-side path for adding a provider; Learn documents no encrypted-token option there."
  - governs: "Switch or setting for accepting encrypted ID tokens"
    scope: "site"
    ui: null
    api: null
    note: "Not documented at the time of writing (November 2026)."
confidence: "low"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-10-14T22:53:09"
changes:
  - date: "2026-11-16"
    note: "First briefing: the roadmap item is documented only by its description; no Learn page covers encrypted ID tokens yet."
  - date: "2026-11-16"
    note: "Default state now read as on, from the roadmap's \"Enabled for end users automatically\"; action moved to prepare; admin path completed; the August CY2026 preview question updated."
version: 2
verification:
  status: "held"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 47
  confirmed: 45
  unconfirmed: 0
  contradicted: 2
  attempts: 1
---

## What's changing

The roadmap item states that Power Pages will accept encrypted ID tokens in addition to signed tokens when a visitor signs in through an OpenID Connect identity provider. An ID token is the security token the provider returns to prove who the user is and to carry claims such as an email address.

The item is listed under the Power Pages design studio. It says the change improves compatibility with identity providers that encrypt tokens, and that existing sign-in flows do not change. Its "Enabled for" line reads "Enabled for end users automatically", which this briefing reads as on by default. That line does not say whether a maker or admin must configure the encryption keys or settings for a given provider.

Microsoft Learn does not describe this feature at the time of writing (November 2026), so its behaviour here is the roadmap's description. The setting's location, supported providers, accepted encryption methods and key handling are not documented. For comparison, the Learn FAQ describes today's signed-token model: Power Pages requires the provider to publish a public JWKS URI endpoint "where the public keys are available to verify the signature of the ID token".

The record lists the status as In development, with a preview targeted for August CY2026 and general availability targeted for December CY2026, for Worldwide (Standard Multi-Tenant) on the Web platform. These are Microsoft's targets. The preview target month has passed and the status still reads In development.

## Why it matters

For tenants whose external identity provider insists on encrypting ID tokens, this decides whether Power Pages can be used for sign-in at all. The roadmap names sensitive, external-facing sites as the target audience.

If nobody acts, existing sign-in is unchanged according to the roadmap. Because the item says it is enabled automatically but documents no setting, the sensible plan is to inventory the sites and providers that might need it, and to confirm with Microsoft's documentation how encryption is configured before relying on it.

## Risk assessment

**Data exposure**

- The roadmap says the change ensures secure claim transmission from the provider to the site. Learn does not say which claims or site data are affected, so assume no new data access until documented.
- Registration claims mapping and Login claims mapping already decide which provider claims reach a contact record. Check they map only what the site needs before connecting a stricter provider.

**Security & identity**

- Encrypted tokens are described as an addition to signed tokens. How a site treats an unencrypted token once a provider is set up for encryption is not documented, so do not assume unencrypted tokens are rejected.
- Where Power Pages holds the decryption key, and who rotates it, is not documented. Today's documented model needs only the provider's public JWKS URI to verify signatures.

**Autonomy & actions**

- No change: the roadmap describes authentication only, with no agent or automated action.

**Change & support**

- Learn says changes to a site's authentication settings might take a few minutes to be reflected, so retest sign-in after any provider change.
- Blocking the OpenID Connect protocol in the Power Platform admin center stops users signing in with it. That control is the existing way to restrict the protocol; Learn does not say it governs token encryption.

## Cost and licensing

Microsoft has not published licensing or pricing for this feature, and the roadmap record names no licence or meter.

Power Pages as a whole is licensed on capacity: the Power Platform licensing FAQ describes authenticated users per website per month and anonymous users per website per month. Neither that page nor the roadmap says encrypted tokens change the count or the charge, so treat any effect as Not yet published.

The cost the sources show is indirect: admin and maker time to reconfigure a provider and retest sign-in.

## Scope

- **Product and cloud:** Power Pages, Worldwide (Standard Multi-Tenant), Web, per the roadmap record. Other clouds are not listed on the record.
- **Who is affected:** sites that sign in users through an OpenID Connect provider. The roadmap says "Enabled for end users automatically".
- **Release phase:** the record lists Preview and General Availability, with targets of August CY2026 and December CY2026.
- **Roles and prerequisites:** not documented for this feature.

## Governance guidance

### Before rollout

- Identify sites that use an OpenID Connect provider (design studio > Security > Identity providers) and list those whose provider can encrypt ID tokens.
- Ask each identity provider owner whether it encrypts ID tokens and which key and algorithm settings it expects.
- Check the OpenID Connect authentication governance setting in the Power Platform admin center for the environment that hosts the site, since blocking it stops makers configuring OpenID Connect providers.

### At rollout

- Watch Message center and the Power Pages OpenID Connect articles on Learn for the setting and its documented behaviour before enabling encryption at a provider.
- Test sign-in on a non-production site first, and allow for the few minutes Learn says authentication changes can take to appear.

### After rollout

- Retest sign-in and Registration claims mapping and Login claims mapping for existing OpenID Connect providers to confirm users still match their contacts.
- Record who owns the decryption key and its rotation once Microsoft documents where it is held.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether makers can configure OpenID Connect identity providers on a site</strong><br><small>Environment</small><br><small class="controls__note">Protocol controls are prerelease. They restrict the OpenID Connect protocol, not encrypted tokens; Microsoft has not confirmed they apply to this feature.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Products › Power Pages › Settings › Authentication › OpenID Connect › environment › Manage <a href="https://learn.microsoft.com/power-pages/security/external-auth-control" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>OpenID Connect provider configuration on a site</strong><br><small>Site</small><br><small class="controls__note">Existing maker-side path for adding a provider; Learn documents no encrypted-token option there.</small></td><td data-label="Admin UI"><strong>Power Pages design studio</strong><br>Security › Identity providers <a href="https://learn.microsoft.com/power-pages/security/authentication/openid-provider" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Switch or setting for accepting encrypted ID tokens</strong><br><small>Site</small><br><small class="controls__note">Not documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No Microsoft page documents a setting for encrypted ID tokens at the time of writing (November 2026), so the third row has no path or command. Searches of Microsoft Learn for an encrypted-token setting, and for a script or API for the authentication governance setting, returned nothing.

The Power Platform admin center setting decides whether makers can configure OpenID Connect providers at all. Learn marks the protocol controls as prerelease. Blocking the protocol stops users signing in through it, so agree the change with site owners first. It does not restrict encryption.

## Open questions

- Where is encrypted-token support configured (a design studio setting, a site setting or automatic), and does it need any admin action? Watch the Power Pages OpenID Connect articles on Learn.
- Which encryption algorithms and key sources are supported, and where does Power Pages hold the decryption key?
- Will a site that accepts encrypted tokens still accept signed-only tokens from the same provider?
- Is there any licensing or capacity effect for Power Pages authenticated users? Watch Message center for a licensing statement.
- Has the August CY2026 preview shipped, or has Microsoft revised that target? The roadmap still says In development.

<!-- rationale
risk: Low. The roadmap says existing sign-in flows do not change, and the feature accepts a stricter token format; no Microsoft page yet documents any new data access or a way to switch it off.
cost: Low. Licensing for this feature is not yet published; the only cost the sources show is admin and maker time to reconfigure a provider, on top of Power Pages capacity licensing.
impact: Low. Site makers and identity administrators notice it when connecting a provider that encrypts ID tokens; the roadmap says sign-in flows are not changed for existing users.
-->

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] controls[0].ui; Governance controls table / admin-path: OpenID Connect governance is under Manage > Products > Power Pages > Settings > Authentication > OpenID Connect > environment > Manage. | Found: In the left navigation pane, select Manage.
Under Products, select Power Pages.
Select the Settings tab.
Under Authentication, select the authentication option you want to manage.
Select an environment, and then select Manage. | Fix: Keep the operational path. Explain that after Manage the admin chooses site targeting, selects Continue, reviews affected sites and confirms Update. Note that the release-plan search excerpt at https://learn.microsoft.com/power-platform/release-plan/2025wave2/power-pages/manage-external-authentication-provider-governance instead gives Manage > Power Pages > Governance settings > Authentication providers; prefer the cited operational guidance. | Source: https://learn.microsoft.com/power-pages/security/external-auth-control
- [contradicted, blocker] controls[1].api; Governance controls table / absence: Automation for existing OpenID Connect provider configuration on a site is not documented. | Found: With this feature, the Microsoft Power Platform CLI enables CI/CD (Continuous Integration/Continuous Deployment) of a Power Pages site configuration. | Fix: Replace the blanket automation gap with PAC CLI deployment of provider site settings. Microsoft lists adx_sitesetting as a supported table at https://learn.microsoft.com/power-pages/configure/power-platform-cli, and https://learn.microsoft.com/power-pages/security/authentication/openid-provider documents OpenID Connect configuration as site settings. Use kind pac-cli, call pac pages upload --path "<site-folder>" --modelVersion 2, docs https://learn.microsoft.com/power-platform/developer/cli/reference/pages#pac-pages-upload. Explain that this uploads prepared website configuration containing the provider settings, not an encryption-specific switch. | Source: https://learn.microsoft.com/power-pages/configure/power-platform-cli
- [contradicted, minor] Governance guidance: After rollout; Governance controls table / consistency: The checklist names Registration claims mapping and Login claims mapping, but no controls row explicitly names them. | Found: Retest sign-in and Registration claims mapping and Login claims mapping for existing OpenID Connect providers; table: OpenID Connect provider configuration on a site. | Fix: Expand the provider-configuration row to explicitly name Registration claims mapping and Login claims mapping, or add a dedicated row for these existing controls. Cite https://learn.microsoft.com/power-pages/security/authentication/openid-settings#set-up-additional-claims and distinguish these existing settings from undocumented encryption-specific controls.
-->
