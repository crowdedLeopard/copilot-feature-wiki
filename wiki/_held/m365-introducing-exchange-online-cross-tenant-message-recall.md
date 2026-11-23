---
title: "Exchange Online: cross-tenant message recall, controlled by an allow list"
slug: "m365-introducing-exchange-online-cross-tenant-message-recall"
roadmapId: 561330
topic: "modern-work"
products: ["Microsoft 365"]
summary: "Exchange Online message recall now works between Microsoft 365 tenants. It is off until the receiving tenant's admin turns it on and allow-lists the sender's tenant, so no action is needed unless you want it."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "August CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "The Exchange Online service description says each user who accesses Exchange Online must be assigned a subscription plan. No licence or meter specific to cross-tenant recall is published; the recall page names a service plan only for recalling encrypted messages."
audiences: ["m365-admin","security","compliance"]
tags: ["exchange","outlook","cross-tenant","tenant-to-tenant","gcc","gcc-high","dod"]
sources:
  - title: "Work with cloud-based message recall"
    url: "https://learn.microsoft.com/exchange/mail-flow-best-practices/work-with-cloud-based-message-recall"
    kind: "learn"
  - title: "Cross-Tenant Message Recall in Exchange Online"
    url: "https://techcommunity.microsoft.com/blog/exchange/cross-tenant-message-recall-in-exchange-online/4535800"
    kind: "blog"
  - title: "Exchange Online service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/exchange-online-service-description/exchange-online-service-description"
    kind: "learn"
  - title: "Microsoft 365: Introducing Exchange Online Cross-tenant Message Recall"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=561330"
    kind: "roadmap"
videos: []
related: ["ediscovery"]
controls:
  - governs: "Whether the receiving tenant honours cross-tenant recalls at all"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CrossTenantRecallConfiguration -CrossTenantRecallEnabled $true"
      docs: "https://learn.microsoft.com/exchange/mail-flow-best-practices/work-with-cloud-based-message-recall"
    note: "Learn gives $False as the default. Role required is not stated on the page."
  - governs: "Which external tenants may recall messages from your users' mailboxes"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CrossTenantRecallConfiguration -AllowedSenderTenantIds @{Add=\"<tenantId 1>\",\"<tenantId 2>\"}"
      docs: "https://learn.microsoft.com/exchange/mail-flow-best-practices/work-with-cloud-based-message-recall"
    note: "Entries are tenant IDs; the same parameter takes Remove. The sending tenant's admin can retrieve the ID with Get-ConnectionInformation."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-09-14T23:03:47"
changes:
  - date: "2026-11-23"
    note: "First briefing for this item: cross-tenant recall is off by default and controlled by the receiving tenant's allow list, set with Set-CrossTenantRecallConfiguration."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 50 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 50
  confirmed: 48
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "0c50e6bbddde5fb6ce166af70cb5f754"
---

## What's changing

Exchange Online message recall, which until now worked inside one tenant, can now recall messages sent to recipients in another Microsoft 365 tenant. The roadmap item states: "Today, you can recall messages only within your organization. Cross-tenant recall will let you recall messages sent to other organizations that add your tenant to their recall allow list."

Control sits with the receiving tenant. Microsoft's recall page says a tenant admin can add other Microsoft 365 tenants to an allow list, and that a cross-tenant recall is only honoured when the receiving tenant's admin has explicitly allow-listed the sender's tenant. If the sender's tenant is not on the list, the recall fails and the sender sees in the recall status report that the message can't be recalled across organisations. Once a tenant is on the list, its senders recall as they would inside their own tenant, and the recall is processed like a standard recall against the recipient's mailbox.

The capability is configured with Exchange Online PowerShell, and the Learn page gives it as off by default. The Exchange team's blog post of July 2026 (updated September 2026) says the same: no cross-tenant recall occurs until an admin adds at least one tenant to the allow list. If the receiving tenant has enabled recipient recall notifications, the blog says those apply to cross-tenant recalls as well.

The roadmap item is Launched, with a target of August CY2026 and the release phase General Availability. The blog post says deployment started in mid-August and was due to complete by mid-September.

## Why it matters

This is a new trust decision for the receiving tenant. Allow-listing a partner means that partner's senders can ask Exchange to delete messages they sent from your users' mailboxes. For partners, subsidiaries and affiliated organisations that already work closely, that is the purpose; for anyone else it is exposure you did not have before.

Microsoft documents the feature as disabled by default, so if nobody acts, the documented behaviour is that cross-tenant recalls fail. The decision is yours to take, not one that arrives with a deadline. Take it deliberately: agree who is trusted, record why, and tell the teams (records, legal, security) whose mail could be removed.

## Risk assessment

**Data exposure**
- Once a sender's tenant is allow-listed, its senders can recall messages they sent to your users. The Learn page says the recall agent attempts to hard-delete the original message from recipient mailboxes, so content your users received can disappear. The allow list (control row 2) decides which tenants can do this.
- For mailboxes with a Litigation Hold or In-Place Hold, Learn says the recalled message shows up in eDiscovery.

**Security & identity**
- The allow list is made of tenant IDs. An ID entered wrongly would trust a different organisation, so have each partner's admin supply their own tenant ID and check it before adding it.
- Allow-listing governs inbound recalls only; Learn says each organisation decides independently which external tenants it trusts.

**Autonomy & actions**
- After allow-listing, a sender in the other tenant starts each recall. Learn says the system continues to recall for up to 24 hours, so a recall can complete after the sender has moved on.
- Learn says recipient notifications are optional, and the blog says that if enabled they apply to cross-tenant recalls. Without them, recipients may not see that a message was removed.

**Change & support**
- Learn says recalls don't show in the mailbox audit logs "at this time", so plan to rely on message trace and the sender's recall report rather than audit to explain a disappeared message.
- Learn says you can't recall messages sent to the on-premises Exchange environment from cloud mailboxes in hybrid setups, and that recall works between two tenants in Exchange Online. Expect partners with on-premises mailboxes to see failures.

## Cost and licensing

**Licence.** The Learn recall page and the Exchange Online service description name no licence or meter for cross-tenant recall. The service description says each user who accesses Exchange Online must be assigned to a subscription plan, and the recall page names the Premium Encryption in Office 365 service plan for recalling encrypted messages. A price or licence specific to cross-tenant recall is not yet published.

**Meter.** No meter is documented for this feature at the time of writing (November 2026).

**Indirect cost.** Admin time to run the PowerShell, agree trust with each partner and brief users and records teams. The roadmap record lists no charge and no add-on.

## Scope

**Who configures it.** The receiving tenant's administrator, using Exchange Online PowerShell. The sending tenant's administrator is needed only to supply the tenant ID, which Learn says they can retrieve with `Get-ConnectionInformation | fl TenantID`. The role required for the cmdlet is not stated on the Learn page.

**Clouds and platforms.** The roadmap record lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, and the platforms Android, Desktop, iOS, Mac and Web. The blog adds Microsoft 365 operated by 21Vianet to its rollout list. Learn lists Classic Outlook, New Outlook, Outlook on the web, Outlook for Mac and Outlook for Android/iOS as places a recall can be triggered.

**Limits.** Learn says cross-tenant recall works between two tenants in Exchange Online, not over the internet or across organisations outside the Exchange Online boundary, and not to on-premises mailboxes. It also says recall doesn't work in Outlook for Windows in Online mode or with multiple Exchange accounts in the profile.

## Governance guidance

### Before rollout
- List the partner organisations whose senders you would let recall mail from your users, and agree trust with each one's administrators.
- Ask each partner's administrator for their tenant ID, which they can retrieve with `Get-ConnectionInformation | fl TenantID`, and keep a record of who approved each entry.
- Brief records, legal and security teams that an allow-listed partner's recall can remove a message from your users' mailboxes, and that held mailboxes keep recalled messages visible to eDiscovery.

### At rollout
- Turn cross-tenant recall on for your tenant (control row 1) only when you have an entry ready to add.
- Add one partner's tenant ID to the allow list (control row 2) and test with a pair of test mailboxes before adding others.
- Tell users in your tenant that recalls from allow-listed partners can remove messages, and whether you have enabled recipient recall notifications.

### After rollout
- Review the allow list on a set schedule and remove tenant IDs for partners you no longer work with (control row 2).
- Use message trace to investigate a disputed recall, because Learn says recall reports are built from message trace data and that recalls don't show in mailbox audit logs.
- Check Message center and the Learn recall page for changes to cross-tenant recall.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the receiving tenant honours cross-tenant recalls at all</strong><br><small>Tenant</small><br><small class="controls__note">Learn gives $False as the default. Role required is not stated on the page.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CrossTenantRecallConfiguration -CrossTenantRecallEnabled $true</code> <a href="https://learn.microsoft.com/exchange/mail-flow-best-practices/work-with-cloud-based-message-recall" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which external tenants may recall messages from your users' mailboxes</strong><br><small>Tenant</small><br><small class="controls__note">Entries are tenant IDs; the same parameter takes Remove. The sending tenant's admin can retrieve the ID with Get-ConnectionInformation.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CrossTenantRecallConfiguration -AllowedSenderTenantIds @{Add=&quot;&lt;tenantId 1&gt;&quot;,&quot;&lt;tenantId 2&gt;&quot;}</code> <a href="https://learn.microsoft.com/exchange/mail-flow-best-practices/work-with-cloud-based-message-recall" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Both controls are parameters of `Set-CrossTenantRecallConfiguration` and sit with the receiving tenant. Learn documents Exchange Online PowerShell as the way to configure them; the page gives no Exchange admin center path for either. The role needed to run the cmdlet is not stated on that page.

The two controls work together: Learn gives the enable switch as off by default, and the blog says no cross-tenant recall occurs until an admin adds at least one tenant to the allow list. The allow list holds tenant IDs, and entries are added or removed in the same parameter.

The existing recall settings for your own tenant (enable or disable, recall of read messages, recipient notifications, maximum recallable message age) are described on the same Learn page. They are separate settings from these two; how they interact with cross-tenant recall is not described there.

## Open questions

- Which Exchange admin role is needed to run `Set-CrossTenantRecallConfiguration`, and will a settings page appear in the Exchange admin center? Watch the Learn recall page and the Exchange cmdlet reference.
- Do the receiving tenant's existing recall settings, such as the maximum recallable message age, also decide whether a cross-tenant recall is honoured? Watch the Learn recall page.
- Does cross-tenant recall work between a commercial tenant and a GCC High or DoD tenant, given that the roadmap lists all four clouds? Watch the Exchange team blog and Message center.
- Will cross-tenant recalls become visible in an audit log, given that Learn says recalls don't show in the mailbox audit logs at this time?

<!-- rationale
risk: Low. Microsoft's pages say cross-tenant recall is disabled by default and is honoured only for tenants the receiving admin has allow-listed; the exposure arises once you add a tenant, because its senders can then delete mail from your users' mailboxes.
cost: Low. The recall page and the Exchange Online service description publish no separate licence or meter for recall; the cost known is admin time to agree trust with partners and brief users.
impact: Low. Admins who opt in and the users of allow-listed partner tenants notice it; users in tenants that do nothing see no change on the documented default.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Governance controls: final paragraph / absence: How existing recall settings interact with cross-tenant recall is not described. | Found: the recall is honored and processed like a standard recall against the Contoso recipient’s mailbox. Admins can control several settings: Enable or disable the new cloud recall feature. Whether to recall messages that were already read. Optional recall notifications for recipients: | Fix: Remove 'They are separate settings from these two; how they interact with cross-tenant recall is not described there.' The general cloud recall controls are documented on this Learn page, and the already-cited blog explicitly states that enabled receiving-tenant recipient notifications apply to cross-tenant recalls. Keep the narrower open question about whose maximum recallable message age controls an inbound recall. | Source: https://learn.microsoft.com/exchange/mail-flow-best-practices/work-with-cloud-based-message-recall
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: After rollout / consistency: The message trace investigation step names a governance control without a corresponding controls-table row. | Found: Use message trace to investigate a disputed recall ... The controls table contains only cross-tenant recall enablement and the allowed sender tenant list. | Fix: The 'Use message trace to investigate a disputed recall' checklist step has no corresponding controls-table row. Remove that checklist bullet; the supported message trace advice already remains in Risk assessment.
-->
