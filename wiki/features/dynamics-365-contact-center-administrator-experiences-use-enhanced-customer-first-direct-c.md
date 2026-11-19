---
title: "Dynamics 365 Contact Center: customer-first direct callback with callback profiles"
slug: "dynamics-365-contact-center-administrator-experiences-use-enhanced-customer-first-direct-c"
roadmapId: 577801
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","Dynamics 365 Contact Center"]
summary: "Contact Center admins can switch on customer-first direct callback: the system rings the customer first, an AI agent can verify them, then a representative joins. Irreversible once enabled; AI agent use can consume credits."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "August CY2026"
previewDate: null
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Microsoft's pages say licensing requirements apply for each channel user in Dynamics 365 Contact Center, and that AI agent use can consume Copilot or Microsoft service credits. A price or credit rate specific to this feature is not yet published."
audiences: ["service-owner","finops","change-adoption"]
tags: ["contact-center","dynamics-365","unified-routing","copilot-studio","agents","copilot-credits","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 577801"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577801"
    kind: "roadmap"
  - title: "Configure customer-first direct callback"
    url: "https://learn.microsoft.com/dynamics365/contact-center/administer/configure-customer-first-callback"
    kind: "learn"
  - title: "Configure direct callback"
    url: "https://learn.microsoft.com/dynamics365/customer-service/administer/voice-channel-direct-callback"
    kind: "learn"
  - title: "Manage overflow of work items in queues"
    url: "https://learn.microsoft.com/dynamics365/customer-service/administer/manage-overflow"
    kind: "learn"
  - title: "System requirements for Dynamics 365 Contact Center"
    url: "https://learn.microsoft.com/dynamics365/contact-center/implement/system-requirements-contact-center"
    kind: "learn"
  - title: "Get started with Copilot Service admin center"
    url: "https://learn.microsoft.com/dynamics365/customer-service/implement/cs-admin-center"
    kind: "learn"
  - title: "Overflow Action Config (msdyn_overflowactionconfig) table/entity reference (Microsoft Dynamics 365 Customer Service)"
    url: "https://learn.microsoft.com/dynamics365/customer-service/develop/reference/entities/msdyn_overflowactionconfig"
    kind: "learn"
  - title: "Proactive Callback Profile (msdyn_proactive_callback_profile) table/entity reference (Microsoft Dynamics 365 Customer Service)"
    url: "https://learn.microsoft.com/dynamics365/customer-service/develop/reference/entities/msdyn_proactive_callback_profile"
    kind: "learn"
  - title: "Proactive Callback Config (msdyn_proactive_callback_config) table/entity reference (Microsoft Dynamics 365 Customer Service)"
    url: "https://learn.microsoft.com/dynamics365/customer-service/develop/reference/entities/msdyn_proactive_callback_config"
    kind: "learn"
  - title: "Overflow Action Config (msdyn_overflowactionconfig) table/entity reference"
    url: "https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_overflowactionconfig"
    kind: "learn"
videos: []
related: ["dynamics-365-contact-center-unified-routing-orchestrate-conversation-distribution-with-nat","copilot-credits"]
controls:
  - governs: "Complete irreversible customer-first callback onboarding, including Callback Agent provisioning"
    scope: "other"
    ui:
      surface: "Copilot Service admin center"
      path: "Routing > Callback management > Customer-first direct callback"
      docs: "https://learn.microsoft.com/dynamics365/contact-center/administer/configure-customer-first-callback"
    api: null
    note: "Enable Copilot AI agent for callback management first. Microsoft says the setting is irreversible and needs at least one callback profile. A Dataverse config record is documented; see the notes below."
  - governs: "Callback profile settings (offer message, window, dialling, retries, AI agent)"
    scope: "environment"
    ui:
      surface: "Copilot Service admin center"
      path: "Routing > Callback management > Create new direct callback profile > Dialing > Behaviors > Retry Settings"
      docs: "https://learn.microsoft.com/dynamics365/contact-center/administer/configure-customer-first-callback"
    api:
      kind: "rest"
      call: "POST /msdyn_proactive_callback_profiles"
      docs: "https://learn.microsoft.com/dynamics365/customer-service/develop/reference/entities/msdyn_proactive_callback_profile"
    note: "The earlier wizard pages hold the other profile settings. The request body can set msdyn_number_of_retries and msdyn_fallback_action."
  - governs: "Which callback profile a queue uses for each overflow condition"
    scope: "environment"
    ui:
      surface: "Copilot Service admin center"
      path: "Customer support > Queues > Advanced queues > queue > Overflow handling > Add condition-action pair > Before work items are queued > Add condition-action pair > Condition > Action > Direct callback > Callback profile"
      docs: "https://learn.microsoft.com/dynamics365/customer-service/administer/manage-overflow"
    api:
      kind: "rest"
      call: "PATCH /msdyn_overflowactionconfigs(msdyn_overflowactionconfigid)"
      docs: "https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_overflowactionconfig"
    note: "Choose Direct callback as the action on a voice queue, then select a Callback profile. The Customer Service table reference adds the msdyn_proactive_callback_profileId lookup."
confidence: "high"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-10-22T23:45:45"
changes:
  - date: "2026-11-19"
    note: "First briefing for the Launched roadmap item: how customer-first direct callback is enabled, what a callback profile sets, and the irreversible enablement step."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 61 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Correction: enablement control rescoped to other, queue overflow path completed, Copilot Service admin center roles added, and the credits-monitoring checklist step removed."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 62 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Correction: first control row rescoped to the complete onboarding sequence with the documented Dataverse config record noted; profile and queue admin paths extended."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 63 statements confirmed"
version: 3
verification:
  status: "verified"
  date: "2026-11-19"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 63
  confirmed: 63
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "6efca1c92e91727389ef56e7f854fb6b"
---

## What's changing

Customer-first direct callback changes the order of a direct callback. In the classic experience the system assigns the callback request to a representative before it calls the customer, so the representative waits while the call attempt completes. With customer-first direct callback, the system calls the customer first when the request reaches the front of the queue, and connects a representative only after the customer answers and completes any required verification.

An administrator controls the experience through callback profiles in the Copilot Service admin center. A profile covers the callback offer message, whether to ask for an alternate number, a callback offering window, duplicate prevention, a limit on active callback requests per queue, the number the call comes from, the Copilot Studio agent that engages the customer after the call connects, a fallback action, rules that delay dialling when average callback wait time exceeds a target, and retry settings for no answer, failed and answering-machine outcomes. A profile is then selected on a voice queue when Direct callback is the overflow action; one profile can be set per overflow condition for a single queue. Microsoft's page states that the system closes direct callback requests automatically after seven days.

The roadmap record lists the item as Launched, General Availability, with a target of August CY2026, for the Web platform. It lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. The roadmap describes it as enabled by admins, makers or marketers for end users.

## Why it matters

This is a new control that stays idle until an administrator enables it, but the enabling step has lasting effects. Microsoft's page says the setting is irreversible, that the first callback profile automatically applies to queues that already use direct callback as an overflow action, and that once it is enabled you cannot revert to direct callback. A contact-centre service owner should therefore decide on the first profile's settings before switching it on, not after.

The feature also introduces AI agents into outbound calls, so it touches customer experience and spend. Customers receive a call and may meet an AI agent before a person. Microsoft says AI agent use can consume Copilot or Microsoft service credits, so finance owners should expect callback volume to feed that meter.

## Risk assessment

**Data exposure**

- The AI agent you select on a profile can verify customers and collect information before a representative joins. Microsoft's page names verification and information collection as uses, so review what the chosen Copilot Studio agent asks for and where its topics send the data.
- Callback requests are identified by the customer's phone number when duplicate detection runs, so that number is used as the matching key.

**Security & identity**

- Customer verification is optional per profile: Microsoft's example is one profile that requires verification before the call connects and another that plays an informational message before the transfer. A queue given the second kind of profile connects customers to representatives without that check.
- The callback uses the number you configure on the profile. Microsoft states that if inbound and outbound use different phone platforms (for example an Azure Communication Services number in and a Microsoft Teams number out), the system does not start the callback and closes the request.

**Autonomy & actions**

- Once a request reaches the front of the queue and a representative is available, the system initiates the callback to the customer, and an AI agent can engage the customer before the transfer to a representative.
- If the agent cannot engage the customer, the profile's fallback action is either prompt and hang up, or prompt and escalate. Choose it deliberately for each queue.

**Change & support**

- Enabling cannot be undone, and existing direct callback queues are moved to the first profile. Test in a non-production environment first.
- Microsoft warns against editing or deleting the AI agent configured to take the alternate number, because changes might stop callbacks working as expected.
- Queue allocation limits active callback requests; when the limit is reached, callers continue through the standard queue experience.

## Cost and licensing

Microsoft's customer-first direct callback page says the feature uses AI agents and that AI agent use can consume available Copilot or Microsoft service credits, and that licensing and usage requirements that apply to other AI agents also apply to callback agents. The credit meter is explained in [Copilot Credits](/concepts/copilot-credits/).

The Contact Center system requirements page says specific licensing requirements apply for each channel user to use voice, chat and digital messaging, and points to the Dynamics 365 Licensing Guide. A credit rate or price specific to callback agents is not yet published. Callback profiles themselves are described as an admin configuration; the page names prerequisites of a provisioned Microsoft Copilot Studio agent, phone numbers with outbound calling enabled, and any Copilot Studio agents you plan to use for verification or information collection.

Indirect costs are admin time to design profiles and test queues.

## Scope

- **Who configures it:** administrators in the Copilot Service admin center. The roadmap says it is enabled by admins, makers or marketers for end users. The Copilot Service admin center prerequisites document System Administrator and System Customizer access to edit all site map entries; the callback page names no narrower role.
- **Who is affected:** callers to voice queues that use Direct callback as the overflow action, and the representatives who receive the callback.
- **Clouds and platform:** the roadmap lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, for the Web platform.
- **Prerequisites (Microsoft's page):** a provisioned Microsoft Copilot Studio agent in the environment, phone numbers with outbound calling enabled, and any Copilot Studio agents for verification or information collection.
- **Applies to queues:** voice queues with Direct callback chosen as an overflow condition action.

## Governance guidance

### Before rollout

- Inventory voice queues that already use Direct callback as an overflow action, because the first profile applies to them automatically when you enable the feature.
- Draft the first callback profile: offer message, offering window, duplicate prevention, queue allocation, dialling number, fallback action and retry settings.
- Confirm the dialling number is on the same phone platform as the inbound number, since a mismatch closes the callback request.
- Build and test the Copilot Studio agent that verifies customers or collects information, and ask finance owners to plan for Copilot Credits consumption.

### At rollout

- Enable **Copilot AI agent for callback management** under Routing > Callback management, wait for **Callback Agent** to provision, then turn on **Customer-first direct callback** and save the first profile.
- Select a callback profile on each voice queue whose overflow action is Direct callback.
- Place a test call to each queue and confirm the AI agent, verification and transfer to a representative behave as intended.

### After rollout

- Review profiles when staffing patterns change: the wait-time rule and queue allocation limit shape how callbacks are dialled.
- Check retry settings against callback outcomes (no answer, failed, answering machine), remembering that the minimum wait before a retry is five minutes.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Complete irreversible customer-first callback onboarding, including Callback Agent provisioning</strong><br><small class="controls__note">Enable Copilot AI agent for callback management first. Microsoft says the setting is irreversible and needs at least one callback profile. A Dataverse config record is documented; see the notes below.</small></td><td data-label="Admin UI"><strong>Copilot Service admin center</strong><br>Routing › Callback management › Customer-first direct callback <a href="https://learn.microsoft.com/dynamics365/contact-center/administer/configure-customer-first-callback" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Callback profile settings (offer message, window, dialling, retries, AI agent)</strong><br><small>Environment</small><br><small class="controls__note">The earlier wizard pages hold the other profile settings. The request body can set msdyn_number_of_retries and msdyn_fallback_action.</small></td><td data-label="Admin UI"><strong>Copilot Service admin center</strong><br>Routing › Callback management › Create new direct callback profile › Dialing › Behaviors › Retry Settings <a href="https://learn.microsoft.com/dynamics365/contact-center/administer/configure-customer-first-callback" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST /msdyn_proactive_callback_profiles</code> <a href="https://learn.microsoft.com/dynamics365/customer-service/develop/reference/entities/msdyn_proactive_callback_profile" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which callback profile a queue uses for each overflow condition</strong><br><small>Environment</small><br><small class="controls__note">Choose Direct callback as the action on a voice queue, then select a Callback profile. The Customer Service table reference adds the msdyn_proactive_callback_profileId lookup.</small></td><td data-label="Admin UI"><strong>Copilot Service admin center</strong><br>Customer support › Queues › Advanced queues › queue › Overflow handling › Add condition-action pair › Before work items are queued › Add condition-action pair › Condition › Action › Direct callback › Callback profile <a href="https://learn.microsoft.com/dynamics365/customer-service/administer/manage-overflow" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>PATCH /msdyn_overflowactionconfigs(msdyn_overflowactionconfigid)</code> <a href="https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_overflowactionconfig" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Enabling is a one-way step, so the first row is a decision more than a setting. The callback profile is the unit of configuration: the profile row sets the behaviour, and the overflow row attaches it to a queue. One profile can be set per overflow condition for a single queue. Avoid editing or deleting the AI agent configured for alternate-number capture.

For the first row, [the Proactive Callback Config table reference](https://learn.microsoft.com/dynamics365/customer-service/develop/reference/entities/msdyn_proactive_callback_config) documents PATCH /msdyn_proactive_callback_configs(msdyn_proactive_callback_configid), with writable msdyn_enabled and msdyn_callback_type (192350000 = Direct Callback). As of November 2026, the pages checked do not map this record update to the complete irreversible onboarding sequence. Do not treat it as a documented way to reverse enablement.

## Open questions

- Which Dynamics 365 or Copilot Studio licence, and which credit rate, applies to the callback agents? Watch the Contact Center licensing pages and the Copilot Credits billing page.
- Is a narrower role documented specifically for callback management? Check the Copilot Service admin center permissions pages.
- Can Copilot Credits spending policies cap callback agent use? Confirm on the Copilot Credits cost management pages.
- Does the roadmap's GCC, GCC High and DoD listing mean every callback capability is available in those clouds? Watch the Contact Center international availability page.

<!-- rationale
risk: Medium. Nothing starts until an admin enables it, but enabling cannot be undone, and it places outbound AI-agent calls to customers and applies the first callback profile to queues that already use direct callback.
cost: Variable. Microsoft's page says AI agent use can consume available Copilot or Microsoft service credits (the Copilot Credits meter); a rate specific to callback agents is not yet published.
impact: Medium. Callers on voice queues that use direct callback, and the representatives who take those calls, notice the changed callback flow; other users are unaffected.
-->
