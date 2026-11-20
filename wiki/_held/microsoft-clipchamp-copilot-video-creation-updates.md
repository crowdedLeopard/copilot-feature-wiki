---
title: "Microsoft Clipchamp: Copilot video creation in Video Hub, billed in Copilot Credits"
slug: "microsoft-clipchamp-copilot-video-creation-updates"
roadmapId: 570963
topic: "m365-copilot"
products: ["Microsoft Clipchamp","Microsoft Copilot (Microsoft 365)"]
summary: "Copilot can generate and refine videos from prompts, documents or Work IQ context in Clipchamp Video Hub. Each video uses Copilot Credits, and access needs Anthropic models and a spending policy that includes it."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "December CY2026"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Microsoft's notice MC1560920 says video creation is a usage-based billing feature that consumes Copilot Credits, billed through Copilot Credits usage-based billing in the Microsoft 365 admin center. A credit rate for this feature is not yet published."
audiences: ["m365-admin","finops","security","change-adoption"]
tags: ["clipchamp","m365-copilot","copilot-credits","usage-based-billing","spending-policies","work-iq","frontier-program","sensitivity-labels"]
sources:
  - title: "Microsoft 365 Roadmap 570963"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570963"
    kind: "roadmap"
  - title: "MC1560920: Copilot video creation in Clipchamp Video Hub is now live in Frontier Public"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1560920"
    kind: "message-center"
  - title: "Understand usage-based billing and cost management for Copilot Credits"
    url: "https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits"
    kind: "learn"
  - title: "Managing AI experiences enabled by usage-based billing"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    kind: "learn"
  - title: "Set up usage-based billing for Copilot Credits"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup"
    kind: "learn"
  - title: "Update spendingPolicy"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    kind: "learn"
  - title: "Claude models from Anthropic in Microsoft Online Services"
    url: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor"
    kind: "learn"
  - title: "Add watermarks to content generated or altered by using AI in Microsoft 365"
    url: "https://learn.microsoft.com/copilot/manage/watermarks"
    kind: "learn"
  - title: "Current features and upcoming roadmap for Clipchamp in Microsoft 365"
    url: "https://learn.microsoft.com/clipchamp/features-clipchamp"
    kind: "learn"
videos: []
related: ["spending-policies","copilot-credits","work-iq","sensitivity-labels"]
controls:
  - governs: "Spending policy that covers Copilot video creation, its users and monthly credit limits"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > + Add spending policy > Select agents and services"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    api:
      kind: "graph"
      call: "PATCH /beta/copilot/costManagement/spendingPolicies/{id}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    note: "Beta API. The request body sets periodLimit and perUserLimit. Creating policies needs Global administrator or Billing administrator; AI administrator and License administrator can edit."
  - governs: "Which users can use Anthropic models, which Microsoft's notice says video creation needs"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > View all > AI providers operating as Microsoft subprocessors > Anthropic"
      docs: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor"
    api: null
    note: "AI Administrator or Global Administrator role. Provider-level setting: it applies to Anthropic models across Copilot experiences, not only video creation."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-09-28T22:58:08"
changes:
  - date: "2026-11-20"
    note: "First briefing for this roadmap item, including Microsoft's notice MC1560920 on the Frontier public preview and the Copilot Credits billing model."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 72 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-20"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 72
  confirmed: 67
  unconfirmed: 0
  contradicted: 5
  attempts: 1
  hash: "d1057ee8c1b4622ff8b9ef33d584b565"
---

## What's changing

Copilot video creation adds an agentic way to make videos in Clipchamp Video Hub. A user describes the topic, audience, tone and length, or starts from a Word document, PowerPoint presentation, images, video or PDF in OneDrive, or from work context through Work IQ. They preview the video in chat, ask for changes in conversation (for example a shorter version, a formal tone or a translation) and export the result as an MP4. That description is from the roadmap item and Microsoft's notice MC1560920.

Microsoft's notice says this is a usage-based billing feature: each video and each refinement uses Copilot Credits. To enable access, the notice says admins must enable Anthropic models and configure Copilot Credits spending policies for the intended users. It tells admins to turn on Copilot video creation in a spending policy that includes the right users, in Copilot > Cost management in the Microsoft 365 admin center. Users then open Clipchamp Video Hub, go to Create video in the left menu, describe the video, preview and refine it, and select Export.

The notice lists limits at preview. Videos created from documents with a sensitivity label above General can be viewed but not downloaded yet. Editing individual scenes or elements in Clipchamp is not supported yet. Supported sources are Work IQ, web search, Word, PowerPoint, images (up to 3 per prompt), videos (under 50 MB) and PDF. Creation can take time, requests can fail or time out, the browser tab must stay open, and only one session at a time is supported.

The roadmap item lists the status as In development, with a preview target of December CY2026 and a general availability target of January CY2027, for Worldwide (Standard Multi-Tenant) on the web. The notice, published 2026-11-20, says public preview in Frontier public has been available since November 17, 2026, and gives general availability (Worldwide) as expected in February, with timing subject to final confirmation. The two sources differ on the general availability month, so treat both as targets. Microsoft Learn lists Clipchamp: Copilot video creation among the services managed by usage-based billing, but its Clipchamp features page does not describe the feature, so what this page says about behaviour comes from the roadmap item and the notice.

## Why it matters

This is a new consumer of Copilot Credits that turns work content into shareable video, so it touches both spend and data. Spend is metered per video and per refinement, which makes it harder to forecast than a seat licence. Content is whatever the user can already open in OneDrive or through Work IQ, so existing oversharing or loose permissions shape what a video can draw on.

The notice says nothing happens until an admin enables Anthropic models and includes the feature in a spending policy, so doing nothing means the capability does not reach users. Microsoft's notice recommends confirming Anthropic models and updating spending policies before enabling, and reviewing internal readiness guidance for admins and support teams. Plan the pilot group, the credit limit and the support message together, because the preview limits (failed or slow generations, no scene editing, labelled files that cannot be downloaded) will reach your help desk first.

## Risk assessment

**Data exposure**

- Videos can be based on OneDrive files or Work IQ context. Microsoft's notice says videos only draw on work content the user already has access to, so the exposure follows existing permissions: fix oversharing in the source libraries before widening access.
- The notice says that, at preview, videos created from documents with a sensitivity label above General can be viewed but not downloaded. A viewer can still watch the content in the chat. Microsoft's notice does not say how other label settings apply, so confirm before relying on labels as the control.
- The notice requires Anthropic models. Microsoft Learn's Anthropic page says Claude models in offerings such as Microsoft Copilot are currently excluded from the EU Data Boundary, and that tenants in the EU Data Boundary and the UK have them disabled by default. Whether that page's statement covers video creation is not stated; confirm before enabling in those regions.

**Security & identity**

- Access has two gates: the Anthropic setting (AI Administrator or Global Administrator role, per Learn) and the spending policy that includes the feature. Both can be scoped to users or groups, so pilot with a security group.
- Spending policy changes by role: Learn says Global administrator and Billing administrator can add and change billing methods, and AI administrator and License administrator can edit policies but not create them.

**Autonomy & actions**

- Microsoft's notice describes a user-driven loop of prompt, preview, refine and export to MP4, and describes no action that runs without the user. The exported file is the output that can leave Video Hub, so include video sharing in your communication.

**Change & support**

- Expect support questions on failed or timed-out generations, an unsupported second session, scene editing and label-related download blocks, all listed by the notice as preview limits.
- Spend can surprise teams: each refinement uses credits as well as each new video. A monthly user limit is the control for that; see the controls table.

## Cost and licensing

Microsoft's notice MC1560920 says each video and each refinement uses Copilot Credits, billed through Copilot Credits usage-based billing in the Microsoft 365 admin center. Microsoft Learn's usage-based billing overview lists Clipchamp: Copilot video creation among the services managed by usage-based billing. That services table marks some other services as requiring a Copilot licence and carries no licence note for the Clipchamp row, and neither it nor the notice names a seat licence for this feature.

A credit rate for this feature is not yet published. Consumption appears in Copilot cost management reporting, and the Consumption tab breaks usage down by spending policy, user, group, agent or service.

Limits come from the spending policy. Learn says a limited monthly budget limits the credits the policy can spend each month, and that when users hit the limit they lose access to agents and services for the rest of the month until credits reset on the first of the month. For billing, Learn says that when credits run out for the selected subscription, usage automatically continues on a pay-as-you-go basis, so check the policy's billing method as well as its limit. Learn also says Auto-apply new services is selected by default for spending policies.

Indirect costs are admin time to set the policy and Anthropic setting, and support time during preview.

## Scope

Users: those covered by a spending policy that includes Copilot video creation, per Microsoft's notice. Admin roles: AI Administrator or Global Administrator for the Anthropic setting; Global administrator or Billing administrator to create policies and set billing methods (Learn).

Clouds and platforms: the roadmap item lists Worldwide (Standard Multi-Tenant) and the web. Learn's Anthropic page says Claude models are not available to federal customers in GCC or to any customers in GCC High and DoD, which is consistent with the record listing only Worldwide.

Rollout: the notice says public preview in Frontier public from November 17, 2026, with general availability (Worldwide) expected in February; the roadmap targets December CY2026 for preview and January CY2027 for general availability. Prerequisites in the notice: Anthropic models enabled, and the feature added to a spending policy. Users reach it at the Video Hub address the notice gives, under Create video.

## Governance guidance

### Before rollout

- Confirm that Anthropic is enabled as a Microsoft subprocessor for the users you plan to pilot, using the AI providers operating as Microsoft subprocessors setting (AI Administrator or Global Administrator).
- Decide the pilot group as a Microsoft Entra security group, because Learn says specific users are supported in spending policies through security groups.
- Create or edit a spending policy that includes Copilot video creation, and set a monthly policy limit and a per-user limit for the pilot.
- Check the policy's Auto-apply new services setting and billing method, so the feature is only covered where you intend and overage goes where finance expects.
- Check oversharing on the OneDrive and SharePoint content the pilot users are likely to use as sources.

### At rollout

- Tell pilot users the preview limits from Microsoft's notice: keep the tab open, one session at a time, no scene editing, labelled files above General can be viewed but not downloaded.
- Test an exported video from a labelled document and from a Work IQ prompt to see what the exported MP4 carries, including whether the watermark appears.
- Brief the help desk on failed and timed-out generations.

### After rollout

- Review the Consumption tab in Copilot > Cost management by policy and user weekly during preview, and adjust the limits.
- Revisit the spending policy when the general availability date is confirmed, since the roadmap and the notice differ on the month.
- Re-read the Anthropic and spending policy pages for changes before widening the group.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Spending policy that covers Copilot video creation, its users and monthly credit limits</strong><br><small>Group</small><br><small class="controls__note">Beta API. The request body sets periodLimit and perUserLimit. Creating policies needs Global administrator or Billing administrator; AI administrator and License administrator can edit.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › + Add spending policy › Select agents and services <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/costManagement/spendingPolicies/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users can use Anthropic models, which Microsoft's notice says video creation needs</strong><br><small>Group</small><br><small class="controls__note">AI Administrator or Global Administrator role. Provider-level setting: it applies to Anthropic models across Copilot experiences, not only video creation.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › AI providers operating as Microsoft subprocessors › Anthropic <a href="https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The two controls in the table work together: a user can only create videos if the Anthropic setting covers them and a spending policy that includes the feature covers them, per Microsoft's notice. Removing either one stops creation for the affected users, and Microsoft's notice says that if Anthropic models are turned off, video creation isn't available.

The spending policy limit is a use limit, not a reservation. Learn says spending policies are limit-based controls and don't reserve or allocate Copilot Credits. Learn's page for the update call lists displayName, periodLimit, perUserLimit and billingMethods as updatable, so the API row covers limits and billing and not the choice of services; the choice of services is made in the portal steps. The Graph operation is a beta API, which Learn says is subject to change.

Watermark: Microsoft's notice says exported videos carry a Made with AI watermark that admins can turn off. Learn's watermark page says a watermark is added to a video generated with Clipchamp, that you need to set the Cloud Policy policy named on that page to Enabled for the visual watermark to be added, and that the policy is available only in Cloud Policy service for Microsoft 365. The sources differ on whether the watermark is on by default, so test an export in your tenant. This page does not list a row for it because Learn's watermark page does not state that this policy governs the video creation experience in the notice.

## Open questions

- What is the Copilot Credit rate for one video and for one refinement? Watch the Copilot Credits pages on Microsoft Learn and Message center.
- Does Auto-apply new services add Copilot video creation to existing spending policies without an admin choosing it, given that the notice says admins turn it on in a spending policy? Watch the usage-based billing pages on Microsoft Learn.
- Does the EU Data Boundary exclusion Learn states for Claude models apply to video creation, and what regional availability applies at general availability? Watch Message center.
- Which setting controls the Made with AI watermark for this feature: the Cloud Policy policy Learn describes, or a separate admin setting the notice refers to?
- Is general availability January CY2027 (roadmap) or February (notice), and what changes between preview and general availability?

<!-- rationale
risk: Medium. Videos draw on work content through Work IQ and OneDrive files and need Anthropic models enabled, but Microsoft's notice says access starts only when an admin enables them and covers the feature in a spending policy.
cost: Variable. Microsoft's notice MC1560920 says each video and each refinement uses Copilot Credits under usage-based billing; a credit rate for this feature is not yet published.
impact: Low. Per Microsoft's notice, only users covered by a spending policy that includes the feature can create videos, so most users will not notice it until an admin sets that up.
-->

<!-- verifier-findings (2026-11-20, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: defaultState; Why it matters; rationales: risk, impact; Open questions / default: Admin-opt-in means doing nothing prevents access until an administrator specifically enables this feature in a spending policy. | Found: Spending policies can automatically apply to future supported Microsoft Copilot services and agents. ... No action is required when you want future supported services and agents to inherit the policy. | Fix: Set defaultState to unknown and replace the unconditional no-action claims with: 'The notice requires Anthropic access and a spending policy covering the feature. Learn says Auto-apply new services can automatically cover newly supported services, and Anthropic is already on by default for most commercial tenants outside EU/EFTA and UK; do not assume fresh enablement is required.' Retain the notice's prerequisites, but replace the Auto-apply open question with the documented automatic-coverage rule. Apply this qualification to the risk and impact rationales too. Sources: https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits and https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor. | Source: https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits
- [contradicted, blocker] Risk assessment: Data exposure; Open questions: EU Data Boundary / applicability: It is not stated whether the Claude EU Data Boundary exclusion covers video creation. | Found: Claude models deployed in Microsoft offerings such as Microsoft Copilot, Researcher, Copilot Studio, Power Platform, and Copilot in Microsoft 365 apps are currently excluded from the EU Data Boundary | Fix: Remove 'Whether that page's statement covers video creation is not stated' and the corresponding EU Data Boundary applicability question. Replace the caveat with: 'The exclusion is stated for Claude models deployed in Microsoft offerings; the notice requires Anthropic models for this feature.' The list introduced by 'such as' is not an exhaustive feature list. Keep the separately open question about regional availability at general availability. | Source: https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor
- [contradicted, blocker] controls[0].ui; Governance controls: first table row / admin-path: The identity-based spending-policy path is Copilot > Cost Management > Configuration > + Add spending policy > Select agents and services. | Found: Create and name the policy and then choose Identity as the scope. Use this option when you need to manage usage by users or groups for a supported service. | Fix: Replace the path in front matter and the rendered table with 'Copilot > Cost Management > Configuration > + Add spending policy > Define the policy scope > Identity > Select agents and services'. The Identity scope is a required workflow choice, not merely an omitted heading; names, group selection and Next can remain omitted under the verification standard. Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits
- [contradicted, blocker] Governance controls: Watermark; Open questions: watermark setting / applicability: Learn does not state that its Cloud Policy watermark control governs the video creation experience in the notice. | Found: A policy setting controls your organization's ability to add a visual or audio watermark to video and audio content that your users generate or alter by using AI in Microsoft 365. ... A visual watermark is added to a video generated with Clipchamp. | Fix: Replace the sentence denying documented applicability with: 'Learn documents the Include a watermark when content from Microsoft 365 is generated or altered by AI policy for AI-generated video and audio in Microsoft 365, explicitly including Clipchamp video. The notice describes a Made with AI watermark, while Learn says its policy must be Enabled; confirm the differing default descriptions in your tenant.' Replace the open question about whether the policy applies with a question about the differing default descriptions. Do not add a control row as part of this correction. Source: https://learn.microsoft.com/copilot/manage/watermarks. | Source: https://learn.microsoft.com/copilot/manage/watermarks
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance controls: second table row / admin-path: The Anthropic access path is Copilot > Settings > View all > AI providers operating as Microsoft subprocessors > Anthropic. | Found: under Available subprocessors for your organization, select Anthropic, and Save. ... Under Choose who can access Anthropic models for Copilot and generative AI experiences, select your users or groups and Save. | Fix: Expand the front matter and rendered path to 'Copilot > Settings > View all > AI providers operating as Microsoft subprocessors > Available subprocessors for your organization > Anthropic > Choose who can access Anthropic models for Copilot and generative AI experiences > users or groups'. The existing route reaches the correct control page but omits a heading and the access-selection section. Source: https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor. | Source: https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor
- [contradicted, minor] Governance guidance: After rollout, first bullet / consistency: The checklist directs administrators to review the Consumption tab, but the controls table has no reporting control row. | Found: Review the Consumption tab in Copilot > Cost management by policy and user weekly during preview ... Table rows: Spending policy ...; Which users can use Anthropic models | Fix: Remove the checklist's instruction to review the Consumption tab, retaining 'Adjust policy and per-user limits based on pilot usage.' The reporting step has no corresponding control row; do not add a row in this correction.
-->
