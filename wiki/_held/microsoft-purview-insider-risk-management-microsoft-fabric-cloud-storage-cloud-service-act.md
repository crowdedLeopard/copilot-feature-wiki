---
title: "Microsoft Purview Insider Risk Management: cloud storage, cloud service and Microsoft Fabric indicators as Data leaks policy triggers"
slug: "microsoft-purview-insider-risk-management-microsoft-fabric-cloud-storage-cloud-service-act"
roadmapId: 560399
topic: "governance"
products: ["Microsoft Purview"]
summary: "Data leaks policies can use Box, Dropbox, Google Drive, AWS, Azure and Microsoft Fabric activity to bring users into scope. Nothing changes until an admin selects these indicators, which need pay-as-you-go billing."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "July CY2026"
previewDate: "June CY2026"
risk: "low"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Insider Risk Management is included in Microsoft 365 E5/A5/G5 and the Purview suites listed in the Microsoft Purview service description. The cloud storage, cloud service and Fabric indicators also need pay-as-you-go billing, metered in data security processing units."
audiences: ["compliance","security","finops"]
tags: ["insider-risk-management","purview","triggers","microsoft-fabric","power-bi","defender-for-cloud-apps","multicloud","pay-as-you-go"]
sources:
  - title: "Microsoft 365 Roadmap item 560399"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=560399"
    kind: "roadmap"
  - title: "Configure policy indicators in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators"
    kind: "learn"
  - title: "Get started with Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-configure"
    kind: "learn"
  - title: "Learn about Insider Risk Management policy templates"
    url: "https://learn.microsoft.com/purview/insider-risk-management-policy-templates"
    kind: "learn"
  - title: "Learn about Microsoft Purview billing models"
    url: "https://learn.microsoft.com/purview/purview-billing-models"
    kind: "learn"
  - title: "Enable Microsoft Purview pay-as-you-go features for new customers"
    url: "https://learn.microsoft.com/purview/purview-payg-subscription-based-enablement"
    kind: "learn"
  - title: "Connect apps to get visibility and control with Microsoft Defender for Cloud Apps"
    url: "https://learn.microsoft.com/defender-cloud-apps/enable-instant-visibility-protection-and-governance-actions-for-your-apps"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Investigate insider risk threats in the Microsoft Defender portal"
    url: "https://learn.microsoft.com/defender-xdr/irm-investigate-alerts-defender"
    kind: "learn"
  - title: "Which third-party cloud apps are connected to Defender for Cloud Apps, as cloud storage and service indicators need (Microsoft Defender portal)"
    url: "https://learn.microsoft.com/defender-cloud-apps/protect-dropbox"
    kind: "learn"
  - title: "Who can configure Insider Risk Management policies and settings (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    kind: "learn"
  - title: "Who can configure Insider Risk Management policies and settings (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
  - title: "Pay-as-you-go processing used by Insider Risk Management indicators (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/insider-risk-management-reports"
    kind: "learn"
videos: []
related: ["insider-risk-management","microsoft-purview-compliance-portal-insider-risk-management-microsoft-fabric-risk-indicato","microsoft-purview-compliance-portal-insider-risk-management-support-for-multicloud-environ","microsoft-purview-compliance-portal-insider-risk-management-generative-ai-apps-activities","role-groups"]
controls:
  - governs: "Which cloud storage, cloud service and Microsoft Fabric indicators are available to insider risk policies"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Insider Risk Management > Settings > Policy indicators"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators"
    api: null
    note: "Applies to all insider risk policies. Needs the Insider Risk Management or Insider Risk Management Admins role group."
  - governs: "Which indicators bring users into scope of a Data leaks policy"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Insider Risk Management > Policies > Create policy > Policy template > Data leaks > Triggers for this policy > User performs an exfiltration activity triggering event"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-configure"
    api: null
    note: "Also offered in the Data leaks by priority users template. Only indicators turned on for the organisation can be selected."
  - governs: "Whether Purview pay-as-you-go billing, which these indicators require, is linked to an Azure subscription"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Account details"
      docs: "https://learn.microsoft.com/purview/purview-payg-subscription-based-enablement"
    api: null
    note: "Global Administrator only. The subscription and resource group are chosen here. Learn marks this enablement flow as preview."
  - governs: "Which third-party cloud apps are connected to Defender for Cloud Apps, as cloud storage and service indicators need"
    scope: "tenant"
    ui:
      surface: "Microsoft Defender portal"
      path: "Settings > Cloud Apps > Connected apps > App Connectors > +Connect an app"
      docs: "https://learn.microsoft.com/defender-cloud-apps/protect-dropbox"
    api: null
    note: "Each app has its own connector guide (Box, Dropbox, Google Workspace, AWS)."
  - governs: "Who can configure Insider Risk Management policies and settings"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and groups > Roles groups > Insider Risk Management > Edit > Choose users"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"Insider Risk Management\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "The Insider Risk Management Admins role group can also configure policies and settings."
  - governs: "Pay-as-you-go processing used by Insider Risk Management indicators"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Insider Risk Management > Reports > Pay-as-you-go"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-reports"
    api: null
    note: "Reporting only."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-07-07T23:01:01"
changes:
  - date: "2026-11-26"
    note: "New briefing: cloud storage, cloud service and Microsoft Fabric indicators as triggers in Data leaks policies, with pay-as-you-go meter and controls."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 71 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 71
  confirmed: 67
  unconfirmed: 0
  contradicted: 4
  attempts: 1
  hash: "78148bedaf01ae113aed76cd553aac3a"
---

## What's changing

Microsoft Purview Insider Risk Management (IRM) lets administrators use cloud storage, cloud service and Microsoft Fabric indicators as **triggering events** in Data leaks policies. A triggering event decides when a user enters a policy's scope; the policy's other indicators then set that user's risk score.

The roadmap item names the indicators: cloud storage apps (Box, Dropbox, Google Drive), cloud services (Azure, Amazon Web Services) and Microsoft Fabric (Power BI, Lakehouse). Microsoft Learn already documents these as built-in policy indicators. The cloud storage indicators detect discovery, collection, exfiltration and deletion in Google Drive, Box and Dropbox. The cloud service indicators cover Amazon S3 and Azure (SQL Server and Storage), including disabling trace logs and changing SQL Server firewall rules. The Fabric indicators cover viewing and downloading Power BI reports, downgrading or removing sensitivity labels on Power BI or Lakehouse assets, and sharing Lakehouse data outside the organisation.

In the policy wizard, the *Data leaks* and *Data leaks by priority users* templates offer a **User performs an exfiltration activity triggering event** option, where the admin selects one or more listed indicators. An indicator that is not turned on for the organisation cannot be selected until it is turned on. Microsoft Learn does not name the cloud and Fabric indicators in its list of trigger options at the time of writing (November 2026), so that they appear there rests on the roadmap item.

The roadmap item is **Launched**, with preview targeted for June CY2026 and general availability for July CY2026, in the Worldwide (Standard Multi-Tenant) cloud. The Learn "Get started" page still labels the cloud indicators "(preview)".

## Why it matters

Until a trigger fires, a Data leaks policy does not score a user. Using activity in Box, Google Drive, AWS or a Power BI workspace as the trigger lets an insider risk team start scoring on the place data actually leaves, rather than waiting for a high-severity DLP alert in Exchange, SharePoint or OneDrive. It also widens what the IRM team watches about named people into third-party clouds and Fabric, which matters to works councils and privacy reviews.

The cost decision comes first. These indicators only work with pay-as-you-go billing, and each 10,000 user activities processed is a billable unit. A trigger on a busy activity, such as viewing Power BI reports, can bring many users into scope and raise processing. If nobody acts, nothing changes: the indicators stay off until an admin selects them.

## Risk assessment

**Data exposure**
- Cloud storage and cloud service indicators read activity that Microsoft Defender for Cloud Apps collects from connected Box, Dropbox, Google Workspace, AWS and Azure accounts. Connecting Box or Dropbox, for example, asks the service's admin to allow Defender for Cloud Apps access to team information and the activity log.
- Activity is scored for users in policy scope and shown to IRM analysts and investigators; usernames are pseudonymised by default.

**Security & identity**
- Who can turn indicators on and set triggers is decided by the *Insider Risk Management* and *Insider Risk Management Admins* role groups (see controls table).
- Enabling pay-as-you-go is limited to the Global Administrator role.

**Autonomy & actions**
- No change from this feature itself: a trigger brings a user into scope for risk scoring and alerts, under the policy's existing settings.

**Change & support**
- A broad trigger brings many users into scope and adds alert volume for the analyst team, as well as processing units.
- Learn names pay-as-you-go as the requirement for Fabric indicators; whether a Fabric trigger needs further set-up is open.

## Cost and licensing

**Licence.** The Microsoft Purview service description lists Insider Risk Management as included in Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW, Microsoft Defender + Purview Suite FLW and the Microsoft 365 E5/A5/F5/G5 Insider Risk Management add-on.

**Meter.** The policy indicators page says each of the cloud storage, cloud service and Microsoft Fabric indicators requires pay-as-you-go billing to be enabled. The Microsoft Purview billing models page says IRM indicators for Box, Dropbox, Google Drive, AWS, Azure and Microsoft Fabric (Power BI) are billed on **data security processing units**, measured daily, where one unit is the compute to process 10,000 user activities. Charges land on the Azure subscription linked to Purview and appear in the Azure portal under **Cost Management + Billing**. The billing models page points to the Azure pricing page for the rate.

**Watching spend.** IRM has a **Pay-as-you-go** report under **Reports**, and Purview has a **Usage center** (controls table). Learn documents reporting for this meter, not a setting that stops processing at a set amount.

**Indirect costs.** Admin time to set up and maintain a Defender for Cloud Apps app connector for each third-party service, and analyst time for the extra alerts.

## Scope

- **Policies:** the *Data leaks* and *Data leaks by priority users* templates, the only templates whose triggering events can be customised.
- **Services:** Box, Dropbox, Google Drive, Amazon S3, Azure (SQL Server and Storage), Microsoft Fabric (Power BI, Lakehouse).
- **Prerequisites:** pay-as-you-go billing linked to an Azure subscription and resource group in the same tenant; for cloud storage and cloud service indicators, the apps connected in Microsoft Defender for Cloud Apps.
- **Roles:** *Insider Risk Management* or *Insider Risk Management Admins* role group to configure policies and settings; Global Administrator to enable pay-as-you-go.
- **Cloud:** Worldwide (Standard Multi-Tenant), per the roadmap item. **Platform:** Web.

## Governance guidance

### Before rollout
- Agree with privacy, HR and legal which third-party clouds and Fabric workloads the IRM team may score users on.
- Confirm with the Global Administrator whether Purview pay-as-you-go is already linked to an Azure subscription, and who owns that subscription's budget.
- Check in the Microsoft Defender portal which of Box, Dropbox, Google Workspace and AWS are already connected as app connectors.
- Review membership of the Insider Risk Management and Insider Risk Management Admins role groups.

### At rollout
- Turn on only the cloud storage, cloud service or Fabric indicators you intend to use under Insider Risk Management > Settings > Policy indicators.
- Select the trigger indicators on the Triggers for this policy page of a Data leaks policy, starting with a small set of users.
- Choose custom thresholds for trigger indicators on high-volume activity, such as viewing Power BI reports.

### After rollout
- Check the Insider Risk Management Pay-as-you-go report weekly in the first month for processing growth.
- Turn off indicators for apps you do not need in Policy indicators settings.
- Review alert volume from the new triggers with the analyst team and adjust thresholds.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which cloud storage, cloud service and Microsoft Fabric indicators are available to insider risk policies</strong><br><small>Tenant</small><br><small class="controls__note">Applies to all insider risk policies. Needs the Insider Risk Management or Insider Risk Management Admins role group.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Insider Risk Management › Settings › Policy indicators <a href="https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which indicators bring users into scope of a Data leaks policy</strong><br><small class="controls__note">Also offered in the Data leaks by priority users template. Only indicators turned on for the organisation can be selected.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Insider Risk Management › Policies › Create policy › Policy template › Data leaks › Triggers for this policy › User performs an exfiltration activity triggering event <a href="https://learn.microsoft.com/purview/insider-risk-management-configure" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Purview pay-as-you-go billing, which these indicators require, is linked to an Azure subscription</strong><br><small>Tenant</small><br><small class="controls__note">Global Administrator only. The subscription and resource group are chosen here. Learn marks this enablement flow as preview.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Account details <a href="https://learn.microsoft.com/purview/purview-payg-subscription-based-enablement" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which third-party cloud apps are connected to Defender for Cloud Apps, as cloud storage and service indicators need</strong><br><small>Tenant</small><br><small class="controls__note">Each app has its own connector guide (Box, Dropbox, Google Workspace, AWS).</small></td><td data-label="Admin UI"><strong>Microsoft Defender portal</strong><br>Settings › Cloud Apps › Connected apps › App Connectors › +Connect an app <a href="https://learn.microsoft.com/defender-cloud-apps/protect-dropbox" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can configure Insider Risk Management policies and settings</strong><br><small>Tenant</small><br><small class="controls__note">The Insider Risk Management Admins role group can also configure policies and settings.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and groups › Roles groups › Insider Risk Management › Edit › Choose users <a href="https://learn.microsoft.com/purview/insider-risk-management-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;Insider Risk Management&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Pay-as-you-go processing used by Insider Risk Management indicators</strong><br><small>Tenant</small><br><small class="controls__note">Reporting only.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Insider Risk Management › Reports › Pay-as-you-go <a href="https://learn.microsoft.com/purview/insider-risk-management-reports" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Turning an indicator on in **Policy indicators** makes it available to every insider risk policy; a trigger applies only in the Data leaks policies where it is selected. Triggers are configurable only in the *Data leaks* and *Data leaks by priority users* templates. The Defender for Cloud Apps connection is the documented prerequisite for cloud storage and cloud service indicators; Learn names pay-as-you-go as the prerequisite for Fabric indicators. Members of these role groups who are scoped by admin units can still configure global settings, which apply tenant-wide, while their policy configuration is limited to their scope. Role group changes can take up to 30 minutes to apply.

## Open questions

- Will Microsoft Learn list the cloud storage, cloud service and Fabric indicators among the options for **User performs an exfiltration activity triggering event**, and drop the "(preview)" label now the roadmap item is Launched? Watch the IRM policy indicators page.
- Do Microsoft Fabric indicators need anything beyond pay-as-you-go, such as Power BI audit settings, before they can fire as triggers?
- Does a trigger indicator process activity for every user in the policy, or only once a user is in scope, and how does that affect the processing-unit count?
- Will Microsoft offer a spending limit for the IRM processing-unit meter, rather than reporting only?

<!-- rationale
risk: Low. Global indicators are disabled by default and a trigger only applies once an admin selects it in a Data leaks policy, so nothing changes in a tenant until someone chooses it.
cost: Variable. These indicators are billed on the Microsoft Purview data security processing unit meter, one unit per 10,000 user activities processed, through a linked Azure subscription.
impact: Low. Insider risk administrators and analysts are the people who see the new trigger options and the alerts they raise.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Why it matters: first sentence / behaviour: Until a trigger fires, a Data leaks policy does not score a user. | Found: If you add a user to an Insider Risk Management policy but the user doesn't have a triggering event, the policy doesn't evaluate the user's activity unless you manually add the user in the Users dashboard. | Fix: Replace the sentence with: 'A policy does not evaluate a user without a triggering event unless an administrator manually adds the user in the Users dashboard.' This exception is documented at https://learn.microsoft.com/purview/insider-risk-management-policy-templates#policy-template-prerequisites-and-triggering-events. | Source: https://learn.microsoft.com/purview/insider-risk-management-policy-templates
- [contradicted, blocker] controls[0].note / role: Configuring indicators needs membership in the Insider Risk Management or Insider Risk Management Admins role group. | Found: Members of the following roles can assign users to Insider Risk Management role groups and have the same solution permissions included with the Insider Risk Management Admins role group: | Fix: Replace 'Needs the Insider Risk Management or Insider Risk Management Admins role group' with 'Members of the Insider Risk Management and Insider Risk Management Admins role groups can configure policies and settings.' Use the same non-exclusive wording for the Security & identity and Scope role statements. The permissions page also grants these solution permissions to Global Administrator, Compliance Administrator, and the Microsoft Purview Organization Management and Compliance Administrator role groups. | Source: https://learn.microsoft.com/purview/insider-risk-management-permissions
- [contradicted, blocker] controls[1].ui / admin-path: The printed creation route goes directly from Policy template > Data leaks to Triggers for this policy. | Found: On the Policy template page, choose a policy category and then select the template for the new policy. I don't want to specify priority content right now. Select this option to skip the priority content detail pages in the workflow. | Fix: Replace controls[1].ui.path with 'Insider Risk Management > Policies > Create policy > Policy template > policy category > Data leaks > Content to prioritize > I don't want to specify priority content right now > Triggers for this policy > User performs an exfiltration activity triggering event'. Add to the note: 'This route skips optional priority content; complete the name fields and choose the policy user scope on the intervening wizard pages.' The category choice and priority-content branch are documented at https://learn.microsoft.com/purview/insider-risk-management-configure#step-6-required-create-an-insider-risk-management-policy. | Source: https://learn.microsoft.com/purview/insider-risk-management-configure
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Data exposure, Box connection / behaviour: Connecting Box asks its admin to permit access to team information and the activity log. | Found: Box asks you if you want to allow Defender for Cloud Apps access to your team information, activity log, and perform activities as a team member. | Fix: Add https://learn.microsoft.com/defender-cloud-apps/protect-box to sources for the Box permission statement. | Source: https://learn.microsoft.com/defender-cloud-apps/protect-box
- [supported, minor] Scope: Policies; Governance controls / behaviour: Only Data leaks and Data leaks by priority users have customisable triggering events. | Found: You can only modify triggering events for policies created from the Data leaks or Data leaks by priority users templates. Policies created from all other templates don't have customizable triggering indicators or events. | Fix: Replace the broad 'only' statements with: 'The Data leaks and Data leaks by priority users templates offer the User performs an exfiltration activity triggering event option.' The cited Get started page also documents Communication Compliance and HR event choices for Data leaks by risky users and Security policy violations by risky users at https://learn.microsoft.com/purview/insider-risk-management-configure#step-6-required-create-an-insider-risk-management-policy. | Source: https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators
- [supported, minor] controls[2].ui / admin-path: Settings > Account details in the Microsoft Purview portal is the entry to subscription-based pay-as-you-go enablement. | Found: Select Get Started in the ribbon menu to start the process. This can also be done from Settings > Account details. | Fix: The route correctly reaches the enablement page but stops before the subscription and resource-group selections. Keep the path and narrow the note to: 'Entry to the preview subscription-based enablement flow for organisations not using classic Azure Purview data governance pricing. Select an active Azure subscription, then a resource group in that subscription.' | Source: https://learn.microsoft.com/purview/purview-payg-subscription-based-enablement
- [supported, minor] controls[3].ui / admin-path: The Defender portal route to app connectors is Settings > Cloud Apps > Connected apps > App Connectors > +Connect an app. | Found: In the Microsoft Defender Portal, select Settings. Then choose Cloud Apps. Under Connected apps, select App Connectors. In the App connectors page, select +Connect an app, followed by Dropbox. | Fix: The route correctly reaches the connector chooser. Append ' > app' to controls[3].ui.path and replace its note with: 'Choose the app, then complete its connector guide; the Dropbox guide continues through Connect Dropbox and provider authorisation. The general connect-apps page also documents Cloud Apps > Connected apps > Connect an app or Add a new connector.' | Source: https://learn.microsoft.com/defender-cloud-apps/protect-dropbox
- [contradicted, minor] Governance guidance: At rollout, custom thresholds; controls table / consistency: The checklist directs administrators to choose custom trigger thresholds, but the controls table stops at selecting the triggering event. | Found: Choose custom thresholds for trigger indicators on high-volume activity ... controls[1] ends at User performs an exfiltration activity triggering event; no row covers custom thresholds. | Fix: Remove the checklist bullet 'Choose custom thresholds for trigger indicators on high-volume activity, such as viewing Power BI reports' and remove 'and adjust thresholds' from the final checklist bullet. This removes the unmatched configuration instructions without adding control rows.
-->
