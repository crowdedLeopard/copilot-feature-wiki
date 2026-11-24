---
title: "Microsoft Intune: custom compliance for macOS using a discovery script and JSON file"
slug: "microsoft-intune-macos-custom-compliance"
roadmapId: 553222
topic: "governance"
products: ["Microsoft Intune"]
summary: "Intune plans custom compliance for macOS: your own script and JSON rules decide whether a Mac is compliant. Opt-in per policy; Microsoft Learn already describes it, but the roadmap item is still In development."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Mac"]
targetDate: "May CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "The Learn page for creating compliance policies lists a Microsoft Intune subscription as the licensing requirement; Microsoft Entra ID P1 or P2 is needed only if you use Conditional Access. No licence or price specific to custom compliance is published."
audiences: ["m365-admin","security","compliance"]
tags: ["intune","device-compliance","custom-compliance","macos","conditional-access","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 553222"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=553222"
    kind: "roadmap"
  - title: "Custom compliance settings in Microsoft Intune"
    url: "https://learn.microsoft.com/intune/device-security/compliance/custom-settings"
    kind: "learn"
  - title: "Create a compliance policy in Microsoft Intune"
    url: "https://learn.microsoft.com/intune/device-security/compliance/create-policy"
    kind: "learn"
  - title: "Custom compliance discovery scripts for Microsoft Intune"
    url: "https://learn.microsoft.com/intune/device-security/compliance/create-custom-script"
    kind: "learn"
  - title: "Custom compliance JSON files for Microsoft Intune"
    url: "https://learn.microsoft.com/intune/device-security/compliance/create-custom-json"
    kind: "learn"
  - title: "Create deviceComplianceScript"
    url: "https://learn.microsoft.com/graph/api/intune-devices-devicecompliancescript-create?view=graph-rest-beta"
    kind: "learn"
  - title: "macOSCompliancePolicy resource type"
    url: "https://learn.microsoft.com/graph/api/resources/intune-deviceconfig-macoscompliancepolicy?view=graph-rest-beta"
    kind: "learn"
  - title: "Built-in role permissions for Microsoft Intune"
    url: "https://learn.microsoft.com/intune/fundamentals/role-based-access-control/ref-built-in-roles"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Which discovery script a macOS custom compliance policy can use"
    scope: "tenant"
    ui:
      surface: "Microsoft Intune admin center"
      path: "Endpoint security > Device compliance > Scripts > Add > macOS"
      docs: "https://learn.microsoft.com/intune/device-security/compliance/create-custom-script"
    api:
      kind: "graph"
      call: "POST /beta/deviceManagement/deviceComplianceScripts"
      docs: "https://learn.microsoft.com/graph/api/intune-devices-devicecompliancescript-create?view=graph-rest-beta"
    note: "The reference describes detectionScriptContent as a PowerShell script and does not mention macOS. Beta endpoint. On macOS, the upload page sets the logged-on credentials, signature check and notification options."
  - governs: "Whether a macOS compliance policy requires custom compliance, with its script and JSON rules file"
    scope: "group"
    ui:
      surface: "Microsoft Intune admin center"
      path: "Devices > Manage devices > Compliance > Create policy > macOS > Compliance settings > Add settings > Custom Compliance > Require Custom Compliance"
      docs: "https://learn.microsoft.com/intune/device-security/compliance/create-policy"
    api: null
    note: "Assignments are set on the policy's Assignments tab. Role permission: Device compliance policies (Create, Update, Assign)."
confidence: "high"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-01-30T00:15:33"
changes:
  - date: "2026-11-24"
    note: "First briefing for roadmap item 553222: macOS custom compliance in Intune, including the gap between the In development roadmap status and the Learn pages that already describe it."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 74 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 74
  confirmed: 69
  unconfirmed: 2
  contradicted: 3
  attempts: 1
  hash: "099a6cdaa657aa9726864f16fe732717"
---

## What's changing

Intune custom compliance lets an administrator define their own compliance rules for managed devices with two files: a discovery script that runs on the device and reports values, and a JSON file that says which values count as compliant. The roadmap item describes macOS custom compliance as a feature that "mirrors Windows and Linux custom compliance experience". Microsoft Learn describes custom compliance as using a JSON file that defines the settings and compliant values, plus a platform-specific script that detects them and reports the results to Intune.

Microsoft Learn already documents macOS in this experience. The custom compliance page lists macOS as a supported platform, and the create-policy page gives the macOS steps: in the compliance policy, add the **Custom Compliance** setting, switch **Require Custom Compliance** to **True**, select a previously uploaded discovery script and add the JSON rules file. Each compliance policy takes one script, and each script can discover several settings. Intune validates the JSON when you add it and then shows the rules in a table.

A macOS discovery script is a Bash script with a valid shebang line, saved as UTF-8 without a BOM, that returns exit code 0 on success. When you upload it you choose whether it runs with the logged-on user's credentials, whether Intune enforces a script signature check and whether notifications are hidden on the device. The JSON file can hold up to 100 rules and 100 KB, and each rule can carry remediation text shown to users in the Company Portal.

The roadmap record gives the status as In development, with a target of May CY2026, which has passed at the time of writing (24 November 2026), and lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. The Learn custom compliance page carries a note that "macOS custom compliance for special clouds will be available soon". Treat the roadmap dates as targets and confirm the status in your tenant before you rely on it.

## Why it matters

Custom compliance lets you base macOS compliance on facts the built-in policy templates do not check, such as the version of an installed management agent, without waiting for Intune to add a setting. Learn says custom settings can be used for Conditional Access decisions in the same way as built-in settings, and that together they form a compound rule set affecting the device compliance state. A new rule therefore has the same reach as any other compliance rule: it can change which Macs are allowed to reach resources protected by Conditional Access.

If nobody acts, nothing is added to your Mac compliance policies: the Learn steps show custom settings as an optional step that an administrator switches on in a policy. The decision for most tenants is whether any current macOS requirement, now handled by manual checks or by separate tooling, is worth moving into a policy you can see and report on in Intune.

## Risk assessment

**Data exposure**

- The discovery script runs on each targeted Mac and returns the values it finds to Intune, so anything your script prints becomes data held in Intune compliance reports. Learn shows these per-setting results in the Noncompliant devices and settings report. Print only the values the JSON rules need.

**Security & identity**

- A script is code that runs on managed devices. Learn says Intune does not validate scripts for syntax or programmatic errors, so review and test them before assignment. The upload settings include **Enforce script signature check**, which requires a valid signature on the script.
- The upload settings also let you run the script with the logged-on user's credentials. Choose this deliberately, because it decides which account the script runs as.

**Autonomy & actions**

- Noncompliance can trigger the policy's actions for noncompliance, which can mark the device noncompliant, send email, lock the device or retire it. A wrong rule combined with those actions affects many devices at once, so start with a pilot group.

**Change & support**

- A bad script or rule surfaces as a compliance error rather than a clear failure. Learn lists error codes 65007 (script returned failure), 65008 (setting missing in the script result), 65009 (invalid JSON for the discovered setting) and 65010 (invalid datatype), and notes that discovery script output is limited to 2048 characters, after which truncated output can cause 65009.
- Learn gives two output limits: 1 MB on the discovery scripts page and 2048 characters on the create-policy page. Keep output well under 2048 characters until Microsoft reconciles them.
- On macOS, a user can open the Company Portal app, select **Devices**, select their device and then select **Check Status** after fixing an issue.

## Cost and licensing

The Learn page for creating compliance policies lists a Microsoft Intune subscription under licensing requirements, and says Microsoft Entra ID P1 or P2 is needed if you use Conditional Access (Intune compliance itself does not require Microsoft Entra ID). The custom compliance page lists device platform requirements and the script and JSON files; it names no separate licence or price for custom compliance, and a price specific to custom compliance is not yet published.

No meter is documented for this feature at the time of writing (November 2026). The practical cost is administrator time: writing and testing a script and JSON file for each policy, since each discovery script can be used with only one compliance policy.

## Scope

**Platforms and clouds.** The roadmap record lists the Mac platform and Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. The Learn custom compliance page says macOS custom compliance for special clouds will be available soon, so check which cloud your tenant is in before planning.

**Prerequisites.** Upload the discovery script to the Microsoft Intune admin center before creating the policy, and have the JSON file ready. Devices must be enrolled in Intune for their compliance status to be visible. Learn lists macOS as a supported platform for custom compliance.

**Limits.** Scripts can be no larger than 1 MB, and on macOS must run in 10 minutes or less. A script can be used with one compliance policy only, and a policy can include one script.

**Roles.** Intune role-based access control has a **Device compliance policies** permission with Assign, Create, Delete, Read, Update and View reports actions. Learn does not name a role specific to custom compliance.

## Governance guidance

### Before rollout

- Confirm in the Microsoft Intune admin center that the **Custom Compliance** setting is offered for macOS policies in your tenant and cloud, because the roadmap status is In development while Learn already documents it.
- List the macOS requirements you want to enforce, and write one JSON rule per requirement with a clear remediation string, including the required `en_US` string.
- Write and test the Bash discovery script on a spare Mac, keeping its output short and returning a value for every SettingName in the JSON file.
- Decide whether the script runs with the logged-on user's credentials and whether to enforce the signature check.

### At rollout

- Upload the script, then create the macOS compliance policy and add custom compliance as described in the controls table.
- Assign the policy to a pilot group first, and set a grace period on the noncompliance action before any lock or retire action.
- Check the Conditional Access policies that depend on compliance before widening the assignment.

### After rollout

- Review the **Noncompliant devices and settings** report in the admin centre, choosing the macOS platform, for rules that fail on many devices.
- Look for error codes 65007 to 65010 and fix the script or JSON file behind them.
- Re-test the script after macOS or agent updates change what it reads.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which discovery script a macOS custom compliance policy can use</strong><br><small>Tenant</small><br><small class="controls__note">The reference describes detectionScriptContent as a PowerShell script and does not mention macOS. Beta endpoint. On macOS, the upload page sets the logged-on credentials, signature check and notification options.</small></td><td data-label="Admin UI"><strong>Microsoft Intune admin center</strong><br>Endpoint security › Device compliance › Scripts › Add › macOS <a href="https://learn.microsoft.com/intune/device-security/compliance/create-custom-script" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/deviceManagement/deviceComplianceScripts</code> <a href="https://learn.microsoft.com/graph/api/intune-devices-devicecompliancescript-create?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a macOS compliance policy requires custom compliance, with its script and JSON rules file</strong><br><small>Group</small><br><small class="controls__note">Assignments are set on the policy's Assignments tab. Role permission: Device compliance policies (Create, Update, Assign).</small></td><td data-label="Admin UI"><strong>Microsoft Intune admin center</strong><br>Devices › Manage devices › Compliance › Create policy › macOS › Compliance settings › Add settings › Custom Compliance › Require Custom Compliance <a href="https://learn.microsoft.com/intune/device-security/compliance/create-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Custom compliance is switched on per policy, not per tenant: Learn documents no tenant-wide switch for it, and a policy with **Require Custom Compliance** left off does not use it. The policy takes effect only for the groups it is assigned to.

The Graph row covers the script object only, and the reference describes its script content as a PowerShell script, so it does not show how a macOS Bash script is held. Adding the script and JSON file to a macOS policy is documented as an admin centre procedure. The macOSCompliancePolicy reference lists no custom compliance property, and Learn documents no call for that step at the time of writing (November 2026). The Intune Graph beta endpoints are subject to more frequent change than v1.0.

## Open questions

- The roadmap item says In development with a May CY2026 target, yet Learn already documents macOS custom compliance steps. Does the item track a different capability or a rollout that has not reached all tenants? Watch the roadmap item and Message center.
- When does macOS custom compliance arrive in GCC, GCC High and DoD, given that the roadmap lists them and Learn says special clouds are coming soon?
- Which output limit applies to macOS discovery scripts: the 1 MB on the discovery scripts page or the 2048 characters on the create-policy page?
- Is there a documented Graph operation for adding a discovery script and JSON file to a macOS compliance policy? Watch the Intune Graph reference.

<!-- rationale
risk: Medium. A script you write runs on managed Macs and its result counts towards compliance, which Conditional Access can act on, so a faulty rule can lock users out; nothing applies until an admin builds a policy.
cost: Low. The only licence Learn lists for compliance policies is a Microsoft Intune subscription, and no custom compliance price is published; the real cost is admin time writing and testing scripts.
impact: Medium. Intune and security administrators build the policies, and users of the Macs they target notice when a rule marks a device noncompliant.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Data exposure / behaviour: Anything the discovery script prints becomes data held in Intune compliance reports. | Found: Searched: Intune custom compliance discovery script output values stored report actual value macOS; "custom compliance" "script" "reports" "output" "stored". Opened custom-settings and create-custom-script; neither states that everything printed is stored in compliance reports. | Fix: Replace 'so anything your script prints becomes data held in Intune compliance reports' with 'and Intune displays per-setting compliance results', as documented at https://learn.microsoft.com/intune/device-security/compliance/custom-settings.
- [contradicted, blocker] Risk assessment: Autonomy & actions; Governance guidance: At rollout / behaviour: The policy can automatically retire a device as an action triggered by noncompliance. | Found: The device isn't retired until an administrator explicitly initiates the retirement process. | Fix: Replace 'lock the device or retire it' with 'lock the device or add it to a retire list; retirement requires an administrator to explicitly initiate and confirm it'. Replace 'before any lock or retire action' with 'before any lock or add-to-retire-list action'. Cite https://learn.microsoft.com/intune/device-security/compliance/configure-noncompliance-actions, which qualifies the create-policy page's abbreviated description. | Source: https://learn.microsoft.com/intune/device-security/compliance/configure-noncompliance-actions
- [unsupported, blocker] controls[0].api; Governance controls table / command: POST /beta/deviceManagement/deviceComplianceScripts is documented automation for the macOS discovery-script upload control. | Found: Searched: "macOS" "custom compliance" "deviceComplianceScripts". Opened deviceComplianceScript-create and macOSCompliancePolicy. The create reference documents detectionScriptContent as PowerShell and does not establish macOS Bash support. | Fix: Set controls[0].api to null and render that side as 'Not yet documented'. Retain the prose explaining that the deviceComplianceScript reference describes PowerShell and does not document how a macOS Bash script is held. Do not present this generic endpoint as verified macOS upload automation.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: Endpoint security > Device compliance > Scripts > Add > macOS reaches the discovery-script creation workflow in Microsoft Intune admin center. | Found: go to Endpoint security > Device compliance > Scripts > Add > (choose your platform). On Basics, provide a Name. On Settings, add your script to Detection script. | Fix: Extend the UI path in the front matter and rendered table to 'Endpoint security > Device compliance > Scripts > Add > macOS > Basics > Settings > Detection script'. The printed route is correct but stops before the script upload field. | Source: https://learn.microsoft.com/intune/device-security/compliance/create-custom-script
- [supported, minor] controls[1].ui; What's changing; Governance controls table / admin-path: The printed Devices > Manage devices > Compliance route reaches Require Custom Compliance in the macOS policy wizard. | Found: Then select Create to open the configuration page. On the Basics tab, enter a Name On the Compliance settings page, select Add settings to open the Settings picker. Select Custom Compliance. Switch Require Custom Compliance to True. | Fix: Use 'Devices > Manage devices > Compliance > Create policy > macOS > Create > Basics > Compliance settings > Add settings > Custom Compliance > Require Custom Compliance' in both copies of the path. The current path omits only passage through Create and Basics, not a platform or policy-type choice. | Source: https://learn.microsoft.com/intune/device-security/compliance/create-policy
- [contradicted, minor] front matter: risk; rationale: risk / consistency: The medium risk rating is based on exposure after administrators opt in rather than exposure if nobody acts. | Found: risk: "medium" Medium. A script you write runs on managed Macs ... nothing applies until an admin builds a policy. Why it matters: If nobody acts, nothing is added to your Mac compliance policies. | Fix: Set risk to 'low' and replace the risk rationale with 'Low. Custom compliance adds no rules until an administrator configures it in a policy.' The schema's low-risk definition explicitly includes nothing happening until an admin opts in.
- [contradicted, minor] Governance guidance: At rollout; Governance controls table / consistency: The checklist tells administrators to configure noncompliance grace periods and check Conditional Access policies, but neither control has a table row. | Found: set a grace period on the noncompliance action ... Check the Conditional Access policies that depend on compliance ... Table rows: discovery script; macOS custom compliance policy. | Fix: The checklist steps about the noncompliance-action grace period and dependent Conditional Access policies have no matching controls-table rows. Remove those two instructions from the checklist to make it agree with the existing table; do not add unverified rows.
-->
