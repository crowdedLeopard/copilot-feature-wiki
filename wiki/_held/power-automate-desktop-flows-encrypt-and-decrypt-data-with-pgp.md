---
title: "Power Automate desktop flows: encrypt and decrypt files with PGP"
slug: "power-automate-desktop-flows-encrypt-and-decrypt-data-with-pgp"
roadmapId: 576786
topic: "power-platform"
products: ["Power Automate"]
summary: "Desktop flows gain PGP actions that encrypt a file with a public key and decrypt it with a private key and passphrase. Nothing runs until a maker adds them to a flow; admins can govern them through data policies."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "July CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "The PGP Cryptography actions page lists no licence, prerequisite or meter. Not yet published for these actions."
audiences: ["power-platform-admin","security","maker","compliance"]
tags: ["power-automate","desktop-flows","encryption","data-policies","dlp","automation"]
sources:
  - title: "Microsoft 365 Roadmap 576786"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576786"
    kind: "roadmap"
  - title: "PGP Cryptography actions"
    url: "https://learn.microsoft.com/power-automate/desktop-flows/actions-reference/pgp"
    kind: "learn"
  - title: "Data loss prevention (DLP) policy creation"
    url: "https://learn.microsoft.com/power-automate/prevent-data-loss"
    kind: "learn"
  - title: "Manage variables and the variables pane"
    url: "https://learn.microsoft.com/power-automate/desktop-flows/manage-variables"
    kind: "learn"
  - title: "Secure your data"
    url: "https://learn.microsoft.com/power-automate/guidance/desktop-flow-coding-guidelines/secure-your-data"
    kind: "learn"
  - title: "\"Expression couldn't be evaluated\" error when using encrypted text"
    url: "https://learn.microsoft.com/troubleshoot/power-platform/power-automate/desktop-flows/error-expression-could-not-be-evaluated"
    kind: "learn"
videos: []
related: ["data-policies","power-automate-credentials-integration-with-delinea-secret-server"]
controls:
  - governs: "Whether desktop flow modules can be classified in a data policy, including the module the PGP actions fall under"
    scope: "tenant"
    ui:
      surface: "Power Platform admin center"
      path: "Settings > Tenant settings > Desktop flow actions in DLP > Show desktop flow actions in DLP policies"
      docs: "https://learn.microsoft.com/power-automate/prevent-data-loss"
    api:
      kind: "powershell"
      call: "$modules = Get-DesktopFlowModules; Add-ConnectorsToPolicy -Connectors $modulesToAdd -PolicyName <policy name> -Classification Blocked"
      docs: "https://learn.microsoft.com/power-automate/prevent-data-loss"
    note: "General control for desktop flow modules: Microsoft has not confirmed that PGP actions are covered by the Cryptography module."
  - governs: "Whether makers mark a variable as sensitive so its value is masked and kept out of run logs"
    scope: "maker"
    ui:
      surface: "Power Automate for desktop (maker)"
      path: "Variables pane > right-click the variable > Mark as sensitive"
      docs: "https://learn.microsoft.com/power-automate/desktop-flows/manage-variables"
    api: null
    note: "Maker-side. Per-variable, not tenant-wide; a general control that Microsoft has not confirmed applies automatically to PGP key and passphrase inputs."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-10-16T19:09:04"
changes:
  - date: "2026-11-17"
    note: "First briefing for this roadmap item, now Launched with a July CY2026 target; covers the PGP actions, the data policy gap and the unpublished licensing."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 66 statements contradicted, 3 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-17"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 66
  confirmed: 60
  unconfirmed: 3
  contradicted: 3
  attempts: 1
  hash: "3c61da24f7ce504bd3eaed85943e7417"
---

## What's changing

Power Automate desktop flows gain a **PGP Cryptography** group of actions that encrypt and decrypt files with the OpenPGP standard. **Encrypt file with PGP** encrypts a file with a recipient's public key, supplied either as a key file or as ASCII-armored text. **Decrypt file with PGP** decrypts a PGP-encrypted file with a private key (file or ASCII-armored text) and an optional passphrase. The Learn page says the group is for exchanging files with external systems and business partners that support PGP.

The encrypt action lets the maker choose the encryption algorithm (AES-256 by default, alongside AES-128, AES-192, Triple DES and CAST5), a compression algorithm and whether to wrap the output in ASCII armor (off by default, so the output is raw binary data). Neither action produces output variables; each writes to the output file path the maker gives. Microsoft Learn describes the actions as working on files; the roadmap text also mentions data payloads, which the Learn page does not describe.

The roadmap item states that the feature is not enabled automatically: a maker adds a PGP encryption or decryption action to a flow and configures the keys and passphrase, and can switch it off by removing the action or controlling execution with conditions. The roadmap record lists the item as Launched, General Availability, Worldwide (Standard Multi-Tenant), platform Web, with a target date of July CY2026.

## Why it matters

This gives makers a built-in way to meet partners' PGP requirements, so fewer flows need custom scripts or third-party tools to handle PGP. The administrative consequence is that private keys, public keys and passphrases now pass through flow definitions and run machines, and the roadmap states that nothing is switched on until a maker uses the actions.

The feature is not a risk to leave alone, but it is worth deciding how your tenant wants makers to handle key material. Microsoft documents no PGP-specific tenant switch at the time of writing (November 2026); the main lever is the data policy for desktop flow modules, which has a gap you should check (see the governance notes).

## Risk assessment

**Data exposure**

- The decrypt action takes a private key as a file path or as ASCII-armored text, and an optional passphrase. A key pasted as text becomes part of the flow definition, so decide whether makers may do that or must point to a key file in a controlled location.
- The actions read and write whole files at paths the maker sets. They produce no output variables; the result is the output file at the path the maker sets.
- Desktop flow logs can capture action details. Microsoft documents that the values of variables marked as sensitive are masked in the designer and not stored in run logs; the PGP page does not say whether the key or passphrase inputs are treated that way automatically, so mark them as sensitive variables.

**Security & identity**

- The passphrase field accepts "Direct encrypted input" or a text value. Microsoft documents that direct inputs are encrypted with the local machine's Data Protection API and cannot be decrypted on another machine, so confirm how a direct encrypted passphrase behaves when the flow runs on a different machine before you rely on it.
- A public key supplied by a maker decides who can read the output. A wrong or outdated key produces a file the partner cannot decrypt; the Invalid PGP key exception covers keys that cannot be parsed, not keys that belong to the wrong recipient.

**Autonomy & actions**

- The actions run only as steps of a desktop flow that a maker has built; the roadmap describes no autonomous behaviour beyond that, so the exposure follows whoever can run or edit the flow.

**Change & support**

- Desktop flow modules added to a data policy are evaluated against existing flows, which are suspended if non-compliant. Check that a policy change aimed at PGP does not suspend unrelated flows.
- The Learn page lists the exceptions a flow can raise (Failed to encrypt file with PGP, Key file not found, Invalid PGP key, Incorrect passphrase and so on); makers should handle them so that a failed decryption does not leave a partner file unprocessed.

## Cost and licensing

The PGP Cryptography actions page names no licence, prerequisite or meter, so the licensing for these actions is not yet published. Do not assume either that a licence is required or that none is: confirm with the licence you already hold for the desktop flows that will use them.

The costs the sources show are indirect: maker time to build and test flows, admin time to set data policy rules, and the work of managing keys and passphrases outside the flow. No Copilot Credit or other usage meter is documented for these actions at the time of writing (November 2026).

## Scope

The roadmap record lists Power Automate, Worldwide (Standard Multi-Tenant), General Availability and platform Web. It lists no other cloud, and that listing is not a statement that the actions are unavailable elsewhere. Microsoft Learn documents the actions in the desktop flows action reference.

The roadmap's "Enabled for" line says admins and makers, and the description says the feature is not enabled automatically and that makers add the actions themselves. Learn names no role or prerequisite for using the actions. The roadmap describes no change to the user interface beyond the actions appearing in the action picker.

## Governance guidance

### Before rollout

- Decide who may handle PGP keys in flows, and whether private keys may be pasted as text or must be supplied as key files.
- Check your data policies for the desktop flow modules in scope. Microsoft documents that modules not explicitly placed in a policy group are not blocked, even if the default group is Blocked.
- Confirm in a test environment which data policy module the PGP actions appear under, and write down the answer for your makers.

### At rollout

- Ask makers to mark private key and passphrase variables as sensitive and to avoid hardcoding them in action properties.
- Publish an approved pattern for where partner public keys come from and who rotates them.
- Test a decrypt flow on the machine that will run it, including a passphrase entered as direct encrypted input, before you move it to production.

### After rollout

- Review which flows use the PGP actions and which machines run them.
- Watch for suspended desktop flows after any data policy change that touches desktop flow modules.
- Re-read the PGP Cryptography actions page after licensing is published and update your budget notes.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether desktop flow modules can be classified in a data policy, including the module the PGP actions fall under</strong><br><small>Tenant</small><br><small class="controls__note">General control for desktop flow modules: Microsoft has not confirmed that PGP actions are covered by the Cryptography module.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Settings › Tenant settings › Desktop flow actions in DLP › Show desktop flow actions in DLP policies <a href="https://learn.microsoft.com/power-automate/prevent-data-loss" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>$modules = Get-DesktopFlowModules; Add-ConnectorsToPolicy -Connectors $modulesToAdd -PolicyName &lt;policy name&gt; -Classification Blocked</code> <a href="https://learn.microsoft.com/power-automate/prevent-data-loss" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether makers mark a variable as sensitive so its value is masked and kept out of run logs</strong><br><small>Maker</small><br><small class="controls__note">Maker-side. Per-variable, not tenant-wide; a general control that Microsoft has not confirmed applies automatically to PGP key and passphrase inputs.</small></td><td data-label="Admin UI"><strong>Power Automate for desktop (maker)</strong><br>Variables pane › right-click the variable › Mark as sensitive <a href="https://learn.microsoft.com/power-automate/desktop-flows/manage-variables" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The data policy controls are general controls for desktop flow modules. The data policy page lists a **Cryptography** module and no PGP module, and the PGP page presents PGP as its own action group, so Microsoft has not confirmed which module the PGP actions fall under. The data policy page says policies can classify modules and individual module actions as Business, Non-business or Blocked.

The **Show desktop flow actions in DLP policies** tenant setting must be on before desktop flow modules appear in a policy, and the page says it cannot be changed once enabled. Admins who do not turn it on can use the PowerShell route on the same page.

The sensitive-variable setting is made by the maker in the flow designer. It masks values during debugging and keeps them out of run logs, but Microsoft documents that the value is visible when you send it outside desktop flows or display it with the **Display message** action. No PGP-specific tenant switch is documented at the time of writing (November 2026).

## Open questions

- Which licence do makers and the run machines need for the PGP actions? Watch the PGP Cryptography actions page and the Power Automate licensing pages.
- Do the PGP actions sit under the **Cryptography** module in data policies, or as a separate module? Watch the desktop flow data policy page.
- Are the private key and passphrase inputs masked in desktop flow action logs without marking variables as sensitive?
- The roadmap lists platform Web for a desktop flows feature; which platforms and Power Automate for desktop versions support the actions, and are there file size limits? Watch the Learn page.

<!-- rationale
risk: Medium. Nothing happens until a maker adds the actions, but a flow then handles private keys and passphrases, and Microsoft documents no PGP-specific admin switch.
cost: Low. The PGP actions page names no licence or meter, so licensing is not yet published; the cost the sources show is maker and admin time.
impact: Low. Only makers who add a PGP action to a desktop flow notice it; the roadmap says the actions appear in the action picker with no other UI change.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Security & identity / behaviour: A wrong or outdated public key produces a file the partner cannot decrypt. | Found: Searched: "PGP" "Invalid PGP key" recipient expired. Opened PGP Cryptography actions. It requires the corresponding private key, but does not state that an outdated key necessarily prevents a partner from decrypting. | Fix: Replace 'A wrong or outdated key produces a file the partner cannot decrypt' with advice: 'Verify the partner's public key before encryption.'
- [unsupported, major] Risk assessment: Security & identity / behaviour: Invalid PGP key covers unparseable keys but not keys belonging to a different recipient. | Found: Searched: "PGP" "Invalid PGP key" recipient expired. Opened both PGP action exception tables; they say the key 'isn't valid or couldn't be parsed' and do not define recipient-validation behavior. | Fix: Replace the clause with: 'Microsoft describes the Invalid PGP key exception as indicating that the specified key is not valid or could not be parsed.'
- [contradicted, blocker] controls[0].api; Governance controls table / command: The printed Get-DesktopFlowModules and Add-ConnectorsToPolicy sequence supplies desktop-flow modules to the policy's Blocked group. | Found: # Step #3: Convert the list of Power Automate for desktop flow modules to a format that can be added to the policy | Fix: The sequence assigns $modules but passes an uninitialized $modulesToAdd, omitting the documented connector-object conversion. Replace both printed copies with: $modules = Get-DesktopFlowModules; $modulesToAdd = @(); foreach ($module in $modules) { $modulesToAdd += [pscustomobject]@{ id = $module.id; name = $module.Properties.displayName; type = $module.type } }; Add-ConnectorsToPolicy -Connectors $modulesToAdd -PolicyName '<policy GUID>' -Classification Blocked. Keep the existing docs URL, whose complete example prepares these id/name/type objects before the call. | Source: https://learn.microsoft.com/power-automate/prevent-data-loss
- [unsupported, blocker] summary / applicability: Admins can govern the PGP actions through data policies. | Found: Searched: Power Automate PGP Cryptography DLP module tenant disable switch sensitive passphrase automatically. Opened PGP Cryptography actions and prevent-data-loss; neither identifies PGP's DLP module or expressly confirms coverage, as the body itself acknowledges. | Fix: Replace the summary's 'admins can govern them through data policies' with 'admins should review general desktop-flow data policies, whose PGP module mapping Microsoft has not confirmed'. Retain the qualified general-control row and its existing note.
- [contradicted, blocker] front matter: licensing.model and notes; Cost and licensing; Open questions; rationale: cost / licensing: Licensing for these desktop-flow actions is unpublished, so the licensing model is unknown. | Found: With a Power Automate Premium user license, users gain the full set of capabilities for cloud and desktop automation | Fix: Set licensing.model to 'included'. Replace the broad unpublished-licensing statements, including the cost rationale and the first Open questions bullet, with: 'Power Automate Premium includes the full set of desktop automation capabilities. For unattended desktop flows, Microsoft documents Power Automate Process licensing or pay-as-you-go. The PGP reference does not state a separate PGP licence.' Cite https://learn.microsoft.com/power-platform/admin/power-automate-licensing/types. Retain the narrow observation that the PGP action page itself lists no licence; do not infer unpublished platform licensing from that omission. | Source: https://learn.microsoft.com/power-platform/admin/power-automate-licensing/types
- [contradicted, blocker] Cost and licensing / cost: No Copilot Credit or other usage meter is documented for running these actions. | Found: Desktop flow runs in a pay-as-you-go environment are charged as follows: | Fix: Replace the blanket no-meter sentence with: 'The PGP action reference lists no PGP-specific usage meter. Desktop-flow runs can be billed under the Power Automate flow runs (preview) meter when pay-as-you-go applies.' Cite https://learn.microsoft.com/power-platform/admin/pay-as-you-go-meters. Qualify 'The costs the sources show are indirect' as 'Incremental implementation costs include maker time, admin time and key management; existing desktop-flow licensing and applicable flow-run billing still apply.' A low rating can describe incremental implementation work, not an exemption from platform billing. | Source: https://learn.microsoft.com/power-platform/admin/pay-as-you-go-meters
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].governs; Risk assessment: Data exposure; Governance controls / behaviour: Microsoft documents that sensitive-variable values are not stored in run logs. | Found: The flow designer masks the values of sensitive variables during debugging, and it doesn't store them in flow run logs. | Fix: Qualify the log-protection statement and row note: 'For portal run history, the variables reference specifies sign-in with an organization premium account. Microsoft's security-update notice documents an exception in versions 2.62 through 2.66 when global sensitive variables are used in local subflows.' Cite https://learn.microsoft.com/power-automate/desktop-flows/manage-variables#sensitive-variables and add https://learn.microsoft.com/troubleshoot/power-platform/power-automate/desktop-flows/sensitive-variables-security-update to sources. These pages qualify the unconditional statement on Secure your data. | Source: https://learn.microsoft.com/power-automate/guidance/desktop-flow-coding-guidelines/secure-your-data
-->
