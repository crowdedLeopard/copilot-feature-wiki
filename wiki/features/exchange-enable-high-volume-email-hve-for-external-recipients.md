---
title: "Exchange: High Volume Email can send to external recipients"
slug: "exchange-enable-high-volume-email-hve-for-external-recipients"
roadmapId: 581778
topic: "modern-work"
products: ["Exchange"]
summary: "Microsoft plans to let High Volume Email accounts in Exchange Online send transactional mail to external recipients, billed per recipient. Admins turn it on per HVE account; nothing changes until they do."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "March CY2027"
previewDate: "December CY2026"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Microsoft Learn says HVE uses Microsoft 365 pay-as-you-go billing and that HVE accounts need no Microsoft 365 licence. A rate for external recipients is not yet published."
audiences: ["m365-admin","finops","security","service-owner"]
tags: ["exchange","pay-as-you-go","high-volume-email"]
sources:
  - title: "Manage High Volume Email for Microsoft 365"
    url: "https://learn.microsoft.com/exchange/mail-flow-best-practices/high-volume-mails-m365"
    kind: "learn"
  - title: "Set-HVEAccountBillingPolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-hveaccountbillingpolicy?view=exchange-ps"
    kind: "learn"
  - title: "Set-HVEAccountSettings"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-hveaccountsettings?view=exchange-ps"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 581778"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=581778"
    kind: "roadmap"
videos: []
related: []
controls:
  - governs: "Whether an HVE account may send to external recipients"
    scope: "other"
    ui: null
    api: null
    note: "The roadmap says admins enable it per HVE account with a cmdlet; Microsoft Learn names no such setting or cmdlet yet."
  - governs: "Billing policy that lets an HVE account send and be charged"
    scope: "other"
    ui:
      surface: "Exchange admin center"
      path: "Mail flow > High Volume Email > account > Billing policies"
      docs: "https://learn.microsoft.com/exchange/mail-flow-best-practices/high-volume-mails-m365"
    api:
      kind: "powershell"
      call: "Set-HVEAccountBillingPolicy -Identity <HVE account> -BillingPolicyId <billing policy GUID>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-hveaccountbillingpolicy?view=exchange-ps"
    note: "Documented for HVE today; requires Microsoft 365 pay-as-you-go billing for the tenant. It does not limit who an account can email."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-11-20T23:20:27"
changes:
  - date: "2026-11-21"
    note: "First briefing on HVE external sending: roadmap plan, today's HVE billing and billing-policy controls, and the enabling cmdlet not yet documented."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 46 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected after verification: removed the claim that the billing policy is the only documented control, and dropped a usage-monitoring checklist step that had no controls row."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 51 statements not yet confirmed"
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 57 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 57
  confirmed: 56
  unconfirmed: 1
  contradicted: 0
  attempts: 0
  hash: "d2fda50b11fff9859775e71b49eaacc2"
---

## What's changing

High Volume Email (HVE) in Exchange Online is set to gain external sending: apps and devices will be able to deliver operational and transactional mail, such as notifications, alerts and receipts, to recipients outside the organisation. Today Microsoft Learn documents HVE as limited to internal recipients ("HVE accounts cannot be used for external email delivery."). The roadmap item says the feature is not for marketing campaigns.

Microsoft Learn does not yet describe external sending, so what follows about its behaviour is the roadmap's description. The roadmap states that apps and devices send through SMTP using HVE account authentication, that admins turn the feature on for specific HVE accounts with a cmdlet, and that built-in throttling, quotas and suppression of problem recipients help protect sending reputation. The cmdlet is not yet named in the Exchange PowerShell reference.

The roadmap item is In development. It lists a preview target of December CY2026 and a general availability target of March CY2027, for Worldwide (Standard Multi-Tenant). These are Microsoft's targets, not commitments.

## Why it matters

This turns HVE from an internal-only channel into one that can reach customers and partners, so it affects deliverability, sender reputation and spend, not only mail flow inside the tenant. The roadmap says admins enable it for specific HVE accounts, so a tenant that does nothing keeps today's internal-only behaviour; the sources do not say anything else changes on arrival.

The decision for a service owner is which applications, if any, should be allowed to email people outside the organisation, and who pays. Settle that before preview, because each enabled account both sends under your domain and runs up a per-recipient charge.

## Risk assessment

**Data exposure**
- An enabled HVE account lets an application send message content outside the tenant. Which applications and which content is a decision for the account owner; the roadmap describes the use as operational and transactional only, and Microsoft Learn does not yet document content controls for external HVE mail.

**Security & identity**
- Per the roadmap, apps authenticate with HVE account authentication. Microsoft Learn says HVE supports basic authentication and OAuth, recommends "Use OAuth authentication when possible.", and says that with Security Defaults enabled in Microsoft Entra ID basic authentication is disabled and only OAuth works. A leaked HVE credential on an account enabled for external sending would let someone send external mail on your domain.
- The roadmap names throttling, quotas and suppression of problem recipients to protect sending reputation. Their values and whether admins can adjust them are not yet published.

**Autonomy & actions**
- HVE mail is sent by applications and devices with no person approving each message, so a misconfigured or looping application could create external sends and charges until someone notices.

**Change & support**
- Support teams will field questions about external bounces and suppressed recipients. Microsoft Learn documents no suppression-list control for external HVE mail at the time of writing (November 2026).

## Cost and licensing

The roadmap states that billing will be based on usage, per external recipient. Microsoft Learn says HVE uses Microsoft 365 pay-as-you-go billing, where each HVE account must be linked to a billing policy and an Azure subscription; without a billing policy the account cannot send email. For HVE as documented today, the meter counts the "Number of expanded delivered email recipients" at "$0.000042 per one recipient (equivalent to $42 per one million recipients)". Recipients are counted after distribution list expansion.

Learn also says HVE accounts do not require Microsoft 365 licences and should not be assigned one. A rate for external recipients, and whether the figure above applies to them, is not yet published. Quota values for external sending are also not yet published. Indirect cost is admin time to create billing policies and to approve each sending application.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant) as the only cloud and Web as the platform. Microsoft Learn says HVE is supported in Microsoft 365 Worldwide (standard multi-tenant) environments and that support for additional clouds is under evaluation.

External sending is enabled per HVE account, according to the roadmap. Prerequisites that Learn documents for HVE today are Microsoft 365 pay-as-you-go billing set up for the tenant and a billing policy assigned to each account. Prerequisites specific to external sending are not yet published.

## Governance guidance

### Before rollout
- List the applications and devices that use or could use HVE accounts, and decide which, if any, have a business need to email external recipients.
- Confirm with finance that pay-as-you-go billing and a billing policy can be used for the Azure subscription that will pay for external recipients.
- Decide whether those applications can authenticate with OAuth, which Microsoft Learn recommends over basic authentication.

### At rollout
- Enable external sending only on the named HVE accounts that need it, once Microsoft names the cmdlet and parameter.
- Assign each enabled account a billing policy, ideally a separate one per application, so charges can be traced.
- Test with a small set of external recipients before moving production traffic.

### After rollout
- Re-read Microsoft's documentation when the preview opens, to confirm throttling, quota and suppression behaviour.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether an HVE account may send to external recipients</strong><br><small class="controls__note">The roadmap says admins enable it per HVE account with a cmdlet; Microsoft Learn names no such setting or cmdlet yet.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Billing policy that lets an HVE account send and be charged</strong><br><small class="controls__note">Documented for HVE today; requires Microsoft 365 pay-as-you-go billing for the tenant. It does not limit who an account can email.</small></td><td data-label="Admin UI"><strong>Exchange admin center</strong><br>Mail flow › High Volume Email › account › Billing policies <a href="https://learn.microsoft.com/exchange/mail-flow-best-practices/high-volume-mails-m365" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-HVEAccountBillingPolicy -Identity &lt;HVE account&gt; -BillingPolicyId &lt;billing policy GUID&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-hveaccountbillingpolicy?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents no setting, in the Exchange admin center or in the Exchange PowerShell reference, that turns external sending on for an HVE account; the roadmap says a cmdlet will do it. For HVE as documented today, an account without a valid billing policy cannot send email.

Set-HVEAccountSettings is documented with only a Reply-To parameter at the time of writing (November 2026), so it should not be assumed to be the enabling cmdlet.

## Open questions

- What is the cmdlet or parameter that enables external sending on an HVE account, and does an Exchange admin center setting exist? Watch the Exchange PowerShell reference and the HVE page on Microsoft Learn.
- What is the price per external recipient, and is it the same $0.000042 that the HVE page lists today?
- What are the throttling and quota values for external sending, and can admins change them?
- Do mail flow rules, data loss prevention and outbound spam controls apply to external HVE mail, and how are suppressed recipients listed and cleared?
- Will the preview in December CY2026 be open to all tenants, and does it need a billing policy?

<!-- rationale
risk: Medium. Once an HVE account is enabled, an app or device can send mail outside the organisation; the roadmap names throttling and suppression as protections, but their values are not yet published.
cost: Variable. The roadmap says billing will be per external recipient; HVE is billed through Microsoft 365 pay-as-you-go, and no external-recipient rate is yet published.
impact: Low. Admins and the owners of the apps and devices that send through HVE accounts notice it; ordinary users see no change.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: HVE mail is sent with no person approving each message. | Found: Searched: High Volume Email HVE automatic sending human approval per message approval workflow. Read HVE management and its search excerpts; automated messaging is documented, but the absence of per-message human approval is not stated. | Fix: Remove 'with no person approving each message' from the Autonomy & actions bullet. Keep the documented application/device sending and the analysis about misconfigured applications creating sends and charges.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance controls table / admin-path: Exchange admin center > Mail flow > High Volume Email > account > Billing policies reaches billing-policy assignment. | Found: In the left navigation, select Mail flow, and then select High Volume Email. ... Select an HVE account from the list to open the account details. ... When you open an account, two tabs are available – General and Billing policies. | Fix: Keep the documented path and append to controls[1].note and the corresponding rendered row note: 'On the Billing policies tab, select a different billing policy from the drop-down menu.' This is documented at https://learn.microsoft.com/exchange/mail-flow-best-practices/high-volume-mails-m365. | Source: https://learn.microsoft.com/exchange/mail-flow-best-practices/high-volume-mails-m365
-->
