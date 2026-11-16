---
title: "Power Pages: OpenID Connect sign-in accepts encrypted ID tokens"
slug: "power-pages-design-studio-enhance-openid-connect-with-encrypted-token-support"
roadmapId: 576395
topic: "power-platform"
products: ["Power Pages"]
summary: "Power Pages plans to accept encrypted as well as signed OpenID Connect ID tokens in the design studio. Microsoft Learn does not yet document the feature; admins have nothing to do now but can plan for stricter identity providers."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: "August CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for this feature. Power Pages as a whole is licensed by authenticated and anonymous users per website per month, with a pay-as-you-go option."
audiences: ["power-platform-admin","security","maker"]
tags: ["power-pages","design-studio","authentication","end-user-authentication","identity-providers","encryption"]
sources:
  - title: "Microsoft 365 Roadmap 576395"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576395"
    kind: "roadmap"
  - title: "Set up an OpenID Connect provider"
    url: "https://learn.microsoft.com/power-pages/security/authentication/openid-provider"
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
      path: "Manage > Products > Power Pages > Settings > Authentication"
      docs: "https://learn.microsoft.com/power-pages/security/external-auth-control"
    api: null
    note: "General control, in preview: restricts the OpenID Connect protocol, not encrypted tokens. Microsoft has not confirmed it applies to this feature."
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
version: 1
verification:
  status: "held"
  date: "2026-11-16"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 42
  confirmed: 40
  unconfirmed: 0
  contradicted: 2
  attempts: 1
---

## What's changing

The roadmap item states that Power Pages will accept encrypted ID tokens in addition to signed tokens when a visitor signs in through an OpenID Connect identity provider. An ID token is the security token the provider returns to prove who the user is and to carry claims such as an email address.

The item is listed under the Power Pages design studio. It says the change improves compatibility with identity providers that encrypt tokens and leaves existing sign-in flows unchanged. Microsoft Learn does not describe this feature at the time of writing (November 2026), so what follows about its behaviour is the roadmap's description. Where a setting lives, which providers it supports and which encryption methods are accepted are not documented.

The roadmap lists the status as In development, with a preview targeted for August CY2026 and general availability targeted for December CY2026, for Worldwide (Standard Multi-Tenant) on the Web platform. These are Microsoft's targets. The preview target month has passed and the status still reads In development. The record's audience line reads "Enabled for end users automatically" and does not say whether a maker or admin must configure anything.

Background from Learn: the OpenID Connect provider article describes how makers add a provider in the design studio, and the FAQ says Power Pages requires the provider to publish a public JWKS URI endpoint "where the public keys are available to verify the signature of the ID token". That describes the signed-token behaviour Learn documents today, not the encrypted-token design.

## Why it matters

For tenants whose external identity provider insists on encrypting ID tokens, this is the difference between being able to use Power Pages for sign-in or not. Sites that handle sensitive external-facing data are the ones the roadmap names as the target.

If nobody acts, nothing changes for existing sign-in. Administrators should treat this as a capability to evaluate when a security or compliance requirement calls for token encryption, and should not assume it is switched on for a site until Microsoft documents how it is enabled.

## Risk assessment

**Data exposure**

- The feature concerns how claims travel from the identity provider to the site. The roadmap says it ensures secure claim transmission; Microsoft Learn does not yet say which claims or which site data are affected.
- Claims mapping settings (Registration claims mapping and Login claims mapping) already control which token claims reach a contact record. Check that they still map only what the site needs before connecting a stricter provider.

**Security & identity**

- Accepting encrypted tokens adds to, rather than replaces, signed tokens according to the roadmap. How a site treats an unencrypted token once encryption is configured is not documented, so do not assume the site rejects it.
- Key handling for decryption (where the key is held and who rotates it) is not documented.

**Autonomy & actions**

- No change: the roadmap describes authentication only and no agent or automated action.

**Change & support**

- Authentication changes can take a few minutes to reach a site, per Learn, so test sign-in after any change and before a go-live.
- A blocked authentication protocol stops users signing in; the OpenID Connect governance control (preview) is the existing way to restrict the protocol, and it does not govern token encryption.

## Cost and licensing

Microsoft has not published licensing or pricing for this feature. The roadmap record names no licence or meter.

Power Pages as a whole is licensed on capacity: the Learn licensing FAQ describes authenticated users per website per month and anonymous users per website per month, and a pay-as-you-go authenticated user meter. Those pages do not say that encrypted tokens change the count or the charge, so treat any change as Not yet published rather than none.

The cost the sources do show is indirect: admin and maker time to reconfigure an identity provider and retest sign-in.

## Scope

- **Product and cloud:** Power Pages, Worldwide (Standard Multi-Tenant), Web, per the roadmap record. Other clouds are not listed on the record.
- **Who is affected:** sites that sign in users through an OpenID Connect provider. The roadmap says it is "Enabled for end users automatically".
- **Release phase:** the record lists Preview and General Availability, with targets of August CY2026 and December CY2026.
- **Roles and prerequisites:** not documented. Learn describes makers adding OpenID Connect providers in the design studio but names no role or prerequisite for encrypted tokens.

## Governance guidance

### Before rollout

- Identify the sites that use an OpenID Connect provider (design studio > Security > Identity providers) and list which of them need token encryption.
- Ask the identity provider owner whether the provider can encrypt ID tokens and which key and algorithm settings it expects.
- Check the Authentication settings in the Power Platform admin center to confirm OpenID Connect is allowed for the environment that hosts the site.

### At rollout

- Watch Message center and the Power Pages authentication articles for the setting and its documented defaults before enabling anything.
- Test sign-in on a non-production site first, and allow for the few minutes Learn says authentication changes can take to appear.

### After rollout

- Retest sign-in and claim mapping for existing OpenID Connect providers to confirm nothing changed.
- Record the decryption key owner and rotation process once Microsoft documents where the key is held.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether makers can configure OpenID Connect identity providers on a site</strong><br><small>Environment</small><br><small class="controls__note">General control, in preview: restricts the OpenID Connect protocol, not encrypted tokens. Microsoft has not confirmed it applies to this feature.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Products › Power Pages › Settings › Authentication <a href="https://learn.microsoft.com/power-pages/security/external-auth-control" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>OpenID Connect provider configuration on a site</strong><br><small>Site</small><br><small class="controls__note">Existing maker-side path for adding a provider; Learn documents no encrypted-token option there.</small></td><td data-label="Admin UI"><strong>Power Pages design studio</strong><br>Security › Identity providers <a href="https://learn.microsoft.com/power-pages/security/authentication/openid-provider" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Switch or setting for accepting encrypted ID tokens</strong><br><small>Site</small><br><small class="controls__note">Not documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No Microsoft page documents a setting for encrypted ID tokens at the time of writing (November 2026), so there is no row with a path or command for it.

The Power Platform admin center authentication governance control for OpenID Connect decides whether makers can configure OpenID Connect providers at all. Learn marks the protocol controls as prerelease. Blocking the protocol stops users signing in through it, so agree the change with site owners first. It does not govern token encryption.

The provider setup path is a maker-side path in the design studio; Learn gives no API for it.

## Open questions

- Where is encrypted-token support configured (a design studio setting, a site setting or automatic), and does it need any admin action? Watch the Power Pages OpenID Connect articles on Learn.
- Which encryption algorithms and key sources are supported, and where does Power Pages hold the decryption key?
- Will a site that accepts encrypted tokens still accept signed-only tokens from the same provider?
- Is there any licensing or capacity effect for the Power Pages authenticated user licence or pay-as-you-go meter? Watch Message center for the licensing statement.
- Will the August CY2026 preview target be met, given the status is still In development?

<!-- rationale
risk: Low. The roadmap says existing sign-in flows do not change, and the feature adds a stricter token option; no Microsoft page yet documents its default or any new data access.
cost: Low. Microsoft has not published feature-specific licensing; the only cost the sources show is admin time to reconfigure an identity provider, plus existing Power Pages capacity or pay-as-you-go charges.
impact: Low. Site makers and identity administrators notice it when they connect a provider that issues encrypted tokens; the roadmap says existing sign-in flows are unchanged.
-->

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [contradicted, blocker] front matter: defaultState; rationale: risk; Governance guidance: At rollout / default: The feature's default state is unknown. | Found: Enabled for end users automatically | Fix: Set defaultState to on under the standard's definition of automatic availability. State that the roadmap says it is enabled for end users automatically while the configuration and decryption mechanics remain undocumented; do not imply that automatic availability establishes a site's encryption configuration.
- [supported, minor] controls[0].ui; Governance controls; Governance guidance: Before rollout / admin-path: Authentication governance is under Power Platform admin center > Manage > Products > Power Pages > Settings > Authentication. | Found: Under Authentication, select the authentication option you want to manage.
6. Select an environment, and then select Manage.
7. Choose the sites where makers can configure the authentication option. | Fix: Complete the location with the documented targeting steps: Manage > Products > Power Pages > Settings > Authentication > OpenID Connect > environment > Manage, then choose the site targeting option. The current path reaches the correct section but stops before the option and target selection. | Source: https://learn.microsoft.com/power-pages/security/external-auth-control
- [supported, minor] Risk assessment: Data exposure; Governance guidance: After rollout / behaviour: Registration claims mapping and Login claims mapping configure mapping of provider claims to contact attributes. | Found: Set the Registration claims mapping additional site setting; for example, firstname=given_name,lastname=family_name.
4. Set the Login claims mapping additional site setting; for example, firstname=given_name,lastname=family_name. | Fix: Add https://learn.microsoft.com/power-pages/security/authentication/openid-settings#set-up-additional-claims to sources for the contact-attribute mapping claim. The cited generic provider article names the settings, while this page explicitly documents the mapping and contact-attribute qualification. | Source: https://learn.microsoft.com/power-pages/security/authentication/openid-settings
- [contradicted, minor] Open questions: final bullet / consistency: The August CY2026 preview target can still be described as a future target to be met. | Found: The preview target month has passed and the status still reads In development.
Will the August CY2026 preview target be met, given the status is still In development? | Fix: Replace the final question with: 'Has the August CY2026 preview shipped, or has Microsoft revised that target? The roadmap still says In development.'
-->
